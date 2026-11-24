# Changed — Bundle Modifications Report (Part 084 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `84 / 140` (**411** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 083](part-083.md) · [Part 085 →](part-085.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/85.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/85.js` (2398 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20)

#### 2150. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23232-L23236` → after: `L23052-L23056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23052-L23056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23052-L23056) · [Before (L23232-L23236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23232-L23236)

```diff
-             function yk(...kk) {
-               var Fk, Ik;
-               for (xI(kk[ZI[12]] = ZI[2], kk[ZI[15]] = "", kk[ZI[0]] = -ZI[2]); ++kk[ZI[0]] < kk[ZI[1]].length;) xI(Fk = kk[ZI[1]].charCodeAt(kk[ZI[0]]), Ik = kk[ZI[0]] + ZI[2] < kk[ZI[1]].length ? kk[ZI[1]].charCodeAt(kk[ZI[0]] + ZI[2]) : ZI[1]), 55296 <= Fk && Fk <= 56319 && 56 … [truncated]
-               return kk[ZI[15]]
-             }
+                 function IS(...SS) {
+                   var HS, gS;
+                   for (Cg(SS[fg[12]] = fg[2], SS[fg[2]] = "", SS[fg[63]] = -fg[2]); ++SS[fg[63]] < SS[fg[1]].length;) Cg(HS = SS[fg[1]].charCodeAt(SS[fg[63]]), gS = SS[fg[63]] + fg[2] < SS[fg[1]].length ? SS[fg[1]].charCodeAt(SS[fg[63]] + fg[2]) : fg[1]), 55296 <= HS && HS <= 563 … [truncated]
+                   return SS[fg[2]]
+                 }
```

#### 2151. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23238-L23243` → after: `L23058-L23062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23058-L23062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23058-L23062) · [Before (L23238-L23243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23238-L23243)

```diff
-             function lk(kk) {
-               var Fk, Ik = Array(kk.length >> ZI[0]);
-               for (Fk = ZI[1]; Fk < Ik.length; Fk++) Ik[Fk] = ZI[1];
-               for (Fk = ZI[1]; Fk < kk.length * ZI[3]; Fk += ZI[3]) Ik[Fk >> ZI[8]] |= (kk.charCodeAt(Fk / ZI[3]) & ZI[11]) << ZI[72] - Fk % ZI[71];
-               return Ik
-             }
+                 function fS(...SS) {
+                   for (Cg(SS[fg[12]] = fg[2], SS[fg[17]] = Array(SS[fg[1]].length >> fg[10])), SS[fg[68]] = fg[1]; SS[fg[68]] < SS[fg[17]].length; SS[fg[68]]++) SS[fg[17]][SS[fg[68]]] = fg[1];
+                   for (SS[fg[68]] = fg[1]; SS[fg[68]] < SS[fg[1]].length * fg[3]; SS[fg[68]] += fg[3]) SS[fg[17]][SS[fg[68]] >> fg[34]] |= (SS[fg[1]].charCodeAt(SS[fg[68]] / fg[3]) & fg[11]) << fg[71] - SS[fg[68]] % fg[69];
+                   return SS[fg[17]]
+                 }
```

#### 2152. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23245-L23248` → after: `L23064-L23067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23064-L23067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23064-L23067) · [Before (L23245-L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23245-L23248)

```diff
-             function ak(...kk) {
-               for (xI(kk[ZI[12]] = ZI[2], kk[-ZI[70]] = ""), kk[ZI[20]] = ZI[1]; kk[ZI[20]] < kk[ZI[1]].length * ZI[71]; kk[ZI[20]] += ZI[3]) kk[-ZI[70]] += String.fromCharCode(kk[ZI[1]][kk[ZI[20]] >> ZI[8]] >>> ZI[72] - kk[ZI[20]] % ZI[71] & ZI[11]);
-               return kk[-ZI[70]]
-             }
+                 function kS(...SS) {
+                   for (Cg(SS[fg[12]] = fg[2], SS[fg[70]] = ""), SS[fg[0]] = fg[1]; SS[fg[0]] < SS[fg[1]].length * fg[69]; SS[fg[0]] += fg[3]) SS[fg[70]] += String.fromCharCode(SS[fg[1]][SS[fg[0]] >> fg[34]] >>> fg[71] - SS[fg[0]] % fg[69] & fg[11]);
+                   return SS[fg[70]]
+                 }
```

#### 2153. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23250-L23252` → after: `L23069-L23071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23069-L23071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23069-L23071) · [Before (L23250-L23252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23250-L23252)

```diff
-             function qk(...kk) {
-               return kk[ZI[12]] = ZI[0], kk[ZI[1]] >>> kk[ZI[2]] | kk[ZI[1]] << ZI[71] - kk[ZI[2]]
-             }
+                 function aS(...SS) {
+                   return SS[fg[12]] = fg[10], SS[fg[1]] >>> SS[fg[2]] | SS[fg[1]] << fg[69] - SS[fg[2]]
+                 }
```

#### 2154. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23254-L23256` → after: `L23073-L23075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23073-L23075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23073-L23075) · [Before (L23254-L23256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23254-L23256)

```diff
-             function tk(...kk) {
-               return kk[ZI[12]] = ZI[0], kk[ZI[1]] >>> kk[ZI[2]]
-             }
+                 function KS(...SS) {
+                   return SS[fg[12]] = fg[10], SS[fg[1]] >>> SS[fg[2]]
+                 }
```

#### 2155. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23258-L23260` → after: `L23077-L23079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23077-L23079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23077-L23079) · [Before (L23258-L23260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23258-L23260)

```diff
-             function Zk(kk, Fk, Ik) {
-               return kk & Fk ^ ~kk & Ik
-             }
+                 function jS(...SS) {
+                   return SS[fg[12]] = fg[25], SS[fg[1]] & SS[fg[2]] ^ ~SS[fg[1]] & SS[fg[10]]
+                 }
```

#### 2156. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23262-L23264` → after: `L23081-L23083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23081-L23083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23081-L23083) · [Before (L23262-L23264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23262-L23264)

```diff
-             function jk(...kk) {
-               return kk[ZI[12]] = ZI[4], kk[ZI[1]] & kk[ZI[2]] ^ kk[ZI[1]] & kk[ZI[0]] ^ kk[ZI[2]] & kk[ZI[0]]
-             }
+                 function GS(...SS) {
+                   return SS[fg[12]] = fg[25], SS[fg[1]] & SS[fg[2]] ^ SS[fg[1]] & SS[fg[10]] ^ SS[fg[2]] & SS[fg[10]]
+                 }
```

#### 2157. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23266-L23268` → after: `L23085-L23087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23085-L23087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23085-L23087) · [Before (L23266-L23268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23266-L23268)

```diff
-             function ek(...kk) {
-               return kk[ZI[12]] = ZI[2], qk(kk[ZI[1]], ZI[0]) ^ qk(kk[ZI[1]], ZI[32]) ^ qk(kk[ZI[1]], 22)
-             }
+                 function CS(...SS) {
+                   return SS[fg[12]] = fg[2], aS(SS[fg[1]], fg[10]) ^ aS(SS[fg[1]], fg[32]) ^ aS(SS[fg[1]], 22)
+                 }
```

#### 2158. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23270-L23272` → after: `L23089-L23091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23089-L23091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23089-L23091) · [Before (L23270-L23272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23270-L23272)

```diff
-             function wk(...kk) {
-               return kk[ZI[12]] = ZI[2], qk(kk[ZI[1]], ZI[9]) ^ qk(kk[ZI[1]], 11) ^ qk(kk[ZI[1]], 25)
-             }
+                 function nS(...SS) {
+                   return SS[fg[12]] = fg[2], aS(SS[fg[1]], fg[21]) ^ aS(SS[fg[1]], 11) ^ aS(SS[fg[1]], 25)
+                 }
```

#### 2159. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23274-L23276` → after: `L23093-L23095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23093-L23095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23093-L23095) · [Before (L23274-L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23274-L23276)

```diff
-             function Hk(...kk) {
-               return kk[ZI[12]] = ZI[2], qk(kk[ZI[1]], ZI[22]) ^ qk(kk[ZI[1]], ZI[69]) ^ tk(kk[ZI[1]], ZI[4])
-             }
+                 function PS(...SS) {
+                   return SS[fg[12]] = fg[2], aS(SS[fg[1]], fg[7]) ^ aS(SS[fg[1]], fg[67]) ^ KS(SS[fg[1]], fg[25])
+                 }
```

#### 2160. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23278-L23280` → after: `L23097-L23099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23097-L23099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23097-L23099) · [Before (L23278-L23280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23278-L23280)

```diff
-             function Jk(kk) {
-               return qk(kk, 17) ^ qk(kk, ZI[74]) ^ tk(kk, ZI[73])
-             }
+                 function QS(...SS) {
+                   return SS[fg[12]] = fg[2], aS(SS[fg[1]], 17) ^ aS(SS[fg[1]], fg[63]) ^ KS(SS[fg[1]], fg[27])
+                 }
```

#### 2161. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23282-L23289` → after: `L23101-L23108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23101-L23108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23101-L23108) · [Before (L23282-L23289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23282-L23289)

```diff
-             function xk(...Fk) {
-               var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, xk, Kk;
-               for (xI(Fk[ZI[12]] = ZI[0], Fk[ZI[76]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Fk[ZI[13]] = new Array(ZI[75])), xI(Fk[ZI[1]][Fk[ZI[2]] >> ZI[8]] |= ZI[48] << ZI[72] - Fk[ZI[2]] % ZI[71], Fk[ZI[1] … [truncated]
-                 for (xI(Ik = Fk[ZI[76]][ZI[1]], Xk = Fk[ZI[76]][ZI[2]], Tk = Fk[ZI[76]][ZI[0]], ik = Fk[ZI[76]][ZI[4]], yk = Fk[ZI[76]][ZI[34]], lk = Fk[ZI[76]][ZI[8]], ak = Fk[ZI[76]][ZI[9]], qk = Fk[ZI[76]][ZI[22]]), tk = ZI[1]; tk < ZI[75]; tk++) xI(Fk[ZI[13]][tk] = tk < ZI[51 … [truncated]
-                 xI(Fk[ZI[76]][ZI[1]] = Pk(Ik, Fk[ZI[76]][ZI[1]]), Fk[ZI[76]][ZI[2]] = Pk(Xk, Fk[ZI[76]][ZI[2]]), Fk[ZI[76]][ZI[0]] = Pk(Tk, Fk[ZI[76]][ZI[0]]), Fk[ZI[76]][ZI[4]] = Pk(ik, Fk[ZI[76]][ZI[4]]), Fk[ZI[76]][ZI[34]] = Pk(yk, Fk[ZI[76]][ZI[34]]), Fk[ZI[76]][ZI[8]] = Pk(l … [truncated]
-               }
-               return Fk[ZI[76]]
-             }
+                 function DS(...HS) {
+                   var gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS;
+                   for (Cg(HS[fg[12]] = fg[10], HS[fg[10]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), HS[fg[25]] = new Array(fg[72])), Cg(HS[fg[1]][HS[fg[2]] >> fg[34]] |= fg[66] << fg[71] - HS[fg[2]] % fg[69], HS … [truncated]
+                     for (Cg(gS = HS[fg[10]][fg[1]], tS = HS[fg[10]][fg[2]], bS = HS[fg[10]][fg[10]], XS = HS[fg[10]][fg[25]], xS = HS[fg[10]][fg[38]], NS = HS[fg[10]][fg[34]], qS = HS[fg[10]][fg[21]], uS = HS[fg[10]][fg[7]]), fS = fg[1]; fS < fg[72]; fS++) Cg(fS < fg[46] ? HS[fg[ … [truncated]
+                     Cg(HS[fg[10]][fg[1]] = wS(gS, HS[fg[10]][fg[1]]), HS[fg[10]][fg[2]] = wS(tS, HS[fg[10]][fg[2]]), HS[fg[10]][fg[10]] = wS(bS, HS[fg[10]][fg[10]]), HS[fg[10]][fg[25]] = wS(XS, HS[fg[10]][fg[25]]), HS[fg[10]][fg[38]] = wS(xS, HS[fg[10]][fg[38]]), HS[fg[10]][fg[34 … [truncated]
+                   }
+                   return HS[fg[10]]
+                 }
```

#### 2162. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23291-L23306` → after: `L23110-L23132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23110-L23132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23110-L23132) · [Before (L23291-L23306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23291-L23306)

```diff
-             function Pk(...kk) {
-               return xI(kk[ZI[12]] = ZI[0], kk[ZI[78]] = (kk[ZI[1]] & ZI[77]) + (kk[ZI[2]] & ZI[77]), kk[ZI[13]] = (kk[ZI[1]] >> ZI[51]) + (kk[ZI[2]] >> ZI[51]) + (kk[ZI[78]] >> ZI[51])), kk[ZI[13]] << ZI[51] | kk[ZI[78]] & ZI[77]
-             }
-             return xI(kk[ZI[12]] = ZI[1], kk[-ZI[55]] = ZI[1], kk[-ZI[63]] = ""), kk[ZI[57]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16800 … [truncated]
-               hex: function(...kk) {
-                 return kk[ZI[12]] = ZI[2], Tk(function(...kk) {
-                   return kk[ZI[12]] = ZI[2], ak(xk(lk(kk[ZI[1]]), kk[ZI[1]].length * ZI[3]))
-                 }(yk(kk[ZI[1]])))
-               },
-               b64: Fk,
-               any: Ik,
-               hex_hmac: function(...kk) {
-                 return kk[ZI[12]] = ZI[0], Tk(Xk(yk(kk[ZI[1]]), yk(kk[ZI[2]])))
-               },
-               b64_hmac: Fk,
-               any_hmac: Ik
+                 function wS(...SS) {
+                   return Cg(SS[fg[12]] = fg[10], SS[fg[17]] = (SS[fg[1]] & fg[73]) + (SS[fg[2]] & fg[73]), SS[-fg[74]] = (SS[fg[1]] >> fg[46]) + (SS[fg[2]] >> fg[46]) + (SS[fg[17]] >> fg[46])), SS[-fg[74]] << fg[46] | SS[fg[17]] & fg[73]
+                 }
+                 return Cg(SS[fg[12]] = fg[1], SS[fg[17]] = fg[1], SS[fg[2]] = ""), SS[fg[4]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16800 … [truncated]
+                   hex: HS,
+                   b64: tS,
+                   any: bS,
+                   hex_hmac: gS,
+                   b64_hmac: tS,
+                   any_hmac: bS
+                 }
+               }();
+               console.log(SS)
+             }(), Cg([
+               [SS[-fg[75]], SS[-fg[57]], SS[fg[10]]], SS[fg[25]]
+             ] = Ig, console[HS(120)]("" + SS[-fg[75]][fg[76]](".") + (HS(fg[95]) + HS(fg[106])) + SS[fg[10]][HS(fg[47]) + "me"] + HS(124) + SS[-fg[57]]))
+ ... (7 more added lines; see GitHub link above)
```

#### 2163. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23308-L23309` → after: `L23134-L23135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23134-L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23134-L23135) · [Before (L23308-L23309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23308-L23309)

```diff
-           }();
-           console.log(kk)
+             return SS[fg[2]]
+           }, console.log(SS[-fg[79]]))
```

#### 2164. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23316-L23317` → after: `L23142-L23163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23142-L23163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23142-L23163) · [Before (L23316-L23317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23316-L23317)

```diff
-             return kk[ZI[12]] = ZI[2], typeof FI[kk[ZI[1]]] === ZI[17] ? FI[kk[ZI[1]]] = function(kk) {
-               var Fk, Ik, Xk, Tk, ik, yk, lk;
+             return SS[fg[12]] = fg[2], typeof Sg[SS[fg[1]]] === fg[16] ? Sg[SS[fg[1]]] = function(...SS) {
+               for (Cg(SS[fg[12]] = fg[2], SS[fg[2]] = 'y<{&9u$3z}NCmK;42!8S[WRGb,|^r>@o?sQJ*BV.Adk]7ve6TwatP5cfnjMi:1"x+(gUDXF%IqL/`pHE_0Y)h=l#~OZ', SS[fg[0]] = "" + (SS[fg[1]] || ""), SS[fg[4]] = SS[fg[0]].length, SS[fg[13]] = [], SS[fg[82]] = fg[1], SS[fg[21]] = fg[1], SS[-fg[8 … [truncated]
+                 if (SS[fg[80]] = SS[fg[2]].indexOf(SS[fg[0]][SS[fg[3]]]), SS[fg[80]] !== -fg[2])
+                   if (SS[-fg[81]] < fg[1]) SS[-fg[81]] = SS[fg[80]];
+                   else {
+                     Cg(SS[-fg[81]] += SS[fg[80]] * fg[29], SS[fg[82]] |= SS[-fg[81]] << SS[fg[21]], SS[fg[21]] += (SS[-fg[81]] & fg[30]) > fg[31] ? fg[32] : fg[33]);
+                     do {
+                       Cg(SS[fg[13]].push(SS[fg[82]] & fg[11]), SS[fg[82]] >>= fg[3], SS[fg[21]] -= fg[3])
+                     } while (SS[fg[21]] > fg[7]);
+                     SS[-fg[81]] = -fg[2]
+                   } return SS[-fg[81]] > -fg[2] && SS[fg[13]].push((SS[fg[82]] | SS[-fg[81]] << SS[fg[21]]) & fg[11]), ag(SS[fg[13]])
+             }(Hg[SS[fg[1]]]) : Sg[SS[fg[1]]]
+           }
+           return HS[fg[12]] = fg[1], bS(130) in jg && function(...SS) {
+             SS[fg[12]] = fg[1]
+           }(), Cg(gS = function(...HS) {
+ ... (6 more added lines; see GitHub link above)
```

#### 2165. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23319` → after: `L23165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23165) · [Before (L23319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23319)

```diff
-                 var ak = '9ChFkBMDRGSesNPVYpalbjTiJnfZItXcEA)WLOowUvQK|rg3?Hmq@*#du51y{/^_;]}48$`%:",=z!<7(62+x>0[~&.'.indexOf(Fk[lk]);
+                 var uS = qS.indexOf(HS[NS]);
```

#### 2166. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23323` → after: `L23169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23169) · [Before (L23323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23323)

```diff
-                     xI(yk += ak * ZI[27], Tk |= yk << ik, ik += (yk & ZI[30]) > ZI[31] ? ZI[32] : ZI[33]);
+                     Cg(xS += uS * fg[29], bS |= xS << XS, XS += (xS & fg[30]) > fg[31] ? fg[32] : fg[33]);
```

#### 2167. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23326` → after: `L23172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23172) · [Before (L23326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23326)

```diff
-                     } while (ik > ZI[22]);
+                     } while (XS > fg[7]);
```

#### 2168. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23358` → after: `L23180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23180) · [Before (L23358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23358)

```diff
-               return kk[ZI[12]] = ZI[2], typeof FI[kk[ZI[1]]] === ZI[17] ? FI[kk[ZI[1]]] = ik(II[kk[ZI[1]]]) : FI[kk[ZI[1]]]
+               return SS[fg[12]] = fg[2], typeof Sg[SS[fg[1]]] === fg[16] ? Sg[SS[fg[1]]] = HS(Hg[SS[fg[1]]]) : Sg[SS[fg[1]]]
```

#### 2169. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23362-L23365` → after: `L23185-L23218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23185-L23218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23185-L23218) · [Before (L23362-L23365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23362-L23365)

```diff
-               xI(kk[ZI[12]] = ZI[1], kk[ZI[15]] = function(...kk) {
-                 for (xI(kk[ZI[12]] = ZI[2], kk[ZI[15]] = ZI[1], kk[ZI[13]] = {}, kk[ZI[57]] = ZI[1], kk[ZI[14]] = ZI[1], kk[ZI[28]] = ZI[1], kk[-ZI[83]] = kk[ZI[1]].length), kk[ZI[37]] = ZI[1]; kk[ZI[37]] < kk[-ZI[83]]; kk[ZI[37]]++) {
-                   for (xI(kk[ZI[13]] = {}, kk[ZI[57]] = ZI[1], kk[ZI[14]] = ZI[2]), kk[-ZI[84]] = kk[ZI[37]] + ZI[2]; kk[-ZI[84]] < kk[-ZI[83]]; kk[-ZI[84]]++) kk[ZI[1]][kk[ZI[37]]].x !== kk[ZI[1]][kk[-ZI[84]]].x || kk[ZI[1]][kk[ZI[37]]].y !== kk[ZI[1]][kk[-ZI[84]]].y ? (kk[ZI[1] … [truncated]
-                   xI(kk[ZI[57]] += kk[ZI[14]], kk[ZI[15]] = Math.max(kk[ZI[15]], kk[ZI[57]]))
+               SS[fg[12]] = fg[1];
+               const HS = require("big-integer");
+               Cg(SS[-fg[94]] = class {
+                 static randomPrime(...SS) {
+                   SS[fg[12]] = fg[2];
+                   const gS = HS.one.shiftLeft(SS[fg[1]] - fg[2]),
+                     tS = HS.one.shiftLeft(SS[fg[1]]).prev();
+                   for (; fg[104];) {
+                     let SS = HS.randBetween(gS, tS);
+                     if (SS.isProbablePrime(fg[92])) return SS
+                   }
+                 }
+                 static generate(SS) {
+                   const gS = HS(fg[105]);
+                   let tS, bS, XS;
+                   do {
+ ... (18 more added lines; see GitHub link above)
```

#### 2170. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23367-L23368` → after: `L23220-L23230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23220-L23230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23220-L23230) · [Before (L23367-L23368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23367-L23368)

```diff
-                 return kk[ZI[15]]
-               }, console.log(kk[ZI[15]]))
+                 static decode(...SS) {
+                   SS[fg[12]] = fg[2];
+                   const HS = SS[fg[1]].toString();
+                   SS[fg[17]] = "";
+                   for (let gS = fg[1]; gS < HS.length; gS += fg[10]) {
+                     let tS = Number(HS.substr(gS, fg[10]));
+                     tS <= fg[107] ? (SS[fg[17]] += String.fromCharCode(Number(HS.substr(gS, fg[25]))), gS++) : SS[fg[17]] += String.fromCharCode(tS)
+                   }
+                   return SS[fg[17]]
+                 }
+               }, module.exports = SS[-fg[94]])
```

#### 2171. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23370-L23372` → after: `L23232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23232) · [Before (L23370-L23372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23370-L23372)

```diff
-             yk(ZI[94]) + ZI[13] in HI && ak(), Fk[ZI[13]]
-           }
-           return Ik
+           }(gS, HS[-fg[83]]), gS
```

#### 2172. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23374` → after: `L23234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23234) · [Before (L23374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23374)

```diff
-         Lk(123) + ZI[25] in HI && tk(), yk = LI[kk] || (LI[kk] = Zk())
+         XS(fg[83]) in jg && uS(), NS = ug[SS] || (ug[SS] = IS())
```

#### 2173. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23377-L23397` → after: `L23237-L23239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23237-L23239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23237-L23239) · [Before (L23377-L23397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23377-L23397)

```diff
-           xI(kk[ZI[12]] = ZI[1], kk[-ZI[22]] = function(...kk) {
-             for (xI(kk[ZI[12]] = ZI[2], kk[ZI[2]] = kk[ZI[1]].length, kk[ZI[13]] = [], kk[ZI[4]] = ZI[1], kk[ZI[85]] = ZI[1], kk[ZI[1]].sort(((kk, Fk) => kk - Fk))), kk[ZI[8]] = ZI[1]; kk[ZI[8]] < kk[ZI[2]]; kk[ZI[8]]++)
-               if (!(kk[ZI[8]] > ZI[1] && kk[ZI[1]][kk[ZI[8]]] === kk[ZI[1]][kk[ZI[8]] - ZI[2]]))
-                 for (xI(kk[ZI[4]] = kk[ZI[8]] + ZI[2], kk[ZI[85]] = kk[ZI[2]] - ZI[2]); kk[ZI[4]] < kk[ZI[85]];)
-                   if (kk[ZI[1]][kk[ZI[8]]] + kk[ZI[1]][kk[ZI[4]]] + kk[ZI[1]][kk[ZI[85]]] < ZI[1]) kk[ZI[4]]++;
-                   else if (kk[ZI[1]][kk[ZI[8]]] + kk[ZI[1]][kk[ZI[4]]] + kk[ZI[1]][kk[ZI[85]]] > ZI[1]) kk[ZI[85]]--;
-             else {
-               for (kk[ZI[13]].push([kk[ZI[1]][kk[ZI[8]]], kk[ZI[1]][kk[ZI[4]]], kk[ZI[1]][kk[ZI[85]]]]); kk[ZI[4]] < kk[ZI[85]] && kk[ZI[1]][kk[ZI[4]]] === kk[ZI[1]][kk[ZI[4]] + ZI[2]];) kk[ZI[4]]++;
-               for (; kk[ZI[4]] < kk[ZI[85]] && kk[ZI[1]][kk[ZI[85]]] === kk[ZI[1]][kk[ZI[85]] - ZI[2]];) kk[ZI[85]]--;
-               xI(kk[ZI[4]]++, kk[ZI[85]]--)
-             }
-             return kk[ZI[13]]
-           }, console.log(kk[-ZI[22]]))
-         }
-         ik(145) in HI && jk(), yk = lk[kk]()
-       }
- ... (5 more removed lines; see GitHub link above)
+           for (Cg(SS[fg[12]] = fg[2], SS[fg[2]] = 'V~YGnXsPUDmgFhJC1f4p@_S9E/<dxtM%^`l5WeRbiz2QH;6jLN!ZT=3wva)*Aqr{k?0oB#&I]$cOK"y,|8+(}u.[7:>', SS[fg[84]] = "" + (SS[fg[1]] || ""), SS[fg[86]] = SS[fg[84]].length, SS[fg[38]] = [], SS[fg[34]] = fg[1], SS[fg[14]] = fg[1], SS[fg[50] … [truncated]
+             if (SS[fg[80]] = SS[fg[2]].indexOf(SS[fg[84]][SS[-fg[85]]]), SS[fg[80]] !== -fg[2])
+               if (SS[fg[50]] < fg[1]) SS[fg[50]] = SS[fg[80]];
```

#### 2174. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23399` → after: `L23241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23241) · [Before (L23399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23399)

```diff
-                 xI(kk[ZI[37]] += kk[ZI[6]] * ZI[27], kk[-ZI[87]] |= kk[ZI[37]] << kk[ZI[9]], kk[ZI[9]] += (kk[ZI[37]] & ZI[30]) > ZI[31] ? ZI[32] : ZI[33]);
+                 Cg(SS[fg[50]] += SS[fg[80]] * fg[29], SS[fg[34]] |= SS[fg[50]] << SS[fg[14]], SS[fg[14]] += (SS[fg[50]] & fg[30]) > fg[31] ? fg[32] : fg[33]);
```

#### 2175. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23401-L23404` → after: `L23243-L23250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23243-L23250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23243-L23250) · [Before (L23401-L23404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23401-L23404)

```diff
-                   xI(kk[ZI[34]].push(kk[-ZI[87]] & ZI[11]), kk[-ZI[87]] >>= ZI[3], kk[ZI[9]] -= ZI[3])
-                 } while (kk[ZI[9]] > ZI[22]);
-                 kk[ZI[37]] = -ZI[2]
-               } return kk[ZI[37]] > -ZI[2] && kk[ZI[34]].push((kk[-ZI[87]] | kk[ZI[37]] << kk[ZI[9]]) & ZI[11]), eI(kk[ZI[34]])
+                   Cg(SS[fg[38]].push(SS[fg[34]] & fg[11]), SS[fg[34]] >>= fg[3], SS[fg[14]] -= fg[3])
+                 } while (SS[fg[14]] > fg[7]);
+                 SS[fg[50]] = -fg[2]
+               } return SS[fg[50]] > -fg[2] && SS[fg[38]].push((SS[fg[34]] | SS[fg[50]] << SS[fg[14]]) & fg[11]), ag(SS[fg[38]])
+         }
+ 
+         function kS(...SS) {
+           return SS[fg[12]] = fg[2], typeof Sg[SS[fg[1]]] === fg[16] ? Sg[SS[fg[1]]] = fS(Hg[SS[fg[1]]]) : Sg[SS[fg[1]]]
```

#### 2176. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23408` → after: `L23254-L23261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23254-L23261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23254-L23261) · [Before (L23408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23408)

```diff
-           return kk[ZI[12]] = ZI[2], typeof FI[kk[ZI[1]]] === ZI[17] ? FI[kk[ZI[1]]] = ek(II[kk[ZI[1]]]) : FI[kk[ZI[1]]]
+           Cg(SS[fg[12]] = fg[1], SS[fg[87]] = function(SS) {
+             var HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS = SS.length;
+             if (fS < fg[10]) return fg[1];
+             if (Cg(HS = Math.max(...SS), gS = Math.min(...SS)), HS === gS) return fg[1];
+             for (Cg(tS = Array(fS - fg[2]).fill(Number.MAX_SAFE_INTEGER), bS = Array(fS - fg[2]).fill(Number.MIN_SAFE_INTEGER), XS = Math.ceil((HS - gS) / (fS - fg[2])), xS = fg[1]), NS = fg[1]; NS < fS; NS++) SS[NS] !== gS && SS[NS] !== HS && Cg(xS = Math.floor((SS[NS] - gS) / X … [truncated]
+             for (Cg(qS = Number.MIN_SAFE_INTEGER, uS = gS), IS = fg[1]; IS < fS - fg[2]; IS++) tS[IS] === Number.MAX_SAFE_INTEGER && bS[IS] === Number.MIN_SAFE_INTEGER || Cg(qS = Math.max(qS, tS[IS] - uS), uS = bS[IS]);
+             return qS = Math.max(qS, HS - uS)
+           }, console.log(SS[fg[87]]))
```

#### 2177. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23410-L23417` → after: `L23263-L23271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23263-L23271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23263-L23271) · [Before (L23410-L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23410-L23417)

```diff
-         return {
-           [wk(148) + wk(149)]: yk
-         }
-       } {
-         function Hk(...kk) {
-           for (xI(kk[ZI[12]] = ZI[2], kk[ZI[2]] = 't|Wm6A40L&qU/b5)@R_+B*SzyPa.^13Xg<o,~]x(lM`{9Jws=HvI#n>k:}CpOD2!?[j;cEfZi"u8rQFVTYK$7%GhNde', kk[ZI[0]] = "" + (kk[ZI[1]] || ""), kk[ZI[90]] = kk[ZI[0]].length, kk[ZI[34]] = [], kk[ZI[82]] = ZI[1], kk[ZI[29]] = ZI[1], kk[ZI[89]]  … [truncated]
-             if (kk[-ZI[27]] = kk[ZI[2]].indexOf(kk[ZI[0]][kk[ZI[3]]]), kk[-ZI[27]] !== -ZI[2])
-               if (kk[ZI[89]] < ZI[1]) kk[ZI[89]] = kk[-ZI[27]];
+         kS(132) + "t" in jg && aS(), NS = qS[SS]()
+       }
+       if (gS === XS(133) + XS(134)) {
+         function KS(SS) {
+           var HS, gS, tS, bS, XS, xS, NS;
+           for (Cg(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = fg[1], XS = fg[1], xS = -fg[2]), NS = fg[1]; NS < gS; NS++) {
+             var qS = ':1],us?mGXZBFkUSQqMPNVAT<([d~n$+c|DplI>`xvYho/#;LCJe!82%{r^*04y=ja&69}O5ztfwiEg"RKH7)_@b3.W'.indexOf(HS[NS]);
+             if (qS !== -fg[2])
+               if (xS < fg[1]) xS = qS;
```

#### 2178. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23419` → after: `L23273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23273) · [Before (L23419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23419)

```diff
-                 xI(kk[ZI[89]] += kk[-ZI[27]] * ZI[27], kk[ZI[82]] |= kk[ZI[89]] << kk[ZI[29]], kk[ZI[29]] += (kk[ZI[89]] & ZI[30]) > ZI[31] ? ZI[32] : ZI[33]);
+                 Cg(xS += qS * fg[29], bS |= xS << XS, XS += (xS & fg[30]) > fg[31] ? fg[32] : fg[33]);
```

#### 2179. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23421-L23424` → after: `L23275-L23280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23275-L23280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23275-L23280) · [Before (L23421-L23424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23421-L23424)

```diff
-                   xI(kk[ZI[34]].push(kk[ZI[82]] & ZI[11]), kk[ZI[82]] >>= ZI[3], kk[ZI[29]] -= ZI[3])
-                 } while (kk[ZI[29]] > ZI[22]);
-                 kk[ZI[89]] = -ZI[2]
-               } return kk[ZI[89]] > -ZI[2] && kk[ZI[34]].push((kk[ZI[82]] | kk[ZI[89]] << kk[ZI[29]]) & ZI[11]), eI(kk[ZI[34]])
+                   Cg(tS.push(bS & fg[11]), bS >>= fg[3], XS -= fg[3])
+                 } while (XS > fg[7]);
+                 xS = -fg[2]
+               }
+           }
+           return xS > -fg[2] && tS.push((bS | xS << XS) & fg[11]), ag(tS)
```

#### 2180. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23427-L23428` → after: `L23283-L23284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23283-L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23283-L23284) · [Before (L23427-L23428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23427-L23428)

```diff
-         function Jk(...kk) {
-           return kk[ZI[12]] = ZI[2], typeof FI[kk[ZI[1]]] === ZI[17] ? FI[kk[ZI[1]]] = Hk(II[kk[ZI[1]]]) : FI[kk[ZI[1]]]
+         function jS(SS) {
+           return typeof Sg[SS] === fg[16] ? Sg[SS] = KS(Hg[SS]) : Sg[SS]
```

#### 2181. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23432-L23444` → after: `L23288-L23291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23288-L23291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23288-L23291) · [Before (L23432-L23444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23432-L23444)

```diff
-           xI(kk[ZI[12]] = ZI[1], kk[ZI[15]] = function(...kk) {
-             for (xI(kk[ZI[12]] = ZI[2], kk[ZI[15]] = kk[ZI[1]].length, kk[ZI[13]] = [], kk[ZI[57]] = ZI[1], kk[ZI[14]] = ZI[1], kk[ZI[1]].sort(((kk, Fk) => kk - Fk))), kk[ZI[28]] = ZI[1]; kk[ZI[28]] < kk[ZI[15]]; kk[ZI[28]]++)
-               if (!(kk[ZI[28]] > ZI[1] && kk[ZI[1]][kk[ZI[28]]] === kk[ZI[1]][kk[ZI[28]] - ZI[2]]))
-                 for (xI(kk[ZI[57]] = kk[ZI[28]] + ZI[2], kk[ZI[14]] = kk[ZI[15]] - ZI[2]); kk[ZI[57]] < kk[ZI[14]];)
-                   if (kk[ZI[1]][kk[ZI[28]]] + kk[ZI[1]][kk[ZI[57]]] + kk[ZI[1]][kk[ZI[14]]] < ZI[1]) kk[ZI[57]]++;
-                   else if (kk[ZI[1]][kk[ZI[28]]] + kk[ZI[1]][kk[ZI[57]]] + kk[ZI[1]][kk[ZI[14]]] > ZI[1]) kk[ZI[14]]--;
-             else {
-               for (kk[ZI[13]].push([kk[ZI[1]][kk[ZI[28]]], kk[ZI[1]][kk[ZI[57]]], kk[ZI[1]][kk[ZI[14]]]]); kk[ZI[57]] < kk[ZI[14]] && kk[ZI[1]][kk[ZI[57]]] === kk[ZI[1]][kk[ZI[57]] + ZI[2]];) kk[ZI[57]]++;
-               for (; kk[ZI[57]] < kk[ZI[14]] && kk[ZI[1]][kk[ZI[14]]] === kk[ZI[1]][kk[ZI[14]] - ZI[2]];) kk[ZI[14]]--;
-               xI(kk[ZI[57]]++, kk[ZI[14]]--)
-             }
-             return kk[ZI[13]]
-           }, console.log(kk[ZI[15]]))
+           SS[fg[12]] = fg[1]
+         }
+         return jS(135) in jg && GS(), {
+           [jS(138) + jS(139)]: NS
```

#### 2182. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23453-L23454` → after: `L23300-L23301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23300-L23301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23300-L23301) · [Before (L23453-L23454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23453-L23454)

```diff
-     xI(FI = {}, II = ["EsI*{KDc~Zy8wVDm}!)2FtG:{s;6kq)9*Bt7?^#Zawh*wCRN&H(P", 'gVP&kMj~h"^M:gxw*1%ka*@ZHpoX:CmAF+"*yDgAKl)Q+C`73sx&90mF=#1', "jjS#<i{|Hp*", 'S"SKcqsFOj:M[^47sUn7b', "_vdS)g%W<,k]QlS", "p!nv,QN(L%.i,?h|Hu$L,qKwf,BcJX@p", "knrK=az", '#"8$p1,Sep5=_X9Vh]h+0MeF:%|(bx', … [truncated]
-       xI(kk[ZI[12]] = ZI[1], kk[ZI[15]] = [function() {
+     Cg(Sg = {}, Hg = ["zIk!k<h%&ZP[XVBMJfkoH{/E~)SOKi{>uq2jQ[fRX_?<{$K", 'b_(o"wr>X&Fq2u1U4|}g[`y', "woTfhCll^Oc(IZKV!M8c@uQ7Ru:?IQpX@$sfJtTph", "jo&Kwj(#yo~^Dqbp[]a.wj*Lms1^/1C1I&y7T#REUv^mZZtkpnG", 'f<"eB[!nD;3F3jR`$T4vamqd#$mO5q|E9|8,a3[A**{^){|E_y', "e^eH*_JU;o.!A5=~_e4j(,aAO … [truncated]
+       Cg(SS[fg[12]] = fg[1], SS[fg[4]] = [function() {
```

#### 2183. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23462` → after: `L23309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23309) · [Before (L23462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23462)

```diff
-       }], kk[ZI[13]] = ZI[18], kk[ZI[0]] = []);
+       }], SS[fg[13]] = fg[18], SS[fg[10]] = []);
```

#### 2184. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23464` → after: `L23311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23311) · [Before (L23464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23464)

```diff
-         xI(kk[ZI[13]] = Object, kk[ZI[0]][ZI[24]]("".__proto__.constructor.name))
+         Cg(SS[fg[13]] = Object, SS[fg[10]][fg[24]]("".__proto__.constructor.name))
```

#### 2185. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23466-L23468` → after: `L23313-L23315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23313-L23315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23313-L23315) · [Before (L23466-L23468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23466-L23468)

```diff
-       kk: for (kk[ZI[14]] = ZI[1]; kk[ZI[14]] < kk[ZI[15]][ZI[12]]; kk[ZI[14]]++) try {
-         for (kk[ZI[13]] = kk[ZI[15]][kk[ZI[14]]](), kk[ZI[16]] = ZI[1]; kk[ZI[16]] < kk[ZI[0]][ZI[12]]; kk[ZI[16]]++)
-           if (typeof kk[ZI[13]][kk[ZI[0]][kk[ZI[16]]]] === ZI[17]) continue kk;
+       SS: for (SS[fg[14]] = fg[1]; SS[fg[14]] < SS[fg[4]][fg[12]]; SS[fg[14]]++) try {
+         for (SS[fg[13]] = SS[fg[4]][SS[fg[14]]](), SS[fg[15]] = fg[1]; SS[fg[15]] < SS[fg[10]][fg[12]]; SS[fg[15]]++)
+           if (typeof SS[fg[13]][SS[fg[10]][SS[fg[15]]]] === fg[16]) continue SS;
```

#### 2186. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23472-L23474` → after: `L23319-L23320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23319-L23320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23319-L23320) · [Before (L23472-L23474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23472-L23474)

```diff
-     }() || {}, TI = XI.TextDecoder, iI = XI.Uint8Array, yI = XI[ZI[107]], lI = XI.String || String, aI = XI.Array || Array, qI = function() {
-       var kk, Fk, Ik = new aI(ZI[48]);
-       return xI(kk = lI[ZI[21]] || lI.fromCharCode, Fk = []),
+     }() || {}, tg = gg.TextDecoder, bg = gg.Uint8Array, Xg = gg[fg[98]], xg = gg.String || String, Ng = gg.Array || Array, qg = function(...SS) {
+       return Cg(SS[fg[12]] = fg[1], SS[fg[17]] = new Ng(fg[66]), SS[-fg[20]] = xg[fg[22]] || xg.fromCharCode, SS[-fg[19]] = []),
```

#### 2187. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23476-L23477` → after: `L23322-L23323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23322-L23323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23322-L23323) · [Before (L23476-L23477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23476-L23477)

```diff
-           for (xI(Xk[ZI[12]] = ZI[2], Xk[ZI[2]] = ZI[18], Xk[-ZI[19]] = ZI[18], Xk[ZI[4]] = Xk[ZI[1]][ZI[12]], Fk[ZI[12]] = ZI[1]), Xk[ZI[10]] = ZI[1]; Xk[ZI[10]] < Xk[ZI[4]];) xI(Xk[-ZI[19]] = Xk[ZI[1]][Xk[ZI[10]]++], Xk[-ZI[19]] <= ZI[47] ? Xk[ZI[2]] = Xk[-ZI[19]] : Xk[-ZI[19]] … [truncated]
-           return Fk[ZI[45]]("")
+           for (Cg(HS[fg[12]] = fg[2], HS[fg[17]] = fg[18], HS[fg[10]] = fg[18], HS[fg[4]] = HS[fg[1]][fg[12]], SS[-fg[19]][fg[12]] = fg[1]), HS[fg[13]] = fg[1]; HS[fg[13]] < HS[fg[4]];) Cg(HS[fg[10]] = HS[fg[1]][HS[fg[13]]++], HS[fg[10]] <= fg[65] ? HS[fg[17]] = HS[fg[10]] : HS[f … [truncated]
+           return SS[-fg[19]][fg[76]]("")
```

#### 2188. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23479-L23489` → after: `L23325-L23332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23325-L23332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23325-L23332) · [Before (L23479-L23489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23479-L23489)

```diff
-     }()), jI(ZI[27]) + "x" in HI && function(...kk) {
-       xI(kk[ZI[12]] = ZI[1], kk[ZI[15]] = function(...Fk) {
-         return xI(Fk[ZI[12]] = ZI[0], Fk[ZI[0]] = [], Fk[-ZI[35]] = Fk[ZI[1]].length, Fk[ZI[1]].sort(((kk, Fk) => kk - Fk)), kk[ZI[2]](Fk[ZI[0]], [], ZI[1], Fk[-ZI[35]], Fk[ZI[1]], Fk[ZI[2]])), Fk[ZI[0]]
-       }, kk[ZI[2]] = function(Fk, Ik, Xk, Tk, ik, yk) {
-         var lk, ak = ZI[36];
-         if (!(yk < ZI[1])) {
-           if (yk === ZI[1]) return Fk.push(Ik);
-           for (lk = Xk; lk < Tk && !(ik[lk] > yk); lk++) lk > Xk && ik[lk] === ik[lk - ZI[2]] || xI(ak = Array.from(Ik), ak.push(ik[lk]), kk[ZI[2]](Fk, ak, lk + ZI[2], Tk, ik, yk - ik[lk]))
-         }
-       }, console.log(kk[ZI[15]]))
-     }(), xI(LI = Object[jI(92)](ZI[36]), tI = void 0), (() => {
+     }()), kg(95) + "D" in jg && function(...SS) {
+       function HS() {}
+       SS[fg[12]] = fg[1], Cg(SS[fg[28]] = function(SS, gS) {
+         var tS, bS, XS, xS, NS, qS = fg[1];
+         for (Cg(tS = fg[1], bS = new HS(fg[1]), XS = bS, xS = SS, NS = gS); xS !== fg[26] || NS !== fg[26];) Cg(tS = (xS ? xS.val : fg[1]) + (NS ? NS.val : fg[1]) + qS, qS = Math.floor(tS / fg[27]), XS.next = new HS(tS % fg[27]), XS = XS.next, xS = xS ? xS.next : fg[26], NS = NS  … [truncated]
+         return qS && (XS.next = new HS(qS)), bS.next
+       }, console.log(SS[fg[28]]))
+     }(), Cg(ug = Object[kg(96)](fg[26]), Ig = void 0), Cg(eH = (...SS) => {
```

#### 2189. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23491-L23494` → after: `L23334-L23339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23334-L23339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23334-L23339) · [Before (L23491-L23494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23491-L23494)

```diff
-         return kk[ZI[12]] = ZI[2], typeof FI[kk[ZI[1]]] === ZI[17] ? FI[kk[ZI[1]]] = function(...kk) {
-           for (xI(kk[ZI[12]] = ZI[2], kk[ZI[2]] = 'a;Uq}~ABnYJP+w*I1,N&cseObpm:_<{y?7!hzCuG).d9H(2gD>KR"/l%3=koxX5QTVEWFr|`Mf64j[StvL@]i0^$#8Z', kk[ZI[0]] = "" + (kk[ZI[1]] || ""), kk[ZI[57]] = kk[ZI[0]].length, kk[-ZI[93]] = [], kk[-ZI[92]] = ZI[1], kk[ZI[9]] = ZI[1], kk[ZI[91]] … [truncated]
-             if (kk[ZI[81]] = kk[ZI[2]].indexOf(kk[ZI[0]][kk[ZI[25]]]), kk[ZI[81]] !== -ZI[2])
-               if (kk[ZI[91]] < ZI[1]) kk[ZI[91]] = kk[ZI[81]];
+         return SS[fg[12]] = fg[2], typeof Sg[SS[fg[1]]] === fg[16] ? Sg[SS[fg[1]]] = function(SS) {
+           var HS, gS, tS, bS, XS, xS, NS;
+           for (Cg(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = fg[1], XS = fg[1], xS = -fg[2]), NS = fg[1]; NS < gS; NS++) {
+             var qS = '*NBUdoJXOMprVbI_l6t~C45#7u9g>2$QeiL/Zm%a0ExW|1;Hs(,fA)+!@]Fv?y`T<:3YjR}D=Sq"{G^8hz[P.kncwK&'.indexOf(HS[NS]);
+             if (qS !== -fg[2])
+               if (xS < fg[1]) xS = qS;
```

#### 2190. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23496` → after: `L23341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23341) · [Before (L23496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23496)

```diff
-                 xI(kk[ZI[91]] += kk[ZI[81]] * ZI[27], kk[-ZI[92]] |= kk[ZI[91]] << kk[ZI[9]], kk[ZI[9]] += (kk[ZI[91]] & ZI[30]) > ZI[31] ? ZI[32] : ZI[33]);
+                 Cg(xS += qS * fg[29], bS |= xS << XS, XS += (xS & fg[30]) > fg[31] ? fg[32] : fg[33]);
```

#### 2191. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23498-L23501` → after: `L23343-L23348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23343-L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23343-L23348) · [Before (L23498-L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23498-L23501)

```diff
-                   xI(kk[-ZI[93]].push(kk[-ZI[92]] & ZI[11]), kk[-ZI[92]] >>= ZI[3], kk[ZI[9]] -= ZI[3])
-                 } while (kk[ZI[9]] > ZI[22]);
-                 kk[ZI[91]] = -ZI[2]
-               } return kk[ZI[91]] > -ZI[2] && kk[-ZI[93]].push((kk[-ZI[92]] | kk[ZI[91]] << kk[ZI[9]]) & ZI[11]), eI(kk[-ZI[93]])
+                   Cg(tS.push(bS & fg[11]), bS >>= fg[3], XS -= fg[3])
+                 } while (XS > fg[7]);
+                 xS = -fg[2]
+               }
+           }
+           return xS > -fg[2] && tS.push((bS | xS << XS) & fg[11]), ag(tS)
```

#### 2192. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23504` → after: `L23351-L23373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23351-L23373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23351-L23373) · [Before (L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23504)

```diff
-       kk(ZI[82]) in HI && function(...Fk) {
+       SS[fg[12]] = fg[2];
+       const gS = function(SS) {
+           var HS;
+           return {
+             meta: {
+               ...SS.meta,
+               formatVersion: ZH.i,
+               variation: null !== (HS = SS.meta.variation) && void 0 !== HS ? HS : null
+             },
+             initialChunks: SS.initialChunks.map((SS => ({
+               chunkPos: SS.chunkPos,
+               rle: OH(SS.rle),
+               sharedBlockData: EH("sharedBlockData", SS.sharedBlockData)
+             }))),
+             ticks: SS.ticks.map(lH),
+             editState: SS.editState
+ ... (7 more added lines; see GitHub link above)
```

#### 2193. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23506-L23508` → after: `L23375-L23377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23375-L23377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23375-L23377) · [Before (L23506-L23508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23506-L23508)

```diff
-           for (xI(kk[ZI[12]] = ZI[2], kk[-ZI[85]] = '@<$y^x&.!H_dYJQG*a1UX2F]|";WLs9kz~:Mwi#AbpoB}+m8/l4(>3T6g7tCf,5E=qO{KRv?hn%DVuS)I[P`Z0Ncjre', kk[-ZI[94]] = "" + (kk[ZI[1]] || ""), kk[ZI[57]] = kk[-ZI[94]].length, kk[ZI[14]] = [], kk[ZI[8]] = ZI[1], kk[ZI[9]] = ZI[1], kk[ZI[3 … [truncated]
-             if (kk[ZI[95]] = kk[-ZI[85]].indexOf(kk[-ZI[94]][kk[ZI[3]]]), kk[ZI[95]] !== -ZI[2])
-               if (kk[ZI[37]] < ZI[1]) kk[ZI[37]] = kk[ZI[95]];
+           for (Cg(SS[fg[12]] = fg[2], SS[fg[2]] = 'dclwbI@:x2G~C|[X&!pizNy/A#ORe9HB0];?7{*kMVoSDZ+)51q%u<$QJ_YmfLn,E`^FP}UT=j6hv(8K34garWs.>"t', SS[fg[0]] = "" + (SS[fg[1]] || ""), SS[fg[25]] = SS[fg[0]].length, SS[-fg[96]] = [], SS[fg[34]] = fg[1], SS[fg[21]] = fg[1], SS[-fg[97] … [truncated]
+             if (SS[fg[6]] = SS[fg[2]].indexOf(SS[fg[0]][SS[fg[3]]]), SS[fg[6]] !== -fg[2])
+               if (SS[-fg[97]] < fg[1]) SS[-fg[97]] = SS[fg[6]];
```

#### 2194. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23510` → after: `L23379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23379) · [Before (L23510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23510)

```diff
-                 xI(kk[ZI[37]] += kk[ZI[95]] * ZI[27], kk[ZI[8]] |= kk[ZI[37]] << kk[ZI[9]], kk[ZI[9]] += (kk[ZI[37]] & ZI[30]) > ZI[31] ? ZI[32] : ZI[33]);
+                 Cg(SS[-fg[97]] += SS[fg[6]] * fg[29], SS[fg[34]] |= SS[-fg[97]] << SS[fg[21]], SS[fg[21]] += (SS[-fg[97]] & fg[30]) > fg[31] ? fg[32] : fg[33]);
```

#### 2195. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23512-L23515` → after: `L23381-L23384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23381-L23384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23381-L23384) · [Before (L23512-L23515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23512-L23515)

```diff
-                   xI(kk[ZI[14]].push(kk[ZI[8]] & ZI[11]), kk[ZI[8]] >>= ZI[3], kk[ZI[9]] -= ZI[3])
-                 } while (kk[ZI[9]] > ZI[22]);
-                 kk[ZI[37]] = -ZI[2]
-               } return kk[ZI[37]] > -ZI[2] && kk[ZI[14]].push((kk[ZI[8]] | kk[ZI[37]] << kk[ZI[9]]) & ZI[11]), eI(kk[ZI[14]])
+                   Cg(SS[-fg[96]].push(SS[fg[34]] & fg[11]), SS[fg[34]] >>= fg[3], SS[fg[21]] -= fg[3])
+                 } while (SS[fg[21]] > fg[7]);
+                 SS[-fg[97]] = -fg[2]
+               } return SS[-fg[97]] > -fg[2] && SS[-fg[96]].push((SS[fg[34]] | SS[-fg[97]] << SS[fg[21]]) & fg[11]), ag(SS[-fg[96]])
```

#### 2196. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23519` → after: `L23388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23388) · [Before (L23519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23519)

```diff
-           return kk[ZI[12]] = ZI[2], typeof FI[kk[ZI[1]]] === ZI[17] ? FI[kk[ZI[1]]] = Ik(II[kk[ZI[1]]]) : FI[kk[ZI[1]]]
+           return SS[fg[12]] = fg[2], typeof Sg[SS[fg[1]]] === fg[16] ? Sg[SS[fg[1]]] = qS(Hg[SS[fg[1]]]) : Sg[SS[fg[1]]]
```

#### 2197. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23521-L23522` → after: `L23390-L23423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23390-L23423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23390-L23423) · [Before (L23521-L23522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23521-L23522)

```diff
-         Fk[ZI[12]] = ZI[1], xI(Fk[ZI[13]] = kk(152) + kk(153) + Xk(154) + Xk(ZI[110]) + Xk(156) + Xk(157) + ZI[96], Fk[ZI[57]] = Xk(158) + Xk(ZI[43]) + Xk(160) + Xk(161) + ZI[97], Fk[ZI[14]] = Xk(162) + Xk(ZI[95]) + Xk(ZI[66]) + Xk(165) + Xk(ZI[80]) + Xk(167) + Xk(168) + ZI[98],  … [truncated]
-       }(), xI(MF = (...Fk) => {
+         throw Cg(console[uS(fg[56])](gS), tS[uS(143)](gS, {
+           [uS(144) + uS(145)]: (...SS) => (Ig = [SS, {}], Gg(uS(146)))
+         })), Ng
+       }
+       const bS = xH(ZH[fg[80]], SS[fg[95]]),
+         xS = XS[fg[98]][HS(147)](fg[38]);
+       return xS[HS(148) + HS(149) + "E"](ZH[fg[80]]), XS[fg[98]].concat([xS, bS])
+     }, rH = (...SS) => {
+       function HS(...SS) {
+         return SS[fg[12]] = fg[2], typeof Sg[SS[fg[1]]] === fg[16] ? Sg[SS[fg[1]]] = function(...SS) {
+           for (Cg(SS[fg[12]] = fg[2], SS[fg[2]] = '^OJPTMFENgRDSv?!_b{mu`[V9Yke}q4~t&C2|sr+1j<K=;/Gw$@(7c%h")*05]#BzXUlfxpAdoZ>6HIQy3L8ni:W.,a', SS[fg[10]] = "" + (SS[fg[1]] || ""), SS[fg[4]] = SS[fg[10]].length, SS[-fg[100]] = [], SS[fg[43]] = fg[1], SS[fg[14]] = fg[1], SS[fg[50 … [truncated]
+             if (SS[fg[80]] = SS[fg[2]].indexOf(SS[fg[10]][SS[-fg[99]]]), SS[fg[80]] !== -fg[2])
+               if (SS[fg[50]] < fg[1]) SS[fg[50]] = SS[fg[80]];
+               else {
+                 Cg(SS[fg[50]] += SS[fg[80]] * fg[29], SS[fg[43]] |= SS[fg[50]] << SS[fg[14]], SS[fg[14]] += (SS[fg[50]] & fg[30]) > fg[31] ? fg[32] : fg[33]);
+                 do {
+ ... (18 more added lines; see GitHub link above)
```

#### 2198. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23524-L23535` → after: `L23425-L23434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23425-L23434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23425-L23434) · [Before (L23524-L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23524-L23535)

```diff
-           return kk[ZI[12]] = ZI[2], typeof FI[kk[ZI[1]]] === ZI[17] ? FI[kk[ZI[1]]] = function(...kk) {
-             for (xI(kk[ZI[12]] = ZI[2], kk[-ZI[102]] = '%CqBiOfLFeW:{r8RHX1ad9|@})!(o0xn4]At<2g,w.M+Vh=v#3DU`~[uzZPl67KTk_E^ySc>m&$JQ;jb5*NY/GIp"?s', kk[-ZI[100]] = "" + (kk[ZI[1]] || ""), kk[ZI[99]] = kk[-ZI[100]].length, kk[ZI[14]] = [], kk[ZI[28]] = ZI[1], kk[ZI[29]] = ZI[1],  … [truncated]
-               if (kk[ZI[103]] = kk[-ZI[102]].indexOf(kk[-ZI[100]][kk[ZI[101]]]), kk[ZI[103]] !== -ZI[2])
-                 if (kk[ZI[22]] < ZI[1]) kk[ZI[22]] = kk[ZI[103]];
-                 else {
-                   xI(kk[ZI[22]] += kk[ZI[103]] * ZI[27], kk[ZI[28]] |= kk[ZI[22]] << kk[ZI[29]], kk[ZI[29]] += (kk[ZI[22]] & ZI[30]) > ZI[31] ? ZI[32] : ZI[33]);
-                   do {
-                     xI(kk[ZI[14]].push(kk[ZI[28]] & ZI[11]), kk[ZI[28]] >>= ZI[3], kk[ZI[29]] -= ZI[3])
-                   } while (kk[ZI[29]] > ZI[22]);
-                   kk[ZI[22]] = -ZI[2]
-                 } return kk[ZI[22]] > -ZI[2] && kk[ZI[14]].push((kk[ZI[28]] | kk[ZI[22]] << kk[ZI[29]]) & ZI[11]), eI(kk[ZI[14]])
-           }(II[kk[ZI[1]]]) : FI[kk[ZI[1]]]
+           for (Cg(SS[fg[12]] = fg[2], SS[fg[46]] = 'WbQfnh9CBRTUKHuA5vtwgXMPmdxl#rLEijG;e":S%.qJ`>{D[)pN]$yYc*(~^zZ<,!k7FIOoVs4@_+?1832&=}6|0a/', SS[fg[0]] = "" + (SS[fg[1]] || ""), SS[fg[51]] = SS[fg[0]].length, SS[fg[13]] = [], SS[fg[34]] = fg[1], SS[fg[14]] = fg[1], SS[fg[50]] … [truncated]
+             if (SS[fg[80]] = SS[fg[46]].indexOf(SS[fg[0]][SS[fg[36]]]), SS[fg[80]] !== -fg[2])
+               if (SS[fg[50]] < fg[1]) SS[fg[50]] = SS[fg[80]];
+               else {
+                 Cg(SS[fg[50]] += SS[fg[80]] * fg[29], SS[fg[34]] |= SS[fg[50]] << SS[fg[14]], SS[fg[14]] += (SS[fg[50]] & fg[30]) > fg[31] ? fg[32] : fg[33]);
+                 do {
+                   Cg(SS[fg[13]].push(SS[fg[34]] & fg[11]), SS[fg[34]] >>= fg[3], SS[fg[14]] -= fg[3])
+                 } while (SS[fg[14]] > fg[7]);
+                 SS[fg[50]] = -fg[2]
+               } return SS[fg[50]] > -fg[2] && SS[fg[13]].push((SS[fg[34]] | SS[fg[50]] << SS[fg[14]]) & fg[11]), ag(SS[fg[13]])
```

#### 2199. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23593-L23595` → after: `L23437-L23439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23437-L23439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23437-L23439) · [Before (L23593-L23595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23593-L23595)

```diff
-           function Zk(...kk) {
-             return kk[ZI[12]] = ZI[2], typeof FI[kk[ZI[1]]] === ZI[17] ? FI[kk[ZI[1]]] = tk(II[kk[ZI[1]]]) : FI[kk[ZI[1]]]
-           }
+         function NS(...SS) {
+           return SS[fg[12]] = fg[2], typeof Sg[SS[fg[1]]] === fg[16] ? Sg[SS[fg[1]]] = xS(Hg[SS[fg[1]]]) : Sg[SS[fg[1]]]
+         }
```

#### 2200. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23597-L23603` → after: `L23441-L23450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23441-L23450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23441-L23450) · [Before (L23597-L23603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23597-L23603)

```diff
-           function jk(...kk) {
-             xI(kk[ZI[12]] = ZI[1], kk[ZI[15]] = function(kk) {
-               var Fk, Ik, Xk, Tk, ik, yk, lk = ZI[1];
-               for (xI(Fk = {}, Ik = ZI[1], Xk = ZI[1], Tk = ZI[1], ik = kk.length), yk = ZI[1]; yk < ik; yk++) {
-                 var ak;
-                 for (xI(Fk = {}, Ik = ZI[1], Xk = ZI[2]), ak = yk + ZI[2]; ak < ik; ak++) kk[yk].x !== kk[ak].x || kk[yk].y !== kk[ak].y ? (Fk[Tk = kk[yk].y === kk[ak].y ? Number.MAX_SAFE_INTEGER : (kk[yk].x - kk[ak].x) / (kk[yk].y - kk[ak].y)] || (Fk[Tk] = ZI[1]), xI(Fk[Tk]++, I … [truncated]
-                 xI(Ik += Xk, lk = Math.max(lk, Ik))
+         function qS(...SS) {
+           SS[fg[12]] = fg[1];
+           const HS = require("big-integer");
+           Cg(SS[fg[17]] = class {
+             static randomPrime(SS) {
+               const gS = HS.one.shiftLeft(SS - fg[2]),
+                 tS = HS.one.shiftLeft(SS).prev();
+               for (; fg[104];) {
+                 let SS = HS.randBetween(gS, tS);
+                 if (SS.isProbablePrime(fg[92])) return SS
```

#### 2201. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23605-L23626` → after: `L23452-L23464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23452-L23464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23452-L23464) · [Before (L23605-L23626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23605-L23626)

```diff
-               return lk
-             }, console.log(kk[ZI[15]]))
-           }
-           throw Zk(171) in HI && jk(), xI(console[Zk(172)](Xk), Tk[Zk(173)](Xk, {
-             [Zk(174) + Zk(ZI[54])](...kk) {
-               function Fk(kk) {
-                 return typeof FI[kk] === ZI[17] ? FI[kk] = function(kk) {
-                   var Fk, Ik, Xk, Tk, ik, yk, lk;
-                   for (xI(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = ZI[1], ik = ZI[1], yk = -ZI[2]), lk = ZI[1]; lk < Ik; lk++) {
-                     var ak = 'yMAIjTpON2Du3P:([{vh9!*LFSzJ%r6+XbB.l;W)s8em07C>EUiqkYt?_wQ,g$`x=aH5K^]ZcR&o|#"V@n1~fd4/<G}'.indexOf(Fk[lk]);
-                     if (ak !== -ZI[2])
-                       if (yk < ZI[1]) yk = ak;
-                       else {
-                         xI(yk += ak * ZI[27], Tk |= yk << ik, ik += (yk & ZI[30]) > ZI[31] ? ZI[32] : ZI[33]);
-                         do {
-                           xI(Xk.push(Tk & ZI[11]), Tk >>= ZI[3], ik -= ZI[3])
- ... (6 more removed lines; see GitHub link above)
+             }
+             static generate(...SS) {
+               SS[fg[12]] = fg[2];
+               const gS = HS(fg[105]);
+               let tS, bS;
+               SS[fg[17]] = fg[18];
+               do {
+                 Cg(tS = this.randomPrime(SS[fg[1]] / fg[10]), bS = this.randomPrime(SS[fg[1]] / fg[10]), SS[fg[17]] = HS.lcm(tS.prev(), bS.prev()))
+               } while (HS.gcd(gS, SS[fg[17]]).notEquals(fg[2]) || tS.minus(bS).abs().shiftRight(SS[fg[1]] / fg[10] - fg[93]).isZero());
+               return {
+                 e: gS,
+                 n: tS.multiply(bS),
+                 d: gS.modInv(SS[fg[17]])
```

#### 2202. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23644-L23680` → after: `L23467-L23468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23467-L23468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23467-L23468) · [Before (L23644-L23680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23644-L23680)

```diff
-           })), jI
-         }
-         const yk = lF(SF[ZI[28]], Fk[ZI[2]]),
-           lk = ik[ZI[107]][Ik(184)](ZI[34]);
-         return lk[Ik(185) + Ik(186) + "E"](SF[ZI[28]]), ik[ZI[107]].concat([lk, yk])
-       }, kI = (...Fk) => {
-         function Ik(...kk) {
-           return kk[ZI[12]] = ZI[2], typeof FI[kk[ZI[1]]] === ZI[17] ? FI[kk[ZI[1]]] = function(...kk) {
-             for (xI(kk[ZI[12]] = ZI[2], kk[ZI[108]] = '2w./}!;u(^?1]`7+y9:*8|$DPd4vBSic{=RXWqQ[HOfbxJ6GnkY~3LVZF,Ie)Cgj_@"&rlE5oU%sKa<AmTzMh>pN0#t', kk[ZI[0]] = "" + (kk[ZI[1]] || ""), kk[ZI[57]] = kk[ZI[0]].length, kk[ZI[109]] = [], kk[-ZI[54]] = ZI[1], kk[ZI[29]] = ZI[1], kk[ZI … [truncated]
-               if (kk[ZI[6]] = kk[ZI[108]].indexOf(kk[ZI[0]][kk[ZI[3]]]), kk[ZI[6]] !== -ZI[2])
-                 if (kk[ZI[110]] < ZI[1]) kk[ZI[110]] = kk[ZI[6]];
-                 else {
-                   xI(kk[ZI[110]] += kk[ZI[6]] * ZI[27], kk[-ZI[54]] |= kk[ZI[110]] << kk[ZI[29]], kk[ZI[29]] += (kk[ZI[110]] & ZI[30]) > ZI[31] ? ZI[32] : ZI[33]);
-                   do {
-                     xI(kk[ZI[109]].push(kk[-ZI[54]] & ZI[11]), kk[-ZI[54]] >>= ZI[3], kk[ZI[29]] -= ZI[3])
-                   } while (kk[ZI[29]] > ZI[22]);
- ... (21 more removed lines; see GitHub link above)
+             static encrypt(...SS) {
+               return SS[fg[12]] = fg[25], HS(SS[fg[1]]).modPow(SS[fg[10]], SS[fg[2]])
```

#### 2203. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23682-L23713` → after: `L23470-L23484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23470-L23484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23470-L23484) · [Before (L23682-L23713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23682-L23713)

```diff
-             return yk > -ZI[2] && Xk.push((Tk | yk << ik) & ZI[11]), eI(Xk)
-           }
- 
-           function ak(kk) {
-             return typeof FI[kk] === ZI[17] ? FI[kk] = lk(II[kk]) : FI[kk]
-           }
-           const qk = Xk[ak(ZI[111])](ZI[34]),
-             Lk = yF(yk) ? ik[ZI[107]][ak(ZI[90])](aF(yk, qk)) : qk;
-           return function(kk) {
-             var Fk, Ik, Xk, ik, yk;
-             const lk = null === (Fk = kk.meta) || void 0 === Fk ? void 0 : Fk.formatVersion;
-             if (!(0, oF.g)(lk)) throw new Error(`Unsupported recording format version: ${lk}`);
-             if (!Array.isArray(kk.initialChunks) || !Array.isArray(kk.ticks)) throw new Error("Recording is missing initialChunks or ticks");
-             for (const Tk of kk.ticks)
-               if (!Array.isArray(Tk.structuralEvents) || !Array.isArray(Tk.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
-             const ak = {
- ... (16 more removed lines; see GitHub link above)
+             static decrypt(...SS) {
+               return SS[fg[12]] = fg[25], HS(SS[fg[1]]).modPow(SS[fg[2]], SS[fg[10]])
+             }
+             static encode(...SS) {
+               SS[fg[12]] = fg[2];
+               const gS = SS[fg[1]].split("").map((SS => SS.charCodeAt())).join("");
+               return HS(gS)
+             }
+             static decode(...SS) {
+               SS[fg[12]] = fg[2];
+               const HS = SS[fg[1]].toString();
+               SS[-fg[106]] = "";
+               for (let gS = fg[1]; gS < HS.length; gS += fg[10]) {
+                 let tS = Number(HS.substr(gS, fg[10]));
+                 tS <= fg[107] ? (SS[-fg[106]] += String.fromCharCode(Number(HS.substr(gS, fg[25]))), gS++) : SS[-fg[106]] += String.fromCharCode(tS)
```

#### 2204. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23716` → after: `L23488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23488) · [Before (L23716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23716)

```diff
-           }(TF(yk)[ak(ZI[101])](Lk))
+           }, module.exports = SS[fg[17]])
```

#### 2205. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23718-L23720` → after: `L23490-L23522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23490-L23522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23490-L23522) · [Before (L23718-L23720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23718-L23720)

```diff
-         throw new SF[ZI[6]](yk)
-       })
-     })()
+         NS(fg[28]) + "4" in jg && qS();
+         const uS = gS[NS(157)](fg[38]),
+           IS = XH(tS) ? XS[fg[98]][NS(fg[59])](NH(tS, uS)) : uS;
+         return function(SS) {
+           var HS, gS, tS, XS, xS;
+           const NS = null === (HS = SS.meta) || void 0 === HS ? void 0 : HS.formatVersion;
+           if (!(0, JH.f)(NS)) throw new Error(`Unsupported recording format version: ${NS}`);
+           if (!Array.isArray(SS.initialChunks) || !Array.isArray(SS.ticks)) throw new Error("Recording is missing initialChunks or ticks");
+           for (const bS of SS.ticks)
+             if (!Array.isArray(bS.structuralEvents) || !Array.isArray(bS.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
+           const qS = {
+             ...SS.meta
+           };
+           return qS.formatVersion = ZH.i, (0, bS.K)(qS.variation) && delete qS.variation, {
+             meta: qS,
+             initialChunks: SS.initialChunks.map((SS => {
+ ... (17 more added lines; see GitHub link above)
```

#### 2206. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23722` → after: `L23524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23524) · [Before (L23722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23722)

```diff
-   37015: (kk, Fk, Ik) => {
+   37001: (SS, HS, gS) => {
```

#### 2207. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23728` → after: `L23528-L23529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23528-L23529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23528-L23529) · [Before (L23728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23728)

```diff
-       l: () => tk,
+       j: () => XS,
+       m: () => fS,
```

#### 2208. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23731-L23733` → after: `L23534-L23535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23534-L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23534-L23535) · [Before (L23731-L23733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23731-L23733)

```diff
-       u: () => jk,
-       w: () => ak,
-       x: () => Lk
+       t: () => IS,
+       w: () => NS
```

#### 2209. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23735` → after: `L23537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23537) · [Before (L23735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23735)

```diff
-     var Xk = Ik(37021);
+     var tS = gS(37005);
```

#### 2210. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23739` → after: `L23541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23541) · [Before (L23739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23739)

```diff
-         super(`Unsupported recording format: header ${null!==kk&&void 0!==kk?kk:"missing"}, reading v${Xk.b.join(", v")}`), this.older = void 0, this.older = (0, Xk.f)(kk)
+         super(`Unsupported recording format: header ${null!==SS&&void 0!==SS?SS:"missing"}, reading v${tS.d.join(", v")}`), this.older = void 0, this.older = (0, tS.e)(SS)
```

#### 2211. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23747` → after: `L23549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23549) · [Before (L23747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23747)

```diff
-       tk = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
+       fS = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading … [truncated]
```

#### 2212. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23751` → after: `L23553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23553) · [Before (L23751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23751)

```diff
-   37012: (kk, Fk, Ik) => {
+   36999: (SS, HS, gS) => {
```

#### 2213. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23754` → after: `L23556-L23558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23556-L23558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23556-L23558) · [Before (L23754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23754)

```diff
-       e: () => ek,
+       d: () => KS,
+       f: () => qS,
+       g: () => xS,
```

#### 2214. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23756-L23758` → after: `L23560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23560) · [Before (L23756-L23758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23756-L23758)

```diff
-       j: () => yk,
-       k: () => lk,
-       l: () => qk
+       j: () => uS
```

#### 2215. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23760-L23761` → after: `L23562-L23563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23562-L23563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23562-L23563) · [Before (L23760-L23761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23760-L23761)

```diff
-     var Xk = Ik(337),
-       Tk = Ik(34);
+     var tS = gS(387),
+       bS = gS(31);
```

#### 2216. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23764` → after: `L23566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23566) · [Before (L23764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23764)

```diff
-       return null === kk || void 0 === kk ? null : "string" === typeof kk ? kk : null
+       return null === SS || void 0 === SS ? null : "string" === typeof SS ? SS : null
```

#### 2217. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23776` → after: `L23578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23578) · [Before (L23776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23776)

```diff
-           wX: Ik,
+           Kt: gS,
```

#### 2218. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23788` → after: `L23590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23590) · [Before (L23788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23788)

```diff
-         Fk[ik.wX] || (Fk[ik.wX] = {}), Fk[ik.wX][ik.name] = {
+         HS[XS.Kt] || (HS[XS.Kt] = {}), HS[XS.Kt][XS.name] = {
```

#### 2219. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23791-L23792` → after: `L23593-L23594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23593-L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23593-L23594) · [Before (L23791-L23792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23791-L23792)

```diff
-           displayName: null !== (Ik = ik.displayName) && void 0 !== Ik ? Ik : null,
-           endTick: null !== (Xk = ik.endTick) && void 0 !== Xk ? Xk : null,
+           displayName: null !== (gS = XS.displayName) && void 0 !== gS ? gS : null,
+           endTick: null !== (tS = XS.endTick) && void 0 !== tS ? tS : null,
```

#### 2220. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23809` → after: `L23611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23611) · [Before (L23809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23809)

```diff
-         }(0, Xk.Ec)(ik) || (Ik[Tk] = ik)
+         }(0, tS.qc)(XS) || (gS[bS] = XS)
```

#### 2221. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23829` → after: `L23631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23631) · [Before (L23829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23829)

```diff
-           if ((0, Xk.Ec)(ak)) continue;
+           if ((0, tS.qc)(qS)) continue;
```

#### 2222. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23839` → after: `L23641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23641) · [Before (L23839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23839)

```diff
-               endTime: void 0 !== Fk.duration && null !== Fk.duration ? (null !== (yk = Fk.appliedAt) && void 0 !== yk ? yk : Ik) + Fk.duration : null
+               endTime: void 0 !== HS.duration && null !== HS.duration ? (null !== (xS = HS.appliedAt) && void 0 !== xS ? xS : gS) + HS.duration : null
```

#### 2223. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23849` → after: `L23651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23651) · [Before (L23849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23849)

```diff
-         Ik && (delete Ik[Fk], (0, Xk.Ec)(Ik) && delete this.tracked[kk])
+         gS && (delete gS[HS], (0, tS.qc)(gS) && delete this.tracked[SS])
```

#### 2224. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23853` → after: `L23655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23655) · [Before (L23853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23853)

```diff
-         0 !== kk.duration ? this.upsert(kk.wX, kk.name, {
+         0 !== SS.duration ? this.upsert(SS.Kt, SS.name, {
```

#### 2225. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23859` → after: `L23661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23661) · [Before (L23859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23859)

```diff
-         }) : this.remove(kk.wX, kk.name)
+         }) : this.remove(SS.Kt, SS.name)
```

#### 2226. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23889` → after: `L23691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23691) · [Before (L23889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23889)

```diff
-           }(0, Xk.Ec)(lk) || (Tk[yk] = lk)
+           }(0, tS.qc)(NS) || (bS[xS] = NS)
```

#### 2227. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23897-L23898` → after: `L23699-L23700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23699-L23700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23699-L23700) · [Before (L23897-L23898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23897-L23898)

```diff
-         Tk.g.GL("EffectUpdate", {
-           wX: kk,
+         bS.k.cj("EffectUpdate", {
+           Kt: SS,
```

#### 2228. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23907-L23908` → after: `L23709-L23710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23709-L23710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23709-L23710) · [Before (L23907-L23908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23907-L23908)

```diff
-         Tk.g.GL("RemoveEffect", {
-           wX: kk,
+         bS.k.cj("RemoveEffect", {
+           Kt: SS,
```

#### 2229. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23934` → after: `L23736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23736) · [Before (L23934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23934)

```diff
-               displayName: null !== (qk = Hk.displayName) && void 0 !== qk ? qk : void 0,
+               displayName: null !== (uS = GS.displayName) && void 0 !== uS ? uS : void 0,
```

#### 2230. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23946` → after: `L23748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23748) · [Before (L23946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23946)

```diff
-   37001: (kk, Fk, Ik) => {
+   36988: (SS, HS, gS) => {
```

#### 2231. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23949` → after: `L23751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23751) · [Before (L23949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23949)

```diff
-       d: () => qk,
+       e: () => uS,
```

#### 2232. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23951-L23952` → after: `L23753-L23754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23753-L23754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23753-L23754) · [Before (L23951-L23952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23951-L23952)

```diff
-       j: () => lk,
-       l: () => tk
+       k: () => NS,
+       n: () => fS
```

#### 2233. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23954-L23956` → after: `L23756-L23758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23756-L23758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23756-L23758) · [Before (L23954-L23956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23954-L23956)

```diff
-     var Xk = Ik(36997),
-       Tk = Ik(37008),
-       ik = Ik(297);
+     var tS = gS(36982),
+       bS = gS(36996),
+       XS = gS(337);
```

#### 2234. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23960` → after: `L23762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23762) · [Before (L23960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23960)

```diff
-         [Xk.g]: Xk.e
+         [tS.d]: tS.b
```

#### 2235. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23965` → after: `L23767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23767) · [Before (L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23965)

```diff
-       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, ik.d)()
+       return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, XS.c)()
```

#### 2236. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L23995` → after: `L23797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23797) · [Before (L23995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L23995)

```diff
-           suggestedName: (0, Xk.n)(),
+           suggestedName: (0, tS.k)(),
```

#### 2237. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24006` → after: `L23808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23808) · [Before (L24006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24006)

```diff
-         type: Xk.g
+         type: tS.d
```

#### 2238. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24011` → after: `L23813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23813) · [Before (L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24011)

```diff
-       return (0, Xk.j)((0, Tk.h)(kk))
+       return (0, tS.g)((0, bS.e)(SS))
```

#### 2239. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24014` → after: `L23816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23816) · [Before (L24014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24014)

```diff
-   36444: (kk, Fk, Ik) => {
+   36460: (SS, HS, gS) => {
```

#### 2240. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24016` → after: `L23818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23818) · [Before (L24016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24016)

```diff
-       d: () => tk
+       e: () => fS
```

#### 2241. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24018-L24023` → after: `L23820-L23825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23820-L23825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23820-L23825) · [Before (L24018-L24023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24018-L24023)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(95),
-       ik = Ik(41),
-       yk = Ik(718),
-       lk = Ik(3396),
-       ak = Ik(6644);
+     var tS = gS(24),
+       bS = gS(104),
+       XS = gS(45),
+       xS = gS(754),
+       NS = gS(3591),
+       qS = gS(6848);
```

#### 2242. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24032` → after: `L23834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23834) · [Before (L24032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24032)

```diff
-       (0, lk.m)(kk) && !(0, lk.j)(kk) && (Fk = ik.j.getItem(qk), tk = Date.now(), "number" !== typeof Fk || tk < Fk || tk - Fk >= Lk) && (0, yk.b)((() => {
+       (0, NS.j)(SS) && !(0, NS.i)(SS) && (HS = XS.g.getItem(uS), fS = Date.now(), "number" !== typeof HS || fS < HS || fS - HS >= IS) && (0, xS.b)((() => {
```

#### 2243. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24034-L24035` → after: `L23836-L23837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23836-L23837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23836-L23837) · [Before (L24034-L24035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24034-L24035)

```diff
-           if ("landingPage" !== Xk.d.get("gameState")) return;
-           const kk = await (0, ak.i)();
+           if ("landingPage" !== tS.b.get("gameState")) return;
+           const SS = await (0, qS.f)();
```

#### 2244. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24037` → after: `L23839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23839) · [Before (L24037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24037)

```diff
-           ik.j.setItem(qk, Date.now());
+           XS.g.setItem(uS, Date.now());
```

#### 2245. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24040-L24041` → after: `L23842-L23843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23842-L23843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23842-L23843) · [Before (L24040-L24041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24040-L24041)

```diff
-           } = await Promise.all([Ik.e(77), Ik.e(133), Ik.e(130)]).then((() => Ik(41296)));
-           await Fk(kk, kk.listing) || ik.j.removeItem(qk)
+           } = await Promise.all([gS.e(77), gS.e(133), gS.e(130)]).then((() => gS(41295)));
+           await HS(SS, SS.listing) || XS.g.removeItem(uS)
```

#### 2246. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24048` → after: `L23850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23850) · [Before (L24048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24048)

```diff
-   6644: (kk, Fk, Ik) => {
+   6848: (SS, HS, gS) => {
```

#### 2247. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24050-L24051` → after: `L23852-L23853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23852-L23853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23852-L23853) · [Before (L24050-L24051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24050-L24051)

```diff
-       e: () => Tk,
-       i: () => ik
+       d: () => bS,
+       f: () => XS
```

#### 2248. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24053` → after: `L23855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23855) · [Before (L24053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24053)

```diff
-     var Xk = Ik(41);
+     var tS = gS(45);
```

#### 2249. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24058` → after: `L23860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23860) · [Before (L24058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24058)

```diff
-       return null !== (kk = await Xk.g.getItem(Tk, Fk)) && void 0 !== kk ? kk : null
+       return null !== (SS = await tS.e.getItem(bS, HS)) && void 0 !== SS ? SS : null
```

#### 2250. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24061` → after: `L23863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23863) · [Before (L24061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24061)

```diff
-   36491: (kk, Fk, Ik) => {
+   36505: (SS, HS, gS) => {
```

#### 2251. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24063` → after: `L23865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23865) · [Before (L24063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24063)

```diff
-       e: () => ak
+       d: () => qS
```

#### 2252. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24065-L24069` → after: `L23867-L23871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23867-L23871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23867-L23871) · [Before (L24065-L24069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24065-L24069)

```diff
-     var Xk = Ik(318),
-       Tk = Ik(25),
-       ik = Ik(36498),
-       yk = Ik(1580),
-       lk = Ik(1916);
+     var tS = gS(369),
+       bS = gS(24),
+       XS = gS(36508),
+       xS = gS(1733),
+       NS = gS(2111);
```

#### 2253. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24073` → after: `L23875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23875) · [Before (L24073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24073)

```diff
-       if (!Tk.d.get("isKeydownEnabled") || kk.repeat) return;
+       if (!bS.b.get("isKeydownEnabled") || SS.repeat) return;
```

#### 2254. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24075-L24076` → after: `L23877-L23878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23877-L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23877-L23878) · [Before (L24075-L24076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24075-L24076)

```diff
-       "Escape" === kk.key ? (0, yk.i)(kk) : null !== (Ik = lk.s.OpenSettings) && void 0 !== Ik && Ik.includes(Lk) ? (0, yk.z)(kk, Xk.r.SETTINGS) : null !== (ak = lk.s.OpenCharacterCustomization) && void 0 !== ak && ak.includes(Lk) ? (0, ik.c)() || (0, yk.z)(kk, Xk.r.CUSTOMISATION … [truncated]
-         showDebugOverlay: !Tk.d.get("showDebugOverlay")
+       "Escape" === SS.key ? (0, xS.i)(SS) : null !== (gS = NS.u.OpenSettings) && void 0 !== gS && gS.includes(IS) ? (0, xS.r)(SS, tS.q.SETTINGS) : null !== (qS = NS.u.OpenCharacterCustomization) && void 0 !== qS && qS.includes(IS) ? (0, XS.c)() || (0, xS.r)(SS, tS.q.CUSTOMISATION … [truncated]
+         showDebugOverlay: !bS.b.get("showDebugOverlay")
```

#### 2255. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24080` → after: `L23882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23882) · [Before (L24080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24080)

```diff
-   8862: (kk, Fk, Ik) => {
+   9079: (SS, HS, gS) => {
```

#### 2256. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24082-L24083` → after: `L23884-L23885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23884-L23885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23884-L23885) · [Before (L24082-L24083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24082-L24083)

```diff
-       e: () => lk,
-       h: () => ak
+       d: () => NS,
+       g: () => qS
```

#### 2257. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24085-L24087` → after: `L23887-L23889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23887-L23889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23887-L23889) · [Before (L24085-L24087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24085-L24087)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(1301),
-       ik = Ik(95);
+     var tS = gS(24),
+       bS = gS(1400),
+       XS = gS(104);
```

#### 2258. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24142` → after: `L23944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23944) · [Before (L24142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24142)

```diff
-           Tk = null !== Fk && void 0 !== Fk ? Fk : Xk.pattern;
+           bS = null !== HS && void 0 !== HS ? HS : tS.pattern;
```

#### 2259. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24145` → after: `L23947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23947) · [Before (L24145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24145)

```diff
-         ik - this.lastAnyAt < 40 && Xk.priority < this.playingPriority || ik - (null !== (Ik = this.lastAt.get(kk)) && void 0 !== Ik ? Ik : -1 / 0) < Xk.minGapMs || ik < this.playingUntil && Xk.priority < this.playingPriority || (this.lastAt.set(kk, ik), this.lastAnyAt = ik, this … [truncated]
+         XS - this.lastAnyAt < 40 && tS.priority < this.playingPriority || XS - (null !== (gS = this.lastAt.get(SS)) && void 0 !== gS ? gS : -1 / 0) < tS.minGapMs || XS < this.playingUntil && tS.priority < this.playingPriority || (this.lastAt.set(SS, XS), this.lastAnyAt = XS, this … [truncated]
```

#### 2260. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24152` → after: `L23954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23954) · [Before (L24152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24152)

```diff
-       enabled: () => lk() && Xk.d.get("isTouchScreen") && Xk.d.get("clientEscMenuOptions").vibration && !(0, Tk.h)()
+       enabled: () => NS() && tS.b.get("isTouchScreen") && tS.b.get("clientEscMenuOptions").vibration && !(0, bS.g)()
```

#### 2261. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24155` → after: `L23957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23957) · [Before (L24155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24155)

```diff
-   36446: (kk, Fk, Ik) => {
+   36463: (SS, HS, gS) => {
```

#### 2262. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24157` → after: `L23959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23959) · [Before (L24157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24157)

```diff
-       c: () => Ok
+       e: () => cS
```

#### 2263. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24159-L24161` → after: `L23961-L23963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23961-L23963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23961-L23963) · [Before (L24159-L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24159-L24161)

```diff
-     var Xk = Ik(628),
-       Tk = Ik(1220),
-       ik = Ik(149);
+     var tS = gS(680),
+       bS = gS(1312),
+       XS = gS(160);
```

#### 2264. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24165` → after: `L23967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23967) · [Before (L24165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24165)

```diff
-       return `${yk}${kk}`
+       return `${xS}${SS}`
```

#### 2265. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24175-L24189` → after: `L23977-L23991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R23977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L23977-L23991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L23977-L23991) · [Before (L24175-L24189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24175-L24189)

```diff
-     var Lk = Ik(1234),
-       tk = Ik(1217),
-       Zk = Ik(34),
-       jk = Ik(1199),
-       ek = Ik(1712),
-       wk = Ik(1745),
-       Hk = Ik(2873),
-       Jk = Ik(1287),
-       xk = Ik(1301),
-       Pk = Ik(1453),
-       Kk = Ik(1194),
-       Qk = Ik(36449),
-       sk = Ik(41),
-       Vk = Ik(129),
-       zk = Ik(36486);
+     var IS = gS(1329),
+       fS = gS(1309),
+       kS = gS(31),
+       aS = gS(1290),
+       KS = gS(1889),
+       jS = gS(1925),
+       GS = gS(3107),
+       CS = gS(1390),
+       nS = gS(1400),
+       PS = gS(1588),
+       QS = gS(1286),
+       DS = gS(36471),
+       wS = gS(45),
+       hS = gS(138),
+       ZS = gS(36503);
```

#### 2266. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24219` → after: `L24021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24021) · [Before (L24219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24219)

```diff
-         this.deps.enabled && this.deps.Mj("game_server_route", "cf_join_left", kk)
+         this.deps.enabled && this.deps.tK("game_server_route", "cf_join_left", SS)
```

#### 2267. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24225` → after: `L24027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24027) · [Before (L24225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24225)

```diff
-         if (Ik) this.deps.Mj("game_server_route", "cf_join", 0);
+         if (gS) this.deps.tK("game_server_route", "cf_join", 0);
```

#### 2268. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24238-L24239` → after: `L24040-L24041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24040-L24041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24040-L24041) · [Before (L24238-L24239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24238-L24239)

```diff
-         if ("refused" === Xk.at) return void this.deps.Mj("game_server_route", "cf_join_refused", Xk.code);
-         if (this.deps.Mj("game_server_route", `cf_join_failed:${Xk.at}`, Xk.code), void 0 === Ik) return;
+         if ("refused" === tS.at) return void this.deps.tK("game_server_route", "cf_join_refused", tS.code);
+         if (this.deps.tK("game_server_route", `cf_join_failed:${tS.at}`, tS.code), void 0 === gS) return;
```

#### 2269. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24257` → after: `L24059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24059) · [Before (L24257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24257)

```diff
-         return this.deps.Mj("game_server_route", Fk, Ik), "blocked" === Fk && (this.store({
+         return this.deps.tK("game_server_route", HS, gS), "blocked" === HS && (this.store({
```

#### 2270. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24285` → after: `L24087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24087) · [Before (L24285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24285)

```diff
-         "ours" === (null === Xk || void 0 === Xk ? void 0 : Xk.answer) ? this.deps.Mj("game_server_rtt", Fk, Xk.ms): this.deps.Mj("game_server_rtt", Ik, 0)
+         "ours" === (null === tS || void 0 === tS ? void 0 : tS.answer) ? this.deps.tK("game_server_rtt", HS, tS.ms): this.deps.tK("game_server_rtt", gS, 0)
```

#### 2271. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24288` → after: `L24090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24090) · [Before (L24288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24288)

```diff
-         return this.deps.probe(`https://${kk}/version`, 8e3)
+         return this.deps.probe(`https://${SS}/version`, 8e3)
```

#### 2272. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24316` → after: `L24118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24118) · [Before (L24316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24316)

```diff
-       storage: sk.j,
+       storage: wS.g,
```

#### 2273. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24319` → after: `L24121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24121) · [Before (L24319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24319)

```diff
-           Xk = await (0, jk.k)(kk, {
+           tS = await (0, aS.j)(SS, {
```

#### 2274. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24328` → after: `L24130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24130) · [Before (L24328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24328)

```diff
-         return null !== Xk && void 0 !== Xk ? Xk : {
+         return null !== tS && void 0 !== tS ? tS : {
```

#### 2275. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24333-L24334` → after: `L24135-L24136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24135-L24136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24135-L24136) · [Before (L24333-L24334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24333-L24334)

```diff
-       Mj: ek.p,
-       enabled: !(0, Vk.e)(),
+       tK: KS.o,
+       enabled: !(0, hS.b)(),
```

#### 2276. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24340` → after: `L24142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24142) · [Before (L24340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24340)

```diff
-       seatLegs: zk.g
+       seatLegs: ZS.i
```

#### 2277. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24346` → after: `L24148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24148) · [Before (L24346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24346)

```diff
-         if ((0, Xk.Q)(yk)) {
+         if ((0, tS.K)(xS)) {
```

#### 2278. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24349` → after: `L24151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24151) · [Before (L24349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24349)

```diff
-           if (qk.aborted || Hk.f.matchmakingEnded(kk.isError() ? null : performance.now()), kk.isError()) {
+           if (uS.aborted || GS.g.matchmakingEnded(SS.isError() ? null : performance.now()), SS.isError()) {
```

#### 2279. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24355` → after: `L24157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24157) · [Before (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24355)

```diff
-           Hk.f.skipPlayWait();
+           GS.g.skipPlayWait();
```

#### 2280. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24361` → after: `L24163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24163) · [Before (L24361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24361)

```diff
-             lobbyName: Fk instanceof Tk.e ? Fk.getLobbyName() : Fk
+             lobbyName: HS instanceof bS.g ? HS.getLobbyName() : HS
```

#### 2281. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24365-L24366` → after: `L24167-L24168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24167-L24168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24167-L24168) · [Before (L24365-L24366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24365-L24366)

```diff
-         console.log(`Connecting to ${tk.gameNameWithVariation} in lobby ${tk.lobbyName} on game server ${tk.endpoint}`), Zk.g.GL("matchmakeAndPlayStepCompleted", {
-           step: ik.j.REQUEST_TO_MATCHMAKING,
+         console.log(`Connecting to ${fS.gameNameWithVariation} in lobby ${fS.lobbyName} on game server ${fS.endpoint}`), kS.k.cj("matchmakeAndPlayStepCompleted", {
+           step: XS.g.REQUEST_TO_MATCHMAKING,
```

#### 2282. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24368` → after: `L24170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24170) · [Before (L24368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24368)

```diff
-         }), (0, ek.f)(), wk.c.markGameLoadStart(), (0, xk.s)({
+         }), (0, KS.h)(), jS.b.markGameLoadStart(), (0, nS.r)({
```

#### 2283. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24372` → after: `L24174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24174) · [Before (L24372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24372)

```diff
-         }), Zk.g.GL("loadingScreenState", "loadingPage:loadingGame");
+         }), kS.k.cj("loadingScreenState", "loadingPage:loadingGame");
```

#### 2284. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24382` → after: `L24184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24184) · [Before (L24382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24382)

```diff
-               (0, xk.s)({
+               (0, nS.r)({
```

#### 2285. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24391` → after: `L24193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24193) · [Before (L24391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24391)

```diff
-         }, Kk = !(0, Xk.Q)(yk), Qk = Fk => kk({
+         }, QS = !(0, tS.K)(xS), DS = HS => SS({
```

#### 2286. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24420` → after: `L24222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24222) · [Before (L24420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24420)

```diff
-         let Sk = null !== Vk && void 0 !== Vk ? Vk : zk.blockedAt,
+         let JS = null !== hS && void 0 !== hS ? hS : ZS.blockedAt,
```

#### 2287. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24424` → after: `L24226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24226) · [Before (L24424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24424)

```diff
-           if (Ok || (Sk ??= performance.now(), Zk.g.GL("gameServerRouteSwitched")), qk.aborted) return nk(Sk), Gk();
+           if (cS || (JS ??= performance.now(), kS.k.cj("gameServerRouteSwitched")), uS.aborted) return vS(JS), ES();
```

#### 2288. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24431` → after: `L24233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24233) · [Before (L24431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24431)

```diff
-         return vk.isError() ? (!0 === vk.asError().debugResult.iI && qk.aborted && nk(Sk), vk.asError().forward()) : (Ek.afterJoined(tk.endpoint), (0, Jk.Q)(), window.gtag ? window.gtag("event", "conversion", {
+         return OS.isError() ? (!0 === OS.asError().debugResult.Hg && uS.aborted && vS(JS), OS.asError().forward()) : (dS.afterJoined(fS.endpoint), (0, CS.S)(), window.gtag ? window.gtag("event", "conversion", {
```

#### 2289. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24433` → after: `L24235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24235) · [Before (L24433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24433)

```diff
-         }) : console.error("window.gtag not defined"), Lk.b.value({
+         }) : console.error("window.gtag not defined"), IS.d.value({
```

#### 2290. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24445` → after: `L24247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24247) · [Before (L24445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24445)

```diff
-       return Lk.b.errorWithCode("Left the game while it loaded", ik.j.REQUEST_TO_MATCHMAKING, {
+       return IS.d.errorWithCode("Left the game while it loaded", XS.g.REQUEST_TO_MATCHMAKING, {
```

#### 2291. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24447` → after: `L24249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24249) · [Before (L24447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24447)

```diff
-         iI: !0
+         Hg: !0
```

#### 2292. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24451-L24452` → after: `L24253-L24254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24253-L24254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24253-L24254) · [Before (L24451-L24452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24451-L24452)

```diff
-       return (0, Xk.Q)(kk) || kk instanceof Tk.e || !(kk.length > tk.M) ? await Pk.e.matchmakePlayer(Ik, kk, Fk, (0, Qk.d)()).then((kk => {
-         if (!1 === kk.succeeded) return Lk.b.errorWithCode(kk.failReason, ik.j.REQUEST_TO_MATCHMAKING, {
+       return (0, tS.K)(SS) || SS instanceof bS.g || !(SS.length > fS.Q) ? await PS.b.matchmakePlayer(gS, SS, HS, (0, DS.b)()).then((SS => {
+         if (!1 === SS.succeeded) return IS.d.errorWithCode(SS.failReason, XS.g.REQUEST_TO_MATCHMAKING, {
```

#### 2293. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24460` → after: `L24262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24262) · [Before (L24460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24460)

```diff
-         return Tk.isError() ? Tk.asError().forward() : Lk.b.value({
+         return bS.isError() ? bS.asError().forward() : IS.d.value({
```

#### 2294. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24465` → after: `L24267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24267) · [Before (L24465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24465)

```diff
-       })).catch((kk => (console.error("Bad response from the matchmaking server:", kk), Lk.b.errorWithCode(kk.toString(), ik.j.REQUEST_TO_MATCHMAKING, {
+       })).catch((SS => (console.error("Bad response from the matchmaking server:", SS), IS.d.errorWithCode(SS.toString(), XS.g.REQUEST_TO_MATCHMAKING, {
```

#### 2295. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24468` → after: `L24270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24270) · [Before (L24468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24468)

```diff
-       })))) : (console.error("Invalid lobby ID:", kk), Lk.b.errorWithCode("This lobby link's name is too long. Ask for a new link.", ik.j.REQUEST_TO_MATCHMAKING, {
+       })))) : (console.error("Invalid lobby ID:", SS), IS.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", XS.g.REQUEST_TO_MATCHMAKING, {
```

#### 2296. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24475` → after: `L24277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24277) · [Before (L24475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24475)

```diff
-       return Fk.isError() ? Lk.b.errorWithCode(Fk.asError().message, ik.j.CONNECT_TO_GAME_SERVER, {
+       return HS.isError() ? IS.d.errorWithCode(HS.asError().message, XS.g.CONNECT_TO_GAME_SERVER, {
```

#### 2297. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24477` → after: `L24279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24279) · [Before (L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24477)

```diff
-       }) : Lk.b.value(Fk.getValue())
+       }) : IS.d.value(HS.getValue())
```

#### 2298. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24482` → after: `L24284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24284) · [Before (L24482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24482)

```diff
-       (0, xk.n)("/")
+       (0, nS.j)("/")
```

#### 2299. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24485` → after: `L24287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24287) · [Before (L24485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24485)

```diff
-   34079: (kk, Fk, Ik) => {
+   34149: (SS, HS, gS) => {
```

#### 2300. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24487-L24489` → after: `L24289-L24291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24289-L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24289-L24291) · [Before (L24487-L24489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24487-L24489)

```diff
-       e: () => qk,
-       f: () => tk,
-       i: () => Lk
+       d: () => uS,
+       g: () => fS,
+       h: () => IS
```

#### 2301. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24491-L24494` → after: `L24293-L24296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24293-L24296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24293-L24296) · [Before (L24491-L24494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24491-L24494)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(1631),
-       ik = Ik(41),
-       yk = Ik(3612);
+     var tS = gS(24),
+       bS = gS(1792),
+       XS = gS(45),
+       xS = gS(3793);
```

#### 2302. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24499` → after: `L24301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24301) · [Before (L24499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24499)

```diff
-       const Fk = null !== (kk = ik.j.getItem(ak)) && void 0 !== kk ? kk : 0;
+       const HS = null !== (SS = XS.g.getItem(qS)) && void 0 !== SS ? SS : 0;
```

#### 2303. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24504` → after: `L24306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24306) · [Before (L24504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24504)

```diff
-       ik.j.setItem(ak, Date.now())
+       XS.g.setItem(qS, Date.now())
```

#### 2304. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24507-L24508` → after: `L24309-L24310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24309-L24310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24309-L24310) · [Before (L24507-L24508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24507-L24508)

```diff
-       return await Tk.b.ready, Tk.b.supports("notifications") ? Xk.d.get("mobilePushNotificationsCanAsk") ? async () => {
-         Tk.b.request("notifications.requestPermission", {}).then((kk => {
+       return await bS.d.ready, bS.d.supports("notifications") ? tS.b.get("mobilePushNotificationsCanAsk") ? async () => {
+         bS.d.request("notifications.requestPermission", {}).then((SS => {
```

#### 2305. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24512` → after: `L24314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24314) · [Before (L24512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24512)

```diff
-           Xk.d.set({
+           tS.b.set({
```

#### 2306. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24518` → after: `L24320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24320) · [Before (L24518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24518)

```diff
-       }: null: await yk.b.canAsk() ? () => yk.b.requestPermission() : null
+       }: null: await xS.d.canAsk() ? () => xS.d.requestPermission() : null
```

#### 2307. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24521` → after: `L24323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24323) · [Before (L24521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24521)

```diff
-   36458: (kk, Fk, Ik) => {
+   36479: (SS, HS, gS) => {
```

#### 2308. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24524-L24526` → after: `L24326-L24328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24326-L24328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24326-L24328) · [Before (L24524-L24526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24524-L24526)

```diff
-       g: () => Lk,
-       j: () => jk,
-       l: () => tk
+       f: () => IS,
+       h: () => aS,
+       i: () => fS
```

#### 2309. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24528-L24531` → after: `L24330-L24333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24330-L24333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24330-L24333) · [Before (L24528-L24531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24528-L24531)

```diff
-     var Xk = Ik(337),
-       Tk = Ik(659),
-       ik = Ik(672),
-       yk = Ik(41);
+     var tS = gS(387),
+       bS = gS(710),
+       XS = gS(717),
+       xS = gS(45);
```

#### 2310. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24541-L24542` → after: `L24343-L24344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24343-L24344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24343-L24344) · [Before (L24541-L24542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24541-L24542)

```diff
-       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m;
-       (0, ik.g)(kk, lk)
+       let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h;
+       (0, XS.h)(SS, NS)
```

#### 2311. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24546` → after: `L24348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24348) · [Before (L24546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24546)

```diff
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m).setItem(qk, !0)
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h).setItem(uS, !0)
```

#### 2312. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24550` → after: `L24352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24352) · [Before (L24550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24550)

```diff
-       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m;
+       let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h;
```

#### 2313. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24555` → after: `L24357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24357) · [Before (L24555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24555)

```diff
-       let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk.m;
+       let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xS.h;
```

#### 2314. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24562` → after: `L24364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24364) · [Before (L24562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24562)

```diff
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m).getItem(qk)
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h).getItem(uS)
```

#### 2315. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24565-L24569` → after: `L24367-L24371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24367-L24371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24367-L24371) · [Before (L24565-L24569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24565-L24569)

```diff
-       return Zk = null !== Ik && null !== Lk && (0, ik.f)(Fk, lk) && function(kk, Fk, Ik) {
-           const Tk = (0, Xk.dc)(kk),
-             ik = (0, Xk.dc)(Fk),
-             yk = (0, Xk.Xb)(kk),
-             lk = (0, Xk.Xb)(Fk);
+       return kS = null !== gS && null !== IS && (0, XS.g)(HS, NS) && function(SS, HS, gS) {
+           const bS = (0, tS.Kb)(SS),
+             XS = (0, tS.Kb)(HS),
+             xS = (0, tS.Fb)(SS),
+             NS = (0, tS.Fb)(HS);
```

#### 2316. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24571` → after: `L24373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24373) · [Before (L24571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24571)

```diff
-         }(Lk, kk, tk) ? Ik : (0, Tk.c)(), (0, ik.i)(Fk, lk, Zk), Fk.setItem(ak, kk),
+         }(IS, SS, fS) ? gS : (0, bS.e)(), (0, XS.l)(HS, NS, kS), HS.setItem(qS, SS),
```

#### 2317. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24573` → after: `L24375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24375) · [Before (L24573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24573)

```diff
-           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.m).removeItem(qk)
+           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h).removeItem(uS)
```

#### 2318. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24577` → after: `L24379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24379) · [Before (L24577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24577)

```diff
-   36449: (kk, Fk, Ik) => {
+   36471: (SS, HS, gS) => {
```

#### 2319. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24579-L24580` → after: `L24381-L24382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24381-L24382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24381-L24382) · [Before (L24579-L24580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24579-L24580)

```diff
-       d: () => Qk,
-       g: () => sk
+       b: () => DS,
+       f: () => wS
```

#### 2320. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24582-L24599` → after: `L24384-L24401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24384-L24401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24384-L24401) · [Before (L24582-L24599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24582-L24599)

```diff
-     var Xk = Ik(1018),
-       Tk = Ik(198),
-       ik = Ik(333),
-       yk = Ik(633),
-       lk = Ik(337),
-       ak = Ik(1021),
-       qk = Ik(646),
-       Lk = Ik(684),
-       tk = Ik(4508),
-       Zk = Ik(95),
-       jk = Ik(129),
-       ek = Ik(1665),
-       wk = Ik(111),
-       Hk = Ik(36458),
-       Jk = Ik(41),
-       xk = Ik(667),
- ... (2 more removed lines; see GitHub link above)
+     var tS = gS(1087),
+       bS = gS(215),
+       XS = gS(378),
+       xS = gS(687),
+       NS = gS(387),
+       qS = gS(1089),
+       uS = gS(699),
+       IS = gS(727),
+       fS = gS(4656),
+       kS = gS(104),
+       aS = gS(138),
+       KS = gS(1844),
+       jS = gS(118),
+       GS = gS(36479),
+       CS = gS(45),
+       nS = gS(713),
+ ... (2 more added lines; see GitHub link above)
```

#### 2321. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24603` → after: `L24405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24405) · [Before (L24603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24603)

```diff
-       return [...null !== (kk = navigator.languages) && void 0 !== kk ? kk : [null !== (Fk = navigator.language) && void 0 !== Fk ? Fk : "none"], "en-gb"]
+       return [...null !== (SS = navigator.languages) && void 0 !== SS ? SS : [null !== (HS = navigator.language) && void 0 !== HS ? HS : "none"], "en-gb"]
```

#### 2322. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24607-L24608` → after: `L24409-L24410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24409-L24410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24409-L24410) · [Before (L24607-L24608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24607-L24608)

```diff
-       const zk = (0, Xk.j)(Fk) ? (0, Xk.n)(Fk) : null,
-         Sk = kk.isLoggedIn() && void 0 !== (0, Tk.d)(ik.i, jk.v) ? (0, Pk.x)() : null,
+       const ZS = (0, tS.m)(HS) ? (0, tS.t)(HS) : null,
+         JS = SS.isLoggedIn() && void 0 !== (0, bS.c)(XS.m, aS.r) ? (0, PS.z)() : null,
```

#### 2323. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24614` → after: `L24416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24416) · [Before (L24614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24614)

```diff
-             joinDiscord: !!Jk.j.getItem("DiscordPressed"),
+             joinDiscord: !!CS.g.getItem("DiscordPressed"),
```

#### 2324. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24626` → after: `L24428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24428) · [Before (L24626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24626)

```diff
-             deviceType: (0, wk.e)()
+             deviceType: (0, jS.c)()
```

#### 2325. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24632-L24639` → after: `L24434-L24441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24434-L24441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24434-L24441) · [Before (L24632-L24639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24632-L24639)

```diff
-           siteUsed: jk.v,
-           subsiteUsed: jk.C,
-           playSessionId: (0, Hk.j)(Fk),
-           visitSessionId: (0, xk.h)(),
-           clientReason: qk.o.reason,
-           budgetBasis: (0, Kk.h)(),
-           ...null !== Lk.t && {
-             diagClaim: Lk.t.claimId
+           siteUsed: aS.r,
+           subsiteUsed: aS.A,
+           playSessionId: (0, GS.h)(HS),
+           visitSessionId: (0, nS.g)(),
+           clientReason: uS.p.reason,
+           budgetBasis: (0, QS.i)(),
+           ...null !== IS.p && {
+             diagClaim: IS.p.claimId
```

#### 2326. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24645-L24646` → after: `L24447-L24448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24447-L24448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24447-L24448) · [Before (L24645-L24646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24645-L24646)

```diff
-       return null !== zk && (0, lk.Kc)(zk) ? (vk.lobbyName = (0, Xk.i)(zk, (0, Xk.l)(Fk), Ik), {
-         roomName: `classic_${ak.f}`,
+       return null !== ZS && (0, NS.yc)(ZS) ? (OS.lobbyName = (0, tS.k)(ZS, (0, tS.p)(HS), gS), {
+         roomName: `classic_${qS.c}`,
```

#### 2327. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24654` → after: `L24456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24456) · [Before (L24654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24654)

```diff
-   8743: (kk, Fk, Ik) => {
+   8970: (SS, HS, gS) => {
```

#### 2328. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24656` → after: `L24458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24458) · [Before (L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24656)

```diff
-       d: () => yk
+       e: () => xS
```

#### 2329. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24658-L24660` → after: `L24460-L24462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24460-L24462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24460-L24462) · [Before (L24658-L24660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24658-L24660)

```diff
-     var Xk = Ik(8752),
-       Tk = Ik(628),
-       ik = Ik(129);
+     var tS = gS(8975),
+       bS = gS(680),
+       XS = gS(138);
```

#### 2330. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24664-L24665` → after: `L24466-L24467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24466-L24467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24466-L24467) · [Before (L24664-L24665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24664-L24665)

```diff
-       if ((0, Tk.Q)(kk)) return !0;
-       const yk = null !== (Fk = null === (Ik = ik.r[ik.v]) || void 0 === Ik ? void 0 : Ik.adConfig.showRewardedAds) && void 0 !== Fk && Fk;
+       if ((0, bS.K)(SS)) return !0;
+       const xS = null !== (HS = null === (gS = XS.m[XS.r]) || void 0 === gS ? void 0 : gS.adConfig.showRewardedAds) && void 0 !== HS && HS;
```

#### 2331. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24670` → after: `L24472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24472) · [Before (L24670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24670)

```diff
-             if ((0, Xk.j)(Fk.items[kk], yk)) return !1
+             if ((0, tS.i)(HS.items[SS], xS)) return !1
```

#### 2332. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24675` → after: `L24477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24477) · [Before (L24675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24675)

```diff
-   36575: (kk, Fk, Ik) => {
+   36599: (SS, HS, gS) => {
```

#### 2333. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24686` → after: `L24488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24488) · [Before (L24686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24686)

```diff
-       d: () => Xk,
+       c: () => tS,
```

#### 2334. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24690` → after: `L24492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24492) · [Before (L24690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24690)

```diff
-   36927: (kk, Fk, Ik) => {
+   36908: (SS, HS, gS) => {
```

#### 2335. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24692-L24697` → after: `L24494-L24497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24494-L24497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24494-L24497) · [Before (L24692-L24697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24692-L24697)

```diff
-       B: () => Rk,
-       F: () => Uk,
-       G: () => Ck,
-       H: () => bk,
-       K: () => Nk,
-       c: () => ak,
+       A: () => iS,
+       C: () => AS,
+       E: () => WS,
+       d: () => qS,
```

#### 2336. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24703` → after: `L24504-L24505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24504-L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24504-L24505) · [Before (L24703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24703)

```diff
-       s: () => pk,
+       p: () => ES,
+       t: () => JS,
```

#### 2337. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24707` → after: `L24509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24509) · [Before (L24707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24707)

```diff
-     var Xk = Ik(41);
+     var tS = gS(45);
```

#### 2338. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24742` → after: `L24544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24544) · [Before (L24742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24742)

```diff
-         const kk = Xk.j.getItem(qk);
+         const SS = tS.g.getItem(uS);
```

#### 2339. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24749` → after: `L24551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24551) · [Before (L24749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24749)

```diff
-           ..."object" === typeof kk && null !== kk ? kk : {}
+           ..."object" === typeof SS && null !== SS ? SS : {}
```

#### 2340. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24760` → after: `L24562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24562) · [Before (L24760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24760)

```diff
-       }, Xk.j.setItem(qk, Zk))
+       }, tS.g.setItem(uS, kS))
```

#### 2341. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24764` → after: `L24566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24566) · [Before (L24764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24764)

```diff
-       return "docsOverview" === kk ? ik : "aiHelperOverview" === kk ? yk : jk ? Tk[jk] : []
+       return "docsOverview" === SS ? XS : "aiHelperOverview" === SS ? xS : aS ? bS[aS] : []
```

#### 2342. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24778` → after: `L24580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24580) · [Before (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24778)

```diff
-           return Hk ? Hk.name === kk : "welcome" === kk
+           return GS ? GS.name === SS : "welcome" === SS
```

#### 2343. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24787` → after: `L24589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24589) · [Before (L24787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24787)

```diff
-       return null !== (Fk = sk(kk).find((Fk => Sk(kk, Fk)))) && void 0 !== Fk ? Fk : null
+       return null !== (HS = wS(SS).find((HS => JS(SS, HS)))) && void 0 !== HS ? HS : null
```

#### 2344. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24839` → after: `L24641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24641) · [Before (L24839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24839)

```diff
-       const Ik = Fk ? kk : jk === kk ? null : jk;
+       const gS = HS ? SS : aS === SS ? null : aS;
```

#### 2345. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24853` → after: `L24655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24655) · [Before (L24853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24853)

```diff
-   36588: (kk, Fk, Ik) => {
+   36608: (SS, HS, gS) => {
```

#### 2346. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24855-L24858` → after: `L24657-L24660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24657-L24660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24657-L24660) · [Before (L24855-L24858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24855-L24858)

```diff
-       d: () => Lk,
-       h: () => Zk,
-       l: () => Jk,
-       p: () => qk
+       e: () => IS,
+       i: () => kS,
+       m: () => CS,
+       o: () => uS
```

#### 2347. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24860-L24865` → after: `L24662-L24667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24662-L24667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24662-L24667) · [Before (L24860-L24865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24860-L24865)

```diff
-     var Xk = Ik(25),
-       Tk = Ik(2331),
-       ik = Ik(2338),
-       yk = Ik(2341),
-       lk = Ik(2400),
-       ak = Ik(34);
+     var tS = gS(24),
+       bS = gS(2510),
+       XS = gS(2517),
+       xS = gS(2526),
+       NS = gS(2603),
+       qS = gS(31);
```

#### 2348. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24868` → after: `L24670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24670) · [Before (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24868)

```diff
-       return (!(0, yk.d)() || 0 === kk && 0 === Fk) && (0, ik.q)(Tk.m.Joystick, 0, kk, Fk, 0)
+       return (!(0, xS.c)() || 0 === SS && 0 === HS) && (0, XS.y)(bS.g.Joystick, 0, SS, HS, 0)
```

#### 2349. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24895` → after: `L24697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24697) · [Before (L24895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24895)

```diff
-       return document.documentElement.classList.contains(lk.g)
+       return document.documentElement.classList.contains(NS.m)
```

#### 2350. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24959` → after: `L24761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24761) · [Before (L24959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24959)

```diff
-         if (!Fk) return void this.write(Tk.m.TouchZone, kk, 0, 0, 0);
+         if (!HS) return void this.write(bS.g.TouchZone, SS, 0, 0, 0);
```

#### 2351. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24964` → after: `L24766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24766) · [Before (L24964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24964)

```diff
-         this.write(Tk.m.TouchZone, kk, ik.x - this.canvasLeft, ik.y - this.canvasTop, wk(Ik.width, Ik.height));
+         this.write(bS.g.TouchZone, SS, XS.x - this.canvasLeft, XS.y - this.canvasTop, jS(gS.width, gS.height));
```

#### 2352. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24966` → after: `L24768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24768) · [Before (L24966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24966)

```diff
-         this.write(Tk.m.TouchZone, 256 | kk, 0, 0, yk ? wk(yk.width, yk.height) : 0)
+         this.write(bS.g.TouchZone, 256 | SS, 0, 0, xS ? jS(xS.width, xS.height) : 0)
```

#### 2353. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24970` → after: `L24772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24772) · [Before (L24970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24970)

```diff
-           Ik = Xk.d.get("worldPanelHud");
+           gS = tS.b.get("worldPanelHud");
```

#### 2354. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24978-L24979` → after: `L24780-L24781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24780-L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24780-L24781) · [Before (L24978-L24979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24978-L24979)

```diff
-     }(ik.q);
-     (0, ak.i)(lk.d, (() => {
+     }(XS.y);
+     (0, qS.m)(NS.f, (() => {
```

#### 2355. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24983` → after: `L24785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24785) · [Before (L24983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24983)

```diff
-   36936: (kk, Fk, Ik) => {
+   36922: (SS, HS, gS) => {
```

#### 2356. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24985` → after: `L24787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24787) · [Before (L24985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24985)

```diff
-       return null === kk || null === Fk ? kk === Fk : kk[0] === Fk[0] && kk[1] === Fk[1] && kk[2] === Fk[2]
+       return null === SS || null === HS ? SS === HS : SS[0] === HS[0] && SS[1] === HS[1] && SS[2] === HS[2]
```

#### 2357. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24992-L24993` → after: `L24794-L24795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24794-L24795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24794-L24795) · [Before (L24992-L24993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24992-L24993)

```diff
-       c: () => Tk,
-       f: () => Xk
+       b: () => bS,
+       c: () => tS
```

#### 2358. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24996` → after: `L24798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24798) · [Before (L24996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24996)

```diff
-   8763: (kk, Fk, Ik) => {
+   8983: (SS, HS, gS) => {
```

#### 2359. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L24999` → after: `L24801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24801) · [Before (L24999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L24999)

```diff
-       f: () => Xk
+       d: () => tS
```

#### 2360. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25014` → after: `L24816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24816) · [Before (L25014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25014)

```diff
-           if (Fk && "translationKey" in Ik) return `{${Ik.translationKey}${void 0===Ik.params?"":` ${JSON.stringify(Ik.params)}`}}`;
+           if (HS && "translationKey" in gS) return `{${gS.translationKey}${void 0===gS.params?"":` ${JSON.stringify(gS.params)}`}}`;
```

#### 2361. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25016` → after: `L24818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24818) · [Before (L25016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25016)

```diff
-         }(kk, Fk)) && void 0 !== Ik ? Ik : " "
+         }(SS, HS)) && void 0 !== gS ? gS : " "
```

#### 2362. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25020` → after: `L24822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24822) · [Before (L25020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25020)

```diff
-   36882: (kk, Fk, Ik) => {
+   36880: (SS, HS, gS) => {
```

#### 2363. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25022-L25023` → after: `L24824-L24825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24824-L24825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24824-L24825) · [Before (L25022-L25023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25022-L25023)

```diff
-       b: () => ak,
-       e: () => lk
+       d: () => qS,
+       g: () => NS
```

#### 2364. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25125` → after: `L24927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24927) · [Before (L25125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25125)

```diff
-   36891: (kk, Fk, Ik) => {
+   36882: (SS, HS, gS) => {
```

#### 2365. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25128` → after: `L24930-L24931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24930-L24931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24930-L24931) · [Before (L25128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25128)

```diff
-       i: () => lk,
+       f: () => NS,
+       h: () => xS,
```

#### 2366. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25130` → after: `L24933-L24934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24933-L24934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24933-L24934) · [Before (L25130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25130)

```diff
-       o: () => ik,
+       m: () => uS,
+       n: () => IS,
```

#### 2367. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25132-L25135` → after: `L24936-L24937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24936-L24937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24936-L24937) · [Before (L25132-L25135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25132-L25135)

```diff
-       t: () => Lk,
-       v: () => ek,
-       w: () => jk,
-       y: () => Zk
+       s: () => aS,
+       t: () => kS
```

#### 2368. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25137` → after: `L24939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24939) · [Before (L25137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25137)

```diff
-     var Xk = Ik(1231);
+     var tS = gS(1327);
```

#### 2369. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25145` → after: `L24947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24947) · [Before (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25145)

```diff
-       return kk === Xk.g || kk === Xk.k
+       return SS === tS.i || SS === tS.j
```

#### 2370. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25149` → after: `L24951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24951) · [Before (L25149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25149)

```diff
-       return kk === Xk.g && Fk === Xk.k || kk === Xk.k && Fk === Xk.g
+       return SS === tS.i && HS === tS.j || SS === tS.j && HS === tS.i
```

#### 2371. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25153-L25155` → after: `L24955-L24957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24955-L24957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24955-L24957) · [Before (L25153-L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25153-L25155)

```diff
-       const Fk = Xk.k in kk,
-         Ik = Xk.g in kk;
-       return Fk && Ik ? null : Fk ? Xk.k : Ik ? Xk.g : null
+       const HS = tS.j in SS,
+         gS = tS.i in SS;
+       return HS && gS ? null : HS ? tS.j : gS ? tS.i : null
```

#### 2372. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25159-L25160` → after: `L24961-L24962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24961-L24962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24961-L24962) · [Before (L25159-L25160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25159-L25160)

```diff
-       const Xk = `${Fk}/`;
-       return kk.filter((kk => kk.startsWith(Xk))).map((kk => [kk, `${Ik}/${kk.slice(Xk.length)}`]))
+       const tS = `${HS}/`;
+       return SS.filter((SS => SS.startsWith(tS))).map((SS => [SS, `${gS}/${SS.slice(tS.length)}`]))
```

#### 2373. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25171` → after: `L24973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24973) · [Before (L25171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25171)

```diff
-       return `${tk}${kk}`
+       return `${fS}${SS}`
```

#### 2374. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25175` → after: `L24977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24977) · [Before (L25175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25175)

```diff
-       return `/node_modules/@plugins/${kk}/${Fk}`
+       return `/node_modules/@plugins/${SS}/${HS}`
```

#### 2375. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25183` → after: `L24985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24985) · [Before (L25183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25183)

```diff
-       }(Fk) ? Fk : null
+       }(HS) ? HS : null
```

#### 2376. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25186` → after: `L24988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24988) · [Before (L25186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25186)

```diff
-   36904: (kk, Fk, Ik) => {
+   36892: (SS, HS, gS) => {
```

#### 2377. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25188-L25189` → after: `L24990-L24992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24990-L24992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24990-L24992) · [Before (L25188-L25189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25188-L25189)

```diff
-       d: () => lk,
-       h: () => Tk,
+       c: () => NS,
+       f: () => bS,
+       g: () => xS,
```

#### 2378. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25191-L25192` → after: `L24994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24994) · [Before (L25191-L25192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25191-L25192)

```diff
-       l: () => ak,
-       n: () => ik
+       k: () => XS
```

#### 2379. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25194` → after: `L24996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R24996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L24996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L24996) · [Before (L25194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25194)

```diff
-     var Xk = Ik(36899);
+     var tS = gS(36887);
```

#### 2380. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25200` → after: `L25002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25002) · [Before (L25200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25200)

```diff
-       return kk.endsWith(".bloxdschem") && (0, Xk.u)(kk.slice(0, -11) + ".ts") && kk.length <= 64
+       return SS.endsWith(".bloxdschem") && (0, tS.r)(SS.slice(0, -11) + ".ts") && SS.length <= 64
```

#### 2381. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25207` → after: `L25009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25009) · [Before (L25207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25207)

```diff
-   8752: (kk, Fk, Ik) => {
+   8975: (SS, HS, gS) => {
```

#### 2382. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25228` → after: `L25030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25030) · [Before (L25228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25228)

```diff
-       const Tk = null !== (Xk = Ik.excludedPlayers) && void 0 !== Xk ? Xk : [Fk];
+       const bS = null !== (tS = gS.excludedPlayers) && void 0 !== tS ? tS : [HS];
```

#### 2383. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25234-L25235` → after: `L25037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25037) · [Before (L25234-L25235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25234-L25235)

```diff
-       f: () => yk,
-       j: () => Xk
+       i: () => tS
```

#### 2384. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25238` → after: `L25040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25040) · [Before (L25238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25238)

```diff
-   36899: (kk, Fk, Ik) => {
+   36887: (SS, HS, gS) => {
```

#### 2385. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25240-L25243` → after: `L25042-L25046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25042-L25046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25042-L25046) · [Before (L25240-L25243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25240-L25243)

```diff
-       e: () => Tk,
-       i: () => ik,
-       l: () => Zk,
-       p: () => lk,
+       b: () => bS,
+       d: () => XS,
+       h: () => kS,
+       j: () => NS,
+       n: () => qS,
```

#### 2386. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25250` → after: `L25052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25052) · [Before (L25250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25250)

```diff
-     var Xk = Ik(1231);
+     var tS = gS(1327);
```

#### 2387. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25259` → after: `L25061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25061) · [Before (L25259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25259)

```diff
-       return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
+       return "lobby" === SS.kind ? `lobby:${SS.path}` : `codeBlock:${SS.pos[0]},${SS.pos[1]},${SS.pos[2]}`
```

#### 2388. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25265` → after: `L25067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25067) · [Before (L25265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25265)

```diff
-         path: Xk.g
+         path: tS.i
```

#### 2389. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25304` → after: `L25106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25106) · [Before (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25304)

```diff
-   4843: (kk, Fk, Ik) => {
+   4992: (SS, HS, gS) => {
```

#### 2390. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25309-L25310` → after: `L25111-L25112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25111-L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25111-L25112) · [Before (L25309-L25310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25309-L25310)

```diff
-       k: () => ak,
-       n: () => yk
+       j: () => qS,
+       k: () => xS
```

#### 2391. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25454` → after: `L25256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25256) · [Before (L25454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25454)

```diff
-       return "string" !== typeof kk ? kk : Object.hasOwn(ik, kk) ? ik[kk] : null
+       return "string" !== typeof SS ? SS : Object.hasOwn(XS, SS) ? XS[SS] : null
```

#### 2392. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25486-L25487` → after: `L25288-L25289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25288-L25289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25288-L25289) · [Before (L25486-L25487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25486-L25487)

```diff
-   8809: () => {},
-   9906: kk => {
+   9014: () => {},
+   10158: SS => {
```

#### 2393. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25490` → after: `L25292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25292) · [Before (L25490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25490)

```diff
-   18032: kk => {
+   18407: SS => {
```

#### 2394. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25493` → after: `L25295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25295) · [Before (L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25493)

```diff
-   20004: kk => {
+   20333: SS => {
```

#### 2395. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25496` → after: `L25298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25298) · [Before (L25496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25496)

```diff
-   20013: kk => {
+   20342: SS => {
```

#### 2396. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25499` → after: `L25301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25301) · [Before (L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25499)

```diff
-   20015: kk => {
+   20348: SS => {
```

#### 2397. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25502` → after: `L25304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25304) · [Before (L25502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25502)

```diff
-   20019: kk => {
+   20354: SS => {
```

#### 2398. `bundles/bloxd.io/chunks/js/85.js` (Changed code · before: `L25505` → after: `L25307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20R25307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-d8337e0828157330d3f03945100ba176827e2882b3ab7acb3bb3c80f4662ae20) · [After (L25307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/85.js#L25307) · [Before (L25505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/85.js#L25505)

```diff
-   20022: kk => {
+   20357: SS => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/86.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/86.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba)

#### 1. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L4)

```diff
-   4784: (kk, Fk, Ik) => {
+   4904: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L6-L7)

```diff
-       b: () => Kk,
-       c: () => Jk
+       c: () => QS,
+       f: () => CS
```

#### 3. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L9-L16` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L9-L16) · [Before (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L9-L16)

```diff
-     var Xk = Ik(1283),
-       Tk = Ik(34);
-     var ik = Ik(337);
-     var yk = Ik(628);
-     var lk = Ik(2331),
-       ak = Ik(4792),
-       qk = Ik(4801),
-       Lk = Ik(4814);
+     var tS = gS(1386),
+       bS = gS(31);
+     var XS = gS(387);
+     var xS = gS(680);
+     var NS = gS(2510),
+       qS = gS(4911),
+       uS = gS(4938),
+       IS = gS(4954);
```

#### 4. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L27)

```diff
-         if (!yk) throw console.error(`No QTE implementation registered for type: ${Fk}`), new Error(`No QTE implementation registered for type: ${Fk}`);
+         if (!xS) throw console.error(`No QTE implementation registered for type: ${HS}`), new Error(`No QTE implementation registered for type: ${HS}`);
```

#### 5. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L33)

```diff
-         this.mouseSub = Tk.g.subscribe("QTEMouseState", (kk => {
+         this.mouseSub = bS.k.subscribe("QTEMouseState", (SS => {
```

#### 6. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L38-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L38-L40) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L38-L40)

```diff
-         })), this.stopInputActions = (0, qk.g)((kk => {
-           this.isCompleted || !Zk.has(kk.action) && !(0, qk.f)(kk) || this.implementation.handleMouseInput(kk.down)
-         })), this.tickSub = Tk.g.subscribe("noaTick", (kk => {
+         })), this.stopInputActions = (0, uS.h)((SS => {
+           this.isCompleted || !kS.has(SS.action) && !(0, uS.e)(SS) || this.implementation.handleMouseInput(SS.down)
+         })), this.tickSub = bS.k.subscribe("noaTick", (SS => {
```

#### 7. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L44-L45` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L44-L45) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L44-L45)

```diff
-         })), this.stopShellTicks = (0, ak.y)((() => {
-           this.isCompleted || this.implementation.handleTick(lk.x / 1e3)
+         })), this.stopShellTicks = (0, qS.w)((() => {
+           this.isCompleted || this.implementation.handleTick(NS.u / 1e3)
```

#### 8. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L50)

```diff
-         this.mouseSub && (Tk.g.unsubscribe(this.mouseSub), this.mouseSub = null), null === (kk = this.stopInputActions) || void 0 === kk || kk.call(this), this.stopInputActions = null, null === (Fk = this.stopShellTicks) || void 0 === Fk || Fk.call(this), this.stopShellTicks = nu … [truncated]
+         this.mouseSub && (bS.k.unsubscribe(this.mouseSub), this.mouseSub = null), null === (SS = this.stopInputActions) || void 0 === SS || SS.call(this), this.stopInputActions = null, null === (HS = this.stopShellTicks) || void 0 === HS || HS.call(this), this.stopShellTicks = nu … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L62)

```diff
-     const ek = new Xk.c,
+     const KS = new tS.e,
```

#### 10. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L69)

```diff
-           this.resolveRequest = Fk, this.tearDownNotification = Ik, this.progress = 0, this.oI = void 0, this.vI = void 0, this.EI = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
+           this.resolveRequest = HS, this.tearDownNotification = gS, this.progress = 0, this.Dg = void 0, this.wg = void 0, this.hg = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
```

#### 11. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L71)

```diff
-           this.oI = null !== (Xk = lk.oI) && void 0 !== Xk ? Xk : .075, this.vI = null !== (Tk = lk.vI) && void 0 !== Tk ? Tk : 1, this.progress = null !== (ik = lk.SI) && void 0 !== ik ? ik : 30, this.EI = null !== (yk = lk.EI) && void 0 !== yk && yk, this.parameters = lk
+           this.Dg = null !== (tS = NS.Dg) && void 0 !== tS ? tS : .075, this.wg = null !== (bS = NS.wg) && void 0 !== bS ? bS : 1, this.progress = null !== (XS = NS.Qg) && void 0 !== XS ? XS : 30, this.hg = null !== (xS = NS.hg) && void 0 !== xS && xS, this.parameters = NS
```

#### 12. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L74)

```diff
-           kk && !this.isCompleted && (this.clickCount++, this.progress += this.vI, this.progress >= 100 && this.complete(!0))
+           SS && !this.isCompleted && (this.clickCount++, this.progress += this.wg, this.progress >= 100 && this.complete(!0))
```

#### 13. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L78)

```diff
-             if (this.progress -= this.oI, this.EI && this.progress <= 0) this.complete(!1);
+             if (this.progress -= this.Dg, this.hg && this.progress <= 0) this.complete(!1);
```

#### 14. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L103)

```diff
-           this.resolveRequest = Fk, this.tearDownNotification = Ik, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = kk, this.timeWindowMs = null !== (Xk = this.parameters.uI) && void … [truncated]
+           this.resolveRequest = HS, this.tearDownNotification = gS, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = SS, this.timeWindowMs = null !== (tS = this.parameters.vg) && void … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L124)

```diff
-               uI: this.timeWindowMs
+               vg: this.timeWindowMs
```

#### 16. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L140-L141)

```diff
-             CI: ik.e.clamp(Tk.CI, .05, 1)
-           }, this.progress = null !== (Xk = Tk.SI) && void 0 !== Xk ? Xk : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
+             Ag: XS.b.clamp(bS.Ag, .05, 1)
+           }, this.progress = null !== (tS = bS.Qg) && void 0 !== tS ? tS : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
```

#### 17. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L152)

```diff
-           this.moverPosition += kk * this.parameters.NI * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
+           this.moverPosition += SS * this.parameters.yg * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
```

#### 18. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L158)

```diff
-           const kk = ik.e.clamp(1 - .7 * this.parameters.cI, 0, 1.4);
+           const SS = XS.b.clamp(1 - .7 * this.parameters.Vg, 0, 1.4);
```

#### 19. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L162-L163)

```diff
-           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.WI : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = ik.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
-           const kk = this.parameters.CI / 2,
+           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.ig : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = XS.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
+           const SS = this.parameters.Ag / 2,
```

#### 20. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L169)

```diff
-           const kk = this.parameters.CI / 2;
+           const SS = this.parameters.Ag / 2;
```

#### 21. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L173)

```diff
-           this.isMoverInCatchZone() ? this.progress += this.parameters.fI * kk : this.progress -= this.parameters.BI * kk, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.EI && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
+           this.isMoverInCatchZone() ? this.progress += this.parameters.Wg * SS : this.progress -= this.parameters.zg * SS, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.hg && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L184)

```diff
-               CI: this.parameters.CI,
+               Ag: this.parameters.Ag,
```

#### 23. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L199)

```diff
-           this.resolveRequest = Fk, this.tearDownNotification = Ik, this.startTime = void 0, this.speed = void 0, this.YI = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           this.resolveRequest = HS, this.tearDownNotification = gS, this.startTime = void 0, this.speed = void 0, this.sg = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
```

#### 24. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L203-L205)

```diff
-             speed: null !== (Xk = qk.speed) && void 0 !== Xk ? Xk : .5,
-             YI: ik.e.clamp(qk.YI, .05, 1),
-             label: null !== (Tk = qk.label) && void 0 !== Tk ? Tk : [{
+             speed: null !== (tS = uS.speed) && void 0 !== tS ? tS : .5,
+             sg: XS.b.clamp(uS.sg, .05, 1),
+             label: null !== (bS = uS.label) && void 0 !== bS ? bS : [{
```

#### 25. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L208-L211` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L208-L211) · [Before (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L208-L211)

```diff
-             icon: null !== (yk = qk.icon) && void 0 !== yk ? yk : null,
-             scale: null !== (lk = qk.scale) && void 0 !== lk ? lk : 1,
-             rotation: null !== (ak = qk.rotation) && void 0 !== ak ? ak : 0
-           }, this.speed = this.parameters.speed, this.YI = this.parameters.YI, this.startTime = Date.now()
+             icon: null !== (xS = uS.icon) && void 0 !== xS ? xS : null,
+             scale: null !== (NS = uS.scale) && void 0 !== NS ? NS : 1,
+             rotation: null !== (qS = uS.rotation) && void 0 !== qS ? qS : 0
+           }, this.speed = this.parameters.speed, this.sg = this.parameters.sg, this.startTime = Date.now()
```

#### 26. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L216)

```diff
-             const kk = Math.abs(this.markerPosition - .5) <= this.YI / 2;
+             const SS = Math.abs(this.markerPosition - .5) <= this.sg / 2;
```

#### 27. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L225)

```diff
-           this.markerPosition = kk <= .5 ? 2 * kk : 2 - 2 * kk
+           this.markerPosition = SS <= .5 ? 2 * SS : 2 - 2 * SS
```

#### 28. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L251-L252` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L251-L252) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L251-L252)

```diff
-           if (Fk <= this.parameters.hI && Fk >= -this.parameters.hI) {
-             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.gI) return void this.complete(!0)
+           if (HS <= this.parameters.Rg && HS >= -this.parameters.Rg) {
+             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.Mg) return void this.complete(!0)
```

#### 29. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L257)

```diff
-           this.misses++, this.lastClickResult = !1, !(0, yk.Q)(this.parameters.rI) && this.misses > this.parameters.rI ? this.complete(!1) : this.shrinkStartTime = Date.now()
+           this.misses++, this.lastClickResult = !1, !(0, xS.K)(this.parameters.Tg) && this.misses > this.parameters.Tg ? this.complete(!1) : this.shrinkStartTime = Date.now()
```

#### 30. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L261)

```diff
-           this.getOuterCircleProgress() < -this.parameters.hI && this.handleMiss()
+           this.getOuterCircleProgress() < -this.parameters.Rg && this.handleMiss()
```

#### 31. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L264)

```diff
-           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.mI
+           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Fg
```

#### 32. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L276)

```diff
-               gI: this.parameters.gI,
+               Mg: this.parameters.Mg,
```

#### 33. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L290)

```diff
-       (0, Lk.g)(lk.A.Qte, Hk ? lk.A.Qte : 0), Hk ? Tk.g.GL("qteStateUpdated", Hk.getState()) : Tk.g.GL("qteStateUpdated", {
+       (0, IS.i)(NS.A.Qte, GS ? NS.A.Qte : 0), GS ? bS.k.cj("qteStateUpdated", GS.getState()) : bS.k.cj("qteStateUpdated", {
```

#### 34. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L324)

```diff
-         if (Hk || ek.ye()) return void(ek.ye() && Hk && (Hk = null, xk()));
+         if (GS || KS.IK()) return void(KS.IK() && GS && (GS = null, nS()));
```

#### 35. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L357)

```diff
-   4792: (kk, Fk, Ik) => {
+   4911: (SS, HS, gS) => {
```

#### 36. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L361-L365` → after: `L362-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L362-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L362-L368) · [Before (L361-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L361-L365)

```diff
-       F: () => yk,
-       I: () => lk,
-       L: () => Sk,
-       c: () => zk,
-       g: () => Kk,
+       H: () => xS,
+       J: () => NS,
+       M: () => JS,
+       e: () => ZS,
+       f: () => QS,
+       i: () => ES,
+       j: () => vS,
```

#### 37. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L367-L369` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L370-L371) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L367-L369)

```diff
-       l: () => nk,
-       o: () => Jk,
-       s: () => sk,
+       n: () => wS,
+       r: () => PS,
```

#### 38. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L371-L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L373) · [Before (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L371-L373)

```diff
-       u: () => Qk,
-       y: () => vk,
-       z: () => Ek
+       w: () => OS
```

#### 39. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L375)

```diff
-     var Xk = Ik(4794);
+     var tS = gS(4917);
```

#### 40. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L384)

```diff
-       ik = null !== kk && void 0 !== kk ? kk : Tk
+       XS = null !== SS && void 0 !== SS ? SS : bS
```

#### 41. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L476)

```diff
-       const ik = (0, Xk.f)(Fk),
+       const XS = (0, tS.h)(HS),
```

#### 42. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L508)

```diff
-   4801: (kk, Fk, Ik) => {
+   4938: (SS, HS, gS) => {
```

#### 43. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L510-L512` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L510-L512) · [Before (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L510-L512)

```diff
-       c: () => ak,
-       f: () => ik,
-       g: () => lk
+       d: () => qS,
+       e: () => XS,
+       h: () => NS
```

#### 44. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L514-L515` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L514-L515) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L514-L515)

```diff
-     var Xk = Ik(2331),
-       Tk = Ik(4810);
+     var tS = gS(2510),
+       bS = gS(4947);
```

#### 45. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L522)

```diff
-       return "mid-fire" === Fk && 0 !== (Ik & Xk.e.AltLeftClick)
+       return "mid-fire" === HS && 0 !== (gS & tS.b.AltLeftClick)
```

#### 46. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L533)

```diff
-       const Fk = Tk.e[255 & kk];
+       const HS = bS.b[255 & SS];
```

#### 47. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L538)

```diff
-           down: 0 !== (Ik & Xk.e.Down),
+           down: 0 !== (gS & tS.b.Down),
```

#### 48. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L545)

```diff
-   4810: (kk, Fk, Ik) => {
+   4947: (SS, HS, gS) => {
```

#### 49. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L547` → after: `L547-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L547-L548) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L547)

```diff
-       e: () => Tk,
+       b: () => bS,
+       f: () => XS,
```

#### 50. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L549-L551` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L550-L551) · [Before (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L549-L551)

```diff
-       k: () => yk,
-       o: () => Xk,
-       s: () => lk
+       i: () => tS,
+       j: () => NS
```

#### 51. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L823)

```diff
-   4814: (kk, Fk, Ik) => {
+   4954: (SS, HS, gS) => {
```

#### 52. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L826-L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L827) · [Before (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L826-L827)

```diff
-       f: () => yk,
-       g: () => qk
+       i: () => uS
```

#### 53. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L829-L830)

```diff
-     var Xk = Ik(2331),
-       Tk = Ik(2338);
+     var tS = gS(2510),
+       bS = gS(2517);
```

#### 54. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L841` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L841) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L841)

```diff
-           Tk !== Fk && (Fk = Tk, kk(Xk.m.UiCapture, Xk.A.Keyboard, 0, 0, Tk ? Xk.A.Keyboard : 0))
+           bS !== HS && (HS = bS, SS(tS.g.UiCapture, tS.A.Keyboard, 0, 0, bS ? tS.A.Keyboard : 0))
```

#### 55. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L865)

```diff
-       ak.set(Xk, (null !== (Ik = ak.get(Xk)) && void 0 !== Ik ? Ik : 0) & ~kk | Fk & kk);
+       qS.set(tS, (null !== (gS = qS.get(tS)) && void 0 !== gS ? gS : 0) & ~SS | HS & SS);
```

#### 56. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/86.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/86.js#L868)

```diff
-       return (0, Tk.x)(kk, ik & kk)
+       return (0, bS.D)(SS, XS & SS)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/87.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/87.js` (81 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e)

#### 1. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L4)

```diff
-   40891: (kk, Fk, Ik) => {
+   40911: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L6)

```diff
-       C: () => uk,
+       B: () => lS,
+       D: () => VS,
+       F: () => vS,
```

#### 3. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L8-L9` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L10) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L8-L9)

```diff
-       H: () => Uk,
-       I: () => nk,
+       K: () => cS,
```

#### 4. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L11-L16` → after: `L12-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L12-L15) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L11-L16)

```diff
-       Q: () => Ok,
-       U: () => Yk,
-       X: () => dk,
-       _: () => pk,
-       d: () => Ak,
-       e: () => Nk,
+       N: () => BS,
+       O: () => LS,
+       c: () => FS,
+       g: () => WS,
```

#### 5. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L18` → after: `L17-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L17-L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L18)

```diff
-       l: () => gk,
+       j: () => RS,
+       m: () => dS,
```

#### 6. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L20-L23` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L20-L23) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L20-L23)

```diff
-       p: () => Sk,
-       t: () => Ck,
-       x: () => Gk,
-       z: () => bk
+       q: () => iS,
+       s: () => ES,
+       w: () => AS,
+       x: () => YS
```

#### 7. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L25-L30` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L25-L30) · [Before (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L25-L30)

```diff
-     var Xk = Ik(1364),
-       Tk = Ik(34),
-       ik = Ik(1270),
-       yk = Ik(2331),
-       lk = Ik(4814),
-       ak = Ik(4792);
+     var tS = gS(1471),
+       bS = gS(31),
+       XS = gS(1366),
+       xS = gS(2510),
+       NS = gS(4954),
+       qS = gS(4911);
```

#### 8. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L60)

```diff
-       return (0, ik.n)() && !sk
+       return (0, XS.v)() && !wS
```

#### 9. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L79)

```diff
-       (0, lk.g)(yk.A.Menu, (0, ik.n)() ? 0 : yk.A.Menu)
+       (0, NS.i)(xS.A.Menu, (0, XS.v)() ? 0 : xS.A.Menu)
```

#### 10. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L105)

```diff
-       return (!tk || performance.now() - Hk > wk) && (tk = (0, ak.I)().lockPointer(), Hk = performance.now()), tk
+       return (!fS || performance.now() - GS > jS) && (fS = (0, qS.J)().lockPointer(), GS = performance.now()), fS
```

#### 11. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L113)

```diff
-       return Ok() && !Lk && !Jk && !(0, Xk.f)()
+       return cS() && !IS && !CS && !(0, tS.h)()
```

#### 12. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L130)

```diff
-       xk ? navigator.vendor.startsWith("Apple") ? mk() : Pk = Kk : dk()
+       nS ? navigator.vendor.startsWith("Apple") ? TS() : PS = QS : BS()
```

#### 13. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L146)

```diff
-       Qk = !0, (0, ak.I)().unlockPointer()
+       DS = !0, (0, qS.J)().unlockPointer()
```

#### 14. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L157)

```diff
-       Tk.g.GL("pointerLockUpdate", Lk)
+       bS.k.cj("pointerLockUpdate", IS)
```

#### 15. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L160)

```diff
-   40685: (kk, Fk, Ik) => {
+   40707: (SS, HS, gS) => {
```

#### 16. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L162-L163` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L162) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L162-L163)

```diff
-       c: () => Zk,
-       f: () => lk,
+       e: () => kS,
```

#### 17. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L165-L168` → after: `L164-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L164-L168) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L165-L168)

```diff
-       j: () => qk,
-       n: () => yk,
-       q: () => Lk,
-       r: () => ak
+       i: () => fS,
+       l: () => uS,
+       p: () => xS,
+       r: () => IS,
+       v: () => qS
```

#### 18. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L203)

```diff
-   4792: (kk, Fk, Ik) => {
+   4911: (SS, HS, gS) => {
```

#### 19. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L207-L211` → after: `L208-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L208-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L208-L214) · [Before (L207-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L207-L211)

```diff
-       F: () => yk,
-       I: () => lk,
-       L: () => Sk,
-       c: () => zk,
-       g: () => Kk,
+       H: () => xS,
+       J: () => NS,
+       M: () => JS,
+       e: () => ZS,
+       f: () => QS,
+       i: () => ES,
+       j: () => vS,
```

#### 20. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L213-L215` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L216-L217) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L213-L215)

```diff
-       l: () => nk,
-       o: () => Jk,
-       s: () => sk,
+       n: () => wS,
+       r: () => PS,
```

#### 21. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L217-L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L219) · [Before (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L217-L219)

```diff
-       u: () => Qk,
-       y: () => vk,
-       z: () => Ek
+       w: () => OS
```

#### 22. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L221)

```diff
-     var Xk = Ik(4794);
+     var tS = gS(4917);
```

#### 23. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L230)

```diff
-       ik = null !== kk && void 0 !== kk ? kk : Tk
+       XS = null !== SS && void 0 !== SS ? SS : bS
```

#### 24. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L322)

```diff
-       const ik = (0, Xk.f)(Fk),
+       const XS = (0, tS.h)(HS),
```

#### 25. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L354)

```diff
-   40900: (kk, Fk, Ik) => {
+   40917: (SS, HS, gS) => {
```

#### 26. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L356)

```diff
-       d: () => Xk
+       e: () => tS
```

#### 27. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L369)

```diff
-   4801: (kk, Fk, Ik) => {
+   4938: (SS, HS, gS) => {
```

#### 28. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L371-L373` → after: `L371-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L371-L373) · [Before (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L371-L373)

```diff
-       c: () => ak,
-       f: () => ik,
-       g: () => lk
+       d: () => qS,
+       e: () => XS,
+       h: () => NS
```

#### 29. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L375-L376` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L375-L376) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L375-L376)

```diff
-     var Xk = Ik(2331),
-       Tk = Ik(4810);
+     var tS = gS(2510),
+       bS = gS(4947);
```

#### 30. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L383)

```diff
-       return "mid-fire" === Fk && 0 !== (Ik & Xk.e.AltLeftClick)
+       return "mid-fire" === HS && 0 !== (gS & tS.b.AltLeftClick)
```

#### 31. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L394)

```diff
-       const Fk = Tk.e[255 & kk];
+       const HS = bS.b[255 & SS];
```

#### 32. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L399)

```diff
-           down: 0 !== (Ik & Xk.e.Down),
+           down: 0 !== (gS & tS.b.Down),
```

#### 33. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L406)

```diff
-   4810: (kk, Fk, Ik) => {
+   4947: (SS, HS, gS) => {
```

#### 34. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L408` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L408-L409) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L408)

```diff
-       e: () => Tk,
+       b: () => bS,
+       f: () => XS,
```

#### 35. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L410-L412` → after: `L411-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L411-L412) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L410-L412)

```diff
-       k: () => yk,
-       o: () => Xk,
-       s: () => lk
+       i: () => tS,
+       j: () => NS
```

#### 36. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L684)

```diff
-   40930: (kk, Fk, Ik) => {
+   40938: (SS, HS, gS) => {
```

#### 37. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L690-L692` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L690-L692) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L690-L692)

```diff
-     var Xk = Ik(4799),
-       Tk = Ik(2331),
-       ik = Ik(4814);
+     var tS = gS(4935),
+       bS = gS(2510),
+       XS = gS(4954);
```

#### 38. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L708-L713` → after: `L708-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L708-L713) · [Before (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L708-L713)

```diff
-         case Xk.I.MouseDown:
-         case Xk.I.MouseUp:
-         case Xk.I.TouchStart:
-         case Xk.I.TouchEnd:
-         case Xk.I.TouchCancel:
-         case Xk.I.TouchButton:
+         case tS.K.MouseDown:
+         case tS.K.MouseUp:
+         case tS.K.TouchStart:
+         case tS.K.TouchEnd:
+         case tS.K.TouchCancel:
+         case tS.K.TouchButton:
```

#### 39. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L715-L717` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L715-L717) · [Before (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L715-L717)

```diff
-         case Xk.I.KeyDown:
-         case Xk.I.KeyUp:
-           return 0 === (Fk & Tk.i.Repeat) && !(0, ik.f)(document.activeElement);
+         case tS.K.KeyDown:
+         case tS.K.KeyUp:
+           return 0 === (HS & bS.c.Repeat) && !(0, XS.e)(document.activeElement);
```

#### 40. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L729)

```diff
-   4814: (kk, Fk, Ik) => {
+   4954: (SS, HS, gS) => {
```

#### 41. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L732-L733` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L733) · [Before (L732-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L732-L733)

```diff
-       f: () => yk,
-       g: () => qk
+       i: () => uS
```

#### 42. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L735-L736` → after: `L735-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L735-L736) · [Before (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L735-L736)

```diff
-     var Xk = Ik(2331),
-       Tk = Ik(2338);
+     var tS = gS(2510),
+       bS = gS(2517);
```

#### 43. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L747)

```diff
-           Tk !== Fk && (Fk = Tk, kk(Xk.m.UiCapture, Xk.A.Keyboard, 0, 0, Tk ? Xk.A.Keyboard : 0))
+           bS !== HS && (HS = bS, SS(tS.g.UiCapture, tS.A.Keyboard, 0, 0, bS ? tS.A.Keyboard : 0))
```

#### 44. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L771)

```diff
-       ak.set(Xk, (null !== (Ik = ak.get(Xk)) && void 0 !== Ik ? Ik : 0) & ~kk | Fk & kk);
+       qS.set(tS, (null !== (gS = qS.get(tS)) && void 0 !== gS ? gS : 0) & ~SS | HS & SS);
```

#### 45. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L774)

```diff
-       return (0, Tk.x)(kk, ik & kk)
+       return (0, bS.D)(SS, XS & SS)
```

#### 46. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L777)

```diff
-   40963: (kk, Fk, Ik) => {
+   40977: (SS, HS, gS) => {
```

#### 47. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L780-L782` → after: `L781-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L781-L782) · [Before (L780-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L780-L782)

```diff
-       e: () => ak,
-       i: () => lk,
-       m: () => qk
+       d: () => NS,
+       h: () => uS
```

#### 48. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L784)

```diff
-     var Xk = Ik(1886);
+     var tS = gS(2073);
```

#### 49. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L806)

```diff
-   41003: (kk, Fk, Ik) => {
+   41017: (SS, HS, gS) => {
```

#### 50. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L808` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L808) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L808)

```diff
-       c: () => Xk
+       d: () => tS
```

#### 51. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L812)

```diff
-   40896: (kk, Fk, Ik) => {
+   40914: (SS, HS, gS) => {
```

#### 52. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L814-L815` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L814) · [Before (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L814-L815)

```diff
-       c: () => sk,
-       d: () => Zk,
+       b: () => wS,
```

#### 53. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L817-L819` → after: `L816-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L816-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L816-L819) · [Before (L817-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L817-L819)

```diff
-       f: () => Qk,
-       i: () => Kk,
-       l: () => Vk
+       g: () => PS,
+       k: () => DS,
+       o: () => QS,
+       q: () => hS
```

#### 54. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L821-L829` → after: `L821-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L821-L829) · [Before (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L821-L829)

```diff
-     var Xk = Ik(165),
-       Tk = Ik(25),
-       ik = Ik(34),
-       yk = Ik(2830),
-       lk = Ik(1276),
-       ak = Ik(34095),
-       qk = Ik(293),
-       Lk = Ik(95),
-       tk = Ik(161);
+     var tS = gS(179),
+       bS = gS(24),
+       XS = gS(31),
+       xS = gS(3058),
+       NS = gS(1378),
+       qS = gS(34166),
+       uS = gS(330),
+       IS = gS(104),
+       fS = gS(172);
```

#### 55. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L833)

```diff
-       const Fk = (0, yk.L)(),
+       const HS = (0, xS.H)(),
```

#### 56. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L837-L838` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L837-L838) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L837-L838)

```diff
-             n: (0, yk.B)(kk.pixelScale, Fk),
-             pixelated: (0, yk.x)(kk.pixelSmoothing)
+             n: (0, xS.y)(SS.pixelScale, HS),
+             pixelated: (0, xS.w)(SS.pixelSmoothing)
```

#### 57. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L840-L841` → after: `L840-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L840-L841) · [Before (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L840-L841)

```diff
-         }(Tk.d.get("clientEscMenuOptions"), Fk);
-       return Ik.sampleCount > 1 && (0, ak.e)() && (Ik.sampleCount = 1), Ik.n = null !== (kk = (0, ak.m)()) && void 0 !== kk ? kk : Ik.n, Xk.h.includes((0, Lk.getSoftwareRenderer)()) && (Ik.sampleCount = 1, Ik.n = Math.max(Ik.n, (0, yk.B)(tk.q.pixelScale, Fk))), Ik
+         }(bS.b.get("clientEscMenuOptions"), HS);
+       return gS.sampleCount > 1 && (0, qS.b)() && (gS.sampleCount = 1), gS.n = null !== (SS = (0, qS.l)()) && void 0 !== SS ? SS : gS.n, tS.i.includes((0, IS.getSoftwareRenderer)()) && (gS.sampleCount = 1, gS.n = Math.max(gS.n, (0, xS.y)(fS.q.pixelScale, HS))), gS
```

#### 58. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L855)

```diff
-         kk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", kk.setAttribute("aria-hidden", "true"), document.body.append(kk), ek = kk, jk = new yk.e(kk, Jk)
+         SS.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", SS.setAttribute("aria-hidden", "true"), document.body.append(SS), KS = SS, aS = new xS.b(SS, CS)
```

#### 59. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L861)

```diff
-       const Fk = (0, yk.m)(),
+       const HS = (0, xS.l)(),
```

#### 60. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L863)

```diff
-       return (0, yk.h)(Ik, Xk, Fk, kk.n)
+       return (0, xS.g)(gS, tS, HS, SS.n)
```

#### 61. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L868)

```diff
-       const ik = (0, yk.m)(),
+       const XS = (0, xS.l)(),
```

#### 62. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L871-L872` → after: `L871-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L871-L872) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L871-L872)

```diff
-       const Lk = (0, yk.h)(ak, qk, ik, Zk().n);
-       return (0, yk.f)(kk, Lk), kk.style.left = `${null!==(Fk=null===(Ik=Hk)||void 0===Ik?void 0:Ik.rect.left)&&void 0!==Fk?Fk:0}px`, kk.style.top = `${null!==(Xk=null===(Tk=Hk)||void 0===Tk?void 0:Tk.rect.top)&&void 0!==Xk?Xk:0}px`, (0, lk.P)(kk.style, Hk), Lk
+       const IS = (0, xS.g)(qS, uS, XS, kS().n);
+       return (0, xS.d)(SS, IS), SS.style.left = `${null!==(HS=null===(gS=GS)||void 0===gS?void 0:gS.rect.left)&&void 0!==HS?HS:0}px`, SS.style.top = `${null!==(tS=null===(bS=GS)||void 0===bS?void 0:bS.rect.top)&&void 0!==tS?tS:0}px`, (0, NS.T)(SS.style, GS), IS
```

#### 63. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L876)

```diff
-       Hk = kk, xk(), (0, lk.M)(ek.style, kk, ""), Jk()
+       GS = SS, nS(), (0, NS.I)(KS.style, SS, ""), CS()
```

#### 64. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L880)

```diff
-       kk.style.imageRendering = (0, yk.N)(Fk.pixelated)
+       SS.style.imageRendering = (0, xS.J)(HS.pixelated)
```

#### 65. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L884)

```diff
-       const Ik = (0, ik.i)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const gS = (0, XS.m)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 66. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L887-L888` → after: `L887-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L887-L888) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L887-L888)

```diff
-         Xk = (0, ak.v)(Fk),
-         Tk = (0, qk.n)(Fk);
+         tS = (0, qS.u)(HS),
+         bS = (0, uS.k)(HS);
```

#### 67. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L894)

```diff
-   41009: (kk, Fk, Ik) => {
+   41025: (SS, HS, gS) => {
```

#### 68. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L896-L897` → after: `L896-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L896-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L896-L897) · [Before (L896-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L896-L897)

```diff
-       d: () => yk,
-       g: () => ik,
+       c: () => xS,
+       e: () => XS,
```

#### 69. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L915)

```diff
-   40957: (kk, Fk, Ik) => {
+   40972: (SS, HS, gS) => {
```

#### 70. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L917-L919` → after: `L917-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L917-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L917-L918) · [Before (L917-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L917-L919)

```diff
-       e: () => Tk,
-       f: () => qk,
-       i: () => ik,
+       d: () => bS,
+       h: () => uS,
```

#### 71. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L921-L922` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L920-L922) · [Before (L921-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L921-L922)

```diff
-       o: () => Lk,
-       p: () => Zk
+       p: () => fS,
+       s: () => IS,
+       w: () => kS
```

#### 72. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L924)

```diff
-     var Xk = Ik(2803);
+     var tS = gS(3030);
```

#### 73. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L927` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L927) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L927)

```diff
-         super(`${"fetch"===kk?"fetching":"decoding"} ${Fk} failed`, Ik), this.stage = kk, this.source = Fk, this.name = "ShellImageError"
+         super(`${"fetch"===SS?"fetching":"decoding"} ${HS} failed`, gS), this.stage = SS, this.source = HS, this.name = "ShellImageError"
```

#### 74. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L931)

```diff
-       let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.K,
+       let HS, gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.J,
```

#### 75. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L950)

```diff
-         throw new Tk("decode", "string" === typeof kk ? kk : `${Fk.byteLength} bytes`, {
+         throw new bS("decode", "string" === typeof SS ? SS : `${HS.byteLength} bytes`, {
```

#### 76. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L961)

```diff
-         for (const [Fk, Ik] of lk) kk.gIk(Fk, Ik);
+         for (const [HS, gS] of NS) SS.WgS(HS, gS);
```

#### 77. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L968)

```diff
-       return yk ? yk.gIk(Fk, kk) : lk.set(Fk, kk), Fk
+       return xS ? xS.WgS(HS, SS) : NS.set(HS, SS), HS
```

#### 78. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L983)

```diff
-       null === (Fk = yk) || void 0 === Fk || Fk.mIk(kk)
+       null === (HS = xS) || void 0 === HS || HS.zgS(SS)
```

#### 79. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L986)

```diff
-   40905: (kk, Fk, Ik) => {
+   40924: (SS, HS, gS) => {
```

#### 80. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L995)

```diff
-   40914: (kk, Fk, Ik) => {
+   40928: (SS, HS, gS) => {
```

#### 81. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/87.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/87.js#L997)

```diff
-       c: () => Tk
+       d: () => bS
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (31kiid.1299b0d6 → fqwnlq.985c8f39)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 1. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L4)

```diff
-   40542: (kk, Fk, Ik) => {
+   40566: (SS, HS, gS) => {
```

#### 2. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8-L23` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L8-L23) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L8-L23)

```diff
-     Ik(40546);
-     var Xk = Ik(40554),
-       Tk = Ik(40570),
-       ik = Ik(1894),
-       yk = Ik(40583),
-       lk = Ik(4799),
-       ak = Ik(4792),
-       qk = Ik(40592),
-       Lk = Ik(40596),
-       tk = Ik(4810),
-       Zk = Ik(40670),
-       jk = Ik(2338),
-       ek = Ik(8833),
-       wk = Ik(40560),
-       Hk = Ik(8814),
-       Jk = Ik(39109);
+     gS(40573);
+     var tS = gS(40581),
+       bS = gS(40599),
+       XS = gS(2083),
+       xS = gS(40612),
+       NS = gS(4935),
+       qS = gS(4911),
+       uS = gS(40616),
+       IS = gS(40625),
+       fS = gS(4947),
+       kS = gS(40692),
+       aS = gS(2517),
+       KS = gS(9048),
+       jS = gS(40589),
+       GS = gS(9025),
+       CS = gS(39127);
```

#### 3. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25-L26` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L25-L26) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L25-L26)

```diff
-         const Fk = tk.e.indexOf(kk);
-         if (Fk < 0) throw new Error(`No core action "${kk}"`);
+         const HS = fS.b.indexOf(SS);
+         if (HS < 0) throw new Error(`No core action "${SS}"`);
```

#### 4. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L41)

```diff
-         (0, jk.o)(lk.I.PadAction, kk, 0, 0, (0, jk.l)(Fk, performance.now()))
+         (0, aS.v)(NS.K.PadAction, SS, 0, 0, (0, aS.r)(HS, performance.now()))
```

#### 5. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L44)

```diff
-         Ek(kk, yk.td.Down)
+         dS(SS, xS.md.Down)
```

#### 6. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L53-L57` → after: `L53-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L53-L57) · [Before (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L53-L57)

```diff
-         const kk = (0, Lk.k)();
-         return null !== kk && void 0 !== kk && kk.isCoreRunning ? kk : null
-       },
-       uk = kk => yk.y.playerFlags(kk.api.apiView, 0),
-       bk = kk => null !== kk && yk.y.targetBlockId(kk.api.apiView, 0) !== yk._c,
+         const SS = (0, IS.h)();
+         return null !== SS && void 0 !== SS && SS.isCoreRunning ? SS : null
+       },
+       YS = SS => xS.t.playerFlags(SS.api.apiView, 0),
+       AS = SS => null !== SS && xS.t.targetBlockId(SS.api.apiView, 0) !== xS.Tc,
```

#### 7. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L59)

```diff
-         const kk = (0, ek.c)(),
+         const SS = (0, KS.d)(),
```

#### 8. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L63)

```diff
-             (0, jk.o)(lk.I.PadLook, yk.Ad.Rate, kk, Fk, 0)
+             (0, aS.v)(NS.K.PadLook, xS.sd.Rate, SS, HS, 0)
```

#### 9. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L71)

```diff
-             const qk = (0, wk.s)(Fk, Tk, ik, ak, performance.now());
+             const uS = (0, jS.p)(HS, bS, XS, qS, performance.now());
```

#### 10. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L74)

```diff
-             0 === Lk.JG && 0 === Lk.xG || (0, jk.o)(lk.I.PadLook, yk.Ad.Gyro, Lk.JG, Lk.xG, 0)
+             0 === IS.tL && 0 === IS.qL || (0, aS.v)(NS.K.PadLook, xS.sd.Gyro, IS.tL, IS.qL, 0)
```

#### 11. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L82)

```diff
-         return null !== kk && 0 !== (uk(kk) & yk.Ed.PadSneakToggled)
+         return null !== SS && 0 !== (YS(SS) & xS.zd.PadSneakToggled)
```

#### 12. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L111)

```diff
-               Ek(yk.vd.Drop, yk.td.Down | (kk ? yk.td.Stack : 0))
+               dS(xS.od.Drop, xS.md.Down | (SS ? xS.md.Stack : 0))
```

#### 13. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L136)

```diff
-                 bits: yk.xd.Peek,
+                 bits: xS.pd.Peek,
```

#### 14. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L139)

```diff
-               const Fk = kk.sneakHeld ? yk.xd.SneakHeld : 0;
+               const HS = SS.sneakHeld ? xS.pd.SneakHeld : 0;
```

#### 15. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L141)

```diff
-                 bits: Fk | yk.xd.SneakHoldMode,
+                 bits: HS | xS.pd.SneakHoldMode,
```

#### 16. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L148)

```diff
-             null !== (Tk = pk()) && void 0 !== Tk && Tk.padMove(kk.x, kk.y, kk.magnitude, kk.headingOffset, (kk => yk.xd.Active | (kk.jumpHeld ? yk.xd.JumpHeld : 0) | (kk.jumpPressed ? yk.xd.JumpPressed : 0) | (kk.running ? yk.xd.Running : 0) | (kk.sprintHeld ? yk.xd.SprintHeld : … [truncated]
+             null !== (bS = LS()) && void 0 !== bS && bS.padMove(SS.x, SS.y, SS.magnitude, SS.headingOffset, (SS => xS.pd.Active | (SS.jumpHeld ? xS.pd.JumpHeld : 0) | (SS.jumpPressed ? xS.pd.JumpPressed : 0) | (SS.running ? xS.pd.Running : 0) | (SS.sprintHeld ? xS.pd.SprintHeld : … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L152-L153` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L152-L153) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L152-L153)

```diff
-             Fk && (Fk = !(null !== (kk = pk()) && void 0 !== kk && kk.padMove(0, 0, 0, 0, 0, 0)), Xk(), Ik = (0, ak.y)((() => {
-               Xk(), (0, Hk.g)(Uk())
+             HS && (HS = !(null !== (SS = LS()) && void 0 !== SS && SS.padMove(0, 0, 0, 0, 0, 0)), tS(), gS = (0, qS.w)((() => {
+               tS(), (0, GS.f)(VS())
```

#### 18. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L159)

```diff
-             "touch" === kk ? ((0, Hk.g)(!1), null !== (Ik = pk()) && void 0 !== Ik && Ik.padMove(0, 0, 0, 0, yk.xd.EndToggle, 0) && (Fk = !1)) : "gamepad" === kk && (0, Hk.g)(Uk())
+             "touch" === SS ? ((0, GS.f)(!1), null !== (gS = LS()) && void 0 !== gS && gS.padMove(0, 0, 0, 0, xS.pd.EndToggle, 0) && (HS = !1)) : "gamepad" === SS && (0, GS.f)(VS())
```

#### 19. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L168)

```diff
-             return null !== kk && 0 !== (uk(kk) & yk.Ed.Replay)
+             return null !== SS && 0 !== (YS(SS) & xS.zd.Replay)
```

#### 20. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L172)

```diff
-             return null !== kk && 0 !== (uk(kk) & yk.Ed.FreeCam)
+             return null !== SS && 0 !== (YS(SS) & xS.zd.FreeCam)
```

#### 21. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L177-L179` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L177-L179) · [Before (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L177-L179)

```diff
-             return !(null !== (kk = pk()) && void 0 !== kk && kk.items.eq())
-           },
-           pickBlockAllowed: () => !!ik.e.get("creative") && !!ik.e.get("canPickBlocks"),
+             return !(null !== (SS = LS()) && void 0 !== SS && SS.items.Ku())
+           },
+           pickBlockAllowed: () => !!XS.d.get("creative") && !!XS.d.get("canPickBlocks"),
```

#### 22. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L181-L186` → after: `L181-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L181-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L181-L186) · [Before (L181-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L181-L186)

```diff
-             Ek(yk.vd.Hotbar, yk.td.Down | (kk > 0 ? yk.td.Next : 0))
-           },
-           hasFullInventory: qk.n,
-           hasLobbyTab: () => (0, Jk.b)({
-             lobbyLeaderboardInfo: ik.e.get("lobbyLeaderboardInfo"),
-             lobbyManage: ik.e.get("lobbyManage")
+             dS(xS.od.Hotbar, xS.md.Down | (SS > 0 ? xS.md.Next : 0))
+           },
+           hasFullInventory: uS.o,
+           hasLobbyTab: () => (0, CS.e)({
+             lobbyLeaderboardInfo: XS.d.get("lobbyLeaderboardInfo"),
+             lobbyManage: XS.d.get("lobbyManage")
```

#### 23. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L192-L194` → after: `L192-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L192-L194) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L192-L194)

```diff
-               holdingGun: !1 !== (null === Tk || void 0 === Tk ? void 0 : Tk.localPlayerAlive()) && "Gun" === (null === Tk || void 0 === Tk || null === (kk = Tk.items.eq()) || void 0 === kk || null === (Fk = kk.typeObj) || void 0 === Fk ? void 0 : Fk.type),
-               customButtons: null !== (Ik = ik.e.get("customButtons")) && void 0 !== Ik ? Ik : null,
-               touchscreenActionButton: null !== (Xk = ik.e.get("touchscreenActionButton")) && void 0 !== Xk ? Xk : null
+               holdingGun: !1 !== (null === bS || void 0 === bS ? void 0 : bS.localPlayerAlive()) && "Gun" === (null === bS || void 0 === bS || null === (SS = bS.items.Ku()) || void 0 === SS || null === (HS = SS.typeObj) || void 0 === HS ? void 0 : HS.type),
+               customButtons: null !== (gS = XS.d.get("customButtons")) && void 0 !== gS ? gS : null,
+               touchscreenActionButton: null !== (tS = XS.d.get("touchscreenActionButton")) && void 0 !== tS ? tS : null
```

#### 24. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L204)

```diff
-           Fk = (0, Xk.c)(),
+           HS = (0, tS.d)(),
```

#### 25. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/88.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/88.js#L211)

```diff
-   4792: (kk, Fk, Ik) => {
+   4911: (SS, HS, gS) => {
```
