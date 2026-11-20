# Changed — Bundle Modifications Report (Part 016 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `16 / 58` (**281** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/256.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/256.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1)

#### 21. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L470-L541` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L99-L100) · [Before (L470-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L470-L541)

```diff
-     }
- 
-     function Rz(zz) {
-       return "function" === typeof zz ? Zz(zz) : (zz instanceof IDBTransaction && function(zz) {
-         if (Hz.has(zz)) return;
-         const uz = new Promise(((uz, bz) => {
-           const Ez = () => {
-               zz.removeEventListener("complete", nz), zz.removeEventListener("error", iz), zz.removeEventListener("abort", iz)
-             },
-             nz = () => {
-               uz(), Ez()
-             },
-             iz = () => {
-               bz(zz.error || new DOMException("AbortError", "AbortError")), Ez()
-             };
-           zz.addEventListener("complete", nz), zz.addEventListener("error", iz), zz.addEventListener("abort", iz)
- ... (56 more removed lines; see GitHub link above)
+       setColor3(qq, Eq) {
+         return this._checkUniform(qq), this._colors3[qq] = Eq, this
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L543-L553` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L102-L103) · [Before (L543-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L543-L553)

```diff
-       getPlatformInfoString() {
-         return this.container.getProviders().map((zz => {
-           if (function(zz) {
-               const uz = zz.getComponent();
-               return "VERSION" === (null === uz || void 0 === uz ? void 0 : uz.type)
-             }(zz)) {
-             const uz = zz.getImmediate();
-             return `${uz.library}/${uz.version}`
-           }
-           return null
-         })).filter((zz => zz)).join(" ")
+       setColor3Array(qq, Eq) {
+         return this._checkUniform(qq), this._colors3Arrays[qq] = Eq.reduce(((qq, Eq) => (qq.push(Eq.r, Eq.g, Eq.b), qq)), []), this
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L555-L619` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L105-L106) · [Before (L555-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L555-L619)

```diff
-     }
-     const Nz = "@firebase/app",
-       vz = "0.9.13",
-       xz = new nz.e("@firebase/app"),
-       Jz = "@firebase/app-compat",
-       Az = "@firebase/analytics-compat",
-       Tz = "@firebase/analytics",
-       Lz = "@firebase/app-check-compat",
-       Pz = "@firebase/app-check",
-       Gz = "@firebase/auth",
-       az = "@firebase/auth-compat",
-       Vz = "@firebase/database",
-       mz = "@firebase/database-compat",
-       qz = "@firebase/functions",
-       hz = "@firebase/functions-compat",
-       Uz = "@firebase/installations",
- ... (49 more removed lines; see GitHub link above)
+       setColor4(qq, Eq) {
+         return this._checkUniform(qq), this._colors4[qq] = Eq, this
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L621-L666` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L108-L109) · [Before (L621-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L621-L666)

```diff
-     }
- 
-     function Eu(zz, uz) {
-       zz.container.addOrOverwriteComponent(uz)
-     }
- 
-     function nu(zz) {
-       const uz = zz.name;
-       if (uu.has(uz)) return xz.debug(`There were multiple attempts to register component ${uz}.`), !1;
-       uu.set(uz, zz);
-       for (const bz of zu.values()) bu(bz, zz);
-       return !0
-     }
- 
-     function iu(zz, uz) {
-       const bz = zz.container.getProvider("heartbeat").getImmediate({
- ... (30 more removed lines; see GitHub link above)
+       setColor4Array(qq, Eq) {
+         return this._checkUniform(qq), this._colors4Arrays[qq] = Eq.reduce(((qq, Eq) => (qq.push(Eq.r, Eq.g, Eq.b, Eq.a), qq)), []), this
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L668-L669` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L111-L112) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L668-L669)

```diff
-       get automaticDataCollectionEnabled() {
-         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       setVector2(qq, Eq) {
+         return this._checkUniform(qq), this._vectors2[qq] = Eq, this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L671-L672` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L114-L115) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L671-L672)

```diff
-       set automaticDataCollectionEnabled(zz) {
-         this.checkDestroyed(), this._automaticDataCollectionEnabled = zz
+       setVector3(qq, Eq) {
+         return this._checkUniform(qq), this._vectors3[qq] = Eq, this
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L674-L675` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L117-L118) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L674-L675)

```diff
-       get name() {
-         return this.checkDestroyed(), this._name
+       setVector4(qq, Eq) {
+         return this._checkUniform(qq), this._vectors4[qq] = Eq, this
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L677-L678` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L120-L121) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L677-L678)

```diff
-       get options() {
-         return this.checkDestroyed(), this._options
+       setQuaternion(qq, Eq) {
+         return this._checkUniform(qq), this._quaternions[qq] = Eq, this
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L680-L681` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L123-L124) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L680-L681)

```diff
-       get config() {
-         return this.checkDestroyed(), this._config
+       setQuaternionArray(qq, Eq) {
+         return this._checkUniform(qq), this._quaternionsArrays[qq] = Eq.reduce(((qq, Eq) => (Eq.toArray(qq, qq.length), qq)), []), this
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L683-L684` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L126-L127) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L683-L684)

```diff
-       get container() {
-         return this._container
+       setMatrix(qq, Eq) {
+         return this._checkUniform(qq), this._matrices[qq] = Eq, this
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L686-L687` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L129-L135) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L686-L687)

```diff
-       get isDeleted() {
-         return this._isDeleted
+       setMatrices(qq, Eq) {
+         this._checkUniform(qq);
+         const gq = new Float32Array(16 * Eq.length);
+         for (let Yq = 0; Yq < Eq.length; Yq++) {
+           Eq[Yq].copyToArray(gq, 16 * Yq)
+         }
+         return this._matrixArrays[qq] = gq, this
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L689-L690` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L137-L138) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L689-L690)

```diff
-       set isDeleted(zz) {
-         this._isDeleted = zz
+       setMatrix3x3(qq, Eq) {
+         return this._checkUniform(qq), this._matrices3x3[qq] = Eq, this
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L692-L695` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L140-L141) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L692-L695)

```diff
-       checkDestroyed() {
-         if (this.isDeleted) throw Hu.create("app-deleted", {
-           appName: this._name
-         })
+       setMatrix2x2(qq, Eq) {
+         return this._checkUniform(qq), this._matrices2x2[qq] = Eq, this
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L697-L706` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L143-L144) · [Before (L697-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L697-L706)

```diff
-     }
-     const pu = "9.23.0";
- 
-     function du(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         bz = zz;
-       if ("object" !== typeof uz) {
-         uz = {
-           name: uz
-         }
+       setArray2(qq, Eq) {
+         return this._checkUniform(qq), this._vectors2Arrays[qq] = Eq, this
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L708-L722` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L146-L147) · [Before (L708-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L708-L722)

```diff
-       const nz = Object.assign({
-           name: Yz,
-           automaticDataCollectionEnabled: !1
-         }, uz),
-         lz = nz.name;
-       if ("string" !== typeof lz || !lz) throw Hu.create("bad-app-name", {
-         appName: String(lz)
-       });
-       if (bz || (bz = (0, iz.y)()), !bz) throw Hu.create("no-options");
-       const Mz = zu.get(lz);
-       if (Mz) {
-         if ((0, iz.t)(bz, Mz.options) && (0, iz.t)(nz, Mz.config)) return Mz;
-         throw Hu.create("duplicate-app", {
-           appName: lz
-         })
+       setArray3(qq, Eq) {
+         return this._checkUniform(qq), this._vectors3Arrays[qq] = Eq, this
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L724-L756` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L149-L150) · [Before (L724-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L724-L756)

```diff
-       const tz = new Ez.d(lz);
-       for (const Ez of uu.values()) tz.wL(Ez);
-       const Hz = new Ou(bz, nz, tz);
-       return zu.set(lz, Hz), Hz
-     }
- 
-     function Fu() {
-       let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yz;
-       const uz = zu.get(zz);
-       if (!uz && zz === Yz && (0, iz.y)()) return du();
-       if (!uz) throw Hu.create("no-app", {
-         appName: zz
-       });
-       return uz
-     }
- 
- ... (17 more removed lines; see GitHub link above)
+       setArray4(qq, Eq) {
+         return this._checkUniform(qq), this._vectors4Arrays[qq] = Eq, this
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L758-L812` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L152-L153) · [Before (L758-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L758-L812)

```diff
-       nu(new Ez.f(`${iz}-version`, (() => ({
-         library: iz,
-         version: uz
-       })), "VERSION"))
-     }
- 
-     function wu(zz, uz) {
-       if (null !== zz && "function" !== typeof zz) throw Hu.create("invalid-log-argument");
-       (0, nz.k)(zz, uz)
-     }
- 
-     function Xu(zz) {
-       (0, nz.g)(zz)
-     }
-     const fu = "firebase-heartbeat-store";
-     let su = null;
- ... (39 more removed lines; see GitHub link above)
+       setUniformBuffer(qq, Eq) {
+         return -1 === this._options.uniformBuffers.indexOf(qq) && this._options.uniformBuffers.push(qq), this._uniformBuffers[qq] = Eq, this
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L814-L823` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L155-L156) · [Before (L814-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L814-L823)

```diff
-     }
- 
-     function Nu(zz) {
-       return `${zz.name}!${zz.options.appId}`
-     }
-     class vu {
-       constructor(zz) {
-         this.container = zz, this._heartbeatsCache = null;
-         const uz = this.container.getProvider("app").getImmediate();
-         this.gR = new Ju(uz), this._heartbeatsCachePromise = this.gR.read().then((zz => (this._heartbeatsCache = zz, zz)))
+       setTextureSampler(qq, Eq) {
+         return -1 === this._options.samplerObjects.indexOf(qq) && this._options.samplerObjects.push(qq), this._textureSamplers[qq] = Eq, this
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L825-L834` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L158-L159) · [Before (L825-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L825-L834)

```diff
-       async triggerHeartbeat() {
-         const zz = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
-           uz = xu();
-         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== uz && !this._heartbeatsCache.heartbeats.some((zz => zz.date === uz))) return this._heartbeatsCache.heartbeats.push({
-           date: uz,
-           agent: zz
-         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((zz => {
-           const uz = new Date(zz.date).valueOf();
-           return Date.now() - uz <= 2592e6
-         })), this.gR.overwrite(this._heartbeatsCache)
+       setStorageBuffer(qq, Eq) {
+         return -1 === this._options.storageBuffers.indexOf(qq) && this._options.storageBuffers.push(qq), this._storageBuffers[qq] = Eq, this
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L836-L871` → after: `L161-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L161-L164) · [Before (L836-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L836-L871)

```diff
-       async getHeartbeatsHeader() {
-         if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
-         const zz = xu(),
-           {
-             heartbeatsToSend: uz,
-             unsentEntries: bz
-           } = function(zz) {
-             let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
-             const bz = [];
-             let Ez = zz.slice();
-             for (const nz of zz) {
-               const zz = bz.find((zz => zz.agent === nz.agent));
-               if (zz) {
-                 if (zz.dates.push(nz.date), Au(bz) > uz) {
-                   zz.dates.pop();
-                   break
- ... (20 more removed lines; see GitHub link above)
+       setDefine(qq, Eq) {
+         const gq = qq.trimEnd() + " ",
+           Yq = this.options.defines.findIndex((Eq => Eq === qq || Eq.startsWith(gq)));
+         return Yq >= 0 && this.options.defines.splice(Yq, 1), ("boolean" !== typeof Eq || Eq) && this.options.defines.push(gq + Eq), this
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L873-L880` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L166-L167) · [Before (L873-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L873-L880)

```diff
-     }
- 
-     function xu() {
-       return (new Date).toISOString().substring(0, 10)
-     }
-     class Ju {
-       constructor(zz) {
-         this.app = zz, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
+       isReadyForSubMesh(qq, Eq, gq) {
+         return this.isReady(qq, gq, Eq)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L882-L898` → after: `L169-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L169-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L169-L269) · [Before (L882-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L882-L898)

```diff
-       async runIndexedDBEnvironmentCheck() {
-         return !!(0, iz.X)() && (0, iz.hb)().then((() => !0)).catch((() => !1))
-       }
-       async read() {
-         if (await this._canUseIndexedDBPromise) {
-           return await async function(zz) {
-             try {
-               const uz = await ru();
-               return await uz.transaction(fu).objectStore(fu).get(Nu(zz))
-             } catch (uz) {
-               if (uz instanceof iz.f) xz.warn(uz.message);
-               else {
-                 const zz = Hu.create("idb-get", {
-                   originalErrorMessage: null === uz || void 0 === uz ? void 0 : uz.message
-                 });
-                 xz.warn(zz.message)
- ... (1 more removed lines; see GitHub link above)
+       isReady(qq, Eq, gq) {
+         const Yq = gq && this._storeEffectOnSubMeshes;
+         if (this.isFrozen) {
+           const qq = Yq ? gq._drawWrapper : this._drawWrapper;
+           if (qq.effect && qq._wasPreviouslyReady && qq._wasPreviouslyUsingInstances === Eq) return !0
+         }
+         const Oq = this.ZJ(),
+           xq = Oq.Ba(),
+           cq = [],
+           uq = [];
+         let Bq = null,
+           Vq = this._shaderPath,
+           jq = this._options.uniforms,
+           Hq = this._options.uniformBuffers,
+           oq = this._options.samplers;
+         xq.getCaps().multiview && Oq.activeCamera && Oq.activeCamera.outputRenderTarget && Oq.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, cq.push("#define MULTIVIEW"), -1 !== jq.indexOf("viewProjection") && -1 === jq.indexOf("viewProjectionR") &&  … [truncated]
+ ... (85 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L904-L905` → after: `L316-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L316-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L316-L322) · [Before (L904-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L904-L905)

```diff
-         return {
-           heartbeats: []
+         if (Oq && Eq && (cq || !this.isFrozen)) {
+           (0, Nq.p)(Eq, Oq), Eq.morphTargetManager && Eq.morphTargetManager.isUsingTextureForTargets && Eq.morphTargetManager._bind(Oq);
+           const qq = Eq.bakedVertexAnimationManager;
+           if (qq && qq.isEnabled) {
+             const qq = lq ? Yq._drawWrapper : this._drawWrapper;
+             Eq.bakedVertexAnimationManager?.bind(Oq, !!qq._wasPreviouslyUsingInstances)
+           }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L907-L915` → after: `L324-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L324-L331) · [Before (L907-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L907-L915)

```diff
-       }
-       async overwrite(zz) {
-         var uz;
-         if (await this._canUseIndexedDBPromise) {
-           const bz = await this.read();
-           return ou(this.app, {
-             lastSentHeartbeatDate: null !== (uz = zz.lastSentHeartbeatDate) && void 0 !== uz ? uz : bz.lastSentHeartbeatDate,
-             heartbeats: zz.heartbeats
-           })
+         this._afterBind(Eq, Oq, Yq)
+       }
+       getActiveTextures() {
+         const qq = super.getActiveTextures();
+         for (const Eq in this._textures) qq.push(this._textures[Eq]);
+         for (const Eq in this._textureArrays) {
+           const gq = this._textureArrays[Eq];
+           for (let Eq = 0; Eq < gq.length; Eq++) qq.push(gq[Eq])
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L918-L925` → after: `L335-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L335-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L335-L345) · [Before (L918-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L918-L925)

```diff
-       async add(zz) {
-         var uz;
-         if (await this._canUseIndexedDBPromise) {
-           const bz = await this.read();
-           return ou(this.app, {
-             lastSentHeartbeatDate: null !== (uz = zz.lastSentHeartbeatDate) && void 0 !== uz ? uz : bz.lastSentHeartbeatDate,
-             heartbeats: [...bz.heartbeats, ...zz.heartbeats]
-           })
+       hasTexture(qq) {
+         if (super.hasTexture(qq)) return !0;
+         for (const gq in this._textures)
+           if (this._textures[gq] === qq) return !0;
+         const Eq = qq.getInternalTexture();
+         for (const gq in this._internalTextures)
+           if (this._internalTextures[gq] === Eq) return !0;
+         for (const gq in this._textureArrays) {
+           const Eq = this._textureArrays[gq];
+           for (let gq = 0; gq < Eq.length; gq++)
+             if (Eq[gq] === qq) return !0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L928-L965` → after: `L349-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L349-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L349-L389) · [Before (L928-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L928-L965)

```diff
-     }
- 
-     function Au(zz) {
-       return (0, iz.o)(JSON.stringify({
-         version: 2,
-         heartbeats: zz
-       })).length
-     }
-     var Tu;
-     Tu = "", nu(new Ez.f("platform-logger", (zz => new oz(zz)), "PRIVATE")), nu(new Ez.f("heartbeat", (zz => new vu(zz)), "PRIVATE")), Ku(Nz, vz, Tu), Ku(Nz, vz, "esm2017"), Ku("fire-js", "")
-   },
-   39669: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Mz,
-       f: () => nz
-     });
- ... (22 more removed lines; see GitHub link above)
+       clone(qq) {
+         const Eq = Yq.d.Clone((() => new jq(qq, this.ZJ(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
+         Eq.name = qq, Eq.id = qq, "object" === typeof Eq._shaderPath && (Eq._shaderPath = {
+           ...Eq._shaderPath
+         }), this._options = {
+           ...this._options
+         };
+         const gq = Object.keys(this._options);
+         for (const Yq of gq) {
+           const qq = this._options[Yq];
+           Array.isArray(qq) && (this._options[Yq] = qq.slice(0))
+         }
+         this.stencil.copyTo(Eq.stencil);
+         for (const Yq in this._textures) Eq.setTexture(Yq, this._textures[Yq]);
+         for (const Yq in this._internalTextures) Eq.setInternalTexture(Yq, this._internalTextures[Yq]);
+         for (const Yq in this._textureArrays) Eq.setTextureArray(Yq, this._textureArrays[Yq]);
+ ... (25 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L967-L976` → after: `L391-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L391-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L391-L399) · [Before (L967-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L967-L976)

```diff
-       get(zz) {
-         const uz = this.normalizeInstanceIdentifier(zz);
-         if (!this.instancesDeferred.has(uz)) {
-           const zz = new Ez.b;
-           if (this.instancesDeferred.set(uz, zz), this.isInitialized(uz) || this.shouldAutoInitialize()) try {
-             const bz = this.getOrInitializeService({
-               instanceIdentifier: uz
-             });
-             bz && zz.resolve(bz)
-           } catch (bz) {}
+       dispose(qq, Eq, gq) {
+         if (Eq) {
+           let qq;
+           for (qq in this._textures) this._textures[qq].dispose();
+           for (qq in this._internalTextures) this._internalTextures[qq].dispose();
+           for (qq in this._textureArrays) {
+             const Eq = this._textureArrays[qq];
+             for (let qq = 0; qq < Eq.length; qq++) Eq[qq].dispose()
+           }
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L978` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L401) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L978)

```diff
-         return this.instancesDeferred.get(uz).promise
+         this._textures = {}, this._internalTextures = {}, super.dispose(qq, Eq, gq)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L980-L986` → after: `L403-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L403-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L403-L410) · [Before (L980-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L980-L986)

```diff
-       getImmediate(zz) {
-         var uz;
-         const bz = this.normalizeInstanceIdentifier(null === zz || void 0 === zz ? void 0 : zz.identifier),
-           Ez = null !== (uz = null === zz || void 0 === zz ? void 0 : zz.optional) && void 0 !== uz && uz;
-         if (!this.isInitialized(bz) && !this.shouldAutoInitialize()) {
-           if (Ez) return null;
-           throw Error(`Service ${this.name} is not available`)
+       serialize() {
+         const qq = Yq.d.Serialize(this);
+         let Eq;
+         for (Eq in qq.customType = "BABYLON.ShaderMaterial", qq.uniqueId = this.uniqueId, qq.options = this._options, qq.shaderPath = this._shaderPath, qq.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, qq.stencil = this.stencil.serialize(), qq.textures = {}, this._texture … [truncated]
+         for (Eq in qq.textureArrays = {}, this._textureArrays) {
+           qq.textureArrays[Eq] = [];
+           const gq = this._textureArrays[Eq];
+           for (let Yq = 0; Yq < gq.length; Yq++) qq.textureArrays[Eq].push(gq[Yq].serialize())
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L988-L994` → after: `L412-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L412-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L412-L418) · [Before (L988-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L988-L994)

```diff
-         try {
-           return this.getOrInitializeService({
-             instanceIdentifier: bz
-           })
-         } catch (nz) {
-           if (Ez) return null;
-           throw nz
+         for (Eq in qq.ints = {}, this._ints) qq.ints[Eq] = this._ints[Eq];
+         for (Eq in qq.uints = {}, this._uints) qq.uints[Eq] = this._uints[Eq];
+         for (Eq in qq.floats = {}, this._floats) qq.floats[Eq] = this._floats[Eq];
+         for (Eq in qq.floatsArrays = {}, this._floatsArrays) qq.floatsArrays[Eq] = this._floatsArrays[Eq];
+         for (Eq in qq.colors3 = {}, this._colors3) {
+           const gq = this._colors3[Eq];
+           qq.colors3[Eq] = [gq.r, gq.g, gq.b]
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L996-L1019` → after: `L420-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L420-L423) · [Before (L996-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L996-L1019)

```diff
-       }
-       getComponent() {
-         return this.component
-       }
-       setComponent(zz) {
-         if (zz.name !== this.name) throw Error(`Mismatching Component ${zz.name} for Provider ${this.name}.`);
-         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
-         if (this.component = zz, this.shouldAutoInitialize()) {
-           if (function(zz) {
-               return "EAGER" === zz.instantiationMode
-             }(zz)) try {
-             this.getOrInitializeService({
-               instanceIdentifier: iz
-             })
-           } catch (uz) {}
-           for (const [zz, bz] of this.instancesDeferred.entries()) {
- ... (8 more removed lines; see GitHub link above)
+         for (Eq in qq.colors3Arrays = {}, this._colors3Arrays) qq.colors3Arrays[Eq] = this._colors3Arrays[Eq];
+         for (Eq in qq.colors4 = {}, this._colors4) {
+           const gq = this._colors4[Eq];
+           qq.colors4[Eq] = [gq.r, gq.g, gq.b, gq.a]
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1021-L1053` → after: `L425-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L425-L428) · [Before (L1021-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1021-L1053)

```diff
-       }
-       clearInstance() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iz;
-         this.instancesDeferred.delete(zz), this.instancesOptions.delete(zz), this.instances.delete(zz)
-       }
-       async delete() {
-         const zz = Array.from(this.instances.values());
-         await Promise.all([...zz.filter((zz => "INTERNAL" in zz)).map((zz => zz.INTERNAL.delete())), ...zz.filter((zz => "_delete" in zz)).map((zz => zz._delete()))])
-       }
-       isComponentSet() {
-         return null != this.component
-       }
-       isInitialized() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iz;
-         return this.instances.has(zz)
-       }
- ... (17 more removed lines; see GitHub link above)
+         for (Eq in qq.colors4Arrays = {}, this._colors4Arrays) qq.colors4Arrays[Eq] = this._colors4Arrays[Eq];
+         for (Eq in qq.vectors2 = {}, this._vectors2) {
+           const gq = this._vectors2[Eq];
+           qq.vectors2[Eq] = [gq.x, gq.y]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1055-L1064` → after: `L430-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L430-L432) · [Before (L1055-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1055-L1064)

```diff
-         return Ez
-       }
-       HV(zz, uz) {
-         var bz;
-         const Ez = this.normalizeInstanceIdentifier(uz),
-           nz = null !== (bz = this.onInitCallbacks.get(Ez)) && void 0 !== bz ? bz : new Set;
-         nz.add(zz), this.onInitCallbacks.set(Ez, nz);
-         const iz = this.instances.get(Ez);
-         return iz && zz(iz, Ez), () => {
-           nz.delete(zz)
+         for (Eq in qq.vectors3 = {}, this._vectors3) {
+           const gq = this._vectors3[Eq];
+           qq.vectors3[Eq] = [gq.x, gq.y, gq.z]
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1066-L1093` → after: `L434-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L434-L447) · [Before (L1066-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1066-L1093)

```diff
-       }
-       invokeOnInitCallbacks(zz, uz) {
-         const bz = this.onInitCallbacks.get(uz);
-         if (bz)
-           for (const nz of bz) try {
-             nz(zz, uz)
-           } catch (Ez) {}
-       }
-       getOrInitializeService(zz) {
-         let {
-           instanceIdentifier: uz,
-           options: bz = {}
-         } = zz, Ez = this.instances.get(uz);
-         if (!Ez && this.component && (Ez = this.component.instanceFactory(this.container, {
-             instanceIdentifier: (nz = uz, nz === iz ? void 0 : nz),
-             options: bz
- ... (12 more removed lines; see GitHub link above)
+         for (Eq in qq.vectors4 = {}, this._vectors4) {
+           const gq = this._vectors4[Eq];
+           qq.vectors4[Eq] = [gq.x, gq.y, gq.z, gq.w]
+         }
+         for (Eq in qq.quaternions = {}, this._quaternions) qq.quaternions[Eq] = this._quaternions[Eq].bYq();
+         for (Eq in qq.matrices = {}, this._matrices) qq.matrices[Eq] = this._matrices[Eq].bYq();
+         for (Eq in qq.matrixArray = {}, this._matrixArrays) qq.matrixArray[Eq] = this._matrixArrays[Eq];
+         for (Eq in qq.matrices3x3 = {}, this._matrices3x3) qq.matrices3x3[Eq] = this._matrices3x3[Eq];
+         for (Eq in qq.matrices2x2 = {}, this._matrices2x2) qq.matrices2x2[Eq] = this._matrices2x2[Eq];
+         for (Eq in qq.vectors2Arrays = {}, this._vectors2Arrays) qq.vectors2Arrays[Eq] = this._vectors2Arrays[Eq];
+         for (Eq in qq.vectors3Arrays = {}, this._vectors3Arrays) qq.vectors3Arrays[Eq] = this._vectors3Arrays[Eq];
+         for (Eq in qq.vectors4Arrays = {}, this._vectors4Arrays) qq.vectors4Arrays[Eq] = this._vectors4Arrays[Eq];
+         for (Eq in qq.quaternionsArrays = {}, this._quaternionsArrays) qq.quaternionsArrays[Eq] = this._quaternionsArrays[Eq];
+         return qq
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1096-L1098` → after: `L450-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L450-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L450-L471) · [Before (L1096-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1096-L1098)

```diff
-     class Mz {
-       constructor(zz) {
-         this.name = zz, this.providers = new Map
+ 
+     function Hq(qq, Eq, gq) {
+       const lq = Yq.d.Parse((() => new jq(qq.name, Eq, qq.shaderPath, qq.options, qq.storeEffectOnSubMeshes)), qq, Eq, gq);
+       let mq;
+       for (mq in qq.stencil && lq.stencil.parse(qq.stencil, Eq, gq), qq.textures) lq.setTexture(mq, xq.d.Parse(qq.textures[mq], Eq, gq));
+       for (mq in qq.textureArrays) {
+         const Yq = qq.textureArrays[mq],
+           Oq = [];
+         for (let qq = 0; qq < Yq.length; qq++) Oq.push(xq.d.Parse(Yq[qq], Eq, gq));
+         lq.setTextureArray(mq, Oq)
+       }
+       for (mq in qq.ints) lq.setInt(mq, qq.ints[mq]);
+       for (mq in qq.uints) lq.setUInt(mq, qq.uints[mq]);
+       for (mq in qq.floats) lq.setFloat(mq, qq.floats[mq]);
+       for (mq in qq.floatsArrays) lq.setFloats(mq, qq.floatsArrays[mq]);
+       for (mq in qq.colors3) {
+ ... (6 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1100-L1103` → after: `L473-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L473-L488) · [Before (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1100-L1103)

```diff
-       wL(zz) {
-         const uz = this.getProvider(zz.name);
-         if (uz.isComponentSet()) throw new Error(`Component ${zz.name} has already been registered with ${this.name}`);
-         uz.setComponent(zz)
+       for (mq in qq.colors3Arrays) {
+         const Eq = qq.colors3Arrays[mq].reduce(((qq, Eq, gq) => (gq % 3 === 0 ? qq.push([Eq]) : qq[qq.length - 1].push(Eq), qq)), []).map((qq => ({
+           r: qq[0],
+           g: qq[1],
+           b: qq[2]
+         })));
+         lq.setColor3Array(mq, Eq)
+       }
+       for (mq in qq.colors4) {
+         const Eq = qq.colors4[mq];
+         lq.setColor4(mq, {
+           r: Eq[0],
+           g: Eq[1],
+           b: Eq[2],
+           a: Eq[3]
+         })
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1105-L1106` → after: `L490-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L490-L504) · [Before (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1105-L1106)

```diff
-       addOrOverwriteComponent(zz) {
-         this.getProvider(zz.name).isComponentSet() && this.providers.delete(zz.name), this.wL(zz)
+       for (mq in qq.colors4Arrays) {
+         const Eq = qq.colors4Arrays[mq].reduce(((qq, Eq, gq) => (gq % 4 === 0 ? qq.push([Eq]) : qq[qq.length - 1].push(Eq), qq)), []).map((qq => ({
+           r: qq[0],
+           g: qq[1],
+           b: qq[2],
+           a: qq[3]
+         })));
+         lq.setColor4Array(mq, Eq)
+       }
+       for (mq in qq.vectors2) {
+         const Eq = qq.vectors2[mq];
+         lq.setVector2(mq, {
+           x: Eq[0],
+           y: Eq[1]
+         })
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1108-L1111` → after: `L506-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L506-L512) · [Before (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1108-L1111)

```diff
-       getProvider(zz) {
-         if (this.providers.has(zz)) return this.providers.get(zz);
-         const uz = new lz(zz, this);
-         return this.providers.set(zz, uz), uz
+       for (mq in qq.vectors3) {
+         const Eq = qq.vectors3[mq];
+         lq.setVector3(mq, {
+           x: Eq[0],
+           y: Eq[1],
+           z: Eq[2]
+         })
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1113-L1114` → after: `L514-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L514-L521) · [Before (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1113-L1114)

```diff
-       getProviders() {
-         return Array.from(this.providers.values())
+       for (mq in qq.vectors4) {
+         const Eq = qq.vectors4[mq];
+         lq.setVector4(mq, {
+           x: Eq[0],
+           y: Eq[1],
+           z: Eq[2],
+           w: Eq[3]
+         })
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1117-L1200` → after: `L535-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L535-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L535-L546) · [Before (L1117-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1117-L1200)

```diff
-   },
-   39682: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => nz,
-       e: () => Hz,
-       g: () => Oz,
-       k: () => pz
-     });
-     const Ez = [];
-     var nz;
-     ! function(zz) {
-       zz[zz.DEBUG = 0] = "DEBUG", zz[zz.VERBOSE = 1] = "VERBOSE", zz[zz.INFO = 2] = "INFO", zz[zz.WARN = 3] = "WARN", zz[zz.ERROR = 4] = "ERROR", zz[zz.SILENT = 5] = "SILENT"
-     }(nz || (nz = {}));
-     const iz = {
-         debug: nz.DEBUG,
-         verbose: nz.VERBOSE,
- ... (68 more removed lines; see GitHub link above)
+     async function oq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
+       return await new Promise(((lq, Oq) => {
+         const mq = new cq.e;
+         mq.addEventListener("readystatechange", (() => {
+           if (4 == mq.readyState)
+             if (200 == mq.status) {
+               const Eq = Hq(JSON.parse(mq.responseText), gq || Bq.b.LastCreatedScene, Yq);
+               qq && (Eq.name = qq), lq(Eq)
+             } else Oq("Unable to load the ShaderMaterial")
+         })), mq.open("GET", Eq), mq.send()
+       }))
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1202-L1205` → after: `L548-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L548-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L548-L560) · [Before (L1202-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1202-L1205)

```diff
- 
-     function Oz(zz) {
-       Ez.forEach((uz => {
-         uz.setLogLevel(zz)
+     async function Pq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const Yq = this?.SnippetUrl ?? jq.SnippetUrl;
+       return await new Promise(((lq, Oq) => {
+         const mq = new cq.e;
+         mq.addEventListener("readystatechange", (() => {
+           if (4 == mq.readyState)
+             if (200 == mq.status) {
+               const Yq = JSON.parse(JSON.parse(mq.responseText).jsonPayload),
+                 Oq = Hq(JSON.parse(Yq.shaderMaterial), Eq || Bq.b.LastCreatedScene, gq);
+               Oq.snippetId = qq, lq(Oq)
+             } else Oq("Unable to load the snippet " + qq)
+         })), mq.open("GET", Yq + "/" + qq.replace(/#/g, "/")), mq.send()
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L1209-L1232` → after: `L567-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/256.js#L567-L568) · [Before (L1209-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/256.js#L1209-L1232)

```diff
-     function pz(zz, uz) {
-       for (const bz of Ez) {
-         let Ez = null;
-         uz && uz.level && (Ez = iz[uz.level]), bz.userLogHandler = null === zz ? null : function(uz, bz) {
-           for (var iz = arguments.length, lz = new Array(iz > 2 ? iz - 2 : 0), Mz = 2; Mz < iz; Mz++) lz[Mz - 2] = arguments[Mz];
-           const tz = lz.map((zz => {
-             if (null == zz) return null;
-             if ("string" === typeof zz) return zz;
-             if ("number" === typeof zz || "boolean" === typeof zz) return zz.toString();
-             if (zz instanceof Error) return zz.message;
-             try {
-               return JSON.stringify(zz)
-             } catch (uz) {
-               return null
-             }
-           })).filter((zz => zz)).join(" ");
- ... (8 more removed lines; see GitHub link above)
+     function tq() {
+       yq || (yq = !0, jq.Parse = Hq, jq.ParseFromFileAsync = oq, jq.ParseFromSnippetAsync = Pq, jq.CreateFromSnippetAsync = Qq, (0, Vq.g)("BABYLON.ShaderMaterial", jq))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/257.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/257.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775)

#### 1. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/257.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/257.js#L1)

```diff
- /*! For license information please see ad2avs.257.d75539c2.chunk.js.LICENSE.txt */
+ /*! For license information please see bbb6l5.257.4043bbd3.chunk.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/257.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/257.js#L5)

```diff
-   39686: (zz, uz, bz) => {
+   40252: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L7-L18` → after: `L7-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L7-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/257.js#L7-L24) · [Before (L7-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/257.js#L7-L18)

```diff
-       getAnalytics: () => eu,
-       getGoogleAnalyticsClientId: () => Cu,
-       initializeAnalytics: () => ju,
-       isSupported: () => Iu,
-       logEvent: () => bb,
-       setAnalyticsCollectionEnabled: () => zb,
-       setConsent: () => Eb,
-       setCurrentScreen: () => Bu,
-       setDefaultEventParameters: () => ub,
-       setUserId: () => Yu,
-       setUserProperties: () => ku,
-       settings: () => Qu
+       FirebaseError: () => Yq.c,
+       SDK_VERSION: () => Yq.d,
+       _DEFAULT_ENTRY_NAME: () => Yq.h,
+       VYq: () => Yq.k,
+       _addOrOverwriteComponent: () => Yq.o,
+       _apps: () => Yq.p,
+       _clearComponents: () => Yq.q,
+       _components: () => Yq.r,
+       _getProvider: () => Yq.s,
+       _registerComponent: () => Yq.v,
+       _removeServiceInstance: () => Yq.w,
+       deleteApp: () => Yq.A,
+       getApp: () => Yq.F,
+       getApps: () => Yq.C,
+       initializeApp: () => Yq.G,
+       onLog: () => Yq.K,
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L20-L1039` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/257.js#L26-L27) · [Before (L20-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/257.js#L20-L1039)

```diff
-     var Ez = bz(39660),
-       nz = bz(39682),
-       iz = bz(39673),
-       lz = bz(39669);
-     let Mz, tz;
-     const Hz = new WeakMap,
-       Oz = new WeakMap,
-       pz = new WeakMap,
-       dz = new WeakMap,
-       Fz = new WeakMap;
-     let Zz = {
-       get(zz, uz, bz) {
-         if (zz instanceof IDBTransaction) {
-           if ("done" === uz) return Oz.get(zz);
-           if ("objectStoreNames" === uz) return zz.objectStoreNames || pz.get(zz);
-           if ("store" === uz) return bz.objectStoreNames[1] ? void 0 : bz.objectStore(bz.objectStoreNames[0])
- ... (1004 more removed lines; see GitHub link above)
+     var Yq = gq(40254);
+     (0, Yq.L)("firebase", "9.23.0", "app")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/258.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/258.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44)

#### 1. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L1)

```diff
- /*! For license information please see ad2avs.258.ddc8eab6.chunk.js.LICENSE.txt */
+ /*! For license information please see bbb6l5.258.e248762a.chunk.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L5-L3059` → after: `L5-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L5-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L5-L93) · [Before (L5-L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L5-L3059)

```diff
-     39688: (zz, uz, bz) => {
-         bz.r(uz), bz.d(uz, {
-           ActionCodeOperation: () => dz,
-           ActionCodeURL: () => Cu,
-           AuthCredential: () => Uu,
-           AuthErrorCodes: () => wz,
-           EmailAuthCredential: () => Wu,
-           EmailAuthProvider: () => ku,
-           FacebookAuthProvider: () => Eb,
-           FactorId: () => tz,
-           GithubAuthProvider: () => ib,
-           GoogleAuthProvider: () => nb,
-           OAuthCredential: () => ju,
-           OAuthProvider: () => bb,
-           OperationType: () => pz,
-           PhoneAuthCredential: () => Bu,
- ... (3039 more removed lines; see GitHub link above)
+   40265: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       $: () => bq,
+       A: () => Zq,
+       B: () => Bq,
+       F: () => uq,
+       J: () => Wq,
+       K: () => Jq,
+       L: () => aq,
+       M: () => dq,
+       N: () => vq,
+       Q: () => Hq,
+       T: () => oq,
+       V: () => Vq,
+       W: () => jq,
+       X: () => iq,
+ ... (73 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3147-L3173` → after: `L96-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L96-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L96-L116) · [Before (L3147-L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3147-L3173)

```diff
-           }
-           async _set(zz, uz) {
-             return this._withPendingWrite((async () => (await this._withRetries((bz => VE(bz, zz, uz))), this.localCache[zz] = uz, this.notifyServiceWorker(zz))))
-           }
-           async _get(zz) {
-             const uz = await this._withRetries((uz => async function(zz, uz) {
-               const bz = GE(zz, !1).get(uz),
-                 Ez = await new PE(bz).toPromise();
-               return void 0 === Ez ? null : Ez.value
-             }(uz, zz)));
-             return this.localCache[zz] = uz, uz
-           }
-           async _remove(zz) {
-             return this._withPendingWrite((async () => (await this._withRetries((uz => mE(uz, zz))), delete this.localCache[zz], this.notifyServiceWorker(zz))))
-           }
-           async _poll() {
- ... (11 more removed lines; see GitHub link above)
+             return Eq.join("")
+           }(this.decodeStringToByteArray(qq, Eq))
+         },
+         decodeStringToByteArray(qq, Eq) {
+           this.init_();
+           const gq = Eq ? this.charToByteMapWebSafe_ : this.charToByteMap_,
+             Yq = [];
+           for (let lq = 0; lq < qq.length;) {
+             const Eq = gq[qq.charAt(lq++)],
+               mq = lq < qq.length ? gq[qq.charAt(lq)] : 0;
+             ++lq;
+             const xq = lq < qq.length ? gq[qq.charAt(lq)] : 64;
+             ++lq;
+             const Aq = lq < qq.length ? gq[qq.charAt(lq)] : 64;
+             if (++lq, null == Eq || null == mq || null == xq || null == Aq) throw new Oq;
+             const cq = Eq << 2 | mq >> 4;
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3175-L3335` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L118) · [Before (L3175-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3175-L3335)

```diff
-               of zz) bz.add(Ez), JSON.stringify(this.localCache[Ez]) !== JSON.stringify(nz) && (this.notifyListeners(Ez, nz), uz.push(Ez));
-             for (const Ez of Object.keys(this.localCache)) this.localCache[Ez] && !bz.has(Ez) && (this.notifyListeners(Ez, null), uz.push(Ez));
-             return uz
-           }
-           notifyListeners(zz, uz) {
-             this.localCache[zz] = uz;
-             const bz = this.listeners[zz];
-             if (bz)
-               for (const Ez of Array.from(bz)) Ez(uz)
-           }
-           startPolling() {
-             this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
-           }
-           stopPolling() {
-             this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
-           }
- ... (145 more removed lines; see GitHub link above)
+             }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3337` → after: `L120-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L120-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L120-L160) · [Before (L3337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3337)

```diff
-           render() {
+           return Yq
+         },
+         init_() {
+           if (!this.byteToCharMap_) {
+             this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
+             for (let qq = 0; qq < this.ENCODED_VALS.length; qq++) this.byteToCharMap_[qq] = this.ENCODED_VALS.charAt(qq), this.charToByteMap_[this.byteToCharMap_[qq]] = qq, this.byteToCharMapWebSafe_[qq] = this.ENCODED_VALS_WEBSAFE.charAt(qq), this.charToByteMapWebSafe_[this.byte … [truncated]
+           }
+         }
+       };
+     class Oq extends Error {
+       constructor() {
+         super(...arguments), this.name = "DecodeBase64StringError"
+       }
+     }
+     const mq = function(qq) {
+         return function(qq) {
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3339` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L162) · [Before (L3339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3339)

```diff
-               this.assertNotDestroyed()
+               qq = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3341` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L164) · [Before (L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3341)

```diff
-               return Promise.reject(zz)
+               return
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3343-L3352` → after: `L166-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L166-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L166-L267) · [Before (L3343-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3343-L3352)

```diff
-             return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((zz => {
-               throw this.renderPromise = null, zz
-             }))), this.renderPromise
-           }
-           _reset() {
-             this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
-           }
-           clear() {
-             this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((zz => {
-               this.container.removeChild(zz)
+             const Eq = qq && xq(qq[1]);
+             return Eq && JSON.parse(Eq)
+           })()
+         } catch (qq) {
+           return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${qq}`)
+         }
+       },
+       uq = qq => {
+         var Eq, gq;
+         return null === (gq = null === (Eq = cq()) || void 0 === Eq ? void 0 : Eq.emulatorHosts) || void 0 === gq ? void 0 : gq[qq]
+       },
+       Bq = () => {
+         var qq;
+         return null === (qq = cq()) || void 0 === qq ? void 0 : qq.config
+       },
+       Wq = qq => {
+ ... (86 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3354-L3427` → after: `L269-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L269-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L269-L369) · [Before (L3354-L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3354-L3427)

```diff
-           }
-           validateStartingState() {
-             xz(!this.parameters.sitekey, this.auth, "argument-error"), xz(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), xz("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
-           }
-           makeTokenCallback(zz) {
-             return uz => {
-               if (this.tokenChangeListeners.forEach((zz => zz(uz))), "function" === typeof zz) zz(uz);
-               else if ("string" === typeof zz) {
-                 const bz = xE()[zz];
-                 "function" === typeof bz && bz(uz)
-               }
-             }
-           }
-           assertNotDestroyed() {
-             xz(!this.destroyed, this.auth, "internal-error")
-           }
- ... (58 more removed lines; see GitHub link above)
+           }(Yq, Eq) : "Error",
+           Oq = `${this.serviceName}: ${lq} (${gq}).`;
+         return new yq(gq, Oq, Eq)
+       }
+     }
+     const rq = /\{\$([^}]+)}/g;
+ 
+     function vq(qq) {
+       for (const Eq in qq)
+         if (Object.prototype.hasOwnProperty.call(qq, Eq)) return !1;
+       return !0
+     }
+ 
+     function hq(qq, Eq) {
+       if (qq === Eq) return !0;
+       const gq = Object.keys(qq),
+ ... (85 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3429-L3536` → after: `L371-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L371-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L371-L483) · [Before (L3429-L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3429-L3536)

```diff
-             let iz;
-             if (xz("string" === typeof nz, zz, "argument-error"), xz(bz.type === WE, zz, "argument-error"), iz = "string" === typeof uz ? {
-                 phoneNumber: uz
-               } : uz, "session" in iz) {
-               const uz = iz.session;
-               if ("phoneNumber" in iz) {
-                 xz("enroll" === uz.type, zz, "internal-error");
-                 const bz = await
-                 function(zz, uz) {
-                   return Uz(zz, "POST", "/v2/accounts/mfaEnrollment:start", hz(zz, uz))
-                 }(zz, {
-                   idToken: uz.credential,
-                   phoneEnrollmentInfo: {
-                     phoneNumber: iz.phoneNumber,
-                     recaptchaToken: nz
-                   }
- ... (92 more removed lines; see GitHub link above)
+             this.finalError ? Yq.error(this.finalError) : Yq.complete()
+           } catch (qq) {}
+         })), this.observers.push(Yq), lq
+       }
+       unsubscribeOne(qq) {
+         void 0 !== this.observers && void 0 !== this.observers[qq] && (delete this.observers[qq], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
+       }
+       forEachObserver(qq) {
+         if (!this.finalized)
+           for (let Eq = 0; Eq < this.observers.length; Eq++) this.sendOne(Eq, qq)
+       }
+       sendOne(qq, Eq) {
+         this.task.then((() => {
+           if (void 0 !== this.observers && void 0 !== this.observers[qq]) try {
+             Eq(this.observers[qq])
+           } catch (gq) {
+ ... (97 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3538-L3595` → after: `L485-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L485-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L485-L502) · [Before (L3538-L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3538-L3595)

```diff
-             return zz && (uz.idToken = zz), uz
-           }
-         }
- 
-         function nn(zz) {
-           return sb(zz.auth, new En(zz), zz.bypassAuthState)
-         }
- 
-         function Mn(zz) {
-           const {
-             auth: uz,
-             user: bz
-           } = zz;
-           return xz(bz, uz, "internal-error"), fb(bz, new En(zz), zz.bypassAuthState)
-         }
-         async function tn(zz) {
- ... (42 more removed lines; see GitHub link above)
+           qq.addEventListener("complete", lq), qq.addEventListener("error", Oq), qq.addEventListener("abort", Oq)
+         }));
+         cq.set(qq, Eq)
+       }(qq), Eq = qq, (mq || (mq = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((qq => Eq instanceof qq)) ? new Proxy(qq, Nq) : qq);
+       var Eq
+     }
+ 
+     function dq(qq) {
+       if (qq instanceof IDBRequest) return function(qq) {
+         const Eq = new Promise(((Eq, gq) => {
+           const Yq = () => {
+               qq.removeEventListener("success", lq), qq.removeEventListener("error", Oq)
+             },
+             lq = () => {
+               Eq(dq(qq.result)), Yq()
+             },
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3597-L3600` → after: `L504-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L504-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L504-L860) · [Before (L3597-L3600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3597-L3600)

```diff
-             try {
-               this.resolve(await this.getIdpTask(lz)(Mz))
-             } catch (tz) {
-               this.reject(tz)
+           qq.addEventListener("success", lq), qq.addEventListener("error", Oq)
+         }));
+         return Eq.then((Eq => {
+           Eq instanceof IDBCursor && Aq.set(Eq, qq)
+         })).catch((() => {})), Wq.set(Eq, qq), Eq
+       }(qq);
+       if (Bq.has(qq)) return Bq.get(qq);
+       const Eq = Vq(qq);
+       return Eq !== qq && (Bq.set(qq, Eq), Wq.set(Eq, qq)), Eq
+     }
+     const jq = qq => Wq.get(qq);
+     const Hq = ["get", "getKey", "getAll", "getAllKeys", "count"],
+       oq = ["put", "add", "delete", "clear"],
+       Pq = new Map;
+ 
+     function Qq(qq, Eq) {
+ ... (341 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3602-L3618` → after: `L862-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L862-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L862-L864) · [Before (L3602-L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3602-L3618)

```diff
-           }
-           onError(zz) {
-             this.reject(zz)
-           }
-           getIdpTask(zz) {
-             switch (zz) {
-               case "signInViaPopup":
-               case "signInViaRedirect":
-                 return nn;
-               case "linkViaPopup":
-               case "linkViaRedirect":
-                 return tn;
-               case "reauthViaPopup":
-               case "reauthViaRedirect":
-                 return Mn;
-               default:
- ... (1 more removed lines; see GitHub link above)
+             return {
+               heartbeatsToSend: gq,
+               unsentEntries: Yq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3620-L3707` → after: `L866-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L866-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L866-L897) · [Before (L3620-L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3620-L3707)

```diff
-           }
-           resolve(zz) {
-             Az(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(zz), this.unregisterAndCleanUp()
-           }
-           reject(zz) {
-             Az(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(zz), this.unregisterAndCleanUp()
-           }
-           unregisterAndCleanUp() {
-             this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
-           }
-         }
-         const On = new Gz(2e3, 1e4);
-         async function pn(zz, uz, bz) {
-           const Ez = Gu(zz);
-           Nz(zz, uz, zb);
-           const nz = bn(Ez, bz);
- ... (72 more removed lines; see GitHub link above)
+           }(this._heartbeatsCache.heartbeats),
+           Yq = (0, Oq.p)(JSON.stringify({
+             version: 2,
+             heartbeats: Eq
+           }));
+         return this._heartbeatsCache.lastSentHeartbeatDate = qq, gq.length > 0 ? (this._heartbeatsCache.heartbeats = gq, await this.qV.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.qV.overwrite(this._heartbeatsCache)), Yq
+       }
+     }
+ 
+     function vE() {
+       return (new Date).toISOString().substring(0, 10)
+     }
+     class hE {
+       constructor(qq) {
+         this.app = qq, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3711` → after: `L900-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L900-L901) · [Before (L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3711)

```diff
-             return this.bypassAuthState || Kn.set(this.auth._key(), (() => Promise.resolve(null))), zz()
+           }(this.app) || {
+             heartbeats: []
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3775-L3831` → after: `L904-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L904-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L904-L905) · [Before (L3775-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3775-L3831)

```diff
-         async function An(zz, uz) {
-           let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-           const Ez = Gu(zz),
-             nz = bn(Ez, uz),
-             iz = new wn(Ez, nz, bz),
-             lz = await iz.execute();
-           return lz && !bz && (delete lz.user._redirectEventId, await Ez._persistUserIfCurrent(lz.user), await Ez._setRedirectUser(null, uz)), lz
-         }
-         async function Tn(zz) {
-           const uz = NE(`${zz.uid}:::`);
-           return zz._redirectEventId = uz, await zz.auth._setRedirectUser(zz), await zz.auth._persistUserIfCurrent(zz), uz
-         }
-         class Ln {
-           constructor(zz) {
-             this.auth = zz, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
-           }
- ... (41 more removed lines; see GitHub link above)
+         return {
+           heartbeats: []
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3833-L3835` → after: `L907-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L907-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L907-L915) · [Before (L3833-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3833-L3835)

```diff
- 
-         function Pn(zz) {
-           return [zz.type, zz.eventId, zz.sessionId, zz.tenantId].filter((zz => zz)).join("-")
+       }
+       async overwrite(qq) {
+         var Eq;
+         if (await this._canUseIndexedDBPromise) {
+           const gq = await this.read();
+           return yE(this.app, {
+             lastSentHeartbeatDate: null !== (Eq = qq.lastSentHeartbeatDate) && void 0 !== Eq ? Eq : gq.lastSentHeartbeatDate,
+             heartbeats: qq.heartbeats
+           })
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3837-L3843` → after: `L917-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L917-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L917-L925) · [Before (L3837-L3843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3837-L3843)

```diff
- 
-         function Gn(zz) {
-           let {
-             type: uz,
-             error: bz
-           } = zz;
-           return "unknown" === uz && "auth/no-auth-event" === (null === bz || void 0 === bz ? void 0 : bz.code)
+       }
+       async add(qq) {
+         var Eq;
+         if (await this._canUseIndexedDBPromise) {
+           const gq = await this.read();
+           return yE(this.app, {
+             lastSentHeartbeatDate: null !== (Eq = qq.lastSentHeartbeatDate) && void 0 !== Eq ? Eq : gq.lastSentHeartbeatDate,
+             heartbeats: [...gq.heartbeats, ...qq.heartbeats]
+           })
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3845-L3855` → after: `L927-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L927-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L927-L975) · [Before (L3845-L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3845-L3855)

```diff
-         const an = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
-           Vn = /^https?/;
-         async function mn(zz) {
-           if (zz.config.emulator) return;
-           const {
-             authorizedDomains: uz
-           } = await async function(zz) {
-             return Uz(zz, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
-           }(zz);
-           for (const Ez of uz) try {
-             if (qn(Ez)) return
+       }
+     }
+ 
+     function nE(qq) {
+       return (0, Oq.p)(JSON.stringify({
+         version: 2,
+         heartbeats: qq
+       })).length
+     }
+     var bE;
+     bE = "", lE(new Yq.f("platform-logger", (qq => new yq(qq)), "PRIVATE")), lE(new Yq.f("heartbeat", (qq => new rE(qq)), "PRIVATE")), dE(tq, rq, bE), dE(tq, rq, "esm2017"), dE("fire-js", "")
+   },
+   40258: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => xq,
+       f: () => lq
+ ... (33 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3917-L3960` → after: `L978-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L978-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L978-L1017) · [Before (L3917-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3917-L3960)

```diff
-         const Sn = new Gz(5e3, 15e3),
-           yn = {
-             style: {
-               position: "absolute",
-               top: "-100px",
-               width: "1px",
-               height: "1px"
-             },
-             "aria-hidden": "true",
-             tabindex: "-1"
-           },
-           Dn = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- ... (28 more removed lines; see GitHub link above)
+         return this.instancesDeferred.get(Eq).promise
+       }
+       getImmediate(qq) {
+         var Eq;
+         const gq = this.normalizeInstanceIdentifier(null === qq || void 0 === qq ? void 0 : qq.identifier),
+           Yq = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.optional) && void 0 !== Eq && Eq;
+         if (!this.isInitialized(gq) && !this.shouldAutoInitialize()) {
+           if (Yq) return null;
+           throw Error(`Service ${this.name} is not available`)
+         }
+         try {
+           return this.getOrInitializeService({
+             instanceIdentifier: gq
+           })
+         } catch (lq) {
+           if (Yq) return null;
+ ... (24 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3964-L3995` → after: `L1021-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1021-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L1021-L1071) · [Before (L3964-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3964-L3995)

```diff
- 
-         function jn(zz, uz, bz) {
-           let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const lz = Math.max((window.screen.availHeight - iz) / 2, 0).toString(),
-             Mz = Math.max((window.screen.availWidth - nz) / 2, 0).toString();
-           let tz = "";
-           const Hz = Object.assign(Object.assign({}, Wn), {
-               width: nz.toString(),
-               height: iz.toString(),
-               top: lz,
-               left: Mz
-             }),
-             Oz = (0, Ez.J)().toLowerCase();
-           bz && (tz = Fu(Oz) ? "_blank" : bz), pu(Oz) && (uz = uz || "http://localhost", Hz.scrollbars = "yes");
-           const pz = Object.entries(Hz).reduce(((zz, uz) => {
- ... (16 more removed lines; see GitHub link above)
+       }
+       clearInstance() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oq;
+         this.instancesDeferred.delete(qq), this.instancesOptions.delete(qq), this.instances.delete(qq)
+       }
+       async delete() {
+         const qq = Array.from(this.instances.values());
+         await Promise.all([...qq.filter((qq => "INTERNAL" in qq)).map((qq => qq.INTERNAL.delete())), ...qq.filter((qq => "_delete" in qq)).map((qq => qq._delete()))])
+       }
+       isComponentSet() {
+         return null != this.component
+       }
+       isInitialized() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oq;
+         return this.instances.has(qq)
+       }
+ ... (35 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L3997-L4018` → after: `L1073-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1073-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L1073-L1222) · [Before (L3997-L4018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L3997-L4018)

```diff
-           return new en(dz)
-         }
-         const In = "__/auth/handler",
-           Bn = "emulator/auth/handler",
-           Cn = encodeURIComponent("fac");
-         async function Yn(zz, uz, bz, iz, lz, Mz) {
-             xz(zz.config.authDomain, zz, "auth-domain-config-required"), xz(zz.config.apiKey, zz, "invalid-api-key");
-             const tz = {
-               apiKey: zz.config.apiKey,
-               appName: zz.name,
-               authType: bz,
-               redirectUrl: iz,
-               v: nz.h,
-               eventId: lz
-             };
-             if (uz instanceof zb) {
- ... (6 more removed lines; see GitHub link above)
+       }
+       getOrInitializeService(qq) {
+         let {
+           instanceIdentifier: Eq,
+           options: gq = {}
+         } = qq, Yq = this.instances.get(Eq);
+         if (!Yq && this.component && (Yq = this.component.instanceFactory(this.container, {
+             instanceIdentifier: (lq = Eq, lq === Oq ? void 0 : lq),
+             options: gq
+           }), this.instances.set(Eq, Yq), this.instancesOptions.set(Eq, gq), this.invokeOnInitCallbacks(Yq, Eq), this.component.onInstanceCreated)) try {
+           this.component.onInstanceCreated(this.container, Eq, Yq)
+         } catch (mq) {}
+         var lq;
+         return Yq || null
+       }
+       normalizeInstanceIdentifier() {
+ ... (134 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L4020-L4026` → after: `L1224-L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1224-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/258.js#L1224-L1237) · [Before (L4020-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/258.js#L4020-L4026)

```diff
-             zz.tenantId && (tz.tid = zz.tenantId);
-             const Hz = tz;
-             for (const Ez of Object.keys(Hz)) void 0 === Hz[Ez] && delete Hz[Ez];
-             const Oz = await zz._getAppCheckToken(),
-               pz = Oz ? `#${Cn}=${encodeURIComponent(Oz)}` : "";
-             return `${function(zz){let{config:uz}=zz;if(!uz.emulator)return`
-             https: //${uz.authDomain}/${In}`;return az(uz,Bn)}(zz)}?${(0,Ez.gb)(Hz).slice(1)}${pz}`}const kn="webStorageSupport";const zi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rE,this._completeRedirect … [truncated]
+           })).filter((qq => qq)).join(" ");
+           gq >= (null !== Yq && void 0 !== Yq ? Yq : Eq.logLevel) && qq({
+             level: lq[gq].toLowerCase(),
+             message: Aq,
+             args: mq,
+             type: Eq.name
+           })
+         }
+       }
+     }
+   }
+ };
+ Object.freeze(modules);
+ for (const qq in modules) Object.freeze(modules[qq]);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/259.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/259.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L4-L141` → after: `L5-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L5-L18) · [Before (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L4-L141)

```diff
-   39740: (zz, uz, bz) => {
-     bz.d(uz, {
-       $d: () => gu,
-       Bc: () => Qu,
-       Bd: () => qz,
-       Be: () => eb,
-       Bf: () => Cb,
-       Cb: () => cz,
-       Cc: () => Sz,
-       Cd: () => mz,
-       Ce: () => Qb,
-       D: () => Du,
-       Ed: () => Zu,
-       Ef: () => kb,
-       Fb: () => bb,
-       Fe: () => ab,
- ... (122 more removed lines; see GitHub link above)
+   40278: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       getAnalytics: () => XE,
+       getGoogleAnalyticsClientId: () => IE,
+       initializeAnalytics: () => wE,
+       isSupported: () => KE,
+       logEvent: () => gg,
+       setAnalyticsCollectionEnabled: () => qg,
+       setConsent: () => Yg,
+       setCurrentScreen: () => CE,
+       setDefaultEventParameters: () => Eg,
+       setUserId: () => eE,
+       setUserProperties: () => DE,
+       settings: () => FE
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L143-L773` → after: `L20-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L20-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L20-L41) · [Before (L143-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L143-L773)

```diff
-     const Ez = -2147483648,
-       nz = 12,
-       iz = 12,
-       lz = 4095,
-       Mz = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       tz = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (615 more removed lines; see GitHub link above)
+     var Yq = gq(40254),
+       lq = gq(40273),
+       Oq = gq(40265),
+       mq = gq(40258);
+     let xq, Aq;
+     const cq = new WeakMap,
+       uq = new WeakMap,
+       Bq = new WeakMap,
+       Wq = new WeakMap,
+       Nq = new WeakMap;
+     let aq = {
+       get(qq, Eq, gq) {
+         if (qq instanceof IDBTransaction) {
+           if ("done" === Eq) return uq.get(qq);
+           if ("objectStoreNames" === Eq) return qq.objectStoreNames || Bq.get(qq);
+           if ("store" === Eq) return gq.objectStoreNames[1] ? void 0 : gq.objectStore(gq.objectStoreNames[0])
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L775-L829` → after: `L43-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L43-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L43-L53) · [Before (L775-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L775-L829)

```diff
-     function tb(zz, uz, bz, Ez, nz) {
-       var iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz;
-       switch (zz) {
-         case 32:
-           return 4 === Ez && (null === (iz = nz.tickEnd) || void 0 === iz || iz.call(nz, wu.sd(uz, bz)), !0);
-         case 33:
-           return 12 === Ez && (null === (lz = nz.entitySpawned) || void 0 === lz || lz.call(nz, Xu.serverId(uz, bz), Xu.index(uz, bz), Xu.kind(uz, bz)), !0);
-         case 34:
-           return 12 === Ez && (null === (Mz = nz.entityDespawned) || void 0 === Mz || Mz.call(nz, Xu.serverId(uz, bz), Xu.index(uz, bz), Xu.kind(uz, bz)), !0);
-         case 39:
-           return !(Ez < 20) && (null === (tz = nz.changeBlockFail) || void 0 === tz || tz.call(nz, fu.pos(uz, bz, 0), fu.pos(uz, bz, 1), fu.pos(uz, bz, 2), fu.actual(uz, bz), fu.dataLen(uz, bz), bz + 20, Ez - 20), !0);
-         case 46:
-           return 0 === Ez && (null === (Hz = nz.changeBlockFailEnd) || void 0 === Hz || Hz.call(nz), !0);
-         case 48:
-           return 20 === Ez && (null === (Oz = nz.inventoryEvent) || void 0 === Oz || Oz.call(nz, su.what(uz, bz), su.value(uz, bz), su.pos(uz, bz, 0), su.pos(uz, bz, 1), su.pos(uz, bz, 2), su.block(uz, bz)), !0);
-         case 49:
- ... (39 more removed lines; see GitHub link above)
+     function Vq(qq) {
+       return qq !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Aq || (Aq = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(qq) ? function() {
+         for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
+         return qq.apply(Hq(this), gq), jq(cq.get(this))
+       } : function() {
+         for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
+         return jq(qq.apply(Hq(this), gq))
+       } : function(Eq) {
+         for (var gq = arguments.length, Yq = new Array(gq > 1 ? gq - 1 : 0), lq = 1; lq < gq; lq++) Yq[lq - 1] = arguments[lq];
+         const Oq = qq.call(Hq(this), Eq, ...Yq);
+         return Bq.set(Oq, Eq.sort ? Eq.sort() : [Eq]), jq(Oq)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L887` → after: `L58-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L58-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L58-L74) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L887)

```diff
-       return Ob.buffer !== zz.buffer && (Ob = new Uint8Array(zz.buffer)), Ob
+       return "function" === typeof qq ? Vq(qq) : (qq instanceof IDBTransaction && function(qq) {
+         if (uq.has(qq)) return;
+         const Eq = new Promise(((Eq, gq) => {
+           const Yq = () => {
+               qq.removeEventListener("complete", lq), qq.removeEventListener("error", Oq), qq.removeEventListener("abort", Oq)
+             },
+             lq = () => {
+               Eq(), Yq()
+             },
+             Oq = () => {
+               gq(qq.error || new DOMException("AbortError", "AbortError")), Yq()
+             };
+           qq.addEventListener("complete", lq), qq.addEventListener("error", Oq), qq.addEventListener("abort", Oq)
+         }));
+         uq.set(qq, Eq)
+       }(qq), Eq = qq, (xq || (xq = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((qq => Eq instanceof qq)) ? new Proxy(qq, aq) : qq);
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L890-L893` → after: `L77-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L77-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L77-L97) · [Before (L890-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L890-L893)

```diff
-     function db(zz, uz, bz) {
-       const Ez = zz.QF(66, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint8(Ez + 0, bz), !0
+     function jq(qq) {
+       if (qq instanceof IDBRequest) return function(qq) {
+         const Eq = new Promise(((Eq, gq) => {
+           const Yq = () => {
+               qq.removeEventListener("success", lq), qq.removeEventListener("error", Oq)
+             },
+             lq = () => {
+               Eq(jq(qq.result)), Yq()
+             },
+             Oq = () => {
+               gq(qq.error), Yq()
+             };
+           qq.addEventListener("success", lq), qq.addEventListener("error", Oq)
+         }));
+         return Eq.then((Eq => {
+           Eq instanceof IDBCursor && cq.set(Eq, qq)
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L896-L899` → after: `L104-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L104-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L104-L117) · [Before (L896-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L896-L899)

```diff
-     function Fb(zz, uz, bz) {
-       const Ez = zz.QF(67, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint32(Ez + 0, bz, !0), !0
+     function yq(qq, Eq) {
+       if (!(qq instanceof IDBDatabase) || Eq in qq || "string" !== typeof Eq) return;
+       if (Qq.get(Eq)) return Qq.get(Eq);
+       const gq = Eq.replace(/FromIndex$/, ""),
+         Yq = Eq !== gq,
+         lq = Pq.includes(gq);
+       if (!(gq in (Yq ? IDBIndex : IDBObjectStore).prototype) || !lq && !oq.includes(gq)) return;
+       const Oq = async function(qq) {
+         const Eq = this.transaction(qq, lq ? "readwrite" : "readonly");
+         let Oq = Eq.store;
+         for (var mq = arguments.length, xq = new Array(mq > 1 ? mq - 1 : 0), Aq = 1; Aq < mq; Aq++) xq[Aq - 1] = arguments[Aq];
+         return Yq && (Oq = Oq.index(xq.shift())), (await Promise.all([Oq[gq](...xq), lq && Eq.done]))[0]
+       };
+       return Qq.set(Eq, Oq), Oq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L902-L905` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L140-L141) · [Before (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L902-L905)

```diff
-     function Zb(zz, uz, bz) {
-       const Ez = zz.QF(68, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint8(Ez + 0, bz), !0
+     function fq(qq) {
+       return qq instanceof Oq.h && qq.code.includes("request-failed")
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L908-L912` → after: `L144-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L144-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L144-L148) · [Before (L908-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L908-L912)

```diff
-     function Rb(zz, uz, bz, Ez) {
-       const nz = zz.QF(69, uz, 4 + Ez.length);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       return iz.setUint8(nz + 0, bz), pb(iz).set(Ez, iz.byteOffset + nz + 4), !0
+     function Mq(qq) {
+       let {
+         projectId: Eq
+       } = qq;
+       return `https://firebaseinstallations.googleapis.com/v1/projects/${Eq}/installations`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L915-L919` → after: `L151-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L151-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L151-L158) · [Before (L915-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L915-L919)

```diff
-     function Kb(zz, uz, bz, Ez, nz) {
-       const iz = zz.QF(128, uz, 4 + nz.length);
-       if (iz < 0) return !1;
-       const lz = zz.view;
-       return lz.setUint8(iz + 0, bz), lz.setUint16(iz + 2, Ez, !0), pb(lz).set(nz, lz.byteOffset + iz + 4), !0
+     function Tq(qq) {
+       return {
+         token: qq.token,
+         requestStatus: 2,
+         expiresIn: (Eq = qq.expiresIn, Number(Eq.replace("s", "000"))),
+         creationTime: Date.now()
+       };
+       var Eq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L921-L925` → after: `L160-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L160-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L160-L167) · [Before (L921-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L921-L925)

```diff
- 
-     function wb(zz, uz, bz) {
-       const Ez = zz.QF(131, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setInt32(Ez + 0, bz, !0), !0
+     async function zq(qq, Eq) {
+       const gq = (await Eq.json()).error;
+       return Zq.create("request-failed", {
+         requestName: qq,
+         serverCode: gq.code,
+         serverMessage: gq.message,
+         serverStatus: gq.status
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L928-L931` → after: `L170-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L170-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L170-L178) · [Before (L928-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L928-L931)

```diff
-     function Xb(zz, uz, bz) {
-       const Ez = zz.QF(132, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint32(Ez + 0, bz, !0), !0
+     function Sq(qq) {
+       let {
+         apiKey: Eq
+       } = qq;
+       return new Headers({
+         "Content-Type": "application/json",
+         Accept: "application/json",
+         "x-goog-api-key": Eq
+       })
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L934-L937` → after: `L181-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L181-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L181-L192) · [Before (L934-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L934-L937)

```diff
-     function fb(zz, uz, bz) {
-       const Ez = zz.QF(133, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint32(Ez + 0, bz, !0), !0
+     function pq(qq, Eq) {
+       let {
+         refreshToken: gq
+       } = Eq;
+       const Yq = Sq(qq);
+       return Yq.append("Authorization", function(qq) {
+         return `${nq} ${qq}`
+       }(gq)), Yq
+     }
+     async function Gq(qq) {
+       const Eq = await qq();
+       return Eq.status >= 500 && Eq.status < 600 ? qq() : Eq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L940-L943` → after: `L195-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L195-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L195-L198) · [Before (L940-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L940-L943)

```diff
-     function sb(zz, uz, bz) {
-       const Ez = zz.QF(144, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint8(Ez + 0, bz), !0
+     function Lq(qq) {
+       return new Promise((Eq => {
+         setTimeout(Eq, qq)
+       }))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L946-L950` → after: `L202-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L202-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L202-L214) · [Before (L946-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L946-L950)

```diff
-     function rb(zz, uz, bz, Ez, nz) {
-       const iz = zz.QF(145, uz, 12);
-       if (iz < 0) return !1;
-       const lz = zz.view;
-       return lz.setInt32(iz + 0, bz, !0), lz.setInt32(iz + 4, Ez, !0), lz.setInt32(iz + 8, nz, !0), !0
+     function kq() {
+       try {
+         const qq = new Uint8Array(17);
+         (self.crypto || self.msCrypto).getRandomValues(qq), qq[0] = 112 + qq[0] % 16;
+         const Eq = function(qq) {
+           const Eq = (gq = qq, btoa(String.fromCharCode(...gq)).replace(/\+/g, "-").replace(/\//g, "_"));
+           var gq;
+           return Eq.substr(0, 22)
+         }(qq);
+         return Jq.test(Eq) ? Eq : ""
+       } catch (qq) {
+         return ""
+       }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L953-L957` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L217-L218) · [Before (L953-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L953-L957)

```diff
-     function ob(zz, uz, bz, Ez) {
-       const nz = zz.QF(256, uz, 4 + Ez.length);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       return iz.setUint16(nz + 0, bz, !0), pb(iz).set(Ez, iz.byteOffset + nz + 4), !0
+     function Rq(qq) {
+       return `${qq.appName}!${qq.appId}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L960-L963` → after: `L222-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L222-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L222-L232) · [Before (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L960-L963)

```diff
-     function Nb(zz, uz, bz) {
-       const Ez = zz.QF(258, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint8(Ez + 0, bz), !0
+     function Fq(qq, Eq) {
+       const gq = Rq(qq);
+       sq(gq, Eq),
+         function(qq, Eq) {
+           const gq = wq();
+           gq && gq.postMessage({
+             key: qq,
+             fid: Eq
+           });
+           Kq()
+         }(gq, Eq)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L966-L973` → after: `L235-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L235-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L235-L238) · [Before (L966-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L966-L973)

```diff
-     function vb(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
-       const Hz = zz.QF(320, uz, 48 + tz.length);
-       if (Hz < 0) return !1;
-       const Oz = zz.view;
-       Oz.setUint32(Hz + 0, bz, !0), Oz.setUint16(Hz + 4, Ez, !0), Oz.setUint16(Hz + 6, nz, !0), Oz.setUint32(Hz + 8, iz, !0);
-       for (let pz = 0; pz < 3; pz++) Oz.setFloat64(Hz + 12 + 8 * pz, lz[pz], !0);
-       for (let pz = 0; pz < 3; pz++) Oz.setFloat32(Hz + 36 + 4 * pz, Mz[pz], !0);
-       return pb(Oz).set(tz, Oz.byteOffset + Hz + 48), !0
+     function sq(qq, Eq) {
+       const gq = Uq.get(qq);
+       if (gq)
+         for (const Yq of gq) Yq(Eq)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L976-L983` → after: `L242-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L242-L245) · [Before (L976-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L976-L983)

```diff
-     function xb(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
-       const Hz = zz.QF(321, uz, 48 + tz.length);
-       if (Hz < 0) return !1;
-       const Oz = zz.view;
-       Oz.setUint32(Hz + 0, bz, !0), Oz.setInt32(Hz + 4, Ez, !0), Oz.setUint16(Hz + 8, nz, !0), Oz.setUint16(Hz + 10, iz, !0);
-       for (let pz = 0; pz < 3; pz++) Oz.setFloat64(Hz + 12 + 8 * pz, lz[pz], !0);
-       for (let pz = 0; pz < 3; pz++) Oz.setFloat32(Hz + 36 + 4 * pz, Mz[pz], !0);
-       return pb(Oz).set(tz, Oz.byteOffset + Hz + 48), !0
+     function wq() {
+       return !Xq && "BroadcastChannel" in self && (Xq = new BroadcastChannel("[Firebase] FID Change"), Xq.onmessage = qq => {
+         sq(qq.data.key, qq.data.fid)
+       }), Xq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L986-L993` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L248-L249) · [Before (L986-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L986-L993)

```diff
-     function Jb(zz, uz, bz, Ez, nz, iz, lz) {
-       const Mz = zz.QF(322, uz, 44 + lz.length);
-       if (Mz < 0) return !1;
-       const tz = zz.view;
-       tz.setUint32(Mz + 0, bz, !0), tz.setUint32(Mz + 4, Ez, !0);
-       for (let Hz = 0; Hz < 3; Hz++) tz.setFloat64(Mz + 8 + 8 * Hz, nz[Hz], !0);
-       for (let Hz = 0; Hz < 3; Hz++) tz.setFloat32(Mz + 32 + 4 * Hz, iz[Hz], !0);
-       return pb(tz).set(lz, tz.byteOffset + Mz + 44), !0
+     function Kq() {
+       0 === Uq.size && Xq && (Xq.close(), Xq = null)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L996-L999` → after: `L254-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L254-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L254-L398) · [Before (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L996-L999)

```diff
-     function Ab(zz, uz, bz) {
-       const Ez = zz.QF(323, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint32(Ez + 0, bz, !0), !0
+     function eq() {
+       return Iq || (Iq = function(qq, Eq) {
+         let {
+           blocked: gq,
+           upgrade: Yq,
+           blocking: lq,
+           terminated: Oq
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const mq = indexedDB.open(qq, Eq),
+           xq = jq(mq);
+         return Yq && mq.addEventListener("upgradeneeded", (qq => {
+           Yq(jq(mq.result), qq.oldVersion, qq.newVersion, jq(mq.transaction))
+         })), gq && mq.addEventListener("blocked", (() => gq())), xq.then((qq => {
+           Oq && qq.addEventListener("close", (() => Oq())), lq && qq.addEventListener("versionchange", (() => lq()))
+         })).catch((() => {})), xq
+       }("firebase-installations-database", 1, {
+ ... (129 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1002-L1008` → after: `L401-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L401-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L401-L405) · [Before (L1002-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1002-L1008)

```diff
-     function Tb(zz, uz, bz, Ez, nz, iz) {
-       const lz = zz.QF(324, uz, 32 + iz.length);
-       if (lz < 0) return !1;
-       const Mz = zz.view;
-       Mz.setUint32(lz + 0, bz, !0), Mz.setUint32(lz + 4, Ez, !0);
-       for (let tz = 0; tz < 3; tz++) Mz.setFloat64(lz + 8 + 8 * tz, nz[tz], !0);
-       return pb(Mz).set(iz, Mz.byteOffset + lz + 32), !0
+     function lE(qq) {
+       return EE(qq, (qq => {
+         if (!qq) throw Zq.create("installation-not-found");
+         return OE(qq)
+       }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1011-L1012` → after: `L408-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L408-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L408-L500) · [Before (L1011-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1011-L1012)

```diff
-     function Lb(zz, uz) {
-       return !(zz.QF(325, uz, 0) < 0)
+     function OE(qq) {
+       return 1 === (Eq = qq).registrationStatus && Eq.registrationTime + vq < Date.now() ? {
+         fid: qq.fid,
+         registrationStatus: 0
+       } : qq;
+       var Eq
+     }
+     async function mE(qq, Eq) {
+       let {
+         appConfig: gq,
+         heartbeatServiceProvider: Yq
+       } = qq;
+       const lq = function(qq, Eq) {
+           let {
+             fid: gq
+           } = Eq;
+ ... (77 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1015-L1019` → after: `L503-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L503-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L503-L513) · [Before (L1015-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1015-L1019)

```diff
-     function Pb(zz, uz, bz, Ez, nz, iz) {
-       const lz = zz.QF(384, uz, 16);
-       if (lz < 0) return !1;
-       const Mz = zz.view;
-       return Mz.setUint32(lz + 0, bz, !0), Mz.setUint32(lz + 4, Ez, !0), Mz.setFloat32(lz + 8, nz, !0), Mz.setFloat32(lz + 12, iz, !0), !0
+     function AE(qq) {
+       return EE(qq, (qq => {
+         if (!cE(qq)) throw Zq.create("not-registered");
+         const Eq = qq.authToken;
+         return 1 === (gq = Eq).requestStatus && gq.requestTime + vq < Date.now() ? Object.assign(Object.assign({}, qq), {
+           authToken: {
+             requestStatus: 0
+           }
+         }) : qq;
+         var gq
+       }))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1022-L1028` → after: `L516-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L516-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L516-L528) · [Before (L1022-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1022-L1028)

```diff
-     function Gb(zz, uz, bz, Ez, nz, iz, lz) {
-       const Mz = zz.QF(385, uz, 36 + lz.length);
-       if (Mz < 0) return !1;
-       const tz = zz.view;
-       tz.setUint32(Mz + 0, bz, !0), tz.setUint32(Mz + 4, Ez, !0);
-       for (let Hz = 0; Hz < 3; Hz++) tz.setFloat64(Mz + 8 + 8 * Hz, nz[Hz], !0);
-       return tz.setUint32(Mz + 32, iz, !0), pb(tz).set(lz, tz.byteOffset + Mz + 36), !0
+     function cE(qq) {
+       return void 0 !== qq && 2 === qq.registrationStatus
+     }
+     async function uE(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       const gq = qq;
+       await async function(qq) {
+         const {
+           registrationPromise: Eq
+         } = await gE(qq);
+         Eq && await Eq
+       }(gq);
+       return (await xE(gq, Eq)).token
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1031-L1038` → after: `L531-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L531-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L531-L534) · [Before (L1031-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1031-L1038)

```diff
-     function ab(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
-       const Hz = zz.QF(386, uz, 56 + tz.length);
-       if (Hz < 0) return !1;
-       const Oz = zz.view;
-       Oz.setUint32(Hz + 0, bz, !0), Oz.setUint8(Hz + 4, Ez);
-       for (let pz = 0; pz < 4; pz++) Oz.setFloat32(Hz + 8 + 4 * pz, nz[pz], !0);
-       for (let pz = 0; pz < 3; pz++) Oz.setFloat64(Hz + 24 + 8 * pz, iz[pz], !0);
-       return Oz.setUint32(Hz + 48, lz, !0), Oz.setUint32(Hz + 52, Mz, !0), pb(Oz).set(tz, Oz.byteOffset + Hz + 56), !0
+     function BE(qq) {
+       return Zq.create("missing-app-config-values", {
+         valueName: qq
+       })
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1041-L1050` → after: `L594-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L594-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L594-L601) · [Before (L1041-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1041-L1050)

```diff
-     function Vb(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
-       const Hz = zz.QF(387, uz, 56);
-       if (Hz < 0) return !1;
-       const Oz = zz.view;
-       Oz.setUint32(Hz + 0, bz, !0), Oz.setUint16(Hz + 4, Ez, !0), Oz.setUint8(Hz + 6, nz);
-       for (let pz = 0; pz < 3; pz++) Oz.setFloat64(Hz + 8 + 8 * pz, iz[pz], !0);
-       for (let pz = 0; pz < 2; pz++) Oz.setFloat32(Hz + 32 + 4 * pz, lz[pz], !0);
-       Oz.setFloat32(Hz + 40, Mz, !0);
-       for (let pz = 0; pz < 3; pz++) Oz.setFloat32(Hz + 44 + 4 * pz, tz[pz], !0);
-       return !0
+     function PE(qq) {
+       if (!qq.startsWith(dE)) {
+         const Eq = oE.create("invalid-gtag-resource", {
+           gtagURL: qq
+         });
+         return jE.warn(Eq.message), ""
+       }
+       return qq
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1053-L1056` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L604-L605) · [Before (L1053-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1053-L1056)

```diff
-     function mb(zz, uz, bz) {
-       const Ez = zz.QF(388, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint32(Ez + 0, bz, !0), !0
+     function QE(qq) {
+       return Promise.all(qq.map((qq => qq.catch((qq => qq)))))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1059-L1063` → after: `L608-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L608-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L608-L617) · [Before (L1059-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1059-L1063)

```diff
-     function qb(zz, uz, bz, Ez) {
-       const nz = zz.QF(389, uz, 8);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       return iz.setInt32(nz + 0, bz, !0), iz.setFloat32(nz + 4, Ez, !0), !0
+     function yE(qq, Eq) {
+       const gq = function(qq, Eq) {
+           let gq;
+           return window.trustedTypes && (gq = window.trustedTypes.createPolicy(qq, Eq)), gq
+         }("firebase-js-sdk-policy", {
+           createScriptURL: PE
+         }),
+         Yq = document.createElement("script"),
+         lq = `${dE}?l=${qq}&id=${Eq}`;
+       Yq.src = gq ? null === gq || void 0 === gq ? void 0 : gq.createScriptURL(lq) : lq, Yq.async = !0, document.head.appendChild(Yq)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1067-L1070` → after: `L621-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L621-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L621-L676) · [Before (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1067-L1070)

```diff
-       const nz = zz.QF(390, uz, 8);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       return iz.setInt32(nz + 0, bz, !0), iz.setFloat32(nz + 4, Ez, !0), !0
+       return async function(lq) {
+         try {
+           for (var Oq = arguments.length, mq = new Array(Oq > 1 ? Oq - 1 : 0), xq = 1; xq < Oq; xq++) mq[xq - 1] = arguments[xq];
+           if ("event" === lq) {
+             const [Yq, lq] = mq;
+             await async function(qq, Eq, gq, Yq, lq) {
+               try {
+                 let Oq = [];
+                 if (lq && lq.send_to) {
+                   let qq = lq.send_to;
+                   Array.isArray(qq) || (qq = [qq]);
+                   const Yq = await QE(gq);
+                   for (const gq of qq) {
+                     const qq = Yq.find((qq => qq.measurementId === gq)),
+                       lq = qq && Eq[qq.appId];
+                     if (!lq) {
+ ... (40 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1073-L1077` → after: `L695-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L695-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L695-L699) · [Before (L1073-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1073-L1077)

```diff
-     function Ub(zz, uz, bz, Ez, nz, iz) {
-       const lz = zz.QF(391, uz, 12);
-       if (lz < 0) return !1;
-       const Mz = zz.view;
-       return Mz.setFloat32(lz + 0, bz, !0), Mz.setFloat32(lz + 4, Ez, !0), Mz.setUint8(lz + 8, nz), Mz.setUint8(lz + 9, iz), !0
+     function vE(qq) {
+       return new Headers({
+         Accept: "application/json",
+         "x-goog-api-key": qq
+       })
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1079-L1083` → after: `L701-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L701-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L701-L728) · [Before (L1079-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1079-L1083)

```diff
- 
-     function cb(zz, uz, bz) {
-       const Ez = zz.QF(392, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint32(Ez + 0, bz, !0), !0
+     async function hE(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rE,
+         gq = arguments.length > 2 ? arguments[2] : void 0;
+       const {
+         appId: Yq,
+         apiKey: lq,
+         measurementId: Oq
+       } = qq.options;
+       if (!Yq) throw oE.create("no-app-id");
+       if (!lq) {
+         if (Oq) return {
+           measurementId: Oq,
+           appId: Yq
+         };
+         throw oE.create("no-api-key")
+       }
+ ... (12 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1085-L1090` → after: `L730-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L730-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L730-L803) · [Before (L1085-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1085-L1090)

```diff
- 
-     function gb(zz, uz, bz, Ez, nz) {
-       const iz = zz.QF(393, uz, 12);
-       if (iz < 0) return !1;
-       const lz = zz.view;
-       return lz.setUint32(iz + 0, bz, !0), lz.setUint16(iz + 4, Ez, !0), lz.setFloat32(iz + 8, nz, !0), !0
+     async function nE(qq, Eq, gq) {
+       let {
+         throttleEndTimeMillis: Yq,
+         backoffCount: lq
+       } = Eq, mq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rE;
+       var xq;
+       const {
+         appId: Aq,
+         measurementId: cq
+       } = qq;
+       try {
+         await
+         function(qq, Eq) {
+           return new Promise(((gq, Yq) => {
+             const lq = Math.max(Eq - Date.now(), 0),
+               Oq = setTimeout(gq, lq);
+ ... (58 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1092-L1099` → after: `L805-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L805-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L805-L814) · [Before (L1092-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1092-L1099)

```diff
- 
-     function Sb(zz, uz, bz, Ez, nz, iz, lz) {
-       const Mz = zz.QF(394, uz, 36);
-       if (Mz < 0) return !1;
-       const tz = zz.view;
-       tz.setUint32(Mz + 0, bz, !0), tz.setUint16(Mz + 4, Ez, !0), tz.setUint8(Mz + 6, nz);
-       for (let Hz = 0; Hz < 3; Hz++) tz.setFloat64(Mz + 8 + 8 * Hz, iz[Hz], !0);
-       return tz.setFloat32(Mz + 32, lz, !0), !0
+     class bE {
+       constructor() {
+         this.listeners = []
+       }
+       addEventListener(qq) {
+         this.listeners.push(qq)
+       }
+       abort() {
+         this.listeners.forEach((qq => qq()))
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1102-L1105` → after: `L818-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L818-L819) · [Before (L1102-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1102-L1105)

```diff
-     function yb(zz, uz, bz) {
-       const Ez = zz.QF(398, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setUint32(Ez + 0, bz, !0), !0
+     function fE(qq) {
+       ZE = qq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1108-L1111` → after: `L822-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L822-L823) · [Before (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1108-L1111)

```diff
-     function Db(zz, uz, bz) {
-       const Ez = zz.QF(448, uz, 4);
-       if (Ez < 0) return !1;
-       return zz.view.setFloat32(Ez + 0, bz, !0), !0
+     function ME(qq) {
+       iE = qq
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1113-L1119` → after: `L825-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L825-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L825-L851) · [Before (L1113-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1113-L1119)

```diff
- 
-     function Qb(zz, uz, bz, Ez) {
-       const nz = zz.QF(450, uz, 12);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       for (let lz = 0; lz < 2; lz++) iz.setFloat32(nz + 0 + 4 * lz, bz[lz], !0);
-       return iz.setUint8(nz + 8, Ez), !0
+     async function TE(qq, Eq, gq, Yq, lq, mq, xq) {
+       var Aq;
+       const cq = hE(qq);
+       cq.then((Eq => {
+         gq[Eq.measurementId] = Eq.appId, qq.options.measurementId && Eq.measurementId !== qq.options.measurementId && jE.warn(`The measurement ID in the local Firebase config (${qq.options.measurementId}) does not match the measurement ID fetched from the server (${Eq.measurement … [truncated]
+       })).catch((qq => jE.error(qq))), Eq.push(cq);
+       const uq = async function() {
+         if (!(0, Oq.T)()) return jE.warn(oE.create("indexeddb-unavailable", {
+           errorInfo: "IndexedDB is not available in this environment."
+         }).message), !1;
+         try {
+           await (0, Oq.bb)()
+         } catch (qq) {
+           return jE.warn(oE.create("indexeddb-unavailable", {
+             errorInfo: null === qq || void 0 === qq ? void 0 : qq.toString()
+           }).message), !1
+ ... (11 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1121-L1126` → after: `L853-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L853-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L853-L859) · [Before (L1121-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1121-L1126)

```diff
- 
-     function Wb(zz, uz, bz, Ez) {
-       const nz = zz.QF(452, uz, 8);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       return iz.setFloat32(nz + 0, bz, !0), iz.setUint8(nz + 4, Ez), !0
+     class zE {
+       constructor(qq) {
+         this.app = qq
+       }
+       _delete() {
+         return delete SE[this.app.options.appId], Promise.resolve()
+       }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1129-L1133` → after: `L868-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L868-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L868-L870) · [Before (L1129-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1129-L1133)

```diff
-     function eb(zz, uz, bz, Ez, nz) {
-       const iz = zz.QF(454, uz, 4);
-       if (iz < 0) return !1;
-       const lz = zz.view;
-       return lz.setUint8(iz + 0, bz), lz.setUint8(iz + 1, Ez), lz.setUint8(iz + 2, nz), !0
+     function FE(qq) {
+       if (UE) throw oE.create("already-initialized");
+       qq.dataLayerName && (kE = qq.dataLayerName), qq.gtagName && (RE = qq.gtagName)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1136-L1141` → after: `L873-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L873-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L873-L914) · [Before (L1136-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1136-L1141)

```diff
-     function jb(zz, uz, bz, Ez) {
-       const nz = zz.QF(455, uz, 40);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       for (let lz = 0; lz < 9; lz++) iz.setInt32(nz + 0 + 4 * lz, bz[lz], !0);
-       return iz.setUint32(nz + 36, Ez, !0), !0
+     function sE(qq, Eq, gq) {
+       ! function() {
+         const qq = [];
+         if ((0, Oq.M)() && qq.push("This is a browser extension environment."), (0, Oq.l)() || qq.push("Cookies are not available."), qq.length > 0) {
+           const Eq = qq.map(((qq, Eq) => `(${Eq+1}) ${qq}`)).join(" "),
+             gq = oE.create("invalid-analytics-context", {
+               errorInfo: Eq
+             });
+           jE.warn(gq.message)
+         }
+       }();
+       const Yq = qq.options.appId;
+       if (!Yq) throw oE.create("no-app-id");
+       if (!qq.options.apiKey) {
+         if (!qq.options.measurementId) throw oE.create("no-api-key");
+         jE.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${qq.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+ ... (26 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1144-L1148` → after: `L917-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L917-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L917-L921) · [Before (L1144-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1144-L1148)

```diff
-     function Ib(zz, uz, bz, Ez) {
-       const nz = zz.QF(456, uz, 8);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       return iz.setFloat32(nz + 0, bz, !0), iz.setUint8(nz + 4, Ez), !0
+     function XE() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.F)();
+       qq = (0, Oq.K)(qq);
+       const Eq = (0, Yq.s)(qq, VE);
+       return Eq.isInitialized() ? Eq.getImmediate() : wE(qq)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1151-L1157` → after: `L924-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L924-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L924-L934) · [Before (L1151-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1151-L1157)

```diff
-     function Bb(zz, uz, bz, Ez, nz) {
-       const iz = zz.QF(457, uz, 16);
-       if (iz < 0) return !1;
-       const lz = zz.view;
-       for (let Mz = 0; Mz < 3; Mz++) lz.setInt32(iz + 0 + 4 * Mz, bz[Mz], !0);
-       for (let Mz = 0; Mz < 3; Mz++) lz.setInt8(iz + 12 + 1 * Mz, Ez[Mz]);
-       return lz.setUint8(iz + 15, nz), !0
+     function wE(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const gq = (0, Yq.s)(qq, VE);
+       if (gq.isInitialized()) {
+         const qq = gq.getImmediate();
+         if ((0, Oq.x)(Eq, gq.getOptions())) return qq;
+         throw oE.create("already-initialized")
+       }
+       return gq.initialize({
+         options: Eq
+       })
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1159-L1164` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L936-L944) · [Before (L1159-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1159-L1164)

```diff
- 
-     function Cb(zz, uz, bz, Ez) {
-       const nz = zz.QF(530, uz, 4 + Ez.length);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       return iz.setUint8(nz + 0, bz), pb(iz).set(Ez, iz.byteOffset + nz + 4), !0
+     async function KE() {
+       if ((0, Oq.M)()) return !1;
+       if (!(0, Oq.l)()) return !1;
+       if (!(0, Oq.T)()) return !1;
+       try {
+         return await (0, Oq.bb)()
+       } catch (qq) {
+         return !1
+       }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1167-L1171` → after: `L947-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L947-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L947-L966) · [Before (L1167-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1167-L1171)

```diff
-     function Yb(zz, uz, bz, Ez, nz, iz) {
-       const lz = zz.QF(531, uz, 12 + iz.length);
-       if (lz < 0) return !1;
-       const Mz = zz.view;
-       return Mz.setFloat32(lz + 0, bz, !0), Mz.setFloat32(lz + 4, Ez, !0), Mz.setUint32(lz + 8, nz, !0), pb(Mz).set(iz, Mz.byteOffset + lz + 12), !0
+     function CE(qq, Eq, gq) {
+       qq = (0, Oq.K)(qq), async function(qq, Eq, gq, Yq) {
+         if (Yq && Yq.global) return qq("set", {
+           screen_name: gq
+         }), Promise.resolve();
+         qq("config", await Eq, {
+           update: !0,
+           screen_name: gq
+         })
+       }(JE, SE[qq.app.options.appId], Eq, gq).catch((qq => jE.error(qq)))
+     }
+     async function IE(qq) {
+       return qq = (0, Oq.K)(qq), async function(qq, Eq) {
+         const gq = await Eq;
+         return new Promise(((Eq, Yq) => {
+           qq("get", gq, "client_id", (qq => {
+ ... (4 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1174-L1178` → after: `L969-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L969-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L969-L978) · [Before (L1174-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1174-L1178)

```diff
-     function kb(zz, uz, bz, Ez, nz, iz) {
-       const lz = zz.QF(532, uz, 12 + iz.length);
-       if (lz < 0) return !1;
-       const Mz = zz.view;
-       return Mz.setInt32(lz + 0, bz, !0), Mz.setInt32(lz + 4, Ez, !0), Mz.setUint32(lz + 8, nz, !0), pb(Mz).set(iz, Mz.byteOffset + lz + 12), !0
+     function eE(qq, Eq, gq) {
+       qq = (0, Oq.K)(qq), async function(qq, Eq, gq, Yq) {
+         if (Yq && Yq.global) return qq("set", {
+           user_id: gq
+         }), Promise.resolve();
+         qq("config", await Eq, {
+           update: !0,
+           user_id: gq
+         })
+       }(JE, SE[qq.app.options.appId], Eq, gq).catch((qq => jE.error(qq)))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1181-L1185` → after: `L981-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L981-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L981-L992) · [Before (L1181-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1181-L1185)

```diff
-     function zE(zz, uz, bz, Ez, nz) {
-       const iz = zz.QF(533, uz, 8 + nz.length);
-       if (iz < 0) return !1;
-       const lz = zz.view;
-       return lz.setInt32(iz + 0, bz, !0), lz.setInt32(iz + 4, Ez, !0), pb(lz).set(nz, lz.byteOffset + iz + 8), !0
+     function DE(qq, Eq, gq) {
+       qq = (0, Oq.K)(qq), async function(qq, Eq, gq, Yq) {
+         if (Yq && Yq.global) {
+           const Eq = {};
+           for (const qq of Object.keys(gq)) Eq[`user_properties.${qq}`] = gq[qq];
+           return qq("set", Eq), Promise.resolve()
+         }
+         qq("config", await Eq, {
+           update: !0,
+           user_properties: gq
+         })
+       }(JE, SE[qq.app.options.appId], Eq, gq).catch((qq => jE.error(qq)))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1189` → after: `L996-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L996-L999) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1189)

```diff
-       return !(zz.QF(576, uz, 0) < 0)
+       qq = (0, Oq.K)(qq), async function(qq, Eq) {
+         const gq = await qq;
+         window[`ga-disable-${gq}`] = !Eq
+       }(SE[qq.app.options.appId], Eq).catch((qq => jE.error(qq)))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1192-L1199` → after: `L1002-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L1002-L1003) · [Before (L1192-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1192-L1199)

```diff
-     function bE(zz, uz, bz, Ez, nz, iz) {
-       const lz = zz.QF(577, uz, 36 + iz.length);
-       if (lz < 0) return !1;
-       const Mz = zz.view;
-       Mz.setUint8(lz + 0, bz);
-       for (let tz = 0; tz < 16; tz++) Mz.setUint8(lz + 4 + 1 * tz, Ez[tz]);
-       for (let tz = 0; tz < 16; tz++) Mz.setUint8(lz + 20 + 1 * tz, nz[tz]);
-       return pb(Mz).set(iz, Mz.byteOffset + lz + 36), !0
+     function Eg(qq) {
+       JE ? JE("set", qq) : ME(qq)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1203-L1206` → after: `L1007-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L1007-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L1007-L1015) · [Before (L1203-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1203-L1206)

```diff
-       const nz = zz.QF(578, uz, 4 + Ez.length);
-       if (nz < 0) return !1;
-       const iz = zz.view;
-       return iz.setUint8(nz + 0, bz), pb(iz).set(Ez, iz.byteOffset + nz + 4), !0
+       qq = (0, Oq.K)(qq), async function(qq, Eq, gq, Yq, lq) {
+         if (lq && lq.global) qq("event", gq, Yq);
+         else {
+           const lq = await Eq;
+           qq("event", gq, Object.assign(Object.assign({}, Yq), {
+             send_to: lq
+           }))
+         }
+       }(JE, SE[qq.app.options.appId], Eq, gq, Yq).catch((qq => jE.error(qq)))
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1209-L1213` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L1018-L1019) · [Before (L1209-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1209-L1213)

```diff
-     function nE(zz, uz, bz, Ez, nz, iz, lz, Mz) {
-       const tz = zz.QF(579, uz, 36);
-       if (tz < 0) return !1;
-       const Hz = zz.view;
-       return Hz.setFloat64(tz + 0, bz, !0), Hz.setFloat64(tz + 8, Ez, !0), Hz.setFloat64(tz + 16, nz, !0), Hz.setFloat64(tz + 24, iz, !0), Hz.setUint16(tz + 32, lz, !0), Hz.setUint8(tz + 34, Mz), !0
+     function Yg(qq) {
+       JE ? JE("consent", "update", qq) : fE(qq)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1215-L1217` → after: `L1021-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L1021-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L1021-L1037) · [Before (L1215-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1215-L1217)

```diff
-     class iE {
-       constructor(zz, uz) {
-         this.core = zz, this.afterCall = uz
+     const lg = "@firebase/analytics",
+       Og = "0.10.0";
+     (0, Yq.v)(new mq.f(VE, ((qq, Eq) => {
+       let {
+         options: gq
+       } = Eq;
+       return sE(qq.getProvider("app").getImmediate(), qq.getProvider("installations-internal").getImmediate(), gq)
+     }), "PUBLIC")), (0, Yq.v)(new mq.f("analytics-internal", (function(qq) {
+       try {
+         const Eq = qq.getProvider(VE).getImmediate();
+         return {
+           logEvent: (qq, gq, Yq) => gg(Eq, qq, gq, Yq)
+         }
+       } catch (Eq) {
+         throw oE.create("interop-component-reg-failed", {
+           reason: Eq
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L1219-L1359` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/259.js#L1039) · [Before (L1219-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/259.js#L1219-L1359)

```diff
-       canModify(zz, uz, bz) {
-         const Ez = this.core.Vnz(zz, uz, bz);
-         return this.afterCall(), Ez
-       }
-       terrainBlocked(zz, uz, bz, Ez, nz) {
-         const iz = this.core.Aiz(zz, uz, bz, Ez, nz);
-         return this.afterCall(), iz
-       }
-       qJ(zz, uz, bz, Ez) {
-         const nz = this.core.LF(zz, uz, bz, Ez);
-         return this.afterCall(), nz
-       }
-       blockData(zz, uz, bz) {
-         const Ez = this.core.Gnz(zz, uz, bz);
-         return this.afterCall(), Ez
-       }
- ... (125 more removed lines; see GitHub link above)
+     }), "PRIVATE")), (0, Yq.L)(lg, Og), (0, Yq.L)(lg, Og, "esm2017")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4-L42` → after: `L5-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L5-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L5-L99) · [Before (L4-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L4-L42)

```diff
-   39919: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => iz,
-       h: () => lz
-     });
-     var Ez = bz(1878);
-     let nz = !1;
- 
-     function iz() {
-       nz = !0
-     }
- 
-     function lz() {
-       nz && (nz = !1, (0, Ez.c)())
-     }
-   },
- ... (23 more removed lines; see GitHub link above)
+     40280: (qq, Eq, gq) => {
+         gq.r(Eq), gq.d(Eq, {
+           ActionCodeOperation: () => Wq,
+           ActionCodeURL: () => IE,
+           AuthCredential: () => GE,
+           AuthErrorCodes: () => jq,
+           EmailAuthCredential: () => sE,
+           EmailAuthProvider: () => DE,
+           FacebookAuthProvider: () => Yg,
+           FactorId: () => Aq,
+           GithubAuthProvider: () => Og,
+           GoogleAuthProvider: () => lg,
+           OAuthCredential: () => wE,
+           OAuthProvider: () => gg,
+           OperationType: () => Bq,
+           PhoneAuthCredential: () => CE,
+ ... (79 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L44-L167` → after: `L101-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L101-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L101-L423) · [Before (L44-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L44-L167)

```diff
-         }(uz.split(Ez.t), bz, iz)
-       }), (zz => {
-         throw iz = null, zz
-       })), iz
-     }
- 
-     function Mz(zz) {
-       var uz, bz;
-       return null !== (uz = null === (bz = nz) || void 0 === bz ? void 0 : bz.has(zz)) && void 0 !== uz && uz
-     }
-   },
-   39910: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       loadIcons: () => Az,
-       setIconFileOverrides: () => Tz,
-       wasmIconLookups: () => Uz,
- ... (108 more removed lines; see GitHub link above)
+         }
+         Object.create;
+         Object.create;
+         "function" === typeof SuppressedError && SuppressedError;
+         var mq = gq(40273),
+           xq = gq(40258);
+         const Aq = {
+             PHONE: "phone",
+             TOTP: "totp"
+           },
+           cq = {
+             FACEBOOK: "facebook.com",
+             GITHUB: "github.com",
+             GOOGLE: "google.com",
+             PASSWORD: "password",
+             PHONE: "phone",
+ ... (307 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L169-L187` → after: `L425-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L425-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L425-L589) · [Before (L169-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L169-L187)

```diff
-           let {
-             name: Ez,
-             size: nz,
-             lineWidth: iz
-           } = zz;
-           await Az();
-           const Mz = null !== (uz = Vz(Ez)) && void 0 !== uz ? uz : Ez,
-             Hz = (0, Kz.d)(Mz, nz, iz);
-           if (null !== Hz) return Hz;
-           const Oz = Fz(Mz),
-             pz = (0, tz.e)(Mz),
-             dz = void 0 === pz || null === sz ? void 0 : sz.itemTypeNameOf(pz);
-           if (null === fz || void 0 === Oz) return "";
-           const Zz = [Oz.top, Oz.left, Oz.right].some((zz => null === Pz(zz))),
-             wz = Zz ? await (oz ??= bz.e(201).then((() => bz(33750))).then((zz => (Nz && (Nz = !1, (0, lz.c)()), {
-               rotated: zz.rotatedBlockTextures,
- ... (3 more removed lines; see GitHub link above)
+           return "undefined" !== typeof self && (null === (qq = self.location) || void 0 === qq ? void 0 : qq.href) || ""
+         }
+ 
+         function iq() {
+           return "http:" === Zq() || "https:" === Zq()
+         }
+ 
+         function Zq() {
+           var qq;
+           return "undefined" !== typeof self && (null === (qq = self.location) || void 0 === qq ? void 0 : qq.protocol) || null
+         }
+         class fq {
+           constructor(qq, Eq) {
+             this.shortDelay = qq, this.longDelay = Eq, nq(Eq > qq, "Short delay should be less than long delay!"), this.isMobile = (0, Yq.V)() || (0, Yq.W)()
+           }
+           get() {
+ ... (149 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L189-L195` → after: `L591-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L591-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L591-L708) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L189-L195)

```diff
-               top: az(Oz.top, wz),
-               left: az(Oz.left, wz),
-               right: az(Oz.right, wz),
-               itemType: qz(dz, Oz.half)
-             },
-             rz = 0 === Jz ? Mz : `${Mz}#${Jz}`;
-           return (await (0, Rz.d)()).drawBlockIconUrl(rz, nz, iz, (() => Xz))
+             appName: qq.name
+           };
+           gq.email && (Yq.email = gq.email), gq.phoneNumber && (Yq.phoneNumber = gq.phoneNumber);
+           const lq = Qq(qq, Eq, Yq);
+           return lq.customData._tokenResponse = gq, lq
+         }
+ 
+         function Fq(qq) {
+           if (qq) try {
+             const Eq = new Date(Number(qq));
+             if (!isNaN(Eq.getTime())) return Eq.toUTCString()
+           } catch (Eq) {}
+         }
+ 
+         function sq(qq) {
+           let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (102 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L197-L199` → after: `L710-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L710-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L710-L735) · [Before (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L197-L199)

```diff
-       },
-       Uz = {
-         itemIcon: function(zz) {
+         async function Dq(qq) {
+           var Eq;
+           const gq = qq.auth,
+             Yq = await qq.getIdToken(),
+             lq = await Cq(qq, async function(qq, Eq) {
+               return Gq(qq, "POST", "/v1/accounts:lookup", Eq)
+             }(gq, {
+               idToken: Yq
+             }));
+           vq(null === lq || void 0 === lq ? void 0 : lq.users.length, gq, "internal-error");
+           const mq = lq.users[0];
+           qq._notifyReloadListener(mq);
+           const xq = (null === (Eq = mq.providerUserInfo) || void 0 === Eq ? void 0 : Eq.length) ? mq.providerUserInfo.map((qq => {
+             var {
+               providerId: Eq
+             } = qq, gq = Oq(qq, ["providerId"]);
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L201-L217` → after: `L737-L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L737-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L737-L1312) · [Before (L201-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L201-L217)

```diff
-           if (null === fz) return Az(), Mz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
-           if ((0, nz.i)(zz)) return {
-             kind: "icon",
-             url: null !== (bz = fz.ingameIconUrl(zz)) && void 0 !== bz ? bz : fz.notFoundUrl()
-           };
-           if (zz.startsWith(nz.c)) return {
-             kind: "icon",
-             url: mz(zz.slice(nz.c.length))
-           };
-           if (0 === (0, tz.k)()) return (0, iz.d)(), Mz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
-           const lz = null !== (uz = Vz(zz)) && void 0 !== uz ? uz : zz,
-             Hz = (0, tz.e)(lz),
-             Oz = void 0 === Hz ? void 0 : sz.itemTypeNameOf(Hz);
-           if (void 0 !== Fz(lz)) return {
-             kind: "drawnBlock"
-           };
- ... (1 more removed lines; see GitHub link above)
+           const Bq = qq.isAnonymous,
+             Wq = !(qq.email && mq.passwordHash) && !(null === Aq || void 0 === Aq ? void 0 : Aq.length),
+             Nq = !!Bq && Wq,
+             aq = {
+               uid: mq.localId,
+               displayName: mq.displayName || null,
+               photoURL: mq.photoUrl || null,
+               email: mq.email || null,
+               emailVerified: mq.emailVerified || !1,
+               phoneNumber: mq.phoneNumber || null,
+               tenantId: mq.tenantId || null,
+               providerData: Aq,
+               metadata: new eq(mq.createdAt, mq.lastLoginAt),
+               isAnonymous: Nq
+             };
+           Object.assign(qq, aq)
+ ... (560 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L219-L231` → after: `L1314-L1408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1314-L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L1314-L1408) · [Before (L219-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L219-L231)

```diff
-             return null !== (uz = Lz(Gz(zz))) && void 0 !== uz ? uz : fz.notFoundUrl()
-           }(lz);
-           if ((0, Kz.e)(lz) && ! function(zz) {
-               return null !== xz && (null !== xz.itemSprite(Gz(zz)) || null !== xz.model(zz))
-             }(lz)) return {
-             kind: "model",
-             url: pz
-           };
-           if ("Gun" === Oz) return {
-             kind: "gun",
-             url: pz
-           };
-           if (void 0 !== Hz && "GrayscaleArmour" === sz.itemTypeOf(Hz) || Object.hasOwn(Ez.c, lz)) {
+             const gq = await this.assertedPersistence.getCurrentUser();
+             let Yq = gq,
+               lq = !1;
+             if (qq && this.config.authDomain) {
+               await this.getOrInitRedirectPersistenceManager();
+               const gq = null === (Eq = this.redirectUser) || void 0 === Eq ? void 0 : Eq._redirectEventId,
+                 Oq = null === Yq || void 0 === Yq ? void 0 : Yq._redirectEventId,
+                 mq = await this.tryRedirectSignIn(qq);
+               gq && gq !== Oq || !(null === mq || void 0 === mq ? void 0 : mq.user) || (Yq = mq.user, lq = !0)
+             }
+             if (!Yq) return this.directlySetCurrentUser(null);
+             if (!Yq._redirectEventId) {
+               if (lq) try {
+                 await this.beforeStateQueue.runMiddleware(Yq)
+               } catch (Oq) {
+                 Yq = gq, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Oq)))
+ ... (79 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L233-L237` → after: `L1410-L1414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1410-L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L1410-L1414) · [Before (L233-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L233-L237)

```diff
-             const uz = null !== (dz = (0, Ez.d)(zz)) && void 0 !== dz ? dz : (0, Ez.d)(lz);
-             if (uz) return {
-               kind: "item",
-               url: pz,
-               tint: uz
+             return {
+               apiKey: this.config.apiKey,
+               authDomain: this.config.authDomain,
+               appName: this.name,
+               currentUser: null === (qq = this._currentUser) || void 0 === qq ? void 0 : qq.toJSON()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L240-L242` → after: `L1417-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1417-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L1417-L1439) · [Before (L240-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L240-L242)

```diff
-           return {
-             kind: "item",
-             url: pz
+           async _setRedirectUser(qq, Eq) {
+             const gq = await this.getOrInitRedirectPersistenceManager(Eq);
+             return null === qq ? gq.removeCurrentUser() : gq.setCurrentUser(qq)
+           }
+           async getOrInitRedirectPersistenceManager(qq) {
+             if (!this.redirectPersistenceManager) {
+               const Eq = qq && OE(qq) || this._popupRedirectResolver;
+               vq(Eq, this, "argument-error"), this.redirectPersistenceManager = await cE.create(this, [OE(Eq._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
+             }
+             return this.redirectPersistenceManager
+           }
+           async _redirectUserForId(qq) {
+             var Eq, gq;
+             return this._isInitialized && await this.queue((async () => {})), (null === (Eq = this._currentUser) || void 0 === Eq ? void 0 : Eq._redirectEventId) === qq ? this._currentUser : (null === (gq = this.redirectUser) || void 0 === gq ? void 0 : gq._redirectEventId) === q … [truncated]
+           }
+           async _persistUserIfCurrent(qq) {
+ ... (7 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L244-L279` → after: `L1441-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1441-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/260.js#L1441-L4026) · [Before (L244-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/260.js#L244-L279)

```diff
-         },
-         hasIcon: function(zz) {
-           return void 0 !== Vz(zz) || (0, nz.i)(zz) || zz.startsWith(nz.c)
-         },
-         isItemName: function(zz) {
-           return void 0 !== Vz(zz)
-         }
-       }
-   },
-   39922: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz,
-       g: () => Mz
-     });
-     var Ez = bz(39925);
-     let nz = null,
- ... (20 more removed lines; see GitHub link above)
+           _startProactiveRefresh() {
+             this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
+           }
+           _stopProactiveRefresh() {
+             this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
+           }
+           get _currentUser() {
+             return this.currentUser
+           }
+           notifyAuthListeners() {
+             var qq, Eq;
+             if (!this._isInitialized) return;
+             this.idTokenSubscription.next(this.currentUser);
+             const gq = null !== (Eq = null === (qq = this.currentUser) || void 0 === qq ? void 0 : qq.uid) && void 0 !== Eq ? Eq : null;
+             this.lastNotifiedUid !== gq && (this.lastNotifiedUid = gq, this.authStateSubscription.next(this.currentUser))
+           }
+ ... (2570 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/261.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/261.js` (93 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L4)

```diff
-   40820: (zz, uz, bz) => {
+   40318: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7-L104` → after: `L77-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L77-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L77-L141) · [Before (L7-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7-L104)

```diff
-       e: () => Mz,
-       f: () => lz,
-       j: () => Hz
-     });
-     var Ez = bz(36709),
-       nz = bz(38089),
-       iz = bz(38083);
- 
-     function lz(zz, uz, bz, Ez) {
-       const nz = iz.y;
-       uz.fill(0), zz.gravity.toArray(uz, nz.gravity), zz.colorDead.toArray(uz, nz.colorDead), bz[nz.ramp] = zz.useRampGradients ? 1 : 0;
-       const lz = zz.getColorGradients(),
-         Mz = dz(zz, lz, "colour", Ez);
-       bz[nz.colorCount] = Mz;
-       for (let iz = 0; iz < Mz; iz++) {
-         var tz;
- ... (82 more removed lines; see GitHub link above)
+       cc: () => EE,
+       cf: () => bg,
+       db: () => IE,
+       dd: () => Pq,
+       ee: () => JE,
+       fb: () => eE,
+       fe: () => qE,
+       fg: () => Sg,
+       g: () => tq,
+       gc: () => VE,
+       gd: () => Yq,
+       ge: () => Dq,
+       gf: () => vg,
+       id: () => rq,
+       ie: () => Rq,
+       j: () => pq,
+ ... (49 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L106-L236` → after: `L143-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L143-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L143-L152) · [Before (L106-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L106-L236)

```diff
-     var Ez = bz(36709),
-       nz = bz(37068),
-       iz = bz(37332),
-       lz = bz(36648),
-       Mz = bz(37341);
-     class tz extends Mz.c {
-       constructor() {
-         for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
-         super(...uz), this.color = new Ez.Color3(1, 1, 1), this.alpha = 1, this.material = {
-           name: "colorShader",
-           uniqueId: uz[0].XT().getUniqueId(),
-           shaderPath: "color",
-           fillMode: 4,
-           sideOrientation: null,
-           alphaMode: 2,
-           forceDepthWrite: !1,
- ... (115 more removed lines; see GitHub link above)
+     const Yq = -2147483648,
+       lq = 12,
+       Oq = 12,
+       mq = 4095,
+       xq = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L238-L244` → after: `L154-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L154-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L154-L173) · [Before (L238-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L238-L244)

```diff
-       texture: (zz, uz, bz) => {
-         let {
-           data: Ez,
-           sets: nz
-         } = bz;
-         var iz;
-         (az(zz), Ez) && (zz.uvSet = null !== (iz = null === nz || void 0 === nz ? void 0 : nz.coordinatesIndex) && void 0 !== iz ? iz : 0, (0, rz.ab)(zz.matrix, null !== nz && void 0 !== nz ? nz : {}))
+       Aq = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+         Spectating: 16,
+         AttemptingBreak: 32,
+         Aiming: 64,
+         FirstPerson: 128,
+         Replay: 256,
+         Breaking: 512,
+         CursorAim: 1024,
+         FreeCam: 2048,
+         ZoomFirstPerson: 4096,
+         JumpHeld: 8192,
+         Flying: 16384,
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L246-L323` → after: `L175-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L175-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L175-L185) · [Before (L246-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L246-L323)

```diff
-       cube: az,
-       canvas: (zz, uz, bz) => {
-         let {
-           width: Ez,
-           height: nz,
-           mipmaps: iz,
-           samplingMode: lz = Az.f.trilinear,
-           hasAlpha: Mz = !1,
-           wrap: tz = Az.b.clamp
-         } = bz;
-         const Hz = zz.uR().createCanvas(Ez, nz),
-           Oz = new Az.i("2d", {
-             kind: "canvas",
-             width: Ez,
-             height: nz,
-             canvas: Hz
- ... (62 more removed lines; see GitHub link above)
+       cq = {
+         None: 0,
+         Entity: 1,
+         Open: 2,
+         Close: 3,
+         Milk: 4,
+         Shear: 5,
+         Tame: 6,
+         TameWith: 7,
+         Feed: 8,
+         Ride: 9
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L488-L833` → after: `L188-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L188-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L188-L232) · [Before (L488-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L488-L833)

```diff
-         srcFactor: "zero",
-         dstFactor: "one",
-         operation: "add"
-       };
- 
-     function Cz(zz, uz, bz) {
-       var Ez;
-       let nz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const iz = null !== (Ez = uz._colorFormat) && void 0 !== Ez ? Ez : "bgra8unorm",
-         lz = nz ? 15 : 0;
-       return bz ? {
-         ...zz,
-         targets: [{
-           format: iz,
-           blend: {
-             color: bz,
- ... (330 more removed lines; see GitHub link above)
+         Off: 0,
+         Key: 1,
+         Touch: 2
+       },
+       Bq = {
+         Alive: 16
+       },
+       Wq = 32,
+       Nq = {
+         Stored: 1,
+         Unloaded: 2,
+         ResetAll: 4
+       },
+       aq = {
+         opacity: 0,
+         zIndex: 1,
+ ... (29 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L835-L845` → after: `L234-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L234-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L234-L246) · [Before (L835-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L835-L845)

```diff
-       Cu = 1,
-       Yu = 2,
-       ku = 3;
- 
-     function zb(zz) {
-       return Math.ceil(zz * zz / 32)
-     }
-     const ub = 8192,
-       bb = 1 << 18,
-       Eb = 65536,
-       nb = 294912,
+       jq = 4294967295,
+       Hq = 4,
+       oq = 123,
+       Pq = -2147483648,
+       Qq = {
+         Off: 0,
+         All: 1,
+         Filter: 2
+       },
+       yq = 51,
+       tq = 5,
+       rq = 4294967295,
+       vq = 4294967295,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L847` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L248) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L847)

```diff
-       lb = 4096,
+       nq = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L849-L1242` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L250) · [Before (L849-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L849-L1242)

```diff
-       tb = 16385,
-       Hb = 81921,
-       Ob = 147457,
-       pb = 4194304;
-     const db = [0, 0, 0],
-       Fb = [0, 0, 0];
- 
-     function Zb(zz, uz, bz, Ez) {
-       ! function(zz, uz, bz) {
-         const [Ez, nz, iz] = [zz[0], zz[1], zz[2]];
-         let lz, Mz, tz;
-         Math.abs(nz) < .99 ? (lz = iz, Mz = 0, tz = -Ez) : (lz = -nz, Mz = Ez, tz = 0);
-         const Hz = Math.hypot(lz, Mz, tz);
-         uz[0] = lz / Hz, uz[1] = Mz / Hz, uz[2] = tz / Hz, bz[0] = nz * uz[2] - iz * uz[1], bz[1] = iz * uz[0] - Ez * uz[2], bz[2] = Ez * uz[1] - nz * uz[0]
-       }(Ez, db, Fb);
-       const nz = 1 / 32;
- ... (378 more removed lines; see GitHub link above)
+       iq = 255,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1244-L1318` → after: `L252-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L252-L254) · [Before (L1244-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L1244-L1318)

```diff
-         vertexFlags: "vertexOutputs.vBlockFlags",
-         vertexLocalPosition: "vec3f(0.0)",
-         flags: "fragmentInputs.vBlockFlags",
-         normal: "normalize(fragmentInputs.vNormalW)",
-         alpha: "alpha",
-         alphaOut: "alpha",
-         lambert: "fragmentInputs.vTerrainLambert",
-         diffuse: "material.vDiffuseColor.rgb",
-         emissive: "material.emissiveAndLevel.xyz",
-         ambient: "ambient",
-         fogColour: "select(vec3f(0.0), uniforms.vFogColor, uniforms.vFogInfos.x != 0.0)",
-         fogAlpha: "1.0 - fog",
-         enchantTier: "0u",
-         enchantColour: "vec4f(0.0)",
-         enchantSpeed: "0.0",
-         localPosition: "vec3f(0.0)",
- ... (59 more removed lines; see GitHub link above)
+         Off: 0,
+         On: 1,
+         Keep: 2
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1322-L1325` → after: `L257-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L257-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L257-L265) · [Before (L1322-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L1322-L1325)

```diff
-         diffuse: 0,
-         ambientAndCutoff: 4,
-         emissiveAndLevel: 8,
-         anim: 12
+         AltVeto: 1,
+         AltAction: 2,
+         Click: 3,
+         ChangeBlock: 4,
+         DropItem: 5,
+         Tick: 6,
+         Message: 7,
+         Create: 8,
+         Director: 11
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1333-L1338` → after: `L268-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L268-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L268-L305) · [Before (L1333-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L1333-L1338)

```diff
-         position: 0,
-         normal: 1,
-         color: 2,
-         uv: 3,
-         packedLight: 5,
-         blockFlagWords: 7
+         Hotbar: 256,
+         Drop: 257
+       },
+       Tq = {
+         Down: 1,
+         Next: 2,
+         Stack: 4
+       },
+       zq = {
+         Rate: 0,
+         Gyro: 1
+       },
+       Sq = {
+         Active: 1,
+         JumpHeld: 2,
+         JumpPressed: 4,
+ ... (22 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1342-L1539` → after: `L308-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L308-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L308-L317) · [Before (L1342-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L1342-L1539)

```diff
-       rE = 4,
-       oE = 5,
-       NE = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\ … [truncated]
-       vE = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight( … [truncated]
-     const xE = {
-       sd: "material.anim.x",
-       stride: "material.anim.y",
-       count: "material.anim.z",
-       perTexture: zz => `animDataPerTex[${zz}]`
-     };
- 
-     function JE(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xE;
-       return `\n\tlet atlasIdxIn = ${zz};\n\tlet animTick = ${bz.sd};\n\tlet animTickStride = ${bz.stride};\n\tlet numAnimTextures = ${bz.count};\n\t${(0,Nz.g)(oz.c.WGSL,bz.perTexture)}\n\t${uz}animLayer;\n`
-     }
- 
- ... (182 more removed lines; see GitHub link above)
+       kq = {
+         Synced: 0,
+         ChestOpened: 1,
+         ChestClosed: 2,
+         ChestRefreshed: 3,
+         EnchantingTable: 4,
+         HotbarRequest: 5,
+         Scrolled: 6,
+         NumberKey: 7,
+         DropRequested: 8
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1541-L1753` → after: `L319-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L319-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L319-L338) · [Before (L1541-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L1541-L1753)

```diff
-       gE = 256,
-       SE = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) … [truncated]
-       yE = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
-       DE = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
-       QE = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
-       WE = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
-       eE = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogC … [truncated]
-       jE = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11 … [truncated]
-       IE = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${yE}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#e … [truncated]
-     const BE = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vC … [truncated]
-     frame.lights[LITE_LIGHT$ {
-         zz
-       }
-       _SLOT] `;return`
-     #ifdef LIGHT$ {
-       zz
- ... (197 more removed lines; see GitHub link above)
+       Rq = {
+         ToggleMenu: 0,
+         EditBoard: 1,
+         EditCodeBlock: 2,
+         ViewCodeBlock: 3,
+         EditCustomLobbyBlock: 4,
+         OpenIronChest: 5,
+         EditNameTag: 6,
+         EditBook: 7,
+         CantChangeBlock: 8,
+         MiddleBarStart: 9,
+         MiddleBarStop: 10,
+         AimingOverlay: 11,
+         BottomMessage: 12,
+         Hitmarker: 13,
+         ShotsLeft: 14,
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L3053-L3396` → after: `L341-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L341-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L341-L774) · [Before (L3053-L3396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L3053-L3396)

```diff
-         depth: !1,
-         sunShadow: !1
-       };
- 
-     function yi(zz, uz) {
-       let bz = gi.get(zz);
-       bz || (bz = new Map, gi.set(zz, bz));
-       const Ez = `${uz.depth?"-depth":""}${uz.sunShadow?"-shadow":""}${uz.shadowMask?"-mask":""}`;
-       let nz = bz.get(Ez);
-       if (!nz) {
-         const iz = [{
-           binding: Ju.c,
-           visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-           buffer: {
-             type: "uniform",
-             minBindingSize: Ju.h
- ... (328 more removed lines; see GitHub link above)
+         Alt: 1,
+         Up: 2,
+         HasPos: 4,
+         AttackOnly: 8
+       },
+       Fq = {
+         Solid: 1,
+         Fluid: 2,
+         PlaceOver: 4
+       },
+       sq = {
+         Stackable: 1
+       },
+       Xq = {
+         granule: 1,
+         wood: 2,
+ ... (418 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L3433-L3556` → after: `L777-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L777-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L777-L831) · [Before (L3433-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L3433-L3556)

```diff
-     function Nl(zz, uz, bz, Ez) {
-       const {
-         hooks: nz
-       } = zz, {
-         kind: iz,
-         defines: lz
-       } = uz, Mz = [...bz];
-       var tz;
-       uz.atlas && nz.surface && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Db("atlasIdxIn")]), "item" === iz && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", (0, oz.g)(oz.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
-       const Hz = pl(uz);
-       Hz && (nz.surface || nz.light) && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Hz.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Hz.varying} = ${Hz.value};`]);
-       let Oz = Ez;
-       if (tl(zz, uz, "fragment") && (Mz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Ml});`]), Oz = [...Oz, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), sl(zz, … [truncated]
-         Rl(zz, uz) && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
-         const bz = Zl(zz, uz);
-         bz && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${bz});`]);
- ... (108 more removed lines; see GitHub link above)
+     function Ag(qq, Eq, gq, Yq, lq) {
+       var Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq;
+       switch (qq) {
+         case 32:
+           return 4 === Yq && (null === (Oq = lq.tickEnd) || void 0 === Oq || Oq.call(lq, jE.SB(Eq, gq)), !0);
+         case 33:
+           return 12 === Yq && (null === (mq = lq.entitySpawned) || void 0 === mq || mq.call(lq, HE.serverId(Eq, gq), HE.index(Eq, gq), HE.kind(Eq, gq)), !0);
+         case 34:
+           return 12 === Yq && (null === (xq = lq.entityDespawned) || void 0 === xq || xq.call(lq, HE.serverId(Eq, gq), HE.index(Eq, gq), HE.kind(Eq, gq)), !0);
+         case 39:
+           return !(Yq < 20) && (null === (Aq = lq.changeBlockFail) || void 0 === Aq || Aq.call(lq, oE.pos(Eq, gq, 0), oE.pos(Eq, gq, 1), oE.pos(Eq, gq, 2), oE.actual(Eq, gq), oE.dataLen(Eq, gq), gq + 20, Yq - 20), !0);
+         case 46:
+           return 0 === Yq && (null === (cq = lq.changeBlockFailEnd) || void 0 === cq || cq.call(lq), !0);
+         case 48:
+           return 20 === Yq && (null === (uq = lq.inventoryEvent) || void 0 === uq || uq.call(lq, PE.what(Eq, gq), PE.value(Eq, gq), PE.pos(Eq, gq, 0), PE.pos(Eq, gq, 1), PE.pos(Eq, gq, 2), PE.block(Eq, gq)), !0);
+         case 49:
+ ... (39 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L3560-L3561` → after: `L835-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L835-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L835-L884) · [Before (L3560-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L3560-L3561)

```diff
-       name: "earthSky",
-       uniqueId: -1
+       SetChunkAddDistance: 2,
+       WatchEntityInfo: 66,
+       EventResync: 67,
+       WatchPromptPick: 68,
+       SetLocalDbId: 69,
+       SetAltVeto: 128,
+       EnchantOfferRequest: 130,
+       ClearPickupDelay: 131,
+       SyncOpMarker: 132,
+       SetHooks: 133,
+       SetPublicLobby: 144,
+       ClickCodeBlock: 145,
+       Send: 256,
+       Leave: 257,
+       SetPaused: 258,
+       ParticleBurst: 320,
+ ... (34 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L3563-L3571` → after: `L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L886) · [Before (L3563-L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L3563-L3571)

```diff
-     class Ll {
-       constructor(zz) {
-         this.resources = zz, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
-       }
-       release() {
-         for (const zz of this.instances.values()) zz.released = !0, this.resources.destroyBuffer(zz.buffer);
-         this.instances.clear()
-       }
-     }
+     let ug = new Uint8Array(0);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L3574-L4276` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L889) · [Before (L3574-L4276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L3574-L4276)

```diff
-       return zz.failed && null !== zz.packGroup
-     }
-     class Gl {
-       constructor(zz, uz, bz) {
-         this.device = zz, this.resources = uz, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Dk = new Gi, this.modelMeshes = new Pi, this.thinBundle = void 0, this.binder = new Cn, this.sc … [truncated]
-           label: "meshes-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
-           }, {
-             binding: 1,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
- ... (687 more removed lines; see GitHub link above)
+       return ug.buffer !== qq.buffer && (ug = new Uint8Array(qq.buffer)), ug
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4279-L4282` → after: `L892-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L892-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L892-L895) · [Before (L4279-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L4279-L4282)

```diff
-     function al(zz) {
-       var uz, bz;
-       const Ez = null === (uz = zz.RP) || void 0 === uz || null === (bz = uz.aShaderPackItem) || void 0 === bz ? void 0 : bz.x;
-       return void 0 !== Ez && 0 !== (Ez & tu.i)
+     function Wg(qq, Eq, gq) {
+       const Yq = qq.gN(66, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setUint8(Yq + 0, gq), !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4290-L4327` → after: `L898-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L898-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L898-L901) · [Before (L4290-L4327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L4290-L4327)

```diff
-     function cl(zz, uz, bz, Ez, nz) {
-       const iz = bz[0].width;
-       try {
-         return nz ? function(zz, uz, bz) {
-           const Ez = (0, hl.d)(zz, bz, bz, 6);
-           for (let nz = 0; nz < 6; nz++)(0, hl.f)(zz, Ez, nz, uz[Ul[nz]], {
-             invertY: !1
-           });
-           return Ez.texture
-         }(zz, bz, iz) : function(zz, uz, bz, Ez) {
-           const nz = zz.createTexture({
-             label: "sink-cube",
-             size: {
-               width: bz,
-               height: bz,
-               depthOrArrayLayers: 6
- ... (22 more removed lines; see GitHub link above)
+     function Ng(qq, Eq, gq) {
+       const Yq = qq.gN(67, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setUint32(Yq + 0, gq, !0), !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4330-L4493` → after: `L904-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L904-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L904-L907) · [Before (L4330-L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L4330-L4493)

```diff
-     function gl(zz) {
-       for (const uz of null !== zz && void 0 !== zz ? zz : []) null === uz || void 0 === uz || uz.close()
-     }
-     async function Sl(zz) {
-       const uz = [],
-         bz = [];
-       if (await Promise.all(zz.map(((zz, Ez) => (uz[Ez] = null, zz.then((zz => {
-           uz[Ez] = zz
-         }), (zz => {
-           bz.push(zz)
-         })))))), bz.length > 0) throw gl(uz), bz[0];
-       return uz
-     }
-     class yl {
-       constructor(zz) {
-         this.Bp = zz, this.starts = [], this.lengths = [], this.used = 0, zz > 0 && (this.starts.push(0), this.lengths.push(zz))
- ... (148 more removed lines; see GitHub link above)
+     function ag(qq, Eq, gq) {
+       const Yq = qq.gN(68, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setUint8(Yq + 0, gq), !0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4496-L4497` → after: `L910-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L910-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L910-L914) · [Before (L4496-L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L4496-L4497)

```diff
-     function Wl(zz) {
-       return Array.isArray(zz) ? new Float32Array(zz) : zz
+     function Vg(qq, Eq, gq, Yq) {
+       const lq = qq.gN(69, Eq, 4 + Yq.length);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       return Oq.setUint8(lq + 0, gq), Bg(Oq).set(Yq, Oq.byteOffset + lq + 4), !0
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4501-L4505` → after: `L918-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L918-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L918-L921) · [Before (L4501-L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L4501-L4505)

```diff
-       const iz = an(nz),
-         lz = Math.min(nz, Ez.byteLength);
-       if (iz === lz && Ez.byteOffset % 4 === 0) return void zz.queue.writeBuffer(uz, bz, Ez.buffer, Ez.byteOffset, iz);
-       const Mz = new Uint8Array(iz);
-       Mz.set(new Uint8Array(Ez.buffer, Ez.byteOffset, lz)), zz.queue.writeBuffer(uz, bz, Mz)
+       const Oq = qq.gN(128, Eq, 4 + lq.length);
+       if (Oq < 0) return !1;
+       const mq = qq.view;
+       return mq.setUint8(Oq + 0, gq), mq.setUint16(Oq + 2, Yq, !0), Bg(mq).set(lq, mq.byteOffset + Oq + 4), !0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4509-L5025` → after: `L925-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L925-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L925-L927) · [Before (L4509-L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L4509-L5025)

```diff
-       const Ez = "linear",
-         nz = "nearest";
-       let iz = nz,
-         lz = nz,
-         Mz = "nearest",
-         tz = !uz;
-       switch (zz) {
-         case 11:
-           iz = Ez, lz = Ez;
-           break;
-         case 3:
-           iz = Ez, lz = Ez, Mz = uz ? "linear" : "nearest";
-           break;
-         case 8:
-           Mz = uz ? "linear" : "nearest";
-           break;
- ... (501 more removed lines; see GitHub link above)
+       const Yq = qq.gN(131, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setInt32(Yq + 0, gq, !0), !0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5039-L5045` → after: `L931-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L931-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L931-L933) · [Before (L5039-L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5039-L5045)

```diff
-       zz.fov = uz.fov, zz.near = uz.near, zz.far = uz.far, zz.renderWidth = bz.renderWidth, zz.renderHeight = bz.renderHeight, (0, bM.u)(uz.holderRotation, 0, lM, 0), (0, bM.c)(nM, 0, lM, 0, uz.holderPosition, 0, MM);
-       const Ez = uz.MI;
-       tM[0] = Ez[0], tM[1] = Ez[1], tM[2] = Ez[2] + 1;
-       const nz = zz.viewMatrix;
-       (0, bM.l)(Ez, tM, iM, nz), (0, bM.i)(nz, 0, nz), (0, bM.o)(nz, MM, 0, nz), (0, bM.i)(nz, 0, nz);
-       const iz = zz.worldMatrix;
-       (0, bM.i)(nz, 0, iz), zz.eye[0] = iz[12], zz.eye[1] = iz[13], zz.eye[2] = iz[14], HM[0] = zz.fov, HM[1] = zz.renderWidth / zz.renderHeight, HM[2] = zz.near, HM[3] = zz.far, (0, bM.s)(HM, zz.projectionMatrix), (0, bM.o)(nz, zz.projectionMatrix, 0, zz.viewProjectionMatrix), ( … [truncated]
+       const Yq = qq.gN(132, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setUint32(Yq + 0, gq, !0), !0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5048-L5068` → after: `L936-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L936-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L936-L939) · [Before (L5048-L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5048-L5068)

```diff
-     function pM(zz, uz) {
-       let bz = zz.frustumPlanes;
-       bz || (bz = zz.frustumPlanes = Array.from({
-         length: 6
-       }, (() => new zM.b(0, 0, 0, 0))));
-       for (let Ez = 0; Ez < 6; Ez++) {
-         const zz = bz[Ez].normal;
-         zz._x = uz[4 * Ez], zz._y = uz[4 * Ez + 1], zz._z = uz[4 * Ez + 2], zz._isDirty = !0, bz[Ez].d = uz[4 * Ez + 3]
-       }
-     }
- 
-     function dM(zz, uz) {
-       const bz = uz.clearColor;
-       zz.clearColour[0] = bz.r, zz.clearColour[1] = bz.g, zz.clearColour[2] = bz.b, zz.clearColour[3] = bz.a;
-       const Ez = uz.ambientColor;
-       zz.ambientColour[0] = Ez.r, zz.ambientColour[1] = Ez.g, zz.ambientColour[2] = Ez.b, zz.animationRatio = uz.animationRatio, zz.frameId = uz.frameId, zz.version++
- ... (5 more removed lines; see GitHub link above)
+     function og(qq, Eq, gq) {
+       const Yq = qq.gN(133, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setUint32(Yq + 0, gq, !0), !0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5071-L5077` → after: `L942-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L942-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L942-L945) · [Before (L5071-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5071-L5077)

```diff
-     function ZM(zz) {
-       const uz = zz.tK,
-         {
-           view: bz,
-           bI: Ez
-         } = zz.model;
-       return OM(bz, Ez, uz.uR()), uz.onBeforeRenderObservable.notifyObservers(uz), pM(uz, bz.frustum), uz.onBeforeCameraRenderObservable.notifyObservers(uz.activeCamera), FM(zz)
+     function Pg(qq, Eq, gq) {
+       const Yq = qq.gN(144, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setUint8(Yq + 0, gq), !0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5083-L5331` → after: `L948-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L948-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L948-L952) · [Before (L5083-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5083-L5331)

```diff
-     function XM(zz) {
-       var uz, bz;
-       const Ez = (0, xz.W)(zz);
-       if (!Ez || Ez.diffuseTexture && (0, wM.i)(zz)) return null;
-       const nz = null === (uz = (0, xz.u)(Ez, Nz.j.name)) || void 0 === uz ? void 0 : uz.state,
-         iz = null === (bz = (0, xz.u)(Ez, Ci.d.name)) || void 0 === bz ? void 0 : bz.state,
-         lz = new Float32Array(16);
-       return function(zz, uz, bz, Ez) {
-         var nz, iz;
-         const lz = dE;
-         Ez.set(zz.diffuseColor, lz.diffuse), Ez[lz.diffuse + 3] = zz.alpha, Ez.set(zz.ambientColor, lz.ambientAndCutoff), Ez[lz.ambientAndCutoff + 3] = zz.alphaCutOff, Ez.set(zz.emissiveColor, lz.emissiveAndLevel), Ez[lz.emissiveAndLevel + 3] = null !== (nz = null === (iz = zz.di … [truncated]
-       }(Ez, nz, iz, lz), {
-         model: Ez,
-         atlas: nz,
-         texture: nz ? "atlas" : Ez.diffuseTexture ? "single" : "none",
-         animated: nz ? !!nz.animDataPerTex : !!iz,
- ... (233 more removed lines; see GitHub link above)
+     function Qg(qq, Eq, gq, Yq, lq) {
+       const Oq = qq.gN(145, Eq, 12);
+       if (Oq < 0) return !1;
+       const mq = qq.view;
+       return mq.setInt32(Oq + 0, gq, !0), mq.setInt32(Oq + 4, Yq, !0), mq.setInt32(Oq + 8, lq, !0), !0
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5335-L5338` → after: `L955-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L955-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L955-L959) · [Before (L5335-L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5335-L5338)

```diff
-     function vM(zz, uz, bz, Ez, nz) {
-       let iz = 0;
-       for (let lz = bz; lz < Ez; lz += NM) zz.drawIndexed(6 * Math.min(NM, Ez - lz), 1, 0, uz + 4 * lz, nz), iz++;
-       return iz
+     function yg(qq, Eq, gq, Yq) {
+       const lq = qq.gN(256, Eq, 4 + Yq.length);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       return Oq.setUint16(lq + 0, gq, !0), Bg(Oq).set(Yq, Oq.byteOffset + lq + 4), !0
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5340-L5421` → after: `L961-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L961-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L961-L965) · [Before (L5340-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5340-L5421)

```diff
-     class xM {
-       constructor(zz, uz) {
-         this.recordsGroup = uz, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
-         const bz = vu.e.strideWithoutAtlas;
-         this.vertexArena = new oM(zz, bz, GPUBufferUsage.VERTEX, `terrain-vertices-${bz}`), this.quadArena = new oM(zz, KM.c, GPUBufferUsage.STORAGE, "terrain-quads", {
-           verticesPerUnit: 4,
-           twinUsage: GPUBufferUsage.STORAGE
-         });
-         const Ez = (0, xu.d)(new Uint16Array(98298), NM);
-         this.quadPattern = zz.createBuffer({
-           label: "terrain-quad-pattern",
-           size: Ez.byteLength,
-           usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
-         }), zz.queue.writeBuffer(this.quadPattern, 0, Ez)
-       }
-       set(zz, uz) {
- ... (66 more removed lines; see GitHub link above)
+ 
+     function tg(qq, Eq, gq) {
+       const Yq = qq.gN(258, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setUint8(Yq + 0, gq), !0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5423-L5559` → after: `L967-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L967-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L967-L975) · [Before (L5423-L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5423-L5559)

```diff
-     class JM {
-       constructor(zz, uz, bz, Ez) {
-         this.device = zz, this.splitBefore = uz, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = zz.createBu … [truncated]
-           label: "scene-depth-unproject",
-           size: 8,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         });
-         const nz = zz.createShaderModule({
-           label: "scene-depth-copy",
-           code: (iz = bz._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${iz?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
-         });
-         var iz;
-         zz.createRenderPipelineAsync({
-           label: "scene-depth-copy",
-           layout: "auto",
-           vertex: {
- ... (121 more removed lines; see GitHub link above)
+ 
+     function rg(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
+       const cq = qq.gN(320, Eq, 48 + Aq.length);
+       if (cq < 0) return !1;
+       const uq = qq.view;
+       uq.setUint32(cq + 0, gq, !0), uq.setUint16(cq + 4, Yq, !0), uq.setUint16(cq + 6, lq, !0), uq.setUint32(cq + 8, Oq, !0);
+       for (let Bq = 0; Bq < 3; Bq++) uq.setFloat64(cq + 12 + 8 * Bq, mq[Bq], !0);
+       for (let Bq = 0; Bq < 3; Bq++) uq.setFloat32(cq + 36 + 4 * Bq, xq[Bq], !0);
+       return Bg(uq).set(Aq, uq.byteOffset + cq + 48), !0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5563-L5564` → after: `L978-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L978-L985) · [Before (L5563-L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5563-L5564)

```diff
-     function TM(zz) {
-       return zz ? 15 : 1
+     function vg(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
+       const cq = qq.gN(321, Eq, 48 + Aq.length);
+       if (cq < 0) return !1;
+       const uq = qq.view;
+       uq.setUint32(cq + 0, gq, !0), uq.setInt32(cq + 4, Yq, !0), uq.setUint16(cq + 8, lq, !0), uq.setUint16(cq + 10, Oq, !0);
+       for (let Bq = 0; Bq < 3; Bq++) uq.setFloat64(cq + 12 + 8 * Bq, mq[Bq], !0);
+       for (let Bq = 0; Bq < 3; Bq++) uq.setFloat32(cq + 36 + 4 * Bq, xq[Bq], !0);
+       return Bg(uq).set(Aq, uq.byteOffset + cq + 48), !0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5566-L5777` → after: `L987-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L987-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L987-L995) · [Before (L5566-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5566-L5777)

```diff
-     class LM {
-       constructor(zz, uz, bz, Ez) {
-         this.device = zz, this.terrain = Ez, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = uz._targetSi … [truncated]
-           label: "sun-shadow-mask-camera",
-           size: 64,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.layout = zz.createBindGroupLayout({
-           label: "sun-shadow-mask",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.FRAGMENT,
-             texture: {
-               sampleType: "depth"
-             }
-           }, {
-             binding: 1,
- ... (196 more removed lines; see GitHub link above)
+ 
+     function hg(qq, Eq, gq, Yq, lq, Oq, mq) {
+       const xq = qq.gN(322, Eq, 44 + mq.length);
+       if (xq < 0) return !1;
+       const Aq = qq.view;
+       Aq.setUint32(xq + 0, gq, !0), Aq.setUint32(xq + 4, Yq, !0);
+       for (let cq = 0; cq < 3; cq++) Aq.setFloat64(xq + 8 + 8 * cq, lq[cq], !0);
+       for (let cq = 0; cq < 3; cq++) Aq.setFloat32(xq + 32 + 4 * cq, Oq[cq], !0);
+       return Bg(Aq).set(mq, Aq.byteOffset + xq + 44), !0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5781-L5787` → after: `L999-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L999-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L999-L1001) · [Before (L5781-L5787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5781-L5787)

```diff
-       let Ez = null,
-         nz = 0;
-       for (const iz of bz) {
-         const bz = iz.renderable.mesh;
-         bz && !1 === bz.visible || (iz.pipeline !== Ez && (zz.setPipeline(iz.pipeline), Ez = iz.pipeline), nz += iz.draw(zz, uz))
-       }
-       return nz
+       const Yq = qq.gN(323, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setUint32(Yq + 0, gq, !0), !0
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5789-L5896` → after: `L1003-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1003-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1003-L1010) · [Before (L5789-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5789-L5896)

```diff
-     const GM = 6e4,
-       aM = {
-         status: "ok"
-       },
-       VM = {
-         status: "skipped"
-       };
-     async function mM(zz, uz) {
-       const {
-         isCancelled: bz
-       } = zz;
-       if (bz()) return {
-         status: "ob"
-       };
-       const {
-         target: Ez
- ... (92 more removed lines; see GitHub link above)
+ 
+     function bg(qq, Eq, gq, Yq, lq, Oq) {
+       const mq = qq.gN(324, Eq, 32 + Oq.length);
+       if (mq < 0) return !1;
+       const xq = qq.view;
+       xq.setUint32(mq + 0, gq, !0), xq.setUint32(mq + 4, Yq, !0);
+       for (let Aq = 0; Aq < 3; Aq++) xq.setFloat64(mq + 8 + 8 * Aq, lq[Aq], !0);
+       return Bg(xq).set(Oq, xq.byteOffset + mq + 32), !0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5898-L5904` → after: `L1012-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1012-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1012-L1014) · [Before (L5898-L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5898-L5904)

```diff
-     async function qM(zz) {
-       if (!zz) return [];
-       try {
-         return (await zz.getCompilationInfo()).messages.filter((zz => "error" === zz.type))
-       } catch {
-         return []
-       }
+ 
+     function ig(qq, Eq) {
+       return !(qq.gN(325, Eq, 0) < 0)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5907-L5909` → after: `L1017-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1017-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1017-L1058) · [Before (L5907-L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5907-L5909)

```diff
-     function hM(zz) {
-       var uz;
-       return null !== (uz = null === zz || void 0 === zz ? void 0 : zz.message) && void 0 !== uz ? uz : String(zz)
+     function Zg(qq, Eq, gq, Yq, lq, Oq) {
+       const mq = qq.gN(384, Eq, 16);
+       if (mq < 0) return !1;
+       const xq = qq.view;
+       return xq.setUint32(mq + 0, gq, !0), xq.setUint32(mq + 4, Yq, !0), xq.setFloat32(mq + 8, lq, !0), xq.setFloat32(mq + 12, Oq, !0), !0
+     }
+ 
+     function fg(qq, Eq, gq, Yq, lq, Oq, mq) {
+       const xq = qq.gN(385, Eq, 36 + mq.length);
+       if (xq < 0) return !1;
+       const Aq = qq.view;
+       Aq.setUint32(xq + 0, gq, !0), Aq.setUint32(xq + 4, Yq, !0);
+       for (let cq = 0; cq < 3; cq++) Aq.setFloat64(xq + 8 + 8 * cq, lq[cq], !0);
+       return Aq.setUint32(xq + 32, Oq, !0), Bg(Aq).set(mq, Aq.byteOffset + xq + 36), !0
+     }
+ 
+ ... (26 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5913-L5916` → after: `L1062-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1062-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1062-L1085) · [Before (L5913-L5916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5913-L5916)

```diff
-       HE(zz) ? qM(bz).then((zz => {
-         const [bz] = zz;
-         Bn("terrain", uz, Ez, bz ? `${bz.lineNum}:${bz.linePos} error: ${bz.message}` : null)
-       })) : Bn("terrain", uz, Ez)
+       const lq = qq.gN(389, Eq, 8);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       return Oq.setInt32(lq + 0, gq, !0), Oq.setFloat32(lq + 4, Yq, !0), !0
+     }
+ 
+     function pg(qq, Eq, gq, Yq) {
+       const lq = qq.gN(390, Eq, 8);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       return Oq.setInt32(lq + 0, gq, !0), Oq.setFloat32(lq + 4, Yq, !0), !0
+     }
+ 
+     function Gg(qq, Eq, gq, Yq, lq, Oq) {
+       const mq = qq.gN(391, Eq, 12);
+       if (mq < 0) return !1;
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5924-L5953` → after: `L1089-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1089-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1089-L1092) · [Before (L5924-L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5924-L5953)

```diff
-       const iz = Math.hypot(bz[0], bz[1], bz[2]);
-       if (!(iz > 0)) return;
-       const lz = [bz[0] / iz, bz[1] / iz, bz[2] / iz],
-         Mz = [Math.floor(uz[0]), Math.floor(uz[1]), Math.floor(uz[2])],
-         tz = [0, 0, 0],
-         Hz = [1 / 0, 1 / 0, 1 / 0],
-         Oz = [1 / 0, 1 / 0, 1 / 0];
-       for (let Fz = 0; Fz < 3; Fz++) lz[Fz] > 0 ? (tz[Fz] = 1, Hz[Fz] = (Mz[Fz] + 1 - uz[Fz]) / lz[Fz], Oz[Fz] = 1 / lz[Fz]) : lz[Fz] < 0 && (tz[Fz] = -1, Hz[Fz] = (Mz[Fz] - uz[Fz]) / lz[Fz], Oz[Fz] = -1 / lz[Fz]);
-       const {
-         IZ: pz
-       } = zz;
-       let dz = zz.IU(Mz[0], Mz[1], Mz[2]);
-       for (;;) {
-         const uz = Hz[0] < Hz[1] ? Hz[0] < Hz[2] ? 0 : 2 : Hz[1] < Hz[2] ? 1 : 2;
-         if (Hz[uz] > Ez) return;
-         const bz = tz[uz] > 0 ? Mz[uz] + 1 : Mz[uz];
- ... (14 more removed lines; see GitHub link above)
+       const Oq = qq.gN(393, Eq, 12);
+       if (Oq < 0) return !1;
+       const mq = qq.view;
+       return mq.setUint32(Oq + 0, gq, !0), mq.setUint16(Oq + 4, Yq, !0), mq.setFloat32(Oq + 8, lq, !0), !0
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5956-L5957` → after: `L1095-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1095-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1095-L1101) · [Before (L5956-L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5956-L5957)

```diff
-     function QM(zz, uz) {
-       return zz.group - uz.group || zz.nearest - uz.nearest
+     function kg(qq, Eq, gq, Yq, lq, Oq, mq) {
+       const xq = qq.gN(394, Eq, 36);
+       if (xq < 0) return !1;
+       const Aq = qq.view;
+       Aq.setUint32(xq + 0, gq, !0), Aq.setUint16(xq + 4, Yq, !0), Aq.setUint8(xq + 6, lq);
+       for (let cq = 0; cq < 3; cq++) Aq.setFloat64(xq + 8 + 8 * cq, Oq[cq], !0);
+       return Aq.setFloat32(xq + 32, mq, !0), !0
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L5959-L5999` → after: `L1103-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1103-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1103-L1107) · [Before (L5959-L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L5959-L5999)

```diff
-     class WM {
-       constructor(zz, uz) {
-         this.device = zz, this.Fs = uz, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
-       }
-       createBuffer() {
-         return this.device.createBuffer({
-           label: "terrain-chunk-slots",
-           size: this.data.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       allocate() {
-         var zz;
-         const uz = null !== (zz = this.free.pop()) && void 0 !== zz ? zz : this.next++;
-         if (8 * uz >= this.data.length) {
-           const zz = new Float32Array(2 * this.data.length);
- ... (25 more removed lines; see GitHub link above)
+ 
+     function Rg(qq, Eq, gq) {
+       const Yq = qq.gN(398, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setUint32(Yq + 0, gq, !0), !0
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6001-L6834` → after: `L1109-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1109-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1109-L1113) · [Before (L6001-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L6001-L6834)

```diff
-     const eM = XE,
-       jM = !0;
-     const IM = {
-         arrayStride: 4,
-         stepMode: "vertex",
-         attributes: [{
-           shaderLocation: eM.packedLight,
-           offset: 0,
-           format: "float32"
-         }]
-       },
-       BM = {
-         srcFactor: "src-alpha",
-         dstFactor: "one-minus-src-alpha",
-         operation: "add"
-       };
- ... (818 more removed lines; see GitHub link above)
+ 
+     function Ug(qq, Eq, gq) {
+       const Yq = qq.gN(448, Eq, 4);
+       if (Yq < 0) return !1;
+       return qq.view.setFloat32(Yq + 0, gq, !0), !0
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6838` → after: `L1117-L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1117-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1117-L1121) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L6838)

```diff
-       return `${TE(zz)}|${zz.atlasLayers}|${zz.uC}|${uz}|${bz}|${Ez._colorFormat}|${Ez._depthStencilFormat}|${Ez._sampleCount}`
+       const lq = qq.gN(450, Eq, 12);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       for (let mq = 0; mq < 2; mq++) Oq.setFloat32(lq + 0 + 4 * mq, gq[mq], !0);
+       return Oq.setUint8(lq + 8, Yq), !0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6841-L6842` → after: `L1124-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1124-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1124-L1128) · [Before (L6841-L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L6841-L6842)

```diff
-     function kM(zz, uz) {
-       return zz.distance - uz.distance
+     function sg(qq, Eq, gq, Yq) {
+       const lq = qq.gN(452, Eq, 8);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       return Oq.setFloat32(lq + 0, gq, !0), Oq.setUint8(lq + 4, Yq), !0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6845-L6881` → after: `L1131-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1131-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1131-L1135) · [Before (L6845-L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L6845-L6881)

```diff
-     function zt(zz, uz) {
-       return uz.distance - zz.distance
-     }
-     class ut {
-       constructor() {
-         this.left = []
-       }
-       sort(zz, uz) {
-         for (let bz = 0; bz < zz.length; bz++) {
-           const uz = zz[bz].distance;
-           if (uz - uz !== 0) return !1
-         }
-         return this.sortRange(zz, 0, zz.length, uz), !0
-       }
-       sortRange(zz, uz, bz, Ez) {
-         if (bz - uz <= 16) {
- ... (21 more removed lines; see GitHub link above)
+     function Xg(qq, Eq, gq, Yq, lq) {
+       const Oq = qq.gN(454, Eq, 4);
+       if (Oq < 0) return !1;
+       const mq = qq.view;
+       return mq.setUint8(Oq + 0, gq), mq.setUint8(Oq + 1, Yq), mq.setUint8(Oq + 2, lq), !0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6886-L6904` → after: `L1139-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1139-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1139-L1143) · [Before (L6886-L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L6886-L6904)

```diff
-       let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uz;
-       const iz = Math.min(uz, bz),
-         lz = new Uint32Array(zb(Ez));
-       for (let Mz = 0; Mz < Ez; Mz++) {
-         const uz = Math.floor(Mz * iz / Ez),
-           bz = Math.max(uz + 1, Math.floor((Mz + 1) * iz / Ez));
-         for (let tz = 0; tz < Ez; tz++) {
-           const Hz = Math.floor(tz * iz / Ez),
-             Oz = Math.max(Hz + 1, Math.floor((tz + 1) * iz / Ez));
-           let pz = 0;
-           for (let Ez = uz; Ez < bz; Ez++)
-             for (let uz = Hz; uz < Oz; uz++) zz[Ez * nz + uz] >= bt && pz++;
-           if (2 * pz >= (bz - uz) * (Oz - Hz)) {
-             const zz = tz + Ez * Mz;
-             lz[zz >>> 5] |= 1 << (31 & zz)
-           }
- ... (3 more removed lines; see GitHub link above)
+       const lq = qq.gN(455, Eq, 40);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       for (let mq = 0; mq < 9; mq++) Oq.setInt32(lq + 0 + 4 * mq, gq[mq], !0);
+       return Oq.setUint32(lq + 36, Yq, !0), !0
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6907-L6908` → after: `L1146-L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1146-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1146-L1150) · [Before (L6907-L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L6907-L6908)

```diff
-     function nt(zz) {
-       return Math.max(1, Math.min(16, zz))
+     function Kg(qq, Eq, gq, Yq) {
+       const lq = qq.gN(456, Eq, 8);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       return Oq.setFloat32(lq + 0, gq, !0), Oq.setUint8(lq + 4, Yq), !0
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6910-L7074` → after: `L1152-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1152-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1152-L1159) · [Before (L6910-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L6910-L7074)

```diff
-     class it {
-       constructor(zz, uz) {
-         let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
-         this.sink = zz, this.loadTexture = uz, this.warn = bz, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise. … [truncated]
-       }
-       update(zz, uz) {
-         return (zz.hV !== this.builtVersion || this.blockCaster.length !== uz) && (this.build(zz, uz), !0)
-       }
-       build(zz, uz) {
-         this.builtVersion = zz.hV;
-         const bz = new Uint16Array(uz),
-           Ez = new Map;
-         for (let nz = 1; nz < uz; nz++) {
-           const uz = this.classify(zz, nz, Ez);
-           if (null === uz || uz === Iu) {
-             bz[nz] = null === uz ? 0 : Iu;
- ... (149 more removed lines; see GitHub link above)
+ 
+     function Cg(qq, Eq, gq, Yq, lq) {
+       const Oq = qq.gN(457, Eq, 16);
+       if (Oq < 0) return !1;
+       const mq = qq.view;
+       for (let xq = 0; xq < 3; xq++) mq.setInt32(Oq + 0 + 4 * xq, gq[xq], !0);
+       for (let xq = 0; xq < 3; xq++) mq.setInt8(Oq + 12 + 1 * xq, Yq[xq]);
+       return mq.setUint8(Oq + 15, lq), !0
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7078-L7079` → after: `L1162-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1162-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1162-L1166) · [Before (L7078-L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7078-L7079)

```diff
-     function Mt(zz) {
-       return !zz.UR && !zz.sEz && !zz.RR
+     function Ig(qq, Eq, gq, Yq) {
+       const lq = qq.gN(530, Eq, 4 + Yq.length);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       return Oq.setUint8(lq + 0, gq), Bg(Oq).set(Yq, Oq.byteOffset + lq + 4), !0
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7082-L7087` → after: `L1169-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1169-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1169-L1173) · [Before (L7082-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7082-L7087)

```diff
-     function tt() {
-       return {
-         bricks: new Uint32Array(gu),
-         cells: new Uint16Array(32768),
-         special: new Uint8Array(Uu)
-       }
+     function eg(qq, Eq, gq, Yq, lq, Oq) {
+       const mq = qq.gN(531, Eq, 12 + Oq.length);
+       if (mq < 0) return !1;
+       const xq = qq.view;
+       return xq.setFloat32(mq + 0, gq, !0), xq.setFloat32(mq + 4, Yq, !0), xq.setUint32(mq + 8, lq, !0), Bg(xq).set(Oq, xq.byteOffset + mq + 12), !0
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7089-L7293` → after: `L1175-L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1175-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1175-L1180) · [Before (L7089-L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7089-L7293)

```diff
-     class Ht {
-       constructor(zz, uz, bz) {
-         let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
-         this.casters = zz, this.writeVoxels = uz, this.writePool = bz, this.warn = Ez, this.eyeChunk = null, this.slotChunk = new Array(Gu).fill(null), this.slotVersion = new Float64Array(Gu).fill(-1), this.slotPool = new Array(Gu).fill(null), this.starved = new Uint8Array(Gu), t … [truncated]
-         for (let nz = 0; nz < Eb; nz++) this.freePool[nz] = 65535 - nz
-       }
-       get queuedCount() {
-         return this.queue.length
-       }
-       get poolInUse() {
-         return Eb - this.freeCount
-       }
-       chunkAdded(zz) {
-         if (null === this.eyeChunk || !this.inRadius(zz.i, zz.j, zz.k)) return;
-         const uz = Wu(zz.i, zz.j, zz.k);
-         this.slotChunk[uz] = zz, this.slotVersion[uz] = -1, this.enqueue(uz)
- ... (189 more removed lines; see GitHub link above)
+ 
+     function Dg(qq, Eq, gq, Yq, lq, Oq) {
+       const mq = qq.gN(532, Eq, 12 + Oq.length);
+       if (mq < 0) return !1;
+       const xq = qq.view;
+       return xq.setInt32(mq + 0, gq, !0), xq.setInt32(mq + 4, Yq, !0), xq.setUint32(mq + 8, lq, !0), Bg(xq).set(Oq, xq.byteOffset + mq + 12), !0
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7295-L7424` → after: `L1182-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1182-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1182-L1187) · [Before (L7295-L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7295-L7424)

```diff
-     var Ot = bz(36930);
-     class pt {
-       constructor(zz) {
-         this.device = zz, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Rb, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.xd = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = zz.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = zz.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       update(zz, uz, bz) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
- ... (114 more removed lines; see GitHub link above)
+ 
+     function qY(qq, Eq, gq, Yq, lq) {
+       const Oq = qq.gN(533, Eq, 8 + lq.length);
+       if (Oq < 0) return !1;
+       const mq = qq.view;
+       return mq.setInt32(Oq + 0, gq, !0), mq.setInt32(Oq + 4, Yq, !0), Bg(mq).set(lq, mq.byteOffset + Oq + 8), !0
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7429-L7442` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1191) · [Before (L7429-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7429-L7442)

```diff
-       return zz[0] * uz[0] + zz[1] * uz[1] + zz[2] * uz[2] < dt
-     }
-     async function Zt(zz) {
-       const {
-         pixels: uz,
-         width: bz,
-         height: Ez
-       } = await gn(zz), nz = new Uint8Array(bz * Ez);
-       for (let iz = 0; iz < nz.length; iz++) nz[iz] = uz[4 * iz + 3];
-       return {
-         width: bz,
-         height: Ez,
-         alpha: nz
-       }
+       return !(qq.gN(576, Eq, 0) < 0)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7444-L7733` → after: `L1193-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1193-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1193-L1201) · [Before (L7444-L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7444-L7733)

```diff
-     class Rt {
-       constructor(zz, uz) {
-         this.device = zz, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(sb.n), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = zz.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * Du,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = zz.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [bz, Ez, nz] = sb.o;
- ... (274 more removed lines; see GitHub link above)
+ 
+     function gY(qq, Eq, gq, Yq, lq, Oq) {
+       const mq = qq.gN(577, Eq, 36 + Oq.length);
+       if (mq < 0) return !1;
+       const xq = qq.view;
+       xq.setUint8(mq + 0, gq);
+       for (let Aq = 0; Aq < 16; Aq++) xq.setUint8(mq + 4 + 1 * Aq, Yq[Aq]);
+       for (let Aq = 0; Aq < 16; Aq++) xq.setUint8(mq + 20 + 1 * Aq, lq[Aq]);
+       return Bg(xq).set(Oq, xq.byteOffset + mq + 36), !0
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7743` → after: `L1205-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1205-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1205-L1208) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7743)

```diff
-       zz.drawOffset(uz, Ez + Xt), uz[Ez + ft] = zz.drawTime(), bz[Ez + st] = zz.ring.drawStart(), bz[Ez + rt] = zz.ring.drawCount()
+       const lq = qq.gN(578, Eq, 4 + Yq.length);
+       if (lq < 0) return !1;
+       const Oq = qq.view;
+       return Oq.setUint8(lq + 0, gq), Bg(Oq).set(Yq, Oq.byteOffset + lq + 4), !0
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7745-L7815` → after: `L1210-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1210-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1210-L1215) · [Before (L7745-L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7745-L7815)

```diff
-     const Nt = `\n${RE}\n\nconst MAX_STOPS = ${wt.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${wt.e/4}>,\n\tcolor1: array<vec4f, ${wt.e}>,\n\t … [truncated]
-     var vt = bz(40820);
-     class xt {
-       constructor(zz, uz, bz, Ez) {
-         this.device = zz, this.system = uz, this.frameIndex = bz, this.bindings = Ez, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, vt.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, zz * wt.i * 4, this.system.ring.records, zz * wt.i, (uz - zz) * wt.i)
-         };
-         const {
-           name: nz
-         } = uz;
-         this.ring = zz.createBuffer({
-           label: `particles-${nz}`,
-           size: uz.ring.records.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.uniforms = zz.createBuffer({
-           label: `particles-uniforms-${nz}`,
- ... (55 more removed lines; see GitHub link above)
+ 
+     function lY(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
+       const Aq = qq.gN(579, Eq, 36);
+       if (Aq < 0) return !1;
+       const cq = qq.view;
+       return cq.setFloat64(Aq + 0, gq, !0), cq.setFloat64(Aq + 8, Yq, !0), cq.setFloat64(Aq + 16, lq, !0), cq.setFloat64(Aq + 24, Oq, !0), cq.setUint16(Aq + 32, mq, !0), cq.setUint8(Aq + 34, xq), !0
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7819-L7937` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1219) · [Before (L7819-L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7819-L7937)

```diff
-         this.device = zz, this.resources = uz, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-         const bz = zz.createBindGroupLayout({
-           label: "particles-system",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
-           }, {
-             binding: 1,
-             visibility: GPUShaderStage.VERTEX,
-             buffer: {
-               type: "read-only-storage"
-             }
-           }, {
- ... (103 more removed lines; see GitHub link above)
+         this.core = qq, this.afterCall = Eq
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7939-L7941` → after: `L1221-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1221-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1221-L1223) · [Before (L7939-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7939-L7941)

```diff
-       remove(zz) {
-         const uz = this.systems.get(zz);
-         uz && (this.systems.delete(zz), uz.destroy(), this.freeFrameIndices.push(uz.frameIndex))
+       canModify(qq, Eq, gq) {
+         const Yq = this.core.SOq(qq, Eq, gq);
+         return this.afterCall(), Yq
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7943-L7955` → after: `L1225-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1225-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1225-L1227) · [Before (L7943-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7943-L7955)

```diff
-       prepare(zz) {
-         const uz = zz.animationRatio || 1;
-         Mu(this.renderable._worldCenter, zz, Eu), this.preparedTarget = this.target, this.draws.length = 0;
-         let bz = 0;
-         for (const Ez of this.systems.values()) {
-           const zz = Ez.system;
-           if (!zz.animateIfActive(uz)) continue;
-           if (zz.ring.takeUploads(Ez.upload), !zz.hasLiveParticles() || 0 === Ez.pipelines.length) continue;
-           Ez.writeUniforms(this.warnOnce), Ez.bind();
-           const nz = 64 * Ez.frameIndex;
-           Ez.count = zz.ring.drawCount(), ot(zz, this.frameData, this.frameBits, nz), bz = Math.max(bz, nz + 64), this.draws.push(Ez)
-         }
-         bz > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, bz)
+       terrainBlocked(qq, Eq, gq, Yq, lq) {
+         const Oq = this.core.hmq(qq, Eq, gq, Yq, lq);
+         return this.afterCall(), Oq
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7957-L7964` → after: `L1229-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1229-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1229-L1231) · [Before (L7957-L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7957-L7964)

```diff
-       draw(zz) {
-         let uz = 0,
-           bz = null;
-         for (const Ez of this.draws) {
-           zz.setBindGroup(1, Ez.bindGroup), zz.setBindGroup(2, this.frameBindGroup, [256 * Ez.frameIndex]);
-           for (const nz of Ez.pipelines) nz !== bz && (zz.setPipeline(nz), bz = nz), zz.draw(4, Ez.count), uz++
-         }
-         return uz
+       xJ(qq, Eq, gq, Yq) {
+         const lq = this.core.JW(qq, Eq, gq, Yq);
+         return this.afterCall(), lq
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7966-L7970` → after: `L1233-L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1233-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1233-L1235) · [Before (L7966-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7966-L7970)

```diff
-       bindTarget(zz) {
-         this.target = zz;
-         const uz = `${zz._colorFormat}|${zz._depthStencilFormat}|${zz._depthCompare}|${zz._sampleCount}`;
-         let bz = this.pipelines.get(uz);
-         bz || (bz = new Map, this.pipelines.set(uz, bz)), this.targetPipelines = bz
+       blockData(qq, Eq, gq) {
+         const Yq = this.core.TOq(qq, Eq, gq);
+         return this.afterCall(), Yq
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7972-L8011` → after: `L1237-L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1237-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1237-L1239) · [Before (L7972-L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L7972-L8011)

```diff
-       pipelineFor(zz) {
-         var uz;
-         const bz = this.targetPipelines,
-           Ez = bz.get(zz);
-         if (void 0 !== Ez) return Ez;
-         bz.set(zz, null);
-         const nz = this.target,
-           iz = zz === Gn.c,
-           lz = null !== (uz = nz._depthCompare) && void 0 !== uz ? uz : bu;
-         return this.device.createRenderPipelineAsync({
-           label: `particles-${zz}`,
-           layout: this.pipelineLayout,
-           vertex: {
-             module: this.module,
-             entryPoint: "mainVertex"
-           },
- ... (24 more removed lines; see GitHub link above)
+       cameraSweep(qq, Eq, gq, Yq, lq, Oq, mq) {
+         const xq = this.core.zlq(qq, Eq, gq, Yq, lq, Oq, mq);
+         return this.afterCall(), xq
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8013-L8021` → after: `L1241-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1241-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1241-L1243) · [Before (L8013-L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8013-L8021)

```diff
-       allocateFrameIndex() {
-         const zz = this.freeFrameIndices.pop();
-         if (void 0 !== zz) return zz;
-         const uz = this.nextFrameIndex++;
-         if (64 * (uz + 1) > this.frameData.length) {
-           const zz = new Float32Array(2 * this.frameData.length);
-           zz.set(this.frameData), this.frameData = zz, this.frameBits = new Uint32Array(zz.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
-         }
-         return uz
+       hasServerTarget(qq) {
+         const Eq = this.core.KOq(qq);
+         return this.afterCall(), Eq
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8023-L8028` → after: `L1245-L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1245-L1247) · [Before (L8023-L8028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8023-L8028)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       entityInteractable(qq) {
+         const Eq = this.core.UOq(qq);
+         return this.afterCall(), Eq
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8030-L8041` → after: `L1249-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1249-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1249-L1251) · [Before (L8030-L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8030-L8041)

```diff
-       createFrameBindGroup() {
-         return this.device.createBindGroup({
-           label: "particles-frames",
-           layout: this.frameLayout,
-           entries: [{
-             binding: 0,
-             resource: {
-               buffer: this.frameBuffer,
-               size: 32
-             }
-           }]
-         })
+       entityCrouching(qq) {
+         const Eq = this.core.ROq(qq);
+         return this.afterCall(), Eq
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8043-L8053` → after: `L1253-L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1253-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1253-L1255) · [Before (L8043-L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8043-L8053)

```diff
-     }
-     class At {
-       constructor(zz, uz, bz, Ez, nz) {
-         this.lite = zz, this.canvas = uz, this.info = bz, this.resources = nz, this.fbz = !1, this.needPOTTextures = !1, this.FY = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = uz.width, this.renderHeight = uz.height, this.caps = {
-           maxTextureSize: Ez.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: Ez.maxTextureArrayLayers
-         }
+       predictServerPosition(qq, Eq, gq, Yq) {
+         const lq = this.core.mmq(qq, Eq, gq, Yq);
+         return this.afterCall(), lq
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8055-L8056` → after: `L1257-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1257-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1257-L1259) · [Before (L8055-L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8055-L8056)

```diff
-       getCaps() {
-         return this.caps
+       setOtherEntitySetting(qq, Eq, gq) {
+         const Yq = this.core.Jlq(qq, Eq, gq);
+         return this.afterCall(), Yq
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8058-L8059` → after: `L1261-L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1261-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1261-L1263) · [Before (L8058-L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8058-L8059)

```diff
-       getRenderWidth() {
-         return this.renderWidth
+       entityInfoBatch(qq) {
+         const Eq = this.core.Ulq(qq);
+         return this.afterCall(), Eq
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8061-L8062` → after: `L1265-L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1265-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1265-L1267) · [Before (L8061-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8061-L8062)

```diff
-       getRenderHeight() {
-         return this.renderHeight
+       entityName(qq) {
+         const Eq = this.core.FOq(qq);
+         return this.afterCall(), Eq
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8064-L8065` → after: `L1269-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1269-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1269-L1271) · [Before (L8064-L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8064-L8065)

```diff
-       getHardwareScalingLevel() {
-         return 1
+       hasEffect(qq, Eq) {
+         const gq = this.core.wOq(qq, Eq);
+         return this.afterCall(), gq
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8067-L8086` → after: `L1273-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1273-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1273-L1275) · [Before (L8067-L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8067-L8086)

```diff
-       setSize(zz, uz) {
-         if (this.renderWidth === zz && this.renderHeight === uz) return !1;
-         const bz = this.renderWidth,
-           Ez = this.renderHeight;
-         this.renderWidth = zz, this.renderHeight = uz;
-         try {
-           (0, gz.m)(this.lite, zz, uz)
-         } catch (nz) {
-           if (nz instanceof DOMException && "InvalidStateError" === nz.name) {
-             this.renderWidth = bz, this.renderHeight = Ez;
-             try {
-               (0, gz.m)(this.lite, bz, Ez)
-             } catch {
-               this.canvas.width = bz, this.canvas.height = Ez
-             }
-             return console.warn("WebGPU could not allocate render targets for resize", zz, uz, nz.message), !1
- ... (4 more removed lines; see GitHub link above)
+       scratchPtr() {
+         const qq = this.core.flq();
+         return this.afterCall(), qq
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8088-L8090` → after: `L1277-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1277-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1277-L1279) · [Before (L8088-L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8088-L8090)

```diff
-       resize() {}
-       getRenderingCanvas() {
-         return this.canvas
+       invSwap(qq, Eq) {
+         const gq = this.core.Emq(qq, Eq);
+         return this.afterCall(), gq
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8092-L8093` → after: `L1281-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1281-L1283) · [Before (L8092-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8092-L8093)

```diff
-       getInfo() {
-         return this.info
+       invMove(qq, Eq, gq) {
+         const Yq = this.core.eOq(qq, Eq, gq);
+         return this.afterCall(), Yq
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8095-L8097` → after: `L1285-L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1285-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1285-L1287) · [Before (L8095-L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8095-L8097)

```diff
-       ZN() {
-         const zz = performance.now();
-         this.deltaTime = null === this.lastFrameTime ? 0 : zz - this.lastFrameTime, this.lastFrameTime = zz
+       invQuickMove(qq, Eq, gq, Yq) {
+         const lq = this.core.DOq(qq, Eq, gq, Yq);
+         return this.afterCall(), lq
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8099-L8100` → after: `L1289-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1289-L1291) · [Before (L8099-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8099-L8100)

```diff
-       getDeltaTime() {
-         return this.deltaTime
+       invRemove(qq, Eq, gq) {
+         const Yq = this.core.qmq(qq, Eq, gq);
+         return this.afterCall(), Yq
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8102-L8104` → after: `L1293-L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1293-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1293-L1295) · [Before (L8102-L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8102-L8104)

```diff
-       createCanvas(zz, uz) {
-         const bz = document.createElement("canvas");
-         return bz.width = zz, bz.height = uz, bz
+       invEnchant(qq, Eq, gq, Yq, lq) {
+         const Oq = this.core.IOq(qq, Eq, gq, Yq, lq);
+         return this.afterCall(), Oq
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8106-L8108` → after: `L1297-L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1297-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1297-L1299) · [Before (L8106-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8106-L8108)

```diff
-       fY(zz, uz) {
-         var bz;
-         return null !== (bz = this.resources.fY.get(zz)) && void 0 !== bz ? bz : new Qz(this.resources, zz, uz)
+       craft(qq, Eq, gq) {
+         const Yq = this.core.craft(qq, Eq, gq);
+         return this.afterCall(), Yq
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8110-L8111` → after: `L1301-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1301-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1301-L1303) · [Before (L8110-L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8110-L8111)

```diff
-       atlasArray(zz, uz, bz) {
-         return this.resources.atlasArray(zz, uz, bz)
+       salvage(qq, Eq, gq) {
+         const Yq = this.core.salvage(qq, Eq, gq);
+         return this.afterCall(), Yq
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8113-L8116` → after: `L1305-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1305-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1305-L1307) · [Before (L8113-L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8113-L8116)

```diff
-     }
-     class Tt {
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
+       selectSlot(qq) {
+         const Eq = this.core.umq(qq);
+         return this.afterCall(), Eq
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8118-L8122` → after: `L1309-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1309-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1309-L1311) · [Before (L8118-L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8118-L8122)

```diff
-       copyFromView(zz) {
-         this.fov = zz.fov, this.nearPlane = zz.near, this.farPlane = zz.far;
-         const uz = zz.worldMatrix;
-         for (let bz = 0; bz < 16; bz++)
-           if (this.worldMatrix[bz] !== uz[bz]) return this.worldMatrix.set(uz), void this.worldMatrixVersion++
+       closeChest() {
+         const qq = this.core.pOq();
+         return this.afterCall(), qq
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8124-L8136` → after: `L1313-L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1313-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1313-L1315) · [Before (L8124-L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8124-L8136)

```diff
-     }
-     class Lt {
-       constructor(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
-         let Oz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
-         this.engine = zz, this.tK = uz, this.sceneTask = bz, this.gpuDevice = Ez, this.terrain = nz, this.meshes = iz, this.particles = lz, this.resources = Mz, this.sunShadow = Oz, this.buz = void 0, this.backendName = "WebGPU (Lite)", this.Dk = void 0, this.modelMeshes = void 0 … [truncated]
-           yM: zz => {
-             Gz(zz) && Mz.textureSlot(zz)
-           },
-           loaded: zz => Gz(zz) ? Mz.textureLoaded(zz) : null,
-           canvasUpdated: (zz, uz, bz) => {
-             Gz(zz) && Mz.canvasUpdated(zz, uz, bz)
-           }
-         }), this.Dk = iz.Dk, this.modelMeshes = iz.modelMeshes, uz.camera = this.camera
+       itemAttributesBatch(qq) {
+         const Eq = this.core.Rlq(qq);
+         return this.afterCall(), Eq
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8138-L8140` → after: `L1317-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1317-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1317-L1319) · [Before (L8138-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8138-L8140)

```diff
-       get castsEntitySunShadows() {
-         var zz, uz;
-         return null !== (zz = null === (uz = this.sunShadow) || void 0 === uz ? void 0 : uz.tracesEntities) && void 0 !== zz && zz
+       itemNames() {
+         const qq = this.core.yG();
+         return this.afterCall(), qq
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8142-L8143` → after: `L1321-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1321-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1321-L1323) · [Before (L8142-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8142-L8143)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       blockProps() {
+         const qq = this.core.zOq();
+         return this.afterCall(), qq
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8145-L8150` → after: `L1325-L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1325-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1325-L1327) · [Before (L8145-L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8145-L8150)

```diff
-       attach(zz) {
-         this.modelMeshes.attach(zz.model, zz.sceneMirror);
-         const uz = zz.tK;
-         this.setClearColour(uz.clearColor.r, uz.clearColor.g, uz.clearColor.b), uz.draw = () => {
-           this.drawFrame(zz, uz)
-         }
+       itemProps() {
+         const qq = this.core.gmq();
+         return this.afterCall(), qq
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8152-L8158` → after: `L1329-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1329-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1329-L1331) · [Before (L8152-L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8152-L8158)

```diff
-       render(zz) {
-         try {
-           this.buz.ZN(), zz.tK.render()
-         } catch (uz) {
-           throw this.refusals.frameFailed(uz), uz
-         }
-         this.refusals.frameDrawn()
+       salvageRecipe(qq) {
+         const Eq = this.core.slq(qq);
+         return this.afterCall(), Eq
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8160-L8161` → after: `L1333-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1333-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1333-L1335) · [Before (L8160-L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8160-L8161)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       craftingView(qq, Eq, gq) {
+         const Yq = this.core.klq(qq, Eq, gq);
+         return this.afterCall(), Yq
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8163-L8171` → after: `L1337-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1337-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1337-L1339) · [Before (L8163-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8163-L8171)

```diff
-       describePendingWork() {
-         var zz, uz, bz, Ez;
-         const nz = [...this.particles.describePendingWork(), ...null !== (zz = null === (uz = this.sunShadow) || void 0 === uz ? void 0 : uz.describePendingWork()) && void 0 !== zz ? zz : []],
-           iz = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (bz = this.terrain.sceneDepth) && void 0 !== bz && bz.compiling ? 1 : 0) + (null !== (Ez = this.terrain.shadowMask) && void 0 !== Ez && Ez.compiling ? 1 : 0);
-         iz > 0 && nz.push(`${iz} Lite pipelines compiling`);
-         const lz = this.terrain.buffersAwaitingVerdict;
-         lz > 0 && nz.push(`${lz} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const Mz = this.resources.texturesLoading;
-         return Mz > 0 && nz.push(`${Mz} Lite textures loading`), nz
+       directorView() {
+         const qq = this.core.Tlq();
+         return this.afterCall(), qq
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8173-L8174` → after: `L1341-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1341-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1341-L1343) · [Before (L8173-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8173-L8174)

```diff
-       prepareTexture(zz) {
-         return null !== this.resources.boundTexture(zz) || this.resources.textureFailed(zz)
+       directorDefaultPose() {
+         const qq = this.core.Slq();
+         return this.afterCall(), qq
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8176-L8187` → after: `L1345-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1345-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1345-L1347) · [Before (L8176-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8176-L8187)

```diff
-       drawFrame(zz, uz) {
-         var bz, Ez, nz, iz, lz, Mz;
-         const tz = ZM(zz);
-         this.camera.copyFromView(tz), this.setClearColour(tz.clearColour[0], tz.clearColour[1], tz.clearColour[2]), null === (bz = this.sunShadow) || void 0 === bz || bz.prepare(zz.Gd, tz.eye, null !== (Ez = zz.Gd.JZ) && void 0 !== Ez ? Ez : null), this.terrain.prepare(zz, tz), n … [truncated]
-         const Hz = performance.now();
-         this.resources.flushUploads(), null === (Mz = this.sunShadow) || void 0 === Mz || Mz.traceEntities(this.meshes);
-         try {
-           (0, gz.k)(this.engine, this.lastFrameTime > 0 ? Hz - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = Hz
+       directorEntity(qq) {
+         const Eq = this.core.plq(qq);
+         return this.afterCall(), Eq
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8189-L8191` → after: `L1349-L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1349-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1349-L1351) · [Before (L8189-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8189-L8191)

```diff
-       setClearColour(zz, uz, bz) {
-         const Ez = this.tK.clearColor;
-         Ez.r = zz, Ez.g = uz, Ez.b = bz, Ez.a = 1
+       directorPose(qq, Eq, gq, Yq, lq, Oq) {
+         const mq = this.core.Glq(qq, Eq, gq, Yq, lq, Oq);
+         return this.afterCall(), mq
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8193-L8229` → after: `L1353-L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1353-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1353-L1355) · [Before (L8193-L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8193-L8229)

```diff
-     }
-     const Pt = "WebGPU device lost while Lite was starting";
- 
-     function Gt(zz, uz) {
-       return "object" === typeof zz && null !== zz ? Object.assign(zz, {
-         startStep: uz
-       }) : zz
-     }
-     async function Vt(zz, uz) {
-       const bz = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!bz) throw Gt(new Error("No WebGPU adapter"), "no_adapter");
-       const Ez = bz.info,
-         nz = {
-           vendor: (null === Ez || void 0 === Ez ? void 0 : Ez.vendor) || "unknown vendor",
- ... (21 more removed lines; see GitHub link above)
+       passTimings(qq) {
+         const Eq = this.core.Omq(qq);
+         return this.afterCall(), Eq
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L8231-L8276` → after: `L1357-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1357-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/261.js#L1357-L1359) · [Before (L8231-L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/261.js#L8231-L8276)

```diff
-       var Mz;
-       const tz = function(zz) {
-         return zz._device
-       }(lz);
-       let Hz = null;
-       tz.lost.then((zz => {
-         Hz = zz, console.error(`WebGPU device lost (${zz.reason}): ${zz.message}`)
-       }));
-       try {
-         const bz = await async function(zz, uz, bz, Ez, nz, iz) {
-           const lz = (0, Sz.b)(zz),
-             Mz = new Bl(zz, uz),
-             tz = new CM(uz),
-             Hz = new Gl(uz, Mz, (zz => function(zz, uz) {
-               for (const Ez of kz(zz)) {
-                 var bz;
- ... (30 more removed lines; see GitHub link above)
+       drawCensus() {
+         const qq = this.core.kOq();
+         return this.afterCall(), qq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L4-L71) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L4)

```diff
-   40187: (zz, uz, bz) => {
+   41355: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => dq,
+       e: () => xq,
+       h: () => mq,
+       l: () => cq
+     });
+     var Yq = gq(37286),
+       lq = gq(38677),
+       Oq = gq(38671);
+ 
+     function mq(qq, Eq, gq, Yq) {
+       const lq = Oq.w;
+       Eq.fill(0), qq.gravity.toArray(Eq, lq.gravity), qq.colorDead.toArray(Eq, lq.colorDead), gq[lq.ramp] = qq.useRampGradients ? 1 : 0;
+       const mq = qq.getColorGradients(),
+         xq = Wq(qq, mq, "colour", Yq);
+ ... (52 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6-L8` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L73) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L6-L8)

```diff
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(zz, uz).getContext("2d", bz);
-       const Ez = document.createElement("canvas");
-       return Ez.width = zz, Ez.height = uz, Ez.getContext("2d", bz)
+       return mq(qq, aq, Vq, gq), Eq && jq(Vq, Eq) ? null : Vq.slice()
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L12` → after: `L77-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L77-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L77-L94) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L12)

```diff
-       return zz.getContext("2d", uz)
+       if (qq.length !== Eq.length) return !1;
+       for (let gq = 0; gq < qq.length; gq++)
+         if (qq[gq] !== Eq[gq]) return !1;
+       return !0
+     }
+ 
+     function Hq(qq, Eq, gq) {
+       var Yq;
+       qq[Eq] = gq.gradient, qq[Eq + 1] = gq.factor1, qq[Eq + 2] = null !== (Yq = gq.factor2) && void 0 !== Yq ? Yq : gq.factor1
+     }
+   },
+   41352: (qq, Eq, gq) => {
+     function Yq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
+       const Eq = new Set;
+       return (gq, Yq) => {
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L19` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L100) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L19)

```diff
-   40116: (zz, uz, bz) => {
+   41387: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L21-L36` → after: `L102-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L102-L104) · [Before (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L21-L36)

```diff
-       c: () => fz,
-       f: () => Zz,
-       h: () => Qz,
-       j: () => Az,
-       n: () => Lz,
-       o: () => Pz,
-       q: () => Xz,
-       u: () => Kz,
-       v: () => wz,
-       z: () => Jz,
-       C: () => gz,
-       E: () => oz,
-       H: () => qz,
-       J: () => Dz,
-       K: () => Gz,
-       N: () => Vz
+       createLiteRendererAsync: () => bA,
+       liteBabylonBackend: () => Lq,
+       setPipelineFailureHook: () => sl
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L38-L40` → after: `L106-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L106-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L106-L165) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L38-L40)

```diff
-     var Ez = bz(4560),
-       nz = bz(39800),
-       iz = (bz(39987), bz(11));
+     var Yq = gq(37286),
+       lq = gq(37614),
+       Oq = gq(37870),
+       mq = gq(37242),
+       xq = gq(37877);
+     class Aq extends xq.e {
+       constructor() {
+         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
+         super(...Eq), this.color = new Yq.Color3(1, 1, 1), this.alpha = 1, this.material = {
+           name: "colorShader",
+           uniqueId: Eq[0].ZJ().getUniqueId(),
+           shaderPath: "color",
+           fillMode: 4,
+           sideOrientation: null,
+           alphaMode: 2,
+           forceDepthWrite: !1,
+ ... (44 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L43` → after: `L168-L7020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L168-L7020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L168-L7020) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L43)

```diff
-         this.memory = zz, this.access = uz, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Bp = 0, this.u32 = new iz.i(0), this.f32 = new iz.c(0), this.u8 = new iz.b(0), this.dataView = new iz.e(new ArrayBuffer(0)), this.refresh()
+         this.name = qq, this.PV = Eq, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.MJ = {
+           addOnce: qq => {
+             this.disposers.push(qq)
+           }
+         }, this.uniqueId = Eq.getUniqueId()
+       }
+       get isFrozen() {
+         return this.checkReadyOnlyOnce
+       }
+       ZJ() {
+         return this.PV
+       }
+       getClassName() {
+         return "LiteMaterial"
+       }
+       freeze() {
+ ... (6837 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L45-L46` → after: `L7022-L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7022-L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7022-L7040) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L45-L46)

```diff
-       refresh() {
-         this.ptr = this.access.ptr(), this.Bp = this.access.Bp(), this.buffer = (0, iz.F)(this.memory()), this.u32 = new iz.i(this.buffer, this.ptr, this.Bp >>> 2), this.f32 = new iz.c(this.buffer, this.ptr, this.Bp >>> 2), this.u8 = new iz.b(this.buffer, this.ptr, this.Bp), this … [truncated]
+       allocate(qq) {
+         if (this.nextCaster >= Eg) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
+         const Eq = this.nextCaster++;
+         if (this.writeCaster(Eq, CE, 0, 0, 0), "shape" === qq.kind) {
+           const gq = this.allocateMask(qq.mask.length);
+           gq >= 0 && (this.sink(gq, qq.mask), this.writeCaster(Eq, IE, gq, 0, 8))
+         } else if ("cutout" === qq.kind) {
+           const gq = qg(qq.size),
+             Yq = this.allocateMask(6 * gq);
+           if (Yq >= 0) {
+             const lq = new Uint32Array(6 * gq);
+             qq.faces.forEach(((qq, Eq) => {
+               lq.set(qq, Eq * gq)
+             })), this.sink(Yq, lq), this.writeCaster(Eq, DE, Yq, 0, qq.size)
+           }
+         } else this.planesLoading++, this.loads.push(this.loadPlanes(Eq, qq.planes).finally((() => {
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L48-L49` → after: `L7042-L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7042-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7042-L7058) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L48-L49)

```diff
-       ensureViews() {
-         (0, iz.F)(this.memory()) !== this.buffer && this.refresh()
+       async loadPlanes(qq, Eq) {
+         const gq = await Promise.all(Eq.map((qq => this.texture(qq.texture))));
+         if (gq.some((qq => null === qq))) return;
+         const Yq = gq,
+           lq = qA(Math.max(...Yq.map((qq => Math.min(qq.width, qq.height))))),
+           Oq = qg(lq),
+           mq = this.allocateMask(Eq.length * (4 + Oq));
+         if (mq < 0) return;
+         const xq = new Uint32Array(Eq.length * (4 + Oq)),
+           Aq = 4 * Eq.length;
+         Eq.forEach(((qq, Eq) => {
+           const gq = mq + Aq + Eq * Oq;
+           xq.set(function(qq, Eq) {
+             const [gq, Yq] = qq.tangent, lq = Math.hypot(gq, Yq) || 1, Oq = gq / lq, mq = Yq / lq, xq = qq.centre[0] * mq - qq.centre[1] * Oq, Aq = new Uint32Array(4);
+             return new Float32Array(Aq.buffer, 0, 3).set([Oq, mq, xq]), Aq[3] = Eq, Aq
+           }(qq, gq), 4 * Eq), xq.set(Dx(Yq[Eq].alpha, Yq[Eq].width, Yq[Eq].height, lq), Aq + Eq * Oq)
+ ... (1 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L51-L52` → after: `L7060-L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7060-L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7060-L7062) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L51-L52)

```diff
-       get view() {
-         return this.ensureViews(), this.dataView
+       texture(qq) {
+         let Eq = this.textures.get(qq);
+         return Eq || (Eq = this.loadTexture(qq).catch((Eq => (this.warn(`Sun shadows: no mask for ${qq}: ${Eq instanceof Error?Eq.message:String(Eq)}`), null))), this.textures.set(qq, Eq)), Eq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L54-L55` → after: `L7064-L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7064-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7064-L7067) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L54-L55)

```diff
-       room(zz) {
-         return !!this.fits(zz) || (this.dropped++, !1)
+       allocateMask(qq) {
+         if (this.nextMaskWord + qq > gg) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
+         const Eq = 32768 + this.nextMaskWord;
+         return this.nextMaskWord += qq, Eq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L57-L162` → after: `L7069-L7070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7069-L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7069-L7070) · [Before (L57-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L57-L162)

```diff
-       fits(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
-         this.ensureViews();
-         const bz = uz + zz;
-         return bz <= this.Bp || bz <= Ez.Bc && 0 !== this.access.reserve(bz) && (this.refresh(), bz <= this.Bp)
-       }
-       consume(zz) {
-         const uz = this.cursor - zz;
-         uz > 0 && zz > 0 && (this.ensureViews(), this.u8.copyWithin(0, zz, this.cursor)), this.cursor = uz > 0 ? uz : 0
-       }
-       writeRecord(zz, uz, bz, nz, iz) {
-         if (!this.room(Ez.mb)) return !1;
-         const lz = this.cursor >>> 2;
-         return this.u32[lz] = 65535 & zz | (65535 & uz) << 16, this.f32[lz + 1] = bz, this.f32[lz + 2] = nz, this.u32[lz + 3] = iz >>> 0, this.cursor += Ez.mb, !0
-       }
-       writeOptions(zz, uz) {
- ... (90 more removed lines; see GitHub link above)
+       writeCaster(qq, Eq, gq, Yq, lq) {
+         this.sink(0 + 4 * qq, Uint32Array.of(Eq, gq, Yq, lq))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L164-L213` → after: `L7072-L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7072-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7072-L7073) · [Before (L164-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L164-L213)

```diff
-       reset(zz) {
-         this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(zz)
-       }
-     }
-     var Oz = bz(39979),
-       pz = bz(2294),
-       dz = bz(4552),
-       Fz = bz(40123);
-     const Zz = "coreFrame",
-       Rz = "fatalStatus",
-       Kz = "otherCall",
-       wz = "coreRings",
-       Xz = "netIn",
-       fz = "abi",
-       sz = "netOut",
-       rz = "workerOut",
- ... (34 more removed lines; see GitHub link above)
+       warnOnce(qq) {
+         this.warned.has(qq) || (this.warned.add(qq), this.warn(qq))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L216` → after: `L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7076) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L216)

```diff
-     const mz = new Set([Rz, Kz, oz, Pz]);
+     var gA = gq(2755);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L219` → after: `L7079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7079) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L219)

```diff
-       return Tz.has(zz.site) ? zz.error instanceof WebAssembly.RuntimeError || (0, nz.l)(zz.error) : !mz.has(zz.site) && zz.error instanceof Error
+       return !qq.ea && !qq.pM && !qq.va
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L228-L241` → after: `L7082-L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7082-L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7082-L7086) · [Before (L228-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L228-L241)

```diff
-     function Dz(zz, uz) {
-       const {
-         site: bz,
-         error: nz,
-         header: iz
-       } = zz, lz = iz ? (0, Ez.Td)(iz.lastError) : "noFrame", Mz = `CORE-${bz===Rz?lz:bz}`, tz = null === nz || void 0 === nz ? "" : ` ${(0,Oz.e)(nz)}`, Hz = {
-         site: bz,
-         wasmBuild: uz.wasm,
-         clientVersion: uz.client
-       };
-       return iz && (Hz.status = String(iz.status), Hz.lastError = lz, Hz.lastErrorCode = String(iz.lastError), Hz.lastErrorDetail = String(iz.lastErrorDetail), Hz.errorCount = String(iz.errorCount), Hz.frameIndex = String(iz.frameIndex), Hz.tickIndex = String(iz.tickIndex)), {
-         code: Mz,
-         message: `core ${bz}, last error ${lz};${tz}`,
-         details: Hz
+     function lA() {
+       return {
+         bricks: new Uint32Array(JE),
+         cells: new Uint16Array(32768),
+         special: new Uint8Array(GE)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L246-L252` → after: `L7091-L7093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7091-L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7091-L7093) · [Before (L246-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L246-L252)

```diff
-         this.core = zz, this.memory = uz, this.handlers = bz, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, … [truncated]
-           ptr: 0,
-           len: 0,
-           net: Uz,
-           netOffsets: this.netOffsets,
-           kind: "none"
-         }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Hz(zz, uz)
+         let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
+         this.casters = qq, this.writeVoxels = Eq, this.writePool = gq, this.warn = Yq, this.eyeChunk = null, this.slotChunk = new Array(fE).fill(null), this.slotVersion = new Float64Array(fE).fill(-1), this.slotPool = new Array(fE).fill(null), this.starved = new Uint8Array(fE), t … [truncated]
+         for (let lq = 0; lq < Yg; lq++) this.freePool[lq] = 65535 - lq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L254-L255` → after: `L7095-L7096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7095-L7096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7095-L7096) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L254-L255)

```diff
-       get netKeptFrames() {
-         return this.keptFrames
+       get queuedCount() {
+         return this.queue.length
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L257-L258` → after: `L7098-L7099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7098-L7099) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L257-L258)

```diff
-       get netWrittenSinceFrame() {
-         return this.rings.net.cursor - this.netKept
+       get poolInUse() {
+         return Yg - this.freeCount
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L260-L261` → after: `L7101-L7104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7101-L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7101-L7104) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L260-L261)

```diff
-       hasPendingCommands() {
-         return this.rings.cmd.cursor > 0
+       chunkAdded(qq) {
+         if (null === this.eyeChunk || !this.inRadius(qq.i, qq.j, qq.k)) return;
+         const Eq = sE(qq.i, qq.j, qq.k);
+         this.slotChunk[Eq] = qq, this.slotVersion[Eq] = -1, this.enqueue(Eq)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L263-L268` → after: `L7106-L7110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7106-L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7106-L7110) · [Before (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L263-L268)

```diff
-       framePaces(zz) {
-         if (this.stopped || this.drawsHeld) return !1;
-         try {
-           return this.core.Qnz(zz)
-         } catch (uz) {
-           return this.crash(Zz, uz), !1
+       update(qq, Eq, gq) {
+         const Yq = this.casters.blockCaster;
+         if (Yq !== this.casterTable) {
+           this.casterTable = Yq;
+           for (let qq = 0; qq < fE; qq++) this.slotVersion[qq] = -1, this.slotChunk[qq] && this.enqueue(qq)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L271-L272` → after: `L7122-L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7122-L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7122-L7123) · [Before (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L271-L272)

```diff
-       get isStopped() {
-         return this.stopped
+       writeRecord(qq, Eq) {
+         this.records.set(Eq, 4 * qq), this.windowTopStale = !0, this.writeVoxels(4 * qq, Eq)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L274-L278` → after: `L7125-L7249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7125-L7249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7125-L7249) · [Before (L274-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L274-L278)

```diff
-       frame(zz, uz) {
-         var bz;
-         let iz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this.stopped) return !1;
-         if (!this.writePendingInput()) return !1;
+       writeWindowTop() {
+         this.windowTopStale = !1;
+         const qq = this.records;
+         let Eq = -1 / 0;
+         for (let Yq = 0; Yq < qq.length; Yq += 4) {
+           const gq = 255 & qq[Yq + 3];
+           gq !== zE && gq !== SE || !this.inRadius(qq[Yq], qq[Yq + 1], qq[Yq + 2]) || (Eq = Math.max(Eq, qq[Yq + 1] * bE + (qq[Yq + 3] >>> 8)))
+         }
+         const gq = Eq === -1 / 0 ? 1 : Eq + RE;
+         gq !== this.windowTop[0] && (this.windowTop[0] = gq, this.writeVoxels(kE, this.windowTop))
+       }
+       follow(qq) {
+         const Eq = this.eyeChunk,
+           [gq, Yq, lq] = iE;
+         for (let mq = -lq; mq <= lq; mq++)
+           for (let lq = -Yq; lq <= Yq; lq++)
+ ... (109 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L280-L293` → after: `L7251-L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7251-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7251-L7266) · [Before (L280-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L280-L293)

```diff
-           input: lz,
-           net: Mz,
-           worker: tz,
-           cmd: Hz
-         } = this.rings, Oz = Mz.cursor, pz = uz && !this.drawsHeld;
-         let Kz = Ez.H.Fatal;
-         const wz = Hz.cursor;
-         let fz = null;
-         try {
-           const uz = (pz ? Ez.Z.Draws : 0) | (iz ? Ez.Z.NetAll : 0);
-           Kz = (0, Fz.d)((() => this.core.frame(zz, lz.cursor, Mz.cursor, tz.cursor, uz, wz)))
-         } catch (mz) {
-           fz = {
-             error: mz
+           bricks: Yq,
+           cells: lq,
+           special: Oq
+         } = Eq, mq = this.entry;
+         let xq = 0;
+         for (let uq = 0; uq < GE; uq++) xq += Oq[uq];
+         if (0 === xq) return;
+         gq && this.freeCount < xq && this.evictBeyond(qq, xq);
+         const Aq = new Uint32Array(gq ? Math.min(xq, this.freeCount) : 0);
+         let cq = 0;
+         for (let uq = 0; uq < GE; uq++) {
+           if (!Oq[uq]) continue;
+           const gq = 3 * uq;
+           if (cq === Aq.length) {
+             this.dropSpecials(Eq, uq), this.starved[qq] = 1;
+             continue
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L296-L323` → after: `L7276-L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7276-L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7276-L7282) · [Before (L296-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L296-L323)

```diff
-         const sz = null === (bz = this.gameHost) || void 0 === bz ? void 0 : bz.takeFault();
-         this.rings.reset(this.stopped || null !== fz || void 0 !== sz ? Hz.cursor : wz);
-         const rz = null === fz && void 0 === sz ? this.headerView() : null,
-           oz = null === rz ? null : (0, Ez.me)(rz);
-         null !== oz && (this.lastHeader = oz);
-         const xz = null !== oz && Kz !== Ez.H.Fatal,
-           Jz = xz && null !== rz ? rz[Ez.db.NetInKept] : 0,
-           Az = xz && Jz <= Oz && Jz % 4 === 0 ? Jz : null;
-         var Tz, Lz;
-         null !== oz && null !== Az && Kz === Ez.H.Errors && (null === (Tz = (Lz = this.handlers).onErrors) || void 0 === Tz || Tz.call(Lz, oz));
-         const Pz = null === Az ? Uz : this.readEvents(Oz);
-         if (Mz.consume(Oz - (null !== Az && void 0 !== Az ? Az : 0)), this.netKept = null !== Az && void 0 !== Az ? Az : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== fz) return this.crash(Zz, void 0 === sz || sz instanceof nz.b ? fz.error : sz), !1;
-         if (void 0 !== sz || null === oz) return this.crashOn(Zz, sz), !1;
-         const Gz = this.headerView()[Ez.db.FrameDraw];
-         if (this.lastFrameKind = (0, dz.h)(pz, Gz), Kz === Ez.H.Fatal) return this.crash(Rz, null), !1;
-         if (null === Az) return this.crash(Xz, `the core kept ${Jz} of ${Oz} net-in bytes`), !1;
- ... (12 more removed lines; see GitHub link above)
+         Aq.length > 0 && (this.slotPool[qq] = Aq)
+       }
+       evictBeyond(qq, Eq) {
+         const gq = this.slotDistance(qq),
+           Yq = [];
+         for (let lq = 0; lq < fE; lq++) lq !== qq && this.slotPool[lq] && this.slotDistance(lq) > gq && Yq.push(lq);
+         Yq.sort(((qq, Eq) => this.slotDistance(Eq) - this.slotDistance(qq)));
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L325-L331` → after: `L7284-L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7284-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7284-L7286) · [Before (L325-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L325-L331)

```diff
-           if (this.stopped) return !1;
-           try {
-             var az, Vz;
-             null === (az = (Vz = this.handlers).onNetEvent) || void 0 === az || az.call(Vz, Ez)
-           } catch (mz) {
-             return this.crashOn(vz, mz), !1
-           }
+           if (this.freeCount >= Eq) return;
+           const qq = this.slotChunk[lq];
+           qq && !qq.bM && qq.dW && (qq.ba === this.slotVersion[lq] || YA(qq)) && this.encodeSlot(lq, this.victimScratch, !1)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L335-L343` → after: `L7289-L7422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7289-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7289-L7422) · [Before (L335-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L335-L343)

```diff
-       handEnvEvents() {
-         for (const iz of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var zz, uz;
-             null === (zz = (uz = this.handlers).onReconnectGrace) || void 0 === zz || zz.call(uz, iz)
-           } catch (nz) {
-             return this.crashOn(vz, nz), !1
-           }
+       dropSpecials(qq, Eq) {
+         this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
+         const gq = 3 * Eq;
+         for (let Yq = 0; Yq < pE; Yq++) qq.cells[Eq * pE + Yq] !== KE && (qq.bricks[gq + (Yq >>> 5)] &= ~(1 << (31 & Yq)))
+       }
+     }
+     var mA = gq(37481);
+     class xA {
+       constructor(qq) {
+         this.device = qq, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Vg, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.kB = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = qq.createBuffer( … [truncated]
+           label: "sun-shadow-entities",
+           size: 589828,
+           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         }), this.gridBuffer = qq.createBuffer({
+           label: "sun-shadow-entity-grids",
+           size: 16777216,
+ ... (118 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L345-L351` → after: `L7424-L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7424-L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7424-L7505) · [Before (L345-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L345-L351)

```diff
-         for (const iz of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
-             var bz, Ez;
-             null === (bz = (Ez = this.handlers).onEnvEvent) || void 0 === bz || bz.call(Ez, iz)
-           } catch (nz) {
-             return this.crashOn(xz, nz), !1
+       }
+     }
+     const AA = Math.cos(1 * Math.PI / 180);
+ 
+     function cA(qq, Eq) {
+       return qq[0] * Eq[0] + qq[1] * Eq[1] + qq[2] * Eq[2] < AA
+     }
+     async function uA(qq) {
+       const {
+         pixels: Eq,
+         width: gq,
+         height: Yq
+       } = await pl(qq), lq = new Uint8Array(gq * Yq);
+       for (let Oq = 0; Oq < lq.length; Oq++) lq[Oq] = Eq[4 * Oq + 3];
+       return {
+         width: gq,
+ ... (66 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L354` → after: `L7615-L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7615-L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7615-L7715) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L354)

```diff
-         return !this.stopped
+         if (Oq ? this.swept += Pg.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, lq.push(...(0, Pg.D)(qq, this.slice)), this.slice = (this.slice + 1) % Pg.j, this.swept++), 0 === lq.len … [truncated]
+         const Bq = (0, Pg.E)(this.workData, Eq, lq);
+         this.device.queue.writeBuffer(this.work, 0, this.workData);
+         const Wq = this.device.createCommandEncoder({
+             label: "sun-shadow-volume"
+           }),
+           Nq = Wq.beginComputePass({
+             label: "sun-shadow-volume"
+           });
+         Nq.setPipeline(Yq.pipeline), Nq.setBindGroup(tg.group, Yq.bindGroup), Nq.dispatchWorkgroups(Math.ceil(Bq / Pg.n)), Nq.end(), this.device.queue.submit([Wq.finish()])
+       }
+       buildVolumePass() {
+         if (this.volumePass || this.volumePassStarted) return this.volumePass;
+         this.volumePassStarted = !0;
+         const qq = tg,
+           Eq = GPUShaderStage.COMPUTE,
+ ... (85 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L356-L357` → after: `L7717-L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7717-L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7717-L7732) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L356-L357)

```diff
-       setEventWalker(zz) {
-         this.eventWalker = zz
+       start(qq) {
+         if (this.window) return this.window;
+         const Eq = (qq, Eq) => {
+           this.written = !0, this.device.queue.writeBuffer(this.special, 4 * qq, Eq)
+         };
+         this.casters = new EA(((qq, gq) => {
+           this.castersWritten = !0, Eq(qq, gq)
+         }), uA);
+         const gq = new OA(this.casters, ((qq, Eq) => {
+           this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * qq, Eq)
+         }), Eq);
+         return gq.encoded = qq => {
+           this.markStale(qq)
+         }, qq.kB.on("chunkAdded", (qq => {
+           gq.chunkAdded(qq)
+         })), this.window = gq, gq
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L359-L360` → after: `L7734-L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7734-L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7734-L7751) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L359-L360)

```diff
-       writePendingInput() {
-         if (this.stopped) return !1;
+     }
+     var WA = gq(38665),
+       NA = gq(38671);
+     const aA = 0,
+       VA = 3,
+       dA = 4,
+       jA = 5;
+ 
+     function HA(qq, Eq, gq, Yq) {
+       qq.drawOffset(Eq, Yq + aA), Eq[Yq + VA] = qq.drawTime(), gq[Yq + dA] = qq.ring.drawStart(), gq[Yq + jA] = qq.ring.drawCount()
+     }
+     const oA = `\n${VY}\n\nconst MAX_STOPS = ${NA.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${NA.b/4}>,\n\tcolor1: array<vec4f, ${NA.b}>,\n\t … [truncated]
+     var PA = gq(41355);
+     class QA {
+       constructor(qq, Eq, gq, Yq) {
+         this.device = qq, this.system = Eq, this.frameIndex = gq, this.bindings = Yq, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, PA.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
+ ... (2 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L362-L374` → after: `L7753-L7790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7753-L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7753-L7790) · [Before (L362-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L362-L374)

```diff
-           input: zz
-         } = this.rings;
-         try {
-           const uz = this.unsentUiPrefs;
-           uz && zz.writeRecord(Ez.pb.UiPrefs, 0, uz.nametagCutDistance, 0, (0, Ez.pe)(uz)) && (this.unsentUiPrefs = null);
-           const bz = this.unsentEnvPrefs;
-           bz && zz.writeRecord(Ez.pb.EnvPrefs, (0, Ez.Wd)(bz), bz.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
-           const nz = this.unsentLookPrefs;
-           nz && zz.writeRecord(Ez.pb.Sensitivity, 0, nz.mouse, nz.touch, (0, pz.i)(nz.fovPercent)) && (this.unsentLookPrefs = null);
-           let iz = 0;
-           for (const {
-               aux: Ez,
-               payload: lz
+           name: lq
+         } = Eq;
+         this.ring = qq.createBuffer({
+           label: `particles-${lq}`,
+           size: Eq.ring.records.byteLength,
+           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         }), this.uniforms = qq.createBuffer({
+           label: `particles-uniforms-${lq}`,
+           size: 4 * NA.r,
+           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
+         })
+       }
+       writeUniforms(qq) {
+         const Eq = (0, PA.b)(this.system, this.uniformBits, qq);
+         Eq && (this.uniformBits = Eq, this.device.queue.writeBuffer(this.uniforms, 0, Eq))
+       }
+ ... (22 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L376-L379` → after: `L7792-L7795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7792-L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7792-L7795) · [Before (L376-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L376-L379)

```diff
-             of this.unsentOptions) {
-             if (!zz.writeOptions(Ez, lz)) {
-               if (zz.cursor > 0) break;
-               this.optionsDropped++
+           }, {
+             binding: 1,
+             resource: {
+               buffer: this.ring
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L381-L385` → after: `L7797-L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7797-L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7797-L7904) · [Before (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L381-L385)

```diff
-             iz++
-           }
-           iz > 0 && this.unsentOptions.splice(0, iz)
-         } catch (uz) {
-           return this.crash(wz, uz), !1
+           }, {
+             binding: 2,
+             resource: Eq.sampler
+           }, {
+             binding: 3,
+             resource: Eq.view
+           }, {
+             binding: 4,
+             resource: this.bindings.rampSampler
+           }, {
+             binding: 5,
+             resource: gq
+           }]
+         }))
+       }
+       destroy() {
+ ... (92 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L389-L390` → after: `L7907-L7908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7907-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7907-L7908) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L389-L390)

```diff
-       setHoldDraws(zz) {
-         this.drawsHeld = zz
+       get tlq() {
+         return this.systems.size
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L392-L394` → after: `L7910-L7932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7910-L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7910-L7932) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L392-L394)

```diff
-       setUiPrefs(zz) {
-         this.unsentUiPrefs = {
-           ...zz
+       reset() {
+         for (const qq of this.systems.keys()) qq.reset()
+       }
+       describePendingWork() {
+         return (0, WA.g)(this.systems.keys(), "Lite")
+       }
+       Fk(qq, Eq) {
+         const gq = new WA.d(qq, Eq, this);
+         return this.systems.set(gq, new QA(this.device, gq, this.allocateFrameIndex(), this.bindings)), gq
+       }
+       aqq(qq, Eq) {
+         for (const gq of this.systems.keys()) gq.aqq(qq, Eq)
+       }
+       canDraw(qq) {
+         const Eq = this.systems.get(qq),
+           gq = qq.texture ? this.resources.boundTexture(qq.texture) : null;
+ ... (7 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L397-L399` → after: `L7936-L7953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7936-L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7936-L7953) · [Before (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L397-L399)

```diff
-       setEnvPrefs(zz) {
-         this.unsentEnvPrefs = {
-           ...zz
+       disposeStopped(qq) {
+         qq.dispose()
+       }
+       remove(qq) {
+         const Eq = this.systems.get(qq);
+         Eq && (this.systems.delete(qq), Eq.destroy(), this.freeFrameIndices.push(Eq.frameIndex))
+       }
+       prepare(qq) {
+         const Eq = qq.animationRatio || 1;
+         xE(this.renderable._worldCenter, qq, YE), this.preparedTarget = this.target, this.draws.length = 0;
+         let gq = 0;
+         for (const Yq of this.systems.values()) {
+           const qq = Yq.system;
+           if (!qq.animateIfActive(Eq)) continue;
+           if (qq.ring.takeUploads(Yq.upload), !qq.hasLiveParticles() || 0 === Yq.pipelines.length) continue;
+           Yq.writeUniforms(this.warnOnce), Yq.bind();
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L402-L404` → after: `L7957-L7962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7957-L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7957-L7962) · [Before (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L402-L404)

```diff
-       setLookPrefs(zz) {
-         this.unsentLookPrefs = {
-           ...zz
+       draw(qq) {
+         let Eq = 0,
+           gq = null;
+         for (const Yq of this.draws) {
+           qq.setBindGroup(1, Yq.bindGroup), qq.setBindGroup(2, this.frameBindGroup, [256 * Yq.frameIndex]);
+           for (const lq of Yq.pipelines) lq !== gq && (qq.setPipeline(lq), gq = lq), qq.draw(4, Yq.count), Eq++
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L407-L411` → after: `L7966-L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7966-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7966-L7970) · [Before (L407-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L407-L411)

```diff
-       queueOptions(zz, uz) {
-         return !this.isStopped && (uz.byteLength > Ez.Vb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
-           aux: zz,
-           payload: uz
-         }), !0))
+       bindTarget(qq) {
+         this.target = qq;
+         const Eq = `${qq._colorFormat}|${qq._depthStencilFormat}|${qq._depthCompare}|${qq._sampleCount}`;
+         let gq = this.pipelines.get(Eq);
+         gq || (gq = new Map, this.pipelines.set(Eq, gq)), this.targetPipelines = gq
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L413-L414` → after: `L7972-L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR7972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L7972-L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L7972-L8021) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L413-L414)

```diff
-       setChunkCap(zz) {
-         return this.callCore("setChunkCap", null, (uz => uz.Kiz(zz)))
+       pipelineFor(qq) {
+         var Eq;
+         const gq = this.targetPipelines,
+           Yq = gq.get(qq);
+         if (void 0 !== Yq) return Yq;
+         gq.set(qq, null);
+         const lq = this.target,
+           Oq = qq === bl.d,
+           mq = null !== (Eq = lq._depthCompare) && void 0 !== Eq ? Eq : gE;
+         return this.device.createRenderPipelineAsync({
+           label: `particles-${qq}`,
+           layout: this.pipelineLayout,
+           vertex: {
+             module: this.module,
+             entryPoint: "mainVertex"
+           },
+ ... (34 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L416-L418` → after: `L8023-L8028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8023-L8028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8023-L8028) · [Before (L416-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L416-L418)

```diff
-       shedMemory(zz) {
-         const uz = this.callCore("shedMemory", null, (uz => uz.Niz(zz)));
-         return 0 === uz ? null : uz
+       createFrameBuffer() {
+         return this.device.createBuffer({
+           label: "particles-frames",
+           size: this.frameData.byteLength,
+           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
+         })
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L420-L422` → after: `L8030-L8041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8030-L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8030-L8041) · [Before (L420-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L420-L422)

```diff
-       addDistanceInUse() {
-         const zz = this.callCore("addDistanceInUse", null, (zz => zz.Pnz()));
-         return 0 === zz ? null : zz
+       createFrameBindGroup() {
+         return this.device.createBindGroup({
+           label: "particles-frames",
+           layout: this.frameLayout,
+           entries: [{
+             binding: 0,
+             resource: {
+               buffer: this.frameBuffer,
+               size: 32
+             }
+           }]
+         })
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L424-L425` → after: `L8043-L8053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8043-L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8043-L8053) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L424-L425)

```diff
-       setChunkAddDistance(zz, uz) {
-         return this.callCore("setChunkAddDistance", !1, (bz => bz.Riz(zz, uz)))
+     }
+     class tA {
+       constructor(qq, Eq, gq, Yq, lq) {
+         this.lite = qq, this.canvas = Eq, this.info = gq, this.resources = lq, this.vYq = !1, this.needPOTTextures = !1, this.J_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
+           reset: () => {
+             this.lastFrameTime = null
+           }
+         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Eq.width, this.renderHeight = Eq.height, this.caps = {
+           maxTextureSize: Yq.maxTextureDimension2D,
+           texture2DArrayMaxLayerCount: Yq.maxTextureArrayLayers
+         }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L427-L428` → after: `L8055-L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8055-L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8055-L8056) · [Before (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L427-L428)

```diff
-       setGameHost(zz) {
-         return this.callCore("setGameHost", !1, (uz => (uz.Dnz(zz), this.gameHost = zz, !0)))
+       getCaps() {
+         return this.caps
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L430-L431` → after: `L8058-L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8058-L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8058-L8059) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L430-L431)

```diff
-       setAntiCheatProbes(zz) {
-         return this.callCore("setAntiCheatProbes", !1, (uz => uz.Fiz(zz)))
+       getRenderWidth() {
+         return this.renderWidth
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L433-L436` → after: `L8061-L8062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8061-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8061-L8062) · [Before (L433-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L433-L436)

```diff
-       setAmbientOcclusion(zz) {
-         this.callCore("setAmbientOcclusion", void 0, (uz => {
-           uz.diz(zz)
-         }))
+       getRenderHeight() {
+         return this.renderHeight
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L438-L441` → after: `L8064-L8065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8064-L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8064-L8065) · [Before (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L438-L441)

```diff
-       setPoseLod(zz) {
-         this.callCore("setPoseLod", void 0, (uz => {
-           uz.Xiz(zz)
-         }))
+       getHardwareScalingLevel() {
+         return 1
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L443-L446` → after: `L8067-L8086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8067-L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8067-L8086) · [Before (L443-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L443-L446)

```diff
-       setDebugLog(zz, uz) {
-         this.callCore(cz, void 0, (bz => {
-           bz.NK(zz, uz)
-         }))
+       setSize(qq, Eq) {
+         if (this.renderWidth === qq && this.renderHeight === Eq) return !1;
+         const gq = this.renderWidth,
+           Yq = this.renderHeight;
+         this.renderWidth = qq, this.renderHeight = Eq;
+         try {
+           (0, Jq.r)(this.lite, qq, Eq)
+         } catch (lq) {
+           if (lq instanceof DOMException && "InvalidStateError" === lq.name) {
+             this.renderWidth = gq, this.renderHeight = Yq;
+             try {
+               (0, Jq.r)(this.lite, gq, Yq)
+             } catch {
+               this.canvas.width = gq, this.canvas.height = Yq
+             }
+             return console.warn("WebGPU could not allocate render targets for resize", qq, Eq, lq.message), !1
+ ... (4 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L448-L449` → after: `L8088-L8090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8088-L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8088-L8090) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L448-L449)

```diff
-       takeDebugLog(zz) {
-         return this.callCore(cz, [], (uz => uz.vK(zz)))
+       resize() {}
+       getRenderingCanvas() {
+         return this.canvas
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L451-L452` → after: `L8092-L8093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8092-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8092-L8093) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L451-L452)

```diff
-       setTextureLayers(zz) {
-         return this.callCore("setTextureLayers", !1, (uz => uz.oiz(zz)))
+       getInfo() {
+         return this.info
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L454-L460` → after: `L8095-L8097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8095-L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8095-L8097) · [Before (L454-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L454-L460)

```diff
-       setBlockColours(zz) {
-         let {
-           blocks: uz,
-           counts: bz,
-           values: Ez
-         } = zz;
-         return this.callCore("setBlockColours", !1, (zz => zz.dbz(uz, bz, Ez)))
+       Qr() {
+         const qq = performance.now();
+         this.deltaTime = null === this.lastFrameTime ? 0 : qq - this.lastFrameTime, this.lastFrameTime = qq
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L462-L463` → after: `L8099-L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8099-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8099-L8100) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L462-L463)

```diff
-       terrainTextureNames() {
-         return this.callCore(gz, [], (zz => zz.Tiz()))
+       getDeltaTime() {
+         return this.deltaTime
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L465-L466` → after: `L8102-L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8102-L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8102-L8104) · [Before (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L465-L466)

```diff
-       setTerrainTextures(zz, uz, bz, Ez) {
-         return this.callCore(gz, !1, (nz => nz.riz(zz, bz, uz, Ez)))
+       createCanvas(qq, Eq) {
+         const gq = document.createElement("canvas");
+         return gq.width = qq, gq.height = Eq, gq
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L468-L472` → after: `L8106-L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8106-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8106-L8108) · [Before (L468-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L468-L472)

```diff
-       setShaderPack(zz, uz, bz, Ez, nz, iz) {
-         return this.callCore("setShaderPack", !1, (lz => {
-           var Mz, tz;
-           return null !== (Mz = null === (tz = lz.xbz) || void 0 === tz ? void 0 : tz.call(lz, zz, uz, bz, Ez, nz, iz)) && void 0 !== Mz && Mz
-         }))
+       U_(qq, Eq) {
+         var gq;
+         return null !== (gq = this.resources.U_.get(qq)) && void 0 !== gq ? gq : new Fq(this.resources, qq, Eq)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L474-L478` → after: `L8110-L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8110-L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8110-L8111) · [Before (L474-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L474-L478)

```diff
-       sunShadowWantedTextures() {
-         return this.callCore(Sz, null, (zz => {
-           var uz, bz;
-           return null !== (uz = null === (bz = zz.viz) || void 0 === bz ? void 0 : bz.call(zz)) && void 0 !== uz ? uz : null
-         }))
+       atlasArray(qq, Eq, gq) {
+         return this.resources.atlasArray(qq, Eq, gq)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L480-L484` → after: `L8113-L8116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8113-L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8113-L8116) · [Before (L480-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L480-L484)

```diff
-       setSunShadowTexture(zz, uz, bz, Ez, nz) {
-         this.callCore(Sz, void 0, (iz => {
-           var lz;
-           null === (lz = iz.siz) || void 0 === lz || lz.call(iz, zz, uz, bz, Ez, nz)
-         }))
+     }
+     class rA {
+       constructor() {
+         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L486-L490` → after: `L8118-L8122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8118-L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8118-L8122) · [Before (L486-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L486-L490)

```diff
-       takeSunShadowWarnings() {
-         return this.callCore(Sz, [], (zz => {
-           var uz, bz;
-           return null !== (uz = null === (bz = zz.Jiz) || void 0 === bz ? void 0 : bz.call(zz)) && void 0 !== uz ? uz : []
-         }))
+       copyFromView(qq) {
+         this.fov = qq.fov, this.nearPlane = qq.near, this.farPlane = qq.far;
+         const Eq = qq.worldMatrix;
+         for (let gq = 0; gq < 16; gq++)
+           if (this.worldMatrix[gq] !== Eq[gq]) return this.worldMatrix.set(Eq), void this.worldMatrixVersion++
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L492-L496` → after: `L8124-L8136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8124-L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8124-L8136) · [Before (L492-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L492-L496)

```diff
-       sunShadowsHeld() {
-         return this.callCore(Sz, null, (zz => {
-           var uz, bz;
-           return null !== (uz = null === (bz = zz.xiz) || void 0 === bz ? void 0 : bz.call(zz)) && void 0 !== uz ? uz : null
-         }))
+     }
+     class vA {
+       constructor(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
+         let uq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
+         this.engine = qq, this.PV = Eq, this.sceneTask = gq, this.gpuDevice = Yq, this.terrain = lq, this.meshes = Oq, this.particles = mq, this.resources = xq, this.sunShadow = uq, this.cgq = void 0, this.backendName = "WebGPU (Lite)", this.W4 = void 0, this.modelMeshes = void 0 … [truncated]
+           Fc: qq => {
+             fq(qq) && xq.textureSlot(qq)
+           },
+           loaded: qq => fq(qq) ? xq.textureLoaded(qq) : null,
+           canvasUpdated: (qq, Eq, gq) => {
+             fq(qq) && xq.canvasUpdated(qq, Eq, gq)
+           }
+         }), this.W4 = Oq.W4, this.modelMeshes = Oq.modelMeshes, Eq.camera = this.camera
```
