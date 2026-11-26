# Changed — Bundle Modifications Report (Part 010 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `10 / 146` (**401** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (3919 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 2426. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23204-L23218` → after: `L23021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23021) · [Before (L23204-L23218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23204-L23218)

```diff
-     }()), UM(111) in CM && function(...MM) {
-       var rM;
-       eM(MM[EM[13]] = EM[1], rM = function(...MM) {
-         eM(MM[EM[13]] = EM[2], this.vL = MM[EM[1]], this.length = EM[1], this.map = {}, this.head = EM[28], this.tail = EM[28])
-       }, rM.prototype.get = function(...MM) {
-         var rM;
-         return eM(MM[EM[13]] = EM[2], rM = this.map[MM[EM[1]]]), rM ? (this.remove(rM), this.insert(rM.key, rM.val), rM.val) : -EM[2]
-       }, rM.prototype.put = function(MM, rM) {
-         this.map[MM] ? (this.remove(this.map[MM]), this.insert(MM, rM)) : this.length === this.vL ? (this.remove(this.head), this.insert(MM, rM)) : (this.insert(MM, rM), this.length++)
-       }, rM.prototype.remove = function(...MM) {
-         eM(MM[EM[13]] = EM[2], MM[EM[2]] = MM[EM[1]].prev, MM[EM[29]] = MM[EM[1]].next), MM[EM[29]] && (MM[EM[29]].prev = MM[EM[2]]), MM[EM[2]] && (MM[EM[2]].next = MM[EM[29]]), this.head === MM[EM[1]] && (this.head = MM[EM[29]]), this.tail === MM[EM[1]] && (this.tail = MM[EM[2]] … [truncated]
-       }, rM.prototype.insert = function(...MM) {
-         eM(MM[EM[13]] = EM[29], MM[EM[29]] = new List(MM[EM[1]], MM[EM[2]]), this.tail ? (this.tail.next = MM[EM[29]], MM[EM[29]].prev = this.tail, this.tail = MM[EM[29]]) : (this.tail = MM[EM[29]], this.head = MM[EM[29]]), this.map[MM[EM[1]]] = MM[EM[29]])
-       }, console.log(rM))
-     }(), (() => {
+     }()), (() => {
```

#### 2427. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23220-L23223` → after: `L23023-L23026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23023-L23026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23023-L23026) · [Before (L23220-L23223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23220-L23223)

```diff
-         return MM[EM[13]] = EM[2], typeof OM[MM[EM[1]]] === EM[19] ? OM[MM[EM[1]]] = function(...MM) {
-           for (eM(MM[EM[13]] = EM[2], MM[EM[35]] = 'MbN0elqOCiY:;6U$gP5QA_w`K]f+RDGs(hopL~8uV%k=^}/r1cX4Bj|*.H[<&a>I,@)Sn!J9EZty?FTx{7mv3zdW#2"', MM[EM[29]] = "" + (MM[EM[1]] || ""), MM[-EM[34]] = MM[EM[29]].length, MM[EM[10]] = [], MM[EM[38]] = EM[1], MM[EM[39]] = EM[1], MM[-EM[ … [truncated]
-             if (MM[EM[36]] = MM[EM[35]].indexOf(MM[EM[29]][MM[EM[11]]]), MM[EM[36]] !== -EM[2])
-               if (MM[-EM[37]] < EM[1]) MM[-EM[37]] = MM[EM[36]];
+         return VV[qV[4]] = qV[1], typeof JV[VV[qV[0]]] === qV[5] ? JV[VV[qV[0]]] = function(...VV) {
+           for (TV(VV[qV[4]] = qV[1], VV[qV[1]] = 'O4FRA+BpWVy*$XMJDs91)^dk{_~voNt,.jKHxES3mU"r2=abw6]Qlqigu7|c`(8fYIZ?;:eCP&z<hTL@n[%>!05/#}G', VV[qV[19]] = "" + (VV[qV[0]] || ""), VV[qV[18]] = VV[qV[19]].length, VV[qV[8]] = [], VV[qV[24]] = qV[0], VV[qV[25]] = qV[0], VV[qV[22]]  … [truncated]
+             if (VV[-qV[21]] = VV[qV[1]].indexOf(VV[qV[19]][VV[qV[20]]]), VV[-qV[21]] !== -qV[1])
+               if (VV[qV[22]] < qV[0]) VV[qV[22]] = VV[-qV[21]];
```

#### 2428. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23225` → after: `L23028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23028) · [Before (L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23225)

```diff
-                 eM(MM[-EM[37]] += MM[EM[36]] * EM[5], MM[EM[38]] |= MM[-EM[37]] << MM[EM[39]], MM[EM[39]] += (MM[-EM[37]] & EM[40]) > EM[41] ? EM[42] : EM[43]);
+                 TV(VV[qV[22]] += VV[-qV[21]] * qV[23], VV[qV[24]] |= VV[qV[22]] << VV[qV[25]], VV[qV[25]] += (VV[qV[22]] & qV[26]) > qV[27] ? qV[28] : qV[29]);
```

#### 2429. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23227-L23246` → after: `L23030-L23087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23030-L23087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23030-L23087) · [Before (L23227-L23246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23227-L23246)

```diff
-                   eM(MM[EM[10]].push(MM[EM[38]] & EM[12]), MM[EM[38]] >>= EM[11], MM[EM[39]] -= EM[11])
-                 } while (MM[EM[39]] > EM[24]);
-                 MM[-EM[37]] = -EM[2]
-               } return MM[-EM[37]] > -EM[2] && MM[EM[10]].push((MM[EM[38]] | MM[-EM[37]] << MM[EM[39]]) & EM[12]), GM(MM[EM[10]])
-         }(SM[MM[EM[1]]]) : OM[MM[EM[1]]]
-       }
-       MM(113) in CM && function(...MM) {
-         var rM;
-         eM(MM[EM[13]] = EM[1], rM = function(MM) {
-           eM(this.vL = MM, this.length = EM[1], this.map = {}, this.head = EM[28], this.tail = EM[28])
-         }, rM.prototype.get = function(...MM) {
-           var rM;
-           return eM(MM[EM[13]] = EM[2], rM = this.map[MM[EM[1]]]), rM ? (this.remove(rM), this.insert(rM.key, rM.val), rM.val) : -EM[2]
-         }, rM.prototype.put = function(...MM) {
-           eM(MM[EM[13]] = EM[29], this.map[MM[EM[1]]] ? (this.remove(this.map[MM[EM[1]]]), this.insert(MM[EM[1]], MM[EM[2]])) : this.length === this.vL ? (this.remove(this.head), this.insert(MM[EM[1]], MM[EM[2]])) : (this.insert(MM[EM[1]], MM[EM[2]]), this.length++))
-         }, rM.prototype.remove = function(...MM) {
- ... (4 more removed lines; see GitHub link above)
+                   TV(VV[qV[8]].push(VV[qV[24]] & qV[3]), VV[qV[24]] >>= qV[2], VV[qV[25]] -= qV[2])
+                 } while (VV[qV[25]] > qV[13]);
+                 VV[qV[22]] = -qV[1]
+               } return VV[qV[22]] > -qV[1] && VV[qV[8]].push((VV[qV[24]] | VV[qV[22]] << VV[qV[25]]) & qV[3]), tV(VV[qV[8]])
+         }(YV[VV[qV[0]]]) : JV[VV[qV[0]]]
+       } [][qV[4]] = qV[0], VV(87) in FV && function() {
+         function VV(...VV) {
+           for (TV(VV[qV[4]] = qV[1], VV[-qV[32]] = 'yu~_23@`.[9&!gvO5?GF=KQPUmhDRoIVWjYJc:,7ZsN6+z<LEib#A8*1;t]%(}"T|kw>xBfCH0SaM^eqX/){nrp$ld4', VV[qV[19]] = "" + (VV[qV[0]] || ""), VV[qV[31]] = VV[qV[19]].length, VV[qV[37]] = [], VV[qV[35]] = qV[0], VV[-qV[36]] = qV[0], VV[-qV[ … [truncated]
+             if (VV[qV[33]] = VV[-qV[32]].indexOf(VV[qV[19]][VV[qV[30]]]), VV[qV[33]] !== -qV[1])
+               if (VV[-qV[34]] < qV[0]) VV[-qV[34]] = VV[qV[33]];
+               else {
+                 TV(VV[-qV[34]] += VV[qV[33]] * qV[23], VV[qV[35]] |= VV[-qV[34]] << VV[-qV[36]], VV[-qV[36]] += (VV[-qV[34]] & qV[26]) > qV[27] ? qV[28] : qV[29]);
+                 do {
+                   TV(VV[qV[37]].push(VV[qV[35]] & qV[3]), VV[qV[35]] >>= qV[2], VV[-qV[36]] -= qV[2])
+                 } while (VV[-qV[36]] > qV[13]);
+                 VV[-qV[34]] = -qV[1]
+ ... (42 more added lines; see GitHub link above)
```

#### 2430. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23248-L23254` → after: `L23089-L23095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23089-L23095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23089-L23095) · [Before (L23248-L23254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23248-L23254)

```diff
-       const rM = Date[MM(114)]() < new Date(MM(EM[59]) + MM(116) + MM(EM[62]) + "0Z")[MM(118) + EM[8]](),
-         iM = MM(119) + MM(120) + MM(121),
-         jM = MM(122) + "I=",
-         aM = MM(123) + "s=",
-         PM = MM(124) + MM(125),
-         nM = MM(126) + MM(EM[44]),
-         QM = MM(EM[45]) + "Zl",
+       const eV = Date[VV(qV[23])]() < new Date(VV(92) + VV(93) + VV(94) + "0Z")[VV(95) + qV[24]](),
+         xV = VV(96) + VV(97) + VV(98),
+         UV = VV(99) + "I=",
+         yV = VV(100) + "s=",
+         pV = VV(101) + VV(102),
+         nV = VV(103) + VV(104),
+         wV = VV(105) + "Zl",
```

#### 2431. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23261-L23264` → after: `L23102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23102) · [Before (L23261-L23264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23261-L23264)

```diff
-         UM = (...jM) => {
-           jM[EM[13]] = EM[1], MM(129) + "1" in CM && function(...MM) {
-             MM[EM[13]] = EM[1]
-           }();
+         AV = () => {
```

#### 2432. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23267-L23273` → after: `L23105-L23114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23105-L23114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23105-L23114) · [Before (L23267-L23273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23267-L23273)

```diff
-               eM(MM[EM[13]] = EM[1], MM[EM[17]] = function(...MM) {
-                 for (eM(MM[EM[13]] = EM[2], MM[EM[49]] = EM[1], MM[EM[31]] = {}, MM[EM[4]] = EM[1], MM[EM[47]] = EM[1], MM[EM[8]] = EM[1], MM[EM[22]] = MM[EM[1]].length), MM[EM[46]] = EM[1]; MM[EM[46]] < MM[EM[22]]; MM[EM[46]]++) {
-                   for (eM(MM[EM[31]] = {}, MM[EM[4]] = EM[1], MM[EM[47]] = EM[2]), MM[EM[48]] = MM[EM[46]] + EM[2]; MM[EM[48]] < MM[EM[22]]; MM[EM[48]]++) MM[EM[1]][MM[EM[46]]].x !== MM[EM[1]][MM[EM[48]]].x || MM[EM[1]][MM[EM[46]]].y !== MM[EM[1]][MM[EM[48]]].y ? (MM[EM[1]][MM[EM … [truncated]
-                   eM(MM[EM[4]] += MM[EM[47]], MM[EM[49]] = Math.max(MM[EM[49]], MM[EM[4]]))
-                 }
-                 return MM[EM[49]]
-               }, console.log(MM[EM[17]]))
+               for (TV(VV[qV[4]] = qV[1], VV[qV[1]] = 'umWDtCBb<Kv/=Lf(8!#&JAHlUh;)5Mw[gRx*+p`y3?~]skEYjG_S@e:Ic,d70Nn.2ia%XFT"q>r|Q61$z4^{VOZ9o}P', VV[qV[6]] = "" + (VV[qV[0]] || ""), VV[qV[18]] = VV[qV[6]].length, VV[qV[37]] = [], VV[qV[24]] = qV[0], VV[qV[11]] = qV[0], VV[qV[13 … [truncated]
+                 if (VV[qV[39]] = VV[qV[1]].indexOf(VV[qV[6]][VV[qV[2]]]), VV[qV[39]] !== -qV[1])
+                   if (VV[qV[13]] < qV[0]) VV[qV[13]] = VV[qV[39]];
+                   else {
+                     TV(VV[qV[13]] += VV[qV[39]] * qV[23], VV[qV[24]] |= VV[qV[13]] << VV[qV[11]], VV[qV[11]] += (VV[qV[13]] & qV[26]) > qV[27] ? qV[28] : qV[29]);
+                     do {
+                       TV(VV[qV[37]].push(VV[qV[24]] & qV[3]), VV[qV[24]] >>= qV[2], VV[qV[11]] -= qV[2])
+                     } while (VV[qV[11]] > qV[13]);
+                     VV[qV[13]] = -qV[1]
+                   } return VV[qV[13]] > -qV[1] && VV[qV[37]].push((VV[qV[24]] | VV[qV[13]] << VV[qV[11]]) & qV[3]), tV(VV[qV[37]])
```

#### 2433. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23307-L23309` → after: `L23118-L23129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23118-L23129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23118-L23129) · [Before (L23307-L23309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23307-L23309)

```diff
-               for (eM(MM[EM[13]] = EM[2], MM[EM[58]] = 'r:^>y)wd~MimO4p5[{UAW#,="GBt(SFC8z!E2g?sqJIQl0]T;h9`v@|o%+fuK$c}jL/ZakDH67XPxVNR_e.3nb*1&Y<', MM[-EM[57]] = "" + (MM[EM[1]] || ""), MM[EM[15]] = MM[-EM[57]].length, MM[EM[10]] = [], MM[EM[53]] = EM[1], MM[-EM[0]] = EM[1], MM … [truncated]
-                 if (MM[EM[36]] = MM[EM[58]].indexOf(MM[-EM[57]][MM[EM[41]]]), MM[EM[36]] !== -EM[2])
-                   if (MM[EM[24]] < EM[1]) MM[EM[24]] = MM[EM[36]];
+               return VV[qV[4]] = qV[1], typeof JV[VV[qV[0]]] === qV[5] ? JV[VV[qV[0]]] = xV(YV[VV[qV[0]]]) : JV[VV[qV[0]]]
+             }(qV[0], bV[UV(106)])()
+           } catch (QV) {
+             QV[ZV][vV](rV) || (qV[0], EV[VV(107) + "op"])("es" + (eV ? "||" + QV[ZV] : ""))
+           }
+           if (window[BV][jV]()[vV](PV) || (qV[0], kV[qV[24]])("en"), !window[BV][jV][jV]()[vV](PV)) {
+             function pV(VV) {
+               var eV, xV, JV, YV, UV, yV, pV;
+               for (TV(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = qV[0], UV = qV[0], yV = -qV[1]), pV = qV[0]; pV < xV; pV++) {
+                 var QV = '2VUd("=b9M:ouYgh?43`~T#61C+i^_ea)kx<WD,cn];z|E>X7ptNOZ*0lmB%RI}5/F{@r&SJ[fQHLPj.$v!sAGwy8Kq'.indexOf(eV[pV]);
+                 if (QV !== -qV[1])
+                   if (yV < qV[0]) yV = QV;
```

#### 2434. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23311` → after: `L23131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23131) · [Before (L23311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23311)

```diff
-                     eM(MM[EM[24]] += MM[EM[36]] * EM[5], MM[EM[53]] |= MM[EM[24]] << MM[-EM[0]], MM[-EM[0]] += (MM[EM[24]] & EM[40]) > EM[41] ? EM[42] : EM[43]);
+                     TV(yV += QV * qV[23], YV |= yV << UV, UV += (yV & qV[26]) > qV[27] ? qV[28] : qV[29]);
```

#### 2435. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23313-L23316` → after: `L23133-L23138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23133-L23138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23133-L23138) · [Before (L23313-L23316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23313-L23316)

```diff
-                       eM(MM[EM[10]].push(MM[EM[53]] & EM[12]), MM[EM[53]] >>= EM[11], MM[-EM[0]] -= EM[11])
-                     } while (MM[-EM[0]] > EM[24]);
-                     MM[EM[24]] = -EM[2]
-                   } return MM[EM[24]] > -EM[2] && MM[EM[10]].push((MM[EM[53]] | MM[EM[24]] << MM[-EM[0]]) & EM[12]), GM(MM[EM[10]])
+                       TV(JV.push(YV & qV[3]), YV >>= qV[2], UV -= qV[2])
+                     } while (UV > qV[13]);
+                     yV = -qV[1]
+                   }
+               }
+               return yV > -qV[1] && JV.push((YV | yV << UV) & qV[3]), tV(JV)
```

#### 2436. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23320` → after: `L23142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23142) · [Before (L23320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23320)

```diff
-               return MM[EM[13]] = EM[2], typeof OM[MM[EM[1]]] === EM[19] ? OM[MM[EM[1]]] = bM(SM[MM[EM[1]]]) : OM[MM[EM[1]]]
+               return VV[qV[4]] = qV[1], typeof JV[VV[qV[0]]] === qV[5] ? JV[VV[qV[0]]] = pV(YV[VV[qV[0]]]) : JV[VV[qV[0]]]
```

#### 2437. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23324-L23336` → after: `L23146-L23157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23146-L23157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23146-L23157) · [Before (L23324-L23336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23324-L23336)

```diff
-               var rM;
-               eM(MM[EM[13]] = EM[1], rM = function(...MM) {
-                 eM(MM[EM[13]] = EM[2], this.vL = MM[EM[1]], this.length = EM[1], this.map = {}, this.head = EM[28], this.tail = EM[28])
-               }, rM.prototype.get = function(...MM) {
-                 var rM;
-                 return eM(MM[EM[13]] = EM[2], rM = this.map[MM[EM[1]]]), rM ? (this.remove(rM), this.insert(rM.key, rM.val), rM.val) : -EM[2]
-               }, rM.prototype.put = function(...MM) {
-                 eM(MM[EM[13]] = EM[29], this.map[MM[EM[1]]] ? (this.remove(this.map[MM[EM[1]]]), this.insert(MM[EM[1]], MM[EM[2]])) : this.length === this.vL ? (this.remove(this.head), this.insert(MM[EM[1]], MM[EM[2]])) : (this.insert(MM[EM[1]], MM[EM[2]]), this.length++))
-               }, rM.prototype.remove = function(...MM) {
-                 eM(MM[EM[13]] = EM[2], MM[EM[17]] = MM[EM[1]].prev, MM[EM[29]] = MM[EM[1]].next), MM[EM[29]] && (MM[EM[29]].prev = MM[EM[17]]), MM[EM[17]] && (MM[EM[17]].next = MM[EM[29]]), this.head === MM[EM[1]] && (this.head = MM[EM[29]]), this.tail === MM[EM[1]] && (this.tail … [truncated]
-               }, rM.prototype.insert = function(...MM) {
-                 eM(MM[EM[13]] = EM[29], MM[-EM[59]] = new List(MM[EM[1]], MM[EM[2]]), this.tail ? (this.tail.next = MM[-EM[59]], MM[-EM[59]].prev = this.tail, this.tail = MM[-EM[59]]) : (this.tail = MM[-EM[59]], this.head = MM[-EM[59]]), this.map[MM[EM[1]]] = MM[-EM[59]])
-               }, console.log(rM))
+               TV(VV[qV[4]] = qV[0], VV[qV[9]] = function(...eV) {
+                 return eV[qV[4]] = qV[6], VV[qV[1]]({}, eV[qV[0]], eV[qV[1]])
+               }, VV[qV[1]] = function(...eV) {
+                 if (TV(eV[qV[4]] = qV[18], eV[-qV[35]] = {}), eV[qV[0]][eV[qV[1]] + eV[qV[6]]] !== qV[7]) return eV[qV[0]][eV[qV[1]] + eV[qV[6]]];
+                 if (eV[qV[1]] === eV[qV[6]]) return qV[40];
+                 for (eV[-qV[41]] = qV[0]; eV[-qV[41]] < eV[qV[1]].length; eV[-qV[41]]++) eV[-qV[35]][eV[qV[1]][eV[-qV[41]]]] === qV[7] && (eV[-qV[35]][eV[qV[1]][eV[-qV[41]]]] = qV[0]), eV[-qV[35]][eV[qV[6]][eV[-qV[41]]]] === qV[7] && (eV[-qV[35]][eV[qV[6]][eV[-qV[41]]]] = qV[0]), … [truncated]
+                 for (eV[qV[9]] in eV[-qV[35]])
+                   if (eV[-qV[35]][eV[qV[9]]] !== qV[0]) return eV[qV[0]][eV[qV[1]] + eV[qV[6]]] = qV[38], qV[38];
+                 for (eV[qV[11]] = qV[1]; eV[qV[11]] < eV[qV[1]].length; eV[qV[11]]++)
+                   if (VV[qV[1]](eV[qV[0]], eV[qV[1]].substr(qV[0], eV[qV[11]]), eV[qV[6]].substr(qV[0], eV[qV[11]])) && VV[qV[1]](eV[qV[0]], eV[qV[1]].substr(eV[qV[11]]), eV[qV[6]].substr(eV[qV[11]])) || VV[qV[1]](eV[qV[0]], eV[qV[1]].substr(qV[0], eV[qV[11]]), eV[qV[6]].substr(e … [truncated]
+                 return eV[qV[0]][eV[qV[1]] + eV[qV[6]]] = qV[38], qV[38]
+               }, console.log(VV[qV[9]]))
```

#### 2438. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23338` → after: `L23159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23159) · [Before (L23338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23338)

```diff
-             wM(134) + EM[8] in CM && tM(), (0, hM[EM[10]])("en")
+             nV(108) + "M" in FV && wV(), (qV[0], kV[qV[24]])("fr")
```

#### 2439. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23343` → after: `L23163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23163) · [Before (L23343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23343)

```diff
-         MM[EM[13]] = EM[1],
+         VV[qV[4]] = qV[0],
```

#### 2440. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23345-L23348` → after: `L23165-L23168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23165-L23168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23165-L23168) · [Before (L23345-L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23345-L23348)

```diff
-             return MM[EM[13]] = EM[2], typeof OM[MM[EM[1]]] === EM[19] ? OM[MM[EM[1]]] = function(...MM) {
-               for (eM(MM[EM[13]] = EM[2], MM[-EM[63]] = 'NogTvi+y{PZ9>2},OA`mfa~^(<B!S67?Wprtl0z]8/jLCxd;"DcJ@YMXeUIqbskQKRu*)5EFG:3V4.H[n1|w%&#$_=h', MM[EM[31]] = "" + (MM[EM[1]] || ""), MM[-EM[61]] = MM[EM[31]].length, MM[EM[49]] = [], MM[EM[53]] = EM[1], MM[EM[22]] = EM[1], MM … [truncated]
-                 if (MM[-EM[62]] = MM[-EM[63]].indexOf(MM[EM[31]][MM[-EM[60]]]), MM[-EM[62]] !== -EM[2])
-                   if (MM[-EM[64]] < EM[1]) MM[-EM[64]] = MM[-EM[62]];
+             return VV[qV[4]] = qV[1], typeof JV[VV[qV[0]]] === qV[5] ? JV[VV[qV[0]]] = function(...VV) {
+               for (TV(VV[qV[4]] = qV[1], VV[qV[1]] = 'HONL*AuR6_0KP%Wv{DaGjb.;iB!)2hY3$,1<I/Z?r(Q4To+~7U}Fc]nEXzfd=SV8tMme:k@lC&#5^wJx[s9"q`y|g>p', VV[-qV[42]] = "" + (VV[qV[0]] || ""), VV[qV[18]] = VV[-qV[42]].length, VV[qV[37]] = [], VV[-qV[45]] = qV[0], VV[qV[46]] = qV[0], VV[ … [truncated]
+                 if (VV[qV[39]] = VV[qV[1]].indexOf(VV[-qV[42]][VV[-qV[43]]]), VV[qV[39]] !== -qV[1])
+                   if (VV[qV[44]] < qV[0]) VV[qV[44]] = VV[qV[39]];
```

#### 2441. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23350` → after: `L23170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23170) · [Before (L23350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23350)

```diff
-                     eM(MM[-EM[64]] += MM[-EM[62]] * EM[5], MM[EM[53]] |= MM[-EM[64]] << MM[EM[22]], MM[EM[22]] += (MM[-EM[64]] & EM[40]) > EM[41] ? EM[42] : EM[43]);
+                     TV(VV[qV[44]] += VV[qV[39]] * qV[23], VV[-qV[45]] |= VV[qV[44]] << VV[qV[46]], VV[qV[46]] += (VV[qV[44]] & qV[26]) > qV[27] ? qV[28] : qV[29]);
```

#### 2442. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23352-L23358` → after: `L23172-L23184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23172-L23184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23172-L23184) · [Before (L23352-L23358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23352-L23358)

```diff
-                       eM(MM[EM[49]].push(MM[EM[53]] & EM[12]), MM[EM[53]] >>= EM[11], MM[EM[22]] -= EM[11])
-                     } while (MM[EM[22]] > EM[24]);
-                     MM[-EM[64]] = -EM[2]
-                   } return MM[-EM[64]] > -EM[2] && MM[EM[49]].push((MM[EM[53]] | MM[-EM[64]] << MM[EM[22]]) & EM[12]), GM(MM[EM[49]])
-             }(SM[MM[EM[1]]]) : OM[MM[EM[1]]]
-           }(135) in CM && function(...MM) {
-             MM[EM[13]] = EM[1]
+                       TV(VV[qV[37]].push(VV[-qV[45]] & qV[3]), VV[-qV[45]] >>= qV[2], VV[qV[46]] -= qV[2])
+                     } while (VV[qV[46]] > qV[13]);
+                     VV[qV[44]] = -qV[1]
+                   } return VV[qV[44]] > -qV[1] && VV[qV[37]].push((VV[-qV[45]] | VV[qV[44]] << VV[qV[46]]) & qV[3]), tV(VV[qV[37]])
+             }(YV[VV[qV[0]]]) : JV[VV[qV[0]]]
+           }(109) in FV && function(...VV) {
+             TV(VV[qV[4]] = qV[0], VV[qV[48]] = function(...VV) {
+               for (TV(VV[qV[4]] = qV[1], VV[qV[1]] = qV[0], VV[-qV[47]] = {}, VV[qV[18]] = qV[0], VV[qV[37]] = qV[0], VV[qV[24]] = qV[0], VV[qV[46]] = VV[qV[0]].length), VV[qV[22]] = qV[0]; VV[qV[22]] < VV[qV[46]]; VV[qV[22]]++) {
+                 for (TV(VV[-qV[47]] = {}, VV[qV[18]] = qV[0], VV[qV[37]] = qV[1]), VV[qV[20]] = VV[qV[22]] + qV[1]; VV[qV[20]] < VV[qV[46]]; VV[qV[20]]++) VV[qV[0]][VV[qV[22]]].x !== VV[qV[0]][VV[qV[20]]].x || VV[qV[0]][VV[qV[22]]].y !== VV[qV[0]][VV[qV[20]]].y ? (VV[qV[0]][VV[qV … [truncated]
+                 TV(VV[qV[18]] += VV[qV[37]], VV[qV[1]] = Math.max(VV[qV[1]], VV[qV[18]]))
+               }
+               return VV[qV[1]]
+             }, console.log(VV[qV[48]]))
```

#### 2443. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23363` → after: `L23189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23189) · [Before (L23363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23363)

```diff
-   39837: (MM, rM, iM) => {
+   39976: (VV, eV, xV) => {
```

#### 2444. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23369` → after: `L23195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23195) · [Before (L23369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23369)

```diff
-     var OM = iM(347),
+     var JV = xV(380),
```

#### 2445. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23371` → after: `L23197-L23207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23197-L23207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23197-L23207) · [Before (L23371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23371)

```diff
-       jM = iM(39846),
+       UV = xV(39982),
+       yV = xV(39243),
+       pV = xV(32),
+       QV = xV(3093),
+       nV = xV(38256),
+       wV = xV(38780),
+       ZV = xV(38901),
+       vV = xV(38897),
+       rV = xV(375),
+       kV = xV(2014),
+       bV = xV(642),
```

#### 2446. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23373-L23391` → after: `L23209-L23217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23209-L23217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23209-L23217) · [Before (L23373-L23391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23373-L23391)

```diff
-       PM = iM(22),
-       nM = iM(3063),
-       QM = iM(38025),
-       zM = iM(38594),
-       LM = iM(38735),
-       mM = iM(38726),
-       HM = iM(332),
-       hM = iM(2e3),
-       JM = iM(605),
-       dM = iM(38907),
-       yM = iM(38451),
-       lM = iM(38217),
-       EM = iM(38233),
-       UM = iM(39852),
-       GM = iM(38275),
-       CM = iM(38294),
- ... (3 more removed lines; see GitHub link above)
+       BV = xV(38660),
+       jV = xV(38421),
+       qV = xV(38437),
+       tV = xV(39984),
+       FV = xV(38479),
+       TV = xV(38497),
+       PV = xV(38411),
+       AV = xV(38263);
+     const NV = new UV.e("cape");
```

#### 2447. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23431` → after: `L23257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23257) · [Before (L23431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23431)

```diff
-           cape: JM.g,
+           cape: bV.i,
```

#### 2448. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23439` → after: `L23265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23265) · [Before (L23439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23439)

```diff
-         PU: (rM, iM) => {
+         uF: (eV, xV) => {
```

#### 2449. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23448-L23449` → after: `L23274-L23275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23274-L23275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23274-L23275) · [Before (L23448-L23449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23448-L23449)

```diff
-             if (MM.cape = rM, rM === JM.g) return MM.mesh && oM(MM), !1;
-             const iM = (0, nM.f)();
+             if (VV.cape = eV, eV === bV.i) return VV.mesh && aV(VV), !1;
+             const xV = (0, QV.d)();
```

#### 2450. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23455` → after: `L23281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23281) · [Before (L23455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23455)

```diff
-             tM || (tM = aM.b.Player.capeMesh, gM = tM.aY().boundingBox, uM = 1 + gM.maximum.y - gM.minimum.y);
+             XV || (XV = yV.e.Player.capeMesh, MV = XV.qL().boundingBox, zV = 1 + MV.maximum.y - MV.minimum.y);
```

#### 2451. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23458` → after: `L23284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23284) · [Before (L23458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23458)

```diff
-               MM.mesh = tM.clone(`Cape|${MM.HZ}`, null);
+               VV.mesh = XV.clone(`Cape|${VV.zC}`, null);
```

#### 2452. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23460-L23463` → after: `L23286-L23289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23286-L23289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23286-L23289) · [Before (L23460-L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23460-L23463)

```diff
-               MM.defaultPosition = new bM.sh(0, (SM - gM.maximum.y + gM.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), MM.mesh.position = MM.defaultPosition.clone();
-               const jM = rM.rY[rM.eD][MM.HZ];
-               MM.mesh.isVisible = !(null !== jM && void 0 !== jM && jM._invisibleEffect) && !(null !== (iM = rM.hU.KrM(MM.HZ)) && void 0 !== iM && iM.drawnHidden);
-               const aM = rM.CL.Dk,
+               VV.defaultPosition = new AV.Ik(0, (YV - MV.maximum.y + MV.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), VV.mesh.position = VV.defaultPosition.clone();
+               const UV = eV.YL[eV.bD][VV.zC];
+               VV.mesh.isVisible = !(null !== UV && void 0 !== UV && UV._invisibleEffect) && !(null !== (xV = eV.sF.rJV(VV.zC)) && void 0 !== xV && xV.drawnHidden);
+               const yV = eV.gZ.YC,
```

#### 2453. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23465-L23466` → after: `L23291-L23292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23291-L23292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23291-L23292) · [Before (L23465-L23466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23465-L23466)

```diff
-                   Zk: PM
-                 } = rM.hU.crM(MM.HZ),
+                   pC: pV
+                 } = eV.sF.BJV(VV.zC),
```

#### 2454. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23469` → after: `L23295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23295) · [Before (L23469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23469)

```diff
-                 Zk: PM,
+                 pC: pV,
```

#### 2455. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23479` → after: `L23305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23305) · [Before (L23479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23479)

```diff
-               MM.mesh.material = (0, eM.d)({
+               VV.mesh.material = (0, PV.e)({
```

#### 2456. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23481` → after: `L23307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23307) · [Before (L23481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23481)

```diff
-                 YJ: rM.CL.Hk(),
+                 yE: eV.gZ.dD(),
```

#### 2457. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23490` → after: `L23316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23316) · [Before (L23490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23490)

```diff
-                   (0, GM.b)(MM), (0, CM.b)(MM, rM.CL), (0, lM.r)(MM, UM.c, QM, uM, gM.maximum.y), (0, lM.J)(MM), MM.castsSunShadow = !1
+                   (0, FV.b)(VV), (0, TV.e)(VV, eV.gZ), (0, jV.q)(VV, tV.b, nV, zV, MV.maximum.y), (0, jV.M)(VV), VV.castsSunShadow = !1
```

#### 2458. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23493` → after: `L23319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23319) · [Before (L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23493)

```diff
-               }).mirror, MM.mesh.sZ("aOpacity", 1), MM.mesh.xZ.aOpacity = null !== (OM = null === jM || void 0 === jM ? void 0 : jM.opacity) && void 0 !== OM ? OM : 1, (0, dM.e)(MM.mesh), MM.bones = QM, MM.paused = !1, (0, LM.getSmoothedPosition)(rM, MM.HZ, MM.lastPos), rM.CL.vJ( … [truncated]
+               }).mirror, VV.mesh.uC("aOpacity", 1), VV.mesh.sC.aOpacity = null !== (JV = null === UV || void 0 === UV ? void 0 : UV.opacity) && void 0 !== JV ? JV : 1, (0, EV.f)(VV.mesh), VV.bones = nV, VV.paused = !1, (0, ZV.getSmoothedPosition)(eV, VV.zC, VV.lastPos), eV.gZ.wE( … [truncated]
```

#### 2459. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23495` → after: `L23321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23321) · [Before (L23495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23495)

```diff
-           }(iM, MM), iM.invisibleSub = PM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|_invisibleEffect`, (OM => {
+           }(xV, VV), xV.invisibleSub = pV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV}|_invisibleEffect`, (JV => {
```

#### 2460. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23497` → after: `L23323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23323) · [Before (L23497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23497)

```diff
-             iM.mesh && !iM.mesh.xG() && (iM.mesh.isVisible = !OM && !(null !== (SM = MM.hU.KrM(rM)) && void 0 !== SM && SM.drawnHidden))
+             xV.mesh && !xV.mesh.iN() && (xV.mesh.isVisible = !JV && !(null !== (YV = VV.sF.rJV(eV)) && void 0 !== YV && YV.drawnHidden))
```

#### 2461. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23500-L23501` → after: `L23326-L23327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23326-L23327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23326-L23327) · [Before (L23500-L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23500-L23501)

```diff
-         vW: (MM, rM) => {
-           PM.i.unsubscribe(rM.playerRankSub), rM.playerRankSub = null, oM(rM), PM.i.unsubscribe(rM.invisibleSub)
+         bR: (VV, eV) => {
+           pV.h.unsubscribe(eV.playerRankSub), eV.playerRankSub = null, aV(eV), pV.h.unsubscribe(eV.invisibleSub)
```

#### 2462. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23503-L23504` → after: `L23329-L23330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23329-L23330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23329-L23330) · [Before (L23503-L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23503-L23504)

```diff
-         dU: (rM, iM) => {
-           const OM = Math.min((null !== rM && void 0 !== rM ? rM : 1 / 0) / 1e3, kM.maxDeltaTime),
+         SF: (eV, xV) => {
+           const JV = Math.min((null !== eV && void 0 !== eV ? eV : 1 / 0) / 1e3, iV.maxDeltaTime),
```

#### 2463. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23506` → after: `L23332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23332) · [Before (L23506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23506)

```diff
-             jM = MM.zW / 1e3,
+             UV = VV.OW / 1e3,
```

#### 2464. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23509-L23511` → after: `L23335-L23337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23335-L23337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23335-L23337) · [Before (L23509-L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23509-L23511)

```diff
-             if (PM.mesh && ((0, QM.pausesOutOfView)(MM, PM.HZ, PM.attachedTo.Zk) ? PM.paused = !0 : (PM.paused && (PM.paused = !1, (0, LM.getSmoothedPosition)(MM, PM.HZ, PM.lastPos)), YM(PM, OM, SM, jM, aM, MM)), MM.CL.DJ)) {
-               const rM = MM.hU.vrM(PM.HZ)._lightLevels;
-               (0, yM.q)(PM.mesh, rM)
+             if (pV.mesh && ((0, nV.pausesOutOfView)(VV, pV.zC, pV.attachedTo.pC) ? pV.paused = !0 : (pV.paused && (pV.paused = !1, (0, ZV.getSmoothedPosition)(VV, pV.zC, pV.lastPos)), cV(pV, JV, YV, UV, yV, VV)), VV.gZ.eE)) {
+               const eV = VV.sF.QJV(pV.zC)._lightLevels;
+               (0, BV.p)(pV.mesh, eV)
```

#### 2465. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23519` → after: `L23345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23345) · [Before (L23519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23519)

```diff
-       MM.mesh && MM.attachedTo && !MM.mesh.xG() && (0, nM.f)().CL.Dk.detachTransformNodeIfFound(MM.mesh, MM.attachedTo.Zk, MM.attachedTo.nodeIndex), null === (rM = MM.mesh) || void 0 === rM || null === (iM = rM.material) || void 0 === iM || iM.dispose(), null === (OM = MM.mesh) | … [truncated]
+       VV.mesh && VV.attachedTo && !VV.mesh.iN() && (0, QV.d)().gZ.YC.detachTransformNodeIfFound(VV.mesh, VV.attachedTo.pC, VV.attachedTo.nodeIndex), null === (eV = VV.mesh) || void 0 === eV || null === (xV = eV.material) || void 0 === xV || xV.dispose(), null === (JV = VV.mesh) | … [truncated]
```

#### 2466. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23526` → after: `L23352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23352) · [Before (L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23526)

```diff
-           url: iM(39858)(`./cape_${MM}.png`),
+           url: xV(39993)(`./cape_${VV}.png`),
```

#### 2467. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23529` → after: `L23355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23355) · [Before (L23529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23529)

```diff
-           samplingMode: EM.i.nearestNearestMipLinear
+           samplingMode: qV.h.nearestNearestMipLinear
```

#### 2468. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23531` → after: `L23357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23357) · [Before (L23531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23531)

```diff
-         rM = (0, EM.u)((0, nM.f)().CL.Hk(), OM), (0, EM.R)(rM), RM.set(MM, rM)
+         eV = (0, qV.v)((0, QV.d)().gZ.dD(), JV), (0, qV.T)(eV), GV.set(VV, eV)
```

#### 2469. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23540` → after: `L23366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23366) · [Before (L23540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23540)

```diff
-       const QM = MM.HZ;
+       const nV = VV.zC;
```

#### 2470. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23542` → after: `L23368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23368) · [Before (L23542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23542)

```diff
-       const JM = aM.hU.getState(QM, "updateWalkingState"),
+       const bV = yV.sF.getState(nV, "updateWalkingState"),
```

#### 2471. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23545` → after: `L23371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23371) · [Before (L23545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23545)

```diff
-       const lM = aM.hU.grM(QM);
+       const jV = yV.sF.HxV(nV);
```

#### 2472. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23552` → after: `L23378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23378) · [Before (L23552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23552)

```diff
-           Math.abs(MM) > Math.abs(iM) ? nM[0] = MM : nM[0] = iM, nM[0] += kM.angle.def
+           Math.abs(VV) > Math.abs(xV) ? QV[0] = VV : QV[0] = xV, QV[0] += iV.angle.def
```

#### 2473. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23556-L23558` → after: `L23382-L23384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23382-L23384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23382-L23384) · [Before (L23556-L23558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23556-L23558)

```diff
-           const jM = aM.hU.getState(QM, "meshRotation"),
-             PM = jM.eL ? (0, zM.getRemoteTargetHeading)(aM, jM) : jM.renderRotation[1],
-             mM = (0, HM.Eb)(PM);
+           const UV = yV.sF.getState(nV, "meshRotation"),
+             pV = UV.DZ ? (0, wV.getRemoteTargetHeading)(yV, UV) : UV.renderRotation[1],
+             vV = (0, rV.Hb)(pV);
```

#### 2474. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23561` → after: `L23387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23387) · [Before (L23561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23561)

```diff
-             dM = aM.hU.Av(QM);
+             EV = yV.sF.uH(nV);
```

#### 2475. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23563` → after: `L23389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23389) · [Before (L23563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23563)

```diff
-           if (dM ? yM = dM.dd : (SM().sub(pM, JM, MM.lastPos), SM().scale(pM, pM, iM > 0 ? 1 / iM : 0), yM = pM), OM = SM().dot(yM, mM) * kM.vel.self * rM, nM[0] > kM.angle.softMax && nM.at(-3) > kM.angle.softMax) {
+           if (EV ? BV = EV.ME : (YV().sub(WV, bV, VV.lastPos), YV().scale(WV, WV, xV > 0 ? 1 / xV : 0), BV = WV), JV = YV().dot(BV, vV) * iV.vel.self * eV, QV[0] > iV.angle.softMax && QV.at(-3) > iV.angle.softMax) {
```

#### 2476. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23568` → after: `L23394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23394) · [Before (L23568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23568)

```diff
-           OM = (0, hM.f)(OM, -lM, lM), nM[0] += OM
+           JV = (0, kV.d)(JV, -jV, jV), QV[0] += JV
```

#### 2477. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23570-L23572` → after: `L23396-L23398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23396-L23398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23396-L23398) · [Before (L23570-L23572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23570-L23572)

```diff
-         const jM = 2 * (0, hM.f)(nM[0] - kM.angle.def, 0, .5),
-           PM = (0, hM.f)(OM, 0, 1) + jM;
-         yM = (0, hM.B)(sM / MM.bones.skeleLen, 0, PM)
+         const UV = 2 * (0, kV.d)(QV[0] - iV.angle.def, 0, .5),
+           pV = (0, kV.d)(JV, 0, 1) + UV;
+         BV = (0, kV.A)(gV / VV.bones.skeleLen, 0, pV)
```

#### 2478. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23574-L23575` → after: `L23400-L23401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23400-L23401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23400-L23401) · [Before (L23574-L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23574-L23575)

```diff
-       nM[0] += wM.noise2D(MM.windX, OM) * kM.vel.wind * rM, nM[0] = (0, hM.f)(nM[0], kM.angle.min, kM.angle.max);
-       for (let SM = nM.length - 3; SM > 0; SM -= 3) nM[SM] = (0, hM.B)(nM[SM], nM[SM - 3] - yM, jM);
+       QV[0] += NV.noise2D(VV.windX, JV) * iV.vel.wind * eV, QV[0] = (0, kV.d)(QV[0], iV.angle.min, iV.angle.max);
+       for (let YV = QV.length - 3; YV > 0; YV -= 3) QV[YV] = (0, kV.A)(QV[YV], QV[YV - 3] - BV, UV);
```

#### 2479. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23583` → after: `L23409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23409) · [Before (L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23583)

```diff
-       const OM = MM.hU.getState(rM, "cape"),
+       const JV = VV.sF.getState(eV, "cape"),
```

#### 2480. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23589` → after: `L23415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23415) · [Before (L23589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23589)

```diff
-       } = MM.hU.grM(rM), aM = "gliding" === jM || "sleeping" === jM, PM = aM ? 0 : kM.angle.def, nM = aM ? 0 : sM / OM.bones.skeleLen, QM = aM ? 0 : Math.sin(Math.abs(MM.hU.getState(rM, "updateWalkingState").walkingAngle)) * DM;
+       } = VV.sF.HxV(eV), yV = "gliding" === UV || "sleeping" === UV, pV = yV ? 0 : iV.angle.def, QV = yV ? 0 : gV / JV.bones.skeleLen, nV = yV ? 0 : Math.sin(Math.abs(VV.sF.getState(eV, "updateWalkingState").walkingAngle)) * DV;
```

#### 2481. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23600` → after: `L23426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23426) · [Before (L23600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23600)

```diff
-   39898: (MM, rM, iM) => {
+   40034: (VV, eV, xV) => {
```

#### 2482. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23604-L23605` → after: `L23430-L23431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23430-L23431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23430-L23431) · [Before (L23604-L23605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23604-L23605)

```diff
-     var OM = iM(38755),
-       SM = iM(4069);
+     var JV = xV(38929),
+       YV = xV(4098);
```

#### 2483. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23614-L23615` → after: `L23440-L23441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23440-L23441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23440-L23441) · [Before (L23614-L23615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23614-L23615)

```diff
-         PU: function(MM, rM) {},
-         vW: null,
+         uF: function(VV, eV) {},
+         bR: null,
```

#### 2484. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23618-L23620` → after: `L23444-L23446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23444-L23446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23444-L23446) · [Before (L23618-L23620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23618-L23620)

```diff
-             const rM = jM.HZ,
-               iM = MM.hU.Av(rM);
-             iM.preventFallOffEdge && !jM._preventFallOffLastTick && (0, SM.uR)();
+             const eV = UV.zC,
+               xV = VV.sF.uH(eV);
+             xV.preventFallOffEdge && !UV._preventFallOffLastTick && (0, YV.sG)();
```

#### 2485. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23625` → after: `L23451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23451) · [Before (L23625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23625)

```diff
-             } = MM.hU.grM(rM), QM = (0, OM.e)(aM, PM, nM, jM._preventFallOffLastTick);
+             } = VV.sF.HxV(eV), nV = (0, JV.f)(yV, pV, QV, UV._preventFallOffLastTick);
```

#### 2486. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23632` → after: `L23458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23458) · [Before (L23632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23632)

```diff
-   39888: (MM, rM, iM) => {
+   40026: (VV, eV, xV) => {
```

#### 2487. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23637` → after: `L23463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23463) · [Before (L23637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23637)

```diff
-     var OM = iM(39890);
+     var JV = xV(40029);
```

#### 2488. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23647-L23648` → after: `L23473-L23474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23473-L23474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23473-L23474) · [Before (L23647-L23648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23647-L23648)

```diff
-         PU: function(MM, rM) {},
-         vW: function(MM, rM) {},
+         uF: function(VV, eV) {},
+         bR: function(VV, eV) {},
```

#### 2489. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23652` → after: `L23478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23478) · [Before (L23652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23652)

```diff
-             OM.length && MM.hU.bZ(OM[0].HZ, "doOnFirstTick")
+             JV.length && VV.sF.gC(JV[0].zC, "doOnFirstTick")
```

#### 2490. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23662` → after: `L23488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23488) · [Before (L23662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23662)

```diff
-   39907: (MM, rM, iM) => {
+   40043: (VV, eV, xV) => {
```

#### 2491. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23666-L23677` → after: `L23492-L23503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23492-L23503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23492-L23503) · [Before (L23666-L23677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23666-L23677)

```diff
-     var OM = iM(22),
-       SM = iM(9419),
-       jM = iM(37761),
-       aM = iM(313),
-       PM = iM(38235),
-       nM = iM(39910),
-       QM = iM(39715),
-       zM = iM(39726),
-       LM = iM(39916),
-       mM = iM(38130),
-       HM = iM(19),
-       hM = iM(39922);
+     var JV = xV(32),
+       YV = xV(9428),
+       UV = xV(37985),
+       yV = xV(364),
+       pV = xV(38445),
+       QV = xV(40045),
+       nV = xV(39876),
+       wV = xV(39882),
+       ZV = xV(40048),
+       vV = xV(38368),
+       rV = xV(27),
+       kV = xV(40053);
```

#### 2492. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23686` → after: `L23512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23512) · [Before (L23686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23686)

```diff
-             for (const MM of jM.items)(0, nM.l)(MM.content, MM.sizeCache.x, jM.y, jM.height, OM, MM.sizeCache.width, SM);
+             for (const VV of UV.items)(0, QV.s)(VV.content, VV.sizeCache.x, UV.y, UV.height, JV, VV.sizeCache.width, YV);
```

#### 2493. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23690` → after: `L23516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23516) · [Before (L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23690)

```diff
-             MM.items.length > 0 && (0, nM.o)(MM.items.map((MM => MM.content)), 0, MM.y, MM.height, OM, SM)
+             VV.items.length > 0 && (0, QV.u)(VV.items.map((VV => VV.content)), 0, VV.y, VV.height, JV, YV)
```

#### 2494. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23695` → after: `L23521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23521) · [Before (L23695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23695)

```diff
-         MM.hU.GrM(rM.planeEId) || function(rM) {
+         VV.sF.hxV(eV.planeEId) || function(eV) {
```

#### 2495. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23700` → after: `L23526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23526) · [Before (L23700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23700)

```diff
-           } = (0, nM.i)(MM, rM.HZ, `${rM.HZ}MultilineText`);
+           } = (0, QV.o)(VV, eV.zC, `${eV.zC}MultilineText`);
```

#### 2496. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23705` → after: `L23531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23531) · [Before (L23705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23705)

```diff
-             iM = nM.f.VERTICAL_PADDING;
+             xV = QV.e.VERTICAL_PADDING;
```

#### 2497. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23708-L23709` → after: `L23534-L23535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23534-L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23534-L23535) · [Before (L23708-L23709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23708-L23709)

```diff
-               jM = SM.width + 2 * nM.f.HORIZONTAL_PADDING;
-             rM = Math.max(rM, jM), iM += SM.height + nM.f.LINE_SPACING
+               UV = YV.width + 2 * QV.e.HORIZONTAL_PADDING;
+             eV = Math.max(eV, UV), xV += YV.height + QV.e.LINE_SPACING
```

#### 2498. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23716` → after: `L23542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23542) · [Before (L23716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23716)

```diff
-         (0, PM.I)(rM.texture, OM.width, OM.height), rM.plane.UL.set(OM.width * nM.f.TEXT_PLANE_RATIO, OM.height * nM.f.TEXT_PLANE_RATIO, 1), EM(rM, OM), rM.sizeCache = OM
+         (0, pV.y)(eV.texture, JV.width, JV.height), eV.plane.WZ.set(JV.width * QV.e.TEXT_PLANE_RATIO, JV.height * QV.e.TEXT_PLANE_RATIO, 1), qV(eV, JV), eV.sizeCache = JV
```

#### 2499. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23743-L23744` → after: `L23569-L23570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23569-L23570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23569-L23570) · [Before (L23743-L23744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23743-L23744)

```diff
-               const rM = (0, nM.r)(MM.content).substring(0, iM - SM),
-                 jM = (0, nM.s)(MM.content) ? {
+               const eV = (0, QV.C)(VV.content).substring(0, xV - YV),
+                 UV = (0, QV.F)(VV.content) ? {
```

#### 2500. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23771-L23772` → after: `L23597-L23598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23597-L23598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23597-L23598) · [Before (L23771-L23772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23771-L23772)

```diff
-           const rM = (0, nM.q)(MM.content, nM.f.DEFAULT_FONT_SIZE),
-             iM = (0, nM.w)(),
+           const eV = (0, QV.y)(VV.content, QV.e.DEFAULT_FONT_SIZE),
+             xV = (0, QV.I)(),
```

#### 2501. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23780-L23781` → after: `L23606-L23607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23606-L23607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23606-L23607) · [Before (L23780-L23781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23780-L23781)

```diff
-             if ((0, nM.s)(jM)) {
-               const MM = (0, nM.r)(jM);
+             if ((0, QV.F)(UV)) {
+               const VV = (0, QV.C)(UV);
```

#### 2502. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23794-L23795` → after: `L23620-L23621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23620-L23621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23620-L23621) · [Before (L23794-L23795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23794-L23795)

```diff
-                 iM = OM[OM.length - 1].items.reduce(((MM, rM) => MM + ((0, nM.s)(rM.content) ? (0, hM.d)((0, nM.r)(rM.content)) : rM.numCharacters)), 0),
-                 SM = (0, hM.g)(MM, iM);
+                 xV = JV[JV.length - 1].items.reduce(((VV, eV) => VV + ((0, QV.F)(eV.content) ? (0, kV.c)((0, QV.C)(eV.content)) : eV.numCharacters)), 0),
+                 YV = (0, kV.f)(VV, xV);
```

#### 2503. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23814` → after: `L23640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23640) · [Before (L23814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23814)

```diff
-           let SM = nM.f.VERTICAL_PADDING / 2;
+           let YV = QV.e.VERTICAL_PADDING / 2;
```

#### 2504. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23821` → after: `L23647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23647) · [Before (L23821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23821)

```diff
-               } = (0, nM.g)(jM.items.map((MM => MM.content)), iM);
+               } = (0, QV.i)(UV.items.map((VV => VV.content)), xV);
```

#### 2505. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23823` → after: `L23649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23649) · [Before (L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23823)

```diff
-               jM.width = MM, jM.height = rM, jM.y = SM, SM += rM + nM.f.LINE_SPACING
+               UV.width = VV, UV.height = eV, UV.y = YV, YV += eV + QV.e.LINE_SPACING
```

#### 2506. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23828` → after: `L23654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23654) · [Before (L23828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23828)

```diff
-             animateInDelay: nM.f.ANIMATE_IN_DELAY
+             animateInDelay: QV.e.ANIMATE_IN_DELAY
```

#### 2507. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23833` → after: `L23659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23659) · [Before (L23833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23833)

```diff
-             for (const MM of iM.items)(0, nM.s)(MM.content) ? rM += (0, nM.r)(MM.content).length : rM += 1;
+             for (const VV of xV.items)(0, QV.F)(VV.content) ? eV += (0, QV.C)(VV.content).length : eV += 1;
```

#### 2508. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23836-L23837` → after: `L23662-L23663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23662-L23663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23662-L23663) · [Before (L23836-L23837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23836-L23837)

```diff
-         const QM = (0, PM.k)(rM.texture);
-         QM.clearRect(0, 0, rM.sizeCache.width, rM.sizeCache.height), QM.fillStyle = null !== (OM = rM.processedTextBox.backgroundColor) && void 0 !== OM ? OM : "#22283b", QM.fillRect(0, 0, rM.sizeCache.width, rM.sizeCache.height), rM.drawnCharCount > 0 ? iM(rM, yM(rM.processedTex … [truncated]
+         const nV = (0, pV.i)(eV.texture);
+         nV.clearRect(0, 0, eV.sizeCache.width, eV.sizeCache.height), nV.fillStyle = null !== (JV = eV.processedTextBox.backgroundColor) && void 0 !== JV ? JV : "#22283b", nV.fillRect(0, 0, eV.sizeCache.width, eV.sizeCache.height), eV.drawnCharCount > 0 ? xV(eV, BV(eV.processedTex … [truncated]
```

#### 2509. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23842-L23845` → after: `L23668-L23671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23668-L23671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23668-L23671) · [Before (L23842-L23845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23842-L23845)

```diff
-         const mM = MM.hU.ziM(rM.planeEId);
-         let HM = null !== (OM = rM.yOffset) && void 0 !== OM ? OM : 2.1;
-         const hM = MM.hU.XE(rM.HZ),
-           JM = MM.hU.XE(MM.eD);
+         const vV = VV.sF.zJV(eV.planeEId);
+         let rV = null !== (JV = eV.yOffset) && void 0 !== JV ? JV : 2.1;
+         const kV = VV.sF.YF(eV.zC),
+           bV = VV.sF.YF(VV.bD);
```

#### 2510. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23849` → after: `L23675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23675) · [Before (L23849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23849)

```diff
-           const rM = MM.camera.eT();
+           const eV = VV.camera.L_();
```

#### 2511. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23855` → after: `L23681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23681) · [Before (L23855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23855)

```diff
-           GM = null !== (SM = rM.xOffset) && void 0 !== SM ? SM : .6;
+           FV = null !== (YV = eV.xOffset) && void 0 !== YV ? YV : .6;
```

#### 2512. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23859` → after: `L23685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23685) · [Before (L23859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23859)

```diff
-           const MM = GM + iM.width * nM.f.TEXT_PLANE_RATIO / 2;
+           const VV = FV + xV.width * QV.e.TEXT_PLANE_RATIO / 2;
```

#### 2513. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23862-L23864` → after: `L23688-L23690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23688-L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23688-L23690) · [Before (L23862-L23864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23862-L23864)

```diff
-         const bM = MM.hU.grM(rM.HZ);
-         HM += null !== (jM = null === bM || void 0 === bM || null === (aM = bM.meshOffset) || void 0 === aM ? void 0 : aM[1]) && void 0 !== jM ? jM : 0, CM += null !== (PM = null === bM || void 0 === bM || null === (QM = bM.meshOffset) || void 0 === QM ? void 0 : QM[0]) && void 0 … [truncated]
-         HM -= iM.height * nM.f.TEXT_PLANE_RATIO / 2, MM.hU.GrM(rM.planeEId) && (mM.offset[1] = HM, mM.offset[0] = CM, mM.offset[2] = eM)
+         const AV = VV.sF.HxV(eV.zC);
+         rV += null !== (UV = null === AV || void 0 === AV || null === (yV = AV.meshOffset) || void 0 === yV ? void 0 : yV[1]) && void 0 !== UV ? UV : 0, TV += null !== (pV = null === AV || void 0 === AV || null === (nV = AV.meshOffset) || void 0 === nV ? void 0 : nV[0]) && void 0 … [truncated]
+         rV -= xV.height * QV.e.TEXT_PLANE_RATIO / 2, VV.sF.hxV(eV.planeEId) && (vV.offset[1] = rV, vV.offset[0] = TV, vV.offset[2] = PV)
```

#### 2514. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23868` → after: `L23694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23694) · [Before (L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23868)

```diff
-         return MM.hU.GrM(rM.planeEId) ? (rM.missingPlaneLogged = !1, rM.plane) : (rM.missingPlaneLogged || (0, zM.c)(MM) || (rM.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
+         return VV.sF.hxV(eV.planeEId) ? (eV.missingPlaneLogged = !1, eV.plane) : (eV.missingPlaneLogged || (0, wV.c)(VV) || (eV.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
```

#### 2515. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23872` → after: `L23698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23698) · [Before (L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23872)

```diff
-         const iM = MM.hU.getState(rM.HZ, "hidingMeshManager");
+         const xV = VV.sF.getState(eV.zC, "hidingMeshManager");
```

#### 2516. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23875-L23876` → after: `L23701-L23702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23701-L23702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23701-L23702) · [Before (L23875-L23876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23875-L23876)

```diff
-       return (0, zM.e)(MM.CL.Hk(), (() => {
-         for (const iM of MM.hU.iZ(rM)) {
+       return (0, wV.f)(VV.gZ.dD(), (() => {
+         for (const xV of VV.sF.tC(eV)) {
```

#### 2517. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23906` → after: `L23732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23732) · [Before (L23906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23906)

```diff
-         PU: function(rM, iM) {
+         uF: function(eV, xV) {
```

#### 2518. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23908-L23909` → after: `L23734-L23735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23734-L23735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23734-L23735) · [Before (L23908-L23909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23908-L23909)

```diff
-             (0, mM.p)(MM, iM.planeEId, rM)
-           })), iM.hideNametagSub = OM.i.subscribe("appManagerUpdated|areNametagsHidden", (MM => {
+             (0, vV.s)(VV, xV.planeEId, eV)
+           })), xV.hideNametagSub = JV.h.subscribe("appManagerUpdated|areNametagsHidden", (VV => {
```

#### 2519. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23911` → after: `L23737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23737) · [Before (L23911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23911)

```diff
-           })), iM._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !HM.d.get("areNametagsHidden")), GM(iM), iM.textBoxSub = OM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|multilineTextBox`, (MM => {
+           })), xV._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !rV.b.get("areNametagsHidden")), FV(xV), xV.textBoxSub = JV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV}|multilineTextBox`, (VV => {
```

#### 2520. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23914` → after: `L23740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23740) · [Before (L23914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23914)

```diff
-           iM.unsubscribeKeyPromptChanges = (0, SM.r)((() => {
+           xV.unsubscribeKeyPromptChanges = (0, YV.q)((() => {
```

#### 2521. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23916-L23917` → after: `L23742-L23743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23742-L23743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23742-L23743) · [Before (L23916-L23917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23916-L23917)

```diff
-             null !== (MM = iM.textBox) && void 0 !== MM && null !== (rM = MM.content) && void 0 !== rM && rM.some(aM.nb) && lM(iM, !0)
-           })), MM.eD in MM.rY && rM in MM.rY[MM.eD] && "multilineTextBox" in MM.rY[MM.eD][rM] && (iM.textBox = MM.rY[MM.eD][rM].multilineTextBox), lM(iM)
+             null !== (VV = xV.textBox) && void 0 !== VV && null !== (eV = VV.content) && void 0 !== eV && eV.some(yV.vb) && jV(xV, !0)
+           })), VV.bD in VV.YL && eV in VV.YL[VV.bD] && "multilineTextBox" in VV.YL[VV.bD][eV] && (xV.textBox = VV.YL[VV.bD][eV].multilineTextBox), jV(xV)
```

#### 2522. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23923` → after: `L23749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23749) · [Before (L23923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23923)

```diff
-             iM && ((0, nM.A)(iM, (0, LM.q)(null === (OM = SM.textBox) || void 0 === OM ? void 0 : OM.visibleThroughWalls, MM.aU.canSeeNametagsThroughWalls)), GM(SM), null !== SM.timeSinceAnimationStart && SM.textBox && (SM.timeSinceAnimationStart += rM, SM.toDrawCharCount = Math. … [truncated]
+             xV && ((0, QV.L)(xV, (0, ZV.q)(null === (JV = YV.textBox) || void 0 === JV ? void 0 : JV.visibleThroughWalls, VV.mF.canSeeNametagsThroughWalls)), FV(YV), null !== YV.timeSinceAnimationStart && YV.textBox && (YV.timeSinceAnimationStart += eV, YV.toDrawCharCount = Math. … [truncated]
```

#### 2523. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23926` → after: `L23752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23752) · [Before (L23926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23926)

```diff
-         dU: function(rM, iM) {
+         SF: function(eV, xV) {
```

#### 2524. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23932-L23934` → after: `L23758-L23760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23758-L23760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23758-L23760) · [Before (L23932-L23934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23932-L23934)

```diff
-               const iM = (0, nM.A)(rM, (0, LM.q)(null === (OM = SM.textBox) || void 0 === OM ? void 0 : OM.visibleThroughWalls, MM.aU.canSeeNametagsThroughWalls)),
-                 jM = (0, LM.t)(MM, SM.HZ, SM.planeEId, iM);
-               (0, LM.h)(MM, SM.planeEId), rM.UL.set(SM.sizeCache.width * nM.f.TEXT_PLANE_RATIO * jM, SM.sizeCache.height * nM.f.TEXT_PLANE_RATIO * jM, 1)
+               const xV = (0, QV.L)(eV, (0, ZV.q)(null === (JV = YV.textBox) || void 0 === JV ? void 0 : JV.visibleThroughWalls, VV.mF.canSeeNametagsThroughWalls)),
+                 UV = (0, ZV.t)(VV, YV.zC, YV.planeEId, xV);
+               (0, ZV.k)(VV, YV.planeEId), eV.WZ.set(YV.sizeCache.width * QV.e.TEXT_PLANE_RATIO * UV, YV.sizeCache.height * QV.e.TEXT_PLANE_RATIO * UV, 1)
```

#### 2525. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23938` → after: `L23764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23764) · [Before (L23938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23938)

```diff
-         vW: function(rM, iM) {
+         bR: function(eV, xV) {
```

#### 2526. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23940` → after: `L23766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23766) · [Before (L23940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23940)

```diff
-           MM.hU.deleteEntity(iM.planeEId), OM.i.unsubscribe(iM.textBoxSub), OM.i.unsubscribe(iM.hideNametagSub), null === (SM = iM.unsubscribeKeyPromptChanges) || void 0 === SM || SM.call(iM)
+           VV.sF.deleteEntity(xV.planeEId), JV.h.unsubscribe(xV.textBoxSub), JV.h.unsubscribe(xV.hideNametagSub), null === (YV = xV.unsubscribeKeyPromptChanges) || void 0 === YV || YV.call(xV)
```

#### 2527. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23945` → after: `L23771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23771) · [Before (L23945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23945)

```diff
-   39930: (MM, rM, iM) => {
+   40061: (VV, eV, xV) => {
```

#### 2528. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23949` → after: `L23775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23775) · [Before (L23949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23949)

```diff
-     var OM = iM(347),
+     var JV = xV(380),
```

#### 2529. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23951-L23977` → after: `L23777-L23803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23777-L23803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23777-L23803) · [Before (L23951-L23977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23951-L23977)

```diff
-       jM = iM(38235),
-       aM = iM(39352),
-       PM = iM(38294),
-       nM = iM(39916),
-       QM = iM(39376),
-       zM = iM(22),
-       LM = iM(9419),
-       mM = iM(313),
-       HM = iM(605),
-       hM = iM(3063),
-       JM = iM(83),
-       dM = iM(37722),
-       yM = iM(39471),
-       lM = iM(37761),
-       EM = iM(37624),
-       UM = iM(39910),
- ... (11 more removed lines; see GitHub link above)
+       UV = xV(38445),
+       yV = xV(39509),
+       pV = xV(38497),
+       QV = xV(40048),
+       nV = xV(39534),
+       wV = xV(32),
+       ZV = xV(9428),
+       vV = xV(364),
+       rV = xV(642),
+       kV = xV(3093),
+       bV = xV(99),
+       EV = xV(37943),
+       BV = xV(39624),
+       jV = xV(37985),
+       qV = xV(37849),
+       tV = xV(40045),
+ ... (11 more added lines; see GitHub link above)
```

#### 2530. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L23994` → after: `L23820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23820) · [Before (L23994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L23994)

```diff
-         return Number.isFinite(iM) && iM > 0 ? iM : rM
+         return Number.isFinite(xV) && xV > 0 ? xV : eV
```

#### 2531. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24008` → after: `L23834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23834) · [Before (L24008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24008)

```diff
-         const OM = null !== (iM = MM.applyTo) && void 0 !== iM ? iM : "both";
+         const JV = null !== (xV = VV.applyTo) && void 0 !== xV ? xV : "both";
```

#### 2532. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24014` → after: `L23840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23840) · [Before (L24014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24014)

```diff
-         return "glow" === MM.style ? 3 * rM : Math.ceil(rM / 2) + 1
+         return "glow" === VV.style ? 3 * eV : Math.ceil(eV / 2) + 1
```

#### 2533. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24028` → after: `L23854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23854) · [Before (L24028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24028)

```diff
-         return Math.round(SM().RQ(MM.hU.XE(MM.eD), MM.hU.XE(rM)))
+         return Math.round(YV().Dn(VV.sF.YF(VV.bD), VV.sF.YF(eV)))
```

#### 2534. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24032-L24033` → after: `L23858-L23859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23858-L23859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23858-L23859) · [Before (L24032-L24033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24032-L24033)

```diff
-         const rM = xM(MM.HZ),
-           iM = (0, EM.c)(rM, MM._lastUpdateDist, MM._lastUpdateTime);
+         const eV = LV(VV.zC),
+           xV = (0, qV.e)(eV, VV._lastUpdateDist, VV._lastUpdateTime);
```

#### 2535. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24039` → after: `L23865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23865) · [Before (L24039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24039)

```diff
-         return rM !== MM.eD && "Player" === iM.getLifeformType(rM) && (0, GM.f)(iM.getRawEntityName(rM), CM.c.shown)
+         return eV !== VV.bD && "Player" === xV.getLifeformType(eV) && (0, FV.e)(xV.getRawEntityName(eV), TV.e.shown)
```

#### 2536. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24045-L24047` → after: `L23871-L23873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23871-L23873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23871-L23873) · [Before (L24045-L24047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24045-L24047)

```diff
-         const iM = (0, UM.g)(MM.content, (0, UM.w)()),
-           SM = (0, UM.g)(MM.subtitle, (0, UM.w)()),
-           jM = (0, UM.h)(rM),
+         const xV = (0, tV.i)(VV.content, (0, tV.I)()),
+           YV = (0, tV.i)(VV.subtitle, (0, tV.I)()),
+           UV = (0, tV.k)(eV),
```

#### 2537. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24050` → after: `L23876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23876) · [Before (L24050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24050)

```diff
-           nM = Math.max(UM.f.VERTICAL_PADDING, function(MM) {
+           QV = Math.max(tV.e.VERTICAL_PADDING, function(VV) {
```

#### 2538. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24052` → after: `L23878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23878) · [Before (L24052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24052)

```diff
-             return "never" === (null !== (rM = null === (iM = MM.healthbar) || void 0 === iM ? void 0 : iM.display) && void 0 !== rM ? rM : "onDamage") ? 0 : OM(MM) + NM(MM)
+             return "never" === (null !== (eV = null === (xV = VV.healthbar) || void 0 === xV ? void 0 : xV.display) && void 0 !== eV ? eV : "onDamage") ? 0 : JV(VV) + hV(VV)
```

#### 2539. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24057` → after: `L23883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23883) · [Before (L24057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24057)

```diff
-           return rM ? YM(rM) + UM.f.HORIZONTAL_PADDING / 2 : 0
+           return eV ? cV(eV) + tV.e.HORIZONTAL_PADDING / 2 : 0
```

#### 2540. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24060` → after: `L23886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23886) · [Before (L24060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24060)

```diff
-           const MM = Math.max(iM.width, SM.width) + UM.f.HORIZONTAL_PADDING;
+           const VV = Math.max(xV.width, YV.width) + tV.e.HORIZONTAL_PADDING;
```

#### 2541. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24071` → after: `L23897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23897) · [Before (L24071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24071)

```diff
-           QM = (0, jM.k)(nM),
+           nV = (0, UV.i)(QV),
```

#### 2542. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24082` → after: `L23908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23908) · [Before (L24082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24082)

```diff
-               LM = wM.e.getTexture(PM, tM.f.ICON).url,
+               ZV = NV.b.getTexture(pV, XV.f.ICON).url,
```

#### 2543. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24096-L24097` → after: `L23922-L23923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23922-L23923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23922-L23923) · [Before (L24096-L24097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24096-L24097)

```diff
-         const dM = (PM.width.full - PM.width.content) / 2 + UM.f.HORIZONTAL_PADDING / 2;
-         if ((0, UM.o)(MM.content, dM, JM, PM.height.content, nM, LM), MM.subtitle) {
+         const EV = (pV.width.full - pV.width.content) / 2 + tV.e.HORIZONTAL_PADDING / 2;
+         if ((0, tV.u)(VV.content, EV, bV, pV.height.content, QV, ZV), VV.subtitle) {
```

#### 2544. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24099-L24100` → after: `L23925-L23926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23925-L23926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23925-L23926) · [Before (L24099-L24100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24099-L24100)

```diff
-           const rM = (PM.width.full - PM.width.subtitle) / 2 + UM.f.HORIZONTAL_PADDING / 2;
-           QM.fillStyle = MM.subtitleBackgroundColor, QM.fillRect(HM, JM, mM, PM.height.subtitle), (0, UM.o)(MM.subtitle, rM, JM, PM.height.subtitle, nM, LM)
+           const eV = (pV.width.full - pV.width.subtitle) / 2 + tV.e.HORIZONTAL_PADDING / 2;
+           nV.fillStyle = VV.subtitleBackgroundColor, nV.fillRect(rV, bV, vV, pV.height.subtitle), (0, tV.u)(VV.subtitle, eV, bV, pV.height.subtitle, QV, ZV)
```

#### 2545. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24117` → after: `L23943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23943) · [Before (L24117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24117)

```diff
-             const jM = [...SM && SM.length > 0 ? SM : rM].sort(((MM, rM) => MM.healthFraction - rM.healthFraction)),
+             const UV = [...YV && YV.length > 0 ? YV : eV].sort(((VV, eV) => VV.healthFraction - eV.healthFraction)),
```

#### 2546. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24119` → after: `L23945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR23945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L23945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L23945) · [Before (L24119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24119)

```diff
-             return (null !== aM && void 0 !== aM ? aM : jM[jM.length - 1]).colour
+             return (null !== yV && void 0 !== yV ? yV : UV[UV.length - 1]).colour
```

#### 2547. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24179` → after: `L24005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24005) · [Before (L24179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24179)

```diff
-         null !== rM.planeEId && (MM.hU.deleteEntity(rM.planeEId), rM.planeEId = null, rM._planeMesh = null, rM._planeTexture = null, rM._lightState = null, rM._scaleX = NaN, rM._scaleY = NaN, rM._offsetY = NaN)
+         null !== eV.planeEId && (VV.sF.deleteEntity(eV.planeEId), eV.planeEId = null, eV._planeMesh = null, eV._planeTexture = null, eV._lightState = null, eV._scaleX = NaN, eV._scaleY = NaN, eV._offsetY = NaN)
```

#### 2548. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24189-L24190` → after: `L24015-L24016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24015-L24016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24015-L24016) · [Before (L24189-L24190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24189-L24190)

```diff
-           } = (0, UM.i)(MM, rM.HZ, `${rM.HZ}NameTag`, 1, 1, !0);
-           rM.planeEId = iM, rM._planeMesh = OM, rM._planeTexture = jM, rM._lightState = aM, MM.hU.ziM(iM).diM = (iM, OM) => {
+           } = (0, tV.o)(VV, eV.zC, `${eV.zC}NameTag`, 1, 1, !0);
+           eV.planeEId = xV, eV._planeMesh = JV, eV._planeTexture = UV, eV._lightState = yV, VV.sF.zJV(xV).iJV = (xV, JV) => {
```

#### 2549. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24193` → after: `L24019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24019) · [Before (L24193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24193)

```diff
-               const QM = null !== (iM = null === (OM = MM.rY[MM.eD][rM.HZ]) || void 0 === OM ? void 0 : OM.meshScaling) && void 0 !== iM ? iM : {},
+               const nV = null !== (xV = null === (JV = VV.YL[VV.bD][eV.zC]) || void 0 === JV ? void 0 : JV.meshScaling) && void 0 !== xV ? xV : {},
```

#### 2550. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24196-L24199` → after: `L24022-L24025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24022-L24025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24022-L24025) · [Before (L24196-L24199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24196-L24199)

```diff
-                 mM = zr(rM.HZ),
-                 HM = (0, hM.b)().Aq(rM.HZ);
-               let JM = (null !== (jM = rM.nameYOffset) && void 0 !== jM ? jM : WM.b) * HM;
-               const dM = MM.hU.grM(rM.HZ);
+                 vV = we(eV.zC),
+                 rV = (0, kV.b)().N_(eV.zC);
+               let bV = (null !== (UV = eV.nameYOffset) && void 0 !== UV ? UV : RV.d) * rV;
+               const EV = VV.sF.HxV(eV.zC);
```

#### 2551. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24201` → after: `L24027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24027) · [Before (L24201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24201)

```diff
-                 const MM = (0, hM.b)().getLifeformType(rM.HZ);
+                 const VV = (0, kV.b)().getLifeformType(eV.zC);
```

#### 2552. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24203` → after: `L24029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24029) · [Before (L24203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24203)

```diff
-                 if (null !== MM) JM += (null !== (lM = null === (EM = (0, yM.d)(MM).poseNameRise) || void 0 === EM ? void 0 : EM[dM.pose]) && void 0 !== lM ? lM : 0) * HM
+                 if (null !== VV) bV += (null !== (jV = null === (qV = (0, BV.d)(VV).poseNameRise) || void 0 === qV ? void 0 : qV[EV.pose]) && void 0 !== jV ? jV : 0) * rV
```

#### 2553. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24205-L24206` → after: `L24031-L24032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24031-L24032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24031-L24032) · [Before (L24205-L24206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24205-L24206)

```diff
-               if (JM += null !== (aM = null === dM || void 0 === dM || null === (PM = dM.meshOffset) || void 0 === PM ? void 0 : PM[1]) && void 0 !== aM ? aM : 0, mM) {
-                 const iM = .23 * (SM().RQ(MM.hU.XE(MM.eD), MM.hU.XE(rM.HZ)) - nM.f) / nM.f;
+               if (bV += null !== (yV = null === EV || void 0 === EV || null === (pV = EV.meshOffset) || void 0 === pV ? void 0 : pV[1]) && void 0 !== yV ? yV : 0, vV) {
+                 const xV = .23 * (YV().Dn(VV.sF.YF(VV.bD), VV.sF.YF(eV.zC)) - QV.d) / QV.d;
```

#### 2554. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24215-L24218` → after: `L24041-L24044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24041-L24044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24041-L24044) · [Before (L24215-L24218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24215-L24218)

```diff
-         (0, jM.I)(OM, aM.width, aM.height), cM(rM, UM.f.TEXT_PLANE_RATIO * aM.width, UM.f.TEXT_PLANE_RATIO * aM.height), rM._layoutHeight = UM.f.TEXT_PLANE_RATIO * aM.height;
-         const PM = (0, UM.g)(iM.content, (0, UM.w)()),
-           QM = (0, UM.g)(iM.subtitle, (0, UM.w)()),
-           zM = (0, UM.h)(rM.effects);
+         (0, UV.y)(JV, yV.width, yV.height), OV(eV, tV.e.TEXT_PLANE_RATIO * yV.width, tV.e.TEXT_PLANE_RATIO * yV.height), eV._layoutHeight = tV.e.TEXT_PLANE_RATIO * yV.height;
+         const pV = (0, tV.i)(xV.content, (0, tV.I)()),
+           nV = (0, tV.i)(xV.subtitle, (0, tV.I)()),
+           wV = (0, tV.k)(eV.effects);
```

#### 2555. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24222-L24223` → after: `L24048-L24049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24048-L24049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24048-L24049) · [Before (L24222-L24223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24222-L24223)

```diff
-             content: PM.width + UM.f.HORIZONTAL_PADDING,
-             subtitle: QM.width + UM.f.HORIZONTAL_PADDING,
+             content: pV.width + tV.e.HORIZONTAL_PADDING,
+             subtitle: nV.width + tV.e.HORIZONTAL_PADDING,
```

#### 2556. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24236` → after: `L24062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24062) · [Before (L24236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24236)

```diff
-         const OM = mr(MM.HZ, rM),
+         const JV = ve(VV.zC, eV),
```

#### 2557. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24240-L24241` → after: `L24066-L24067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24066-L24067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24066-L24067) · [Before (L24240-L24241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24240-L24241)

```diff
-           jM = OM * UM.f.TEXT_PLANE_RATIO * SM.height.full;
-         return cM(MM, OM * UM.f.TEXT_PLANE_RATIO * SM.width.full * iM, jM * iM), jM
+           UV = JV * tV.e.TEXT_PLANE_RATIO * YV.height.full;
+         return OV(VV, JV * tV.e.TEXT_PLANE_RATIO * YV.width.full * xV, UV * xV), UV
```

#### 2558. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24245` → after: `L24071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24071) · [Before (L24245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24245)

```diff
-         MM._scaleX === rM && MM._scaleY === iM || (MM._scaleX = rM, MM._scaleY = iM, MM._planeMesh.UL.set(rM, iM, 1))
+         VV._scaleX === eV && VV._scaleY === xV || (VV._scaleX = eV, VV._scaleY = xV, VV._planeMesh.WZ.set(eV, xV, 1))
```

#### 2559. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24250` → after: `L24076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24076) · [Before (L24250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24250)

```diff
-         return null !== (rM = MM.name) && void 0 !== rM ? rM : (0, hM.b)().getEntityName(MM.HZ, !JM.featureFlags.canSeeRealPlayerNames)
+         return null !== (eV = VV.name) && void 0 !== eV ? eV : (0, kV.b)().getEntityName(VV.zC, !bV.featureFlags.canSeeRealPlayerNames)
```

#### 2560. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24264` → after: `L24090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24090) · [Before (L24264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24264)

```diff
-           (rM = rM ? JSON.parse(JSON.stringify(rM)) : {}).content ? rM.content = (0, UM.q)(rM.content, UM.f.DEFAULT_FONT_SIZE) : rM.content = [{
+           (eV = eV ? JSON.parse(JSON.stringify(eV)) : {}).content ? eV.content = (0, tV.y)(eV.content, tV.e.DEFAULT_FONT_SIZE) : eV.content = [{
```

#### 2561. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24269` → after: `L24095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24095) · [Before (L24269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24269)

```diff
-           const PM = HM.x[OM];
+           const pV = rV.t[JV];
```

#### 2562. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24271` → after: `L24097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24097) · [Before (L24271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24271)

```diff
-             for (const nM of rM.content)(0, UM.s)(nM) && (nM.style ? (0, mM.Ub)(nM.style) || (nM.style.color = PM) : nM.style = {
+             for (const QV of eV.content)(0, tV.F)(QV) && (QV.style ? (0, vV.Yb)(QV.style) || (QV.style.color = pV) : QV.style = {
```

#### 2563. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24274` → after: `L24100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24100) · [Before (L24274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24274)

```diff
-           if (FM(MM) ? (rM.content.push(UM.b), BM.add(MM)) : BM.delete(MM), zr(MM)) {
+           if (mV(VV) ? (eV.content.push(tV.c), KV.add(VV)) : KV.delete(VV), we(VV)) {
```

#### 2564. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24277` → after: `L24103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24103) · [Before (L24277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24277)

```diff
-               str: ` ${iM}m`,
+               str: ` ${xV}m`,
```

#### 2565. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24283-L24284` → after: `L24109-L24110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24109-L24110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24109-L24110) · [Before (L24283-L24284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24283-L24284)

```diff
-           return rM.subtitle && (rM.subtitle = (0, UM.q)(rM.subtitle, UM.f.DEFAULT_SUBTITLE_FONT_SIZE)), rM.backgroundColor = null !== (SM = rM.backgroundColor) && void 0 !== SM ? SM : "#22283b", rM.subtitleBackgroundColor = null !== (jM = rM.subtitleBackgroundColor) && void 0 != … [truncated]
-         }(rM.HZ, rM.nameTagInfo, iM, rM.nameColour);
+           return eV.subtitle && (eV.subtitle = (0, tV.y)(eV.subtitle, tV.e.DEFAULT_SUBTITLE_FONT_SIZE)), eV.backgroundColor = null !== (YV = eV.backgroundColor) && void 0 !== YV ? YV : "#22283b", eV.subtitleBackgroundColor = null !== (UV = eV.subtitleBackgroundColor) && void 0 != … [truncated]
+         }(eV.zC, eV.nameTagInfo, xV, eV.nameColour);
```

#### 2566. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24287` → after: `L24113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24113) · [Before (L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24287)

```diff
-             const iM = (0, jM.k)(MM._planeTexture);
+             const xV = (0, UV.i)(VV._planeTexture);
```

#### 2567. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24290-L24291` → after: `L24116-L24117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24116-L24117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24116-L24117) · [Before (L24290-L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24290-L24291)

```diff
-               const SM = null !== (iM = null === (OM = rM.healthbar) || void 0 === OM ? void 0 : OM.display) && void 0 !== iM ? iM : "onDamage";
-               return "never" === SM ? null : "always" === SM ? null !== (jM = MM.fj) && void 0 !== jM ? jM : 1 : MM.healthTimeout ? MM.fj : null;
+               const YV = null !== (xV = null === (JV = eV.healthbar) || void 0 === JV ? void 0 : JV.display) && void 0 !== xV ? xV : "onDamage";
+               return "never" === YV ? null : "always" === YV ? null !== (UV = VV.cU) && void 0 !== UV ? UV : 1 : VV.healthTimeout ? VV.cU : null;
```

#### 2568. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24295-L24297` → after: `L24121-L24123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24121-L24123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24121-L24123) · [Before (L24295-L24297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24295-L24297)

```diff
-       }(0, GM.d)((() => {
-         for (const MM of XM) FM(MM.HZ) !== BM.has(MM.HZ) && Sr(MM)
-       })), (0, bM.e)(MM.CL.Hk(), (() => {
+       }(0, FV.b)((() => {
+         for (const VV of HV) mV(VV.zC) !== KV.has(VV.zC) && Ye(VV)
+       })), (0, AV.f)(VV.gZ.dD(), (() => {
```

#### 2569. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24313` → after: `L24139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24139) · [Before (L24313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24313)

```diff
-         return !!(null === (iM = MM.hU.ziM(rM)) || void 0 === iM ? void 0 : iM.zh)
+         return !!(null === (xV = VV.sF.zJV(eV)) || void 0 === xV ? void 0 : xV.zk)
```

#### 2570. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24321` → after: `L24147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24147) · [Before (L24321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24321)

```diff
-             MM.GJ("Error updating a nametag", rM)
+             VV.hb("Error updating a nametag", eV)
```

#### 2571. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24333` → after: `L24159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24159) · [Before (L24333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24333)

```diff
-         return null !== (iM = MM.eD !== rM && (null === (OM = MM.rY[MM.eD][rM]) || void 0 === OM ? void 0 : OM.hasPriorityNametag)) && void 0 !== iM && iM
+         return null !== (xV = VV.bD !== eV && (null === (JV = VV.YL[VV.bD][eV]) || void 0 === JV ? void 0 : JV.hasPriorityNametag)) && void 0 !== xV && xV
```

#### 2572. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24344` → after: `L24170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24170) · [Before (L24344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24344)

```diff
-         if (SM === jM && !wM.e.getTexture(jM, tM.f.ICON).notFound) {
+         if (YV === UV && !NV.b.getTexture(UV, XV.f.ICON).notFound) {
```

#### 2573. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24362` → after: `L24188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24188) · [Before (L24362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24362)

```diff
-         zr(rM) && iM > nM.f && (OM = nM.f);
+         we(eV) && xV > QV.d && (JV = QV.d);
```

#### 2574. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24369` → after: `L24195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24195) · [Before (L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24369)

```diff
-         const jM = MM.CL.engine.getRenderWidth();
+         const UV = VV.gZ.engine.getRenderWidth();
```

#### 2575. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24376-L24384` → after: `L24202-L24210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24202-L24210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24202-L24210) · [Before (L24376-L24384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24376-L24384)

```diff
-         const OM = MM.hU.grM(rM.HZ),
-           jM = zr(rM.HZ),
-           zM = (0, UM.A)(rM._planeMesh, MM.aU.canSeeNametagsThroughWalls, null === OM || void 0 === OM ? void 0 : OM.crouching, jM),
-           LM = MM.hU.jK(rM.planeEId).bq,
-           mM = MM.camera.oq(),
-           HM = SM().RQ(LM, mM),
-           hM = MM.hU.GrM(rM.planeEId).offset,
-           JM = iM ? (0, nM.t)(MM, rM.HZ, rM.planeEId, zM) : 1;
-         if (jM && zM && HM > nM.f) {
+         const JV = VV.sF.HxV(eV.zC),
+           UV = we(eV.zC),
+           wV = (0, tV.L)(eV._planeMesh, VV.mF.canSeeNametagsThroughWalls, null === JV || void 0 === JV ? void 0 : JV.crouching, UV),
+           ZV = VV.sF.U_(eV.planeEId).P_,
+           vV = VV.camera.A_(),
+           rV = YV().Dn(ZV, vV),
+           kV = VV.sF.hxV(eV.planeEId).offset,
+           bV = xV ? (0, QV.t)(VV, eV.zC, eV.planeEId, wV) : 1;
+         if (UV && wV && rV > QV.d) {
```

#### 2576. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24387` → after: `L24213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24213) · [Before (L24387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24387)

```diff
-           const rM = SM().scale(MM, MM, nM.f),
+           const eV = YV().scale(VV, VV, QV.d),
```

#### 2577. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24391` → after: `L24217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24217) · [Before (L24391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24391)

```diff
-         iM && (0, nM.h)(MM, rM.planeEId);
+         xV && (0, QV.k)(VV, eV.planeEId);
```

#### 2578. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24394` → after: `L24220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24220) · [Before (L24394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24394)

```diff
-         if (rM._layoutHeight = yM, MM.CL.DJ && rM._planeMesh.isEnabled() && rM._planeMesh.isVisible) {
+         if (eV._layoutHeight = BV, VV.gZ.eE && eV._planeMesh.isEnabled() && eV._planeMesh.isVisible) {
```

#### 2579. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24396` → after: `L24222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24222) · [Before (L24396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24396)

```diff
-           const iM = (0, aM.d)(MM, rM.HZ),
+           const xV = (0, yV.f)(VV, eV.zC),
```

#### 2580. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24400-L24401` → after: `L24226-L24227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24226-L24227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24226-L24227) · [Before (L24400-L24401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24400-L24401)

```diff
-           const nM = gM.d.clamp(OM / SM, 0, 1),
-             zM = gM.d.lerp(null !== (EM = jM) && void 0 !== EM ? EM : ar, Pr, nM);
+           const QV = MV.b.clamp(JV / YV, 0, 1),
+             wV = MV.b.lerp(null !== (qV = UV) && void 0 !== qV ? qV : ye, pe, QV);
```

#### 2581. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24403-L24404` → after: `L24229-L24230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24229-L24230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24229-L24230) · [Before (L24403-L24404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24403-L24404)

```diff
-           const LM = (0, QM.applyHeldLightTint)(MM, rM.HZ, iM, oM);
-           oM[0] = Math.max(LM[0], jM), oM[1] = Math.max(LM[1], jM), oM[2] = Math.max(LM[2], jM), oM[3] = Math.max(LM[3], jM), (0, PM.h)(rM._lightState, oM)
+           const ZV = (0, nV.applyHeldLightTint)(VV, eV.zC, xV, aV);
+           aV[0] = Math.max(ZV[0], UV), aV[1] = Math.max(ZV[1], UV), aV[2] = Math.max(ZV[2], UV), aV[3] = Math.max(ZV[3], UV), (0, pV.o)(eV._lightState, aV)
```

#### 2582. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24418` → after: `L24244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24244) · [Before (L24418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24418)

```diff
-           fj: null,
+           cU: null,
```

#### 2583. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24450-L24451` → after: `L24276-L24277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24276-L24277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24276-L24277) · [Before (L24450-L24451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24450-L24451)

```diff
-         PU: function(rM, iM) {
-           iM.effects = {}, XM.add(iM), iM._lightId = `nt_${rM}`, iM._visibilityCombinator = new lM.d((rM => {
+         uF: function(eV, xV) {
+           xV.effects = {}, HV.add(xV), xV._lightId = `nt_${eV}`, xV._visibilityCombinator = new jV.d((eV => {
```

#### 2584. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24453-L24455` → after: `L24279-L24281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24279-L24281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24279-L24281) · [Before (L24453-L24455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24453-L24455)

```diff
-             const OM = MM.hU.KrM(iM.HZ);
-             OM ? OM.meshEnabledCombinator.forceUpdate() : (0, RM.p)(MM, iM.planeEId, rM)
-           })), iM.entityMeshScalingSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|meshScaling`, (MM => {
+             const JV = VV.sF.rJV(xV.zC);
+             JV ? JV.meshEnabledCombinator.forceUpdate() : (0, GV.s)(VV, xV.planeEId, eV)
+           })), xV.entityMeshScalingSub = wV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV}|meshScaling`, (VV => {
```

#### 2585. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24457` → after: `L24283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24283) · [Before (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24457)

```diff
-           })), iM.nameTagInfoSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|nameTagInfo`, (MM => {
+           })), xV.nameTagInfoSub = wV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV}|nameTagInfo`, (VV => {
```

#### 2586. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24459` → after: `L24285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24285) · [Before (L24459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24459)

```diff
-           })), iM.priorityNametagSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|hasPriorityNametag`, (MM => {
+           })), xV.priorityNametagSub = wV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV}|hasPriorityNametag`, (VV => {
```

#### 2587. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24461` → after: `L24287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24287) · [Before (L24461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24461)

```diff
-           })), iM.rankUpdateSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|ranks`, (MM => {
+           })), xV.rankUpdateSub = wV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV}|ranks`, (VV => {
```

#### 2588. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24463` → after: `L24289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24289) · [Before (L24463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24463)

```diff
-           })), iM.hideNameSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|hideNameSeed`, (MM => {
+           })), xV.hideNameSub = wV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV}|hideNameSeed`, (VV => {
```

#### 2589. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24465` → after: `L24291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24291) · [Before (L24465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24465)

```diff
-           })), iM.nameChangedSub = zM.i.subscribe(`entityNameChanged|${rM}`, (() => {
+           })), xV.nameChangedSub = wV.h.subscribe(`entityNameChanged|${eV}`, (() => {
```

#### 2590. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24467` → after: `L24293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24293) · [Before (L24467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24467)

```diff
-           })), iM.nameColourSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|nameColour`, (MM => {
+           })), xV.nameColourSub = wV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV}|nameColour`, (VV => {
```

#### 2591. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24469` → after: `L24295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24295) · [Before (L24469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24469)

```diff
-           })), iM.effectInfoSub = zM.i.subscribe("EffectUpdate", (MM => {
+           })), xV.effectInfoSub = wV.h.subscribe("EffectUpdate", (VV => {
```

#### 2592. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24471-L24472` → after: `L24297-L24298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24297-L24298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24297-L24298) · [Before (L24471-L24472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24471-L24472)

```diff
-             (null === (OM = MM.showInNametag) || void 0 === OM || OM) && (0, dM.e)(MM.Pi) === rM && Lr(iM, MM)
-           })), iM.removeEffectSub = zM.i.subscribe("RemoveEffect", (MM => {
+             (null === (JV = VV.showInNametag) || void 0 === JV || JV) && (0, EV.c)(VV.bx) === eV && Ze(xV, VV)
+           })), xV.removeEffectSub = wV.h.subscribe("RemoveEffect", (VV => {
```

#### 2593. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24474-L24475` → after: `L24300-L24301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24300-L24301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24300-L24301) · [Before (L24474-L24475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24474-L24475)

```diff
-             (0, dM.e)(MM.Pi) === rM && (clearTimeout(null === (OM = iM.effects[MM.name]) || void 0 === OM ? void 0 : OM.timeout), delete iM.effects[MM.name], Sr(iM))
-           })), iM.leaveGameSub = zM.i.subscribe("leaveGame", (() => {
+             (0, EV.c)(VV.bx) === eV && (clearTimeout(null === (JV = xV.effects[VV.name]) || void 0 === JV ? void 0 : JV.timeout), delete xV.effects[VV.name], Ye(xV))
+           })), xV.leaveGameSub = wV.h.subscribe("leaveGame", (() => {
```

#### 2594. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24478` → after: `L24304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24304) · [Before (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24478)

```diff
-           })), iM.lifeformHurtSub = zM.i.subscribe("lifeformHurt", (MM => {
+           })), xV.lifeformHurtSub = wV.h.subscribe("lifeformHurt", (VV => {
```

#### 2595. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24481` → after: `L24307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24307) · [Before (L24481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24481)

```diff
-               fj: SM
+               cU: YV
```

#### 2596. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24483` → after: `L24309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24309) · [Before (L24483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24483)

```diff
-             (0, dM.e)(OM) === rM && (clearTimeout(iM.healthTimeout), iM.healthTimeout = setTimeout((() => {
+             (0, EV.c)(JV) === eV && (clearTimeout(xV.healthTimeout), xV.healthTimeout = setTimeout((() => {
```

#### 2597. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24485-L24486` → after: `L24311-L24312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24311-L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24311-L24312) · [Before (L24485-L24486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24485-L24486)

```diff
-             }), 2e3), iM.fj = SM, Sr(iM))
-           })), iM.lifeformHealthChangedSub = zM.i.subscribe("lifeformHealthChanged", (OM => {
+             }), 2e3), xV.cU = YV, Ye(xV))
+           })), xV.lifeformHealthChangedSub = wV.h.subscribe("lifeformHealthChanged", (JV => {
```

#### 2598. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24489-L24490` → after: `L24315-L24316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24315-L24316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24315-L24316) · [Before (L24489-L24490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24489-L24490)

```diff
-               Mr: jM,
-               rr: aM
+               ee: UV,
+               xe: yV
```

#### 2599. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24492` → after: `L24318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24318) · [Before (L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24492)

```diff
-             if ((0, dM.e)(SM) !== rM || null === aM) return;
+             if ((0, EV.c)(YV) !== eV || null === yV) return;
```

#### 2600. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24495-L24496` → after: `L24321-L24322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24321-L24322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24321-L24322) · [Before (L24495-L24496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24495-L24496)

```diff
-             }), 2e3)), iM.fj = aM, MM.bloxd.client.gameRecorder.recordLifeformHealth(SM, jM, aM), Sr(iM)
-           })), iM.hideNametagSub = zM.i.subscribe("appManagerUpdated|areNametagsHidden", (MM => {
+             }), 2e3)), xV.cU = yV, VV.bloxd.client.gameRecorder.recordLifeformHealth(YV, UV, yV), Ye(xV)
+           })), xV.hideNametagSub = wV.h.subscribe("appManagerUpdated|areNametagsHidden", (VV => {
```

#### 2601. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24499` → after: `L24325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24325) · [Before (L24499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24499)

```diff
-           iM.unsubscribeKeyPromptChanges = (0, LM.r)((() => {
+           xV.unsubscribeKeyPromptChanges = (0, ZV.q)((() => {
```

#### 2602. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24501-L24504` → after: `L24327-L24330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24327-L24330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24327-L24330) · [Before (L24501-L24504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24501-L24504)

```diff
-             (null !== (MM = iM.nameTagInfo) && void 0 !== MM && null !== (rM = MM.content) && void 0 !== rM && rM.some(mM.nb) || null !== (OM = iM.nameTagInfo) && void 0 !== OM && null !== (SM = OM.subtitle) && void 0 !== SM && SM.some(mM.nb)) && Sr(iM)
-           })), iM._visibilityCombinator.setBooleanType("nametagEnabled", !uM.d.get("areNametagsHidden"));
-           const OM = (0, pM.b)(MM);
-           iM.fj = OM.getHealthFrac(rM);
+             (null !== (VV = xV.nameTagInfo) && void 0 !== VV && null !== (eV = VV.content) && void 0 !== eV && eV.some(vV.vb) || null !== (JV = xV.nameTagInfo) && void 0 !== JV && null !== (YV = JV.subtitle) && void 0 !== YV && YV.some(vV.vb)) && Ye(xV)
+           })), xV._visibilityCombinator.setBooleanType("nametagEnabled", !zV.b.get("areNametagsHidden"));
+           const JV = (0, WV.c)(VV);
+           xV.cU = JV.getHealthFrac(eV);
```

#### 2603. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24514` → after: `L24340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24340) · [Before (L24514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24514)

```diff
-           MM.eD in MM.rY && rM in MM.rY[MM.eD] && ("nameTagInfo" in MM.rY[MM.eD][rM] && (iM.nameTagInfo = MM.rY[MM.eD][rM].nameTagInfo), "nameColour" in MM.rY[MM.eD][rM] && (iM.nameColour = MM.rY[MM.eD][rM].nameColour)), Sr(iM)
+           VV.bD in VV.YL && eV in VV.YL[VV.bD] && ("nameTagInfo" in VV.YL[VV.bD][eV] && (xV.nameTagInfo = VV.YL[VV.bD][eV].nameTagInfo), "nameColour" in VV.YL[VV.bD][eV] && (xV.nameColour = VV.YL[VV.bD][eV].nameColour)), Ye(xV)
```

#### 2604. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24519` → after: `L24345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24345) · [Before (L24519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24519)

```diff
-             const MM = jr(iM.HZ);
+             const VV = Ue(xV.zC);
```

#### 2605. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24525` → after: `L24351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24351) · [Before (L24525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24525)

```diff
-             zr(iM.HZ) && vM(iM) && Sr(iM)
+             we(xV.zC) && fV(xV) && Ye(xV)
```

#### 2606. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24528` → after: `L24354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24354) · [Before (L24528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24528)

```diff
-         dU: function(MM, rM) {
+         SF: function(VV, eV) {
```

#### 2607. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24531` → after: `L24357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24357) · [Before (L24531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24531)

```diff
-         vW: function(MM, rM) {
+         bR: function(VV, eV) {
```

#### 2608. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24533` → after: `L24359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24359) · [Before (L24533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24533)

```diff
-           qM(rM), XM.delete(rM), BM.delete(rM.HZ), zM.i.unsubscribe(rM.entityMeshScalingSub), zM.i.unsubscribe(rM.nameTagInfoSub), zM.i.unsubscribe(rM.priorityNametagSub), zM.i.unsubscribe(rM.rankUpdateSub), zM.i.unsubscribe(rM.hideNameSub), zM.i.unsubscribe(rM.nameChangedSub), z … [truncated]
+           SV(eV), HV.delete(eV), KV.delete(eV.zC), wV.h.unsubscribe(eV.entityMeshScalingSub), wV.h.unsubscribe(eV.nameTagInfoSub), wV.h.unsubscribe(eV.priorityNametagSub), wV.h.unsubscribe(eV.rankUpdateSub), wV.h.unsubscribe(eV.hideNameSub), wV.h.unsubscribe(eV.nameChangedSub), w … [truncated]
```

#### 2609. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24544` → after: `L24370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24370) · [Before (L24544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24544)

```diff
-   39937: (MM, rM, iM) => {
+   40078: (VV, eV, xV) => {
```

#### 2610. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24548-L24551` → after: `L24374-L24377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24374-L24377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24374-L24377) · [Before (L24548-L24551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24548-L24551)

```diff
-     var OM = iM(38878),
-       SM = iM(38481),
-       jM = iM(38318),
-       aM = iM(347),
+     var JV = xV(39055),
+       YV = xV(38690),
+       UV = xV(38523),
+       yV = xV(380),
```

#### 2611. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24553-L24555` → after: `L24379-L24381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24379-L24381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24379-L24381) · [Before (L24553-L24555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24553-L24555)

```diff
-       nM = iM(38594),
-       QM = iM(38205);
-     const zM = iM(39939).c,
+       QV = xV(38780),
+       nV = xV(38411);
+     const wV = xV(40084).c,
```

#### 2612. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24560-L24561` → after: `L24386-L24387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24386-L24387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24386-L24387) · [Before (L24560-L24561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24560-L24561)

```diff
-       const rM = MM.CL.Hk(),
-         iM = (0, OM.l)(MM.CL, "phBox", (0, SM.c)({
+       const eV = VV.gZ.dD(),
+         xV = (0, JV.r)(VV.gZ, "phBox", (0, YV.d)({
```

#### 2613. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24566` → after: `L24392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24392) · [Before (L24566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24566)

```diff
-       iM.material = (0, QM.d)({
+       xV.material = (0, nV.e)({
```

#### 2614. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24568` → after: `L24394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24394) · [Before (L24568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24568)

```diff
-         YJ: rM,
+         yE: eV,
```

#### 2615. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24576` → after: `L24402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24402) · [Before (L24576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24576)

```diff
-       }).mirror, iM.visibility = .5, iM.kR(!1);
+       }).mirror, xV.visibility = .5, xV.pW(!1);
```

#### 2616. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24586` → after: `L24412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24412) · [Before (L24586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24586)

```diff
-         PU: function(rM, OM) {
+         uF: function(eV, JV) {
```

#### 2617. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24588` → after: `L24414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24414) · [Before (L24588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24588)

```diff
-           OM.instance = iM.createInstance(`mesh overlay ${rM}`), MM.CL.vJ(OM.instance, !1, null), OM.lastFlash = Date.now(), null === (SM = MM.hU.KrM(rM)) || void 0 === SM || SM.meshEnabledCombinator.forceUpdate()
+           JV.instance = xV.createInstance(`mesh overlay ${eV}`), VV.gZ.wE(JV.instance, !1, null), JV.lastFlash = Date.now(), null === (YV = VV.sF.rJV(eV)) || void 0 === YV || YV.meshEnabledCombinator.forceUpdate()
```

#### 2618. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24590` → after: `L24416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24416) · [Before (L24590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24590)

```diff
-         vW: function(MM, rM) {
+         bR: function(VV, eV) {
```

#### 2619. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24593` → after: `L24419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24419) · [Before (L24593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24593)

```diff
-         dU: function(rM, iM) {
+         SF: function(eV, xV) {
```

#### 2620. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24596-L24597` → after: `L24422-L24423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24422-L24423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24422-L24423) · [Before (L24596-L24597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24596-L24597)

```diff
-             const rM = (0, nM.getCaughtUpMeshRotation)(MM, aM.HZ).renderRotation,
-               iM = MM.hU.jK(aM.HZ).bq;
+             const eV = (0, QV.getCaughtUpMeshRotation)(VV, yV.zC).renderRotation,
+               xV = VV.sF.U_(yV.zC).P_;
```

#### 2621. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24599` → after: `L24425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24425) · [Before (L24599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24599)

```diff
-             if (PM().set(hM, iM[0], iM[1] + zM.playerHitboxHeights.head / 2, iM[2] + .1), PM().Od(hM, hM, iM, rM[2]), PM().cJ(hM, hM, iM, rM[0]), PM().Md(hM, hM, iM, rM[1]), (0, jM.p)(aM.instance, hM[0], hM[1], hM[2]), aM.instance.rotation.set(rM[0], rM[1], rM[2]), OM > aM.lastFl … [truncated]
+             if (pV().set(kV, xV[0], xV[1] + wV.playerHitboxHeights.head / 2, xV[2] + .1), pV().ck(kV, kV, xV, eV[2]), pV().ek(kV, kV, xV, eV[0]), pV().pk(kV, kV, xV, eV[1]), (0, UV.q)(yV.instance, kV[0], kV[1], kV[2]), yV.instance.rotation.set(eV[0], eV[1], eV[2]), JV > yV.lastFl … [truncated]
```

#### 2622. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24606` → after: `L24432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24432) · [Before (L24606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24606)

```diff
-   39942: (MM, rM, iM) => {
+   40088: (VV, eV, xV) => {
```

#### 2623. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24610-L24611` → after: `L24436-L24437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24436-L24437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24436-L24437) · [Before (L24610-L24611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24610-L24611)

```diff
-     var OM = iM(670),
-       SM = iM(38318);
+     var JV = xV(698),
+       YV = xV(38523);
```

#### 2624. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24622` → after: `L24448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24448) · [Before (L24622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24622)

```diff
-           ai: null,
+           kx: null,
```

#### 2625. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24626` → after: `L24452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24452) · [Before (L24626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24626)

```diff
-         PU: function(MM, rM) {
+         uF: function(VV, eV) {
```

#### 2626. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24629` → after: `L24455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24455) · [Before (L24629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24629)

```diff
-         vW: function(MM, rM) {
+         bR: function(VV, eV) {
```

#### 2627. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24632` → after: `L24458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24458) · [Before (L24632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24632)

```diff
-         dU: function(rM, iM) {
+         SF: function(eV, xV) {
```

#### 2628. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24638` → after: `L24464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24464) · [Before (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24638)

```diff
-             const rM = null === OM.ai ? 0 : zM(MM, MM.hU.jK(OM.HZ).siM, OM.ai);
+             const eV = null === JV.kx ? 0 : wV(VV, VV.sF.U_(JV.zC).dJV, JV.kx);
```

#### 2629. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24640` → after: `L24466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24466) · [Before (L24640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24640)

```diff
-               for (let iM = 0; iM < jM; iM++) OM.meshes.push(mM(MM, OM.HZ));
+               for (let xV = 0; xV < UV; xV++) JV.meshes.push(vV(VV, JV.zC));
```

#### 2630. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24643` → after: `L24469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24469) · [Before (L24643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24643)

```diff
-               SM && HM(MM, OM, iM, aM[iM], OM.ai, PM[iM]), OM._shown[iM] !== SM && (OM._shown[iM] = SM, OM.meshes[iM].kR(SM))
+               YV && rV(VV, JV, xV, yV[xV], JV.kx, pV[xV]), JV._shown[xV] !== YV && (JV._shown[xV] = YV, JV.meshes[xV].pW(YV))
```

#### 2631. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24656` → after: `L24482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24482) · [Before (L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24656)

```diff
-       const OM = MM.Am;
+       const JV = VV.Vr;
```

#### 2632. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24661` → after: `L24487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24487) · [Before (L24661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24661)

```diff
-         LM(jM, rM, OM, nM, QM) || MM.uL.qB(nM, iM, QM) || (aM[SM] = nM, PM[SM] = QM, SM++)
+         ZV(UV, eV, JV, QV, nV) || VV.cZ.I3(QV, xV, nV) || (yV[YV] = QV, pV[YV] = nV, YV++)
```

#### 2633. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24673-L24674` → after: `L24499-L24500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24499-L24500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24499-L24500) · [Before (L24673-L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24673-L24674)

```diff
-       const iM = MM.CL.DiM.createInstance(`floatingMesh_${rM}_${(0,OM.e)()}`);
-       return MM.CL.vJ(iM), iM.kR(!1), iM
+       const xV = VV.gZ.OJV.createInstance(`floatingMesh_${eV}_${(0,JV.c)()}`);
+       return VV.gZ.wE(xV), xV.pW(!1), xV
```

#### 2634. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24678` → after: `L24504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24504) · [Before (L24678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24678)

```diff
-       const PM = MM.Am,
+       const pV = VV.Vr,
```

#### 2635. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24683` → after: `L24509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24509) · [Before (L24683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24683)

```diff
-       LM[3 * iM] === nM && LM[3 * iM + 1] === QM && LM[3 * iM + 2] === zM || (LM[3 * iM] = nM, LM[3 * iM + 1] = QM, LM[3 * iM + 2] = zM, (0, SM.p)(rM.meshes[iM], nM, QM, zM))
+       ZV[3 * xV] === QV && ZV[3 * xV + 1] === nV && ZV[3 * xV + 2] === wV || (ZV[3 * xV] = QV, ZV[3 * xV + 1] = nV, ZV[3 * xV + 2] = wV, (0, YV.q)(eV.meshes[xV], QV, nV, wV))
```

#### 2636. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24686` → after: `L24512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24512) · [Before (L24686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24686)

```diff
-   39945: (MM, rM, iM) => {
+   40094: (VV, eV, xV) => {
```

#### 2637. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24690-L24692` → after: `L24516-L24518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24516-L24518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24516-L24518) · [Before (L24690-L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24690-L24692)

```diff
-     var OM = iM(2067),
-       SM = iM(4069),
-       jM = iM(38576);
+     var JV = xV(2080),
+       YV = xV(4098),
+       UV = xV(38768);
```

#### 2638. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24711-L24712` → after: `L24537-L24538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24537-L24538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24537-L24538) · [Before (L24711-L24712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24711-L24712)

```diff
-         PU: function(rM, iM) {
-           const nM = [OM.d.subscribe("forcedCameraDirection", (rM => {
+         uF: function(eV, xV) {
+           const QV = [JV.c.subscribe("forcedCameraDirection", (eV => {
```

#### 2639. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24714-L24715` → after: `L24540-L24541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24540-L24541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24540-L24541) · [Before (L24714-L24715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24714-L24715)

```diff
-               if (MM.aU.forcedCameraDirectionTransitionMs <= 0 || null === rM) {
-                 if (null === rM) MM.camera.VK = null, MM.camera.Qq = null;
+               if (VV.mF.forcedCameraDirectionTransitionMs <= 0 || null === eV) {
+                 if (null === eV) VV.camera.E_ = null, VV.camera.B_ = null;
```

#### 2640. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24718-L24721` → after: `L24544-L24547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24544-L24547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24544-L24547) · [Before (L24718-L24721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24718-L24721)

```diff
-                     iL: iM,
-                     aiM: OM
-                   } = (0, jM.f)(rM);
-                   MM.camera.VK = OM, MM.camera.Qq = iM
+                     rZ: xV,
+                     NJV: JV
+                   } = (0, UV.h)(eV);
+                   VV.camera.E_ = JV, VV.camera.B_ = xV
```

#### 2641. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24731-L24733` → after: `L24557-L24559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24557-L24559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24557-L24559) · [Before (L24731-L24733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24731-L24733)

```diff
-                 iL: SM,
-                 aiM: aM
-               } = (0, jM.f)(rM);
+                 rZ: YV,
+                 NJV: yV
+               } = (0, UV.h)(eV);
```

#### 2642. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24739` → after: `L24565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24565) · [Before (L24739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24739)

```diff
-               iM.directionTransitionStart = PM, iM.directionTransitionEnd = PM + MM.aU.forcedCameraDirectionTransitionMs, MM.camera.VK = OM.pitch, MM.camera.Qq = OM.heading
+               xV.directionTransitionStart = pV, xV.directionTransitionEnd = pV + VV.mF.forcedCameraDirectionTransitionMs, VV.camera.E_ = JV.pitch, VV.camera.B_ = JV.heading
```

#### 2643. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24741` → after: `L24567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24567) · [Before (L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24741)

```diff
-           })), OM.d.subscribe("cameraRoll", (rM => {
+           })), JV.c.subscribe("cameraRoll", (eV => {
```

#### 2644. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24743-L24744` → after: `L24569-L24570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24569-L24570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24569-L24570) · [Before (L24743-L24744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24743-L24744)

```diff
-               if (MM.aU.cameraRollTransitionMs <= 0) return MM.camera.zL = rM, iM.rollTransitionFrom = null, iM.rollTransitionTo = null, iM.rollTransitionStart = null, void(iM.rollTransitionEnd = null);
-               iM.rollTransitionFrom = MM.camera.zL, iM.rollTransitionTo = rM;
+               if (VV.mF.cameraRollTransitionMs <= 0) return VV.camera.tZ = eV, xV.rollTransitionFrom = null, xV.rollTransitionTo = null, xV.rollTransitionStart = null, void(xV.rollTransitionEnd = null);
+               xV.rollTransitionFrom = VV.camera.tZ, xV.rollTransitionTo = eV;
```

#### 2645. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24746` → after: `L24572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24572) · [Before (L24746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24746)

```diff
-               iM.rollTransitionStart = OM, iM.rollTransitionEnd = OM + MM.aU.cameraRollTransitionMs
+               xV.rollTransitionStart = JV, xV.rollTransitionEnd = JV + VV.mF.cameraRollTransitionMs
```

#### 2646. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24748` → after: `L24574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24574) · [Before (L24748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24748)

```diff
-           })), OM.d.subscribe("forcedCameraDirectionTransitionMs", (MM => {
+           })), JV.c.subscribe("forcedCameraDirectionTransitionMs", (VV => {
```

#### 2647. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24755` → after: `L24581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24581) · [Before (L24755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24755)

```diff
-           })), OM.d.subscribe("cameraRollTransitionMs", (MM => {
+           })), JV.c.subscribe("cameraRollTransitionMs", (VV => {
```

#### 2648. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24762` → after: `L24588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24588) · [Before (L24762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24762)

```diff
-           })), OM.d.subscribe("cameraRotationOffset", (MM => {
+           })), JV.c.subscribe("cameraRotationOffset", (VV => {
```

#### 2649. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24764` → after: `L24590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24590) · [Before (L24764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24764)

```diff
-           })), OM.d.subscribe("cameraPositionOffset", (MM => {
+           })), JV.c.subscribe("cameraPositionOffset", (VV => {
```

#### 2650. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24777-L24778` → after: `L24603-L24604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24603-L24604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24603-L24604) · [Before (L24777-L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24777-L24778)

```diff
-           }, QM(MM.aU.cameraRotationOffset), zM(MM.aU.cameraPositionOffset), (0, SM.onGameReset)((() => {
-             MM.camera.VK = null, MM.camera.Qq = null, MM.camera.zL = 0, QM(aM), zM(PM), iM.directionTransitionFrom = null, iM.directionTransitionTo = null, iM.directionTransitionStart = null, iM.directionTransitionEnd = null, iM.rollTransitionFrom = null, iM.rollTransitionTo = nu … [truncated]
+           }, nV(VV.mF.cameraRotationOffset), wV(VV.mF.cameraPositionOffset), (0, YV.onGameReset)((() => {
+             VV.camera.E_ = null, VV.camera.B_ = null, VV.camera.tZ = 0, nV(yV), wV(pV), xV.directionTransitionFrom = null, xV.directionTransitionTo = null, xV.directionTransitionStart = null, xV.directionTransitionEnd = null, xV.rollTransitionFrom = null, xV.rollTransitionTo = nu … [truncated]
```

#### 2651. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24781` → after: `L24607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24607) · [Before (L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24781)

```diff
-         vW: function(MM, rM) {
+         bR: function(VV, eV) {
```

#### 2652. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24784` → after: `L24610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24610) · [Before (L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24784)

```diff
-         dU: function(rM, iM) {
+         SF: function(eV, xV) {
```

#### 2653. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24793` → after: `L24619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24619) · [Before (L24793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24793)

```diff
-             jM >= 1 ? (MM.camera.VK = iM.pitch, MM.camera.Qq = zM(iM.heading), OM.directionTransitionFrom = null, OM.directionTransitionTo = null, OM.directionTransitionStart = null, OM.directionTransitionEnd = null) : (MM.camera.VK = rM.pitch + (iM.pitch - rM.pitch) * aM, MM.cam … [truncated]
+             UV >= 1 ? (VV.camera.E_ = xV.pitch, VV.camera.B_ = wV(xV.heading), JV.directionTransitionFrom = null, JV.directionTransitionTo = null, JV.directionTransitionStart = null, JV.directionTransitionEnd = null) : (VV.camera.E_ = eV.pitch + (xV.pitch - eV.pitch) * yV, VV.cam … [truncated]
```

#### 2654. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24798` → after: `L24624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24624) · [Before (L24798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24798)

```diff
-             rM >= 1 ? (MM.camera.zL = OM.rollTransitionTo, OM.rollTransitionFrom = null, OM.rollTransitionTo = null, OM.rollTransitionStart = null, OM.rollTransitionEnd = null) : MM.camera.zL = OM.rollTransitionFrom + (OM.rollTransitionTo - OM.rollTransitionFrom) * iM
+             eV >= 1 ? (VV.camera.tZ = JV.rollTransitionTo, JV.rollTransitionFrom = null, JV.rollTransitionTo = null, JV.rollTransitionStart = null, JV.rollTransitionEnd = null) : VV.camera.tZ = JV.rollTransitionFrom + (JV.rollTransitionTo - JV.rollTransitionFrom) * xV
```

#### 2655. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24805` → after: `L24631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24631) · [Before (L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24805)

```diff
-       return MM < .5 ? 4 * MM * MM * MM : 1 - Math.pow(-2 * MM + 2, 3) / 2
+       return VV < .5 ? 4 * VV * VV * VV : 1 - Math.pow(-2 * VV + 2, 3) / 2
```

#### 2656. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24817` → after: `L24643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24643) · [Before (L24817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24817)

```diff
-       return SM > Math.PI ? SM -= iM : SM < -Math.PI && (SM += iM), MM + SM
+       return YV > Math.PI ? YV -= xV : YV < -Math.PI && (YV += xV), VV + YV
```

#### 2657. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24824` → after: `L24650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24650) · [Before (L24824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24824)

```diff
-       }(MM) ? MM : iM;
+       }(VV) ? VV : xV;
```

#### 2658. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24828` → after: `L24654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24654) · [Before (L24828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24828)

```diff
-   39828: (MM, rM, iM) => {
+   39968: (VV, eV, xV) => {
```

#### 2659. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24834-L24835` → after: `L24660-L24661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24660-L24661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24660-L24661) · [Before (L24834-L24835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24834-L24835)

```diff
-     var OM = iM(38025),
-       SM = iM(39055);
+     var JV = xV(38256),
+       YV = xV(39225);
```

#### 2660. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24838` → after: `L24664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24664) · [Before (L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24838)

```diff
-         this.Zk = null, this.kiM = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.HZ = void 0
+         this.pC = null, this.VYV = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.zC = void 0
```

#### 2661. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24847-L24848` → after: `L24673-L24674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24673-L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24673-L24674) · [Before (L24847-L24848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24847-L24848)

```diff
-         dU: function(rM, iM) {
-           for (const SM of iM) SM.kiM.ZiM && ((0, OM.pausesOutOfView)(MM, SM.HZ, SM.Zk) ? SM._posePaused = !0 : nM(MM, SM))
+         SF: function(eV, xV) {
+           for (const YV of xV) YV.VYV.eYV && ((0, JV.pausesOutOfView)(VV, YV.zC, YV.pC) ? YV._posePaused = !0 : QV(VV, YV))
```

#### 2662. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24854` → after: `L24680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24680) · [Before (L24854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24854)

```diff
-       const iM = MM.hU.MiM(rM);
+       const xV = VV.sF.jJV(eV);
```

#### 2663. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24860` → after: `L24686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24686) · [Before (L24860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24860)

```diff
-       const iM = rM.HZ;
+       const xV = eV.zC;
```

#### 2664. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24864` → after: `L24690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24690) · [Before (L24864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24864)

```diff
-       } = MM.hU.getState(iM, "updateWalkingState");
+       } = VV.sF.getState(xV, "updateWalkingState");
```

#### 2665. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24867` → after: `L24693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24693) · [Before (L24867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24867)

```diff
-       const jM = MM.hU.getState(iM, "animator");
+       const UV = VV.sF.getState(xV, "animator");
```

#### 2666. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24871` → after: `L24697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24697) · [Before (L24871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24871)

```diff
-   39951: (MM, rM, iM) => {
+   40099: (VV, eV, xV) => {
```

#### 2667. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24875-L24879` → after: `L24701-L24705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24701-L24705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24701-L24705) · [Before (L24875-L24879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24875-L24879)

```diff
-     var OM = iM(37761),
-       SM = iM(22),
-       jM = iM(39147),
-       aM = iM(38130),
-       PM = iM(39092);
+     var JV = xV(37985),
+       YV = xV(32),
+       UV = xV(39296),
+       yV = xV(38368),
+       pV = xV(39245);
```

#### 2668. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24895` → after: `L24721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24721) · [Before (L24895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24895)

```diff
-         PU: function(rM, iM) {
+         uF: function(eV, xV) {
```

#### 2669. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24897-L24899` → after: `L24723-L24725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24723-L24725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24723-L24725) · [Before (L24897-L24899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24897-L24899)

```diff
-           iM.isAlive = (0, PM.c)("_isAlive", null === (QM = MM.rY[MM.eD]) || void 0 === QM || null === (zM = QM[iM.HZ]) || void 0 === zM ? void 0 : zM._isAlive), iM._isAliveSub = SM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM.HZ}|_isAlive`, (MM => {
-             iM.isAlive = (0, PM.c)("_isAlive", MM), (0, jM.updateLocalPlayerHeldItem)()
-           })), iM.addedTime = Date.now(), iM._hasPriorityNametagSub = SM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM.HZ}|hasPriorityNametag`, (MM => {
+           xV.isAlive = (0, pV.e)("_isAlive", null === (nV = VV.YL[VV.bD]) || void 0 === nV || null === (wV = nV[xV.zC]) || void 0 === wV ? void 0 : wV._isAlive), xV._isAliveSub = YV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV.zC}|_isAlive`, (VV => {
+             xV.isAlive = (0, pV.e)("_isAlive", VV), (0, UV.updateLocalPlayerHeldItem)()
+           })), xV.addedTime = Date.now(), xV._hasPriorityNametagSub = YV.h.subscribe(`otherEntitySettingsClientifiedEId|${xV.zC}|hasPriorityNametag`, (VV => {
```

#### 2670. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24903` → after: `L24729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24729) · [Before (L24903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24903)

```diff
-             hU: LM
+             sF: ZV
```

#### 2671. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24907` → after: `L24733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24733) · [Before (L24907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24907)

```diff
-             (0, aM.p)(MM, rM, OM);
+             (0, yV.s)(VV, eV, JV);
```

#### 2672. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24909` → after: `L24735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24735) · [Before (L24909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24909)

```diff
-               zM = LM.VrM(rM),
+               wV = ZV.EJV(eV),
```

#### 2673. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24915` → after: `L24741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24741) · [Before (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24915)

```diff
-               if (null !== (hM = null === (JM = MM.rY[MM.eD][iM.HZ]) || void 0 === JM ? void 0 : JM.hasPriorityNametag) && void 0 !== hM && hM)
+               if (null !== (kV = null === (bV = VV.YL[VV.bD][xV.zC]) || void 0 === bV ? void 0 : bV.hasPriorityNametag) && void 0 !== kV && kV)
```

#### 2674. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24918` → after: `L24744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24744) · [Before (L24918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24918)

```diff
-               (HM || iM.drawnHidden) && (rM = !1), (0, aM.p)(MM, mM, rM)
+               (rV || xV.drawnHidden) && (eV = !1), (0, yV.s)(VV, vV, eV)
```

#### 2675. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24922-L24924` → after: `L24748-L24750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24748-L24750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24748-L24750) · [Before (L24922-L24924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24922-L24924)

```diff
-             dM && (dM.forceSetEnabled = !!QM && null, dM.instance.kR(null !== (yM = dM.forceSetEnabled) && void 0 !== yM ? yM : dM.isEnabled));
-             iM.HZ !== MM.eD && (OM ? LM.BMM(rM, "collideTerrain") || LM.eZ(rM, "collideTerrain") : LM.BMM(rM, "collideTerrain") && LM.bZ(rM, "collideTerrain")), rM === MM.eD && SM.i.Tz("clientPlayerModelVisible", QM)
-           })), LM.getState(rM, LM.names.tL).enabledCombinator = new OM.d
+             EV && (EV.forceSetEnabled = !!nV && null, EV.instance.pW(null !== (BV = EV.forceSetEnabled) && void 0 !== BV ? BV : EV.isEnabled));
+             xV.zC !== VV.bD && (JV ? ZV.wxV(eV, "collideTerrain") || ZV.WC(eV, "collideTerrain") : ZV.wxV(eV, "collideTerrain") && ZV.gC(eV, "collideTerrain")), eV === VV.bD && YV.h.QZ("clientPlayerModelVisible", nV)
+           })), ZV.getState(eV, ZV.names.aZ).enabledCombinator = new JV.d
```

#### 2676. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24926-L24927` → after: `L24752-L24753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24752-L24753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24752-L24753) · [Before (L24926-L24927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24926-L24927)

```diff
-         vW: function(MM, rM) {
-           SM.i.unsubscribe(rM._isAliveSub), SM.i.unsubscribe(rM._hasPriorityNametagSub)
+         bR: function(VV, eV) {
+           YV.h.unsubscribe(eV._isAliveSub), YV.h.unsubscribe(eV._hasPriorityNametagSub)
```

#### 2677. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24932` → after: `L24758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24758) · [Before (L24932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24932)

```diff
-   39956: (MM, rM, iM) => {
+   40107: (VV, eV, xV) => {
```

#### 2678. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24936-L24937` → after: `L24762-L24763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24762-L24763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24762-L24763) · [Before (L24936-L24937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24936-L24937)

```diff
-     var OM = iM(38782),
-       SM = iM(39017);
+     var JV = xV(38961),
+       YV = xV(39195);
```

#### 2679. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24950` → after: `L24776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24776) · [Before (L24950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24950)

```diff
-           SM.b.dropExpired(Date.now())
+           YV.e.dropExpired(Date.now())
```

#### 2680. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24952` → after: `L24778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24778) · [Before (L24952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24952)

```diff
-         dU: function(rM, iM) {
+         SF: function(eV, xV) {
```

#### 2681. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24955` → after: `L24781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24781) · [Before (L24955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24955)

```diff
-             const rM = MM.hU.GrM(jM.HZ);
+             const eV = VV.sF.hxV(UV.zC);
```

#### 2682. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24957-L24958` → after: `L24783-L24784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24783-L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24783-L24784) · [Before (L24957-L24958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24957-L24958)

```diff
-             const iM = (0, OM.f)(jM.startedAtMs, jM.endsAtMs, SM);
-             rM.mesh.UL.set(iM, iM, iM), rM.offset[1] = jM.centreOffsetY + jM.halfHeight * (iM - OM.i)
+             const xV = (0, JV.i)(UV.startedAtMs, UV.endsAtMs, YV);
+             eV.mesh.WZ.set(xV, xV, xV), eV.offset[1] = UV.centreOffsetY + UV.halfHeight * (xV - JV.o)
```

#### 2683. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24964` → after: `L24790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24790) · [Before (L24964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24964)

```diff
-   39958: (MM, rM, iM) => {
+   40110: (VV, eV, xV) => {
```

#### 2684. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24969-L24970` → after: `L24795-L24796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24795-L24796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24795-L24796) · [Before (L24969-L24970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24969-L24970)

```diff
-     var OM = iM(181),
-       SM = iM(347),
+     var JV = xV(206),
+       YV = xV(380),
```

#### 2685. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24972-L24974` → after: `L24798-L24800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24798-L24800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24798-L24800) · [Before (L24972-L24974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24972-L24974)

```diff
-       aM = iM(37761),
-       PM = iM(3063),
-       nM = iM(38010);
+       yV = xV(37985),
+       pV = xV(3093),
+       QV = xV(38251);
```

#### 2686. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L24978` → after: `L24804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24804) · [Before (L24978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L24978)

```diff
-       mM = OM.f.HL,
+       vV = JV.f.PZ,
```

#### 2687. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25001` → after: `L24827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24827) · [Before (L25001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25001)

```diff
-         const OM = `${MM}|${rM}|${iM}`,
+         const JV = `${VV}|${eV}|${xV}`,
```

#### 2688. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25019` → after: `L24845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24845) · [Before (L25019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25019)

```diff
-           az: null,
+           Ew: null,
```

#### 2689. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25029-L25032` → after: `L24855-L24858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24855-L24858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24855-L24858) · [Before (L25029-L25032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25029-L25032)

```diff
-         PU: function(iM, OM) {
-           if (!OM.addMeshComponent || !OM.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${OM.addMeshComponent} ${OM.removeMeshComponent}`);
-           if (OM._lastPos = jM().create(), jM().copy(OM._lastPos, MM.hU.XE(iM)), null !== OM.movingHideDist && SM.add(OM), 0 === rM.size && (jM().set(eM, 1 / 0, 1 / 0, 1 / 0), jM().copy(CM, eM)), WM(OM), pM(OM, OM._competesForCap), OM.immediatelyUpdate) {
-             uM(OM, MM.hU.XE(MM.eD))
+         uF: function(xV, JV) {
+           if (!JV.addMeshComponent || !JV.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${JV.addMeshComponent} ${JV.removeMeshComponent}`);
+           if (JV._lastPos = UV().create(), UV().copy(JV._lastPos, VV.sF.YF(xV)), null !== JV.movingHideDist && YV.add(JV), 0 === eV.size && (UV().set(PV, 1 / 0, 1 / 0, 1 / 0), UV().copy(TV, PV)), RV(JV), WV(JV, JV._competesForCap), JV.immediatelyUpdate) {
+             zV(JV, VV.sF.YF(VV.bD))
```

#### 2690. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25035` → after: `L24861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24861) · [Before (L25035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25035)

```diff
-         vW: function(MM, rM) {
+         bR: function(VV, eV) {
```

#### 2691. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25039` → after: `L24865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24865) · [Before (L25039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25039)

```diff
-           const nM = MM.camera.XE(),
+           const QV = VV.camera.YF(),
```

#### 2692. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25058` → after: `L24884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24884) · [Before (L25058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25058)

```diff
-                 for (const iM of SM) GM[aM++] = jM().sqrDist(rM, MM.hU.XE(iM.HZ));
+                 for (const xV of YV) FV[yV++] = UV().sqrDist(eV, VV.sF.YF(xV.zC));
```

#### 2693. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25063` → after: `L24889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24889) · [Before (L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25063)

```diff
-             const iM = MM.hU.XE(rM.HZ);
+             const xV = VV.sF.YF(eV.zC);
```

#### 2694. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25068` → after: `L24894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24894) · [Before (L25068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25068)

```diff
-           if (!tM) MM: for (const MM of iM)
+           if (!XV) VV: for (const VV of xV)
```

#### 2695. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25082-L25083` → after: `L24908-L24909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24908-L24909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24908-L24909) · [Before (L25082-L25083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25082-L25083)

```diff
-           hU: SM
-         } = MM, zM = rM.HZ, LM = SM.XE(zM);
+           sF: YV
+         } = VV, wV = eV.zC, ZV = YV.YF(wV);
```

#### 2696. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25091` → after: `L24917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24917) · [Before (L25091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25091)

```diff
-           hM = Math.max(mM, null !== (OM = rM.movingHideDist) && void 0 !== OM ? OM : 0),
+           kV = Math.max(vV, null !== (JV = eV.movingHideDist) && void 0 !== JV ? JV : 0),
```

#### 2697. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25093` → after: `L24919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24919) · [Before (L25093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25093)

```diff
-           dM = JM && (rM.displayOutsideLoadedChunk || (0, PM.b)().EX(Math.floor(LM[0]), Math.floor(LM[1]), Math.floor(LM[2])));
+           EV = bV && (eV.displayOutsideLoadedChunk || (0, pV.b)().y5(Math.floor(ZV[0]), Math.floor(ZV[1]), Math.floor(ZV[2])));
```

#### 2698. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25095` → after: `L24921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24921) · [Before (L25095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25095)

```diff
-         const yM = UM.get(rM.az),
+         const BV = tV.get(eV.Ew),
```

#### 2699. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25097` → after: `L24923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24923) · [Before (L25097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25097)

```diff
-         rM.isMeshShown !== lM && (lM ? (SM.GrM(zM) || (rM.addMeshComponent(), (0, nM.k)(MM, zM)), rM.addShadow && !SM.getState(zM, SM.names.tL) && (SM.eZ(zM, SM.names.tL, {
+         eV.isMeshShown !== jV && (jV ? (YV.hxV(wV) || (eV.addMeshComponent(), (0, QV.e)(VV, wV)), eV.addShadow && !YV.getState(wV, YV.names.aZ) && (YV.WC(wV, YV.names.aZ, {
```

#### 2700. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25099` → after: `L24925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24925) · [Before (L25099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25099)

```diff
-         }), SM.getState(zM, SM.names.tL).enabledCombinator = new aM.d)) : (rM.removeMeshComponent(), rM.addShadow && SM.getState(zM, SM.names.tL) && SM.bZ(zM, SM.names.tL)), rM.isMeshShown = lM)
+         }), YV.getState(wV, YV.names.aZ).enabledCombinator = new yV.d)) : (eV.removeMeshComponent(), eV.addShadow && YV.getState(wV, YV.names.aZ) && YV.gC(wV, YV.names.aZ)), eV.isMeshShown = jV)
```

#### 2701. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25117-L25119` → after: `L24943-L24945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24943-L24945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24943-L24945) · [Before (L25117-L25119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25117-L25119)

```diff
-         if (MM._competesForCap = rM, !MM.az) return;
-         let iM = EM.get(MM.az);
-         rM ? (iM || (iM = new Set, EM.set(MM.az, iM)), iM.add(MM)) : iM && (iM.delete(MM), 0 === iM.size && (EM.delete(MM.az), UM.delete(MM.az)))
+         if (VV._competesForCap = eV, !VV.Ew) return;
+         let xV = qV.get(VV.Ew);
+         eV ? (xV || (xV = new Set, qV.set(VV.Ew, xV)), xV.add(VV)) : xV && (xV.delete(VV), 0 === xV.size && (qV.delete(VV.Ew), tV.delete(VV.Ew)))
```

#### 2702. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25123` → after: `L24949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24949) · [Before (L25123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25123)

```diff
-         let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM.hU.XE(iM.HZ);
+         let JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV.sF.YF(xV.zC);
```

#### 2703. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25130` → after: `L24956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR24956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L24956) · [Before (L25130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25130)

```diff
-         const nM = `${SM}|${jM}|${aM}`,
+         const QV = `${YV}|${UV}|${yV}`,
```

#### 2704. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25195` → after: `L25021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25021) · [Before (L25195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25195)

```diff
-       return Math.max(MM.hideDist, null !== (rM = MM.movingHideDist) && void 0 !== rM ? rM : 0)
+       return Math.max(VV.hideDist, null !== (eV = VV.movingHideDist) && void 0 !== eV ? eV : 0)
```

#### 2705. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25201` → after: `L25027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25027) · [Before (L25201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25201)

```diff
-       return rM < iM ? iM - rM : rM > OM ? rM - OM : 0
+       return eV < xV ? xV - eV : eV > JV ? eV - JV : 0
```

#### 2706. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25204` → after: `L25030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25030) · [Before (L25204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25204)

```diff
-   39821: (MM, rM, iM) => {
+   39961: (VV, eV, xV) => {
```

#### 2707. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25209-L25215` → after: `L25035-L25041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25035-L25041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25035-L25041) · [Before (L25209-L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25209-L25215)

```diff
-     var OM = iM(38506),
-       SM = iM(38025),
-       jM = iM(38111),
-       aM = iM(38097),
-       PM = iM(38572),
-       nM = iM(39055),
-       QM = iM(39072);
+     var JV = xV(38706),
+       YV = xV(38256),
+       UV = xV(38340),
+       yV = xV(38328),
+       pV = xV(38765),
+       QV = xV(39225),
+       nV = xV(39232);
```

#### 2708. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25222-L25223` → after: `L25048-L25049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25048-L25049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25048-L25049) · [Before (L25222-L25223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25222-L25223)

```diff
-           Zk: null,
-           kiM: null,
+           pC: null,
+           VYV: null,
```

#### 2709. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25239-L25240` → after: `L25065-L25066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25065-L25066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25065-L25066) · [Before (L25239-L25240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25239-L25240)

```diff
-         dU: function(rM, iM) {
-           for (const OM of iM) OM.kiM.ZiM && ((0, SM.pausesOutOfView)(MM, OM.HZ, OM.Zk) ? (OM._posePaused = !0, mM(MM, OM, rM)) : hM(MM, OM, rM))
+         SF: function(eV, xV) {
+           for (const JV of xV) JV.VYV.eYV && ((0, YV.pausesOutOfView)(VV, JV.zC, JV.pC) ? (JV._posePaused = !0, vV(VV, JV, eV)) : kV(VV, JV, eV))
```

#### 2710. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25246` → after: `L25072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25072) · [Before (L25246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25246)

```diff
-       const iM = MM.hU.crM(rM);
+       const xV = VV.sF.BJV(eV);
```

#### 2711. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25251` → after: `L25077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25077) · [Before (L25251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25251)

```diff
-       const OM = MM.hU.grM(rM.HZ);
+       const JV = VV.sF.HxV(eV.zC);
```

#### 2712. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25254` → after: `L25080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25080) · [Before (L25254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25254)

```diff
-       (0, QM.e)(MM, rM.HZ) || "gliding" === SM || "driving" === SM || (lM(MM, rM) ? EM(MM, rM, OM) : "zombie" !== SM && UM(MM, rM, OM, HM(MM, rM), iM))
+       (0, nV.b)(VV, eV.zC) || "gliding" === YV || "driving" === YV || (jV(VV, eV) ? qV(VV, eV, JV) : "zombie" !== YV && tV(VV, eV, JV, rV(VV, eV), xV))
```

#### 2713. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25258` → after: `L25084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25084) · [Before (L25258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25258)

```diff
-       return MM.hU.getState(rM.HZ, "animator")
+       return VV.sF.getState(eV.zC, "animator")
```

#### 2714. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25264` → after: `L25090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25090) · [Before (L25264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25264)

```diff
-       const SM = MM.hU.grM(rM.HZ),
+       const YV = VV.sF.HxV(eV.zC),
```

#### 2715. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25268-L25269` → after: `L25094-L25095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25094-L25095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25094-L25095) · [Before (L25268-L25269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25268-L25269)

```diff
-         LM = rM.HZ === MM.eD ? PM.b.getPlayerFacingPitch(MM) : SM.cameraPitch,
-         mM = null === (OM = MM.hU.qrM(rM.HZ)) || void 0 === OM ? void 0 : OM.QG,
+         ZV = eV.zC === VV.bD ? pV.e.getPlayerFacingPitch(VV) : YV.cameraPitch,
+         vV = null === (JV = VV.sF.kJV(eV.zC)) || void 0 === JV ? void 0 : JV.JA,
```

#### 2716. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25271` → after: `L25097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25097) · [Before (L25271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25271)

```diff
-         dM = (0, QM.e)(MM, rM.HZ),
+         EV = (0, nV.b)(VV, eV.zC),
```

#### 2717. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25273` → after: `L25099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25099) · [Before (L25273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25273)

```diff
-         uM = (0, nM.getRigController)(MM, rM.HZ),
+         zV = (0, QV.getRigController)(VV, eV.zC),
```

#### 2718. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25301` → after: `L25127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25127) · [Before (L25301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25301)

```diff
-         QM = PM ? MM.hU.getState(rM.HZ, "updateWalkingState").walkingAngle : 0;
+         nV = pV ? VV.sF.getState(eV.zC, "updateWalkingState").walkingAngle : 0;
```

#### 2719. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25314` → after: `L25140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25140) · [Before (L25314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25314)

```diff
-       return (0, nM.rigHasAction)(MM, rM.HZ, OM.n)
+       return (0, QV.rigHasAction)(VV, eV.zC, JV.t)
```

#### 2720. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25318` → after: `L25144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25144) · [Before (L25318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25318)

```diff
-       (!rM.consumedNetworkArmSwing || iM.armSwinging && !(0, nM.rigActionPlaying)(MM, rM.HZ, OM.n)) && (0, nM.playRigAction)(MM, rM.HZ, OM.n), rM.consumedNetworkArmSwing = !0, rM._queuedSwing = !1
+       (!eV.consumedNetworkArmSwing || xV.armSwinging && !(0, QV.rigActionPlaying)(VV, eV.zC, JV.t)) && (0, QV.playRigAction)(VV, eV.zC, JV.t), eV.consumedNetworkArmSwing = !0, eV._queuedSwing = !1
```

#### 2721. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25323` → after: `L25149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25149) · [Before (L25323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25323)

```diff
-       const PM = MM.zW,
+       const pV = VV.OW,
```

#### 2722. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25326` → after: `L25152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25152) · [Before (L25326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25326)

```diff
-           yS: QM
+           PY: nV
```

#### 2723. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25328` → after: `L25154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25154) · [Before (L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25328)

```diff
-       iM.armSwinging || !rM.consumedNetworkArmSwing ? (rM.consumedNetworkArmSwing = !0, nM >= QM ? (jM = SM / QM, rM._queuedSwing = !1) : nM >= .65 * QM && !rM._queuedSwing && (rM._queuedSwing = !0)) : rM._queuedSwing && nM >= QM && (jM = Math.min(SM, nM - QM) / QM, rM._queuedSwi … [truncated]
+       xV.armSwinging || !eV.consumedNetworkArmSwing ? (eV.consumedNetworkArmSwing = !0, QV >= nV ? (UV = YV / nV, eV._queuedSwing = !1) : QV >= .65 * nV && !eV._queuedSwing && (eV._queuedSwing = !0)) : eV._queuedSwing && QV >= nV && (UV = Math.min(YV, QV - nV) / nV, eV._queuedSwi … [truncated]
```

#### 2724. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25342-L25343` → after: `L25168-L25169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25168-L25169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25168-L25169) · [Before (L25342-L25343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25342-L25343)

```diff
-       const iM = MM.hU.grM(rM.HZ),
-         OM = rM.HZ === MM.eD ? PM.b.getPlayerFacingPitch(MM) : iM.cameraPitch,
+       const xV = VV.sF.HxV(eV.zC),
+         JV = eV.zC === VV.bD ? pV.e.getPlayerFacingPitch(VV) : xV.cameraPitch,
```

#### 2725. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25351` → after: `L25177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25177) · [Before (L25351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25351)

```diff
-       } = MM.hU.getState(rM.HZ, "updateWalkingState"), SM = HM(MM, rM);
+       } = VV.sF.getState(eV.zC, "updateWalkingState"), YV = rV(VV, eV);
```

#### 2726. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25362-L25364` → after: `L25188-L25190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25188-L25190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25188-L25190) · [Before (L25362-L25364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25362-L25364)

```diff
-     const gM = (0, jM.f)({
-       yS: 250,
-       GS: {
+     const MV = (0, UV.e)({
+       PY: 250,
+       NY: {
```

#### 2727. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25369` → after: `L25195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25195) · [Before (L25369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25369)

```diff
-               bS: "catmull-rom-spline",
+               zY: "catmull-rom-spline",
```

#### 2728. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25375` → after: `L25201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25201) · [Before (L25375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25375)

```diff
-               bS: "catmull-rom-spline",
+               zY: "catmull-rom-spline",
```

#### 2729. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25381` → after: `L25207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25207) · [Before (L25381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25381)

```diff
-               bS: "catmull-rom-spline",
+               zY: "catmull-rom-spline",
```

#### 2730. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25387` → after: `L25213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25213) · [Before (L25387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25387)

```diff
-               bS: "catmull-rom-spline",
+               zY: "catmull-rom-spline",
```

#### 2731. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25393` → after: `L25219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25219) · [Before (L25393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25393)

```diff
-               bS: "catmull-rom-spline",
+               zY: "catmull-rom-spline",
```

#### 2732. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25401` → after: `L25227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25227) · [Before (L25401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25401)

```diff
-   39966: (MM, rM, iM) => {
+   40116: (VV, eV, xV) => {
```

#### 2733. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25405` → after: `L25231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25231) · [Before (L25405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25405)

```diff
-     var OM = iM(3063);
+     var JV = xV(3093);
```

#### 2734. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25417` → after: `L25243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25243) · [Before (L25417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25417)

```diff
-         PU: function(MM, iM) {
+         uF: function(VV, xV) {
```

#### 2735. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25426-L25427` → after: `L25252-L25253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25252-L25253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25252-L25253) · [Before (L25426-L25427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25426-L25427)

```diff
-         const iM = MM.hU.XE(rM.HZ),
-           SM = (0, OM.b)().EX(iM[0], iM[1], iM[2]);
+         const xV = VV.sF.YF(eV.zC),
+           YV = (0, JV.b)().y5(xV[0], xV[1], xV[2]);
```

#### 2736. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25432` → after: `L25258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25258) · [Before (L25432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25432)

```diff
-   39867: (MM, rM, iM) => {
+   39999: (VV, eV, xV) => {
```

#### 2737. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25437-L25444` → after: `L25263-L25270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25263-L25270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25263-L25270) · [Before (L25437-L25444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25437-L25444)

```diff
-     var OM = iM(38167),
-       SM = iM(37722),
-       jM = iM(38034),
-       aM = iM(38878),
-       PM = iM(38318);
-     const nM = jM.sh.Up(),
-       QM = new jM.sh(0, -.5, .5),
-       zM = new jM.sh(.16, .01, .1).scaleInPlace(1.4),
+     var JV = xV(38387),
+       YV = xV(37943),
+       UV = xV(38263),
+       yV = xV(39055),
+       pV = xV(38523);
+     const QV = UV.Ik.Up(),
+       nV = new UV.Ik(0, -.5, .5),
+       wV = new UV.Ik(.16, .01, .1).scaleInPlace(1.4),
```

#### 2738. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25471-L25473` → after: `L25297-L25299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25297-L25299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25297-L25299) · [Before (L25471-L25473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25471-L25473)

```diff
-         PU: function(rM, iM) {
-           if (iM._targetEId = (0, SM.e)(iM.lineToEId), !MM.hU.jK(iM.HZ)) return console.warn(`Skipping line from entity ${iM.HZ}, which has no position`), void MM.hU.bZ(iM.HZ, "lineToEntity");
-           iM._thisPos = jM.sh.Zero(), iM._targetPos = jM.sh.Zero(), iM._forward = jM.sh.Zero(), iM._right = jM.sh.Zero(), iM._up = jM.sh.Zero(), iM._quat = jM.Quaternion.Zero(), iM._displacement = jM.sh.Zero(), iM._cameraOffset = jM.sh.Zero(), iM._initialCameraOffset = jM.sh.Zero … [truncated]
+         uF: function(eV, xV) {
+           if (xV._targetEId = (0, YV.c)(xV.lineToEId), !VV.sF.U_(xV.zC)) return console.warn(`Skipping line from entity ${xV.zC}, which has no position`), void VV.sF.gC(xV.zC, "lineToEntity");
+           xV._thisPos = UV.Ik.Zero(), xV._targetPos = UV.Ik.Zero(), xV._forward = UV.Ik.Zero(), xV._right = UV.Ik.Zero(), xV._up = UV.Ik.Zero(), xV._quat = UV.Quaternion.Zero(), xV._displacement = UV.Ik.Zero(), xV._cameraOffset = UV.Ik.Zero(), xV._initialCameraOffset = UV.Ik.Zero … [truncated]
```

#### 2739. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25484` → after: `L25310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25310) · [Before (L25484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25484)

```diff
-           }()), iM._line.color = mM, iM._line.AJ = !1, MM.CL.vJ(iM._line)
+           }()), xV._line.color = vV, xV._line.QE = !1, VV.gZ.wE(xV._line)
```

#### 2740. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25486` → after: `L25312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25312) · [Before (L25486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25486)

```diff
-         vW: function(MM, rM) {
+         bR: function(VV, eV) {
```

#### 2741. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25489` → after: `L25315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25315) · [Before (L25489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25489)

```diff
-         dU: function(rM, iM) {
+         SF: function(eV, xV) {
```

#### 2742. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25496-L25499` → after: `L25322-L25325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25322-L25325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25322-L25325) · [Before (L25496-L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25496-L25499)

```diff
-       const iM = MM.hU.jK(rM._targetEId);
-       if (!iM) return rM._line.kR(!1), void(rM._enabled = null);
-       const OM = rM._thisPos.cz(MM.hU.jK(rM.HZ).bq);
-       (0, PM.p)(rM._line, OM.x, OM.y, OM.z);
+       const xV = VV.sF.U_(eV._targetEId);
+       if (!xV) return eV._line.pW(!1), void(eV._enabled = null);
+       const JV = eV._thisPos.wZ(VV.sF.U_(eV.zC).P_);
+       (0, pV.q)(eV._line, JV.x, JV.y, JV.z);
```

#### 2743. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25503-L25505` → after: `L25329-L25331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25329-L25331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25329-L25331) · [Before (L25503-L25505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25503-L25505)

```diff
-               aM = MM.hU.crM(rM._targetEId);
-             if (!aM) return SM.cz(OM.bq), EM.NON_HUMANOID;
-             const PM = MM.CL.Dk,
+               yV = VV.sF.BJV(eV._targetEId);
+             if (!yV) return YV.wZ(JV.P_), qV.NON_HUMANOID;
+             const pV = VV.gZ.YC,
```

#### 2744. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25507` → after: `L25333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25333) · [Before (L25507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25507)

```diff
-                 Zk: nM
+                 pC: QV
```

#### 2745. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25512` → after: `L25338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25338) · [Before (L25512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25512)

```diff
-               return jM.sh.TransformCoordinatesToRef(QM, MM, SM), EM.THIRD_PERSON_HUMANOID
+               return UV.Ik.TransformCoordinatesToRef(nV, VV, YV), qV.THIRD_PERSON_HUMANOID
```

#### 2746. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25514-L25517` → after: `L25340-L25343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25340-L25343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25340-L25343) · [Before (L25514-L25517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25514-L25517)

```diff
-             if (rM._targetEId !== MM.eD) return SM.cz(OM.bq), SM.y += .8, EM.THIRD_PERSON_HUMANOID;
-             const mM = MM.camera.pitch + MM.camera.Qd[0],
-               HM = MM.camera.heading + MM.camera.Qd[1],
-               hM = MM.camera.zL + MM.camera.Qd[2];
+             if (eV._targetEId !== VV.bD) return YV.wZ(JV.P_), YV.y += .8, qV.THIRD_PERSON_HUMANOID;
+             const vV = VV.camera.pitch + VV.camera.tE[0],
+               rV = VV.camera.heading + VV.camera.tE[1],
+               kV = VV.camera.tZ + VV.camera.tE[2];
```

#### 2747. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25519` → after: `L25345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25345) · [Before (L25519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25519)

```diff
-             const JM = MM.hU.jK(MM.camera.rK).bq;
+             const bV = VV.sF.U_(VV.camera.J_).P_;
```

#### 2748. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25523` → after: `L25349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25349) · [Before (L25523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25523)

```diff
-           rM._targetPos.subtractToRef(iM, rM._displacement), null === rM._enabled ? SM === EM.FIRST_PERSON_HUMANOID ? (rM._initialCameraOffset.jR(rM._cameraOffset), rM._enabled = !1, rM._line.kR(!1)) : (rM._enabled = !0, rM._line.kR(!0)) : !1 !== rM._enabled || SM === EM.FIRST_PE … [truncated]
+           eV._targetPos.subtractToRef(xV, eV._displacement), null === eV._enabled ? YV === qV.FIRST_PERSON_HUMANOID ? (eV._initialCameraOffset.iG(eV._cameraOffset), eV._enabled = !1, eV._line.pW(!1)) : (eV._enabled = !0, eV._line.pW(!0)) : !1 !== eV._enabled || YV === qV.FIRST_PE … [truncated]
```

#### 2749. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25528-L25529` → after: `L25354-L25355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25354-L25355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25354-L25355) · [Before (L25528-L25529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25528-L25529)

```diff
-         dM = jM.sh.CrossToRef(nM, mM, rM._right).normalizeToRef(rM._right),
-         yM = jM.sh.CrossToRef(mM, dM, rM._up),
+         EV = UV.Ik.CrossToRef(QV, vV, eV._right).normalizeToRef(eV._right),
+         BV = UV.Ik.CrossToRef(vV, EV, eV._up),
```

#### 2750. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25531` → after: `L25357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25357) · [Before (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25531)

```diff
-       (0, PM.q)(rM._line, lM.x, lM.y, lM.z, lM.w);
+       (0, pV.t)(eV._line, jV.x, jV.y, jV.z, jV.w);
```

#### 2751. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25533` → after: `L25359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25359) · [Before (L25533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25533)

```diff
-       rM._line.UL.set(1, UM, aM)
+       eV._line.WZ.set(1, tV, yV)
```

#### 2752. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25539` → after: `L25365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25365) · [Before (L25539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25539)

```diff
-   39971: (MM, rM, iM) => {
+   40122: (VV, eV, xV) => {
```

#### 2753. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25544-L25546` → after: `L25370-L25372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25370-L25372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25370-L25372) · [Before (L25544-L25546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25544-L25546)

```diff
-     var OM = iM(4069),
-       SM = iM(37761),
-       jM = iM(347),
+     var JV = xV(4098),
+       YV = xV(37985),
+       UV = xV(380),
```

#### 2754. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25548-L25556` → after: `L25374-L25382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25374-L25382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25374-L25382) · [Before (L25548-L25556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25548-L25556)

```diff
-       PM = iM(22),
-       nM = iM(2067),
-       QM = iM(2e3),
-       zM = iM(6944),
-       LM = iM(19),
-       mM = iM(766),
-       HM = iM(3063),
-       hM = iM(1229),
-       JM = iM(332);
+       pV = xV(32),
+       QV = xV(2080),
+       nV = xV(2014),
+       wV = xV(7024),
+       ZV = xV(27),
+       vV = xV(767),
+       rV = xV(3093),
+       kV = xV(1252),
+       bV = xV(375);
```

#### 2755. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25561` → after: `L25387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25387) · [Before (L25561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25561)

```diff
-       return (0, mM.p)(LM.d.get("clientEscMenuOptions").cameraFOV)
+       return (0, vV.q)(ZV.b.get("clientEscMenuOptions").cameraFOV)
```

#### 2756. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25568` → after: `L25394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25394) · [Before (L25568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25568)

```diff
-         const rM = (0, HM.b)().getEyeCappingBodyHeight(MM.eD);
+         const eV = (0, rV.b)().getEyeCappingBodyHeight(VV.bD);
```

#### 2757. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25570-L25571` → after: `L25396-L25397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25396-L25397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25396-L25397) · [Before (L25570-L25571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25570-L25571)

```diff
-         const iM = MM.CL.JV();
-         return (0, mM.n)(rM, iM.near, iM.fov, (0, mM.k)(MM.CL.engine))
+         const xV = VV.gZ.K9();
+         return (0, vV.n)(eV, xV.near, xV.fov, (0, vV.k)(VV.gZ.engine))
```

#### 2758. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25573-L25574` → after: `L25399-L25400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25399-L25400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25399-L25400) · [Before (L25573-L25574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25573-L25574)

```diff
-       return nM.d.subscribe("movementBasedFovScale", (MM => {
-         rM = "number" === typeof MM && isFinite(MM) ? MM : 1
+       return QV.c.subscribe("movementBasedFovScale", (VV => {
+         eV = "number" === typeof VV && isFinite(VV) ? VV : 1
```

#### 2759. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25577-L25579` → after: `L25403-L25405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25403-L25405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25403-L25405) · [Before (L25577-L25579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25577-L25579)

```diff
-       })), PM.i.subscribe(`entityScale|${MM.eD}`, (function() {
-         const rM = MM.hU.ziM(MM.camera.rK);
-         rM && ((0, HM.b)().removeFromEyeHeightCache(MM.eD), rM.offset[1] = Math.min((0, HM.b)().getLifeformEyeHeight(MM.eD), iM()))
+       })), pV.h.subscribe(`entityScale|${VV.bD}`, (function() {
+         const eV = VV.sF.zJV(VV.camera.J_);
+         eV && ((0, rV.b)().removeFromEyeHeightCache(VV.bD), eV.offset[1] = Math.min((0, rV.b)().getLifeformEyeHeight(VV.bD), xV()))
```

#### 2760. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25585` → after: `L25411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25411) · [Before (L25585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25585)

```diff
-           fovMultiplier: new SM.h,
+           fovMultiplier: new YV.i,
```

#### 2761. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25592` → after: `L25418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25418) · [Before (L25592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25592)

```diff
-         dU: function(OM, SM) {
+         SF: function(JV, YV) {
```

#### 2762. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25594-L25598` → after: `L25420-L25424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25420-L25424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25420-L25424) · [Before (L25594-L25598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25594-L25598)

```diff
-             const SM = MM.hU.ziM(MM.camera.rK),
-               PM = MM.hU.getState(jM.HZ, "movement"),
-               nM = MM.hU.nrM(jM.HZ).physicsState,
-               lM = MM.hU.Av(jM.HZ);
-             aM().set(dM, lM.dd[0], nM.type === zM.n.GLIDER ? lM.dd[1] : 0, lM.dd[2]);
+             const YV = VV.sF.zJV(VV.camera.J_),
+               pV = VV.sF.getState(UV.zC, "movement"),
+               QV = VV.sF.XxV(UV.zC).physicsState,
+               jV = VV.sF.uH(UV.zC);
+             yV().set(EV, jV.ME[0], QV.type === wV.q.GLIDER ? jV.ME[1] : 0, jV.ME[2]);
```

#### 2763. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25600-L25606` → after: `L25426-L25432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25426-L25432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25426-L25432) · [Before (L25600-L25606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25600-L25606)

```diff
-               UM = 4 * (PM._flying ? MM.aU.flySpeedMultiplier : 1);
-             let GM = mM.j;
-             EM > UM && (GM += Math.min(.033 * (EM - 4), .5) * rM), GM *= jM.fovMultiplier.getTotalMultipliedVal(), jM.zoomKeyPressed && MM.aU.canUseZoomKey && (GM *= .2), GM *= LM.d.get("clientEscMenuOptions").cameraFOV / 100, GM = Math.min(GM, mM.g), jM.movementBasedFov = jM.mov … [truncated]
-             const CM = (0, HM.b)().getLifeformEyeHeight(jM.HZ);
-             if (yM[1] += CM, !1 === LM.d.get("clientEscMenuOptions").disableBobbing) {
-               const rM = (0, HM.b)().getIsStoodOnBlock(jM.HZ);
-               0 === EM || !1 === rM || 0 !== MM.camera.zK ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += OM / (140 - 2 * (0, QM.f)(EM, 1, 100));
+               tV = 4 * (pV._flying ? VV.mF.flySpeedMultiplier : 1);
+             let FV = vV.i;
+             qV > tV && (FV += Math.min(.033 * (qV - 4), .5) * eV), FV *= UV.fovMultiplier.getTotalMultipliedVal(), UV.zoomKeyPressed && VV.mF.canUseZoomKey && (FV *= .2), FV *= ZV.b.get("clientEscMenuOptions").cameraFOV / 100, FV = Math.min(FV, vV.g), UV.movementBasedFov = UV.mov … [truncated]
+             const TV = (0, rV.b)().getLifeformEyeHeight(UV.zC);
+             if (BV[1] += TV, !1 === ZV.b.get("clientEscMenuOptions").disableBobbing) {
+               const eV = (0, rV.b)().getIsStoodOnBlock(UV.zC);
+               0 === qV || !1 === eV || 0 !== VV.camera.y_ ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += JV / (140 - 2 * (0, nV.d)(qV, 1, 100));
```

#### 2764. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25608` → after: `L25434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25434) · [Before (L25608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25608)

```diff
-               this.state.bobbleValue = (0, hM.wb)(this.state.bobbleValue, iM, .1);
+               this.state.bobbleValue = (0, kV.sb)(this.state.bobbleValue, xV, .1);
```

#### 2765. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25612-L25613` → after: `L25438-L25439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25438-L25439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25438-L25439) · [Before (L25612-L25613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25612-L25613)

```diff
-             const eM = (0, HM.b)().Aq(jM.HZ),
-               bM = JM.d.clamp(eM / 3 * .08, .04, 1);
+             const PV = (0, rV.b)().N_(UV.zC),
+               AV = bV.b.clamp(PV / 3 * .08, .04, 1);
```

#### 2766. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25615` → after: `L25441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25441) · [Before (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25615)

```diff
-               for (let MM = 0; MM < 3; MM++) SM.offset[MM] = (0, hM.wb)(SM.offset[MM], yM[MM], bM);
+               for (let VV = 0; VV < 3; VV++) YV.offset[VV] = (0, kV.sb)(YV.offset[VV], BV[VV], AV);
```

#### 2767. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25624` → after: `L25450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25450) · [Before (L25624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25624)

```diff
-   39977: (MM, rM, iM) => {
+   40126: (VV, eV, xV) => {
```

#### 2768. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25628-L25629` → after: `L25454-L25455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25454-L25455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25454-L25455) · [Before (L25628-L25629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25628-L25629)

```diff
-     var OM = iM(5265),
-       SM = iM(181);
+     var JV = xV(5353),
+       YV = xV(206);
```

#### 2769. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25655-L25658` → after: `L25481-L25484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25481-L25484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25481-L25484) · [Before (L25655-L25658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25655-L25658)

```diff
-           const QM = MM.hU.XE(MM.eD),
-             zM = MM.camera.eT(),
-             LM = MM.camera.aT();
-           rM[0] = QM[2], rM[1] = QM[1] + SM.f.jy * SM.f.playerEyeToHeightRatio, rM[2] = QM[0], rM[3] = zM[2], rM[4] = zM[1], rM[5] = zM[0], rM[6] = LM[2], rM[7] = LM[1], rM[8] = LM[0];
+           const nV = VV.sF.YF(VV.bD),
+             wV = VV.camera.L_(),
+             ZV = VV.camera.o_();
+           eV[0] = nV[2], eV[1] = nV[1] + YV.f.nB * YV.f.playerEyeToHeightRatio, eV[2] = nV[0], eV[3] = wV[2], eV[4] = wV[1], eV[5] = wV[0], eV[6] = ZV[2], eV[7] = ZV[1], eV[8] = ZV[0];
```

#### 2770. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25664` → after: `L25490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25490) · [Before (L25664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25664)

```diff
-         dU: null
+         SF: null
```

#### 2771. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25668` → after: `L25494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25494) · [Before (L25668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25668)

```diff
-   39983: (MM, rM, iM) => {
+   40134: (VV, eV, xV) => {
```

#### 2772. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25672` → after: `L25498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25498) · [Before (L25672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25672)

```diff
-     var OM = iM(347),
+     var JV = xV(380),
```

#### 2773. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25674-L25675` → after: `L25500-L25501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25500-L25501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25500-L25501) · [Before (L25674-L25675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25674-L25675)

```diff
-       jM = iM(22),
-       aM = iM(2067);
+       UV = xV(32),
+       yV = xV(2080);
```

#### 2774. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25692-L25693` → after: `L25518-L25519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25518-L25519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25518-L25519) · [Before (L25692-L25693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25692-L25693)

```diff
-         PU: function(rM, iM) {
-           iM.thisPlayerTeleportSub = jM.i.subscribe(`otherPlayerTeleported|${rM}`, (rM => {
+         uF: function(eV, xV) {
+           xV.thisPlayerTeleportSub = UV.h.subscribe(`otherPlayerTeleported|${eV}`, (eV => {
```

#### 2775. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25697` → after: `L25523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25523) · [Before (L25697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25697)

```diff
-             const SM = MM.hU.XE(MM.eD);
+             const YV = VV.sF.YF(VV.bD);
```

#### 2776. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25699` → after: `L25525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25525) · [Before (L25699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25699)

```diff
-           })), iM.localPlayerTeleportSub = jM.i.subscribe("localPlayerTeleported", (OM => {
+           })), xV.localPlayerTeleportSub = UV.h.subscribe("localPlayerTeleported", (JV => {
```

#### 2777. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25705` → after: `L25531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25531) · [Before (L25705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25705)

```diff
-             const aM = MM.hU.getState(rM, "smoothToServerPos");
+             const yV = VV.sF.getState(eV, "smoothToServerPos");
```

#### 2778. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25709-L25710` → after: `L25535-L25536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25535-L25536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25535-L25536) · [Before (L25709-L25710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25709-L25710)

```diff
-         vW: function(rM, iM) {
-           jM.i.unsubscribe(iM.thisPlayerTeleportSub), jM.i.unsubscribe(iM.localPlayerTeleportSub);
+         bR: function(eV, xV) {
+           UV.h.unsubscribe(xV.thisPlayerTeleportSub), UV.h.unsubscribe(xV.localPlayerTeleportSub);
```

#### 2779. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25712-L25713` → after: `L25538-L25539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25538-L25539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25538-L25539) · [Before (L25712-L25713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25712-L25713)

```diff
-             hU: OM
-           } = MM, SM = OM.KrM(rM);
+             sF: JV
+           } = VV, YV = JV.rJV(eV);
```

#### 2780. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25715` → after: `L25541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25541) · [Before (L25715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25715)

```diff
-           const aM = OM.getState(rM, OM.names.tL);
+           const yV = JV.getState(eV, JV.names.aZ);
```

#### 2781. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25719` → after: `L25545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25545) · [Before (L25719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25719)

```diff
-           const OM = MM.hU.XE(MM.eD);
+           const JV = VV.sF.YF(VV.bD);
```

#### 2782. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25730` → after: `L25556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25556) · [Before (L25730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25730)

```diff
-             const rM = MM.hU.getState(SM.HZ, "smoothToServerPos");
+             const eV = VV.sF.getState(YV.zC, "smoothToServerPos");
```

#### 2783. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25741-L25742` → after: `L25567-L25568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25567-L25568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25567-L25568) · [Before (L25741-L25742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25741-L25742)

```diff
-         hU: OM
-       } = MM, SM = OM.KrM(rM.HZ);
+         sF: JV
+       } = VV, YV = JV.rJV(eV.zC);
```

#### 2784. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25744` → after: `L25570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25570) · [Before (L25744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25744)

```diff
-       const jM = OM.getState(rM.HZ, OM.names.tL);
+       const UV = JV.getState(eV.zC, JV.names.aZ);
```

#### 2785. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25760-L25761` → after: `L25586-L25587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25586-L25587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25586-L25587) · [Before (L25760-L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25760-L25761)

```diff
-         const SM = null === (iM = MM.hU.grM(MM.eD)) || void 0 === iM ? void 0 : iM.ridingVehicleEId;
-         return !!SM && SM === (null === (OM = MM.hU.grM(rM.HZ)) || void 0 === OM ? void 0 : OM.ridingVehicleEId)
+         const YV = null === (xV = VV.sF.HxV(VV.bD)) || void 0 === xV ? void 0 : xV.ridingVehicleEId;
+         return !!YV && YV === (null === (JV = VV.sF.HxV(eV.zC)) || void 0 === JV ? void 0 : JV.ridingVehicleEId)
```

#### 2786. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25763` → after: `L25589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25589) · [Before (L25763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25763)

```diff
-         const rM = aM.d.get("gameCamera");
+         const eV = yV.c.get("gameCamera");
```

#### 2787. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25765` → after: `L25591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25591) · [Before (L25765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25765)

```diff
-       }(rM.HZ)
+       }(eV.zC)
```

#### 2788. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25776` → after: `L25602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25602) · [Before (L25776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25776)

```diff
-   39989: (MM, rM, iM) => {
+   40140: (VV, eV, xV) => {
```

#### 2789. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25782` → after: `L25608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25608) · [Before (L25782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25782)

```diff
-     var OM = iM(347),
+     var JV = xV(380),
```

#### 2790. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25784-L25789` → after: `L25610-L25615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25610-L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25610-L25615) · [Before (L25784-L25789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25784-L25789)

```diff
-       jM = iM(37705),
-       aM = iM(37699),
-       PM = iM(9816),
-       nM = iM(3063),
-       QM = iM(38965),
-       zM = iM(39055);
+       UV = xV(37930),
+       yV = xV(37925),
+       pV = xV(9820),
+       QV = xV(3093),
+       nV = xV(39151),
+       wV = xV(39225);
```

#### 2791. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25802` → after: `L25628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25628) · [Before (L25802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25802)

```diff
-         PU: (MM, rM) => {
+         uF: (VV, eV) => {
```

#### 2792. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25805` → after: `L25631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25631) · [Before (L25805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25805)

```diff
-         vW: null,
+         bR: null,
```

#### 2793. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25809-L25810` → after: `L25635-L25636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25635-L25636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25635-L25636) · [Before (L25809-L25810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25809-L25810)

```diff
-             if (!MM.hU.KrM(nM.HZ).isAlive) continue;
-             const rM = MM.hU.nrM(nM.HZ);
+             if (!VV.sF.rJV(QV.zC).isAlive) continue;
+             const eV = VV.sF.XxV(QV.zC);
```

#### 2794. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25813-L25815` → after: `L25639-L25641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25639-L25641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25639-L25641) · [Before (L25813-L25815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25813-L25815)

```diff
-             if (MM.bloxd.getResolvedPhysicsSettings(nM.HZ, iM).disableFootstepSounds) continue;
-             const mM = MM.hU.XE(nM.HZ);
-             let hM = OM.sE(Math.floor(mM[0]), Math.ceil(mM[1]) - 1, Math.floor(mM[2]));
+             if (VV.bloxd.getResolvedPhysicsSettings(QV.zC, xV).disableFootstepSounds) continue;
+             const vV = VV.sF.YF(QV.zC);
+             let kV = JV.mq(Math.floor(vV[0]), Math.ceil(vV[1]) - 1, Math.floor(vV[2]));
```

#### 2795. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25820` → after: `L25646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25646) · [Before (L25820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25820)

```diff
-             const JM = SM().RQ(nM.lastPos, mM);
+             const bV = YV().Dn(QV.lastPos, vV);
```

#### 2796. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25822` → after: `L25648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25648) · [Before (L25822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25822)

```diff
-             const dM = (0, zM.getRigFootfallPhase)(MM, nM.HZ);
+             const EV = (0, wV.getRigFootfallPhase)(VV, QV.zC);
```

#### 2797. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25824-L25827` → after: `L25650-L25653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25650-L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25650-L25653) · [Before (L25824-L25827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25824-L25827)

```diff
-             const yM = Number.isNaN(dM) ? nM.distSinceLastSound > LM : nM.stepPending;
-             if (rM.isOnGround() && 0 !== hM && (yM && !PM.k[hM].CH)) {
-               const MM = (0, jM.f)(`step_${(0,QM.b)(hM,!1)}`);
-               aM.e.play(MM, .15), nM.distSinceLastSound = 0, nM.stepPending = !1
+             const BV = Number.isNaN(EV) ? QV.distSinceLastSound > ZV : QV.stepPending;
+             if (eV.isOnGround() && 0 !== kV && (BV && !pV.k[kV].Cr)) {
+               const VV = (0, UV.f)(`step_${(0,nV.b)(kV,!1)}`);
+               yV.d.play(VV, .15), QV.distSinceLastSound = 0, QV.stepPending = !1
```

#### 2798. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25840` → after: `L25666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25666) · [Before (L25840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25840)

```diff
-   39996: (MM, rM, iM) => {
+   40146: (VV, eV, xV) => {
```

#### 2799. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25846-L25847` → after: `L25672-L25673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25672-L25673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25672-L25673) · [Before (L25846-L25847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25846-L25847)

```diff
-         PU: function(MM, rM) {},
-         vW: function(MM, rM) {},
+         uF: function(VV, eV) {},
+         bR: function(VV, eV) {},
```

#### 2800. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25855` → after: `L25681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25681) · [Before (L25855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25855)

```diff
-   39890: (MM, rM, iM) => {
+   40029: (VV, eV, xV) => {
```

#### 2801. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25860-L25861` → after: `L25686-L25687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25686-L25687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25686-L25687) · [Before (L25860-L25861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25860-L25861)

```diff
-     var OM = iM(4069),
-       SM = iM(347),
+     var JV = xV(4098),
+       YV = xV(380),
```

#### 2802. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25863-L25867` → after: `L25689-L25693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25689-L25693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25689-L25693) · [Before (L25863-L25867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25863-L25867)

```diff
-       aM = iM(4129),
-       PM = iM(39872),
-       nM = iM(1265),
-       QM = iM(38616),
-       zM = iM(38572);
+       yV = xV(4163),
+       pV = xV(40007),
+       QV = xV(1283),
+       nV = xV(38791),
+       wV = xV(38765);
```

#### 2803. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25876` → after: `L25702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25702) · [Before (L25876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25876)

```diff
-           if (console.assert(1 === iM.length, "There should only be one entity with updateServerOfMovement."), MM.hU.KrM(MM.eD).isAlive)
+           if (console.assert(1 === xV.length, "There should only be one entity with updateServerOfMovement."), VV.sF.rJV(VV.bD).isAlive)
```

#### 2804. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25879` → after: `L25705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25705) · [Before (L25879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25879)

```diff
-               const rM = MM.hU.jK(MM.eD).arM;
+               const eV = VV.sF.U_(VV.bD).AxV;
```

#### 2805. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25881-L25882` → after: `L25707-L25708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25707-L25708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25707-L25708) · [Before (L25881-L25882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25881-L25882)

```diff
-               const iM = MM.hU.grM(PM.HZ),
-                 mM = MM.hU.nrM(PM.HZ),
+               const xV = VV.sF.HxV(pV.zC),
+                 vV = VV.sF.XxV(pV.zC),
```

#### 2806. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25884-L25901` → after: `L25710-L25727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25710-L25727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25710-L25727) · [Before (L25884-L25901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25884-L25901)

```diff
-                   nz: rM[0],
-                   Qz: rM[1],
-                   zz: rM[2],
-                   mz: (0, QM.v)(MM.bloxd.getResolvedPhysicsSettings(PM.HZ, mM.physicsState), mM.steeringHeading, zM.b.getPlayerFacingHeading(MM)),
-                   Lz: iM.heading,
-                   hz: iM.speed,
-                   Jz: iM.jumping,
-                   dz: iM.crouching,
-                   yz: iM.cameraPitch,
-                   lz: iM.armSwinging,
-                   Ez: null !== (SM = MM.qMM) && void 0 !== SM ? SM : jM().copy(LM, MM.camera.eT()),
-                   Uz: iM.cameraDirection,
-                   Gz: (0, OM.getLastReceivedPacketId)(),
-                   Cz: MM.Am,
-                   ez: iM.bunnyHopDisabled,
-                   bz: iM.toggleFly,
- ... (2 more removed lines; see GitHub link above)
+                   jw: eV[0],
+                   qw: eV[1],
+                   tw: eV[2],
+                   Tw: (0, nV.p)(VV.bloxd.getResolvedPhysicsSettings(pV.zC, vV.physicsState), vV.steeringHeading, wV.e.getPlayerFacingHeading(VV)),
+                   Fw: xV.heading,
+                   Pw: xV.speed,
+                   Aw: xV.jumping,
+                   Nw: xV.crouching,
+                   Xw: xV.cameraPitch,
+                   Mw: xV.armSwinging,
+                   zw: null !== (YV = VV.kxV) && void 0 !== YV ? YV : UV().copy(ZV, VV.camera.L_()),
+                   Gw: xV.cameraDirection,
+                   Ww: (0, JV.getLastReceivedPacketId)(),
+                   Rw: VV.Vr,
+                   gw: xV.bunnyHopDisabled,
+                   Dw: xV.toggleFly,
+ ... (2 more added lines; see GitHub link above)
```

#### 2807. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25903` → after: `L25729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25729) · [Before (L25903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25903)

```diff
-               isNaN(HM.hz) && (console.error("speed was NaN! Setting to 0"), HM.hz = 0);
+               isNaN(rV.Pw) && (console.error("speed was NaN! Setting to 0"), rV.Pw = 0);
```

#### 2808. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25917` → after: `L25743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25743) · [Before (L25917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25917)

```diff
-               hM.pitch = MM.camera.pitch, JM.speed = iM.speed, 0 === hM.pitch && (JM.speed *= 1.3), (0, OM.sendColyMessage)(aM.Xh, HM)
+               kV.pitch = VV.camera.pitch, bV.speed = xV.speed, 0 === kV.pitch && (bV.speed *= 1.3), (0, JV.sendColyMessage)(yV.Oh, rV)
```

#### 2809. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25927` → after: `L25753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25753) · [Before (L25927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25927)

```diff
-   39774: (MM, rM, iM) => {
+   39923: (VV, eV, xV) => {
```

#### 2810. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25931-L25932` → after: `L25757-L25758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25757-L25758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25757-L25758) · [Before (L25931-L25932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25931-L25932)

```diff
-       h: () => GM,
-       k: () => bM,
+       i: () => FV,
+       l: () => AV,
```

#### 2811. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25934` → after: `L25760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25760) · [Before (L25934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25934)

```diff
-       r: () => lM
+       p: () => jV
```

#### 2812. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25936-L25949` → after: `L25762-L25775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25762-L25775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25762-L25775) · [Before (L25936-L25949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25936-L25949)

```diff
-     var OM = iM(313),
-       SM = iM(39794),
-       jM = iM(3076),
-       aM = iM(3085),
-       PM = iM(39781),
-       nM = iM(39788),
-       QM = iM(19),
-       zM = iM(94),
-       LM = iM(3230),
-       mM = iM(83),
-       HM = iM(114),
-       hM = iM(30),
-       JM = iM(2562),
-       dM = iM(106);
+     var JV = xV(364),
+       YV = xV(39943),
+       UV = xV(3105),
+       yV = xV(3107),
+       pV = xV(39931),
+       QV = xV(39934),
+       nV = xV(27),
+       wV = xV(110),
+       ZV = xV(3239),
+       vV = xV(99),
+       rV = xV(134),
+       kV = xV(40),
+       bV = xV(2617),
+       EV = xV(124);
```

#### 2813. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25957` → after: `L25783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25783) · [Before (L25957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25957)

```diff
-       const iM = null !== (rM = zM.currentUrl.getSearchParam(MM)) && void 0 !== rM ? rM : hM.g.getItem(MM);
+       const xV = null !== (eV = wV.currentUrl.getSearchParam(VV)) && void 0 !== eV ? eV : kV.m.getItem(VV);
```

#### 2814. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25961-L25962` → after: `L25787-L25788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25787-L25788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25787-L25788) · [Before (L25961-L25962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25961-L25962)

```diff
-       (0, jM.D)(null);
-       const iM = (0, aM.n)((0, aM.k)(rM.useWebGpu, !0));
+       (0, UV.B)(null);
+       const xV = (0, yV.i)((0, yV.h)(eV.useWebGpu, !0));
```

#### 2815. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25965` → after: `L25791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25791) · [Before (L25965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25965)

```diff
-       null !== PM && console.info(`Renderer: ${iM.requested} from ${PM}`), null !== iM.fallbackReason && console.warn(`Renderer: ${iM.fallbackReason}`);
+       null !== pV && console.info(`Renderer: ${xV.requested} from ${pV}`), null !== xV.fallbackReason && console.warn(`Renderer: ${xV.fallbackReason}`);
```

#### 2816. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25971` → after: `L25797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25797) · [Before (L25971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25971)

```diff
-           if (iM && !0 === hM.g.getItem(dM.N) && !0 !== hM.g.getItem(OM.fc)) return (0, mM.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), dM.e;
+           if (xV && !0 === kV.m.getItem(EV.G) && !0 !== kV.m.getItem(JV.jc)) return (0, vV.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), EV.b;
```

#### 2817. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25976` → after: `L25802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25802) · [Before (L25976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25976)

```diff
-             } = await (0, jM.v)(aM).load();
+             } = await (0, UV.t)(yV).load();
```

#### 2818. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25978-L25981` → after: `L25804-L25807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25804-L25807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25804-L25807) · [Before (L25978-L25981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25978-L25981)

```diff
-             const OM = QM.d.antiAliasingOnWebGpuAdapter((0, HM.k)()),
-               SM = (0, nM.e)(MM),
-               PM = (0, nM.b)(SM, {
-                 size: MM => (0, LM.k)(SM, MM)
+             const JV = nV.b.antiAliasingOnWebGpuAdapter((0, rV.k)()),
+               YV = (0, QV.f)(VV),
+               pV = (0, QV.c)(YV, {
+                 size: VV => (0, ZV.j)(YV, VV)
```

#### 2819. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25984` → after: `L25810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25810) · [Before (L25984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25984)

```diff
-               biM: OM,
+               fJV: JV,
```

#### 2820. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25990` → after: `L25816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25816) · [Before (L25990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25990)

```diff
-             const MM = (0, SM.d)(JM);
+             const VV = (0, YV.b)(bV);
```

#### 2821. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25993` → after: `L25819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25819) · [Before (L25993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25993)

```diff
-             return "string" === typeof rM ? (console.warn(`Lite could not start, falling back to WebGL: ${String(JM)}`), rM) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", JM), "it failed to start (see the console)")
+             return "string" === typeof eV ? (console.warn(`Lite could not start, falling back to WebGL: ${String(bV)}`), eV) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", bV), "it failed to start (see the console)")
```

#### 2822. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25996` → after: `L25822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25822) · [Before (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25996)

```diff
-         if ("lite" === iM.choice && hM.g.setItem(dM.v, "string" === typeof PM), "string" !== typeof PM) return QM.d.followGameGpu((0, HM.k)()), (0, mM.setWebGpuFallbackReason)("none"), (0, aM.o)(iM), (0, jM.D)(PM), {
+         if ("lite" === xV.choice && kV.m.setItem(EV.u, "string" === typeof pV), "string" !== typeof pV) return nV.b.followGameGpu((0, rV.k)()), (0, vV.setWebGpuFallbackReason)("none"), (0, yV.l)(xV), (0, UV.B)(pV), {
```

#### 2823. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L25999` → after: `L25825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25825) · [Before (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L25999)

```diff
-         zM = (0, aM.b)(iM.choice, [PM]), MM.replaceWith(MM.cloneNode(!1))
+         wV = (0, yV.c)(xV.choice, [pV]), VV.replaceWith(VV.cloneNode(!1))
```

#### 2824. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L26001` → after: `L25827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25827) · [Before (L26001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L26001)

```diff
-       return (0, aM.o)({
+       return (0, yV.l)({
```

#### 2825. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L26005` → after: `L25831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25831) · [Before (L26005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L26005)

```diff
-       }), QM.d.followGameGpu(null), {
+       }), nV.b.followGameGpu(null), {
```

#### 2826. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L26011` → after: `L25837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR25837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L25837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/107.js#L25837) · [Before (L26011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/107.js#L26011)

```diff
-       return Promise.all([iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(288), iM.e(282), iM.e(283), iM.e(268), iM.e(0)]).then((() => iM(44202)))
+       return Promise.all([xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(289), xV.e(302), xV.e(288), xV.e(282), xV.e(283), xV.e(268), xV.e(0)]).then((() => xV(44455)))
```
