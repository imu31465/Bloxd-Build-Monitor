# Changed — Bundle Modifications Report (Part 017 / 141)

- **Updated at**: `2026-11-24T14:21 JST`
- **Part**: `17 / 141` (**330** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (31kiid.1299b0d6 → mpd96o.85ad4551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4687 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1833. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13614-L13615` → after: `L13608-L13609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13608-L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13608-L13609) · [Before (L13614-L13615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13614-L13615)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = "", kk[gk[26]] = -gk[2]); ++kk[gk[26]] < kk[gk[1]].length;) qF(Fk = kk[gk[1]].charCodeAt(kk[gk[26]]), Ik = kk[gk[26]] + gk[2] < kk[gk[1]].length ? kk[gk[1]].charCodeAt(kk[gk[26]] + gk[2]) : gk[1]), gk[144] <= Fk && Fk <= gk[14 … [truncated]
-               return kk[gk[2]]
+               for (DT(mm[tm[12]] = tm[2], mm[-tm[168]] = "", mm[tm[13]] = -tm[2]); ++mm[tm[13]] < mm[tm[1]].length;) DT(Tm = mm[tm[1]].charCodeAt(mm[tm[13]]), fm = mm[tm[13]] + tm[2] < mm[tm[1]].length ? mm[tm[1]].charCodeAt(mm[tm[13]] + tm[2]) : tm[1]), tm[109] <= Tm && Tm <= tm … [truncated]
+               return mm[-tm[168]]
```

#### 1834. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13619-L13621` → after: `L13613-L13615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13613-L13615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13613-L13615) · [Before (L13619-L13621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13619-L13621)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[238]] = Array(kk[gk[1]].length >> gk[35])), kk[gk[239]] = gk[1]; kk[gk[239]] < kk[gk[238]].length; kk[gk[239]]++) kk[gk[238]][kk[gk[239]]] = gk[1];
-               for (kk[gk[239]] = gk[1]; kk[gk[239]] < kk[gk[1]].length * gk[11]; kk[gk[239]] += gk[11]) kk[gk[238]][kk[gk[239]] >> gk[50]] |= (kk[gk[1]].charCodeAt(kk[gk[239]] / gk[11]) & gk[12]) << gk[104] - kk[gk[239]] % gk[68];
-               return kk[gk[238]]
+               for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = Array(mm[tm[1]].length >> tm[20])), mm[-tm[170]] = tm[1]; mm[-tm[170]] < mm[tm[2]].length; mm[-tm[170]]++) mm[tm[2]][mm[-tm[170]]] = tm[1];
+               for (mm[-tm[170]] = tm[1]; mm[-tm[170]] < mm[tm[1]].length * tm[3]; mm[-tm[170]] += tm[3]) mm[tm[2]][mm[-tm[170]] >> tm[8]] |= (mm[tm[1]].charCodeAt(mm[-tm[170]] / tm[3]) & tm[11]) << tm[117] - mm[-tm[170]] % tm[171];
+               return mm[tm[2]]
```

#### 1835. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13625-L13626` → after: `L13619-L13620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13619-L13620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13619-L13620) · [Before (L13625-L13626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13625-L13626)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = ""), kk[gk[44]] = gk[1]; kk[gk[44]] < kk[gk[1]].length * gk[68]; kk[gk[44]] += gk[11]) kk[gk[43]] += String.fromCharCode(kk[gk[1]][kk[gk[44]] >> gk[50]] >>> gk[104] - kk[gk[44]] % gk[68] & gk[12]);
-               return kk[gk[43]]
+               for (DT(mm[tm[12]] = tm[2], mm[-tm[172]] = ""), mm[tm[13]] = tm[1]; mm[tm[13]] < mm[tm[1]].length * tm[171]; mm[tm[13]] += tm[3]) mm[-tm[172]] += String.fromCharCode(mm[tm[1]][mm[tm[13]] >> tm[8]] >>> tm[117] - mm[tm[13]] % tm[171] & tm[11]);
+               return mm[-tm[172]]
```

#### 1836. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13630` → after: `L13624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13624) · [Before (L13630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13630)

```diff
-               return kk[gk[13]] = gk[35], kk[gk[1]] >>> kk[gk[2]] | kk[gk[1]] << gk[68] - kk[gk[2]]
+               return mm[tm[12]] = tm[20], mm[tm[1]] >>> mm[tm[2]] | mm[tm[1]] << tm[171] - mm[tm[2]]
```

#### 1837. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13633-L13634` → after: `L13627-L13628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13627-L13628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13627-L13628) · [Before (L13633-L13634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13633-L13634)

```diff
-             function tk(kk, Fk) {
-               return kk >>> Fk
+             function pm(...mm) {
+               return mm[tm[12]] = tm[20], mm[tm[1]] >>> mm[tm[2]]
```

#### 1838. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13637-L13638` → after: `L13631-L13632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13631-L13632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13631-L13632) · [Before (L13637-L13638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13637-L13638)

```diff
-             function Zk(kk, Fk, Ik) {
-               return kk & Fk ^ ~kk & Ik
+             function Em(...mm) {
+               return mm[tm[12]] = tm[15], mm[tm[1]] & mm[tm[2]] ^ ~mm[tm[1]] & mm[tm[20]]
```

#### 1839. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13642` → after: `L13636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13636) · [Before (L13642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13642)

```diff
-               return kk[gk[13]] = gk[25], kk[gk[1]] & kk[gk[2]] ^ kk[gk[1]] & kk[gk[35]] ^ kk[gk[2]] & kk[gk[35]]
+               return mm[tm[12]] = tm[15], mm[tm[1]] & mm[tm[2]] ^ mm[tm[1]] & mm[tm[20]] ^ mm[tm[2]] & mm[tm[20]]
```

#### 1840. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13646` → after: `L13640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13640) · [Before (L13646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13646)

```diff
-               return kk[gk[13]] = gk[2], Lk(kk[gk[1]], gk[35]) ^ Lk(kk[gk[1]], gk[33]) ^ Lk(kk[gk[1]], gk[153])
+               return mm[tm[12]] = tm[2], Rm(mm[tm[1]], tm[20]) ^ Rm(mm[tm[1]], tm[32]) ^ Rm(mm[tm[1]], tm[148])
```

#### 1841. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13649-L13650` → after: `L13643-L13644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13643-L13644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13643-L13644) · [Before (L13649-L13650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13649-L13650)

```diff
-             function wk(kk) {
-               return Lk(kk, gk[20]) ^ Lk(kk, gk[17]) ^ Lk(kk, gk[120])
+             function Ym(...mm) {
+               return mm[tm[12]] = tm[2], Rm(mm[tm[1]], tm[9]) ^ Rm(mm[tm[1]], tm[140]) ^ Rm(mm[tm[1]], tm[119])
```

#### 1842. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13653-L13654` → after: `L13647-L13648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13647-L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13647-L13648) · [Before (L13653-L13654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13653-L13654)

```diff
-             function Hk(kk) {
-               return Lk(kk, gk[7]) ^ Lk(kk, gk[101]) ^ tk(kk, gk[25])
+             function qm(...mm) {
+               return mm[tm[12]] = tm[2], Rm(mm[tm[1]], tm[24]) ^ Rm(mm[tm[1]], tm[101]) ^ pm(mm[tm[1]], tm[15])
```

#### 1843. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13657-L13658` → after: `L13651-L13652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13651-L13652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13651-L13652) · [Before (L13657-L13658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13657-L13658)

```diff
-             function Jk(kk) {
-               return Lk(kk, gk[48]) ^ Lk(kk, gk[106]) ^ tk(kk, gk[105])
+             function jm(...mm) {
+               return mm[tm[12]] = tm[2], Rm(mm[tm[1]], tm[88]) ^ Rm(mm[tm[1]], tm[58]) ^ pm(mm[tm[1]], tm[50])
```

#### 1844. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13663-L13665` → after: `L13657-L13659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13657-L13659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13657-L13659) · [Before (L13663-L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13663-L13665)

```diff
-               for (qF(Fk[gk[13]] = gk[35], Fk[gk[43]] = new Array(gk[222], -gk[223], gk[224], -gk[225], gk[226], -gk[227], gk[228], gk[229]), Fk[-gk[240]] = new Array(gk[107])), qF(Fk[gk[1]][Fk[gk[2]] >> gk[50]] |= gk[71] << gk[104] - Fk[gk[2]] % gk[68], Fk[gk[1]][(Fk[gk[2]] + gk … [truncated]
-                 for (qF(Ik = Fk[gk[43]][gk[1]], Xk = Fk[gk[43]][gk[2]], Tk = Fk[gk[43]][gk[35]], ik = Fk[gk[43]][gk[25]], yk = Fk[gk[43]][gk[10]], lk = Fk[gk[43]][gk[50]], ak = Fk[gk[43]][gk[20]], qk = Fk[gk[43]][gk[7]]), tk = gk[1]; tk < gk[107]; tk++) qF(tk < gk[86] ? Fk[-gk[24 … [truncated]
-                 qF(Fk[gk[43]][gk[1]] = Pk(Ik, Fk[gk[43]][gk[1]]), Fk[gk[43]][gk[2]] = Pk(Xk, Fk[gk[43]][gk[2]]), Fk[gk[43]][gk[35]] = Pk(Tk, Fk[gk[43]][gk[35]]), Fk[gk[43]][gk[25]] = Pk(ik, Fk[gk[43]][gk[25]]), Fk[gk[43]][gk[10]] = Pk(yk, Fk[gk[43]][gk[10]]), Fk[gk[43]][gk[50]] = … [truncated]
+               for (DT(Tm[tm[12]] = tm[20], Tm[tm[16]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Tm[-tm[120]] = new Array(tm[173])), DT(Tm[tm[1]][Tm[tm[2]] >> tm[8]] |= tm[44] << tm[117] - Tm[tm[2]] % tm[171], Tm … [truncated]
+                 for (DT(fm = Tm[tm[16]][tm[1]], hm = Tm[tm[16]][tm[2]], Am = Tm[tm[16]][tm[20]], am = Tm[tm[16]][tm[15]], xm = Tm[tm[16]][tm[38]], wm = Tm[tm[16]][tm[8]], Dm = Tm[tm[16]][tm[9]], im = Tm[tm[16]][tm[24]]), pm = tm[1]; pm < tm[173]; pm++) DT(pm < tm[155] ? Tm[-tm[12 … [truncated]
+                 DT(Tm[tm[16]][tm[1]] = Im(fm, Tm[tm[16]][tm[1]]), Tm[tm[16]][tm[2]] = Im(hm, Tm[tm[16]][tm[2]]), Tm[tm[16]][tm[20]] = Im(Am, Tm[tm[16]][tm[20]]), Tm[tm[16]][tm[15]] = Im(am, Tm[tm[16]][tm[15]]), Tm[tm[16]][tm[38]] = Im(xm, Tm[tm[16]][tm[38]]), Tm[tm[16]][tm[8]] =  … [truncated]
```

#### 1845. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13667` → after: `L13661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13661) · [Before (L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13667)

```diff
-               return Fk[gk[43]]
+               return Tm[tm[16]]
```

#### 1846. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13671` → after: `L13665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13665) · [Before (L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13671)

```diff
-               return qF(kk[gk[13]] = gk[35], kk[gk[43]] = (kk[gk[1]] & gk[108]) + (kk[gk[2]] & gk[108]), kk[gk[25]] = (kk[gk[1]] >> gk[86]) + (kk[gk[2]] >> gk[86]) + (kk[gk[43]] >> gk[86])), kk[gk[25]] << gk[86] | kk[gk[43]] & gk[108]
+               return DT(mm[tm[12]] = tm[20], mm[tm[20]] = (mm[tm[1]] & tm[169]) + (mm[tm[2]] & tm[169]), mm[-tm[174]] = (mm[tm[1]] >> tm[155]) + (mm[tm[2]] >> tm[155]) + (mm[tm[20]] >> tm[155])), mm[-tm[174]] << tm[155] | mm[tm[20]] & tm[169]
```

#### 1847. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13673` → after: `L13667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13667) · [Before (L13673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13673)

```diff
-             return qF(kk[gk[13]] = gk[1], kk[gk[43]] = gk[1], kk[gk[233]] = ""), kk[gk[35]] = new Array(gk[158], gk[159], -gk[160], -gk[161], gk[162], gk[163], -gk[164], -gk[165], -gk[166], gk[167], gk[168], gk[169], gk[170], -gk[171], -gk[172], -gk[173], -gk[174], -gk[175], gk[1 … [truncated]
+             return DT(mm[tm[12]] = tm[1], mm[-tm[145]] = tm[1], mm[tm[153]] = ""), mm[tm[29]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680 … [truncated]
```

#### 1848. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13675-L13676` → after: `L13669-L13670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13669-L13670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13669-L13670) · [Before (L13675-L13676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13675-L13676)

```diff
-                 return kk[gk[13]] = gk[2], Tk(function(...kk) {
-                   return kk[gk[13]] = gk[2], qk(xk(ak(kk[gk[1]]), kk[gk[1]].length * gk[11]))
+                 return mm[tm[12]] = tm[2], Am(function(...mm) {
+                   return mm[tm[12]] = tm[2], im(Vm(Dm(mm[tm[1]]), mm[tm[1]].length * tm[3]))
```

#### 1849. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13682` → after: `L13676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13676) · [Before (L13682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13682)

```diff
-                 return kk[gk[13]] = gk[35], Tk(Xk(lk(kk[gk[1]]), lk(kk[gk[2]])))
+                 return mm[tm[12]] = tm[20], Am(hm(wm(mm[tm[1]]), wm(mm[tm[2]])))
```

#### 1850. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13687-L13801` → after: `L13681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13681) · [Before (L13687-L13801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13687-L13801)

```diff
-           }(), console.log(kk[gk[43]]))
-         }
-         ik(gk[37]) in Dk && qk(), Ak = []
-       }
-       if (Fk === ik(251) + ik(252)) {
-         function Lk(...kk) {
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'FYqkElsKdTNVWhr:uD}|mPMRX#{a=5.4LUfGCo(tn]81SB~eAOv;jHZ+IJ0p@7Qwb,_g%ix$2*[6`!9?>&<)"zy^3/c', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[79]] = [], kk[gk[50]] = gk[1], kk[-gk[119]] = gk[1], kk[gk[5 … [truncated]
-             if (kk[-gk[46]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[-gk[46]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[-gk[46]];
-               else {
-                 qF(kk[gk[52]] += kk[-gk[46]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[-gk[119]], kk[-gk[119]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                 do {
-                   qF(kk[gk[79]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[119]] -= gk[11])
-                 } while (kk[-gk[119]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[79]].push((kk[gk[50]] | kk[gk[52]] << kk[-gk[119]]) & gk[12]), hk(kk[gk[79]])
- ... (99 more removed lines; see GitHub link above)
+           }(), console.log(mm[tm[16]]))
```

#### 1851. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13806-L13807` → after: `L13686-L13687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13686-L13687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13686-L13687) · [Before (L13806-L13807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13806-L13807)

```diff
-     qF(Rk = {}, Uk = ["T27<${tXqeIy.&[X;SWV,>_)G+iU|}", "K8>H({LNySzWY&%O", 'fc>45"3X*h52%H', "FjO<(r@,5=&iH$t$vk_>9qJ=z@zH1eJ(", "x0gCJE#k`Aw^Z$B6&<^xbrfNVh!Y52j$JZ74;&UqgXWF;", 'yP{D[~[<GXCOh/.$M}n_dUUnb(5p5EN%DNG%I."tZ)|z#tt!j}Z`', "@}G%)!=46@RY?pH!_6[Uv!9&qgqC!U`DtEI=", "/P_E … [truncated]
-       var kk, Fk, Ik, Xk = [function() {
+     DT(Pm = {}, Hm = ["QKcFbG5JLB>r=hR_g0l?%,o", '5C.7)8qfldI2z^mCp5vSv:Tdjnqe,7.K+91$vc~U.#Ju"0]_%~SzVCWW~', 'nveFp?+TGFiXW8__P:a/,,P&p"6H9>a!<:3J"2l&=Y++.<54k>!nr', "iLBFa_vfunBtl{Jftu3JK:gX5@++i[g", "O9Xt#}_6sd?Wt|4J:*}Ft8CJ##zVRg4rl5r7fXi!+aB", "D4<}g^,6y#[HIHbrQh[5Mh44>`il." … [truncated]
+       DT(mm[tm[12]] = tm[1], mm[tm[16]] = [function() {
```

#### 1852. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13815-L13816` → after: `L13695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13695) · [Before (L13815-L13816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13815-L13816)

```diff
-       }];
-       qF(kk = void 0, Fk = []);
+       }], mm[tm[13]] = tm[18], mm[tm[14]] = []);
```

#### 1853. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13818` → after: `L13697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13697) · [Before (L13818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13818)

```diff
-         qF(kk = Object, Fk[gk[23]]("".__proto__.constructor.name))
+         DT(mm[tm[13]] = Object, mm[tm[14]][tm[26]]("".__proto__.constructor.name))
```

#### 1854. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13820-L13824` → after: `L13699-L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13699-L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13699-L13702) · [Before (L13820-L13824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13820-L13824)

```diff
-       kk: for (Ik = gk[1]; Ik < Xk[gk[13]]; Ik++) try {
-         var Tk;
-         for (kk = Xk[Ik](), Tk = gk[1]; Tk < Fk[gk[13]]; Tk++)
-           if (typeof kk[Fk[Tk]] === gk[14]) continue kk;
-         return kk
+       mm: for (mm[tm[15]] = tm[1]; mm[tm[15]] < mm[tm[16]][tm[12]]; mm[tm[15]]++) try {
+         for (mm[tm[13]] = mm[tm[16]][mm[tm[15]]](), mm[tm[9]] = tm[1]; mm[tm[9]] < mm[tm[14]][tm[12]]; mm[tm[9]]++)
+           if (typeof mm[tm[13]][mm[tm[14]][mm[tm[9]]]] === tm[17]) continue mm;
+         return mm[tm[13]]
```

#### 1855. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13826-L13828` → after: `L13704-L13706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13704-L13706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13704-L13706) · [Before (L13826-L13828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13826-L13828)

```diff
-       return kk || this
-     }() || {}, Nk = Ck.TextDecoder, ck = Ck.Uint8Array, Wk = Ck.je, fk = Ck.String || String, Bk = Ck.Array || Array, dk = function(...kk) {
-       return qF(kk[gk[13]] = gk[1], kk[gk[24]] = new Bk(gk[71]), kk[gk[2]] = fk[gk[21]] || fk.fromCharCode, kk[gk[4]] = []),
+       return mm[tm[13]] || this
+     }() || {}, Cm = ym.TextDecoder, rm = ym.Uint8Array, sm = ym.XO, lm = ym.String || String, Mm = ym.Array || Array, um = function(...mm) {
+       return DT(mm[tm[12]] = tm[1], mm[tm[16]] = new Mm(tm[44]), mm[-tm[21]] = lm[tm[23]] || lm.fromCharCode, mm[tm[4]] = []),
```

#### 1856. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13830` → after: `L13708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13708) · [Before (L13830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13830)

```diff
-           for (qF(Fk[gk[13]] = gk[2], Fk[gk[18]] = gk[15], Fk[-gk[17]] = gk[15], Fk[gk[4]] = Fk[gk[1]][gk[13]], kk[gk[4]][gk[13]] = gk[1]), Fk[gk[16]] = gk[1]; Fk[gk[16]] < Fk[gk[4]];) qF(Fk[-gk[17]] = Fk[gk[1]][Fk[gk[16]]++], Fk[-gk[17]] <= gk[51] ? Fk[gk[18]] = Fk[-gk[17]] : Fk … [truncated]
+           for (DT(Tm[tm[12]] = tm[2], Tm[tm[16]] = tm[18], Tm[tm[20]] = tm[18], Tm[tm[4]] = Tm[tm[1]][tm[12]], mm[tm[4]][tm[12]] = tm[1]), Tm[-tm[19]] = tm[1]; Tm[-tm[19]] < Tm[tm[4]];) DT(Tm[tm[20]] = Tm[tm[1]][Tm[-tm[19]]++], Tm[tm[20]] <= tm[45] ? Tm[tm[16]] = Tm[tm[20]] : Tm[ … [truncated]
```

#### 1857. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13833-L13834` → after: `L13711-L13712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13711-L13712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13711-L13712) · [Before (L13833-L13834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13833-L13834)

```diff
-     }()), qF(Yk = Object[mk(gk[371])](gk[64]), Ak = void 0);
-     const kF = (gk[1], qk[gk[379]])(mk(281));
+     }()), DT(Bm = Object[Um(120)](tm[48]), Lm = void 0);
+     const mT = (tm[1], im[tm[197]])(Um(265));
```

#### 1858. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13837-L13842` → after: `L13715-L13718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13715-L13718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13715-L13718) · [Before (L13837-L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13837-L13842)

```diff
-         return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(kk) {
-           var Fk, Ik, Xk, Tk, ik, yk, lk;
-           for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-             var ak = 'b(4x612[.<_0m+KlLPTHipoqXSf5QW#/"wDIh~Mv:}3C7%d*aE,$kn>BU9Ru];{8ecZtAry`Y?s!Fg^V|JN@&jO=zG)'.indexOf(Fk[lk]);
-             if (ak !== -gk[2])
-               if (yk < gk[1]) yk = ak;
+         return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = function(...mm) {
+           for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = 'Tnp_3em5>1k4NHtV[<6/qazQ#EJ`fW9RsDiMAZ;gu~(B]|rOdh+8bo@?v$%}2PC=!jSX,cw.*)^LF"UxlY7&IK:y0{G', mm[-tm[148]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[-tm[148]].length, mm[tm[38]] = [], mm[tm[28]] = tm[1], mm[tm[9]] = tm[1], mm[-tm … [truncated]
+             if (mm[tm[40]] = mm[tm[2]].indexOf(mm[-tm[148]][mm[tm[3]]]), mm[tm[40]] !== -tm[2])
+               if (mm[-tm[198]] < tm[1]) mm[-tm[198]] = mm[tm[40]];
```

#### 1859. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13844` → after: `L13720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13720) · [Before (L13844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13844)

```diff
-                 qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[-tm[198]] += mm[tm[40]] * tm[27], mm[tm[28]] |= mm[-tm[198]] << mm[tm[9]], mm[tm[9]] += (mm[-tm[198]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1860. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13846-L13851` → after: `L13722-L13725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13722-L13725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13722-L13725) · [Before (L13846-L13851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13846-L13851)

```diff
-                   qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
-                 } while (ik > gk[7]);
-                 yk = -gk[2]
-               }
-           }
-           return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+                   DT(mm[tm[38]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[9]] -= tm[3])
+                 } while (mm[tm[9]] > tm[24]);
+                 mm[-tm[198]] = -tm[2]
+               } return mm[-tm[198]] > -tm[2] && mm[tm[38]].push((mm[tm[28]] | mm[-tm[198]] << mm[tm[9]]) & tm[11]), dm(mm[tm[38]])
```

#### 1861. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13854-L13862` → after: `L13728-L13732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13728-L13732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13728-L13732) · [Before (L13854-L13862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13854-L13862)

```diff
-       if (kk[gk[13]] = gk[20], kk[gk[1]][Fk(gk[248])][Fk(283) + gk[54]] && kk[gk[2]] !== kk[gk[1]].oR && kk[gk[2]] !== kk[gk[35]][gk[407]]) throw new Error(Fk(284));
-       const Ik = kk[gk[1]][Fk(gk[248])][Fk(285) + gk[8]](kk[gk[2]]);
-       if (kk[gk[10]][Fk(286) + Fk(287)] = Ik, !Ik) {
-         function GF(kk) {
-           var Fk, Ik, Xk, Tk, ik, yk, lk;
-           for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-             var ak = '|faGcFXdgHOeEWDpNhCunj^P~tLIik}v$#_SwmU.!lTQoq;x)%KY,B9?MZsRVb=AJ<r`"]*y&>z0+18/6(42@{[375:'.indexOf(Fk[lk]);
-             if (ak !== -gk[2])
-               if (yk < gk[1]) yk = ak;
+       if (mm[tm[12]] = tm[9], mm[tm[1]][Tm(tm[202])][Tm(267) + tm[54]] && mm[tm[2]] !== mm[tm[1]].xH && mm[tm[2]] !== mm[tm[20]][tm[349]]) {
+         function GT(...mm) {
+           for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = 'VCNEfADYLu]+9RIMdrSKs8=.`Ha)hc,Ppg7ZG^%<qUvnl12wxF;*4:5Xkyt/iQJ#Bz&0{OW|!@b$3T[m6oe_(>~?j}"', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[20]].length, mm[tm[38]] = [], mm[tm[8]] = tm[1], mm[-tm[68]] = tm[1], mm[tm[24 … [truncated]
+             if (mm[tm[40]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[119]]]), mm[tm[40]] !== -tm[2])
+               if (mm[tm[24]] < tm[1]) mm[tm[24]] = mm[tm[40]];
```

#### 1862. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13864` → after: `L13734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13734) · [Before (L13864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13864)

```diff
-                 qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[tm[24]] += mm[tm[40]] * tm[27], mm[tm[8]] |= mm[tm[24]] << mm[-tm[68]], mm[-tm[68]] += (mm[tm[24]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1863. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13866-L13871` → after: `L13736-L13739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13736-L13739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13736-L13739) · [Before (L13866-L13871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13866-L13871)

```diff
-                   qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
-                 } while (ik > gk[7]);
-                 yk = -gk[2]
-               }
-           }
-           return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+                   DT(mm[tm[38]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[-tm[68]] -= tm[3])
+                 } while (mm[-tm[68]] > tm[24]);
+                 mm[tm[24]] = -tm[2]
+               } return mm[tm[24]] > -tm[2] && mm[tm[38]].push((mm[tm[8]] | mm[tm[24]] << mm[-tm[68]]) & tm[11]), dm(mm[tm[38]])
```

#### 1864. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13875` → after: `L13743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13743) · [Before (L13875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13875)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = GF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = GT(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1865. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13879-L13891` → after: `L13747-L13767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13747-L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13747-L13767) · [Before (L13879-L13891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13879-L13891)

```diff
-           qF(kk[gk[13]] = gk[1], kk[gk[43]] = function(...kk) {
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = kk[gk[1]].length, kk[gk[26]] = [], kk[gk[25]] = gk[1], kk[gk[41]] = gk[1], kk[gk[1]].sort(((kk, Fk) => kk - Fk))), kk[-gk[51]] = gk[1]; kk[-gk[51]] < kk[gk[43]]; kk[-gk[51]]++)
-               if (!(kk[-gk[51]] > gk[1] && kk[gk[1]][kk[-gk[51]]] === kk[gk[1]][kk[-gk[51]] - gk[2]]))
-                 for (qF(kk[gk[25]] = kk[-gk[51]] + gk[2], kk[gk[41]] = kk[gk[43]] - gk[2]); kk[gk[25]] < kk[gk[41]];)
-                   if (kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[25]]] + kk[gk[1]][kk[gk[41]]] < gk[1]) kk[gk[25]]++;
-                   else if (kk[gk[1]][kk[-gk[51]]] + kk[gk[1]][kk[gk[25]]] + kk[gk[1]][kk[gk[41]]] > gk[1]) kk[gk[41]]--;
-             else {
-               for (kk[gk[26]].push([kk[gk[1]][kk[-gk[51]]], kk[gk[1]][kk[gk[25]]], kk[gk[1]][kk[gk[41]]]]); kk[gk[25]] < kk[gk[41]] && kk[gk[1]][kk[gk[25]]] === kk[gk[1]][kk[gk[25]] + gk[2]];) kk[gk[25]]++;
-               for (; kk[gk[25]] < kk[gk[41]] && kk[gk[1]][kk[gk[41]]] === kk[gk[1]][kk[gk[41]] - gk[2]];) kk[gk[41]]--;
-               qF(kk[gk[25]]++, kk[gk[41]]--)
-             }
-             return kk[gk[26]]
-           }, console.log(kk[gk[43]]))
+           mm[tm[12]] = tm[1]
+         }
+         throw XT(268) + tm[220] in Wm && PT(), new Error(XT(271))
+       }
+       const fm = mm[tm[1]][Tm(tm[202])][Tm(272) + tm[28]](mm[tm[2]]);
+       if (mm[tm[38]][Tm(273) + Tm(274)] = fm, !fm) {
+         function HT(...mm) {
+           for (DT(mm[tm[12]] = tm[2], mm[tm[204]] = 'xw,/)|zy}#9>{ZGXd;?hRiaSsgtrv+!@*[HT"KbEp5:Qf1M80P3BU^<lFIq`DOA$C%6J(4&o=nm7uY_2cLj.keW]~VN', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[8]] = tm[1], mm[tm[29]] = tm[1], mm[tm[7] … [truncated]
+             if (mm[tm[6]] = mm[tm[204]].indexOf(mm[tm[20]][mm[tm[203]]]), mm[tm[6]] !== -tm[2])
+               if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[6]];
+               else {
+                 DT(mm[tm[7]] += mm[tm[6]] * tm[27], mm[tm[8]] |= mm[tm[7]] << mm[tm[29]], mm[tm[29]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
+                 do {
+                   DT(mm[tm[34]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[29]] -= tm[3])
+                 } while (mm[tm[29]] > tm[24]);
+                 mm[tm[7]] = -tm[2]
+ ... (5 more added lines; see GitHub link above)
```

#### 1866. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13893` → after: `L13769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13769) · [Before (L13893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13893)

```diff
-         return pF(288) in Dk && uF(), void lk()[pF(289)](kk[gk[10]][pF(290) + pF(291) + pF(292)], gk[1], gk[1], gk[1])
+         return void wm()[Tm(tm[337])](mm[tm[38]][Tm(tm[361]) + Tm(tm[362]) + yT(278)], tm[1], tm[1], tm[1])
```

#### 1867. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13895-L13898` → after: `L13771-L13774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13771-L13774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13771-L13774) · [Before (L13895-L13898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13895-L13898)

```diff
-       const Xk = kk[gk[35]][Fk(gk[406]) + Fk(294)],
-         yk = Xk[Fk(295)],
-         qk = kk[gk[1]][Fk(gk[248])][Fk(296)](kk[gk[2]], Xk),
-         ek = kk[gk[1]][Fk(gk[248])][Fk(297) + Fk(298) + Fk(299) + Fk(300)](kk[gk[2]], Xk),
+       const hm = mm[tm[20]][Tm(tm[348]) + Tm(280)],
+         xm = hm[Tm(281)],
+         im = mm[tm[1]][Tm(tm[202])][Tm(282)](mm[tm[2]], hm),
+         Om = mm[tm[1]][Tm(tm[202])][Tm(283) + Tm(284) + Tm(285) + Tm(286)](mm[tm[2]], hm),
```

#### 1868. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13900-L13920` → after: `L13776-L13796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13776-L13796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13776-L13796) · [Before (L13900-L13920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13900-L13920)

```diff
-           [Fk(301) + gk[281]]: wk,
-           [Fk(302) + Fk(303) + Fk(304) + gk[112]]: Hk,
-           [Fk(305) + Fk(306) + Fk(307)]: xk,
-           [Fk(308) + Fk(309) + Fk(310)]: Pk,
-           [Fk(311)]: Kk,
-           [Fk(312)]: Qk,
-           [Fk(gk[402]) + gk[403]]: sk,
-           [Fk(314) + Fk(315)]: Vk,
-           [Fk(316) + Fk(317) + Fk(318) + Fk(gk[419])]: Ek,
-           [Fk(320) + Fk(321)]: bk,
-           [Fk(322) + Fk(323) + Fk(324)]: Ck
-         } = (gk[1], ak[gk[52]])(kk[gk[1]][Fk(gk[248])], kk[gk[2]], kk[gk[10]]),
-         Nk = kk[gk[1]][Fk(gk[248])][Fk(325) + Fk(326) + Fk(327)](kk[gk[2]]);
-       kk[gk[43]] = kk[gk[1]][Fk(gk[248])][Fk(gk[266]) + Fk(gk[267]) + Fk(gk[268]) + Fk(gk[269])](Nk);
-       const ck = gk[35],
-         Wk = (kk[gk[43]] === gk[64] ? kk[gk[1]][Fk(gk[248])][Fk(gk[252]) + Fk(gk[253]) + Fk(gk[254]) + Fk(gk[255])](kk[gk[2]], Fk(gk[249]) + Fk(gk[250]) + Fk(gk[251])) : kk[gk[43]][Fk(gk[249]) + Fk(gk[250]) + Fk(gk[251])]) * ck,
- ... (5 more removed lines; see GitHub link above)
+           [Tm(287) + tm[238]]: Ym,
+           [Tm(288) + Tm(289) + Tm(290) + tm[205]]: qm,
+           [Tm(291) + Tm(292) + Tm(293) + Tm(294)]: Vm,
+           [Tm(295) + Tm(296) + Tm(297)]: Im,
+           [Tm(298)]: Km,
+           [Tm(299)]: Qm,
+           [Tm(tm[342]) + tm[343]]: nm,
+           [Tm(301) + Tm(302)]: Jm,
+           [Tm(303) + Tm(304) + Tm(305) + Tm(tm[363])]: km,
+           [Tm(307) + Tm(308)]: Xm,
+           [Tm(309) + Tm(310) + Tm(311)]: ym
+         } = (tm[1], Dm[tm[7]])(mm[tm[1]][Tm(tm[202])], mm[tm[2]], mm[tm[38]]),
+         Cm = mm[tm[1]][Tm(tm[202])][Tm(312) + Tm(313) + Tm(314)](mm[tm[2]]);
+       mm[tm[9]] = mm[tm[1]][Tm(tm[202])][Tm(tm[223]) + Tm(tm[224]) + Tm(tm[225]) + Tm(tm[226])](Cm);
+       const rm = tm[20],
+         sm = (mm[tm[9]] === tm[48] ? mm[tm[1]][Tm(tm[202])][Tm(tm[209]) + Tm(tm[210]) + Tm(tm[211]) + Tm(tm[212])](mm[tm[2]], Tm(tm[206]) + Tm(tm[207]) + Tm(tm[208])) : mm[tm[9]][Tm(tm[206]) + Tm(tm[207]) + Tm(tm[208])]) * rm,
+ ... (5 more added lines; see GitHub link above)
```

#### 1869. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13922` → after: `L13798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13798) · [Before (L13922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13922)

```diff
-         rk = (kk[gk[43]] === gk[64] ? kk[gk[1]][Fk(gk[248])][Fk(gk[252]) + Fk(gk[253]) + Fk(gk[254]) + Fk(gk[255])](kk[gk[2]], Fk(gk[261]) + Fk(gk[262]) + gk[112]) : kk[gk[43]][Fk(gk[261]) + Fk(gk[262]) + gk[112]]) && (Kk[gk[1]] || Kk[gk[35]]),
+         TT = (mm[tm[9]] === tm[48] ? mm[tm[1]][Tm(tm[202])][Tm(tm[209]) + Tm(tm[210]) + Tm(tm[211]) + Tm(tm[212])](mm[tm[2]], Tm(tm[218]) + Tm(tm[219]) + tm[205]) : mm[tm[9]][Tm(tm[218]) + Tm(tm[219]) + tm[205]]) && (Km[tm[1]] || Km[tm[20]]),
```

#### 1870. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13924-L13946` → after: `L13800-L13809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13800-L13809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13800-L13809) · [Before (L13924-L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13924-L13946)

```diff
-       qF(kk[gk[35]][Fk(356) + Fk(357) + Fk(358)] = sk, kk[gk[35]][Fk(359)] = Qk);
-       const FF = kk[gk[35]][Fk(360) + Fk(361)](),
-         LF = kk[gk[35]][Fk(362)]();
-       kk[gk[35]][Fk(363) + gk[265]] = gk[58];
-       for (let bF = gk[1]; bF < LF[Fk(gk[404])]; bF++)
-         if (LF[bF] !== kF) {
-           function RF(...kk) {
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'ITY"a(vU,9&%q_y.>Gc$:n`Cl;|{/7xowJV3usDZ}KXi#6[p]m*d0F!^bzQ@f5=r8H2Lt?j+W)1BMkA4hePOSgENR~<', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[263]] = kk[gk[26]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[-gk[264]] = gk[1], kk[g … [truncated]
-               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[75]];
-                 else {
-                   qF(kk[gk[7]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[-gk[264]], kk[-gk[264]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                   do {
-                     qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[264]] -= gk[11])
-                   } while (kk[-gk[264]] > gk[7]);
-                   kk[gk[7]] = -gk[2]
- ... (7 more removed lines; see GitHub link above)
+       DT(mm[tm[20]][Tm(343) + Tm(344) + Tm(345)] = nm, mm[tm[20]][Tm(346)] = Qm);
+       const RT = mm[tm[20]][Tm(347) + Tm(348)](),
+         pT = mm[tm[20]][Tm(349)]();
+       mm[tm[20]][Tm(tm[221]) + tm[222]] = tm[77];
+       for (let CT = tm[1]; CT < pT[Tm(tm[344])]; CT++) {
+         function rT(...mm) {
+           mm[tm[12]] = tm[1]
+         }
+         if (Tm(352) + tm[220] in Wm && rT(), pT[CT] !== mT) {
+           mm[tm[20]][Tm(tm[221]) + tm[222]] = tm[76];
```

#### 1871. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13948-L13958` → after: `L13811-L13874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13811-L13874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13811-L13874) · [Before (L13948-L13958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13948-L13958)

```diff
-         } kk[gk[43]] = kk[gk[1]][Fk(gk[248])][Fk(gk[266]) + Fk(gk[267]) + Fk(gk[268]) + Fk(gk[269])](Nk);
-       const tF = kk[gk[43]] === gk[64] ? kk[gk[1]][Fk(gk[248])][Fk(gk[252]) + Fk(gk[253]) + Fk(gk[254]) + Fk(gk[255])](kk[gk[2]], Fk(gk[270]) + gk[271]) : kk[gk[43]][Fk(gk[270]) + gk[271]],
-         ZF = kk[gk[43]] === gk[64] ? kk[gk[1]][Fk(gk[248])][Fk(gk[252]) + Fk(gk[253]) + Fk(gk[254]) + Fk(gk[255])](kk[gk[2]], Fk(gk[272]) + Fk(gk[273]) + Fk(gk[274]) + gk[8]) : kk[gk[43]][Fk(gk[272]) + Fk(gk[273]) + Fk(gk[274]) + gk[8]],
-         jF = kk[gk[43]] === gk[64] ? kk[gk[1]][Fk(gk[248])][Fk(gk[252]) + Fk(gk[253]) + Fk(gk[254]) + Fk(gk[255])](kk[gk[2]], Fk(gk[275]) + Fk(gk[276]) + Fk(gk[277])) : kk[gk[43]][Fk(gk[275]) + Fk(gk[276]) + Fk(gk[277])],
-         eF = kk[gk[43]] === gk[64] ? kk[gk[1]][Fk(gk[248])][Fk(gk[252]) + Fk(gk[253]) + Fk(gk[254]) + Fk(gk[255])](kk[gk[2]], Fk(gk[278]) + Fk(gk[279]) + gk[280]) : kk[gk[43]][Fk(gk[278]) + Fk(gk[279]) + gk[280]],
-         wF = (FF || kk[gk[35]][Fk(375) + Fk(376)] < iF(kk[gk[1]], kk[gk[2]], Nk, Qk)) && !kk[gk[25]][Fk(gk[441]) + Fk(gk[442]) + gk[443]] && !sk && qk[Fk(gk[282]) + Fk(gk[283]) + gk[281]] > gk[1],
-         HF = kk[gk[25]][Fk(gk[284]) + gk[52]] && !wk && !Mk && !kk[gk[35]][Fk(gk[286]) + gk[52]] && qk[Fk(gk[282]) + Fk(gk[283]) + gk[281]] > gk[1] && !mk,
-         JF = kk[gk[25]][Fk(gk[284]) + gk[52]] && !kk[gk[35]][Fk(gk[293]) + Fk(gk[294]) + Fk(gk[295]) + Fk(gk[296])],
-         xF = (gk[1], Sk[gk[41]])(tF, yk),
-         PF = JF && kk[gk[35]][Fk(gk[289]) + Fk(gk[290]) + Fk(gk[291]) + Fk(gk[292]) + gk[285]] < gk[105];
-       if (kk[gk[7]] = gk[70], xF && (PF || kk[gk[25]][Fk(gk[287]) + Fk(gk[288])]) ? qF(kk[gk[35]][Fk(gk[286]) + gk[52]] = !kk[gk[35]][Fk(gk[286]) + gk[52]], kk[gk[7]] = kk[gk[35]][Fk(gk[286]) + gk[52]] && FF && kk[gk[25]][Fk(gk[287]) + Fk(gk[288])]) : xF || (kk[gk[35]][Fk(gk[286] … [truncated]
+         }
+       }
+       mm[tm[9]] = mm[tm[1]][Tm(tm[202])][Tm(tm[223]) + Tm(tm[224]) + Tm(tm[225]) + Tm(tm[226])](Cm);
+       const ET = mm[tm[9]] === tm[48] ? mm[tm[1]][Tm(tm[202])][Tm(tm[209]) + Tm(tm[210]) + Tm(tm[211]) + Tm(tm[212])](mm[tm[2]], Tm(tm[227]) + tm[228]) : mm[tm[9]][Tm(tm[227]) + tm[228]],
+         oT = mm[tm[9]] === tm[48] ? mm[tm[1]][Tm(tm[202])][Tm(tm[209]) + Tm(tm[210]) + Tm(tm[211]) + Tm(tm[212])](mm[tm[2]], Tm(tm[229]) + Tm(tm[230]) + Tm(tm[231]) + tm[28]) : mm[tm[9]][Tm(tm[229]) + Tm(tm[230]) + Tm(tm[231]) + tm[28]],
+         OT = mm[tm[9]] === tm[48] ? mm[tm[1]][Tm(tm[202])][Tm(tm[209]) + Tm(tm[210]) + Tm(tm[211]) + Tm(tm[212])](mm[tm[2]], Tm(tm[232]) + Tm(tm[233]) + Tm(tm[234])) : mm[tm[9]][Tm(tm[232]) + Tm(tm[233]) + Tm(tm[234])],
+         YT = mm[tm[9]] === tm[48] ? mm[tm[1]][Tm(tm[202])][Tm(tm[209]) + Tm(tm[210]) + Tm(tm[211]) + Tm(tm[212])](mm[tm[2]], Tm(tm[235]) + Tm(tm[236]) + tm[237]) : mm[tm[9]][Tm(tm[235]) + Tm(tm[236]) + tm[237]],
+         qT = (RT || mm[tm[20]][Tm(362) + Tm(363)] < AT(mm[tm[1]], mm[tm[2]], Cm, Qm)) && !mm[tm[15]][Tm(tm[378]) + Tm(tm[379]) + tm[197]] && !nm && im[Tm(tm[239]) + Tm(tm[240]) + tm[238]] > tm[1],
+         jT = mm[tm[15]][Tm(tm[241]) + tm[7]] && !Ym && !iT && !mm[tm[20]][Tm(tm[247]) + tm[7]] && im[Tm(tm[239]) + Tm(tm[240]) + tm[238]] > tm[1] && !gm,
+         VT = mm[tm[15]][Tm(tm[241]) + tm[7]] && !mm[tm[20]][Tm(tm[250]) + Tm(tm[251]) + Tm(tm[252]) + Tm(tm[253])],
+         IT = (tm[1], zm[tm[34]])(ET, xm),
+         KT = VT && mm[tm[20]][Tm(374) + Tm(375) + Tm(376) + tm[248]] < tm[50];
+       if (mm[tm[24]] = tm[76], IT && (KT || mm[tm[15]][Tm(377) + Tm(378)])) {
+         function sT(...mm) {
+           for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = 'QmUdi.7fwR$j{!tBS8G@g_h1I^PKV~DqXzN#*J)=%(?x+"M;sAlerHpCn&<`c6k|yLu5ZF:/,}]3O4W29TY0[a>obEv', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[4]] = mm[tm[20]].length, mm[-tm[242]] = [], mm[tm[8]] = tm[1], mm[-tm[136]] = tm[1], mm[-tm … [truncated]
+             if (mm[tm[6]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[243]]]), mm[tm[6]] !== -tm[2])
+ ... (48 more added lines; see GitHub link above)
```

#### 1872. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13960-L13962` → after: `L13876-L13878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13876-L13878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13876-L13878) · [Before (L13960-L13962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13960-L13962)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = '^eGfFDNjAprImLPdVt4k?Ccx=|g>5TbXQ$/68.`E{U;~_:]H[i<Yu@%1,+#ny!}h2qO*K37SZ"zo&l0R(B)wW9JvMsa', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[136] … [truncated]
-             if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
-               if (kk[gk[136]] < gk[1]) kk[gk[136]] = kk[gk[28]];
+           for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = 'AN<b!XHs`,?L8^JZ*aTeBVUF+W$[/&~cC_4I#:guGln9i7]Sj2pr@|RK"dqP{oyv653Oz};0>).w%(kDY1x=EtQhmMf', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[4]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[28]] = tm[1], mm[tm[29]] = tm[1], mm[tm[103 … [truncated]
+             if (mm[tm[40]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[126]]]), mm[tm[40]] !== -tm[2])
+               if (mm[tm[103]] < tm[1]) mm[tm[103]] = mm[tm[40]];
```

#### 1873. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13964` → after: `L13880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13880) · [Before (L13964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13964)

```diff
-                 qF(kk[gk[136]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[136]] << kk[gk[20]], kk[gk[20]] += (kk[gk[136]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[tm[103]] += mm[tm[40]] * tm[27], mm[tm[28]] |= mm[tm[103]] << mm[tm[29]], mm[tm[29]] += (mm[tm[103]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1874. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13966-L13969` → after: `L13882-L13885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13882-L13885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13882-L13885) · [Before (L13966-L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13966-L13969)

```diff
-                   qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                 } while (kk[gk[20]] > gk[7]);
-                 kk[gk[136]] = -gk[2]
-               } return kk[gk[136]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[136]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                   DT(mm[tm[34]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[29]] -= tm[3])
+                 } while (mm[tm[29]] > tm[24]);
+                 mm[tm[103]] = -tm[2]
+               } return mm[tm[103]] > -tm[2] && mm[tm[34]].push((mm[tm[28]] | mm[tm[103]] << mm[tm[29]]) & tm[11]), dm(mm[tm[34]])
```

#### 1875. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13973` → after: `L13889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13889) · [Before (L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13973)

```diff
-           return typeof Rk[kk] === gk[14] ? Rk[kk] = CF(Uk[kk]) : Rk[kk]
+           return typeof Pm[mm] === tm[17] ? Pm[mm] = vT(Hm[mm]) : Pm[mm]
```

#### 1876. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13975` → after: `L13891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13891) · [Before (L13975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13975)

```diff
-         qF(kk[gk[35]][Fk(396) + Fk(397)] = gk[70], kk[gk[35]][NF(398) + NF(399)] = gk[1]), kk[gk[7]] || (kk[gk[35]][NF(400) + gk[52]] = gk[70])
+         DT(mm[tm[20]][tT(393) + tT(394)] = tm[76], mm[tm[20]][tT(395) + tT(396)] = tm[1]), mm[tm[24]] || (mm[tm[20]][tT(397) + tm[7]] = tm[76])
```

#### 1877. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13977-L13978` → after: `L13893-L13894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13893-L13894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13893-L13894) · [Before (L13977-L13978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13977-L13978)

```diff
-       const KF = FF && !kk[gk[35]][Fk(gk[437]) + Fk(gk[438]) + Fk(gk[439])] && kk[gk[25]][Fk(gk[284]) + gk[52]] && !kk[gk[35]][Fk(gk[293]) + Fk(gk[294]) + Fk(gk[295]) + Fk(gk[296])];
-       if (kk[-gk[308]] = gk[70], HF) {
+       const QT = RT && !mm[tm[20]][Tm(tm[299]) + Tm(tm[300]) + Tm(tm[301])] && mm[tm[15]][Tm(tm[241]) + tm[7]] && !mm[tm[20]][Tm(tm[250]) + Tm(tm[251]) + Tm(tm[252]) + Tm(tm[253])];
+       if (mm[tm[4]] = tm[76], jT) {
```

#### 1878. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13980-L13982` → after: `L13896-L13898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13896-L13898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13896-L13898) · [Before (L13980-L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13980-L13982)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'zVCJAmaSfe9H}5d%Oix{DXZM*wW0)K,vlB;c[=P^?+Ys!L1g6E.>Uk2jh|y<QIu@&tFG8b$:~orN/]pR4("q7_T#`n3', kk[-gk[107]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[107]].length, kk[gk[150]] = [], kk[gk[297]] = gk[1], kk[gk[20]] = gk[1], kk[g … [truncated]
-             if (kk[gk[75]] = kk[gk[2]].indexOf(kk[-gk[107]][kk[gk[39]]]), kk[gk[75]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
+           for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = '2OeHqWobnTC|DxPR,:}S+/z*()1BuwJL"yiVlp_Y{Km&[%]g7v=!G.N@F56s$~f`0dra9X;k>c#hI3t?MAj^Z<QU4E8', mm[-tm[171]] = "" + (mm[tm[1]] || ""), mm[tm[4]] = mm[-tm[171]].length, mm[tm[34]] = [], mm[-tm[255]] = tm[1], mm[tm[254]] = tm[1], mm[ … [truncated]
+             if (mm[tm[6]] = mm[tm[2]].indexOf(mm[-tm[171]][mm[tm[3]]]), mm[tm[6]] !== -tm[2])
+               if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[6]];
```

#### 1879. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13984` → after: `L13900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13900) · [Before (L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13984)

```diff
-                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[297]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[tm[7]] += mm[tm[6]] * tm[27], mm[-tm[255]] |= mm[tm[7]] << mm[tm[254]], mm[tm[254]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1880. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13986-L13989` → after: `L13902-L13905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13902-L13905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13902-L13905) · [Before (L13986-L13989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13986-L13989)

```diff
-                   qF(kk[gk[150]].push(kk[gk[297]] & gk[12]), kk[gk[297]] >>= gk[11], kk[gk[20]] -= gk[11])
-                 } while (kk[gk[20]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[150]].push((kk[gk[297]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[150]])
+                   DT(mm[tm[34]].push(mm[-tm[255]] & tm[11]), mm[-tm[255]] >>= tm[3], mm[tm[254]] -= tm[3])
+                 } while (mm[tm[254]] > tm[24]);
+                 mm[tm[7]] = -tm[2]
+               } return mm[tm[7]] > -tm[2] && mm[tm[34]].push((mm[-tm[255]] | mm[tm[7]] << mm[tm[254]]) & tm[11]), dm(mm[tm[34]])
```

#### 1881. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13993` → after: `L13909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13909) · [Before (L13993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13993)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = cF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = UT(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1882. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13995-L13996` → after: `L13911-L13912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13911-L13912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13911-L13912) · [Before (L13995-L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13995-L13996)

```diff
-         if (kk[gk[35]][WF(gk[303]) + WF(gk[304])]) {
-           if (kk[gk[35]][WF(gk[299]) + WF(407) + gk[8]] > gk[1]) {
+         if (mm[tm[20]][dT(401) + dT(402)]) {
+           if (mm[tm[20]][dT(403) + dT(404) + tm[28]] > tm[1]) {
```

#### 1883. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L13998-L14000` → after: `L13914-L13916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13914-L13916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13914-L13916) · [Before (L13998-L14000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L13998-L14000)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'S=[09`~u#d{p)?ZqLQN758%rFW}y<aH^C,B&f$(b@tkR;envs1hEwD+.6"IMV_jiAP|U/c>*o:2G!gl3]xTmXYK4OJz', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[138]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[-gk[298]] = gk[1], k … [truncated]
-                 if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+               for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = 'T:s6N)*X/nLpIF;E9eh+b~SD="U!}Zo1,q^.j4QJtfY$]G>dwak&KV(28HMCrmBlORPAicWg<vxy%`u0{|_5#z3[@7?', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[8]] = tm[1], mm[tm[29]] = tm[1], mm[tm[ … [truncated]
+                 if (mm[tm[83]] = mm[tm[2]].indexOf(mm[tm[20]][mm[tm[69]]]), mm[tm[83]] !== -tm[2])
+                   if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[83]];
```

#### 1884. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14002` → after: `L13918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13918) · [Before (L14002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14002)

```diff
-                     qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[-gk[298]], kk[-gk[298]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     DT(mm[tm[7]] += mm[tm[83]] * tm[27], mm[tm[8]] |= mm[tm[7]] << mm[tm[29]], mm[tm[29]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1885. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14004-L14005` → after: `L13920-L13921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13920-L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13920-L13921) · [Before (L14004-L14005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14004-L14005)

```diff
-                       qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[298]] -= gk[11])
-                     } while (kk[-gk[298]] > gk[7]);
+                       DT(mm[tm[34]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[29]] -= tm[3])
+                     } while (mm[tm[29]] > tm[24]);
```

#### 1886. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14007` → after: `L13923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13923) · [Before (L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14007)

```diff
-                   } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[7]] << kk[-gk[298]]) & gk[12]), hk(kk[gk[10]])
+                   } return mm[tm[7]] > -tm[2] && mm[tm[34]].push((mm[tm[8]] | mm[tm[7]] << mm[tm[29]]) & tm[11]), dm(mm[tm[34]])
```

#### 1887. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14011-L14031` → after: `L13927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13927) · [Before (L14011-L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14011-L14031)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = fF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-             }
-             let dF = kk[gk[35]][WF(408) + WF(409)];
-             if (kk[gk[35]][WF(gk[299]) + BF(gk[301]) + gk[8]] < kk[gk[50]]) {
-               function YF(...kk) {
-                 for (qF(kk[gk[13]] = gk[2], kk[-gk[18]] = 'ru$`=8"./)7#LtvW;epgkM[?TsQ9!z16>D}^wY*JnR+Cximyh%l:VP_HSZEBF]o2{&aN,A5XqU~dKjIbcG<3O@(f4|0', kk[gk[61]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[61]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk … [truncated]
-                   if (kk[gk[75]] = kk[-gk[18]].indexOf(kk[gk[61]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-                     if (kk[-gk[300]] < gk[1]) kk[-gk[300]] = kk[gk[75]];
-                     else {
-                       qF(kk[-gk[300]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[-gk[300]] << kk[gk[53]], kk[gk[53]] += (kk[-gk[300]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                       do {
-                         qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                       } while (kk[gk[53]] > gk[7]);
-                       kk[-gk[300]] = -gk[2]
-                     } return kk[-gk[300]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[-gk[300]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
-               }
- ... (5 more removed lines; see GitHub link above)
+               return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = gT(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1888. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14033` → after: `L13929-L13930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13929-L13930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13929-L13930) · [Before (L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14033)

```diff
-             qF(lk()[BF(413)](pk, gk[1], dF, gk[1]), kk[gk[10]][BF(414) + BF(415)](pk), kk[gk[35]][BF(416) + BF(gk[301]) + gk[8]] -= kk[gk[50]])
+             let FT = mm[tm[20]][dT(405) + dT(406)];
+             mm[tm[20]][WT(tm[256]) + WT(tm[257]) + tm[28]] < mm[tm[8]] && (FT *= mm[tm[20]][WT(tm[256]) + WT(tm[257]) + tm[28]] / mm[tm[8]]), DT(wm()[WT(409)](Nm, tm[1], FT, tm[1]), mm[tm[38]][WT(410) + WT(411)](Nm), mm[tm[20]][WT(tm[256]) + WT(tm[257]) + tm[28]] -= mm[tm[8]])
```

#### 1889. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14037-L14039` → after: `L13934-L13936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13934-L13936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13934-L13936) · [Before (L14037-L14039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14037-L14039)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '8={1.9,2^u0WHfk#U*[$p"Lb|_IOdsXiD4:JAagM`Sq+?&v!r>wTKj}x/3FyNlt6@zGhc5E<Y;~P)BRZCeoQ](7%Vnm', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[10]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[7] … [truncated]
-               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[26]][kk[-gk[302]]]), kk[gk[75]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[75]];
+             for (DT(mm[tm[12]] = tm[2], mm[tm[129]] = 'xoWMVXYPG<~&,Hz{[F6uE#"m=*rynR!`O]3D}7tbJLSZ+c5)v/awQ_2s:9I@l%i?C01;ed.8BKA|g>qTf$UNhj4(^kp', mm[tm[162]] = "" + (mm[tm[1]] || ""), mm[tm[151]] = mm[tm[162]].length, mm[-tm[258]] = [], mm[tm[176]] = tm[1], mm[tm[29]] = tm[1], … [truncated]
+               if (mm[tm[40]] = mm[tm[129]].indexOf(mm[tm[162]][mm[tm[3]]]), mm[tm[40]] !== -tm[2])
+                 if (mm[tm[24]] < tm[1]) mm[tm[24]] = mm[tm[40]];
```

#### 1890. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14041` → after: `L13938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13938) · [Before (L14041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14041)

```diff
-                   qF(kk[gk[7]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   DT(mm[tm[24]] += mm[tm[40]] * tm[27], mm[tm[176]] |= mm[tm[24]] << mm[tm[29]], mm[tm[29]] += (mm[tm[24]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1891. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14043-L14046` → after: `L13940-L13943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13940-L13943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13940-L13943) · [Before (L14043-L14046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14043-L14046)

```diff
-                     qF(kk[gk[10]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[7]] = -gk[2]
-                 } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[10]])
+                     DT(mm[-tm[258]].push(mm[tm[176]] & tm[11]), mm[tm[176]] >>= tm[3], mm[tm[29]] -= tm[3])
+                   } while (mm[tm[29]] > tm[24]);
+                   mm[tm[24]] = -tm[2]
+                 } return mm[tm[24]] > -tm[2] && mm[-tm[258]].push((mm[tm[176]] | mm[tm[24]] << mm[tm[29]]) & tm[11]), dm(mm[-tm[258]])
```

#### 1892. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14050` → after: `L13947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13947) · [Before (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14050)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = gF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = mf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1893. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14052-L14070` → after: `L13949-L13951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13949-L13951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13949-L13951) · [Before (L14052-L14070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14052-L14070)

```diff
-           if (qF(kk[gk[35]][WF(gk[303]) + WF(gk[304])] = gk[58], lk()[WF(417)](pk, gk[1], IF(kk[gk[1]], kk[gk[2]], Nk) * kk[gk[25]][WF(418) + WF(419) + gk[281]][WF(420) + mF(421) + mF(422) + mF(423)]() * qk[mF(424) + mF(425) + gk[281]], gk[1]), kk[gk[10]][mF(426) + mF(427)](pk),  … [truncated]
-             function hF(...kk) {
-               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'M`VDfUZrIb|J7yO,GW";QqXHe%Lgzl}>~p3C5(9xT&v1YkuPwhc:Bd?0n_<EAaRm#^FjK]$)Ns/4S2[.!t+io=8*6{@', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[233]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[g … [truncated]
-                 if (kk[gk[305]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[305]] !== -gk[2])
-                   if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[305]];
-                   else {
-                     qF(kk[gk[52]] += kk[gk[305]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                     do {
-                       qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                     } while (kk[gk[20]] > gk[7]);
-                     kk[gk[52]] = -gk[2]
-                   } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
-             }
- 
-             function rF(...kk) {
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = hF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
- ... (3 more removed lines; see GitHub link above)
+           if (DT(mm[tm[20]][Tf(412) + Tf(413)] = tm[77], wm()[Tf(414)](Nm, tm[1], (Lm = [mm[tm[1]], mm[tm[2]], Cm], new Fm(Tf(415), Tf(416) + Tf(417), Tf(418) + Tf(419))[Tf(420)] * mm[tm[15]][Tf(tm[259]) + Tf(tm[260]) + tm[238]][Tf(423) + Tf(424) + Tf(425)]() * im[Tf(tm[259]) + T … [truncated]
+             const ff = mm[tm[15]][Tf(431) + Tf(432) + Tf(433)];
+             if (QT && mm[tm[15]][tm[272]] && !ff) {
```

#### 1894. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14072-L14074` → after: `L13953-L13955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13953-L13955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13953-L13955) · [Before (L14072-L14074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14072-L14074)

```diff
-                 for (qF(kk[gk[13]] = gk[2], kk[-gk[307]] = 'cA)_6Tbot^0JHDkrh~jOu2%xf.8YXvn;(?}"[C4*W!&L=FS1iswyal$p`+<gGmIZMP7zqQdKUEV:e3/N@{B|>,#R]59', kk[gk[111]] = "" + (kk[gk[1]] || ""), kk[gk[306]] = kk[gk[111]].length, kk[-gk[138]] = [], kk[gk[8]] = gk[1], kk[gk[120]] = gk … [truncated]
-                   if (kk[gk[28]] = kk[-gk[307]].indexOf(kk[gk[111]][kk[-gk[114]]]), kk[gk[28]] !== -gk[2])
-                     if (kk[gk[305]] < gk[1]) kk[gk[305]] = kk[gk[28]];
+                 for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = '0[<)wv|V$`JX*s+Ti5AzBE6H3ca8~ekMutKP/@NYD7!I}Ff#l;n:>GS.Rmrx%&9p^yLq]O4{j?U,Whdb=Z_gQoC12("', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[4]] = mm[tm[20]].length, mm[tm[34]] = [], mm[-tm[261]] = tm[1], mm[-tm[163]] = tm[1], … [truncated]
+                   if (mm[tm[97]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[262]]]), mm[tm[97]] !== -tm[2])
+                     if (mm[tm[122]] < tm[1]) mm[tm[122]] = mm[tm[97]];
```

#### 1895. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14076` → after: `L13957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13957) · [Before (L14076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14076)

```diff
-                       qF(kk[gk[305]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[305]] << kk[gk[120]], kk[gk[120]] += (kk[gk[305]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       DT(mm[tm[122]] += mm[tm[97]] * tm[27], mm[-tm[261]] |= mm[tm[122]] << mm[-tm[163]], mm[-tm[163]] += (mm[tm[122]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1896. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14078-L14081` → after: `L13959-L13962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13959-L13962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13959-L13962) · [Before (L14078-L14081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14078-L14081)

```diff
-                         qF(kk[-gk[138]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[120]] -= gk[11])
-                       } while (kk[gk[120]] > gk[7]);
-                       kk[gk[305]] = -gk[2]
-                     } return kk[gk[305]] > -gk[2] && kk[-gk[138]].push((kk[gk[8]] | kk[gk[305]] << kk[gk[120]]) & gk[12]), hk(kk[-gk[138]])
+                         DT(mm[tm[34]].push(mm[-tm[261]] & tm[11]), mm[-tm[261]] >>= tm[3], mm[-tm[163]] -= tm[3])
+                       } while (mm[-tm[163]] > tm[24]);
+                       mm[tm[122]] = -tm[2]
+                     } return mm[tm[122]] > -tm[2] && mm[tm[34]].push((mm[-tm[261]] | mm[tm[122]] << mm[-tm[163]]) & tm[11]), dm(mm[tm[34]])
```

#### 1897. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14085` → after: `L13966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13966) · [Before (L14085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14085)

```diff
-                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = MF(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                 return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = hf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1898. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14087` → after: `L13968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13968) · [Before (L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14087)

```diff
-               qF(kk[gk[1]][kI(434)][kI(435)](kk[gk[2]], kk[gk[25]], kk[gk[35]], kk[gk[35]][kI(436) + kI(437)] + gk[2]), kk[-gk[308]] = gk[58])
+               DT(mm[tm[1]][Af(434)][Af(435)](mm[tm[2]], mm[tm[15]], mm[tm[20]], mm[tm[20]][Af(436) + Af(437)] + tm[2]), mm[tm[4]] = tm[77])
```

#### 1899. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14090-L14092` → after: `L13971-L13973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13971-L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13971-L13973) · [Before (L14090-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14090-L14092)

```diff
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '&~/ZMlu+vf5A`=.BS{C(34,>ptDTe|7E?m9s"dF%}GYgW@)ac!nN;I[ok^ij]LH<wrQq*UxKy0P62JXRz8b#h_OV1$:', kk[gk[309]] = "" + (kk[gk[1]] || ""), kk[-gk[62]] = kk[gk[309]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], k … [truncated]
-                   if (kk[gk[65]] = kk[gk[2]].indexOf(kk[gk[309]][kk[gk[39]]]), kk[gk[65]] !== -gk[2])
-                     if (kk[gk[57]] < gk[1]) kk[gk[57]] = kk[gk[65]];
+                 for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = '7FheJgC:c?I_9u5V@%HEt+svw0LQb|&W[DB(a/N{ZMkx~]$Y=.Aj>;8z6o^rPOdTKiGmq"3*X}yU!2f1S)4lRp#n,`<', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[28]] = tm[1], mm[tm[9]] = tm[1], mm[ … [truncated]
+                   if (mm[tm[6]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[3]]]), mm[tm[6]] !== -tm[2])
+                     if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[6]];
```

#### 1900. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14094` → after: `L13975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13975) · [Before (L14094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14094)

```diff
-                       qF(kk[gk[57]] += kk[gk[65]] * gk[29], kk[gk[8]] |= kk[gk[57]] << kk[gk[53]], kk[gk[53]] += (kk[gk[57]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       DT(mm[tm[7]] += mm[tm[6]] * tm[27], mm[tm[28]] |= mm[tm[7]] << mm[tm[9]], mm[tm[9]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1901. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14096-L14099` → after: `L13977-L13980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13977-L13980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13977-L13980) · [Before (L14096-L14099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14096-L14099)

```diff
-                         qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
-                       } while (kk[gk[53]] > gk[7]);
-                       kk[gk[57]] = -gk[2]
-                     } return kk[gk[57]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[57]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
+                         DT(mm[tm[34]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[9]] -= tm[3])
+                       } while (mm[tm[9]] > tm[24]);
+                       mm[tm[7]] = -tm[2]
+                     } return mm[tm[7]] > -tm[2] && mm[tm[34]].push((mm[tm[28]] | mm[tm[7]] << mm[tm[9]]) & tm[11]), dm(mm[tm[34]])
```

#### 1902. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14103` → after: `L13984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13984) · [Before (L14103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14103)

```diff
-                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = FI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                 return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = af(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1903. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14105` → after: `L13986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13986) · [Before (L14105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14105)

```diff
-               kk[gk[1]][II(438)][II(439)](kk[gk[2]], kk[gk[25]], kk[gk[35]], gk[1])
+               mm[tm[1]][xf(438)][xf(439)](mm[tm[2]], mm[tm[15]], mm[tm[20]], tm[1])
```

#### 1904. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14109-L14111` → after: `L13990-L13992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13990-L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13990-L13992) · [Before (L14109-L14111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14109-L14111)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[242]] = '~"lEn,[9z)0NmK$UyR>D+.<|#3]f4k&}:2hXPSHLC@Mb!ZuB/p`evI?85_Oot1w6xdisGqj*gJ7AYcW%Q{aV(^TFr=;', kk[-gk[110]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[-gk[110]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], … [truncated]
-                 if (kk[gk[28]] = kk[gk[242]].indexOf(kk[-gk[110]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[309]] < gk[1]) kk[gk[309]] = kk[gk[28]];
+               for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = '1?[03%x`{w._*46+/>o&OA$n:J8<vtQuiTp@sIh|dS,GfKWje(5cBgbU!;9kR2}]=7Nq^a"ZCErL#PDHXl)myYzFV~M', mm[-tm[263]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[-tm[263]].length, mm[tm[38]] = [], mm[tm[8]] = tm[1], mm[-tm[108]] = tm[1],  … [truncated]
+                 if (mm[tm[6]] = mm[tm[2]].indexOf(mm[-tm[263]][mm[tm[69]]]), mm[tm[6]] !== -tm[2])
+                   if (mm[tm[24]] < tm[1]) mm[tm[24]] = mm[tm[6]];
```

#### 1905. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14113` → after: `L13994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13994) · [Before (L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14113)

```diff
-                     qF(kk[gk[309]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[309]] << kk[gk[53]], kk[gk[53]] += (kk[gk[309]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     DT(mm[tm[24]] += mm[tm[6]] * tm[27], mm[tm[8]] |= mm[tm[24]] << mm[-tm[108]], mm[-tm[108]] += (mm[tm[24]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1906. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14115-L14118` → after: `L13996-L13999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R13996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L13996-L13999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L13996-L13999) · [Before (L14115-L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14115-L14118)

```diff
-                       qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                     } while (kk[gk[53]] > gk[7]);
-                     kk[gk[309]] = -gk[2]
-                   } return kk[gk[309]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[309]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
+                       DT(mm[tm[38]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[-tm[108]] -= tm[3])
+                     } while (mm[-tm[108]] > tm[24]);
+                     mm[tm[24]] = -tm[2]
+                   } return mm[tm[24]] > -tm[2] && mm[tm[38]].push((mm[tm[8]] | mm[tm[24]] << mm[-tm[108]]) & tm[11]), dm(mm[tm[38]])
```

#### 1907. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14121-L14122` → after: `L14002-L14003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14002-L14003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14002-L14003) · [Before (L14121-L14122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14121-L14122)

```diff
-             function TI(kk) {
-               return typeof Rk[kk] === gk[14] ? Rk[kk] = XI(Uk[kk]) : Rk[kk]
+             function Df(...mm) {
+               return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = wf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1908. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14124` → after: `L14005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14005) · [Before (L14124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14124)

```diff
-             kk[gk[35]][TI(440) + TI(441)]++, kk[gk[10]][gk[310]][gk[2]] < gk[1] && (kk[gk[10]][gk[310]][gk[2]] = gk[1])
+             mm[tm[20]][Tf(440) + Df(441)]++, mm[tm[38]][tm[264]][tm[2]] < tm[1] && (mm[tm[38]][tm[264]][tm[2]] = tm[1])
```

#### 1909. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14127` → after: `L14008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14008) · [Before (L14127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14127)

```diff
-       } else {
+       } else if (mm[tm[20]][Tm(442) + Tm(443)] = tm[76], RT) {
```

#### 1910. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14129-L14131` → after: `L14010-L14012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14010-L14012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14010-L14012) · [Before (L14129-L14131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14129-L14131)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'f69~@HuRpZAB:FWMYvcS[m2#GnPdNT_I`4Ckb(/D{)>a=3El1Qg&q|x!8O.rhX}y^J*5o,iV$7wU"]<z+0sKje;t%?L', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[235]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[-gk[233]] = gk[1], kk[-g … [truncated]
-             if (kk[gk[75]] = kk[gk[43]].indexOf(kk[gk[35]][kk[gk[312]]]), kk[gk[75]] !== -gk[2])
-               if (kk[-gk[311]] < gk[1]) kk[-gk[311]] = kk[gk[75]];
+           for (DT(mm[tm[12]] = tm[2], mm[-tm[265]] = '{FtdGJEDC#O=%z+&lb8</S>y,UYIgM.0o_Peach2W")B*XHK^@T$QxNvsA]qn16|ur(Z4LijV:}wR5`3mk9~[?fp;7!', mm[tm[74]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[74]].length, mm[tm[34]] = [], mm[tm[8]] = tm[1], mm[tm[29]] = tm[1], mm[tm[7 … [truncated]
+             if (mm[-tm[266]] = mm[-tm[265]].indexOf(mm[tm[74]][mm[tm[89]]]), mm[-tm[266]] !== -tm[2])
+               if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[-tm[266]];
```

#### 1911. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14133` → after: `L14014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14014) · [Before (L14133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14133)

```diff
-                 qF(kk[-gk[311]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[-gk[311]] << kk[-gk[233]], kk[-gk[233]] += (kk[-gk[311]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[tm[7]] += mm[-tm[266]] * tm[27], mm[tm[8]] |= mm[tm[7]] << mm[tm[29]], mm[tm[29]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1912. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14135-L14138` → after: `L14016-L14019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14016-L14019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14016-L14019) · [Before (L14135-L14138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14135-L14138)

```diff
-                   qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[233]] -= gk[11])
-                 } while (kk[-gk[233]] > gk[7]);
-                 kk[-gk[311]] = -gk[2]
-               } return kk[-gk[311]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[-gk[311]] << kk[-gk[233]]) & gk[12]), hk(kk[gk[41]])
+                   DT(mm[tm[34]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[29]] -= tm[3])
+                 } while (mm[tm[29]] > tm[24]);
+                 mm[tm[7]] = -tm[2]
+               } return mm[tm[7]] > -tm[2] && mm[tm[34]].push((mm[tm[8]] | mm[tm[7]] << mm[tm[29]]) & tm[11]), dm(mm[tm[34]])
```

#### 1913. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14142` → after: `L14023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14023) · [Before (L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14142)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = iI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Rf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1914. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14144` → after: `L14025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14025) · [Before (L14144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14144)

```diff
-         kk[gk[35]][yI(442) + yI(443)] = gk[70], FF && kk[gk[1]][yI(444)][yI(445)](kk[gk[2]], kk[gk[25]], kk[gk[35]], gk[1])
+         mm[tm[1]][pf(444)][pf(445)](mm[tm[2]], mm[tm[15]], mm[tm[20]], tm[1])
```

#### 1915. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14146` → after: `L14027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14027) · [Before (L14146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14146)

```diff
-       if (kk[gk[35]][Fk(gk[286]) + gk[52]]) {
+       if (mm[tm[20]][Tm(tm[247]) + tm[7]]) {
```

#### 1916. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14148-L14150` → after: `L14029-L14031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14029-L14031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14029-L14031) · [Before (L14148-L14150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14148-L14150)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'kjWya_H+&/ZegnxXDYLMNUm90")>z]6JIv:A(OrS5Bh.;~uw1f[2tF`d!PlRpqTVC8i*Gc%E|4sQK37#b{$<?=@,}^o', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[26]].length, kk[gk[10]] = [], kk[-gk[232]] = gk[1], kk[gk[53]] = gk[1], kk[gk[ … [truncated]
-             if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[26]][kk[-gk[120]]]), kk[gk[28]] !== -gk[2])
-               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+           for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = 'JE{26mf?1KHOD80PQ~7g5iTk<G;3+Uh#4t(aF*od]x,&vy)[buANS>@z9wCs=Z%Bj"WRncIX_$!|/r:.^`VelLMpqY}', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[174]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[8]] = tm[1], mm[-tm[38]] = tm[1], mm[tm[24 … [truncated]
+             if (mm[tm[242]] = mm[tm[2]].indexOf(mm[tm[20]][mm[tm[3]]]), mm[tm[242]] !== -tm[2])
+               if (mm[tm[24]] < tm[1]) mm[tm[24]] = mm[tm[242]];
```

#### 1917. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14152` → after: `L14033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14033) · [Before (L14152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14152)

```diff
-                 qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[-gk[232]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[tm[24]] += mm[tm[242]] * tm[27], mm[tm[8]] |= mm[tm[24]] << mm[-tm[38]], mm[-tm[38]] += (mm[tm[24]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1918. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14154-L14157` → after: `L14035-L14038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14035-L14038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14035-L14038) · [Before (L14154-L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14154-L14157)

```diff
-                   qF(kk[gk[10]].push(kk[-gk[232]] & gk[12]), kk[-gk[232]] >>= gk[11], kk[gk[53]] -= gk[11])
-                 } while (kk[gk[53]] > gk[7]);
-                 kk[gk[7]] = -gk[2]
-               } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[232]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
+                   DT(mm[tm[34]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[-tm[38]] -= tm[3])
+                 } while (mm[-tm[38]] > tm[24]);
+                 mm[tm[24]] = -tm[2]
+               } return mm[tm[24]] > -tm[2] && mm[tm[34]].push((mm[tm[8]] | mm[tm[24]] << mm[-tm[38]]) & tm[11]), dm(mm[tm[34]])
```

#### 1919. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14160-L14161` → after: `L14041-L14042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14041-L14042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14041-L14042) · [Before (L14160-L14161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14160-L14161)

```diff
-         function aI(...kk) {
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = lI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+         function of(...mm) {
+           return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Ef(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1920. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14163` → after: `L14044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14044) · [Before (L14163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14163)

```diff
-         kk[gk[10]][Fk(gk[249]) + Fk(gk[250]) + Fk(gk[251])] = gk[1];
+         mm[tm[38]][of(446) + of(447) + of(448)] = tm[1];
```

#### 1921. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14165-L14167` → after: `L14046-L14047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14046-L14047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14046-L14047) · [Before (L14165-L14167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14165-L14167)

```diff
-           LI = gk[70];
-         if (kk[gk[25]][aI(446) + gk[52]] || kk[gk[7]]) qF(qI = gk[2], LI = kk[gk[7]] || !kk[gk[35]][aI(447) + aI(448) + aI(449) + aI(450)]);
-         else if (kk[gk[25]][aI(451) + aI(452)]) {
+           Yf = tm[76];
+         if (mm[tm[15]][of(449) + tm[7]] || mm[tm[24]]) {
```

#### 1922. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14169-L14171` → after: `L14049-L14051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14049-L14051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14049-L14051) · [Before (L14169-L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14169-L14171)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'P$BJAWMInFx`a&^49?opuRSmCrv<0+>;lVUh=*Z3,Y_#68!KiLd[:N]cb()Tsqw2"|/D%ge7{1GjE~QfH5.@OtXy}kz', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[-gk[313]] = gk[1], kk[gk[20]] = gk[1], kk[gk[ … [truncated]
-               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[314]]]), kk[gk[75]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[75]];
+             for (DT(mm[tm[12]] = tm[2], mm[-tm[266]] = 'NZAbq]fYimzt8X#KTnl>BUC"!WpDE0L$uk4Rc;*sr1|S_e<}=F5,oQMJ6a@Gh)v^PIVg~w:H[jd`%3(y2?7+9x&./{O', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[137]] = mm[tm[20]].length, mm[tm[62]] = [], mm[tm[28]] = tm[1], mm[tm[267]] = tm[1], mm … [truncated]
+               if (mm[tm[6]] = mm[-tm[266]].indexOf(mm[tm[20]][mm[-tm[268]]]), mm[tm[6]] !== -tm[2])
+                 if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[6]];
```

#### 1923. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14173` → after: `L14053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14053) · [Before (L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14173)

```diff
-                   qF(kk[gk[7]] += kk[gk[75]] * gk[29], kk[-gk[313]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   DT(mm[tm[7]] += mm[tm[6]] * tm[27], mm[tm[28]] |= mm[tm[7]] << mm[tm[267]], mm[tm[267]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1924. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14175-L14176` → after: `L14055-L14056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14055-L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14055-L14056) · [Before (L14175-L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14175-L14176)

```diff
-                     qF(kk[gk[41]].push(kk[-gk[313]] & gk[12]), kk[-gk[313]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
+                     DT(mm[tm[62]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[267]] -= tm[3])
+                   } while (mm[tm[267]] > tm[24]);
```

#### 1925. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14178` → after: `L14058-L14076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14058-L14076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14058-L14076) · [Before (L14178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14178)

```diff
-                 } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[-gk[313]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                 } return mm[tm[7]] > -tm[2] && mm[tm[62]].push((mm[tm[28]] | mm[tm[7]] << mm[tm[267]]) & tm[11]), dm(mm[tm[62]])
+           }
+ 
+           function Vf(...mm) {
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = jf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
+           }
+           DT(Of = tm[2], Yf = mm[tm[24]] || !mm[tm[20]][Vf(450) + Vf(451) + Vf(452) + Vf(453)])
+         } else if (mm[tm[15]][of(454) + of(455)]) {
+           function If(...mm) {
+             for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = 'J6@{,1x%:A(yP$7i8Ysc.ot#9k2F0Zm;^5Efg[w|Ip4u+`!rN&V/]3*?}lzeS_L~HbUv=TBMqOK<CQDdGhX"na)RWj>', mm[tm[13]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[13]].length, mm[tm[34]] = [], mm[tm[8]] = tm[1], mm[tm[29]] = tm[1], mm[tm[26 … [truncated]
+               if (mm[tm[6]] = mm[tm[2]].indexOf(mm[tm[13]][mm[-tm[173]]]), mm[tm[6]] !== -tm[2])
+                 if (mm[tm[269]] < tm[1]) mm[tm[269]] = mm[tm[6]];
+                 else {
+                   DT(mm[tm[269]] += mm[tm[6]] * tm[27], mm[tm[8]] |= mm[tm[269]] << mm[tm[29]], mm[tm[29]] += (mm[tm[269]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
+                   do {
+                     DT(mm[tm[34]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[29]] -= tm[3])
+ ... (3 more added lines; see GitHub link above)
```

#### 1926. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14182` → after: `L14080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14080) · [Before (L14182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14182)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ZI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = If(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1927. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14184` → after: `L14082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14082) · [Before (L14184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14184)

```diff
-           qF(qI = -gk[2], LI = !kk[gk[35]][aI(453) + aI(454) + aI(455) + jI(456)])
+           DT(Of = -tm[2], Yf = !mm[tm[20]][Kf(456) + Kf(457) + Kf(458)])
```

#### 1928. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14186-L14188` → after: `L14084-L14086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14084-L14086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14084-L14086) · [Before (L14186-L14188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14186-L14188)

```diff
-         kk[gk[35]][aI(gk[315]) + gk[316]][aI(gk[318]) + aI(gk[319])] = kk[gk[10]][gk[310]][gk[2]];
-         const tI = (gk[1], Sk[gk[53]])(kk[gk[35]][aI(gk[315]) + gk[316]], kk[gk[25]][gk[317]] !== gk[1], qI, LI);
-         qF(lk()[aI(460)](pk, gk[1], tI, gk[1]), kk[gk[10]][aI(461) + aI(462)](pk), kk[gk[10]][gk[310]][gk[2]] = kk[gk[35]][aI(gk[315]) + gk[316]][aI(gk[318]) + aI(gk[319])], kk[gk[25]][aI(463)][aI(464) + aI(465) + aI(466)](aI(467) + aI(468) + aI(469), gk[2] + kk[gk[35]][aI(gk[315 … [truncated]
+         mm[tm[20]][of(tm[270]) + tm[271]][of(tm[273]) + of(tm[274])] = mm[tm[38]][tm[264]][tm[2]];
+         const qf = (tm[1], zm[tm[28]])(mm[tm[20]][of(tm[270]) + tm[271]], mm[tm[15]][tm[272]] !== tm[1], Of, Yf);
+         DT(wm()[of(462)](Nm, tm[1], qf, tm[1]), mm[tm[38]][of(463) + of(464)](Nm), mm[tm[38]][tm[264]][tm[2]] = mm[tm[20]][of(tm[270]) + tm[271]][of(tm[273]) + of(tm[274])], mm[tm[15]][of(465)][of(466) + of(467) + of(468)](of(469) + of(470) + of(471), tm[2] + mm[tm[20]][of(tm[270 … [truncated]
```

#### 1929. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14191-L14193` → after: `L14089-L14091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14089-L14091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14089-L14091) · [Before (L14191-L14193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14191-L14193)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = ',EHrUJTSGnbu:P]+ta(C3?Q=p}5LsI$"%Zz{@2hi0Yvg6)<d_OlwkXm[>1~!Myj|oBef;*8N&DF9AxR.`WV^#Kq7c/4', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[-gk[320]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[32 … [truncated]
-             if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-               if (kk[gk[321]] < gk[1]) kk[gk[321]] = kk[gk[28]];
+           for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = 'a}?1fx0$)#iDC3B%PXrWZ5~jw:b=6nk!eYIgQEOdNp+^q;v82>9S{o/L7mGARslhH]_J*zK,F<yV|`tTUu&(c4"@[.M', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[275]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[28]] = tm[1], mm[tm[43]] = tm[1], mm[tm[7 … [truncated]
+             if (mm[-tm[89]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[69]]]), mm[-tm[89]] !== -tm[2])
+               if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[-tm[89]];
```

#### 1930. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14195` → after: `L14093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14093) · [Before (L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14195)

```diff
-                 qF(kk[gk[321]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[321]] << kk[gk[20]], kk[gk[20]] += (kk[gk[321]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[tm[7]] += mm[-tm[89]] * tm[27], mm[tm[28]] |= mm[tm[7]] << mm[tm[43]], mm[tm[43]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1931. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14197-L14200` → after: `L14095-L14098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14095-L14098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14095-L14098) · [Before (L14197-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14197-L14200)

```diff
-                   qF(kk[-gk[320]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                 } while (kk[gk[20]] > gk[7]);
-                 kk[gk[321]] = -gk[2]
-               } return kk[gk[321]] > -gk[2] && kk[-gk[320]].push((kk[gk[8]] | kk[gk[321]] << kk[gk[20]]) & gk[12]), hk(kk[-gk[320]])
+                   DT(mm[tm[34]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[43]] -= tm[3])
+                 } while (mm[tm[43]] > tm[24]);
+                 mm[tm[7]] = -tm[2]
+               } return mm[tm[7]] > -tm[2] && mm[tm[34]].push((mm[tm[28]] | mm[tm[7]] << mm[tm[43]]) & tm[11]), dm(mm[tm[34]])
```

#### 1932. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14204` → after: `L14102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14102) · [Before (L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14204)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = eI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Qf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1933. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14206` → after: `L14104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14104) · [Before (L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14206)

```diff
-         qF(kk[gk[35]][wI(470) + gk[316]].reset(), kk[gk[25]][wI(471)][wI(472) + wI(473) + wI(474)](wI(475) + wI(476) + wI(477), gk[2]))
+         DT(mm[tm[20]][Tm(472) + tm[271]].reset(), mm[tm[15]][nf(473)][nf(474) + nf(475) + nf(476)](nf(477) + nf(478) + nf(479), tm[2]))
```

#### 1934. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14208-L14210` → after: `L14106-L14108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14106-L14108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14106-L14108) · [Before (L14208-L14210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14208-L14210)

```diff
-       kk[gk[41]] = gk[70];
-       const QF = Pk[gk[1]] || Kk[gk[1]] && kk[gk[10]][Fk(gk[329]) + gk[52]][gk[1]] !== gk[1] && (fk > gk[1] || qk[Fk(gk[322]) + Fk(gk[323]) + Fk(gk[324]) + gk[325]] > gk[1] && Math[Fk(gk[330])](kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[1]]) >= qk[Fk(gk[331]) + Fk(gk[ … [truncated]
-         sF = Pk[gk[35]] || Kk[gk[35]] && kk[gk[10]][Fk(gk[329]) + gk[52]][gk[35]] !== gk[1] && (fk > gk[1] || qk[Fk(484) + Fk(485) + Fk(gk[260])] > gk[1] && Math[Fk(gk[330])](kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[35]]) >= qk[Fk(gk[331]) + Fk(gk[332]) + Fk(gk[333] … [truncated]
+       mm[-tm[46]] = tm[76];
+       const nT = Im[tm[1]] || Km[tm[1]] && mm[tm[38]][Tm(tm[283]) + tm[7]][tm[1]] !== tm[1] && (lm > tm[1] || im[Tm(tm[276]) + Tm(tm[277]) + Tm(tm[278]) + tm[279]] > tm[1] && Math[Tm(tm[284])](mm[tm[20]][Tm(tm[280]) + Tm(tm[281]) + Tm(tm[282])][tm[1]]) >= im[Tm(482) + Tm(483) + T … [truncated]
+         JT = Im[tm[20]] || Km[tm[20]] && mm[tm[38]][Tm(tm[283]) + tm[7]][tm[20]] !== tm[1] && (lm > tm[1] || im[Tm(tm[276]) + Tm(tm[277]) + Tm(tm[278]) + tm[279]] > tm[1] && Math[Tm(tm[284])](mm[tm[20]][Tm(tm[280]) + Tm(tm[281]) + Tm(tm[282])][tm[20]]) >= im[Tm(486) + Tm(487) + T … [truncated]
```

#### 1935. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14212-L14215` → after: `L14110-L14113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14110-L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14110-L14113) · [Before (L14212-L14215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14212-L14215)

```diff
-         const HI = gk[20],
-           JI = gk[86],
-           xI = gk[92];
-         if (kk[gk[10]][gk[348]](), QF) {
+         const Jf = tm[9],
+           zf = tm[155],
+           Zf = tm[115];
+         if (mm[tm[38]][tm[298]](), nT) {
```

#### 1936. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14217-L14219` → after: `L14115-L14117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14115-L14117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14115-L14117) · [Before (L14217-L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14217-L14219)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'u|&5!.qHAVXeb/1Jny$S)vw@^z~aWg7Zxc6[R(UB,]9mpM*E"L{KTYj=PsCGF<`od0O?:;Df28l}It3_+QNi4%kr>h#', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[-gk[83]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk[gk … [truncated]
-               if (kk[gk[78]] = kk[gk[43]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[gk[78]] !== -gk[2])
-                 if (kk[gk[98]] < gk[1]) kk[gk[98]] = kk[gk[78]];
+             for (DT(mm[tm[12]] = tm[2], mm[tm[263]] = 'NJOaelQcdTqSDAsfMCkgthKBFn6$&_~@uv?{*:47YHE]PX!Rb2po8^)9Lmx=WI;|U30<yG`i(+jz1>Z#/[V,r".w5}%', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[20]].length, mm[tm[38]] = [], mm[-tm[21]] = tm[1], mm[tm[29]] = tm[1], mm[t … [truncated]
+               if (mm[tm[40]] = mm[tm[263]].indexOf(mm[tm[20]][mm[tm[3]]]), mm[tm[40]] !== -tm[2])
+                 if (mm[tm[285]] < tm[1]) mm[tm[285]] = mm[tm[40]];
```

#### 1937. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14221` → after: `L14119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14119) · [Before (L14221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14221)

```diff
-                   qF(kk[gk[98]] += kk[gk[78]] * gk[29], kk[gk[50]] |= kk[gk[98]] << kk[gk[53]], kk[gk[53]] += (kk[gk[98]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   DT(mm[tm[285]] += mm[tm[40]] * tm[27], mm[-tm[21]] |= mm[tm[285]] << mm[tm[29]], mm[tm[29]] += (mm[tm[285]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1938. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14223-L14226` → after: `L14121-L14124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14121-L14124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14121-L14124) · [Before (L14223-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14223-L14226)

```diff
-                     qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                   } while (kk[gk[53]] > gk[7]);
-                   kk[gk[98]] = -gk[2]
-                 } return kk[gk[98]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[98]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
+                     DT(mm[tm[38]].push(mm[-tm[21]] & tm[11]), mm[-tm[21]] >>= tm[3], mm[tm[29]] -= tm[3])
+                   } while (mm[tm[29]] > tm[24]);
+                   mm[tm[285]] = -tm[2]
+                 } return mm[tm[285]] > -tm[2] && mm[tm[38]].push((mm[-tm[21]] | mm[tm[285]] << mm[tm[29]]) & tm[11]), dm(mm[tm[38]])
```

#### 1939. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14230` → after: `L14128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14128) · [Before (L14230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14230)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = PI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = kf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1940. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14232-L14234` → after: `L14130-L14132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14130-L14132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14130-L14132) · [Before (L14232-L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14232-L14234)

```diff
-           const QI = kk[gk[35]][KI(gk[336]) + KI(gk[337]) + KI(gk[338])][gk[1]] <= gk[1] ? gk[2] : -gk[2],
-             sI = Math[KI(489)](xI, Math[KI(490)](kk[gk[35]][KI(gk[336]) + KI(gk[337]) + KI(gk[338])][gk[1]]));
-           qF(kk[gk[10]][gk[310]][gk[1]] = QI * sI * (Pk[gk[1]] ? gk[2] : Bk), aF(kk[gk[1]], Pk[gk[1]], [kk[gk[10]][KI(491) + gk[52]][gk[1]], gk[1], gk[1]]))
+           const Sf = mm[tm[20]][Tm(tm[280]) + Tm(tm[281]) + Tm(tm[282])][tm[1]] <= tm[1] ? tm[2] : -tm[2],
+             ef = Math[Tm(tm[336])](Zf, Math[Tm(tm[284])](mm[tm[20]][Tm(tm[280]) + Tm(tm[281]) + bf(490)][tm[1]]));
+           DT(mm[tm[38]][tm[264]][tm[1]] = Sf * ef * (Im[tm[1]] ? tm[2] : Mm), wT(mm[tm[1]], Im[tm[1]], [mm[tm[38]][bf(491) + tm[7]][tm[1]], tm[1], tm[1]]))
```

#### 1941. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14238-L14240` → after: `L14136-L14138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14136-L14138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14136-L14138) · [Before (L14238-L14240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14238-L14240)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'bui3NdDf>P<5*=RkEcT}gm7@U9L.v;Kw!"nV/:)Or2pMGa_+s&tYqF`A~0Q|1I8[,4%oXeSBC(ZjHJy#xlW]$6z?{^h', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[-gk[49]] = gk[1], kk[gk[52 … [truncated]
-               if (kk[gk[105]] = kk[gk[2]].indexOf(kk[gk[26]][kk[gk[11]]]), kk[gk[105]] !== -gk[2])
-                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[105]];
+             for (DT(mm[tm[12]] = tm[2], mm[tm[287]] = 'aDXp8(.m:kP)LHu>Bn$/jwYEoh%#MJR]F~l=t7xdfz`r[},_UvQ"KZ1s60TegW^|G?@95!SA+yi;O*<&32qCVN4Icb{', mm[tm[59]] = "" + (mm[tm[1]] || ""), mm[-tm[286]] = mm[tm[59]].length, mm[tm[34]] = [], mm[tm[8]] = tm[1], mm[tm[9]] = tm[1], mm[-t … [truncated]
+               if (mm[-tm[157]] = mm[tm[287]].indexOf(mm[tm[59]][mm[-tm[189]]]), mm[-tm[157]] !== -tm[2])
+                 if (mm[-tm[288]] < tm[1]) mm[-tm[288]] = mm[-tm[157]];
```

#### 1942. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14242` → after: `L14140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14140) · [Before (L14242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14242)

```diff
-                   qF(kk[gk[52]] += kk[gk[105]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[-gk[49]], kk[-gk[49]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   DT(mm[-tm[288]] += mm[-tm[157]] * tm[27], mm[tm[8]] |= mm[-tm[288]] << mm[tm[9]], mm[tm[9]] += (mm[-tm[288]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1943. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14244-L14247` → after: `L14142-L14145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14142-L14145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14142-L14145) · [Before (L14244-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14244-L14247)

```diff
-                     qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[49]] -= gk[11])
-                   } while (kk[-gk[49]] > gk[7]);
-                   kk[gk[52]] = -gk[2]
-                 } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[-gk[49]]) & gk[12]), hk(kk[gk[41]])
+                     DT(mm[tm[34]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[9]] -= tm[3])
+                   } while (mm[tm[9]] > tm[24]);
+                   mm[-tm[288]] = -tm[2]
+                 } return mm[-tm[288]] > -tm[2] && mm[tm[34]].push((mm[tm[8]] | mm[-tm[288]] << mm[tm[9]]) & tm[11]), dm(mm[tm[34]])
```

#### 1944. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14251` → after: `L14149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14149) · [Before (L14251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14251)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = VI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Nf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1945. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14253-L14255` → after: `L14151-L14171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14151-L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14151-L14171) · [Before (L14253-L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14253-L14255)

```diff
-           const SI = kk[gk[35]][zI(gk[339]) + zI(gk[340]) + zI(gk[341])][gk[2]] <= gk[1] ? gk[2] : -gk[2];
-           let oI = Math[zI(495)](HI, Math[zI(496)](kk[gk[35]][zI(gk[339]) + zI(gk[340]) + zI(gk[341])][gk[2]]));
-           oI < JI && kk[gk[25]][zI(497) + gk[52]] && SI === gk[2] && (oI = Math[zI(498)](oI + gk[153] / oI + 2.3, JI)), KF && kk[gk[35]][zI(gk[342])] && qF(kk[gk[35]][zI(gk[342])] = gk[70], oI += gk[50], kk[gk[41]] = gk[58]), qF(kk[gk[10]][gk[310]][gk[2]] = SI * oI * (Pk[gk[2]] ? … [truncated]
+           const Xf = mm[tm[20]][Tm(tm[280]) + Gf(tm[289]) + Gf(tm[290])][tm[2]] <= tm[1] ? tm[2] : -tm[2];
+           let Pf = Math[Gf(494)](Jf, Math[Gf(495)](mm[tm[20]][Gf(496) + Gf(tm[289]) + Gf(tm[290])][tm[2]]));
+           if (Pf < zf && mm[tm[15]][Gf(497) + tm[7]] && Xf === tm[2] && (Pf = Math[Gf(498)](Pf + tm[148] / Pf + 2.3, zf)), QT && mm[tm[20]][Gf(tm[291])] && DT(mm[tm[20]][Gf(tm[291])] = tm[76], Pf += tm[8], mm[-tm[46]] = tm[77]), mm[tm[38]][tm[264]][tm[2]] = Xf * Pf * (Im[tm[2]] ? … [truncated]
+             function Hf(...mm) {
+               for (DT(mm[tm[12]] = tm[2], mm[tm[292]] = '&drShgZXNLC:18pt@Jfj%!sBA|HVlO"KW)TM=[;G7c03^wQ>#~i{D?Y`(_u.k]q5mxn$a+yvR4*ob2/9e},zUEIP<F6', mm[tm[121]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[121]].length, mm[tm[168]] = [], mm[tm[28]] = tm[1], mm[tm[9]] = tm[1], m … [truncated]
+                 if (mm[tm[6]] = mm[tm[292]].indexOf(mm[tm[121]][mm[tm[3]]]), mm[tm[6]] !== -tm[2])
+                   if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[6]];
+                   else {
+                     DT(mm[tm[7]] += mm[tm[6]] * tm[27], mm[tm[28]] |= mm[tm[7]] << mm[tm[9]], mm[tm[9]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
+                     do {
+                       DT(mm[tm[168]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[9]] -= tm[3])
+                     } while (mm[tm[9]] > tm[24]);
+                     mm[tm[7]] = -tm[2]
+                   } return mm[tm[7]] > -tm[2] && mm[tm[168]].push((mm[tm[28]] | mm[tm[7]] << mm[tm[9]]) & tm[11]), dm(mm[tm[168]])
+             }
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 1946. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14259-L14261` → after: `L14175-L14177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14175-L14177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14175-L14177) · [Before (L14259-L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14259-L14261)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'CW1zBR/)?tKLdNr*xw+vy:M!4cGV26~A"T8Ei9}n#k;(ujHP&{3q7pYl.]Q`a[I^_Fg=$JX5@O|0,hb>%DsS<UeZmof', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], kk[gk[52 … [truncated]
-               if (kk[gk[75]] = kk[gk[43]].indexOf(kk[gk[26]][kk[gk[39]]]), kk[gk[75]] !== -gk[2])
-                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
+             for (DT(mm[tm[12]] = tm[2], mm[tm[98]] = 'I1qQBntJPGraKepDAX@Z&)H:/;WbT>Ck49.]M*<xcsYm(SF~"iRlOUdg$N%_+{6,w|`V!E8jL?2vyo}7h#=f30u^[z5', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[4]] = mm[tm[20]].length, mm[tm[38]] = [], mm[tm[8]] = tm[1], mm[tm[9]] = tm[1], mm[tm[7]] … [truncated]
+               if (mm[tm[6]] = mm[tm[98]].indexOf(mm[tm[20]][mm[tm[293]]]), mm[tm[6]] !== -tm[2])
+                 if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[6]];
```

#### 1947. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14263` → after: `L14179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14179) · [Before (L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14263)

```diff
-                   qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   DT(mm[tm[7]] += mm[tm[6]] * tm[27], mm[tm[8]] |= mm[tm[7]] << mm[tm[9]], mm[tm[9]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1948. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14265-L14268` → after: `L14181-L14184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14181-L14184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14181-L14184) · [Before (L14265-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14265-L14268)

```diff
-                     qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[52]] = -gk[2]
-                 } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                     DT(mm[tm[38]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[9]] -= tm[3])
+                   } while (mm[tm[9]] > tm[24]);
+                   mm[tm[7]] = -tm[2]
+                 } return mm[tm[7]] > -tm[2] && mm[tm[38]].push((mm[tm[8]] | mm[tm[7]] << mm[tm[9]]) & tm[11]), dm(mm[tm[38]])
```

#### 1949. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14272` → after: `L14188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14188) · [Before (L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14272)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = vI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Cf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1950. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14274-L14294` → after: `L14190-L14192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14190-L14192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14190-L14192) · [Before (L14274-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14274-L14294)

```diff
-           const OI = kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[35]] <= gk[1] ? gk[2] : -gk[2],
-             nI = Math[Fk(gk[412])](xI, Math[EI(504)](kk[gk[35]][EI(505) + EI(506) + EI(507)][gk[35]]));
-           qF(kk[gk[10]][gk[310]][gk[35]] = OI * nI * (Pk[gk[35]] ? gk[2] : Bk), aF(kk[gk[1]], Pk[gk[35]], [gk[1], gk[1], kk[gk[10]][EI(508) + gk[52]][gk[35]]]))
-         }
-       } else FF && (kk[gk[35]][Fk(509)] = gk[58]);
-       if (qF(yF(kk[gk[1]], kk[gk[2]], qk[Fk(510)], kk[gk[10]][Fk(gk[329]) + gk[52]][gk[2]], kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[2]]), kk[gk[344]] = gk[1]), kk[gk[10]][Fk(gk[329]) + gk[52]][gk[1]] !== gk[1]) {
-         function GI(...kk) {
-           for (qF(kk[gk[13]] = gk[2], kk[gk[345]] = 'Pl*DZJ25>04C{[_^BQjX`~(hx3qE}+=#?z7aem|;):1u&,86$%v/w.y@]"9!<pObrkoMgiWLUnHdGRfSNFcYAtITKsV', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[-gk[77]] = [], kk[gk[66]] = gk[1], kk[-gk[92]] = gk[1], kk[gk[ … [truncated]
-             if (kk[gk[28]] = kk[gk[345]].indexOf(kk[gk[35]][kk[-gk[63]]]), kk[gk[28]] !== -gk[2])
-               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
-               else {
-                 qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[66]] |= kk[gk[7]] << kk[-gk[92]], kk[-gk[92]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                 do {
-                   qF(kk[-gk[77]].push(kk[gk[66]] & gk[12]), kk[gk[66]] >>= gk[11], kk[-gk[92]] -= gk[11])
-                 } while (kk[-gk[92]] > gk[7]);
-                 kk[gk[7]] = -gk[2]
- ... (5 more removed lines; see GitHub link above)
+           const sf = mm[tm[20]][rf(tm[294]) + rf(tm[295]) + rf(tm[296])][tm[20]] <= tm[1] ? tm[2] : -tm[2],
+             lf = Math[rf(507)](Zf, Math[rf(508)](mm[tm[20]][rf(tm[294]) + rf(tm[295]) + rf(tm[296])][tm[20]]));
+           DT(mm[tm[38]][tm[264]][tm[20]] = sf * lf * (Im[tm[20]] ? tm[2] : Mm), wT(mm[tm[1]], Im[tm[20]], [tm[1], tm[1], mm[tm[38]][rf(509) + tm[7]][tm[20]]]))
```

#### 1951. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14296-L14298` → after: `L14194-L14195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14194-L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14194-L14195) · [Before (L14296-L14298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14296-L14298)

```diff
-         kk[gk[344]] = kk[gk[35]][pI(511) + pI(gk[88]) + pI(513)][gk[1]]
-       }
-       if (kk[gk[10]][Fk(gk[329]) + gk[52]][gk[35]] !== gk[1] && Math[Fk(gk[330])](kk[gk[35]][Fk(gk[326]) + Fk(gk[327]) + Fk(gk[328])][gk[35]]) > Math[Fk(gk[330])](kk[gk[344]])) {
+       } else RT && (mm[tm[20]][Tm(510)] = tm[77]);
+       if (DT(aT(mm[tm[1]], mm[tm[2]], im[Tm(511)], mm[tm[38]][Tm(tm[283]) + tm[7]][tm[2]], mm[tm[20]][Tm(tm[280]) + Tm(tm[281]) + Tm(tm[282])][tm[2]]), mm[tm[297]] = tm[1]), mm[tm[38]][Tm(tm[283]) + tm[7]][tm[1]] !== tm[1] && (mm[tm[297]] = mm[tm[20]][Tm(tm[280]) + Tm(tm[281]) +  … [truncated]
```

#### 1952. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14300-L14302` → after: `L14197-L14199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14197-L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14197-L14199) · [Before (L14300-L14302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14300-L14302)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'EDKhuPSQcJVd3iFfmGX<t4eR0WoM:jn6{xq)`Z7%.&INH$ga+>=Cp;5_Bv/s~OU*zAYLTbr(wk[]l}@#?9^8,12|"y!', kk[-gk[346]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[346]].length, kk[-gk[347]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
-             if (kk[gk[46]] = kk[gk[43]].indexOf(kk[-gk[346]][kk[gk[39]]]), kk[gk[46]] !== -gk[2])
-               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[46]];
+           for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = '"]6?^`[3}b1Gr_<~qxA*pt$,&WRnSOfci7ZKm2yd@|z8UgeJ)/:wHN%Do5>aL9lEBhjF4XukCs!V=M(.0I+P#Tv{;QY', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[4]] = mm[tm[20]].length, mm[-tm[254]] = [], mm[tm[8]] = tm[1], mm[tm[29]] = tm[1], mm[tm[7] … [truncated]
+             if (mm[tm[40]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[3]]]), mm[tm[40]] !== -tm[2])
+               if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[40]];
```

#### 1953. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14304` → after: `L14201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14201) · [Before (L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14304)

```diff
-                 qF(kk[gk[7]] += kk[gk[46]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[tm[7]] += mm[tm[40]] * tm[27], mm[tm[8]] |= mm[tm[7]] << mm[tm[29]], mm[tm[29]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1954. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14306-L14307` → after: `L14203-L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14203-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14203-L14204) · [Before (L14306-L14307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14306-L14307)

```diff
-                   qF(kk[-gk[347]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
-                 } while (kk[gk[53]] > gk[7]);
+                   DT(mm[-tm[254]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[29]] -= tm[3])
+                 } while (mm[tm[29]] > tm[24]);
```

#### 1955. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14309-L14329` → after: `L14206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14206) · [Before (L14309-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14309-L14329)

```diff
-               } return kk[gk[7]] > -gk[2] && kk[-gk[347]].push((kk[gk[8]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[-gk[347]])
-         }
- 
-         function bI(...kk) {
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = uI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-         }
-         kk[gk[344]] = kk[gk[35]][bI(514) + bI(515) + bI(516)][gk[35]]
-       }
-       if (yF(kk[gk[1]], kk[gk[2]], qk[Fk(517)], kk[gk[10]][Fk(gk[329]) + gk[52]][gk[1]] || kk[gk[10]][Fk(gk[329]) + gk[52]][gk[35]], kk[gk[344]]), kk[-gk[308]] && !kk[gk[41]] && lF(kk[gk[1]], vk[gk[53]][Fk(518) + "op"], [gk[1], -gk[2], gk[1]]), kk[gk[35]][Fk(519)] = Vk, Ek > gk[1 … [truncated]
-       else {
-         function RI(...kk) {
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = '75*%}xw[=z6f!+.9`mavPVZ|@i?jBdS]$D)^Fcu>,tylYC"0#nT3JqIMk;e_o41~8L&EA<{2Gg:U(rHRWbNKphXO/Qs', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk[52]] … [truncated]
-             if (kk[gk[75]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
-               else {
-                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[gk[20]], kk[gk[20]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
- ... (5 more removed lines; see GitHub link above)
+               } return mm[tm[7]] > -tm[2] && mm[-tm[254]].push((mm[tm[8]] | mm[tm[7]] << mm[tm[29]]) & tm[11]), dm(mm[-tm[254]])
```

#### 1956. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14333` → after: `L14210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14210) · [Before (L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14333)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = RI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Mf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1957. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14335` → after: `L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14212) · [Before (L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14335)

```diff
-         FF && !kk[gk[35]][UI(521) + UI(522) + UI(523)] && Vk && lF(kk[gk[1]], vk[gk[53]][UI(524) + gk[41]], [gk[1], -gk[2], gk[1]])
+         mm[tm[297]] = mm[tm[20]][Tm(tm[280]) + Tm(tm[281]) + uf(tm[159])][tm[20]]
```

#### 1958. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14337` → after: `L14214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14214) · [Before (L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14337)

```diff
-       if (!kk[gk[35]][Fk(gk[286]) + gk[52]]) {
+       if (aT(mm[tm[1]], mm[tm[2]], im[Tm(513)], mm[tm[38]][Tm(tm[283]) + tm[7]][tm[1]] || mm[tm[38]][Tm(tm[283]) + tm[7]][tm[20]], mm[tm[297]]), mm[tm[4]] && !mm[-tm[46]] && xT(mm[tm[1]], Zm[tm[29]][Tm(514) + "op"], [tm[1], -tm[2], tm[1]]), mm[tm[20]][Tm(515)] = Jm, km > tm[1] && … [truncated]
```

#### 1959. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14340-L14342` → after: `L14217-L14219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14217-L14219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14217-L14219) · [Before (L14340-L14342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14340-L14342)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = ':AEUmaPZg_4fVG7i$h(&*@BC5ton~Suds=yDIQq?JMr>F|]2<HxpO^kKw%.W,69[z1evl{N+"0R/cL;jb#T!8X)3}Y`', kk[-gk[90]] = "" + (kk[gk[1]] || ""), kk[gk[349]] = kk[-gk[90]].length, kk[gk[10]] = [], kk[-gk[352]] = gk[1], kk[-gk[302]] = gk[1], … [truncated]
-               if (kk[gk[351]] = kk[gk[43]].indexOf(kk[-gk[90]][kk[-gk[350]]]), kk[gk[351]] !== -gk[2])
-                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[351]];
+             for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = '0aZOpAgUuQtVe$Y~1`9^<rSj=}@M>T5!H:Nvz|Di(d*;%no]f_4&hBFxG3,+)RcXC?wmbJW{"EqKI.2ylsP76/#Lk[8', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[4]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[28]] = tm[1], mm[tm[29]] = tm[1], mm[tm[7] … [truncated]
+               if (mm[tm[6]] = mm[tm[2]].indexOf(mm[tm[20]][mm[tm[3]]]), mm[tm[6]] !== -tm[2])
+                 if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[6]];
```

#### 1960. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14344` → after: `L14221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14221) · [Before (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14344)

```diff
-                   qF(kk[gk[52]] += kk[gk[351]] * gk[29], kk[-gk[352]] |= kk[gk[52]] << kk[-gk[302]], kk[-gk[302]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   DT(mm[tm[7]] += mm[tm[6]] * tm[27], mm[tm[28]] |= mm[tm[7]] << mm[tm[29]], mm[tm[29]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1961. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14346-L14349` → after: `L14223-L14226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14223-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14223-L14226) · [Before (L14346-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14346-L14349)

```diff
-                     qF(kk[gk[10]].push(kk[-gk[352]] & gk[12]), kk[-gk[352]] >>= gk[11], kk[-gk[302]] -= gk[11])
-                   } while (kk[-gk[302]] > gk[7]);
-                   kk[gk[52]] = -gk[2]
-                 } return kk[gk[52]] > -gk[2] && kk[gk[10]].push((kk[-gk[352]] | kk[gk[52]] << kk[-gk[302]]) & gk[12]), hk(kk[gk[10]])
+                     DT(mm[tm[34]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[29]] -= tm[3])
+                   } while (mm[tm[29]] > tm[24]);
+                   mm[tm[7]] = -tm[2]
+                 } return mm[tm[7]] > -tm[2] && mm[tm[34]].push((mm[tm[28]] | mm[tm[7]] << mm[tm[29]]) & tm[11]), dm(mm[tm[34]])
```

#### 1962. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14353` → after: `L14230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14230) · [Before (L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14353)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = CI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Bf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1963. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14355-L14359` → after: `L14232-L14238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14232-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14232-L14238) · [Before (L14355-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14355-L14359)

```diff
-           if (kk[gk[10]][gk[310]][gk[2]] <= gk[1]) {
-             function fI(...kk) {
-               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'Avj?B4.;NS)[iQMXw|:},zk*%u32+eO>f(&Ly5g^#Rb/m7Z1=rW<UpCDJdE`a"x6V0t{KH9noIhsY~]$Gl_8!cP@FqT', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[8]] = gk[1], kk[gk[53]] = gk[1], kk[gk[5 … [truncated]
-                 if (kk[gk[353]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[11]]]), kk[gk[353]] !== -gk[2])
-                   if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[353]];
+           if (mm[tm[38]][tm[264]][tm[2]] <= tm[1]) {
+             function Uf(mm) {
+               var Tm, fm, hm, Am, am, xm, wm;
+               for (DT(Tm = "" + (mm || ""), fm = Tm.length, hm = [], Am = tm[1], am = tm[1], xm = -tm[2]), wm = tm[1]; wm < fm; wm++) {
+                 var Dm = 'AMH!1nR?x;C<P+YOGg%#D&:Z[BtE3wa0c(*=X.pr4mfV6}Q]"FoyKivsj`WS$Uk5~e9d)N^2|L/hblIz_q@JTu7>{,8'.indexOf(Tm[wm]);
+                 if (Dm !== -tm[2])
+                   if (xm < tm[1]) xm = Dm;
```

#### 1964. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14361` → after: `L14240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14240) · [Before (L14361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14361)

```diff
-                     qF(kk[gk[52]] += kk[gk[353]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[53]], kk[gk[53]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     DT(xm += Dm * tm[27], Am |= xm << am, am += (xm & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1965. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14363-L14366` → after: `L14242-L14247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14242-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14242-L14247) · [Before (L14363-L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14363-L14366)

```diff
-                       qF(kk[gk[10]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[53]] -= gk[11])
-                     } while (kk[gk[53]] > gk[7]);
-                     kk[gk[52]] = -gk[2]
-                   } return kk[gk[52]] > -gk[2] && kk[gk[10]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
+                       DT(hm.push(Am & tm[11]), Am >>= tm[3], am -= tm[3])
+                     } while (am > tm[24]);
+                     xm = -tm[2]
+                   }
+               }
+               return xm > -tm[2] && hm.push((Am | xm << am) & tm[11]), dm(hm)
```

#### 1966. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14370` → after: `L14251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14251) · [Before (L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14370)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = fI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+               return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Uf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1967. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14372` → after: `L14253-L14255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14253-L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14253-L14255) · [Before (L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14372)

```diff
-             if (kk[gk[35]][BI(gk[354]) + BI(gk[355]) + BI(gk[356]) + gk[357]]) {
+             mm[tm[20]][Tm(tm[306]) + df(tm[304]) + df(tm[305]) + tm[303]] && (mm[tm[20]][df(520)] = tm[1]), mm[tm[20]][df(521) + df(tm[304]) + df(tm[305]) + tm[303]] = tm[76]
+           } else {
+             if (!mm[tm[20]][Tm(tm[306]) + Tm(tm[307]) + Tm(tm[308]) + tm[303]]) {
```

#### 1968. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14374-L14376` → after: `L14257-L14259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14257-L14259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14257-L14259) · [Before (L14374-L14376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14374-L14376)

```diff
-                 for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = '8z=(%yx{<`1FEHZVhSMr6w;^>&/tPd9"URvY|lcDI!:nqWoeJ5[2ug]CB*O$j?sN+_,XaTmpi@LAQ7bG~f.4#K3)}0k', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[240]] = [], kk[gk[8]] = gk[1], kk[-gk[244]] = gk[1],  … [truncated]
-                   if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[35]][kk[-gk[25]]]), kk[gk[28]] !== -gk[2])
-                     if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+                 for (DT(mm[tm[12]] = tm[2], mm[tm[243]] = 'wBUfFDLcprYMHNGqPJbhCkumi`^z.TgxK3&}l1!a5<{_S(#O~,*/j$on>s|Q)@eR48]%A?ZvXEy"W092=6[7+Idt;V:', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[4]] = mm[tm[20]].length, mm[tm[19]] = [], mm[tm[8]] = tm[1], mm[-tm[139]] = tm[1], m … [truncated]
+                   if (mm[tm[6]] = mm[tm[243]].indexOf(mm[tm[20]][mm[-tm[108]]]), mm[tm[6]] !== -tm[2])
+                     if (mm[-tm[287]] < tm[1]) mm[-tm[287]] = mm[tm[6]];
```

#### 1969. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14378` → after: `L14261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14261) · [Before (L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14378)

```diff
-                       qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[7]] << kk[-gk[244]], kk[-gk[244]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                       DT(mm[-tm[287]] += mm[tm[6]] * tm[27], mm[tm[8]] |= mm[-tm[287]] << mm[-tm[139]], mm[-tm[139]] += (mm[-tm[287]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1970. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14380-L14383` → after: `L14263-L14266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14263-L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14263-L14266) · [Before (L14380-L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14380-L14383)

```diff
-                         qF(kk[gk[240]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[-gk[244]] -= gk[11])
-                       } while (kk[-gk[244]] > gk[7]);
-                       kk[gk[7]] = -gk[2]
-                     } return kk[gk[7]] > -gk[2] && kk[gk[240]].push((kk[gk[8]] | kk[gk[7]] << kk[-gk[244]]) & gk[12]), hk(kk[gk[240]])
+                         DT(mm[tm[19]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[-tm[139]] -= tm[3])
+                       } while (mm[-tm[139]] > tm[24]);
+                       mm[-tm[287]] = -tm[2]
+                     } return mm[-tm[287]] > -tm[2] && mm[tm[19]].push((mm[tm[8]] | mm[-tm[287]] << mm[-tm[139]]) & tm[11]), dm(mm[tm[19]])
```

#### 1971. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14387` → after: `L14270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14270) · [Before (L14387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14387)

```diff
-                 return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = dI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                 return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = gf(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1972. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14389-L14407` → after: `L14272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14272) · [Before (L14389-L14407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14389-L14407)

```diff
-               kk[gk[35]][YI(528)] = gk[1]
-             }
-             kk[gk[35]][BI(gk[354]) + BI(gk[355]) + BI(gk[356]) + gk[357]] = gk[70]
-           } else {
-             function AI(...kk) {
-               for (qF(kk[gk[13]] = gk[2], kk[-gk[321]] = 'u,40|8%)v9*.=?[6~z5;}><":_&MCpo/+c`Jm$jDTkXgw7{1OEFSyt!aR(H^xne3LrdAZWsVbPqNBhKYIlfU2i#G]Q@', kk[-gk[238]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[-gk[238]].length, kk[gk[10]] = [], kk[-gk[358]] = gk[1], kk[-gk[264]] = gk … [truncated]
-                 if (kk[gk[28]] = kk[-gk[321]].indexOf(kk[-gk[238]][kk[gk[11]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
-                   else {
-                     qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[-gk[358]] |= kk[gk[7]] << kk[-gk[264]], kk[-gk[264]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                     do {
-                       qF(kk[gk[10]].push(kk[-gk[358]] & gk[12]), kk[-gk[358]] >>= gk[11], kk[-gk[264]] -= gk[11])
-                     } while (kk[-gk[264]] > gk[7]);
-                     kk[gk[7]] = -gk[2]
-                   } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[358]] | kk[gk[7]] << kk[-gk[264]]) & gk[12]), hk(kk[gk[10]])
-             }
- ... (3 more removed lines; see GitHub link above)
+               mm[tm[20]][Wf(524)] = tm[1]
```

#### 1973. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14409` → after: `L14274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14274) · [Before (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14409)

```diff
-             kk[gk[35]][gI(gk[359]) + gI(gk[360]) + gI(gk[361]) + gk[357]] || (kk[gk[35]][gI(532)] = gk[1]), kk[gk[35]][gI(gk[359]) + gI(gk[360]) + gI(gk[361]) + gk[357]] = gk[58]
+             mm[tm[20]][Tm(tm[306]) + Tm(tm[307]) + Tm(tm[308]) + tm[303]] = tm[77]
```

#### 1974. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14411-L14413` → after: `L14276-L14278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14276-L14278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14276-L14278) · [Before (L14411-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14411-L14413)

```diff
-           const cI = Math[Fk(gk[398])](kk[gk[35]][Fk(534)], kk[gk[35]][Fk(gk[362]) + Fk(gk[363]) + Fk(537)]) / kk[gk[35]][Fk(gk[362]) + Fk(gk[363]) + NI(538)],
-             WI = kk[gk[35]][NI(gk[364]) + NI(gk[365]) + gk[335]] + cI * (kk[gk[35]][NI(gk[364]) + NI(541) + gk[335]] - kk[gk[35]][NI(gk[364]) + NI(gk[365]) + gk[335]]);
-           if (kk[gk[10]][gk[310]][gk[2]] <= gk[1] && kk[gk[25]][NI(542) + NI(543)]) kk[gk[10]][NI(544) + NI(545) + NI(546)] = gk[1];
+           const vf = Math[Lf(525)](mm[tm[20]][Lf(tm[322])], mm[tm[20]][Lf(tm[309]) + Lf(tm[310]) + Lf(tm[311])]) / mm[tm[20]][Lf(tm[309]) + Lf(tm[310]) + Lf(tm[311])],
+             tf = mm[tm[20]][Lf(tm[309]) + Lf(tm[313]) + tm[312]] + vf * (mm[tm[20]][Lf(tm[309]) + Lf(531) + tm[312]] - mm[tm[20]][Lf(tm[309]) + Lf(tm[313]) + tm[312]]);
+           if (mm[tm[38]][tm[264]][tm[2]] <= tm[1] && mm[tm[15]][Lf(532) + Lf(533)]) mm[tm[38]][Lf(534) + Lf(535) + Lf(536)] = tm[1];
```

#### 1975. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14416-L14418` → after: `L14281-L14283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14281-L14283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14281-L14283) · [Before (L14416-L14418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14416-L14418)

```diff
-               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'c&1T`*FQH9xu7jX2}R?z86ya^]n0dWLfvKeAG:CbtM.(%3IpBNw4[U=D_,h"JZ/5<o!SO+V~)#i{@$|skP>l;mEgrYq', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[10]] = [], kk[-gk[305]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
-                 if (kk[gk[28]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+               for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = 'D^;a`jp0[PzS3hwvk4/,E~}#9{%*(:l&rey@?Rx8])1=t5!gu>HCFWU$7_Ji<nq62.+N"|MLIsGcKdfoBbAVXmOZQYT', mm[tm[13]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[13]].length, mm[tm[38]] = [], mm[tm[28]] = tm[1], mm[tm[29]] = tm[1], mm[t … [truncated]
+                 if (mm[tm[6]] = mm[tm[16]].indexOf(mm[tm[13]][mm[tm[69]]]), mm[tm[6]] !== -tm[2])
+                   if (mm[tm[24]] < tm[1]) mm[tm[24]] = mm[tm[6]];
```

#### 1976. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14420` → after: `L14285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14285) · [Before (L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14420)

```diff
-                     qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[-gk[305]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                     DT(mm[tm[24]] += mm[tm[6]] * tm[27], mm[tm[28]] |= mm[tm[24]] << mm[tm[29]], mm[tm[29]] += (mm[tm[24]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1977. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14422-L14425` → after: `L14287-L14290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14287-L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14287-L14290) · [Before (L14422-L14425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14422-L14425)

```diff
-                       qF(kk[gk[10]].push(kk[-gk[305]] & gk[12]), kk[-gk[305]] >>= gk[11], kk[gk[53]] -= gk[11])
-                     } while (kk[gk[53]] > gk[7]);
-                     kk[gk[7]] = -gk[2]
-                   } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[-gk[305]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
+                       DT(mm[tm[38]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[29]] -= tm[3])
+                     } while (mm[tm[29]] > tm[24]);
+                     mm[tm[24]] = -tm[2]
+                   } return mm[tm[24]] > -tm[2] && mm[tm[38]].push((mm[tm[28]] | mm[tm[24]] << mm[tm[29]]) & tm[11]), dm(mm[tm[38]])
```

#### 1978. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14429` → after: `L14294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14294) · [Before (L14429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14429)

```diff
-               return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = mI(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+               return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Ff(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1979. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14431` → after: `L14296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14296) · [Before (L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14431)

```diff
-             kk[gk[10]][hI(547) + hI(548) + hI(549)] = WI / 20
+             mm[tm[38]][mh(537) + mh(538) + mh(539)] = tf / tm[127]
```

#### 1980. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14433-L14450` → after: `L14298-L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14298-L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14298-L14299) · [Before (L14433-L14450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14433-L14450)

```diff
-           if (qF(kk[gk[25]][NI(550)][NI(551) + NI(552) + NI(553)](NI(gk[364]), .7), kk[gk[10]][NI(554) + gk[377]] = .25, kk[gk[10]][gk[310]][gk[2]] = gk[1]), wk) {
-             function rI(...kk) {
-               for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'NFXPSp=LaeDyJRz.TM^Hfnko%YcQ90s}*ZWlxE"$3Vh]jq_wI7Ai&1+/)8B{v#dCr2u4K:Umb@t~?O;<[G6g|5,!(>`', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[26]].length, kk[gk[41]] = [], kk[gk[8]] = gk[1], kk[gk[18]] = gk[1], kk[gk[ … [truncated]
-                 if (kk[gk[28]] = kk[gk[43]].indexOf(kk[gk[26]][kk[-gk[239]]]), kk[gk[28]] !== -gk[2])
-                   if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[28]];
-                   else {
-                     qF(kk[gk[52]] += kk[gk[28]] * gk[29], kk[gk[8]] |= kk[gk[52]] << kk[gk[18]], kk[gk[18]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                     do {
-                       qF(kk[gk[41]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[18]] -= gk[11])
-                     } while (kk[gk[18]] > gk[7]);
-                     kk[gk[52]] = -gk[2]
-                   } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[8]] | kk[gk[52]] << kk[gk[18]]) & gk[12]), hk(kk[gk[41]])
-             }
- 
-             function DI(kk) {
-               return typeof Rk[kk] === gk[14] ? Rk[kk] = rI(Uk[kk]) : Rk[kk]
- ... (2 more removed lines; see GitHub link above)
+           if (DT(mm[tm[15]][Lf(540)][Lf(541) + Lf(542) + Lf(543)](Lf(tm[309]), .7), mm[tm[38]][Lf(544) + tm[324]] = .25, mm[tm[38]][tm[264]][tm[2]] = tm[1]), Ym)
+             for (let Th = tm[1]; Th < Gm[Lf(tm[316])]; Th++) {
```

#### 1981. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14454-L14460` → after: `L14303-L14307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14303-L14307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14303-L14307) · [Before (L14454-L14460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14454-L14460)

```diff
-                 if (qF(lk()[DI(556)](pk, gk[1], WI * Ok[FX], gk[1]), kk[gk[10]][DI(557) + DI(558)](pk)), kk[gk[25]][DI(559) + gk[52]] && kk[gk[35]][DI(560)]) {
-                   function IX(kk) {
-                     var Fk, Ik, Xk, Tk, ik, yk, lk;
-                     for (qF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = gk[1], ik = gk[1], yk = -gk[2]), lk = gk[1]; lk < Ik; lk++) {
-                       var ak = 'xu*(;=@DC2}~g`n_Y?/X+pWya)[0q:v<J4wB983{"k1rNL#UmEhebTARKl$6tM!dj.>c5|FPfZSIoGsQHz%^7&,]iOV'.indexOf(Fk[lk]);
-                       if (ak !== -gk[2])
-                         if (yk < gk[1]) yk = ak;
+                 if (DT(wm()[Lf(tm[317])](Nm, tm[1], tf * bm[hh], tm[1]), mm[tm[38]][Lf(tm[318]) + Lf(tm[319])](Nm)), mm[tm[15]][Lf(tm[320]) + tm[7]] && mm[tm[20]][Lf(tm[321])]) {
+                   function Ah(...mm) {
+                     for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = 'uKPtBmGLAgkFqWQp}1OT$^7(Y%Zci"fJH:x8;E+[yrn3v!|_ew~.sd]>V0zb`6)@R2jo,M4<N&lIha*{?S=CU9/DX#5', mm[tm[13]] = "" + (mm[tm[1]] || ""), mm[-tm[86]] = mm[tm[13]].length, mm[tm[34]] = [], mm[tm[28]] = tm[1], mm[tm[29]] = tm[1] … [truncated]
+                       if (mm[tm[6]] = mm[tm[2]].indexOf(mm[tm[13]][mm[tm[3]]]), mm[tm[6]] !== -tm[2])
+                         if (mm[tm[177]] < tm[1]) mm[tm[177]] = mm[tm[6]];
```

#### 1982. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14462` → after: `L14309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14309) · [Before (L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14462)

```diff
-                           qF(yk += ak * gk[29], Tk |= yk << ik, ik += (yk & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                           DT(mm[tm[177]] += mm[tm[6]] * tm[27], mm[tm[28]] |= mm[tm[177]] << mm[tm[29]], mm[tm[29]] += (mm[tm[177]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1983. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14464-L14469` → after: `L14311-L14314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14311-L14314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14311-L14314) · [Before (L14464-L14469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14464-L14469)

```diff
-                             qF(Xk.push(Tk & gk[12]), Tk >>= gk[11], ik -= gk[11])
-                           } while (ik > gk[7]);
-                           yk = -gk[2]
-                         }
-                     }
-                     return yk > -gk[2] && Xk.push((Tk | yk << ik) & gk[12]), hk(Xk)
+                             DT(mm[tm[34]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[29]] -= tm[3])
+                           } while (mm[tm[29]] > tm[24]);
+                           mm[tm[177]] = -tm[2]
+                         } return mm[tm[177]] > -tm[2] && mm[tm[34]].push((mm[tm[28]] | mm[tm[177]] << mm[tm[29]]) & tm[11]), dm(mm[tm[34]])
```

#### 1984. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14473` → after: `L14318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14318) · [Before (L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14473)

```diff
-                     return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = IX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+                     return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Ah(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1985. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14475-L14493` → after: `L14320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14320) · [Before (L14475-L14493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14475-L14493)

```diff
-                   qF(kk[gk[35]][DI(561)] = gk[1], kk[gk[35]][DI(gk[366]) + DI(gk[367]) + DI(564)] = kX, kk[gk[35]][DI(gk[366]) + DI(gk[367]) + XX(565) + XX(566)] = -kk[gk[10]][XX(567) + gk[52]][kX])
-                 }
-               }
-             }
-           } else if (rk)
-             for (let TX = gk[1]; TX < uk[NI(568)]; TX++) {
-               const iX = uk[TX];
-               if (Kk[iX] && kk[gk[10]][NI(569) + gk[52]][iX] !== gk[1]) {
-                 function yX(...kk) {
-                   for (qF(kk[gk[13]] = gk[2], kk[gk[81]] = '{@*>%]nu!:Wq}1`z$9AaG);yINB+hg^V6RF2&Y5j~xCTv0=S[id4Ktp(b#f3EL,wroe?|D_<c78sZHm"PU.kOlM/XQJ', kk[gk[26]] = "" + (kk[gk[1]] || ""), kk[-gk[306]] = kk[gk[26]].length, kk[gk[44]] = [], kk[gk[8]] = gk[1], kk[gk[20]] = gk[1], … [truncated]
-                     if (kk[gk[75]] = kk[gk[81]].indexOf(kk[gk[26]][kk[-gk[369]]]), kk[gk[75]] !== -gk[2])
-                       if (kk[gk[368]] < gk[1]) kk[gk[368]] = kk[gk[75]];
-                       else {
-                         qF(kk[gk[368]] += kk[gk[75]] * gk[29], kk[gk[8]] |= kk[gk[368]] << kk[gk[20]], kk[gk[20]] += (kk[gk[368]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                         do {
-                           qF(kk[gk[44]].push(kk[gk[8]] & gk[12]), kk[gk[8]] >>= gk[11], kk[gk[20]] -= gk[11])
- ... (3 more removed lines; see GitHub link above)
+                   DT(mm[tm[20]][Lf(551)] = tm[1], mm[tm[20]][Lf(tm[314]) + Lf(tm[315]) + Lf(554)] = fh, mm[tm[20]][Lf(tm[314]) + Lf(tm[315]) + Lf(555) + ah(556)] = -mm[tm[38]][ah(557) + tm[7]][fh])
```

#### 1986. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14514-L14519` → after: `L14323-L14328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14323-L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14323-L14328) · [Before (L14514-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14514-L14519)

```diff
- 
-               function qX(kk) {
-                 return typeof Rk[kk] === gk[14] ? Rk[kk] = aX(Uk[kk]) : Rk[kk]
-               }
-               qF(lk()[NI(gk[373])](pk, gk[1], WI * Ok[xk], gk[1]), kk[gk[10]][NI(574) + qX(575)](pk))
-             } kk[gk[25]][NI(gk[374]) + gk[52]] || (kk[gk[35]][NI(576)] = gk[58]), kk[gk[35]][NI(577)]++
+             } else if (TT)
+               for (let xh = tm[1]; xh < Gm[Lf(tm[316])]; xh++) {
+                 const wh = Gm[xh];
+                 Km[wh] && mm[tm[38]][Lf(558) + tm[7]][wh] !== tm[1] && DT(wm()[Lf(tm[317])](Nm, tm[1], 1.05 * tf, tm[1]), mm[tm[38]][Lf(tm[318]) + Lf(tm[319])](Nm))
+               } else mm[tm[15]][Lf(tm[320]) + tm[7]] && DT(wm()[Lf(tm[317])](Nm, tm[1], tf * bm[Vm], tm[1]), mm[tm[38]][Lf(tm[318]) + Lf(tm[319])](Nm));
+           mm[tm[15]][Lf(tm[320]) + tm[7]] || (mm[tm[20]][Lf(tm[321])] = tm[77]), mm[tm[20]][Lf(tm[322])]++
```

#### 1987. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14522-L14524` → after: `L14331-L14333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14331-L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14331-L14333) · [Before (L14522-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14522-L14524)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[43]] = 'TGwJkv,y<!h3D4mL~t/eaS}{KOF)ZXB;jP7EAp16"M.bd&@IoH[:`V(%|qY+]2xfUN9*Ql_5^$uCzRg?W>nri#c80=s', kk[gk[375]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[375]].length, kk[gk[96]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk … [truncated]
-               if (kk[-gk[232]] = kk[gk[43]].indexOf(kk[gk[375]][kk[gk[376]]]), kk[-gk[232]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[-gk[232]];
+             for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = '~HAdXjaTRSlsLIO1Q?7>_;zN#eJZ)!mxi3uvPf{2]gBw5.F}D:68Knk|CtMbc%$G40Wo*/p@Uq,Er9&"`([+=Vhy^Y<', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[28]] = tm[1], mm[tm[29]] = tm[1], mm[-tm … [truncated]
+               if (mm[tm[6]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[69]]]), mm[tm[6]] !== -tm[2])
+                 if (mm[-tm[323]] < tm[1]) mm[-tm[323]] = mm[tm[6]];
```

#### 1988. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14526` → after: `L14335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14335) · [Before (L14526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14526)

```diff
-                   qF(kk[gk[7]] += kk[-gk[232]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[20]], kk[gk[20]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   DT(mm[-tm[323]] += mm[tm[6]] * tm[27], mm[tm[28]] |= mm[-tm[323]] << mm[tm[29]], mm[tm[29]] += (mm[-tm[323]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1989. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14528-L14531` → after: `L14337-L14340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14337-L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14337-L14340) · [Before (L14528-L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14528-L14531)

```diff
-                     qF(kk[gk[96]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[7]] = -gk[2]
-                 } return kk[gk[7]] > -gk[2] && kk[gk[96]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[20]]) & gk[12]), hk(kk[gk[96]])
+                     DT(mm[tm[34]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[29]] -= tm[3])
+                   } while (mm[tm[29]] > tm[24]);
+                   mm[-tm[323]] = -tm[2]
+                 } return mm[-tm[323]] > -tm[2] && mm[tm[34]].push((mm[tm[28]] | mm[-tm[323]] << mm[tm[29]]) & tm[11]), dm(mm[tm[34]])
```

#### 1990. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14535` → after: `L14344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14344) · [Before (L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14535)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = LX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Dh(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1991. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14537` → after: `L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14346) · [Before (L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14537)

```diff
-           qF(kk[gk[25]][tX(578)][tX(579) + tX(580) + tX(581)](tX(582), gk[2]), kk[gk[10]][tX(583) + tX(584) + tX(585)] = Wk, kk[gk[10]][tX(586) + gk[377]] = FF ? ZF : jF, kk[gk[35]][tX(587)] = gk[70], kk[gk[35]][tX(588)] = gk[1])
+           DT(mm[tm[15]][ih(559)][ih(560) + ih(561) + ih(562)](ih(563), tm[2]), mm[tm[38]][ih(564) + ih(565) + ih(566)] = sm, mm[tm[38]][ih(567) + tm[324]] = RT ? oT : OT, mm[tm[20]][ih(568)] = tm[76], mm[tm[20]][ih(569)] = tm[1])
```

#### 1992. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14539` → after: `L14348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14348) · [Before (L14539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14539)

```diff
-         if (kk[gk[35]][Fk(gk[380])] !== -gk[2]) {
+         if (mm[tm[20]][Tm(tm[325])] !== -tm[2]) {
```

#### 1993. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14541-L14543` → after: `L14350-L14352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14350-L14352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14350-L14352) · [Before (L14541-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14541-L14543)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[378]] = '/TLdcAtGKJYBgq<=)w9Ha%W^24,#R0xb`S.izk8f*]ICQ!DUnVOZp1rls&F?NXh6Em"v}P5|[(7>eojM~@$_;{+3:uy', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk[gk … [truncated]
-               if (kk[gk[379]] = kk[gk[378]].indexOf(kk[gk[35]][kk[gk[28]]]), kk[gk[379]] !== -gk[2])
-                 if (kk[gk[89]] < gk[1]) kk[gk[89]] = kk[gk[379]];
+             for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = 'Opd9_~y}oi?s$lLE/xSYA3,RQ72zt%XBaIU"h|=!V{^F[M]#eg`wJcjm5(n0bCWvGuZ)N>H.@rD8*k1TP+4Kfq:&<6;', mm[tm[13]] = "" + (mm[tm[1]] || ""), mm[tm[4]] = mm[tm[13]].length, mm[tm[34]] = [], mm[tm[8]] = tm[1], mm[tm[67]] = tm[1], mm[tm[24 … [truncated]
+               if (mm[tm[6]] = mm[tm[16]].indexOf(mm[tm[13]][mm[tm[3]]]), mm[tm[6]] !== -tm[2])
+                 if (mm[tm[24]] < tm[1]) mm[tm[24]] = mm[tm[6]];
```

#### 1994. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14545` → after: `L14354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14354) · [Before (L14545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14545)

```diff
-                   qF(kk[gk[89]] += kk[gk[379]] * gk[29], kk[gk[50]] |= kk[gk[89]] << kk[gk[20]], kk[gk[20]] += (kk[gk[89]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   DT(mm[tm[24]] += mm[tm[6]] * tm[27], mm[tm[8]] |= mm[tm[24]] << mm[tm[67]], mm[tm[67]] += (mm[tm[24]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 1995. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14547-L14550` → after: `L14356-L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14356-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14356-L14359) · [Before (L14547-L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14547-L14550)

```diff
-                     qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                   } while (kk[gk[20]] > gk[7]);
-                   kk[gk[89]] = -gk[2]
-                 } return kk[gk[89]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[89]] << kk[gk[20]]) & gk[12]), hk(kk[gk[41]])
+                     DT(mm[tm[34]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[67]] -= tm[3])
+                   } while (mm[tm[67]] > tm[24]);
+                   mm[tm[24]] = -tm[2]
+                 } return mm[tm[24]] > -tm[2] && mm[tm[34]].push((mm[tm[8]] | mm[tm[24]] << mm[tm[67]]) & tm[11]), dm(mm[tm[34]])
```

#### 1996. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14554` → after: `L14363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14363) · [Before (L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14554)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = ZX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Rh(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 1997. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14556-L14558` → after: `L14365-L14367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14365-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14365-L14367) · [Before (L14556-L14558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14556-L14558)

```diff
-           const eX = kk[gk[35]][Fk(gk[380])] / kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + Fk(592) + Fk(593) + Fk(594) + gk[387]],
-             wX = kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + Fk(595) + Fk(gk[383])] + eX * (kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + Fk(597) + Fk(gk[383])] - kk[gk[35]][Fk(gk[381]) + Fk(gk[382]) + jX(598) + jX(599)]);
-           if (lk()[jX(600)](pk, gk[1], gk[1], gk[1]), kk[gk[35]][jX(gk[386])] > gk[1]) {
+           const Eh = mm[tm[20]][Tm(tm[325])] / mm[tm[20]][Tm(571) + Tm(572) + Tm(573)],
+             oh = mm[tm[20]][Tm(574) + Tm(575) + ph(tm[329]) + ph(tm[326])] + Eh * (mm[tm[20]][ph(tm[327]) + ph(tm[328]) + ph(580) + ph(tm[326])] - mm[tm[20]][ph(tm[327]) + ph(tm[328]) + ph(tm[329]) + ph(tm[326])]);
+           if (wm()[ph(581)](Nm, tm[1], tm[1], tm[1]), mm[tm[20]][ph(tm[332])] > tm[1]) {
```

#### 1998. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14562-L14563` → after: `L14371-L14372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14371-L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14371-L14372) · [Before (L14562-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14562-L14563)

```diff
-           const HX = wX * kk[gk[35]][jX(gk[384]) + jX(gk[385]) + jX(604) + jX(605)];
-           qF(pk[kk[gk[35]][jX(gk[384]) + jX(gk[385]) + jX(606)]] = HX, kk[gk[10]][jX(607) + jX(608)](pk)), ++kk[gk[35]][jX(gk[386])] > kk[gk[35]][jX(609) + jX(610) + jX(611) + jX(612) + jX(613) + gk[387]] && (kk[gk[35]][jX(gk[386])] = -gk[2])
+           const Oh = oh * mm[tm[20]][ph(tm[330]) + ph(tm[331]) + ph(585) + ph(586)];
+           DT(Nm[mm[tm[20]][ph(tm[330]) + ph(tm[331]) + ph(587)]] = Oh, mm[tm[38]][ph(588) + ph(589)](Nm)), ++mm[tm[20]][ph(tm[332])] > mm[tm[20]][ph(590) + ph(591) + ph(592) + ph(593)] && (mm[tm[20]][ph(tm[332])] = -tm[2])
```

#### 1999. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14567-L14569` → after: `L14376-L14378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14376-L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14376-L14378) · [Before (L14567-L14569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14567-L14569)

```diff
-             for (qF(kk[gk[13]] = gk[2], kk[gk[55]] = 'Z~ONnsCpmSeIolUrHdBKJktqbghacQ7G9]&Df"?VWiTPLuAEv|jYXRF/>=M06:#`^w}@1[;4x{y%)+$,3_<8z25(!.*', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[-gk[388]] = kk[gk[35]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk[g … [truncated]
-               if (kk[gk[28]] = kk[gk[55]].indexOf(kk[gk[35]][kk[gk[39]]]), kk[gk[28]] !== -gk[2])
-                 if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[28]];
+             for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = 'Ez05[$6?`9^,2v}<7>dG=p;kYH/@Jn|oZSWDxC_T"URh~t&)jLwybsfgBIFc3aM]Q(#um1PVArl:e%+NKiO.*X8{4q!', mm[tm[13]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[13]].length, mm[tm[38]] = [], mm[tm[8]] = tm[1], mm[tm[161]] = tm[1], mm[tm[ … [truncated]
+               if (mm[tm[6]] = mm[tm[16]].indexOf(mm[tm[13]][mm[tm[3]]]), mm[tm[6]] !== -tm[2])
+                 if (mm[tm[24]] < tm[1]) mm[tm[24]] = mm[tm[6]];
```

#### 2000. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14571` → after: `L14380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14380) · [Before (L14571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14571)

```diff
-                   qF(kk[gk[7]] += kk[gk[28]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                   DT(mm[tm[24]] += mm[tm[6]] * tm[27], mm[tm[8]] |= mm[tm[24]] << mm[tm[161]], mm[tm[161]] += (mm[tm[24]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 2001. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14573-L14576` → after: `L14382-L14385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14382-L14385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14382-L14385) · [Before (L14573-L14576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14573-L14576)

```diff
-                     qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                   } while (kk[gk[53]] > gk[7]);
-                   kk[gk[7]] = -gk[2]
-                 } return kk[gk[7]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[41]])
+                     DT(mm[tm[38]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[161]] -= tm[3])
+                   } while (mm[tm[161]] > tm[24]);
+                   mm[tm[24]] = -tm[2]
+                 } return mm[tm[24]] > -tm[2] && mm[tm[38]].push((mm[tm[8]] | mm[tm[24]] << mm[tm[161]]) & tm[11]), dm(mm[tm[38]])
```

#### 2002. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14580-L14588` → after: `L14389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14389) · [Before (L14580-L14588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14580-L14588)

```diff
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = xX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-           }
-           if (qF(kk[gk[35]][Fk(gk[393])] = gk[1], kk[gk[25]][Fk(gk[392])][PX(616) + PX(617) + PX(618)](PX(619), .8)), kk[gk[25]][PX(620) + PX(621)] && yk === ik[gk[394]][PX(622) + gk[395]]) {
-             const KX = TF(kk[gk[10]][gk[310]][gk[2]], gk[50]);
-             qF(lk()[PX(gk[389])](pk, gk[1], -KX, gk[1]), kk[gk[10]][PX(gk[390]) + PX(gk[391])](pk))
-           }
-           if (kk[gk[25]][PX(626) + gk[52]]) {
-             const QX = TF(kk[gk[10]][gk[310]][gk[2]], gk[25]);
-             qF(lk()[PX(gk[389])](pk, gk[1], QX, gk[1]), kk[gk[10]][PX(gk[390]) + PX(gk[391])](pk))
+             return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = qh(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 2003. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14590-L14601` → after: `L14391-L14393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14391-L14393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14391-L14393) · [Before (L14590-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14590-L14601)

```diff
-         } else if (qF(kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(630), gk[2]), kk[gk[35]][Fk(gk[393])]++), eF && kk[gk[25]][Fk(gk[284]) + gk[52]] && !FF && !wk && !Mk && !rk && !sk && yk === ik[gk[394]][Fk(gk[410]) + gk[395]]) {
-           function sX(...kk) {
-             for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'E~DgjNFbn2orX)OtZz{3*!0<lUI_JQ[udL`TfCW$4&(=VR+:BK/91isvHmP5S^wMA>"h|@}Gyk7]ace.%#;8q,pYx6?', kk[-gk[110]] = "" + (kk[gk[1]] || ""), kk[gk[396]] = kk[-gk[110]].length, kk[gk[41]] = [], kk[gk[397]] = gk[1], kk[-gk[346]] = gk[1], … [truncated]
-               if (kk[gk[75]] = kk[gk[2]].indexOf(kk[-gk[110]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-                 if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
-                 else {
-                   qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[397]] |= kk[gk[52]] << kk[-gk[346]], kk[-gk[346]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                   do {
-                     qF(kk[gk[41]].push(kk[gk[397]] & gk[12]), kk[gk[397]] >>= gk[11], kk[-gk[346]] -= gk[11])
-                   } while (kk[-gk[346]] > gk[7]);
-                   kk[gk[52]] = -gk[2]
-                 } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[397]] | kk[gk[52]] << kk[-gk[346]]) & gk[12]), hk(kk[gk[41]])
+           if (DT(mm[tm[20]][Tm(tm[333])] = tm[1], mm[tm[15]][jh(595)][jh(596) + jh(597) + jh(598)](jh(599), .8)), mm[tm[15]][jh(600) + jh(601)] && xm === am[tm[334]][jh(602) + tm[335]]) {
+             const Vh = hT(mm[tm[38]][tm[264]][tm[2]], tm[8]);
+             DT(wm()[jh(603)](Nm, tm[1], -Vh, tm[1]), mm[tm[38]][jh(604) + jh(605)](Nm))
```

#### 2004. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14604-L14611` → after: `L14409-L14434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14409-L14434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14409-L14434) · [Before (L14604-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14604-L14611)

```diff
-           function VX(...kk) {
-             return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = sX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-           }
-           const zX = Math[Fk(gk[398])](gk[2], Math[VX(632)](gk[1], eF[VX(633) + VX(634)] - kk[gk[10]][gk[310]][gk[2]]));
-           qF(lk()[VX(635)](pk, gk[1], eF[VX(636)] * zX, gk[1]), kk[gk[10]][VX(637) + VX(638)](pk))
-         }
-       }
-       if (kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(gk[402]) + gk[403], !kk[gk[35]][Fk(gk[286]) + gk[52]] && sk ? .07 : gk[2]), !sk || kk[gk[35]][Fk(gk[286]) + gk[52]] || FF || qF(kk[gk[10]][gk[310]][gk[2]] = gk[1], kk[gk[10]][Fk(gk[249]) + Fk(gk[250]) + … [truncated]
+             function Kh(...mm) {
+               return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Ih(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
+             }
+             const Qh = hT(mm[tm[38]][tm[264]][tm[2]], tm[15]);
+             DT(wm()[Kh(607)](Nm, tm[1], Qh, tm[1]), mm[tm[38]][Kh(608) + Kh(609)](Nm))
+           }
+         } else if (DT(mm[tm[15]][Tm(tm[338])][Tm(tm[339]) + Tm(tm[340]) + Tm(tm[341])](Tm(614), tm[2]), mm[tm[20]][Tm(tm[333])]++), YT && mm[tm[15]][Tm(tm[241]) + tm[7]] && !RT && !Ym && !iT && !TT && !nm && xm === am[tm[334]][Tm(tm[352]) + tm[335]]) {
+           const nh = Math[Tm(tm[353])](tm[2], Math[Tm(tm[336])](tm[1], YT[Tm(617) + Tm(618)] - mm[tm[38]][tm[264]][tm[2]]));
+           DT(wm()[Tm(tm[337])](Nm, tm[1], YT[Tm(619)] * nh, tm[1]), mm[tm[38]][Tm(620) + Tm(621)](Nm))
+         }
+       }
+       if (mm[tm[15]][Tm(tm[338])][Tm(tm[339]) + Tm(tm[340]) + Tm(tm[341])](Tm(tm[342]) + tm[343], !mm[tm[20]][Tm(tm[247]) + tm[7]] && nm ? .07 : tm[2]), !nm || mm[tm[20]][Tm(tm[247]) + tm[7]] || RT || DT(mm[tm[38]][tm[264]][tm[2]] = tm[1], mm[tm[38]][Tm(tm[206]) + Tm(tm[207]) + T … [truncated]
+         const Jh = mm[tm[1]][Tm(tm[202])][Tm(622)](mm[tm[2]], pT);
+         mm[tm[15]][Tm(tm[338])][Tm(tm[339]) + Tm(tm[340]) + Tm(tm[341])](Tm(tm[345]) + Tm(tm[346]) + tm[347], Jh)
+       } else mm[tm[20]][Tm(tm[247]) + tm[7]] && mm[tm[15]][Tm(tm[338])][Tm(tm[339]) + Tm(tm[340]) + Tm(tm[341])](Tm(tm[345]) + Tm(tm[346]) + tm[347], tm[2]);
+       if (mm[tm[140]] = tm[2], Om[Tm(tm[338])] && RT && !Qm)
+ ... (10 more added lines; see GitHub link above)
```

#### 2005. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14613-L14615` → after: `L14436-L14438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14436-L14438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14436-L14438) · [Before (L14613-L14615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14613-L14615)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[gk[47]] = '_uAB"{Iy*`}q5i:J<oztQ14Gbdvfr?w#8m]OD~!Vs^N(Hl/X%kR7ej.&x29|=FnT,;$YSP6hZU+KE0c[>a@gC3WL)Mp', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[25]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[53]] = gk[1], kk[gk[7] … [truncated]
-             if (kk[gk[143]] = kk[gk[47]].indexOf(kk[gk[35]][kk[gk[126]]]), kk[gk[143]] !== -gk[2])
-               if (kk[gk[7]] < gk[1]) kk[gk[7]] = kk[gk[143]];
+           for (DT(mm[tm[12]] = tm[2], mm[tm[2]] = 'P!7Y)(@}e/N5y1q]s<=%i".#^g40|>Vz;h+D{`H:?Ij_$~X&U[6u9nGWkQZ2LExvw3K8C*,mBforApRadbTlFcMOJtS', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[8]] = tm[1], mm[tm[9]] = tm[1], mm[tm[24]]  … [truncated]
+             if (mm[tm[6]] = mm[tm[2]].indexOf(mm[tm[20]][mm[tm[69]]]), mm[tm[6]] !== -tm[2])
+               if (mm[tm[24]] < tm[1]) mm[tm[24]] = mm[tm[6]];
```

#### 2006. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14617` → after: `L14440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14440) · [Before (L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14617)

```diff
-                 qF(kk[gk[7]] += kk[gk[143]] * gk[29], kk[gk[50]] |= kk[gk[7]] << kk[gk[53]], kk[gk[53]] += (kk[gk[7]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[tm[24]] += mm[tm[6]] * tm[27], mm[tm[8]] |= mm[tm[24]] << mm[tm[9]], mm[tm[9]] += (mm[tm[24]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 2007. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14619-L14622` → after: `L14442-L14445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14442-L14445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14442-L14445) · [Before (L14619-L14622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14619-L14622)

```diff
-                   qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[53]] -= gk[11])
-                 } while (kk[gk[53]] > gk[7]);
-                 kk[gk[7]] = -gk[2]
-               } return kk[gk[7]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[7]] << kk[gk[53]]) & gk[12]), hk(kk[gk[10]])
+                   DT(mm[tm[34]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[9]] -= tm[3])
+                 } while (mm[tm[9]] > tm[24]);
+                 mm[tm[24]] = -tm[2]
+               } return mm[tm[24]] > -tm[2] && mm[tm[34]].push((mm[tm[8]] | mm[tm[24]] << mm[tm[9]]) & tm[11]), dm(mm[tm[34]])
```

#### 2008. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14626-L14642` → after: `L14449-L14452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14449-L14452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14449-L14452) · [Before (L14626-L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14626-L14642)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = SX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-         }
-         const vX = kk[gk[1]][Fk(gk[248])][Fk(639)](kk[gk[2]], LF);
-         kk[gk[25]][Fk(gk[392])][oX(640) + oX(641) + oX(642)](oX(643) + oX(644) + gk[405], vX)
-       } else kk[gk[35]][Fk(gk[286]) + gk[52]] && kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(645) + Fk(646) + gk[405], gk[2]);
-       if (kk[gk[53]] = gk[2], ek[Fk(gk[392])] && FF && !Qk)
-         for (let EX = gk[1]; EX < LF[Fk(gk[404])]; EX++) {
-           const OX = ek[Fk(gk[392])][LF[EX]];
-           Math[Fk(gk[330])](OX - gk[2]) > Math[Fk(gk[330])](kk[gk[53]] - gk[2]) && (kk[gk[53]] = OX)
-         }
-       kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(647) + Fk(648) + Fk(649) + Fk(650), kk[gk[53]]);
-       const VF = (gk[1], Lk[gk[112]])(qk, Qk, FF);
-       qF(kk[gk[25]][Fk(gk[392])][Fk(gk[399]) + Fk(gk[400]) + Fk(gk[401])](Fk(gk[406]) + Fk(651) + Fk(652) + Fk(653) + gk[421], VF), kk[gk[1]].MJ.aN(kk[gk[35]][gk[407]]).uC = (gk[1], Lk[gk[285]])(ek[Fk(gk[408]) + Fk(gk[409])], LF, qk[Fk(gk[408]) + Fk(gk[409])])), yk === ik[gk[394] … [truncated]
-       const zF = kk[gk[25]][gk[317]] * kk[gk[25]][Fk(gk[392])][Fk(659) + Fk(660) + Fk(661) + Fk(662)]() * (kk[gk[35]][Fk(gk[286]) + gk[52]] ? XF(kk[gk[1]], kk[gk[2]], Nk) : gk[2]),
-         SF = Number[Fk(663)](zF) ? gk[1] : Math[Fk(gk[412])](-Tk[gk[53]][Fk(gk[413]) + Fk(gk[328])], Math[Fk(gk[398])](zF, Tk[gk[53]][Fk(gk[413]) + Fk(gk[328])]));
-       qk[Fk(gk[414]) + gk[415]] && qk[Fk(gk[414]) + gk[415]][Fk(gk[416]) + Fk(gk[417])] > gk[1] && (FF || Qk && qk[Fk(gk[414]) + gk[415]][Fk(668)]) && (gk[1], zk[gk[41]])(kk[gk[10]], kk[gk[35]][Fk(gk[414]) + Fk(669) + Fk(gk[440])], qk[Fk(gk[414]) + gk[415]][Fk(gk[416]) + Fk(gk[41 … [truncated]
- ... (1 more removed lines; see GitHub link above)
+           return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = Zh(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
+         }(tm[1], cm[tm[28]])(mm[tm[38]], mm[tm[20]][Tm(tm[355]) + Tm(647) + Tm(tm[377])], im[Tm(tm[355]) + tm[356]][Tm(tm[357]) + kh(649)], mm[tm[8]])
+       }
+       const kT = im[Tm(650)];
```

#### 2009. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14644-L14648` → after: `L14454-L14474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14454-L14474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14454-L14474) · [Before (L14644-L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14644-L14648)

```diff
-         const nX = (Math[Fk(672)](kk[gk[10]][gk[310]][gk[1]] * kk[gk[10]][gk[310]][gk[1]] + kk[gk[10]][gk[310]][gk[35]] * kk[gk[10]][gk[310]][gk[35]]) - oF[Fk(673) + gk[80]]) * oF[Fk(gk[418]) + Fk(675) + Fk(676) + gk[394]];
-         if (nX > gk[1] && kk[gk[10]][gk[310]][gk[2]] < nX) {
-           const GX = kk[gk[50]] / 1e3,
-             pX = (nX - kk[gk[10]][gk[310]][gk[2]]) * jk[gk[4]][Fk(677) + Fk(678)](oF[Fk(gk[418]) + Fk(679) + Fk(680)] * GX);
-           qF(lk()[Fk(gk[420])](pk, gk[1], pX * kk[gk[10]].Xq / GX, gk[1]), kk[gk[10]][Fk(682) + Fk(683)](pk))
+         const bh = (Math[Tm(651)](mm[tm[38]][tm[264]][tm[1]] * mm[tm[38]][tm[264]][tm[1]] + mm[tm[38]][tm[264]][tm[20]] * mm[tm[38]][tm[264]][tm[20]]) - kT[Tm(652) + tm[92]]) * kT[Tm(tm[360]) + Tm(654) + Tm(655) + tm[358]];
+         if (bh > tm[1] && mm[tm[38]][tm[264]][tm[2]] < bh) {
+           function Sh(...mm) {
+             for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = 'VnJ!QgpaHToRUbYfclLeXPiFkAjhSZ(<_BN*y0,|t~Dq[]sG"2`O@rd;9WI)vEMzm}uCK^{%6:53+8x.=?$#1w/4>&7', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[-tm[157]] = mm[tm[20]].length, mm[tm[359]] = [], mm[tm[8]] = tm[1], mm[tm[9]] = tm[1], mm[tm … [truncated]
+               if (mm[tm[40]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[3]]]), mm[tm[40]] !== -tm[2])
+                 if (mm[tm[7]] < tm[1]) mm[tm[7]] = mm[tm[40]];
+                 else {
+                   DT(mm[tm[7]] += mm[tm[40]] * tm[27], mm[tm[8]] |= mm[tm[7]] << mm[tm[9]], mm[tm[9]] += (mm[tm[7]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
+                   do {
+                     DT(mm[tm[359]].push(mm[tm[8]] & tm[11]), mm[tm[8]] >>= tm[3], mm[tm[9]] -= tm[3])
+                   } while (mm[tm[9]] > tm[24]);
+                   mm[tm[7]] = -tm[2]
+                 } return mm[tm[7]] > -tm[2] && mm[tm[359]].push((mm[tm[8]] | mm[tm[7]] << mm[tm[9]]) & tm[11]), dm(mm[tm[359]])
+           }
+ 
+           function eh(...mm) {
+ ... (5 more added lines; see GitHub link above)
```

#### 2010. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14657` → after: `L14483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14483) · [Before (L14657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14657)

```diff
-             Zk = Xk.isInAir && !lk && (yk.TH[1] < 0 || Lk === qk) && !Xk.hitWhilstAirborne(qk) && tk,
+             Em = hm.isInAir && !wm && (xm.qq[1] < 0 || Rm === im) && !hm.hitWhilstAirborne(im) && pm,
```

#### 2011. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14659-L14661` → after: `L14485-L14487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14485-L14487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14485-L14487) · [Before (L14659-L14661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14659-L14661)

```diff
-             ek = !Zk && Lk !== ik.m.NORMAL;
-           return Xk.movementType = Zk ? qk : ik.m.NORMAL, jk ? Fk.bloxd.updatePositionAndPhysics(Ik, Xk.physicsState, !1, void 0, !0) : ek && (ak.exitsVehicleOnEnd ? Fk.bloxd.removeConsumableVehiclePhysics(Ik, Xk.hasTakenOffTheGround) : Fk.bloxd.updatePositionAndPhysics(Ik, {
-             type: ik.n.DEFAULT,
+             Om = !Em && Rm !== am.l.NORMAL;
+           return hm.movementType = Em ? im : am.l.NORMAL, om ? Tm.bloxd.updatePositionAndPhysics(fm, hm.physicsState, !1, void 0, !0) : Om && (Dm.exitsVehicleOnEnd ? Tm.bloxd.removeConsumableVehiclePhysics(fm, hm.hasTakenOffTheGround) : Tm.bloxd.updatePositionAndPhysics(fm, {
+             type: am.m.DEFAULT,
```

#### 2012. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14663-L14665` → after: `L14489-L14491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14489-L14491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14489-L14491) · [Before (L14663-L14665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14663-L14665)

```diff
-           }, !1, void 0, !0)), (jk || ek) && Fk.bloxd.onMovementTypeChanged(Ik, Xk.movementType, Lk), Xk.isOnGround() ? (Xk.setHitWhilstAirborne(qk, !1), null !== ak.durationMs && (Xk.hasTakenOffTheGround = !1, Xk.floatStartTicksAgo = null)) : null !== ak.durationMs && yk.TH[1] < … [truncated]
-         }(qk, kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[10]], Qk),
-         EF = kk[gk[10]][Fk(684) + Fk(685) + Fk(gk[419])],
+           }, !1, void 0, !0)), (om || Om) && Tm.bloxd.onMovementTypeChanged(fm, hm.movementType, Rm), hm.isOnGround() ? (hm.setHitWhilstAirborne(im, !1), null !== Dm.durationMs && (hm.hasTakenOffTheGround = !1, hm.floatStartTicksAgo = null)) : null !== Dm.durationMs && xm.qq[1] < … [truncated]
+         }(im, mm[tm[1]], mm[tm[2]], mm[tm[20]], mm[tm[38]], Qm),
+         ST = mm[tm[38]][Tm(tm[361]) + Tm(tm[362]) + Tm(tm[363])],
```

#### 2013. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14667-L14713` → after: `L14493-L14500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14493-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14493-L14500) · [Before (L14667-L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14667-L14713)

```diff
-       if (OF ? qF(lk()[Fk(gk[444])](EF, Ck), kk[gk[10]][gk[348]]()) : EF[gk[1]] === gk[1] && EF[gk[2]] === gk[1] && EF[gk[35]] === gk[1] || lk()[Fk(gk[420])](EF, gk[1], gk[1], gk[1]), !qk[Fk(687) + Fk(688) + Fk(689) + gk[421]]) {
-         OF && lk()[Fk(690) + "ct"](kk[gk[10]][gk[310]], kk[gk[10]][gk[310]], EF);
-         const uX = qk[Fk(gk[424]) + Fk(692)];
-         if (uX !== gk[64] && kk[gk[35]][Fk(gk[422]) + Fk(gk[423])] === uX[Fk(693) + Fk(694) + Fk(gk[423])] && qk[Fk(gk[424]) + Fk(gk[425]) + Fk(gk[426])] !== gk[64]) Jk(qk, kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[25]], kk[gk[10]], SF, kk[gk[50]], vF);
-         else if (qk[Fk(gk[424]) + Fk(gk[425]) + Fk(gk[426])] !== gk[64])
-           if (kk[gk[25]][gk[317]])(gk[1], Zk[gk[4]])(kk[gk[1]], kk[gk[2]], kk[gk[35]], kk[gk[25]], kk[gk[10]], SF, qk);
-           else {
-             function bX(...kk) {
-               for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'pYb03[1"uvm#L6PqA5B)E4,;/Ff?e!87^J<9(izTjtH}%`&M=y:w*xCZkaU$@GVg~>|_.]Rr2+{QIWDKclnXhSOsodN', kk[-gk[50]] = "" + (kk[gk[1]] || ""), kk[-gk[69]] = kk[-gk[50]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[20]] = gk[1], kk … [truncated]
-                 if (kk[gk[75]] = kk[gk[2]].indexOf(kk[-gk[50]][kk[gk[39]]]), kk[gk[75]] !== -gk[2])
-                   if (kk[gk[125]] < gk[1]) kk[gk[125]] = kk[gk[75]];
-                   else {
-                     qF(kk[gk[125]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[125]] << kk[gk[20]], kk[gk[20]] += (kk[gk[125]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                     do {
-                       qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[20]] -= gk[11])
-                     } while (kk[gk[20]] > gk[7]);
- ... (31 more removed lines; see GitHub link above)
+       if (eT ? DT(wm()[Tm(tm[380])](ST, ym), mm[tm[38]][tm[298]]()) : ST[tm[1]] === tm[1] && ST[tm[2]] === tm[1] && ST[tm[20]] === tm[1] || wm()[Tm(tm[337])](ST, tm[1], tm[1], tm[1]), !im[Tm(664) + Tm(665) + Tm(666) + tm[220]]) {
+         eT && wm()[Tm(667) + "ct"](mm[tm[38]][tm[264]], mm[tm[38]][tm[264]], ST);
+         const Xh = im[Tm(tm[366]) + Tm(669)];
+         Xh !== tm[48] && mm[tm[20]][Tm(tm[364]) + Tm(tm[365])] === Xh[Tm(670) + Tm(671) + Tm(tm[365])] && im[Tm(tm[366]) + Tm(tm[367]) + Tm(tm[368])] !== tm[48] ? jm(im, mm[tm[1]], mm[tm[2]], mm[tm[20]], mm[tm[15]], mm[tm[38]], ZT, mm[tm[8]], bT) : im[Tm(tm[366]) + Tm(tm[367]) +  … [truncated]
+       }
+       const NT = wm()[Tm(tm[372])](mm[tm[38]][tm[264]]);
+       if (Number[tm[371]](NT)) {
+         if (NT > Am[tm[29]][Tm(tm[354]) + Tm(tm[282])]) {
```

#### 2014. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14715-L14718` → after: `L14502-L14505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14502-L14505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14502-L14505) · [Before (L14715-L14718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14715-L14718)

```diff
-           const NX = Date[CX(712)]();
-           NX - Gk >= 6e4 && qF(console[CX(713)](CX(714) + CX(715) + CX(716) + CX(717) + CX(718) + CX(719) + gk[432] + nF + CX(720) + Tk[gk[53]][CX(gk[428]) + CX(gk[429])] + " (" + nk + CX(721)), nk = gk[1], Gk = NX);
-           const cX = Tk[gk[53]][CX(gk[428]) + CX(gk[429])] / nF;
-           qF(lk()[CX(722)](kk[gk[10]][gk[310]], kk[gk[10]][gk[310]], cX), kk[gk[10]][gk[348]]())
+           const Ph = Date[Tm(686)]();
+           Ph - em >= 6e4 && DT(console[Tm(687)](Tm(688) + Tm(689) + Tm(690) + tm[370] + NT + Tm(691) + Am[tm[29]][Tm(tm[354]) + Tm(tm[282])] + " (" + Sm + Tm(692)), Sm = tm[1], em = Ph);
+           const Hh = Am[tm[29]][Tm(tm[354]) + Tm(tm[282])] / NT;
+           DT(wm()[Tm(693)](mm[tm[38]][tm[264]], mm[tm[38]][tm[264]], Hh), mm[tm[38]][tm[298]]())
```

#### 2015. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14720-L14721` → after: `L14507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14507) · [Before (L14720-L14721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14720-L14721)

```diff
-       } else qF(console[Fk(gk[434])](new Error(Fk(704) + Fk(705) + Fk(706) + Fk(707) + Fk(708) + ": " + kk[gk[10]][gk[310]])[Fk(gk[436])]), lk()[Fk(gk[420])](kk[gk[10]][gk[310]], gk[1], gk[1], gk[1]), kk[gk[10]][gk[348]]());
-       if (!Number[gk[430]](lk()[Fk(gk[431])](kk[gk[10]][gk[433]]))) {
+       } else {
```

#### 2016. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14723-L14725` → after: `L14509-L14511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14509-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14509-L14511) · [Before (L14723-L14725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14723-L14725)

```diff
-           for (qF(kk[gk[13]] = gk[2], kk[-gk[127]] = '[<vy3&>(x6l$).9@VHSP?zAUfje#2}YL!"Qr`=Im^_5cD8Z~J%]+*aB/d|sqCgF7:wXMu1Kk,WipEO;NtT{RhobnG40', kk[-gk[79]] = "" + (kk[gk[1]] || ""), kk[gk[157]] = kk[-gk[79]].length, kk[gk[41]] = [], kk[gk[50]] = gk[1], kk[-gk[143]] = gk[1], k … [truncated]
-             if (kk[gk[75]] = kk[-gk[127]].indexOf(kk[-gk[79]][kk[gk[11]]]), kk[gk[75]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[gk[75]];
+           for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = 'H4UPOBRu%!G"X^sN,K@6T0x&A}F*(9rM])+#3q5c;pEzVDeCoWlQag`yv_|7$8YZjf:I?bSn.2=1~w>hikJ[Lm/{dt<', mm[-tm[288]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[-tm[288]].length, mm[tm[38]] = [], mm[-tm[19]] = tm[1], mm[tm[9]] = tm[1], mm[- … [truncated]
+             if (mm[tm[40]] = mm[tm[16]].indexOf(mm[-tm[288]][mm[tm[69]]]), mm[tm[40]] !== -tm[2])
+               if (mm[-tm[369]] < tm[1]) mm[-tm[369]] = mm[tm[40]];
```

#### 2017. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14727` → after: `L14513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14513) · [Before (L14727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14727)

```diff
-                 qF(kk[gk[52]] += kk[gk[75]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[-gk[143]], kk[-gk[143]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
+                 DT(mm[-tm[369]] += mm[tm[40]] * tm[27], mm[-tm[19]] |= mm[-tm[369]] << mm[tm[9]], mm[tm[9]] += (mm[-tm[369]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
```

#### 2018. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14729-L14732` → after: `L14515-L14518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14515-L14518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14515-L14518) · [Before (L14729-L14732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14729-L14732)

```diff
-                   qF(kk[gk[41]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[-gk[143]] -= gk[11])
-                 } while (kk[-gk[143]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[41]].push((kk[gk[50]] | kk[gk[52]] << kk[-gk[143]]) & gk[12]), hk(kk[gk[41]])
+                   DT(mm[tm[38]].push(mm[-tm[19]] & tm[11]), mm[-tm[19]] >>= tm[3], mm[tm[9]] -= tm[3])
+                 } while (mm[tm[9]] > tm[24]);
+                 mm[-tm[369]] = -tm[2]
+               } return mm[-tm[369]] > -tm[2] && mm[tm[38]].push((mm[-tm[19]] | mm[-tm[369]] << mm[tm[9]]) & tm[11]), dm(mm[tm[38]])
```

#### 2019. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14736` → after: `L14522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14522) · [Before (L14736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14736)

```diff
-           return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = WX(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
+           return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = yh(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
```

#### 2020. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14738` → after: `L14524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14524) · [Before (L14738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14738)

```diff
-         qF(console[fX(723)](new Error(fX(724) + fX(725) + fX(726) + gk[432] + kk[gk[10]][gk[433]])[fX(727)]), lk()[fX(728)](kk[gk[10]][gk[433]], gk[1], gk[1], gk[1]), kk[gk[10]][gk[348]]())
+         DT(console[Tm(tm[373])](new Error(Tm(681) + Tm(682) + Tm(683) + mm[tm[38]][tm[264]])[Tm(tm[375])]), wm()[Ch(685)](mm[tm[38]][tm[264]], tm[1], tm[1], tm[1]), mm[tm[38]][tm[298]]())
```

#### 2021. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14740` → after: `L14526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14526) · [Before (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14740)

```diff
-       Number[gk[430]](lk()[Fk(gk[431])](kk[gk[10]][gk[435]])) || qF(console[Fk(gk[434])](new Error(Fk(729) + Fk(730) + Fk(731) + Fk(732) + Fk(733) + kk[gk[10]][gk[435]])[Fk(gk[436])]), lk()[Fk(gk[420])](kk[gk[10]][gk[435]], gk[1], gk[1], gk[1]), kk[gk[10]][gk[348]]()), qF(kk[gk[3 … [truncated]
+       Number[tm[371]](wm()[Tm(tm[372])](mm[tm[38]][tm[374]])) || DT(console[Tm(tm[373])](new Error(Tm(694) + Tm(695) + Tm(696) + tm[370] + mm[tm[38]][tm[374]])[Tm(tm[375])]), wm()[Tm(tm[337])](mm[tm[38]][tm[374]], tm[1], tm[1], tm[1]), mm[tm[38]][tm[298]]()), Number[tm[371]](wm() … [truncated]
```

#### 2022. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14742-L14746` → after: `L14528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14528) · [Before (L14742-L14746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14742-L14746)

```diff
-     const FF = gk[61];
- 
-     function IF(...kk) {
-       return Ak = [kk, {}], Mk(mk(740))
-     }
+     const TT = tm[121];
```

#### 2023. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14749` → after: `L14531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14531) · [Before (L14749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14749)

```diff
-       return Ak = [kk, {}], Mk(mk(741))
+       return Lm = [mm, {}], Fm(Um(710))
```

#### 2024. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14753-L14755` → after: `L14535-L14536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14535-L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14535-L14536) · [Before (L14753-L14755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14753-L14755)

```diff
-       var Fk;
-       return Fk = {
-         get [mk(742) + gk[131]]() {
+       var Tm = {
+         get [Um(711) + tm[128]]() {
```

#### 2025. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14758-L14771` → after: `L14539-L14540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14539-L14540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14539-L14540) · [Before (L14758-L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14758-L14771)

```diff
-       }, Ak = [kk, Fk], Mk(function(...kk) {
-         return kk[gk[13]] = gk[2], typeof Rk[kk[gk[1]]] === gk[14] ? Rk[kk[gk[1]]] = function(...kk) {
-           for (qF(kk[gk[13]] = gk[2], kk[gk[2]] = 'xTBOGmMAjhp=HQ?6a:!N{UW2/`S8|CK3oXsIw&)E~L]vJFc9>"qP%^4#zer;d(R.[ut@Z$i1bkY,nyD<Vf*}l_507+g', kk[gk[35]] = "" + (kk[gk[1]] || ""), kk[gk[4]] = kk[gk[35]].length, kk[gk[10]] = [], kk[gk[50]] = gk[1], kk[gk[351]] = gk[1], kk[gk[52] … [truncated]
-             if (kk[-gk[20]] = kk[gk[2]].indexOf(kk[gk[35]][kk[gk[232]]]), kk[-gk[20]] !== -gk[2])
-               if (kk[gk[52]] < gk[1]) kk[gk[52]] = kk[-gk[20]];
-               else {
-                 qF(kk[gk[52]] += kk[-gk[20]] * gk[29], kk[gk[50]] |= kk[gk[52]] << kk[gk[351]], kk[gk[351]] += (kk[gk[52]] & gk[31]) > gk[32] ? gk[33] : gk[34]);
-                 do {
-                   qF(kk[gk[10]].push(kk[gk[50]] & gk[12]), kk[gk[50]] >>= gk[11], kk[gk[351]] -= gk[11])
-                 } while (kk[gk[351]] > gk[7]);
-                 kk[gk[52]] = -gk[2]
-               } return kk[gk[52]] > -gk[2] && kk[gk[10]].push((kk[gk[50]] | kk[gk[52]] << kk[gk[351]]) & gk[12]), hk(kk[gk[10]])
-         }(Uk[kk[gk[1]]]) : Rk[kk[gk[1]]]
-       }(743))
+       };
+       return Lm = [mm, Tm], Fm(Um(712), Um(tm[381]) + Um(tm[382]), Um(tm[383]) + Um(tm[384]))[Um(tm[385])]
```

#### 2026. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14775` → after: `L14544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14544) · [Before (L14775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14775)

```diff
-       return Ak = [kk, {}], Mk(mk(744))
+       return Lm = [mm, {}], Fm(Um(718))
```

#### 2027. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14779` → after: `L14548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14548) · [Before (L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14779)

```diff
-       return Ak = [kk, {}], Mk(mk(745))
+       return Lm = [mm, {}], Fm(Um(719))
```

#### 2028. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14783` → after: `L14552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14552) · [Before (L14783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14783)

```diff
-       return Ak = [kk, {}], Mk(mk(746), mk(747) + mk(748), mk(749) + mk(750))[mk(751) + mk(752)]
+       return Lm = [mm, {}], Fm(Um(720), Um(tm[381]) + Um(tm[382]), Um(tm[383]) + Um(tm[384]))[Um(tm[385])]
```

#### 2029. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14787` → after: `L14556-L14570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14556-L14570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14556-L14570) · [Before (L14787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14787)

```diff
-       return Ak = [kk, {}], Mk(mk(753))
+       function Tm(...mm) {
+         return mm[tm[12]] = tm[2], typeof Pm[mm[tm[1]]] === tm[17] ? Pm[mm[tm[1]]] = function(...mm) {
+           for (DT(mm[tm[12]] = tm[2], mm[tm[16]] = ':70!%H3[bta9L/T(k=i2SxX{l>e&1hsR5Ed8y+W@^u~)|IMf`BJr$K*nzQoNU_?6ZPG#c<AOpFYqV]Cg,D}.wj4;v"m', mm[tm[20]] = "" + (mm[tm[1]] || ""), mm[tm[15]] = mm[tm[20]].length, mm[tm[34]] = [], mm[tm[28]] = tm[1], mm[tm[29]] = tm[1], mm[-tm[3 … [truncated]
+             if (mm[tm[386]] = mm[tm[16]].indexOf(mm[tm[20]][mm[tm[69]]]), mm[tm[386]] !== -tm[2])
+               if (mm[-tm[387]] < tm[1]) mm[-tm[387]] = mm[tm[386]];
+               else {
+                 DT(mm[-tm[387]] += mm[tm[386]] * tm[27], mm[tm[28]] |= mm[-tm[387]] << mm[tm[29]], mm[tm[29]] += (mm[-tm[387]] & tm[30]) > tm[31] ? tm[32] : tm[33]);
+                 do {
+                   DT(mm[tm[34]].push(mm[tm[28]] & tm[11]), mm[tm[28]] >>= tm[3], mm[tm[29]] -= tm[3])
+                 } while (mm[tm[29]] > tm[24]);
+                 mm[-tm[387]] = -tm[2]
+               } return mm[-tm[387]] > -tm[2] && mm[tm[34]].push((mm[tm[28]] | mm[-tm[387]] << mm[tm[29]]) & tm[11]), dm(mm[tm[34]])
+         }(Hm[mm[tm[1]]]) : Pm[mm[tm[1]]]
+       }
+       return Lm = [mm, {}], new Fm(Um(tm[43]), Um(tm[381]) + Tm(721), Tm(722) + Tm(723))[Tm(724)]
```

#### 2030. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14793` → after: `L14576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14576) · [Before (L14793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14793)

```diff
-     const LF = Xk.i;
+     const iT = hm.f;
```

#### 2031. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14797-L14798` → after: `L14580-L14581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14580-L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14580-L14581) · [Before (L14797-L14798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14797-L14798)

```diff
-         MJ: Ik
-       } = kk, Xk = kk.MJ.ku("movement");
+         qI: fm
+       } = mm, hm = mm.qI.sG("movement");
```

#### 2032. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14801-L14804` → after: `L14584-L14587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14584-L14587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14584-L14587) · [Before (L14801-L14804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14801-L14804)

```diff
-         if (Ik.Kkk(ik.Xu)) {
-           const Xk = Ik.aN(ik.Xu),
-             Tk = Ik.KFk(ik.Xu);
-           kk.bloxd.regrowPlayerBody(ik.Xu), bk(kk, ik.Xu, ik, Tk, Xk, Fk)
+         if (fm.Vmm(am.lG)) {
+           const hm = fm.WC(am.lG),
+             Am = fm.ITm(am.lG);
+           mm.bloxd.regrowPlayerBody(am.lG), Xm(mm, am.lG, am, Am, hm, Tm)
```

#### 2033. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14809` → after: `L14592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14592) · [Before (L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14809)

```diff
-   37763: (kk, Fk, Ik) => {
+   37795: (mm, Tm, fm) => {
```

#### 2034. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14815-L14824` → after: `L14598-L14607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14598-L14607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14598-L14607) · [Before (L14815-L14824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14815-L14824)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(34),
-       ik = Ik(37769),
-       yk = Ik(1301),
-       lk = Ik(1120),
-       ak = Ik(36824),
-       qk = Ik(337),
-       Lk = Ik(1194),
-       tk = Ik(37672),
-       Zk = Ik(37447);
+     var hm = fm(23),
+       Am = fm(31),
+       am = fm(37802),
+       xm = fm(1321),
+       wm = fm(1162),
+       Dm = fm(36895),
+       im = fm(354),
+       Rm = fm(1214),
+       pm = fm(37712),
+       Em = fm(37457);
```

#### 2035. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14852` → after: `L14635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14635) · [Before (L14852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14852)

```diff
-         mJ: function(kk, Fk) {
+         pI: function(mm, Tm) {
```

#### 2036. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14859` → after: `L14642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14642) · [Before (L14859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14859)

```diff
-       const Ik = kk.MJ.ku("movementInputs"),
+       const fm = mm.qI.sG("movementInputs"),
```

#### 2037. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14861` → after: `L14644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14644) · [Before (L14861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14861)

```diff
-           MJ: Tk
+           qI: Am
```

#### 2038. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14863` → after: `L14646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14646) · [Before (L14863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14863)

```diff
-         ik = Zk.b.getMovementHeading(kk);
+         am = Em.e.getMovementHeading(mm);
```

#### 2039. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14865-L14866` → after: `L14648-L14649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14648-L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14648-L14649) · [Before (L14865-L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14865-L14866)

```diff
-         const Ik = Tk.KFk(yk.Xu),
-           lk = Tk.FFk(yk.Xu),
+         const fm = Am.ITm(xm.lG),
+           wm = Am.mTm(xm.lG),
```

#### 2040. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14868` → after: `L14651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14651) · [Before (L14868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14868)

```diff
-           qk = kk.bloxd.getResolvedPhysicsSettings(yk.Xu, ak),
+           im = mm.bloxd.getResolvedPhysicsSettings(xm.lG, Dm),
```

#### 2041. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14870` → after: `L14653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14653) · [Before (L14870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14870)

```diff
-         yk._gamepadDroveLastTick = !!yk.gamepad, yk.gamepad ? xk(kk, Ik, lk, qk, yk, yk.gamepad, ik, Fk) : yk.isTouchscreen ? (Lk && Ok(kk, Ik, lk, yk), qk.steering && 0 !== qk.speedMultiplier ? Sk(kk, Ik, lk, yk, qk.steering, yk.joyStickMoveVec, ik, Fk) : (Ik.heading = (ik + 2 * … [truncated]
+         xm._gamepadDroveLastTick = !!xm.gamepad, xm.gamepad ? Vm(mm, fm, wm, im, xm, xm.gamepad, am, Tm) : xm.isTouchscreen ? (Rm && bm(mm, fm, wm, xm), im.steering && 0 !== im.speedMultiplier ? zm(mm, fm, wm, xm, im.steering, xm.joyStickMoveVec, am, Tm) : (fm.heading = (am + 2 * … [truncated]
```

#### 2042. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14876` → after: `L14659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14659) · [Before (L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14876)

```diff
-         gJ: ak
+         xI: Dm
```

#### 2043. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14881` → after: `L14664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14664) · [Before (L14881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14881)

```diff
-       ak.canCrouch ? (Ik.shouldIgnoreCrouchingSpeedReduction() && (ik.padSneakToggled = !1), Xk.d.get("clientEscMenuOptions").crouchIsToggle ? Fk.setCrouching(ik.crouchToggled || ik.padSneakToggled) : (Fk.setCrouching(!!ik.crouch || ik.padSneakToggled), ik.crouchToggled = !1)) :  … [truncated]
+       Dm.canCrouch ? (fm.shouldIgnoreCrouchingSpeedReduction() && (am.padSneakToggled = !1), hm.c.get("clientEscMenuOptions").crouchIsToggle ? Tm.setCrouching(am.crouchToggled || am.padSneakToggled) : (Tm.setCrouching(!!am.crouch || am.padSneakToggled), am.crouchToggled = !1)) :  … [truncated]
```

#### 2044. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14903` → after: `L14686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14686) · [Before (L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14903)

```diff
-         gJ: ak
+         xI: Dm
```

#### 2045. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14922` → after: `L14705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14705) · [Before (L14922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14922)

```diff
-         gJ: Tk
+         xI: Am
```

#### 2046. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14932` → after: `L14715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14715) · [Before (L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14932)

```diff
-       Fk.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", kk.gJ.speedMultiplier), (0, tk.e)(kk, Ik, Fk, Tk, ik, yk, lk, ak, qk), Xk._moving = 0 !== ik || 0 !== yk
+       Tm.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", mm.xI.speedMultiplier), (0, pm.i)(mm, fm, Tm, Am, am, xm, wm, Dm, im), hm._moving = 0 !== am || 0 !== xm
```

#### 2047. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14940` → after: `L14723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14723) · [Before (L14940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14940)

```diff
-       Vk(kk, Fk, Ik, Xk, Tk, ik ? qk.e.clamp(-ik.y, -1, 1) : 0, ik ? qk.e.clamp(ik.x, -1, 1) : 0, Qk(kk, Fk, Ik, Xk), yk, lk)
+       Jm(mm, Tm, fm, hm, Am, am ? im.c.clamp(-am.y, -1, 1) : 0, am ? im.c.clamp(am.x, -1, 1) : 0, Qm(mm, Tm, fm, hm), xm, wm)
```

#### 2048. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14946` → after: `L14729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14729) · [Before (L14946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14946)

```diff
-       Fk.speed = ik * Qk(kk, Fk, Ik, Xk), Fk.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", kk.gJ.speedMultiplier)
+       Tm.speed = am * Qm(mm, Tm, fm, hm), Tm.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", mm.xI.speedMultiplier)
```

#### 2049. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14950` → after: `L14733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14733) · [Before (L14950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14950)

```diff
-       vk(kk, kk.MJ.KFk(kk.oR), kk.MJ.FFk(kk.oR), kk.MJ.mFk())
+       Zm(mm, mm.qI.ITm(mm.xH), mm.qI.mTm(mm.xH), mm.qI.tTm())
```

#### 2050. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14954` → after: `L14737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14737) · [Before (L14954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14954)

```diff
-       Fk.jumping = Xk.touchJump, Fk.setCrouching(kk.gJ.canCrouch && (Xk.touchCrouch || Xk.padSneakToggled)), vk(kk, Fk, Ik, Xk)
+       Tm.jumping = hm.touchJump, Tm.setCrouching(mm.xI.canCrouch && (hm.touchCrouch || hm.padSneakToggled)), Zm(mm, Tm, fm, hm)
```

#### 2051. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14957-L14976` → after: `L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14740) · [Before (L14957-L14976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14957-L14976)

```diff
-     const ck = [0, 1, 8, 255, "length", 38, 3, 95, "f", "undefined", void 0, 64, 118, 115, 2, 119, 63, 6, "fromCodePoint", 7, 12, "push", 219, "b", "g", 148, "h", 154, 91, "e", 8191, 88, 13, 14, 57, "c", null, "te", 121, "||", "split", "a", 150, !1, !0, 5, 4, 186, 127, 128, 216,  … [truncated]
- 
-     function Wk(...kk) {
-       return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = function(kk) {
-         var Fk, Ik, Xk, Tk, ik, yk, lk;
-         for (dk(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = ck[0], ik = ck[0], yk = -ck[1]), lk = ck[0]; lk < Ik; lk++) {
-           var ak = '8,u&>*%<9:y@)14PRo#rhEDk^_qnK?}!MvY=d532+SO~cZw6t/UIfxspTN"jHg;XGQJFlC].{BWizbV(a|AL[$07`me'.indexOf(Fk[lk]);
-           if (ak !== -ck[1])
-             if (yk < ck[0]) yk = ak;
-             else {
-               dk(yk += ak * ck[28], Tk |= yk << ik, ik += (yk & ck[30]) > ck[31] ? ck[32] : ck[33]);
-               do {
-                 dk(Xk.push(Tk & ck[3]), Tk >>= ck[2], ik -= ck[2])
-               } while (ik > ck[19]);
-               yk = -ck[1]
-             }
- ... (4 more removed lines; see GitHub link above)
+     const rm = ["b", 0, 1, "h", 157, 82, "i", 183, 94, 6, 12, 8, 255, "length", 2, 129, 89, 143, "undefined", void 0, 4, 3, 142, 63, "fromCodePoint", 7, "push", "a", 91, 8191, 88, 13, 14, 151, 166, "c", "g", "e", 212, 175, "d", !1, 209, 154, 41, 68, 5, 234, 96, "f", null, 219, 20 … [truncated]
```

#### 2052. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14979` → after: `L14743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14743) · [Before (L14979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14979)

```diff
-       return kk[ck[4]] = ck[1], typeof uk !== ck[9] && uk ? (new uk).decode(new bk(kk[ck[0]])) : typeof Rk !== ck[9] && Rk ? Rk.from(kk[ck[0]]).toString("utf-8") : Nk(kk[ck[0]])
+       return mm[rm[13]] = rm[2], typeof Gm !== rm[18] && Gm ? (new Gm).decode(new Xm(mm[rm[1]])) : typeof Pm !== rm[18] && Pm ? Pm.from(mm[rm[1]]).toString("utf-8") : Cm(mm[rm[1]])
```

#### 2053. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14987-L14988` → after: `L14751-L14752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14751-L14752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14751-L14752) · [Before (L14987-L14988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14987-L14988)

```diff
-     dk(nk = {}, Gk = ["l&>W[zAYIr$)QHJd~?!/]C.SKQ6^Ct;}KllyjY!i%", "!:fxt/mk0r5{hRu#4,", 'bT!f;"c#GN_I_{Gd', "i%]><|}Wls:laLvd3lD!#3.14P={^j9", '=W@M<xf"@h6!mdi3{jPzIw:iYst!,', ':)^/|fQSM:?z_{3#&X"xa;M#~4', ')XYIVZ0W|P+KfP&#ToIb5aJ"XPA_,[3_qk!/>Yr<^196A/0Rs+vn[;o<eQkI,', "(ZcymjM … [truncated]
-       dk(kk[ck[4]] = ck[0], kk[-ck[7]] = [function() {
+     Mm(Sm = {}, em = ["$CQd@wC/JN2_NYHq0Cn@zrG", "A6Fjz&!0_O4+41)wY&YhTxk937.wK;NmNwD,IRNRd)B@*cX!EQf(BV{n]imjP", "o>~iktuq}*zfPK?#O&Ai", "c*uF`_%%O,6jh5^Sb6I@a^7c", "3^nlPEn7R650g!9Mv*J.7/Y%G7$zeon/", "%;ZFm)2E}qOVGoSmv5pIQHLPP7p#V6;#oOCn5dK07{cDk=`mM<gM5", "P9,V]^GN~QJI{1Hq0,Pn … [truncated]
+       Mm(mm[rm[13]] = rm[1], mm[-rm[16]] = [function() {
```

#### 2054. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14996` → after: `L14760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14760) · [Before (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14996)

```diff
-       }], kk[ck[1]] = ck[10], kk[-ck[5]] = []);
+       }], mm[rm[0]] = rm[19], mm[rm[14]] = []);
```

#### 2055. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L14998` → after: `L14762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14762) · [Before (L14998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L14998)

```diff
-         dk(kk[ck[1]] = Object, kk[-ck[5]][ck[21]]("".__proto__.constructor.name))
+         Mm(mm[rm[0]] = Object, mm[rm[14]][rm[26]]("".__proto__.constructor.name))
```

#### 2056. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15000-L15003` → after: `L14764-L14767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14764-L14767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14764-L14767) · [Before (L15000-L15003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15000-L15003)

```diff
-       kk: for (kk[ck[6]] = ck[0]; kk[ck[6]] < kk[-ck[7]][ck[4]]; kk[ck[6]]++) try {
-         for (kk[ck[1]] = kk[-ck[7]][kk[ck[6]]](), kk[ck[8]] = ck[0]; kk[ck[8]] < kk[-ck[5]][ck[4]]; kk[ck[8]]++)
-           if (typeof kk[ck[1]][kk[-ck[5]][kk[ck[8]]]] === ck[9]) continue kk;
-         return kk[ck[1]]
+       mm: for (mm[-rm[15]] = rm[1]; mm[-rm[15]] < mm[-rm[16]][rm[13]]; mm[-rm[15]]++) try {
+         for (mm[rm[0]] = mm[-rm[16]][mm[-rm[15]]](), mm[-rm[17]] = rm[1]; mm[-rm[17]] < mm[rm[14]][rm[13]]; mm[-rm[17]]++)
+           if (typeof mm[rm[0]][mm[rm[14]][mm[-rm[17]]]] === rm[18]) continue mm;
+         return mm[rm[0]]
```

#### 2057. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15005-L15007` → after: `L14769-L14771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14769-L14771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14769-L14771) · [Before (L15005-L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15005-L15007)

```diff
-       return kk[ck[1]] || this
-     }() || {}, uk = pk.TextDecoder, bk = pk.Uint8Array, Rk = pk.je, Uk = pk.String || String, Ck = pk.Array || Array, Nk = function(...kk) {
-       return dk(kk[ck[4]] = ck[0], kk[ck[22]] = new Ck(ck[49]), kk[ck[23]] = Uk[ck[18]] || Uk.fromCharCode, kk[-ck[11]] = []),
+       return mm[rm[0]] || this
+     }() || {}, Gm = Nm.TextDecoder, Xm = Nm.Uint8Array, Pm = Nm.XO, Hm = Nm.String || String, ym = Nm.Array || Array, Cm = function(...mm) {
+       return Mm(mm[rm[13]] = rm[1], mm[rm[27]] = new ym(rm[61]), mm[rm[8]] = Hm[rm[24]] || Hm.fromCharCode, mm[rm[14]] = []),
```

#### 2058. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15009-L15010` → after: `L14773-L14774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14773-L14774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14773-L14774) · [Before (L15009-L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15009-L15010)

```diff
-           for (dk(Fk[ck[4]] = ck[1], Fk[ck[15]] = ck[10], Fk[ck[14]] = ck[10], Fk[ck[13]] = Fk[ck[0]][ck[4]], kk[-ck[11]][ck[4]] = ck[0]), Fk[-ck[12]] = ck[0]; Fk[-ck[12]] < Fk[ck[13]];) dk(Fk[ck[14]] = Fk[ck[0]][Fk[-ck[12]]++], Fk[ck[14]] <= ck[48] ? Fk[ck[15]] = Fk[ck[14]] : Fk … [truncated]
-           return kk[-ck[11]].join("")
+           for (Mm(Tm[rm[13]] = rm[2], Tm[rm[2]] = rm[19], Tm[-rm[22]] = rm[19], Tm[rm[21]] = Tm[rm[1]][rm[13]], mm[rm[14]][rm[13]] = rm[1]), Tm[rm[20]] = rm[1]; Tm[rm[20]] < Tm[rm[21]];) Mm(Tm[-rm[22]] = Tm[rm[1]][Tm[rm[20]]++], Tm[-rm[22]] <= rm[60] ? Tm[rm[2]] = Tm[-rm[22]] : T … [truncated]
+           return mm[rm[14]].join("")
```

#### 2059. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15012-L15014` → after: `L14776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14776) · [Before (L15012-L15014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15012-L15014)

```diff
-     }()), Tk[ck[24]].subscribe(Wk(100) + Wk(101) + Wk(102) + ck[24], (async () => {
-       var kk, Fk, Ik, Xk;
- 
+     }()), (() => {
```

#### 2060. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15016-L15019` → after: `L14778-L14783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14778-L14783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14778-L14783) · [Before (L15016-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15016-L15019)

```diff
-         return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = function(...kk) {
-           for (dk(kk[ck[4]] = ck[1], kk[ck[1]] = 'STjPABWfoLOXdqz:0tlGQ`%FD=aEbx+ICK{JnZ&$vy*HiRr}7Mek?^(|p5!mNcV#6Ug)Yh9u[,1w<4/>_;8@2.3]~"s', kk[-ck[25]] = "" + (kk[ck[0]] || ""), kk[ck[6]] = kk[-ck[25]].length, kk[-ck[34]] = [], kk[ck[29]] = ck[0], kk[ck[8]] = ck[0], kk[ck[19] … [truncated]
-             if (kk[ck[27]] = kk[ck[1]].indexOf(kk[-ck[25]][kk[ck[26]]]), kk[ck[27]] !== -ck[1])
-               if (kk[ck[19]] < ck[0]) kk[ck[19]] = kk[ck[27]];
+         return mm[rm[13]] = rm[2], typeof Sm[mm[rm[1]]] === rm[18] ? Sm[mm[rm[1]]] = function(mm) {
+           var Tm, fm, hm, Am, am, xm, wm;
+           for (Mm(Tm = "" + (mm || ""), fm = Tm.length, hm = [], Am = rm[1], am = rm[1], xm = -rm[2]), wm = rm[1]; wm < fm; wm++) {
+             var Dm = 'jYVer#|H_AQ2uIpBShwvg=93%OCRsLfabMPDGZcdNqXnkKWJ`i~oT<5tm^:l,UE(1.?}y6$*0x&{@4z"]>!);+/[78F'.indexOf(Tm[wm]);
+             if (Dm !== -rm[2])
+               if (xm < rm[1]) xm = Dm;
```

#### 2061. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15021` → after: `L14785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14785) · [Before (L15021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15021)

```diff
-                 dk(kk[ck[19]] += kk[ck[27]] * ck[28], kk[ck[29]] |= kk[ck[19]] << kk[ck[8]], kk[ck[8]] += (kk[ck[19]] & ck[30]) > ck[31] ? ck[32] : ck[33]);
+                 Mm(xm += Dm * rm[28], Am |= xm << am, am += (xm & rm[29]) > rm[30] ? rm[31] : rm[32]);
```

#### 2062. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15023-L15056` → after: `L14787-L14790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14787-L14790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14787-L14790) · [Before (L15023-L15056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15023-L15056)

```diff
-                   dk(kk[-ck[34]].push(kk[ck[29]] & ck[3]), kk[ck[29]] >>= ck[2], kk[ck[8]] -= ck[2])
-                 } while (kk[ck[8]] > ck[19]);
-                 kk[ck[19]] = -ck[1]
-               } return kk[ck[19]] > -ck[1] && kk[-ck[34]].push((kk[ck[29]] | kk[ck[19]] << kk[ck[8]]) & ck[3]), fk(kk[-ck[34]])
-         }(Gk[kk[ck[0]]]) : nk[kk[ck[0]]]
-       }
-       Tk(103) in Bk && function(...kk) {
-         dk(kk[ck[4]] = ck[0], kk[ck[35]] = function(kk) {
-           var Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk = kk.length;
-           if (tk < ck[14]) return ck[0];
-           if (dk(Fk = Math.max(...kk), Ik = Math.min(...kk)), Fk === Ik) return ck[0];
-           for (dk(Xk = Array(tk - ck[1]).fill(Number.MAX_SAFE_INTEGER), Tk = Array(tk - ck[1]).fill(Number.MIN_SAFE_INTEGER), ik = Math.ceil((Fk - Ik) / (tk - ck[1])), yk = ck[0]), lk = ck[0]; lk < tk; lk++) kk[lk] !== Ik && kk[lk] !== Fk && dk(yk = Math.floor((kk[lk] - Ik) / ik) … [truncated]
-           for (dk(ak = Number.MIN_SAFE_INTEGER, qk = Ik), Lk = ck[0]; Lk < tk - ck[1]; Lk++) Xk[Lk] === Number.MAX_SAFE_INTEGER && Tk[Lk] === Number.MIN_SAFE_INTEGER || dk(ak = Math.max(ak, Xk[Lk] - qk), qk = Tk[Lk]);
-           return ak = Math.max(ak, Fk - qk)
-         }, console.log(kk[ck[35]]))
-       }(), dk(void 0, void 0, void 0, void 0);
- ... (18 more removed lines; see GitHub link above)
+                   Mm(hm.push(Am & rm[12]), Am >>= rm[11], am -= rm[11])
+                 } while (am > rm[25]);
+                 xm = -rm[2]
+               }
```

#### 2063. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15059-L15073` → after: `L14804-L14808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14804-L14808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14804-L14808) · [Before (L15059-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15059-L15073)

```diff
-           function ek(...kk) {
-             return kk[ck[4]] = ck[1], typeof nk[kk[ck[0]]] === ck[9] ? nk[kk[ck[0]]] = jk(Gk[kk[ck[0]]]) : nk[kk[ck[0]]]
-           }
-           await (0, lk[Tk(132) + Tk(133) + Tk(134)])(Zk + (ek(135) + "s/") + tk[ck[40]](ck[39])[ck[0]] + ek(136), {
-             [ek(137)]: tk
-           }, {
-             [ek(138) + "s"]: ck[0]
-           })
-         } catch {
-           function wk(kk) {
-             var Fk, Ik, Xk, Tk, ik, yk, lk;
-             for (dk(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = ck[0], ik = ck[0], yk = -ck[1]), lk = ck[0]; lk < Ik; lk++) {
-               var ak = 'wjKUgAHSTarCtDnpJZ7v)]|de!^=}Lq*RWi(1B/EN~Y3:_$2zx,O&;cyM`Imsu4<bl?XP0+#Gf[FQhk."o65V>@%{98'.indexOf(Fk[lk]);
-               if (ak !== -ck[1])
-                 if (yk < ck[0]) yk = ak;
+         function Am(...mm) {
+           return mm[rm[13]] = rm[2], typeof Sm[mm[rm[1]]] === rm[18] ? Sm[mm[rm[1]]] = function(...mm) {
+             for (Mm(mm[rm[13]] = rm[2], mm[rm[2]] = 'D40{C`V>GFo:^a~WOYQ,JeHN8g1B_]&.;lPK(A<R?y#"|xZbm*dwI%U2[6t@M=z95$vhr+/7EXspLfSnTiuc})!jqk3', mm[rm[0]] = "" + (mm[rm[1]] || ""), mm[rm[55]] = mm[rm[0]].length, mm[rm[40]] = [], mm[rm[37]] = rm[1], mm[rm[56]] = rm[1], mm[rm[36] … [truncated]
+               if (mm[rm[11]] = mm[rm[2]].indexOf(mm[rm[0]][mm[rm[54]]]), mm[rm[11]] !== -rm[2])
+                 if (mm[rm[36]] < rm[1]) mm[rm[36]] = mm[rm[11]];
```

#### 2064. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15075` → after: `L14810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14810) · [Before (L15075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15075)

```diff
-                   dk(yk += ak * ck[28], Tk |= yk << ik, ik += (yk & ck[30]) > ck[31] ? ck[32] : ck[33]);
+                   Mm(mm[rm[36]] += mm[rm[11]] * rm[28], mm[rm[37]] |= mm[rm[36]] << mm[rm[56]], mm[rm[56]] += (mm[rm[36]] & rm[29]) > rm[30] ? rm[31] : rm[32]);
```

#### 2065. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15077-L15080` → after: `L14812-L14842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14812-L14842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14812-L14842) · [Before (L15077-L15080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15077-L15080)

```diff
-                     dk(Xk.push(Tk & ck[3]), Tk >>= ck[2], ik -= ck[2])
-                   } while (ik > ck[19]);
-                   yk = -ck[1]
-                 }
+                     Mm(mm[rm[40]].push(mm[rm[37]] & rm[12]), mm[rm[37]] >>= rm[11], mm[rm[56]] -= rm[11])
+                   } while (mm[rm[56]] > rm[25]);
+                   mm[rm[36]] = -rm[2]
+                 } return mm[rm[36]] > -rm[2] && mm[rm[40]].push((mm[rm[37]] | mm[rm[36]] << mm[rm[56]]) & rm[12]), sm(mm[rm[40]])
+           }(em[mm[rm[1]]]) : Sm[mm[rm[1]]]
+         }
+         Am(rm[58]) in lm && function(...mm) {
+           Mm(mm[rm[13]] = rm[1], mm[rm[27]] = function(...mm) {
+             for (Mm(mm[rm[13]] = rm[2], mm[rm[52]] = mm[rm[1]].length, mm[rm[0]] = [], mm[rm[21]] = rm[1]), mm[rm[57]] = rm[1]; mm[rm[57]] < mm[rm[52]]; mm[rm[57]]++) mm[rm[0]].push(mm[rm[57]] !== rm[1] && mm[rm[1]][mm[rm[57]]] > mm[rm[1]][mm[rm[57]] - rm[2]] ? mm[rm[0]][mm[rm[57 … [truncated]
+             for (mm[-rm[58]] = mm[rm[52]] - rm[2]; mm[-rm[58]] >= rm[1]; mm[-rm[58]]--) mm[-rm[58]] !== mm[rm[52]] - rm[2] && mm[rm[1]][mm[-rm[58]]] > mm[rm[1]][mm[-rm[58]] + rm[2]] && (mm[rm[0]][mm[-rm[58]]] = Math.max(mm[rm[0]][mm[-rm[58]]], mm[rm[0]][mm[-rm[58]] + rm[2]] + rm[ … [truncated]
+             return mm[rm[21]]
+           }, console.log(mm[rm[27]]))
+         }(), Mm(void 0, void 0, void 0, void 0);
+         const Dm = rm[59],
+           im = Am(118) + rm[37],
+           pm = (mm = (Tm = (fm = (hm = Object[Am(rm[62]) + Am(rm[63]) + Am(rm[64]) + Am(rm[65])](navigator, Am(123) + Am(124) + Am(125) + "y") !== rm[19] ? Am(126) + rm[66] : rm[19]) !== rm[50] && void 0 !== hm ? hm : Dm ? rm[19] : Am(rm[60]) + Am(rm[61])) !== rm[50] && void 0 != … [truncated]
+ ... (15 more added lines; see GitHub link above)
```

#### 2066. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15085-L15087` → after: `L14845-L14847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14845-L14847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14845-L14847) · [Before (L15085-L15087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15085-L15087)

```diff
-           function Hk(kk) {
-             return typeof nk[kk] === ck[9] ? nk[kk] = wk(Gk[kk]) : nk[kk]
-           }
+             function Om(...mm) {
+               return mm[rm[13]] = rm[2], typeof Sm[mm[rm[1]]] === rm[18] ? Sm[mm[rm[1]]] = om(em[mm[rm[1]]]) : Sm[mm[rm[1]]]
+             }
```

#### 2067. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15089-L15131` → after: `L14849-L14861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14849-L14861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14849-L14861) · [Before (L15089-L15131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15089-L15131)

```diff
-           function Jk(...kk) {
-             kk[ck[4]] = ck[0];
-             const Fk = require("path"),
-               {
-                 version: Ik
-               } = require("../../package"),
-               {
-                 version: Xk
-               } = require("@redacted/enterprise-plugin/package"),
-               {
-                 version: Tk
-               } = require("@redacted/components/package"),
-               {
-                 sdkVersion: ik
-               } = require("@redacted/enterprise-plugin");
-             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Fk.resolve(__dirname, Hk(140) + function(...kk) {
- ... (27 more removed lines; see GitHub link above)
+             function Ym(...mm) {
+               Mm(mm[rm[13]] = rm[1], mm[rm[73]] = function(...Tm) {
+                 return Mm(Tm[rm[13]] = rm[21], Tm[rm[27]] = {}), Tm[rm[14]].length !== Tm[rm[1]].length + Tm[rm[2]].length ? rm[41] : mm[rm[2]](Tm[rm[1]], Tm[rm[2]], Tm[rm[14]], rm[1], rm[1], rm[1], Tm[rm[27]])
+               }, mm[rm[2]] = function(...Tm) {
+                 return Mm(Tm[rm[13]] = rm[25], Tm[rm[25]] = rm[41]), Tm[rm[46]] >= Tm[rm[14]].length ? rm[59] : Tm[rm[9]]["" + Tm[rm[21]] + Tm[rm[20]] + Tm[rm[46]]] !== rm[19] ? Tm[rm[9]]["" + Tm[rm[21]] + Tm[rm[20]] + Tm[rm[46]]] : (Tm[rm[14]][Tm[rm[46]]] === Tm[rm[1]][Tm[rm[21] … [truncated]
+               }, console.log(mm[rm[73]]))
+             }
+             Am(rm[22]) in lm && Ym(), await (0, wm[Om(rm[17]) + Om(144) + Om(145) + Om(146) + Om(147) + Om(148) + Om(149)])(Em + (Om(150) + "s/") + pm[rm[70]](rm[69])[rm[1]] + Om(rm[33]), {
+               [Om(152)]: pm
+             }, {
+               [Om(153) + rm[74]]: rm[1]
+             })
+           } catch {}
```

#### 2068. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15133-L15135` → after: `L14863-L14864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14863-L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14863-L14864) · [Before (L15133-L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15133-L15135)

```diff
-         Tk(126) in Bk && xk()
-       }
-     }))
+       }))
+     })()
```

#### 2069. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15137` → after: `L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14866) · [Before (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15137)

```diff
-   37438: (kk, Fk, Ik) => {
+   37453: (mm, Tm, fm) => {
```

#### 2070. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15143` → after: `L14872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14872) · [Before (L15143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15143)

```diff
-     var Xk = Ik(37447);
+     var hm = fm(37457);
```

#### 2071. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15157` → after: `L14886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14886) · [Before (L15157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15157)

```diff
-         Ix: function(Fk, Ik) {
+         JI: function(Tm, fm) {
```

#### 2072. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15161` → after: `L14890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14890) · [Before (L15161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15161)

```diff
-           } = kk.gJ;
+           } = mm.xI;
```

#### 2073. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15166` → after: `L14895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14895) · [Before (L15166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15166)

```diff
-           const lk = kk.camera.Tm();
+           const wm = mm.camera.aU();
```

#### 2074. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15173` → after: `L14902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14902) · [Before (L15173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15173)

```diff
-       const Ik = kk.MJ.gFk(Fk);
+       const fm = mm.qI.vTm(Tm);
```

#### 2075. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15179-L15180` → after: `L14908-L14909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14908-L14909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14908-L14909) · [Before (L15179-L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15179-L15180)

```diff
-       const yk = null !== (Ik = null === (Xk = kk.MJ.gFk(Fk)) || void 0 === Xk ? void 0 : Xk._prevOpacity) && void 0 !== Ik ? Ik : -1;
-       return yk >= 0 ? yk : null !== (Tk = null === (ik = kk.xR[kk.oR][Fk]) || void 0 === ik ? void 0 : ik.opacity) && void 0 !== Tk ? Tk : 1
+       const xm = null !== (fm = null === (hm = mm.qI.vTm(Tm)) || void 0 === hm ? void 0 : hm._prevOpacity) && void 0 !== fm ? fm : -1;
+       return xm >= 0 ? xm : null !== (Am = null === (am = mm.mH[mm.xH][Tm]) || void 0 === am ? void 0 : am.opacity) && void 0 !== Am ? Am : 1
```

#### 2076. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15186-L15187` → after: `L14915-L14916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14915-L14916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14915-L14916) · [Before (L15186-L15187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15186-L15187)

```diff
-         MJ: jk
-       } = kk, ek = null === (yk = jk.ZY(Fk.Xu)) || void 0 === yk ? void 0 : yk.Im;
+         qI: om
+       } = mm, Om = null === (xm = om.uB(Tm.lG)) || void 0 === xm ? void 0 : xm.hU;
```

#### 2077. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15189` → after: `L14918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14918) · [Before (L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15189)

```diff
-       if (Fk.replayForceHidden || Fk.Xu === kk.oR && kk.camera.VY < .01 && !Xk.b.isCameraDetachedFromPlayer(kk)) {
+       if (Tm.replayForceHidden || Tm.lG === mm.xH && mm.camera.wL < .01 && !hm.e.isCameraDetachedFromPlayer(mm)) {
```

#### 2078. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15192-L15193` → after: `L14921-L14922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14921-L14922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14921-L14922) · [Before (L15192-L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15192-L15193)

```diff
-         const Ik = !Fk.replayForceHidden && Fk.serverOpacity > 0 && null !== (wk = null === (Hk = kk.Xw.Tw) || void 0 === Hk ? void 0 : Hk.castsEntitySunShadows) && void 0 !== wk && wk,
-           Xk = jk.WFk(Fk.Xu);
+         const fm = !Tm.replayForceHidden && Tm.serverOpacity > 0 && null !== (Ym = null === (qm = mm.qY.jY) || void 0 === qm ? void 0 : qm.castsEntitySunShadows) && void 0 !== Ym && Ym,
+           hm = om.sTm(Tm.lG);
```

#### 2079. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15197` → after: `L14926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14926) · [Before (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15197)

```diff
-       const Jk = kk.bloxd.getLifeformEyeHeight(Fk.Xu),
+       const jm = mm.bloxd.getLifeformEyeHeight(Tm.lG),
```

#### 2080. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15205-L15206` → after: `L14934-L14935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14934-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14934-L14935) · [Before (L15205-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15205-L15206)

```diff
-       Fk.Xu === kk.oR && (Qk = Math.max(Qk - 1.20001, 0), sk = 0);
-       (null === (lk = jk.XIk(Fk.Xu)) || void 0 === lk ? void 0 : lk.le) === kk.oR && (sk = 1);
+       Tm.lG === mm.xH && (Qm = Math.max(Qm - 1.20001, 0), nm = 0);
+       (null === (wm = om.hfm(Tm.lG)) || void 0 === wm ? void 0 : wm.kO) === mm.xH && (nm = 1);
```

#### 2081. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15209-L15211` → after: `L14938-L14940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14938-L14940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14938-L14940) · [Before (L15209-L15211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15209-L15211)

```diff
-       const zk = Fk.Xu === kk.oR,
-         Sk = zk && 0 === Vk && Fk.serverOpacity > 0 && null !== (ak = null === (qk = kk.Xw.Tw) || void 0 === qk ? void 0 : qk.castsEntitySunShadows) && void 0 !== ak && ak,
-         vk = zk && (null !== (tk = null === (Zk = jk.WFk(Fk.Xu)) || void 0 === Zk ? void 0 : Zk.drawnHidden) && void 0 !== tk ? tk : Sk) !== Sk;
+       const cm = Tm.lG === mm.xH,
+         zm = cm && 0 === Jm && Tm.serverOpacity > 0 && null !== (Dm = null === (im = mm.qY.jY) || void 0 === im ? void 0 : im.castsEntitySunShadows) && void 0 !== Dm && Dm,
+         Zm = cm && (null !== (pm = null === (Em = om.sTm(Tm.lG)) || void 0 === Em ? void 0 : Em.drawnHidden) && void 0 !== pm ? pm : zm) !== zm;
```

#### 2082. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15220-L15221` → after: `L14949-L14950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14949-L14950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14949-L14950) · [Before (L15220-L15221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15220-L15221)

```diff
-         MJ: lk
-       } = kk, ak = kk.Xw.kp, qk = null !== (Xk = null === (Tk = lk.eFk(Fk.Xu)) || void 0 === Tk ? void 0 : Tk.Ip) && void 0 !== Xk ? Xk : null;
+         qI: wm
+       } = mm, Dm = mm.qY.YG, im = null !== (hm = null === (Am = wm.oTm(Tm.lG)) || void 0 === Am ? void 0 : Am.QG) && void 0 !== hm ? hm : null;
```

#### 2083. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15224` → after: `L14953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14953) · [Before (L15224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15224)

```diff
-           Xk = lk.WFk(Fk.Xu);
+           hm = wm.sTm(Tm.lG);
```

#### 2084. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15229` → after: `L14958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14958) · [Before (L15229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15229)

```diff
-         kk && (ak.set(qk, "aOpacity", Ik), ak.pR(qk, "aOpacity", Ik))
+         mm && (Dm.set(im, "aOpacity", fm), Dm.iH(im, "aOpacity", fm))
```

#### 2085. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15231` → after: `L14960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14960) · [Before (L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15231)

```diff
-       const Lk = null === (ik = lk.getState(Fk.Xu, lk.names.cape)) || void 0 === ik ? void 0 : ik.mesh;
+       const Rm = null === (am = wm.getState(Tm.lG, wm.names.cape)) || void 0 === am ? void 0 : am.mesh;
```

#### 2086. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15233` → after: `L14962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14962) · [Before (L15233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15233)

```diff
-       Lk && (Lk.JR.aOpacity = Ik, Lk.isVisible = !yk && !(null !== (tk = kk.xR[kk.oR][Fk.Xu]) && void 0 !== tk && tk._invisibleEffect))
+       Rm && (Rm.RP.aOpacity = fm, Rm.isVisible = !xm && !(null !== (pm = mm.mH[mm.xH][Tm.lG]) && void 0 !== pm && pm._invisibleEffect))
```

#### 2087. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15236` → after: `L14965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14965) · [Before (L15236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15236)

```diff
-   38084: (kk, Fk, Ik) => {
+   38135: (mm, Tm, fm) => {
```

#### 2088. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15249` → after: `L14978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14978) · [Before (L15249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15249)

```diff
-     var Xk = Ik(354),
+     var hm = fm(362),
```

#### 2089. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15252-L15253` → after: `L14981-L14982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14981-L14982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14981-L14982) · [Before (L15252-L15253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15252-L15253)

```diff
-       yk = Ik(37424),
-       lk = Ik(337),
+       xm = fm(37437),
+       wm = fm(354),
```

#### 2090. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15255-L15261` → after: `L14984-L14990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R14984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L14984-L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L14984-L14990) · [Before (L15255-L15261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15255-L15261)

```diff
-       qk = Ik(38088),
-       Lk = Ik(37139),
-       tk = Ik(37670),
-       Zk = Ik(37662),
-       jk = Ik(37777),
-       ek = Ik(37217),
-       wk = Ik(38092);
+       im = fm(38140),
+       Rm = fm(37175),
+       pm = fm(37708),
+       Em = fm(37701),
+       om = fm(37811),
+       Om = fm(37238),
+       Ym = fm(38145);
```

#### 2091. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15276` → after: `L15005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15005) · [Before (L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15276)

```diff
-         this.target = "", this.Ip = null, this._isVehicle = !1, this._controller = null, this._libraryVersion = 0, this._posLastFrame = Tk().create(), this._headingLastFrame = 0, this._turnHeldSeconds = 0, this._occupied = !1, this._sentHeadingLastFrame = Number.NaN, this._catchi … [truncated]
+         this.target = "", this.QG = null, this._isVehicle = !1, this._controller = null, this._libraryVersion = 0, this._posLastFrame = Am().create(), this._headingLastFrame = 0, this._turnHeldSeconds = 0, this._occupied = !1, this._sentHeadingLastFrame = Number.NaN, this._catchi … [truncated]
```

#### 2092. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15285-L15286` → after: `L15014-L15015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15014-L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15014-L15015) · [Before (L15285-L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15285-L15286)

```diff
-         mJ: function(Fk, Ik) {
-           Ik._isVehicle = (0, ik.s)(Ik.target), Gk(kk, Ik)
+         pI: function(Tm, fm) {
+           fm._isVehicle = (0, am.m)(fm.target), em(mm, fm)
```

#### 2093. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15288` → after: `L15017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15017) · [Before (L15288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15288)

```diff
-         iG: function(Fk, Ik) {
+         oN: function(Tm, fm) {
```

#### 2094. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15292-L15293` → after: `L15021-L15022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15021-L15022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15021-L15022) · [Before (L15292-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15292-L15293)

```diff
-         Ix: function(Fk, Ik) {
-           for (const Xk of Ik) Xk._libraryVersion !== qk.h.version && Gk(kk, Xk), null !== Xk._controller && Bk(kk, Xk, Fk / 1e3)
+         JI: function(Tm, fm) {
+           for (const hm of fm) hm._libraryVersion !== im.f.version && em(mm, hm), null !== hm._controller && Mm(mm, hm, Tm / 1e3)
```

#### 2095. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15300-L15301` → after: `L15029-L15030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15029-L15030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15029-L15030) · [Before (L15300-L15301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15300-L15301)

```diff
-       const Xk = Fk.Xu;
-       Fk._libraryVersion = qk.h.version, Fk._controller = qk.h.createController(Fk.target, kk.Xw.kp, Fk.Ip), Fk._primed = !1, null === (Ik = Wk(kk, Xk)) || void 0 === Ik || Ik.setRigController(Fk._controller), null !== Fk._controller && (0, ek.b)(kk).animations.restoreClip(Xk, Fk … [truncated]
+       const hm = Tm.lG;
+       Tm._libraryVersion = im.f.version, Tm._controller = im.f.createController(Tm.target, mm.qY.YG, Tm.QG), Tm._primed = !1, null === (fm = sm(mm, hm)) || void 0 === fm || fm.setRigController(Tm._controller), null !== Tm._controller && (0, Om.d)(mm).animations.restoreClip(hm, Tm … [truncated]
```

#### 2096. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15306` → after: `L15035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15035) · [Before (L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15306)

```diff
-       return null !== (Ik = null === (Xk = Wk(kk, Fk)) || void 0 === Xk ? void 0 : Xk.getRigController()) && void 0 !== Ik ? Ik : null
+       return null !== (fm = null === (hm = sm(mm, Tm)) || void 0 === hm ? void 0 : hm.getRigController()) && void 0 !== fm ? fm : null
```

#### 2097. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15310` → after: `L15039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15039) · [Before (L15310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15310)

```diff
-       return kk.rigged.binding.target === qk.d
+       return mm.rigged.binding.target === im.b
```

#### 2098. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15314` → after: `L15043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15043) · [Before (L15314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15314)

```diff
-       const Ik = kk.MJ.getState(Fk, "rigAnimation");
+       const fm = mm.qI.getState(Tm, "rigAnimation");
```

#### 2099. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15329` → after: `L15058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15058) · [Before (L15329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15329)

```diff
-       const Xk = kk.MJ.getState(Fk, "rigAnimation");
+       const hm = mm.qI.getState(Tm, "rigAnimation");
```

#### 2100. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15334` → after: `L15063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15063) · [Before (L15334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15334)

```diff
-       const Xk = kk.MJ.getState(Fk, "rigAnimation");
+       const hm = mm.qI.getState(Tm, "rigAnimation");
```

#### 2101. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15342` → after: `L15071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15071) · [Before (L15342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15342)

```diff
-         Xk.setInput(yk.l.HitAngle, null === Ik ? 0 : 180 * lk.e.computeShortestRotation(Tk, Ik) / Math.PI)
+         hm.setInput(xm.h.HitAngle, null === fm ? 0 : 180 * wm.c.computeShortestRotation(Am, fm) / Math.PI)
```

#### 2102. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15344` → after: `L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15073) · [Before (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15344)

```diff
-       return Nk(kk, Fk, ak.n)
+       return Cm(mm, Tm, Dm.g)
```

#### 2103. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15349` → after: `L15078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15078) · [Before (L15349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15349)

```diff
-       return null !== (Ik = kk.MJ.getState(Fk, "animator")) && void 0 !== Ik ? Ik : null
+       return null !== (fm = mm.qI.getState(Tm, "animator")) && void 0 !== fm ? fm : null
```

#### 2104. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15353-L15354` → after: `L15082-L15083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15082-L15083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15082-L15083) · [Before (L15353-L15354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15353-L15354)

```diff
-       const Ik = Wk(kk, Fk.Xu);
-       return null !== Ik && Ik.vIk.EIk && !(0, Lk.pausesOutOfView)(kk, Fk.Xu, Fk.Ip)
+       const fm = sm(mm, Tm.lG);
+       return null !== fm && fm.kfm.bfm && !(0, Rm.pausesOutOfView)(mm, Tm.lG, Tm.QG)
```

#### 2105. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15359` → after: `L15088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15088) · [Before (L15359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15359)

```diff
-         ak = Fk.Xu;
+         Dm = Tm.lG;
```

#### 2106. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15367` → after: `L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15096) · [Before (L15367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15367)

```diff
-       const Ok = lk.e.computeShortestRotation(Fk._headingLastFrame, Lk);
+       const bm = wm.c.computeShortestRotation(Tm._headingLastFrame, Rm);
```

#### 2107. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15374` → after: `L15103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15103) · [Before (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15374)

```diff
-           const Xk = null === (Ik = kk.MJ.XIk(Fk)) || void 0 === Ik ? void 0 : Ik.le;
+           const hm = null === (fm = mm.qI.hfm(Tm)) || void 0 === fm ? void 0 : fm.kO;
```

#### 2108. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15377` → after: `L15106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15106) · [Before (L15377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15377)

```diff
-         Ik && !Fk._occupied && (Fk._turnHeldSeconds = vk), Fk._occupied = Ik, Xk.setInput(yk.l.Occupied, Ik ? 1 : 0), nk[Gk++] = Ik ? ik.h : ik.k
+         fm && !Tm._occupied && (Tm._turnHeldSeconds = Zm), Tm._occupied = fm, hm.setInput(xm.h.Occupied, fm ? 1 : 0), Sm[em++] = fm ? am.f : am.h
```

#### 2109. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15380-L15382` → after: `L15109-L15111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15109-L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15109-L15111) · [Before (L15380-L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15380-L15382)

```diff
-         const Ik = kk.MJ.KFk(ak),
-           Tk = null !== (pk = null === Ik || void 0 === Ik ? void 0 : Ik.pose) && void 0 !== pk ? pk : "standing";
-         Xk.setInput(yk.l.Crouching, null !== Ik && void 0 !== Ik && Ik.crouching ? 1 : 0), Xk.setInput(yk.l.Aiming, (0, wk.c)(kk, ak) ? 1 : 0), "standing" !== Tk && (nk[Gk++] = Tk), null !== Ik && void 0 !== Ik && Ik.crouching && (nk[Gk++] = ik.e), null !== Fk._aiState && (nk[Gk+ … [truncated]
+         const fm = mm.qI.ITm(Dm),
+           Am = null !== (Nm = null === fm || void 0 === fm ? void 0 : fm.pose) && void 0 !== Nm ? Nm : "standing";
+         hm.setInput(xm.h.Crouching, null !== fm && void 0 !== fm && fm.crouching ? 1 : 0), hm.setInput(xm.h.Aiming, (0, Ym.d)(mm, Dm) ? 1 : 0), "standing" !== Am && (Sm[em++] = Am), null !== fm && void 0 !== fm && fm.crouching && (Sm[em++] = am.c), null !== Tm._aiState && (Sm[em+ … [truncated]
```

#### 2110. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15390` → after: `L15119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15119) · [Before (L15390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15390)

```diff
-         return Fk._sentHeadingLastFrame = Ik, Fk._catchingUp = !Number.isNaN(Ik) && Math.abs(lk.e.computeShortestRotation(Lk, Ik)) > Sk, void(Fk._catchingUp && (Fk._turnHeldSeconds = vk))
+         return Tm._sentHeadingLastFrame = fm, Tm._catchingUp = !Number.isNaN(fm) && Math.abs(wm.c.computeShortestRotation(Rm, fm)) > zm, void(Tm._catchingUp && (Tm._turnHeldSeconds = Zm))
```

#### 2111. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15399` → after: `L15128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15128) · [Before (L15399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15399)

```diff
-         !Number.isNaN(ik) && Math.abs(lk.e.computeShortestRotation(ik, Tk)) > yk ? Fk._catchingUp = !0 : Fk._catchingUp && Math.abs(lk.e.computeShortestRotation(Ik, Tk)) <= Sk && (Fk._catchingUp = !1);
+         !Number.isNaN(am) && Math.abs(wm.c.computeShortestRotation(am, Am)) > xm ? Tm._catchingUp = !0 : Tm._catchingUp && Math.abs(wm.c.computeShortestRotation(fm, Am)) <= zm && (Tm._catchingUp = !1);
```

#### 2112. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15407-L15408` → after: `L15136-L15137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15136-L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15136-L15137) · [Before (L15407-L15408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15407-L15408)

```diff
-           kk.setInput(yk.l.GroundSpeed, Fk), kk.setInput(yk.l.ForwardSpeed, Ik), kk.setInput(yk.l.VerticalSpeed, Xk), kk.setInput(yk.l.TurnRate, Tk), kk.setInput(yk.l.OnGround, Math.abs(Xk) < Pk ? 1 : 0)
-         }(Xk, uk / Ik, Rk / Ik, Zk / Ik, Nk / Ik), Fk._snapNext ? (Fk._snapNext = !1, Xk.markDiscontinuity()) : Xk.addTravel(Rk < Kk * uk ? -uk : uk)
+           mm.setInput(xm.h.GroundSpeed, Tm), mm.setInput(xm.h.ForwardSpeed, fm), mm.setInput(xm.h.VerticalSpeed, hm), mm.setInput(xm.h.TurnRate, Am), mm.setInput(xm.h.OnGround, Math.abs(hm) < Im ? 1 : 0)
+         }(hm, Gm / fm, Pm / fm, Em / fm, Cm / fm), Tm._snapNext ? (Tm._snapNext = !1, hm.markDiscontinuity()) : hm.addTravel(Pm < Km * Gm ? -Gm : Gm)
```

#### 2113. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15412-L15413` → after: `L15141-L15142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15141-L15142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15141-L15142) · [Before (L15412-L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15412-L15413)

```diff
-       if (!Fk._isVehicle || (0, tk.d)(kk, Fk.Xu)) return Number.NaN;
-       const Ik = kk.MJ.getState(Fk.Xu, "meshRotation");
+       if (!Tm._isVehicle || (0, pm.c)(mm, Tm.lG)) return Number.NaN;
+       const fm = mm.qI.getState(Tm.lG, "meshRotation");
```

#### 2114. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15417` → after: `L15146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15146) · [Before (L15417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15417)

```diff
-   37777: (kk, Fk, Ik) => {
+   37811: (mm, Tm, fm) => {
```

#### 2115. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15431` → after: `L15160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15160) · [Before (L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15431)

```diff
-     var Xk = Ik(354),
+     var hm = fm(362),
```

#### 2116. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15433-L15438` → after: `L15162-L15167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15162-L15167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15162-L15167) · [Before (L15433-L15438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15433-L15438)

```diff
-       ik = Ik(37780),
-       yk = Ik(37785),
-       lk = Ik(187),
-       ak = Ik(37788),
-       qk = Ik(37488),
-       Lk = Ik(37139);
+       am = fm(37813),
+       xm = fm(37821),
+       wm = fm(198),
+       Dm = fm(37827),
+       im = fm(37517),
+       Rm = fm(37175);
```

#### 2117. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15469` → after: `L15198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15198) · [Before (L15469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15469)

```diff
-       return Xk > Ik ? Ik / Xk : 1
+       return hm > fm ? fm / hm : 1
```

#### 2118. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15535` → after: `L15264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15264) · [Before (L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15535)

```diff
-         const Tk = kk.MJ.getState(Fk, "smoothToServerPos");
+         const Am = mm.qI.getState(Tm, "smoothToServerPos");
```

#### 2119. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15537` → after: `L15266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15266) · [Before (L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15537)

```diff
-         Fk = null === (Xk = kk.MJ.XIk(Fk)) || void 0 === Xk ? void 0 : Xk.le
+         Tm = null === (hm = mm.qI.hfm(Tm)) || void 0 === hm ? void 0 : hm.kO
```

#### 2120. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15547` → after: `L15276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15276) · [Before (L15547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15547)

```diff
-       return !(null === kk || void 0 === kk || !kk.isEnabled()) && (!("rG" in kk) || kk.isVisible && (null === Fk || (0, ak.f)(kk, Fk)))
+       return !(null === mm || void 0 === mm || !mm.isEnabled()) && (!("pG" in mm) || mm.isVisible && (null === Tm || (0, Dm.d)(mm, Tm)))
```

#### 2121. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15552-L15554` → after: `L15281-L15283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15281-L15283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15281-L15283) · [Before (L15552-L15554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15552-L15554)

```diff
-       const Ik = Fk.Xu;
-       if (kk.MJ.XIk(Ik)) return;
-       const Xk = kk.MJ.ZY(Ik).Im,
+       const fm = Tm.lG;
+       if (mm.qI.hfm(fm)) return;
+       const hm = mm.qI.uB(fm).hU,
```

#### 2122. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15558` → after: `L15287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15287) · [Before (L15558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15558)

```diff
-       kk.MJ.setPosition(Ik, Sk(Fk._skipped, Fk._clock.ms, Ok)), Vk(Fk), Nk.clear(), ck(kk, Ik, Xk[0] - Tk, Xk[1] - ik, Xk[2] - yk)
+       mm.qI.setPosition(fm, zm(Tm._skipped, Tm._clock.ms, bm)), Jm(Tm), Cm.clear(), rm(mm, fm, hm[0] - Am, hm[1] - am, hm[2] - xm)
```

#### 2123. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15562-L15563` → after: `L15291-L15292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15291-L15292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15291-L15292) · [Before (L15562-L15563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15562-L15563)

```diff
-       const Xk = kk.MJ.getState(Fk, "smoothToServerPos");
-       return null !== Xk && void 0 !== Xk && Xk._skipping && !kk.MJ.XIk(Fk) ? Sk(Xk._skipped, Xk._clock.ms, Ik) : (Tk().copy(Ik, kk.MJ.OJ(Fk)), Ik)
+       const hm = mm.qI.getState(Tm, "smoothToServerPos");
+       return null !== hm && void 0 !== hm && hm._skipping && !mm.qI.hfm(Tm) ? zm(hm._skipped, hm._clock.ms, fm) : (Am().copy(fm, mm.qI.rV(Tm)), fm)
```

#### 2124. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15567` → after: `L15296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15296) · [Before (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15567)

```diff
-       return kk.MJ.Ukk(Fk, "smoothToServerPos") ? Uk(kk, Fk, Ik) : Tk().add(Ik, kk.MJ.ZY(Fk).Im, kk.SZ)
+       return mm.qI.Pmm(Tm, "smoothToServerPos") ? Hm(mm, Tm, fm) : Am().add(fm, mm.qI.uB(Tm).hU, mm.HE)
```

#### 2125. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15576-L15579` → after: `L15305-L15308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15305-L15308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15305-L15308) · [Before (L15576-L15579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15576-L15579)

```diff
-         MJ: lk
-       } = kk, ak = kk.Xw.kp, Lk = lk.ZY(Fk).Im, tk = lk.eFk(Fk);
-       if (null !== tk && void 0 !== tk && tk.vIk) {
-         if (tk.vIk.EIk) {
+         qI: wm
+       } = mm, Dm = mm.qY.YG, Rm = wm.uB(Tm).hU, pm = wm.oTm(Tm);
+       if (null !== pm && void 0 !== pm && pm.kfm) {
+         if (pm.kfm.bfm) {
```

#### 2126. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15583` → after: `L15312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15312) · [Before (L15583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15583)

```diff
-           ak.setPosition(tk.Ip, Lk[0] + kk[0], Lk[1] + kk[1], Lk[2] + kk[2])
+           Dm.setPosition(pm.QG, Rm[0] + mm[0], Rm[1] + mm[1], Rm[2] + mm[2])
```

#### 2127. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15589` → after: `L15318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15318) · [Before (L15589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15589)

```diff
-         (0, qk.q)(kk, kk.position.x + Ik, kk.position.y + Xk, kk.position.z + Tk), kk.UFk()
+         (0, im.q)(mm, mm.position.x + fm, mm.position.y + hm, mm.position.z + Am), mm.HTm()
```

#### 2128. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15591` → after: `L15320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15320) · [Before (L15591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15591)

```diff
-       const Zk = lk.getState(Fk, lk.names.Fe);
+       const Em = wm.getState(Tm, wm.names.QO);
```

#### 2129. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15595-L15597` → after: `L15324-L15326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15324-L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15324-L15326) · [Before (L15595-L15597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15595-L15597)

```diff
-       for (const qk of lk.ku(lk.names.zK))
-         if (qk.le === Fk) {
-           const Fk = lk.ZY(qk.Xu).Im,
+       for (const im of wm.sG(wm.names.bK))
+         if (im.kO === Tm) {
+           const Tm = wm.uB(im.lG).hU,
```

#### 2130. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15601` → after: `L15330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15330) · [Before (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15601)

```diff
-           Fk[0] += Ik, Fk[1] += Xk, Fk[2] += Tk, ck(kk, qk.Xu, Fk[0] - ik, Fk[1] - yk, Fk[2] - ak)
+           Tm[0] += fm, Tm[1] += hm, Tm[2] += Am, rm(mm, im.lG, Tm[0] - am, Tm[1] - xm, Tm[2] - Dm)
```

#### 2131. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15606-L15607` → after: `L15335-L15336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15335-L15336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15335-L15336) · [Before (L15606-L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15606-L15607)

```diff
-       const Xk = kk.Mkk,
-         Tk = kk.Im,
+       const hm = mm.Wmm,
+         Am = mm.hU,
```

#### 2132. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15615-L15616` → after: `L15344-L15345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15344-L15345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15344-L15345) · [Before (L15615-L15616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15615-L15616)

```diff
-       const Fk = kk.Xw.kp,
-         Ik = kk.MJ.PFk(kk.MJ.names.Fe),
+       const Tm = mm.qY.YG,
+         fm = mm.qI.VTm(mm.qI.names.QO),
```

#### 2133. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15621` → after: `L15350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15350) · [Before (L15621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15621)

```diff
-       }, (() => new yk.e(0, 0, 0, 0)));
+       }, (() => new xm.d(0, 0, 0, 0)));
```

#### 2134. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15643-L15644` → after: `L15372-L15373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15372-L15373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15372-L15373) · [Before (L15643-L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15643-L15644)

```diff
-         const Xk = kk.MJ.eFk(Ik);
-         return !!Xk && (null !== Xk.Ip ? Fk.has(Xk.Ip) && Fk.getActuallyVisible(Xk.Ip) : bk(Xk.mesh, qk))
+         const hm = mm.qI.oTm(fm);
+         return !!hm && (null !== hm.QG ? Tm.has(hm.QG) && Tm.getActuallyVisible(hm.QG) : Xm(hm.mesh, im))
```

#### 2135. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15650` → after: `L15379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15379) · [Before (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15650)

```diff
-           Xk.add(Fk), Fk = null === (Ik = kk.MJ.XIk(Fk)) || void 0 === Ik ? void 0 : Ik.le
+           hm.add(Tm), Tm = null === (fm = mm.qI.hfm(Tm)) || void 0 === fm ? void 0 : fm.kO
```

#### 2136. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15658` → after: `L15387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15387) · [Before (L15658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15658)

```diff
-           const Ik = kk.Xw.mG(),
+           const fm = mm.qY.wG(),
```

#### 2137. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15661-L15663` → after: `L15390-L15392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15390-L15392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15390-L15392) · [Before (L15661-L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15661-L15663)

```diff
-           qk = null, kk.Xw.GIk() ? qk = null !== (yk = Ik.frustumPlanes) && void 0 !== yk ? yk : null : null !== Tk && (ik.b.GetPlanesToRef(Tk.getTransformationMatrix(), ak), qk = ak), vk(null === (Fk = kk.MJ.XIk(kk.camera.aY)) || void 0 === Fk ? void 0 : Fk.le);
-           for (const Xk of kk.MJ.ku(kk.MJ.names.zK)) zk(Xk.Xu) && vk(Xk.le);
-           for (const Xk of kk.MJ.ku("lineToEntity")) bk(Xk._line, qk) && (vk(Xk.Xu), vk(Xk._targetEId))
+           im = null, mm.qY.Nfm() ? im = null !== (xm = fm.frustumPlanes) && void 0 !== xm ? xm : null : null !== Am && (am.c.GetPlanesToRef(Am.getTransformationMatrix(), Dm), im = Dm), Zm(null === (Tm = mm.qI.hfm(mm.camera.yB)) || void 0 === Tm ? void 0 : Tm.kO);
+           for (const hm of mm.qI.sG(mm.qI.names.bK)) cm(hm.lG) && Zm(hm.kO);
+           for (const hm of mm.qI.sG("lineToEntity")) Xm(hm._line, im) && (Zm(hm.lG), Zm(hm._targetEId))
```

#### 2138. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15680` → after: `L15409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15409) · [Before (L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15680)

```diff
-         mJ: function(kk, Fk) {
+         pI: function(mm, Tm) {
```

#### 2139. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15683` → after: `L15412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15412) · [Before (L15683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15683)

```diff
-         iG: function(kk, Fk) {
+         oN: function(mm, Tm) {
```

#### 2140. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15686` → after: `L15415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15415) · [Before (L15686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15686)

```diff
-         Ix: function(Fk, Ik) {
+         JI: function(Tm, fm) {
```

#### 2141. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15689` → after: `L15418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15418) · [Before (L15689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15689)

```diff
-             ik = kk.SZ;
+             am = mm.HE;
```

#### 2142. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15698` → after: `L15427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15427) · [Before (L15698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15698)

```diff
-               Xk._awakeIndex >= 0 || Wk(kk.MJ.ZY(Xk.Xu), Xk.serverPosition, Ik) || Vk(Xk)
+               hm._awakeIndex >= 0 || sm(mm.qI.uB(hm.lG), hm.serverPosition, fm) || Jm(hm)
```

#### 2143. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15705` → after: `L15434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15434) · [Before (L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15705)

```diff
-               tk = kk.MJ.ZY(Ik.Xu);
+               pm = mm.qI.uB(fm.lG);
```

#### 2144. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15711-L15713` → after: `L15440-L15442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15440-L15442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15440-L15442) · [Before (L15711-L15713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15711-L15713)

```diff
-             const jk = kk.MJ.eFk(Ik.Xu);
-             if (!jk || !(null !== (yk = null === (ak = jk.vIk) || void 0 === ak ? void 0 : ak.EIk) && void 0 !== yk ? yk : null === (qk = jk.mesh) || void 0 === qk ? void 0 : qk.isEnabled())) {
-               Ik._skipping = !1, kk.MJ.setPosition(Ik.Xu, Lk);
+             const om = mm.qI.oTm(fm.lG);
+             if (!om || !(null !== (xm = null === (Dm = om.kfm) || void 0 === Dm ? void 0 : Dm.bfm) && void 0 !== xm ? xm : null === (im = om.mesh) || void 0 === im ? void 0 : im.isEnabled())) {
+               fm._skipping = !1, mm.qI.setPosition(fm.lG, Rm);
```

#### 2145. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15716-L15717` → after: `L15445-L15446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15445-L15446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15445-L15446) · [Before (L15716-L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15716-L15717)

```diff
-             if (null !== jk.Ip && Ok(Ik.Xu, jk.Ip)) {
-               Ek(Ik, tk.position, Xk, Fk), kk.MJ.setPosition(Ik.Xu, Lk);
+             if (null !== om.QG && bm(fm.lG, om.QG)) {
+               km(fm, pm.position, hm, Tm), mm.qI.setPosition(fm.lG, Rm);
```

#### 2146. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15723` → after: `L15452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15452) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15723)

```diff
-             (Hk > 100 || Hk < wk) && Tk().copy(ek, Lk), kk.MJ.setPosition(Ik.Xu, ek)
+             (qm > 100 || qm < Ym) && Am().copy(Om, Rm), mm.qI.setPosition(fm.lG, Om)
```

#### 2147. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15729` → after: `L15458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15458) · [Before (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15729)

```diff
-   37769: (kk, Fk, Ik) => {
+   37802: (mm, Tm, fm) => {
```

#### 2148. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15736-L15738` → after: `L15465-L15467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15465-L15467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15465-L15467) · [Before (L15736-L15738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15736-L15738)

```diff
-     var Xk = Ik(1844),
-       Tk = Ik(37139);
-     var ik = Ik(37777);
+     var hm = fm(1877),
+       Am = fm(37175);
+     var am = fm(37811);
```

#### 2149. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15747-L15748` → after: `L15476-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15476-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15476-L15477) · [Before (L15747-L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15747-L15748)

```diff
-           Ip: null,
-           vIk: null,
+           QG: null,
+           kfm: null,
```

#### 2150. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15757` → after: `L15486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15486) · [Before (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15757)

```diff
-         mJ: function(kk, Fk) {
+         pI: function(mm, Tm) {
```

#### 2151. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15760-L15761` → after: `L15489-L15490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15489-L15490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15489-L15490) · [Before (L15760-L15761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15760-L15761)

```diff
-         Ix: function(Fk, Ik) {
-           for (const Xk of Ik) kk.MJ.Ukk(Xk.Xu, "humanoidMesh") || ak(kk, Xk, Fk), Xk.vIk.EIk && ((0, Tk.pausesOutOfView)(kk, Xk.Xu, Xk.Ip) ? Xk._pausedDt += Fk : jk(kk, Xk, Fk))
+         JI: function(Tm, fm) {
+           for (const hm of fm) mm.qI.Pmm(hm.lG, "humanoidMesh") || Dm(mm, hm, Tm), hm.kfm.bfm && ((0, Am.pausesOutOfView)(mm, hm.lG, hm.QG) ? hm._pausedDt += Tm : om(mm, hm, Tm))
```

#### 2152. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15767` → after: `L15496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15496) · [Before (L15767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15767)

```diff
-       const [Xk, Tk, yk] = (0, ik.getDrawnPosition)(kk, Fk.Xu, qk), lk = Fk._drawnPosition;
+       const [hm, Am, xm] = (0, am.getDrawnPosition)(mm, Tm.lG, im), wm = Tm._drawnPosition;
```

#### 2153. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15779` → after: `L15508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15508) · [Before (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15779)

```diff
-       const Ik = kk.MJ.getState(Fk, "updateWalkingState");
+       const fm = mm.qI.getState(Tm, "updateWalkingState");
```

#### 2154. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15787-L15788` → after: `L15516-L15517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15516-L15517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15516-L15517) · [Before (L15787-L15788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15787-L15788)

```diff
-           const Tk = Fk.Xu,
-             ik = kk.MJ.getState(Tk, "humanoidMesh");
+           const Am = Tm.lG,
+             am = mm.qI.getState(Am, "humanoidMesh");
```

#### 2155. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15791` → after: `L15520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15520) · [Before (L15791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15791)

```diff
-             const Fk = kk.MJ.KFk(Tk);
+             const Tm = mm.qI.ITm(Am);
```

#### 2156. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15794-L15796` → after: `L15523-L15525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15523-L15525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15523-L15525) · [Before (L15794-L15796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15794-L15796)

```diff
-               const ik = null === (Ik = kk.MJ.XIk(Fk)) || void 0 === Ik ? void 0 : Ik.le;
-               return null === (Xk = null !== (Tk = ik ? kk.MJ.KFk(ik) : null) && void 0 !== Tk ? Tk : kk.MJ.KFk(Fk)) || void 0 === Xk ? void 0 : Xk.speed
-             }(kk, Tk)) && void 0 !== yk ? yk : Fk.speed, void(tk = null !== (lk = ik.maxWalkingAngleOverride) && void 0 !== lk ? lk : Fk.crouching ? .5 : null)
+               const am = null === (fm = mm.qI.hfm(Tm)) || void 0 === fm ? void 0 : fm.kO;
+               return null === (hm = null !== (Am = am ? mm.qI.ITm(am) : null) && void 0 !== Am ? Am : mm.qI.ITm(Tm)) || void 0 === hm ? void 0 : hm.speed
+             }(mm, Am)) && void 0 !== xm ? xm : Tm.speed, void(pm = null !== (wm = am.maxWalkingAngleOverride) && void 0 !== wm ? wm : Tm.crouching ? .5 : null)
```

#### 2157. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15798` → after: `L15527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15527) · [Before (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15798)

```diff
-           Lk = Fk.drawnSpeed, tk = null !== (Ik = null === (Xk = kk.MJ.getState(Tk, "fourLeggedMesh")) || void 0 === Xk ? void 0 : Xk.maxWalkingAngleOverride) && void 0 !== Ik ? Ik : null
+           Rm = Tm.drawnSpeed, pm = null !== (fm = null === (hm = mm.qI.getState(Am, "fourLeggedMesh")) || void 0 === hm ? void 0 : hm.maxWalkingAngleOverride) && void 0 !== fm ? fm : null
```

#### 2158. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15805` → after: `L15534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15534) · [Before (L15805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15805)

```diff
-       const lk = (ik ? Xk : 1.3 * yk) * Ik / (2 * Fk.walkingLegSwingDuration);
+       const wm = (am ? hm : 1.3 * xm) * fm / (2 * Tm.walkingLegSwingDuration);
```

#### 2159. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15814` → after: `L15543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15543) · [Before (L15814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15814)

```diff
-       return null !== Fk ? Fk : (0, Xk.e)(.16 * (kk - yk) + .9, .9, 1.4)
+       return null !== Tm ? Tm : (0, hm.e)(.16 * (mm - xm) + .9, .9, 1.4)
```

#### 2160. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15822` → after: `L15551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15551) · [Before (L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15822)

```diff
-   37726: (kk, Fk, Ik) => {
+   37758: (mm, Tm, fm) => {
```

#### 2161. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15825` → after: `L15554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15554) · [Before (L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15825)

```diff
-       h: () => yk
+       g: () => xm
```

#### 2162. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15827` → after: `L15556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/119.js#L15556) · [Before (L15827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/119.js#L15827)

```diff
-     const Xk = new(Ik(36393).c)(new URL(Ik.p + Ik.u(47), Ik.b), {
+     const hm = new(fm(36487).d)(new URL(fm.p + fm.u(47), fm.b), {
```
