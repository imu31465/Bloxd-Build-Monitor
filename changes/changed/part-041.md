# Changed — Bundle Modifications Report (Part 041 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `41 / 65` (**428** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 040](part-040.md) · [Part 042 →](part-042.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (960 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 883. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9630` → after: `L10003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10003) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9630)

```diff
-       return pD[DD]
+       return pp.cost
```

#### 884. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9632-L9634` → after: `L10005-L10016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10005-L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10005-L10016) · [Before (L9632-L9634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9632-L9634)

```diff
-     sD.keys = function() {
-       return Object.keys(pD)
-     }, sD.resolve = KD, DD.exports = sD, sD.id = 8248
+ 
+     function Sp(pp, ip, cp) {
+       var Op;
+       const op = null !== (Op = cp.excludedPlayers) && void 0 !== Op ? Op : [ip];
+       return pp.filter((pp => !op.includes(pp)))
+     }
+     cp.d(ip, {
+       b: () => Ip,
+       c: () => op,
+       g: () => Sp,
+       h: () => Op
+     })
```

#### 885. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9636` → after: `L10018-L10019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10018-L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10018-L10019) · [Before (L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9636)

```diff
-   8251: (DD, zD, wD) => {
+   8937: () => {},
+   8358: (pp, ip, cp) => {
```

#### 886. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9639` → after: `L10022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10022) · [Before (L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9639)

```diff
-   8256: (DD, zD, wD) => {
+   8366: (pp, ip, cp) => {
```

#### 887. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9642` → after: `L10025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10025) · [Before (L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9642)

```diff
-   8260: (DD, zD, wD) => {
+   8374: (pp, ip, cp) => {
```

#### 888. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9645` → after: `L10028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10028) · [Before (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9645)

```diff
-   8263: (DD, zD, wD) => {
+   8378: (pp, ip, cp) => {
```

#### 889. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9648` → after: `L10031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10031) · [Before (L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9648)

```diff
-   8267: (DD, zD, wD) => {
+   8382: (pp, ip, cp) => {
```

#### 890. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9651` → after: `L10034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10034) · [Before (L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9651)

```diff
-   8273: (DD, zD, wD) => {
+   8389: (pp, ip, cp) => {
```

#### 891. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9654` → after: `L10037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10037) · [Before (L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9654)

```diff
-   8277: (DD, zD, wD) => {
+   8394: (pp, ip, cp) => {
```

#### 892. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9657` → after: `L10040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10040) · [Before (L9657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9657)

```diff
-   8280: (DD, zD, wD) => {
+   8399: (pp, ip, cp) => {
```

#### 893. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9660` → after: `L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10043) · [Before (L9660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9660)

```diff
-   8284: (DD, zD, wD) => {
+   8402: (pp, ip, cp) => {
```

#### 894. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9663` → after: `L10046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10046) · [Before (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9663)

```diff
-   8290: (DD, zD, wD) => {
+   8408: (pp, ip, cp) => {
```

#### 895. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9666` → after: `L10049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10049) · [Before (L9666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9666)

```diff
-   8294: (DD, zD, wD) => {
+   8411: (pp, ip, cp) => {
```

#### 896. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9669` → after: `L10052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10052) · [Before (L9669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9669)

```diff
-   8298: (DD, zD, wD) => {
+   8414: (pp, ip, cp) => {
```

#### 897. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9672` → after: `L10055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10055) · [Before (L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9672)

```diff
-   8307: (DD, zD, wD) => {
+   8420: (pp, ip, cp) => {
```

#### 898. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9675` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10058) · [Before (L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9675)

```diff
-   8315: (DD, zD, wD) => {
+   8427: (pp, ip, cp) => {
```

#### 899. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9678` → after: `L10061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10061) · [Before (L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9678)

```diff
-   8321: (DD, zD, wD) => {
+   8429: (pp, ip, cp) => {
```

#### 900. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9681` → after: `L10064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10064) · [Before (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9681)

```diff
-   8327: (DD, zD, wD) => {
+   8435: (pp, ip, cp) => {
```

#### 901. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9684` → after: `L10067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10067) · [Before (L9684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9684)

```diff
-   8333: (DD, zD, wD) => {
+   8439: (pp, ip, cp) => {
```

#### 902. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9687` → after: `L10070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10070) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9687)

```diff
-   8337: (DD, zD, wD) => {
+   8442: (pp, ip, cp) => {
```

#### 903. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9690` → after: `L10073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10073) · [Before (L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9690)

```diff
-   8346: (DD, zD, wD) => {
+   8448: (pp, ip, cp) => {
```

#### 904. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9693` → after: `L10076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10076) · [Before (L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9693)

```diff
-   8348: (DD, zD, wD) => {
+   8451: (pp, ip, cp) => {
```

#### 905. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9696` → after: `L10079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10079) · [Before (L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9696)

```diff
-   8351: (DD, zD, wD) => {
+   8454: (pp, ip, cp) => {
```

#### 906. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9699` → after: `L10082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10082) · [Before (L9699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9699)

```diff
-   8360: (DD, zD, wD) => {
+   8462: (pp, ip, cp) => {
```

#### 907. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9702` → after: `L10085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10085) · [Before (L9702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9702)

```diff
-   8368: (DD, zD, wD) => {
+   8469: (pp, ip, cp) => {
```

#### 908. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9705` → after: `L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10088) · [Before (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9705)

```diff
-   8373: (DD, zD, wD) => {
+   8478: (pp, ip, cp) => {
```

#### 909. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9708` → after: `L10091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10091) · [Before (L9708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9708)

```diff
-   8376: (DD, zD, wD) => {
+   8484: (pp, ip, cp) => {
```

#### 910. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9711` → after: `L10094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10094) · [Before (L9711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9711)

```diff
-   8379: (DD, zD, wD) => {
+   8492: (pp, ip, cp) => {
```

#### 911. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9714` → after: `L10097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10097) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9714)

```diff
-   8386: (DD, zD, wD) => {
+   8501: (pp, ip, cp) => {
```

#### 912. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9717` → after: `L10100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10100) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9717)

```diff
-   8389: (DD, zD, wD) => {
+   8506: (pp, ip, cp) => {
```

#### 913. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9720` → after: `L10103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10103) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9720)

```diff
-   8395: (DD, zD, wD) => {
+   8510: (pp, ip, cp) => {
```

#### 914. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9723` → after: `L10106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10106) · [Before (L9723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9723)

```diff
-   8397: (DD, zD, wD) => {
+   8514: (pp, ip, cp) => {
```

#### 915. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9726` → after: `L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10109) · [Before (L9726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9726)

```diff
-   8404: (DD, zD, wD) => {
+   8520: (pp, ip, cp) => {
```

#### 916. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9729` → after: `L10112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10112) · [Before (L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9729)

```diff
-   8406: (DD, zD, wD) => {
+   8525: (pp, ip, cp) => {
```

#### 917. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9732` → after: `L10115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10115) · [Before (L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9732)

```diff
-   8413: (DD, zD, wD) => {
+   8533: (pp, ip, cp) => {
```

#### 918. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9735` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10118) · [Before (L9735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9735)

```diff
-   8420: (DD, zD, wD) => {
+   8542: (pp, ip, cp) => {
```

#### 919. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9738` → after: `L10121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10121) · [Before (L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9738)

```diff
-   8428: (DD, zD, wD) => {
+   8549: (pp, ip, cp) => {
```

#### 920. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9741` → after: `L10124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10124) · [Before (L9741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9741)

```diff
-   8433: (DD, zD, wD) => {
+   8556: (pp, ip, cp) => {
```

#### 921. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9744` → after: `L10127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10127) · [Before (L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9744)

```diff
-   8435: (DD, zD, wD) => {
+   8562: (pp, ip, cp) => {
```

#### 922. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9747` → after: `L10130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10130) · [Before (L9747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9747)

```diff
-   8439: (DD, zD, wD) => {
+   8571: (pp, ip, cp) => {
```

#### 923. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9750` → after: `L10133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10133) · [Before (L9750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9750)

```diff
-   8446: (DD, zD, wD) => {
+   8577: (pp, ip, cp) => {
```

#### 924. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9753` → after: `L10136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10136) · [Before (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9753)

```diff
-   8454: (DD, zD, wD) => {
+   8584: (pp, ip, cp) => {
```

#### 925. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9756` → after: `L10139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10139) · [Before (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9756)

```diff
-   8457: (DD, zD, wD) => {
+   8586: (pp, ip, cp) => {
```

#### 926. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9759` → after: `L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10142) · [Before (L9759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9759)

```diff
-   8459: (DD, zD, wD) => {
+   8595: (pp, ip, cp) => {
```

#### 927. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9762` → after: `L10145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10145) · [Before (L9762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9762)

```diff
-   8468: (DD, zD, wD) => {
+   8598: (pp, ip, cp) => {
```

#### 928. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9765` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10148) · [Before (L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9765)

```diff
-   8475: (DD, zD, wD) => {
+   8603: (pp, ip, cp) => {
```

#### 929. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9768` → after: `L10151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10151) · [Before (L9768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9768)

```diff
-   8482: (DD, zD, wD) => {
+   8608: (pp, ip, cp) => {
```

#### 930. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9771` → after: `L10154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10154) · [Before (L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9771)

```diff
-   8491: (DD, zD, wD) => {
+   8616: (pp, ip, cp) => {
```

#### 931. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9774` → after: `L10157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10157) · [Before (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9774)

```diff
-   8496: (DD, zD, wD) => {
+   8619: (pp, ip, cp) => {
```

#### 932. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9777` → after: `L10160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10160) · [Before (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9777)

```diff
-   8501: (DD, zD, wD) => {
+   8628: (pp, ip, cp) => {
```

#### 933. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9780` → after: `L10163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10163) · [Before (L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9780)

```diff
-   8504: (DD, zD, wD) => {
+   8636: (pp, ip, cp) => {
```

#### 934. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9783` → after: `L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10166) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9783)

```diff
-   8512: (DD, zD, wD) => {
+   8643: (pp, ip, cp) => {
```

#### 935. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9786` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10169) · [Before (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9786)

```diff
-   8514: (DD, zD, wD) => {
+   8651: (pp, ip, cp) => {
```

#### 936. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9789` → after: `L10172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10172) · [Before (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9789)

```diff
-   8517: (DD, zD, wD) => {
+   8657: (pp, ip, cp) => {
```

#### 937. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9792` → after: `L10175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10175) · [Before (L9792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9792)

```diff
-   8526: (DD, zD, wD) => {
+   8664: (pp, ip, cp) => {
```

#### 938. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9795` → after: `L10178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10178) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9795)

```diff
-   8531: (DD, zD, wD) => {
+   8666: (pp, ip, cp) => {
```

#### 939. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9798` → after: `L10181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10181) · [Before (L9798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9798)

```diff
-   8534: (DD, zD, wD) => {
+   8668: (pp, ip, cp) => {
```

#### 940. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9801` → after: `L10184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10184) · [Before (L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9801)

```diff
-   8541: (DD, zD, wD) => {
+   8671: (pp, ip, cp) => {
```

#### 941. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9804` → after: `L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10187) · [Before (L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9804)

```diff
-   8550: (DD, zD, wD) => {
+   8677: (pp, ip, cp) => {
```

#### 942. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9807` → after: `L10190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10190) · [Before (L9807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9807)

```diff
-   8558: (DD, zD, wD) => {
+   8682: (pp, ip, cp) => {
```

#### 943. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9810` → after: `L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10193) · [Before (L9810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9810)

```diff
-   8562: (DD, zD, wD) => {
+   8689: (pp, ip, cp) => {
```

#### 944. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9813` → after: `L10196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10196) · [Before (L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9813)

```diff
-   8571: (DD, zD, wD) => {
+   8696: (pp, ip, cp) => {
```

#### 945. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9816` → after: `L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10199) · [Before (L9816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9816)

```diff
-   8575: (DD, zD, wD) => {
+   8700: (pp, ip, cp) => {
```

#### 946. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9819` → after: `L10202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10202) · [Before (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9819)

```diff
-   8577: (DD, zD, wD) => {
+   8708: (pp, ip, cp) => {
```

#### 947. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9822` → after: `L10205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10205) · [Before (L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9822)

```diff
-   8584: (DD, zD, wD) => {
+   8711: (pp, ip, cp) => {
```

#### 948. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9825` → after: `L10208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10208) · [Before (L9825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9825)

```diff
-   8586: (DD, zD, wD) => {
+   8720: (pp, ip, cp) => {
```

#### 949. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9828` → after: `L10211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10211) · [Before (L9828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9828)

```diff
-   8588: (DD, zD, wD) => {
+   8728: (pp, ip, cp) => {
```

#### 950. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9831` → after: `L10214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10214) · [Before (L9831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9831)

```diff
-   8596: (DD, zD, wD) => {
+   8733: (pp, ip, cp) => {
```

#### 951. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9834` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10217) · [Before (L9834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9834)

```diff
-   8604: (DD, zD, wD) => {
+   8735: (pp, ip, cp) => {
```

#### 952. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9837` → after: `L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10220) · [Before (L9837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9837)

```diff
-   8611: (DD, zD, wD) => {
+   8737: (pp, ip, cp) => {
```

#### 953. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9840` → after: `L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10223) · [Before (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9840)

```diff
-   8617: (DD, zD, wD) => {
+   8743: (pp, ip, cp) => {
```

#### 954. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9843` → after: `L10226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10226) · [Before (L9843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9843)

```diff
-   8622: (DD, zD, wD) => {
+   8749: (pp, ip, cp) => {
```

#### 955. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9846` → after: `L10229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10229) · [Before (L9846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9846)

```diff
-   8625: (DD, zD, wD) => {
+   8755: (pp, ip, cp) => {
```

#### 956. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9849` → after: `L10232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10232) · [Before (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9849)

```diff
-   8630: (DD, zD, wD) => {
+   8761: (pp, ip, cp) => {
```

#### 957. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9852` → after: `L10235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10235) · [Before (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9852)

```diff
-   8635: (DD, zD, wD) => {
+   8765: (pp, ip, cp) => {
```

#### 958. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9855` → after: `L10238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10238) · [Before (L9855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9855)

```diff
-   8642: (DD, zD, wD) => {
+   8768: (pp, ip, cp) => {
```

#### 959. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9858` → after: `L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10241) · [Before (L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9858)

```diff
-   8644: (DD, zD, wD) => {
+   8771: (pp, ip, cp) => {
```

#### 960. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9861` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/controller.js#L10244) · [Before (L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/controller.js#L9861)

```diff
-   8646: (DD, zD, wD) => {
+   8777: (pp, ip, cp) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00)

#### 1. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4)

```diff
-   34083: (DD, zD, wD) => {
+   34291: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L8-L12` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L9-L13) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L8-L12)

```diff
-     var pD = wD(638),
-       sD = wD(103),
-       KD = wD(128),
-       rD = wD(125),
-       LD = wD(3266);
+     var Op = cp(657),
+       op = cp(104),
+       Ip = cp(131),
+       Sp = cp(129),
+       xp = cp(3380);
```

#### 3. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L17)

```diff
-         if (null !== DD.appIosVersion) return `${DD.appIosVersion} (the iOS app's)`;
+         if (null !== pp.appIosVersion) return `${pp.appIosVersion} (the iOS app's)`;
```

#### 4. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L19` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L20) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L19)

```diff
-         if (zD) return `${zD[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
+         if (ip) return `${ip[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
```

#### 5. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L24` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L25) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L24)

```diff
-         if ("Safari" === wD.name && wD.version) return `${wD.version} (Safari's version, which follows iOS)`;
+         if ("Safari" === cp.name && cp.version) return `${cp.version} (Safari's version, which follows iOS)`;
```

#### 6. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L28` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L29) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L28)

```diff
-         return KD < 18 || 18 === KD && rD < 6 ? `${sD} (user agent)` : `? (the user agent says ${sD}, frozen from iOS 26)`
+         return Ip < 18 || 18 === Ip && Sp < 6 ? `${op} (user agent)` : `? (the user agent says ${op}, frozen from iOS 26)`
```

#### 7. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L31` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L32) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L31)

```diff
-       if (zD) return "windows" === DD.os ? `${zD} (${function(DD){const zD=parseInt(DD,10);if(zD>=13)return"Windows 11";return zD>=1?"Windows 10":"Windows 8.1 or older"}(zD)}, client hints)` : `${zD} (client hints)`;
+       if (ip) return "windows" === pp.os ? `${ip} (${function(pp){const ip=parseInt(pp,10);if(ip>=13)return"Windows 11";return ip>=1?"Windows 10":"Windows 8.1 or older"}(ip)}, client hints)` : `${ip} (client hints)`;
```

#### 8. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L33` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L34) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L33)

```diff
-       return wD ? cD.has(wD) ? `${wD} (user agent, which may be frozen)` : `${wD} (user agent)` : "?"
+       return cp ? Lp.has(cp) ? `${cp} (user agent, which may be frozen)` : `${cp} (user agent)` : "?"
```

#### 9. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L38` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L39) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L38)

```diff
-       const wD = (null !== (zD = DD.fullVersionList) && void 0 !== zD ? zD : []).filter((DD => {
+       const cp = (null !== (ip = pp.fullVersionList) && void 0 !== ip ? ip : []).filter((pp => {
```

#### 10. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L48` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L49) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L48)

```diff
-         return `${zD} ${wD}`
+         return `${ip} ${cp}`
```

#### 11. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L50` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L51) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L50)

```diff
-       return `${DD.platform} ${DD.platformVersion||"?"}, ${wD.join(", ")||"?"}, ${DD.architecture||"?"} ${DD.bitness||"?"}-bit, model ${DD.model||"?"}, mobile ${DD.mobile}`
+       return `${pp.platform} ${pp.platformVersion||"?"}, ${cp.join(", ")||"?"}, ${pp.architecture||"?"} ${pp.bitness||"?"}-bit, model ${pp.model||"?"}, mobile ${pp.mobile}`
```

#### 12. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L56-L59` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L63-L66) · [Before (L56-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L56-L59)

```diff
-       const DD = (0, rD.p)(),
-         zD = null !== DD && void 0 !== DD ? DD : (0, rD.h)(),
-         wD = (0, rD.g)();
-       return [zD ? `webgl ${zD.vendor} / ${zD.renderer} (${DD?"the renderer's context":"a probe"})` : "webgl ?", wD ? `webgpu adapter ${wD.vendor||"?"}/${wD.architecture||"?"}` : "webgpu adapter ?"].join("; ")
+       const pp = (0, Sp.r)(),
+         ip = null !== pp && void 0 !== pp ? pp : (0, Sp.j)(),
+         cp = (0, Sp.i)();
+       return [ip ? `webgl ${ip.vendor} / ${ip.renderer} (${pp?"the renderer's context":"a probe"})` : "webgl ?", cp ? `webgpu adapter ${cp.vendor||"?"}/${cp.architecture||"?"}` : "webgpu adapter ?"].join("; ")
```

#### 13. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L70` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L77) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L70)

```diff
-           appIosVersion: LD.f,
+           appIosVersion: xp.h,
```

#### 14. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L73-L74` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L80-L81) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L73-L74)

```diff
-         hD = (0, pD.l)(navigator.platform, navigator.maxTouchPoints, KD.v);
-       return [`os ${BD} ${GD}; user agent's ${null!==(DD=ID.os.name)&&void 0!==DD?DD:"?"} ${null!==(zD=ID.os.version)&&void 0!==zD?zD:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,sD.getPlatformType)()}`, `browser ${null!==(wD=ID.browser.nam … [truncated]
+         vp = (0, Op.h)(navigator.platform, navigator.maxTouchPoints, Ip.siteUsed, (0, op.getWebGpuSupported)());
+       return [`os ${Up} ${wp}; user agent's ${null!==(pp=Wp.os.name)&&void 0!==pp?pp:"?"} ${null!==(ip=Wp.os.version)&&void 0!==ip?ip:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,op.getPlatformType)()}`, `browser ${null!==(cp=Wp.browser.nam … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/diagSink.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/diagSink.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8)

#### 1. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/diagSink.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/diagSink.js#L4)

```diff
-   36422: (DD, zD, wD) => {
+   36650: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/diagSink.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/diagSink.js#L35)

```diff
-           this.DU()
+           this.LP()
```

#### 3. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/diagSink.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/diagSink.js#L37)

```diff
-           "hidden" === document.visibilityState && this.flush()
+           "hidden" === document.visibilityState && (this.deps.releaseHeld(), this.flush())
```

#### 4. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/diagSink.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/diagSink.js#L46)

```diff
-           return pD >= 55296 && pD <= 56319 && wD--, `${zD.slice(0,wD)}...`
+           return Op >= 55296 && Op <= 56319 && cp--, `${ip.slice(0,cp)}...`
```

#### 5. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/diagSink.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/diagSink.js#L80)

```diff
-             for (const zD of wD) this.add(`[dump:${DD}] ${zD}`)
+             for (const ip of cp) this.add(`[dump:${pp}] ${ip}`)
```

#### 6. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/diagSink.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/diagSink.js#L101)

```diff
-         return null !== (DD = this.deps.storage.getItem(pD)) && void 0 !== DD ? DD : {}
+         return null !== (pp = this.deps.storage.getItem(Op)) && void 0 !== pp ? pp : {}
```

#### 7. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/diagSink.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/diagSink.js#L106)

```diff
-         return (null === zD || void 0 === zD ? void 0 : zD.day) === DD ? zD : {
+         return (null === ip || void 0 === ip ? void 0 : ip.day) === pp ? ip : {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/errorLogging.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/errorLogging.js` (109 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50)

#### 1. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4)

```diff
-   6728: (DD, zD, wD) => {
+   6837: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L61)

```diff
-       getWebInstrumentations: () => as,
+       getWebInstrumentations: () => Go,
```

#### 3. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L71)

```diff
-       AI: () => uD,
+       wy: () => rp,
```

#### 4. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L178)

```diff
-             if (DD.internalLogger.debug(`Registering public faro reference in the global scope using "${DD.config.globalObjectKey}" key`), DD.config.globalObjectKey in RD) return void DD.internalLogger.warn(`Skipping global registration due to key "${DD.config.globalObjectKey}" b … [truncated]
+             if (pp.internalLogger.debug(`Registering public faro reference in the global scope using "${pp.config.globalObjectKey}" key`), pp.config.globalObjectKey in Dp) return void pp.internalLogger.warn(`Skipping global registration due to key "${pp.config.globalObjectKey}" b … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L193)

```diff
-       return Object.prototype.toString.call(DD) === `[object ${zD}]`
+       return Object.prototype.toString.call(pp) === `[object ${ip}]`
```

#### 6. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L243)

```diff
-       return ED(DD) ? DD : DD instanceof URL ? DD.href : !uD(DD) && xD(null === DD || void 0 === DD ? void 0 : DD.toString) ? DD.toString() : void 0
+       return jp(pp) ? pp : pp instanceof URL ? pp.href : !rp(pp) && Cp(null === pp || void 0 === pp ? void 0 : pp.toString) ? pp.toString() : void 0
```

#### 7. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L256)

```diff
-         return null === (zD = BD.internalLogger) || void 0 === zD || zD.info(`Web storage of type ${DD} is not available. Reason: ${wD}`), !1
+         return null === (ip = Up.internalLogger) || void 0 === ip || ip.info(`Web storage of type ${pp} is not available. Reason: ${cp}`), !1
```

#### 8. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L277)

```diff
-       return DD === HD ? pz : DD === YD && sz
+       return pp === Vp ? Ii : pp === Kp && Si
```

#### 9. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L299)

```diff
-       return "symbol" == rz(zD) ? zD : zD + ""
+       return "symbol" == Li(ip) ? ip : ip + ""
```

#### 10. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L340)

```diff
-         })) && void 0 !== wD ? wD : null === sD || void 0 === sD ? void 0 : sD.samplingRate) && void 0 !== zD ? zD : 1,
+         })) && void 0 !== cp ? cp : null === op || void 0 === op ? void 0 : op.samplingRate) && void 0 !== ip ? ip : 1,
```

#### 11. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L434-L435)

```diff
-         lastActivity: null !== wD && void 0 !== wD ? wD : rD,
-         started: null !== zD && void 0 !== zD ? zD : rD,
+         lastActivity: null !== cp && void 0 !== cp ? cp : Sp,
+         started: null !== ip && void 0 !== ip ? ip : Sp,
```

#### 12. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L466)

```diff
-         if (cD = Math.min(UD + sD, (null !== (RD = null === BD || void 0 === BD ? void 0 : BD.started) && void 0 !== RD ? RD : UD) + KD, (null !== (AD = null === BD || void 0 === BD ? void 0 : BD.lastActivity) && void 0 !== AD ? AD : UD) + rD), !1 === DD && xz(BD)) {
+         if (Lp = Math.min(Pp + op, (null !== (Dp = null === Up || void 0 === Up ? void 0 : Up.started) && void 0 !== Dp ? Dp : Pp) + Ip, (null !== (Ap = null === Up || void 0 === Up ? void 0 : Up.lastActivity) && void 0 !== Ap ? Ap : Pp) + Sp), !1 === pp && Ei(Up)) {
```

#### 13. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L478)

```diff
-           cD = UD + sD, wD(DD), null === (hD = LD.api) || void 0 === hD || hD.setSession(DD.sessionMeta), null === fD || void 0 === fD || null === (nD = fD.onSessionChange) || void 0 === nD || nD.call(fD, null !== (MD = null === BD || void 0 === BD ? void 0 : BD.sessionMeta) && v … [truncated]
+           Lp = Pp + op, cp(pp), null === (vp = xp.api) || void 0 === vp || vp.setSession(pp.sessionMeta), null === Wp || void 0 === Wp || null === (tp = Wp.onSessionChange) || void 0 === tp || tp.call(Wp, null !== (Hp = null === Up || void 0 === Up ? void 0 : Up.sessionMeta) && v … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L507)

```diff
-             attributes: Sz(Rz(Rz(Rz({}, null === (pD = wD.config.sessionTracking) || void 0 === pD || null === (pD = pD.session) || void 0 === pD ? void 0 : pD.attributes), null !== (sD = null === (KD = wD.metas.value.session) || void 0 === KD ? void 0 : KD.attributes) && void 0  … [truncated]
+             attributes: Bi(Pi(Pi(Pi({}, null === (Op = cp.config.sessionTracking) || void 0 === Op || null === (Op = Op.session) || void 0 === Op ? void 0 : Op.attributes), null !== (op = null === (Ip = cp.metas.value.session) || void 0 === Ip ? void 0 : Ip.attributes) && void 0  … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L512)

```diff
-         RD = null !== (rD = null === (LD = wD.metas.value.session) || void 0 === LD ? void 0 : LD.overrides) && void 0 !== rD ? rD : null === zD || void 0 === zD || null === (cD = zD.sessionMeta) || void 0 === cD ? void 0 : cD.overrides;
+         Dp = null !== (Sp = null === (xp = cp.metas.value.session) || void 0 === xp ? void 0 : xp.overrides) && void 0 !== Sp ? Sp : null === ip || void 0 === ip || null === (Lp = ip.sessionMeta) || void 0 === Lp ? void 0 : Lp.overrides;
```

#### 16. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L537)

```diff
-             zD = jz(DD ? rD : Cz({
+             ip = Qi(pp ? Sp : Ci({
```

#### 17. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L549)

```diff
-                 cD = null !== (sD = null !== (KD = pD.serviceName) && void 0 !== KD ? KD : null === (rD = DD.metas.value.app) || void 0 === rD ? void 0 : rD.name) && void 0 !== sD ? sD : "";
+                 Lp = null !== (op = null !== (Ip = Op.serviceName) && void 0 !== Ip ? Ip : null === (Sp = pp.metas.value.app) || void 0 === Sp ? void 0 : Sp.name) && void 0 !== op ? op : "";
```

#### 18. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L575)

```diff
-       return JSON.stringify(null !== DD && void 0 !== DD ? DD : {}, function() {
+       return JSON.stringify(null !== pp && void 0 !== pp ? pp : {}, function() {
```

#### 19. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L741` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L741) · [Before (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L741)

```diff
-             gD = null !== (zD = null === LD || void 0 === LD ? void 0 : LD.overrides) && void 0 !== zD ? zD : null === sD || void 0 === sD ? void 0 : sD.session.overrides;
+             Yp = null !== (ip = null === xp || void 0 === xp ? void 0 : xp.overrides) && void 0 !== ip ? ip : null === op || void 0 === op ? void 0 : op.session.overrides;
```

#### 20. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L766)

```diff
-       return (null === DD || void 0 === DD ? void 0 : DD.persistent) ? Wz : Nz
+       return (null === pp || void 0 === pp ? void 0 : pp.persistent) ? fi : bi
```

#### 21. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L801)

```diff
-       return "symbol" == vz(zD) ? zD : zD + ""
+       return "symbol" == si(ip) ? ip : ip + ""
```

#### 22. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L892)

```diff
-             sessionId: (null === wD || void 0 === wD ? void 0 : wD.reset) ? void 0 : null !== (cD = null === pD || void 0 === pD ? void 0 : pD.id) && void 0 !== cD ? cD : null === (gD = zD.session) || void 0 === gD ? void 0 : gD.id,
+             sessionId: (null === cp || void 0 === cp ? void 0 : cp.reset) ? void 0 : null !== (Lp = null === Op || void 0 === Op ? void 0 : Op.id) && void 0 !== Lp ? Lp : null === (Yp = ip.session) || void 0 === Yp ? void 0 : Yp.id,
```

#### 23. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L931)

```diff
-           Object.keys(DD).length > 0 ? KD.sessionMeta.overrides = DD : delete KD.sessionMeta.overrides
+           Object.keys(pp).length > 0 ? Ip.sessionMeta.overrides = pp : delete Ip.sessionMeta.overrides
```

#### 24. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L950)

```diff
-             if (null === wD || void 0 === wD || delete wD.isSampled, 0 === Object.keys(null !== wD && void 0 !== wD ? wD : {}).length) null === (LD = DD.meta.session) || void 0 === LD || delete LD.attributes;
+             if (null === cp || void 0 === cp || delete cp.isSampled, 0 === Object.keys(null !== cp && void 0 !== cp ? cp : {}).length) null === (xp = pp.meta.session) || void 0 === xp || delete xp.attributes;
```

#### 25. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1016)

```diff
-       return wD || pD ? [(null === DD || void 0 === DD ? void 0 : DD.includes("@")) ? DD.split("@")[0] : DD, wD ? `${Rw}:${zD}` : `${Aw}:${zD}`] : [DD, zD]
+       return cp || Op ? [(null === pp || void 0 === pp ? void 0 : pp.includes("@")) ? pp.split("@")[0] : pp, cp ? `${Pc}:${ip}` : `${Wc}:${ip}`] : [pp, ip]
```

#### 26. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1135-L1136` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1135-L1136) · [Before (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1135-L1136)

```diff
-         wD = null !== sD && void 0 !== sD ? sD : pD ? "DOMError" : "DOMException", zD = KD ? `${wD}: ${KD}` : wD
-       } else WD(DD) ? (wD = DD.name, zD = DD.message, KD = Bw(DD)) : (CD(DD) || (sD = iD(DD))) && (wD = sD ? DD.constructor.name : void 0, zD = `Non-Error exception captured with keys: ${Object.keys(DD)}`);
+         cp = null !== op && void 0 !== op ? op : Op ? "DOMError" : "DOMException", ip = Ip ? `${cp}: ${Ip}` : cp
+       } else Tp(pp) ? (cp = pp.name, ip = pp.message, Ip = vc(pp)) : (Mp(pp) || (op = Bp(pp))) && (cp = op ? pp.constructor.name : void 0, ip = `Non-Error exception captured with keys: ${Object.keys(pp)}`);
```

#### 27. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1145)

```diff
-       return KD || !gD ? ([rD, LD, cD] = xw(null !== KD && void 0 !== KD ? KD : zD), 0 === cD.length && (cD = [RD])) : gD && ([rD, LD] = function(DD) {
+       return Ip || !Yp ? ([Sp, xp, Lp] = Ec(null !== Ip && void 0 !== Ip ? Ip : ip), 0 === Lp.length && (Lp = [Dp])) : Yp && ([Sp, xp] = function(pp) {
```

#### 28. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1148-L1149` → after: `L1148-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1148-L1149) · [Before (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1148-L1149)

```diff
-           sD = null !== (zD = null === pD || void 0 === pD ? void 0 : pD[1]) && void 0 !== zD ? zD : Pw;
-         return [null !== (wD = null === pD || void 0 === pD ? void 0 : pD[2]) && void 0 !== wD ? wD : DD, sD]
+           op = null !== (ip = null === Op || void 0 === Op ? void 0 : Op[1]) && void 0 !== ip ? ip : Mc;
+         return [null !== (cp = null === Op || void 0 === Op ? void 0 : Op[2]) && void 0 !== cp ? cp : pp, op]
```

#### 29. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1177-L1178` → after: `L1177-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1177-L1178) · [Before (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1177-L1178)

```diff
-         this.errorSerializer = sD ? null !== (zD = null === pD || void 0 === pD ? void 0 : pD.errorSerializer) && void 0 !== zD ? zD : Cw : jw;
-         const KD = null !== (wD = null === pD || void 0 === pD ? void 0 : pD.disabledLevels) && void 0 !== wD ? wD : DD.defaultDisabledLevels,
+         this.errorSerializer = op ? null !== (ip = null === Op || void 0 === Op ? void 0 : Op.errorSerializer) && void 0 !== ip ? ip : Cc : Qc;
+         const Ip = null !== (cp = null === Op || void 0 === Op ? void 0 : Op.disabledLevels) && void 0 !== cp ? cp : pp.defaultDisabledLevels,
```

#### 30. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1181)

```diff
-               const zD = null !== DD && void 0 !== DD ? DD : qz;
+               const ip = null !== pp && void 0 !== pp ? pp : cc;
```

#### 31. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1211-L1212` → after: `L1211-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1211-L1212) · [Before (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1211-L1212)

```diff
-                     value: null !== zD && void 0 !== zD ? zD : "",
-                     type: null !== pD && void 0 !== pD ? pD : "",
+                     value: null !== ip && void 0 !== ip ? ip : "",
+                     type: null !== Op && void 0 !== Op ? Op : "",
```

#### 32. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1281)

```diff
-               dD(KD) ? (pD = `Non-Error promise rejection captured with value: ${String(KD)}`, sD = "UnhandledRejection") : [pD, sD, LD] = xw(KD), pD && DD.pushError(new Error(pD), {
+               Qp(Ip) ? (Op = `Non-Error promise rejection captured with value: ${String(Ip)}`, op = "UnhandledRejection") : [Op, op, xp] = Ec(Ip), Op && pp.pushError(new Error(Op), {
```

#### 33. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1299)

```diff
-             const DD = null !== (pD = null === (sD = this.notifiedView) || void 0 === sD ? void 0 : sD.name) && void 0 !== pD ? pD : lw;
+             const pp = null !== (Op = null === (op = this.notifiedView) || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : Tc;
```

#### 34. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1302)

```diff
-               toView: null !== (KD = wD.name) && void 0 !== KD ? KD : lw
+               toView: null !== (Ip = cp.name) && void 0 !== Ip ? Ip : Tc
```

#### 35. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1358` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1358) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1358)

```diff
-             if (zD = zD ? pD + ">" + zD : pD, wD.id) break;
+             if (ip = ip ? Op + ">" + ip : Op, cp.id) break;
```

#### 36. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1426) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1426)

```diff
-         return wD ? gD = wD : uw() >= 0 ? gD = "back-forward-cache" : LD && (document.prerendering || Yw() > 0 ? gD = "prerender" : document.wasDiscarded ? gD = "restore" : LD.type && (gD = LD.type.replace(/_/g, "-"))), {
+         return cp ? Yp = cp : Zc() >= 0 ? Yp = "back-forward-cache" : xp && (document.prerendering || Vc() > 0 ? Yp = "prerender" : document.wasDiscarded ? Yp = "restore" : xp.type && (Yp = xp.type.replace(/_/g, "-"))), {
```

#### 37. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1512)

```diff
-     const Mp = () => np ? Ip : performance.interactionCount ?? 0;
+     const eO = () => dO ? wO : performance.interactionCount ?? 0;
```

#### 38. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1828)

```diff
-                     const wD = DD.entries.reduce(((DD, zD) => DD.value > zD.value ? DD : zD));
+                     const cp = pp.entries.reduce(((pp, ip) => pp.value > ip.value ? pp : ip));
```

#### 39. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L1954)

```diff
-                 } else DD.id && pD.set(DD, `#${DD.id}`)
+                 } else pp.id && Op.set(pp, `#${pp.id}`)
```

#### 40. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2043-L2044` → after: `L2043-L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2043-L2044) · [Before (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2043-L2044)

```diff
-                         pD = Math.max(wD, rD ? (rD.requestStart || rD.startTime) - cD : 0),
-                         sD = Math.min(DD.value, Math.max(pD, rD ? rD.responseEnd - cD : 0));
+                         Op = Math.max(cp, Sp ? (Sp.requestStart || Sp.startTime) - Lp : 0),
+                         op = Math.min(pp.value, Math.max(Op, Sp ? Sp.responseEnd - Lp : 0));
```

#### 41. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2153)

```diff
-           const wD = null !== (zD = Dz("com.grafana.faro.lastNavigationId", YD)) && void 0 !== zD ? zD : lw;
+           const cp = null !== (ip = ci("com.grafana.faro.lastNavigationId", Kp)) && void 0 !== ip ? ip : Tc;
```

#### 42. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2257)

```diff
-         serviceWorkerTime: mp(JD > 0 ? cD - JD : 0),
+         serviceWorkerTime: FO(ep > 0 ? Lp - ep : 0),
```

#### 43. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2292` → after: `L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2292) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2292)

```diff
-         documentParsingTime: mp(AD ? KD - AD : null),
+         documentParsingTime: FO(Ap ? Ip - Ap : null),
```

#### 44. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2296)

```diff
-         ttfb: mp(Math.max(gD - (null !== zD && void 0 !== zD ? zD : 0), 0)),
+         ttfb: FO(Math.max(Yp - (null !== ip && void 0 !== ip ? ip : 0), 0)),
```

#### 45. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2310)

```diff
-       return null == DD ? lw : "number" === typeof DD ? Math.round(DD > 0 ? DD : 0).toString() : DD.toString()
+       return null == pp ? Tc : "number" === typeof pp ? Math.round(pp > 0 ? pp : 0).toString() : pp.toString()
```

#### 46. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2378)

```diff
-                   const LD = null !== (pD = Dz("com.grafana.faro.lastNavigationId", YD)) && void 0 !== pD ? pD : lw,
+                   const xp = null !== (Op = ci("com.grafana.faro.lastNavigationId", Kp)) && void 0 !== Op ? Op : Tc,
```

#### 47. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2438` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2438) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2438)

```diff
-       return `data-${(DD.startsWith("data-")?DD.slice(5):DD).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
+       return `data-${(pp.startsWith("data-")?pp.slice(5):pp).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
```

#### 48. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2449)

```diff
-       return !Number.isFinite(pD) || pD <= 0 ? (wD(`initialActivityTimeout must be a finite number greater than zero; using ${zD} ms`), zD) : pD > 1e3 ? (wD(`initialActivityTimeout cannot exceed ${Hp} ms; clamping to the maximum`), Hp) : pD
+       return !Number.isFinite(Op) || Op <= 0 ? (cp(`initialActivityTimeout must be a finite number greater than zero; using ${ip} ms`), ip) : Op > 1e3 ? (cp(`initialActivityTimeout cannot exceed ${VO} ms; clamping to the maximum`), VO) : Op
```

#### 49. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2503)

```diff
-           const sD = null !== (DD = FD(arguments[0])) && void 0 !== DD ? DD : "",
+           const op = null !== (pp = sp(arguments[0])) && void 0 !== pp ? pp : "",
```

#### 50. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2505` → after: `L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2505) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2505)

```diff
-             rD = (null !== (pD = arguments[1]) && void 0 !== pD ? pD : {}).method,
+             Sp = (null !== (Op = arguments[1]) && void 0 !== Op ? Op : {}).method,
```

#### 51. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2636` → after: `L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2636) · [Before (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2636)

```diff
-           const KD = null !== (zD = null === (wD = sD.userActionsInstrumentation) || void 0 === wD ? void 0 : wD.dataAttributeName) && void 0 !== zD ? zD : Fp,
+           const Ip = null !== (ip = null === (cp = op.userActionsInstrumentation) || void 0 === cp ? void 0 : cp.dataAttributeName) && void 0 !== ip ? ip : sO,
```

#### 52. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2660` → after: `L2660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2660) · [Before (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2660)

```diff
-               return zD.endsWith("-name") ? `${zD.slice(0,-5)}-timeout` : `${zD}-timeout`
+               return ip.endsWith("-name") ? `${ip.slice(0,-5)}-timeout` : `${ip}-timeout`
```

#### 53. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2709` → after: `L2709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2709) · [Before (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2709)

```diff
-           super(), this.name = zD, this.attributes = KD, this.id = hz(), this.trigger = pD, this.parentId = null !== wD && void 0 !== wD ? wD : this.id, this.trackUserActionsExcludeItem = rD, this.importance = LD, this._pushEvent = cD, this._itemBuffer = new Es, this._transports  … [truncated]
+           super(), this.name = ip, this.attributes = Ip, this.id = Hi(), this.trigger = Op, this.parentId = null !== cp && void 0 !== cp ? cp : this.id, this.trackUserActionsExcludeItem = Sp, this.importance = xp, this._pushEvent = Lp, this._itemBuffer = new jo, this._transports  … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2823-L2826` → after: `L2823-L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2823-L2826) · [Before (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2823-L2826)

```diff
-           inactivityMs: null !== (wD = null === zD || void 0 === zD ? void 0 : zD.inactivityMs) && void 0 !== wD ? wD : 100,
-           drainTimeoutMs: null !== (pD = null === zD || void 0 === zD ? void 0 : zD.drainTimeoutMs) && void 0 !== pD ? pD : 1e4,
-           isOperationStart: null !== (sD = null === zD || void 0 === zD ? void 0 : zD.isOperationStart) && void 0 !== sD ? sD : () => {},
-           isOperationEnd: null !== (KD = null === zD || void 0 === zD ? void 0 : zD.isOperationEnd) && void 0 !== KD ? KD : () => {}
+           inactivityMs: null !== (cp = null === ip || void 0 === ip ? void 0 : ip.inactivityMs) && void 0 !== cp ? cp : 100,
+           drainTimeoutMs: null !== (Op = null === ip || void 0 === ip ? void 0 : ip.drainTimeoutMs) && void 0 !== Op ? Op : 1e4,
+           isOperationStart: null !== (op = null === ip || void 0 === ip ? void 0 : ip.isOperationStart) && void 0 !== op ? op : () => {},
+           isOperationEnd: null !== (Ip = null === ip || void 0 === ip ? void 0 : ip.isOperationEnd) && void 0 !== Ip ? Ip : () => {}
```

#### 55. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2891` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2891) · [Before (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2891)

```diff
-               const wD = null !== zD && void 0 !== zD ? zD : location.href;
+               const cp = null !== ip && void 0 !== ip ? ip : location.href;
```

#### 56. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2967` → after: `L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2967) · [Before (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2967)

```diff
-     function as() {
+     function Go() {
```

#### 57. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2972` → after: `L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2972) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2972)

```diff
-     var us = wD(6731);
+     var ro = cp(6841);
```

#### 58. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2996-L3000` → after: `L2996-L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L2996-L3000) · [Before (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L2996-L3000)

```diff
-             name: null !== pD && void 0 !== pD ? pD : lw,
-             version: null !== sD && void 0 !== sD ? sD : lw,
-             os: `${null!==KD&&void 0!==KD?KD:lw} ${null!==rD&&void 0!==rD?rD:lw}`,
-             userAgent: null !== wD && void 0 !== wD ? wD : lw,
-             language: null !== LD && void 0 !== LD ? LD : lw,
+             name: null !== Op && void 0 !== Op ? Op : Tc,
+             version: null !== op && void 0 !== op ? op : Tc,
+             os: `${null!==Ip&&void 0!==Ip?Ip:Tc} ${null!==Sp&&void 0!==Sp?Sp:Tc}`,
+             userAgent: null !== cp && void 0 !== cp ? cp : Tc,
+             language: null !== xp && void 0 !== xp ? xp : Tc,
```

#### 59. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3002` → after: `L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3002) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3002)

```diff
-             brands: null !== gD && void 0 !== gD ? gD : lw,
+             brands: null !== Yp && void 0 !== Yp ? Yp : Tc,
```

#### 60. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3023` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3023) · [Before (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3023)

```diff
-         id: null !== (zD = null === (wD = BD.config) || void 0 === wD || null === (wD = wD.sessionTracking) || void 0 === wD || null === (pD = wD.generateSessionId) || void 0 === pD ? void 0 : pD.call(wD)) && void 0 !== zD ? zD : hz(),
+         id: null !== (ip = null === (cp = Up.config) || void 0 === cp || null === (cp = cp.sessionTracking) || void 0 === cp || null === (Op = cp.generateSessionId) || void 0 === Op ? void 0 : Op.call(cp)) && void 0 !== ip ? ip : Hi(),
```

#### 61. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3100` → after: `L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3100) · [Before (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3100)

```diff
-         return this.unpatchedConsole[null !== (zD = this.options.level) && void 0 !== zD ? zD : Ow.DEBUG]("New event", KK([DD]))
+         return this.unpatchedConsole[null !== (ip = this.options.level) && void 0 !== ip ? ip : uc.DEBUG]("New event", SI([pp]))
```

#### 62. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3169)

```diff
-                 const AD = Math.min(null !== (rD = RD.retryAfterMs) && void 0 !== rD ? rD : DD.options.retry.initialBackoffMs * Math.pow(DD.options.retry.backoffMultiplier, KD - 1), DD.options.retry.maxBackoffMs);
+                 const Ap = Math.min(null !== (Sp = Dp.retryAfterMs) && void 0 !== Sp ? Sp : pp.options.retry.initialBackoffMs * Math.pow(pp.options.retry.backoffMultiplier, Ip - 1), pp.options.retry.maxBackoffMs);
```

#### 63. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3319-L3321` → after: `L3319-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3319-L3321) · [Before (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3319-L3321)

```diff
-         super(), this.options = DD, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = ww, this.pendingCustomSends = 0, this.getNow = null !== (zD = DD.getNow) && void 0 !== zD ? zD : Date.now, this.requestTimeoutMs = null !== (wD = DD.requestTimeoutMs) && void 0 … [truncated]
-           bufferSize: null !== (sD = DD.bufferSize) && void 0 !== sD ? sD : 30,
-           concurrency: null !== (KD = DD.concurrency) && void 0 !== KD ? KD : 5,
+         super(), this.options = pp, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = Ic, this.pendingCustomSends = 0, this.getNow = null !== (ip = pp.getNow) && void 0 !== ip ? ip : Date.now, this.requestTimeoutMs = null !== (cp = pp.requestTimeoutMs) && void 0 … [truncated]
+           bufferSize: null !== (op = pp.bufferSize) && void 0 !== op ? op : 30,
+           concurrency: null !== (Ip = pp.concurrency) && void 0 !== Ip ? Ip : 5,
```

#### 64. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3323-L3326` → after: `L3323-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326) · [Before (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326)

```diff
-             maxAttempts: null !== (rD = null === (LD = DD.retry) || void 0 === LD ? void 0 : LD.maxAttempts) && void 0 !== rD ? rD : 3,
-             initialBackoffMs: null !== (cD = null !== (gD = null === (RD = DD.retry) || void 0 === RD ? void 0 : RD.initialBackoffMs) && void 0 !== gD ? gD : DD.defaultRateLimitBackoffMs) && void 0 !== cD ? cD : 1e3,
-             maxBackoffMs: null !== (AD = null === (UD = DD.retry) || void 0 === UD ? void 0 : UD.maxBackoffMs) && void 0 !== AD ? AD : 3e4,
-             backoffMultiplier: null !== (fD = null === (ID = DD.retry) || void 0 === ID ? void 0 : ID.backoffMultiplier) && void 0 !== fD ? fD : 2
+             maxAttempts: null !== (Sp = null === (xp = pp.retry) || void 0 === xp ? void 0 : xp.maxAttempts) && void 0 !== Sp ? Sp : 3,
+             initialBackoffMs: null !== (Lp = null !== (Yp = null === (Dp = pp.retry) || void 0 === Dp ? void 0 : Dp.initialBackoffMs) && void 0 !== Yp ? Yp : pp.defaultRateLimitBackoffMs) && void 0 !== Lp ? Lp : 1e3,
+             maxBackoffMs: null !== (Ap = null === (Pp = pp.retry) || void 0 === Pp ? void 0 : Pp.maxBackoffMs) && void 0 !== Ap ? Ap : 3e4,
+             backoffMultiplier: null !== (Wp = null === (yp = pp.retry) || void 0 === yp ? void 0 : yp.backoffMultiplier) && void 0 !== Wp ? Wp : 2
```

#### 65. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3329` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3329) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3329)

```diff
-           getRandom: null !== (BD = DD.getRandom) && void 0 !== BD ? BD : Math.random,
+           getRandom: null !== (Up = pp.getRandom) && void 0 !== Up ? Up : Math.random,
```

#### 66. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3331` → after: `L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3331) · [Before (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3331)

```diff
-             this.logDebug(`Retrying failed request after ${DD}ms. Attempt ${zD}.`)
+             this.logDebug(`Retrying failed request after ${pp}ms. Attempt ${ip}.`)
```

#### 67. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335)

```diff
-           size: null !== (GD = DD.bufferSize) && void 0 !== GD ? GD : 30,
-           concurrency: null !== (hD = DD.concurrency) && void 0 !== hD ? hD : 5
+           size: null !== (wp = pp.bufferSize) && void 0 !== wp ? wp : 30,
+           concurrency: null !== (vp = pp.concurrency) && void 0 !== vp ? vp : 5
```

#### 68. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3410` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3410) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3410)

```diff
-         return [this.options.url].concat(null !== (DD = this.config.ignoreUrls) && void 0 !== DD ? DD : [])
+         return [this.options.url].concat(null !== (pp = this.config.ignoreUrls) && void 0 !== pp ? pp : [])
```

#### 69. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3422` → after: `L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3422) · [Before (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3422)

```diff
-             LD = null !== (pD = zD.options.requestOptions) && void 0 !== pD ? pD : {},
+             xp = null !== (Op = ip.options.requestOptions) && void 0 !== Op ? Op : {},
```

#### 70. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3566` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3566) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3566)

```diff
-           return Number.isFinite(DD) ? DD : Number.POSITIVE_INFINITY
+           return Number.isFinite(pp) ? pp : Number.POSITIVE_INFINITY
```

#### 71. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3623` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3623) · [Before (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3623)

```diff
-               day: Number(null !== gD && void 0 !== gD ? gD : RD),
+               day: Number(null !== Yp && void 0 !== Yp ? Yp : Dp),
```

#### 72. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3722` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3722) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3722)

```diff
-         DD.error(`${wD.prefix}\n`, ...pD)
+         pp.error(`${cp.prefix}\n`, ...Op)
```

#### 73. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3725` → after: `L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3725) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3725)

```diff
-         DD.warn(`${wD.prefix}\n`, ...pD)
+         pp.warn(`${cp.prefix}\n`, ...Op)
```

#### 74. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3728` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3728) · [Before (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3728)

```diff
-         DD.info(`${wD.prefix}\n`, ...pD)
+         pp.info(`${cp.prefix}\n`, ...Op)
```

#### 75. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3731` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3731) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3731)

```diff
-         DD.debug(`${wD.prefix}\n`, ...pD)
+         pp.debug(`${cp.prefix}\n`, ...Op)
```

#### 76. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3755` → after: `L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3755) · [Before (L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3755)

```diff
-         instrumentations: ID = as(),
+         instrumentations: yp = Go(),
```

#### 77. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3766` → after: `L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3766) · [Before (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3766)

```diff
-         dataAttributeName: qp(null !== (wD = null === (sD = DD.userActionsInstrumentation) || void 0 === sD ? void 0 : sD.dataAttributeName) && void 0 !== wD ? wD : Fp),
+         dataAttributeName: po(null !== (cp = null === (op = pp.userActionsInstrumentation) || void 0 === op ? void 0 : op.dataAttributeName) && void 0 !== cp ? cp : sO),
```

#### 78. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3785` → after: `L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3785) · [Before (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3785)

```diff
-         ignoreUrls: [...null !== (LD = DD.ignoreUrls) && void 0 !== LD ? LD : [], ...ED ? [ED] : [], /\/collect(?:\/[\w]*)?$/],
+         ignoreUrls: [...null !== (xp = pp.ignoreUrls) && void 0 !== xp ? xp : [], ...jp ? [jp] : [], /\/collect(?:\/[\w]*)?$/],
```

#### 79. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3811` → after: `L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3811) · [Before (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3811)

```diff
-       } = null !== (zD = null === DD || void 0 === DD ? void 0 : DD.pageTracking) && void 0 !== zD ? zD : {}, rD = [Ys, Hs, xK({
+       } = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.pageTracking) && void 0 !== ip ? ip : {}, Sp = [Ko, Vo, CI({
```

#### 80. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3814` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3814) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3814)

```diff
-       }), ...null !== (wD = DD.metas) && void 0 !== wD ? wD : [], DK];
+       }), ...null !== (cp = pp.metas) && void 0 !== cp ? cp : [], iI];
```

#### 81. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3826)

```diff
-         session: Rz(Rz({}, null !== (pD = null === wD || void 0 === wD ? void 0 : wD.session) && void 0 !== pD ? pD : {}), {}, {
+         session: Pi(Pi({}, null !== (Op = null === cp || void 0 === cp ? void 0 : cp.session) && void 0 !== Op ? Op : {}), {}, {
```

#### 82. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3844` → after: `L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3844) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3844)

```diff
-       const zD = `__faroBundleId_${DD}`,
+       const ip = `__faroBundleId_${pp}`,
```

#### 83. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3848` → after: `L3848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3848) · [Before (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3848)

```diff
-       return "string" === typeof pD && "" !== pD ? pD : void 0
+       return "string" === typeof Op && "" !== Op ? Op : void 0
```

#### 84. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3855)

```diff
-           return null === RD || void 0 === RD ? void 0 : RD[`__faroGitHash_${DD}`]
+           return null === Dp || void 0 === Dp ? void 0 : Dp[`__faroGitHash_${pp}`]
```

#### 85. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3869` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3869) · [Before (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3869)

```diff
-       rD && DD.api.setSession(rD), DD.config.app && (KD.app = Hz(Hz({}, DD.config.app), KD.app)), DD.config.user && (KD.user = DD.config.user), DD.config.view && (KD.view = DD.config.view), DD.metas.add(KD, ...null !== (wD = DD.config.metas) && void 0 !== wD ? wD : [])
+       Sp && pp.api.setSession(Sp), pp.config.app && (Ip.app = ic(ic({}, pp.config.app), Ip.app)), pp.config.user && (Ip.user = pp.config.user), pp.config.view && (Ip.view = pp.config.view), pp.metas.add(Ip, ...null !== (cp = pp.config.metas) && void 0 !== cp ? cp : [])
```

#### 86. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3874` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3874) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3874)

```diff
-         this.signalBuffer = [], this.itemLimit = null !== (wD = null === zD || void 0 === zD ? void 0 : zD.itemLimit) && void 0 !== wD ? wD : 50, this.sendTimeout = null !== (pD = null === zD || void 0 === zD ? void 0 : zD.sendTimeout) && void 0 !== pD ? pD : 250, this.paused = ( … [truncated]
+         this.signalBuffer = [], this.itemLimit = null !== (cp = null === ip || void 0 === ip ? void 0 : ip.itemLimit) && void 0 !== cp ? cp : 50, this.sendTimeout = null !== (Op = null === ip || void 0 === ip ? void 0 : ip.sendTimeout) && void 0 !== Op ? Op : 250, this.paused = ( … [truncated]
```

#### 87. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3928` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3928) · [Before (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3928)

```diff
-           for (const pD of KD) zD.debug(`Transporting item using ${pD.name}\n`, wD), pD.isBatched() && pD.send(wD)
+           for (const Op of Ip) ip.debug(`Transporting item using ${Op.name}\n`, cp), Op.isBatched() && Op.send(cp)
```

#### 88. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3939)

```diff
-             zD.debug(`Adding "${sD.name}" transport`), KD.some((DD => DD === sD)) ? zD.warn(`Transport ${sD.name} is already added`) : (sD.unpatchedConsole = DD, sD.internalLogger = zD, sD.config = wD, sD.metas = pD, KD.push(sD))
+             ip.debug(`Adding "${op.name}" transport`), Ip.some((pp => pp === op)) ? ip.warn(`Transport ${op.name} is already added`) : (op.unpatchedConsole = pp, op.internalLogger = ip, op.config = cp, op.metas = Op, Ip.push(op))
```

#### 89. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3971` → after: `L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3971) · [Before (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3971)

```diff
-                   zD.debug(`Transporting item using ${LD.name}\n`, sD), LD.isBatched() ? (null === (rD = wD.batching) || void 0 === rD ? void 0 : rD.enabled) || LD.send([sD]) : LD.send(sD)
+                   ip.debug(`Transporting item using ${xp.name}\n`, op), xp.isBatched() ? (null === (Sp = cp.batching) || void 0 === Sp ? void 0 : Sp.enabled) || xp.send([op]) : xp.send(op)
```

#### 90. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3984-L3985` → after: `L3984-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985) · [Before (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985)

```diff
-             zD.debug(`Removing "${DD.name}" transport`);
-             const wD = KD.indexOf(DD); - 1 !== wD ? KD.splice(wD, 1) : zD.warn(`Transport "${DD.name}" is not added`)
+             ip.debug(`Removing "${pp.name}" transport`);
+             const cp = Ip.indexOf(pp); - 1 !== cp ? Ip.splice(cp, 1) : ip.warn(`Transport "${pp.name}" is not added`)
```

#### 91. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4010` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4010) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4010)

```diff
-       return uK = null !== (zD = DD.unpatchedConsole) && void 0 !== zD ? zD : uK, uK
+       return rI = null !== (ip = pp.unpatchedConsole) && void 0 !== ip ? ip : rI, rI
```

#### 92. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4030)

```diff
-       tK = null !== (LD = wD.parseStacktrace) && void 0 !== LD ? LD : tK;
+       zI = null !== (xp = cp.parseStacktrace) && void 0 !== xp ? xp : zI;
```

#### 93. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4032)

```diff
-           zD.debug("Changing stacktrace parser"), tK = null !== DD && void 0 !== DD ? DD : tK
+           ip.debug("Changing stacktrace parser"), zI = null !== pp && void 0 !== pp ? pp : zI
```

#### 94. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4061` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4061) · [Before (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4061)

```diff
-             }(RD, null !== GD && void 0 !== GD ? GD : DD)) try {
+             }(Dp, null !== wp && void 0 !== wp ? wp : pp)) try {
```

#### 95. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4070)

```diff
-               }(null !== GD && void 0 !== GD ? GD : DD)), null !== fD && void 0 !== fD ? fD : {})),
+               }(null !== wp && void 0 !== wp ? wp : pp)), null !== Wp && void 0 !== Wp ? Wp : {})),
```

#### 96. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4088)

```diff
-             gD = null !== (MD = gD) && void 0 !== MD ? MD : DD.stack ? null === tK || void 0 === tK ? void 0 : tK(DD).frames : void 0, (null === gD || void 0 === gD ? void 0 : gD.length) && (ED.stacktrace = {
+             Yp = null !== (Hp = Yp) && void 0 !== Hp ? Hp : pp.stack ? null === zI || void 0 === zI ? void 0 : zI(pp).frames : void 0, (null === Yp || void 0 === Yp ? void 0 : Yp.length) && (jp.stacktrace = {
```

#### 97. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4232` → after: `L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4232) · [Before (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4232)

```diff
-                     domain: null !== gD && void 0 !== gD ? gD : wD.eventDomain,
+                     domain: null !== Yp && void 0 !== Yp ? Yp : cp.eventDomain,
```

#### 98. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4314` → after: `L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4314) · [Before (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4314)

```diff
-             const wD = ED(DD) ? Hz(Hz({}, null !== (zD = null === sD || void 0 === sD ? void 0 : sD.page) && void 0 !== zD ? zD : AD()), {}, {
+             const cp = jp(pp) ? ic(ic({}, null !== (ip = null === op || void 0 === op ? void 0 : op.page) && void 0 !== ip ? ip : Ap()), {}, {
```

#### 99. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4335` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4335) · [Before (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4335)

```diff
-         const gD = null !== (LD = wD.logArgsSerializer) && void 0 !== LD ? LD : jw;
+         const Yp = null !== (xp = cp.logArgsSerializer) && void 0 !== xp ? xp : Qc;
```

#### 100. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4350` → after: `L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4350) · [Before (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4350)

```diff
-                   level: null !== RD && void 0 !== RD ? RD : "log",
+                   level: null !== Dp && void 0 !== Dp ? Dp : "log",
```

#### 101. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4469` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4469) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4469)

```diff
-                 sD = null !== (zD = wD) && void 0 !== zD ? zD : KD;
+                 op = null !== (ip = cp) && void 0 !== ip ? ip : Ip;
```

#### 102. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4503` → after: `L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4503) · [Before (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4503)

```diff
-                 zD.debug(`Adding "${LD.name}" instrumentation`), rD.some((DD => DD.name === LD.name)) ? zD.warn(`Instrumentation ${LD.name} is already added`) : (LD.unpatchedConsole = DD, LD.internalLogger = zD, LD.config = wD, LD.metas = pD, LD.transports = sD, LD.api = KD, rD.p … [truncated]
+                 ip.debug(`Adding "${xp.name}" instrumentation`), Sp.some((pp => pp.name === xp.name)) ? ip.warn(`Instrumentation ${xp.name} is already added`) : (xp.unpatchedConsole = pp, xp.internalLogger = ip, xp.config = cp, xp.metas = Op, xp.transports = op, xp.api = Ip, Sp.p … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4514-L4516` → after: `L4514-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516) · [Before (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516)

```diff
-                 zD.debug(`Removing "${DD.name}" instrumentation`);
-                 const sD = rD.reduce(((zD, wD, pD) => null === zD && wD.name === DD.name ? pD : null), null);
-                 null !== sD ? (null === (wD = (pD = rD[sD]).destroy) || void 0 === wD || wD.call(pD), rD.splice(sD, 1)) : zD.warn(`Instrumentation "${DD.name}" is not added`)
+                 ip.debug(`Removing "${pp.name}" instrumentation`);
+                 const op = Sp.reduce(((ip, cp, Op) => null === ip && cp.name === pp.name ? Op : null), null);
+                 null !== op ? (null === (cp = (Op = Sp[op]).destroy) || void 0 === cp || cp.call(Op), Sp.splice(op, 1)) : ip.warn(`Instrumentation "${pp.name}" is not added`)
```

#### 104. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4536` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4536) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4536)

```diff
-   6731: function(DD, zD, wD) {
+   6841: function(pp, ip, cp) {
```

#### 105. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4593` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4593) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4593)

```diff
-           if (typeof DD === gD) return DD = DD.replace(/^\s\s*/, ""), typeof zD === LD ? DD : DD.substring(0, 500)
+           if (typeof pp === Yp) return pp = pp.replace(/^\s\s*/, ""), typeof ip === xp ? pp : pp.substring(0, 500)
```

#### 106. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4601` → after: `L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4601) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4601)

```diff
-                 for (sD = 0; sD < fD.length; sD++) RD = gD[++pD], typeof(LD = fD[sD]) === cD && LD.length > 0 ? 2 === LD.length ? typeof LD[1] == rD ? this[LD[0]] = LD[1].call(this, RD) : this[LD[0]] = LD[1] : 3 === LD.length ? typeof LD[1] !== rD || LD[1].exec && LD[1].test ? th … [truncated]
+                 for (op = 0; op < Wp.length; op++) Dp = Yp[++Op], typeof(xp = Wp[op]) === Lp && xp.length > 0 ? 2 === xp.length ? typeof xp[1] == Sp ? this[xp[0]] = xp[1].call(this, Dp) : this[xp[0]] = xp[1] : 3 === xp.length ? typeof xp[1] !== Sp || xp[1].exec && xp[1].test ? th … [truncated]
```

#### 107. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4609-L4610` → after: `L4609-L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610) · [Before (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610)

```diff
-                 if (HD(zD[wD][pD], DD)) return "?" === wD ? KD : wD
-             } else if (HD(zD[wD], DD)) return "?" === wD ? KD : wD;
+                 if (Vp(ip[cp][Op], pp)) return "?" === cp ? Ip : cp
+             } else if (Vp(ip[cp], pp)) return "?" === cp ? Ip : cp;
```

#### 108. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5339` → after: `L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L5339) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L5339)

```diff
-           }, this.iI = function() {
+           }, this.gy = function() {
```

#### 109. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5349` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/errorLogging.js#L5349) · [Before (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/errorLogging.js#L5349)

```diff
-               engine: this.iI(),
+               engine: this.gy(),
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/fa-renderer.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/fa-renderer.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741)

#### 1. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L1)

```diff
- /*! For license information please see tz47m9.fa-renderer.004bc8f1.chunk.js.LICENSE.txt */
+ /*! For license information please see sn3sfj.fa-renderer.2bcaac39.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L5)

```diff
-   6719: (DD, zD, wD) => {
+   6826: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10)

```diff
-     var pD = wD(6712),
-       sD = wD(4981),
+     var Op = cp(6822),
+       op = cp(5081),
```

#### 4. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L12)

```diff
-       rD = wD(58);
+       Sp = cp(62);
```

#### 5. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L32)

```diff
-         return "symbol" == typeof zD ? zD : zD + ""
+         return "symbol" == typeof ip ? ip : ip + ""
```

#### 6. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L122)

```diff
-       var GD = wD(6723);
+       var wp = cp(6828);
```

#### 7. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L193)

```diff
-         return PD[DD] ? DD : null
+         return qp[pp] ? pp : null
```

#### 8. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L200)

```diff
-       return zD = DD, (zD -= 0) === zD ? DD : (DD = DD.replace(/[\-_\s]+(.)?/g, (function(DD, zD) {
+       return ip = pp, (ip -= 0) === ip ? pp : (pp = pp.replace(/[\-_\s]+(.)?/g, (function(pp, ip) {
```

#### 9. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L212)

```diff
-       return DD && "object" === fD(DD) && DD.prefix && DD.iconName && DD.icon ? DD : pD.parse.icon ? pD.parse.icon(DD) : null === DD ? null : DD && "object" === fD(DD) && DD.prefix && DD.iconName ? DD : Array.isArray(DD) && 2 === DD.length ? {
+       return pp && "object" === Wp(pp) && pp.prefix && pp.iconName && pp.icon ? pp : Op.parse.icon ? Op.parse.icon(pp) : null === pp ? null : pp && "object" === Wp(pp) && pp.prefix && pp.iconName ? pp : Array.isArray(pp) && 2 === pp.length ? {
```

#### 10. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L337)

```diff
-                 return sD.startsWith("webkit") ? DD[(wD = sD, wD.charAt(0).toUpperCase() + wD.slice(1))] = KD : DD[sD] = KD, DD
+                 return op.startsWith("webkit") ? pp[(cp = op, cp.charAt(0).toUpperCase() + cp.slice(1))] = Ip : pp[op] = Ip, pp
```

#### 11. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L341)

```diff
-               0 === zD.indexOf("aria-") || 0 === zD.indexOf("data-") ? DD.attrs[zD.toLowerCase()] = pD : DD.attrs[nD(zD)] = pD
+               0 === ip.indexOf("aria-") || 0 === ip.indexOf("data-") ? pp.attrs[ip.toLowerCase()] = Op : pp.attrs[tp(ip)] = Op
```

#### 12. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370)

```diff
-   4988: (DD, zD, wD) => {
-     var pD = wD(4997);
+   5085: (pp, ip, cp) => {
+     var Op = cp(5088);
```

#### 13. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L413-L414` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414)

```diff
-   4981: (DD, zD, wD) => {
-     DD.exports = wD(4988)()
+   5081: (pp, ip, cp) => {
+     pp.exports = cp(5085)()
```

#### 14. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L416)

```diff
-   4997: DD => {
+   5088: pp => {
```

#### 15. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L419)

```diff
-   6712: (DD, zD, wD) => {
+   6822: (pp, ip, cp) => {
```

#### 16. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L565)

```diff
-       return "symbol" == typeof zD ? zD : zD + ""
+       return "symbol" == typeof ip ? ip : ip + ""
```

#### 17. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586)

```diff
-         wD = void 0 === zD ? jD : zD,
+         cp = void 0 === ip ? lp : ip,
```

#### 18. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590)

```diff
-         KD = DD in sw.styles ? DD : null;
+         Ip = pp in xc.styles ? pp : null;
```

#### 19. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631)

```diff
-             pD ? wD = pD : DD && zD.push(DD)
+             Op ? cp = Op : pp && ip.push(pp)
```

#### 20. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834)

```diff
-           zD = void 0 === DD ? XD : DD;
+           ip = void 0 === pp ? mp : pp;
```

#### 21. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871)

```diff
-         fD = pD.found ? pD : wD,
+         Wp = Op.found ? Op : cp,
```

#### 22. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056)

```diff
-       Lp = mz.measurePerformance && PD && PD.mark && PD.measure ? PD : {
+       YO = gi.measurePerformance && qp && qp.mark && qp.measure ? qp : {
```

#### 23. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086)

```diff
-         wD = void 0 === zD ? "svg" === DD.tag ? fp : Ip : zD;
+         cp = void 0 === ip ? "svg" === pp.tag ? UO : wO : ip;
```

#### 24. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137)

```diff
-       var wD = "function" === typeof zD ? zD : Ap;
+       var cp = "function" === typeof ip ? ip : WO;
```

#### 25. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162)

```diff
-           wD = void 0 === zD ? Ap : zD,
+           cp = void 0 === ip ? WO : ip,
```

#### 26. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164)

```diff
-           sD = void 0 === pD ? Ap : pD,
+           op = void 0 === Op ? WO : Op,
```

#### 27. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166)

```diff
-           rD = void 0 === KD ? Ap : KD,
+           Sp = void 0 === Ip ? WO : Ip,
```

#### 28. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2168` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168)

```diff
-           cD = void 0 === LD ? XD : LD;
+           Lp = void 0 === xp ? mp : xp;
```

#### 29. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307)

```diff
-           pD = void 0 === wD ? az : wD,
+           Op = void 0 === cp ? Zi : cp,
```

#### 30. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359)

```diff
-                 pD = (zD || {}).icon ? zD : vw(zD || {}),
+                 Op = (ip || {}).icon ? ip : zc(ip || {}),
```

#### 31. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361)

```diff
-               return sD && (sD = (sD || {}).icon ? sD : vw(sD || {})), DD(pD, cD(cD({}, wD), {}, {
+               return op && (op = (op || {}).icon ? op : zc(op || {})), pp(Op, Lp(Lp({}, cp), {}, {
```

#### 32. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378)

```diff
-               wD = void 0 === zD ? XD : zD,
+               cp = void 0 === ip ? mp : ip,
```

#### 33. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518)

```diff
-                 pD = void 0 === wD ? az : wD,
+                 Op = void 0 === cp ? Zi : cp,
```

#### 34. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2821` → after: `L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821) · [Before (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821)

```diff
-           return DD.includes("(") ? DD : DD.split(",").map((function(DD) {
+           return pp.includes("(") ? pp : pp.split(",").map((function(pp) {
```

#### 35. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914)

```diff
-               wD = void 0 === zD ? XD : zD;
+               cp = void 0 === ip ? mp : ip;
```

#### 36. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280)

```diff
-   6723: DD => {
+   6828: pp => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/frameDebug.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/frameDebug.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084)

#### 1. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L4)

```diff
-   34070: (DD, zD, wD) => {
+   34280: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L14)

```diff
-       h: () => pD
+       f: () => Op
```

#### 3. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L17)

```diff
-   34068: (DD, zD, wD) => {
+   34273: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L28-L33` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33)

```diff
-     var pD = wD(4820),
-       sD = wD(4808),
-       KD = wD(34070),
-       rD = wD(2811),
-       LD = wD(1092),
-       cD = wD(2953);
+     var Op = cp(4911),
+       op = cp(4895),
+       Ip = cp(34280),
+       Sp = cp(2908),
+       xp = cp(1101),
+       Lp = cp(3058);
```

#### 5. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L38)

```diff
-           this.add(zD.startTime, zD.duration, zD.blockingDuration, (0, LD.o)(zD))
+           this.add(ip.startTime, ip.duration, ip.blockingDuration, (0, xp.n)(ip))
```

#### 6. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L41)

```diff
-         }, null !== (0, cD.b)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, cD.b)("longtask", this.onLongTask) ? "longtask" : null
+         }, null !== (0, Lp.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Lp.e)("longtask", this.onLongTask) ? "longtask" : null
```

#### 7. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L57-L61` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61) · [Before (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61)

```diff
-         const rD = "loaf" === this.kind && wD > 0 ? ` (blocking ${sD.toFixed(0)}, script ${KD.toFixed(0)})` : "";
-         return `${wD} ${this.kind} ${pD.toFixed(0)} ms${rD}`
-       }
-     }
-     var RD = wD(34079);
+         const Sp = "loaf" === this.kind && cp > 0 ? ` (blocking ${op.toFixed(0)}, script ${Ip.toFixed(0)})` : "";
+         return `${cp} ${this.kind} ${Op.toFixed(0)} ms${Sp}`
+       }
+     }
+     var Dp = cp(34287);
```

#### 8. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L64)

```diff
-       return zD < 0 || DD < zD ? DD : DD - zD
+       return ip < 0 || pp < ip ? pp : pp - ip
```

#### 9. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L86)

```diff
-         }, this.lastMs = 0, this.hidden = new RD.b, this.hiddenBefore = {
+         }, this.lastMs = 0, this.hidden = new Dp.c, this.hiddenBefore = {
```

#### 10. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L111-L114` → after: `L111-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114) · [Before (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114)

```diff
-             const wD = [`chunks +${AD(DD.chunksReceived,zD.chunksReceived)} got`, `+${AD(DD.chunksCancelled,zD.chunksCancelled)} cancelled`];
-             DD.chunksStored >= 0 && wD.push(`${DD.chunksStored} stored`);
-             const pD = `jobs +${AD(DD.jobsSent,zD.jobsSent)} sent, +${AD(DD.jobsDone,zD.jobsDone)} done, ${DD.jobsInFlight} in flight`;
-             return `${wD.join(", ")}; ${pD}; workers ${DD.workersLive} live, ${DD.workersRetired} retired`
+             const cp = [`chunks +${Ap(pp.chunksReceived,ip.chunksReceived)} got`, `+${Ap(pp.chunksCancelled,ip.chunksCancelled)} cancelled`];
+             pp.chunksStored >= 0 && cp.push(`${pp.chunksStored} stored`);
+             const Op = `jobs +${Ap(pp.jobsSent,ip.jobsSent)} sent, +${Ap(pp.jobsDone,ip.jobsDone)} done, ${pp.jobsInFlight} in flight`;
+             return `${cp.join(", ")}; ${Op}; workers ${pp.workersLive} live, ${pp.workersRetired} retired`
```

#### 11. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L123)

```diff
-         if ((rD > 0 || LD > 0) && (wD.push((0, RD.d)({
+         if ((Sp > 0 || xp > 0) && (cp.push((0, Dp.e)({
```

#### 12. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L127)

```diff
-         const cD = `load ${Math.round((DD-this.lastMs)/1e3)}s: ${wD.join("; ")}`;
+         const Lp = `load ${Math.round((pp-this.lastMs)/1e3)}s: ${cp.join("; ")}`;
```

#### 13. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L144)

```diff
-         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${DD} other, longest ${this.longest} in ${(0,KD.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
+         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${pp} other, longest ${this.longest} in ${(0,Ip.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
```

#### 14. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L182)

```diff
-           this.ahead = DD.headerWord(pD.G.Pacing) & pD._.AheadMask, this.frame(zD, wD, sD, KD, DD.headerWord(pD.G.RenderUs) / 1e3, DD.headerWord(pD.G.TicksRun), rD, DD.headerWord(pD.G.RenderPending))
+           this.ahead = pp.headerWord(Op.x.Pacing) & Op.O.AheadMask, this.frame(ip, cp, op, Ip, pp.headerWord(Op.x.RenderUs) / 1e3, pp.headerWord(Op.x.TicksRun), Sp, pp.headerWord(Op.x.RenderPending))
```

#### 15. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200)

```diff
-             const pD = [`long frame ${(0,KD.d)(wD.intervalMs)} ms ending at ${(0,KD.d)(wD.endMs)} ms: main ${(0,KD.d)(wD.mainMs)} (render ${(0,KD.d)(wD.renderMs)}, ${wD.ticks} ticks ${(0,KD.d)(wD.tickMs)}), outside ${(0,KD.d)(wD.intervalMs-wD.mainMs)}`, `${wD.rafs} rafs`];
-             wD.pendingBefore >= 0 && pD.push(`pending ${wD.pendingBefore} -> ${wD.pendingAfter} (max ${wD.pendingMax})`), pD.push(this.longTasks.describe(wD.endMs - wD.intervalMs, wD.endMs)), (0, rD.l)("frame", pD.join("; "))
+             const Op = [`long frame ${(0,Ip.d)(cp.intervalMs)} ms ending at ${(0,Ip.d)(cp.endMs)} ms: main ${(0,Ip.d)(cp.mainMs)} (render ${(0,Ip.d)(cp.renderMs)}, ${cp.ticks} ticks ${(0,Ip.d)(cp.tickMs)}), outside ${(0,Ip.d)(cp.intervalMs-cp.mainMs)}`, `${cp.rafs} rafs`];
+             cp.pendingBefore >= 0 && Op.push(`pending ${cp.pendingBefore} -> ${cp.pendingAfter} (max ${cp.pendingMax})`), Op.push(this.longTasks.describe(cp.endMs - cp.intervalMs, cp.endMs)), (0, Sp.n)("frame", Op.join("; "))
```

#### 16. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L210)

```diff
-             null !== zD && (0, rD.l)("frame", zD)
+             null !== ip && (0, Sp.n)("frame", ip)
```

#### 17. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L217)

```diff
-         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, rD.l)("frame", `start: ${DD} client, ${zD}, dpr ${window.devicePixelRatio}, long tasks ${null!==(wD=this.longTasks.kind)&& … [truncated]
+         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Sp.n)("frame", `start: ${pp} client, ${ip}, dpr ${window.devicePixelRatio}, long tasks ${null!==(cp=this.longTasks.kind)&& … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L231)

```diff
-         this.flushTimer = setTimeout(this.flush, DD ? BD : ID)
+         this.flushTimer = setTimeout(this.flush, pp ? Up : yp)
```

#### 19. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L236` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L236) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L236)

```diff
-         (0, sD.b)(wD) ? (this.lastDrawnStartMs >= 0 && (gD.pendingAfter = this.lastPending, this.closeInterval(DD - this.lastDrawnStartMs, DD)), this.lastDrawnStartMs = DD, JD(gD).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
+         (0, op.e)(cp) ? (this.lastDrawnStartMs >= 0 && (Yp.pendingAfter = this.lastPending, this.closeInterval(pp - this.lastDrawnStartMs, pp)), this.lastDrawnStartMs = pp, ep(Yp).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L257)

```diff
-         if (0 === zD.frames) return zD.undrawn.count > 0 && (0, rD.l)("frame", `${DD}s: no frames drawn, ${zD.undrawn.describe()}; pending max ${wD.pendingMax}`), zD.undrawn.count > 0;
+         if (0 === ip.frames) return ip.undrawn.count > 0 && (0, Sp.n)("frame", `${pp}s: no frames drawn, ${ip.undrawn.describe()}; pending max ${cp.pendingMax}`), ip.undrawn.count > 0;
```

#### 21. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260)

```diff
-           sD = [`${zD.frames} frames, median ${(0,KD.d)((0,KD.h)(pD,.5))} p95 ${(0,KD.d)((0,KD.h)(pD,.95))} max ${(0,KD.d)(zD.maxMs)} ms, ${zD.slow} over 50, ${zD.shown+zD.dropped} over ${hD}`, `${wD.rafs} rafs, ${zD.undrawn.describe()}`, `main ${(0,KD.d)(wD.mainMs)} ms (render $ … [truncated]
-         return wD.pendingMax >= 0 && sD.push(`pending max ${wD.pendingMax}`), this.ahead >= 0 && sD.push(`${this.ahead} frames ahead`), sD.push(`outliers ${zD.shown} logged, ${zD.dropped} dropped`), (0, rD.l)("frame", `${DD}s: ${sD.join("; ")}`), !0
+           op = [`${ip.frames} frames, median ${(0,Ip.d)((0,Ip.f)(Op,.5))} p95 ${(0,Ip.d)((0,Ip.f)(Op,.95))} max ${(0,Ip.d)(ip.maxMs)} ms, ${ip.slow} over 50, ${ip.shown+ip.dropped} over ${vp}`, `${cp.rafs} rafs, ${ip.undrawn.describe()}`, `main ${(0,Ip.d)(cp.mainMs)} ms (render $ … [truncated]
+         return cp.pendingMax >= 0 && op.push(`pending max ${cp.pendingMax}`), this.ahead >= 0 && op.push(`${this.ahead} frames ahead`), op.push(`outliers ${ip.shown} logged, ${ip.dropped} dropped`), (0, Sp.n)("frame", `${pp}s: ${op.join("; ")}`), !0
```

#### 22. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L269)

```diff
-   34079: (DD, zD, wD) => {
+   34287: (pp, ip, cp) => {
```

#### 23. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L271)

```diff
-       return `hidden ${DD.changes} changes, ${Math.round(DD.hiddenMs)} ms`
+       return `hidden ${pp.changes} changes, ${Math.round(pp.hiddenMs)} ms`
```

#### 24. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L274-L275` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L274-L275) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L274-L275)

```diff
-       b: () => sD,
-       d: () => pD
+       c: () => op,
+       e: () => Op
```

#### 25. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/frameDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/frameDebug.js#L282)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = DD : this.hiddenSinceMs >= 0 && (this.hiddenMs += DD - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = pp : this.hiddenSinceMs >= 0 && (this.hiddenMs += pp - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-brands.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/icons-brands.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621)

#### 1. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L4)

```diff
-   8015: (DD, zD) => {
+   8145: (pp, ip) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L9)

```diff
-     zD.c = {
+     ip.b = {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L13)

```diff
-     }, zD.d = zD.c
+     }, ip.c = ip.b
```

#### 4. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L15)

```diff
-   8024: (DD, zD) => {
+   8154: (pp, ip) => {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L20)

```diff
-     zD.c = {
+     ip.e = {
```

#### 6. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L24)

```diff
-     }, zD.f = zD.c
+     }, ip.f = ip.e
```

#### 7. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L26)

```diff
-   8029: (DD, zD) => {
+   8159: (pp, ip) => {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L35)

```diff
-     }, zD.i = zD.e
+     }, ip.f = ip.e
```

#### 9. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L37)

```diff
-   8037: (DD, zD) => {
+   8167: (pp, ip) => {
```

#### 10. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L46)

```diff
-     }, zD.d = zD.b
+     }, ip.c = ip.b
```

#### 11. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L48)

```diff
-   8045: (DD, zD) => {
+   8169: (pp, ip) => {
```

#### 12. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L57)

```diff
-     }, zD.d = zD.b
+     }, ip.e = ip.b
```

#### 13. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L59)

```diff
-   8053: (DD, zD) => {
+   8177: (pp, ip) => {
```

#### 14. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L64)

```diff
-     zD.b = {
+     ip.d = {
```

#### 15. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L68)

```diff
-     }, zD.c = zD.b
+     }, ip.h = ip.d
```

#### 16. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L70)

```diff
-   8062: (DD, zD) => {
+   8186: (pp, ip) => {
```

#### 17. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L75)

```diff
-     zD.e = {
+     ip.b = {
```

#### 18. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L79)

```diff
-     }, zD.g = zD.e
+     }, ip.e = ip.b
```

#### 19. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L81)

```diff
-   8066: (DD, zD) => {
+   8193: (pp, ip) => {
```

#### 20. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L86)

```diff
-     zD.d = {
+     ip.b = {
```

#### 21. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L90)

```diff
-     }, zD.f = zD.d
+     }, ip.e = ip.b
```

#### 22. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L92)

```diff
-   8075: (DD, zD) => {
+   8200: (pp, ip) => {
```

#### 23. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L101)

```diff
-     }, zD.f = zD.e
+     }, ip.h = ip.e
```

#### 24. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L103)

```diff
-   8082: (DD, zD) => {
+   8203: (pp, ip) => {
```

#### 25. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L112)

```diff
-     }, zD.g = zD.d
+     }, ip.e = ip.d
```

#### 26. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L114)

```diff
-   8090: (DD, zD) => {
+   8205: (pp, ip) => {
```

#### 27. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L119)

```diff
-     zD.e = {
+     ip.c = {
```

#### 28. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L123)

```diff
-     }, zD.h = zD.e
+     }, ip.e = ip.c
```

#### 29. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L125)

```diff
-   8008: (DD, zD, wD) => {
+   8141: (pp, ip, cp) => {
```

#### 30. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L129-L139` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139)

```diff
-     var pD = wD(8015),
-       sD = wD(8024),
-       KD = wD(8029),
-       rD = wD(8037),
-       LD = wD(8045),
-       cD = wD(8053),
-       gD = wD(8062),
-       RD = wD(8066),
-       AD = wD(8075),
-       UD = wD(8082),
-       fD = wD(8090);
+     var Op = cp(8145),
+       op = cp(8154),
+       Ip = cp(8159),
+       Sp = cp(8167),
+       xp = cp(8169),
+       Lp = cp(8177),
+       Yp = cp(8186),
+       Dp = cp(8193),
+       Ap = cp(8200),
+       Pp = cp(8203),
+       Wp = cp(8205);
```

#### 31. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L141)

```diff
-       apple: pD.d,
+       apple: Op.c,
```

#### 32. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L143-L151` → after: `L143-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L143-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-brands.js#L143-L151) · [Before (L143-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-brands.js#L143-L151)

```diff
-       discord: KD.i,
-       "google-play": rD.d,
-       instagram: LD.d,
-       "reddit-alien": cD.c,
-       tiktok: gD.g,
-       twitch: RD.f,
-       windows: AD.f,
-       "x-twitter": UD.g,
-       youtube: fD.h
+       discord: Ip.f,
+       "google-play": Sp.c,
+       instagram: xp.e,
+       "reddit-alien": Lp.h,
+       tiktok: Yp.e,
+       twitch: Dp.e,
+       windows: Ap.h,
+       "x-twitter": Pp.e,
+       youtube: Wp.e
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-duotone.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/icons-duotone.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd)

#### 1. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-duotone.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-duotone.js#L4)

```diff
-   7997: (DD, zD) => {
+   8130: (pp, ip) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-duotone.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-duotone.js#L13)

```diff
-     }, zD.f = zD.b
+     }, ip.d = ip.b
```

#### 3. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-duotone.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-duotone.js#L15)

```diff
-   8004: (DD, zD) => {
+   8132: (pp, ip) => {
```

#### 4. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-duotone.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-duotone.js#L20)

```diff
-     zD.c = {
+     ip.d = {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-duotone.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-duotone.js#L24)

```diff
-     }, zD.e = zD.c
+     }, ip.e = ip.d
```

#### 6. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-duotone.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-duotone.js#L26)

```diff
-   7990: (DD, zD, wD) => {
+   8125: (pp, ip, cp) => {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31)

```diff
-     var pD = wD(7997),
-       sD = wD(8004);
+     var Op = cp(8130),
+       op = cp(8132);
```

#### 8. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-duotone.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-duotone.js#L33)

```diff
-       "hat-santa": pD.f,
+       "hat-santa": Op.d,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-regular.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/icons-regular.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8)

#### 1. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L4)

```diff
-   7964: (DD, zD) => {
+   8103: (pp, ip) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L9)

```diff
-     zD.e = {
+     ip.b = {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L13)

```diff
-     }, zD.g = zD.e
+     }, ip.f = ip.b
```

#### 4. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L15)

```diff
-   7969: (DD, zD) => {
+   8107: (pp, ip) => {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L24)

```diff
-     }, zD.d = zD.b
+     }, ip.c = ip.b
```

#### 6. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L26)

```diff
-   7977: (DD, zD) => {
+   8112: (pp, ip) => {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L31)

```diff
-     zD.d = {
+     ip.b = {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L35)

```diff
-     }, zD.f = zD.d
+     }, ip.d = ip.b
```

#### 9. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L38)

```diff
-   7984: (DD, zD, wD) => {
-     var pD = wD(7987);
+   8119: (pp, ip, cp) => {
+     var Op = cp(8122);
```

#### 10. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L45)

```diff
-   7987: (DD, zD) => {
+   8122: (pp, ip) => {
```

#### 11. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L59)

```diff
-   7955: (DD, zD, wD) => {
+   8098: (pp, ip, cp) => {
```

#### 12. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L63-L67` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67) · [Before (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67)

```diff
-     var pD = wD(7964),
-       sD = wD(7969),
-       KD = wD(7977),
-       rD = wD(7984),
-       LD = wD(7987);
+     var Op = cp(8103),
+       op = cp(8107),
+       Ip = cp(8112),
+       Sp = cp(8119),
+       xp = cp(8122);
```

#### 13. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L69-L71` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L71) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L71)

```diff
-       copy: pD.g,
-       flag: sD.d,
-       heart: KD.f,
+       copy: Op.f,
+       flag: op.c,
+       heart: Ip.d,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-solid.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/icons-solid.js` (78 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6)

#### 1. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L4)

```diff
-   6740: (DD, zD, wD) => {
+   6843: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L8-L41` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L21) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L41)

```diff
-     var pD = wD(6744),
-       sD = wD(6752),
-       KD = wD(6768),
-       rD = wD(6774),
-       LD = wD(6761),
-       cD = wD(6781),
-       gD = wD(6790),
-       RD = wD(6796),
-       AD = wD(6798),
-       UD = wD(6805),
-       fD = wD(6813),
-       ID = wD(6815),
-       BD = wD(6825),
-       GD = wD(6833),
-       hD = wD(6835),
-       nD = wD(6821),
- ... (18 more removed lines; see GitHub link above)
+     var Op = cp(6849),
+       op = cp(6858),
+       Ip = cp(6864),
+       Sp = cp(6868),
+       xp = cp(6861),
+       Lp = cp(6877),
+       Yp = cp(6880),
+       Dp = cp(6888),
+       Ap = cp(6897),
+       Pp = cp(6904),
+       Wp = cp(6906),
+       yp = cp(6912),
+       Up = cp(6923),
+       wp = cp(6930),
```

#### 3. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L44-L49` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L25-L28) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L44-L49)

```diff
-       yD = wD(6948),
-       kD = wD(6952),
-       mD = wD(6960),
-       eD = wD(1065),
-       oD = wD(6966),
-       aD = wD(6972),
+       dp = cp(6945),
+       ep = cp(6953),
+       jp = cp(6961),
+       kp = cp(6969),
```

#### 4. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L51-L56` → after: `L30-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L30-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L30-L35) · [Before (L51-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L51-L56)

```diff
-       vD = wD(6986),
-       tD = wD(6988),
-       FD = wD(6994),
-       YD = wD(7003),
-       HD = wD(7006),
-       qD = wD(7013),
+       Rp = cp(6981),
+       qp = cp(6983),
+       Mp = cp(6990),
+       Cp = cp(6995),
+       Ep = cp(7e3),
+       Xp = cp(7011),
```

#### 5. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L58-L63` → after: `L37-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L37-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L37-L42) · [Before (L58-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L58-L63)

```diff
-       zz = wD(7019),
-       wz = wD(7022),
-       pz = wD(7031),
-       sz = wD(7039),
-       Kz = wD(7044),
-       rz = wD(7059),
+       Qp = cp(7017),
+       Jp = cp(7026),
+       Bp = cp(7034),
+       Np = cp(7041),
+       Tp = cp(7050),
+       fp = cp(7053),
```

#### 6. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L65-L81` → after: `L44-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L44-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L44-L60) · [Before (L65-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L65-L81)

```diff
-       cz = wD(7072),
-       gz = wD(7078),
-       Rz = wD(7081),
-       Az = wD(7086),
-       Uz = wD(7102),
-       fz = wD(7110),
-       Iz = wD(7112),
-       Bz = wD(7116),
-       Gz = wD(7132),
-       hz = wD(7140),
-       nz = wD(7146),
-       Mz = wD(7153),
-       Oz = wD(7157),
-       Jz = wD(7065),
-       Ez = wD(7162),
-       Qz = wD(7164),
- ... (1 more removed lines; see GitHub link above)
+       hp = cp(7064),
+       ap = cp(7073),
+       np = cp(7080),
+       Fp = cp(1066),
+       gp = cp(7088),
+       Gp = cp(7090),
+       rp = cp(7097),
+       Zp = cp(7106),
+       zp = cp(7119),
+       sp = cp(7128),
+       Kp = cp(7131),
+       Vp = cp(7135),
+       ii = cp(7139),
+       ci = cp(7144),
+       Oi = cp(7152),
+       oi = cp(7158),
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L83-L88` → after: `L62-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L62-L67) · [Before (L83-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L83-L88)

```diff
-       Pz = wD(7178),
-       Cz = wD(7186),
-       xz = wD(7202),
-       Tz = wD(7193),
-       bz = wD(7213),
-       jz = wD(7221),
+       xi = cp(7179),
+       Li = cp(7188),
+       Yi = cp(7196),
+       Di = cp(7203),
+       Ai = cp(7214),
+       Pi = cp(7223),
```

#### 8. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L90-L94` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L69) · [Before (L90-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L90-L94)

```diff
-       Sz = wD(7233),
-       iz = wD(7239),
-       lz = wD(7241),
-       Wz = wD(7245),
-       Nz = wD(7248),
+       yi = cp(7234),
```

#### 9. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L96-L106` → after: `L71-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L71-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L71-L80) · [Before (L96-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L96-L106)

```diff
-       yz = wD(7253),
-       kz = wD(7255),
-       mz = wD(7264),
-       ez = wD(6978),
-       oz = wD(7270),
-       az = wD(7276),
-       uz = wD(7282),
-       vz = wD(7285),
-       tz = wD(7287),
-       Fz = wD(7236),
-       Yz = wD(7294),
+       wi = cp(7257),
+       vi = cp(7260),
+       ti = cp(7267),
+       Hi = cp(7279),
+       di = cp(7283),
+       ei = cp(7286),
+       ui = cp(7288),
+       ji = cp(7295),
+       ki = cp(7206),
+       mi = cp(7298),
```

#### 10. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L108-L111` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L82-L84) · [Before (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L108-L111)

```diff
-       qz = wD(7308),
-       Dw = wD(7310),
-       zw = wD(7312),
-       ww = wD(7321),
+       qi = cp(7307),
+       Mi = cp(7316),
+       Ci = cp(7320),
```

#### 11. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L113-L114` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L86-L89) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L113-L114)

```diff
-       sw = wD(7341),
-       Kw = wD(7346),
+       Xi = cp(7332),
+       li = cp(7330),
+       Qi = cp(7339),
+       Ji = cp(7347),
```

#### 12. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L121-L124` → after: `L93-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L93-L95) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L121-L124)

```diff
-       fw = wD(7383),
-       Iw = wD(7386),
-       Bw = wD(7390),
-       Gw = wD(7392),
+       fi = cp(7380),
+       bi = cp(7387),
+       ai = cp(7389),
```

#### 13. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L126-L128` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L97-L98) · [Before (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L126-L128)

```diff
-       nw = wD(7398),
-       Mw = wD(7401),
-       Ow = wD(7404),
+       Fi = cp(7402),
+       gi = cp(7409),
```

#### 14. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L130` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L100-L101) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L130)

```diff
-       Ew = wD(7416),
+       ri = cp(7112),
+       Zi = cp(7420),
```

#### 15. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L133-L135` → after: `L104-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L104-L109) · [Before (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L133-L135)

```diff
-       Vw = wD(7434),
-       Pw = wD(7439),
-       Cw = wD(7447),
+       Ki = cp(7430),
+       Vi = cp(7435),
+       pc = cp(7366),
+       ic = cp(7441),
+       cc = cp(7443),
+       Oc = cp(7448),
```

#### 16. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L137-L138` → after: `L111-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L111-L113) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L137-L138)

```diff
-       Tw = wD(7455),
-       bw = wD(7461),
+       Ic = cp(7454),
+       Sc = cp(7462),
+       xc = cp(7464),
```

#### 17. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L140-L168` → after: `L115-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L115-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L115-L135) · [Before (L140-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L140-L168)

```diff
-       dw = wD(7477),
-       Sw = wD(7481),
-       iw = wD(7490),
-       lw = wD(7492),
-       Ww = wD(7497),
-       Nw = wD(7503),
-       Zw = wD(7508),
-       yw = wD(7209),
-       kw = wD(7514),
-       mw = wD(7523),
-       ew = wD(7530),
-       ow = wD(7095),
-       aw = wD(7437),
-       uw = wD(7536),
-       vw = wD(7539),
-       tw = wD(7546),
- ... (13 more removed lines; see GitHub link above)
+       Yc = cp(7480),
+       Dc = cp(7483),
+       Ac = cp(7487),
+       Pc = cp(7467),
+       Wc = cp(7495),
+       yc = cp(7500),
+       Uc = cp(7506),
+       wc = cp(7510),
+       vc = cp(7517),
+       tc = cp(7526),
+       Hc = cp(7532),
+       dc = cp(7541),
+       ec = cp(7545),
+       uc = cp(7552),
+       jc = cp(7559),
+       kc = cp(7561),
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L170-L173` → after: `L137-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L137-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L137-L148) · [Before (L170-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L170-L173)

```diff
-       Rp = wD(7052),
-       Ap = wD(7633),
-       Up = wD(7637),
-       fp = wD(7646),
+       Xc = cp(7606),
+       lc = cp(7610),
+       Qc = cp(7616),
+       Jc = cp(7627),
+       Bc = cp(7635),
+       Nc = cp(7640),
+       Tc = cp(7644),
+       fc = cp(7649),
+       bc = cp(7652),
+       hc = cp(7655),
+       ac = cp(7660),
+       nc = cp(7335),
```

#### 19. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L175-L177` → after: `L150-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L150-L154) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L175-L177)

```diff
-       Bp = wD(7655),
-       Gp = wD(7671),
-       hp = wD(7677),
+       gc = cp(7668),
+       Gc = cp(7675),
+       rc = cp(7242),
+       Zc = cp(7587),
+       zc = cp(7682),
```

#### 20. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L179-L180` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L156-L157) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L179-L180)

```diff
-       Mp = wD(7688),
-       Op = wD(7697),
+       Kc = cp(7692),
+       Vc = cp(7696),
```

#### 21. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L182` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L159) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L182)

```diff
-       Ep = wD(7710),
+       iO = cp(7709),
```

#### 22. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L184-L188` → after: `L161-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L161-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L161-L165) · [Before (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L184-L188)

```diff
-       Xp = wD(7723),
-       Vp = wD(7729),
-       Pp = wD(7469),
-       Cp = wD(7737),
-       xp = wD(7740),
+       OO = cp(6855),
+       oO = cp(7719),
+       IO = cp(7725),
+       SO = cp(7733),
+       xO = cp(7738),
```

#### 23. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L190-L194` → after: `L167-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L167-L169) · [Before (L190-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L190-L194)

```diff
-       bp = wD(7749),
-       jp = wD(7754),
-       dp = wD(7761),
-       Sp = wD(7764),
-       ip = wD(7771),
+       YO = cp(7757),
+       DO = cp(7760),
+       AO = cp(7766),
```

#### 24. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L197-L199` → after: `L172-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L172-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L172-L175) · [Before (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L197-L199)

```diff
-       Np = wD(7783),
-       Zp = wD(7123),
-       yp = wD(7787),
+       yO = cp(7751),
+       UO = cp(7191),
+       wO = cp(7785),
+       vO = cp(7788),
```

#### 25. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L201-L203` → after: `L177-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L177-L181) · [Before (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L201-L203)

```diff
-       mp = wD(7798),
-       ep = wD(7807),
-       op = wD(7814),
+       HO = cp(7801),
+       dO = cp(7797),
+       eO = cp(7805),
+       uO = cp(7811),
+       jO = cp(7817),
```

#### 26. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L206-L217` → after: `L184-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L184-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L184-L194) · [Before (L206-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L206-L217)

```diff
-       tp = wD(7830),
-       Fp = wD(7839),
-       Yp = wD(7843),
-       Hp = wD(7847),
-       qp = wD(7852),
-       Ds = wD(7856),
-       zs = wD(7865),
-       ws = wD(7868),
-       ps = wD(7871),
-       ss = wD(7878),
-       Ks = wD(7880),
-       rs = wD(7884),
+       RO = cp(7827),
+       qO = cp(7829),
+       MO = cp(7838),
+       CO = cp(7845),
+       EO = cp(7853),
+       XO = cp(7625),
+       lO = cp(7858),
+       QO = cp(7864),
+       JO = cp(7866),
+       BO = cp(7874),
+       NO = cp(7883),
```

#### 27. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L219-L220` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L196) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L219-L220)

```diff
-       cs = wD(7895),
-       gs = wD(7898),
+       fO = cp(7900),
```

#### 28. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L222-L231` → after: `L198-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L198-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L198-L234) · [Before (L222-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L222-L231)

```diff
-       As = wD(7910),
-       Us = wD(7915),
-       fs = wD(7919),
-       Is = wD(7921),
-       Bs = wD(7926),
-       Gs = wD(7929),
-       hs = wD(7937),
-       ns = wD(7945),
-       Ms = wD(7949),
-       Os = wD(7951);
+       hO = cp(7907),
+       aO = cp(7912),
+       nO = cp(7920),
+       FO = cp(7275),
+       gO = cp(7925),
+       GO = cp(7927),
+       rO = cp(7934),
+       ZO = cp(7940),
+       zO = cp(7946),
+       sO = cp(7953),
+       KO = cp(7961),
+       VO = cp(7969),
+       po = cp(7971),
+       io = cp(7974),
+       co = cp(7982),
+       Oo = cp(7988),
+ ... (21 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L234-L236` → after: `L237-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L237-L239) · [Before (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L234-L236)

```diff
-       "angle-double-up": sD.e,
-       "angle-down": KD.e,
-       "angle-up": rD.d,
+       "angle-double-up": op.g,
+       "angle-down": Ip.g,
+       "angle-up": Sp.f,
```

#### 30. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L238` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L241) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L238)

```diff
-       "arrow-down-to-line": cD.h,
+       "arrow-down-to-line": Lp.e,
```

#### 31. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L241-L242` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L244-L245) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L241-L242)

```diff
-       "arrow-up": AD.c,
-       "arrow-up-from-line": UD.g,
+       "arrow-up": Ap.g,
+       "arrow-up-from-line": Pp.f,
```

#### 32. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L249-L251` → after: `L252-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L252-L254) · [Before (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L249-L251)

```diff
-       award: MD.g,
-       backpack: OD.e,
-       ban: JD.i,
+       award: Hp.f,
+       backpack: dp.f,
+       ban: ep.e,
```

#### 33. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L254-L255` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L257-L258) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L254-L255)

```diff
-       bell: XD.g,
-       "block-question": VD.h,
+       bell: mp.e,
+       "block-question": Rp.e,
```

#### 34. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L257` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L260) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L257)

```diff
-       boot: CD.e,
+       boot: Mp.f,
```

#### 35. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L259` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L262) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L259)

```diff
-       camera: TD.e,
+       "camera-alt": Ep.d,
```

#### 36. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L261-L263` → after: `L264-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L264-L266) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L261-L263)

```diff
-       "caret-left": jD.h,
-       "caret-right": dD.d,
-       "caret-up": SD.g,
+       "caret-left": lp.g,
+       "caret-right": Qp.e,
+       "caret-up": Jp.h,
```

#### 37. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L265-L269` → after: `L268-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L268-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L268-L272) · [Before (L265-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L265-L269)

```diff
-       check: lD.d,
-       "chess-knight": WD.e,
-       "chess-rook": ND.c,
-       "child-reaching": ZD.f,
-       "circle-check": yD.e,
+       check: Np.f,
+       "chess-knight": Tp.c,
+       "chess-rook": fp.e,
+       "child-reaching": bp.g,
+       "circle-check": hp.g,
```

#### 38. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L272-L273` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L275-L276) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L272-L273)

```diff
-       "circle-question": eD.f,
-       "circle-xmark": oD.e,
+       "circle-question": Fp.e,
+       "circle-xmark": gp.g,
```

#### 39. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L276` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L280) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L276)

```diff
-       coins: vD.i,
+       coins: zp.d,
```

#### 40. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L278-L279` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L282-L283) · [Before (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L278-L279)

```diff
-       commenting: FD.d,
-       compress: YD.e,
+       commenting: Kp.f,
+       compress: Vp.f,
```

#### 41. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L281` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L285) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L281)

```diff
-       cookie: qD.h,
+       cookie: ci.e,
```

#### 42. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L283-L292` → after: `L287-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L287-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L287-L296) · [Before (L283-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L283-L292)

```diff
-       crosshairs: zz.h,
-       crown: wz.g,
-       cube: pz.d,
-       cubes: sz.h,
-       cut: Kz.e,
-       dice: rz.c,
-       dizzy: Lz.f,
-       "door-closed": cz.d,
-       "door-open": gz.f,
-       download: Rz.c,
+       crosshairs: oi.d,
+       crown: Ii.e,
+       cube: Si.h,
+       cubes: xi.i,
+       cut: Li.g,
+       dice: Yi.g,
+       dizzy: Di.g,
+       "door-closed": Ai.e,
+       "door-open": Pi.d,
+       download: Wi.e,
```

#### 43. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L295-L302` → after: `L299-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L299-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L299-L306) · [Before (L295-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L295-L302)

```diff
-       "ellipsis-h": fz.e,
-       exclamation: Iz.h,
-       "exclamation-triangle": Bz.h,
-       expand: Gz.e,
-       "external-link": hz.f,
-       eye: nz.d,
-       "eye-slash": Mz.h,
-       "face-diagonal-mouth": Oz.g,
+       "ellipsis-h": wi.c,
+       exclamation: vi.f,
+       "exclamation-triangle": ti.d,
+       expand: Hi.f,
+       "external-link": di.h,
+       eye: ei.i,
+       "eye-slash": ui.g,
+       "face-diagonal-mouth": ji.e,
```

#### 44. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L304` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L308) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L304)

```diff
-       "face-raised-eyebrow": Ez.c,
+       "face-raised-eyebrow": mi.h,
```

#### 45. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L306-L307` → after: `L310-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L310-L311) · [Before (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L306-L307)

```diff
-       "face-worried": Xz.h,
-       "feather-alt": Vz.d,
+       "face-worried": qi.d,
+       "feather-alt": Mi.f,
```

#### 46. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L309-L310` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L313-L314) · [Before (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L309-L310)

```diff
-       "file-alt": Cz.d,
-       "file-clipboard": xz.h,
+       "file-alt": Ei.f,
+       "file-clipboard": Xi.e,
```

#### 47. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L312-L313` → after: `L316-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L316-L317) · [Before (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L312-L313)

```diff
-       "file-text": bz.i,
-       film: jz.f,
+       "file-text": Qi.d,
+       film: Ji.d,
```

#### 48. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L315-L318` → after: `L319-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L319-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L319-L322) · [Before (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L315-L318)

```diff
-       "fist-raised": Sz.e,
-       flag: iz.e,
-       folder: lz.g,
-       "folder-image": Wz.h,
+       "fist-raised": Ni.f,
+       flag: Ti.g,
+       folder: fi.f,
+       "folder-image": bi.e,
```

#### 49. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L320-L321` → after: `L324-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L324-L325) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L320-L321)

```diff
-       gamepad: Zz.g,
-       "gamepad-modern": yz.d,
+       gamepad: ni.e,
+       "gamepad-modern": Fi.g,
```

#### 50. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L323` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L327) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L323)

```diff
-       gavel: mz.d,
+       gavel: Gi.f,
```

#### 51. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L325` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L329) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L325)

```diff
-       gem: oz.f,
+       gem: Zi.c,
```

#### 52. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L328` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L332) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L328)

```diff
-       hammer: vz.f,
+       hammer: Ki.d,
```

#### 53. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L331-L338` → after: `L335-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L335-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L335-L342) · [Before (L331-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L331-L338)

```diff
-       "hand-holding-medical": Yz.h,
-       "hand-point-left": Hz.d,
-       "hand-wave": qz.h,
-       "hands-clapping": Dw.f,
-       "hat-witch": zw.e,
-       heart: ww.e,
-       "heart-music-camera-bolt": pw.h,
-       history: sw.h,
+       "hand-holding-medical": ic.e,
+       "hand-point-left": cc.e,
+       "hand-wave": Oc.g,
+       "hands-clapping": oc.e,
+       "hat-witch": Ic.f,
+       heart: Sc.h,
+       "heart-music-camera-bolt": xc.f,
+       history: Lc.d,
```

#### 54. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L340-L342` → after: `L344-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L344-L346) · [Before (L340-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L340-L342)

```diff
-       "hourglass-clock": rw.h,
-       "hourglass-empty": Lw.h,
-       house: Os.f,
+       "hourglass-clock": Dc.g,
+       "hourglass-empty": Ac.f,
+       house: mo.e,
```

#### 55. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L344-L345` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L348-L349) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L344-L345)

```diff
-       image: Rw.f,
-       "image-slash": Aw.g,
+       image: Wc.h,
+       "image-slash": yc.f,
```

#### 56. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L347-L351` → after: `L351-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L351-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L351-L355) · [Before (L347-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L347-L351)

```diff
-       joystick: fw.f,
-       "layer-group": Iw.d,
-       "left-from-bracket": Bw.e,
-       lightbulb: Gw.h,
-       link: hw.e,
+       joystick: wc.g,
+       "layer-group": vc.f,
+       "left-from-bracket": tc.g,
+       lightbulb: Hc.i,
+       link: dc.f,
```

#### 57. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L353` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L357) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L353)

```diff
-       "list-squares": Mw.f,
+       "list-squares": uc.h,
```

#### 58. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L356-L357` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L360-L361) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L356-L357)

```diff
-       lock: Ew.f,
-       "lock-open": Qw.h,
+       lock: mc.c,
+       "lock-open": Rc.e,
```

#### 59. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L359-L360` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L363-L364) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L359-L360)

```diff
-       male: Vw.f,
-       "map-marker-check": Pw.f,
+       male: Mc.e,
+       "map-marker-check": Cc.c,
```

#### 60. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L362` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L366) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L362)

```diff
-       "map-marker-xmark": xw.d,
+       "map-marker-xmark": Xc.h,
```

#### 61. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L365-L372` → after: `L369-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L369-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L369-L376) · [Before (L365-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L365-L372)

```diff
-       moon: jw.e,
-       mouse: dw.e,
-       music: Sw.d,
-       "music-slash": iw.d,
-       navicon: lw.f,
-       palette: Ww.d,
-       pants: Nw.f,
-       "party-horn": Zw.g,
+       moon: Jc.g,
+       mouse: Bc.h,
+       music: Nc.g,
+       "music-slash": Tc.g,
+       navicon: fc.g,
+       palette: bc.f,
+       pants: hc.h,
+       "party-horn": ac.c,
```

#### 62. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L374-L376` → after: `L378-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L378-L380) · [Before (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L374-L376)

```diff
-       pause: kw.g,
-       pen: mw.g,
-       "pen-field": ew.g,
+       pause: Fc.e,
+       pen: gc.e,
+       "pen-field": Gc.d,
```

#### 63. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L379-L383` → after: `L383-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L383-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L383-L389) · [Before (L379-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L379-L383)

```diff
-       "person-arrow-down-to-line": uw.i,
-       "person-arrow-up-from-line": vw.d,
-       "person-falling-burst": tw.e,
-       "person-military-pointing": Fw.g,
-       play: Yw.d,
+       "person-arrow-down-to-line": zc.d,
+       "person-arrow-up-from-line": sc.h,
+       "person-falling-burst": Kc.h,
+       "person-military-pointing": Vc.f,
+       "person-running": pO.d,
+       "person-walking": iO.f,
+       play: cO.e,
```

#### 64. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L385-L390` → after: `L391-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L391-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L391-L396) · [Before (L385-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L385-L390)

```diff
-       "plus-circle": qw.h,
-       "power-off": Dp.h,
-       "ranking-star": zp.g,
-       recycle: wp.f,
-       "redo-alt": pp.f,
-       refresh: sp.g,
+       "plus-circle": oO.d,
+       "power-off": IO.g,
+       "ranking-star": SO.e,
+       recycle: xO.g,
+       "redo-alt": LO.d,
+       refresh: YO.f,
```

#### 65. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L393-L394` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L399-L400) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L393-L394)

```diff
-       "rotate-forward": Lp.c,
-       "rotate-left": cp.g,
+       "rotate-forward": PO.e,
+       "rotate-left": WO.f,
```

#### 66. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L400` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L406) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L400)

```diff
-       "shield-blank": Ip.d,
+       "shield-blank": HO.g,
```

#### 67. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L402-L404` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L408-L410) · [Before (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L402-L404)

```diff
-       shirt: Gp.e,
-       shoe: hp.f,
-       "shopping-cart": np.c,
+       shirt: eO.d,
+       shoe: uO.g,
+       "shopping-cart": jO.f,
```

#### 68. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L406-L410` → after: `L412-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L412-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L412-L416) · [Before (L406-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L406-L410)

```diff
-       skull: Op.f,
-       smile: Jp.c,
-       snowflake: Ep.d,
-       sparkle: Qp.f,
-       "square-dashed": Vp.g,
+       skull: mO.i,
+       smile: RO.h,
+       snowflake: qO.c,
+       sparkle: MO.g,
+       "square-dashed": EO.d,
```

#### 69. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L412-L419` → after: `L418-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L418-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L418-L425) · [Before (L412-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L412-L419)

```diff
-       star: Cp.e,
-       "star-christmas": Xp.h,
-       store: xp.h,
-       subtract: Tp.d,
-       "sun-bright": bp.d,
-       swords: jp.d,
-       sync: dp.f,
-       "t-shirt": Ms.c,
+       star: lO.g,
+       "star-christmas": CO.e,
+       store: QO.d,
+       subtract: JO.h,
+       "sun-bright": BO.f,
+       swords: NO.h,
+       sync: TO.g,
+       "t-shirt": ko.b,
```

#### 70. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L422-L423` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L428-L429) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L422-L423)

```diff
-       terminal: lp.g,
-       "trash-alt": Wp.d,
+       terminal: hO.d,
+       "trash-alt": aO.g,
```

#### 71. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L426-L430` → after: `L432-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L432-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L432-L436) · [Before (L426-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L426-L430)

```diff
-       trophy: yp.h,
-       tshirt: Ms.d,
-       "up-from-bracket": kp.e,
-       upload: mp.i,
-       user: ep.f,
+       trophy: gO.f,
+       tshirt: ko.c,
+       "up-from-bracket": GO.g,
+       upload: rO.g,
+       user: ZO.g,
```

#### 72. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L432-L433` → after: `L438-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L438-L439) · [Before (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L432-L433)

```diff
-       "user-check": ap.e,
-       "user-clock": vp.d,
+       "user-check": sO.g,
+       "user-clock": KO.h,
```

#### 73. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L437-L441` → after: `L443-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L443-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L443-L447) · [Before (L437-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L437-L441)

```diff
-       "user-minus": Hp.g,
-       "user-plus": qp.g,
-       "user-slash": Ds.h,
-       "user-unlock": zs.g,
-       "users-crown": ws.c,
+       "user-minus": co.c,
+       "user-plus": Oo.f,
+       "user-slash": oo.e,
+       "user-unlock": Io.f,
+       "users-crown": So.e,
```

#### 74. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L444` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L450) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L444)

```diff
-       "video-camera": Ks.d,
+       "video-camera": Yo.g,
```

#### 75. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L446` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L452) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L446)

```diff
-       "volume-down": Ls.g,
+       "volume-down": Ao.f,
```

#### 76. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L448-L450` → after: `L454-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L454-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L454-L456) · [Before (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L448-L450)

```diff
-       "volume-medium": gs.h,
-       "volume-slash": Rs.f,
-       warning: As.g,
+       "volume-medium": Wo.g,
+       "volume-slash": yo.e,
+       warning: Uo.d,
```

#### 77. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L452-L454` → after: `L458-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L458-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L458-L460) · [Before (L452-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L452-L454)

```diff
-       "wifi-3": fs.d,
-       "wifi-strong": Is.g,
-       wrench: Bs.i,
+       "wifi-3": vo.g,
+       "wifi-strong": to.f,
+       wrench: Ho.d,
```

#### 78. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L456-L457` → after: `L462-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/icons-solid.js#L462-L463) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/icons-solid.js#L456-L457)

```diff
-       xmark: hs.e,
-       zap: ns.d
+       xmark: uo.g,
+       zap: jo.g
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/itemSprites.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/itemSprites.js` (1729 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c)

#### 1. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L4` → after: `L4-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L4-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L4-L1749) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L4)

```diff
-   50846: (DD, zD, wD) => {
+   51266: (pp, ip, cp) => {
+     var Op = {
+       "./67.png": 51272,
+       "./67_projectile_base.png": 51277,
+       "./67_projectile_boosted.png": 51281,
+       "./AK-47.png": 51286,
+       "./AWP.png": 51295,
+       "./Block-19.png": 51300,
+       "./DMR.png": 51303,
+       "./Deagle.png": 51308,
+       "./Double-barreled.png": 51314,
+       "./FMR.png": 51323,
+       "./GPMG.png": 51325,
+       "./M16.png": 51330,
+       "./M1911.png": 51333,
+       "./MP40.png": 51341,
+ ... (1730 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L24` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1769) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L24)

```diff
-       return null !== (zD = cD.get(DD)) && void 0 !== zD ? zD : ""
+       return null !== (ip = Lp.get(pp)) && void 0 !== ip ? ip : ""
```

#### 3. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L29` → after: `L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1774) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L29)

```diff
-       return null === zD ? null : "" === zD ? wD(50663) : wD(50849)(`./${zD}.png`)
+       return null === ip ? null : "" === ip ? cp(51114) : cp(51266)(`./${ip}.png`)
```

#### 4. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L32-L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1777) · [Before (L32-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L32-L1777)

```diff
-   50849: (DD, zD, wD) => {
-     var pD = {
-       "./67.png": 50856,
-       "./67_projectile_base.png": 50864,
-       "./67_projectile_boosted.png": 50873,
-       "./AK-47.png": 50879,
-       "./AWP.png": 50885,
-       "./Block-19.png": 50894,
-       "./DMR.png": 50900,
-       "./Deagle.png": 50904,
-       "./Double-barreled.png": 50910,
-       "./FMR.png": 50913,
-       "./GPMG.png": 50917,
-       "./M16.png": 50923,
-       "./M1911.png": 50926,
-       "./MP40.png": 50930,
- ... (1730 more removed lines; see GitHub link above)
+   51272: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1780)

```diff
-   50864: (DD, zD, wD) => {
+   51277: (pp, ip, cp) => {
```

#### 6. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1783` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1783) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1783)

```diff
-   50873: (DD, zD, wD) => {
+   51281: (pp, ip, cp) => {
```

#### 7. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1786)

```diff
-   50879: (DD, zD, wD) => {
+   51286: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1789` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1789) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1789)

```diff
-   50885: (DD, zD, wD) => {
+   51295: (pp, ip, cp) => {
```

#### 9. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1792)

```diff
-   50894: (DD, zD, wD) => {
+   51300: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1795)

```diff
-   50900: (DD, zD, wD) => {
+   51303: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1798` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1798) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1798)

```diff
-   50904: (DD, zD, wD) => {
+   51308: (pp, ip, cp) => {
```

#### 12. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1801)

```diff
-   50910: (DD, zD, wD) => {
+   51314: (pp, ip, cp) => {
```

#### 13. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1804` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1804) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1804)

```diff
-   50913: (DD, zD, wD) => {
+   51323: (pp, ip, cp) => {
```

#### 14. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1807)

```diff
-   50917: (DD, zD, wD) => {
+   51325: (pp, ip, cp) => {
```

#### 15. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1810)

```diff
-   50923: (DD, zD, wD) => {
+   51330: (pp, ip, cp) => {
```

#### 16. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1813)

```diff
-   50926: (DD, zD, wD) => {
+   51333: (pp, ip, cp) => {
```

#### 17. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1816` → after: `L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1816) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1816)

```diff
-   50930: (DD, zD, wD) => {
+   51341: (pp, ip, cp) => {
```

#### 18. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1819` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1819) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1819)

```diff
-   50938: (DD, zD, wD) => {
+   51349: (pp, ip, cp) => {
```

#### 19. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1822)

```diff
-   50940: (DD, zD, wD) => {
+   51351: (pp, ip, cp) => {
```

#### 20. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1825` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1825) · [Before (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1825)

```diff
-   50949: (DD, zD, wD) => {
+   51353: (pp, ip, cp) => {
```

#### 21. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1828)

```diff
-   50955: (DD, zD, wD) => {
+   51362: (pp, ip, cp) => {
```

#### 22. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1831` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1831) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1831)

```diff
-   50962: (DD, zD, wD) => {
+   51364: (pp, ip, cp) => {
```

#### 23. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1834)

```diff
-   50969: (DD, zD, wD) => {
+   51372: (pp, ip, cp) => {
```

#### 24. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1837` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1837) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1837)

```diff
-   50974: (DD, zD, wD) => {
+   51379: (pp, ip, cp) => {
```

#### 25. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1840)

```diff
-   50980: (DD, zD, wD) => {
+   51386: (pp, ip, cp) => {
```

#### 26. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1843` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1843) · [Before (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1843)

```diff
-   50983: (DD, zD, wD) => {
+   51389: (pp, ip, cp) => {
```

#### 27. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1846` → after: `L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1846) · [Before (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1846)

```diff
-   50992: (DD, zD, wD) => {
+   51392: (pp, ip, cp) => {
```

#### 28. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1849` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/itemSprites.js#L1849) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/itemSprites.js#L1849)

```diff
-   50997: (DD, zD, wD) => {
+   51397: (pp, ip, cp) => {
```
