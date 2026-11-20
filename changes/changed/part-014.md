# Changed — Bundle Modifications Report (Part 014 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `14 / 58` (**335** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 69. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1242-L1243` → after: `L1339-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1339-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1339-L1458) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1242-L1243)

```diff
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
+     }
+ 
+     function Oq(qq, Eq, gq) {
+       try {
+         if (qq()) return Eq(), !0
+       } catch (Yq) {
+         return gq?.(Yq), !0
+       }
+       return !1
+     }
+     const mq = function(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+         mq = arguments.length > 6 ? arguments[6] : void 0;
+       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Oq(qq, Eq, gq)) return null;
+       const xq = setInterval((() => {
+ ... (104 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1245-L1246` → after: `L1460-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1460-L1461) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1245-L1246)

```diff
-       getClassName() {
-         return "Size"
+       get response() {
+         return this._xhr.response
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1248-L1250` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1463-L1464) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1248-L1250)

```diff
-       getHashCode() {
-         let zz = 0 | this.width;
-         return zz = 397 * zz ^ this.height, zz
+       get responseURL() {
+         return this._xhr.responseURL
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1252-L1253` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1466-L1467) · [Before (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1252-L1253)

```diff
-       euz(zz) {
-         this.width = zz.width, this.height = zz.height
+       get responseText() {
+         return this._xhr.responseText
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1255-L1256` → after: `L1469-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1469-L1470) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1255-L1256)

```diff
-       P_(zz, uz) {
-         return this.width = zz, this.height = uz, this
+       get responseType() {
+         return this._xhr.responseType
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1258-L1259` → after: `L1472-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1472-L1473) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1258-L1259)

```diff
-       set(zz, uz) {
-         return this.P_(zz, uz)
+       set responseType(qq) {
+         this._xhr.responseType = qq
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1261-L1262` → after: `L1475-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1475-L1476) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1261-L1262)

```diff
-       multiplyByFloats(zz, uz) {
-         return new Ez(this.width * zz, this.height * uz)
+       get timeout() {
+         return this._xhr.timeout
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1264-L1265` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1478-L1479) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1264-L1265)

```diff
-       clone() {
-         return new Ez(this.width, this.height)
+       set timeout(qq) {
+         this._xhr.timeout = qq
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1267-L1268` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1481-L1482) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1267-L1268)

```diff
-       equals(zz) {
-         return !!zz && (this.width === zz.width && this.height === zz.height)
+       addEventListener(qq, Eq, gq) {
+         this._xhr.addEventListener(qq, Eq, gq)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1270-L1271` → after: `L1484-L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1484-L1485) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1270-L1271)

```diff
-       get surface() {
-         return this.width * this.height
+       removeEventListener(qq, Eq, gq) {
+         this._xhr.removeEventListener(qq, Eq, gq)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1273-L1274` → after: `L1487-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1487-L1488) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1273-L1274)

```diff
-       static Zero() {
-         return new Ez(0, 0)
+       abort() {
+         this._xhr.abort()
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1276-L1277` → after: `L1490-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1490-L1491) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1276-L1277)

```diff
-       add(zz) {
-         return new Ez(this.width + zz.width, this.height + zz.height)
+       send(qq) {
+         this._xhr.send(qq)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1279-L1280` → after: `L1493-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1493-L1499) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1279-L1280)

```diff
-       subtract(zz) {
-         return new Ez(this.width - zz.width, this.height - zz.height)
+       open(qq, Eq, gq) {
+         const {
+           url: lq,
+           headers: Oq
+         } = Yq._CollectCustomizations(Eq, gq);
+         this._requestURL = Yq._CleanUrl(lq), this._xhr.open(qq, this._requestURL, !0);
+         for (const Yq in Oq) this._xhr.setRequestHeader(Yq, Oq[Yq])
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1282-L1283` → after: `L1501-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1501-L1502) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1282-L1283)

```diff
-       scale(zz) {
-         return new Ez(this.width * zz, this.height * zz)
+       setRequestHeader(qq, Eq) {
+         this._xhr.setRequestHeader(qq, Eq)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1285-L1288` → after: `L1504-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/246.js#L1504-L1505) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/246.js#L1285-L1288)

```diff
-       static Lerp(zz, uz, bz) {
-         const nz = zz.width + (uz.width - zz.width) * bz,
-           iz = zz.height + (uz.height - zz.height) * bz;
-         return new Ez(nz, iz)
+       getResponseHeader(qq) {
+         return this._xhr.getResponseHeader(qq)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/247.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/247.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L4)

```diff
-   39402: (zz, uz, bz) => {
+   39853: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L7` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L88-L89) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L7)

```diff
-       i: () => Mz
+       f: () => jq,
+       h: () => Hq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L9-L12` → after: `L91-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L91-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L91-L103) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L9-L12)

```diff
-     var Ez = bz(38060),
-       nz = bz(39182),
-       iz = bz(39376),
-       lz = {};
+     var Yq, lq = gq(37156),
+       Oq = gq(39626),
+       mq = gq(38653),
+       xq = gq(38649),
+       Aq = gq(39662),
+       cq = gq(39636),
+       uq = gq(39801),
+       Bq = gq(37153),
+       Wq = gq(39799),
+       Nq = gq(39644),
+       aq = gq(39853),
+       Vq = gq(37872),
+       dq = gq(39696);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L14-L15` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L105-L106) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L14-L15)

```diff
-       constructor(zz) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = zz, this.checkInputs = () => {}
+       static get BaseUrl() {
+         return Wq.i.BaseUrl
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L17-L19` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L108-L109) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L17-L19)

```diff
-       add(zz) {
-         const uz = zz.getSimpleName();
-         this.attached[uz] ? Ez.e.Warn("camera input of type " + uz + " already exists on camera") : (this.attached[uz] = zz, zz.camera = this.camera, zz.checkInputs && (this.checkInputs = this._addCheckInputs(zz.checkInputs.bind(zz))), this.attachedToElement && zz.attachControl(t … [truncated]
+       static set BaseUrl(qq) {
+         Wq.i.BaseUrl = qq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L21-L25` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L111-L112) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L21-L25)

```diff
-       remove(zz) {
-         for (const uz in this.attached) {
-           const bz = this.attached[uz];
-           if (bz === zz) return bz.detachControl(), bz.camera = null, delete this.attached[uz], void this.rebuildInputCheck()
-         }
+       static get CleanUrl() {
+         return Wq.i.CleanUrl
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L27-L31` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L114-L115) · [Before (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L27-L31)

```diff
-       removeByType(zz) {
-         for (const uz in this.attached) {
-           const bz = this.attached[uz];
-           bz.getClassName() === zz && (bz.detachControl(), bz.camera = null, delete this.attached[uz], this.rebuildInputCheck())
-         }
+       static set CleanUrl(qq) {
+         Wq.i.CleanUrl = qq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L33-L37` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L117-L118) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L33-L37)

```diff
-       _addCheckInputs(zz) {
-         const uz = this.checkInputs;
-         return () => {
-           uz(), zz()
-         }
+       static IsAbsoluteUrl(qq) {
+         return 0 === qq.indexOf("//") || -1 !== qq.indexOf("://") && (-1 !== qq.indexOf(".") && (-1 !== qq.indexOf("/") && (!(qq.indexOf(":") > qq.indexOf("/")) && (qq.indexOf("://") < qq.indexOf(".") || (0 === qq.indexOf("data:") || 0 === qq.indexOf("blob:"))))))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L39-L40` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L120-L121) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L39-L40)

```diff
-       attachInput(zz) {
-         this.attachedToElement && zz.attachControl(this.noPreventDefault)
+       static set ScriptBaseUrl(qq) {
+         Wq.i.ScriptBaseUrl = qq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L42-L47` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L123-L124) · [Before (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L42-L47)

```diff
-       attachElement() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           zz = !iz.d.ForceAttachControlToAlwaysPreventDefault && zz, this.attachedToElement = !0, this.noPreventDefault = zz;
-           for (const uz in this.attached) this.attached[uz].attachControl(zz)
-         }
+       static get ScriptBaseUrl() {
+         return Wq.i.ScriptBaseUrl
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L49-L52` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L126-L127) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L49-L52)

```diff
-       detachElement() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const uz in this.attached) this.attached[uz].detachControl(), zz && (this.attached[uz].camera = null);
-         this.attachedToElement = !1
+       static set CDNBaseUrl(qq) {
+         Yq.ScriptBaseUrl = qq, Yq.AssetBaseUrl = qq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L54-L59` → after: `L129-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L129-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L129-L160) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L54-L59)

```diff
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const zz in this.attached) {
-           const uz = this.attached[zz];
-           uz.checkInputs && (this.checkInputs = this._addCheckInputs(uz.checkInputs.bind(uz)))
-         }
+       static set ScriptPreprocessUrl(qq) {
+         Wq.i.ScriptPreprocessUrl = qq
+       }
+       static get ScriptPreprocessUrl() {
+         return Wq.i.ScriptPreprocessUrl
+       }
+       static get DefaultRetryStrategy() {
+         return Wq.i.DefaultRetryStrategy
+       }
+       static set DefaultRetryStrategy(qq) {
+         Wq.i.DefaultRetryStrategy = qq
+       }
+       static get CorsBehavior() {
+         return Wq.i.CorsBehavior
+       }
+       static set CorsBehavior(qq) {
+ ... (16 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L61-L62` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L162-L163) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L61-L62)

```diff
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       static set fallbackTexture(qq) {
+         Bq.b.FallbackTexture = qq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L64-L69` → after: `L165-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L165-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L165-L243) · [Before (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L64-L69)

```diff
-       serialize(zz) {
-         const uz = {};
-         for (const bz in this.attached) {
-           const zz = this.attached[bz],
-             Ez = nz.e.Serialize(zz);
-           uz[zz.getClassName()] = Ez
+       static FetchToRef(qq, Eq, gq, Yq, lq, Oq) {
+         const mq = 4 * ((Math.abs(qq) * gq % gq | 0) + (Math.abs(Eq) * Yq % Yq | 0) * gq);
+         Oq.r = lq[mq] / 255, Oq.g = lq[mq + 1] / 255, Oq.b = lq[mq + 2] / 255, Oq.a = lq[mq + 3] / 255
+       }
+       static Mix(qq, Eq, gq) {
+         return 0
+       }
+       static Instantiate(qq) {
+         return aq.d.Instantiate(qq)
+       }
+       static SetImmediate(qq) {
+         Nq.c.SetImmediate(qq)
+       }
+       static IsExponentOfTwo(qq) {
+         return !0
+       }
+ ... (63 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L71-L92` → after: `L245-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L245-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L245-L257) · [Before (L71-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L71-L92)

```diff
-         zz.inputsmgr = uz
-       }
-       parse(zz) {
-         const uz = zz.inputsmgr;
-         if (uz) {
-           this.clear();
-           for (const zz in uz) {
-             const bz = lz[zz];
-             if (bz) {
-               const Ez = uz[zz],
-                 iz = nz.e.Parse((() => new bz), Ez, null);
-               this.add(iz)
-             }
-           }
-         } else
-           for (const bz in this.attached) {
- ... (6 more removed lines; see GitHub link above)
+         return qq
+       }
+       static GetBabylonScriptURL(qq, Eq) {
+         if (!qq) return "";
+         if (qq.startsWith(Yq._DefaultCdnUrl))
+           if (Yq.ScriptBaseUrl) {
+             const Eq = Yq.ScriptBaseUrl.endsWith("/") ? Yq.ScriptBaseUrl.slice(0, -1) : Yq.ScriptBaseUrl;
+             qq = qq.replace(Yq._DefaultCdnUrl, Eq)
+           } else if (Yq._CdnVersion) {
+           const Eq = `${Yq._DefaultCdnUrl}/v${Yq._CdnVersion}`;
+           qq.startsWith(Eq) || (qq = qq.replace(Yq._DefaultCdnUrl, Eq))
+         }
+         return qq = Yq.ScriptPreprocessUrl(qq), Eq && !Yq.IsAbsoluteUrl(qq) && (qq = Yq.GetAbsoluteUrl(qq)), qq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L94-L246` → after: `L259-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L259-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L259-L269) · [Before (L94-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L94-L246)

```diff
-     }
-   },
-   40334: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => fz
-     });
-     var Ez = bz(39170),
-       nz = bz(39172),
-       iz = bz(39071),
-       lz = bz(36519),
-       Mz = bz(39167),
-       tz = bz(39636),
-       Hz = bz(36564),
-       Oz = bz(36547),
-       pz = bz(39182),
-       dz = bz(39011),
- ... (137 more removed lines; see GitHub link above)
+       static LoadBabylonScript(qq, Eq, gq, lq) {
+         qq = Yq.GetBabylonScriptURL(qq), Yq.LoadScript(qq, Eq, gq)
+       }
+       static async LoadBabylonScriptAsync(qq) {
+         return qq = Yq.GetBabylonScriptURL(qq), await Yq.LoadScriptAsync(qq)
+       }
+       static _LoadScriptNative(qq, Eq, gq, lq) {
+         if (_native) {
+           if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
+             const qq = "Loading a script as an ES module is not supported in Babylon Native";
+             return void gq?.(qq, new Error(qq))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L248-L266` → after: `L271-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L271-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L271-L275) · [Before (L248-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L248-L266)

```diff
-           updateURL(zz) {
-             let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-               iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-               Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               tz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
-             this.name && !this.name.startsWith("data:") || (this.name = zz), this.url = zz, uz && (this._forcedExtension = uz);
-             const Hz = zz.lastIndexOf("."),
-               Oz = uz || (Hz > -1 ? zz.substring(Hz).toLowerCase() : ""),
-               pz = 0 === Oz.indexOf(".dds"),
-               dz = 0 === Oz.indexOf(".env"),
-               Fz = 0 === Oz.indexOf(".basis");
-             if (dz ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = Ez, Ez && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), Mz) this._files = Mz;
- ... (3 more removed lines; see GitHub link above)
+           Yq.LoadFile(qq, (qq => {
+             try {
+               Function(qq).apply(null), Eq && Eq()
+             } catch (Yq) {
+               gq && gq("LoadScript Error", Yq)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L268-L311` → after: `L277-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L277-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L277-L288) · [Before (L268-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L268-L311)

```diff
-             this._buffer = tz, lz ? (this.delayLoadState = 4, this._delayedOnLoad = bz, this._delayedOnError = nz) : this._loadTexture(bz, nz)
-           }
-           delayLoad(zz) {
-             4 === this.delayLoadState && (zz && (this._forcedExtension = zz), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
-           }
-           getReflectionTextureMatrix() {
-             return this._textureMatrix
-           }
-           setReflectionTextureMatrix(zz) {
-             if (zz.updateFlag === this._textureMatrix.updateFlag) return;
-             if (zz.isIdentity() !== this._textureMatrix.isIdentity() && this.XT()?.markAllMaterialsAsDirty(1, (zz => -1 !== zz.getActiveTextures().indexOf(this))), this._textureMatrix = zz, !this.XT()?.useRightHandedSystem) return;
-             const uz = lz.l.ER[0],
-               bz = lz.l.Quaternion[0],
-               Ez = lz.l.ER[1];
-             this._textureMatrix.decompose(uz, bz, Ez), bz.z *= -1, bz.w *= -1, lz.d.ComposeToRef(uz, bz, Ez, this._textureMatrixRefraction)
-           }
- ... (28 more removed lines; see GitHub link above)
+           }), void 0, void 0, !1, ((qq, Eq) => {
+             gq && gq("LoadScript Error", Eq)
+           }))
+         }
+       }
+       static _LoadScriptWeb(qq, Eq, gq, Yq) {
+         let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
+           try {
+             importScripts(qq), Eq && Eq()
+           } catch (Aq) {
+             gq?.(`Unable to load script '${qq}' in worker`, Aq)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L313-L462` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L290) · [Before (L313-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L313-L462)

```diff
-         }, (() => {
-           const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(xz[Symbol.metadata] ?? null) : void 0;
-           uz = [(0, nz.G)()], bz = [(0, nz.D)()], Hz = [(0, nz.D)()], fz = [(0, nz.G)("rotationY")], sz = [(0, nz.G)("files")], rz = [(0, nz.G)("forcedExtension")], oz = [(0, nz.G)("extensions")], Nz = [(0, nz.w)("textureMatrix")], vz = [(0, nz.w)("textureMatrixRefraction")], (0, … [truncated]
-             kind: "getter",
-             name: "boundingBoxSize",
-             static: !1,
-             private: !1,
-             access: {
-               has: zz => "boundingBoxSize" in zz,
-               get: zz => zz.boundingBoxSize
-             },
-             metadata: iz
-           }, null, Jz), (0, Ez.h)(zz, null, fz, {
-             kind: "setter",
-             name: "rotationY",
-             static: !1,
- ... (134 more removed lines; see GitHub link above)
+           return
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L464-L491` → after: `L292-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L292-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L292-L398) · [Before (L464-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L464-L491)

```diff
-       return Ez
-     }
-     sz || (sz = !0, fz.CreateFromImages = rz, fz.CreateFromPrefilteredData = oz, fz.Parse = Nz, tz.e._CubeTextureParser = Nz, (0, Hz.c)("BABYLON.CubeTexture", fz))
-   },
-   40379: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Hz
-     });
-     var Ez = bz(38060),
-       nz = bz(39636),
-       iz = bz(39118),
-       lz = bz(39022),
-       Mz = bz(39011);
-     let tz = !1;
-     class Hz extends nz.e {
-       constructor(zz, uz, bz) {
- ... (12 more removed lines; see GitHub link above)
+         if (!(0, Oq.n)()) return void gq?.(`Cannot load script '${qq}' outside of a window or a worker`);
+         const mq = document.getElementsByTagName("head")[0],
+           xq = document.createElement("script");
+         lq ? (xq.setAttribute("type", "module"), xq.innerText = qq) : (xq.setAttribute("type", "text/javascript"), xq.setAttribute("src", qq)), Yq && (xq.id = Yq), xq.onload = () => {
+           Eq && Eq()
+         }, xq.onerror = Eq => {
+           gq && gq(`Unable to load script '${qq}'`, Eq)
+         }, mq.appendChild(xq)
+       }
+       static async LoadScriptAsync(qq, Eq) {
+         return await new Promise(((gq, Yq) => {
+           this.LoadScript(qq, (() => {
+             gq()
+           }), ((qq, Eq) => {
+             Yq(Eq || new Error(qq))
+           }), Eq)
+ ... (91 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L493-L508` → after: `L400-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L400-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L400-L403) · [Before (L493-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L493-L508)

```diff
-           const lz = this._gl,
-             Mz = lz.TEXTURE_2D,
-             tz = this._bindTextureDirectly(Mz, zz, !0, iz);
-           this._unpackFlipY(void 0 === bz ? zz.invertY : bz), Ez && lz.pixelStorei(lz.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
-           const Hz = this._getWebGLTextureType(zz.type),
-             Oz = this._getInternalFormat(nz || zz.format),
-             pz = this._getRGBABufferInternalSizedFormat(zz.type, Oz);
-           lz.texImage2D(Mz, 0, pz, Oz, Hz, uz), zz.generateMipMaps && lz.generateMipmap(Mz), tz || this._bindTextureDirectly(Mz, null), Ez && lz.pixelStorei(lz.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), nz && (zz.format = nz), zz._dynamicTextureSource = uz, zz._premulAlpha = Ez, zz.inve … [truncated]
-         }), this.name = zz, this.wrapU = nz.e.CLAMP_ADDRESSMODE, this.wrapV = nz.e.CLAMP_ADDRESSMODE, this._generateMipMaps = Ez;
-         const Fz = this._getEngine();
-         if (!Fz) return;
-         if (uz.getContext) this._canvas = uz, this._ownCanvas = !1, this._texture = Fz.createDynamicTexture(this._canvas.width, this._canvas.height, Ez, Hz);
-         else {
-           this._canvas = Fz.createCanvas(1, 1), this._ownCanvas = !0;
-           const zz = uz;
-           zz.width || 0 === zz.width ? this._texture = Fz.createDynamicTexture(zz.width, zz.height, Ez, Hz) : this._texture = Fz.createDynamicTexture(uz, uz, Ez, Hz)
+           const Yq = gq.document.createElement("img");
+           Yq.onload = function() {
+             URL.revokeObjectURL(Eq)
+           }, Yq.src = Eq, gq.document.body.appendChild(Yq)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L513-L514` → after: `L406-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L406-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L406-L427) · [Before (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L513-L514)

```diff
-       getClassName() {
-         return "DynamicTexture"
+       static EncodeScreenshotCanvasData(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           lq = arguments.length > 3 ? arguments[3] : void 0,
+           Oq = arguments.length > 4 ? arguments[4] : void 0;
+         if ("string" !== typeof lq && Eq) {
+           if (Eq) {
+             if (Yq._IsOffScreenCanvas(qq)) return void qq.convertToBlob({
+               type: gq,
+               quality: Oq
+             }).then((qq => {
+               const gq = new FileReader;
+               gq.readAsDataURL(qq), gq.onloadend = () => {
+                 const qq = gq.result;
+                 Eq(qq)
+               }
+             }));
+ ... (6 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L516-L517` → after: `L429-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L429-L435) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L516-L517)

```diff
-       get canRescale() {
-         return !0
+       static Download(qq, Eq) {
+         if ("undefined" === typeof URL) return;
+         const gq = window.URL.createObjectURL(qq),
+           Yq = document.createElement("a");
+         document.body.appendChild(Yq), Yq.style.display = "none", Yq.href = gq, Yq.download = Eq, Yq.addEventListener("click", (() => {
+           Yq.parentElement && Yq.parentElement.removeChild(Yq)
+         })), Yq.click(), window.URL.revokeObjectURL(gq)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L519-L520` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L437-L438) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L519-L520)

```diff
-       _recreate(zz) {
-         this._canvas.width = zz.width, this._canvas.height = zz.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(zz.width, zz.height, this._generateMipMaps, this.samplingMode)
+       static BackCompatCameraNoPreventDefault(qq) {
+         return "boolean" === typeof qq[0] ? qq[0] : "boolean" === typeof qq[1] && qq[1]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L522-L524` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L440-L441) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L522-L524)

```diff
-       scale(zz) {
-         const uz = this.getSize();
-         uz.width *= zz, uz.height *= zz, this._recreate(uz)
+       static CreateScreenshot(qq, Eq, gq, Yq) {
+         throw (0, cq.m)("ScreenshotTools")
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L526-L528` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L443-L444) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L526-L528)

```diff
-       scaleTo(zz, uz) {
-         const bz = this.getSize();
-         bz.width = zz, bz.height = uz, this._recreate(bz)
+       static async CreateScreenshotAsync(qq, Eq, gq) {
+         throw (0, cq.m)("ScreenshotTools")
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L530-L531` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L446-L447) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L530-L531)

```diff
-       getContext() {
-         return this._context
+       static CreateScreenshotUsingRenderTarget(qq, Eq, gq, Yq) {
+         throw (0, cq.m)("ScreenshotTools")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L533-L535` → after: `L449-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L449-L450) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L533-L535)

```diff
-       clear(zz) {
-         const uz = this.getSize();
-         zz && (this._context.fillStyle = zz), this._context.clearRect(0, 0, uz.width, uz.height)
+       static async CreateScreenshotUsingRenderTargetAsync(qq, Eq, gq) {
+         throw (0, cq.m)("ScreenshotTools")
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L537-L551` → after: `L452-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L452-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L452-L491) · [Before (L537-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L537-L551)

```diff
-       update(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === zz || zz, uz, this._format || void 0, void 0, bz)
-       }
-       drawText(zz, uz, bz, Ez, nz, iz, lz) {
-         let Mz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
-         const tz = this.getSize();
-         if (iz && (this._context.fillStyle = iz, this._context.fillRect(0, 0, tz.width, tz.height)), this._context.font = Ez, null === uz || void 0 === uz) {
-           const bz = this._context.measureText(zz);
-           uz = (tz.width - bz.width) / 2
-         }
-         if (null === bz || void 0 === bz) {
-           const zz = parseInt(Ez.replace(/\D/g, ""));
-           bz = tz.height / 2 + zz / 3.65
+       static RandomId() {
+         return (0, Vq.d)()
+       }
+       static IsBase64(qq) {
+         return (0, Wq.q)(qq)
+       }
+       static DecodeBase64(qq) {
+         return (0, Wq.e)(qq)
+       }
+       static get errorsCount() {
+         return mq.b.errorsCount
+       }
+       static Log(qq) {
+         mq.b.Log(qq)
+       }
+       static Warn(qq) {
+ ... (24 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L553` → after: `L493-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L493-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L493-L500) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L553)

```diff
-         this._context.fillStyle = nz || "", this._context.fillText(zz, uz, bz), Mz && this.update(lz)
+         Eq && Yq._Performance.mark && Yq._Performance.mark(qq + "-Begin")
+       }
+       static _EndUserMark(qq) {
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Yq._Performance.mark && (Yq._Performance.mark(qq + "-End"), Yq._Performance.measure(qq, qq + "-Begin", qq + "-End"))
+       }
+       static _StartPerformanceConsole(qq) {
+         let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         Eq && (Yq._StartUserMark(qq, Eq), console.time && console.time(qq))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L555-L556` → after: `L502-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L502-L504) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L555-L556)

```diff
-       dispose() {
-         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
+       static _EndPerformanceConsole(qq) {
+         let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         Eq && (Yq._EndUserMark(qq, Eq), console.timeEnd(qq))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L558-L563` → after: `L506-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L506-L512) · [Before (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L558-L563)

```diff
-       clone() {
-         const zz = this.XT();
-         if (!zz) return this;
-         const uz = this.getSize(),
-           bz = new Hz(this.name, uz, zz, this._generateMipMaps);
-         return bz.hasAlpha = this.hasAlpha, bz.level = this.level, bz.wrapU = this.wrapU, bz.wrapV = this.wrapV, bz
+       static _StartMarkNative(qq) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
+           if (Yq._NativePerformanceCounterHandles.has(qq)) Yq.Warn(`Performance counter with name ${qq} is already started.`);
+           else {
+             const Eq = _native.startPerformanceCounter(qq);
+             Yq._NativePerformanceCounterHandles.set(qq, Eq)
+           }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L565-L569` → after: `L514-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L514-L518) · [Before (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L565-L569)

```diff
-       serialize() {
-         const zz = this.XT();
-         zz && !zz.isReady() && Ez.e.Warn("The scene must be ready before serializing the dynamic texture");
-         const uz = super.serialize();
-         return Hz._IsCanvasElement(this._canvas) && (uz.base64String = this._canvas.toDataURL()), uz.invertY = this._invertY, uz.samplingMode = this.samplingMode, uz
+       static _EndMarkNative(qq) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const Eq = Yq._NativePerformanceCounterHandles.get(qq);
+           Eq ? (_native.endPerformanceCounter(Eq), Yq._NativePerformanceCounterHandles.delete(qq)) : Yq.Warn(`Performance counter with name ${qq} was not started.`)
+         }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L571-L572` → after: `L520-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L520-L521) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L571-L572)

```diff
-       static _IsCanvasElement(zz) {
-         return void 0 !== zz.toDataURL
+       static get Now() {
+         return Aq.c.Now
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L574-L575` → after: `L523-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L523-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L523-L533) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L574-L575)

```diff
-       _rebuild() {
-         this.update()
+       static GetClassName(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           gq = null;
+         if (!Eq && qq.getClassName) gq = qq.getClassName();
+         else {
+           if (qq instanceof Object) {
+             gq = (Eq ? qq : Object.getPrototypeOf(qq)).constructor.__bjsclassName__
+           }
+           gq || (gq = typeof qq)
+         }
+         return gq
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L577-L586` → after: `L535-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L535-L538) · [Before (L577-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L577-L586)

```diff
-     }
-   },
-   40354: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => nz
-     });
-     var Ez = bz(39636);
-     class nz extends Ez.e {
-       get depth() {
-         return this._depth
+       static First(qq, Eq) {
+         for (const gq of qq)
+           if (Eq(gq)) return gq;
+         return null
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L588-L595` → after: `L540-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L540-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L540-L552) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L588-L595)

```diff
-       constructor(zz, uz, bz, nz, iz, lz) {
-         let Mz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           tz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           Hz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Ez.e.TRILINEAR_SAMPLINGMODE,
-           Oz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           pz = arguments.length > 10 ? arguments[10] : void 0,
-           dz = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, lz, !Mz, tz), this.format = iz, this._texture = lz.uR().createRawTexture2DArray(zz, uz, bz, nz, iz, Mz, tz, Hz, null, Oz, pz ?? 0, dz), this._depth = nz, this.is2DArray = !0
+       static getFullClassName(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           gq = null,
+           Yq = null;
+         if (!Eq && qq.getClassName) gq = qq.getClassName();
+         else {
+           if (qq instanceof Object) {
+             const lq = Eq ? qq : Object.getPrototypeOf(qq);
+             gq = lq.constructor.__bjsclassName__, Yq = lq.constructor.__bjsmoduleName__
+           }
+           gq || (gq = typeof qq)
+         }
+         return gq ? (null != Yq ? Yq + "." : "") + gq : null
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L597-L598` → after: `L554-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L554-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L554-L559) · [Before (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L597-L598)

```diff
-       update(zz) {
-         this.updateMipLevel(zz, 0)
+       static async DelayAsync(qq) {
+         await new Promise((Eq => {
+           setTimeout((() => {
+             Eq()
+           }), qq)
+         }))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L600-L601` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L561-L562) · [Before (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L600-L601)

```diff
-       updateMipLevel(zz, uz) {
-         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, zz, this._texture.format, this._texture.invertY, null, this._texture.type, uz)
+       static IsSafari() {
+         return !!(0, Oq.j)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L603-L604` → after: `L564-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L564-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L564-L568) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L603-L604)

```diff
-       static CreateRGBATexture(zz, uz, bz, Ez, iz) {
-         return new nz(zz, uz, bz, Ez, 5, iz, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
+     }
+ 
+     function Hq(qq, Eq) {
+       return gq => {
+         gq.__bjsclassName__ = qq, gq.__bjsmoduleName__ = null != Eq ? Eq : null
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L607-L620` → after: `L571-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L571-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/247.js#L571-L613) · [Before (L607-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/247.js#L607-L620)

```diff
-   },
-   40350: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Ez.e
-     });
-     var Ez = bz(39537);
-     (0, Ez.h)()
-   },
-   39250: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Ez.e
-     });
-     var Ez = bz(39253);
-     (0, Ez.b)()
+     Yq = jq, jq.AssetBaseUrl = "", jq.UseCustomRequestHeaders = !1, jq.CustomRequestHeaders = uq.e.CustomRequestHeaders, jq.GetDOMTextContent = Oq.b, jq._DefaultCdnUrl = "https://cdn.babylonjs.com", jq._CdnVersion = "9.28.0", jq._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
+       const Eq = document.createElement("a");
+       return Eq.href = qq, Eq.href
+     } : "function" === typeof URL && "object" === typeof location ? qq => new URL(qq, location.origin).href : () => {
+       throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
+     }, jq.NoneLogLevel = mq.b.NoneLogLevel, jq.MessageLogLevel = mq.b.MessageLogLevel, jq.WarningLogLevel = mq.b.WarningLogLevel, jq.ErrorLogLevel = mq.b.ErrorLogLevel, jq.AllLogLevel = mq.b.AllLogLevel, jq.IsWindowObjectExist = Oq.n, jq.PerformanceNoneLogLevel = 0, jq.Performanc … [truncated]
+     class oq {
+       constructor(qq, Eq, gq) {
+         let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.iterations = qq, this.index = Yq - 1, this._done = !1, this._fn = Eq, this._successCallback = gq
+       }
+       executeNext() {
+         this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
+       }
+       breakLoop() {
+         this._done = !0, this._successCallback()
+ ... (27 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/248.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/248.js` (127 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016)

#### 1. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L4-L10) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L4)

```diff
-   39365: (zz, uz, bz) => {
+   40190: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
+     });
+     let Yq = !1
+   },
+   39748: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L8-L14` → after: `L14-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L14-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L14-L96) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L8-L14)

```diff
-     var Ez = bz(39170),
-       nz = bz(39172),
-       iz = bz(36519),
-       lz = bz(39372),
-       Mz = bz(39402),
-       tz = bz(39337),
-       Hz = bz(39258);
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(37156),
+       mq = gq(37139),
+       xq = gq(37153),
+       Aq = gq(37872),
+       cq = gq(39774);
+     class uq {
+       get wrapU() {
+         return this._wrapU
+       }
+       set wrapU(qq) {
+         this._wrapU = qq
+       }
+       get wrapV() {
+         return this._wrapV
+ ... (67 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L17` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L99-L109) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L17)

```diff
-       let uz, bz, lz, Mz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz = [],
+       let Eq, gq, cq, Bq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq, Mq, Tq, zq = uq,
+         Sq = [],
+         pq = [],
+         Gq = [],
+         Lq = [],
+         Jq = [],
+         kq = [],
+         Rq = [],
+         Uq = [],
+         Fq = [],
+         sq = [],
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L39-L41` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L131-L133) · [Before (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L39-L41)

```diff
-       return zz = class {
-         constructor() {
-           this.keysUp = (0, Ez.j)(this, wz, [38]), this.keysUpward = ((0, Ez.j)(this, Xz), (0, Ez.j)(this, fz, [33])), this.keysDown = ((0, Ez.j)(this, sz), (0, Ez.j)(this, rz, [40])), this.keysDownward = ((0, Ez.j)(this, oz), (0, Ez.j)(this, Nz, [34])), this.keysLeft = ((0, Ez.j … [truncated]
+       return qq = class extends zq {
+         set hasAlpha(qq) {
+           this._hasAlpha = qq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L43-L57` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L135-L136) · [Before (L43-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L43-L57)

```diff
-         attachControl(zz) {
-           zz = Hz.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XT(), this._engine = this._scene.uR(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((uz => {
-             const bz = uz.event;
-             if (!bz.metaKey)
-               if (uz.type === tz.b.KEYDOWN) {
-                 if (-1 !== this.keysUp.indexOf(bz.keyCode) || -1 !== this.keysDown.indexOf(bz.keyCode) || -1 !== this.keysLeft.indexOf(bz.keyCode) || -1 !== this.keysRight.indexOf(bz.keyCode) || -1 !== this.keysUpward.indexOf(bz.keyCode) || -1 !== this.keysDownward.indexOf(bz.key … [truncated]
-                   -1 === this._keys.indexOf(bz.keyCode) && this._keys.push(bz.keyCode), zz || bz.preventDefault()
-                 }
-               } else if (-1 !== this.keysUp.indexOf(bz.keyCode) || -1 !== this.keysDown.indexOf(bz.keyCode) || -1 !== this.keysLeft.indexOf(bz.keyCode) || -1 !== this.keysRight.indexOf(bz.keyCode) || -1 !== this.keysUpward.indexOf(bz.keyCode) || -1 !== this.keysDownward.indexOf(b … [truncated]
-               const uz = this._keys.indexOf(bz.keyCode);
-               uz >= 0 && this._keys.splice(uz, 1), zz || bz.preventDefault()
-             }
-           })))
+         get hasAlpha() {
+           return this._hasAlpha
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L59-L60` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L138-L139) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L59-L60)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         set getAlphaFromRGB(qq) {
+           this._getAlphaFromRGB !== qq && (this._getAlphaFromRGB = qq, this._scene && this._scene.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L62-L76` → after: `L141-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L141-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L141-L195) · [Before (L62-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L62-L76)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const zz = this.camera,
-               uz = zz.movement.input,
-               bz = uz.getEntry("keyboard", "translate"),
-               Ez = uz.getEntry("keyboard", "rotate"),
-               nz = Ez?.sensitivity ?? 1,
-               lz = zz._localDirection.P_(0, 0, 0);
-             for (let iz = 0; iz < this._keys.length; iz++) {
-               const uz = this._keys[iz]; - 1 !== this.keysLeft.indexOf(uz) ? lz.x -= 1 : -1 !== this.keysUp.indexOf(uz) ? lz.z += 1 : -1 !== this.keysRight.indexOf(uz) ? lz.x += 1 : -1 !== this.keysDown.indexOf(uz) ? lz.z -= 1 : -1 !== this.keysUpward.indexOf(uz) ? lz.y += 1 : -1 … [truncated]
-             }
-             if (bz && (0 !== lz.x || 0 !== lz.y || 0 !== lz.z)) {
-               const uz = zz._computeLocalCameraSpeed() * (bz.sensitivity ?? 1);
-               lz.normalize().scaleInPlace(uz), zz.XT().useRightHandedSystem && (lz.z *= -1), zz.getViewMatrix().invertToRef(zz._cameraTransformMatrix), iz.n.TransformNormalToRef(lz, zz._cameraTransformMatrix, zz._transformedDirection), zz.cameraDirection.addInPlace(zz._transforme … [truncated]
-             }
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
+         }
+         set coordinatesIndex(qq) {
+           this._coordinatesIndex !== qq && (this._coordinatesIndex = qq, this._scene && this._scene.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))))
+         }
+         get coordinatesIndex() {
+           return this._coordinatesIndex
+         }
+         set coordinatesMode(qq) {
+           this._coordinatesMode !== qq && (this._coordinatesMode = qq, this._scene && this._scene.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))))
+         }
+         get coordinatesMode() {
+           return this._coordinatesMode
+         }
+         get wrapU() {
+ ... (39 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L80` → after: `L239-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L239-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L239-L264) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L80)

```diff
-           return "FreeCameraKeyboardMoveInput"
+           return "BaseTexture"
+         }
+         set onDispose(qq) {
+           this._onDisposeObserver && this.MJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.MJ.add(qq)
+         }
+         get isBlocking() {
+           return !0
+         }
+         get loadingError() {
+           return this._loadingError
+         }
+         get errorObject() {
+           return this._errorObject
+         }
+         constructor(Eq) {
+           let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L82-L83` → after: `L266-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L266-L267) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L82-L83)

```diff
-         _onLostFocus() {
-           this._keys.length = 0
+         getReflectionTextureMatrix() {
+           return mq.e.IdentityReadOnly
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L85-L86` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L269-L270) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+         getRefractionTextureMatrix() {
+           return this.getReflectionTextureMatrix()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L88-L90` → after: `L272-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L272-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L272-L387) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const zz = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * zz
+         isReadyOrNotBlocking() {
+           return !this.isBlocking || this.isReady() || this.loadingError
+         }
+         scale(qq) {}
+         get canRescale() {
+           return !1
+         }
+         _getFromCache(qq, Eq, gq, Yq, lq, Oq) {
+           const mq = this._getEngine();
+           if (!mq) return null;
+           const xq = mq._getUseSRGBBuffer(!!lq, Eq),
+             Aq = mq.getLoadedTexturesCache();
+           for (let cq = 0; cq < Aq.length; cq++) {
+             const mq = Aq[cq];
+             if ((void 0 === lq || xq === mq._useSRGBBuffer) && (void 0 === Yq || Yq === mq.invertY) && mq.url === qq && mq.generateMipMaps === !Eq && (!gq || gq === mq.samplingMode) && (void 0 === Oq || Oq === mq.isCube)) return mq.incrementReferences(), mq
+           }
+ ... (100 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L93-L96` → after: `L390-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L390-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L390-L393) · [Before (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L93-L96)

```diff
-         const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         uz = [(0, nz.G)()], bz = [(0, nz.G)()], lz = [(0, nz.G)()], Mz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.G)()], dz = [(0, nz.G)()], Fz = [(0, nz.G)()], Zz = [(0, nz.G)()], Rz = [(0, nz.G)()], Kz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
-           kind: "field",
-           name: "keysUp",
+         const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(zq[Symbol.metadata] ?? null) : void 0;
+         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], cq = [(0, lq.M)()], Bq = [(0, lq.M)()], Nq = [(0, lq.M)("hasAlpha")], aq = [(0, lq.M)("getAlphaFromRGB")], Vq = [(0, lq.M)()], dq = [(0, lq.M)("coordinatesIndex")], jq = [(0, lq.M)()], Hq = [(0, lq.M)("coordinatesMode")], oq = [(0,  … [truncated]
+           kind: "getter",
+           name: "wrapU",
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L100-L104` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L397-L398) · [Before (L100-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L100-L104)

```diff
-             has: zz => "keysUp" in zz,
-             get: zz => zz.keysUp,
-             set: (zz, uz) => {
-               zz.keysUp = uz
-             }
+             has: qq => "wrapU" in qq,
+             get: qq => qq.wrapU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L107-L109` → after: `L401-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L401-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L401-L403) · [Before (L107-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L107-L109)

```diff
-         }, wz, Xz), (0, Ez.h)(null, null, bz, {
-           kind: "field",
-           name: "keysUpward",
+         }, null, Sq), (0, Yq.f)(qq, null, Pq, {
+           kind: "getter",
+           name: "wrapV",
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L113-L117` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L407-L408) · [Before (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L113-L117)

```diff
-             has: zz => "keysUpward" in zz,
-             get: zz => zz.keysUpward,
-             set: (zz, uz) => {
-               zz.keysUpward = uz
-             }
+             has: qq => "wrapV" in qq,
+             get: qq => qq.wrapV
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L120-L122` → after: `L411-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L411-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L411-L413) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L120-L122)

```diff
-         }, fz, sz), (0, Ez.h)(null, null, lz, {
-           kind: "field",
-           name: "keysDown",
+         }, null, Sq), (0, Yq.f)(qq, null, tq, {
+           kind: "getter",
+           name: "isCube",
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L126-L130` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L417-L418) · [Before (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L126-L130)

```diff
-             has: zz => "keysDown" in zz,
-             get: zz => zz.keysDown,
-             set: (zz, uz) => {
-               zz.keysDown = uz
-             }
+             has: qq => "isCube" in qq,
+             get: qq => qq.isCube
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L133-L135` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L421-L423) · [Before (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L133-L135)

```diff
-         }, rz, oz), (0, Ez.h)(null, null, Mz, {
-           kind: "field",
-           name: "keysDownward",
+         }, null, Sq), (0, Yq.f)(qq, null, rq, {
+           kind: "getter",
+           name: "is3D",
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L139-L143` → after: `L427-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L427-L428) · [Before (L139-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L139-L143)

```diff
-             has: zz => "keysDownward" in zz,
-             get: zz => zz.keysDownward,
-             set: (zz, uz) => {
-               zz.keysDownward = uz
-             }
+             has: qq => "is3D" in qq,
+             get: qq => qq.is3D
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L146-L148` → after: `L431-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L431-L433) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L146-L148)

```diff
-         }, Nz, vz), (0, Ez.h)(null, null, Oz, {
-           kind: "field",
-           name: "keysLeft",
+         }, null, Sq), (0, Yq.f)(qq, null, vq, {
+           kind: "getter",
+           name: "is2DArray",
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L152-L156` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L437-L438) · [Before (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L152-L156)

```diff
-             has: zz => "keysLeft" in zz,
-             get: zz => zz.keysLeft,
-             set: (zz, uz) => {
-               zz.keysLeft = uz
-             }
+             has: qq => "is2DArray" in qq,
+             get: qq => qq.is2DArray
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L159-L161` → after: `L441-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L441-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L441-L443) · [Before (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L159-L161)

```diff
-         }, xz, Jz), (0, Ez.h)(null, null, pz, {
-           kind: "field",
-           name: "keysRight",
+         }, null, Sq), (0, Yq.f)(qq, null, hq, {
+           kind: "getter",
+           name: "gammaSpace",
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L165-L169` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L447-L448) · [Before (L165-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L165-L169)

```diff
-             has: zz => "keysRight" in zz,
-             get: zz => zz.keysRight,
-             set: (zz, uz) => {
-               zz.keysRight = uz
-             }
+             has: qq => "gammaSpace" in qq,
+             get: qq => qq.gammaSpace
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L172-L174` → after: `L451-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L451-L453) · [Before (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L172-L174)

```diff
-         }, Az, Tz), (0, Ez.h)(null, null, dz, {
-           kind: "field",
-           name: "rotationSpeed",
+         }, null, Sq), (0, Yq.f)(qq, null, iq, {
+           kind: "getter",
+           name: "lodGenerationOffset",
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L178-L182` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L457-L458) · [Before (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L178-L182)

```diff
-             has: zz => "rotationSpeed" in zz,
-             get: zz => zz.rotationSpeed,
-             set: (zz, uz) => {
-               zz.rotationSpeed = uz
-             }
+             has: qq => "lodGenerationOffset" in qq,
+             get: qq => qq.lodGenerationOffset
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L185-L187` → after: `L461-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L461-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L461-L463) · [Before (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L185-L187)

```diff
-         }, Lz, Pz), (0, Ez.h)(null, null, Fz, {
-           kind: "field",
-           name: "keysRotateLeft",
+         }, null, Sq), (0, Yq.f)(qq, null, Zq, {
+           kind: "getter",
+           name: "lodGenerationScale",
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L191-L195` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L467-L468) · [Before (L191-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L191-L195)

```diff
-             has: zz => "keysRotateLeft" in zz,
-             get: zz => zz.keysRotateLeft,
-             set: (zz, uz) => {
-               zz.keysRotateLeft = uz
-             }
+             has: qq => "lodGenerationScale" in qq,
+             get: qq => qq.lodGenerationScale
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L198-L200` → after: `L471-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L471-L473) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L198-L200)

```diff
-         }, Gz, az), (0, Ez.h)(null, null, Zz, {
-           kind: "field",
-           name: "keysRotateRight",
+         }, null, Sq), (0, Yq.f)(qq, null, fq, {
+           kind: "getter",
+           name: "linearSpecularLOD",
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L204-L208` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L477-L478) · [Before (L204-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L204-L208)

```diff
-             has: zz => "keysRotateRight" in zz,
-             get: zz => zz.keysRotateRight,
-             set: (zz, uz) => {
-               zz.keysRotateRight = uz
-             }
+             has: qq => "linearSpecularLOD" in qq,
+             get: qq => qq.linearSpecularLOD
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L211-L213` → after: `L481-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L481-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L481-L483) · [Before (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L211-L213)

```diff
-         }, Vz, mz), (0, Ez.h)(null, null, Rz, {
-           kind: "field",
-           name: "keysRotateUp",
+         }, null, Sq), (0, Yq.f)(qq, null, Mq, {
+           kind: "getter",
+           name: "irradianceTexture",
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L217-L221` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L487-L488) · [Before (L217-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L217-L221)

```diff
-             has: zz => "keysRotateUp" in zz,
-             get: zz => zz.keysRotateUp,
-             set: (zz, uz) => {
-               zz.keysRotateUp = uz
-             }
+             has: qq => "irradianceTexture" in qq,
+             get: qq => qq.irradianceTexture
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L224` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L491) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L224)

```diff
-         }, qz, hz), (0, Ez.h)(null, null, Kz, {
+         }, null, Sq), (0, Yq.f)(null, null, Eq, {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L226` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L493) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L226)

```diff
-           name: "keysRotateDown",
+           name: "uniqueId",
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L230-L231` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L497-L498) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L230-L231)

```diff
-             has: zz => "keysRotateDown" in zz,
-             get: zz => zz.keysRotateDown,
+             has: qq => "uniqueId" in qq,
+             get: qq => qq.uniqueId,
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L233` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L500) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L233)

```diff
-               zz.keysRotateDown = uz
+               qq.uniqueId = Eq
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L237-L333` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L504) · [Before (L237-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L237-L333)

```diff
-         }, Uz, cz), iz && Object.defineProperty(zz, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: iz
-         })
-       })(), zz
-     })();
-     Mz.e.FreeCameraKeyboardMoveInput = Oz;
-     var pz = bz(36547),
-       dz = bz(39331);
-     let Fz = (() => {
-       var zz;
-       let uz, bz, iz = [],
-         lz = [],
-         Mz = [],
- ... (81 more removed lines; see GitHub link above)
+         }, pq, Gq), (0, Yq.f)(null, null, gq, {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L335` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L506) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L335)

```diff
-           name: "buttons",
+           name: "name",
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L339-L340` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L510-L511) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L339-L340)

```diff
-             has: zz => "buttons" in zz,
-             get: zz => zz.buttons,
+             has: qq => "name" in qq,
+             get: qq => qq.name,
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L342` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L513) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L342)

```diff
-               zz.buttons = uz
+               qq.name = Eq
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L346` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L517) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L346)

```diff
-         }, iz, lz), (0, Ez.h)(null, null, bz, {
+         }, Lq, Jq), (0, Yq.f)(null, null, cq, {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L348` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L519) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L348)

```diff
-           name: "angularSensibility",
+           name: "displayName",
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L352-L353` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L523-L524) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L352-L353)

```diff
-             has: zz => "angularSensibility" in zz,
-             get: zz => zz.angularSensibility,
+             has: qq => "displayName" in qq,
+             get: qq => qq.displayName,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L355` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L526) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L355)

```diff
-               zz.angularSensibility = uz
+               qq.displayName = Eq
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L359-L407` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L530) · [Before (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L359-L407)

```diff
-         }, Mz, tz), Hz && Object.defineProperty(zz, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Hz
-         })
-       })(), zz
-     })();
-     Mz.e.FreeCameraMouseInput = Fz;
-     var Zz = bz(39341);
-     let Rz = (() => {
-       var zz;
-       let uz, bz, iz, lz = [],
-         Mz = [],
-         tz = [],
-         Oz = [],
- ... (33 more removed lines; see GitHub link above)
+         }, kq, Rq), (0, Yq.f)(null, null, Bq, {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L409` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L532) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L409)

```diff
-           name: "wheelPrecisionX",
+           name: "metadata",
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L413-L414` → after: `L536-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L536-L537) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L413-L414)

```diff
-             has: zz => "wheelPrecisionX" in zz,
-             get: zz => zz.wheelPrecisionX,
+             has: qq => "metadata" in qq,
+             get: qq => qq.metadata,
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L416` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L539) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L416)

```diff
-               zz.wheelPrecisionX = uz
+               qq.metadata = Eq
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L420` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L543) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L420)

```diff
-         }, lz, Mz), (0, Ez.h)(null, null, bz, {
+         }, Uq, Fq), (0, Yq.f)(null, null, Nq, {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L422` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L545) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L422)

```diff
-           name: "wheelPrecisionY",
+           name: "_hasAlpha",
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L426-L427` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L549-L550) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L426-L427)

```diff
-             has: zz => "wheelPrecisionY" in zz,
-             get: zz => zz.wheelPrecisionY,
+             has: qq => "_hasAlpha" in qq,
+             get: qq => qq._hasAlpha,
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L429` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L552) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L429)

```diff
-               zz.wheelPrecisionY = uz
+               qq._hasAlpha = Eq
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L433` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L556) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L433)

```diff
-         }, tz, Oz), (0, Ez.h)(null, null, iz, {
+         }, sq, Xq), (0, Yq.f)(null, null, aq, {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L435-L563` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L558) · [Before (L435-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L435-L563)

```diff
-           name: "wheelPrecisionZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "wheelPrecisionZ" in zz,
-             get: zz => zz.wheelPrecisionZ,
-             set: (zz, uz) => {
-               zz.wheelPrecisionZ = uz
-             }
-           },
-           metadata: Hz
-         }, Fz, Rz), Hz && Object.defineProperty(zz, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Hz
- ... (113 more removed lines; see GitHub link above)
+           name: "_getAlphaFromRGB",
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L567` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L562-L563) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L567)

```diff
-             has: zz => "wheelXMoveRelative" in zz,
+             has: qq => "_getAlphaFromRGB" in qq,
+             get: qq => qq._getAlphaFromRGB,
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L569` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L565) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L569)

```diff
-               zz.wheelXMoveRelative = uz
+               qq._getAlphaFromRGB = Eq
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L573-L587` → after: `L569-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L569-L571) · [Before (L573-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L573-L587)

```diff
-         }, null, Zz), (0, Ez.h)(zz, null, bz, {
-           kind: "setter",
-           name: "wheelYMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "wheelYMoveRelative" in zz,
-             set: (zz, uz) => {
-               zz.wheelYMoveRelative = uz
-             }
-           },
-           metadata: iz
-         }, null, Zz), (0, Ez.h)(zz, null, lz, {
-           kind: "setter",
-           name: "wheelZMoveRelative",
+         }, wq, Kq), (0, Yq.f)(null, null, Vq, {
+           kind: "field",
+           name: "level",
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L591` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L575-L576) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L591)

```diff
-             has: zz => "wheelZMoveRelative" in zz,
+             has: qq => "level" in qq,
+             get: qq => qq.level,
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L593` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L578) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L593)

```diff
-               zz.wheelZMoveRelative = uz
+               qq.level = Eq
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L597-L599` → after: `L582-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L582-L584) · [Before (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L597-L599)

```diff
-         }, null, Zz), (0, Ez.h)(zz, null, Mz, {
-           kind: "setter",
-           name: "wheelXRotateRelative",
+         }, Cq, Iq), (0, Yq.f)(null, null, dq, {
+           kind: "field",
+           name: "_coordinatesIndex",
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L603` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L588-L589) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L603)

```diff
-             has: zz => "wheelXRotateRelative" in zz,
+             has: qq => "_coordinatesIndex" in qq,
+             get: qq => qq._coordinatesIndex,
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L605` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L591) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L605)

```diff
-               zz.wheelXRotateRelative = uz
+               qq._coordinatesIndex = Eq
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L609-L611` → after: `L595-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L595-L597) · [Before (L609-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L609-L611)

```diff
-         }, null, Zz), (0, Ez.h)(zz, null, tz, {
-           kind: "setter",
-           name: "wheelYRotateRelative",
+         }, eq, Dq), (0, Yq.f)(null, null, jq, {
+           kind: "field",
+           name: "optimizeUVAllocation",
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L615` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L601-L602) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L615)

```diff
-             has: zz => "wheelYRotateRelative" in zz,
+             has: qq => "optimizeUVAllocation" in qq,
+             get: qq => qq.optimizeUVAllocation,
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L617` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L604) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L617)

```diff
-               zz.wheelYRotateRelative = uz
+               qq.optimizeUVAllocation = Eq
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L621-L623` → after: `L608-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L608-L610) · [Before (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L621-L623)

```diff
-         }, null, Zz), (0, Ez.h)(zz, null, Hz, {
-           kind: "setter",
-           name: "wheelZRotateRelative",
+         }, qE, EE), (0, Yq.f)(null, null, Hq, {
+           kind: "field",
+           name: "_coordinatesMode",
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L627` → after: `L614-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L614-L615) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L627)

```diff
-             has: zz => "wheelZRotateRelative" in zz,
+             has: qq => "_coordinatesMode" in qq,
+             get: qq => qq._coordinatesMode,
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L629` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L617) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L629)

```diff
-               zz.wheelZRotateRelative = uz
+               qq._coordinatesMode = Eq
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L633-L635` → after: `L621-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L621-L623) · [Before (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L633-L635)

```diff
-         }, null, Zz), (0, Ez.h)(zz, null, Oz, {
-           kind: "setter",
-           name: "wheelXMoveScene",
+         }, gE, YE), (0, Yq.f)(null, null, Qq, {
+           kind: "field",
+           name: "wrapR",
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L639` → after: `L627-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L627-L628) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L639)

```diff
-             has: zz => "wheelXMoveScene" in zz,
+             has: qq => "wrapR" in qq,
+             get: qq => qq.wrapR,
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L641` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L630) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L641)

```diff
-               zz.wheelXMoveScene = uz
+               qq.wrapR = Eq
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L645-L647` → after: `L634-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L634-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L634-L636) · [Before (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L645-L647)

```diff
-         }, null, Zz), (0, Ez.h)(zz, null, pz, {
-           kind: "setter",
-           name: "wheelYMoveScene",
+         }, lE, OE), (0, Yq.f)(null, null, yq, {
+           kind: "field",
+           name: "anisotropicFilteringLevel",
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L651` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L640-L641) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L651)

```diff
-             has: zz => "wheelYMoveScene" in zz,
+             has: qq => "anisotropicFilteringLevel" in qq,
+             get: qq => qq.anisotropicFilteringLevel,
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L653` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L643) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L653)

```diff
-               zz.wheelYMoveScene = uz
+               qq.anisotropicFilteringLevel = Eq
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L657-L659` → after: `L647-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L647-L649) · [Before (L657-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L657-L659)

```diff
-         }, null, Zz), (0, Ez.h)(zz, null, dz, {
-           kind: "setter",
-           name: "wheelZMoveScene",
+         }, mE, xE), (0, Yq.f)(null, null, nq, {
+           kind: "field",
+           name: "invertZ",
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L663` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L653-L654) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L663)

```diff
-             has: zz => "wheelZMoveScene" in zz,
+             has: qq => "invertZ" in qq,
+             get: qq => qq.invertZ,
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L665` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L656) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L665)

```diff
-               zz.wheelZMoveScene = uz
+               qq.invertZ = Eq
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L669-L757` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L660) · [Before (L669-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L669-L757)

```diff
-         }, null, Zz), iz && Object.defineProperty(zz, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: iz
-         })
-       })(), zz
-     })();
-     Mz.e.FreeCameraMouseWheelInput = wz;
-     let Xz = (() => {
-       var zz;
-       let uz, bz, lz = [],
-         Mz = [],
-         tz = [],
-         Oz = [];
-       return zz = class {
- ... (73 more removed lines; see GitHub link above)
+         }, AE, cE), (0, Yq.f)(null, null, bq, {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L759` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L662) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L759)

```diff
-           name: "touchAngularSensibility",
+           name: "lodLevelInAlpha",
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L763-L764` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L666-L667) · [Before (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L763-L764)

```diff
-             has: zz => "touchAngularSensibility" in zz,
-             get: zz => zz.touchAngularSensibility,
+             has: qq => "lodLevelInAlpha" in qq,
+             get: qq => qq.lodLevelInAlpha,
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L766` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L669) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L766)

```diff
-               zz.touchAngularSensibility = uz
+               qq.lodLevelInAlpha = Eq
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L770` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L673) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L770)

```diff
-         }, lz, Mz), (0, Ez.h)(null, null, bz, {
+         }, uE, BE), (0, Yq.f)(null, null, Tq, {
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L772` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L675) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L772)

```diff
-           name: "touchMoveSensibility",
+           name: "isRenderTarget",
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L776-L777` → after: `L679-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L679-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L679-L680) · [Before (L776-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L776-L777)

```diff
-             has: zz => "touchMoveSensibility" in zz,
-             get: zz => zz.touchMoveSensibility,
+             has: qq => "isRenderTarget" in qq,
+             get: qq => qq.isRenderTarget,
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L779` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L682) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L779)

```diff
-               zz.touchMoveSensibility = uz
+               qq.isRenderTarget = Eq
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L789` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L692) · [Before (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L789)

```diff
-       })(), zz
+       })(), qq.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, qq
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L791-L814` → after: `L694-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L694-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L694-L724) · [Before (L791-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L791-L814)

```diff
-     Mz.e.FreeCameraTouchInput = Xz;
-     var fz, sz, rz, oz = bz(39061);
-     class Nz extends Mz.i {
-       constructor(zz) {
-         super(zz), this._mouseInput = null, this._mouseWheelInput = null
-       }
-       addKeyboard() {
-         return this.add(new Oz), this
-       }
-       addMouse() {
-         let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         return this._mouseInput || (this._mouseInput = new Fz(zz), this.add(this._mouseInput)), this
-       }
-       removeMouse() {
-         return this._mouseInput && this.remove(this._mouseInput), this
-       }
- ... (8 more removed lines; see GitHub link above)
+     (Bq = aq.prototype).forceSphericalPolynomialsRecompute ?? (Bq.forceSphericalPolynomialsRecompute = (0, Nq.i)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(aq.prototype, "sphericalPolynomial") || Object.defineProperty(aq.prototype, "sph … [truncated]
+   },
+   40233: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Qq,
+       d: () => oq
+     });
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(37156),
+       mq = gq(37139),
+       xq = gq(39748),
+       Aq = gq(37171),
+       cq = gq(39636),
+       uq = gq(39644),
+       Bq = gq(39853),
+ ... (15 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L816-L817` → after: `L726-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L726-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L726-L735) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L816-L817)

```diff
-       clear() {
-         super.clear(), this._mouseInput = null
+       const Oq = document.createElement("canvas");
+       Oq.width = Yq, Oq.height = lq;
+       const mq = Oq.getContext("2d");
+       if (!mq) return null;
+       const xq = mq.createImageData(Yq, lq);
+       if (xq.data.set(qq), mq.putImageData(xq, 0, 0), gq) {
+         const qq = document.createElement("canvas");
+         qq.width = Yq, qq.height = lq;
+         const Eq = qq.getContext("2d");
+         return Eq ? (Eq.translate(0, lq), Eq.scale(1, -1), Eq.drawImage(Oq, 0, 0), qq.toDataURL("image/png")) : null
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L819-L821` → after: `L737-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L737-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L737-L757) · [Before (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L819-L821)

```diff
-     }(fz = Nz.prototype).addDeviceOrientation ?? (fz.addDeviceOrientation = (0, oz.h)("FreeCameraInputsManager", "addDeviceOrientation")), (sz = Nz.prototype).addVirtualJoystick ?? (sz.addVirtualJoystick = (0, oz.h)("FreeCameraInputsManager", "addVirtualJoystick")), (rz = Nz.prot … [truncated]
-     var vz = bz(39079),
-       xz = bz(36564);
+       return Oq.toDataURL("image/png")
+     }
+ 
+     function Vq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const Yq = qq.getInternalTexture();
+       if (!Yq) return null;
+       const lq = qq._readPixelsSync(Eq, gq);
+       return lq ? aq(lq, qq.getSize(), Yq.invertY) : null
+     }
+     async function dq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const Yq = qq.getInternalTexture();
+       if (!Yq) return null;
+ ... (5 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L824` → after: `L760-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L760-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L760-L777) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L824)

```diff
-         let uz, bz, Mz, tz, Oz = lz.i,
+         let Eq, gq, aq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq = xq.d,
+           Zq = [],
+           fq = [],
+           Mq = [],
+           Tq = [],
+           zq = [],
+           Sq = [],
+           pq = [],
+           Gq = [],
+           Lq = [],
+           Jq = [],
+           kq = [],
+           Rq = [],
+           Uq = [],
+           Fq = [],
+           sq = [],
+ ... (2 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L834-L860` → after: `L787-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L787-L789) · [Before (L834-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L834-L860)

```diff
-           get angularSensibility() {
-             const zz = this.inputs.attached.mouse;
-             return zz ? zz.angularSensibility : 0
-           }
-           set angularSensibility(zz) {
-             const uz = this.inputs.attached.mouse;
-             uz && (uz.angularSensibility = zz)
-           }
-           get keysUp() {
-             const zz = this.inputs.attached.keyboard;
-             return zz ? zz.keysUp : []
-           }
-           set keysUp(zz) {
-             const uz = this.inputs.attached.keyboard;
-             uz && (uz.keysUp = zz)
-           }
- ... (11 more removed lines; see GitHub link above)
+           static _CreateVideoTexture(Eq, gq, Yq) {
+             arguments.length > 5 && void 0 !== arguments[5] || qq.TRILINEAR_SAMPLINGMODE;
+             throw (0, cq.m)("VideoTexture")
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L862-L864` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L791-L792) · [Before (L862-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L862-L864)

```diff
-           set keysDown(zz) {
-             const uz = this.inputs.attached.keyboard;
-             uz && (uz.keysDown = zz)
+           get noMipmap() {
+             return this._noMipmap
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L866-L868` → after: `L794-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L794-L795) · [Before (L866-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L866-L868)

```diff
-           get keysDownward() {
-             const zz = this.inputs.attached.keyboard;
-             return zz ? zz.keysDownward : []
+           get mimeType() {
+             return this._mimeType
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L870-L872` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L797-L798) · [Before (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L870-L872)

```diff
-           set keysDownward(zz) {
-             const uz = this.inputs.attached.keyboard;
-             uz && (uz.keysDownward = zz)
+           set isBlocking(qq) {
+             this._isBlocking = qq
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L874-L876` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L800-L801) · [Before (L874-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L874-L876)

```diff
-           get keysLeft() {
-             const zz = this.inputs.attached.keyboard;
-             return zz ? zz.keysLeft : []
+           get isBlocking() {
+             return this._isBlocking
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L878-L880` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L803-L804) · [Before (L878-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L878-L880)

```diff
-           set keysLeft(zz) {
-             const uz = this.inputs.attached.keyboard;
-             uz && (uz.keysLeft = zz)
+           get invertY() {
+             return this._invertY
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L882-L904` → after: `L806-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L806-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L806-L852) · [Before (L882-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L882-L904)

```diff
-           get keysRight() {
-             const zz = this.inputs.attached.keyboard;
-             return zz ? zz.keysRight : []
-           }
-           set keysRight(zz) {
-             const uz = this.inputs.attached.keyboard;
-             uz && (uz.keysRight = zz)
-           }
-           get keysRotateLeft() {
-             const zz = this.inputs.attached.keyboard;
-             return zz ? zz.keysRotateLeft : []
-           }
-           set keysRotateLeft(zz) {
-             const uz = this.inputs.attached.keyboard;
-             uz && (uz.keysRotateLeft = zz)
-           }
- ... (7 more removed lines; see GitHub link above)
+           constructor(Eq, gq, lq, mq) {
+             let xq, Aq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : qq.TRILINEAR_SAMPLINGMODE,
+               cq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               Bq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               Wq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               Nq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               aq = arguments.length > 9 ? arguments[9] : void 0,
+               Vq = arguments.length > 10 ? arguments[10] : void 0,
+               dq = arguments.length > 11 ? arguments[11] : void 0,
+               Hq = arguments.length > 12 ? arguments[12] : void 0,
+               oq = arguments.length > 13 ? arguments[13] : void 0;
+             super(gq), this.url = ((0, Yq.i)(this, Zq), (0, Yq.i)(this, fq, null)), this.uOffset = ((0, Yq.i)(this, Mq), (0, Yq.i)(this, Tq, 0)), this.vOffset = ((0, Yq.i)(this, zq), (0, Yq.i)(this, Sq, 0)), this.uScale = ((0, Yq.i)(this, pq), (0, Yq.i)(this, Gq, 1)), this.vScale … [truncated]
+             let Pq = !1,
+               Qq = null,
+               yq = !0;
+             "object" === typeof lq && null !== lq ? (xq = lq.noMipmap ?? !1, mq = lq.invertY ?? !jq.b, Aq = lq.samplingMode ?? qq.TRILINEAR_SAMPLINGMODE, cq = lq.onLoad ?? null, Bq = lq.onError ?? null, Wq = lq.buffer ?? null, Nq = lq.deleteBuffer ?? !1, aq = lq.format, Vq = lq.m … [truncated]
+ ... (31 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L906-L908` → after: `L854-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L854-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L854-L862) · [Before (L906-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L906-L908)

```diff
-           get keysRotateUp() {
-             const zz = this.inputs.attached.keyboard;
-             return zz ? zz.keysRotateUp : []
+           updateURL(qq) {
+             let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               gq = arguments.length > 2 ? arguments[2] : void 0,
+               Yq = arguments.length > 3 ? arguments[3] : void 0;
+             this.url && (this.releaseInternalTexture(), this.ZJ().markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = qq), this.url = qq, this._buffer = Eq, this._forcedExtension = Yq, this.delayLoadState = 4;
+             const lq = this._delayedOnLoad;
+             this._delayedOnLoad = () => {
+               lq ? lq() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), gq && gq()
+             }, this.delayLoad()
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L910-L912` → after: `L864-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L864-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L864-L869) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L910-L912)

```diff
-           set keysRotateUp(zz) {
-             const uz = this.inputs.attached.keyboard;
-             uz && (uz.keysRotateUp = zz)
+           delayLoad() {
+             if (4 !== this.delayLoadState) return;
+             const qq = this.ZJ();
+             if (!qq) return;
+             let Eq = this.url;
+             !Eq && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Eq = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Eq, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L914-L916` → after: `L871-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L871-L872) · [Before (L914-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L914-L916)

```diff
-           get keysRotateDown() {
-             const zz = this.inputs.attached.keyboard;
-             return zz ? zz.keysRotateDown : []
+           _prepareRowForTextureGeneration(qq, Eq, gq, Yq) {
+             qq *= this._cachedUScale, Eq *= this._cachedVScale, qq -= this.uRotationCenter * this._cachedUScale, Eq -= this.vRotationCenter * this._cachedVScale, gq -= this.wRotationCenter, mq.q.TransformCoordinatesFromFloatsToRef(qq, Eq, gq, this._rowGenerationMatrix, Yq), Yq.x  … [truncated]
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L918-L920` → after: `L874-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L874-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L874-L881) · [Before (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L918-L920)

```diff
-           set keysRotateDown(zz) {
-             const uz = this.inputs.attached.keyboard;
-             uz && (uz.keysRotateDown = zz)
+           getTextureMatrix() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+             if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * qq === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && t … [truncated]
+             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * qq, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
+             const Eq = this.ZJ();
+             if (!Eq) return this._cachedTextureMatrix;
+             const gq = this._cachedIdentity3x2;
+             return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && gq !== this._cachedIdentity3x2 && Eq.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))), this._cachedTextureMatrix
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L922-L927` → after: `L883-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L883-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L883-L905) · [Before (L922-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L922-L927)

```diff
-           constructor(zz, uz, bz) {
-             var nz;
-             super(zz, uz, bz, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), nz = this, this.ellipsoid = (0, Ez.j)(this, pz, new iz.n(.5, 1, .5)), this.ellipsoidOffset = ((0, Ez.j)(this, dz), (0, Ez.j)(this, Fz, new iz.n(0, 0, 0))), this.checkCollisions = (( … [truncated]
-               let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-               nz._newPosition.euz(uz), nz._newPosition.subtractToRef(nz._oldPosition, nz._diffPosition), nz._diffPosition.length() > vz.b.CollisionsEpsilon && (nz.position.addToRef(nz._diffPosition, nz._deferredPositionUpdate), nz._deferOnly ? nz._deferredUpdated = !0 : nz.positi … [truncated]
-             }, this.inputs = new Nz(this), this.inputs.addKeyboard().addMouse()
+           getReflectionTextureMatrix() {
+             const Eq = this.ZJ();
+             if (!Eq) return this._cachedReflectionTextureMatrix;
+             if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
+               if (this.coordinatesMode !== qq.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
+               if (this._cachedReflectionProjectionMatrixId === Eq.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
+             }
+             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = mq.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = mq.e.Zero());
+             const gq = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
+             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
+               case qq.PLANAR_MODE:
+                 mq.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
+                 break;
+               case qq.PROJECTION_MODE: {
+                 mq.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
+                 const qq = Eq.getProjectionMatrix();
+ ... (7 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L929-L930` → after: `L907-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L907-L922) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L929-L930)

```diff
-           attachControl(zz, uz) {
-             uz = Hz.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(uz)
+           clone() {
+             const Eq = {
+               noMipmap: this._noMipmap,
+               invertY: this._invertY,
+               samplingMode: this.samplingMode,
+               onLoad: void 0,
+               onError: void 0,
+               buffer: this._texture ? this._texture._buffer : void 0,
+               deleteBuffer: this._deleteBuffer,
+               format: this.textureFormat,
+               mimeType: this.mimeType,
+               loaderOptions: this._loaderOptions,
+               creationFlags: this._creationFlags,
+               useSRGBBuffer: this._useSRGBBuffer
+             };
+             return Hq.d.Clone((() => new qq(this._texture ? this._texture.url : null, this.ZJ(), Eq)), this)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L932-L933` → after: `L924-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L924-L935) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L932-L933)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this.cameraDirection = new iz.n(0, 0, 0), this.cameraRotation = new iz.m(0, 0)
+           serialize() {
+             const Eq = this.name;
+             qq.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
+             const gq = super.serialize(qq._SerializeInternalTextureUniqueId);
+             if (!gq) return null;
+             if (qq.SerializeBuffers || qq.ForceSerializeBuffers)
+               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) gq.base64String = this._buffer, gq.name = gq.name.replace("data:", "");
+               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
+               const qq = this.mimeType || "image/png";
+               gq.base64String = `data:${qq};base64,${(0,Nq.f)(this._buffer)}`
+             } else(qq.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (gq.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? Vq(this) : dq(this));
+             return gq.invertY = this._invertY, gq.samplingMode = this.samplingMode, gq._creationFlags = this._creationFlags, gq._useSRGBBuffer = this._useSRGBBuffer, qq._SerializeInternalTextureUniqueId && (gq.internalTextureUniqueId = this._texture?.uniqueId), gq.internalTexture … [truncated]
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L935-L936` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L937-L938) · [Before (L935-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L935-L936)

```diff
-           get collisionMask() {
-             return this._collisionMask
+           getClassName() {
+             return "Texture"
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L938-L939` → after: `L940-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L940-L941) · [Before (L938-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L938-L939)

```diff
-           set collisionMask(zz) {
-             this._collisionMask = isNaN(zz) ? -1 : zz
+           dispose() {
+             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L941` → after: `L943-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L943-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L943-L950) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L941)

```diff
-           _collideWithWorld(zz) {
+           static Parse(Eq, gq, Yq) {
+             if (Eq.customType) {
+               const qq = Bq.d.Instantiate(Eq.customType).Parse(Eq, gq, Yq);
+               return Eq.samplingMode && qq.updateSamplingMode && qq._samplingMode && qq._samplingMode !== Eq.samplingMode && qq.updateSamplingMode(Eq.samplingMode), qq
+             }
+             if (Eq.isCube && !Eq.isRenderTarget) return qq._CubeTextureParser(Eq, gq, Yq);
+             const lq = void 0 !== Eq.internalTextureUniqueId;
+             if (!Eq.name && !Eq.isRenderTarget && !lq) return null;
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L943-L962` → after: `L952-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L952-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L952-L1028) · [Before (L943-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L943-L962)

```diff
-             uz = this.parent ? iz.n.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, uz.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
-             const bz = this.XT().collisionCoordinator;
-             this._collider || (this._collider = bz.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
-             let Ez = zz;
-             this.applyGravity && (Ez = zz.add(this.XT().gravity)), bz.getNewPosition(this._oldPosition, Ez, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
-           }
-           _checkInputs() {
-             this._localDirection || (this._localDirection = iz.n.Zero(), this._transformedDirection = iz.n.Zero()), this.inputs.checkInputs(), super._checkInputs()
-           }
-           set needMoveForGravity(zz) {
-             this._needMoveForGravity = zz
-           }
-           get needMoveForGravity() {
-             return this._needMoveForGravity
-           }
-           _decideIfNeedsToMove() {
- ... (4 more removed lines; see GitHub link above)
+             if (lq) {
+               const qq = gq.Ba().getLoadedTexturesCache();
+               for (const gq of qq)
+                 if (gq.uniqueId === Eq.internalTextureUniqueId) {
+                   Oq = gq;
+                   break
+                 }
+             }
+             const mq = qq => {
+               if (qq && qq._texture && (qq._texture._cachedWrapU = null, qq._texture._cachedWrapV = null, qq._texture._cachedWrapR = null), Eq.samplingMode) {
+                 const gq = Eq.samplingMode;
+                 qq && qq.samplingMode !== gq && qq.updateSamplingMode(gq)
+               }
+               if (qq && Eq.animations)
+                 for (let gq = 0; gq < Eq.animations.length; gq++) {
+                   const Yq = Eq.animations[gq],
+ ... (61 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L964-L965` → after: `L1030-L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1030-L1032) · [Before (L964-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L964-L965)

```diff
-           dispose() {
-             this.inputs.clear(), super.dispose()
+           static CreateFromBase64String(Eq, gq, Yq, lq, Oq) {
+             let mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : qq.TRILINEAR_SAMPLINGMODE;
+             return new qq("data:" + gq, Yq, lq, Oq, mq, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, Eq, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0 … [truncated]
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L967-L968` → after: `L1034-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1034-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1034-L1044) · [Before (L967-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L967-L968)

```diff
-           getClassName() {
-             return "FreeCamera"
+           static LoadFromDataString(Eq, gq, Yq) {
+             let lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               Oq = arguments.length > 4 ? arguments[4] : void 0,
+               mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+               xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : qq.TRILINEAR_SAMPLINGMODE,
+               Aq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               cq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
+               uq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
+               Bq = arguments.length > 10 ? arguments[10] : void 0,
+               Wq = arguments.length > 11 ? arguments[11] : void 0;
+             return "data:" !== Eq.substring(0, 5) && (Eq = "data:" + Eq), new qq(Eq, Yq, Oq, mq, xq, Aq, cq, gq, lq, uq, void 0, void 0, Bq, Wq)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L972` → after: `L1048-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1048-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1048-L1149) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L972)

```diff
-           uz = [(0, nz.D)()], bz = [(0, nz.D)()], Mz = [(0, nz.G)()], tz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
+           Eq = [(0, lq.M)()], gq = [(0, lq.M)()], aq = [(0, lq.M)()], oq = [(0, lq.M)()], Pq = [(0, lq.M)()], Qq = [(0, lq.M)()], yq = [(0, lq.M)()], tq = [(0, lq.M)()], rq = [(0, lq.M)()], vq = [(0, lq.M)()], hq = [(0, lq.M)()], nq = [(0, lq.M)()], bq = [(0, lq.M)()], (0, Yq.f)( … [truncated]
+             kind: "getter",
+             name: "isBlocking",
+             static: !1,
+             private: !1,
+             access: {
+               has: qq => "isBlocking" in qq,
+               get: qq => qq.isBlocking
+             },
+             metadata: Oq
+           }, null, Zq), (0, Yq.f)(null, null, Eq, {
+             kind: "field",
+             name: "url",
+             static: !1,
+             private: !1,
+             access: {
+ ... (86 more added lines; see GitHub link above)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L974` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1151) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L974)

```diff
-             name: "ellipsoid",
+             name: "wAng",
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L978-L979` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1155-L1156) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L978-L979)

```diff
-               has: zz => "ellipsoid" in zz,
-               get: zz => zz.ellipsoid,
+               has: qq => "wAng" in qq,
+               get: qq => qq.wAng,
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L981` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1158) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L981)

```diff
-                 zz.ellipsoid = uz
+                 qq.wAng = Eq
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L985` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1162) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L985)

```diff
-           }, pz, dz), (0, Ez.h)(null, null, bz, {
+           }, Xq, wq), (0, Yq.f)(null, null, rq, {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L987` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1164) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L987)

```diff
-             name: "ellipsoidOffset",
+             name: "uRotationCenter",
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L991-L992` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1168-L1169) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L991-L992)

```diff
-               has: zz => "ellipsoidOffset" in zz,
-               get: zz => zz.ellipsoidOffset,
+               has: qq => "uRotationCenter" in qq,
+               get: qq => qq.uRotationCenter,
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L994` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1171) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L994)

```diff
-                 zz.ellipsoidOffset = uz
+                 qq.uRotationCenter = Eq
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L998` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1175) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L998)

```diff
-           }, Fz, Zz), (0, Ez.h)(null, null, Mz, {
+           }, Kq, Cq), (0, Yq.f)(null, null, vq, {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1000` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1177) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L1000)

```diff
-             name: "checkCollisions",
+             name: "vRotationCenter",
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1004-L1005` → after: `L1181-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1181-L1182) · [Before (L1004-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L1004-L1005)

```diff
-               has: zz => "checkCollisions" in zz,
-               get: zz => zz.checkCollisions,
+               has: qq => "vRotationCenter" in qq,
+               get: qq => qq.vRotationCenter,
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1007` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1184) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L1007)

```diff
-                 zz.checkCollisions = uz
+                 qq.vRotationCenter = Eq
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1011` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1188) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L1011)

```diff
-           }, Rz, Kz), (0, Ez.h)(null, null, tz, {
+           }, Iq, eq), (0, Yq.f)(null, null, hq, {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1013` → after: `L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1190) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L1013)

```diff
-             name: "applyGravity",
+             name: "wRotationCenter",
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1017-L1018` → after: `L1194-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1194-L1195) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L1017-L1018)

```diff
-               has: zz => "applyGravity" in zz,
-               get: zz => zz.applyGravity,
+               has: qq => "wRotationCenter" in qq,
+               get: qq => qq.wRotationCenter,
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1020` → after: `L1197-L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1197-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1197-L1210) · [Before (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L1020)

```diff
-                 zz.applyGravity = uz
+                 qq.wRotationCenter = Eq
+               }
+             },
+             metadata: Oq
+           }, Dq, qE), (0, Yq.f)(null, null, nq, {
+             kind: "field",
+             name: "homogeneousRotationInUVTransform",
+             static: !1,
+             private: !1,
+             access: {
+               has: qq => "homogeneousRotationInUVTransform" in qq,
+               get: qq => qq.homogeneousRotationInUVTransform,
+               set: (qq, Eq) => {
+                 qq.homogeneousRotationInUVTransform = Eq
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1030` → after: `L1220-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1220-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1220-L1226) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L1030)

```diff
-         })(), zz
+         })(), qq.SerializeBuffers = !0, qq.ForceSerializeBuffers = !1, qq.OnTextureLoadErrorObservable = new Oq.d, qq._SerializeInternalTextureUniqueId = !1, qq._CubeTextureParser = (qq, Eq, gq) => {
+           throw (0, cq.m)("CubeTexture")
+         }, qq._CreateMirror = (qq, Eq, gq, Yq) => {
+           throw (0, cq.m)("MirrorTexture")
+         }, qq._CreateRenderTargetTexture = (qq, Eq, gq, Yq, lq) => {
+           throw (0, cq.m)("RenderTargetTexture")
+         }, qq.NEAREST_SAMPLINGMODE = 1, qq.NEAREST_NEAREST_MIPLINEAR = 8, qq.BILINEAR_SAMPLINGMODE = 2, qq.LINEAR_LINEAR_MIPNEAREST = 11, qq.TRILINEAR_SAMPLINGMODE = 3, qq.LINEAR_LINEAR_MIPLINEAR = 3, qq.NEAREST_NEAREST_MIPNEAREST = 4, qq.NEAREST_LINEAR_MIPNEAREST = 5, qq.NEAREST … [truncated]
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1033` → after: `L1229-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1229-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/248.js#L1229-L1290) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/248.js#L1033)

```diff
-     Az || (Az = !0, (0, xz.c)("BABYLON.FreeCamera", Jz))
+ 
+     function Qq() {
+       Pq || (Pq = !0, (0, Aq.g)("BABYLON.Texture", oq), Hq.d._TextureParser = oq.Parse)
+     }
+   },
+   39774: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
+     });
+     class Yq {
+       constructor(qq, Eq) {
+         this.width = qq, this.height = Eq
+       }
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
+       }
+ ... (46 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/249.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/249.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L4)

```diff
-   39421: (zz, uz, bz) => {
+   39980: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L6)

```diff
-       b: () => dz
+       d: () => mq,
+       f: () => xq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L8-L142` → after: `L9-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L9-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L9-L24) · [Before (L8-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L8-L142)

```diff
-     var Ez = bz(39170),
-       nz = bz(39172),
-       iz = bz(36519),
-       lz = bz(36715),
-       Mz = bz(39384),
-       tz = bz(39291),
-       Hz = bz(36564),
-       Oz = bz(39358),
-       pz = bz(39182);
-     let dz = (() => {
-       var zz, uz;
-       let bz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz = Mz.c,
-         xz = [],
-         Jz = [],
-         Az = [],
-         Tz = [],
- ... (119 more removed lines; see GitHub link above)
+     var Yq = gq(38653),
+       lq = gq(39779),
+       Oq = gq(39951),
+       mq = {};
+     class xq {
+       constructor(qq) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = qq, this.checkInputs = () => {}
+       }
+       add(qq) {
+         const Eq = qq.getSimpleName();
+         this.attached[Eq] ? Yq.b.Warn("camera input of type " + Eq + " already exists on camera") : (this.attached[Eq] = qq, qq.camera = this.camera, qq.checkInputs && (this.checkInputs = this._addCheckInputs(qq.checkInputs.bind(qq))), this.attachedToElement && qq.attachControl(t … [truncated]
+       }
+       remove(qq) {
+         for (const Eq in this.attached) {
+           const gq = this.attached[Eq];
+           if (gq === qq) return gq.detachControl(), gq.camera = null, delete this.attached[Eq], void this.rebuildInputCheck()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L144-L146` → after: `L26-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L26-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L26-L30) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L144-L146)

```diff
-         getShadowGenerator() {
-           let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-           return null === this._shadowGenerators ? null : this._shadowGenerators.get(zz) ?? null
+       }
+       removeByType(qq) {
+         for (const Eq in this.attached) {
+           const gq = this.attached[Eq];
+           gq.getClassName() === qq && (gq.detachControl(), gq.camera = null, delete this.attached[Eq], this.rebuildInputCheck())
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L148-L149` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L32-L36) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L148-L149)

```diff
-         getShadowGenerators() {
-           return this._shadowGenerators
+       }
+       _addCheckInputs(qq) {
+         const Eq = this.checkInputs;
+         return () => {
+           Eq(), qq()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L151-L152` → after: `L38-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L38-L46) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L151-L152)

```diff
-         getAbsolutePosition() {
-           return iz.n.Zero()
+       }
+       attachInput(qq) {
+         this.attachedToElement && qq.attachControl(this.noPreventDefault)
+       }
+       attachElement() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           qq = !Oq.e.ForceAttachControlToAlwaysPreventDefault && qq, this.attachedToElement = !0, this.noPreventDefault = qq;
+           for (const Eq in this.attached) this.attached[Eq].attachControl(qq)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L154-L155` → after: `L48-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L48-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L48-L58) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L154-L155)

```diff
-         canAffectMesh(zz) {
-           return !zz || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(zz)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(zz)) && ((0 === this.includeOnlyWithLayerMask | … [truncated]
+       }
+       detachElement() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const Eq in this.attached) this.attached[Eq].detachControl(), qq && (this.attached[Eq].camera = null);
+         this.attachedToElement = !1
+       }
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const qq in this.attached) {
+           const Eq = this.attached[qq];
+           Eq.checkInputs && (this.checkInputs = this._addCheckInputs(Eq.checkInputs.bind(Eq)))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L157-L162` → after: `L60-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L60-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L60-L82) · [Before (L157-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L157-L162)

```diff
-         dispose(zz) {
-           let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           if (this._shadowGenerators) {
-             const zz = this._shadowGenerators.values();
-             for (let uz = zz.next(); !0 !== uz.done; uz = zz.next()) {
-               uz.value.dispose()
+       }
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       }
+       serialize(qq) {
+         const Eq = {};
+         for (const gq in this.attached) {
+           const qq = this.attached[gq],
+             Yq = lq.d.Serialize(qq);
+           Eq[qq.getClassName()] = Yq
+         }
+         qq.inputsmgr = Eq
+       }
+       parse(qq) {
+         const Eq = qq.inputsmgr;
+         if (Eq) {
+ ... (7 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L166-L211` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L85-L90) · [Before (L166-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L166-L211)

```diff
-           if (this.XT().stopAnimation(this), this._parentContainer) {
-             const zz = this._parentContainer.lights.indexOf(this);
-             zz > -1 && this._parentContainer.lights.splice(zz, 1), this._parentContainer = null
-           }
-           for (const bz of this.XT().meshes) bz._removeLightSource(this, !0);
-           this._uniformBuffer.dispose(), this.XT().removeLight(this), super.dispose(zz, uz)
-         }
-         getTypeID() {
-           return 0
-         }
-         getScaledIntensity() {
-           return this._photometricScale * this.intensity
-         }
-         clone(uz) {
-           let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           const Ez = zz.GetConstructorFromName(this.getTypeID(), uz, this.XT());
- ... (30 more removed lines; see GitHub link above)
+         } else
+           for (const gq in this.attached) {
+             const Eq = mq[this.attached[gq].getClassName()];
+             if (Eq) {
+               const Yq = lq.d.Parse((() => new Eq), qq, null);
+               this.remove(this.attached[gq]), this.add(Yq)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L215-L476` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L93-L94) · [Before (L215-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L215-L476)

```diff
-           return uz.autoAnimate && bz.beginAnimation(iz, uz.autoAnimateFrom, uz.autoAnimateTo, uz.autoAnimateLoop, uz.autoAnimateSpeed || 1), void 0 !== uz.isEnabled && iz.Zx(uz.isEnabled), iz._onParsed(uz, bz, Ez), iz
-         }
-         _onParsed(zz, uz) {}
-         _hookArrayForExcluded(zz) {
-           var uz = this;
-           const bz = zz.push;
-           zz.push = function() {
-             for (var Ez = arguments.length, nz = new Array(Ez), iz = 0; iz < Ez; iz++) nz[iz] = arguments[iz];
-             const lz = bz.apply(zz, nz);
-             if (uz._clusteredContainer) return lz;
-             for (const zz of nz) zz._resyncLightSource(uz);
-             return lz
-           };
-           const Ez = zz.splice;
-           zz.splice = (uz, bz) => {
-             const nz = Ez.call(zz, uz, bz ?? zz.length);
- ... (246 more removed lines; see GitHub link above)
+       }
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L478` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L96) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L478)

```diff
-   39384: (zz, uz, bz) => {
+   40878: (qq, Eq, gq) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L480` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L98) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L480)

```diff
-       c: () => pz
+       e: () => oq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L482-L493` → after: `L100-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L100-L115) · [Before (L482-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L482-L493)

```diff
-     var Ez = bz(39170),
-       nz = bz(36519),
-       iz = bz(39172),
-       lz = bz(36547),
-       Mz = bz(36543),
-       tz = bz(39061),
-       Hz = bz(39182);
-     class Oz {
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new lz.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
-       }
-     }
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(39644),
+       mq = gq(37139),
+       xq = gq(39748),
+       Aq = gq(40233),
+       cq = gq(37171),
+       uq = gq(37156),
+       Bq = gq(39779),
+       Wq = gq(39593),
+       Nq = gq(38653),
+       aq = gq(39799),
+       Vq = gq(37872),
+       dq = gq(39830);
+     var jq = gq(39653);
+     let Hq = !1;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L495-L533` → after: `L117-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L117-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L117-L139) · [Before (L495-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L495-L533)

```diff
-       var zz;
-       let uz, bz, pz, dz, Fz, Zz = [],
-         Rz = [],
-         Kz = [],
-         wz = [],
-         Xz = [],
-         fz = [],
-         sz = [],
-         rz = [],
-         oz = [],
-         Nz = [];
-       return zz = class {
-         static AddNodeConstructor(zz, uz) {
-           this._NodeConstructors[zz] = uz
-         }
-         static Construct(zz, uz, bz, Ez) {
- ... (23 more removed lines; see GitHub link above)
+         var qq;
+         let Eq, gq, cq, oq, Pq, Qq, yq, tq, rq, vq = xq.d,
+           hq = [],
+           nq = [],
+           bq = [],
+           iq = [],
+           Zq = [],
+           fq = [],
+           Mq = [],
+           Tq = [],
+           zq = [],
+           Sq = [],
+           pq = [],
+           Gq = [],
+           Lq = [],
+           Jq = [],
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L535-L562` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L141-L142) · [Before (L535-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L535-L562)

```diff
-           this._parentNode = zz, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), uz || this._removeFromSceneRootNodes()), this … [truncated]
-         }
-         get parent() {
-           return this._parentNode
-         }
-         get inheritVisibility() {
-           return this._nodeDataStorage._inheritVisibility
-         }
-         set inheritVisibility(zz) {
-           this._nodeDataStorage._inheritVisibility = zz
-         }
-         get isVisible() {
-           return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
-         }
-         set isVisible(zz) {
-           this._nodeDataStorage._isVisible = zz
- ... (12 more removed lines; see GitHub link above)
+           get boundingBoxSize() {
+             return this._boundingBoxSize
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L564-L667` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L144-L145) · [Before (L564-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L564-L667)

```diff
-         }
-         get animationPropertiesOverride() {
-           return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
-         }
-         set animationPropertiesOverride(zz) {
-           this._animationPropertiesOverride = zz
-         }
-         getClassName() {
-           return "Node"
-         }
-         set onDispose(zz) {
-           this._onDisposeObserver && this.aT.remove(this._onDisposeObserver), this._onDisposeObserver = this.aT.add(zz)
-         }
-         get onEnabledStateChangedObservable() {
-           return this._nodeDataStorage._onEnabledStateChangedObservable
-         }
- ... (88 more removed lines; see GitHub link above)
+           set rotationY(qq) {
+             this._rotationY = qq, this.setReflectionTextureMatrix(mq.e.RotationY(this._rotationY))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L669-L676` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L147-L148) · [Before (L669-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L669-L676)

```diff
-         }
-         Zx(zz) {
-           if (this._nodeDataStorage._isEnabled === zz) return;
-           const uz = this._hasEffectiveEnabledStateObservers(),
-             bz = uz ? this.isEnabled() : null;
-           if (this._nodeDataStorage._isEnabled = zz, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(zz), uz) {
-             const zz = this.isEnabled();
-             zz !== bz && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(zz)
+           get rotationY() {
+             return this._rotationY
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L678-L709` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L150-L151) · [Before (L678-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L678-L709)

```diff
-         }
-         isDescendantOf(zz) {
-           return !!this.parent && (this.parent === zz || this.parent.isDescendantOf(zz))
-         }
-         _getDescendants(zz) {
-           let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             bz = arguments.length > 2 ? arguments[2] : void 0;
-           if (this._children)
-             for (let Ez = 0; Ez < this._children.length; Ez++) {
-               const nz = this._children[Ez];
-               bz && !bz(nz) || zz.push(nz), uz || nz._getDescendants(zz, !1, bz)
-             }
-         }
-         getDescendants(zz, uz) {
-           const bz = [];
-           return this._getDescendants(bz, zz, uz), bz
- ... (16 more removed lines; see GitHub link above)
+           get noMipmap() {
+             return this._noMipmap
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L711-L716` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L153-L154) · [Before (L711-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L711-L716)

```diff
-           return null
-         }
-         createAnimationRange(uz, bz, Ez) {
-           if (!this._ranges[uz]) {
-             this._ranges[uz] = zz._AnimationRangeFactory(uz, bz, Ez);
-             for (let zz = 0, nz = this.animations.length; zz < nz; zz++) this.animations[zz] && this.animations[zz].createRange(uz, bz, Ez)
+           get forcedExtension() {
+             return this._forcedExtension
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L718-L733` → after: `L156-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L156-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L156-L266) · [Before (L718-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L718-L733)

```diff
-         }
-         deleteAnimationRange(zz) {
-           let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           for (let bz = 0, Ez = this.animations.length; bz < Ez; bz++) this.animations[bz] && this.animations[bz].deleteRange(zz, uz);
-           this._ranges[zz] = null
-         }
-         getAnimationRange(zz) {
-           return this._ranges[zz] || null
-         }
-         clone(uz, bz, Ez) {
-           const nz = Hz.e.Clone((() => new zz(uz, this.XT())), this);
-           if (bz && (nz.parent = bz), !Ez) {
-             const zz = this.getDescendants(!0);
-             for (let bz = 0; bz < zz.length; bz++) {
-               const Ez = zz[bz];
-               Ez.clone(uz + "." + Ez.name, nz)
+           constructor(qq, Eq) {
+             let gq, lq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               Oq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               xq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               cq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               Bq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               oq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
+               Pq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               Qq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
+               yq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+               tq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
+               rq = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
+               vq = arguments.length > 13 ? arguments[13] : void 0,
+               Rq = arguments.length > 14 ? arguments[14] : void 0;
+             super(Eq), this._delayedOnLoad = (0, Yq.i)(this, hq), this.onLoadObservable = new uq.d, this.url = (0, Yq.i)(this, nq, void 0), this.boundingBoxPosition = ((0, Yq.i)(this, bq), (0, Yq.i)(this, iq, mq.q.Zero())), this._boundingBoxSize = (0, Yq.i)(this, Zq), this._rotat … [truncated]
+               let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+ ... (95 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L736-L754` → after: `L270-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L270-L271) · [Before (L736-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L736-L754)

```diff
-           return nz
-         }
-         getAnimationRanges() {
-           const zz = [];
-           let uz;
-           for (uz in this._ranges) zz.push(this._ranges[uz]);
-           return zz
-         }
-         beginAnimation(zz, uz, bz, Ez) {
-           const nz = this.getAnimationRange(zz);
-           return nz ? this._scene.beginAnimation(this, nz.from, nz.to, uz, bz, Ez) : null
-         }
-         serializeAnimationRanges() {
-           const zz = [];
-           for (const uz in this._ranges) {
-             const bz = this._ranges[uz];
- ... (3 more removed lines; see GitHub link above)
+           delayLoad(qq) {
+             4 === this.delayLoadState && (qq && (this._forcedExtension = qq), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L756-L765` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L273-L274) · [Before (L756-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L756-L765)

```diff
-           return zz
-         }
-         computeWorldMatrix(zz) {
-           return this._worldMatrix || (this._worldMatrix = nz.d.Identity()), this._worldMatrix
-         }
-         dispose(zz) {
-           let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           if (this._nodeDataStorage._isDisposed = !0, !zz) {
-             const bz = this.getDescendants(!0);
-             for (const Ez of bz) Ez.dispose(zz, uz)
+           getReflectionTextureMatrix() {
+             return this._textureMatrix
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L767-L797` → after: `L276-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L276-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L276-L282) · [Before (L767-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L767-L797)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.aT.notifyObservers(this), this.aT.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
-           for (const bz of this._behaviors) bz.detach();
-           this._behaviors.length = 0, this.metadata = null
-         }
-         static ParseAnimationRanges(zz, uz, bz) {
-           if (uz.al)
-             for (let Ez = 0; Ez < uz.al.length; Ez++) {
-               const bz = uz.al[Ez];
-               zz.createAnimationRange(bz.name, bz.from, bz.to)
-             }
-         }
-         getHierarchyBoundingVectors() {
-           let zz, uz, bz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-             Ez = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           this.XT().incrementRenderId(), this.computeWorldMatrix(!0);
-           const iz = this;
- ... (15 more removed lines; see GitHub link above)
+           setReflectionTextureMatrix(qq) {
+             if (qq.updateFlag === this._textureMatrix.updateFlag) return;
+             if (qq.isIdentity() !== this._textureMatrix.isIdentity() && this.ZJ()?.markAllMaterialsAsDirty(1, (qq => -1 !== qq.getActiveTextures().indexOf(this))), this._textureMatrix = qq, !this.ZJ()?.useRightHandedSystem) return;
+             const Eq = mq.o.Na[0],
+               gq = mq.o.Quaternion[0],
+               Yq = mq.o.Na[1];
+             this._textureMatrix.decompose(Eq, gq, Yq), gq.z *= -1, gq.w *= -1, mq.e.ComposeToRef(Eq, gq, Yq, this._textureMatrixRefraction)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L799-L801` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L284-L285) · [Before (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L799-L801)

```diff
-           return {
-             min: zz,
-             max: uz
+           getRefractionTextureMatrix() {
+             return this.ZJ()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L803-L880` → after: `L287-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L287-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/249.js#L287-L620) · [Before (L803-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/249.js#L803-L880)

```diff
-         }
-       }, (() => {
-         const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         uz = [(0, iz.G)()], bz = [(0, iz.G)()], pz = [(0, iz.G)()], dz = [(0, iz.G)()], Fz = [(0, iz.G)()], (0, Ez.h)(null, null, uz, {
-           kind: "field",
-           name: "name",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "name" in zz,
-             get: zz => zz.name,
-             set: (zz, uz) => {
-               zz.name = uz
-             }
-           },
-           metadata: nz
- ... (62 more removed lines; see GitHub link above)
+           _loadTexture() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+               Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+             const gq = this.ZJ(),
+               Yq = this._texture;
+             this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
+             const lq = () => {
+                 this.onLoadObservable.notifyObservers(this), Yq && (Yq.dispose(), this.ZJ()?.markAllMaterialsAsDirty(1)), qq && qq()
+               },
+               mq = (qq, gq) => {
+                 this._loadingError = !0, this._errorObject = {
+                   message: qq,
+                   exception: gq
+                 }, Eq && Eq(qq, gq), Aq.d.OnTextureLoadErrorObservable.notifyObservers(this)
+               };
+             this._texture ? this._texture.isReady ? Oq.c.SetImmediate((() => lq())) : this._texture.onLoadedObservable.add((() => lq())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, gq, this._lodScale, this._lodOffset, qq, mq, th … [truncated]
+ ... (318 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/250.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/250.js` (109 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L4)

```diff
-   40281: (zz, uz, bz) => {
+   39941: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L6)

```diff
-       e: () => gz
+       c: () => hq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L8-L753` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L8-L14) · [Before (L8-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L8-L753)

```diff
-     var Ez = bz(39170),
-       nz = bz(39172),
-       iz = bz(36547),
-       lz = bz(36519),
-       Mz = bz(36553),
-       tz = bz(39384),
-       Hz = bz(39584),
-       Oz = bz(39331),
-       pz = bz(39085),
-       dz = bz(36526);
-     class Fz {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
-       }
-       get name() {
-         return "AutoRotation"
- ... (730 more removed lines; see GitHub link above)
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(37139),
+       mq = gq(39943),
+       xq = gq(39980),
+       Aq = gq(39921),
+       cq = gq(39845);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L779-L806` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L379) · [Before (L779-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L779-L806)

```diff
-           this.camera = (0, Ez.j)(this, Rz), this.keysUp = (0, Ez.j)(this, Kz, [38]), this.keysDown = ((0, Ez.j)(this, wz), (0, Ez.j)(this, Xz, [40])), this.keysLeft = ((0, Ez.j)(this, fz), (0, Ez.j)(this, sz, [37])), this.keysRight = ((0, Ez.j)(this, oz), (0, Ez.j)(this, Nz, [39 … [truncated]
-             ctrl: !1,
-             alt: !1
-           }, this._keyboardConditions = {
-             modifiers: this._keyboardModifiers
-           }, this._rotateDirection = new lz.m, this._panDirection = new lz.m
-         }
-         get useAltToZoom() {
-           return this._useAltToZoom
-         }
-         set useAltToZoom(zz) {
-           this._useAltToZoom = zz, this._applyUseAltToZoomToInputMap()
-         }
-         _applyUseAltToZoomToInputMap() {
-           if (!this.camera?.movement) return;
-           const zz = this.camera.movement.input,
- ... (12 more removed lines; see GitHub link above)
+           this.wheelPrecisionX = (0, Yq.i)(this, mq, 3), this.wheelPrecisionY = ((0, Yq.i)(this, xq), (0, Yq.i)(this, Aq, 3)), this.wheelPrecisionZ = ((0, Yq.i)(this, uq), (0, Yq.i)(this, Nq, 3)), this.onChangedObservable = ((0, Yq.i)(this, Vq), new Bq.d), this._wheelDeltaX = 0,  … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L809-L822` → after: `L382-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L382-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L382-L387) · [Before (L809-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L809-L822)

```diff
-           zz = rz.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XT(), this._engine = this._scene.uR(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((uz => {
-             const bz = uz.event;
-             if (!bz.metaKey)
-               if (uz.type === xz.b.KEYDOWN) {
-                 if (this._ctrlPressed = bz.ctrlKey, this._altPressed = bz.altKey, -1 !== this.keysUp.indexOf(bz.keyCode) || -1 !== this.keysDown.indexOf(bz.keyCode) || -1 !== this.keysLeft.indexOf(bz.keyCode) || -1 !== this.keysRight.indexOf(bz.keyCode) || -1 !== this.keysReset.i … [truncated]
-                   -1 === this._keys.indexOf(bz.keyCode) && this._keys.push(bz.keyCode), bz.preventDefault && (zz || bz.preventDefault())
-                 }
-               } else if (-1 !== this.keysUp.indexOf(bz.keyCode) || -1 !== this.keysDown.indexOf(bz.keyCode) || -1 !== this.keysLeft.indexOf(bz.keyCode) || -1 !== this.keysRight.indexOf(bz.keyCode) || -1 !== this.keysReset.indexOf(bz.keyCode) || -1 !== this.keysZoomIn.indexOf(bz.k … [truncated]
-               const uz = this._keys.indexOf(bz.keyCode);
-               uz >= 0 && this._keys.splice(uz, 1), bz.preventDefault && (zz || bz.preventDefault())
-             }
-           })))
+           qq = cq.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = Eq => {
+             if (Eq.type !== Wq.b.POINTERWHEEL) return;
+             const gq = Eq.event,
+               Yq = gq.deltaMode === aq.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
+             this._wheelDeltaX += this.wheelPrecisionX * Yq * gq.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Yq * gq.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Yq * gq.deltaZ / this._normalize, gq.preventDefault && (qq || gq.pre … [truncated]
+           }, this._observer = this.camera.ZJ()._inputManager._addCameraPointerObserver(this._wheel, Wq.b.POINTERWHEEL)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L825` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L390) · [Before (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L825)

```diff
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+           this._observer && (this.camera.ZJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L828-L848` → after: `L393-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L393-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L393-L397) · [Before (L828-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L828-L848)

```diff
-           if (this._onKeyboardObserver) {
-             const zz = this.camera,
-               uz = zz.movement.input;
-             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
-             const bz = this._rotateDirection.set(0, 0),
-               Ez = this._panDirection.set(0, 0);
-             let nz = 0,
-               iz = 0;
-             for (let lz = 0; lz < this._keys.length; lz++) {
-               const Mz = this._keys[lz];
-               if (this._keyboardConditions.key = Mz, -1 === this.keysReset.indexOf(Mz)) {
-                 const zz = uz.resolveInteraction("keyboard", this._keyboardConditions);
-                 if (zz)
-                   if ("pan" === zz.interaction) iz = Math.max(iz, zz.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Mz) ? Ez.x -= 1 : -1 !== this.keysRight.indexOf(Mz) ? Ez.x += 1 : -1 !== this.keysUp.indexOf(Mz) ? Ez.y += 1 : -1 !== this.keysDown.index … [truncated]
-                   else if ("zoom" === zz.interaction) {
-                   const bz = zz.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Mz) || -1 !== this.keysZoomIn.indexOf(Mz) ? uz.handlers.zoom(bz) : -1 === this.keysDown.indexOf(Mz) && -1 === this.keysZoomOut.indexOf(Mz) || uz.handlers.zoom(-bz)
- ... (5 more removed lines; see GitHub link above)
+           this.onChangedObservable.notifyObservers({
+             wheelDeltaX: this._wheelDeltaX,
+             wheelDeltaY: this._wheelDeltaY,
+             wheelDeltaZ: this._wheelDeltaZ
+           }), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L851` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L400) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L851)

```diff
-           return "ArcRotateCameraKeyboardMoveInput"
+           return "BaseCameraMouseWheelInput"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L854` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L403) · [Before (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L854)

```diff
-           return "keyboard"
+           return "mousewheel"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L858-L860` → after: `L407-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L407-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L407-L409) · [Before (L858-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L858-L860)

```diff
-         uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], Mz = [(0, nz.G)()], tz = [(0, nz.G)()], Hz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.G)()], dz = [(0, nz.G)()], Fz = [(0, nz.G)()], Zz = [(0, nz.G)()], (0, Ez.h)(zz, null, Zz, {
-           kind: "getter",
-           name: "useAltToZoom",
+         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
+           kind: "field",
+           name: "wheelPrecisionX",
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L864-L865` → after: `L413-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L413-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L413-L417) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L864-L865)

```diff
-             has: zz => "useAltToZoom" in zz,
-             get: zz => zz.useAltToZoom
+             has: qq => "wheelPrecisionX" in qq,
+             get: qq => qq.wheelPrecisionX,
+             set: (qq, Eq) => {
+               qq.wheelPrecisionX = Eq
+             }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L868` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L420) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L868)

```diff
-         }, null, Rz), (0, Ez.h)(null, null, uz, {
+         }, mq, xq), (0, Yq.f)(null, null, gq, {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L870` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L422) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L870)

```diff
-           name: "keysUp",
+           name: "wheelPrecisionY",
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L874-L875` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L426-L427) · [Before (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L874-L875)

```diff
-             has: zz => "keysUp" in zz,
-             get: zz => zz.keysUp,
+             has: qq => "wheelPrecisionY" in qq,
+             get: qq => qq.wheelPrecisionY,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L877` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L429) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L877)

```diff
-               zz.keysUp = uz
+               qq.wheelPrecisionY = Eq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L881` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L433) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L881)

```diff
-         }, Kz, wz), (0, Ez.h)(null, null, bz, {
+         }, Aq, uq), (0, Yq.f)(null, null, Oq, {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L883` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L435) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L883)

```diff
-           name: "keysDown",
+           name: "wheelPrecisionZ",
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L887-L888` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L439-L440) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L887-L888)

```diff
-             has: zz => "keysDown" in zz,
-             get: zz => zz.keysDown,
+             has: qq => "wheelPrecisionZ" in qq,
+             get: qq => qq.wheelPrecisionZ,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L890` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L442) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L890)

```diff
-               zz.keysDown = uz
+               qq.wheelPrecisionZ = Eq
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L894-L896` → after: `L446-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L446-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L446-L563) · [Before (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L894-L896)

```diff
-         }, Xz, fz), (0, Ez.h)(null, null, iz, {
-           kind: "field",
-           name: "keysLeft",
+         }, Nq, Vq), cq && Object.defineProperty(qq, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: cq
+         })
+       })(), qq
+     })();
+     var dq;
+     ! function(qq) {
+       qq[qq.MoveRelative = 0] = "MoveRelative", qq[qq.RotateRelative = 1] = "RotateRelative", qq[qq.MoveScene = 2] = "MoveScene"
+     }(dq || (dq = {}));
+     let jq = (() => {
+       var qq;
+       let Eq, gq, mq, xq, Aq, cq, uq, Bq, Wq, Nq = Vq,
+         aq = [];
+ ... (102 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L900-L901` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L567) · [Before (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L900-L901)

```diff
-             has: zz => "keysLeft" in zz,
-             get: zz => zz.keysLeft,
+             has: qq => "wheelXMoveRelative" in qq,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L903` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L569) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L903)

```diff
-               zz.keysLeft = uz
+               qq.wheelXMoveRelative = Eq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L907-L909` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L573-L575) · [Before (L907-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L907-L909)

```diff
-         }, sz, oz), (0, Ez.h)(null, null, Mz, {
-           kind: "field",
-           name: "keysRight",
+         }, null, aq), (0, Yq.f)(qq, null, gq, {
+           kind: "setter",
+           name: "wheelYMoveRelative",
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L913-L914` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L579) · [Before (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L913-L914)

```diff
-             has: zz => "keysRight" in zz,
-             get: zz => zz.keysRight,
+             has: qq => "wheelYMoveRelative" in qq,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L916` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L581) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L916)

```diff
-               zz.keysRight = uz
+               qq.wheelYMoveRelative = Eq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L920-L922` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L585-L587) · [Before (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L920-L922)

```diff
-         }, Nz, vz), (0, Ez.h)(null, null, tz, {
-           kind: "field",
-           name: "keysReset",
+         }, null, aq), (0, Yq.f)(qq, null, mq, {
+           kind: "setter",
+           name: "wheelZMoveRelative",
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L926-L927` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L591) · [Before (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L926-L927)

```diff
-             has: zz => "keysReset" in zz,
-             get: zz => zz.keysReset,
+             has: qq => "wheelZMoveRelative" in qq,
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L929` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L593) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L929)

```diff
-               zz.keysReset = uz
+               qq.wheelZMoveRelative = Eq
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L933-L935` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L597-L599) · [Before (L933-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L933-L935)

```diff
-         }, Jz, Az), (0, Ez.h)(null, null, Hz, {
-           kind: "field",
-           name: "keysZoomIn",
+         }, null, aq), (0, Yq.f)(qq, null, xq, {
+           kind: "setter",
+           name: "wheelXRotateRelative",
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L939-L940` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L603) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L939-L940)

```diff
-             has: zz => "keysZoomIn" in zz,
-             get: zz => zz.keysZoomIn,
+             has: qq => "wheelXRotateRelative" in qq,
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L942` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L605) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L942)

```diff
-               zz.keysZoomIn = uz
+               qq.wheelXRotateRelative = Eq
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L946-L948` → after: `L609-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L609-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L609-L611) · [Before (L946-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L946-L948)

```diff
-         }, Tz, Lz), (0, Ez.h)(null, null, Oz, {
-           kind: "field",
-           name: "keysZoomOut",
+         }, null, aq), (0, Yq.f)(qq, null, Aq, {
+           kind: "setter",
+           name: "wheelYRotateRelative",
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L952-L953` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L615) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L952-L953)

```diff
-             has: zz => "keysZoomOut" in zz,
-             get: zz => zz.keysZoomOut,
+             has: qq => "wheelYRotateRelative" in qq,
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L955` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L617) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L955)

```diff
-               zz.keysZoomOut = uz
+               qq.wheelYRotateRelative = Eq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L959-L961` → after: `L621-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L621-L623) · [Before (L959-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L959-L961)

```diff
-         }, Pz, Gz), (0, Ez.h)(null, null, pz, {
-           kind: "field",
-           name: "panningSensibility",
+         }, null, aq), (0, Yq.f)(qq, null, cq, {
+           kind: "setter",
+           name: "wheelZRotateRelative",
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L965-L966` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L627) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L965-L966)

```diff
-             has: zz => "panningSensibility" in zz,
-             get: zz => zz.panningSensibility,
+             has: qq => "wheelZRotateRelative" in qq,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L968` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L629) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L968)

```diff
-               zz.panningSensibility = uz
+               qq.wheelZRotateRelative = Eq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L972-L974` → after: `L633-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L633-L635) · [Before (L972-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L972-L974)

```diff
-         }, az, Vz), (0, Ez.h)(null, null, dz, {
-           kind: "field",
-           name: "zoomingSensibility",
+         }, null, aq), (0, Yq.f)(qq, null, uq, {
+           kind: "setter",
+           name: "wheelXMoveScene",
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L978-L979` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L639) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L978-L979)

```diff
-             has: zz => "zoomingSensibility" in zz,
-             get: zz => zz.zoomingSensibility,
+             has: qq => "wheelXMoveScene" in qq,
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L981` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L641) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L981)

```diff
-               zz.zoomingSensibility = uz
+               qq.wheelXMoveScene = Eq
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L985-L987` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L645-L647) · [Before (L985-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L985-L987)

```diff
-         }, mz, qz), (0, Ez.h)(null, null, Fz, {
-           kind: "field",
-           name: "angularSpeed",
+         }, null, aq), (0, Yq.f)(qq, null, Bq, {
+           kind: "setter",
+           name: "wheelYMoveScene",
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L991-L992` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L651) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L991-L992)

```diff
-             has: zz => "angularSpeed" in zz,
-             get: zz => zz.angularSpeed,
+             has: qq => "wheelYMoveScene" in qq,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L994` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L653) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L994)

```diff
-               zz.angularSpeed = uz
+               qq.wheelYMoveScene = Eq
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L998` → after: `L657-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L657-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L657-L669) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L998)

```diff
-         }, hz, Uz), lz && Object.defineProperty(zz, Symbol.metadata, {
+         }, null, aq), (0, Yq.f)(qq, null, Wq, {
+           kind: "setter",
+           name: "wheelZMoveScene",
+           static: !1,
+           private: !1,
+           access: {
+             has: qq => "wheelZMoveScene" in qq,
+             set: (qq, Eq) => {
+               qq.wheelZMoveScene = Eq
+             }
+           },
+           metadata: Oq
+         }, null, aq), Oq && Object.defineProperty(qq, Symbol.metadata, {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1006-L1008` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L677) · [Before (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1006-L1008)

```diff
-     sz.e.ArcRotateCameraKeyboardMoveInput = Jz;
-     var Az = bz(37239),
-       Tz = bz(39341);
+     xq.d.FreeCameraMouseWheelInput = jq;
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1011-L1013` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L680) · [Before (L1011-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1011-L1013)

```diff
-       let uz, bz, iz, tz = [],
-         Hz = [],
-         pz = [],
+       let Eq, gq, mq = [],
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1019-L1024` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L686-L687) · [Before (L1019-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1019-L1024)

```diff
-           this.wheelPrecision = (0, Ez.j)(this, tz, 3), this.zoomToMouseLocation = ((0, Ez.j)(this, Hz), (0, Ez.j)(this, pz, !1)), this.wheelDeltaPercentage = ((0, Ez.j)(this, Fz), (0, Ez.j)(this, Zz, 0)), this.customComputeDeltaFromMouseWheel = ((0, Ez.j)(this, Rz), null), this. … [truncated]
-         }
-         _computeDeltaFromMouseWheelLegacyEvent(zz, uz) {
-           let bz;
-           const Ez = .01 * zz * this.wheelDeltaPercentage * uz;
-           return bz = zz > 0 ? Ez / (1 + this.wheelDeltaPercentage) : Ez * (1 + this.wheelDeltaPercentage), bz
+           let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           this.allowMouse = qq, this.touchAngularSensibility = (0, Yq.i)(this, mq, 2e5), this.touchMoveSensibility = ((0, Yq.i)(this, xq), (0, Yq.i)(this, Aq, 250)), this.singleFingerRotate = ((0, Yq.i)(this, uq), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1027-L1040` → after: `L690-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L690-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L690-L713) · [Before (L1027-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1027-L1040)

```diff
-           zz = rz.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = uz => {
-             if (uz.type !== Oz.c.POINTERWHEEL) return;
-             const bz = uz.event;
-             let Ez;
-             const nz = bz.deltaMode === Tz.e.DOM_DELTA_LINE ? 40 : 1,
-               iz = -bz.deltaY * nz;
-             if (this.customComputeDeltaFromMouseWheel) Ez = this.customComputeDeltaFromMouseWheel(iz, this, bz);
-             else if (this.wheelDeltaPercentage) {
-               if (Ez = this._computeDeltaFromMouseWheelLegacyEvent(iz, this.camera.radius), Ez > 0) {
-                 const zz = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
-                 let uz = this.camera.radius,
-                   bz = zz + Ez;
-                 for (let Ez = 0; Ez < 20 && !(uz <= bz) && !(Math.abs(bz * this.camera.inertia) < .001); Ez++) uz -= bz, bz *= this.camera.inertia;
-                 uz = (0, Mz.Clamp)(uz, 0, Number.MAX_VALUE), Ez = this._computeDeltaFromMouseWheelLegacyEvent(iz, uz)
+           qq = cq.f.BackCompatCameraNoPreventDefault(arguments);
+           let Eq = null;
+           if (void 0 === this._pointerInput && (this._onLostFocus = () => {
+               this._offsetX = null, this._offsetY = null
+             }, this._pointerInput = gq => {
+               const Yq = gq.event,
+                 lq = "mouse" === Yq.pointerType || this._isSafari && "undefined" === typeof Yq.pointerType;
+               if (this.allowMouse || !lq)
+                 if (gq.type === Wq.b.POINTERDOWN) {
+                   if (qq || Yq.preventDefault(), this._pointerPressed.push(Yq.pointerId), 1 !== this._pointerPressed.length) return;
+                   Eq = {
+                     x: Yq.clientX,
+                     y: Yq.clientY
+                   }
+                 } else if (gq.type === Wq.b.POINTERUP) {
+                 qq || Yq.preventDefault();
+ ... (8 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1042-L1047` → after: `L715-L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L715-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L715-L718) · [Before (L1042-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1042-L1047)

```diff
-             } else {
-               const zz = this.camera.movement.input.getEntry("wheel", "zoom");
-               Ez = iz * (zz?.sensitivity ?? 1 / (40 * this.wheelPrecision))
-             }
-             Ez && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Ez)) : this.camera.movement.zoomAccumulatedPixels += Ez), bz.preventDefault && (zz || bz.preventDefault())
-           }, this._observer = this.camera.XT()._inputManager._addCameraPointerObserver(this._wheel, Oz.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Vk(0)
+             }), this._observer = this.camera.ZJ()._inputManager._addCameraPointerObserver(this._pointerInput, Wq.b.POINTERDOWN | Wq.b.POINTERUP | Wq.b.POINTERMOVE), this._onLostFocus) {
+             const qq = this.camera.Ba().getInputElement();
+             qq && qq.addEventListener("blur", this._onLostFocus)
+           }
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1050` → after: `L721-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L721-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L721-L727) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1050)

```diff
-           this._observer && (this.camera.XT()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
+           if (this._pointerInput) {
+             if (this._observer && (this.camera.ZJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const qq = this.camera.Ba().getInputElement();
+               qq && qq.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+             }
+             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
+           }
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1053-L1058` → after: `L730-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L730-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L730-L746) · [Before (L1053-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1053-L1058)

```diff
-           if (!this.zoomToMouseLocation) return;
-           const zz = this.camera;
-           if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(zz.inertialAlphaOffset) + Math.abs(zz.inertialBetaOffset) + Math.abs(zz.inertialRadiusOffset)) {
-             this._updateHitPlane(), zz.target.addInPlace(this._inertialPanning), zz.radius -= this._zoomToMouseRadiusOffset;
-             const uz = zz.movement.getFrameIndependentDecay(zz.inertia);
-             this._inertialPanning.scaleInPlace(uz), this._zoomToMouseRadiusOffset *= uz, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < dz.b && (this._zoomToMouseRadiusOffset = 0)
+           if (null === this._offsetX || null === this._offsetY) return;
+           if (0 === this._offsetX && 0 === this._offsetY) return;
+           const qq = this.camera,
+             Eq = qq.movement.input,
+             gq = Eq.getEntry("touch", "rotate"),
+             Yq = Eq.getEntry("touch", "translate"),
+             lq = qq._calculateHandednessMultiplier(),
+             mq = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
+           if (gq) {
+             const Eq = gq.sensitivity ?? 1 / this.touchAngularSensibility;
+             qq.cameraRotation.y = this._offsetX * lq * Eq, mq && (qq.cameraRotation.x = -this._offsetY * lq * Eq)
+           }
+           if (!mq && Yq) {
+             const Eq = qq._computeLocalCameraSpeed(),
+               gq = Yq.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
+               lq = Oq.o.Na[0];
+ ... (1 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1062` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L750) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1062)

```diff
-           return "ArcRotateCameraMouseWheelInput"
+           return "FreeCameraTouchInput"
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1065-L1098` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L753) · [Before (L1065-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1065-L1098)

```diff
-           return "mousewheel"
-         }
-         _updateHitPlane() {
-           const zz = this.camera,
-             uz = zz.target.subtract(zz.position);
-           this._hitPlane = Az.b.FromPositionAndNormal(zz.target, uz)
-         }
-         _getPosition() {
-           const zz = this.camera,
-             uz = zz.XT(),
-             bz = uz.createPickingRay(uz.pointerX, uz.pointerY, lz.d.Identity(), zz, !1);
-           0 === zz.targetScreenOffset.x && 0 === zz.targetScreenOffset.y || (this._viewOffset.set(zz.targetScreenOffset.x, zz.targetScreenOffset.y, 0), zz.getViewMatrix().invertToRef(zz._cameraTransformMatrix), this._globalOffset = lz.n.TransformNormal(this._viewOffset, zz._camer … [truncated]
-           let Ez = 0;
-           return this._hitPlane && (Ez = bz.intersectsPlane(this._hitPlane) ?? 0), bz.origin.addInPlace(bz.direction.scaleInPlace(Ez))
-         }
-         _zoomToMouse(zz) {
- ... (18 more removed lines; see GitHub link above)
+           return "touch"
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1102-L1115` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L757) · [Before (L1102-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1102-L1115)

```diff
-         uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
-           kind: "field",
-           name: "wheelPrecision",
-           static: !1,
-           private: !1,
-           access: {
-             has: zz => "wheelPrecision" in zz,
-             get: zz => zz.wheelPrecision,
-             set: (zz, uz) => {
-               zz.wheelPrecision = uz
-             }
-           },
-           metadata: lz
-         }, tz, Hz), (0, Ez.h)(null, null, bz, {
+         Eq = [(0, lq.M)()], gq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1117` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L759) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1117)

```diff
-           name: "zoomToMouseLocation",
+           name: "touchAngularSensibility",
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1121-L1122` → after: `L763-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L763-L764) · [Before (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1121-L1122)

```diff
-             has: zz => "zoomToMouseLocation" in zz,
-             get: zz => zz.zoomToMouseLocation,
+             has: qq => "touchAngularSensibility" in qq,
+             get: qq => qq.touchAngularSensibility,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1124` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L766) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1124)

```diff
-               zz.zoomToMouseLocation = uz
+               qq.touchAngularSensibility = Eq
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1128` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L770) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1128)

```diff
-         }, pz, Fz), (0, Ez.h)(null, null, iz, {
+         }, mq, xq), (0, Yq.f)(null, null, gq, {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1130` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L772) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1130)

```diff
-           name: "wheelDeltaPercentage",
+           name: "touchMoveSensibility",
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1134-L1135` → after: `L776-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L776-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L776-L777) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1134-L1135)

```diff
-             has: zz => "wheelDeltaPercentage" in zz,
-             get: zz => zz.wheelDeltaPercentage,
+             has: qq => "touchMoveSensibility" in qq,
+             get: qq => qq.touchMoveSensibility,
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1137` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L779) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1137)

```diff
-               zz.wheelDeltaPercentage = uz
+               qq.touchMoveSensibility = Eq
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1149-L1151` → after: `L791-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L791-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L791-L793) · [Before (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1149-L1151)

```diff
-     sz.e.ArcRotateCameraMouseWheelInput = Lz;
-     var Pz, Gz, az = bz(39061);
-     class Vz extends sz.i {
+     xq.d.FreeCameraTouchInput = Hq;
+     var oq, Pq, Qq, yq = gq(39636);
+     class tq extends xq.f {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1153` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L795) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1153)

```diff
-         super(zz)
+         super(qq), this._mouseInput = null, this._mouseWheelInput = null
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1155` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L797) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1155)

```diff
-       addMouseWheel() {
+       addKeyboard() {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1158-L1159` → after: `L800-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L800-L802) · [Before (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1158-L1159)

```diff
-       addPointers() {
-         return this.add(new vz), this
+       addMouse() {
+         let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return this._mouseInput || (this._mouseInput = new Nq(qq), this.add(this._mouseInput)), this
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1161-L1162` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L804-L805) · [Before (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1161-L1162)

```diff
-       addKeyboard() {
-         return this.add(new Jz), this
+       removeMouse() {
+         return this._mouseInput && this.remove(this._mouseInput), this
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1164-L1180` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L807-L808) · [Before (L1164-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1164-L1180)

```diff
-     }(Pz = Vz.prototype).addVRDeviceOrientation ?? (Pz.addVRDeviceOrientation = (0, az.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Gz = Vz.prototype).addGamepad ?? (Gz.addGamepad = (0, az.h)("ArcRotateCameraInputsManager", "addGamepad"));
-     var mz = bz(36564),
-       qz = bz(39393),
-       hz = bz(39397);
-     class Uz extends qz.c {
-       constructor(zz, uz, bz) {
-         super(zz, uz, bz), this.input = new hz.d({
-           pan: (zz, uz) => {
-             this.panAccumulatedPixels.x += zz, this.panAccumulatedPixels.y += uz
-           },
-           rotate: (zz, uz) => {
-             this.rotationAccumulatedPixels.x += zz, this.rotationAccumulatedPixels.y += uz
-           },
-           zoom: zz => {
-             this.zoomAccumulatedPixels += zz
-           }
- ... (1 more removed lines; see GitHub link above)
+       addMouseWheel() {
+         return this._mouseWheelInput || (this._mouseWheelInput = new jq, this.add(this._mouseWheelInput)), this
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1182-L1220` → after: `L810-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L810-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L810-L817) · [Before (L1182-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1182-L1220)

```diff
-       _createDefaultInputMap() {
-         return [{
-           source: "pointer",
-           button: 0,
-           modifiers: {
-             ctrl: !0
-           },
-           interaction: "pan"
-         }, {
-           source: "pointer",
-           button: 0,
-           interaction: "rotate"
-         }, {
-           source: "pointer",
-           button: 2,
-           interaction: "pan"
- ... (23 more removed lines; see GitHub link above)
+       removeMouseWheel() {
+         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
+       }
+       addTouch() {
+         return this.add(new Hq), this
+       }
+       clear() {
+         super.clear(), this._mouseInput = null
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1222-L1226` → after: `L819-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L819-L821) · [Before (L1222-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1222-L1226)

```diff
-     }
- 
-     function cz(zz, uz) {
-       return isNaN(zz) ? uz : zz
-     }
+     }(oq = tq.prototype).addDeviceOrientation ?? (oq.addDeviceOrientation = (0, yq.i)("FreeCameraInputsManager", "addDeviceOrientation")), (Pq = tq.prototype).addVirtualJoystick ?? (Pq.addVirtualJoystick = (0, yq.i)("FreeCameraInputsManager", "addVirtualJoystick")), (Qq = tq.prot … [truncated]
+     var rq = gq(39653),
+       vq = gq(37171);
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1229-L1268` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L824) · [Before (L1229-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1229-L1268)

```diff
-         let uz, bz, tz, Oz, pz, Zz, Rz, sz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz, az, mz, qz, hz, gz, Sz, yz, Dz, Qz, Wz, ez = fz.i,
-           jz = [],
-           Iz = [],
-           Bz = [],
-           Cz = [],
-           Yz = [],
-           kz = [],
-           zu = [],
-           uu = [],
-           bu = [],
-           Eu = [],
-           nu = [],
-           iu = [],
-           lu = [],
-           Mu = [],
-           tu = [],
- ... (24 more removed lines; see GitHub link above)
+         let Eq, gq, xq, Aq, uq = mq.h,
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1278-L1294` → after: `L834-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L834-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L834-L836) · [Before (L1278-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1278-L1294)

```diff
-           get target() {
-             return this.pI
-           }
-           set target(zz) {
-             this.setTarget(zz)
-           }
-           get targetHost() {
-             return this._targetHost
-           }
-           set targetHost(zz) {
-             zz && this.setTarget(zz)
-           }
-           getTarget() {
-             return this.target
-           }
-           get position() {
- ... (1 more removed lines; see GitHub link above)
+           get angularSensibility() {
+             const qq = this.inputs.attached.mouse;
+             return qq ? qq.angularSensibility : 0
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1296-L1393` → after: `L838-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L838-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L838-L840) · [Before (L1296-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1296-L1393)

```diff
-           set position(zz) {
-             this.setPosition(zz)
-           }
-           set upVector(zz) {
-             this._upToYMatrix || (this._yToUpMatrix = new lz.d, this._upToYMatrix = new lz.d, this._upVector = lz.n.Zero()), zz.normalize(), this._upVector.euz(zz), this.setMatUp()
-           }
-           get upVector() {
-             return this._upVector
-           }
-           setMatUp() {
-             lz.d.RotationAlignToRef(lz.n.UpReadOnly, this._upVector, this._yToUpMatrix), lz.d.RotationAlignToRef(this._upVector, lz.n.UpReadOnly, this._upToYMatrix)
-           }
-           get inertialAlphaOffset() {
-             if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
-             if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
-             const zz = this.movement.rotationDeltaCurrentFrame.x;
- ... (82 more removed lines; see GitHub link above)
+           set angularSensibility(qq) {
+             const Eq = this.inputs.attached.mouse;
+             Eq && (Eq.angularSensibility = qq)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1427-L1558` → after: `L890-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L890-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L890-L892) · [Before (L1427-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1427-L1558)

```diff
-           get wheelPrecision() {
-             const zz = this.inputs.attached.mousewheel;
-             return zz ? zz.wheelPrecision : 0
-           }
-           set wheelPrecision(zz) {
-             const uz = this.inputs.attached.mousewheel;
-             uz && (uz.wheelPrecision = zz)
-           }
-           get zoomToMouseLocation() {
-             const zz = this.inputs.attached.mousewheel;
-             return !!zz && zz.zoomToMouseLocation
-           }
-           set zoomToMouseLocation(zz) {
-             const uz = this.inputs.attached.mousewheel;
-             uz && (uz.zoomToMouseLocation = zz)
-           }
- ... (116 more removed lines; see GitHub link above)
+           get keysRotateLeft() {
+             const qq = this.inputs.attached.keyboard;
+             return qq ? qq.keysRotateLeft : []
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1560-L1561` → after: `L894-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L894-L896) · [Before (L1560-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1560-L1561)

```diff
-           stopInterpolation() {
-             this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
+           set keysRotateLeft(qq) {
+             const Eq = this.inputs.attached.keyboard;
+             Eq && (Eq.keysRotateLeft = qq)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1563-L1570` → after: `L898-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L898-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L898-L900) · [Before (L1563-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1563-L1570)

```diff
-           interpolateTo() {
-             let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
-               uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
-               bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
-               Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
-               nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
-               iz = arguments.length > 5 ? arguments[5] : void 0;
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != iz ? this._currentInterpolationFactor = iz : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
+           get keysRotateRight() {
+             const qq = this.inputs.attached.keyboard;
+             return qq ? qq.keysRotateRight : []
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1572-L1573` → after: `L902-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L902-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L902-L904) · [Before (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1572-L1573)

```diff
-           _isSynchronizedViewMatrix() {
-             return !!super._isSynchronizedViewMatrix() && (this._cache.pI.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
+           set keysRotateRight(qq) {
+             const Eq = this.inputs.attached.keyboard;
+             Eq && (Eq.keysRotateRight = qq)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1575-L1581` → after: `L906-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L906-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L906-L908) · [Before (L1575-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1575-L1581)

```diff
-           attachControl(zz, uz) {
-             let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-               Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
-             const nz = arguments;
-             uz = rz.h.BackCompatCameraNoPreventDefault(nz), this._useCtrlForPanning = bz, this._panningMouseButton = Ez, "boolean" === typeof nz[0] && (nz.length > 1 && (this._useCtrlForPanning = nz[1]), nz.length > 2 && (this._panningMouseButton = nz[2])), this.inputs.attachElem … [truncated]
-               this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
-             }
+           get keysRotateUp() {
+             const qq = this.inputs.attached.keyboard;
+             return qq ? qq.keysRotateUp : []
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1583-L1584` → after: `L910-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L910-L912) · [Before (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1583-L1584)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this._reset && this._reset()
+           set keysRotateUp(qq) {
+             const Eq = this.inputs.attached.keyboard;
+             Eq && (Eq.keysRotateUp = qq)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1586-L1589` → after: `L914-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L914-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L914-L916) · [Before (L1586-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1586-L1589)

```diff
-           _applyRotationAndZoomDelta(zz, uz, bz) {
-             const Ez = this.invertRotation ? -1 : 1;
-             let nz = zz * this._calculateHandednessMultiplier();
-             this.beta < 0 && (nz *= -1), this.alpha += nz * Ez, this.beta += uz * Ez, this.radius -= bz
+           get keysRotateDown() {
+             const qq = this.inputs.attached.keyboard;
+             return qq ? qq.keysRotateDown : []
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1591-L1608` → after: `L918-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L918-L920) · [Before (L1591-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1591-L1608)

```diff
-           _applyPanDelta(zz, uz) {
-             const bz = lz.l.ER[0].P_(zz, uz, uz);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), bz.multiplyInPlace(this.panningAxis), lz.n.TransformNormalToRef(bz, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
-               const zz = this.upVector,
-                 uz = lz.n.CrossToRef(this._transformedDirection, zz, this._transformedDirection);
-               lz.n.CrossToRef(zz, uz, this._transformedDirection)
-             } else this.panningAxis.y || (this._transformedDirection.y = 0);
-             if (!this._targetHost)
-               if (null !== this.panningDistanceLimit) {
-                 this._transformedDirection.addInPlace(this.pI);
-                 lz.n.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.pI.euz(this._transformedDirection)
-               } else {
-                 if (this.parent) {
-                   const zz = lz.l.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(zz), zz.transposeToRef(zz), lz.n.TransformCoordinatesToRef(this._transformedDirection, zz, this._transformedDirection)
-                 }
- ... (2 more removed lines; see GitHub link above)
+           set keysRotateDown(qq) {
+             const Eq = this.inputs.attached.keyboard;
+             Eq && (Eq.keysRotateDown = qq)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1610-L1651` → after: `L922-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L922-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L922-L927) · [Before (L1610-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1610-L1651)

```diff
-           _checkInputs() {
-             if (this._collisionTriggered) return;
-             this.inputs.checkInputs();
-             let zz = !1;
-             this.movement.computeCurrentFrameDeltas();
-             const uz = this.movement.rotationDeltaCurrentFrame,
-               bz = this.movement.zoomDeltaCurrentFrame,
-               Ez = this.movement.panDeltaCurrentFrame;
-             if (0 === uz.x && 0 === uz.y && 0 === bz && 0 === Ez.x && 0 === Ez.y || (zz = !0, 0 === uz.x && 0 === uz.y && 0 === bz || this._applyRotationAndZoomDelta(uz.x, uz.y, bz), 0 === Ez.x && 0 === Ez.y || this._applyPanDelta(Ez.x, Ez.y)), 0 === this._inertialAlphaOffset &&  … [truncated]
-               this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
-               const uz = this._panningEpsilon;
-               Math.abs(this.inertialPanningX) < uz && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < uz && (this.inertialPanningY = 0), zz = !0
-             }
-             if (zz) this.stopInterpolation();
-             else if (this._isInterpolating) {
-               let zz = !1;
- ... (26 more removed lines; see GitHub link above)
+           constructor(qq, Eq, gq) {
+             var lq;
+             super(qq, Eq, gq, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), lq = this, this.ellipsoid = (0, Yq.i)(this, Bq, new Oq.q(.5, 1, .5)), this.ellipsoidOffset = ((0, Yq.i)(this, Wq), (0, Yq.i)(this, Nq, new Oq.q(0, 0, 0))), this.checkCollisions = (( … [truncated]
+               let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+               lq._newPosition.WG(Eq), lq._newPosition.subtractToRef(lq._oldPosition, lq._diffPosition), lq._diffPosition.length() > rq.b.CollisionsEpsilon && (lq.position.addToRef(lq._diffPosition, lq._deferredPositionUpdate), lq._deferOnly ? lq._deferredUpdated = !0 : lq.positio … [truncated]
+             }, this.inputs = new tq(this), this.inputs.addKeyboard().addMouse()
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1653-L1654` → after: `L929-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L929-L930) · [Before (L1653-L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1653-L1654)

```diff
-           _checkLimits() {
-             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
+           attachControl(qq, Eq) {
+             Eq = cq.f.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Eq)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1656-L1665` → after: `L932-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L932-L933) · [Before (L1656-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1656-L1665)

```diff
-           rebuildAnglesAndRadius() {
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || lz.n.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
-             const zz = this.alpha;
-             var uz, bz;
-             this.alpha = function(zz) {
-               let uz = Math.PI / 2;
-               return 0 === zz.x && 0 === zz.z || (uz = Math.acos(zz.x / Math.sqrt(Math.pow(zz.x, 2) + Math.pow(zz.z, 2)))), zz.z < 0 && (uz = 2 * Math.PI - uz), uz
-             }(this._computationVector), this.beta = (uz = this._computationVector.y, bz = this.radius, Math.acos(uz / bz));
-             const Ez = Math.round((zz - this.alpha) / (2 * Math.PI));
-             this.alpha += 2 * Ez * Math.PI, this._checkLimits()
+           detachControl() {
+             this.inputs.detachElement(), this.cameraDirection = new Oq.q(0, 0, 0), this.cameraRotation = new Oq.p(0, 0)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1667-L1668` → after: `L935-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L935-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L935-L936) · [Before (L1667-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1667-L1668)

```diff
-           setPosition(zz) {
-             this._position.equals(zz) || (this._position.euz(zz), this.rebuildAnglesAndRadius())
+           get collisionMask() {
+             return this._collisionMask
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1670-L1681` → after: `L938-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L938-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L938-L939) · [Before (L1670-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1670-L1681)

```diff
-           setTarget(zz) {
-             let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-               bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-               Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-             if (Ez = this.overrideCloneAlphaBetaRadius ?? Ez, zz.computeWorldMatrix) uz && zz.lG ? this._targetBoundingCenter = zz.lG().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, zz.computeWorldMatrix(), this._targetHost = zz, this.pI = this._getTargetPo … [truncated]
-             else {
-               const uz = zz,
-                 Ez = this._getTargetPosition();
-               if (Ez && !bz && Ez.equals(uz)) return;
-               this._targetHost = null, this.pI = uz, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
-             }
-             Ez || this.rebuildAnglesAndRadius()
+           set collisionMask(qq) {
+             this._collisionMask = isNaN(qq) ? -1 : qq
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1683-L1698` → after: `L941-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L941-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L941-L947) · [Before (L1683-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1683-L1698)

```diff
-           _getViewMatrix() {
-             const zz = Math.cos(this.alpha),
-               uz = Math.sin(this.alpha),
-               bz = Math.cos(this.beta);
-             let Ez = Math.sin(this.beta);
-             0 === Ez && (Ez = 1e-4), 0 === this.radius && (this.radius = 1e-4);
-             const nz = this._getTargetPosition();
-             if (this._computationVector.P_(this.radius * zz * Ez, this.radius * bz, this.radius * uz * Ez), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || lz.n.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVe … [truncated]
-               const zz = this.XT().collisionCoordinator;
-               this._collider || (this._collider = zz.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, zz.getNewPosition(this._position, this._collisionVelocit … [truncated]
-             } else {
-               this._position.euz(this._newPosition);
-               let zz = this.upVector;
-               this.allowUpsideDown && Ez < 0 && (zz = zz.nb()), this._computeViewMatrix(this._position, nz, zz), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
-             }
-             return this._currentTarget.euz(nz), this._viewMatrix
+           _collideWithWorld(qq) {
+             let Eq;
+             Eq = this.parent ? Oq.q.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Eq.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
+             const gq = this.ZJ().collisionCoordinator;
+             this._collider || (this._collider = gq.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
+             let Yq = qq;
+             this.applyGravity && (Yq = qq.add(this.ZJ().gravity)), gq.getNewPosition(this._oldPosition, Yq, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1700-L1714` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L949-L950) · [Before (L1700-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1700-L1714)

```diff
-           zoomOn(zz) {
-             let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             zz = zz || this.XT().meshes;
-             const bz = Hz.c.MinMax(zz);
-             let Ez = this._calculateLowerRadiusFromModelBoundingSphere(bz.min, bz.max);
-             if (Ez = Math.max(Math.min(Ez, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Ez * this.zoomOnFactor, this.mode === Xz.d.ORTHOGRAPHIC_CAMERA) {
-               const zz = this.XT().uR().getAspectRatio(this),
-                 uz = Ez * this.zoomOnFactor / 2;
-               this.orthoLeft = -uz * zz, this.orthoRight = uz * zz, this.orthoBottom = -uz, this.orthoTop = uz
-             }
-             this.focusOn({
-               min: bz.min,
-               max: bz.max,
-               distance: Ez
-             }, uz)
+           _checkInputs() {
+             this._localDirection || (this._localDirection = Oq.q.Zero(), this._transformedDirection = Oq.q.Zero()), this.inputs.checkInputs(), super._checkInputs()
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1716-L1724` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L952-L953) · [Before (L1716-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1716-L1724)

```diff
-           focusOn(zz) {
-             let uz, bz, Ez = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             if (void 0 === zz.min) {
-               const Ez = zz || this.XT().meshes;
-               uz = Hz.c.MinMax(Ez), bz = lz.n.Distance(uz.min, uz.max)
-             } else {
-               uz = zz, bz = zz.distance
-             }
-             this.pI = Hz.c.Center(uz), Ez || (this.maxZ = 2 * bz)
+           set needMoveForGravity(qq) {
+             this._needMoveForGravity = qq
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1726-L1740` → after: `L955-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L955-L956) · [Before (L1726-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1726-L1740)

```diff
-           createRigCamera(uz, bz) {
-             let Ez = 0;
-             switch (this.cameraRigMode) {
-               case Xz.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case Xz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case Xz.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case Xz.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case Xz.d.RIG_MODE_VR:
-                 Ez = this._cameraRigParams.stereoHalfAngle * (0 === bz ? 1 : -1);
-                 break;
-               case Xz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-                 Ez = this._cameraRigParams.stereoHalfAngle * (0 === bz ? -1 : 1)
-             }
-             const nz = new zz(uz, this.alpha + Ez, this.beta, this.radius, this.pI, this.XT());
-             return nz._cameraRigParams = {}, nz.isRigCamera = !0, nz.rigParent = this, nz.upVector = this.upVector, nz.mode = this.mode, nz.orthoLeft = this.orthoLeft, nz.orthoRight = this.orthoRight, nz.orthoBottom = this.orthoBottom, nz.orthoTop = this.orthoTop, nz
+           get needMoveForGravity() {
+             return this._needMoveForGravity
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1742-L1756` → after: `L958-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L958-L959) · [Before (L1742-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1742-L1756)

```diff
-           _updateRigCameras() {
-             const zz = this._rigCameras[0],
-               uz = this._rigCameras[1];
-             switch (zz.beta = uz.beta = this.beta, this.cameraRigMode) {
-               case Xz.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case Xz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case Xz.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case Xz.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case Xz.d.RIG_MODE_VR:
-                 zz.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, uz.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
-                 break;
-               case Xz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-                 zz.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, uz.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
-             }
-             super._updateRigCameras()
+           _decideIfNeedsToMove() {
+             return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1758-L1767` → after: `L961-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L961-L962) · [Before (L1758-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1758-L1767)

```diff
-           _calculateLowerRadiusFromModelBoundingSphere(zz, uz) {
-             let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-             const Ez = lz.n.Distance(zz, uz),
-               nz = this.XT().uR().getAspectRatio(this),
-               iz = Math.tan(this.fov / 2),
-               Mz = iz * nz,
-               tz = .5 * Ez * bz,
-               Hz = tz * Math.sqrt(1 + 1 / (Mz * Mz)),
-               Oz = tz * Math.sqrt(1 + 1 / (iz * iz));
-             return Math.max(Hz, Oz)
+           _updatePosition() {
+             this.checkCollisions && this.ZJ().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1773` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L968) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1773)

```diff
-             return "ArcRotateCamera"
+             return "FreeCamera"
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L1777-L2100` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L972) · [Before (L1777-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L1777-L2100)

```diff
-           uz = [(0, nz.G)()], bz = [(0, nz.G)()], tz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.D)("target")], Zz = [(0, nz.y)("targetHost")], Rz = [(0, nz.G)()], sz = [(0, nz.G)()], oz = [(0, nz.G)()], Nz = [(0, nz.G)()], vz = [(0, nz.G)()], xz = [(0, nz.G)()], Jz = [(0,  … [truncated]
-             kind: "getter",
-             name: "inertialAlphaOffset",
-             static: !1,
-             private: !1,
-             access: {
-               has: zz => "inertialAlphaOffset" in zz,
-               get: zz => zz.inertialAlphaOffset
-             },
-             metadata: iz
-           }, null, jz), (0, Ez.h)(zz, null, sz, {
-             kind: "getter",
-             name: "inertialBetaOffset",
-             static: !1,
-             private: !1,
-             access: {
- ... (308 more removed lines; see GitHub link above)
+           Eq = [(0, lq.I)()], gq = [(0, lq.I)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2102` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L974) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2102)

```diff
-             name: "useInputToRestoreState",
+             name: "ellipsoid",
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2106-L2107` → after: `L978-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L978-L979) · [Before (L2106-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2106-L2107)

```diff
-               has: zz => "useInputToRestoreState" in zz,
-               get: zz => zz.useInputToRestoreState,
+               has: qq => "ellipsoid" in qq,
+               get: qq => qq.ellipsoid,
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2109` → after: `L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L981) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2109)

```diff
-                 zz.useInputToRestoreState = uz
+                 qq.ellipsoid = Eq
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2113` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L985) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2113)

```diff
-           }, Uu, cu), (0, Ez.h)(null, null, Wz, {
+           }, Bq, Wq), (0, Yq.f)(null, null, gq, {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2115` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L987) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2115)

```diff
-             name: "restoreStateInterpolationFactor",
+             name: "ellipsoidOffset",
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2119-L2120` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L991-L992) · [Before (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2119-L2120)

```diff
-               has: zz => "restoreStateInterpolationFactor" in zz,
-               get: zz => zz.restoreStateInterpolationFactor,
+               has: qq => "ellipsoidOffset" in qq,
+               get: qq => qq.ellipsoidOffset,
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2122` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L994) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2122)

```diff
-                 zz.restoreStateInterpolationFactor = uz
+                 qq.ellipsoidOffset = Eq
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2126-L2198` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L998) · [Before (L2126-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2126-L2198)

```diff
-           }, gu, Su), iz && Object.defineProperty(zz, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: iz
-           })
-         })(), zz
-       })(),
-       Sz = !1;
-     Sz || (Sz = !0, tz.c.AddNodeConstructor("ArcRotateCamera", ((zz, uz) => () => new gz(zz, 0, 0, 1, lz.n.Zero(), uz))), (0, mz.c)("BABYLON.ArcRotateCamera", gz))
-   },
-   39406: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Ez.c
-     });
-     var Ez = bz(39412);
- ... (57 more removed lines; see GitHub link above)
+           }, Nq, aq), (0, Yq.f)(null, null, xq, {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2200` → after: `L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L1000) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2200)

```diff
-             name: "groundColor",
+             name: "checkCollisions",
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2204-L2205` → after: `L1004-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L1004-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L1004-L1005) · [Before (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2204-L2205)

```diff
-               has: zz => "groundColor" in zz,
-               get: zz => zz.groundColor,
+               has: qq => "checkCollisions" in qq,
+               get: qq => qq.checkCollisions,
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2207` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L1007) · [Before (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2207)

```diff
-                 zz.groundColor = uz
+                 qq.checkCollisions = Eq
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2211` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L1011) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2211)

```diff
-           }, Hz, Oz), (0, Ez.h)(null, null, bz, {
+           }, Vq, dq), (0, Yq.f)(null, null, Aq, {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2213` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L1013) · [Before (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2213)

```diff
-             name: "direction",
+             name: "applyGravity",
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2217-L2218` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L1017-L1018) · [Before (L2217-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2217-L2218)

```diff
-               has: zz => "direction" in zz,
-               get: zz => zz.direction,
+               has: qq => "applyGravity" in qq,
+               get: qq => qq.applyGravity,
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2220` → after: `L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L1020) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2220)

```diff
-                 zz.direction = uz
+                 qq.applyGravity = Eq
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2233-L2236` → after: `L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/250.js#L1033) · [Before (L2233-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/250.js#L2233-L2236)

```diff
- 
-     function dz() {
-       pz || (pz = !0, tz.c.AddNodeConstructor("Light_Type_3", ((zz, uz) => () => new Oz(zz, iz.n.Zero(), uz))), (0, Hz.c)("BABYLON.HemisphericLight", Oz))
-     }
+     nq || (nq = !0, (0, vq.g)("BABYLON.FreeCamera", hq))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/251.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/251.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L4)

```diff
-   39575: (zz, uz, bz) => {
+   39995: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L8-L26` → after: `L8-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L8-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L8-L43) · [Before (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L8-L26)

```diff
-     var Ez = bz(39175);
- 
-     function nz(zz) {
-       return class extends zz {
-         constructor() {
-           super(...arguments);
-           const zz = new.target;
-           if (!zz[Symbol.metadata]) {
-             const uz = Object.getPrototypeOf(zz)?.[Symbol.metadata];
-             zz[Symbol.metadata] = uz ? Object.create(uz) : {}
-           }
-           const uz = (0, Ez.e)(zz[Symbol.metadata]);
-           uz._imageProcessingConfiguration || (uz._imageProcessingConfiguration = {
-             type: 9,
-             sourceName: void 0
-           })
- ... (3 more removed lines; see GitHub link above)
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(37139),
+       mq = gq(37289),
+       xq = gq(39960),
+       Aq = gq(39870),
+       cq = gq(37171),
+       uq = gq(39938),
+       Bq = gq(39779);
+     let Wq = (() => {
+       var qq, Eq;
+       let gq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq = xq.c,
+         vq = [],
+         hq = [],
+         nq = [],
+         bq = [],
+ ... (20 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L28-L29` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L45-L46) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L28-L29)

```diff
-         set imageProcessingConfiguration(zz) {
-           this._attachImageProcessingConfiguration(zz), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
+         set range(qq) {
+           this._range = qq, this._inverseSquaredRange = 1 / (this.range * this.range)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L31-L34` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L48-L49) · [Before (L31-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L31-L34)

```diff
-         _attachImageProcessingConfiguration(zz) {
-           zz !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !zz && this.XT ? this._imageProcessingConfiguration = this.X … [truncated]
-             this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
-           }))))
+         get intensityMode() {
+           return this._intensityMode
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L36-L37` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L51-L52) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L36-L37)

```diff
-         get cameraColorCurvesEnabled() {
-           return this.imageProcessingConfiguration.colorCurvesEnabled
+         set intensityMode(qq) {
+           this._intensityMode = qq, this._computePhotometricScale()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L39-L40` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L54-L55) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L39-L40)

```diff
-         set cameraColorCurvesEnabled(zz) {
-           this.imageProcessingConfiguration.colorCurvesEnabled = zz
+         get radius() {
+           return this._radius
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L42-L43` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L57-L58) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L42-L43)

```diff
-         get cameraColorGradingEnabled() {
-           return this.imageProcessingConfiguration.colorGradingEnabled
+         set radius(qq) {
+           this._radius = qq, this._computePhotometricScale()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L45-L46` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L60-L61) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L45-L46)

```diff
-         set cameraColorGradingEnabled(zz) {
-           this.imageProcessingConfiguration.colorGradingEnabled = zz
+         get renderPriority() {
+           return (0, Yq.b)(this, Eq, "f")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L48-L49` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L63-L64) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L48-L49)

```diff
-         get cameraToneMappingEnabled() {
-           return this._imageProcessingConfiguration.toneMappingEnabled
+         set renderPriority(qq) {
+           (0, Yq.e)(this, Eq, qq, "f")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L51-L52` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L66-L67) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L51-L52)

```diff
-         set cameraToneMappingEnabled(zz) {
-           this._imageProcessingConfiguration.toneMappingEnabled = zz
+         get shadowEnabled() {
+           return this._shadowEnabled
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L54-L55` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L69-L70) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L54-L55)

```diff
-         get cameraExposure() {
-           return this._imageProcessingConfiguration.exposure
+         set shadowEnabled(qq) {
+           this._shadowEnabled !== qq && (this._shadowEnabled = qq, this._markMeshesAsLightDirty())
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L57-L58` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L72-L73) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L57-L58)

```diff
-         set cameraExposure(zz) {
-           this._imageProcessingConfiguration.exposure = zz
+         get includedOnlyMeshes() {
+           return this._includedOnlyMeshes
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L60-L61` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L75-L76) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L60-L61)

```diff
-         get cameraContrast() {
-           return this._imageProcessingConfiguration.contrast
+         set includedOnlyMeshes(qq) {
+           this._includedOnlyMeshes = qq, this._hookArrayForIncludedOnly(qq)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L63-L64` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L78-L79) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L63-L64)

```diff
-         set cameraContrast(zz) {
-           this._imageProcessingConfiguration.contrast = zz
+         get excludedMeshes() {
+           return this._excludedMeshes
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L66-L67` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L81-L82) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L66-L67)

```diff
-         get cameraColorGradingTexture() {
-           return this._imageProcessingConfiguration.colorGradingTexture
+         set excludedMeshes(qq) {
+           this._excludedMeshes = qq, this._hookArrayForExcluded(qq)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L69-L70` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L84-L85) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L69-L70)

```diff
-         set cameraColorGradingTexture(zz) {
-           this._imageProcessingConfiguration.colorGradingTexture = zz
+         get excludeWithLayerMask() {
+           return this._excludeWithLayerMask
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L72-L73` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L87-L88) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L72-L73)

```diff
-         get cameraColorCurves() {
-           return this._imageProcessingConfiguration.colorCurves
+         set excludeWithLayerMask(qq) {
+           this._excludeWithLayerMask = qq, this._resyncMeshes()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L75-L76` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/251.js#L90-L91) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/251.js#L75-L76)

```diff
-         set cameraColorCurves(zz) {
-           this._imageProcessingConfiguration.colorCurves = zz
+         get includeOnlyWithLayerMask() {
+           return this._includeOnlyWithLayerMask
```
