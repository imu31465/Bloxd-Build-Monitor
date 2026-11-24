# Changed — Bundle Modifications Report (Part 021 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `21 / 69` (**296** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 020](part-020.md) · [Part 022 →](part-022.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/298.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/298.js` (867 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f)

#### 107. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3084-L3086` → after: `L2515-L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2515-L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2515-L2542) · [Before (L3084-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3084-L3086)

```diff
- 
-       function MZ(CC) {
-         return CC.toLowerCase()
+       getGoto(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = this.goto;
+         if (ip >= Op[0]) return -1;
+         for (let op = Op[ip + 1];;) {
+           let ip = Op[op++],
+             Ip = 1 & ip,
+             Sp = Op[op++];
+           if (Ip && cp) return Sp;
+           for (let cp = op + (ip >> 1); op < cp; op++)
+             if (Op[op] == pp) return Sp;
+           if (Ip) return -1
+         }
+       }
+       hasAction(pp, ip) {
+         let cp = this.data;
+ ... (12 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3088-L3091` → after: `L2544-L2545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2544-L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2544-L2545) · [Before (L3088-L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3088-L3091)

```diff
-       var gZ = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g;
- 
-       function SZ(CC) {
-         return gZ.test(CC) ? CC.replace(gZ, MZ) : CC
+       stateSlot(pp, ip) {
+         return this.states[6 * pp + ip]
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3093-L3095` → after: `L2547-L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2547-L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2547-L2548) · [Before (L3093-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3093-L3095)

```diff
- 
-       function pZ() {
-         throw new Error("Not implemented")
+       stateFlag(pp, ip) {
+         return (this.stateSlot(pp, 0) & ip) > 0
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3097-L3100` → after: `L2550-L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2550-L2551) · [Before (L3097-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3097-L3100)

```diff
- 
-       function PZ(CC) {
-         let zC;
-         return () => (CC && (zC = CC(), CC = void 0), zC)
+       validAction(pp, ip) {
+         return !!this.allActions(pp, (pp => pp == ip || null))
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3102-L3108` → after: `L2553-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2553-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2553-L2561) · [Before (L3102-L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3102-L3108)

```diff
- 
-       function GZ(CC) {
-         const zC = new Map;
-         return ZC => {
-           const QC = `${typeof ZC}:${ZC}`;
-           let wC = zC.get(QC);
-           return void 0 !== wC || zC.has(QC) || (wC = CC(ZC), zC.set(QC, wC)), wC
+       allActions(pp, ip) {
+         let cp = this.stateSlot(pp, 4),
+           Op = cp ? ip(cp) : void 0;
+         for (let op = this.stateSlot(pp, 1); null == Op; op += 3) {
+           if (65535 == this.data[op]) {
+             if (1 != this.data[op + 1]) break;
+             op = Cp(this.data, op + 2)
+           }
+           Op = ip(Cp(this.data, op + 1))
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3111-L3114` → after: `L2565-L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2565-L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2565-L2577) · [Before (L3111-L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3111-L3114)

```diff
-       var RZ = (CC => (CC[CC.None = 0] = "None", CC[CC.Normal = 1] = "Normal", CC[CC.Aggressive = 2] = "Aggressive", CC[CC.VeryAggressive = 3] = "VeryAggressive", CC))(RZ || {});
- 
-       function AZ(CC, zC) {
-         return CC === zC
+       nextStates(pp) {
+         let ip = [];
+         for (let cp = this.stateSlot(pp, 1);; cp += 3) {
+           if (65535 == this.data[cp]) {
+             if (1 != this.data[cp + 1]) break;
+             cp = Cp(this.data, cp + 2)
+           }
+           if (0 == (1 & this.data[cp + 2])) {
+             let pp = this.data[cp + 1];
+             ip.some(((ip, cp) => 1 & cp && ip == pp)) || ip.push(this.data[cp], pp)
+           }
+         }
+         return ip
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3116-L3118` → after: `L2579-L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2579-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2579-L2596) · [Before (L3116-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3116-L3118)

```diff
- 
-       function xZ(CC, zC) {
-         return CC === zC || void 0 !== CC && void 0 !== zC && CC.toUpperCase() === zC.toUpperCase()
+       configure(pp) {
+         let ip = Object.assign(Object.create(Mp.prototype), this);
+         if (pp.props && (ip.nodeSet = this.nodeSet.extend(...pp.props)), pp.top) {
+           let cp = this.topRules[pp.top];
+           if (!cp) throw new RangeError(`Invalid top rule name ${pp.top}`);
+           ip.top = cp
+         }
+         return pp.tokenizers && (ip.tokenizers = this.tokenizers.map((ip => {
+           let cp = pp.tokenizers.find((pp => pp.from == ip));
+           return cp ? cp.to : ip
+         }))), pp.specializers && (ip.specializers = this.specializers.slice(), ip.specializerSpecs = this.specializerSpecs.map(((cp, Op) => {
+           let op = pp.specializers.find((pp => pp.from == cp.external));
+           if (!op) return cp;
+           let Ip = Object.assign(Object.assign({}, cp), {
+             external: op.to
+           });
+ ... (2 more added lines; see GitHub link above)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3120-L3122` → after: `L2598-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2598-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2598-L2599) · [Before (L3120-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3120-L3122)

```diff
- 
-       function JZ(CC, zC) {
-         return AZ(CC, zC)
+       hasWrappers() {
+         return this.wrappers.length > 0
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3124-L3126` → after: `L2601-L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2601-L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2601-L2602) · [Before (L3124-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3124-L3126)

```diff
- 
-       function IZ(CC, zC) {
-         return CC === zC ? 0 : void 0 === CC ? -1 : void 0 === zC ? 1 : CC < zC ? -1 : 1
+       getName(pp) {
+         return this.termNames ? this.termNames[pp] : String(pp <= this.maxNode && this.nodeSet.types[pp].name || pp)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3128-L3130` → after: `L2604-L2605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2604-L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2604-L2605) · [Before (L3128-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3128-L3130)

```diff
- 
-       function iZ(CC, zC) {
-         return IZ(CC, zC)
+       get eofTerm() {
+         return this.maxNode + 1
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3132-L3134` → after: `L2607-L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2607-L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2607-L2608) · [Before (L3132-L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3132-L3134)

```diff
- 
-       function vZ(CC, zC) {
-         return iZ(null == CC ? void 0 : CC.start, null == zC ? void 0 : zC.start) || iZ(null == CC ? void 0 : CC.length, null == zC ? void 0 : zC.length)
+       get topNode() {
+         return this.nodeSet.types[this.top[1]]
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3136-L3139` → after: `L2610-L2612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2610-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2610-L2612) · [Before (L3136-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3136-L3139)

```diff
- 
-       function eZ(CC, zC, ZC) {
-         for (let QC = 0; QC < CC.length; QC++) zC = Math.max(zC, ZC(CC[QC]));
-         return zC
+       dynamicPrecedence(pp) {
+         let ip = this.dynamicPrecedences;
+         return null == ip ? 0 : ip[pp] || 0
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3141-L3143` → after: `L2614-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2614-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2614-L2626) · [Before (L3141-L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3141-L3143)

```diff
- 
-       function hZ(CC, zC) {
-         return Yz(CC, ((CC, ZC) => -1 === zC(CC, ZC) ? CC : ZC))
+       parseDialect(pp) {
+         let ip = Object.keys(this.dialects),
+           cp = ip.map((() => !1));
+         if (pp)
+           for (let op of pp.split(" ")) {
+             let pp = ip.indexOf(op);
+             pp >= 0 && (cp[pp] = !0)
+           }
+         let Op = null;
+         for (let op = 0; op < ip.length; op++)
+           if (!cp[op])
+             for (let pp, cp = this.dialects[ip[op]]; 65535 != (pp = this.data[cp++]);)(Op || (Op = new Uint8Array(this.maxTerm + 1)))[pp] = 1;
+         return new Rp(pp, cp, Op)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3145-L3147` → after: `L2628-L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2628-L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2628-L2629) · [Before (L3145-L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3145-L3147)

```diff
- 
-       function KZ(CC, zC) {
-         return CC === zC ? 0 : void 0 === CC ? -1 : void 0 === zC ? 1 : (CC = CC.toUpperCase()) < (zC = zC.toUpperCase()) ? -1 : CC > zC ? 1 : 0
+       static deserialize(pp) {
+         return new Mp(pp)
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3150-L3152` → after: `L2633-L2635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2633-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2633-L2635) · [Before (L3150-L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3150-L3152)

```diff
-       function YZ(CC, zC) {
-         return CC === zC ? 0 : void 0 === CC ? -1 : void 0 === zC ? 1 : (CC = CC.toLowerCase()) < (zC = zC.toLowerCase()) ? -1 : CC > zC ? 1 : 0
-       }
+     function Cp(pp, ip) {
+       return pp[ip] | pp[ip + 1] << 16
+     }
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3154-L3155` → after: `L2637-L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2637-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2637-L2640) · [Before (L3154-L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3154-L3155)

```diff
-       function dZ(CC, zC) {
-         return IZ(CC, zC)
+     function Ep(pp) {
+       if (pp.external) {
+         let ip = pp.extend ? 1 : 0;
+         return (cp, Op) => pp.external(cp, Op) << 1 | ip
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3158-L3178` → after: `L2692-L2993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2692-L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2692-L2993) · [Before (L3158-L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3158-L3178)

```diff
-       function mZ(CC) {
-         return CC ? KZ : dZ
-       }
-       var HZ, EZ, lZ = (() => function(CC) {
-         const zC = new Intl.Collator(CC, {
-           usage: "sort",
-           sensitivity: "variant",
-           numeric: !0
-         }).compare;
-         return (CC, ZC) => function(CC, zC, ZC) {
-           if (CC === zC) return 0;
-           if (void 0 === CC) return -1;
-           if (void 0 === zC) return 1;
-           const QC = ZC(CC, zC);
-           return QC < 0 ? -1 : QC > 0 ? 1 : 0
-         }(CC, ZC, zC)
- ... (5 more removed lines; see GitHub link above)
+     function fp(pp, ip) {
+       return pp >= 65 && pp <= 90 || pp >= 97 && pp <= 122 || 95 == pp || pp >= 192 || !ip && pp >= 48 && pp <= 57
+     }
+     const bp = new yp(((pp, ip) => {
+         if (60 != pp.next || !ip.dialectEnabled(0)) return;
+         if (pp.advance(), 47 == pp.next) return;
+         let cp = 0;
+         for (; lp.indexOf(pp.next) > -1;) pp.advance(), cp++;
+         if (fp(pp.next, !0)) {
+           for (pp.advance(), cp++; fp(pp.next, !1);) pp.advance(), cp++;
+           for (; lp.indexOf(pp.next) > -1;) pp.advance(), cp++;
+           if (44 == pp.next) return;
+           for (let ip = 0;; ip++) {
+             if (7 == ip) {
+               if (!fp(pp.next, !0)) return;
+               break
+ ... (286 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3180-L3182` → after: `L2995-L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2995-L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2995-L2999) · [Before (L3180-L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3180-L3182)

```diff
-       function cZ(CC) {
-         EZ !== CC && (EZ = CC, HZ = void 0)
-       }
+     function Ii(pp, ip) {
+       let cp = Vp.get(ip);
+       if (cp) return cp;
+       let op = [],
+         Ip = !0;
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3185` → after: `L3002-L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3002-L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3002-L3006) · [Before (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3185)

```diff
-         return HZ ?? (HZ = lZ(EZ)), HZ(CC, zC)
+         let Op = pp.sliceString(ip.from, ip.to);
+         op.push({
+           label: Op,
+           type: cp
+         })
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3187-L3189` → after: `L3008-L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3008-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3008-L3283) · [Before (L3187-L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3187-L3189)

```diff
- 
-       function rZ(CC, zC, ZC, QC) {
-         return CC === zC ? 0 : void 0 === CC ? -1 : void 0 === zC ? 1 : QC(CC[ZC], zC[ZC])
+       return ip.cursor(Op.h.IncludeAnonymous).iterate((ip => {
+         if (Ip) Ip = !1;
+         else if (ip.name) {
+           let pp = oi[ip.name];
+           if (pp && pp(ip, Sp) || ii.has(ip.name)) return !1
+         } else if (ip.to - ip.from > 8192) {
+           for (let cp of Ii(pp, ip.node)) op.push(cp);
+           return !1
+         }
+       })), Vp.set(ip, op), op
+     }
+     const Si = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
+       xi = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", … [truncated]
+ 
+     function Li(pp) {
+       let ip = (0, Gp.kb)(pp.state).resolveInner(pp.pos, -1);
+ ... (260 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3191-L3193` → after: `L3285-L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3285-L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3285-L3286) · [Before (L3191-L3193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3191-L3193)

```diff
- 
-       function sZ(CC, zC) {
-         return iZ(CC ? 1 : 0, zC ? 1 : 0)
+       isActiveAt(pp, ip) {
+         return Wp(pp, ip, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Yp) == this.data
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3195-L3206` → after: `L3288-L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3288-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3288-L3438) · [Before (L3195-L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3195-L3206)

```diff
- 
-       function TZ(CC, zC, ZC) {
-         const QC = Math.max(2, Math.floor(.34 * CC.length));
-         let wC, bC = Math.floor(.4 * CC.length) + 1;
-         for (const nC of zC) {
-           const zC = ZC(nC);
-           if (void 0 !== zC && Math.abs(zC.length - CC.length) <= QC) {
-             if (zC === CC) continue;
-             if (zC.length < 3 && zC.toLowerCase() !== CC.toLowerCase()) continue;
-             const ZC = aZ(CC, zC, bC - .1);
-             if (void 0 === ZC) continue;
-             PQ.assert(ZC < bC), bC = ZC, wC = nC
+       findRegions(pp) {
+         let ip = pp.facet(qp);
+         if ((null === ip || void 0 === ip ? void 0 : ip.data) == this.data) return [{
+           from: 0,
+           to: pp.doc.length
+         }];
+         if (!ip || !ip.allowsNesting) return [];
+         let cp = [],
+           Op = (pp, ip) => {
+             if (pp.prop(Yp) == this.data) return void cp.push({
+               from: ip,
+               to: ip + pp.length
+             });
+             let Ip = pp.prop(op.j.mounted);
+             if (Ip) {
+               if (Ip.tree.prop(Yp) == this.data) {
+ ... (135 more added lines; see GitHub link above)
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3211-L3227` → after: `L3461-L3488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3461-L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3461-L3488) · [Before (L3211-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3211-L3227)

```diff
- 
-       function aZ(CC, zC, ZC) {
-         let QC = new Array(zC.length + 1),
-           wC = new Array(zC.length + 1);
-         const bC = ZC + .01;
-         for (let fC = 0; fC <= zC.length; fC++) QC[fC] = fC;
-         for (let fC = 1; fC <= CC.length; fC++) {
-           const nC = CC.charCodeAt(fC - 1),
-             oC = Math.ceil(fC > ZC ? fC - ZC : 1),
-             qC = Math.floor(zC.length > ZC + fC ? ZC + fC : zC.length);
-           wC[0] = fC;
-           let FC = fC;
-           for (let CC = 1; CC < oC; CC++) wC[CC] = bC;
-           for (let ZC = oC; ZC <= qC; ZC++) {
-             const bC = CC[fC - 1].toLowerCase() === zC[ZC - 1].toLowerCase() ? QC[ZC - 1] + .1 : QC[ZC - 1] + 2,
-               oC = nC === zC.charCodeAt(ZC - 1) ? QC[ZC - 1] : Math.min(QC[ZC] + 1, wC[ZC - 1] + 1, bC);
- ... (1 more removed lines; see GitHub link above)
+       changes(pp, ip) {
+         let {
+           fragments: cp,
+           tree: Op,
+           treeLen: Ip,
+           viewport: Sp,
+           skipped: xp
+         } = this;
+         if (this.takeTree(), !pp.empty) {
+           let ip = [];
+           if (pp.iterChangedRanges(((pp, cp, Op, op) => ip.push({
+               fromA: pp,
+               toA: cp,
+               fromB: Op,
+               toB: op
+             }))), cp = op.u.applyChanges(cp, ip), Op = op.w.empty, Ip = 0, Sp = {
+ ... (12 more added lines; see GitHub link above)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3234-L3235` → after: `L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3491) · [Before (L3234-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3234-L3235)

```diff
-         const nC = QC[zC.length];
-         return nC > ZC ? void 0 : nC
+         return new dp(this.parser, ip, cp, Op, Ip, Sp, xp, this.scheduleOn)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3237-L3240` → after: `L3493-L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3493-L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3493-L3504) · [Before (L3237-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3237-L3240)

```diff
- 
-       function tZ(CC, zC, ZC) {
-         const QC = CC.length - zC.length;
-         return QC >= 0 && (ZC ? xZ(CC.slice(QC), zC) : CC.indexOf(zC, QC) === QC)
+       updateViewport(pp) {
+         if (this.viewport.from == pp.from && this.viewport.to == pp.to) return !1;
+         this.viewport = pp;
+         let ip = this.skipped.length;
+         for (let cp = 0; cp < this.skipped.length; cp++) {
+           let {
+             from: ip,
+             to: Op
+           } = this.skipped[cp];
+           ip < pp.to && Op > pp.from && (this.fragments = ep(this.fragments, ip, Op), this.skipped.splice(cp--, 1))
+         }
+         return !(this.skipped.length >= ip) && (this.reset(), !0)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3242-L3244` → after: `L3506-L3507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3506-L3507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3506-L3507) · [Before (L3242-L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3242-L3244)

```diff
- 
-       function DZ(CC, zC) {
-         return tZ(CC, zC) ? CC.slice(0, CC.length - zC.length) : CC
+       reset() {
+         this.parse && (this.takeTree(), this.parse = null)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3246-L3248` → after: `L3509-L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3509-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3509-L3513) · [Before (L3246-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3246-L3248)

```diff
- 
-       function jZ(CC, zC) {
-         return tZ(CC, zC) ? CC.slice(0, CC.length - zC.length) : void 0
+       skipUntilInView(pp, ip) {
+         this.skipped.push({
+           from: pp,
+           to: ip
+         })
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3250-L3263` → after: `L3515-L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3515-L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3515-L3532) · [Before (L3250-L3263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3250-L3263)

```diff
- 
-       function yZ(CC) {
-         let zC = CC.length;
-         for (let ZC = zC - 1; ZC > 0; ZC--) {
-           let QC = CC.charCodeAt(ZC);
-           if (QC >= 48 && QC <= 57)
-             do {
-               --ZC, QC = CC.charCodeAt(ZC)
-             } while (ZC > 0 && QC >= 48 && QC <= 57);
-           else {
-             if (!(ZC > 4) || 110 !== QC && 78 !== QC) break;
-             if (--ZC, QC = CC.charCodeAt(ZC), 105 !== QC && 73 !== QC) break;
-             if (--ZC, QC = CC.charCodeAt(ZC), 109 !== QC && 77 !== QC) break;
-             --ZC, QC = CC.charCodeAt(ZC)
+       static getSkippingParser(pp) {
+         return new class extends op.s {
+           createParse(ip, cp, Op) {
+             let Ip = Op[0].from,
+               Sp = Op[Op.length - 1].to;
+             return {
+               parsedPos: Ip,
+               advance() {
+                 let ip = Hp;
+                 if (ip) {
+                   for (let pp of Op) ip.tempSkipped.push(pp);
+                   pp && (ip.scheduleOn = ip.scheduleOn ? Promise.all([ip.scheduleOn, pp]) : pp)
+                 }
+                 return this.parsedPos = Sp, new op.w(op.p.none, [], [], Sp - Ip)
+               },
+               stoppedAt: null,
+ ... (2 more added lines; see GitHub link above)
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3270-L3274` → after: `L3536-L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3536-L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3536-L3539) · [Before (L3270-L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3270-L3274)

```diff
- 
-       function LZ(CC, zC) {
-         for (let ZC = 0; ZC < CC.length; ZC++)
-           if (CC[ZC] === zC) return UZ(CC, ZC), !0;
-         return !1
+       isDone(pp) {
+         pp = Math.min(pp, this.state.doc.length);
+         let ip = this.fragments;
+         return this.treeLen >= pp && ip.length && 0 == ip[0].from && ip[0].to >= pp
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3276-L3279` → after: `L3541-L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3541-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3541-L3542) · [Before (L3276-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3276-L3279)

```diff
- 
-       function UZ(CC, zC) {
-         for (let ZC = zC; ZC < CC.length - 1; ZC++) CC[ZC] = CC[ZC + 1];
-         CC.pop()
+       static get() {
+         return Hp
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3282-L3283` → after: `L3669-L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3669-L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3669-L3690) · [Before (L3282-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3282-L3283)

```diff
-       function BZ(CC, zC) {
-         CC[zC] = CC[CC.length - 1], CC.pop()
+     function Xp(pp) {
+       let ip = pp.facet(Ep);
+       return 9 == ip.charCodeAt(0) ? pp.tabSize * ip.length : ip.length
+     }
+ 
+     function lp(pp, ip) {
+       let cp = "",
+         Op = pp.tabSize,
+         op = pp.facet(Ep)[0];
+       if ("\t" == op) {
+         for (; ip >= Op;) cp += "\t", ip -= Op;
+         op = " "
+       }
+       for (let Ip = 0; Ip < ip; Ip++) cp += op;
+       return cp
+     }
+ ... (6 more added lines; see GitHub link above)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3285-L3291` → after: `L3692-L3710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3692-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3692-L3710) · [Before (L3285-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3285-L3291)

```diff
- 
-       function OZ(CC, zC) {
-         return function(CC, zC) {
-           for (let ZC = 0; ZC < CC.length; ZC++)
-             if (zC(CC[ZC])) return BZ(CC, ZC), !0;
-           return !1
-         }(CC, (CC => CC === zC))
+       let cp = Up(pp.state);
+       return cp.length >= ip ? function(pp, ip, cp) {
+         let Op = ip.resolveStack(cp),
+           op = ip.resolveInner(cp, -1).resolve(cp, 0).enterUnfinishedNodesBefore(cp);
+         if (op != Op.node) {
+           let pp = [];
+           for (let ip = op; ip && !(ip.from < Op.node.from || ip.to > Op.node.to || ip.from == Op.node.from && ip.type == Op.node.type); ip = ip.parent) pp.push(ip);
+           for (let ip = pp.length - 1; ip >= 0; ip--) Op = {
+             node: pp[ip],
+             next: Op
+           }
+         }
+         return Np(Op, pp, cp)
+       }(pp, cp, ip) : null
+     }
+     class Jp {
+ ... (3 more added lines; see GitHub link above)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3293-L3295` → after: `L3712-L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3712-L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3712-L3728) · [Before (L3293-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3293-L3295)

```diff
- 
-       function kZ(CC) {
-         return CC ? NZ : SZ
+       lineAt(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           cp = this.state.doc.lineAt(pp),
+           {
+             simulateBreak: Op,
+             simulateDoubleBreak: op
+           } = this.options;
+         return null != Op && Op >= cp.from && Op <= cp.to ? op && Op == pp ? {
+           text: "",
+           from: pp
+         } : (ip < 0 ? Op < pp : Op <= pp) ? {
+           text: cp.text.slice(Op - cp.from),
+           from: Op
+         } : {
+           text: cp.text.slice(0, Op - cp.from),
+           from: cp.from
+ ... (1 more added lines; see GitHub link above)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3297-L3298` → after: `L3730-L3732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3730-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3730-L3732) · [Before (L3297-L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3297-L3298)

```diff
- 
-       function VZ(CC) {
+       textAfterPos(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         if (this.options.simulateDoubleBreak && pp == this.options.simulateBreak) return "";
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3300-L3307` → after: `L3734-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3734-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3734-L3737) · [Before (L3300-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3300-L3307)

```diff
-           prefix: zC,
-           suffix: ZC
-         } = CC;
-         return `${zC}*${ZC}`
-       }
- 
-       function CQ(CC, zC) {
-         return PQ.assert(bQ(CC, zC)), zC.substring(CC.prefix.length, zC.length - CC.suffix.length)
+           text: cp,
+           from: Op
+         } = this.lineAt(pp, ip);
+         return cp.slice(pp - Op, Math.min(cp.length, pp + 100 - Op))
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3309-L3315` → after: `L3739-L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3739-L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3739-L3762) · [Before (L3309-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3309-L3315)

```diff
- 
-       function zQ(CC, zC, ZC) {
-         let QC, wC = -1;
-         for (let bC = 0; bC < CC.length; bC++) {
-           const nC = CC[bC],
-             fC = zC(nC);
-           fC.prefix.length > wC && bQ(fC, ZC) && (wC = fC.prefix.length, QC = nC)
+       column(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           {
+             text: cp,
+             from: Op
+           } = this.lineAt(pp, ip),
+           op = this.countColumn(cp, pp - Op),
+           Ip = this.options.overrideIndentation ? this.options.overrideIndentation(Op) : -1;
+         return Ip > -1 && (op += Ip - this.countColumn(cp, cp.search(/\S|$/))), op
+       }
+       countColumn(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.length;
+         return (0, Ip.Q)(pp, this.state.tabSize, ip)
+       }
+       lineIndent(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+ ... (8 more added lines; see GitHub link above)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3317` → after: `L3764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3764) · [Before (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3317)

```diff
-         return QC
+         return this.countColumn(cp, cp.search(/\S|$/))
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3319-L3321` → after: `L3766-L3767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3766-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3766-L3767) · [Before (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3319-L3321)

```diff
- 
-       function ZQ(CC, zC, ZC) {
-         return ZC ? xZ(CC.slice(0, zC.length), zC) : 0 === CC.lastIndexOf(zC, 0)
+       get simulatedBreak() {
+         return this.options.simulateBreak || null
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3324-L3325` → after: `L3772-L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3772-L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3772-L3775) · [Before (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3324-L3325)

```diff
-       function QQ(CC, zC) {
-         return ZQ(CC, zC) ? CC.substr(zC.length) : CC
+     function Np(pp, ip, cp) {
+       for (let Op = pp; Op; Op = Op.next) {
+         let pp = Tp(Op.node);
+         if (pp) return pp(bp.create(ip, cp, Op))
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3328-L3330` → after: `L3780-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3780-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3780-L3789) · [Before (L3328-L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3328-L3330)

```diff
-       function wQ(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NZ;
-         return ZQ(ZC(CC), ZC(zC)) ? CC.substring(zC.length) : void 0
+     function Tp(pp) {
+       let ip = pp.type.prop(Bp);
+       if (ip) return ip;
+       let cp, Op = pp.firstChild;
+       if (Op && (cp = Op.type.prop(op.j.closedBy))) {
+         let ip = pp.lastChild,
+           Op = ip && cp.indexOf(ip.name) > -1;
+         return pp => np(pp, !0, 1, void 0, Op && ! function(pp) {
+           return pp.pos == pp.options.simulateBreak && pp.options.simulateDoubleBreak
+         }(pp) ? ip.from : void 0)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3333-L3338` → after: `L3794-L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3794-L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3794-L3799) · [Before (L3333-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3333-L3338)

```diff
-       function bQ(CC, zC) {
-         let {
-           prefix: ZC,
-           suffix: QC
-         } = CC;
-         return zC.length >= ZC.length + QC.length && ZQ(zC, ZC) && tZ(zC, QC)
+     function fp() {
+       return 0
+     }
+     class bp extends Jp {
+       constructor(pp, ip, cp) {
+         super(pp.state, pp.options), this.base = pp, this.pos = ip, this.context = cp
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3340-L3342` → after: `L3801-L3802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3801-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3801-L3802) · [Before (L3340-L3342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3340-L3342)

```diff
- 
-       function nQ(CC, zC) {
-         return ZC => CC(ZC) && zC(ZC)
+       get node() {
+         return this.context.node
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3344-L3352` → after: `L3804-L3805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3804-L3805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3804-L3805) · [Before (L3344-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3344-L3352)

```diff
- 
-       function fQ() {
-         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-         return function() {
-           let CC;
-           for (const ZC of zC)
-             if (CC = ZC(...arguments), CC) return CC;
-           return CC
-         }
+       static create(pp, ip, cp) {
+         return new bp(pp, ip, cp)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3354-L3358` → after: `L3807-L3808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3807-L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3807-L3808) · [Before (L3354-L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3354-L3358)

```diff
- 
-       function oQ(CC) {
-         return function() {
-           return !CC(...arguments)
-         }
+       get textAfter() {
+         return this.textAfterPos(this.pos)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3360-L3364` → after: `L3810-L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3810-L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3810-L3811) · [Before (L3360-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3360-L3364)

```diff
- 
-       function qQ(CC) {}
- 
-       function FQ(CC) {
-         return void 0 === CC ? void 0 : [CC]
+       get baseIndent() {
+         return this.baseIndentFor(this.node)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3367-L3381` → after: `L3873-L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3873-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3873-L3880) · [Before (L3367-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3367-L3381)

```diff
-       function WQ(CC, zC, ZC, QC, wC, bC) {
-         bC ?? (bC = oZ);
-         let nC = 0,
-           fC = 0;
-         const oC = CC.length,
-           qC = zC.length;
-         let FC = !1;
-         for (; nC < oC && fC < qC;) {
-           const oC = CC[nC],
-             qC = zC[fC],
-             WC = ZC(oC, qC); - 1 === WC ? (QC(oC), nC++, FC = !0) : 1 === WC ? (wC(qC), fC++, FC = !0) : (bC(qC, oC), nC++, fC++)
-         }
-         for (; nC < oC;) QC(CC[nC++]), FC = !0;
-         for (; fC < qC;) wC(zC[fC++]), FC = !0;
-         return FC
+     function gp() {
+       let {
+         except: pp,
+         units: ip = 1
+       } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+       return cp => {
+         let Op = pp && pp.test(cp.textAfter);
+         return cp.baseIndent + (Op ? 0 : ip * cp.unit)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3384-L3392` → after: `L3885-L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3885-L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3885-L3916) · [Before (L3384-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3384-L3392)

```diff
-       function NQ(CC) {
-         const zC = [];
-         return MQ(CC, zC, void 0, 0), zC
-       }
- 
-       function MQ(CC, zC, ZC, QC) {
-         for (const wC of CC[QC]) {
-           let bC;
-           ZC ? (bC = ZC.slice(), bC.push(wC)) : bC = [wC], QC === CC.length - 1 ? zC.push(bC) : MQ(CC, zC, bC, QC + 1)
+     function rp() {
+       return Ip.n.transactionFilter.of((pp => {
+         if (!pp.docChanged || !pp.isUserEvent("input.type") && !pp.isUserEvent("input.complete")) return pp;
+         let ip = pp.startState.languageDataAt("indentOnInput", pp.startState.selection.main.head);
+         if (!ip.length) return pp;
+         let cp = pp.newDoc,
+           {
+             head: Op
+           } = pp.newSelection.main,
+           op = cp.lineAt(Op);
+         if (Op > op.from + Gp) return pp;
+         let Ip = cp.sliceString(op.from, Op);
+         if (!ip.some((pp => pp.test(Ip)))) return pp;
+         let {
+           state: Sp
+         } = pp, xp = -1, Lp = [];
+ ... (16 more added lines; see GitHub link above)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3395-L3401` → after: `L3946-L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3946-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3946-L3958) · [Before (L3395-L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3395-L3401)

```diff
- 
-       function gQ(CC, zC) {
-         if (void 0 !== CC) {
-           const ZC = CC.length;
-           let QC = 0;
-           for (; QC < ZC && zC(CC[QC]);) QC++;
-           return CC.slice(0, QC)
+       return function(pp, ip, cp) {
+         let Op = Up(pp);
+         if (Op.length < cp) return null;
+         let op = null;
+         for (let Ip = Op.resolveStack(cp, 1); Ip; Ip = Ip.next) {
+           let Sp = Ip.node;
+           if (Sp.to <= cp || Sp.from > cp) continue;
+           if (op && Sp.from < ip) break;
+           let xp = Sp.type.prop(zp);
+           if (xp && (Sp.to < Op.length - 50 || Op.length == pp.doc.length || !Kp(Sp))) {
+             let Op = xp(Sp, pp);
+             Op && Op.from <= cp && Op.from >= ip && Op.to > cp && (op = Op)
+           }
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3403` → after: `L3960-L3977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3960-L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3960-L3977) · [Before (L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3403)

```diff
-       }
+         return op
+       }(pp, ip, cp)
+     }
+ 
+     function ii(pp, ip) {
+       let cp = ip.mapPos(pp.from, 1),
+         Op = ip.mapPos(pp.to, -1);
+       return cp >= Op ? void 0 : {
+         from: cp,
+         to: Op
+       }
+     }
+     const ci = Ip.C.define({
+         map: ii
+       }),
+       Oi = Ip.C.define({
+ ... (2 more added lines; see GitHub link above)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3405-L3410` → after: `L3979-L4078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR3979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L3979-L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L3979-L4078) · [Before (L3405-L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3405-L3410)

```diff
-       function SQ(CC, zC) {
-         if (void 0 !== CC) {
-           const ZC = CC.length;
-           let QC = 0;
-           for (; QC < ZC && zC(CC[QC]);) QC++;
-           return CC.slice(QC)
+     function oi(pp) {
+       let ip = [];
+       for (let {
+           head: cp
+         }
+         of pp.state.selection.By) ip.some((pp => pp.from <= cp && pp.to >= cp)) || ip.push(pp.lineBlockAt(cp));
+       return ip
+     }
+     const Ii = Ip.E.define({
+       create: () => Sp.c.none,
+       update(pp, ip) {
+         ip.isUserEvent("delete") && ip.changes.iterChangedRanges(((ip, cp) => pp = Si(pp, ip, cp))), pp = pp.map(ip.changes);
+         for (let cp of ip.effects)
+           if (cp.is(ci) && !Li(pp, cp.value.from, cp.value.to)) {
+             let {
+               preparePlaceholder: Op
+ ... (84 more added lines; see GitHub link above)
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3412-L3422` → after: `L4080-L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4080-L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4080-L4092) · [Before (L3412-L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3412-L3422)

```diff
-       }
- 
-       function pQ() {
-         return "undefined" !== typeof process && !!process.nextTick && !process.browser && !0
-       }
-       var PQ, GQ = (CC => (CC[CC.Off = 0] = "Off", CC[CC.Error = 1] = "Error", CC[CC.Warning = 2] = "Warning", CC[CC.Info = 3] = "Info", CC[CC.Verbose = 4] = "Verbose", CC))(GQ || {});
-       (CC => {
-         let zC = 0;
- 
-         function ZC(zC) {
-           return CC.currentLogLevel <= zC
+       }, {
+         key: "Ctrl-Shift-]",
+         mac: "Cmd-Alt-]",
+         run: pp => {
+           if (!pp.state.field(Ii, !1)) return !1;
+           let ip = [];
+           for (let cp of oi(pp)) {
+             let Op = xi(pp.state, cp.from, cp.to);
+             Op && ip.push(Oi.of(Op), Di(pp, Op, !1))
+           }
+           return ip.length && pp.dispatch({
+             effects: ip
+           }), ip.length > 0
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3424-L3426` → after: `L4094-L4122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4094-L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4094-L4122) · [Before (L3424-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3424-L3426)

```diff
- 
-         function QC(zC, QC) {
-           CC.loggingHost && ZC(zC) && CC.loggingHost.log(zC, QC)
+       }, {
+         key: "Ctrl-Alt-[",
+         run: pp => {
+           let {
+             state: ip
+           } = pp, cp = [];
+           for (let Op = 0; Op < ip.doc.length;) {
+             let op = pp.lineBlockAt(Op),
+               Ip = Vp(ip, op.from, op.to);
+             Ip && cp.push(ci.of(Ip)), Op = (Ip ? pp.lineBlockAt(Ip.to) : op).to + 1
+           }
+           return cp.length && pp.dispatch({
+             effects: Yi(pp.state, cp)
+           }), !!cp.length
+         }
+       }, {
+ ... (13 more added lines; see GitHub link above)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3429-L3442` → after: `L4134-L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4134-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4134-L4258) · [Before (L3429-L3442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3429-L3442)

```diff
-         function wC(CC) {
-           QC(3, CC)
-         }
-         var bC;
-         CC.currentLogLevel = 2, CC.isDebugging = !1, CC.shouldLog = ZC, CC.log = wC, (bC = wC = CC.log || (CC.log = {})).error = function(CC) {
-           QC(1, CC)
-         }, bC.warn = function(CC) {
-           QC(2, CC)
-         }, bC.log = function(CC) {
-           QC(3, CC)
-         }, bC.trace = function(CC) {
-           QC(4, CC)
-         };
-         const nC = {};
+     function yi(pp) {
+       let ip = [Ii, ei];
+       return pp && ip.push(Wi.of(pp)), ip
+     }
+ 
+     function Ui(pp, ip) {
+       let {
+         state: cp
+       } = pp, Op = cp.facet(Wi), op = ip => {
+         let cp = pp.lineBlockAt(pp.posAtDOM(ip.target)),
+           Op = xi(pp.state, cp.from, cp.to);
+         Op && pp.dispatch({
+           effects: Oi.of(Op)
+         }), ip.preventDefault()
+       };
+       if (Op.placeholderDOM) return Op.placeholderDOM(pp, op, ip);
+ ... (109 more added lines; see GitHub link above)
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3445-L3465` → after: `L4261-L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4261-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4261-L4262) · [Before (L3445-L3465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3445-L3465)

```diff
-           return zC >= CC
-         }
- 
-         function oC(zC, ZC) {
-           return !!fC(zC) || (nC[ZC] = {
-             level: zC,
-             assertion: CC[ZC]
-           }, CC[ZC] = oZ, !1)
-         }
- 
-         function qC(CC, zC) {
-           const ZC = new Error(CC ? `Debug Failure. ${CC}` : "Debug Failure.");
-           throw Error.captureStackTrace && Error.captureStackTrace(ZC, zC || qC), ZC
-         }
- 
-         function FC(CC, zC, ZC, QC) {
- ... (5 more removed lines; see GitHub link above)
+           let ip = Lp.b.newName();
+           return (cp || (cp = Object.create(null)))["." + ip] = pp, ip
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3468-L3470` → after: `L4285-L4408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4285-L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4285-L4408) · [Before (L3468-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3468-L3470)

```diff
-         function NC(CC, zC, ZC) {
-           for (const QC of CC) WC(QC, zC, ZC || NC)
-         }
+     function mi(pp) {
+       let ip = pp.facet(ji);
+       return ip.length ? ip : pp.facet(ki)
+     }
+ 
+     function Ri(pp, ip) {
+       let cp, Op = [Mi];
+       return pp instanceof ui && (pp.module && Op.push(Sp.f.styleModule.of(pp.module)), cp = pp.themeType), (null === ip || void 0 === ip ? void 0 : ip.fallback) ? Op.push(ki.of(pp)) : cp ? Op.push(ji.computeN([Sp.f.darkTheme], (ip => ip.facet(Sp.f.darkTheme) == ("dark" == cp) ?  … [truncated]
+     }
+     class qi {
+       constructor(pp) {
+         this.markCache = Object.create(null), this.tree = Up(pp.state), this.uO = this.buildDeco(pp, mi(pp.state)), this.decoratedTo = pp.viewport.to
+       }
+       update(pp) {
+         let ip = Up(pp.state),
+           cp = mi(pp.state),
+ ... (108 more added lines; see GitHub link above)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3472-L3474` → after: `L4410-L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4410-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4410-L4468) · [Before (L3472-L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3472-L3474)

```diff
-         function MC(CC) {
-           let zC = arguments.length > 2 ? arguments[2] : void 0;
-           return qC(`${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Illegal value:"} ${"object"===typeof CC&&mz(CC,"kind")&&mz(CC,"pos")?"SyntaxKind: "+AC(CC.kind):JSON.stringify(CC)}`, zC || MC)
+     function Ni(pp) {
+       let ip = [],
+         cp = pp.matched ? Ji : Bi;
+       return ip.push(cp.range(pp.start.from, pp.start.to)), pp.end && ip.push(cp.range(pp.end.from, pp.end.to)), ip
+     }
+ 
+     function Ti(pp) {
+       let ip = [],
+         cp = pp.facet(Qi);
+       for (let Op of pp.selection.By) {
+         if (!Op.empty) continue;
+         let op = gi(pp, Op.head, -1, cp) || Op.head > 0 && gi(pp, Op.head - 1, 1, cp) || cp.afterCursor && (gi(pp, Op.head, 1, cp) || Op.head < pp.doc.length && gi(pp, Op.head + 1, -1, cp));
+         op && (ip = ip.concat(cp.renderMatch(op, pp)))
+       }
+       return Sp.c.set(ip, !0)
+     }
+ ... (43 more added lines; see GitHub link above)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3476-L3485` → after: `L4470-L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4470-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4470-L4500) · [Before (L3476-L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3476-L3485)

```diff
- 
-         function gC(CC) {}
- 
-         function SC(CC) {
-           if ("function" !== typeof CC) return "";
-           if (mz(CC, "name")) return CC.name;
-           {
-             const zC = Function.prototype.toString.call(CC),
-               ZC = /^function\s+([\w$]+)\s*\(/.exec(zC);
-             return ZC ? ZC[1] : ""
+       }
+       return function(pp, ip, cp, Op, op, Ip, Sp) {
+         if (cp < 0 ? !ip : ip == pp.doc.length) return null;
+         let xp = cp < 0 ? pp.sliceDoc(ip - 1, ip) : pp.sliceDoc(ip, ip + 1),
+           Lp = Sp.indexOf(xp);
+         if (Lp < 0 || Lp % 2 == 0 != cp > 0) return null;
+         let Yp = {
+             from: cp < 0 ? ip - 1 : ip,
+             to: cp > 0 ? ip + 1 : ip
+           },
+           Dp = pp.doc.iterRange(ip, cp > 0 ? pp.doc.length : 0),
+           Ap = 0;
+         for (let Pp = 0; !Dp.next().done && Pp <= Ip;) {
+           let pp = Dp.value;
+           cp < 0 && (Pp += pp.length);
+           let Ip = ip + Pp * cp;
+ ... (15 more added lines; see GitHub link above)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3489-L3498` → after: `L4511-L4531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4511-L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4511-L4531) · [Before (L3489-L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3489-L3498)

```diff
-         function pC() {
-           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             zC = arguments.length > 2 ? arguments[2] : void 0;
-           const ZC = function(CC) {
-             const zC = GC.get(CC);
-             if (zC) return zC;
-             const ZC = [];
-             for (const wC in CC) {
-               const zC = CC[wC];
-               "number" === typeof zC && ZC.push([zC, wC])
+     function Gi(pp, ip, cp, Op, op, Ip, Sp) {
+       let xp = Op.parent,
+         Lp = {
+           from: op.from,
+           to: op.to
+         },
+         Yp = 0,
+         Dp = null === xp || void 0 === xp ? void 0 : xp.cursor();
+       if (Dp && (cp < 0 ? Dp.childBefore(Op.from) : Dp.childAfter(Op.to)))
+         do {
+           if (cp < 0 ? Dp.to <= Op.from : Dp.from >= Op.to) {
+             if (0 == Yp && Ip.indexOf(Dp.type.name) > -1 && Dp.from < Dp.to) {
+               let pp = Fi(Dp);
+               return {
+                 start: Lp,
+                 end: pp ? {
+ ... (5 more added lines; see GitHub link above)
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3500-L3509` → after: `L4533-L4546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4533-L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4533-L4546) · [Before (L3500-L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3500-L3509)

```diff
-             const QC = Mz(ZC, ((CC, zC) => iZ(CC[0], zC[0])));
-             return GC.set(CC, QC), QC
-           }(arguments.length > 1 ? arguments[1] : void 0);
-           if (0 === CC) return ZC.length > 0 && 0 === ZC[0][0] ? ZC[0][1] : "0";
-           if (zC) {
-             const zC = [];
-             let QC = CC;
-             for (const [wC, bC] of ZC) {
-               if (wC > CC) break;
-               0 !== wC && wC & CC && (zC.push(bC), QC &= ~wC)
+             if (ni(Dp.type, cp, Sp)) Yp++;
+             else if (ni(Dp.type, -cp, Sp)) {
+               if (0 == Yp) {
+                 let pp = Fi(Dp);
+                 return {
+                   start: Lp,
+                   end: pp && pp.from < pp.to ? {
+                     from: pp.from,
+                     to: pp.to
+                   } : void 0,
+                   matched: !1
+                 }
+               }
+               Yp--
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3511-L3524` → after: `L4548-L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4548-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4548-L4644) · [Before (L3511-L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3511-L3524)

```diff
-             if (0 === QC) return zC.join("|")
-           } else
-             for (const [QC, wC] of ZC)
-               if (QC === CC) return wC;
-           return CC.toString()
-         }
-         CC.getAssertionLevel = function() {
-           return zC
-         }, CC.setAssertionLevel = function(ZC) {
-           const QC = zC;
-           if (zC = ZC, ZC > QC)
-             for (const zC of Ez(nC)) {
-               const QC = nC[zC];
-               void 0 !== QC && CC[zC] !== QC.assertion && ZC >= QC.level && (CC[zC] = QC, nC[zC] = void 0)
+           }
+         } while (cp < 0 ? Dp.prevSibling() : Dp.nextSibling());
+       return {
+         start: Lp,
+         matched: !1
+       }
+     }
+     const ri = Object.create(null),
+       Zi = [op.p.none],
+       zi = [],
+       si = Object.create(null),
+       Ki = Object.create(null);
+     for (let [ic, cc] of [
+         ["variable", "variableName"],
+         ["variable-2", "variableName.special"],
+         ["string-2", "string.special"],
+ ... (81 more added lines; see GitHub link above)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3526-L3530` → after: `L4646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4646) · [Before (L3526-L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3526-L3530)

```diff
-         }, CC.shouldAssert = fC, CC.fail = qC, CC.failBadSyntaxKind = function CC(zC, ZC, QC) {
-           return qC(`${ZC||"Unexpected node."}\r\nNode ${AC(zC.kind)} was unexpected.`, QC || CC)
-         }, CC.assert = FC, CC.assertEqual = function CC(zC, ZC, QC, wC, bC) {
-           if (zC !== ZC) {
-             qC(`Expected ${zC} === ${ZC}. ${QC?wC?`${QC} ${wC}`:QC:""}`, bC || CC)
+             Dp.push(cp), op++, ip = Math.min(cp.to, ip)
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3532-L3564` → after: `L4648-L4676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4648-L4676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4648-L4676) · [Before (L3532-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3532-L3564)

```diff
-         }, CC.assertLessThan = function CC(zC, ZC, QC, wC) {
-           zC >= ZC && qC(`Expected ${zC} < ${ZC}. ${QC||""}`, wC || CC)
-         }, CC.assertLessThanOrEqual = function CC(zC, ZC, QC) {
-           zC > ZC && qC(`Expected ${zC} <= ${ZC}`, QC || CC)
-         }, CC.assertGreaterThanOrEqual = function CC(zC, ZC, QC) {
-           zC < ZC && qC(`Expected ${zC} >= ${ZC}`, QC || CC)
-         }, CC.assertIsDefined = WC, CC.checkDefined = function CC(zC, ZC, QC) {
-           return WC(zC, ZC, QC || CC), zC
-         }, CC.assertEachIsDefined = NC, CC.checkEachDefined = function CC(zC, ZC, QC) {
-           return NC(zC, ZC, QC || CC), zC
-         }, CC.assertNever = MC, CC.assertEachNode = function CC(zC, ZC, QC, wC) {
-           oC(1, "assertEachNode") && FC(void 0 === ZC || RC(zC, ZC), QC || "Unexpected node.", (() => `Node array did not pass test '${SC(ZC)}'.`), wC || CC)
-         }, CC.assertNode = function CC(zC, ZC, QC, wC) {
-           oC(1, "assertNode") && FC(void 0 !== zC && (void 0 === ZC || ZC(zC)), QC || "Unexpected node.", (() => `Node ${AC(null==zC?void 0:zC.kind)} did not pass test '${SC(ZC)}'.`), wC || CC)
-         }, CC.assertNotNode = function CC(zC, ZC, QC, wC) {
-           oC(1, "assertNotNode") && FC(void 0 === zC || void 0 === ZC || !ZC(zC), QC || "Unexpected node.", (() => `Node ${AC(zC.kind)} should not have passed test '${SC(ZC)}'.`), wC || CC)
- ... (17 more removed lines; see GitHub link above)
+           ip = Math.min(ip, yp);
+           let Ip = !1;
+           if (Dp.some((cp => cp.from == pp && (cp.to == ip || ip == yp))) && (Ip = pp == ip, !Ip && ip - pp < 10)) {
+             let cp = pp - (Wp + Pp.value.length);
+             cp > 0 && (Pp.next(cp), Wp = pp);
+             for (let Op = pp;;) {
+               if (Op >= ip) {
+                 Ip = !0;
+                 break
+               }
+               if (!Pp.lineBreak && Wp + Pp.value.length > Op) break;
+               Op = Wp + Pp.value.length, Wp += Pp.value.length, Pp.next()
+             }
+           }
+           let xp = Jp(Dp);
+           if (Ip) Yp.add(pp, pp, Op.c.widget({
+ ... (13 more added lines; see GitHub link above)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3567-L3569` → after: `L4683-L4737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4683-L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4683-L4737) · [Before (L3567-L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3567-L3569)

```diff
-         function JC(CC) {
-           return pC(CC, iw, !0)
-         }
+     function Lp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         Op = null;
+       return pp.between(cp, 1e9, ((pp, cp, op) => {
+         let {
+           spec: Ip
+         } = op;
+         if (!(ip && Ip.diagnostics.indexOf(ip) < 0))
+           if (Op) {
+             if (Ip.diagnostics.indexOf(Op.diagnostic) < 0) return !1;
+             Op = new Sp(Op.from, cp, Op.diagnostic)
+           } else Op = new Sp(pp, cp, ip || Ip.diagnostics[0])
+       })), Op
+     }
+ 
+ ... (39 more added lines; see GitHub link above)
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3571-L3572` → after: `L4739-L4797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4739-L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4739-L4797) · [Before (L3571-L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3571-L3572)

```diff
-         function IC(CC) {
-           return pC(CC, Xb, !0)
+     function wp(pp, ip, cp) {
+       let Op, {
+           diagnostics: op
+         } = pp.state.field(yp),
+         Ip = -1,
+         Sp = -1;
+       op.between(ip - (cp < 0 ? 1 : 0), ip + (cp > 0 ? 1 : 0), ((pp, op, xp) => {
+         let {
+           spec: Lp
+         } = xp;
+         if (ip >= pp && ip <= op && (pp == op || (ip > pp || cp > 0) && (ip < op || cp < 0))) return Op = Lp.diagnostics, Ip = pp, Sp = op, !1
+       }));
+       let xp = pp.state.facet(ep).tooltipFilter;
+       return Op && xp && (Op = xp(Op, pp.state)), Op ? {
+         pos: Ip,
+         end: Sp,
+ ... (43 more added lines; see GitHub link above)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3574-L3576` → after: `L4799-L4834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4799-L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4799-L4834) · [Before (L3574-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3574-L3576)

```diff
- 
-         function iC(CC) {
-           return pC(CC, ub, !0)
+       }],
+       dp = Op.k.fromClass(class {
+         constructor(pp) {
+           this.view = pp, this.timeout = -1, this.set = !0;
+           let {
+             delay: ip
+           } = pp.state.facet(ep);
+           this.lintTime = Date.now() + ip, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, ip)
+         }
+         run() {
+           clearTimeout(this.timeout);
+           let pp = Date.now();
+           if (pp < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - pp);
+           else {
+             this.set = !1;
+             let {
+ ... (20 more added lines; see GitHub link above)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3578-L3580` → after: `L4836-L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4836-L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4836-L4838) · [Before (L3578-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3578-L3580)

```diff
- 
-         function vC(CC) {
-           return pC(CC, Vw, !0)
+         update(pp) {
+           let ip = pp.state.facet(ep);
+           (pp.docChanged || ip != pp.startState.facet(ep) || ip.needsRefresh && ip.needsRefresh(pp)) && (this.lintTime = Date.now() + ip.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, ip.delay)))
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3582-L3584` → after: `L4840-L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4840-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4840-L4841) · [Before (L3582-L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3582-L3584)

```diff
- 
-         function eC(CC) {
-           return pC(CC, Qb, !0)
+         force() {
+           this.set && (this.lintTime = Date.now(), this.run())
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3586-L3588` → after: `L4843-L4844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4843-L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4843-L4844) · [Before (L3586-L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3586-L3588)

```diff
- 
-         function hC(CC) {
-           return pC(CC, Wb, !0)
+         destroy() {
+           clearTimeout(this.timeout)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3590-L3592` → after: `L4846-L4882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4846-L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4846-L4882) · [Before (L3590-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3590-L3592)

```diff
- 
-         function KC(CC) {
-           return pC(CC, wb, !0)
+       });
+     const ep = op.o.define({
+       combine: pp => ({
+         sources: pp.map((pp => pp.source)).filter((pp => null != pp)),
+         ...(0, op.P)(pp.map((pp => pp.config)), {
+           delay: 750,
+           markerFilter: null,
+           tooltipFilter: null,
+           needsRefresh: null,
+           hideOn: () => null
+         }, {
+           delay: Math.max,
+           markerFilter: jp,
+           tooltipFilter: jp,
+           needsRefresh: (pp, ip) => pp ? ip ? cp => pp(cp) || ip(cp) : pp : ip,
+           hideOn: (pp, ip) => pp ? ip ? (cp, Op, op) => pp(cp, Op, op) || ip(cp, Op, op) : pp : ip,
+ ... (21 more added lines; see GitHub link above)
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3594-L3596` → after: `L4884-L4890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4884-L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4884-L4890) · [Before (L3594-L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3594-L3596)

```diff
- 
-         function YC(CC) {
-           return pC(CC, mw, !0)
+         of pp) {
+         for (let pp = 0; pp < cp.length; pp++) {
+           let Op = cp[pp];
+           if (/[a-zA-Z]/.test(Op) && !ip.some((pp => pp.toLowerCase() == Op.toLowerCase()))) {
+             ip.push(Op);
+             continue pp
+           }
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3598-L3613` → after: `L4892-L4895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4892-L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4892-L4895) · [Before (L3598-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3598-L3613)

```diff
-         CC.formatSyntaxKind = AC, CC.formatSnippetKind = function(CC) {
-           return pC(CC, cb, !1)
-         }, CC.formatScriptKind = function(CC) {
-           return pC(CC, Yb, !1)
-         }, CC.formatNodeFlags = xC, CC.formatNodeCheckFlags = function(CC) {
-           return pC(CC, Zb, !0)
-         }, CC.formatModifierFlags = JC, CC.formatTransformFlags = IC, CC.formatEmitFlags = iC, CC.formatSymbolFlags = vC, CC.formatTypeFlags = eC, CC.formatSignatureFlags = hC, CC.formatObjectFlags = KC, CC.formatFlowFlags = YC, CC.formatRelationComparisonResult = function(CC) {
-           return pC(CC, ew, !0)
-         }, CC.formatCheckMode = function(CC) {
-           return pC(CC, Lt, !0)
-         }, CC.formatSignatureCheckMode = function(CC) {
-           return pC(CC, Ut, !0)
-         }, CC.formatTypeFacts = function(CC) {
-           return pC(CC, jt, !0)
-         };
-         let mC, HC, EC = !1;
+         ip.push("")
+       }
+       return ip
+     }
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3615-L3631` → after: `L4897-L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4897-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4897-L4973) · [Before (L3615-L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3615-L3631)

```diff
-         function lC(CC) {
-           "__debugFlowFlags" in CC || Object.defineProperties(CC, {
-             __tsDebuggerDisplay: {
-               value() {
-                 const CC = 2 & this.flags ? "FlowStart" : 4 & this.flags ? "FlowBranchLabel" : 8 & this.flags ? "FlowLoopLabel" : 16 & this.flags ? "FlowAssignment" : 32 & this.flags ? "FlowTrueCondition" : 64 & this.flags ? "FlowFalseCondition" : 128 & this.flags ? "FlowSwitchCl … [truncated]
-                   zC = -2048 & this.flags;
-                 return `${CC}${zC?` (${YC(zC)})`:""}`
-               }
-             },
-             __debugFlowFlags: {
-               get() {
-                 return pC(this.flags, mw, !0)
-               }
-             },
-             __debugToString: {
-               value() {
- ... (1 more removed lines; see GitHub link above)
+     function Rp(pp, ip, cp) {
+       var Op;
+       let op = cp ? mp(ip.actions) : [];
+       return (0, Ip.d)("li", {
+         class: "cm-diagnostic cm-diagnostic-" + ip.severity
+       }, (0, Ip.d)("span", {
+         class: "cm-diagnosticText"
+       }, ip.renderMessage ? ip.renderMessage(pp) : ip.message), null === (Op = ip.actions) || void 0 === Op ? void 0 : Op.map(((cp, Op) => {
+         let Sp = !1,
+           xp = Op => {
+             if (Op.preventDefault(), Sp) return;
+             Sp = !0;
+             let op = Lp(pp.state.field(yp).diagnostics, ip);
+             op && cp.apply(pp, op.from, op.to)
+           },
+           {
+ ... (61 more added lines; see GitHub link above)
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3634-L4077` → after: `L4977-L4979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4977-L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4977-L4979) · [Before (L3634-L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3634-L4077)

```diff
-           })
-         }
- 
-         function XC(CC) {
-           "__tsDebuggerDisplay" in CC || Object.defineProperties(CC, {
-             __tsDebuggerDisplay: {
-               value: CC => `NodeArray ${CC=String(CC).replace(/(?:,[\s\w]+:[^,]+)+\]$/,"]")}`
-             }
-           })
-         }
-         CC.attachFlowNodeDebugInfo = function(CC) {
-           return EC && ("function" === typeof Object.setPrototypeOf ? (mC || (mC = Object.create(Object.prototype), lC(mC)), Object.setPrototypeOf(CC, mC)) : lC(CC)), CC
-         }, CC.attachNodeArrayDebugInfo = function(CC) {
-           EC && ("function" === typeof Object.setPrototypeOf ? (HC || (HC = Object.create(Array.prototype), XC(HC)), Object.setPrototypeOf(CC, HC)) : XC(CC))
-         }, CC.enableDebugInfo = function() {
-           if (EC) return;
- ... (428 more removed lines; see GitHub link above)
+           },
+           onclick: pp => {
+             for (let ip = 0; ip < this.items.length; ip++) this.items[ip].dom.contains(pp.target) && this.moveSelection(ip)
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4079-L4085` → after: `L4981-L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4981-L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4981-L5004) · [Before (L4079-L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4079-L4085)

```diff
-           with(zC) {
-             const {
-               major: ZC = this.major,
-               minor: QC = this.minor,
-               patch: wC = this.patch,
-               prerelease: bC = this.prerelease,
-               build: nC = this.build
+         }), this.dom = (0, Ip.d)("div", {
+           class: "cm-panel-lint"
+         }, this.list, (0, Ip.d)("button", {
+           type: "button",
+           name: "close",
+           "aria-label": this.view.state.phrase("close"),
+           onclick: () => tp(this.view)
+         }, "\xd7")), this.update()
+       }
+       get selectedIndex() {
+         let pp = this.view.state.field(yp).selected;
+         if (!pp) return -1;
+         for (let ip = 0; ip < this.items.length; ip++)
+           if (this.items[ip].diagnostic == pp.diagnostic) return ip;
+         return -1
+       }
+ ... (8 more added lines; see GitHub link above)
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4087-L4091` → after: `L5006-L5033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5006-L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5006-L5033) · [Before (L4087-L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4087-L4091)

```diff
-             return new CC(ZC, QC, wC, bC, nC)
-           }
-           toString() {
-             let CC = `${this.major}.${this.minor}.${this.patch}`;
-             return LC(this.prerelease) && (CC += `-${this.prerelease.join(".")}`), LC(this.build) && (CC += `+${this.build.join(".")}`), CC
+             for (let Yp of Lp.diagnostics) {
+               if (Ip.has(Yp)) continue;
+               Ip.add(Yp);
+               let pp, Sp = -1;
+               for (let ip = cp; ip < this.items.length; ip++)
+                 if (this.items[ip].diagnostic == Yp) {
+                   Sp = ip;
+                   break
+                 } Sp < 0 ? (pp = new Mp(this.view, Yp), this.items.splice(cp, 0, pp), Op = !0) : (pp = this.items[Sp], Sp > cp && (this.items.splice(cp, Sp - cp), Op = !0)), ip && pp.diagnostic == ip.diagnostic ? pp.dom.hasAttribute("aria-selected") || (pp.dom.setAttribute("aria- … [truncated]
+             }
+           })); cp < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Op = !0, this.items.pop();
+         0 == this.items.length && (this.items.push(new Mp(this.view, {
+           from: -1,
+           to: -1,
+           severity: "info",
+           message: this.view.state.phrase("No diagnostics")
+ ... (12 more added lines; see GitHub link above)
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4093-L4107` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5035) · [Before (L4093-L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4093-L4107)

```diff
-         };
-       vQ.zero = new vQ(0, 0, 0, ["0"]);
-       var eQ = vQ;
- 
-       function hQ(CC) {
-         const zC = RQ.exec(CC);
-         if (!zC) return;
-         const [, ZC, QC = "0", wC = "0", bC = "", nC = ""] = zC;
-         return bC && !AQ.test(bC) || nC && !JQ.test(nC) ? void 0 : {
-           major: parseInt(ZC, 10),
-           minor: parseInt(QC, 10),
-           patch: parseInt(wC, 10),
-           prerelease: bC,
-           build: nC
-         }
+         })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Op && this.sync()
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4109-L4137` → after: `L5037-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5037-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5037-L5038) · [Before (L4109-L4137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4109-L4137)

```diff
-       var KQ = class CC {
-           constructor(CC) {
-             this._alternatives = CC ? PQ.checkDefined(lQ(CC), "Invalid range spec.") : qC
-           }
-           static tryParse(zC) {
-             const ZC = lQ(zC);
-             if (ZC) {
-               const zC = new CC("");
-               return zC._alternatives = ZC, zC
-             }
-           }
-           test(CC) {
-             return "string" === typeof CC && (CC = new eQ(CC)),
-               function(CC, zC) {
-                 if (0 === zC.length) return !0;
-                 for (const ZC of zC)
- ... (13 more removed lines; see GitHub link above)
+       sync() {
+         let pp = this.list.firstChild;
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4139-L4155` → after: `L5040-L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5040-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5040-L5061) · [Before (L4139-L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4139-L4155)

```diff
-       function lQ(CC) {
-         const zC = [];
-         for (let ZC of CC.trim().split(YQ)) {
-           if (!ZC) continue;
-           const CC = [];
-           ZC = ZC.trim();
-           const QC = HQ.exec(ZC);
-           if (QC) {
-             if (!cQ(QC[1], QC[2], CC)) return
-           } else
-             for (const zC of ZC.split(dQ)) {
-               const ZC = EQ.exec(zC.trim());
-               if (!ZC || !uQ(ZC[1], ZC[2], CC)) return
-             }
-           zC.push(CC)
-         }
- ... (1 more removed lines; see GitHub link above)
+         function ip() {
+           let ip = pp;
+           pp = ip.nextSibling, ip.remove()
+         }
+         for (let cp of this.items)
+           if (cp.dom.parentNode == this.list) {
+             for (; pp != cp.dom;) ip();
+             pp = cp.dom.nextSibling
+           } else this.list.insertBefore(cp.dom, pp);
+         for (; pp;) ip()
+       }
+       moveSelection(pp) {
+         if (this.selectedIndex < 0) return;
+         let ip = Lp(this.view.state.field(yp).diagnostics, this.items[pp].diagnostic);
+         ip && this.view.dispatch({
+           selection: {
+ ... (6 more added lines; see GitHub link above)
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4157-L4167` → after: `L5063-L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5063-L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5063-L5064) · [Before (L4157-L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4157-L4167)

```diff
- 
-       function XQ(CC) {
-         const zC = mQ.exec(CC);
-         if (!zC) return;
-         const [, ZC, QC = "*", wC = "*", bC, nC] = zC;
-         return {
-           version: new eQ(rQ(ZC) ? 0 : parseInt(ZC, 10), rQ(ZC) || rQ(QC) ? 0 : parseInt(QC, 10), rQ(ZC) || rQ(QC) || rQ(wC) ? 0 : parseInt(wC, 10), bC, nC),
-           major: ZC,
-           minor: QC,
-           patch: wC
-         }
+       static open(pp) {
+         return new Cp(pp)
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4170-L4175` → after: `L5068-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5068-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5068-L5070) · [Before (L4170-L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4170-L4175)

```diff
-       function cQ(CC, zC, ZC) {
-         const QC = XQ(CC);
-         if (!QC) return !1;
-         const wC = XQ(zC);
-         return !!wC && (rQ(QC.major) || ZC.push(sQ(">=", QC.version)), rQ(wC.major) || ZC.push(rQ(wC.minor) ? sQ("<", wC.version.increment("major")) : rQ(wC.patch) ? sQ("<", wC.version.increment("minor")) : sQ("<=", wC.version)), !0)
-       }
+     function Ep(pp) {
+       return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(pp)}</svg>')`
+     }
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4177-L4217` → after: `L5072-L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5072-L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5072-L5141) · [Before (L4177-L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4177-L4217)

```diff
-       function uQ(CC, zC, ZC) {
-         const QC = XQ(zC);
-         if (!QC) return !1;
-         const {
-           version: wC,
-           major: bC,
-           minor: nC,
-           patch: fC
-         } = QC;
-         if (rQ(bC)) "<" !== CC && ">" !== CC || ZC.push(sQ("<", eQ.zero));
-         else switch (CC) {
-           case "~":
-             ZC.push(sQ(">=", wC)), ZC.push(sQ("<", wC.increment(rQ(nC) ? "major" : "minor")));
-             break;
-           case "^":
-             ZC.push(sQ(">=", wC)), ZC.push(sQ("<", wC.increment(wC.major > 0 || rQ(nC) ? "major" : wC.minor > 0 || rQ(fC) ? "minor" : "patch")));
- ... (25 more removed lines; see GitHub link above)
+     function Xp(pp) {
+       return Ep(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${pp}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
+     }
+     const lp = Op.f.baseTheme({
+       ".cm-diagnostic": {
+         padding: "3px 6px 3px 8px",
+         marginLeft: "-1px",
+         display: "block",
+         whiteSpace: "pre-wrap"
+       },
+       ".cm-diagnostic-error": {
+         borderLeft: "5px solid #d11"
+       },
+       ".cm-diagnostic-warning": {
+         borderLeft: "5px solid orange"
+       },
+ ... (54 more added lines; see GitHub link above)
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4219-L4229` → after: `L5143-L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5143-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5143-L5198) · [Before (L4219-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4219-L4229)

```diff
-         return !0
-       }
- 
-       function rQ(CC) {
-         return "*" === CC || "x" === CC || "X" === CC
-       }
- 
-       function sQ(CC, zC) {
-         return {
-           operator: CC,
-           operand: zC
+       },
+       ".cm-lintPoint-warning": {
+         "&:after": {
+           borderBottomColor: "orange"
+         }
+       },
+       ".cm-lintPoint-info": {
+         "&:after": {
+           borderBottomColor: "#999"
+         }
+       },
+       ".cm-lintPoint-hint": {
+         "&:after": {
+           borderBottomColor: "#66d"
+         }
+       },
+ ... (40 more added lines; see GitHub link above)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4233-L4237` → after: `L5203-L5205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5203-L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5203-L5205) · [Before (L4233-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4233-L4237)

```diff
-       function TQ(CC, zC) {
-         for (const ZC of zC)
-           if (!aQ(CC, ZC.operator, ZC.operand)) return !1;
-         return !0
-       }
+     function Qp(pp) {
+       return "error" == pp ? 4 : "warning" == pp ? 3 : "info" == pp ? 2 : 1
+     }
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4239-L4253` → after: `L5207-L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5207-L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5207-L5251) · [Before (L4239-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4239-L4253)

```diff
-       function aQ(CC, zC, ZC) {
-         const QC = CC.compareTo(ZC);
-         switch (zC) {
-           case "<":
-             return QC < 0;
-           case "<=":
-             return QC <= 0;
-           case ">":
-             return QC > 0;
-           case ">=":
-             return QC >= 0;
-           case "=":
-             return 0 === QC;
-           default:
-             return PQ.assertNever(zC)
+     function Jp(pp) {
+       let ip = "hint",
+         cp = 1;
+       for (let Op of pp) {
+         let pp = Qp(Op.severity);
+         pp > cp && (cp = pp, ip = Op.severity)
+       }
+       return ip
+     }
+     Op.j;
+     const Bp = [yp, Op.f.uO.compute([yp], (pp => {
+       let {
+         selected: ip,
+         panel: cp
+       } = pp.field(yp);
+       return ip && cp && ip.from != ip.to ? Op.c.set([Up.range(ip.from, ip.to)]) : Op.c.none
+ ... (29 more added lines; see GitHub link above)
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4256-L4258` → after: `L5255-L5257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5255-L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5255-L5257) · [Before (L4256-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4256-L4258)

```diff
- 
-       function tQ(CC) {
-         return dC(CC, DQ).join(" ")
+       next() {
+         for (; this.matches.length;) this.matches.pop();
+         return this.nextOverlapping()
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4260-L4272` → after: `L5259-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5259-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5259-L5273) · [Before (L4260-L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4260-L4272)

```diff
- 
-       function DQ(CC) {
-         return `${CC.operator}${CC.operand}`
-       }
-       var jQ = function() {
-           const CC = function() {
-             if (pQ()) try {
-               const {
-                 performance: CC
-               } = ZC(41207);
-               if (CC) return {
-                 shouldWriteNativeEvents: !1,
-                 performance: CC
+       nextOverlapping() {
+         for (;;) {
+           let pp = this.peek();
+           if (pp < 0) return this.done = !0, this;
+           let ip = (0, op.W)(pp),
+             cp = this.bufferStart + this.bufferPos;
+           this.bufferPos += (0, op.N)(pp);
+           let Op = this.normalize(ip);
+           if (Op.length)
+             for (let op = 0, Ip = cp;; op++) {
+               let pp = Op.charCodeAt(op),
+                 Sp = this.match(pp, Ip, this.bufferPos + this.bufferStart);
+               if (op == Op.length - 1) {
+                 if (Sp) return this.value = Sp, this;
+                 break
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4274-L4277` → after: `L5275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5275) · [Before (L4274-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4274-L4277)

```diff
-             } catch {}
-             if ("object" === typeof performance) return {
-               shouldWriteNativeEvents: !0,
-               performance: performance
+               Ip == cp && op < ip.length && ip.charCodeAt(op) == pp && Ip++
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4279-L4300` → after: `L5277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5277) · [Before (L4279-L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4279-L4300)

```diff
-           }();
-           if (!CC) return;
-           const {
-             shouldWriteNativeEvents: zC,
-             performance: QC
-           } = CC, wC = {
-             shouldWriteNativeEvents: zC,
-             performance: void 0,
-             performanceTime: void 0
-           };
-           return "number" === typeof QC.timeOrigin && "function" === typeof QC.now && (wC.performanceTime = QC), wC.performanceTime && "function" === typeof QC.mark && "function" === typeof QC.measure && "function" === typeof QC.clearMarks && "function" === typeof QC.clearMeasure … [truncated]
-         }(),
-         yQ = null == jQ ? void 0 : jQ.performanceTime;
- 
-       function LQ() {
-         return jQ
- ... (6 more removed lines; see GitHub link above)
+         }
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4302-L4310` → after: `L5279-L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5279-L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5279-L5334) · [Before (L4302-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4302-L4310)

```diff
- 
-       function Cw(CC, zC, ZC) {
-         let QC = 0;
-         return {
-           enter: function() {
-             1 === ++QC && qw(zC)
-           },
-           exit: function() {
-             0 === --QC ? (qw(ZC), Fw(CC, zC, ZC)) : QC < 0 && PQ.fail("enter/exit count does not match.")
+       match(pp, ip, cp) {
+         let Op = null;
+         for (let op = 0; op < this.matches.length; op += 2) {
+           let ip = this.matches[op],
+             Ip = !1;
+           this.query.charCodeAt(ip) == pp && (ip == this.query.length - 1 ? Op = {
+             from: this.matches[op + 1],
+             to: cp
+           } : (this.matches[op]++, Ip = !0)), Ip || (this.matches.splice(op, 2), op -= 2)
+         }
+         return this.query.charCodeAt(0) == pp && (1 == this.query.length ? Op = {
+           from: ip,
+           to: cp
+         } : this.matches.push(1, ip)), Op && this.test && !this.test(Op.from, Op.to, this.buffer, this.bufferStart) && (Op = null), Op
+       }
+     }
+ ... (40 more added lines; see GitHub link above)
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4314-L4344` → after: `L5338-L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5338-L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5338-L5342) · [Before (L4314-L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4314-L4344)

```diff
-       wC(kQ, {
-         clearMarks: () => pw,
-         clearMeasures: () => Sw,
-         createTimer: () => Cw,
-         createTimerIf: () => VQ,
-         disable: () => Rw,
-         enable: () => Gw,
-         forEachMark: () => gw,
-         forEachMeasure: () => Mw,
-         getCount: () => Ww,
-         getDuration: () => Nw,
-         isEnabled: () => Pw,
-         mark: () => qw,
-         measure: () => Fw,
-         nullTimer: () => Qw
-       });
- ... (15 more removed lines; see GitHub link above)
+     }
+     const Ap = new WeakMap;
+     class Pp {
+       constructor(pp, ip) {
+         this.from = pp, this.text = ip
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4346-L4352` → after: `L5344-L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5344-L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5344-L5351) · [Before (L4346-L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4346-L4352)

```diff
- 
-       function Fw(CC, zC, ZC) {
-         if (ww) {
-           const QC = (void 0 !== ZC ? nw.get(ZC) : void 0) ?? OQ(),
-             wC = (void 0 !== zC ? nw.get(zC) : void 0) ?? bw,
-             bC = ow.get(CC) || 0;
-           ow.set(CC, bC + (QC - wC)), null == BQ || BQ.measure(CC, zC, ZC)
+       get to() {
+         return this.from + this.text.length
+       }
+       static get(pp, ip, cp) {
+         let Op = Ap.get(pp);
+         if (!Op || Op.from >= cp || Op.to <= ip) {
+           let Op = new Pp(ip, pp.sliceString(ip, cp));
+           return Ap.set(pp, Op), Op
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4355-L4357` → after: `L5360-L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5360-L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5360-L5363) · [Before (L4355-L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4355-L4357)

```diff
- 
-       function Ww(CC) {
-         return fw.get(CC) || 0
+     }
+     class Wp {
+       constructor(pp, ip, cp, Op, op) {
+         this.text = pp, this.to = op, this.done = !1, this.value = Lp, this.matchPos = yp(pp, Op), this.re = new RegExp(ip, Yp + ((null === cp || void 0 === cp ? void 0 : cp.ignoreCase) ? "i" : "")), this.test = null === cp || void 0 === cp ? void 0 : cp.test, this.flat = Pp.get( … [truncated]
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4359-L4387` → after: `L5365-L5366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5365-L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5365-L5366) · [Before (L4359-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4359-L4387)

```diff
- 
-       function Nw(CC) {
-         return ow.get(CC) || 0
-       }
- 
-       function Mw(CC) {
-         ow.forEach(((zC, ZC) => CC(ZC, zC)))
-       }
- 
-       function gw(CC) {
-         nw.forEach(((zC, ZC) => CC(ZC)))
-       }
- 
-       function Sw(CC) {
-         void 0 !== CC ? ow.delete(CC) : ow.clear(), null == BQ || BQ.clearMeasures(CC)
-       }
- ... (13 more removed lines; see GitHub link above)
+       chunkEnd(pp) {
+         return pp >= this.to ? this.to : this.text.lineAt(pp).to
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4390-L4561` → after: `L5410-L5419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5410-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5410-L5419) · [Before (L4390-L4561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4390-L4561)

```diff
-       function Rw() {
-         ww && (nw.clear(), fw.clear(), ow.clear(), BQ = void 0, ww = !1)
-       }(CC => {
-         let zC, QC, wC = 0,
-           bC = 0;
-         const nC = [];
-         let fC;
-         const oC = [];
-         let qC;
-         var FC;
-         CC.startTracing = function(qC, FC, WC) {
-           if (PQ.assert(!zw, "Tracing already started"), void 0 === zC) try {
-             zC = ZC(41216)
-           } catch (pC) {
-             throw new Error(`tracing requires having fs\n(original error: ${pC.message||pC})`)
-           }
- ... (156 more removed lines; see GitHub link above)
+     function vp(pp) {
+       let ip = [jp, ep];
+       return pp && ip.push(wp.of(pp)), ip
+     }
+     const tp = Op.c.mark({
+         class: "cm-selectionMatch"
+       }),
+       Hp = Op.c.mark({
+         class: "cm-selectionMatch cm-selectionMatch-main"
+       });
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4563-L4574` → after: `L5421-L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5421-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5421-L5426) · [Before (L4563-L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4563-L4574)

```diff
-         function MC(CC, zC, ZC) {
-           const {
-             phase: QC,
-             name: wC,
-             args: bC,
-             time: nC,
-             separateBeginAndEnd: fC
-           } = WC[CC];
-           fC ? (PQ.assert(!ZC, "`results` are not supported for events with `separateBeginAndEnd`"), gC("E", QC, wC, bC, void 0, zC)) : NC - nC % NC <= zC - nC && gC("X", QC, wC, {
-             ...bC,
-             results: ZC
-           }, '"dur":' + (zC - nC), nC)
+     function dp(pp, ip, cp, Op) {
+       return (0 == cp || pp(ip.sliceDoc(cp - 1, cp)) != op.i.Word) && (Op == ip.doc.length || pp(ip.sliceDoc(Op, Op + 1)) != op.i.Word)
+     }
+     const ep = Op.k.fromClass(class {
+         constructor(pp) {
+           this.uO = this.getDeco(pp)
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4576-L4579` → after: `L5428-L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5428-L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5428-L5429) · [Before (L4576-L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4576-L4579)

```diff
- 
-         function gC(CC, ZC, wC, nC, fC) {
-           let oC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1e3 * OQ();
-           "server" === QC && "checkTypes" === ZC || (qw("beginTracing"), zC.writeSync(bC, `,\n{"pid":1,"tid":1,"ph":"${CC}","cat":"${ZC}","ts":${oC},"name":"${wC}"`), fC && zC.writeSync(bC, `,${fC}`), nC && zC.writeSync(bC, `,"args":${JSON.stringify(nC)}`), zC.writeSync(bC, "}"), … [truncated]
+         update(pp) {
+           (pp.selectionSet || pp.docChanged || pp.viewportChanged) && (this.uO = this.getDeco(pp.view))
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4581-L4593` → after: `L5431-L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5431-L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5431-L5462) · [Before (L4581-L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4581-L4593)

```diff
- 
-         function SC(CC) {
-           const zC = Zg(CC);
-           return zC ? {
-             path: zC.path,
-             start: ZC(Fo(zC, CC.pos)),
-             end: ZC(Fo(zC, CC.end))
-           } : void 0;
- 
-           function ZC(CC) {
-             return {
-               line: CC.line + 1,
-               character: CC.character + 1
+         getDeco(pp) {
+           let ip = pp.state.facet(wp),
+             {
+               state: cp
+             } = pp,
+             Ip = cp.selection;
+           if (Ip.By.length > 1) return Op.c.none;
+           let Sp, Lp = Ip.main,
+             Yp = null;
+           if (Lp.empty) {
+             if (!ip.highlightWordAroundCursor) return Op.c.none;
+             let pp = cp.wordAt(Lp.head);
+             if (!pp) return Op.c.none;
+             Yp = cp.charCategorizer(Lp.head), Sp = cp.sliceDoc(pp.from, pp.to)
+           } else {
+             let pp = Lp.to - Lp.from;
+ ... (16 more added lines; see GitHub link above)
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4597-L4710` → after: `L5467-L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5467-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5467-L5472) · [Before (L4597-L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4597-L4710)

```diff
-         CC.dumpLegend = function() {
-           fC && zC.writeFileSync(fC, JSON.stringify(oC))
-         }
-       })(Zw || (Zw = {}));
-       var Aw = Zw.startTracing,
-         xw = Zw.dumpLegend,
-         Jw = (CC => (CC[CC.Unknown = 0] = "Unknown", CC[CC.EndOfFileToken = 1] = "EndOfFileToken", CC[CC.SingleLineCommentTrivia = 2] = "SingleLineCommentTrivia", CC[CC.MultiLineCommentTrivia = 3] = "MultiLineCommentTrivia", CC[CC.NewLineTrivia = 4] = "NewLineTrivia", CC[CC.White … [truncated]
-         Iw = (CC => (CC[CC.None = 0] = "None", CC[CC.Let = 1] = "Let", CC[CC.Const = 2] = "Const", CC[CC.Using = 4] = "Using", CC[CC.AwaitUsing = 6] = "AwaitUsing", CC[CC.NestedNamespace = 8] = "NestedNamespace", CC[CC.Synthesized = 16] = "Synthesized", CC[CC.Namespace = 32] = "N … [truncated]
-         iw = (CC => (CC[CC.None = 0] = "None", CC[CC.Public = 1] = "Public", CC[CC.Private = 2] = "Private", CC[CC.Protected = 4] = "Protected", CC[CC.Readonly = 8] = "Readonly", CC[CC.Override = 16] = "Override", CC[CC.Export = 32] = "Export", CC[CC.Abstract = 64] = "Abstract",  … [truncated]
-         vw = (CC => (CC[CC.None = 0] = "None", CC[CC.IntrinsicNamedElement = 1] = "IntrinsicNamedElement", CC[CC.IntrinsicIndexedElement = 2] = "IntrinsicIndexedElement", CC[CC.IntrinsicElement = 3] = "IntrinsicElement", CC))(vw || {}),
-         ew = (CC => (CC[CC.None = 0] = "None", CC[CC.Succeeded = 1] = "Succeeded", CC[CC.Failed = 2] = "Failed", CC[CC.ReportsUnmeasurable = 8] = "ReportsUnmeasurable", CC[CC.ReportsUnreliable = 16] = "ReportsUnreliable", CC[CC.ReportsMask = 24] = "ReportsMask", CC[CC.ComplexityO … [truncated]
-         hw = (CC => (CC[CC.None = 0] = "None", CC[CC.Always = 1] = "Always", CC[CC.Never = 2] = "Never", CC[CC.Sometimes = 3] = "Sometimes", CC))(hw || {}),
-         Kw = (CC => (CC[CC.None = 0] = "None", CC[CC.Auto = 1] = "Auto", CC[CC.Loop = 2] = "Loop", CC[CC.Unique = 3] = "Unique", CC[CC.Node = 4] = "Node", CC[CC.KindMask = 7] = "KindMask", CC[CC.ReservedInNestedScopes = 8] = "ReservedInNestedScopes", CC[CC.Optimistic = 16] = "Opt … [truncated]
-         Yw = (CC => (CC[CC.None = 0] = "None", CC[CC.HasIndices = 1] = "HasIndices", CC[CC.Global = 2] = "Global", CC[CC.IgnoreCase = 4] = "IgnoreCase", CC[CC.Multiline = 8] = "Multiline", CC[CC.DotAll = 16] = "DotAll", CC[CC.Unicode = 32] = "Unicode", CC[CC.UnicodeSets = 64] = " … [truncated]
-         dw = (CC => (CC[CC.None = 0] = "None", CC[CC.PrecedingLineBreak = 1] = "PrecedingLineBreak", CC[CC.PrecedingJSDocComment = 2] = "PrecedingJSDocComment", CC[CC.Unterminated = 4] = "Unterminated", CC[CC.ExtendedUnicodeEscape = 8] = "ExtendedUnicodeEscape", CC[CC.Scientific  … [truncated]
-         mw = (CC => (CC[CC.Unreachable = 1] = "Unreachable", CC[CC.Start = 2] = "Start", CC[CC.BranchLabel = 4] = "BranchLabel", CC[CC.LoopLabel = 8] = "LoopLabel", CC[CC.Assignment = 16] = "Assignment", CC[CC.TrueCondition = 32] = "TrueCondition", CC[CC.FalseCondition = 64] = "F … [truncated]
- ... (98 more removed lines; see GitHub link above)
+       }, {
+         uO: pp => pp.uO
+       }),
+       jp = Op.f.baseTheme({
+         ".cm-selectionMatch": {
+           backgroundColor: "#99ff7780"
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4712-L4787` → after: `L5474-L5495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5474-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5474-L5495) · [Before (L4712-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4712-L4787)

```diff
-         Tb = (CC => (CC[CC.Extends = 1] = "Extends", CC[CC.Assign = 2] = "Assign", CC[CC.Rest = 4] = "Rest", CC[CC.Decorate = 8] = "Decorate", CC[CC.ESDecorateAndRunInitializers = 8] = "ESDecorateAndRunInitializers", CC[CC.Metadata = 16] = "Metadata", CC[CC.Param = 32] = "Param", … [truncated]
-         ab = (CC => (CC[CC.SourceFile = 0] = "SourceFile", CC[CC.Expression = 1] = "Expression", CC[CC.IdentifierName = 2] = "IdentifierName", CC[CC.MappedTypeParameter = 3] = "MappedTypeParameter", CC[CC.Unspecified = 4] = "Unspecified", CC[CC.EmbeddedStatement = 5] = "EmbeddedS … [truncated]
-         tb = (CC => (CC[CC.Parentheses = 1] = "Parentheses", CC[CC.TypeAssertions = 2] = "TypeAssertions", CC[CC.NonNullAssertions = 4] = "NonNullAssertions", CC[CC.PartiallyEmittedExpressions = 8] = "PartiallyEmittedExpressions", CC[CC.ExpressionsWithTypeArguments = 16] = "Expre … [truncated]
-         Db = (CC => (CC[CC.None = 0] = "None", CC[CC.InParameters = 1] = "InParameters", CC[CC.VariablesHoistedInParameters = 2] = "VariablesHoistedInParameters", CC))(Db || {}),
-         jb = (CC => (CC[CC.None = 0] = "None", CC[CC.SingleLine = 0] = "SingleLine", CC[CC.MultiLine = 1] = "MultiLine", CC[CC.PreserveLines = 2] = "PreserveLines", CC[CC.LinesMask = 3] = "LinesMask", CC[CC.NotDelimited = 0] = "NotDelimited", CC[CC.BarDelimited = 4] = "BarDelimit … [truncated]
-         yb = (CC => (CC[CC.None = 0] = "None", CC[CC.TripleSlashXML = 1] = "TripleSlashXML", CC[CC.SingleLine = 2] = "SingleLine", CC[CC.MultiLine = 4] = "MultiLine", CC[CC.All = 7] = "All", CC[CC.Default = 7] = "Default", CC))(yb || {}),
-         Lb = {
-           reference: {
-             args: [{
-               name: "types",
-               optional: !0,
-               captureSpan: !0
-             }, {
-               name: "lib",
-               optional: !0,
-               captureSpan: !0
- ... (60 more removed lines; see GitHub link above)
+         ".cm-searchMatch .cm-selectionMatch": {
+           backgroundColor: "transparent"
+         }
+       });
+     const kp = op.o.define({
+       combine: pp => (0, op.P)(pp, {
+         top: !1,
+         caseSensitive: !1,
+         literal: !1,
+         regexp: !1,
+         wholeWord: !1,
+         createPanel: pp => new ci(pp),
+         scrollToMatch: pp => Op.f.scrollIntoView(pp)
+       })
+     });
+     class mp {
+ ... (6 more added lines; see GitHub link above)
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4789-L4795` → after: `L5497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5497) · [Before (L4789-L4795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4789-L4795)

```diff
-         },
-         Ub = (CC => (CC[CC.ParseAll = 0] = "ParseAll", CC[CC.ParseNone = 1] = "ParseNone", CC[CC.ParseForTypeErrors = 2] = "ParseForTypeErrors", CC[CC.ParseForTypeInfo = 3] = "ParseForTypeInfo", CC))(Ub || {});
- 
-       function Bb(CC) {
-         let zC = 5381;
-         for (let ZC = 0; ZC < CC.length; ZC++) zC = (zC << 5) + zC + CC.charCodeAt(ZC);
-         return zC.toString()
+         }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!pp.wholeWord, this.test = pp.test
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4797-L4799` → after: `L5499-L5500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5499-L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5499-L5500) · [Before (L4797-L4799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4797-L4799)

```diff
- 
-       function Ob() {
-         Error.stackTraceLimit < 100 && (Error.stackTraceLimit = 100)
+       unquote(pp) {
+         return this.literal ? pp : pp.replace(/\\([nrt\\])/g, ((pp, ip) => "n" == ip ? "\n" : "r" == ip ? "\r" : "t" == ip ? "\t" : "\\"))
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4801-L4806` → after: `L5502-L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5502-L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5502-L5503) · [Before (L4801-L4806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4801-L4806)

```diff
-       var kb = (CC => (CC[CC.Created = 0] = "Created", CC[CC.Changed = 1] = "Changed", CC[CC.Deleted = 2] = "Deleted", CC))(kb || {}),
-         Vb = (CC => (CC[CC.High = 2e3] = "High", CC[CC.Medium = 500] = "Medium", CC[CC.Low = 250] = "Low", CC))(Vb || {}),
-         Cn = new Date(0);
- 
-       function zn(CC, zC) {
-         return CC.getModifiedTime(zC) || Cn
+       eq(pp) {
+         return this.search == pp.search && this.replace == pp.replace && this.caseSensitive == pp.caseSensitive && this.regexp == pp.regexp && this.wholeWord == pp.wholeWord && this.test == pp.test
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4808-L4814` → after: `L5505-L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5505-L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5505-L5506) · [Before (L4808-L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4808-L4814)

```diff
- 
-       function Zn(CC) {
-         return {
-           250: CC.Low,
-           500: CC.Medium,
-           2e3: CC.High
-         }
+       create() {
+         return this.regexp ? new lp(this) : new Mp(this)
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4816-L4822` → after: `L5508-L5521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5508-L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5508-L5521) · [Before (L4816-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4816-L4822)

```diff
-       var Qn = {
-           Low: 32,
-           Medium: 64,
-           High: 256
-         },
-         wn = Zn(Qn),
-         bn = Zn(Qn);
+       getCursor(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0,
+           Op = pp.doc ? pp : op.n.create({
+             doc: pp
+           });
+         return null == cp && (cp = Op.doc.length), this.regexp ? Cp(this, Op, ip, cp) : qp(this, Op, ip, cp)
+       }
+     }
+     class Rp {
+       constructor(pp) {
+         this.spec = pp
+       }
+     }
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4824-L4835` → after: `L5523-L5530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5523-L5530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5523-L5530) · [Before (L4824-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4824-L4835)

```diff
-       function nn(CC, zC, ZC, QC, wC) {
-         let bC = ZC;
-         for (let fC = zC.length; QC && fC; nC(), fC--) {
-           const nC = zC[ZC];
-           if (!nC) continue;
-           if (nC.isClosed) {
-             zC[ZC] = void 0;
-             continue
-           }
-           QC--;
-           const fC = Wn(nC, zn(CC, nC.fileName));
-           nC.isClosed ? zC[ZC] = void 0 : (null == wC || wC(nC, ZC, fC), zC[ZC] && (bC < ZC && (zC[bC] = nC, zC[ZC] = void 0), bC++))
+     function qp(pp, ip, cp, Op) {
+       let Ip;
+       var Sp, Lp;
+       return pp.wholeWord && (Sp = ip.doc, Lp = ip.charCategorizer(ip.selection.main.head), Ip = (pp, ip, cp, Op) => ((Op > pp || Op + cp.length < ip) && (Op = Math.max(0, pp - 2), cp = Sp.sliceString(Op, Math.min(Sp.length, ip + 2))), (Lp(Ep(cp, pp - Op)) != op.i.Word || Lp(Xp(c … [truncated]
+         return (Op, op, Ip, Sp) => {
+           if (cp && !cp(Op, op, Ip, Sp)) return !1;
+           let xp = Op >= Sp && op <= Sp + Ip.length ? Ip.slice(Op - Sp, op - Sp) : ip.doc.sliceString(Op, op);
+           return pp(xp, ip, Op, op)
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4837-L4840` → after: `L5532-L5554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5532-L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5532-L5554) · [Before (L4837-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4837-L4840)

```diff
-         return ZC;
- 
-         function nC() {
-           ++ZC === zC.length && (bC < ZC && (zC.length = bC), ZC = 0, bC = 0)
+       }(pp.test, ip, Ip)), new xp(ip.doc, pp.unquoted, cp, Op, pp.caseSensitive ? void 0 : pp => pp.toLowerCase(), Ip)
+     }
+     class Mp extends Rp {
+       constructor(pp) {
+         super(pp)
+       }
+       nextMatch(pp, ip, cp) {
+         let Op = qp(this.spec, pp, cp, pp.doc.length).nextOverlapping();
+         if (Op.done) {
+           let cp = Math.min(pp.doc.length, ip + this.spec.unquoted.length);
+           Op = qp(this.spec, pp, 0, cp).nextOverlapping()
+         }
+         return Op.done || Op.value.from == ip && Op.value.to == cp ? null : Op.value
+       }
+       prevMatchInRange(pp, ip, cp) {
+         for (let Op = cp;;) {
+ ... (7 more added lines; see GitHub link above)
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4843-L4866` → after: `L5557-L5569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5557-L5569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5557-L5569) · [Before (L4843-L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4843-L4866)

```diff
- 
-       function fn(CC) {
-         const zC = [],
-           ZC = [],
-           QC = nC(250),
-           wC = nC(500),
-           bC = nC(2e3);
-         return function(ZC, QC, wC) {
-           const bC = {
-             fileName: ZC,
-             callback: QC,
-             unchangedPolls: 0,
-             mtime: zn(CC, ZC)
-           };
-           return zC.push(bC), WC(bC, wC), {
-             close: () => {
- ... (8 more removed lines; see GitHub link above)
+       prevMatch(pp, ip, cp) {
+         let Op = this.prevMatchInRange(pp, 0, ip);
+         return Op || (Op = this.prevMatchInRange(pp, Math.max(0, cp - this.spec.unquoted.length), pp.doc.length)), !Op || Op.from == ip && Op.to == cp ? null : Op
+       }
+       getReplacement(pp) {
+         return this.spec.unquote(this.spec.replace)
+       }
+       matchAll(pp, ip) {
+         let cp = qp(this.spec, pp, 0, pp.doc.length),
+           Op = [];
+         for (; !cp.next().done;) {
+           if (Op.length >= ip) return null;
+           Op.push(cp.value)
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4868-L4870` → after: `L5571-L5631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5571-L5631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5571-L5631) · [Before (L4868-L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4868-L4870)

```diff
- 
-         function fC(CC, zC) {
-           zC.pollIndex = qC(zC, zC.pollingInterval, zC.pollIndex, wn[zC.pollingInterval]), zC.length ? MC(zC.pollingInterval) : (PQ.assert(0 === zC.pollIndex), zC.pollScheduled = !1)
+         return Op
+       }
+       highlight(pp, ip, cp, Op) {
+         let op = qp(this.spec, pp, Math.max(0, ip - this.spec.unquoted.length), Math.min(cp + this.spec.unquoted.length, pp.doc.length));
+         for (; !op.next().done;) Op(op.value.from, op.value.to)
+       }
+     }
+ 
+     function Cp(pp, ip, cp, Op) {
+       let Ip;
+       var Sp;
+       return pp.wholeWord && (Sp = ip.charCategorizer(ip.selection.main.head), Ip = (pp, ip, cp) => !cp[0].length || (Sp(Ep(cp.input, cp.index)) != op.i.Word || Sp(Xp(cp.input, cp.index)) != op.i.Word) && (Sp(Xp(cp.input, cp.index + cp[0].length)) != op.i.Word || Sp(Ep(cp.input,  … [truncated]
+         return (Op, op, Ip) => (!cp || cp(Op, op, Ip)) && pp(Ip[0], ip, Op, op)
+       }(pp.test, ip, Ip)), new Dp(ip.doc, pp.search, {
+         ignoreCase: !pp.caseSensitive,
+         test: Ip
+ ... (45 more added lines; see GitHub link above)
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4872-L4874` → after: `L5633-L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5633-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5633-L5663) · [Before (L4872-L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4872-L4874)

```diff
- 
-         function oC(CC, zC) {
-           qC(ZC, 250, 0, ZC.length), fC(0, zC), !zC.pollScheduled && ZC.length && MC(250)
+         return Op
+       }
+       highlight(pp, ip, cp, Op) {
+         let op = Cp(this.spec, pp, Math.max(0, ip - 250), Math.min(cp + 250, pp.doc.length));
+         for (; !op.next().done;) Op(op.value.from, op.value.to)
+       }
+     }
+     const Qp = op.C.define(),
+       Jp = op.C.define(),
+       Bp = op.E.define({
+         create: pp => new Np(Zp(pp).create(), null),
+         update(pp, ip) {
+           for (let cp of ip.effects) cp.is(Qp) ? pp = new Np(cp.value.create(), pp.panel) : cp.is(Jp) && (pp = new Np(pp.query, cp.value ? rp : null));
+           return pp
+         },
+         provide: pp => Op.ob.from(pp, (pp => pp.panel))
+ ... (15 more added lines; see GitHub link above)
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4876-L4881` → after: `L5665-L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5665-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5665-L5667) · [Before (L4876-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4876-L4881)

```diff
- 
-         function qC(zC, QC, wC, bC) {
-           return nn(CC, zC, wC, bC, (function(CC, wC, bC) {
-             bC ? (CC.unchangedPolls = 0, zC !== ZC && (zC[wC] = void 0, nC = CC, ZC.push(nC), NC(250))) : CC.unchangedPolls !== bn[QC] ? CC.unchangedPolls++ : zC === ZC ? (CC.unchangedPolls = 1, zC[wC] = void 0, WC(CC, 250)) : 2e3 !== QC && (CC.unchangedPolls++, zC[wC] = void 0,  … [truncated]
-             var nC
-           }))
+         update(pp) {
+           let ip = pp.state.field(Bp);
+           (ip != pp.startState.field(Bp) || pp.docChanged || pp.selectionSet || pp.viewportChanged) && (this.uO = this.highlight(ip))
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4883-L4891` → after: `L5669-L5687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5669-L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5669-L5687) · [Before (L4883-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4883-L4891)

```diff
- 
-         function FC(CC) {
-           switch (CC) {
-             case 250:
-               return QC;
-             case 500:
-               return wC;
-             case 2e3:
-               return bC
+         highlight(pp) {
+           let {
+             query: ip,
+             panel: cp
+           } = pp;
+           if (!cp || !ip.spec.valid) return Op.c.none;
+           let {
+             view: Ip
+           } = this, Sp = new op.w;
+           for (let Op = 0, op = Ip.Z2, xp = op.length; Op < xp; Op++) {
+             let {
+               from: pp,
+               to: cp
+             } = op[Op];
+             for (; Op < xp - 1 && cp > op[Op + 1].from - 500;) cp = op[++Op].to;
+             ip.highlight(Ip.state, pp, cp, ((pp, ip) => {
+ ... (3 more added lines; see GitHub link above)
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4895-L4905` → after: `L5695-L5698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5695-L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5695-L5698) · [Before (L4895-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4895-L4905)

```diff
-         function WC(CC, zC) {
-           FC(zC).push(CC), NC(zC)
-         }
- 
-         function NC(CC) {
-           FC(CC).pollScheduled || MC(CC)
-         }
- 
-         function MC(zC) {
-           FC(zC).pollScheduled = CC.setTimeout(250 === zC ? oC : fC, zC, 250 === zC ? "pollLowPollingIntervalQueue" : "pollPollingIntervalQueue", FC(zC))
-         }
+     function hp(pp) {
+       return ip => {
+         let cp = ip.state.field(Bp, !1);
+         return cp && cp.query.spec.valid ? pp(ip, cp) : Kp(ip)
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4908-L4922` → after: `L5795-L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5795-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5795-L5960) · [Before (L4908-L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4908-L4922)

```diff
-       function qn(CC, zC, ZC, QC) {
-         const wC = Oz(),
-           bC = QC ? new Map : void 0,
-           nC = new Map,
-           fC = kZ(zC);
-         return function(zC, QC, oC, qC) {
-           const FC = fC(zC);
-           1 === wC.add(FC, QC).length && bC && bC.set(FC, ZC(zC) || Cn);
-           const WC = yn(FC) || ".",
-             NC = nC.get(WC) || function(zC, QC, oC) {
-               const qC = CC(zC, 1, ((CC, QC) => {
-                 if (!wZ(QC)) return;
-                 const nC = wf(QC, zC),
-                   oC = fC(nC),
-                   qC = nC && wC.get(oC);
+     function rp(pp) {
+       return pp.state.facet(kp).createPanel(pp)
+     }
+ 
+     function Zp(pp, ip) {
+       var cp, Op, op, Ip, Sp;
+       let xp = pp.selection.main,
+         Lp = xp.empty || xp.to > xp.from + 100 ? "" : pp.sliceDoc(xp.from, xp.to);
+       if (ip && !Lp) return ip;
+       let Yp = pp.facet(kp);
+       return new mp({
+         search: (null !== (cp = null === ip || void 0 === ip ? void 0 : ip.literal) && void 0 !== cp ? cp : Yp.literal) ? Lp : Lp.replace(/\n/g, "\\n"),
+         caseSensitive: null !== (Op = null === ip || void 0 === ip ? void 0 : ip.caseSensitive) && void 0 !== Op ? Op : Yp.caseSensitive,
+         literal: null !== (op = null === ip || void 0 === ip ? void 0 : ip.literal) && void 0 !== op ? op : Yp.literal,
+         regexp: null !== (Ip = null === ip || void 0 === ip ? void 0 : ip.regexp) && void 0 !== Ip ? Ip : Yp.regexp,
+         wholeWord: null !== (Sp = null === ip || void 0 === ip ? void 0 : ip.wholeWord) && void 0 !== Sp ? Sp : Yp.wholeWord
+ ... (150 more added lines; see GitHub link above)
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4924-L4930` → after: `L5962-L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5962-L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5962-L5963) · [Before (L4924-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4924-L4930)

```diff
-                   let zC, QC = 1;
-                   if (bC) {
-                     const wC = bC.get(oC);
-                     if ("change" === CC && (zC = ZC(nC) || Cn, zC.getTime() === wC.getTime())) return;
-                     zC || (zC = ZC(nC) || Cn), bC.set(oC, zC), wC === Cn ? QC = 0 : zC === Cn && (QC = 2)
-                   }
-                   for (const CC of qC) CC(nC, QC, zC)
+                   let ip = pp.wordAt(Lp.value.from);
+                   if (!ip || ip.from != Lp.value.from || ip.to != Lp.value.to) continue
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4932-L4937` → after: `L5965-L5968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5965-L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5965-L5968) · [Before (L4932-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4932-L4937)

```diff
-               }), !1, 500, oC);
-               return qC.referenceCount = 0, nC.set(QC, qC), qC
-             }(yn(zC) || ".", WC, qC);
-           return NC.referenceCount++, {
-             close: () => {
-               1 === NC.referenceCount ? (NC.close(), nC.delete(WC)) : NC.referenceCount--, wC.remove(FC, QC)
+                 return Lp.value
+               }
+               if (Sp) return null;
+               Lp = new xp(pp.doc, ip, 0, Math.max(0, Op[Op.length - 1].from - 1)), Sp = !0
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4939-L4941` → after: `L5970-L5981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5970-L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5970-L5981) · [Before (L4939-L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4939-L4941)

```diff
-           }
-         }
-       }
+           }(ip, Sp);
+           return !!Lp && (cp(ip.update({
+             selection: ip.selection.addRange(op.l.range(Lp.from, Lp.to), !1),
+             effects: Op.f.scrollIntoView(Lp.to)
+           })), !0)
+         },
+         preventDefault: !0
+       }];
+     class ci {
+       constructor(pp) {
+         this.view = pp;
+         let ip = this.query = pp.state.field(Bp).query.spec;
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4943-L4956` → after: `L5983-L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L5983-L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L5983-L5989) · [Before (L4943-L4956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4943-L4956)

```diff
-       function Fn(CC, zC, ZC, QC, wC) {
-         const bC = kZ(zC)(ZC),
-           nC = CC.get(bC);
-         return nC ? nC.callbacks.push(QC) : CC.set(bC, {
-           watcher: wC(((zC, ZC, QC) => {
-             var wC;
-             return null == (wC = CC.get(bC)) ? void 0 : wC.callbacks.slice().forEach((CC => CC(zC, ZC, QC)))
-           })),
-           callbacks: [QC]
-         }), {
-           close: () => {
-             const zC = CC.get(bC);
-             zC && LZ(zC.callbacks, QC) && !zC.callbacks.length && (CC.delete(bC), DL(zC))
-           }
+         function cp(pp, ip, cp) {
+           return (0, Ip.d)("button", {
+             class: "cm-button",
+             name: pp,
+             onclick: ip,
+             type: "button"
+           }, cp)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4959-L4963` → after: `L6050-L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6050-L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6050-L6051) · [Before (L4959-L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4959-L4963)

```diff
- 
-       function Wn(CC, zC) {
-         const ZC = CC.mtime.getTime(),
-           QC = zC.getTime();
-         return ZC !== QC && (CC.mtime = zC, CC.callback(CC.fileName, Nn(ZC, QC), zC), !0)
+       keydown(pp) {
+         (0, Op.hb)(this.view, pp, "search-panel") ? pp.preventDefault(): 13 == pp.keyCode && pp.target == this.searchField ? (pp.preventDefault(), (pp.shiftKey ? np : ap)(this.view)) : 13 == pp.keyCode && pp.target == this.replaceField && (pp.preventDefault(), gp(this.view))
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4965-L4967` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6053-L6055) · [Before (L4965-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4965-L4967)

```diff
- 
-       function Nn(CC, zC) {
-         return 0 === CC ? 0 : 0 === zC ? 2 : 1
+       update(pp) {
+         for (let ip of pp.transactions)
+           for (let pp of ip.effects) pp.is(Qp) && !pp.value.eq(this.query) && this.setQuery(pp.value)
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4969-L4973` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6057-L6058) · [Before (L4969-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4969-L4973)

```diff
-       var Mn = ["/node_modules/.", "/.git", "/.#"],
-         gn = oZ;
- 
-       function Sn(CC) {
-         return gn(CC)
+       setQuery(pp) {
+         this.query = pp, this.searchField.value = pp.search, this.replaceField.value = pp.replace, this.caseField.checked = pp.caseSensitive, this.reField.checked = pp.regexp, this.wordField.checked = pp.wholeWord
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4975-L4977` → after: `L6060-L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6060-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6060-L6067) · [Before (L4975-L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4975-L4977)

```diff
- 
-       function pn(CC) {
-         gn = CC
+       mount() {
+         this.searchField.select()
+       }
+       get pos() {
+         return 80
+       }
+       get top() {
+         return this.view.state.facet(kp).top
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4980-L4997` → after: `L6071-L6075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6071-L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6071-L6075) · [Before (L4980-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4980-L4997)

```diff
-       function Pn(CC) {
-         let {
-           watchDirectory: zC,
-           useCaseSensitiveFileNames: ZC,
-           getCurrentDirectory: QC,
-           getAccessibleSortedChildDirectories: wC,
-           fileSystemEntryExists: bC,
-           realpath: nC,
-           setTimeout: fC,
-           clearTimeout: oC
-         } = CC;
-         const FC = new Map,
-           WC = Oz(),
-           NC = new Map;
-         let MC;
-         const gC = mZ(!ZC),
- ... (2 more removed lines; see GitHub link above)
+     function Oi(pp, ip) {
+       return pp.state.phrase(ip)
+     }
+     const oi = 30,
+       Ii = /[\s\.,:;?!]/;
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4999-L5037` → after: `L6077-L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6077-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6077-L6252) · [Before (L4999-L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4999-L5037)

```diff
-         function pC(CC, ZC, QC, wC) {
-           const nC = SC(CC);
-           let gC = FC.get(nC);
-           gC ? gC.refCount++ : (gC = {
-             watcher: zC(CC, (zC => {
-               var QC;
-               JC(zC, ZC) || ((null == ZC ? void 0 : ZC.synchronousWatchDirectory) ? ((null == (QC = FC.get(nC)) ? void 0 : QC.targetWatcher) || PC(CC, nC, zC), xC(CC, nC, ZC)) : function(CC, zC, ZC, QC) {
-                 const wC = FC.get(zC);
-                 if (wC && bC(CC, 1)) return void
-                 function(CC, zC, ZC, QC) {
-                   const wC = NC.get(zC);
-                   wC ? wC.fileNames.push(ZC) : NC.set(zC, {
-                     dirName: CC,
-                     options: QC,
-                     fileNames: [ZC]
-                   });
- ... (23 more removed lines; see GitHub link above)
+     function Si(pp, ip) {
+       let {
+         from: cp,
+         to: op
+       } = ip, Ip = pp.state.doc.lineAt(cp), Sp = pp.state.doc.lineAt(op).to, xp = Math.max(Ip.from, cp - oi), Lp = Math.min(Sp, op + oi), Yp = pp.state.sliceDoc(xp, Lp);
+       if (xp != Ip.from)
+         for (let Op = 0; Op < oi; Op++)
+           if (!Ii.test(Yp[Op + 1]) && Ii.test(Yp[Op])) {
+             Yp = Yp.slice(Op);
+             break
+           } if (Lp != Sp)
+         for (let Op = Yp.length - 1; Op > Yp.length - oi; Op--)
+           if (!Ii.test(Yp[Op - 1]) && Ii.test(Yp[Op])) {
+             Yp = Yp.slice(0, Op);
+             break
+           } return Op.f.announce.of(`${pp.state.phrase("current match")}. ${Yp} ${pp.state.phrase("on line")} ${Ip.number}.`)
+ ... (160 more added lines; see GitHub link above)
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5039-L5059` → after: `L6254-L6373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6254-L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6254-L6373) · [Before (L5039-L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5039-L5059)

```diff
- 
-         function PC(CC, zC, ZC, QC) {
-           var wC, bC;
-           let nC, fC;
-           wZ(ZC) ? nC = ZC : fC = ZC, WC.forEach(((CC, ZC) => {
-             if ((!fC || !0 !== fC.get(ZC)) && (ZC === zC || ZQ(zC, ZC) && zC[ZC.length] === en))
-               if (fC)
-                 if (QC) {
-                   const CC = fC.get(ZC);
-                   CC ? CC.push(...QC) : fC.set(ZC, QC.slice())
-                 } else fC.set(ZC, !0);
-             else CC.forEach((CC => {
-               let {
-                 callback: zC
-               } = CC;
-               return zC(nC)
- ... (5 more removed lines; see GitHub link above)
+       };
+     const yp = /Edge\/(\d+)/.exec(Pp.userAgent),
+       Up = /MSIE \d/.test(Pp.userAgent),
+       wp = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Pp.userAgent),
+       vp = !!(Up || wp || yp),
+       tp = !vp && /gecko\/(\d+)/i.test(Pp.userAgent),
+       Hp = !vp && /Chrome\/(\d+)/.exec(Pp.userAgent),
+       dp = "webkitFontSmoothing" in Wp.documentElement.style,
+       ep = !vp && /Apple Computer/.test(Pp.vendor),
+       jp = ep && (/Mobile\/\w+/.test(Pp.userAgent) || Pp.maxTouchPoints > 2);
+     var kp = {
+       mac: jp || /Mac/.test(Pp.platform),
+       windows: /Win/.test(Pp.platform),
+       linux: /Linux|X11/.test(Pp.platform),
+       ie: vp,
+       ie_version: Up ? Wp.documentMode || 6 : wp ? +wp[1] : yp ? +yp[1] : 0,
+ ... (104 more added lines; see GitHub link above)
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5062-L5092` → after: `L6447-L6457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6447-L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6447-L6457) · [Before (L5062-L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5062-L5092)

```diff
-         function GC() {
-           var CC;
-           MC = void 0, Sn(`sysLog:: onTimerToUpdateChildWatches:: ${NC.size}`);
-           const zC = OQ(),
-             ZC = new Map;
-           for (; !MC && NC.size;) {
-             const zC = NC.entries().next();
-             PQ.assert(!zC.done);
-             const {
-               value: [QC, {
-                 dirName: wC,
-                 options: bC,
-                 fileNames: nC
-               }]
-             } = zC;
-             NC.delete(QC);
- ... (15 more removed lines; see GitHub link above)
+     function Np(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         {
+           inclusiveStart: cp,
+           inclusiveEnd: Op
+         } = pp;
+       return null == cp && (cp = pp.inclusive), null == Op && (Op = pp.inclusive), {
+         start: null !== cp && void 0 !== cp ? cp : ip,
+         end: null !== Op && void 0 !== Op ? Op : ip
+       }
+     }
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5094-L5099` → after: `L6459-L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6459-L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6459-L6479) · [Before (L5094-L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5094-L5099)

```diff
-         function RC(CC) {
-           if (!CC) return;
-           const zC = CC.childWatches;
-           CC.childWatches = qC;
-           for (const ZC of zC) ZC.close(), RC(FC.get(SC(ZC.dirName)))
-         }
+     function Tp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         op = cp.length - 1;
+       op >= 0 && cp[op] + Op >= pp ? cp[op] = Math.max(cp[op], ip) : cp.push(pp, ip)
+     }
+     Bp.prototype.point = !0;
+     class fp extends Op.B {
+       constructor(pp, ip) {
+         super(), this.tagName = pp, this.attributes = ip
+       }
+       eq(pp) {
+         return pp == this || pp instanceof fp && this.tagName == pp.tagName && qp(this.attributes, pp.attributes)
+       }
+       static create(pp) {
+         return new fp(pp.tagName, pp.attributes || Rp)
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5101-L5103` → after: `L6481-L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6481-L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6481-L6484) · [Before (L5101-L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5101-L5103)

```diff
-         function AC(CC) {
-           (null == CC ? void 0 : CC.targetWatcher) && (CC.targetWatcher.close(), CC.targetWatcher = void 0)
-         }
+     function bp(pp) {
+       let ip;
+       return ip = 11 == pp.nodeType ? pp.getSelection ? pp : pp.ownerDocument : pp, ip.getSelection()
+     }
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5105-L5115` → after: `L6486-L6488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6486-L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6486-L6488) · [Before (L5105-L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5105-L5115)

```diff
-         function xC(CC, zC, ZC) {
-           const QC = FC.get(zC);
-           if (!QC) return !1;
-           const fC = bf(nC(CC));
-           let oC, WC;
-           return 0 === gC(fC, CC) ? oC = WQ(bC(CC, 1) ? sC(wC(CC), (zC => {
-             const QC = wf(zC, CC);
-             return JC(QC, ZC) || 0 !== gC(QC, bf(nC(QC))) ? void 0 : QC
-           })) : qC, QC.childWatches, ((CC, zC) => gC(CC, zC.dirName)), (function(CC) {
-             NC(pC(CC, ZC))
-           }), wI, NC) : QC.targetWatcher && 0 === gC(fC, QC.targetWatcher.dirName) ? (oC = !1, PQ.assert(QC.childWatches === qC)) : (AC(QC), QC.targetWatcher = pC(fC, ZC, void 0, CC), QC.childWatches.forEach(wI), oC = !0), QC.childWatches = WC || qC, oC;
+     function hp(pp, ip) {
+       return !!ip && (pp == ip || pp.contains(1 != ip.nodeType ? ip.parentNode : ip))
+     }
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5117-L5120` → after: `L6490-L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6490-L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6490-L6604) · [Before (L5117-L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5117-L5120)

```diff
-           function NC(CC) {
-             (WC || (WC = [])).push(CC)
-           }
-         }
+     function ap(pp, ip) {
+       if (!ip.anchorNode) return !1;
+       try {
+         return hp(pp, ip.anchorNode)
+       } catch (cp) {
+         return !1
+       }
+     }
+ 
+     function np(pp) {
+       return 3 == pp.nodeType ? Ii(pp, 0, pp.nodeValue.length).getClientRects() : 1 == pp.nodeType ? pp.getClientRects() : []
+     }
+ 
+     function Fp(pp, ip, cp, Op) {
+       return !!cp && (rp(pp, ip, cp, Op, -1) || rp(pp, ip, cp, Op, 1))
+     }
+ ... (99 more added lines; see GitHub link above)
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5122-L5125` → after: `L6606-L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6606-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6606-L6669) · [Before (L5122-L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5122-L5125)

```diff
-         function JC(CC, zC) {
-           return LC(Mn, (zC => function(CC, zC) {
-             return !!CC.includes(zC) || !ZC && SC(CC).includes(zC)
-           }(CC, zC))) || Rn(CC, zC, ZC, QC)
+     function oi(pp) {
+       if (pp.setActive) return pp.setActive();
+       if (Oi) return pp.focus(Oi);
+       let ip = [];
+       for (let cp = pp; cp && (ip.push(cp, cp.scrollTop, cp.scrollLeft), cp != cp.ownerDocument); cp = cp.parentNode);
+       if (pp.focus(null == Oi ? {
+           get preventScroll() {
+             return Oi = {
+               preventScroll: !0
+             }, !0
+           }
+         } : void 0), !Oi) {
+         Oi = !1;
+         for (let pp = 0; pp < ip.length;) {
+           let cp = ip[pp++],
+             Op = ip[pp++],
+ ... (48 more added lines; see GitHub link above)
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5128` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6672) · [Before (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5128)

```diff
-       var Gn = (CC => (CC[CC.File = 0] = "File", CC[CC.Directory = 1] = "Directory", CC))(Gn || {});
+     }
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5130-L5131` → after: `L6674-L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6674-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6674-L6686) · [Before (L5130-L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5130-L5131)

```diff
-       function Rn(CC, zC, ZC, QC) {
-         return ((null == zC ? void 0 : zC.excludeDirectories) || (null == zC ? void 0 : zC.excludeFiles)) && (hs(CC, null == zC ? void 0 : zC.excludeFiles, ZC, QC()) || hs(CC, null == zC ? void 0 : zC.excludeDirectories, ZC, QC()))
+     function Yi(pp, ip) {
+       for (let cp = pp, Op = ip;;) {
+         if (3 == cp.nodeType && Op < cp.nodeValue.length) return {
+           node: cp,
+           offset: Op
+         };
+         if (1 == cp.nodeType && Op < cp.childNodes.length) {
+           if ("false" == cp.contentEditable) return null;
+           cp = cp.childNodes[Op], Op = 0
+         } else {
+           if (!cp.parentNode || Gp(cp)) return null;
+           Op = gp(cp) + 1, cp = cp.parentNode
+         }
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5133-L5138` → after: `L6688-L6746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6688-L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6688-L6746) · [Before (L5133-L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5133-L5138)

```diff
- 
-       function An(CC, zC, ZC, QC, wC) {
-         return (bC, nC) => {
-           if ("rename" === bC) {
-             const bC = nC ? bf(zf(CC, nC)) : CC;
-             nC && Rn(bC, ZC, QC, wC) || zC(bC)
+     }
+     kp.safari && kp.safari_version >= 26 && (Oi = !1);
+     class Di {
+       constructor(pp, ip) {
+         let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         this.node = pp, this.offset = ip, this.precise = cp
+       }
+       static before(pp, ip) {
+         return new Di(pp.parentNode, gp(pp), ip)
+       }
+       static after(pp, ip) {
+         return new Di(pp.parentNode, gp(pp) + 1, ip)
+       }
+     }
+     var Ai = function(pp) {
+       return pp[pp.LTR = 0] = "LTR", pp[pp.RTL = 1] = "RTL", pp
+ ... (43 more added lines; see GitHub link above)
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5143-L5183` → after: `L6754-L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6754-L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6754-L6763) · [Before (L5143-L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5143-L5183)

```diff
-       function xn(CC) {
-         let {
-           pollingWatchFileWorker: zC,
-           getModifiedTime: ZC,
-           setTimeout: QC,
-           clearTimeout: wC,
-           fsWatchWorker: bC,
-           fileSystemEntryExists: nC,
-           useCaseSensitiveFileNames: fC,
-           getCurrentDirectory: oC,
-           fsSupportsRecursiveFsWatch: qC,
-           getAccessibleSortedChildDirectories: FC,
-           realpath: WC,
-           tscWatchFile: NC,
-           useNonPollingWatchers: MC,
-           tscWatchDirectory: gC,
- ... (25 more removed lines; see GitHub link above)
+     function ui(pp, ip) {
+       if (pp.length != ip.length) return !1;
+       for (let cp = 0; cp < pp.length; cp++) {
+         let Op = pp[cp],
+           op = ip[cp];
+         if (Op.from != op.from || Op.to != op.to || Op.direction != op.direction || !ui(Op.inner, op.inner)) return !1
+       }
+       return !0
+     }
+     const ji = [];
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5185-L5205` → after: `L6765-L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6765-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6765-L6789) · [Before (L5185-L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5185-L5205)

```diff
-         function eC(CC, zC, QC, wC) {
-           wC = function(CC, zC) {
-             if (CC && void 0 !== CC.watchFile) return CC;
-             switch (NC) {
-               case "PriorityPollingInterval":
-                 return {
-                   watchFile: 1
-                 };
-               case "DynamicPriorityPolling":
-                 return {
-                   watchFile: 2
-                 };
-               case "UseFsEvents":
-                 return YC(4, 1, CC);
-               case "UseFsEventsWithFallbackDynamicPolling":
-                 return YC(4, 2, CC);
- ... (5 more removed lines; see GitHub link above)
+     function ki(pp, ip, cp, Op, op, Ip, Sp) {
+       let xp = Op % 2 ? 2 : 1;
+       if (Op % 2 == op % 2)
+         for (let Lp = ip, Yp = 0; Lp < cp;) {
+           let ip = !0,
+             Dp = !1;
+           if (Yp == Ip.length || Lp < Ip[Yp].from) {
+             let pp = ji[Lp];
+             pp != xp && (ip = !1, Dp = 16 == pp)
+           }
+           let Ap = ip || 1 != xp ? null : [],
+             Pp = ip ? Op : Op + 1,
+             Wp = Lp;
+           pp: for (;;)
+             if (Yp < Ip.length && Wp == Ip[Yp].from) {
+               if (Dp) break pp;
+ ... (9 more added lines; see GitHub link above)
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5208-L5222` → after: `L6808-L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6808-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6808-L6826) · [Before (L5208-L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5208-L5222)

```diff
-           }(wC, MC);
-           const bC = PQ.checkDefined(wC.watchFile);
-           switch (bC) {
-             case 0:
-               return mC(CC, zC, 250, void 0);
-             case 1:
-               return mC(CC, zC, QC, void 0);
-             case 2:
-               return hC()(CC, zC, QC, void 0);
-             case 3:
-               return KC()(CC, zC, void 0, void 0);
-             case 4:
-               return HC(CC, 0, function(CC, zC, ZC) {
-                 return (QC, wC, bC) => {
-                   "rename" === QC ? (bC || (bC = ZC(CC) || Cn), zC(CC, bC !== Cn ? 0 : 2, bC)) : zC(CC, 1, bC)
+             let Ap = cp || 1 != xp ? null : [],
+               Pp = cp ? Op : Op + 1,
+               Wp = Lp;
+             pp: for (;;)
+               if (Yp && Wp == Ip[Yp - 1].to) {
+                 if (Dp) break pp;
+                 let yp = Ip[--Yp];
+                 if (!cp)
+                   for (let pp = yp.from, cp = Yp;;) {
+                     if (pp == ip) break pp;
+                     if (!cp || Ip[cp - 1].to != pp) {
+                       if (ji[pp - 1] == xp) break pp;
+                       break
+                     }
+                     pp = Ip[--cp].from
+                   }
+ ... (3 more added lines; see GitHub link above)
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5224-L5228` → after: `L6828-L6891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6828-L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6828-L6891) · [Before (L5224-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5224-L5228)

```diff
-               }(CC, zC, ZC), !1, QC, tL(wC));
-             case 5:
-               return IC || (IC = qn(HC, fC, ZC, pC)), IC(CC, zC, QC, tL(wC));
-             default:
-               PQ.assertNever(bC)
+                 Wp = yp.from
+               } else {
+                 if (Wp == ip || (cp ? ji[Wp - 1] != xp : ji[Wp - 1] == xp)) break;
+                 Wp--
+               } Ap ? ki(pp, Wp, Lp, Op + 1, op, Ap, Sp) : Wp < Lp && Sp.push(new ei(Wp, Lp, Pp)), Lp = Wp
+           }
+     }
+ 
+     function mi(pp, ip, cp, Op, op, Ip, Sp) {
+       let xp = ip % 2 ? 2 : 1;
+       ! function(pp, ip, cp, Op, op) {
+         for (let Ip = 0; Ip <= Op.length; Ip++) {
+           let Sp = Ip ? Op[Ip - 1].to : ip,
+             xp = Ip < Op.length ? Op[Ip].from : cp,
+             Lp = Ip ? 256 : op;
+           for (let ip = Sp, cp = Lp, Op = Lp; ip < xp; ip++) {
+ ... (48 more added lines; see GitHub link above)
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5231-L5236` → after: `L6894-L7072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6894-L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L6894-L7072) · [Before (L5231-L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5231-L5236)

```diff
- 
-         function hC() {
-           return xC || (xC = fn({
-             getModifiedTime: ZC,
-             setTimeout: QC
-           }))
+       }(pp, op, Ip, Op, xp),
+       function(pp, ip, cp, Op) {
+         for (let op = 0, Ip = Op; op <= cp.length; op++) {
+           let Sp = op ? cp[op - 1].to : pp,
+             xp = op < cp.length ? cp[op].from : ip;
+           for (let Lp = Sp; Lp < xp;) {
+             let Sp = ji[Lp];
+             if (256 == Sp) {
+               let Sp = Lp + 1;
+               for (;;)
+                 if (Sp == xp) {
+                   if (op == cp.length) break;
+                   Sp = cp[op++].to, xp = op < cp.length ? cp[op].from : ip
+                 } else {
+                   if (256 != ji[Sp]) break;
+                   Sp++
+ ... (163 more added lines; see GitHub link above)
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5239-L5247` → after: `L7087-L7106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7087-L7106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7087-L7106) · [Before (L5239-L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5239-L5247)

```diff
-         function KC() {
-           return JC || (JC = function(CC) {
-             const zC = [];
-             let ZC, QC = 0;
-             return function(ZC, QC) {
-               const wC = {
-                 fileName: ZC,
-                 callback: QC,
-                 mtime: zn(CC, ZC)
+     function Lc(pp, ip) {
+       let cp = pp.state.facet(xc);
+       if (!cp.length) return cp;
+       let op = cp.map((ip => ip instanceof Function ? ip(pp) : ip)),
+         Ip = [];
+       return Op.A.spans(op, ip.from, ip.to, {
+         point() {},
+         span(pp, cp, Op, op) {
+           let Sp = pp - ip.from,
+             xp = cp - ip.from,
+             Lp = Ip;
+           for (let Ip = Op.length - 1; Ip >= 0; Ip--, op--) {
+             let pp, cp = Op[Ip].spec.bidiIsolate;
+             if (null == cp && (cp = Ei(ip.text, Sp, xp)), op > 0 && Lp.length && (pp = Lp[Lp.length - 1]).to == Sp && pp.direction == cp) pp.to = xp, Lp = pp.inner;
+             else {
+               let pp = {
+ ... (4 more added lines; see GitHub link above)
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5249-L5261` → after: `L7108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7108) · [Before (L5249-L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5249-L5261)

```diff
-               return zC.push(wC), bC(), {
-                 close: () => {
-                   wC.isClosed = !0, OZ(zC, wC)
-                 }
-               }
-             };
- 
-             function wC() {
-               ZC = void 0, QC = nn(CC, zC, QC, wn[250]), bC()
-             }
- 
-             function bC() {
-               zC.length && !ZC && (ZC = CC.setTimeout(wC, 2e3, "pollQueue"))
+               Lp.push(pp), Lp = pp.inner
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5277-L5308` → after: `L7116-L7147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7116-L7147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7116-L7147) · [Before (L5277-L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5277-L5308)

```diff
-         function dC(CC, zC, ZC, QC) {
-           PQ.assert(!ZC);
-           const wC = function(CC) {
-               if (CC && void 0 !== CC.watchDirectory) return CC;
-               switch (gC) {
-                 case "RecursiveDirectoryUsingFsWatchFile":
-                   return {
-                     watchDirectory: 1
-                   };
-                 case "RecursiveDirectoryUsingDynamicPriorityPolling":
-                   return {
-                     watchDirectory: 2
-                   };
-                 default:
-                   const zC = null == CC ? void 0 : CC.fallbackPolling;
-                   return {
- ... (16 more removed lines; see GitHub link above)
+     function Dc(pp) {
+       let ip = 0,
+         cp = 0,
+         Op = 0,
+         op = 0;
+       for (let Ip of pp.state.facet(Yc)) {
+         let Sp = Ip(pp);
+         Sp && (null != Sp.left && (ip = Math.max(ip, Sp.left)), null != Sp.right && (cp = Math.max(cp, Sp.right)), null != Sp.top && (Op = Math.max(Op, Sp.top)), null != Sp.bottom && (op = Math.max(op, Sp.bottom)))
+       }
+       return {
+         left: ip,
+         right: cp,
+         top: Op,
+         bottom: op
+       }
+     }
+ ... (16 more added lines; see GitHub link above)
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5311-L5339` → after: `L7150-L7173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7150-L7173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7150-L7173) · [Before (L5311-L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5311-L5339)

```diff
- 
-         function mC(CC, ZC, QC, wC) {
-           return Fn(GC, fC, CC, ZC, (ZC => zC(CC, ZC, QC, wC)))
-         }
- 
-         function HC(CC, zC, QC, wC, oC, qC) {
-           return Fn(wC ? AC : RC, fC, CC, QC, (QC => function(CC, zC, QC, wC, fC, oC) {
-             let qC, FC;
-             SC && (qC = CC.substring(CC.lastIndexOf(en)), FC = qC.slice(en.length));
-             let WC = nC(CC, zC) ? MC() : RC();
-             return {
-               close: () => {
-                 WC && (WC.close(), WC = void 0)
-               }
-             };
- 
- ... (13 more removed lines; see GitHub link above)
+         return pp.splice(ip, 0, cp), pp
+       }
+       static extendWithRanges(pp, ip) {
+         if (0 == ip.length) return pp;
+         let cp = [];
+         for (let Op = 0, op = 0, Ip = 0;;) {
+           let Sp = Op < pp.length ? pp[Op].fromB : 1e9,
+             xp = op < ip.length ? ip[op] : 1e9,
+             Lp = Math.min(Sp, xp);
+           if (1e9 == Lp) break;
+           let Yp = Lp + Ip,
+             Dp = Lp,
+             Ap = Yp;
+           for (;;)
+             if (op < ip.length && ip[op] <= Dp) {
+               let cp = ip[op + 1];
+ ... (8 more added lines; see GitHub link above)
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5341-L5370` → after: `L7175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7175) · [Before (L5341-L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5341-L5370)

```diff
-             }
- 
-             function gC(zC, wC) {
-               let bC;
-               if (wC && tZ(wC, "~") && (bC = wC, wC = wC.slice(0, wC.length - 1)), "rename" !== zC || wC && wC !== FC && !tZ(wC, qC)) bC && QC(zC, bC), QC(zC, wC);
-               else {
-                 const nC = ZC(CC) || Cn;
-                 bC && QC(zC, bC, nC), QC(zC, wC, nC), SC ? NC(nC === Cn ? RC : MC) : nC === Cn && NC(RC)
-               }
-             }
- 
-             function GC() {
-               return eC(CC, function(CC) {
-                 return (zC, ZC, QC) => CC(1 === ZC ? "change" : "rename", "", QC)
-               }(QC), fC, oC)
-             }
- ... (14 more removed lines; see GitHub link above)
+             } cp.push(new Pc(Yp, Ap, Lp, Dp))
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5373-L5376` → after: `L7179-L7185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7179-L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7179-L7185) · [Before (L5373-L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5373-L5376)

```diff
- 
-       function Jn(CC) {
-         const zC = CC.writeFile;
-         CC.writeFile = (ZC, QC, wC) => kA(ZC, QC, !!wC, ((ZC, QC, wC) => zC.call(CC, ZC, QC, wC)), (zC => CC.createDirectory(zC)), (zC => CC.directoryExists(zC)))
+     }
+     class Wc {
+       constructor(pp, ip, cp) {
+         this.view = pp, this.state = ip, this.transactions = cp, this.flags = 0, this.startState = pp.state, this.changes = Op.ChangeSet.empty(this.startState.doc.length);
+         for (let Op of cp) this.changes = this.changes.compose(Op.changes);
+         let op = [];
+         this.changes.iterChangedRanges(((pp, ip, cp, Op) => op.push(new Pc(pp, ip, cp, Op)))), this.changedRanges = op
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5378-L5750` → after: `L7187-L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7187-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7187-L7188) · [Before (L5378-L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5378-L5750)

```diff
-       var In = (() => {
-         let CC;
-         return pQ() && (CC = function() {
-           const CC = /^native |^\([^)]+\)$|^(?:internal[\\/]|[\w\s]+(?:\.js)?$)/,
-             zC = ZC(41216),
-             wC = ZC(41222),
-             bC = ZC(41226);
-           let nC, fC;
-           try {
-             nC = ZC(41232)
-           } catch {
-             nC = void 0
-           }
-           let oC = "./profile.cpuprofile";
-           const qC = "darwin" === process.platform,
-             FC = "linux" === process.platform || qC,
- ... (357 more removed lines; see GitHub link above)
+       static create(pp, ip, cp) {
+         return new Wc(pp, ip, cp)
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5752-L5790` → after: `L7190-L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7190-L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7190-L7191) · [Before (L5752-L5790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5752-L5790)

```diff
-       In && In.getEnvironmentVariable && (! function(CC) {
-         if (!CC.getEnvironmentVariable) return;
-         const zC = function(CC, zC) {
-           const QC = ZC("TSC_WATCH_POLLINGINTERVAL");
-           return !!QC && (wC("Low"), wC("Medium"), wC("High"), !0);
- 
-           function wC(CC) {
-             zC[CC] = QC[CC] || zC[CC]
-           }
-         }(0, Vb);
- 
-         function ZC(zC) {
-           let ZC;
-           return QC("Low"), QC("Medium"), QC("High"), ZC;
- 
-           function QC(QC) {
- ... (23 more removed lines; see GitHub link above)
+       get viewportChanged() {
+         return (4 & this.flags) > 0
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5792-L5794` → after: `L7193-L7194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7193-L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7193-L7194) · [Before (L5792-L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5792-L5794)

```diff
- 
-       function mn(CC) {
-         return Dn(CC) < 0
+       get viewportMoved() {
+         return (8 & this.flags) > 0
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5796-L5798` → after: `L7196-L7197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7196-L7197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7196-L7197) · [Before (L5796-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5796-L5798)

```diff
- 
-       function Hn(CC) {
-         return Dn(CC) > 0
+       get heightChanged() {
+         return (2 & this.flags) > 0
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5800-L5803` → after: `L7199-L7200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7199-L7200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7199-L7200) · [Before (L5800-L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5800-L5803)

```diff
- 
-       function En(CC) {
-         const zC = Dn(CC);
-         return zC > 0 && zC === CC.length
+       get geometryChanged() {
+         return this.docChanged || (18 & this.flags) > 0
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5805-L5807` → after: `L7202-L7203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7202-L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7202-L7203) · [Before (L5805-L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5805-L5807)

```diff
- 
-       function Xn(CC) {
-         return 0 !== Dn(CC)
+       get focusChanged() {
+         return (1 & this.flags) > 0
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5809-L5811` → after: `L7205-L7206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7205-L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7205-L7206) · [Before (L5809-L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5809-L5811)

```diff
- 
-       function cn(CC) {
-         return /^\.\.?(?:$|[\\/])/.test(CC)
+       get docChanged() {
+         return !this.changes.empty
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5813-L5815` → after: `L7208-L7209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7208-L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7208-L7209) · [Before (L5813-L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5813-L5815)

```diff
- 
-       function un(CC) {
-         return !Xn(CC) && !cn(CC)
+       get selectionSet() {
+         return this.transactions.some((pp => pp.selection))
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5817-L5819` → after: `L7211-L7212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7211-L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7211-L7212) · [Before (L5817-L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5817-L5819)

```diff
- 
-       function rn(CC) {
-         return Ln(CC).includes(".")
+       get empty() {
+         return 0 == this.flags && 0 == this.transactions.length
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5821-L5823` → after: `L7214-L7219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7214-L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7214-L7219) · [Before (L5821-L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5821-L5823)

```diff
- 
-       function sn(CC, zC) {
-         return CC.length > zC.length && tZ(CC, zC)
+     }
+     const yc = [];
+     class Uc {
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.dom = pp, this.length = ip, this.flags = cp, this.parent = null, pp.cmTile = this
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5825-L5828` → after: `L7221-L7227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7221-L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7221-L7227) · [Before (L5825-L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5825-L5828)

```diff
- 
-       function Tn(CC, zC) {
-         for (const ZC of zC)
-           if (sn(CC, ZC)) return !0;
+       get breakAfter() {
+         return 1 & this.flags
+       }
+       get children() {
+         return yc
+       }
+       isWidget() {
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5831-L5833` → after: `L7230-L7231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7230-L7231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7230-L7231) · [Before (L5831-L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5831-L5833)

```diff
- 
-       function an(CC) {
-         return CC.length > 0 && dn(CC.charCodeAt(CC.length - 1))
+       get isHidden() {
+         return !1
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5835-L5837` → after: `L7233-L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7233-L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7233-L7234) · [Before (L5835-L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5835-L5837)

```diff
- 
-       function tn(CC) {
-         return CC >= 97 && CC <= 122 || CC >= 65 && CC <= 90
+       isComposite() {
+         return !1
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5839-L5879` → after: `L7236-L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7236-L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7236-L7237) · [Before (L5839-L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5839-L5879)

```diff
- 
-       function Dn(CC) {
-         if (!CC) return 0;
-         const zC = CC.charCodeAt(0);
-         if (47 === zC || 92 === zC) {
-           if (CC.charCodeAt(1) !== zC) return 1;
-           const ZC = CC.indexOf(47 === zC ? en : hn, 2);
-           return ZC < 0 ? CC.length : ZC + 1
-         }
-         if (tn(zC) && 58 === CC.charCodeAt(1)) {
-           const zC = CC.charCodeAt(2);
-           if (47 === zC || 92 === zC) return 3;
-           if (2 === CC.length) return 2
-         }
-         const ZC = CC.indexOf(Kn);
-         if (-1 !== ZC) {
- ... (25 more removed lines; see GitHub link above)
+       isLine() {
+         return !1
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5881-L5884` → after: `L7239-L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7239-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7239-L7240) · [Before (L5881-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5881-L5884)

```diff
- 
-       function jn(CC) {
-         const zC = Dn(CC);
-         return zC < 0 ? ~zC : zC
+       isText() {
+         return !1
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5886-L5889` → after: `L7242-L7243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7242-L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7242-L7243) · [Before (L5886-L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5886-L5889)

```diff
- 
-       function yn(CC) {
-         const zC = jn(CC = Vn(CC));
-         return zC === CC.length ? CC : (CC = qf(CC)).slice(0, Math.max(zC, CC.lastIndexOf(en)))
+       isBlock() {
+         return !1
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5891-L5896` → after: `L7245-L7246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7245-L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7245-L7246) · [Before (L5891-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5891-L5896)

```diff
- 
-       function Ln(CC, zC, ZC) {
-         if (jn(CC = Vn(CC)) === CC.length) return "";
-         const QC = (CC = qf(CC)).slice(Math.max(jn(CC), CC.lastIndexOf(en) + 1)),
-           wC = void 0 !== zC && void 0 !== ZC ? Bn(QC, zC, ZC) : void 0;
-         return wC ? QC.slice(0, QC.length - wC.length) : QC
+       get domAttrs() {
+         return null
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5898-L5902` → after: `L7248-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7248-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7248-L7261) · [Before (L5898-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5898-L5902)

```diff
- 
-       function Un(CC, zC, ZC) {
-         if (ZQ(zC, ".") || (zC = "." + zC), CC.length >= zC.length && 46 === CC.charCodeAt(CC.length - zC.length)) {
-           const QC = CC.slice(CC.length - zC.length);
-           if (ZC(QC, zC)) return QC
+       sync(pp) {
+         if (this.flags |= 2, 4 & this.flags) {
+           this.flags &= -5;
+           let pp = this.domAttrs;
+           pp && function(pp, ip) {
+             for (let cp = pp.attributes.length - 1; cp >= 0; cp--) {
+               let Op = pp.attributes[cp].name;
+               null == ip[Op] && pp.removeAttribute(Op)
+             }
+             for (let cp in ip) {
+               let Op = ip[cp];
+               "style" == cp ? pp.style.cssText = Op : pp.getAttribute(cp) != Op && pp.setAttribute(cp, Op)
+             }
+           }(this.dom, pp)
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5905-L5925` → after: `L7264-L7265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7264-L7265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7264-L7265) · [Before (L5905-L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5905-L5925)

```diff
- 
-       function Bn(CC, zC, ZC) {
-         if (zC) return function(CC, zC, ZC) {
-           if ("string" === typeof zC) return Un(CC, zC, ZC) || "";
-           for (const QC of zC) {
-             const zC = Un(CC, QC, ZC);
-             if (zC) return zC
-           }
-           return ""
-         }(qf(CC), zC, ZC ? xZ : JZ);
-         const QC = Ln(CC),
-           wC = QC.lastIndexOf(".");
-         return wC >= 0 ? QC.substring(wC) : ""
-       }
- 
-       function On(CC) {
- ... (5 more removed lines; see GitHub link above)
+       toString() {
+         return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5927-L5930` → after: `L7267-L7268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7267-L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7267-L7268) · [Before (L5927-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5927-L5930)

```diff
- 
-       function kn(CC, zC) {
-         if (0 === CC.length) return "";
-         return (CC[0] && Ff(CC[0])) + CC.slice(1, zC).join(en)
+       destroy() {
+         this.parent = null
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5932-L5934` → after: `L7270-L7271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7270-L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7270-L7271) · [Before (L5932-L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5932-L5934)

```diff
- 
-       function Vn(CC) {
-         return CC.includes("\\") ? CC.replace(Yn, en) : CC
+       setDOM(pp) {
+         this.dom = pp, pp.cmTile = this
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5936-L5953` → after: `L7273-L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7273-L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7273-L7274) · [Before (L5936-L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5936-L5953)

```diff
- 
-       function Cf(CC) {
-         if (!LC(CC)) return [];
-         const zC = [CC[0]];
-         for (let ZC = 1; ZC < CC.length; ZC++) {
-           const QC = CC[ZC];
-           if (QC && "." !== QC) {
-             if (".." === QC)
-               if (zC.length > 1) {
-                 if (".." !== zC[zC.length - 1]) {
-                   zC.pop();
-                   continue
-                 }
-               } else if (zC[0]) continue;
-             zC.push(QC)
-           }
- ... (2 more removed lines; see GitHub link above)
+       get posAtStart() {
+         return this.parent ? this.parent.posBefore(this) : 0
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5955-L5960` → after: `L7276-L7277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7276-L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7276-L7277) · [Before (L5955-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5955-L5960)

```diff
- 
-       function zf(CC) {
-         CC && (CC = Vn(CC));
-         for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
-         for (let wC of ZC) wC && (wC = Vn(wC), CC = CC && 0 === jn(wC) ? Ff(CC) + wC : wC);
-         return CC
+       get posAtEnd() {
+         return this.posAtStart + this.length
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5962-L5965` → after: `L7279-L7285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7279-L7285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7279-L7285) · [Before (L5962-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5962-L5965)

```diff
- 
-       function Zf(CC) {
-         for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
-         return bf(LC(ZC) ? zf(CC, ...ZC) : Vn(CC))
+       posBefore(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
+         for (let cp of this.children) {
+           if (cp == pp) return ip;
+           ip += cp.length + cp.breakAfter
+         }
+         throw new RangeError("Invalid child in posBefore")
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5967-L5969` → after: `L7287-L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7287-L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7287-L7288) · [Before (L5967-L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5967-L5969)

```diff
- 
-       function Qf(CC, zC) {
-         return Cf(On(CC, zC))
+       posAfter(pp) {
+         return this.posBefore(pp) + pp.length
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5971-L6002` → after: `L7290-L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7290-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7290-L7291) · [Before (L5971-L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L5971-L6002)

```diff
- 
-       function wf(CC, zC) {
-         let ZC = jn(CC);
-         0 === ZC && zC ? ZC = jn(CC = zf(zC, CC)) : CC = Vn(CC);
-         const QC = nf(CC);
-         if (void 0 !== QC) return QC.length > ZC ? qf(QC) : QC;
-         const wC = CC.length,
-           bC = CC.substring(0, ZC);
-         let nC, fC = ZC,
-           oC = fC,
-           qC = fC,
-           FC = 0 !== ZC;
-         for (; fC < wC;) {
-           oC = fC;
-           let zC = CC.charCodeAt(fC);
-           for (; 47 === zC && fC + 1 < wC;) fC++, zC = CC.charCodeAt(fC);
- ... (16 more removed lines; see GitHub link above)
+       covers(pp) {
+         return !0
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6004-L6007` → after: `L7293-L7294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7293-L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7293-L7294) · [Before (L6004-L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6004-L6007)

```diff
- 
-       function bf(CC) {
-         let zC = nf(CC = Vn(CC));
-         return void 0 !== zC ? zC : (zC = wf(CC, ""), zC && an(CC) ? Ff(zC) : zC)
+       coordsIn(pp, ip) {
+         return null
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6009-L6013` → after: `L7296-L7299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7296-L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7296-L7299) · [Before (L6009-L6013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6009-L6013)

```diff
- 
-       function nf(CC) {
-         if (!gf.test(CC)) return CC;
-         let zC = CC.replace(/\/\.\//g, "/");
-         return zC.startsWith("./") && (zC = zC.slice(2)), zC === CC || (CC = zC, gf.test(CC)) ? void 0 : CC
+       domPosFor(pp, ip) {
+         let cp = gp(this.dom),
+           Op = this.length ? pp > 0 : ip > 0;
+         return new Di(this.parent.dom, cp + (Op ? 1 : 0), 0 == pp || pp == this.length)
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6015-L6018` → after: `L7301-L7302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7301-L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7301-L7302) · [Before (L6015-L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6015-L6018)

```diff
- 
-       function ff(CC, zC) {
-         return 0 === (ZC = Qf(CC, zC)).length ? "" : ZC.slice(1).join(en);
-         var ZC
+       markDirty(pp) {
+         this.flags &= -3, pp && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6020-L6022` → after: `L7304-L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7304-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7304-L7305) · [Before (L6020-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6020-L6022)

```diff
- 
-       function of(CC, zC, ZC) {
-         return ZC(Hn(CC) ? bf(CC) : wf(CC, zC))
+       get overrideDOMText() {
+         return null
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6024-L6026` → after: `L7307-L7310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7307-L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7307-L7310) · [Before (L6024-L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6024-L6026)

```diff
- 
-       function qf(CC) {
-         return an(CC) ? CC.substr(0, CC.length - 1) : CC
+       get root() {
+         for (let pp = this; pp; pp = pp.parent)
+           if (pp instanceof tc) return pp;
+         return null
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6028-L6030` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7312-L7313) · [Before (L6028-L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6028-L6030)

```diff
- 
-       function Ff(CC) {
-         return an(CC) ? CC : CC + en
+       static get(pp) {
+         return pp.cmTile
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6032-L6034` → after: `L7315-L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7315-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7315-L7318) · [Before (L6032-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6032-L6034)

```diff
- 
-       function Wf(CC) {
-         return Xn(CC) || cn(CC) ? CC : "./" + CC
+     }
+     class wc extends Uc {
+       constructor(pp) {
+         super(pp, 0), this._children = []
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6036-L6039` → after: `L7320-L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7320-L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7320-L7321) · [Before (L6036-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6036-L6039)

```diff
- 
-       function Nf(CC, zC, ZC, QC) {
-         const wC = void 0 !== ZC && void 0 !== QC ? Bn(CC, ZC, QC) : Bn(CC);
-         return wC ? CC.slice(0, CC.length - wC.length) + (ZQ(zC, ".") ? zC : "." + zC) : CC
+       isComposite() {
+         return !0
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6041-L6044` → after: `L7323-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7323-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7323-L7324) · [Before (L6041-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6041-L6044)

```diff
- 
-       function Mf(CC, zC) {
-         const ZC = Uc(CC);
-         return ZC ? CC.slice(0, CC.length - ZC.length) + (ZQ(zC, ".") ? zC : "." + zC) : Nf(CC, zC)
+       get children() {
+         return this._children
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6046-L6066` → after: `L7326-L7327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7326-L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7326-L7327) · [Before (L6046-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6046-L6066)

```diff
-       var gf = /\/\/|(?:^|\/)\.\.?(?:$|\/)/;
- 
-       function Sf(CC, zC, ZC) {
-         if (CC === zC) return 0;
-         if (void 0 === CC) return -1;
-         if (void 0 === zC) return 1;
-         const QC = CC.substring(0, jn(CC)),
-           wC = zC.substring(0, jn(zC)),
-           bC = KZ(QC, wC);
-         if (0 !== bC) return bC;
-         const nC = CC.substring(QC.length),
-           fC = zC.substring(wC.length);
-         if (!gf.test(nC) && !gf.test(fC)) return ZC(nC, fC);
-         const oC = Cf(On(CC)),
-           qC = Cf(On(zC)),
-           FC = Math.min(oC.length, qC.length);
- ... (5 more removed lines; see GitHub link above)
+       get lastChild() {
+         return this.children.length ? this.children[this.children.length - 1] : null
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6068-L6070` → after: `L7329-L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7329-L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7329-L7330) · [Before (L6068-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6068-L6070)

```diff
- 
-       function pf(CC, zC) {
-         return Sf(CC, zC, dZ)
+       append(pp) {
+         this.children.push(pp), pp.parent = this
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6072-L6074` → after: `L7332-L7361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7332-L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7332-L7361) · [Before (L6072-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6072-L6074)

```diff
- 
-       function Pf(CC, zC) {
-         return Sf(CC, zC, KZ)
+       sync(pp) {
+         if (2 & this.flags) return;
+         super.sync(pp);
+         let ip, cp = this.dom,
+           Op = null,
+           op = (null === pp || void 0 === pp ? void 0 : pp.node) == cp ? pp : null,
+           Ip = 0;
+         for (let Sp of this.children) {
+           if (Sp.sync(pp), Ip += Sp.length + Sp.breakAfter, ip = Op ? Op.nextSibling : cp.firstChild, op && ip != Sp.dom && (op.written = !0), Sp.dom.parentNode == cp)
+             for (; ip && ip != Sp.dom;) ip = vc(ip);
+           else cp.insertBefore(Sp.dom, ip);
+           Op = Sp.dom
+         }
+         for (ip = Op ? Op.nextSibling : cp.firstChild, op && ip && (op.written = !0); ip;) ip = vc(ip);
+         this.length = Ip
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6076-L6078` → after: `L7363-L7364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7363-L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7363-L7364) · [Before (L6076-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6076-L6078)

```diff
- 
-       function Gf(CC, zC, ZC, QC) {
-         return "string" === typeof ZC ? (CC = zf(ZC, CC), zC = zf(ZC, zC)) : "boolean" === typeof ZC && (QC = ZC), Sf(CC, zC, mZ(QC))
+       isBlock() {
+         return !0
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6080-L6089` → after: `L7366-L7371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7366-L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7366-L7371) · [Before (L6080-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6080-L6089)

```diff
- 
-       function Rf(CC, zC, ZC, QC) {
-         if ("string" === typeof ZC ? (CC = zf(ZC, CC), zC = zf(ZC, zC)) : "boolean" === typeof ZC && (QC = ZC), void 0 === CC || void 0 === zC) return !1;
-         if (CC === zC) return !0;
-         const wC = Cf(On(CC)),
-           bC = Cf(On(zC));
-         if (bC.length < wC.length) return !1;
-         const nC = QC ? xZ : JZ;
-         for (let fC = 0; fC < wC.length; fC++) {
-           if (!(0 === fC ? xZ : nC)(wC[fC], bC[fC])) return !1
+       nearest(pp) {
+         for (;;) {
+           if (!pp) return null;
+           let ip = Uc.get(pp);
+           if (ip && this.owns(ip)) return ip;
+           pp = pp.parentNode
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6093-L6097` → after: `L7374-L7388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7374-L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7374-L7388) · [Before (L6093-L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6093-L6097)

```diff
- 
-       function Af(CC, zC, ZC) {
-         const QC = ZC(CC),
-           wC = ZC(zC);
-         return ZQ(QC, wC + "/") || ZQ(QC, wC + "\\")
+       blockTiles(pp) {
+         for (let ip = [], cp = this, Op = 0, op = 0;;)
+           if (Op == cp.children.length) {
+             if (!ip.length) return;
+             cp = cp.parent, cp.breakAfter && op++, Op = ip.pop()
+           } else {
+             let Ip = cp.children[Op++];
+             if (Ip instanceof Hc) ip.push(Op), cp = Ip, Op = 0;
+             else {
+               let ip = op + Ip.length,
+                 cp = pp(Ip, op);
+               if (void 0 !== cp) return cp;
+               op = ip + Ip.breakAfter
+             }
+           }
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6099-L6105` → after: `L7390-L7407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7390-L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7390-L7407) · [Before (L6099-L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6099-L6105)

```diff
- 
-       function xf(CC, zC, ZC, QC) {
-         const wC = Cf(On(CC)),
-           bC = Cf(On(zC));
-         let nC;
-         for (nC = 0; nC < wC.length && nC < bC.length; nC++) {
-           if (!(0 === nC ? xZ : ZC)(QC(wC[nC]), QC(bC[nC]))) break
+       resolveBlock(pp, ip) {
+         let cp, Op, op = -1,
+           Ip = -1;
+         if (this.blockTiles(((Sp, xp) => {
+             let Lp = xp + Sp.length;
+             if (pp >= xp && pp <= Lp) {
+               if (Sp.isWidget() && ip >= -1 && ip <= 1) {
+                 if (32 & Sp.flags) return !0;
+                 16 & Sp.flags && (cp = void 0)
+               }(xp < pp || pp == Lp && (ip < -1 ? Sp.length : Sp.covers(1))) && (!cp || !Sp.isWidget() && cp.isWidget()) && (cp = Sp, op = pp - xp), (Lp > pp || pp == xp && (ip > 1 ? Sp.length : Sp.covers(-1))) && (!Op || !Sp.isWidget() && Op.isWidget()) && (Op = Sp, Ip = pp - xp … [truncated]
+             }
+           })), !cp && !Op) throw new Error("No tile at position " + pp);
+         return cp && ip < 0 || !Op ? {
+           tile: cp,
+           offset: op
+         } : {
+ ... (2 more added lines; see GitHub link above)
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6113-L6116` → after: `L7410-L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7410-L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7410-L7413) · [Before (L6113-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6113-L6116)

```diff
- 
-       function Jf(CC, zC, ZC) {
-         PQ.assert(jn(CC) > 0 === jn(zC) > 0, "Paths must either both be absolute or both be relative");
-         return kn(xf(CC, zC, "boolean" === typeof ZC && ZC ? xZ : JZ, "function" === typeof ZC ? ZC : NZ))
+     }
+     class Hc extends wc {
+       constructor(pp, ip) {
+         super(pp), this.wrapper = ip
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6118-L6120` → after: `L7415-L7416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7415-L7416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7415-L7416) · [Before (L6118-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6118-L6120)

```diff
- 
-       function If(CC, zC, ZC) {
-         return Hn(CC) ? ef(zC, CC, zC, ZC, !1) : CC
+       isBlock() {
+         return !0
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6122-L6124` → after: `L7418-L7419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7418-L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7418-L7419) · [Before (L6122-L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6122-L6124)

```diff
- 
-       function vf(CC, zC, ZC) {
-         return Wf(Jf(yn(CC), zC, ZC))
+       covers(pp) {
+         return !!this.children.length && (pp < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6126-L6134` → after: `L7421-L7422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7421-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7421-L7422) · [Before (L6126-L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6126-L6134)

```diff
- 
-       function ef(CC, zC, ZC, QC, wC) {
-         const bC = xf(Zf(ZC, CC), Zf(ZC, zC), JZ, QC),
-           nC = bC[0];
-         if (wC && Hn(nC)) {
-           const CC = nC.charAt(0) === en ? "file://" : "file:///";
-           bC[0] = CC + nC
-         }
-         return kn(bC)
+       get domAttrs() {
+         return this.wrapper.attributes
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6136-L6144` → after: `L7424-L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7424-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7424-L7426) · [Before (L6136-L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6136-L6144)

```diff
- 
-       function hf(CC, zC) {
-         for (;;) {
-           const ZC = zC(CC);
-           if (void 0 !== ZC) return ZC;
-           const QC = yn(CC);
-           if (QC === CC) return;
-           CC = QC
-         }
+       static of (pp, ip) {
+         let cp = new Hc(ip || document.createElement(pp.tagName), pp);
+         return ip || (cp.flags |= 4), cp
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6146-L6148` → after: `L7428-L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7428-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7428-L7431) · [Before (L6146-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6146-L6148)

```diff
- 
-       function Kf(CC) {
-         return tZ(CC, "/node_modules")
+     }
+     class dc extends wc {
+       constructor(pp, ip) {
+         super(pp), this.attrs = ip
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6150-L6160` → after: `L7433-L7434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7433-L7434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7433-L7434) · [Before (L6150-L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6150-L6160)

```diff
- 
-       function Yf(CC, zC, ZC, QC, wC, bC, nC) {
-         return {
-           code: CC,
-           category: zC,
-           key: ZC,
-           message: QC,
-           reportsUnnecessary: wC,
-           elidedInCompatabilityPyramid: bC,
-           reportsDeprecated: nC
-         }
+       isLine() {
+         return !0
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6162-L8287` → after: `L7436-L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7436-L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7436-L7438) · [Before (L6162-L8287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L6162-L8287)

```diff
-       var df = {
-         Unterminated_string_literal: Yf(1002, 1, "Unterminated_string_literal_1002", "Unterminated string literal."),
-         Identifier_expected: Yf(1003, 1, "Identifier_expected_1003", "Identifier expected."),
-         _0_expected: Yf(1005, 1, "_0_expected_1005", "'{0}' expected."),
-         A_file_cannot_have_a_reference_to_itself: Yf(1006, 1, "A_file_cannot_have_a_reference_to_itself_1006", "A file cannot have a reference to itself."),
-         The_parser_expected_to_find_a_1_to_match_the_0_token_here: Yf(1007, 1, "The_parser_expected_to_find_a_1_to_match_the_0_token_here_1007", "The parser expected to find a '{1}' to match the '{0}' token here."),
-         Trailing_comma_not_allowed: Yf(1009, 1, "Trailing_comma_not_allowed_1009", "Trailing comma not allowed."),
-         Asterisk_Slash_expected: Yf(1010, 1, "Asterisk_Slash_expected_1010", "'*/' expected."),
-         An_element_access_expression_should_take_an_argument: Yf(1011, 1, "An_element_access_expression_should_take_an_argument_1011", "An element access expression should take an argument."),
-         Unexpected_token: Yf(1012, 1, "Unexpected_token_1012", "Unexpected token."),
-         A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma: Yf(1013, 1, "A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma_1013", "A rest parameter or binding pattern may not have a trailing comma."),
-         A_rest_parameter_must_be_last_in_a_parameter_list: Yf(1014, 1, "A_rest_parameter_must_be_last_in_a_parameter_list_1014", "A rest parameter must be last in a parameter list."),
-         Parameter_cannot_have_question_mark_and_initializer: Yf(1015, 1, "Parameter_cannot_have_question_mark_and_initializer_1015", "Parameter cannot have question mark and initializer."),
-         A_required_parameter_cannot_follow_an_optional_parameter: Yf(1016, 1, "A_required_parameter_cannot_follow_an_optional_parameter_1016", "A required parameter cannot follow an optional parameter."),
-         An_index_signature_cannot_have_a_rest_parameter: Yf(1017, 1, "An_index_signature_cannot_have_a_rest_parameter_1017", "An index signature cannot have a rest parameter."),
-         An_index_signature_parameter_cannot_have_an_accessibility_modifier: Yf(1018, 1, "An_index_signature_parameter_cannot_have_an_accessibility_modifier_1018", "An index signature parameter cannot have an accessibility modifier."),
- ... (2110 more removed lines; see GitHub link above)
+       static start(pp, ip, cp) {
+         let Op = new dc(ip || document.createElement("div"), pp);
+         return ip && cp || (Op.flags |= 4), Op
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8289-L8475` → after: `L7440-L7483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7440-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7440-L7483) · [Before (L8289-L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8289-L8475)

```diff
- 
-       function Hf(CC) {
-         return 32 === CC || mf(CC)
-       }
-       var Ef = {
-           abstract: 128,
-           accessor: 129,
-           any: 133,
-           as: 130,
-           asserts: 131,
-           assert: 132,
-           bigint: 163,
-           boolean: 136,
-           break: 83,
-           case: 84,
-           catch: 85,
- ... (171 more removed lines; see GitHub link above)
+       get domAttrs() {
+         return this.attrs
+       }
+       resolveInline(pp, ip, cp) {
+         let Op = null,
+           op = -1,
+           Ip = null,
+           Sp = -1;
+         ! function pp(xp, Lp) {
+           for (let Yp = 0, Dp = 0; Yp < xp.children.length && Dp <= Lp; Yp++) {
+             let Ap = xp.children[Yp],
+               Pp = Dp + Ap.length;
+             Pp >= Lp && (Ap.isComposite() ? pp(Ap, Lp - Dp) : (!Ip || Ip.isHidden && (ip > 0 || cp && ec(Ip, Ap))) && (Pp > Lp || 32 & Ap.flags) ? (Ip = Ap, Sp = Lp - Dp) : (Dp < Lp || 16 & Ap.flags && !Ap.isHidden) && (Op = Ap, op = Lp - Dp)), Dp = Pp
+           }
+         }(this, pp);
+         let xp = (ip < 0 ? Op : Ip) || Op || Ip;
+ ... (28 more added lines; see GitHub link above)
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8477` → after: `L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7485) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8477)

```diff
-         return !1
+         return new Di(this.dom, 0)
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8480-L8481` → after: `L7489-L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7489-L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7489-L7496) · [Before (L8480-L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8480-L8481)

```diff
-       function Uf(CC, zC) {
-         return Lf(CC, zC >= 2 ? af : sf)
+     function ec(pp, ip) {
+       let cp = pp.coordsIn(0, 1),
+         Op = ip.coordsIn(0, 1);
+       return cp && Op && Op.top < cp.bottom
+     }
+     class uc extends wc {
+       constructor(pp, ip) {
+         super(pp), this.mark = ip
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8483-L8488` → after: `L7498-L7499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7498-L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7498-L7499) · [Before (L8483-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8483-L8488)

```diff
- 
-       function Bf(CC) {
-         const zC = [];
-         return CC.forEach(((CC, ZC) => {
-           zC[CC] = ZC
-         })), zC
+       get domAttrs() {
+         return this.mark.attrs
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8490-L8493` → after: `L7501-L7503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7501-L7503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7501-L7503) · [Before (L8490-L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8490-L8493)

```diff
-       var Of = Bf(Xf);
- 
-       function kf(CC) {
-         return Of[CC]
+       static of (pp, ip) {
+         let cp = new uc(ip || document.createElement(pp.tagName), pp);
+         return ip || (cp.flags |= 4), cp
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8495-L8497` → after: `L7505-L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7505-L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7505-L7508) · [Before (L8495-L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8495-L8497)

```diff
- 
-       function Vf(CC) {
-         return Xf.get(CC)
+     }
+     class jc extends Uc {
+       constructor(pp, ip) {
+         super(pp, ip.length), this.text = ip
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8499-L8502` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7510-L7511) · [Before (L8499-L8502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8499-L8502)

```diff
-       var Co = Bf(uf);
- 
-       function zo(CC) {
-         return Co[CC]
+       sync(pp) {
+         2 & this.flags || (super.sync(pp), this.dom.nodeValue != this.text && (pp && pp.node == this.dom && (pp.written = !0), this.dom.nodeValue = this.text))
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8504-L8506` → after: `L7513-L7514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7513-L7514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7513-L7514) · [Before (L8504-L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8504-L8506)

```diff
- 
-       function Zo(CC) {
-         return uf.get(CC)
+       isText() {
+         return !0
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8508-L8511` → after: `L7516-L7523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7516-L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7516-L7523) · [Before (L8508-L8511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8508-L8511)

```diff
- 
-       function Qo(CC) {
-         const zC = [];
-         let ZC = 0,
+       toString() {
+         return JSON.stringify(this.text)
+       }
+       coordsIn(pp, ip) {
+         let cp = this.dom.nodeValue.length;
+         pp > cp && (pp = cp);
+         let Op = pp,
+           op = pp,
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8513-L8525` → after: `L7525-L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7525-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7525-L7541) · [Before (L8513-L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8513-L8525)

```diff
-         for (; ZC < CC.length;) {
-           const wC = CC.charCodeAt(ZC);
-           switch (ZC++, wC) {
-             case 13:
-               10 === CC.charCodeAt(ZC) && ZC++;
-             case 10:
-               zC.push(QC), QC = ZC;
-               break;
-             default:
-               wC > 127 && Mo(wC) && (zC.push(QC), QC = ZC)
-           }
-         }
-         return zC.push(QC), zC
+         0 == pp && ip < 0 || pp == cp && ip >= 0 ? kp.chrome || kp.gecko || (pp ? (Op--, Ip = 1) : op < cp && (op++, Ip = -1)) : ip < 0 ? Op-- : op < cp && op++;
+         let Sp = Ii(this.dom, Op, op).getClientRects();
+         if (!Sp.length) return null;
+         let xp = Sp[(Ip ? Ip < 0 : ip >= 0) ? 0 : Sp.length - 1];
+         return kp.safari && !Ip && 0 == xp.width && (xp = Array.prototype.find.call(Sp, (pp => pp.width)) || xp), Ip ? zp(xp, Ip < 0) : xp || null
+       }
+       static of (pp, ip) {
+         let cp = new jc(ip || document.createTextNode(pp), pp);
+         return ip || (cp.flags |= 2), cp
+       }
+     }
+     class kc extends Uc {
+       constructor(pp, ip, cp, Op) {
+         super(pp, ip, Op), this.widget = cp
+       }
+       isWidget() {
+ ... (1 more added lines; see GitHub link above)
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8527-L8529` → after: `L7543-L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7543-L7544) · [Before (L8527-L8529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8527-L8529)

```diff
- 
-       function wo(CC, zC, ZC, QC) {
-         return CC.getPositionOfLineAndCharacter ? CC.getPositionOfLineAndCharacter(zC, ZC, QC) : bo(no(CC), zC, ZC, CC.text, QC)
+       get isHidden() {
+         return this.widget.isHidden
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8531-L8535` → after: `L7546-L7547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7546-L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7546-L7547) · [Before (L8531-L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8531-L8535)

```diff
- 
-       function bo(CC, zC, ZC, QC, wC) {
-         (zC < 0 || zC >= CC.length) && (wC ? zC = zC < 0 ? 0 : zC >= CC.length ? CC.length - 1 : zC : PQ.fail(`Bad line number. Line: ${zC}, lineStarts.length: ${CC.length} , line map is correct? ${void 0!==QC?wz(CC,Qo(QC)):"unknown"}`));
-         const bC = CC[zC] + ZC;
-         return wC ? bC > CC[zC + 1] ? CC[zC + 1] : "string" === typeof QC && bC > QC.length ? QC.length : bC : (zC < CC.length - 1 ? PQ.assert(bC < CC[zC + 1]) : void 0 !== QC && PQ.assert(bC <= QC.length), bC)
+       covers(pp) {
+         return !(48 & this.flags) && (this.flags & (pp < 0 ? 64 : 128)) > 0
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8537-L8539` → after: `L7549-L7550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7549-L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7549-L7550) · [Before (L8537-L8539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8537-L8539)

```diff
- 
-       function no(CC) {
-         return CC.lineMap || (CC.lineMap = Qo(CC.text))
+       coordsIn(pp, ip) {
+         return this.coordsInWidget(pp, ip, !1)
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8541-L8546` → after: `L7552-L7562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7552-L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7552-L7562) · [Before (L8541-L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8541-L8546)

```diff
- 
-       function fo(CC, zC) {
-         const ZC = oo(CC, zC);
-         return {
-           line: ZC,
-           character: zC - CC[ZC]
+       coordsInWidget(pp, ip, cp) {
+         let Op = this.widget.coordsAt(this.dom, pp, ip);
+         if (Op) return Op;
+         if (cp) return zp(this.dom.getBoundingClientRect(), this.length ? 0 == pp : ip <= 0);
+         {
+           let ip = this.dom.getClientRects(),
+             cp = null;
+           if (!ip.length) return null;
+           let Op = !!(16 & this.flags) || !(32 & this.flags) && pp > 0;
+           for (let op = Op ? ip.length - 1 : 0; cp = ip[op], !(pp > 0 ? 0 == op : op == ip.length - 1 || cp.top < cp.bottom); op += Op ? -1 : 1);
+           return zp(cp, !Op)
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8549-L8552` → after: `L7565-L7572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7565-L7572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7565-L7572) · [Before (L8549-L8552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8549-L8552)

```diff
- 
-       function oo(CC, zC, ZC) {
-         let QC = hz(CC, zC, NZ, iZ, ZC);
-         return QC < 0 && (QC = ~QC - 1, PQ.assert(-1 !== QC, "position cannot precede the beginning of the file")), QC
+       get overrideDOMText() {
+         if (!this.length) return Op.F.empty;
+         let {
+           root: pp
+         } = this;
+         if (!pp) return Op.F.empty;
+         let ip = this.posAtStart;
+         return pp.view.state.doc.slice(ip, ip + this.length)
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8554-L8563` → after: `L7574-L7575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7574-L7575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7574-L7575) · [Before (L8554-L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8554-L8563)

```diff
- 
-       function qo(CC, zC, ZC) {
-         if (zC === ZC) return 0;
-         const QC = no(CC),
-           wC = Math.min(zC, ZC),
-           bC = wC === ZC,
-           nC = bC ? zC : ZC,
-           fC = oo(QC, wC),
-           oC = oo(QC, nC, fC);
-         return bC ? fC - oC : oC - fC
+       destroy() {
+         super.destroy(), this.widget.destroy(this.dom)
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8565-L8567` → after: `L7577-L7578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7577-L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7577-L7578) · [Before (L8565-L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8565-L8567)

```diff
- 
-       function Fo(CC, zC) {
-         return fo(no(CC), zC)
+       static of (pp, ip, cp, Op, op) {
+         return op || (op = pp.toDOM(ip), pp.editable || (op.contentEditable = "false")), new kc(op, cp, pp, Op)
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8569-L8571` → after: `L7580-L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7580-L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7580-L7584) · [Before (L8569-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8569-L8571)

```diff
- 
-       function Wo(CC) {
-         return No(CC) || Mo(CC)
+     }
+     class mc extends Uc {
+       constructor(pp) {
+         let ip = document.createElement("img");
+         ip.className = "cm-widgetBuffer", ip.setAttribute("aria-hidden", "true"), super(ip, 0, pp)
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8573-L8575` → after: `L7586-L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7586-L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7586-L7587) · [Before (L8573-L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8573-L8575)

```diff
- 
-       function No(CC) {
-         return 32 === CC || 9 === CC || 11 === CC || 12 === CC || 160 === CC || 133 === CC || 5760 === CC || CC >= 8192 && CC <= 8203 || 8239 === CC || 8287 === CC || 12288 === CC || 65279 === CC
+       get isHidden() {
+         return !0
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8577-L8579` → after: `L7589-L7590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7589-L7590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7589-L7590) · [Before (L8577-L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8577-L8579)

```diff
- 
-       function Mo(CC) {
-         return 10 === CC || 13 === CC || 8232 === CC || 8233 === CC
+       get overrideDOMText() {
+         return Op.F.empty
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8581-L8583` → after: `L7592-L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7592-L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7592-L7593) · [Before (L8581-L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8581-L8583)

```diff
- 
-       function go(CC) {
-         return CC >= 48 && CC <= 57
+       coordsIn(pp) {
+         return this.dom.getBoundingClientRect()
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8585-L8587` → after: `L7595-L7598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7595-L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7595-L7598) · [Before (L8585-L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8585-L8587)

```diff
- 
-       function So(CC) {
-         return go(CC) || CC >= 65 && CC <= 70 || CC >= 97 && CC <= 102
+     }
+     class Rc {
+       constructor(pp) {
+         this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = pp
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8589-L8591` → after: `L7600-L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7600-L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7600-L7636) · [Before (L8589-L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8589-L8591)

```diff
- 
-       function po(CC) {
-         return CC >= 65 && CC <= 90 || CC >= 97 && CC <= 122
+       advance(pp, ip, cp) {
+         let {
+           tile: Op,
+           index: op,
+           beforeBreak: Ip,
+           parents: Sp
+         } = this;
+         for (; pp || ip > 0;)
+           if (Op.isComposite())
+             if (Ip) {
+               if (!pp) break;
+               cp && cp.break(), pp--, Ip = !1
+             } else if (op == Op.children.length) {
+           if (!pp && !Sp.length) break;
+           cp && cp.leave(Op), Ip = !!Op.breakAfter, ({
+             tile: Op,
+ ... (21 more added lines; see GitHub link above)
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8593-L8595` → after: `L7638-L7639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7638-L7639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7638-L7639) · [Before (L8593-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8593-L8595)

```diff
- 
-       function Po(CC) {
-         return po(CC) || go(CC) || 95 === CC
+       get root() {
+         return this.parents.length ? this.parents[0].tile : this.tile
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8597-L8599` → after: `L7641-L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7641-L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7641-L7644) · [Before (L8597-L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8597-L8599)

```diff
- 
-       function Go(CC) {
-         return CC >= 48 && CC <= 55
+     }
+     class qc {
+       constructor(pp, ip, cp, Op) {
+         this.from = pp, this.to = ip, this.wrapper = cp, this.rank = Op
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8601-L8621` → after: `L7646-L7649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7646-L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7646-L7649) · [Before (L8601-L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8601-L8621)

```diff
- 
-       function Ro(CC, zC) {
-         const ZC = CC.charCodeAt(zC);
-         switch (ZC) {
-           case 13:
-           case 10:
-           case 9:
-           case 11:
-           case 12:
-           case 32:
-           case 47:
-           case 60:
-           case 124:
-           case 61:
-           case 62:
-             return !0;
- ... (5 more removed lines; see GitHub link above)
+     }
+     class Mc {
+       constructor(pp, ip, cp) {
+         this.cache = pp, this.root = ip, this.blockWrappers = cp, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8623-L8686` → after: `L7651-L7675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7651-L7675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7651-L7675) · [Before (L8623-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8623-L8686)

```diff
- 
-       function Ao(CC, zC, ZC, QC, wC) {
-         if (ne(zC)) return zC;
-         let bC = !1;
-         for (;;) {
-           const nC = CC.charCodeAt(zC);
-           switch (nC) {
-             case 13:
-               10 === CC.charCodeAt(zC + 1) && zC++;
-             case 10:
-               if (zC++, ZC) return zC;
-               bC = !!wC;
-               continue;
-             case 9:
-             case 11:
-             case 12:
- ... (48 more removed lines; see GitHub link above)
+       addText(pp, ip, cp, Op) {
+         var op;
+         this.flushBuffer();
+         let Ip = this.ensureMarks(ip, cp),
+           Sp = Ip.lastChild;
+         if (Sp && Sp.isText() && !(8 & Sp.flags) && Sp.length + pp.length < 512) {
+           this.cache.reused.set(Sp, 2), (Ip.children[Ip.children.length - 1] = new jc(Sp.dom, Sp.text + pp)).parent = Ip
+         } else Ip.append(Op || jc.of(pp, null === (op = this.cache.find(jc)) || void 0 === op ? void 0 : op.dom));
+         this.pos += pp.length, this.afterWidget = null
+       }
+       addComposition(pp, ip) {
+         let cp = this.curLine;
+         cp.dom != ip.line.dom && (cp.setDOM(this.cache.reused.has(ip.line) ? Bc(ip.line.dom) : ip.line.dom), this.cache.reused.set(ip.line, 2));
+         let Op = cp;
+         for (let Sp = ip.marks.length - 1; Sp >= 0; Sp--) {
+           let pp = ip.marks[Sp],
+ ... (9 more added lines; see GitHub link above)
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8688` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7677) · [Before (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8688)

```diff
-           return zC
+           this.cache.reused.set(pp, 2)
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8691-L8702` → after: `L7684-L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7684-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7684-L7688) · [Before (L8691-L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8691-L8702)

```diff
-       var xo = 7;
- 
-       function Jo(CC, zC) {
-         if (PQ.assert(zC >= 0), 0 === zC || Mo(CC.charCodeAt(zC - 1))) {
-           const ZC = CC.charCodeAt(zC);
-           if (zC + xo < CC.length) {
-             for (let QC = 0; QC < xo; QC++)
-               if (CC.charCodeAt(zC + QC) !== ZC) return !1;
-             return 61 === ZC || 32 === CC.charCodeAt(zC + xo)
-           }
-         }
-         return !1
+       addInlineWidget(pp, ip, cp) {
+         let Op = this.afterWidget && 48 & pp.flags && (48 & this.afterWidget.flags) == (48 & pp.flags);
+         Op || this.flushBuffer();
+         let op = this.ensureMarks(ip, cp);
+         Op || 16 & pp.flags || op.append(this.getBuffer(1)), op.append(pp), this.pos += pp.length, this.afterWidget = pp
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8704-L8717` → after: `L7690-L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7690-L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7690-L7691) · [Before (L8704-L8717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8704-L8717)

```diff
- 
-       function Io(CC, zC, ZC) {
-         ZC && ZC(df.Merge_conflict_marker_encountered, zC, xo);
-         const QC = CC.charCodeAt(zC),
-           wC = CC.length;
-         if (60 === QC || 62 === QC)
-           for (; zC < wC && !Mo(CC.charCodeAt(zC));) zC++;
-         else
-           for (PQ.assert(124 === QC || 61 === QC); zC < wC;) {
-             const ZC = CC.charCodeAt(zC);
-             if ((61 === ZC || 62 === ZC) && ZC !== QC && Jo(CC, zC)) break;
-             zC++
-           }
-         return zC
+       addMark(pp, ip, cp) {
+         this.flushBuffer(), this.ensureMarks(ip, cp).append(pp), this.pos += pp.length, this.afterWidget = null
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8719-L8722` → after: `L7693-L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7693-L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7693-L7694) · [Before (L8719-L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8719-L8722)

```diff
-       var io = /^#!.*/;
- 
-       function vo(CC, zC) {
-         return PQ.assert(0 === zC), io.test(CC)
+       addBlockWidget(pp) {
+         this.getBlockPos().append(pp), this.pos += pp.length, this.lastBlock = pp, this.endLine()
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8724-L8726` → after: `L7696-L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7696-L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7696-L7697) · [Before (L8724-L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8724-L8726)

```diff
- 
-       function eo(CC, zC) {
-         return zC += io.exec(CC)[0].length
+       continueWidget(pp) {
+         (this.afterWidget || this.lastBlock).length += pp, this.pos += pp
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8728-L8736` → after: `L7699-L7726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7699-L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7699-L7726) · [Before (L8728-L8736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8728-L8736)

```diff
- 
-       function ho(CC, zC, ZC, QC, wC, bC, nC) {
-         let fC, oC, qC, FC, WC = !1,
-           NC = QC,
-           MC = nC;
-         if (0 === ZC) {
-           NC = !0;
-           const CC = uo(zC);
-           CC && (ZC = CC.length)
+       addLineStart(pp, ip) {
+         var cp;
+         pp || (pp = Jc);
+         let Op = dc.start(pp, ip || (null === (cp = this.cache.find(dc)) || void 0 === cp ? void 0 : cp.dom), !!ip);
+         this.getBlockPos().append(this.lastBlock = this.curLine = Op)
+       }
+       addLine(pp) {
+         this.getBlockPos().append(pp), this.pos += pp.length, this.lastBlock = pp, this.endLine()
+       }
+       addBreak() {
+         this.lastBlock.flags |= 1, this.endLine(), this.pos++
+       }
+       addLineStartIfNotCovered(pp) {
+         this.blockPosCovered() || this.addLineStart(pp)
+       }
+       ensureLine(pp) {
+ ... (12 more added lines; see GitHub link above)
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8738-L8786` → after: `L7728-L7757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7728-L7757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7728-L7757) · [Before (L8738-L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8738-L8786)

```diff
-         CC: for (; ZC >= 0 && ZC < zC.length;) {
-           const nC = zC.charCodeAt(ZC);
-           switch (nC) {
-             case 13:
-               10 === zC.charCodeAt(ZC + 1) && ZC++;
-             case 10:
-               if (ZC++, QC) break CC;
-               NC = !0, WC && (FC = !0);
-               continue;
-             case 9:
-             case 11:
-             case 12:
-             case 32:
-               ZC++;
-               continue;
-             case 47:
- ... (33 more removed lines; see GitHub link above)
+         return Op
+       }
+       endLine() {
+         if (this.curLine) {
+           this.flushBuffer();
+           let pp = this.curLine.lastChild;
+           pp && Qc(this.curLine, !1) && ("BR" == pp.dom.nodeName || !pp.isWidget() || kp.ios && Qc(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(Tc, 0, 32) || new kc(Tc.toDOM(), 0, Tc, 32)), this.curLine = this.afterWidget = null
+         }
+       }
+       updateBlockWrappers() {
+         this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
+         for (let pp = this.wrappers.length - 1; pp >= 0; pp--) this.wrappers[pp].to < this.pos && this.wrappers.splice(pp, 1);
+         for (let pp = this.blockWrappers; pp.value && pp.from <= this.pos; pp.next())
+           if (pp.to >= this.pos) {
+             let ip = new qc(pp.from, pp.to, pp.value, pp.rank),
+               cp = this.wrappers.length;
+ ... (14 more added lines; see GitHub link above)
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8789` → after: `L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7760) · [Before (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8789)

```diff
-         return WC && (MC = wC(fC, oC, qC, FC, bC, MC)), MC
+         return ip
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8791-L8793` → after: `L7762-L7764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7762-L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7762-L7764) · [Before (L8791-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8791-L8793)

```diff
- 
-       function Ko(CC, zC, ZC, QC) {
-         return ho(!1, CC, zC, !1, ZC, QC)
+       blockPosCovered() {
+         let pp = this.lastBlock;
+         return null != pp && !pp.breakAfter && (!pp.isWidget() || (160 & pp.flags) > 0)
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8795-L8797` → after: `L7766-L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7766-L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7766-L7769) · [Before (L8795-L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8795-L8797)

```diff
- 
-       function Yo(CC, zC, ZC, QC) {
-         return ho(!1, CC, zC, !0, ZC, QC)
+       getBuffer(pp) {
+         let ip = 2 | (pp < 0 ? 16 : 32),
+           cp = this.cache.find(mc, void 0, 1);
+         return cp && (cp.flags = ip), cp || new mc(ip)
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8799-L8801` → after: `L7771-L7772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7771-L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7771-L7772) · [Before (L8799-L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8799-L8801)

```diff
- 
-       function mo(CC, zC, ZC, QC, wC) {
-         return ho(!0, CC, zC, !1, ZC, QC, wC)
+       flushBuffer() {
+         !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8803-L8805` → after: `L7774-L7777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7774-L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7774-L7777) · [Before (L8803-L8805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8803-L8805)

```diff
- 
-       function Ho(CC, zC, ZC, QC, wC) {
-         return ho(!0, CC, zC, !0, ZC, QC, wC)
+     }
+     class Cc {
+       constructor(pp) {
+         this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = pp.iter()
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8807-L8815` → after: `L7779-L7780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7779-L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7779-L7780) · [Before (L8807-L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8807-L8815)

```diff
- 
-       function Eo(CC, zC, ZC, QC, wC) {
-         let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [];
-         return bC.push({
-           kind: ZC,
-           pos: CC,
-           end: zC,
-           hasTrailingNewLine: QC
-         }), bC
+       skip(pp) {
+         this.textOff + pp <= this.text.length ? this.textOff += pp : (this.skipCount += pp - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8817-L8819` → after: `L7782-L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7782-L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7782-L7820) · [Before (L8817-L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8817-L8819)

```diff
- 
-       function Xo(CC, zC) {
-         return mo(CC, zC, Eo, void 0, void 0)
+       next(pp) {
+         if (this.textOff == this.text.length) {
+           let {
+             value: ip,
+             lineBreak: cp,
+             done: Op
+           } = this.cursor.next(this.skipCount);
+           if (this.skipCount = 0, Op) throw new Error("Ran out of text content when drawing inline views");
+           this.text = ip;
+           let op = this.textOff = Math.min(pp, ip.length);
+           return cp ? null : ip.slice(0, op)
+         }
+         let ip = Math.min(this.text.length, this.textOff + pp),
+           cp = this.text.slice(this.textOff, ip);
+         return this.textOff = ip, cp
+       }
+ ... (23 more added lines; see GitHub link above)
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8821-L8823` → after: `L7822-L7832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7822-L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7822-L7832) · [Before (L8821-L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8821-L8823)

```diff
- 
-       function co(CC, zC) {
-         return Ho(CC, zC, Eo, void 0, void 0)
+       findWidget(pp, ip, cp) {
+         let Op = this.buckets[0];
+         if (Op.length)
+           for (let op = 0, Ip = 0;; op++) {
+             if (op == Op.length) {
+               if (Ip) return null;
+               Ip = 1, op = 0
+             }
+             let Sp = Op[op];
+             if (!this.reused.has(Sp) && (0 == Ip ? Sp.widget.compare(pp) : Sp.widget.constructor == pp.constructor && pp.updateDOM(Sp.dom, this.view, Sp.widget))) return Op.splice(op, 1), op < this.index[0] && this.index[0]--, Sp.widget == pp && Sp.length == ip && (497 & Sp.flags … [truncated]
+           }
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8825-L8828` → after: `L7834-L7835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7834-L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7834-L7835) · [Before (L8825-L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8825-L8828)

```diff
- 
-       function uo(CC) {
-         const zC = io.exec(CC);
-         if (zC) return zC[0]
+       reuse(pp) {
+         return this.reused.set(pp, 1), pp
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8830-L8832` → after: `L7837-L7839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7837-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7837-L7839) · [Before (L8830-L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8830-L8832)

```diff
- 
-       function ro(CC, zC) {
-         return po(CC) || 36 === CC || 95 === CC || CC > 127 && Uf(CC, zC)
+       maybeReuse(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
+         if (!this.reused.has(pp)) return this.reused.set(pp, ip), pp.dom
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8834-L8838` → after: `L7841-L7842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7841-L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7841-L7842) · [Before (L8834-L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8834-L8838)

```diff
- 
-       function so(CC, zC, ZC) {
-         return Po(CC) || 36 === CC || 1 === ZC && (45 === CC || 58 === CC) || CC > 127 && function(CC, zC) {
-           return Lf(CC, zC >= 2 ? tf : Tf)
-         }(CC, zC)
+       clear() {
+         for (let pp = 0; pp < this.buckets.length; pp++) this.buckets[pp].length = this.index[pp] = 0
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8840-L8846` → after: `L7844-L7854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7844-L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7844-L7854) · [Before (L8840-L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8840-L8846)

```diff
- 
-       function To(CC, zC, ZC) {
-         let QC = to(CC, 0);
-         if (!ro(QC, zC)) return !1;
-         for (let wC = Do(QC); wC < CC.length; wC += Do(QC))
-           if (!so(QC = to(CC, wC), zC, ZC)) return !1;
-         return !0
+     }
+     class lc {
+       constructor(pp, ip, cp, op, Ip) {
+         this.view = pp, this.uO = op, this.disallowBlockEffectsFor = Ip, this.openWidget = !1, this.openMarks = 0, this.cache = new Xc(pp), this.text = new Cc(pp.state.doc), this.builder = new Mc(this.cache, new tc(pp, pp.contentDOM), Op.A.iter(cp)), this.cache.reused.set(ip, 2), … [truncated]
+           skip: (pp, ip, cp) => {
+             if (this.cache.add(pp), pp.isComposite()) return !1
+           },
+           enter: pp => this.cache.add(pp),
+           leave: () => {},
+           break: () => {}
+         }
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8848-L8882` → after: `L7856-L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7856-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7856-L7875) · [Before (L8848-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8848-L8882)

```diff
- 
-       function ao(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           QC = arguments.length > 4 ? arguments[4] : void 0,
-           wC = arguments.length > 5 ? arguments[5] : void 0;
-         var bC, nC, fC, oC, qC, FC, WC, MC, gC = arguments.length > 3 ? arguments[3] : void 0,
-           SC = 0,
-           pC = 0,
-           PC = 0;
-         kC(gC, wC, arguments.length > 6 ? arguments[6] : void 0);
-         var GC = {
-           getTokenFullStart: () => fC,
-           getStartPos: () => fC,
-           getTokenEnd: () => bC,
-           getTextPos: () => bC,
-           getToken: () => qC,
- ... (19 more removed lines; see GitHub link above)
+       run(pp, ip) {
+         let cp = ip && this.getCompositionContext(ip.text);
+         for (let Op = 0, op = 0, Ip = 0;;) {
+           let Sp = Ip < pp.length ? pp[Ip++] : null,
+             xp = Sp ? Sp.fromA : this.old.root.length;
+           if (xp > Op) {
+             let pp = xp - Op;
+             this.preserve(pp, !Ip, !Sp), Op = xp, op += pp
+           }
+           if (!Sp) break;
+           ip && Sp.fromA <= ip.range.fromA && Sp.toA >= ip.range.toA ? (this.forward(Sp.fromA, ip.range.fromA, ip.range.fromA < ip.range.toA ? 1 : -1), this.emit(op, ip.range.fromB), this.cache.clear(), this.builder.addComposition(ip, cp), this.text.skip(ip.range.toB - ip.range.f … [truncated]
+         }
+         return this.builder.curLine && this.builder.endLine(), this.builder.root
+       }
+       preserve(pp, ip, cp) {
+         let Op = function(pp) {
+ ... (4 more added lines; see GitHub link above)
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8886-L8887` → after: `L7897-L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7897-L7898) · [Before (L8886-L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8886-L8887)

```diff
-           reScanAsteriskEqualsToken: function() {
-             return PQ.assert(67 === qC, "'reScanAsteriskEqualsToken' should only be called on a '*='"), bC = oC + 1, qC = 64
+           enter: pp => {
+             pp.isLine() ? this.builder.addLineStart(pp.attrs, this.cache.maybeReuse(pp)) : (this.cache.add(pp), pp instanceof uc && Op.unshift(pp.mark)), this.openWidget = !1
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8889-L8902` → after: `L7900-L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7900-L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7900-L7919) · [Before (L8889-L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8889-L8902)

```diff
-           reScanSlashToken: function(zC) {
-             if (44 === qC || 69 === qC) {
-               const ZC = oC + 1;
-               bC = ZC;
-               let QC = !1,
-                 fC = !1,
-                 MC = !1;
-               for (;;) {
-                 const CC = JC(bC);
-                 if (-1 === CC || Mo(CC)) {
-                   WC |= 4;
-                   break
-                 }
-                 if (QC) QC = !1;
+           leave: pp => {
+             pp.isLine() ? Op.length && (Op.length = op = 0) : pp instanceof uc && (Op.shift(), op = Math.min(op, Op.length))
+           },
+           break: () => {
+             this.builder.addBreak(), this.openWidget = !1
+           }
+         }), this.text.skip(pp)
+       }
+       emit(pp, ip) {
+         let cp = null,
+           op = this.builder,
+           Ip = 0,
+           Sp = Op.A.spans(this.uO, pp, ip, {
+             point: (pp, ip, Op, Sp, xp, Lp) => {
+               if (Op instanceof Bp) {
+                 if (this.disallowBlockEffectsFor[Lp]) {
+ ... (4 more added lines; see GitHub link above)
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8904-L8907` → after: `L7921-L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7921-L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7921-L7947) · [Before (L8904-L8907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L8904-L8907)

```diff
-                   if (47 === CC && !MC) break;
-                   91 === CC ? MC = !0 : 92 === CC ? QC = !0 : 93 === CC ? MC = !1 : MC || 40 !== CC || 63 !== JC(bC + 1) || 60 !== JC(bC + 2) || 61 === JC(bC + 3) || 33 === JC(bC + 3) || (fC = !0)
-                 }
-                 bC++
+                   let Ip = Op.widget || (Op.block ? Nc.block : Nc.inline),
+                     Lp = function(pp) {
+                       let ip = pp.isReplace ? (pp.startSide < 0 ? 64 : 0) | (pp.endSide > 0 ? 128 : 0) : pp.startSide > 0 ? 32 : 16;
+                       pp.block && (ip |= 256);
+                       return ip
+                     }(Op),
+                     Yp = this.cache.findWidget(Ip, ip - pp, Lp) || kc.of(Ip, this.view, ip - pp, Lp);
+                   Op.block ? (Op.startSide > 0 && op.addLineStartIfNotCovered(cp), op.addBlockWidget(Yp)) : (op.ensureLine(cp), op.addInlineWidget(Yp, Sp, xp))
+                 }
+                 cp = null
+               } else cp = function(pp, ip) {
+                 let cp = ip.spec.attributes,
+                   Op = ip.spec.class;
+                 if (!cp && !Op) return pp;
+                 pp || (pp = {
+                   class: "cm-line"
+ ... (11 more added lines; see GitHub link above)
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9456-L9571` → after: `L7950-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7950-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7950-L7966) · [Before (L9456-L9571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9456-L9571)

```diff
-             return qC
-           },
-           reScanTemplateToken: function(CC) {
-             return bC = oC, qC = mC(!CC)
-           },
-           reScanTemplateHeadOrNoSubstitutionTemplate: function() {
-             return bC = oC, qC = mC(!0)
-           },
-           scanJsxIdentifier: function() {
-             if (mf(qC)) {
-               for (; bC < nC;) {
-                 if (45 === xC(bC)) {
-                   FC += "-", bC++;
-                   continue
-                 }
-                 const CC = bC;
- ... (100 more removed lines; see GitHub link above)
+           });
+         op.addLineStartIfNotCovered(cp), this.openWidget = Sp > Ip, this.openMarks = Sp
+       }
+       forward(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+         ip - pp <= 10 ? this.old.advance(ip - pp, cp, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(ip - pp - 10, -1), this.old.advance(5, cp, this.reuseWalker))
+       }
+       getCompositionContext(pp) {
+         let ip = [],
+           cp = null;
+         for (let Op = pp.parentNode;; Op = Op.parentNode) {
+           let pp = Uc.get(Op);
+           if (Op == this.view.contentDOM) break;
+           pp instanceof uc ? ip.push(pp) : (null === pp || void 0 === pp ? void 0 : pp.isLine()) ? cp = pp : pp instanceof Hc || ("DIV" != Op.nodeName || cp || Op == this.view.contentDOM ? cp || ip.push(uc.of(new Qp({
+             tagName: Op.nodeName.toLowerCase(),
+             attributes: Cp(Op)
+ ... (1 more added lines; see GitHub link above)
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9573-L9578` → after: `L7968-L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7968-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7968-L7970) · [Before (L9573-L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9573-L9578)

```diff
- 
-         function IC(CC) {
-           if (QC) {
-             const zC = bC;
-             bC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bC, QC(CC, (arguments.length > 2 ? arguments[2] : void 0) || 0, arguments.length > 3 ? arguments[3] : void 0), bC = zC
-           }
+         return {
+           line: cp,
+           marks: ip
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9581-L9591` → after: `L7975-L8055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR7975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L7975-L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L7975-L8055) · [Before (L9581-L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9581-L9591)

```diff
-         function iC() {
-           let CC = bC,
-             zC = !1,
-             ZC = !1,
-             QC = "";
-           for (;;) {
-             const wC = xC(bC);
-             if (95 !== wC) {
-               if (!go(wC)) break;
-               zC = !0, ZC = !1, bC++
-             } else WC |= 512, zC ? (zC = !1, ZC = !0, QC += gC.substring(CC, bC)) : (WC |= 16384, IC(ZC ? df.Multiple_consecutive_numeric_separators_are_not_permitted : df.Numeric_separators_are_not_allowed_here, bC, 1)), CC = ++bC
+     function Qc(pp, ip) {
+       let cp = pp => {
+         for (let Op of pp.children)
+           if ((ip ? Op.isText() : Op.length) || cp(Op)) return !0;
+         return !1
+       };
+       return cp(pp)
+     }
+     const Jc = {
+       class: "cm-line"
+     };
+ 
+     function Bc(pp) {
+       let ip = Uc.get(pp);
+       return ip && ip.setDOM(pp.cloneNode()), pp
+     }
+ ... (65 more added lines; see GitHub link above)
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9593` → after: `L8057-L8123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8057-L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8057-L8123) · [Before (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9593)

```diff
-           return 95 === xC(bC - 1) && (WC |= 16384, IC(df.Numeric_separators_are_not_allowed_here, bC - 1, 1)), QC + gC.substring(CC, bC)
+         }(this.view, pp.changes, op) : null;
+         if (this.domChanged = null, this.hasComposition) {
+           let {
+             from: ip,
+             to: Op
+           } = this.hasComposition;
+           cp = new Pc(ip, Op, pp.changes.mapPos(ip, -1), pp.changes.mapPos(Op, 1)).addToSet(cp.slice())
+         }
+         this.hasComposition = Ip ? {
+           from: Ip.range.fromB,
+           to: Ip.range.toB
+         } : null, (kp.ie || kp.chrome) && !Ip && pp && pp.state.doc.lines != pp.startState.doc.lines && (this.forceSelection = !0);
+         let Sp = this.uO,
+           xp = this.blockWrappers;
+         this.updateDeco();
+         let Lp = function(pp, ip, cp) {
+ ... (51 more added lines; see GitHub link above)
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9595-L9605` → after: `L8125-L8196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8125-L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8125-L8196) · [Before (L9595-L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9595-L9605)

```diff
- 
-         function vC() {
-           let CC, zC, ZC, QC = bC;
-           if (48 === xC(bC))
-             if (95 === xC(++bC)) WC |= 16896, IC(df.Numeric_separators_are_not_allowed_here, bC, 1), bC--, CC = iC();
-             else if (hC()) {
-             if (FC) {
-               FC = "" + parseInt(FC, 8), WC |= 32;
-               const CC = 41 === qC,
-                 zC = (CC ? "-" : "") + "0o" + (+FC).toString(8);
-               return CC && QC--, IC(df.Octal_literals_are_not_allowed_Use_the_syntax_0, QC, bC - QC, zC), 9
+         var Yp;
+         let Dp = this.view.observer.selectionRange;
+         !Ip && Dp.focusNode && (Fp(Sp.node, Sp.offset, Dp.anchorNode, Dp.anchorOffset) && Fp(xp.node, xp.offset, Dp.focusNode, Dp.focusOffset) || this.suppressWidgetCursorChange(Dp, Lp)) || (this.view.observer.ignore((() => {
+           kp.android && kp.chrome && ip.contains(Dp.focusNode) && function(pp, ip) {
+             for (let cp = pp; cp && cp != ip; cp = cp.assignedSlot || cp.parentNode)
+               if (1 == cp.nodeType && "false" == cp.contentEditable) return !0;
+             return !1
+           }(Dp.focusNode, ip) && (ip.blur(), ip.focus({
+             preventScroll: !0
+           }));
+           let pp = bp(this.view.root);
+           if (pp)
+             if (Lp.empty) {
+               if (kp.gecko) {
+                 let pp = (Op = Sp.node, Ip = Sp.offset, 1 != Op.nodeType ? 0 : (Ip && "false" == Op.childNodes[Ip - 1].contentEditable ? 1 : 0) | (Ip < Op.childNodes.length && "false" == Op.childNodes[Ip].contentEditable ? 2 : 0));
+                 if (pp && 3 != pp) {
+ ... (56 more added lines; see GitHub link above)
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9607-L9616` → after: `L8198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8198) · [Before (L9607-L9616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9607-L9616)

```diff
-             CC = "0"
-           } else WC |= 8192, CC = "" + +FC;
-           else CC = iC();
-           46 === xC(bC) && (bC++, zC = iC());
-           let wC, nC = bC;
-           if (69 === xC(bC) || 101 === xC(bC)) {
-             bC++, WC |= 16, 43 !== xC(bC) && 45 !== xC(bC) || bC++;
-             const CC = bC,
-               zC = iC();
-             zC ? (ZC = gC.substring(nC, CC) + zC, nC = bC) : IC(df.Digit_expected)
+             op = Op < 0 ? pp : pp.nextSibling
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9618-L9623` → after: `L8200-L8206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8200-L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8200-L8206) · [Before (L9618-L9623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9618-L9623)

```diff
-           if (512 & WC ? (wC = CC, zC && (wC += "." + zC), ZC && (wC += ZC)) : wC = gC.substring(QC, nC), 8192 & WC) return IC(df.Decimals_with_leading_zeros_are_not_allowed, QC, nC - QC), FC = "" + +wC, 9;
-           if (void 0 !== zC || 16 & WC) return eC(QC, void 0 === zC && !!(16 & WC)), FC = "" + +wC, 9;
-           {
-             FC = wC;
-             const CC = sC();
-             return eC(QC), CC
+           if (op == cp.dom.firstChild) return Op;
+           for (; op && !Uc.get(op);) op = op.nextSibling;
+           if (!op) return Op + cp.length;
+           for (let pp = 0, ip = Op;; pp++) {
+             let Op = cp.children[pp];
+             if (Op.dom == op) return ip;
+             ip += Op.length + Op.breakAfter
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9626-L9658` → after: `L8209-L8228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8209-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8209-L8228) · [Before (L9626-L9658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9626-L9658)

```diff
- 
-         function eC(zC, ZC) {
-           if (!ro(RC(bC), CC)) return;
-           const QC = bC,
-             {
-               length: wC
-             } = cC();
-           1 === wC && "n" === gC[QC] ? IC(ZC ? df.A_bigint_literal_cannot_use_exponential_notation : df.A_bigint_literal_must_be_an_integer, zC, QC - zC + 1) : (IC(df.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal, QC, wC), bC = QC)
-         }
- 
-         function hC() {
-           const CC = bC;
-           let zC = !0;
-           for (; go(JC(bC));) Go(xC(bC)) || (zC = !1), bC++;
-           return FC = gC.substring(CC, bC), zC
-         }
- ... (17 more removed lines; see GitHub link above)
+       }
+       domAtPos(pp, ip) {
+         let {
+           tile: cp,
+           offset: Op
+         } = this.tile.resolveBlock(pp, ip);
+         return cp.isWidget() ? cp.domPosFor(pp, ip) : cp.domIn(Op, ip)
+       }
+       inlineDOMNearPos(pp, ip) {
+         let cp, Op, op = -1,
+           Ip = !1,
+           Sp = -1,
+           xp = !1;
+         return this.tile.blockTiles(((ip, Lp) => {
+           if (ip.isWidget()) {
+             if (32 & ip.flags && Lp >= pp) return !0;
+ ... (4 more added lines; see GitHub link above)
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9660-L9681` → after: `L8230-L8256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8230-L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8230-L8256) · [Before (L9660-L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9660-L9681)

```diff
-           return QC.length < CC && (QC = []), 95 === xC(bC - 1) && IC(df.Numeric_separators_are_not_allowed_here, bC - 1, 1), String.fromCharCode(...QC)
-         }
- 
-         function dC() {
-           let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           const zC = xC(bC);
-           let ZC = "",
-             QC = ++bC;
-           for (;;) {
-             if (bC >= nC) {
-               ZC += gC.substring(QC, bC), WC |= 4, IC(df.Unterminated_string_literal);
-               break
-             }
-             const wC = xC(bC);
-             if (wC === zC) {
-               ZC += gC.substring(QC, bC), bC++;
- ... (6 more removed lines; see GitHub link above)
+         })), cp || Op ? (Ip && Op ? cp = null : xp && cp && (Op = null), cp && ip < 0 || !Op ? cp.domIn(op, ip) : Op.domIn(Sp, ip)) : this.domAtPos(pp, ip)
+       }
+       coordsAt(pp, ip) {
+         let {
+           tile: cp,
+           offset: Op
+         } = this.tile.resolveBlock(pp, ip);
+         return cp.isWidget() ? cp.widget instanceof Fc ? null : cp.coordsInWidget(Op, ip, !0) : cp.coordsIn(Op, ip)
+       }
+       lineAt(pp, ip) {
+         let {
+           tile: cp
+         } = this.tile.resolveBlock(pp, ip);
+         return cp.isLine() ? cp : null
+       }
+       coordsForChar(pp) {
+ ... (11 more added lines; see GitHub link above)
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9683-L9696` → after: `L8258-L8299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8258-L8299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8258-L8299) · [Before (L9683-L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9683-L9696)

```diff
-               bC++
-             } else ZC += gC.substring(QC, bC), ZC += HC(3), QC = bC
-           }
-           return ZC
-         }
- 
-         function mC(CC) {
-           const zC = 96 === xC(bC);
-           let ZC, QC = ++bC,
-             wC = "";
-           for (;;) {
-             if (bC >= nC) {
-               wC += gC.substring(QC, bC), WC |= 4, IC(df.Unterminated_template_literal), ZC = zC ? 15 : 18;
-               break
+               if ((cp -= Op.length) < 0) break
+             } else if (ip.isText() && cp < ip.length) {
+               let pp = (0, Op.S)(ip.text, cp);
+               if (pp == cp) return null;
+               let op = Ii(ip.dom, cp, pp).getClientRects();
+               for (let ip = 0; ip < op.length; ip++) {
+                 let pp = op[ip];
+                 if (ip == op.length - 1 || pp.top < pp.bottom && pp.left < pp.right) return pp
+               }
+             } return null
+         }(ip, cp)
+       }
+       measureVisibleLineHeights(pp) {
+         let ip = [],
+           {
+             from: cp,
+ ... (26 more added lines; see GitHub link above)
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9698-L9701` → after: `L8301-L8318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8301-L8318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8301-L8318) · [Before (L9698-L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9698-L9701)

```diff
-             const fC = xC(bC);
-             if (96 === fC) {
-               wC += gC.substring(QC, bC), bC++, ZC = zC ? 15 : 18;
-               break
+           };
+         return Yp(this.tile, 0, null), ip
+       }
+       textDirectionAt(pp) {
+         let {
+           tile: ip
+         } = this.tile.resolveBlock(pp, 1);
+         return "rtl" == getComputedStyle(ip.dom).direction ? Ai.RTL : Ai.LTR
+       }
+       measureTextSize() {
+         let pp = this.tile.blockTiles((pp => {
+           if (pp.isLine() && pp.children.length && pp.length <= 20) {
+             let ip, cp = 0;
+             for (let Op of pp.children) {
+               if (!Op.isText() || /[^ -~]/.test(Op.text)) return;
+               let pp = np(Op.dom);
+ ... (2 more added lines; see GitHub link above)
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9703-L9705` → after: `L8320-L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8320-L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8320-L8323) · [Before (L9703-L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9703-L9705)

```diff
-             if (36 === fC && bC + 1 < nC && 123 === xC(bC + 1)) {
-               wC += gC.substring(QC, bC), bC += 2, ZC = zC ? 16 : 17;
-               break
+             if (cp) return {
+               lineHeight: pp.dom.getBoundingClientRect().height,
+               charWidth: cp / pp.length,
+               textHeight: ip
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9709` → after: `L8326-L8336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8326-L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8326-L8336) · [Before (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9709)

```diff
-           return PQ.assert(void 0 !== ZC), FC = wC, ZC
+         }));
+         if (pp) return pp;
+         let ip, cp, Op, op = document.createElement("div");
+         return op.className = "cm-line", op.style.width = "99999px", op.style.position = "absolute", op.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
+           this.tile.dom.appendChild(op);
+           let pp = np(op.firstChild)[0];
+           ip = op.getBoundingClientRect().height, cp = pp && pp.width ? pp.width / 27 : 7, Op = pp && pp.height ? pp.height : ip, op.remove()
+         })), {
+           lineHeight: ip,
+           charWidth: cp,
+           textHeight: Op
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9711-L9782` → after: `L8338-L8352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8338-L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8338-L8352) · [Before (L9711-L9782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9711-L9782)

```diff
- 
-         function HC(zC) {
-           const ZC = bC;
-           if (++bC >= nC) return IC(df.Unexpected_end_of_text), "";
-           const QC = xC(bC);
-           switch (bC++, QC) {
-             case 48:
-               if (bC >= nC || !go(xC(bC))) return "\0";
-             case 49:
-             case 50:
-             case 51:
-               bC < nC && Go(xC(bC)) && bC++;
-             case 52:
-             case 53:
-             case 54:
-             case 55:
- ... (56 more removed lines; see GitHub link above)
+       }
+       computeBlockGapDeco() {
+         let pp = [],
+           ip = this.view.viewState;
+         for (let cp = 0, Op = 0;; Op++) {
+           let op = Op == ip.viewports.length ? null : ip.viewports[Op],
+             Ip = op ? op.from - 1 : this.view.state.doc.length;
+           if (Ip > cp) {
+             let Op = (ip.lineBlockAt(Ip).bottom - ip.lineBlockAt(cp).top) / this.view.scaleY;
+             pp.push(lp.replace({
+               widget: new Fc(Op),
+               block: !0,
+               inclusive: !0,
+               isBlockGap: !0
+             }).range(cp, Ip))
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9785-L9792` → after: `L8357-L8374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8357-L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8357-L8374) · [Before (L9785-L9792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9785-L9792)

```diff
- 
-         function EC(CC) {
-           const zC = bC,
-             ZC = bC += 3,
-             QC = KC(1, !1),
-             wC = QC ? parseInt(QC, 16) : -1;
-           let fC = !1;
-           return wC < 0 ? (CC && IC(df.Hexadecimal_digit_expected), fC = !0) : wC > 1114111 && (CC && IC(df.An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive, ZC, bC - ZC), fC = !0), bC >= nC ? (CC && IC(df.Unexpected_end_of_text), fC = !0) : 125 === xC( … [truncated]
+         return lp.set(pp)
+       }
+       updateDeco() {
+         let pp = 1,
+           ip = this.view.state.facet(Oc).map((ip => (this.dynamicDecorationMap[pp++] = "function" == typeof ip) ? ip(this.view) : ip)),
+           cp = !1,
+           op = this.view.state.facet(Ic).map(((pp, ip) => {
+             let Op = "function" == typeof pp;
+             return Op && (cp = !0), Op ? pp(this.view) : pp
+           }));
+         for (op.length && (this.dynamicDecorationMap[pp++] = cp, ip.push(Op.A.join(op))), this.uO = [this.editContextFormatting, ...ip, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; pp < this.uO.length;) this.dynamicDecorationMap[pp++] = !1;
+         this.blockWrappers = this.view.state.facet(oc).map((pp => "function" == typeof pp ? pp(this.view) : pp))
+       }
+       scrollIntoView(pp) {
+         var ip;
+         if (pp.isSnapshot) {
+ ... (2 more added lines; see GitHub link above)
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9794-L9861` → after: `L8376-L8379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8376-L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8376-L8379) · [Before (L9794-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9794-L9861)

```diff
- 
-         function lC() {
-           if (bC + 5 < nC && 117 === xC(bC + 1)) {
-             const CC = bC;
-             bC += 2;
-             const zC = function(CC, zC) {
-               const ZC = YC(CC, !1, zC);
-               return ZC ? parseInt(ZC, 16) : -1
-             }(4, !1);
-             return bC = CC, zC
-           }
-           return -1
-         }
- 
-         function XC() {
-           if (117 === RC(bC + 1) && 123 === RC(bC + 2)) {
- ... (52 more removed lines; see GitHub link above)
+         for (let Dp of this.view.state.facet(Fi)) try {
+           if (Dp(this.view, pp.range, pp)) return !0
+         } catch (Yp) {
+           Zi(this.view.state, Yp, "scroll handler")
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9863-L9865` → after: `L8381-L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8381-L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8381-L8398) · [Before (L9863-L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9863-L9865)

```diff
- 
-         function sC() {
-           if (110 === xC(bC)) return FC += "n", 384 & WC && (FC = ve(FC) + "n"), bC++, 10;
+         let cp, {
+             range: Op
+           } = pp,
+           op = this.coordsAt(Op.head, null !== (ip = Op.assoc) && void 0 !== ip ? ip : Op.empty ? 0 : Op.head > Op.anchor ? -1 : 1);
+         if (!op) return;
+         !Op.empty && (cp = this.coordsAt(Op.anchor, Op.anchor > Op.head ? -1 : 1)) && (op = {
+           left: Math.min(op.left, cp.left),
+           top: Math.min(op.top, cp.top),
+           right: Math.max(op.right, cp.right),
+           bottom: Math.max(op.bottom, cp.bottom)
+         });
+         let Ip = Dc(this.view),
+           Sp = {
+             left: op.left - Ip.left,
+             top: op.top - Ip.top,
+             right: op.right + Ip.right,
+ ... (2 more added lines; see GitHub link above)
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L9867-L9963` → after: `L8400-L8425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8400-L8425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8400-L8425) · [Before (L9867-L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L9867-L9963)

```diff
-             const CC = 128 & WC ? parseInt(FC.slice(2), 2) : 256 & WC ? parseInt(FC.slice(2), 8) : +FC;
-             return FC = "" + CC, 9
-           }
-         }
- 
-         function TC() {
-           for (fC = bC, WC = 0;;) {
-             if (oC = bC, bC >= nC) return qC = 1;
-             const QC = RC(bC);
-             if (0 === bC && 35 === QC && vo(gC, bC)) {
-               if (bC = eo(gC, bC), zC) continue;
-               return qC = 6
-             }
-             switch (QC) {
-               case 10:
-               case 13:
- ... (81 more removed lines; see GitHub link above)
+             offsetWidth: xp,
+             offsetHeight: Lp
+           } = this.view.scrollDOM;
+         if (function(pp, ip, cp, Op, op, Ip, Sp, xp) {
+             let Lp = pp.ownerDocument,
+               Yp = Lp.defaultView || window;
+             for (let Dp = pp, Ap = !1; Dp && !Ap;)
+               if (1 == Dp.nodeType) {
+                 let pp, Pp = Dp == Lp.body,
+                   Wp = 1,
+                   yp = 1;
+                 if (Pp) pp = sp(Yp);
+                 else {
+                   if (/^(fixed|sticky)$/.test(getComputedStyle(Dp).position) && (Ap = !0), Dp.scrollHeight <= Dp.clientHeight && Dp.scrollWidth <= Dp.clientWidth) {
+                     Dp = Dp.assignedSlot || Dp.parentNode;
+                     continue
+ ... (10 more added lines; see GitHub link above)
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10053-L10055` → after: `L8428-L8434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8428-L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8428-L8434) · [Before (L10053-L10055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10053-L10055)

```diff
-                 if (Mo(QC)) {
-                   WC |= 1, bC += Do(QC);
-                   continue
+                 let Up = 0,
+                   wp = 0;
+                 if ("nearest" == op) ip.top < pp.top + Sp ? (wp = ip.top - (pp.top + Sp), cp > 0 && ip.bottom > pp.bottom + wp && (wp = ip.bottom - pp.bottom + Sp)) : ip.bottom > pp.bottom - Sp && (wp = ip.bottom - pp.bottom + Sp, cp < 0 && ip.top - wp < pp.top && (wp = ip.top -  … [truncated]
+                 else {
+                   let Op = ip.bottom - ip.top,
+                     Ip = pp.bottom - pp.top;
+                   wp = ("center" == op && Op <= Ip ? ip.top + Op / 2 - Ip / 2 : "start" == op || "center" == op && cp < 0 ? ip.top - Sp : ip.bottom - Ip + Sp) - pp.top
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10057-L10103` → after: `L8436-L8469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8436-L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8436-L8469) · [Before (L10057-L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10057-L10103)

```diff
-                 const PC = Do(QC);
-                 return IC(df.Invalid_character, bC, PC), bC += PC, qC = 0
-             }
-           }
-         }
- 
-         function aC() {
-           switch (PC) {
-             case 0:
-               return !0;
-             case 1:
-               return !1
-           }
-           return 3 !== pC && 4 !== pC || 3 !== PC && yf.test(gC.slice(fC, bC))
-         }
- 
- ... (31 more removed lines; see GitHub link above)
+                 if ("nearest" == Op ? ip.left < pp.left + Ip ? (Up = ip.left - (pp.left + Ip), cp > 0 && ip.right > pp.right + Up && (Up = ip.right - pp.right + Ip)) : ip.right > pp.right - Ip && (Up = ip.right - pp.right + Ip, cp < 0 && ip.left < pp.left + Up && (Up = ip.left -  … [truncated]
+                   if (Pp) Yp.scrollBy(Up, wp);
+                   else {
+                     let pp = 0,
+                       cp = 0;
+                     if (wp) {
+                       let pp = Dp.scrollTop;
+                       Dp.scrollTop += wp / yp, cp = (Dp.scrollTop - pp) * yp
+                     }
+                     if (Up) {
+                       let ip = Dp.scrollLeft;
+                       Dp.scrollLeft += Up / Wp, pp = (Dp.scrollLeft - ip) * Wp
+                     }
+                     ip = {
+                       left: ip.left - pp,
+                       top: ip.top - cp,
+ ... (18 more added lines; see GitHub link above)
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10231-L10247` → after: `L8473-L8475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8473-L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8473-L8475) · [Before (L10231-L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10231-L10247)

```diff
- 
-       function to(CC, zC) {
-         return CC.codePointAt(zC)
-       }
- 
-       function Do(CC) {
-         return CC >= 65536 ? 2 : -1 === CC ? 0 : 1
-       }
-       var jo = String.fromCodePoint ? CC => String.fromCodePoint(CC) : function(CC) {
-         if (PQ.assert(0 <= CC && CC <= 1114111), CC <= 65535) return String.fromCharCode(CC);
-         const zC = Math.floor((CC - 65536) / 1024) + 55296,
-           ZC = (CC - 65536) % 1024 + 56320;
-         return String.fromCharCode(zC, ZC)
-       };
- 
-       function yo(CC) {
- ... (1 more removed lines; see GitHub link above)
+       lineHasWidget(pp) {
+         let ip = pp => pp.isWidget() || pp.children.some(ip);
+         return ip(this.tile.resolveBlock(pp, 1).tile)
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10249-L10266` → after: `L8477-L8478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8477-L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8477-L8478) · [Before (L10249-L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10249-L10266)

```diff
-       var Lo = new Map(Object.entries({
-           General_Category: "General_Category",
-           gc: "General_Category",
-           Script: "Script",
-           sc: "Script",
-           Script_Extensions: "Script_Extensions",
-           scx: "Script_Extensions"
-         })),
-         Uo = new Set(["ASCII", "ASCII_Hex_Digit", "AHex", "Alphabetic", "Alpha", "Any", "Assigned", "Bidi_Control", "Bidi_C", "Bidi_Mirrored", "Bidi_M", "Case_Ignorable", "CI", "Cased", "Changes_When_Casefolded", "CWCF", "Changes_When_Casemapped", "CWCM", "Changes_When_Lowercased … [truncated]
-         Bo = new Set(["Basic_Emoji", "Emoji_Keycap_Sequence", "RGI_Emoji_Modifier_Sequence", "RGI_Emoji_Flag_Sequence", "RGI_Emoji_Tag_Sequence", "RGI_Emoji_ZWJ_Sequence", "RGI_Emoji"]),
-         Oo = {
-           General_Category: new Set(["C", "Other", "Cc", "Control", "cntrl", "Cf", "Format", "Cn", "Unassigned", "Co", "Private_Use", "Cs", "Surrogate", "L", "Letter", "LC", "Cased_Letter", "Ll", "Lowercase_Letter", "Lm", "Modifier_Letter", "Lo", "Other_Letter", "Lt", "Titlecase_ … [truncated]
-           Script: new Set(["Adlm", "Adlam", "Aghb", "Caucasian_Albanian", "Ahom", "Arab", "Arabic", "Armi", "Imperial_Aramaic", "Armn", "Armenian", "Avst", "Avestan", "Bali", "Balinese", "Bamu", "Bamum", "Bass", "Bassa_Vah", "Batk", "Batak", "Beng", "Bengali", "Bhks", "Bhaiksuki" … [truncated]
-           Script_Extensions: void 0
-         };
- 
- ... (2 more removed lines; see GitHub link above)
+       destroy() {
+         bc(this.tile)
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10269-L10270` → after: `L8482-L8486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8482-L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8482-L8486) · [Before (L10269-L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10269-L10270)

```diff
-       function Vo(CC) {
-         return Qz(CC, ni, Fi)
+     function bc(pp, ip) {
+       let cp = null === ip || void 0 === ip ? void 0 : ip.get(pp);
+       if (1 != cp) {
+         null == cp && pp.destroy();
+         for (let cp of pp.children) bc(cp, ip)
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10272-L10285` → after: `L8488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8488) · [Before (L10272-L10285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10272-L10285)

```diff
-       Oo.Script_Extensions = Oo.Script;
-       var Cq = new Map([
-         [99, "lib.esnext.full.d.ts"],
-         [11, "lib.es2024.full.d.ts"],
-         [10, "lib.es2023.full.d.ts"],
-         [9, "lib.es2022.full.d.ts"],
-         [8, "lib.es2021.full.d.ts"],
-         [7, "lib.es2020.full.d.ts"],
-         [6, "lib.es2019.full.d.ts"],
-         [5, "lib.es2018.full.d.ts"],
-         [4, "lib.es2017.full.d.ts"],
-         [3, "lib.es2016.full.d.ts"],
-         [2, "lib.es6.d.ts"]
-       ]);
+     }
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10287-L10303` → after: `L8490-L8501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8490-L8501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8490-L8501) · [Before (L10287-L10303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10287-L10303)

```diff
-       function zq(CC) {
-         const zC = Ii(CC);
-         switch (zC) {
-           case 99:
-           case 11:
-           case 10:
-           case 9:
-           case 8:
-           case 7:
-           case 6:
-           case 5:
-           case 4:
-           case 3:
-           case 2:
-             return Cq.get(zC);
-           default:
- ... (1 more removed lines; see GitHub link above)
+     function hc(pp, ip) {
+       let cp = pp.observer.selectionRange;
+       if (!cp.focusNode) return null;
+       let Op = Li(cp.focusNode, cp.focusOffset),
+         op = Yi(cp.focusNode, cp.focusOffset),
+         Ip = Op || op;
+       if (op && Op && op.node != Op.node) {
+         let ip = Uc.get(op.node);
+         if (!ip || ip.isText() && ip.text != op.node.nodeValue) Ip = op;
+         else if (pp.docView.lastCompositionAfterCursor) {
+           let pp = Uc.get(Op.node);
+           !pp || pp.isText() && pp.text != Op.node.nodeValue || (Ip = op)
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10306-L10308` → after: `L8504-L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8504-L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8504-L8509) · [Before (L10306-L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10306-L10308)

```diff
- 
-       function Zq(CC) {
-         return CC.start + CC.length
+       if (pp.docView.lastCompositionAfterCursor = Ip != Op, !Ip) return null;
+       let Sp = ip - Ip.offset;
+       return {
+         from: Sp,
+         to: Sp + Ip.node.nodeValue.length,
+         node: Ip.node
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10310-L10312` → after: `L8511-L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8511-L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8511-L8514) · [Before (L10310-L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10310-L10312)

```diff
- 
-       function Qq(CC) {
-         return 0 === CC.length
+     }
+     let ac = class {
+       constructor() {
+         this.changes = []
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10314-L10316` → after: `L8516-L8517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8516-L8517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8516-L8517) · [Before (L10314-L10316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10314-L10316)

```diff
- 
-       function wq(CC, zC) {
-         return zC >= CC.start && zC < Zq(CC)
+       compareRange(pp, ip) {
+         Tp(pp, ip, this.changes)
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10318-L10320` → after: `L8519-L8520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8519-L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8519-L8520) · [Before (L10318-L10320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10318-L10320)

```diff
- 
-       function bq(CC, zC) {
-         return zC >= CC.pos && zC <= CC.end
+       comparePoint(pp, ip) {
+         Tp(pp, ip, this.changes)
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10322-L10324` → after: `L8522-L8523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8522-L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8522-L8523) · [Before (L10322-L10324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10322-L10324)

```diff
- 
-       function nq(CC, zC) {
-         return zC.start >= CC.start && Zq(zC) <= Zq(CC)
+       boundChange(pp) {
+         Tp(pp, pp, this.changes)
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10326-L10328` → after: `L8525-L8528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8525-L8528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8525-L8528) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10326-L10328)

```diff
- 
-       function fq(CC, zC) {
-         return zC.pos >= CC.start && zC.end <= Zq(CC)
+     };
+     class nc {
+       constructor() {
+         this.changes = []
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10330-L10332` → after: `L8530-L8531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8530-L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8530-L8531) · [Before (L10330-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10330-L10332)

```diff
- 
-       function oq(CC, zC) {
-         return zC.start >= CC.pos && Zq(zC) <= CC.end
+       compareRange(pp, ip) {
+         Tp(pp, ip, this.changes)
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10334-L10336` → after: `L8533-L8535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8533-L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8533-L8535) · [Before (L10334-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10334-L10336)

```diff
- 
-       function qq(CC, zC) {
-         return void 0 !== Fq(CC, zC)
+       comparePoint() {}
+       boundChange(pp) {
+         Tp(pp, pp, this.changes)
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10338-L10341` → after: `L8537-L8540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8537-L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8537-L8540) · [Before (L10338-L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10338-L10341)

```diff
- 
-       function Fq(CC, zC) {
-         const ZC = pq(CC, zC);
-         return ZC && 0 === ZC.length ? void 0 : ZC
+     }
+     class Fc extends Ep {
+       constructor(pp) {
+         super(), this.height = pp
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10343-L10345` → after: `L8542-L8544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8542-L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8542-L8544) · [Before (L10343-L10345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10343-L10345)

```diff
- 
-       function Wq(CC, zC) {
-         return Mq(CC.start, CC.length, zC.start, zC.length)
+       toDOM() {
+         let pp = document.createElement("div");
+         return pp.className = "cm-gap", this.updateDOM(pp), pp
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10347-L10349` → after: `L8546-L8547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8546-L8547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8546-L8547) · [Before (L10347-L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10347-L10349)

```diff
- 
-       function Nq(CC, zC, ZC) {
-         return Mq(CC.start, CC.length, zC, ZC)
+       eq(pp) {
+         return pp.height == this.height
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10351-L10353` → after: `L8549-L8550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8549-L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8549-L8550) · [Before (L10351-L10353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10351-L10353)

```diff
- 
-       function Mq(CC, zC, ZC, QC) {
-         return ZC <= CC + zC && ZC + QC >= CC
+       updateDOM(pp) {
+         return pp.style.height = this.height + "px", !0
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10355-L10357` → after: `L8552-L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8552-L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8552-L8553) · [Before (L10355-L10357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10355-L10357)

```diff
- 
-       function gq(CC, zC) {
-         return zC <= Zq(CC) && zC >= CC.start
+       get editable() {
+         return !0
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10359-L10361` → after: `L8555-L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8555-L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8555-L8556) · [Before (L10359-L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10359-L10361)

```diff
- 
-       function Sq(CC, zC) {
-         return Nq(zC, CC.pos, CC.end - CC.pos)
+       get estimatedHeight() {
+         return this.height
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10363-L10367` → after: `L8558-L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8558-L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8558-L8559) · [Before (L10363-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10363-L10367)

```diff
- 
-       function pq(CC, zC) {
-         const ZC = Math.max(CC.start, zC.start),
-           QC = Math.min(Zq(CC), Zq(zC));
-         return ZC <= QC ? Rq(ZC, QC) : void 0
+       ignoreEvent() {
+         return !1
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10370-L10378` → after: `L8563-L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8563-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8563-L8571) · [Before (L10370-L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10370-L10378)

```diff
-       function Pq(CC) {
-         CC = CC.filter((CC => CC.length > 0)).sort(((CC, zC) => CC.start !== zC.start ? CC.start - zC.start : CC.length - zC.length));
-         const zC = [];
-         let ZC = 0;
-         for (; ZC < CC.length;) {
-           let QC = CC[ZC],
-             wC = ZC + 1;
-           for (; wC < CC.length && Wq(QC, CC[wC]);) {
-             QC = Rq(Math.min(QC.start, CC[wC].start), Math.max(Zq(QC), Zq(CC[wC]))), wC++
+     function gc(pp, ip, cp) {
+       let Op = pp.lineBlockAt(ip);
+       if (Array.isArray(Op.type)) {
+         let pp;
+         for (let op of Op.type) {
+           if (op.from > ip) break;
+           if (!(op.to < ip)) {
+             if (op.from < ip && op.to > ip) return op;
+             pp && (op.type != Xp.Text || pp.type == op.type && !(cp < 0 ? op.from < ip : op.to > ip)) || (pp = op)
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10382` → after: `L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8574) · [Before (L10382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10382)

```diff
-         return zC
+         return pp || Op
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10385-L10390` → after: `L8579-L8588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8579-L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8579-L8588) · [Before (L10385-L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10385-L10390)

```diff
-       function Gq(CC, zC) {
-         if (CC < 0) throw new Error("start < 0");
-         if (zC < 0) throw new Error("length < 0");
-         return {
-           start: CC,
-           length: zC
+     function Gc(pp, ip, cp, Op) {
+       let op = pp.state.doc.lineAt(ip.head),
+         Ip = pp.bidiSpans(op),
+         Sp = pp.textDirectionAt(op.from);
+       for (let xp = ip, Lp = null;;) {
+         let ip = Ci(op, Ip, Sp, xp, cp),
+           Yp = Mi;
+         if (!ip) {
+           if (op.number == (cp ? pp.state.doc.lines : 1)) return xp;
+           Yp = "\n", op = pp.state.doc.line(op.number + (cp ? 1 : -1)), Ip = pp.bidiSpans(op), ip = pp.visualLineSide(op, !cp)
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10392-L10410` → after: `L8590-L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8590-L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8590-L8594) · [Before (L10392-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10392-L10410)

```diff
-       }
- 
-       function Rq(CC, zC) {
-         return Gq(CC, zC - CC)
-       }
- 
-       function Aq(CC) {
-         return Gq(CC.span.start, CC.newLength)
-       }
- 
-       function xq(CC) {
-         return Qq(CC.span) && 0 === CC.newLength
-       }
- 
-       function Jq(CC, zC) {
-         if (zC < 0) throw new Error("newLength < 0");
- ... (3 more removed lines; see GitHub link above)
+         if (Lp) {
+           if (!Lp(Yp)) return xp
+         } else {
+           if (!Op) return ip;
+           Lp = Op(Yp)
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10413` → after: `L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8598) · [Before (L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10413)

```diff
-       var Iq = Jq(Gq(0, 0), 0);
+     }
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10415-L10430` → after: `L8600-L8624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8600-L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8600-L8624) · [Before (L10415-L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10415-L10430)

```diff
-       function iq(CC) {
-         if (0 === CC.length) return Iq;
-         if (1 === CC.length) return CC[0];
-         const zC = CC[0];
-         let ZC = zC.span.start,
-           QC = Zq(zC.span),
-           wC = ZC + zC.newLength;
-         for (let bC = 1; bC < CC.length; bC++) {
-           const zC = CC[bC],
-             nC = ZC,
-             fC = QC,
-             oC = wC,
-             qC = zC.span.start,
-             FC = Zq(zC.span),
-             WC = qC + zC.newLength;
-           ZC = Math.min(nC, qC), QC = Math.max(fC, fC + (FC - oC)), wC = Math.max(WC, WC + (oC - FC))
+     function rc(pp, ip, cp) {
+       for (;;) {
+         let Op = 0;
+         for (let op of pp) op.between(ip - 1, ip + 1, ((pp, op, Ip) => {
+           if (ip > pp && ip < op) {
+             let Ip = Op || cp || (ip - pp < op - ip ? -1 : 1);
+             ip = Ip < 0 ? pp : op, Op = Ip
+           }
+         }));
+         if (!Op) return ip
+       }
+     }
+ 
+     function Zc(pp, ip) {
+       let cp = null;
+       for (let op = 0; op < ip.By.length; op++) {
+ ... (9 more added lines; see GitHub link above)
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10432-L10438` → after: `L8626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8626) · [Before (L10432-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10432-L10438)

```diff
-         return Jq(Rq(ZC, QC), wC - ZC)
-       }
- 
-       function vq(CC) {
-         if (CC && 169 === CC.kind)
-           for (let zC = CC; zC; zC = zC.parent)
-             if (lW(zC) || tW(zC) || 265 === zC.kind) return zC
+         Sp && (cp || (cp = ip.By.slice()), cp[op] = Sp)
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10441-L10446` → after: `L8631-L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8631-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8631-L8637) · [Before (L10441-L10446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10441-L10446)

```diff
-       function eq(CC, zC) {
-         return Dd(CC) && vx(CC, 31) && 177 === zC.kind
-       }
- 
-       function hq(CC) {
-         return !!zN(CC) && RC(CC.elements, Kq)
+     function zc(pp, ip, cp) {
+       let op = rc(pp.state.facet(Sc).map((ip => ip(pp))), cp.from, ip.head > cp.from ? -1 : 1);
+       return op == cp.from ? cp : Op.l.cursor(op, op < cp.from ? 1 : -1)
+     }
+     class sc {
+       constructor(pp, ip) {
+         this.pos = pp, this.assoc = ip
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10449-L10450` → after: `L8641-L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8641-L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8641-L8674) · [Before (L10449-L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10449-L10450)

```diff
-       function Kq(CC) {
-         return !!QH(CC) || hq(CC.name)
+     function Kc(pp, ip, cp, op) {
+       let Ip, Sp = pp.contentDOM.getBoundingClientRect(),
+         xp = Sp.top + pp.viewState.paddingTop,
+         {
+           x: Lp,
+           y: Yp
+         } = ip,
+         Dp = Yp - xp;
+       for (;;) {
+         if (Dp < 0) return new sc(0, 1);
+         if (Dp > pp.viewState.docHeight) return new sc(pp.state.doc.length, -1);
+         if (Ip = pp.elementAtHeight(Dp), null == op) break;
+         if (Ip.type == Xp.Text) {
+           if (op < 0 ? Ip.to < pp.viewport.from : Ip.from > pp.viewport.to) break;
+           let ip = pp.docView.coordsAt(op < 0 ? Ip.from : Ip.to, op > 0 ? -1 : 1);
+           if (ip && (op < 0 ? ip.top <= Dp + xp : ip.bottom >= Dp + xp)) break
+ ... (18 more added lines; see GitHub link above)
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10452-L10456` → after: `L8676-L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8676-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8676-L8682) · [Before (L10452-L10456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10452-L10456)

```diff
- 
-       function Yq(CC) {
-         let zC = CC.parent;
-         for (; mm(zC.parent);) zC = zC.parent.parent;
-         return zC.parent
+       if (Ip.type != Xp.Text) return Dp < (Ip.top + Ip.bottom) / 2 ? new sc(Ip.from, 1) : new sc(Ip.to, -1);
+       let Ap = pp.docView.lineAt(Ip.from, 2);
+       return Ap && Ap.length == Ip.length || (Ap = pp.docView.lineAt(Ip.from, -2)), new Vc(pp, Lp, Yp, pp.textDirectionAt(Ip.from)).scanTile(Ap, Ip.from)
+     }
+     class Vc {
+       constructor(pp, ip, cp, Op) {
+         this.view = pp, this.x = ip, this.y = cp, this.baseDir = Op, this.line = null, this.spans = null
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10458-L10462` → after: `L8684-L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8684-L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8684-L8685) · [Before (L10458-L10462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10458-L10462)

```diff
- 
-       function dq(CC, zC) {
-         mm(CC) && (CC = Yq(CC));
-         let ZC = zC(CC);
-         return 261 === CC.kind && (CC = CC.parent), CC && 262 === CC.kind && (ZC |= zC(CC), CC = CC.parent), CC && 244 === CC.kind && (ZC |= zC(CC)), ZC
+       bidiSpansAt(pp) {
+         return (!this.line || this.line.from > pp || this.line.to < pp) && (this.line = this.view.state.doc.lineAt(pp), this.spans = this.view.bidiSpans(this.line)), this
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L10464-L10466` → after: `L8687-L8692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8687-L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L8687-L8692) · [Before (L10464-L10466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L10464-L10466)

```diff
- 
-       function mq(CC) {
-         return dq(CC, ux)
+       baseDirAt(pp, ip) {
+         let {
+           line: cp,
+           spans: Op
+         } = this.bidiSpansAt(pp);
+         return Op[ei.find(Op, pp - cp.from, -1, ip)].level == this.baseDir
```
