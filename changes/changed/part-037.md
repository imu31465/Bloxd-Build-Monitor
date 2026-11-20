# Changed — Bundle Modifications Report (Part 037 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `37 / 58` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 036](part-036.md) · [Part 038 →](part-038.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/controller.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/controller.js` (851 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a)

#### 696. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8048` → after: `L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7809) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8048)

```diff
-             return "undefined" !== typeof navigator && window.isSecureContext && null !== (zz = navigator.hid) && void 0 !== zz ? zz : null
+             return "undefined" !== typeof navigator && window.isSecureContext && null !== (qq = navigator.hid) && void 0 !== qq ? qq : null
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8057-L8059` → after: `L7818-L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7818-L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7818-L7820) · [Before (L8057-L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8057-L8059)

```diff
-         }), this.publishStatus) : null, nz.k.subscribe(Hz.f, this.syncWithSettings), Mz.g.onConnectedPadsChanged((() => {
-           this.syncWithSettings((0, Hz.g)()), this.publishStatus()
-         })), this.syncWithSettings((0, Hz.g)())
+         }), this.publishStatus) : null, lq.i.subscribe(cq.f, this.syncWithSettings), xq.h.onConnectedPadsChanged((() => {
+           this.syncWithSettings((0, cq.i)()), this.publishStatus()
+         })), this.syncWithSettings((0, cq.i)())
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8071-L8073` → after: `L7832-L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7832-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7832-L7834) · [Before (L8071-L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8071-L8073)

```diff
-           controllers: null !== (zz = null === (uz = this.hid) || void 0 === uz ? void 0 : uz.getConnectedKinds()) && void 0 !== zz ? zz : [],
-           phoneMotion: null !== (bz = null === (Ez = this.phone) || void 0 === Ez ? void 0 : Ez.getState()) && void 0 !== bz ? bz : "off",
-           padConnected: Mz.g.hasConnectedPad()
+           controllers: null !== (qq = null === (Eq = this.hid) || void 0 === Eq ? void 0 : Eq.getConnectedKinds()) && void 0 !== qq ? qq : [],
+           phoneMotion: null !== (gq = null === (Yq = this.phone) || void 0 === Yq ? void 0 : Yq.getState()) && void 0 !== gq ? gq : "off",
+           padConnected: xq.h.hasConnectedPad()
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8094` → after: `L7855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7855) · [Before (L8094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8094)

```diff
-         const bz = (0, Hz.g)();
+         const gq = (0, cq.i)();
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8102` → after: `L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7863) · [Before (L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8102)

```diff
-           return "always" === uz || bz("aiming" === uz ? Ez : nz)
+           return "always" === Eq || gq("aiming" === Eq ? Yq : lq)
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8105` → after: `L7866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7866) · [Before (L8105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8105)

```diff
-           isHeld: zz => tz.b.isButtonHeld(zz),
+           isHeld: qq => Aq.c.isButtonHeld(qq),
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8109-L8110` → after: `L7870-L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7870-L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7870-L7871) · [Before (L8109-L8110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8109-L8110)

```diff
-           QJ: -zz.yawDeg * uz * pz,
-           eJ: -zz.pitchDeg * uz * pz
+           VJ: -qq.yawDeg * Eq * Bq,
+           dJ: -qq.pitchDeg * Eq * Bq
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8132` → after: `L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7893) · [Before (L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8132)

```diff
-         return (0, iz.g)(az, uz), (0, Ez.useEffect)((() => {
+         return (0, Oq.f)(Mq, Eq), (0, Yq.useEffect)((() => {
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8137` → after: `L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7898) · [Before (L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8137)

```diff
-   8534: (zz, uz, bz) => {
+   8829: (qq, Eq, gq) => {
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8140-L8143` → after: `L7902-L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7902-L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7902-L7904) · [Before (L8140-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8140-L8143)

```diff
-       G: () => fz,
-       d: () => rz,
-       g: () => tz,
-       j: () => Ez,
+       c: () => Qq,
+       f: () => Aq,
+       i: () => Yq,
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8145-L8149` → after: `L7906-L7910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7906-L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7906-L7910) · [Before (L8145-L8149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8145-L8149)

```diff
-       p: () => Hz,
-       s: () => Oz,
-       v: () => Xz,
-       x: () => Kz,
-       y: () => Nz
+       n: () => cq,
+       o: () => uq,
+       q: () => Hq,
+       u: () => dq,
+       w: () => tq
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8199` → after: `L7960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR7960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L7960) · [Before (L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8199)

```diff
-         return null !== (bz = null === (Ez = lz.find((bz => bz.vendorId === zz && bz.productId === uz))) || void 0 === Ez ? void 0 : Ez.kind) && void 0 !== bz ? bz : null
+         return null !== (gq = null === (Yq = mq.find((gq => gq.vendorId === qq && gq.productId === Eq))) || void 0 === Yq ? void 0 : Yq.kind) && void 0 !== gq ? gq : null
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8282` → after: `L8043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8043) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8282)

```diff
-   7888: (zz, uz, bz) => {
+   8120: (qq, Eq, gq) => {
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8286-L8289` → after: `L8046-L8049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8046-L8049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8046-L8049) · [Before (L8286-L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8286-L8289)

```diff
-       f: () => wz,
-       h: () => Fz.f,
-       j: () => Gz,
-       m: () => Pz,
+       h: () => Sq,
+       i: () => jq,
+       k: () => Nq.c,
+       n: () => fq,
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8291-L8296` → after: `L8051-L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8051-L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8051-L8057) · [Before (L8291-L8296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8291-L8296)

```diff
-       u: () => az,
-       v: () => Fz.l,
-       z: () => Fz.p,
-       C: () => hz,
-       E: () => Fz.q,
-       H: () => vz
+       r: () => Hq,
+       t: () => Mq,
+       w: () => Nq.m,
+       y: () => Nq.q,
+       B: () => pq,
+       D: () => Nq.r,
+       E: () => rq
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8298-L8312` → after: `L8059-L8073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8059-L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8059-L8073) · [Before (L8298-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8298-L8312)

```diff
-     var Ez = bz(56),
-       nz = bz(20),
-       iz = bz(22),
-       lz = bz(1417),
-       Mz = bz(1269),
-       tz = bz(7863),
-       Hz = bz(7895),
-       Oz = bz(7842),
-       pz = bz(7835),
-       dz = bz(7903),
-       Fz = bz(1362),
-       Zz = bz(7837),
-       Rz = bz(8318),
-       Kz = bz(4157);
-     const wz = zz => !zz.repeat && !(0, Rz.e)(zz.key),
+     var Yq = gq(57),
+       lq = gq(24),
+       Oq = gq(31),
+       mq = gq(1416),
+       xq = gq(1274),
+       Aq = gq(8090),
+       cq = gq(8123),
+       uq = gq(8064),
+       Bq = gq(8057),
+       Wq = gq(8130),
+       Nq = gq(1367),
+       aq = gq(8061),
+       Vq = gq(8586),
+       dq = gq(4207);
+     const jq = qq => !qq.repeat && !(0, Vq.b)(qq.key),
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8326` → after: `L8087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8087) · [Before (L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8326)

```diff
-             const nz = zz >= (this.buttonsDown[Ez] ? Zz.bb : Zz.ab);
+             const lq = qq >= (this.buttonsDown[Yq] ? aq.U : aq.R);
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8331` → after: `L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8092) · [Before (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8331)

```diff
-             Math.hypot(zz.x, zz.y) < (nz ? Zz.bb : .3) ? this.stickAnchors[Ez] = null : (!nz || Math.hypot(zz.x - nz.x, zz.y - nz.y) >= .3) && (this.stickAnchors[Ez] = {
+             Math.hypot(qq.x, qq.y) < (lq ? aq.U : .3) ? this.stickAnchors[Yq] = null : (!lq || Math.hypot(qq.x - lq.x, qq.y - lq.y) >= .3) && (this.stickAnchors[Yq] = {
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8360` → after: `L8121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8121) · [Before (L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8360)

```diff
-         if (Lz && rz.wasOnlyMoveOn() && !(0, Fz.f)()) return !1;
+         if (iq && Qq.wasOnlyMoveOn() && !(0, Nq.c)()) return !1;
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8362` → after: `L8123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8123) · [Before (L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8362)

```diff
-         const uz = !(0, Fz.f)();
+         const Eq = !(0, Nq.c)();
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8365` → after: `L8126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8126) · [Before (L8365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8365)

```diff
-         } : null), Jz = !1, (0, Fz.l)("gamepad"), sz(!0), (0, dz.k)((0, tz.k)()), uz
+         } : null), hq = !1, (0, Nq.m)("gamepad"), Pq(!0), (0, Wq.r)((0, Aq.k)()), Eq
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8367` → after: `L8128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8128) · [Before (L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8367)

```diff
-       Gz = zz => !(0, Fz.f)() || zz === oz,
+       fq = qq => !(0, Nq.c)() || qq === yq,
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8372-L8373` → after: `L8133-L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8133-L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8133-L8134) · [Before (L8372-L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8372-L8373)

```diff
-         const zz = nz.e.get("activeInputDevice"),
-           uz = "gamepad" === zz ? pz.g.getActivePad() : null;
+         const qq = lq.b.get("activeInputDevice"),
+           Eq = "gamepad" === qq ? Bq.h.getActivePad() : null;
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8376-L8377` → after: `L8137-L8138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8137-L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8137-L8138) · [Before (L8376-L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8376-L8377)

```diff
-           inGame: (0, Mz.q)(),
-           padMovesMouse: null !== uz && (0, Oz.f)(uz.id)
+           inGame: (0, xq.p)(),
+           padMovesMouse: null !== Eq && (0, uq.e)(Eq.id)
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8389` → after: `L8150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8150) · [Before (L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8389)

```diff
-             zz.reset(), Lz = !1, (0, Fz.l)(uz)
+             qq.reset(), iq = !1, (0, Nq.m)(Eq)
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8394` → after: `L8155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8155) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8394)

```diff
-                 if ((0, Fz.j)(zz), !wz(zz)) return;
+                 if ((0, Nq.i)(qq), !jq(qq)) return;
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8420` → after: `L8181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8181) · [Before (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8420)

```diff
-             if (Jz = !0, sz(!1), "keyboardMouse" === nz.e.get("activeInputDevice")) return;
+             if (hq = !0, Pq(!1), "keyboardMouse" === lq.b.get("activeInputDevice")) return;
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8433` → after: `L8194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8194) · [Before (L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8433)

```diff
-                 inGame: Mz.inGame && (0, Hz.c)(),
+                 inGame: xq.inGame && (0, cq.d)(),
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8446-L8448` → after: `L8207-L8209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8207-L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8207-L8209) · [Before (L8446-L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8446-L8448)

```diff
-         const pz = iz.k.subscribe("appManagerUpdated|activeInputDevice", tz);
-         return tz(nz.e.get("activeInputDevice")), () => {
-           window.removeEventListener("keydown", bz, Oz), window.removeEventListener("pointerdown", bz, Oz), window.removeEventListener("wheel", bz, Oz), window.removeEventListener("touchstart", Ez, Oz), window.removeEventListener("pointermove", Mz, Oz), window.removeEventListener … [truncated]
+         const Bq = Oq.i.subscribe("appManagerUpdated|activeInputDevice", Aq);
+         return Aq(lq.b.get("activeInputDevice")), () => {
+           window.removeEventListener("keydown", gq, uq), window.removeEventListener("pointerdown", gq, uq), window.removeEventListener("wheel", gq, uq), window.removeEventListener("touchstart", Yq, uq), window.removeEventListener("pointermove", xq, uq), window.removeEventListener … [truncated]
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8453` → after: `L8214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8214) · [Before (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8453)

```diff
-         return (0, lz.g)(tz.d, (() => {
+         return (0, mq.f)(Aq.c, (() => {
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8455` → after: `L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8216) · [Before (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8455)

```diff
-         })), (0, lz.g)(pz.c, (() => {
+         })), (0, mq.f)(Bq.d, (() => {
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8460` → after: `L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8221) · [Before (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8460)

```diff
-   7867: (zz, uz, bz) => {
+   8095: (qq, Eq, gq) => {
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8462` → after: `L8223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8223) · [Before (L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8462)

```diff
-       e: () => Ez,
+       d: () => Yq,
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8468` → after: `L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8229) · [Before (L8468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8468)

```diff
-   7895: (zz, uz, bz) => {
+   8123: (qq, Eq, gq) => {
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8472-L8473` → after: `L8232-L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8232-L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8232-L8234) · [Before (L8472-L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8472-L8473)

```diff
-       e: () => tz,
-       f: () => Mz
+       d: () => uq,
+       g: () => Aq,
+       i: () => xq
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8475-L8477` → after: `L8236-L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8236-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8236-L8238) · [Before (L8475-L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8475-L8477)

```diff
-     var Ez = bz(20),
-       nz = bz(1595),
-       iz = bz(1681);
+     var Yq = gq(24),
+       lq = gq(1622),
+       Oq = gq(1716);
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8479` → after: `L8240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8240) · [Before (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8479)

```diff
-       Mz = (zz, uz) => (lz.has(zz) && console.warn(`Gameplay blocker "${zz}" registered twice; the newer one replaces it.`), lz.set(zz, uz), () => {
+       xq = (qq, Eq) => (mq.has(qq) && console.warn(`Gameplay blocker "${qq}" registered twice; the newer one replaces it.`), mq.set(qq, Eq), () => {
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8491` → after: `L8252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8252) · [Before (L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8491)

```diff
-         return "inGame" === Ez.e.get("gameState") && (!(0, nz.l)() && (!tz() && null === Hz(zz)))
+         return "inGame" === Yq.b.get("gameState") && (!(0, lq.p)() && (!Aq() && null === cq(qq)))
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8494` → after: `L8255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8255) · [Before (L8494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8494)

```diff
-   7837: (zz, uz, bz) => {
+   8061: (qq, Eq, gq) => {
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8496-L8497` → after: `L8257-L8260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8257-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8257-L8260) · [Before (L8496-L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8496-L8497)

```diff
-       B: () => iz,
-       E: () => pz,
+       $: () => Yq,
+       A: () => Bq,
+       C: () => oq,
+       F: () => iq,
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8500-L8503` → after: `L8264-L8267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8264-L8267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8264-L8267) · [Before (L8500-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8500-L8503)

```diff
-       O: () => sz,
-       S: () => wz,
-       V: () => Kz,
-       Y: () => Hz,
+       N: () => cq,
+       R: () => Wq,
+       U: () => Nq,
+       X: () => lq,
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8507` → after: `L8270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8270) · [Before (L8507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8507)

```diff
-       cb: () => nz,
+       d: () => bq,
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8513` → after: `L8274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8274) · [Before (L8513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8513)

```diff
-       jb: () => Pz,
+       j: () => Aq,
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8516-L8518` → after: `L8277-L8279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8277-L8279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8277-L8279) · [Before (L8516-L8518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8516-L8518)

```diff
-       q: () => Mz,
-       s: () => vz,
-       w: () => Xz,
+       p: () => rq,
+       t: () => Hq,
+       x: () => tq,
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8562` → after: `L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8323) · [Before (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8562)

```diff
-           return "linear" === uz ? bz : bz * bz
+           return "linear" === Eq ? gq : gq * gq
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8603` → after: `L8364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8364) · [Before (L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8603)

```diff
-         this.readTiming = zz, this.yM = !1, this.timing = null, this.nextFireMs = 0
+         this.readTiming = qq, this.Fc = !1, this.timing = null, this.nextFireMs = 0
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8606` → after: `L8367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8367) · [Before (L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8606)

```diff
-         return zz ? this.yM ? !!(this.timing && uz >= this.nextFireMs) && (this.nextFireMs = uz + this.timing.intervalMs, !0) : (this.yM = !0, this.timing = this.readTiming(), this.nextFireMs = uz + (null !== (bz = null === (Ez = this.timing) || void 0 === Ez ? void 0 : Ez.initia … [truncated]
+         return qq ? this.Fc ? !!(this.timing && Eq >= this.nextFireMs) && (this.nextFireMs = Eq + this.timing.intervalMs, !0) : (this.Fc = !0, this.timing = this.readTiming(), this.nextFireMs = Eq + (null !== (gq = null === (Yq = this.timing) || void 0 === Yq ? void 0 : Yq.initia … [truncated]
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8610` → after: `L8371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8371) · [Before (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8610)

```diff
-         this.yM = !1
+         this.Fc = !1
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8626` → after: `L8387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8387) · [Before (L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8626)

```diff
-         return zz !== this.direction && (this.timer.reset(), this.direction = zz), this.timer.update(null !== zz, uz) ? zz : null
+         return qq !== this.direction && (this.timer.reset(), this.direction = qq), this.timer.update(null !== qq, Eq) ? qq : null
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8633` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8394) · [Before (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8633)

```diff
-   8358: (zz, uz, bz) => {
+   8646: (qq, Eq, gq) => {
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8635-L8636` → after: `L8396-L8397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8396-L8397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8396-L8397) · [Before (L8635-L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8635-L8636)

```diff
-       e: () => nz,
-       i: () => iz
+       c: () => lq,
+       g: () => Oq
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8644` → after: `L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8405) · [Before (L8644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8644)

```diff
-   8326: (zz, uz, bz) => {
+   8594: (qq, Eq, gq) => {
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8646-L8647` → after: `L8407-L8408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8407-L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8407-L8408) · [Before (L8646-L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8646-L8647)

```diff
-       e: () => lz,
-       h: () => iz
+       b: () => mq,
+       e: () => Oq
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8649-L8652` → after: `L8410-L8413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8410-L8413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8410-L8413) · [Before (L8649-L8652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8649-L8652)

```diff
-     var Ez = bz(7863),
-       nz = bz(7837);
-     const iz = zz => (0, nz.ib)(zz, (0, Ez.g)().buttonRepeat),
-       lz = zz => new nz.f((() => iz(zz)))
+     var Yq = gq(8090),
+       lq = gq(8061);
+     const Oq = qq => (0, lq.eb)(qq, (0, Yq.i)().buttonRepeat),
+       mq = qq => new lq.d((() => Oq(qq)))
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8654` → after: `L8415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8415) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8654)

```diff
-   7877: (zz, uz, bz) => {
+   8110: (qq, Eq, gq) => {
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8656-L8658` → after: `L8417-L8419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8417-L8419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8417-L8419) · [Before (L8656-L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8656-L8658)

```diff
-       e: () => tz,
-       g: () => iz,
-       k: () => Mz
+       c: () => Aq,
+       d: () => Oq,
+       f: () => xq
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8660-L8662` → after: `L8421-L8423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8421-L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8421-L8423) · [Before (L8660-L8662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8660-L8662)

```diff
-     var Ez = bz(22),
-       nz = bz(7863);
-     const iz = (zz, uz) => "OpenShop" === zz ? "shop" === uz : "OpenLobbyLeaderboard" !== zz || "leaderboard" === uz;
+     var Yq = gq(31),
+       lq = gq(8090);
+     const Oq = (qq, Eq) => "OpenShop" === qq ? "shop" === Eq : "OpenLobbyLeaderboard" !== qq || "leaderboard" === Eq;
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8665` → after: `L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8426) · [Before (L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8665)

```diff
-         zz !== lz && (lz = zz, Ez.k.sK(nz.d, (0, nz.g)()))
+         qq !== mq && (mq = qq, Yq.i.TV(lq.c, (0, lq.i)()))
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8667` → after: `L8428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8428) · [Before (L8667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8667)

```diff
-       tz = () => ((zz, uz) => "shop" === zz && uz ? "shop" : "leaderboard")((0, nz.g)().leaderboardButton, lz)
+       Aq = () => ((qq, Eq) => "shop" === qq && Eq ? "shop" : "leaderboard")((0, lq.i)().leaderboardButton, mq)
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8669` → after: `L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8430) · [Before (L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8669)

```diff
-   7871: (zz, uz, bz) => {
+   8104: (qq, Eq, gq) => {
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8672` → after: `L8433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8433) · [Before (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8672)

```diff
-       A: () => rz,
+       Bb: () => zq,
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8674-L8675` → after: `L8435-L8437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8435-L8437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8435-L8437) · [Before (L8674-L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8674-L8675)

```diff
-       E: () => Fz,
-       G: () => pz,
+       Cb: () => rq,
+       F: () => xq,
+       J: () => Qq,
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8678-L8682` → after: `L8440-L8443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8440-L8443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8440-L8443) · [Before (L8678-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8678-L8682)

```diff
-       R: () => wz,
-       U: () => Jz,
-       W: () => fz,
-       _: () => Rz,
-       b: () => Vz,
+       P: () => Bq,
+       S: () => Pq,
+       T: () => cq,
+       X: () => jq,
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8687-L8688` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8447) · [Before (L8687-L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8687-L8688)

```diff
-       i: () => lz,
-       k: () => xz,
+       hb: () => Vq,
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8696-L8697` → after: `L8454-L8456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8454-L8456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8454-L8456) · [Before (L8696-L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8696-L8697)

```diff
-       sb: () => vz,
-       u: () => Oz,
+       rb: () => Zq,
+       t: () => tq,
+       vb: () => Oq,
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8701-L8702` → after: `L8462-L8463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8462-L8463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8462-L8463) · [Before (L8701-L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8701-L8702)

```diff
-     var Ez = bz(7859),
-       nz = bz(7837);
+     var Yq = gq(8081),
+       lq = gq(8061);
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8734` → after: `L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8495) · [Before (L8734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8734)

```diff
-       pz = zz => `${Math.round(zz)}%`,
+       Bq = qq => `${Math.round(qq)}%`,
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8736` → after: `L8497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8497) · [Before (L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8736)

```diff
-       Fz = zz => `${zz.toFixed(1)}\xd7`,
+       Nq = qq => `${qq.toFixed(1)}\xd7`,
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8915` → after: `L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8676) · [Before (L8915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8915)

```diff
-       Pz = Ez.d.map((zz => {
+       Zq = Yq.b.map((qq => {
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8929` → after: `L8690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8690) · [Before (L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8929)

```diff
-       Gz = nz.eb.filter((zz => "Home" !== zz)),
+       fq = lq.$.filter((qq => "Home" !== qq)),
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8940` → after: `L8701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8701) · [Before (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8940)

```diff
-         const Ez = uz - (null !== (bz = this.startMs) && void 0 !== bz ? bz : uz) >= 250;
+         const Yq = Eq - (null !== (gq = this.startMs) && void 0 !== gq ? gq : Eq) >= 250;
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8983` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8744) · [Before (L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8983)

```diff
-           yM: Ez
+           Fc: Yq
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8993` → after: `L8754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8754) · [Before (L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8993)

```diff
-   4776: (zz, uz, bz) => {
+   4866: (qq, Eq, gq) => {
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8995-L8996` → after: `L8756-L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8756-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8756-L8757) · [Before (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8995-L8996)

```diff
-       b: () => iz,
-       f: () => lz
+       e: () => Oq,
+       i: () => mq
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L8998` → after: `L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8759) · [Before (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L8998)

```diff
-     var Ez = bz(56);
+     var Yq = gq(57);
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9003` → after: `L8764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8764) · [Before (L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9003)

```diff
-         return bz && null !== (uz = nz.get(bz)) && void 0 !== uz ? uz : null
+         return gq && null !== (Eq = lq.get(gq)) && void 0 !== Eq ? Eq : null
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9024` → after: `L8785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8785) · [Before (L9024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9024)

```diff
-   8385: (zz, uz, bz) => {
+   8678: (qq, Eq, gq) => {
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9026` → after: `L8787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8787) · [Before (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9026)

```diff
-       b: () => iz,
+       d: () => Oq,
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9029` → after: `L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8790) · [Before (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9029)

```diff
-     var Ez = bz(22);
+     var Yq = gq(31);
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9035` → after: `L8796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8796) · [Before (L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9035)

```diff
-           "Air" === Mz && Ez.k.sK(nz)
+           "Air" === xq && Yq.i.TV(lq)
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9040` → after: `L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8801) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9040)

```diff
-   7915: (zz, uz, bz) => {
+   8138: (qq, Eq, gq) => {
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9043` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8804) · [Before (L9043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9043)

```diff
-   7918: (zz, uz, bz) => {
+   8146: (qq, Eq, gq) => {
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9046` → after: `L8807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8807) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9046)

```diff
-   7927: (zz, uz, bz) => {
+   8152: (qq, Eq, gq) => {
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9049` → after: `L8810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8810) · [Before (L9049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9049)

```diff
-   7929: (zz, uz, bz) => {
+   8154: (qq, Eq, gq) => {
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9052` → after: `L8813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8813) · [Before (L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9052)

```diff
-   7938: (zz, uz, bz) => {
+   8156: (qq, Eq, gq) => {
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9055` → after: `L8816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8816) · [Before (L9055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9055)

```diff
-   7940: (zz, uz, bz) => {
+   8161: (qq, Eq, gq) => {
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9058` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8819) · [Before (L9058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9058)

```diff
-   7946: (zz, uz, bz) => {
+   8163: (qq, Eq, gq) => {
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9061` → after: `L8822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8822) · [Before (L9061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9061)

```diff
-   7949: (zz, uz, bz) => {
+   8169: (qq, Eq, gq) => {
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9064` → after: `L8825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8825) · [Before (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9064)

```diff
-   7953: (zz, uz, bz) => {
+   8174: (qq, Eq, gq) => {
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9067` → after: `L8828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8828) · [Before (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9067)

```diff
-   7956: (zz, uz, bz) => {
+   8179: (qq, Eq, gq) => {
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9070` → after: `L8831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8831) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9070)

```diff
-   7960: (zz, uz, bz) => {
+   8183: (qq, Eq, gq) => {
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9073` → after: `L8834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8834) · [Before (L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9073)

```diff
-   7967: (zz, uz, bz) => {
+   8189: (qq, Eq, gq) => {
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9076` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8837) · [Before (L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9076)

```diff
-   7974: (zz, uz, bz) => {
+   8198: (qq, Eq, gq) => {
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9079` → after: `L8840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8840) · [Before (L9079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9079)

```diff
-   7980: (zz, uz, bz) => {
+   8202: (qq, Eq, gq) => {
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9082` → after: `L8843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8843) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9082)

```diff
-   7988: (zz, uz, bz) => {
+   8206: (qq, Eq, gq) => {
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9085` → after: `L8846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8846) · [Before (L9085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9085)

```diff
-   7994: (zz, uz, bz) => {
+   8212: (qq, Eq, gq) => {
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9088` → after: `L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8849) · [Before (L9088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9088)

```diff
-   8001: (zz, uz, bz) => {
+   8221: (qq, Eq, gq) => {
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9091` → after: `L8852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8852) · [Before (L9091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9091)

```diff
-   8010: (zz, uz, bz) => {
+   8227: (qq, Eq, gq) => {
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9094` → after: `L8855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8855) · [Before (L9094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9094)

```diff
-   8016: (zz, uz, bz) => {
+   8229: (qq, Eq, gq) => {
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9097` → after: `L8858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8858) · [Before (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9097)

```diff
-   8025: (zz, uz, bz) => {
+   8238: (qq, Eq, gq) => {
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9100` → after: `L8861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8861) · [Before (L9100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9100)

```diff
-   8032: (zz, uz, bz) => {
+   8246: (qq, Eq, gq) => {
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9103` → after: `L8864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8864) · [Before (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9103)

```diff
-   8034: (zz, uz, bz) => {
+   8251: (qq, Eq, gq) => {
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9106` → after: `L8867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8867) · [Before (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9106)

```diff
-   8038: (zz, uz, bz) => {
+   8258: (qq, Eq, gq) => {
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9109` → after: `L8870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8870) · [Before (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9109)

```diff
-   8040: (zz, uz, bz) => {
+   8267: (qq, Eq, gq) => {
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9112` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8873) · [Before (L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9112)

```diff
-   8048: (zz, uz, bz) => {
+   8274: (qq, Eq, gq) => {
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9115` → after: `L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8876) · [Before (L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9115)

```diff
-   8051: (zz, uz, bz) => {
+   8282: (qq, Eq, gq) => {
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9118` → after: `L8879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8879) · [Before (L9118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9118)

```diff
-   8055: (zz, uz, bz) => {
+   8286: (qq, Eq, gq) => {
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9121` → after: `L8882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8882) · [Before (L9121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9121)

```diff
-   8058: (zz, uz, bz) => {
+   8293: (qq, Eq, gq) => {
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9124` → after: `L8885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8885) · [Before (L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9124)

```diff
-   8060: (zz, uz, bz) => {
+   8297: (qq, Eq, gq) => {
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9127` → after: `L8888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8888) · [Before (L9127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9127)

```diff
-   8062: (zz, uz, bz) => {
+   8305: (qq, Eq, gq) => {
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9130` → after: `L8891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8891) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9130)

```diff
-   8064: (zz, uz, bz) => {
+   8312: (qq, Eq, gq) => {
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9133` → after: `L8894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8894) · [Before (L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9133)

```diff
-   8067: (zz, uz, bz) => {
+   8320: (qq, Eq, gq) => {
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9136` → after: `L8897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8897) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9136)

```diff
-   8075: (zz, uz, bz) => {
+   8325: (qq, Eq, gq) => {
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9139` → after: `L8900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8900) · [Before (L9139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9139)

```diff
-   8084: (zz, uz, bz) => {
+   8329: (qq, Eq, gq) => {
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9142` → after: `L8903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8903) · [Before (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9142)

```diff
-   8093: (zz, uz, bz) => {
+   8333: (qq, Eq, gq) => {
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9145` → after: `L8906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8906) · [Before (L9145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9145)

```diff
-   8098: (zz, uz, bz) => {
+   8339: (qq, Eq, gq) => {
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9148` → after: `L8909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8909) · [Before (L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9148)

```diff
-   8100: (zz, uz, bz) => {
+   8348: (qq, Eq, gq) => {
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9151` → after: `L8912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8912) · [Before (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9151)

```diff
-   8108: (zz, uz, bz) => {
+   8354: (qq, Eq, gq) => {
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9154` → after: `L8915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8915) · [Before (L9154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9154)

```diff
-   8114: (zz, uz, bz) => {
+   8362: (qq, Eq, gq) => {
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9157` → after: `L8918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8918) · [Before (L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9157)

```diff
-   8120: (zz, uz, bz) => {
+   8370: (qq, Eq, gq) => {
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9160` → after: `L8921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8921) · [Before (L9160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9160)

```diff
-   8126: (zz, uz, bz) => {
+   8377: (qq, Eq, gq) => {
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9163` → after: `L8924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8924) · [Before (L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9163)

```diff
-   8134: (zz, uz, bz) => {
+   8386: (qq, Eq, gq) => {
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9166` → after: `L8927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8927) · [Before (L9166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9166)

```diff
-   8143: (zz, uz, bz) => {
+   8392: (qq, Eq, gq) => {
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9169` → after: `L8930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8930) · [Before (L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9169)

```diff
-   8147: (zz, uz, bz) => {
+   8399: (qq, Eq, gq) => {
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9172` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8933) · [Before (L9172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9172)

```diff
-   8152: (zz, uz, bz) => {
+   8401: (qq, Eq, gq) => {
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9175` → after: `L8936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8936) · [Before (L9175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9175)

```diff
-   8159: (zz, uz, bz) => {
+   8408: (qq, Eq, gq) => {
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9178` → after: `L8939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8939) · [Before (L9178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9178)

```diff
-   8163: (zz, uz, bz) => {
+   8414: (qq, Eq, gq) => {
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9181` → after: `L8942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8942) · [Before (L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9181)

```diff
-   8167: (zz, uz, bz) => {
+   8423: (qq, Eq, gq) => {
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9184` → after: `L8945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8945) · [Before (L9184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9184)

```diff
-   8173: (zz, uz, bz) => {
+   8426: (qq, Eq, gq) => {
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9187` → after: `L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8948) · [Before (L9187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9187)

```diff
-   8176: (zz, uz, bz) => {
+   8432: (qq, Eq, gq) => {
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9190` → after: `L8951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8951) · [Before (L9190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9190)

```diff
-   8179: (zz, uz, bz) => {
+   8436: (qq, Eq, gq) => {
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9193` → after: `L8954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8954) · [Before (L9193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9193)

```diff
-   8184: (zz, uz, bz) => {
+   8444: (qq, Eq, gq) => {
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9196` → after: `L8957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8957) · [Before (L9196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9196)

```diff
-   8192: (zz, uz, bz) => {
+   8451: (qq, Eq, gq) => {
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9199` → after: `L8960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8960) · [Before (L9199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9199)

```diff
-   8197: (zz, uz, bz) => {
+   8460: (qq, Eq, gq) => {
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9202` → after: `L8963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8963) · [Before (L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9202)

```diff
-   8205: (zz, uz, bz) => {
+   8463: (qq, Eq, gq) => {
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9205` → after: `L8966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8966) · [Before (L9205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9205)

```diff
-   8214: (zz, uz, bz) => {
+   8471: (qq, Eq, gq) => {
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9208` → after: `L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8969) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9208)

```diff
-   8218: (zz, uz, bz) => {
+   8475: (qq, Eq, gq) => {
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9211` → after: `L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8972) · [Before (L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9211)

```diff
-   8227: (zz, uz, bz) => {
+   8481: (qq, Eq, gq) => {
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9214` → after: `L8975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8975) · [Before (L9214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9214)

```diff
-   8234: (zz, uz, bz) => {
+   8484: (qq, Eq, gq) => {
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9217` → after: `L8978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8978) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9217)

```diff
-   8236: (zz, uz, bz) => {
+   8490: (qq, Eq, gq) => {
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9220` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8981) · [Before (L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9220)

```diff
-   8240: (zz, uz, bz) => {
+   8497: (qq, Eq, gq) => {
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9223` → after: `L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8984) · [Before (L9223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9223)

```diff
-   8247: (zz, uz, bz) => {
+   8499: (qq, Eq, gq) => {
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9226` → after: `L8987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8987) · [Before (L9226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9226)

```diff
-   8255: (zz, uz, bz) => {
+   8502: (qq, Eq, gq) => {
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9229` → after: `L8990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8990) · [Before (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9229)

```diff
-   8257: (zz, uz, bz) => {
+   8505: (qq, Eq, gq) => {
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9232` → after: `L8993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8993) · [Before (L9232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9232)

```diff
-   8261: (zz, uz, bz) => {
+   8511: (qq, Eq, gq) => {
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9235` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8996) · [Before (L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9235)

```diff
-   8263: (zz, uz, bz) => {
+   8516: (qq, Eq, gq) => {
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9238` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L8999) · [Before (L9238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9238)

```diff
-   8267: (zz, uz, bz) => {
+   8525: (qq, Eq, gq) => {
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9241` → after: `L9002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR9002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L9002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L9002) · [Before (L9241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9241)

```diff
-   8272: (zz, uz, bz) => {
+   8532: (qq, Eq, gq) => {
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9244` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L9005) · [Before (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9244)

```diff
-   8276: (zz, uz, bz) => {
+   8540: (qq, Eq, gq) => {
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9247` → after: `L9008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR9008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L9008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L9008) · [Before (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9247)

```diff
-   8282: (zz, uz, bz) => {
+   8544: (qq, Eq, gq) => {
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9250` → after: `L9011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR9011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L9011) · [Before (L9250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9250)

```diff
-   8288: (zz, uz, bz) => {
+   8551: (qq, Eq, gq) => {
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9253` → after: `L9014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR9014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L9014) · [Before (L9253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9253)

```diff
-   8291: (zz, uz, bz) => {
+   8557: (qq, Eq, gq) => {
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9256` → after: `L9017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR9017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L9017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L9017) · [Before (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9256)

```diff
-   8297: (zz, uz, bz) => {
+   8564: (qq, Eq, gq) => {
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9259` → after: `L9020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR9020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L9020) · [Before (L9259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9259)

```diff
-   8301: (zz, uz, bz) => {
+   8572: (qq, Eq, gq) => {
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9262` → after: `L9023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR9023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L9023) · [Before (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9262)

```diff
-   8305: (zz, uz, bz) => {
+   8576: (qq, Eq, gq) => {
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L9265` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L9026) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L9265)

```diff
-   8312: (zz, uz, bz) => {
+   8581: (qq, Eq, gq) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L4)

```diff
-   8869: (zz, uz, bz) => {
+   9150: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L8)

```diff
-     var Ez = bz(606),
+     var Yq = gq(611),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L11-L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L12) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L11-L12)

```diff
-       lz = bz(125),
-       Mz = bz(4163);
+       xq = gq(4212);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L17)

```diff
-         if (null !== zz.appIosVersion) return `${zz.appIosVersion} (the iOS app's)`;
+         if (null !== qq.appIosVersion) return `${qq.appIosVersion} (the iOS app's)`;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L19)

```diff
-         if (uz) return `${uz[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
+         if (Eq) return `${Eq[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L24)

```diff
-         if ("Safari" === bz.name && bz.version) return `${bz.version} (Safari's version, which follows iOS)`;
+         if ("Safari" === gq.name && gq.version) return `${gq.version} (Safari's version, which follows iOS)`;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L28)

```diff
-         return iz < 18 || 18 === iz && lz < 6 ? `${nz} (user agent)` : `? (the user agent says ${nz}, frozen from iOS 26)`
+         return Oq < 18 || 18 === Oq && mq < 6 ? `${lq} (user agent)` : `? (the user agent says ${lq}, frozen from iOS 26)`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L31)

```diff
-       if (uz) return "windows" === zz.os ? `${uz} (${function(zz){const uz=parseInt(zz,10);if(uz>=13)return"Windows 11";return uz>=1?"Windows 10":"Windows 8.1 or older"}(uz)}, client hints)` : `${uz} (client hints)`;
+       if (Eq) return "windows" === qq.os ? `${Eq} (${function(qq){const Eq=parseInt(qq,10);if(Eq>=13)return"Windows 11";return Eq>=1?"Windows 10":"Windows 8.1 or older"}(Eq)}, client hints)` : `${Eq} (client hints)`;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L33)

```diff
-       return bz ? tz.has(bz) ? `${bz} (user agent, which may be frozen)` : `${bz} (user agent)` : "?"
+       return gq ? Aq.has(gq) ? `${gq} (user agent, which may be frozen)` : `${gq} (user agent)` : "?"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L38)

```diff
-       const bz = (null !== (uz = zz.fullVersionList) && void 0 !== uz ? uz : []).filter((zz => {
+       const gq = (null !== (Eq = qq.fullVersionList) && void 0 !== Eq ? Eq : []).filter((qq => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L48)

```diff
-         return `${uz} ${bz}`
+         return `${Eq} ${gq}`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L50)

```diff
-       return `${zz.platform} ${zz.platformVersion||"?"}, ${bz.join(", ")||"?"}, ${zz.architecture||"?"} ${zz.bitness||"?"}-bit, model ${zz.model||"?"}, mobile ${zz.mobile}`
+       return `${qq.platform} ${qq.platformVersion||"?"}, ${gq.join(", ")||"?"}, ${qq.architecture||"?"} ${qq.bitness||"?"}-bit, model ${qq.model||"?"}, mobile ${qq.mobile}`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L56-L59` → after: `L56-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L56-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L56-L59) · [Before (L56-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L56-L59)

```diff
-       const zz = (0, lz.m)(),
-         uz = null !== zz && void 0 !== zz ? zz : (0, lz.g)(),
-         bz = (0, lz.e)();
-       return [uz ? `webgl ${uz.vendor} / ${uz.renderer} (${zz?"the renderer's context":"a probe"})` : "webgl ?", bz ? `webgpu adapter ${bz.vendor||"?"}/${bz.architecture||"?"}` : "webgpu adapter ?"].join("; ")
+       const qq = (0, mq.t)(),
+         Eq = null !== qq && void 0 !== qq ? qq : (0, mq.n)(),
+         gq = (0, mq.j)();
+       return [Eq ? `webgl ${Eq.vendor} / ${Eq.renderer} (${qq?"the renderer's context":"a probe"})` : "webgl ?", gq ? `webgpu adapter ${gq.vendor||"?"}/${gq.architecture||"?"}` : "webgpu adapter ?"].join("; ")
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L70)

```diff
-           appIosVersion: Mz.g,
+           appIosVersion: xq.c,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L73-L74` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L73-L74) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L73-L74)

```diff
-         wz = (0, Ez.l)(navigator.platform, navigator.maxTouchPoints, iz.x);
-       return [`os ${Rz} ${Kz}; user agent's ${null!==(zz=Zz.os.name)&&void 0!==zz?zz:"?"} ${null!==(uz=Zz.os.version)&&void 0!==uz?uz:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,nz.getPlatformType)()}`, `browser ${null!==(bz=Zz.browser.nam … [truncated]
+         jq = (0, Yq.h)(navigator.platform, navigator.maxTouchPoints, Oq.n);
+       return [`os ${Vq} ${dq}; user agent's ${null!==(qq=aq.os.name)&&void 0!==qq?qq:"?"} ${null!==(Eq=aq.os.version)&&void 0!==Eq?Eq:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,lq.getPlatformType)()}`, `browser ${null!==(gq=aq.browser.nam … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fcR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ceec8f60519c2fbffa8b6dd246c10b8316922105e12b01629b63ee19286022fc) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/debugDeviceHeader.js#L79)

```diff
-       pz = `failed (${String(zz)})`
+       Bq = `failed (${String(qq)})`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/diagSink.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/diagSink.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L4)

```diff
-   35909: (zz, uz, bz) => {
+   36484: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L33` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L35) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L33)

```diff
-           this.sd()
+           this.SB()
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L40` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L42-L46) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L40)

```diff
-           return zz.replace(/\n/g, " | ").slice(0, 400)
+           const Eq = qq.replace(/\n/g, " | ");
+           if (Eq.length <= mq) return Eq;
+           let gq = mq - 3;
+           const Yq = Eq.charCodeAt(gq - 1);
+           return Yq >= 55296 && Yq <= 56319 && gq--, `${Eq.slice(0,gq)}...`
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L74` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L80) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L74)

```diff
-             for (const uz of bz) this.add(`[dump:${zz}] ${uz}`)
+             for (const Eq of gq) this.add(`[dump:${qq}] ${Eq}`)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L95` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L101) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L95)

```diff
-         return null !== (zz = this.deps.storage.getItem(Ez)) && void 0 !== zz ? zz : {}
+         return null !== (qq = this.deps.storage.getItem(Yq)) && void 0 !== qq ? qq : {}
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L100` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5e4716347a6cca8f69cac3eb73ebd3fe2602ecc641c4a9eba06b41be06a58ea6) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L106) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/diagSink.js#L100)

```diff
-         return (null === uz || void 0 === uz ? void 0 : uz.day) === zz ? uz : {
+         return (null === Eq || void 0 === Eq ? void 0 : Eq.day) === qq ? Eq : {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41)

#### 1. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4)

```diff
-   6422: (zz, uz, bz) => {
+   6573: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L71)

```diff
-       aZ: () => ez,
+       UN: () => Xq,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L178)

```diff
-             if (zz.internalLogger.debug(`Registering public faro reference in the global scope using "${zz.config.globalObjectKey}" key`), zz.config.globalObjectKey in Oz) return void zz.internalLogger.warn(`Skipping global registration due to key "${zz.config.globalObjectKey}" b … [truncated]
+             if (qq.internalLogger.debug(`Registering public faro reference in the global scope using "${qq.config.globalObjectKey}" key`), qq.config.globalObjectKey in uq) return void qq.internalLogger.warn(`Skipping global registration due to key "${qq.config.globalObjectKey}" b … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L193)

```diff
-       return Object.prototype.toString.call(zz) === `[object ${uz}]`
+       return Object.prototype.toString.call(qq) === `[object ${Eq}]`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L243)

```diff
-       return oz(zz) ? zz : zz instanceof URL ? zz.href : !ez(zz) && Tz(null === zz || void 0 === zz ? void 0 : zz.toString) ? zz.toString() : void 0
+       return yq(qq) ? qq : qq instanceof URL ? qq.href : !Xq(qq) && bq(null === qq || void 0 === qq ? void 0 : qq.toString) ? qq.toString() : void 0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L256)

```diff
-         return null === (uz = Rz.internalLogger) || void 0 === uz || uz.info(`Web storage of type ${zz} is not available. Reason: ${bz}`), !1
+         return null === (Eq = Vq.internalLogger) || void 0 === Eq || Eq.info(`Web storage of type ${qq} is not available. Reason: ${gq}`), !1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L277)

```diff
-       return zz === Yz ? Eu : zz === Cz && nu
+       return qq === eq ? YE : qq === Iq && lE
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L299)

```diff
-       return "symbol" == lu(uz) ? uz : uz + ""
+       return "symbol" == mE(Eq) ? Eq : Eq + ""
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L340)

```diff
-         })) && void 0 !== bz ? bz : null === nz || void 0 === nz ? void 0 : nz.samplingRate) && void 0 !== uz ? uz : 1,
+         })) && void 0 !== gq ? gq : null === lq || void 0 === lq ? void 0 : lq.samplingRate) && void 0 !== Eq ? Eq : 1,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L434-L435)

```diff
-         lastActivity: null !== bz && void 0 !== bz ? bz : lz,
-         started: null !== uz && void 0 !== uz ? uz : lz,
+         lastActivity: null !== gq && void 0 !== gq ? gq : mq,
+         started: null !== Eq && void 0 !== Eq ? Eq : mq,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L466)

```diff
-         if (tz = Math.min(dz + nz, (null !== (Oz = null === Rz || void 0 === Rz ? void 0 : Rz.started) && void 0 !== Oz ? Oz : dz) + iz, (null !== (pz = null === Rz || void 0 === Rz ? void 0 : Rz.lastActivity) && void 0 !== pz ? pz : dz) + lz), !1 === zz && Tu(Rz)) {
+         if (Aq = Math.min(Wq + lq, (null !== (uq = null === Vq || void 0 === Vq ? void 0 : Vq.started) && void 0 !== uq ? uq : Wq) + Oq, (null !== (Bq = null === Vq || void 0 === Vq ? void 0 : Vq.lastActivity) && void 0 !== Bq ? Bq : Wq) + mq), !1 === qq && bE(Vq)) {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L478)

```diff
-           tz = dz + nz, bz(zz), null === (wz = Mz.api) || void 0 === wz || wz.setSession(zz.sessionMeta), null === Fz || void 0 === Fz || null === (Xz = Fz.onSessionChange) || void 0 === Xz || Xz.call(Fz, null !== (fz = null === Rz || void 0 === Rz ? void 0 : Rz.sessionMeta) && v … [truncated]
+           Aq = Wq + lq, gq(qq), null === (jq = xq.api) || void 0 === jq || jq.setSession(qq.sessionMeta), null === Nq || void 0 === Nq || null === (Hq = Nq.onSessionChange) || void 0 === Hq || Hq.call(Nq, null !== (oq = null === Vq || void 0 === Vq ? void 0 : Vq.sessionMeta) && v … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L507)

```diff
-             attributes: Vu(Ou(Ou(Ou({}, null === (Ez = bz.config.sessionTracking) || void 0 === Ez || null === (Ez = Ez.session) || void 0 === Ez ? void 0 : Ez.attributes), null !== (nz = null === (iz = bz.metas.value.session) || void 0 === iz ? void 0 : iz.attributes) && void 0  … [truncated]
+             attributes: TE(uE(uE(uE({}, null === (Yq = gq.config.sessionTracking) || void 0 === Yq || null === (Yq = Yq.session) || void 0 === Yq ? void 0 : Yq.attributes), null !== (lq = null === (Oq = gq.metas.value.session) || void 0 === Oq ? void 0 : Oq.attributes) && void 0  … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L512)

```diff
-         Oz = null !== (lz = null === (Mz = bz.metas.value.session) || void 0 === Mz ? void 0 : Mz.overrides) && void 0 !== lz ? lz : null === uz || void 0 === uz || null === (tz = uz.sessionMeta) || void 0 === tz ? void 0 : tz.overrides;
+         uq = null !== (mq = null === (xq = gq.metas.value.session) || void 0 === xq ? void 0 : xq.overrides) && void 0 !== mq ? mq : null === Eq || void 0 === Eq || null === (Aq = Eq.sessionMeta) || void 0 === Aq ? void 0 : Aq.overrides;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L537)

```diff
-             uz = Gu(zz ? lz : Au({
+             Eq = fE(qq ? mq : nE({
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L549)

```diff
-                 tz = null !== (nz = null !== (iz = Ez.serviceName) && void 0 !== iz ? iz : null === (lz = zz.metas.value.app) || void 0 === lz ? void 0 : lz.name) && void 0 !== nz ? nz : "";
+                 Aq = null !== (lq = null !== (Oq = Yq.serviceName) && void 0 !== Oq ? Oq : null === (mq = qq.metas.value.app) || void 0 === mq ? void 0 : mq.name) && void 0 !== lq ? lq : "";
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L575)

```diff
-       return JSON.stringify(null !== zz && void 0 !== zz ? zz : {}, function() {
+       return JSON.stringify(null !== qq && void 0 !== qq ? qq : {}, function() {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L741` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L741) · [Before (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L741)

```diff
-             Hz = null !== (uz = null === Mz || void 0 === Mz ? void 0 : Mz.overrides) && void 0 !== uz ? uz : null === nz || void 0 === nz ? void 0 : nz.session.overrides;
+             cq = null !== (Eq = null === xq || void 0 === xq ? void 0 : xq.overrides) && void 0 !== Eq ? Eq : null === lq || void 0 === lq ? void 0 : lq.session.overrides;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L766)

```diff
-       return (null === zz || void 0 === zz ? void 0 : zz.persistent) ? hu : Uu
+       return (null === qq || void 0 === qq ? void 0 : qq.persistent) ? pE : GE
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L801)

```diff
-       return "symbol" == ju(uz) ? uz : uz + ""
+       return "symbol" == wE(Eq) ? Eq : Eq + ""
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L892)

```diff
-             sessionId: (null === bz || void 0 === bz ? void 0 : bz.reset) ? void 0 : null !== (tz = null === Ez || void 0 === Ez ? void 0 : Ez.id) && void 0 !== tz ? tz : null === (Hz = uz.session) || void 0 === Hz ? void 0 : Hz.id,
+             sessionId: (null === gq || void 0 === gq ? void 0 : gq.reset) ? void 0 : null !== (Aq = null === Yq || void 0 === Yq ? void 0 : Yq.id) && void 0 !== Aq ? Aq : null === (cq = Eq.session) || void 0 === cq ? void 0 : cq.id,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L931)

```diff
-           Object.keys(zz).length > 0 ? iz.sessionMeta.overrides = zz : delete iz.sessionMeta.overrides
+           Object.keys(qq).length > 0 ? Oq.sessionMeta.overrides = qq : delete Oq.sessionMeta.overrides
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L950)

```diff
-             if (null === bz || void 0 === bz || delete bz.isSampled, 0 === Object.keys(null !== bz && void 0 !== bz ? bz : {}).length) null === (Mz = zz.meta.session) || void 0 === Mz || delete Mz.attributes;
+             if (null === gq || void 0 === gq || delete gq.isSampled, 0 === Object.keys(null !== gq && void 0 !== gq ? gq : {}).length) null === (xq = qq.meta.session) || void 0 === xq || delete xq.attributes;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1016)

```diff
-       return bz || Ez ? [(null === zz || void 0 === zz ? void 0 : zz.includes("@")) ? zz.split("@")[0] : zz, bz ? `${Hb}:${uz}` : `${Ob}:${uz}`] : [zz, uz]
+       return gq || Yq ? [(null === qq || void 0 === qq ? void 0 : qq.includes("@")) ? qq.split("@")[0] : qq, gq ? `${cg}:${Eq}` : `${ug}:${Eq}`] : [qq, Eq]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1135-L1136` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1135-L1136) · [Before (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1135-L1136)

```diff
-         bz = null !== nz && void 0 !== nz ? nz : Ez ? "DOMError" : "DOMException", uz = iz ? `${bz}: ${iz}` : bz
-       } else hz(zz) ? (bz = zz.name, uz = zz.message, iz = Zb(zz)) : (Az(zz) || (nz = mz(zz))) && (bz = nz ? zz.constructor.name : void 0, uz = `Non-Error exception captured with keys: ${Object.keys(zz)}`);
+         gq = null !== lq && void 0 !== lq ? lq : Yq ? "DOMError" : "DOMException", Eq = Oq ? `${gq}: ${Oq}` : gq
+       } else pq(qq) ? (gq = qq.name, Eq = qq.message, Oq = ag(qq)) : (nq(qq) || (lq = zq(qq))) && (gq = lq ? qq.constructor.name : void 0, Eq = `Non-Error exception captured with keys: ${Object.keys(qq)}`);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1145)

```diff
-       return iz || !Hz ? ([lz, Mz, tz] = Ab(null !== iz && void 0 !== iz ? iz : uz), 0 === tz.length && (tz = [Oz])) : Hz && ([lz, Mz] = function(zz) {
+       return Oq || !cq ? ([mq, xq, Aq] = ng(null !== Oq && void 0 !== Oq ? Oq : Eq), 0 === Aq.length && (Aq = [uq])) : cq && ([mq, xq] = function(qq) {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1148-L1149` → after: `L1148-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1148-L1149) · [Before (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1148-L1149)

```diff
-           nz = null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez[1]) && void 0 !== uz ? uz : xb;
-         return [null !== (bz = null === Ez || void 0 === Ez ? void 0 : Ez[2]) && void 0 !== bz ? bz : zz, nz]
+           lq = null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq[1]) && void 0 !== Eq ? Eq : vg;
+         return [null !== (gq = null === Yq || void 0 === Yq ? void 0 : Yq[2]) && void 0 !== gq ? gq : qq, lq]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1177-L1178` → after: `L1177-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1177-L1178) · [Before (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1177-L1178)

```diff
-         this.errorSerializer = nz ? null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez.errorSerializer) && void 0 !== uz ? uz : Jb : Pb;
-         const iz = null !== (bz = null === Ez || void 0 === Ez ? void 0 : Ez.disabledLevels) && void 0 !== bz ? bz : zz.defaultDisabledLevels,
+         this.errorSerializer = lq ? null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq.errorSerializer) && void 0 !== Eq ? Eq : hg : Zg;
+         const Oq = null !== (gq = null === Yq || void 0 === Yq ? void 0 : Yq.disabledLevels) && void 0 !== gq ? gq : qq.defaultDisabledLevels,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1181)

```diff
-               const uz = null !== zz && void 0 !== zz ? zz : ku;
+               const Eq = null !== qq && void 0 !== qq ? qq : DE;
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1211-L1212` → after: `L1211-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1211-L1212) · [Before (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1211-L1212)

```diff
-                     value: null !== uz && void 0 !== uz ? uz : "",
-                     type: null !== Ez && void 0 !== Ez ? Ez : "",
+                     value: null !== Eq && void 0 !== Eq ? Eq : "",
+                     type: null !== Yq && void 0 !== Yq ? Yq : "",
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1281)

```diff
-               az(iz) ? (Ez = `Non-Error promise rejection captured with value: ${String(iz)}`, nz = "UnhandledRejection") : [Ez, nz, Mz] = Ab(iz), Ez && zz.pushError(new Error(Ez), {
+               Mq(Oq) ? (Yq = `Non-Error promise rejection captured with value: ${String(Oq)}`, lq = "UnhandledRejection") : [Yq, lq, xq] = ng(Oq), Yq && qq.pushError(new Error(Yq), {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1299)

```diff
-             const zz = null !== (Ez = null === (nz = this.notifiedView) || void 0 === nz ? void 0 : nz.name) && void 0 !== Ez ? Ez : mb;
+             const qq = null !== (Yq = null === (lq = this.notifiedView) || void 0 === lq ? void 0 : lq.name) && void 0 !== Yq ? Yq : zg;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1302)

```diff
-               toView: null !== (iz = bz.name) && void 0 !== iz ? iz : mb
+               toView: null !== (Oq = gq.name) && void 0 !== Oq ? Oq : zg
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1358` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1358) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1358)

```diff
-             if (uz = uz ? Ez + ">" + uz : Ez, bz.id) break;
+             if (Eq = Eq ? Yq + ">" + Eq : Yq, gq.id) break;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1426) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1426)

```diff
-         return bz ? Hz = bz : Wb() >= 0 ? Hz = "back-forward-cache" : Mz && (document.prerendering || Bb() > 0 ? Hz = "prerender" : document.wasDiscarded ? Hz = "restore" : Mz.type && (Hz = Mz.type.replace(/_/g, "-"))), {
+         return gq ? cq = gq : sg() >= 0 ? cq = "back-forward-cache" : xq && (document.prerendering || Cg() > 0 ? cq = "prerender" : document.wasDiscarded ? cq = "restore" : xq.type && (cq = xq.type.replace(/_/g, "-"))), {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1512)

```diff
-     const XE = () => wE ? FE : performance.interactionCount ?? 0;
+     const HY = () => jY ? NY : performance.interactionCount ?? 0;
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1828)

```diff
-                     const bz = zz.entries.reduce(((zz, uz) => zz.value > uz.value ? zz : uz));
+                     const gq = qq.entries.reduce(((qq, Eq) => qq.value > Eq.value ? qq : Eq));
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L1954)

```diff
-                 } else zz.id && Ez.set(zz, `#${zz.id}`)
+                 } else qq.id && Yq.set(qq, `#${qq.id}`)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2043-L2044` → after: `L2043-L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2043-L2044) · [Before (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2043-L2044)

```diff
-                         Ez = Math.max(bz, lz ? (lz.requestStart || lz.startTime) - tz : 0),
-                         nz = Math.min(zz.value, Math.max(Ez, lz ? lz.responseEnd - tz : 0));
+                         Yq = Math.max(gq, mq ? (mq.requestStart || mq.startTime) - Aq : 0),
+                         lq = Math.min(qq.value, Math.max(Yq, mq ? mq.responseEnd - Aq : 0));
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2153)

```diff
-           const bz = null !== (uz = zu("com.grafana.faro.lastNavigationId", Cz)) && void 0 !== uz ? uz : mb;
+           const gq = null !== (Eq = qE("com.grafana.faro.lastNavigationId", Iq)) && void 0 !== Eq ? Eq : zg;
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2257)

```diff
-         serviceWorkerTime: SE(rz > 0 ? tz - rz : 0),
+         serviceWorkerTime: kY(Qq > 0 ? Aq - Qq : 0),
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2292` → after: `L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2292) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2292)

```diff
-         documentParsingTime: SE(pz ? iz - pz : null),
+         documentParsingTime: kY(Bq ? Oq - Bq : null),
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2296)

```diff
-         ttfb: SE(Math.max(Hz - (null !== uz && void 0 !== uz ? uz : 0), 0)),
+         ttfb: kY(Math.max(cq - (null !== Eq && void 0 !== Eq ? Eq : 0), 0)),
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2310)

```diff
-       return null == zz ? mb : "number" === typeof zz ? Math.round(zz > 0 ? zz : 0).toString() : zz.toString()
+       return null == qq ? zg : "number" === typeof qq ? Math.round(qq > 0 ? qq : 0).toString() : qq.toString()
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2378)

```diff
-                   const Mz = null !== (Ez = zu("com.grafana.faro.lastNavigationId", Cz)) && void 0 !== Ez ? Ez : mb,
+                   const xq = null !== (Yq = qE("com.grafana.faro.lastNavigationId", Iq)) && void 0 !== Yq ? Yq : zg,
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2438` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2438) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2438)

```diff
-       return `data-${(zz.startsWith("data-")?zz.slice(5):zz).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
+       return `data-${(qq.startsWith("data-")?qq.slice(5):qq).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2449)

```diff
-       return !Number.isFinite(Ez) || Ez <= 0 ? (bz(`initialActivityTimeout must be a finite number greater than zero; using ${uz} ms`), uz) : Ez > 1e3 ? (bz(`initialActivityTimeout cannot exceed ${BE} ms; clamping to the maximum`), BE) : Ez
+       return !Number.isFinite(Yq) || Yq <= 0 ? (gq(`initialActivityTimeout must be a finite number greater than zero; using ${Eq} ms`), Eq) : Yq > 1e3 ? (gq(`initialActivityTimeout cannot exceed ${CY} ms; clamping to the maximum`), CY) : Yq
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2503)

```diff
-           const nz = null !== (zz = Bz(arguments[0])) && void 0 !== zz ? zz : "",
+           const lq = null !== (qq = Cq(arguments[0])) && void 0 !== qq ? qq : "",
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2505` → after: `L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2505) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2505)

```diff
-             lz = (null !== (Ez = arguments[1]) && void 0 !== Ez ? Ez : {}).method,
+             mq = (null !== (Yq = arguments[1]) && void 0 !== Yq ? Yq : {}).method,
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2636` → after: `L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2636) · [Before (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2636)

```diff
-           const iz = null !== (uz = null === (bz = nz.userActionsInstrumentation) || void 0 === bz ? void 0 : bz.dataAttributeName) && void 0 !== uz ? uz : jE,
+           const Oq = null !== (Eq = null === (gq = lq.userActionsInstrumentation) || void 0 === gq ? void 0 : gq.dataAttributeName) && void 0 !== Eq ? Eq : wY,
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2660` → after: `L2660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2660) · [Before (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2660)

```diff
-               return uz.endsWith("-name") ? `${uz.slice(0,-5)}-timeout` : `${uz}-timeout`
+               return Eq.endsWith("-name") ? `${Eq.slice(0,-5)}-timeout` : `${Eq}-timeout`
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2709` → after: `L2709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2709) · [Before (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2709)

```diff
-           super(), this.name = uz, this.attributes = iz, this.id = wu(), this.trigger = Ez, this.parentId = null !== bz && void 0 !== bz ? bz : this.id, this.trackUserActionsExcludeItem = lz, this.importance = Mz, this._pushEvent = tz, this._itemBuffer = new rn, this._transports  … [truncated]
+           super(), this.name = Eq, this.attributes = Oq, this.id = jE(), this.trigger = Yq, this.parentId = null !== gq && void 0 !== gq ? gq : this.id, this.trackUserActionsExcludeItem = mq, this.importance = xq, this._pushEvent = Aq, this._itemBuffer = new ol, this._transports  … [truncated]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2823-L2826` → after: `L2823-L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2823-L2826) · [Before (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2823-L2826)

```diff
-           inactivityMs: null !== (bz = null === uz || void 0 === uz ? void 0 : uz.inactivityMs) && void 0 !== bz ? bz : 100,
-           drainTimeoutMs: null !== (Ez = null === uz || void 0 === uz ? void 0 : uz.drainTimeoutMs) && void 0 !== Ez ? Ez : 1e4,
-           isOperationStart: null !== (nz = null === uz || void 0 === uz ? void 0 : uz.isOperationStart) && void 0 !== nz ? nz : () => {},
-           isOperationEnd: null !== (iz = null === uz || void 0 === uz ? void 0 : uz.isOperationEnd) && void 0 !== iz ? iz : () => {}
+           inactivityMs: null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.inactivityMs) && void 0 !== gq ? gq : 100,
+           drainTimeoutMs: null !== (Yq = null === Eq || void 0 === Eq ? void 0 : Eq.drainTimeoutMs) && void 0 !== Yq ? Yq : 1e4,
+           isOperationStart: null !== (lq = null === Eq || void 0 === Eq ? void 0 : Eq.isOperationStart) && void 0 !== lq ? lq : () => {},
+           isOperationEnd: null !== (Oq = null === Eq || void 0 === Eq ? void 0 : Eq.isOperationEnd) && void 0 !== Oq ? Oq : () => {}
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2891` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2891) · [Before (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2891)

```diff
-               const bz = null !== uz && void 0 !== uz ? uz : location.href;
+               const gq = null !== Eq && void 0 !== Eq ? Eq : location.href;
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2972` → after: `L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2972) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2972)

```diff
-     var Wn = bz(6424);
+     var Rl = gq(6578);
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2996-L3000` → after: `L2996-L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2996-L3000) · [Before (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L2996-L3000)

```diff
-             name: null !== Ez && void 0 !== Ez ? Ez : mb,
-             version: null !== nz && void 0 !== nz ? nz : mb,
-             os: `${null!==iz&&void 0!==iz?iz:mb} ${null!==lz&&void 0!==lz?lz:mb}`,
-             userAgent: null !== bz && void 0 !== bz ? bz : mb,
-             language: null !== Mz && void 0 !== Mz ? Mz : mb,
+             name: null !== Yq && void 0 !== Yq ? Yq : zg,
+             version: null !== lq && void 0 !== lq ? lq : zg,
+             os: `${null!==Oq&&void 0!==Oq?Oq:zg} ${null!==mq&&void 0!==mq?mq:zg}`,
+             userAgent: null !== gq && void 0 !== gq ? gq : zg,
+             language: null !== xq && void 0 !== xq ? xq : zg,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3002` → after: `L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3002) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3002)

```diff
-             brands: null !== Hz && void 0 !== Hz ? Hz : mb,
+             brands: null !== cq && void 0 !== cq ? cq : zg,
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3023` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3023) · [Before (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3023)

```diff
-         id: null !== (uz = null === (bz = Rz.config) || void 0 === bz || null === (bz = bz.sessionTracking) || void 0 === bz || null === (Ez = bz.generateSessionId) || void 0 === Ez ? void 0 : Ez.call(bz)) && void 0 !== uz ? uz : wu(),
+         id: null !== (Eq = null === (gq = Vq.config) || void 0 === gq || null === (gq = gq.sessionTracking) || void 0 === gq || null === (Yq = gq.generateSessionId) || void 0 === Yq ? void 0 : Yq.call(gq)) && void 0 !== Eq ? Eq : jE(),
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3100` → after: `L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3100) · [Before (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3100)

```diff
-         return this.unpatchedConsole[null !== (uz = this.options.level) && void 0 !== uz ? uz : fb.DEBUG]("New event", ni([zz]))
+         return this.unpatchedConsole[null !== (Eq = this.options.level) && void 0 !== Eq ? Eq : og.DEBUG]("New event", EO([qq]))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3169)

```diff
-                 const pz = Math.min(null !== (lz = Oz.retryAfterMs) && void 0 !== lz ? lz : zz.options.retry.initialBackoffMs * Math.pow(zz.options.retry.backoffMultiplier, iz - 1), zz.options.retry.maxBackoffMs);
+                 const Bq = Math.min(null !== (mq = uq.retryAfterMs) && void 0 !== mq ? mq : qq.options.retry.initialBackoffMs * Math.pow(qq.options.retry.backoffMultiplier, Oq - 1), qq.options.retry.maxBackoffMs);
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3319-L3321` → after: `L3319-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3319-L3321) · [Before (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3319-L3321)

```diff
-         super(), this.options = zz, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = bb, this.pendingCustomSends = 0, this.getNow = null !== (uz = zz.getNow) && void 0 !== uz ? uz : Date.now, this.requestTimeoutMs = null !== (bz = zz.requestTimeoutMs) && void 0 … [truncated]
-           bufferSize: null !== (nz = zz.bufferSize) && void 0 !== nz ? nz : 30,
-           concurrency: null !== (iz = zz.concurrency) && void 0 !== iz ? iz : 5,
+         super(), this.options = qq, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = gg, this.pendingCustomSends = 0, this.getNow = null !== (Eq = qq.getNow) && void 0 !== Eq ? Eq : Date.now, this.requestTimeoutMs = null !== (gq = qq.requestTimeoutMs) && void 0 … [truncated]
+           bufferSize: null !== (lq = qq.bufferSize) && void 0 !== lq ? lq : 30,
+           concurrency: null !== (Oq = qq.concurrency) && void 0 !== Oq ? Oq : 5,
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3323-L3326` → after: `L3323-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3323-L3326) · [Before (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3323-L3326)

```diff
-             maxAttempts: null !== (lz = null === (Mz = zz.retry) || void 0 === Mz ? void 0 : Mz.maxAttempts) && void 0 !== lz ? lz : 3,
-             initialBackoffMs: null !== (tz = null !== (Hz = null === (Oz = zz.retry) || void 0 === Oz ? void 0 : Oz.initialBackoffMs) && void 0 !== Hz ? Hz : zz.defaultRateLimitBackoffMs) && void 0 !== tz ? tz : 1e3,
-             maxBackoffMs: null !== (pz = null === (dz = zz.retry) || void 0 === dz ? void 0 : dz.maxBackoffMs) && void 0 !== pz ? pz : 3e4,
-             backoffMultiplier: null !== (Fz = null === (Zz = zz.retry) || void 0 === Zz ? void 0 : Zz.backoffMultiplier) && void 0 !== Fz ? Fz : 2
+             maxAttempts: null !== (mq = null === (xq = qq.retry) || void 0 === xq ? void 0 : xq.maxAttempts) && void 0 !== mq ? mq : 3,
+             initialBackoffMs: null !== (Aq = null !== (cq = null === (uq = qq.retry) || void 0 === uq ? void 0 : uq.initialBackoffMs) && void 0 !== cq ? cq : qq.defaultRateLimitBackoffMs) && void 0 !== Aq ? Aq : 1e3,
+             maxBackoffMs: null !== (Bq = null === (Wq = qq.retry) || void 0 === Wq ? void 0 : Wq.maxBackoffMs) && void 0 !== Bq ? Bq : 3e4,
+             backoffMultiplier: null !== (Nq = null === (aq = qq.retry) || void 0 === aq ? void 0 : aq.backoffMultiplier) && void 0 !== Nq ? Nq : 2
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3329` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3329) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3329)

```diff
-           getRandom: null !== (Rz = zz.getRandom) && void 0 !== Rz ? Rz : Math.random,
+           getRandom: null !== (Vq = qq.getRandom) && void 0 !== Vq ? Vq : Math.random,
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3331` → after: `L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3331) · [Before (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3331)

```diff
-             this.logDebug(`Retrying failed request after ${zz}ms. Attempt ${uz}.`)
+             this.logDebug(`Retrying failed request after ${qq}ms. Attempt ${Eq}.`)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3334-L3335)

```diff
-           size: null !== (Kz = zz.bufferSize) && void 0 !== Kz ? Kz : 30,
-           concurrency: null !== (wz = zz.concurrency) && void 0 !== wz ? wz : 5
+           size: null !== (dq = qq.bufferSize) && void 0 !== dq ? dq : 30,
+           concurrency: null !== (jq = qq.concurrency) && void 0 !== jq ? jq : 5
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3410` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3410) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3410)

```diff
-         return [this.options.url].concat(null !== (zz = this.config.ignoreUrls) && void 0 !== zz ? zz : [])
+         return [this.options.url].concat(null !== (qq = this.config.ignoreUrls) && void 0 !== qq ? qq : [])
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3422` → after: `L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3422) · [Before (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3422)

```diff
-             Mz = null !== (Ez = uz.options.requestOptions) && void 0 !== Ez ? Ez : {},
+             xq = null !== (Yq = Eq.options.requestOptions) && void 0 !== Yq ? Yq : {},
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3566` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3566) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3566)

```diff
-           return Number.isFinite(zz) ? zz : Number.POSITIVE_INFINITY
+           return Number.isFinite(qq) ? qq : Number.POSITIVE_INFINITY
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3623` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3623) · [Before (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3623)

```diff
-               day: Number(null !== Hz && void 0 !== Hz ? Hz : Oz),
+               day: Number(null !== cq && void 0 !== cq ? cq : uq),
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3722` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3722) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3722)

```diff
-         zz.error(`${bz.prefix}\n`, ...Ez)
+         qq.error(`${gq.prefix}\n`, ...Yq)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3725` → after: `L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3725) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3725)

```diff
-         zz.warn(`${bz.prefix}\n`, ...Ez)
+         qq.warn(`${gq.prefix}\n`, ...Yq)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3728` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3728) · [Before (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3728)

```diff
-         zz.info(`${bz.prefix}\n`, ...Ez)
+         qq.info(`${gq.prefix}\n`, ...Yq)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3731` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3731) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3731)

```diff
-         zz.debug(`${bz.prefix}\n`, ...Ez)
+         qq.debug(`${gq.prefix}\n`, ...Yq)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3766` → after: `L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3766) · [Before (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3766)

```diff
-         dataAttributeName: CE(null !== (bz = null === (nz = zz.userActionsInstrumentation) || void 0 === nz ? void 0 : nz.dataAttributeName) && void 0 !== bz ? bz : jE),
+         dataAttributeName: IY(null !== (gq = null === (lq = qq.userActionsInstrumentation) || void 0 === lq ? void 0 : lq.dataAttributeName) && void 0 !== gq ? gq : wY),
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3785` → after: `L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3785) · [Before (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3785)

```diff
-         ignoreUrls: [...null !== (Mz = zz.ignoreUrls) && void 0 !== Mz ? Mz : [], ...oz ? [oz] : [], /\/collect(?:\/[\w]*)?$/],
+         ignoreUrls: [...null !== (xq = qq.ignoreUrls) && void 0 !== xq ? xq : [], ...yq ? [yq] : [], /\/collect(?:\/[\w]*)?$/],
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3811` → after: `L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3811) · [Before (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3811)

```diff
-       } = null !== (uz = null === zz || void 0 === zz ? void 0 : zz.pageTracking) && void 0 !== uz ? uz : {}, lz = [Bn, Cn, Ti({
+       } = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.pageTracking) && void 0 !== Eq ? Eq : {}, mq = [Xl, wl, rO({
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3814` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3814) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3814)

```diff
-       }), ...null !== (bz = zz.metas) && void 0 !== bz ? bz : [], kn];
+       }), ...null !== (gq = qq.metas) && void 0 !== gq ? gq : [], Cl];
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3826)

```diff
-         session: Ou(Ou({}, null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.session) && void 0 !== Ez ? Ez : {}), {}, {
+         session: uE(uE({}, null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.session) && void 0 !== Yq ? Yq : {}), {}, {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3844` → after: `L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3844) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3844)

```diff
-       const uz = `__faroBundleId_${zz}`,
+       const Eq = `__faroBundleId_${qq}`,
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3848` → after: `L3848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3848) · [Before (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3848)

```diff
-       return "string" === typeof Ez && "" !== Ez ? Ez : void 0
+       return "string" === typeof Yq && "" !== Yq ? Yq : void 0
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3855)

```diff
-           return null === Oz || void 0 === Oz ? void 0 : Oz[`__faroGitHash_${zz}`]
+           return null === uq || void 0 === uq ? void 0 : uq[`__faroGitHash_${qq}`]
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3869` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3869) · [Before (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3869)

```diff
-       lz && zz.api.setSession(lz), zz.config.app && (iz.app = Yu(Yu({}, zz.config.app), iz.app)), zz.config.user && (iz.user = zz.config.user), zz.config.view && (iz.view = zz.config.view), zz.metas.add(iz, ...null !== (bz = zz.config.metas) && void 0 !== bz ? bz : [])
+       mq && qq.api.setSession(mq), qq.config.app && (Oq.app = eE(eE({}, qq.config.app), Oq.app)), qq.config.user && (Oq.user = qq.config.user), qq.config.view && (Oq.view = qq.config.view), qq.metas.add(Oq, ...null !== (gq = qq.config.metas) && void 0 !== gq ? gq : [])
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3874` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3874) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3874)

```diff
-         this.signalBuffer = [], this.itemLimit = null !== (bz = null === uz || void 0 === uz ? void 0 : uz.itemLimit) && void 0 !== bz ? bz : 50, this.sendTimeout = null !== (Ez = null === uz || void 0 === uz ? void 0 : uz.sendTimeout) && void 0 !== Ez ? Ez : 250, this.paused = ( … [truncated]
+         this.signalBuffer = [], this.itemLimit = null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.itemLimit) && void 0 !== gq ? gq : 50, this.sendTimeout = null !== (Yq = null === Eq || void 0 === Eq ? void 0 : Eq.sendTimeout) && void 0 !== Yq ? Yq : 250, this.paused = ( … [truncated]
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3928` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3928) · [Before (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3928)

```diff
-           for (const Ez of iz) uz.debug(`Transporting item using ${Ez.name}\n`, bz), Ez.isBatched() && Ez.send(bz)
+           for (const Yq of Oq) Eq.debug(`Transporting item using ${Yq.name}\n`, gq), Yq.isBatched() && Yq.send(gq)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3939)

```diff
-             uz.debug(`Adding "${nz.name}" transport`), iz.some((zz => zz === nz)) ? uz.warn(`Transport ${nz.name} is already added`) : (nz.unpatchedConsole = zz, nz.internalLogger = uz, nz.config = bz, nz.metas = Ez, iz.push(nz))
+             Eq.debug(`Adding "${lq.name}" transport`), Oq.some((qq => qq === lq)) ? Eq.warn(`Transport ${lq.name} is already added`) : (lq.unpatchedConsole = qq, lq.internalLogger = Eq, lq.config = gq, lq.metas = Yq, Oq.push(lq))
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3971` → after: `L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3971) · [Before (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3971)

```diff
-                   uz.debug(`Transporting item using ${Mz.name}\n`, nz), Mz.isBatched() ? (null === (lz = bz.batching) || void 0 === lz ? void 0 : lz.enabled) || Mz.send([nz]) : Mz.send(nz)
+                   Eq.debug(`Transporting item using ${xq.name}\n`, lq), xq.isBatched() ? (null === (mq = gq.batching) || void 0 === mq ? void 0 : mq.enabled) || xq.send([lq]) : xq.send(lq)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3984-L3985` → after: `L3984-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3984-L3985) · [Before (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L3984-L3985)

```diff
-             uz.debug(`Removing "${zz.name}" transport`);
-             const bz = iz.indexOf(zz); - 1 !== bz ? iz.splice(bz, 1) : uz.warn(`Transport "${zz.name}" is not added`)
+             Eq.debug(`Removing "${qq.name}" transport`);
+             const gq = Oq.indexOf(qq); - 1 !== gq ? Oq.splice(gq, 1) : Eq.warn(`Transport "${qq.name}" is not added`)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4010` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4010) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4010)

```diff
-       return ji = null !== (uz = zz.unpatchedConsole) && void 0 !== uz ? uz : ji, ji
+       return RO = null !== (Eq = qq.unpatchedConsole) && void 0 !== Eq ? Eq : RO, RO
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4030)

```diff
-       Bi = null !== (Mz = bz.parseStacktrace) && void 0 !== Mz ? Mz : Bi;
+       FO = null !== (xq = gq.parseStacktrace) && void 0 !== xq ? xq : FO;
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4032)

```diff
-           uz.debug("Changing stacktrace parser"), Bi = null !== zz && void 0 !== zz ? zz : Bi
+           Eq.debug("Changing stacktrace parser"), FO = null !== qq && void 0 !== qq ? qq : FO
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4061` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4061) · [Before (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4061)

```diff
-             }(Oz, null !== Kz && void 0 !== Kz ? Kz : zz)) try {
+             }(uq, null !== dq && void 0 !== dq ? dq : qq)) try {
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4070)

```diff
-               }(null !== Kz && void 0 !== Kz ? Kz : zz)), null !== Fz && void 0 !== Fz ? Fz : {})),
+               }(null !== dq && void 0 !== dq ? dq : qq)), null !== Nq && void 0 !== Nq ? Nq : {})),
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4088)

```diff
-             Hz = null !== (fz = Hz) && void 0 !== fz ? fz : zz.stack ? null === Bi || void 0 === Bi ? void 0 : Bi(zz).frames : void 0, (null === Hz || void 0 === Hz ? void 0 : Hz.length) && (oz.stacktrace = {
+             cq = null !== (oq = cq) && void 0 !== oq ? oq : qq.stack ? null === FO || void 0 === FO ? void 0 : FO(qq).frames : void 0, (null === cq || void 0 === cq ? void 0 : cq.length) && (yq.stacktrace = {
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4232` → after: `L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4232) · [Before (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4232)

```diff
-                     domain: null !== Hz && void 0 !== Hz ? Hz : bz.eventDomain,
+                     domain: null !== cq && void 0 !== cq ? cq : gq.eventDomain,
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4314` → after: `L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4314) · [Before (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4314)

```diff
-             const bz = oz(zz) ? Yu(Yu({}, null !== (uz = null === nz || void 0 === nz ? void 0 : nz.page) && void 0 !== uz ? uz : pz()), {}, {
+             const gq = yq(qq) ? eE(eE({}, null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.page) && void 0 !== Eq ? Eq : Bq()), {}, {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4335` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4335) · [Before (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4335)

```diff
-         const Hz = null !== (Mz = bz.logArgsSerializer) && void 0 !== Mz ? Mz : Pb;
+         const cq = null !== (xq = gq.logArgsSerializer) && void 0 !== xq ? xq : Zg;
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4350` → after: `L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4350) · [Before (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4350)

```diff
-                   level: null !== Oz && void 0 !== Oz ? Oz : "log",
+                   level: null !== uq && void 0 !== uq ? uq : "log",
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4469` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4469) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4469)

```diff
-                 nz = null !== (uz = bz) && void 0 !== uz ? uz : iz;
+                 lq = null !== (Eq = gq) && void 0 !== Eq ? Eq : Oq;
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4503` → after: `L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4503) · [Before (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4503)

```diff
-                 uz.debug(`Adding "${Mz.name}" instrumentation`), lz.some((zz => zz.name === Mz.name)) ? uz.warn(`Instrumentation ${Mz.name} is already added`) : (Mz.unpatchedConsole = zz, Mz.internalLogger = uz, Mz.config = bz, Mz.metas = Ez, Mz.transports = nz, Mz.api = iz, lz.p … [truncated]
+                 Eq.debug(`Adding "${xq.name}" instrumentation`), mq.some((qq => qq.name === xq.name)) ? Eq.warn(`Instrumentation ${xq.name} is already added`) : (xq.unpatchedConsole = qq, xq.internalLogger = Eq, xq.config = gq, xq.metas = Yq, xq.transports = lq, xq.api = Oq, mq.p … [truncated]
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4514-L4516` → after: `L4514-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4514-L4516) · [Before (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4514-L4516)

```diff
-                 uz.debug(`Removing "${zz.name}" instrumentation`);
-                 const nz = lz.reduce(((uz, bz, Ez) => null === uz && bz.name === zz.name ? Ez : null), null);
-                 null !== nz ? (null === (bz = (Ez = lz[nz]).destroy) || void 0 === bz || bz.call(Ez), lz.splice(nz, 1)) : uz.warn(`Instrumentation "${zz.name}" is not added`)
+                 Eq.debug(`Removing "${qq.name}" instrumentation`);
+                 const lq = mq.reduce(((Eq, gq, Yq) => null === Eq && gq.name === qq.name ? Yq : null), null);
+                 null !== lq ? (null === (gq = (Yq = mq[lq]).destroy) || void 0 === gq || gq.call(Yq), mq.splice(lq, 1)) : Eq.warn(`Instrumentation "${qq.name}" is not added`)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4536` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4536) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4536)

```diff
-   6424: function(zz, uz, bz) {
+   6578: function(qq, Eq, gq) {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4593` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4593) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4593)

```diff
-           if (typeof zz === Hz) return zz = zz.replace(/^\s\s*/, ""), typeof uz === Mz ? zz : zz.substring(0, 500)
+           if (typeof qq === cq) return qq = qq.replace(/^\s\s*/, ""), typeof Eq === xq ? qq : qq.substring(0, 500)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4601` → after: `L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4601) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4601)

```diff
-                 for (nz = 0; nz < Fz.length; nz++) Oz = Hz[++Ez], typeof(Mz = Fz[nz]) === tz && Mz.length > 0 ? 2 === Mz.length ? typeof Mz[1] == lz ? this[Mz[0]] = Mz[1].call(this, Oz) : this[Mz[0]] = Mz[1] : 3 === Mz.length ? typeof Mz[1] !== lz || Mz[1].exec && Mz[1].test ? th … [truncated]
+                 for (lq = 0; lq < Nq.length; lq++) uq = cq[++Yq], typeof(xq = Nq[lq]) === Aq && xq.length > 0 ? 2 === xq.length ? typeof xq[1] == mq ? this[xq[0]] = xq[1].call(this, uq) : this[xq[0]] = xq[1] : 3 === xq.length ? typeof xq[1] !== mq || xq[1].exec && xq[1].test ? th … [truncated]
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4609-L4610` → after: `L4609-L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4609-L4610) · [Before (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L4609-L4610)

```diff
-                 if (Yz(uz[bz][Ez], zz)) return "?" === bz ? iz : bz
-             } else if (Yz(uz[bz], zz)) return "?" === bz ? iz : bz;
+                 if (eq(Eq[gq][Yq], qq)) return "?" === gq ? Oq : gq
+             } else if (eq(Eq[gq], qq)) return "?" === gq ? Oq : gq;
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5339` → after: `L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L5339) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L5339)

```diff
-           }, this.uR = function() {
+           }, this.Ba = function() {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5349` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b218be20cfcaf8ab5f565687b15d6b36e441d8f467d949e0f0a37601bb8fcf41) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L5349) · [Before (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/errorLogging.js#L5349)

```diff
-               engine: this.uR(),
+               engine: this.Ba(),
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1)

```diff
- /*! For license information please see ad2avs.fa-renderer.23117dea.chunk.js.LICENSE.txt */
+ /*! For license information please see bbb6l5.fa-renderer.81807e57.chunk.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L5)

```diff
-   6410: (zz, uz, bz) => {
+   6559: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L9-L10)

```diff
-     var Ez = bz(6403),
-       nz = bz(4714),
+     var Yq = gq(6553),
+       lq = gq(4800),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L12)

```diff
-       lz = bz(56);
+       mq = gq(57);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L32)

```diff
-         return "symbol" == typeof uz ? uz : uz + ""
+         return "symbol" == typeof Eq ? Eq : Eq + ""
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L122)

```diff
-       var Kz = bz(6419);
+       var dq = gq(6564);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L193)

```diff
-         return Jz[zz] ? zz : null
+         return hq[qq] ? qq : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L200)

```diff
-       return uz = zz, (uz -= 0) === uz ? zz : (zz = zz.replace(/[\-_\s]+(.)?/g, (function(zz, uz) {
+       return Eq = qq, (Eq -= 0) === Eq ? qq : (qq = qq.replace(/[\-_\s]+(.)?/g, (function(qq, Eq) {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L212)

```diff
-       return zz && "object" === Fz(zz) && zz.prefix && zz.iconName && zz.icon ? zz : Ez.parse.icon ? Ez.parse.icon(zz) : null === zz ? null : zz && "object" === Fz(zz) && zz.prefix && zz.iconName ? zz : Array.isArray(zz) && 2 === zz.length ? {
+       return qq && "object" === Nq(qq) && qq.prefix && qq.iconName && qq.icon ? qq : Yq.parse.icon ? Yq.parse.icon(qq) : null === qq ? null : qq && "object" === Nq(qq) && qq.prefix && qq.iconName ? qq : Array.isArray(qq) && 2 === qq.length ? {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L337)

```diff
-                 return nz.startsWith("webkit") ? zz[(bz = nz, bz.charAt(0).toUpperCase() + bz.slice(1))] = iz : zz[nz] = iz, zz
+                 return lq.startsWith("webkit") ? qq[(gq = lq, gq.charAt(0).toUpperCase() + gq.slice(1))] = Oq : qq[lq] = Oq, qq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L341)

```diff
-               0 === uz.indexOf("aria-") || 0 === uz.indexOf("data-") ? zz.attrs[uz.toLowerCase()] = Ez : zz.attrs[Xz(uz)] = Ez
+               0 === Eq.indexOf("aria-") || 0 === Eq.indexOf("data-") ? qq.attrs[Eq.toLowerCase()] = Yq : qq.attrs[Hq(Eq)] = Yq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L369-L370)

```diff
-   4722: (zz, uz, bz) => {
-     var Ez = bz(4726);
+   4807: (qq, Eq, gq) => {
+     var Yq = gq(4811);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L413-L414` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L413-L414) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L413-L414)

```diff
-   4714: (zz, uz, bz) => {
-     zz.exports = bz(4722)()
+   4800: (qq, Eq, gq) => {
+     qq.exports = gq(4807)()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L416)

```diff
-   4726: zz => {
+   4811: qq => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L419)

```diff
-   6403: (zz, uz, bz) => {
+   6553: (qq, Eq, gq) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L565)

```diff
-       return "symbol" == typeof uz ? uz : uz + ""
+       return "symbol" == typeof Eq ? Eq : Eq + ""
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1586)

```diff
-         bz = void 0 === uz ? Gz : uz,
+         gq = void 0 === Eq ? fq : Eq,
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1590)

```diff
-         iz = zz in nb.styles ? zz : null;
+         Oq = qq in lg.styles ? qq : null;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1631)

```diff
-             Ez ? bz = Ez : zz && uz.push(zz)
+             Yq ? gq = Yq : qq && Eq.push(qq)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1834)

```diff
-           uz = void 0 === zz ? vz : zz;
+           Eq = void 0 === qq ? rq : qq;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L1871)

```diff
-         Fz = Ez.found ? Ez : bz,
+         Nq = Yq.found ? Yq : gq,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2056)

```diff
-       lE = yu.measurePerformance && Jz && Jz.mark && Jz.measure ? Jz : {
+       mY = RE.measurePerformance && hq && hq.mark && hq.measure ? hq : {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2086)

```diff
-         bz = void 0 === uz ? "svg" === zz.tag ? dE : FE : uz;
+         gq = void 0 === Eq ? "svg" === qq.tag ? WY : NY : Eq;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2137)

```diff
-       var bz = "function" === typeof uz ? uz : OE;
+       var gq = "function" === typeof Eq ? Eq : uY;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2162)

```diff
-           bz = void 0 === uz ? OE : uz,
+           gq = void 0 === Eq ? uY : Eq,
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2164)

```diff
-           nz = void 0 === Ez ? OE : Ez,
+           lq = void 0 === Yq ? uY : Yq,
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2166)

```diff
-           lz = void 0 === iz ? OE : iz,
+           mq = void 0 === Oq ? uY : Oq,
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2168` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2168) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2168)

```diff
-           tz = void 0 === Mz ? vz : Mz;
+           Aq = void 0 === xq ? rq : xq;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2307)

```diff
-           Ez = void 0 === bz ? Wu : bz,
+           Yq = void 0 === gq ? sE : gq,
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2359)

```diff
-                 Ez = (uz || {}).icon ? uz : eb(uz || {}),
+                 Yq = (Eq || {}).icon ? Eq : Xg(Eq || {}),
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2361)

```diff
-               return nz && (nz = (nz || {}).icon ? nz : eb(nz || {})), zz(Ez, tz(tz({}, bz), {}, {
+               return lq && (lq = (lq || {}).icon ? lq : Xg(lq || {})), qq(Yq, Aq(Aq({}, gq), {}, {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2378)

```diff
-               bz = void 0 === uz ? vz : uz,
+               gq = void 0 === Eq ? rq : Eq,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2518)

```diff
-                 Ez = void 0 === bz ? Wu : bz,
+                 Yq = void 0 === gq ? sE : gq,
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2821` → after: `L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2821) · [Before (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2821)

```diff
-           return zz.includes("(") ? zz : zz.split(",").map((function(zz) {
+           return qq.includes("(") ? qq : qq.split(",").map((function(qq) {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L2914)

```diff
-               bz = void 0 === uz ? vz : uz;
+               gq = void 0 === Eq ? rq : Eq;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5efR3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4399ae2e4e577c592746531224b91bf113457285ed100e98d939788a2dd0b5ef) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/fa-renderer.js#L3280)

```diff
-   6419: zz => {
+   6564: qq => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L4)

```diff
-   8867: (zz, uz, bz) => {
+   9145: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L9` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L13-L14) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L9)

```diff
-       c: () => Ez
+       b: () => lq,
+       e: () => Yq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L12` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L17) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L12)

```diff
-   8860: (zz, uz, bz) => {
+   9141: (qq, Eq, gq) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L21-L25` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L28-L33) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L21-L25)

```diff
-     var Ez = bz(4564),
-       nz = bz(8867),
-       iz = bz(2689),
-       lz = bz(1074),
-       Mz = bz(2740);
+     var Yq = gq(4625),
+       lq = gq(4616),
+       Oq = gq(9145),
+       mq = gq(2733),
+       xq = gq(1060),
+       Aq = gq(2886);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L30` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L38) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L30)

```diff
-           this.add(uz.startTime, uz.duration, uz.blockingDuration, (0, lz.q)(uz))
+           this.add(Eq.startTime, Eq.duration, Eq.blockingDuration, (0, xq.l)(Eq))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L33` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L41) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L33)

```diff
-         }, null !== (0, Mz.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Mz.d)("longtask", this.onLongTask) ? "longtask" : null
+         }, null !== (0, Aq.c)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Aq.c)("longtask", this.onLongTask) ? "longtask" : null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L49-L50` → after: `L57-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L57-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L57-L140) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L49-L50)

```diff
-         const lz = "loaf" === this.kind && bz > 0 ? ` (blocking ${nz.toFixed(0)}, script ${iz.toFixed(0)})` : "";
-         return `${bz} ${this.kind} ${Ez.toFixed(0)} ms${lz}`
+         const mq = "loaf" === this.kind && gq > 0 ? ` (blocking ${lq.toFixed(0)}, script ${Oq.toFixed(0)})` : "";
+         return `${gq} ${this.kind} ${Yq.toFixed(0)} ms${mq}`
+       }
+     }
+ 
+     function uq(qq, Eq) {
+       return Eq < 0 || qq < Eq ? qq : qq - Eq
+     }
+     class Bq {
+       constructor() {
+         this.source = null, this.now = {
+           chunksReceived: -1,
+           chunksCancelled: -1,
+           chunksStored: -1,
+           jobsSent: -1,
+           jobsDone: -1,
+ ... (68 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L60-L64` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L152) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L60-L64)

```diff
-       return zz.toFixed(1)
-     }
- 
-     function Rz(zz) {
-       return zz.mainMs = 0, zz.renderMs = 0, zz.ticks = 0, zz.tickMs = 0, zz.rafs = 0, zz.pendingBefore = -1, zz.pendingMax = -1, zz.pendingAfter = -1, zz.meshes = -1, zz
+       return qq.mainMs = 0, qq.renderMs = 0, qq.ticks = 0, qq.tickMs = 0, qq.rafs = 0, qq.pendingBefore = -1, qq.pendingMax = -1, qq.pendingAfter = -1, qq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L72` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L160) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L72)

```diff
-         this.intervals = new Float64Array(Fz), this.totals = Kz(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
+         this.intervals = new Float64Array(oq), this.totals = Qq(), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = new Wq, this.shown = 0, this.dropped = 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L75` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L163) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L75)

```diff
-         Rz(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn = 0, this.shown = 0, this.dropped = 0
+         Pq(this.totals), this.frames = 0, this.slow = 0, this.maxMs = 0, this.undrawn.reset(), this.shown = 0, this.dropped = 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L80` → after: `L168-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L168-L170) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L80)

```diff
-         this.longTasks = new tz, this.summary = new wz, this.current = Kz(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.lastMeshes = -1, this.ahead = -1, this.tokens = pz, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.restar … [truncated]
+         this.longTasks = new cq, this.summary = new yq, this.current = Qq(), this.lastDrawnStartMs = -1, this.lastPending = -1, this.ahead = -1, this.tokens = jq, this.lastRefillMs = performance.now(), this.waiting = [], this.outlierTimer = null, this.flushTimer = null, this.star … [truncated]
+           this.restart(), this.loadLine.visibilityChanged(performance.now())
+         }, this.restart = () => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L84-L85` → after: `L174-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L174-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L174-L178) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L84-L85)

```diff
-         }, this.wasmFrame = (zz, uz, bz, nz, iz, lz, Mz) => {
-           this.ahead = zz.headerWord(Ez.A.Pacing) & Ez.P.AheadMask, this.frame(uz, bz, nz, iz, zz.headerWord(Ez.A.RenderUs) / 1e3, zz.headerWord(Ez.A.TicksRun), lz, zz.headerWord(Ez.A.RenderPending), Mz)
+         }, this.wasmFrame = (qq, Eq, gq, lq, Oq, mq) => {
+           this.ahead = qq.headerWord(Yq.C.Pacing) & Yq.T.AheadMask, this.frame(Eq, gq, lq, Oq, qq.headerWord(Yq.C.RenderUs) / 1e3, qq.headerWord(Yq.C.TicksRun), mq, qq.headerWord(Yq.C.RenderPending))
+         }, this.wasmPeekPaced = qq => {
+           const Eq = performance.now();
+           this.frame(Eq, Eq, "paced", qq, 0, 0, 0, this.lastPending)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L87` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L180) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L87)

```diff
-           this.frame(zz, uz, !0, bz, uz - zz, 0, 0, -1, -1)
+           this.frame(qq, Eq, "drawn", gq, Eq - qq, 0, 0, -1)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L99-L100` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L192-L193) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L99-L100)

```diff
-             const Ez = [`long frame ${Zz(bz.intervalMs)} ms ending at ${Zz(bz.endMs)} ms: main ${Zz(bz.mainMs)} (render ${Zz(bz.renderMs)}, ${bz.ticks} ticks ${Zz(bz.tickMs)}), outside ${Zz(bz.intervalMs-bz.mainMs)}`, `${bz.rafs} rafs`];
-             bz.pendingBefore >= 0 && Ez.push(`pending ${bz.pendingBefore} -> ${bz.pendingAfter} (max ${bz.pendingMax})`), bz.meshes >= 0 && Ez.push(`${bz.meshes} meshes landed`), Ez.push(this.longTasks.describe(bz.endMs - bz.intervalMs, bz.endMs)), (0, iz.i)("frame", Ez.join("; " … [truncated]
+             const Yq = [`long frame ${(0,Oq.b)(gq.intervalMs)} ms ending at ${(0,Oq.b)(gq.endMs)} ms: main ${(0,Oq.b)(gq.mainMs)} (render ${(0,Oq.b)(gq.renderMs)}, ${gq.ticks} ticks ${(0,Oq.b)(gq.tickMs)}), outside ${(0,Oq.b)(gq.intervalMs-gq.mainMs)}`, `${gq.rafs} rafs`];
+             gq.pendingBefore >= 0 && Yq.push(`pending ${gq.pendingBefore} -> ${gq.pendingAfter} (max ${gq.pendingMax})`), Yq.push(this.longTasks.describe(gq.endMs - gq.intervalMs, gq.endMs)), (0, mq.m)("frame", Yq.join("; "))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L104-L110` → after: `L197-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L197-L206) · [Before (L104-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L104-L110)

```diff
-           const zz = this.summary,
-             uz = zz.totals;
-           if (0 === zz.frames) return zz.undrawn > 0 && (0, iz.i)("frame", `${Hz/1e3}s: no frames drawn, ${zz.undrawn} undrawn, pending max ${uz.pendingMax}`), void zz.reset();
-           const bz = zz.intervals.subarray(0, Math.min(zz.frames, Fz)).sort(),
-             Ez = [`${zz.frames} frames, median ${Zz((0,nz.c)(bz,.5))} p95 ${Zz((0,nz.c)(bz,.95))} max ${Zz(zz.maxMs)} ms, ${zz.slow} over 50, ${zz.shown+zz.dropped} over ${Oz}`, `${uz.rafs} rafs, ${zz.undrawn} undrawn`, `main ${Zz(uz.mainMs)} ms (render ${Zz(uz.renderMs)}, ${uz.t … [truncated]
-           uz.pendingMax >= 0 && Ez.push(`pending max ${uz.pendingMax}`), uz.meshes >= 0 && Ez.push(`${uz.meshes} meshes landed`), this.ahead >= 0 && Ez.push(`${this.ahead} frames ahead`), Ez.push(`outliers ${zz.shown} logged, ${zz.dropped} dropped`), (0, iz.i)("frame", `${Hz/1e3} … [truncated]
-         }, setInterval(this.flush, Hz), document.addEventListener("visibilitychange", this.restart)
+           this.flushTimer = null;
+           const qq = performance.now(),
+             Eq = Math.round((qq - this.lastFlushMs) / 1e3);
+           this.lastFlushMs = qq, this.scheduleFlush();
+           if (this.logSummary(Eq) || this.inGameSinceFlush) {
+             const Eq = this.loadLine.take(qq);
+             null !== Eq && (0, mq.m)("frame", Eq)
+           }
+           this.inGameSinceFlush = !1, this.summary.reset()
+         }, document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L114` → after: `L210-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L210-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L210-L224) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L114)

```diff
-         this.restart(), (0, iz.i)("frame", `start: ${zz} client, ${uz}, dpr ${window.devicePixelRatio}, long tasks ${null!==(bz=this.longTasks.kind)&&void 0!==bz?bz:"n/a"}; a summary each ${Hz/1e3} s in game, outliers over ${Oz} ms`)
+         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, mq.m)("frame", `start: ${qq} client, ${Eq}, dpr ${window.devicePixelRatio}, long tasks ${null!==(gq=this.longTasks.kind)&& … [truncated]
+       }
+       setLoadCounts(qq) {
+         this.loadLine.setSource(qq)
+       }
+       joined() {
+         this.startedMs = performance.now(), this.scheduleFlush()
+       }
+       inGame() {
+         this.inGameSinceFlush = !0
+       }
+       scheduleFlush() {
+         null !== this.flushTimer && clearTimeout(this.flushTimer);
+         const qq = performance.now() - this.startedMs < Vq;
+         this.flushTimer = setTimeout(this.flush, qq ? aq : Nq)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L116` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L226) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L116)

```diff
-       frame(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
+       frame(qq, Eq, gq, Yq, Oq, mq, xq, Aq) {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L119` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L229) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L119)

```diff
-         bz ? (this.lastDrawnStartMs >= 0 && (Hz.pendingAfter = this.lastPending, Hz.meshes = tz < 0 ? -1 : tz - this.lastMeshes, this.closeInterval(zz - this.lastDrawnStartMs, zz)), this.lastDrawnStartMs = zz, Rz(Hz).pendingBefore = this.lastPending, this.lastMeshes = tz) : this. … [truncated]
+         (0, lq.c)(gq) ? (this.lastDrawnStartMs >= 0 && (cq.pendingAfter = this.lastPending, this.closeInterval(qq - this.lastDrawnStartMs, qq)), this.lastDrawnStartMs = qq, Pq(cq).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L126` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L236) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L126)

```diff
-         nz.mainMs += Ez.mainMs, nz.renderMs += Ez.renderMs, nz.ticks += Ez.ticks, nz.tickMs += Ez.tickMs, nz.rafs += Ez.rafs, nz.meshes = Ez.meshes < 0 ? -1 : Math.max(0, nz.meshes) + Ez.meshes, zz > 50 && bz.slow++, zz > Oz && this.outlier(zz, uz)
+         lq.mainMs += Yq.mainMs, lq.renderMs += Yq.renderMs, lq.ticks += Yq.ticks, lq.tickMs += Yq.tickMs, lq.rafs += Yq.rafs, qq > 50 && gq.slow++, qq > dq && this.outlier(qq, Eq)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L144` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L262) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L144)

```diff
-   4564: (zz, uz, bz) => {
+   4625: (qq, Eq, gq) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L149` → after: `L266-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L266-L267) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L149)

```diff
-       Cb: () => Uz,
+       B: () => Yq,
+       C: () => Oq,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L152-L159` → after: `L270-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L270-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L270-L276) · [Before (L152-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L152-L159)

```diff
-       Gb: () => mz,
-       I: () => Wz,
-       Jb: () => qz,
-       M: () => Hz,
-       Mb: () => fz,
-       N: () => Rz,
-       Ob: () => sz,
-       P: () => tz,
+       G: () => wq,
+       H: () => uq,
+       Hb: () => Mq,
+       L: () => Bq,
+       Lb: () => Jq,
+       Nb: () => zq,
+       O: () => cq,
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L162` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L279) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L162)

```diff
-       S: () => pz,
+       T: () => Aq,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L164` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L281-L282) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L164)

```diff
-       W: () => Nz,
+       V: () => aq,
+       Vb: () => Qq,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L167` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L286-L287) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L167)

```diff
-       ab: () => vz,
+       _: () => nq,
+       _b: () => Rq,
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L169-L170` → after: `L289-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L289-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L289-L292) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L169-L170)

```diff
-       c: () => Dz,
-       cb: () => cz,
+       bc: () => lq,
+       e: () => sq,
+       ec: () => Xq,
+       f: () => Fq,
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L172-L174` → after: `L294-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L294-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L294-L296) · [Before (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L172-L174)

```diff
-       g: () => yz,
-       j: () => Oz,
-       jb: () => Vz,
+       i: () => Wq,
+       ib: () => iq,
+       kb: () => kq,
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L180-L181` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L301-L302) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L180-L181)

```diff
-       qb: () => Lz,
-       s: () => Kz,
+       sb: () => Zq,
+       t: () => oq,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L186-L187` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L306-L307) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L186-L187)

```diff
-       x: () => Mz,
-       y: () => Ez
+       y: () => mq,
+       zb: () => Vq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L4)

```diff
-   7706: (zz, uz) => {
+   7910: (qq, Eq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L9)

```diff
-     uz.d = {
+     Eq.e = {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L13)

```diff
-     }, uz.e = uz.d
+     }, Eq.f = Eq.e
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L15)

```diff
-   7713: (zz, uz) => {
+   7918: (qq, Eq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L20)

```diff
-     uz.c = {
+     Eq.e = {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L24)

```diff
-     }, uz.g = uz.c
+     }, Eq.g = Eq.e
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L26)

```diff
-   7717: (zz, uz) => {
+   7920: (qq, Eq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L31)

```diff
-     uz.b = {
+     Eq.c = {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L35)

```diff
-     }, uz.e = uz.b
+     }, Eq.d = Eq.c
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L37)

```diff
-   7723: (zz, uz) => {
+   7923: (qq, Eq) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L42)

```diff
-     uz.b = {
+     Eq.d = {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L46)

```diff
-     }, uz.f = uz.b
+     }, Eq.g = Eq.d
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L48)

```diff
-   7725: (zz, uz) => {
+   7931: (qq, Eq) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L57)

```diff
-     }, uz.d = uz.c
+     }, Eq.f = Eq.c
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L59)

```diff
-   7732: (zz, uz) => {
+   7940: (qq, Eq) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L64)

```diff
-     uz.e = {
+     Eq.b = {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L68)

```diff
-     }, uz.f = uz.e
+     }, Eq.e = Eq.b
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L70)

```diff
-   7740: (zz, uz) => {
+   7947: (qq, Eq) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L75)

```diff
-     uz.d = {
+     Eq.c = {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L79)

```diff
-     }, uz.f = uz.d
+     }, Eq.d = Eq.c
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L81)

```diff
-   7747: (zz, uz) => {
+   7952: (qq, Eq) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L92)

```diff
-   7753: (zz, uz) => {
+   7956: (qq, Eq) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L101)

```diff
-     }, uz.d = uz.b
+     }, Eq.f = Eq.b
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L103)

```diff
-   7758: (zz, uz) => {
+   7963: (qq, Eq) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L108)

```diff
-     uz.e = {
+     Eq.c = {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L112)

```diff
-     }, uz.i = uz.e
+     }, Eq.e = Eq.c
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L114)

```diff
-   7764: (zz, uz) => {
+   7972: (qq, Eq) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L123)

```diff
-     }, uz.h = uz.e
+     }, Eq.g = Eq.e
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L125)

```diff
-   7703: (zz, uz, bz) => {
+   7902: (qq, Eq, gq) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L129-L139` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L129-L139) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L129-L139)

```diff
-     var Ez = bz(7706),
-       nz = bz(7713),
-       iz = bz(7717),
-       lz = bz(7723),
-       Mz = bz(7725),
-       tz = bz(7732),
-       Hz = bz(7740),
-       Oz = bz(7747),
-       pz = bz(7753),
-       dz = bz(7758),
-       Fz = bz(7764);
+     var Yq = gq(7910),
+       lq = gq(7918),
+       Oq = gq(7920),
+       mq = gq(7923),
+       xq = gq(7931),
+       Aq = gq(7940),
+       cq = gq(7947),
+       uq = gq(7952),
+       Bq = gq(7956),
+       Wq = gq(7963),
+       Nq = gq(7972);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L141)

```diff
-       apple: Ez.e,
+       apple: Yq.f,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L143-L147` → after: `L143-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L143-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L143-L147) · [Before (L143-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L143-L147)

```diff
-       discord: iz.e,
-       "google-play": lz.f,
-       instagram: Mz.d,
-       "reddit-alien": tz.f,
-       tiktok: Hz.f,
+       discord: Oq.d,
+       "google-play": mq.g,
+       instagram: xq.f,
+       "reddit-alien": Aq.e,
+       tiktok: cq.d,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L149-L151` → after: `L149-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L149-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L149-L151) · [Before (L149-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L149-L151)

```diff
-       windows: pz.d,
-       "x-twitter": dz.i,
-       youtube: Fz.h
+       windows: Bq.f,
+       "x-twitter": Wq.e,
+       youtube: Nq.g
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L4)

```diff
-   7689: (zz, uz) => {
+   7887: (qq, Eq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L9)

```diff
-     uz.d = {
+     Eq.c = {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L13)

```diff
-     }, uz.g = uz.d
+     }, Eq.g = Eq.c
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L15)

```diff
-   7694: (zz, uz) => {
+   7894: (qq, Eq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L20)

```diff
-     uz.e = {
+     Eq.c = {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L24)

```diff
-     }, uz.g = uz.e
+     }, Eq.e = Eq.c
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L26)

```diff
-   7685: (zz, uz, bz) => {
+   7878: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L30-L31)

```diff
-     var Ez = bz(7689),
-       nz = bz(7694);
+     var Yq = gq(7887),
+       lq = gq(7894);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L34)

```diff
-       "planet-ringed": nz.g
+       "planet-ringed": lq.e
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L4)

```diff
-   7654: (zz, uz) => {
+   7849: (qq, Eq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L9)

```diff
-     uz.b = {
+     Eq.c = {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L13)

```diff
-     }, uz.d = uz.b
+     }, Eq.g = Eq.c
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L15)

```diff
-   7662: (zz, uz) => {
+   7857: (qq, Eq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L24)

```diff
-     }, uz.f = uz.b
+     }, Eq.d = Eq.b
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L26)

```diff
-   7669: (zz, uz) => {
+   7866: (qq, Eq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L31)

```diff
-     uz.c = {
+     Eq.e = {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L35)

```diff
-     }, uz.d = uz.c
+     }, Eq.g = Eq.e
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L37-L39` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L37-L39) · [Before (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L37-L39)

```diff
-   7677: (zz, uz, bz) => {
-     var Ez = bz(7680);
-     uz.c = {
+   7869: (qq, Eq, gq) => {
+     var Yq = gq(7872);
+     Eq.d = {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L43)

```diff
-     }, uz.d = uz.c, Ez.prefix, Ez.iconName, Ez.width, Ez.height, Ez.aliases, Ez.unicode, Ez.svgPathData, Ez.aliases
+     }, Eq.e = Eq.d, Yq.prefix, Yq.iconName, Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData, Yq.aliases
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L45)

```diff
-   7680: (zz, uz) => {
+   7872: (qq, Eq) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L59)

```diff
-   7645: (zz, uz, bz) => {
+   7845: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L63-L67` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L63-L67) · [Before (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L63-L67)

```diff
-     var Ez = bz(7654),
-       nz = bz(7662),
-       iz = bz(7669),
-       lz = bz(7677),
-       Mz = bz(7680);
+     var Yq = gq(7849),
+       lq = gq(7857),
+       Oq = gq(7866),
+       mq = gq(7869),
+       xq = gq(7872);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L69-L72` → after: `L69-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L69-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L69-L72) · [Before (L69-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L69-L72)

```diff
-       copy: Ez.d,
-       flag: nz.f,
-       heart: iz.d,
-       "user-friends": lz.d,
+       copy: Yq.g,
+       flag: lq.d,
+       heart: Oq.g,
+       "user-friends": mq.e,
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65)

#### 1. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L4)

```diff
-   6427: (zz, uz, bz) => {
+   6587: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L8-L42` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L8-L12) · [Before (L8-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L8-L42)

```diff
-     var Ez = bz(6430),
-       nz = bz(6440),
-       iz = bz(6455),
-       lz = bz(6460),
-       Mz = bz(6446),
-       tz = bz(6465),
-       Hz = bz(6473),
-       Oz = bz(6477),
-       pz = bz(6482),
-       dz = bz(6486),
-       Fz = bz(6490),
-       Zz = bz(6501),
-       Rz = bz(6506),
-       Kz = bz(6515),
-       wz = bz(6497),
-       Xz = bz(6520),
- ... (19 more removed lines; see GitHub link above)
+     var Yq = gq(6592),
+       lq = gq(6603),
+       Oq = gq(6614),
+       mq = gq(6619),
+       xq = gq(6605),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L44-L47` → after: `L14-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L14-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L14-L16) · [Before (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L44-L47)

```diff
-       gz = bz(6630),
-       Sz = bz(1053),
-       yz = bz(6639),
-       Dz = bz(6644),
+       cq = gq(6627),
+       uq = gq(6634),
+       Bq = gq(6642),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L49-L68` → after: `L18-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L18-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L18-L41) · [Before (L49-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L49-L68)

```diff
-       Wz = bz(6666),
-       ez = bz(6671),
-       jz = bz(6678),
-       Iz = bz(6685),
-       Bz = bz(6694),
-       Cz = bz(6696),
-       Yz = bz(6699),
-       kz = bz(6706),
-       zu = bz(6712),
-       uu = bz(6718),
-       bu = bz(6720),
-       Eu = bz(6727),
-       nu = bz(6740),
-       iu = bz(6742),
-       lu = bz(6758),
-       Mu = bz(6767),
- ... (4 more removed lines; see GitHub link above)
+       Nq = gq(6658),
+       aq = gq(6667),
+       Vq = gq(6675),
+       dq = gq(6684),
+       jq = gq(6692),
+       Hq = gq(6670),
+       oq = gq(6697),
+       Pq = gq(6702),
+       Qq = gq(6705),
+       yq = gq(6710),
+       tq = gq(6715),
+       rq = gq(6717),
+       vq = gq(6725),
+       hq = gq(6731),
+       nq = gq(6739),
+       bq = gq(6745),
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L70-L71` → after: `L43-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L43-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L43-L46) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L70-L71)

```diff
-       Fu = bz(6814),
-       Zu = bz(6828),
+       Lq = gq(6810),
+       Jq = gq(6816),
+       kq = gq(6825),
+       Rq = gq(1034),
```
