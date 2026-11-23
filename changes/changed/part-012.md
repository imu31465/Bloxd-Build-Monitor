# Changed — Bundle Modifications Report (Part 012 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `12 / 50` (**273** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 011](part-011.md) · [Part 013 →](part-013.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (316 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 208. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4709-L4710` → after: `L15515-L15520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15515-L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15515-L15520) · [Before (L4709-L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4709-L4710)

```diff
-       get isUnIndexed() {
-         return this._unIndexed
+       lookSource() {
+         return {
+           handles: CC => NQ(CC) >= 0 || MQ(CC),
+           line: (CC, zC) => this.lookLine(CC, zC),
+           version: () => this.beamsVersion
+         }
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4712-L4713` → after: `L15522-L15525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15522-L15525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15522-L15525) · [Before (L4712-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4712-L4713)

```diff
-       set isUnIndexed(qq) {
-         this._unIndexed !== qq && (this._unIndexed = qq, this._markSubMeshesAsAttributesDirty())
+       subscribe(CC) {
+         return this.listeners.add(CC), () => {
+           this.listeners.delete(CC)
+         }
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4715-L4717` → after: `L15527-L15528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15527-L15528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15527-L15528) · [Before (L4715-L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4715-L4717)

```diff
-       get worldMatrixInstancedBuffer() {
-         const qq = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
-         return qq ? qq.instancesData : void 0
+       dispose() {
+         this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4719-L4721` → after: `L15530-L15531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15530-L15531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15530-L15531) · [Before (L4719-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4719-L4721)

```diff
-       get previousWorldMatrixInstancedBuffer() {
-         const qq = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
-         return qq ? qq.instancesPreviousData : void 0
+       emit() {
+         for (const CC of this.listeners) CC()
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4723-L4724` → after: `L15533-L15564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15533-L15564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15533-L15564) · [Before (L4723-L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4723-L4724)

```diff
-       get manualUpdateOfWorldMatrixInstancedBuffer() {
-         return this._instanceDataStorage.manualUpdate
+     }
+     const tp = {
+       positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((CC => … [truncated]
+       indices: [0, 4, 8, 12, 16, 20].flatMap((CC => [CC, CC + 1, CC + 2, CC, CC + 2, CC + 3]))
+     };
+ 
+     function Dp(CC, zC, ZC, QC, wC, bC, nC) {
+       let fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
+       const oC = Math.cos(fC),
+         qC = Math.sin(fC),
+         FC = CC.positions.length / 3,
+         {
+           positions: WC,
+           indices: NC
+         } = tp;
+       for (let MC = 0; MC < WC.length; MC += 3) {
+ ... (16 more added lines; see GitHub link above)
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4726-L4727` → after: `L15566-L15569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15566-L15569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15566-L15569) · [Before (L4726-L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4726-L4727)

```diff
-       set manualUpdateOfWorldMatrixInstancedBuffer(qq) {
-         this._instanceDataStorage.manualUpdate = qq
+     }
+     class yp {
+       constructor(CC, zC) {
+         this.style = CC, this.perSource = zC, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4729-L4730` → after: `L15571-L15572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15571-L15572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15571-L15572) · [Before (L4729-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4729-L4730)

```diff
-       get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
-         return this._instanceDataStorage.previousManualUpdate
+       setSources(CC) {
+         this.sources = CC, 0 === CC.length && (this.budget = 0)
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4732-L4733` → after: `L15574-L15584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15574-L15584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15574-L15584) · [Before (L4732-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4732-L4733)

```diff
-       set manualUpdateOfPreviousWorldMatrixInstancedBuffer(qq) {
-         this._instanceDataStorage.previousManualUpdate = qq
+       ZN(CC, zC, ZC) {
+         const QC = this.sources.length;
+         if (0 !== QC) {
+           var wC, bC;
+           this.budget = Math.min(this.budget + (wC = QC, bC = this.perSource, Math.min(wC * bC, fq) * zC), 2);
+           for (let zC = 0; zC < QC && this.budget >= 1; zC++) {
+             const zC = this.sources[this.cursor % QC];
+             this.cursor = (this.cursor + 1) % QC;
+             if (!(Math.max(Math.abs(zC.x - ZC[0]), Math.abs(zC.y - ZC[1]), Math.abs(zC.z - ZC[2])) > 32)) return this.puff(CC, zC), void this.budget--
+           }
+         }
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4735-L4736` → after: `L15586-L15612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15586-L15612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15586-L15612) · [Before (L4735-L4736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4735-L4736)

```diff
-       get forceWorldMatrixInstancedBufferUpdate() {
-         return this._instanceDataStorage.forceMatrixUpdates
+       dispose() {
+         var CC;
+         null === (CC = this.particles) || void 0 === CC || CC.dispose(), this.particles = null, this.sources = []
+       }
+       puff(CC, zC) {
+         let {
+           x: ZC,
+           y: QC,
+           z: wC,
+           h: bC,
+           faces: nC
+         } = zC;
+         const fC = function(CC, zC, ZC, QC, wC) {
+             const [bC, nC, fC] = wC[Math.floor(Math.random() * wC.length)], oC = .04, qC = (CC, zC, ZC) => CC > 0 ? zC + ZC + oC : CC < 0 ? zC - oC : zC + .1, FC = (CC, zC, ZC) => CC > 0 ? zC + ZC + oC : CC < 0 ? zC - oC : zC + ZC - .1, WC = [qC(bC, CC, 1), qC(nC, zC, QC), qC(fC, … [truncated]
+             return {
+               pos: [(WC[0] + NC[0]) / 2, (WC[1] + NC[1]) / 2, (WC[2] + NC[2]) / 2],
+ ... (11 more added lines; see GitHub link above)
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4738-L4739` → after: `L15614-L15624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15614-L15624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15614-L15624) · [Before (L4738-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4738-L4739)

```diff
-       set forceWorldMatrixInstancedBufferUpdate(qq) {
-         this._instanceDataStorage.forceMatrixUpdates = qq
+     }
+     const Lp = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0]
+     ];
+     class Up {
+       constructor() {
+         this.green = new yp(qq.green, bq), this.pink = new yp(qq.pink, nq), this.colliders = [], this.lastMs = 0
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4741-L4753` → after: `L15626-L15648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15626-L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15626-L15648) · [Before (L4741-L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4741-L4753)

```diff
-       _copySource(qq, Eq) {
-         let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-           Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const lq = this.ZJ();
-         if (qq._geometry && qq._geometry.applyToMesh(this), Pq.b.DeepCopy(qq, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "olq", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
-           const Eq = qq._ranges;
-           for (const qq in Eq) Object.prototype.hasOwnProperty.call(Eq, qq) && Eq[qq] && this.createAnimationRange(qq, Eq[qq].from, Eq[qq].to)
-         }
-         if (qq.metadata && qq.metadata.clone ? this.metadata = qq.metadata.clone() : this.metadata = qq.metadata, this._internalMetadata = qq._internalMetadata, this.meshBlendingTag = qq.meshBlendingTag, Qq.b && Qq.b.HasTags(qq) && Qq.b.AddTagsTo(this, Qq.b.GetTags(qq, !0)), this … [truncated]
-           const lq = qq.getDescendants(!0);
-           for (let qq = 0; qq < lq.length; qq++) {
-             const Oq = lq[qq];
-             Oq._isMesh ? (Cq.parent = this, Cq.doNotCloneChildren = Eq, Cq.clonePhysicsImpostor = gq, Cq.cloneThinInstances = Yq, Oq.clone(this.name + "." + Oq.name, Cq)) : Oq.clone && Oq.clone(this.name + "." + Oq.name, this)
+       setSources(CC) {
+         this.colliders = CC;
+         const zC = [],
+           ZC = [];
+         for (const QC of CC) {
+           const [CC, wC, bC] = QC.focus;
+           zC.push({
+             x: CC,
+             y: wC - 1,
+             z: bC,
+             h: 2,
+             faces: Lp
+           });
+           for (let zC = 0; zC < 4; zC++) {
+             if (!QC.live[zC]) continue;
+             const [CC, wC, bC] = pQ(QC.focus, zC, nQ.LASER_D), [nC, , fC] = SQ[zC], oC = Lp.filter((CC => CC[0] !== nC || CC[2] !== fC || 0 !== CC[1]));
+ ... (7 more added lines; see GitHub link above)
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4756-L4772` → after: `L15651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15651) · [Before (L4756-L4772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4756-L4772)

```diff
-         if (qq.morphTargetManager && (this.morphTargetManager = qq.morphTargetManager), (0, Jq.b)(lq.getPhysicsEngine)) {
-           const Eq = lq.getPhysicsEngine();
-           if (gq && Eq)
-             if (1 === Eq.getPluginVersion()) {
-               const gq = Eq.getImpostorForPhysicsObject(qq);
-               gq && (this.physicsImpostor = gq.clone(this))
-             } else 2 === Eq.getPluginVersion() && qq.physicsBody && qq.physicsBody.clone(this)
-         }
-         for (let Oq = 0; Oq < lq.xZ.length; Oq++) {
-           const Eq = lq.xZ[Oq];
-           Eq.emitter === qq && Eq.clone(Eq.name, this)
-         }
-         if (this.skeleton = qq.skeleton, Yq && (qq._thinInstanceDataStorage.matrixData ? (this.cqq("matrix", new Float32Array(qq._thinInstanceDataStorage.matrixData), 16, !qq._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = qq … [truncated]
-           const Eq = qq._userThinInstanceBuffersStorage;
-           for (const qq in Eq.data) this.cqq(qq, new Float32Array(Eq.data[qq]), Eq.strides[qq], !Eq.vertexBuffers?.[qq]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[qq] = Eq.sizes[qq]
-         }
- ... (1 more removed lines; see GitHub link above)
+         this.green.setSources(zC), this.pink.setSources(ZC)
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4774-L4792` → after: `L15653-L15658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15653-L15658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15653-L15658) · [Before (L4774-L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4774-L4792)

```diff
-       constructor(qq) {
-         let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           Oq = arguments.length > 4 ? arguments[4] : void 0,
-           mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         super(qq, gq), this._internalMeshDataInfo = new Kq, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new wq, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation =  … [truncated]
-           qq && gq && (this._uniformBuffer ? this.transferToEffect(Eq) : gq.bindOnlyWorldMatrix(Eq))
-         };
-         let xq = !1;
-         if (Yq && void 0 === Yq._addToSceneRootNodes) {
-           const qq = Yq;
-           Eq = qq.parent ?? null, lq = qq.source ?? null, Oq = qq.doNotCloneChildren ?? !1, mq = qq.clonePhysicsImpostor ?? !0, xq = qq.cloneThinInstances ?? !1
-         } else Eq = Yq;
-         lq && this._copySource(lq, Oq, mq, xq), null !== Eq && (this.parent = Eq), this._instanceDataStorage.hardwareInstancedRendering = this.Ba().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = qq => {
-           qq.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
- ... (3 more removed lines; see GitHub link above)
+       onAfterRender(CC) {
+         const zC = performance.now(),
+           ZC = 0 === this.lastMs ? 0 : Math.min(zC - this.lastMs, 250) / 1e3;
+         if (this.lastMs = zC, 0 === this.colliders.length || !CC.particlesEnabled()) return;
+         const QC = CC.getCameraPosition();
+         this.green.ZN(CC, ZC, QC), this.pink.ZN(CC, ZC, QC)
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4794-L4804` → after: `L15660-L15661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15660-L15661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15660-L15661) · [Before (L4794-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4794-L4804)

```diff
-       instantiateHierarchy() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           Eq = arguments.length > 1 ? arguments[1] : void 0,
-           gq = arguments.length > 2 ? arguments[2] : void 0;
-         const Yq = 0 === this.getTotalVertices() || Eq && Eq.doNotInstantiate && (!0 === Eq.doNotInstantiate || Eq.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), qq || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
-         Yq.parent = qq || this.parent, Yq.position = this.position.clone(), Yq.rc = this.rc.clone(), this.rotationQuaternion ? Yq.rotationQuaternion = this.rotationQuaternion.clone() : Yq.rotation = this.rotation.clone(), gq && gq(this, Yq);
-         for (const lq of this.getChildTransformNodes(!0)) "InstancedMesh" === lq.getClassName() && "Mesh" === Yq.getClassName() && lq.Plq === this ? lq.instantiateHierarchy(Yq, {
-           doNotInstantiate: Eq && Eq.doNotInstantiate || !1,
-           newSourcedMesh: Yq
-         }, gq) : lq.instantiateHierarchy(Yq, Eq, gq);
-         return Yq
+       dispose() {
+         this.green.dispose(), this.pink.dispose(), this.colliders = []
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4806-L4807` → after: `L15663-L15669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15663-L15669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15663-L15669) · [Before (L4806-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4806-L4807)

```diff
-       getClassName() {
-         return "Mesh"
+     }
+     const Bp = 1.04,
+       Op = jp([1, 120 / 255, 220 / 255]),
+       kp = jp([1, .25, .25], .35);
+     class Vp {
+       constructor(CC) {
+         this.store = CC, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Up
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4809-L4810` → after: `L15671-L15680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15671-L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15671-L15680) · [Before (L4809-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4809-L4810)

```diff
-       get _isMesh() {
-         return !0
+       onAfterRender(CC) {
+         this.store.version() !== this.builtVersion && this.rebuild(CC);
+         const zC = performance.now();
+         for (const ZC of this.beams) {
+           const QC = 1 + .35 * Math.sin(zC / 700 * Math.PI * 2 + ZC.phase);
+           CC.setGameMesh(ZC.mesh, {
+             scale: [ZC.alongX ? 1 : QC, QC, ZC.alongX ? QC : 1]
+           })
+         }
+         this.glow.onAfterRender(CC)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4812-L4822` → after: `L15682-L15710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15682-L15710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15682-L15710) · [Before (L4812-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4812-L4822)

```diff
-       toString(qq) {
-         let Eq = super.toString(qq);
-         if (Eq += ", n vertices: " + this.getTotalVertices(), Eq += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
-           for (let gq = 0; gq < this.animations.length; gq++) Eq += ", animation[0]: " + this.animations[gq].toString(qq);
-         if (qq)
-           if (this._geometry) {
-             const qq = this.iYq(),
-               gq = this.getVerticesData(nq.g.PositionKind);
-             gq && qq && (Eq += ", flat shading: " + (gq.length / 3 === qq.length ? "YES" : "NO"))
-           } else Eq += ", flat shading: UNKNOWN";
-         return Eq
+       dispose(CC) {
+         this.clear(CC), this.glow.dispose(), this.builtVersion = -1
+       }
+       rebuild(CC) {
+         this.clear(CC), this.builtVersion = this.store.version();
+         const zC = [];
+         for (const {
+             entry: ZC
+           }
+           of this.store.colliders()) ZC.on && ZC.live.some(Boolean) && (this.addBeams(CC, ZC), zC.push(ZC)), ZC.blockers.length > 0 && this.addMarkers(CC, ZC);
+         this.glow.setSources(zC)
+       }
+       addBeams(CC, zC) {
+         const [ZC, QC, wC] = zC.focus, bC = wq - .25, nC = (.25 + wq) / 2;
+         for (let fC = 0; fC < 4; fC++) {
+           if (!zC.live[fC]) continue;
+ ... (13 more added lines; see GitHub link above)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4824-L4826` → after: `L15712-L15719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15712-L15719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15712-L15719) · [Before (L4824-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4824-L4826)

```diff
-       _unBindEffect() {
-         super._unBindEffect();
-         for (const qq of this.instances) qq._unBindEffect()
+       addMarkers(CC, zC) {
+         const ZC = zC.blockers[0],
+           QC = {
+             positions: [],
+             indices: []
+           };
+         for (const [wC, bC, nC] of zC.blockers) Dp(QC, wC - ZC[0] + .5, bC - ZC[1] + .5, nC - ZC[2] + .5, Bp, Bp, Bp);
+         this.meshes.push(CC.createGameMesh(QC, kp, ZC))
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4828-L4829` → after: `L15721-L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15721-L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15721-L15723) · [Before (L4828-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4828-L4829)

```diff
-       get hasLODLevels() {
-         return this._internalMeshDataInfo._LODLevels.length > 0
+       clear(CC) {
+         for (const zC of this.meshes) CC.disposeGameMesh(zC);
+         this.meshes = [], this.beams = []
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4831-L4832` → after: `L15725-L15770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15725-L15770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15725-L15770) · [Before (L4831-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4831-L4832)

```diff
-       getLODLevels() {
-         return this._internalMeshDataInfo._LODLevels
+     }
+     const CP = [.56, .83, 1],
+       zP = [1, .73, .08],
+       ZP = [1, .25, .25],
+       QP = [.85, .85, .85],
+       wP = [.3, .45, .6];
+ 
+     function bP(CC, zC, ZC, QC) {
+       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
+         bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
+       const nC = wC / 2,
+         fC = wC + bC;
+       for (const oC of [-nC, nC])
+         for (const wC of [-nC, nC]) Dp(CC, zC, ZC + oC, QC + wC, fC, bC, bC), Dp(CC, zC + oC, ZC, QC + wC, bC, fC, bC), Dp(CC, zC + oC, ZC + wC, QC, bC, bC, fC)
+     }
+ 
+ ... (30 more added lines; see GitHub link above)
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4834-L4836` → after: `L15772-L15783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15772-L15783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15772-L15783) · [Before (L4834-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4834-L4836)

```diff
-       _sortLODLevels() {
-         const qq = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
-         this._internalMeshDataInfo._LODLevels.sort(((Eq, gq) => Eq.distanceOrScreenCoverage < gq.distanceOrScreenCoverage ? qq : Eq.distanceOrScreenCoverage > gq.distanceOrScreenCoverage ? -qq : 0))
+       onAfterRender(CC, zC, ZC) {
+         var QC;
+         const wC = null === (QC = CC.XzC(zC)) || void 0 === QC ? void 0 : QC.name;
+         if (wC !== oQ && wC !== fQ) return void("" !== this.shownKey && this.show(CC, "", []));
+         const bC = performance.now();
+         if (bC - this.lastCheckMs >= 200 && (this.lastCheckMs = bC, wC === oQ ? this.check(CC, ZC) : this.preview(CC, ZC)), this.pulses.length > 0) {
+           const zC = 1 + .12 * Math.sin(bC / 1e3 * 1.25 * Math.PI * 2),
+             ZC = [zC, zC, zC];
+           for (const QC of this.pulses) CC.setGameMesh(QC, {
+             scale: ZC
+           })
+         }
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4838-L4841` → after: `L15785-L15786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15785-L15786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15785-L15786) · [Before (L4838-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4838-L4841)

```diff
-       addLODLevel(qq, Eq) {
-         if (Eq && Eq._masterMesh) return Gq.b.Warn("You cannot use a mesh as LOD level twice"), this;
-         const gq = new Rq(qq, Eq);
-         return this._internalMeshDataInfo._LODLevels.push(gq), Eq && (Eq._masterMesh = this), this._sortLODLevels(), this
+       dispose(CC) {
+         this.clear(CC), this.shownKey = ""
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4843-L4847` → after: `L15788-L15795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15788-L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15788-L15795) · [Before (L4843-L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4843-L4847)

```diff
-       getLODLevelAtDistance(qq) {
-         const Eq = this._internalMeshDataInfo;
-         for (let gq = 0; gq < Eq._LODLevels.length; gq++) {
-           const Yq = Eq._LODLevels[gq];
-           if (Yq.distanceOrScreenCoverage === qq) return Yq.mesh
+       check(CC, zC) {
+         const ZC = nP(CC),
+           QC = [];
+         for (const {
+             entry: bC
+           }
+           of this.store.colliders()) {
+           bC.focus.every(((CC, ZC) => Math.abs(CC + .5 - zC[ZC]) <= nQ.GHOST_REACH)) && QC.push(Qq(bC, ZC))
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4849` → after: `L15797-L15798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15797-L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15797-L15798) · [Before (L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4849)

```diff
-         return null
+         const wC = fP(QC);
+         wC !== this.shownKey && this.show(CC, wC, QC)
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4851-L4875` → after: `L15800-L15820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15800-L15820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15800-L15820) · [Before (L4851-L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4851-L4875)

```diff
-       removeLODLevel(qq) {
-         const Eq = this._internalMeshDataInfo;
-         for (let gq = 0; gq < Eq._LODLevels.length; gq++) Eq._LODLevels[gq].mesh === qq && (Eq._LODLevels.splice(gq, 1), qq && (qq._masterMesh = null));
-         return this._sortLODLevels(), this
-       }
-       getLOD(qq, Eq) {
-         const gq = this._internalMeshDataInfo;
-         if (!gq._LODLevels || 0 === gq._LODLevels.length) return this;
-         const Yq = Eq || this.yR().DYq,
-           lq = qq.mode === tq.e.ORTHOGRAPHIC_CAMERA ? qq.minZ : Yq.centerWorld.subtract(qq.globalPosition).length();
-         let Oq = lq,
-           mq = 1;
-         if (gq._useLODScreenCoverage) {
-           const Eq = qq.screenArea;
-           let gq = Yq.radiusWorld * qq.minZ / lq;
-           gq = gq * gq * Math.PI, Oq = gq / Eq, mq = -1
- ... (9 more removed lines; see GitHub link above)
+       preview(CC, zC) {
+         const ZC = CC.getTargetedBlock(),
+           QC = ZC ? [ZC.wp[0], ZC.wp[1], ZC.wp[2]] : null,
+           wC = null !== QC && QC.every(((CC, ZC) => Math.abs(CC + .5 - zC[ZC]) <= 8)),
+           bC = this.store.site(),
+           nC = wC && bC ? function(CC, zC, ZC) {
+             const QC = gQ(CC);
+             if (!QC.every(zC)) return null;
+             const wC = RQ(CC, ZC);
+             return {
+               column: QC,
+               spots: Qq({
+                 focus: QC[1],
+                 lasers: [!1, !1, !1, !1],
+                 open: wC,
+                 live: [!1, !1, !1, !1],
+ ... (5 more added lines; see GitHub link above)
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4877` → after: `L15822-L15846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15822-L15846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15822-L15846) · [Before (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4877)

```diff
-             return this.onLODLevelSelection && this.onLODLevelSelection(Oq, this, qq.mesh), qq.mesh
+           }(QC, nP(CC), bC) : null,
+           fC = nC ? [nC.spots] : [],
+           oC = nC ? `preview ${QC.join(",")}|${nC.fits}|${fP(fC)}` : "";
+         var qC, FC;
+         oC !== this.shownKey && this.show(CC, oC, fC, null !== (qC = null === nC || void 0 === nC ? void 0 : nC.column) && void 0 !== qC ? qC : [], null === (FC = null === nC || void 0 === nC ? void 0 : nC.fits) || void 0 === FC || FC)
+       }
+       show(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
+           wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
+         this.clear(CC), this.shownKey = zC, QC.length > 0 && this.meshes.push(oP(CC, QC, jp(wC ? QP : ZP)));
+         for (const {
+             free: bC,
+             blocked: nC,
+             gaps: fC,
+             supports: oC
+           }
+ ... (9 more added lines; see GitHub link above)
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4896-L4897` → after: `L15851-L15853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15851-L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15851-L15853) · [Before (L4896-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4896-L4897)

```diff
-       getVertexBuffer(qq, Eq) {
-         return this._geometry ? (Eq ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[qq]) ?? this._geometry.getVertexBuffer(qq) : null
+       clear(CC) {
+         for (const zC of this.meshes) CC.disposeGameMesh(zC);
+         this.meshes = [], this.pulses = []
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4899-L4908` → after: `L15855-L15858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15855-L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15855-L15858) · [Before (L4899-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4899-L4908)

```diff
-       isVerticesDataPresent(qq, Eq) {
-         return this._geometry ? !Eq && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[qq] || this._geometry.isVerticesDataPresent(qq) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(qq)
-       }
-       isVertexBufferUpdatable(qq, Eq) {
-         if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(qq);
-         if (!Eq) {
-           const Eq = this._userInstancedBuffersStorage?.vertexBuffers[qq];
-           if (Eq) return Eq.isUpdatable()
-         }
-         return this._geometry.isVertexBufferUpdatable(qq)
+     }
+     class FP {
+       constructor() {
+         this.stored = new Map, this.vq = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4910-L4920` → after: `L15860-L15899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15860-L15899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15860-L15899) · [Before (L4910-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4910-L4920)

```diff
-       getVerticesDataKinds(qq) {
-         if (!this._geometry) {
-           const qq = [];
-           if (this._delayInfo)
-             for (const Eq of this._delayInfo) qq.push(Eq);
-           return qq
-         }
-         const Eq = this._geometry.getVerticesDataKinds();
-         if (!qq && this._userInstancedBuffersStorage)
-           for (const gq in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Eq.indexOf(gq) && Eq.push(gq);
-         return Eq
+       apply(CC) {
+         if (!CC.baf2TermOpen) return !1;
+         CC.baf2TermReset && (this.stored.clear(), this.pending = []);
+         for (const [zC, ZC] of CC.baf2TermItems) ZC > 0 ? this.stored.set(zC, ZC) : this.stored.delete(zC);
+         if (CC.baf2TermHeld && (this.vq = new Map(CC.baf2TermHeld)), this.pending = this.pending.filter((zC => zC.seq > CC.baf2TermAcked)), this.silos = CC.baf2TermSilos, this.readOnly = CC.baf2TermReadOnly, this.pocket = !0 === CC.baf2TermPocket, CC.baf2TermReset) this.resort();
+         else {
+           const CC = new Set(this.order);
+           for (const zC of this.stored.keys()) CC.has(zC) || this.order.push(zC)
+         }
+         return this.changed(), !0
+       }
+       resort() {
+         this.order = [...this.stored.keys()].sort(((CC, zC) => this.amount(zC) - this.amount(CC) || CC.localeCompare(zC))), this.changed()
+       }
+       take(CC, zC) {
+         const ZC = fz(CC, this.amount(zC));
+ ... (24 more added lines; see GitHub link above)
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4922-L4972` → after: `L15901-L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15901-L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15901-L15905) · [Before (L4922-L4972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4922-L4972)

```diff
-       getTotalIndices() {
-         return this._geometry ? this._geometry.getTotalIndices() : 0
-       }
-       iYq(qq, Eq) {
-         return this._geometry ? this._geometry.iYq(qq, Eq) : []
-       }
-       get isBlocked() {
-         return null !== this._masterMesh && void 0 !== this._masterMesh
-       }
-       isReady() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (2 === this.delayLoadState) return !1;
-         if (!super.isReady(qq)) return !1;
-         if (!this.fn || 0 === this.fn.length) return !0;
-         if (!qq) return !0;
- ... (35 more removed lines; see GitHub link above)
+       amount(CC) {
+         var zC;
+         let ZC = null !== (zC = this.stored.get(CC)) && void 0 !== zC ? zC : 0;
+         for (const QC of this.pending) QC.item === CC && (ZC += QC.put ? QC.amount : -QC.amount);
+         return Math.max(0, ZC)
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4974-L4975` → after: `L15907-L15911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15907-L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15907-L15911) · [Before (L4974-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4974-L4975)

```diff
-       get areNormalsFrozen() {
-         return this._internalMeshDataInfo._areNormalsFrozen
+       heldAmount(CC) {
+         var zC;
+         let ZC = null !== (zC = this.vq.get(CC)) && void 0 !== zC ? zC : 0;
+         for (const QC of this.pending) QC.put && QC.item === CC && (ZC -= QC.amount);
+         return Math.max(0, ZC)
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4977-L5048` → after: `L15913-L15915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15913-L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15913-L15915) · [Before (L4977-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4977-L5048)

```diff
-       ja() {
-         return this._internalMeshDataInfo._areNormalsFrozen = !0, this
-       }
-       unfreezeNormals() {
-         return this._internalMeshDataInfo._areNormalsFrozen = !1, this
-       }
-       set overridenInstanceCount(qq) {
-         this._instanceDataStorage.overridenInstanceCount = qq
-       }
-       _getInstanceDataStorage() {
-         if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
-         const qq = this._instanceDataStorage.engine.currentRenderPassId;
-         let Eq = this._instanceDataStorage.renderPasses[qq];
-         return Eq || (Eq = new Fq, this._instanceDataStorage.renderPasses[qq] = Eq), Eq
-       }
-       _preActivate() {
- ... (56 more removed lines; see GitHub link above)
+       heldItems() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         return this.order.filter((zC => zC === CC || this.heldAmount(zC) > 0))
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5050-L5294` → after: `L15917-L15918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15917-L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15917-L15918) · [Before (L5050-L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5050-L5294)

```diff
-       subdivide(qq) {
-         if (qq < 1) return;
-         const Eq = this.getTotalIndices();
-         let gq = Eq / qq | 0,
-           Yq = 0;
-         for (; gq % 3 !== 0;) gq++;
-         this.releaseSubMeshes();
-         for (let lq = 0; lq < qq && !(Yq >= Eq); lq++) fq.c.CreateFromIndices(0, Yq, Yq + gq >= Eq ? Eq - Yq : gq, this, void 0, !1), Yq += gq;
-         this.refreshBoundingInfo(), this.synchronizeInstances()
-       }
-       setVerticesData(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           Yq = arguments.length > 3 ? arguments[3] : void 0;
-         if (this._geometry) this._geometry.setVerticesData(qq, Eq, gq, Yq);
-         else {
-           const Yq = new bq.d;
- ... (229 more removed lines; see GitHub link above)
+       items() {
+         return this.order.filter((CC => this.amount(CC) > 0))
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5296-L5298` → after: `L15920-L15921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15920-L15921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15920-L15921) · [Before (L5296-L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5296-L5298)

```diff
-       _disposeInstanceDataStorageRenderPass(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         qq?.instancesBuffer && (Eq && qq.instancesBuffer.dispose(), qq.instancesBuffer = null), qq?.instancesPreviousBuffer && (Eq && qq.instancesPreviousBuffer.dispose(), qq.instancesPreviousBuffer = null)
+       recent() {
+         return this.recents.filter((CC => this.amount(CC) > 0))
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5300-L5313` → after: `L15923-L15924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15923-L15924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15923-L15924) · [Before (L5300-L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5300-L5313)

```diff
-       _rebuild() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const Eq in this._instanceDataStorage.renderPasses) {
-           const gq = this._instanceDataStorage.renderPasses[Eq];
-           this._disposeInstanceDataStorageRenderPass(gq, qq)
-         }
-         if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, qq), this._userInstancedBuffersStorage) {
-           for (const Eq in this._userInstancedBuffersStorage.vertexBuffers) {
-             const gq = this._userInstancedBuffersStorage.vertexBuffers[Eq];
-             gq && (qq && gq.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Eq] = null)
-           }
-           this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
-         }
-         this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(qq)
+       siloCount() {
+         return this.silos
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5315-L5478` → after: `L15926-L15927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15926-L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15926-L15927) · [Before (L5315-L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5315-L5478)

```diff
-       _releaseRenderPassId(qq) {
-         const Eq = this._instanceDataStorage.renderPasses[qq];
-         if (Eq && (this._disposeInstanceDataStorageRenderPass(Eq, !0), delete this._instanceDataStorage.renderPasses[qq]), this._userInstancedBuffersStorage?.renderPasses) {
-           const Eq = this._userInstancedBuffersStorage.renderPasses[qq];
-           if (Eq)
-             for (const qq in Eq) Eq[qq]?.dispose();
-           delete this._userInstancedBuffersStorage.renderPasses[qq]
-         }
-         const gq = this._userInstancedBuffersStorage?.interleavedBuffers;
-         gq?.[qq] && (gq[qq].buffer.dispose(), delete gq[qq])
-       }
-       _freeze() {
-         if (this.fn) {
-           for (let qq = 0; qq < this.fn.length; qq++) this._getInstancesRenderList(qq);
-           this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
-         }
- ... (148 more removed lines; see GitHub link above)
+       isReadOnly() {
+         return this.readOnly
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5480-L5492` → after: `L15929-L15930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15929-L15930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15929-L15930) · [Before (L5480-L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5480-L5492)

```diff
-       _normalizeSkinWeightsAndExtra() {
-         const qq = this.getVerticesData(nq.g.MatricesWeightsExtraKind),
-           Eq = this.getVerticesData(nq.g.MatricesWeightsKind),
-           gq = Eq.length;
-         for (let Yq = 0; Yq < gq; Yq += 4) {
-           let gq = Eq[Yq] + Eq[Yq + 1] + Eq[Yq + 2] + Eq[Yq + 3];
-           if (gq += qq[Yq] + qq[Yq + 1] + qq[Yq + 2] + qq[Yq + 3], 0 === gq) Eq[Yq] = 1;
-           else {
-             const lq = 1 / gq;
-             Eq[Yq] *= lq, Eq[Yq + 1] *= lq, Eq[Yq + 2] *= lq, Eq[Yq + 3] *= lq, qq[Yq] *= lq, qq[Yq + 1] *= lq, qq[Yq + 2] *= lq, qq[Yq + 3] *= lq
-           }
-         }
-         this.setVerticesData(nq.g.MatricesWeightsKind, Eq), this.setVerticesData(nq.g.MatricesWeightsKind, qq)
+       isPocket() {
+         return this.pocket
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5494-L5538` → after: `L15932-L15934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15932-L15934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15932-L15934) · [Before (L5494-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5494-L5538)

```diff
-       validateSkinning() {
-         const qq = this.getVerticesData(nq.g.MatricesWeightsExtraKind),
-           Eq = this.getVerticesData(nq.g.MatricesWeightsKind);
-         if (null === Eq || null == this.skeleton) return {
-           skinned: !1,
-           valid: !0,
-           SN: "not skinned"
-         };
-         const gq = Eq.length;
-         let Yq = 0,
-           lq = 0,
-           Oq = 0,
-           mq = 0;
-         const xq = null === qq ? 4 : 8,
-           Aq = [];
-         for (let Nq = 0; Nq <= xq; Nq++) Aq[Nq] = 0;
- ... (29 more removed lines; see GitHub link above)
+       subscribe(CC) {
+         return this.listeners.add(CC), () => {
+           this.listeners.delete(CC)
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5541-L5543` → after: `L15937-L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15937-L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15937-L15939) · [Before (L5541-L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5541-L5543)

```diff
-       _checkDelayState() {
-         const qq = this.ZJ();
-         return this._geometry ? this._geometry.load(qq) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(qq)), this
+       changed() {
+         this.version++;
+         for (const CC of this.listeners) CC()
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5545-L5616` → after: `L15941-L15971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15941-L15971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15941-L15971) · [Before (L5545-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5545-L5616)

```diff
-       _queueLoad(qq) {
-         qq.addPendingData(this);
-         const Eq = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
-         return (async () => {
-           try {
-             const gq = await qq._loadDelayedFileAsync(this.delayLoadingFile, Eq, !0);
-             gq instanceof ArrayBuffer ? this._delayLoadingFunction(gq, this) : this._delayLoadingFunction(JSON.parse(gq), this);
-             for (const qq of this.instances) qq.refreshBoundingInfo(), qq._syncSubMeshes();
-             this.delayLoadState = 1, qq.removePendingData(this)
-           } catch (gq) {
-             qq.removePendingData(this), qq.bM || Gq.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${gq}`)
-           }
-         })(), this
-       }
-       isInFrustum(qq) {
-         return 2 !== this.delayLoadState && (!!super.isInFrustum(qq) && (this._checkDelayState(), !0))
- ... (56 more removed lines; see GitHub link above)
+     }
+     var WP = ZC(38256);
+     const NP = {
+       isBlock: CC => void 0 !== dC.g[CC],
+       harvestType: CC => {
+         var zC;
+         return null === (zC = dC.g[CC]) || void 0 === zC ? void 0 : zC.harvestType
+       },
+       harvestLevel: CC => {
+         var zC;
+         return null === (zC = dC.g[CC]) || void 0 === zC ? void 0 : zC.harvestLevel
+       },
+       dropsNothing: CC => {
+         var zC;
+         return null === (null === (zC = dC.g[CC]) || void 0 === zC ? void 0 : zC.drops)
+       },
+ ... (15 more added lines; see GitHub link above)
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5618-L5686` → after: `L15973-L16047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15973-L16047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15973-L16047) · [Before (L5618-L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5618-L5686)

```diff
-       dispose(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
-         const gq = this._internalMeshDataInfo;
-         if (gq._onBeforeDrawObservable && gq._onBeforeDrawObservable.clear(), gq._onBeforeBindObservable && gq._onBeforeBindObservable.clear(), gq._onBeforeRenderObservable && gq._onBeforeRenderObservable.clear(), gq._onAfterRenderObservable && gq._onAfterRenderObservable.clear() … [truncated]
-           if (gq.meshMap)
-             for (const qq in gq.meshMap) {
-               const Eq = gq.meshMap[qq];
-               Eq && (Eq._internalMeshDataInfo._source = null, gq.meshMap[qq] = void 0)
-             }
-           gq._source && gq._source._internalMeshDataInfo.meshMap && (gq._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
-         } else {
-           const qq = this.ZJ().meshes;
-           for (const Eq of qq) {
-             const qq = Eq;
-             qq._internalMeshDataInfo && qq._internalMeshDataInfo._source && qq._internalMeshDataInfo._source === this && (qq._internalMeshDataInfo._source = null)
- ... (53 more removed lines; see GitHub link above)
+     };
+ 
+     function MP(CC, zC, ZC) {
+       return function(CC, zC, ZC, QC) {
+         var wC, bC;
+         const nC = zC.split("|")[0],
+           fC = CC.isBlock(zC) ? zC : CC.isBlock(nC) ? nC : null;
+         if (null === fC || "rock" !== CC.harvestType(fC) || CC.dropsNothing(fC) && !uQ.has(nC)) return null;
+         const oC = ZC && "rock" === CC.harvests(ZC) ? null !== (wC = CC.level(ZC)) && void 0 !== wC ? wC : 0 : null,
+           qC = null !== (bC = null !== QC && void 0 !== QC ? QC : CC.harvestLevel(fC)) && void 0 !== bC ? bC : 0;
+         return (null !== oC ? qC <= oC : 0 === CC.harvestLevel(fC)) ? null : eQ(CC, qC)
+       }(NP, CC, zC, ZC)
+     }
+ 
+     function gP(CC, zC) {
+       return function(CC, zC, ZC) {
+ ... (59 more added lines; see GitHub link above)
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5688-L5795` → after: `L16049-L16100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16049-L16100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16049-L16100) · [Before (L5688-L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5688-L5795)

```diff
-       _convertToUnIndexedMesh() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const Eq = this.getVerticesDataKinds().filter((qq => !this.getVertexBuffer(qq)?.getIsInstanced())),
-           gq = this.iYq(!1, !0),
-           Yq = {},
-           lq = (qq, Eq) => {
-             const Yq = new Float32Array(gq.length * Eq);
-             let lq = 0;
-             for (let Oq = 0; Oq < gq.length; Oq++)
-               for (let mq = 0; mq < Eq; mq++) Yq[lq++] = qq[gq[Oq] * Eq + mq];
-             return Yq
-           },
-           Oq = this.yR(),
-           mq = this.geometry ? this.fn.slice(0) : [];
-         for (const xq of Eq) Yq[xq] = this.getVerticesData(xq);
-         for (const xq of Eq) {
- ... (92 more removed lines; see GitHub link above)
+       onAfterRender(CC, zC, ZC) {
+         var QC, wC, bC;
+         let nC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         const fC = null !== (QC = null === (wC = CC.XzC(zC)) || void 0 === wC ? void 0 : wC.name) && void 0 !== QC ? QC : null,
+           oC = CC.isPlayerCrouching(zC),
+           qC = 0 === ZC ? null : this.resolve(CC, ZC),
+           FC = null !== qC && null !== nC && JP.has(qC.rootName) && function(CC, zC) {
+             return IP.some((ZC => {
+               let [QC, wC] = ZC;
+               const bC = CC.getBlockId(zC[0] + QC, zC[1], zC[2] + wC);
+               return 0 !== bC && "Express Belt" === CC.getMetaInfo(bC).rootName
+             }))
+           }(CC, nC),
+           WC = this.updatePlan(0 === ZC ? null : nC),
+           NC = this.tierOf(),
+           MC = null === nC ? null : (0, WP.f)(ZC),
+ ... (36 more added lines; see GitHub link above)
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5797-L5847` → after: `L16102-L16129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16102-L16129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16102-L16129) · [Before (L5797-L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5797-L5847)

```diff
-           Eq.indices = Nq, Eq.applyToMesh(this, this.isVertexBufferUpdatable(nq.g.PositionKind))
-         } else Gq.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
-       }
-       forceSharedVertices() {
-         const qq = bq.d.ExtractFromMesh(this),
-           Eq = qq.uvs,
-           gq = qq.indices,
-           Yq = qq.positions,
-           lq = qq.colors,
-           Oq = qq.matricesIndices,
-           mq = qq.matricesWeights,
-           xq = qq.matricesIndicesExtra,
-           Aq = qq.matricesWeightsExtra;
-         if (void 0 === gq || void 0 === Yq || null === gq || null === Yq) Gq.b.Warn("VertexData contains empty entries");
-         else {
-           const cq = [],
- ... (35 more removed lines; see GitHub link above)
+         }(qC.rootName, fC) : null;
+         this.targetsLive = !0 === (null === qC || void 0 === qC ? void 0 : qC.live) && null !== nC;
+         let GC = null;
+         this.targetsLive && qC && nC && this.live && (this.livePos[0] = nC[0], this.livePos[1] = nC[1], this.livePos[2] = nC[2], this.liveVersion = this.live.version(), GC = this.live.line(qC.rootName, nC));
+         const RC = null === pC ? GP : function(CC, zC, ZC) {
+             const QC = function(CC, zC, ZC) {
+               const QC = HZ(CC);
+               if (null === QC) return null;
+               const wC = `${SP}lookPortMode_${QC}`,
+                 bC = TQ(zC);
+               if (bC && ZC) return {
+                 mode: null,
+                 detail: wC,
+                 next: `${SP}lookWrenchPickUp`,
+                 nextState: null
+               };
+ ... (12 more added lines; see GitHub link above)
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5849-L5851` → after: `L16131-L16157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16131-L16157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16131-L16157) · [Before (L5849-L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5849-L5851)

```diff
-           }
-           const yq = [];
-           bq.d.ComputeNormals(cq, uq, yq), qq.positions = cq, qq.indices = uq, qq.normals = yq, null !== Eq && void 0 !== Eq && (qq.uvs = Bq), null !== lq && void 0 !== lq && (qq.colors = Wq), null !== Oq && void 0 !== Oq && (qq.matricesIndices = Nq), null !== mq && void 0 !== mq … [truncated]
+             }(CC, zC, ZC);
+             if (null !== QC) return QC;
+             const wC = Zw(CC, zC, ZC);
+             return null === wC.mode && null === wC.next ? GP : wC
+           }(CC.blockIdToBlockName(ZC), fC, oC),
+           AC = this.plan,
+           xC = qC && pC ? this.rowsOf(qC.rootName, NC) : RP,
+           JC = this.snapshot;
+         if (!(null === pC ? !JC.visible : JC.visible && pC === JC.info && (IC = PC, iC = JC.tool, IC === iC || null !== IC && null !== iC && IC.key === iC.key && IC.vq === iC.vq && IC.needed === iC.needed) && function(CC, zC) {
+             return CC === zC || null !== CC && null !== zC && CC.key === zC.key && JSON.stringify([CC.params, CC.keys]) === JSON.stringify([zC.params, zC.keys])
+           }(GC, JC.live) && function(CC, zC) {
+             return CC.mode === zC.mode && CC.detail === zC.detail && CC.next === zC.next && CC.nextState === zC.nextState
+           }(RC, JC.wrench) && zS(AC, JC.plan) && xC === JC.atomic)) {
+           var IC, iC;
+           this.snapshot = null === pC ? {
+             ...JC,
+ ... (11 more added lines; see GitHub link above)
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5854-L5858` → after: `L16160-L16161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16160-L16161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16160-L16161) · [Before (L5854-L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5854-L5858)

```diff
-       static _instancedMeshFactory(qq, Eq) {
-         throw (0, Jq.m)("InstancedMesh")
-       }
-       static _PhysicsImpostorParser(qq, Eq, gq) {
-         throw (0, Jq.m)("PhysicsImpostor")
+       get() {
+         return this.snapshot
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5860-L5866` → after: `L16163-L16165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16163-L16165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16163-L16165) · [Before (L5860-L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5860-L5866)

```diff
-       createInstance(qq) {
-         const Eq = Iq._instancedMeshFactory(qq, this);
-         return Eq.parent = this.parent, Eq
-       }
-       synchronizeInstances() {
-         for (let qq = 0; qq < this.instances.length; qq++) {
-           this.instances[qq]._syncSubMeshes()
+       subscribe(CC) {
+         return this.listeners.add(CC), () => {
+           this.listeners.delete(CC)
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5870-L5975` → after: `L16168-L16215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16168-L16215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16168-L16215) · [Before (L5870-L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5870-L5975)

```diff
-       optimizeIndices(qq) {
-         const Eq = this.iYq(),
-           gq = this.getVerticesData(nq.g.PositionKind);
-         if (!gq || !Eq) return this;
-         const Yq = [];
-         for (let Oq = 0; Oq < gq.length; Oq += 3) Yq.push(rq.q.FromArray(gq, Oq));
-         const lq = [];
-         return Hq.b.SyncAsyncForLoop(Yq.length, 40, (qq => {
-           const Eq = Yq.length - 1 - qq,
-             gq = Yq[Eq];
-           for (let Oq = 0; Oq < Eq; ++Oq) {
-             const qq = Yq[Oq];
-             if (gq.equals(qq)) {
-               lq[Eq] = Oq;
-               break
-             }
- ... (90 more removed lines; see GitHub link above)
+       dispose() {
+         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = AP, this.SF = 0, this.vq = null, this.expr … [truncated]
+       }
+       readAfloat(CC, zC, ZC) {
+         if (null === ZC || 0 === zC || !fC() || !PP(this.resolve(CC, zC).rootName)) return !1;
+         const QC = `${ZC[0]},${ZC[1]},${ZC[2]},${zC}`,
+           wC = performance.now();
+         return QC === this.afloatKey && wC - this.afloatAt < vP ? this.afloat : (this.afloatKey = QC, this.afloatAt = wC, function(CC, zC) {
+           for (const [ZC, QC, wC] of pP) {
+             const bC = zC(CC[0] + ZC, CC[1] + QC, CC[2] + wC);
+             if (void 0 === bC || null !== bC && !PP(bC)) return !1
+           }
+           return !0
+         }(ZC, ((zC, ZC, QC) => function(CC, zC, ZC, QC) {
+           if (!CC.isBlockInLoadedChunk(zC, ZC, QC)) return;
+           const wC = CC.getBlockId(zC, ZC, QC);
+ ... (32 more added lines; see GitHub link above)
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L5978-L6000` → after: `L16219-L16254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16219-L16254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16219-L16254) · [Before (L5978-L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L5978-L6000)

```diff
-       static Parse(qq, Eq, gq) {
-         let Yq, lq = !1;
-         if (qq.type && "LinesMesh" === qq.type ? Yq = Iq._LinesMeshParser(qq, Eq) : qq.type && "GroundMesh" === qq.type ? Yq = Iq._GroundMeshParser(qq, Eq) : qq.type && "GoldbergMesh" === qq.type ? Yq = Iq._GoldbergMeshParser(qq, Eq) : qq.type && "GreasedLineMesh" === qq.type ? Y … [truncated]
-           for (let Eq = 0; Eq < qq.animations.length; Eq++) {
-             const gq = qq.animations[Eq],
-               lq = (0, Lq.e)("BABYLON.Animation");
-             lq && Yq.animations.push(lq.Parse(gq))
-           }
-           hq.c.ParseAnimationRanges(Yq, qq, Eq)
-         }
-         if (qq.autoAnimate && Eq.beginAnimation(Yq, qq.autoAnimateFrom, qq.autoAnimateTo, qq.autoAnimateLoop, qq.autoAnimateSpeed || 1), qq.layerMask && !isNaN(qq.layerMask) ? Yq.layerMask = Math.abs(parseInt(qq.layerMask)) : Yq.layerMask = 268435455, qq.physicsImpostor && (Yq.ph … [truncated]
-             ids: qq.lodMeshIds,
-             distances: qq.lodDistances ? qq.lodDistances : null,
-             coverages: qq.lodCoverages ? qq.lodCoverages : null
-           }), qq.instances)
-           for (let Oq = 0; Oq < qq.instances.length; Oq++) {
- ... (7 more removed lines; see GitHub link above)
+       hanging(CC) {
+         let {
+           info: zC,
+           rootName: ZC
+         } = CC;
+         if (null === zC) return null;
+         let QC = this.afloatByRoot.get(ZC);
+         return void 0 === QC && (QC = {
+           ...zC,
+           detail: `${xP}lookOreAfloat`,
+           detailItem: null
+         }, this.afloatByRoot.set(ZC, QC)), QC
+       }
+       rowsOf(CC, zC) {
+         if (null === zC) return RP;
+         const ZC = `${CC}|${zC}`;
+ ... (20 more added lines; see GitHub link above)
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6002-L6010` → after: `L16256-L16258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16256-L16258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16256-L16258) · [Before (L6002-L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6002-L6010)

```diff
-               hq.c.ParseAnimationRanges(lq, gq, Eq), gq.autoAnimate && Eq.beginAnimation(lq, gq.autoAnimateFrom, gq.autoAnimateTo, gq.autoAnimateLoop, gq.autoAnimateSpeed || 1)
-             }
-           }
-         if (qq.thinInstances) {
-           const Eq = qq.thinInstances;
-           if (Yq.eEq = !!Eq.enablePicking, Eq.matrixData ? (Yq.cqq("matrix", new Float32Array(Eq.matrixData), 16, !1), Yq._thinInstanceDataStorage.matrixBufferSize = Eq.matrixBufferSize, Yq._thinInstanceDataStorage.instancesCount = Eq.instancesCount) : Yq._thinInstanceDataStorage … [truncated]
-             const Eq = qq.thinInstances.userThinInstance;
-             for (const qq in Eq.data) Yq.cqq(qq, new Float32Array(Eq.data[qq]), Eq.strides[qq], !1), Yq._userThinInstanceBuffersStorage.sizes[qq] = Eq.sizes[qq]
-           }
+             }))
+           }(CC, zC);
+           QC = wC.length > 0 ? wC : RP, this.rowsByKey.set(ZC, QC)
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6014-L6069` → after: `L16262-L16279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16262-L16279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16262-L16279) · [Before (L6014-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6014-L6069)

```diff
-       setPositionsForCPUSkinning() {
-         const qq = this._internalMeshDataInfo;
-         if (!qq._sourcePositions) {
-           const Eq = this.getVerticesData(nq.g.PositionKind);
-           if (!Eq) return qq._sourcePositions;
-           qq._sourcePositions = new Float32Array(Eq), this.isVertexBufferUpdatable(nq.g.PositionKind) || this.setVerticesData(nq.g.PositionKind, Eq, !0)
-         }
-         return qq._sourcePositions
-       }
-       setNormalsForCPUSkinning() {
-         const qq = this._internalMeshDataInfo;
-         if (!qq._sourceNormals) {
-           const Eq = this.getVerticesData(nq.g.NormalKind);
-           if (!Eq) return qq._sourceNormals;
-           qq._sourceNormals = new Float32Array(Eq), this.isVertexBufferUpdatable(nq.g.NormalKind) || this.setVerticesData(nq.g.NormalKind, Eq, !0)
-         }
- ... (40 more removed lines; see GitHub link above)
+       resolve(CC, zC) {
+         const {
+           rootId: ZC,
+           rootName: QC
+         } = CC.getMetaInfo(zC), wC = (0, gZ.h)(QC) ? zC : ZC;
+         let bC = this.byRootId.get(wC);
+         const nC = fC();
+         if (void 0 === bC || bC.nuclear !== nC) {
+           var oC;
+           const ZC = function(CC) {
+             return XQ(NP, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC)
+           }(QC, CC.blockIdToBlockName(zC));
+           bC = {
+             info: ZC,
+             rootName: QC,
+             live: null !== ZC && !0 === (null === (oC = this.live) || void 0 === oC ? void 0 : oC.handles(QC)),
+ ... (2 more added lines; see GitHub link above)
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6071` → after: `L16281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16281) · [Before (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6071)

```diff
-         return this.updateVerticesData(nq.g.PositionKind, Yq), Eq && this.updateVerticesData(nq.g.NormalKind, lq), this
+         return bC
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6073-L6165` → after: `L16283-L16417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16283-L16417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16283-L16417) · [Before (L6073-L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6073-L6165)

```diff
-       static MinMax(qq) {
-         let Eq = null,
-           gq = null;
-         for (const Yq of qq) {
-           const qq = Yq.yR().boundingBox;
-           Eq && gq ? (Eq.minimizeInPlace(qq.minimumWorld), gq.maximizeInPlace(qq.maximumWorld)) : (Eq = qq.minimumWorld.clone(), gq = qq.maximumWorld.clone())
-         }
-         return Eq && gq ? {
-           min: Eq,
-           max: gq
-         } : {
-           min: rq.q.Zero(),
-           max: rq.q.Zero()
-         }
-       }
-       static Center(qq) {
- ... (77 more removed lines; see GitHub link above)
+     }
+     const vP = 500;
+     const eP = (0, QC.memo)((function(CC) {
+       var zC, ZC;
+       let {
+         store: wC
+       } = CC;
+       const {
+         t: bC
+       } = (0, ew.y)(), [nC, fC] = (0, QC.useState)((() => wC.get()));
+       (0, QC.useEffect)((() => (fC(wC.get()), wC.subscribe((() => {
+         fC(wC.get())
+       })))), [wC]);
+       const {
+         openInGameMenuName: oC,
+         openEverythingMenuName: qC,
+ ... (119 more added lines; see GitHub link above)
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6167-L6173` → after: `L16419-L16448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16419-L16448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16419-L16448) · [Before (L6167-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6167-L6173)

```diff
-           Bq.length = qq + 1, uq.length = qq + 1
-         }
-         const Nq = qq => {
-             const Eq = qq.computeWorldMatrix(!0);
-             return {
-               vertexData: bq.d.ExtractFromMesh(qq, !1, !1),
-               transform: Eq
+       }
+       onAfterRender(CC, zC) {
+         this.indexed || this.index(CC);
+         const ZC = performance.now();
+         if (ZC - this.lastCheckMs < 100) return;
+         this.lastCheckMs = ZC, this.checks++;
+         const QC = Jg.f.Ig,
+           [wC, bC, nC] = mP(zC, QC);
+         let fC = !1;
+         const oC = [];
+         let qC = 0;
+         for (let FC = wC - 2; FC <= wC + 2; FC++)
+           for (let zC = bC - 1; zC <= bC + 1; zC++)
+             for (let wC = nC - 2; wC <= nC + 2; wC++) {
+               const bC = qC++,
+                 nC = HP(FC, zC, wC),
+ ... (14 more added lines; see GitHub link above)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6175-L6204` → after: `L16450-L16455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16450-L16455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16450-L16455) · [Before (L6175-L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6175-L6204)

```diff
-           },
-           {
-             vertexData: aq,
-             transform: Vq
-           } = Nq(qq[0]);
-         xq && (yield);
-         const dq = new Array(qq.length - 1);
-         for (let yq = 1; yq < qq.length; yq++) dq[yq - 1] = Nq(qq[yq]), xq && (yield);
-         const jq = aq._mergeCoroutine(Vq, dq, Yq, xq, !gq);
-         let Hq = jq.next();
-         for (; !Hq.done;) xq && (yield), Hq = jq.next();
-         const oq = Hq.value;
-         lq || (lq = new Iq(Aq.name + "_merged", Aq.ZJ()));
-         const Pq = oq._applyToCoroutine(lq, void 0, xq);
-         let Qq = Pq.next();
-         for (; !Qq.done;) xq && (yield), Qq = Pq.next();
- ... (14 more removed lines; see GitHub link above)
+         this.scanDue(CC, oC) && (fC = !0);
+         for (const [FC, WC] of this.chunks) WC.seenAt !== this.checks && (fC ||= WC.machines.length > 0, this.chunks.delete(FC));
+         for (const FC of this.chunks.values())
+           for (const [zC, ZC, QC] of FC.cellChunks)(Math.abs(zC - wC) > 2 || Math.abs(ZC - bC) > 1 || Math.abs(QC - nC) > 2) && this.watchCellChunk(CC, zC, ZC, QC) && (fC = !0);
+         for (const [FC, WC] of this.cellChunks) WC.seenAt !== this.checks && this.cellChunks.delete(FC);
+         fC && this.refresh(CC)
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6206-L6214` → after: `L16457-L16476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16457-L16476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16457-L16476) · [Before (L6206-L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6206-L6214)

```diff
-       Z5(qq) {
-         qq._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(qq)
-       }
-       qqq(qq) {
-         const Eq = qq._indexInSourceMeshInstanceArray;
-         if (-1 != Eq) {
-           if (Eq !== this.instances.length - 1) {
-             const qq = this.instances[this.instances.length - 1];
-             this.instances[Eq] = qq, qq._indexInSourceMeshInstanceArray = Eq
+       dispose(CC) {
+         this.clearMeshes(CC), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
+       }
+       scanDue(CC, zC) {
+         const ZC = Math.max(zC.findIndex((CC => {
+           let {
+             slot: zC
+           } = CC;
+           return zC >= this.scanFrom
+         })), 0);
+         let QC = 96;
+         for (let wC = 0; wC < zC.length; wC++) {
+           const {
+             slot: bC,
+             entry: nC,
+             origin: fC
+ ... (4 more added lines; see GitHub link above)
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6219-L6224` → after: `L16481-L16515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16481-L16515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16481-L16515) · [Before (L6219-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6219-L6224)

```diff
-       _shouldConvertRHS() {
-         return this._scene.useRightHandedSystem && this.sideOrientation === Mq.e.CounterClockWiseSideOrientation
-       }
-       _getRenderingFillMode(qq) {
-         const Eq = this.ZJ();
-         return Eq.forcePointsCloud ? Mq.e.PointFillMode : Eq.forceWireframe ? Mq.e.WireFrameFillMode : this.overrideRenderingFillMode ?? qq
+       scan(CC, zC, ZC) {
+         let [QC, wC, bC] = ZC;
+         const nC = Jg.f.Ig,
+           fC = this.hits;
+         fC.length = 0;
+         const oC = CC.scanBlocks(QC, wC, bC, QC + nC, wC + nC, bC + nC, this.offsetsIndexById, fC),
+           qC = [];
+         for (let FC = 0; FC < fC.length; FC += 4) qC.push({
+           pos: [fC[FC], fC[FC + 1], fC[FC + 2]],
+           offsets: this.offsetsList[this.offsetsIndexById[fC[FC + 3]] - 1]
+         });
+         return zC.machines = qC, zC.cellChunks = function(CC, zC) {
+           const ZC = new Set,
+             QC = [];
+           for (const {
+               pos: wC,
+ ... (19 more added lines; see GitHub link above)
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6226-L6227` → after: `L16517-L16536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16517-L16536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16517-L16536) · [Before (L6226-L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6226-L6227)

```diff
-       setMaterialByID(qq) {
-         return this.setMaterialById(qq)
+       refresh(CC) {
+         const zC = function(CC, zC) {
+             const ZC = new Set,
+               QC = [];
+             for (const {
+                 pos: wC,
+                 offsets: bC
+               }
+               of CC)
+               for (const [CC, nC, fC] of bC) {
+                 const bC = wC[0] + CC,
+                   oC = wC[1] + nC,
+                   qC = wC[2] + fC,
+                   FC = `${bC},${oC},${qC}`;
+                 ZC.has(FC) || (ZC.add(FC), zC(bC, oC, qC) && QC.push([bC, oC, qC]))
+               }
+ ... (4 more added lines; see GitHub link above)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6229-L6230` → after: `L16538-L16549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16538-L16549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16538-L16549) · [Before (L6229-L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6229-L6230)

```diff
-       static CreateRibbon(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       build(CC, zC, ZC) {
+         const QC = zC[0],
+           wC = [],
+           bC = [];
+         for (const [nC, fC, oC] of zC)(0, hP.e)(wC, bC, [nC - QC[0] + .5, fC - QC[1] + .5, oC - QC[2] + .5], lP, ZC);
+         return CC.createGameMesh({
+           positions: wC,
+           indices: bC
+         }, {
+           rgb: ZC ? cP : XP,
+           alpha: .4
+         }, QC)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6232-L6233` → after: `L16551-L16553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16551-L16553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16551-L16553) · [Before (L6232-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6232-L6233)

```diff
-       static CreateDisc(qq, Eq, gq, Yq, lq, Oq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       clearMeshes(CC) {
+         for (const zC of this.meshes) CC.disposeGameMesh(zC);
+         this.meshes = []
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6235-L6236` → after: `L16555-L16580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16555-L16580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16555-L16580) · [Before (L6235-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6235-L6236)

```diff
-       static CreateBox(qq, Eq, gq, Yq, lq) {
-         throw new Error("Import MeshBuilder to populate this function")
+     }
+     const rP = 1 / .6,
+       sP = 200,
+       TP = {
+         colours: [
+           [127, 233, 255],
+           [180, 140, 255]
+         ],
+         life: [.12, .22],
+         size: [.12, .2],
+         perBlock: 3
+       },
+       aP = {
+         colours: [
+           [120, 255, 150],
+           [200, 255, 120]
+ ... (10 more added lines; see GitHub link above)
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6238-L6239` → after: `L16582-L16583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16582-L16583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16582-L16583) · [Before (L6238-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6238-L6239)

```diff
-       static CreateSphere(qq, Eq, gq, Yq, lq, Oq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       static blade() {
+         return new DP(aP)
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6241-L6242` → after: `L16585-L16587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16585-L16587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16585-L16587) · [Before (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6241-L6242)

```diff
-       static CreateHemisphere(qq, Eq, gq, Yq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       fR(CC, zC) {
+         const ZC = Math.min(zC.arcStruck, zC.arcPoints.length);
+         this.draw(CC, [zC.arcFrom, ...zC.arcPoints], zC.arcPoints.slice(0, ZC))
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6244-L6245` → after: `L16589-L16595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16589-L16595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16589-L16595) · [Before (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6244-L6245)

```diff
-       static CreateCylinder(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       onBlade(CC, zC) {
+         const [ZC, QC, wC] = zC.bladeCentre, [bC, nC] = zC.bladeFacing, fC = ZC - 1.5 * bC, oC = wC - 1.5 * nC, qC = Math.atan2(nC, bC), FC = [];
+         for (let WC = 0; WC <= 8; WC++) {
+           const CC = qC - tP / 2 + tP * WC / 8;
+           FC.push([fC + 2.5 * Math.cos(CC), QC, oC + 2.5 * Math.sin(CC)])
+         }
+         this.draw(CC, FC, zC.bladeStruck)
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6247-L6248` → after: `L16597-L16599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16597-L16599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16597-L16599) · [Before (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6247-L6248)

```diff
-       static CreateTorus(qq, Eq, gq, Yq, lq, Oq, mq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       dispose() {
+         var CC;
+         null === (CC = this.particles) || void 0 === CC || CC.stop(), this.particles = null
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6250-L6251` → after: `L16601-L16664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16601-L16664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16601-L16664) · [Before (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6250-L6251)

```diff
-       static CreateTorusKnot(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       draw(CC, zC, ZC) {
+         if (!CC.particlesEnabled() || zC.length < 2) return;
+         const QC = performance.now();
+         this.budget = Math.min(sP, this.budget + (QC - this.lastMs) / 1e3 * sP), this.lastMs = QC;
+         const wC = [];
+         let bC = 0,
+           nC = zC[0];
+         for (const PC of zC.slice(1)) {
+           const CC = Math.min(48, Math.round(Math.hypot(PC[0] - nC[0], PC[1] - nC[1], PC[2] - nC[2]) * this.style.perBlock));
+           wC.push([nC, PC, CC]), bC += CC, nC = PC
+         }
+         const fC = ZC.length;
+         bC += 10 * fC;
+         const oC = bC > this.budget ? this.budget / bC : 1;
+         if (0 === bC || oC * bC < 1) return;
+         const qC = zC[0],
+ ... (48 more added lines; see GitHub link above)
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6253-L6254` → after: `L16666-L16678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16666-L16678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16666-L16678) · [Before (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6253-L6254)

```diff
-       static CreateLines(qq, Eq, gq, Yq, lq) {
-         throw new Error("Import MeshBuilder to populate this function")
+     }
+     const jP = new Set(["Sky Spring"]);
+ 
+     function yP(CC, zC, ZC) {
+       const QC = CC.split("|")[0];
+       return "Air" !== zC || ZC || ! function(CC) {
+         const zC = CC.split("|")[0];
+         return void 0 !== nZ[zC] || jP.has(zC)
+       }(QC) ? null : CC
+     }
+     class LP {
+       constructor() {
+         this.lastTapAt = -1 / 0
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6256-L6257` → after: `L16680-L16682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16680-L16682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16680-L16682) · [Before (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6256-L6257)

```diff
-       static CreateDashedLines(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       isNewPress(CC) {
+         const zC = CC - this.lastTapAt >= 300;
+         return this.lastTapAt = CC, zC
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6259-L6260` → after: `L16684-L16687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16684-L16687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16684-L16687) · [Before (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6259-L6260)

```diff
-       static CreatePolygon(qq, Eq, gq, Yq, lq, Oq, mq) {
-         throw new Error("Import MeshBuilder to populate this function")
+     }
+     class UP {
+       constructor() {
+         this.presses = new LP, this.predicted = null
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6262-L6263` → after: `L16689-L16694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16689-L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16689-L16694) · [Before (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6262-L6263)

```diff
-       static ExtrudePolygon(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       tap(CC, zC) {
+         const ZC = this.presses.isNewPress(zC);
+         return ZC && (this.predicted = {
+           station: CC,
+           at: zC
+         }), ZC
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6265-L6266` → after: `L16696-L16698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16696-L16698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16696-L16698) · [Before (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6265-L6266)

```diff
-       static ExtrudeShape(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       consumeServerOpen(CC, zC) {
+         const ZC = this.predicted;
+         return !(null === ZC || ZC.station !== CC || zC - ZC.at > 2e3) && (this.predicted = null, !0)
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6268-L6269` → after: `L16700-L16703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16700-L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16700-L16703) · [Before (L6268-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6268-L6269)

```diff
-       static ExtrudeShapeCustom(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq) {
-         throw new Error("Import MeshBuilder to populate this function")
+     }
+     class BP {
+       constructor() {
+         this.thrustAt = -1 / 0
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6271-L6272` → after: `L16705-L16706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16705-L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16705-L16706) · [Before (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6271-L6272)

```diff
-       static CreateLathe(qq, Eq, gq, Yq, lq, Oq, mq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       lit(CC, zC) {
+         return CC && (this.thrustAt = zC), zC - this.thrustAt < 200
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6274-L6275` → after: `L16708-L16736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16708-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16708-L16736) · [Before (L6274-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6274-L6275)

```diff
-       static CreatePlane(qq, Eq, gq, Yq, lq) {
-         throw new Error("Import MeshBuilder to populate this function")
+     }
+     const OP = [.1, .05, .1],
+       kP = {
+         texture: "effect_5",
+         HW: Math.ceil(48),
+         minLifeTime: .35,
+         maxLifeTime: .8,
+         minEmitPower: 1,
+         maxEmitPower: 2,
+         minSize: .2,
+         maxSize: .45,
+         emitRate: 0,
+         gravity: [0, -2, 0],
+         dir1: [-.15, -1, -.15],
+         dir2: [.15, -1, .15],
+         colorGradients: [{
+ ... (13 more added lines; see GitHub link above)
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6277-L6278` → after: `L16738-L16739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16738-L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16738-L16739) · [Before (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6277-L6278)

```diff
-       static CreateGround(qq, Eq, gq, Yq, lq, Oq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       fR(CC, zC) {
+         for (const [ZC, QC] of zC.baf2JetFlames) CC.isLocalPlayer(ZC) || (QC ? this.lit.add(ZC) : this.lit.delete(ZC))
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6280-L6281` → after: `L16741-L16746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16741-L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16741-L16746) · [Before (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6280-L6281)

```diff
-       static CreateTiledGround(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       onAfterRender(CC, zC) {
+         const ZC = performance.now(),
+           QC = this.hold.lit(this.selfThrusting(CC, zC), ZC);
+         for (const [wC, bC] of this.flames)(wC === zC ? QC : this.lit.has(wC)) || this.setEmitting(bC, !1), wC === zC || CC.getPositionView(wC) ? !bC.emitting && ZC - bC.offAt >= 1300 && (bC.particles.stop(), this.flames.delete(wC)) : (bC.particles.dispose(), this.flames.delete(w … [truncated]
+         QC && this.draw(CC, zC, zC);
+         for (const wC of this.lit) this.draw(CC, zC, wC)
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6283-L6284` → after: `L16748-L16750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16748-L16750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16748-L16750) · [Before (L6283-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6283-L6284)

```diff
-       static CreateGroundFromHeightMap(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       dispose() {
+         for (const CC of this.flames.values()) CC.particles.dispose();
+         this.flames.clear(), this.lit.clear()
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6286-L6287` → after: `L16752-L16789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16752-L16789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16752-L16789) · [Before (L6286-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6286-L6287)

```diff
-       static CreateTube(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       selfThrusting(CC, zC) {
+         var ZC;
+         const QC = CC.getLocalPlayerMovement();
+         return !!QC && (null !== (wC = {
+           option: null !== (ZC = CC.getClientOption(zC, "jumpHoldThrust")) && void 0 !== ZC ? ZC : null,
+           jumping: QC.jumpHeld,
+           onGround: QC.onGround,
+           alive: CC.isAlive(zC)
+         }).option && wC.option.maxUpSpeed >= 0 && wC.jumping && !wC.onGround && wC.alive);
+         var wC
+       }
+       draw(CC, zC, ZC) {
+         var QC, wC;
+         const bC = this.pos;
+         if (!CC.readDrawnPosition(ZC, bC)) return;
+         const nC = CC.readDrawnPosition(zC, this.camera) ? this.camera : bC;
+ ... (22 more added lines; see GitHub link above)
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6289-L6290` → after: `L16791-L16814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16791-L16814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16791-L16814) · [Before (L6289-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6289-L6290)

```diff
-       static CreatePolyhedron(qq, Eq, gq) {
-         throw new Error("Import MeshBuilder to populate this function")
+     }
+ 
+     function CG(CC) {
+       return "Reactor Frame" === QQ("reactor", CC)
+     }
+ 
+     function zG(CC) {
+       return uZ("reactor", CC) && !CG(CC) && (CC.startsWith("Reactor Glass") || CC.startsWith("Reactor Port"))
+     }
+     const ZG = "baf2Goal";
+     class QG {
+       constructor() {
+         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Hw.o.subscribe("setDirectionArrow", (CC => {
+           let {
+             id: zC,
+             position: ZC
+ ... (8 more added lines; see GitHub link above)
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6292-L6293` → after: `L16816-L16841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16816-L16841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16816-L16841) · [Before (L6292-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6292-L6293)

```diff
-       static CreateIcoSphere(qq, Eq, gq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       dispose() {
+         for (const CC of this.subs) Hw.o.unsubscribe(CC)
+       }
+       sideOf(CC, zC, ZC, QC) {
+         const wC = this.goal;
+         if (!wC) return 0;
+         ZC - this.checkedAt > 1e3 && (this.checkedAt = ZC, this.open = function(CC, zC) {
+           const [ZC, QC, wC] = CC.map(Math.floor);
+           if (!zG(zC(ZC, QC, wC))) return null;
+           for (const [bC, nC] of [
+               [1, 0],
+               [0, 1]
+             ]) {
+             const CC = zC(ZC + bC, QC, wC + nC),
+               fC = zC(ZC - bC, QC, wC - nC);
+             if (CG(fC) && zG(CC)) return [bC, 0, nC];
+ ... (10 more added lines; see GitHub link above)
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6295-L6296` → after: `L16843-L16858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16843-L16858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16843-L16858) · [Before (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6295-L6296)

```diff
-       static CreateDecal(qq, Eq, gq, Yq, lq, Oq) {
-         throw new Error("Import MeshBuilder to populate this function")
+     }
+     class wG {
+       constructor() {
+         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
+           this.boxStale = !0
+         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.mG = () => {
+           this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
+         }, this.sizes = new ResizeObserver((CC => {
+           for (const zC of CC) zC.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(zC.target, zC.borderBoxSize[0].inlineSize / 2)
+         })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
+           this.queued = !1, this.Sg || this.clear()
+         }, window.addEventListener("resize", this.mG)
+       }
+       onAfterRender(CC, zC) {
+         var ZC;
+         this.api = CC, this.project = null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.projectWorldPosToScreenPos) && void 0 !== ZC ? ZC : null, this.queued || this.Sg || (this.queued = !0, queueMicrotask(this.run))
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6298-L6299` → after: `L16860-L16957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16860-L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16860-L16957) · [Before (L6298-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6298-L6299)

```diff
-       static CreateCapsule(qq, Eq, gq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       dispose() {
+         this.Sg = !0;
+         for (const CC of this.moved.keys()) CC.style.transform = "";
+         this.moved.clear();
+         for (const CC of this.sideLabels.keys()) CC.style.transform = "";
+         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.mG)
+       }
+       clear() {
+         for (const bC of this.moved.keys()) bC.isConnected || this.moved.delete(bC);
+         for (const bC of this.sideLabels.keys()) bC.isConnected || this.sideLabels.delete(bC);
+         if (0 === this.arrows.length) return;
+         const CC = performance.now(),
+           zC = CC - this.refreshedAt > 1e3;
+         zC && (this.refreshedAt = CC, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
+         const ZC = this.trackerBox(),
+           QC = this.barsBox(),
+ ... (82 more added lines; see GitHub link above)
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6301-L6302` → after: `L16959-L16978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16959-L16978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16959-L16978) · [Before (L6301-L6302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6301-L6302)

```diff
-       static ExtendToGoldberg(qq) {
-         throw new Error("Import MeshBuilder to populate this function")
+       shiftLeftOf(CC, zC) {
+         var ZC;
+         const QC = this.anchorOf(CC);
+         if (!QC) return 0;
+         const {
+           y: wC
+         } = QC, bC = QC.x + (null !== (ZC = this.labelOffsets.get(CC)) && void 0 !== ZC ? ZC : 0), nC = this.em, {
+           halfWidth: fC,
+           labelled: oC
+         } = this.extentOf(CC), qC = wC - nC, FC = bC + fC;
+         return wC + nC * (oC ? 6.2 : 3) < zC.top || qC > zC.bottom || FC < zC.left - 6 || bC - fC > zC.right ? 0 : Math.max(zC.left - 6 - FC, 6 - (bC - fC))
+       }
+       shiftOnScreen(CC) {
+         var zC;
+         const ZC = this.anchorOf(CC);
+         if (!ZC) return 0;
+ ... (4 more added lines; see GitHub link above)
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6304-L6803` → after: `L16980-L16998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R16980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L16980-L16998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L16980-L16998) · [Before (L6304-L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6304-L6803)

```diff
-     }
-     Iq.FRONTSIDE = bq.d.FRONTSIDE, Iq.BACKSIDE = bq.d.BACKSIDE, Iq.DOUBLESIDE = bq.d.DOUBLESIDE, Iq.DEFAULTSIDE = bq.d.DEFAULTSIDE, Iq.NO_CAP = 0, Iq.CAP_START = 1, Iq.CAP_END = 2, Iq.CAP_ALL = 3, Iq.NO_FLIP = 0, Iq.FLIP_TILE = 1, Iq.ROTATE_TILE = 2, Iq.FLIP_ROW = 3, Iq.ROTATE_RO … [truncated]
-       throw (0, Jq.m)("GroundMesh")
-     }, Iq._GoldbergMeshParser = (qq, Eq) => {
-       throw (0, Jq.m)("GoldbergMesh")
-     }, Iq._LinesMeshParser = (qq, Eq) => {
-       throw (0, Jq.m)("LinesMesh")
-     }, Iq._GreasedLineMeshParser = (qq, Eq) => {
-       throw (0, Jq.m)("GreasedLineMesh")
-     }, Iq._GreasedLineRibbonMeshParser = (qq, Eq) => {
-       throw (0, Jq.m)("GreasedLineRibbonMesh")
-     }, Iq._TrailMeshParser = (qq, Eq) => {
-       throw (0, Jq.m)("TrailMesh")
-     }, Iq._GaussianSplattingMeshParser = (qq, Eq) => {
-       throw (0, Jq.m)("GaussianSplattingMesh")
-     }, Iq._GaussianSplattingPartProxyMeshParser = (qq, Eq) => {
- ... (484 more removed lines; see GitHub link above)
+       runLabelAside(CC, zC) {
+         var ZC;
+         let QC = null;
+         for (let nC = 0; nC < CC.children.length; nC++) CC.children[nC].classList.contains("DirectionArrowLabel") && (QC = CC.children[nC]);
+         if (!QC) return 0;
+         const wC = CC.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(CC) : null,
+           bC = (wC && this.api ? this.side.sideOf(this.api, {
+             x: wC.x / this.innerWidth * 100,
+             y: wC.y / this.innerHeight * 100
+           }, zC, this.project) : 0) * this.halfWidthOf(QC);
+         return bC !== (null !== (ZC = this.sideLabels.get(QC)) && void 0 !== ZC ? ZC : 0) && (QC.style.transform = 0 === bC ? "" : `translateX(-50%) translateX(${bC}px)`, 0 === bC ? this.sideLabels.delete(QC) : this.sideLabels.set(QC, bC)), bC
+       }
+       extentOf(CC) {
+         let zC = this.em,
+           ZC = !1;
+         for (let QC = 0; QC < CC.children.length; QC++) {
+ ... (3 more added lines; see GitHub link above)
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6805-L6874` → after: `L17000-L17061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17000-L17061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17000-L17061) · [Before (L6805-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6805-L6874)

```diff
-         static ImportVertexData(Eq, gq) {
-           const Yq = qq.Parse(Eq);
-           gq.setAllVerticesData(Yq, Eq.updatable)
-         }
-       }, (() => {
-         const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         Eq = [cq.j.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], gq = [cq.j.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], aq = [cq.j.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], Vq = [cq.j.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, Yq.f)(qq, null, Eq, {
-           kind: "method",
- ... (54 more removed lines; see GitHub link above)
+         return {
+           halfWidth: zC,
+           labelled: ZC
+         }
+       }
+       halfWidthOf(CC) {
+         let zC = this.halfWidths.get(CC);
+         return void 0 === zC && (zC = CC.offsetWidth / 2, this.halfWidths.set(CC, zC), this.sizes.observe(CC), this.labels.add(CC)), zC
+       }
+       forgetGoneLabels() {
+         for (const CC of this.labels) CC.isConnected || (this.sizes.unobserve(CC), this.halfWidths.delete(CC), this.labels.delete(CC))
+       }
+       anchorOf(CC) {
+         const zC = CC.style.translate,
+           ZC = this.anchors.get(CC);
+         if (ZC && ZC.translate === zC && ZC.innerWidth === this.innerWidth && ZC.innerHeight === this.innerHeight) return ZC;
+ ... (46 more added lines; see GitHub link above)
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6877-L6878` → after: `L17064-L17068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17064-L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17064-L17068) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6877-L6878)

```diff
-       const Eq = qq.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return Eq instanceof Float32Array || Eq instanceof Uint16Array
+       return zC => {
+         let ZC = 0;
+         for (const QC of CC.getInventoryItems())(null === QC || void 0 === QC ? void 0 : QC.name) === zC && (ZC += null === QC.amount ? 1 : Math.max(QC.amount, 0));
+         return ZC
+       }
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6882-L6887` → after: `L17072-L17102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17072-L17102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17072-L17102) · [Before (L6882-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6882-L6887)

```diff
-       gq.A4(Number.POSITIVE_INFINITY), Yq.A4(Number.NEGATIVE_INFINITY);
-       for (let lq = 0; lq < 3 * Eq; lq += 3) {
-         const Eq = qq[lq],
-           Oq = qq[lq + 1],
-           mq = qq[lq + 2];
-         Eq < gq.x && (gq.x = Eq), Oq < gq.y && (gq.y = Oq), mq < gq.z && (gq.z = mq), Eq > Yq.x && (Yq.x = Eq), Oq > Yq.y && (Yq.y = Oq), mq > Yq.z && (Yq.z = mq)
+       CC.getClientOption(zC, "canCraft") && "inventory" !== Rw.b.get("openInGameMenuName") && (fG.open(ZC, QC.get(), oG(CC)), Hw.o.bp("toggleMenu", `inventory|${ZC}`))
+     }
+     let FG = null,
+       WG = !1;
+ 
+     function NG(CC) {
+       const zC = ib();
+       CC === FG && zC === WG || (FG = CC, WG = zC, (0, Ew.t)(function(CC, zC) {
+         const ZC = new Map;
+         for (let QC = CC + 1; QC <= wC.length; QC++) {
+           const wC = jb(QC, CC, zC);
+           if (wC)
+             for (const zC of PC(QC).unlocks) ZC.set(zC, {
+               ...wC,
+               stepsAway: QC - CC
+             })
+ ... (15 more added lines; see GitHub link above)
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6892` → after: `L17107-L17117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17107-L17117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17107-L17117) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6892)

```diff
-       gq && (qq.x -= qq.x * gq.x + gq.y, qq.y -= qq.y * gq.x + gq.y, qq.z -= qq.z * gq.x + gq.y, Eq.x += Eq.x * gq.x + gq.y, Eq.y += Eq.y * gq.x + gq.y, Eq.z += Eq.z * gq.x + gq.y)
+       var QC, wC;
+       const bC = CC.getTargetedBlock();
+       if (!bC || ! function(CC, zC, ZC) {
+           if ("Chest" !== zC) return !1;
+           const QC = CC.split("|")[0];
+           if (!qZ(QC) || 0 === Ez[QC].outputSlots.length) return !1;
+           const wC = dp(CC);
+           return ZC[0] === wC[0] && ZC[1] === wC[1] && ZC[2] === wC[2]
+         }(ZC, null === (QC = CC.XzC(zC)) || void 0 === QC ? void 0 : QC.name, bC.normal)) return !1;
+       const [nC, fC, oC] = bC.wp, qC = CC.getBlockId(nC, fC, oC);
+       return 0 === qC || !0 === (null === (wC = dC.g[qC]) || void 0 === wC ? void 0 : wC.canBePlacedOver)
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6894-L6900` → after: `L17119-L17166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17119-L17166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17119-L17166) · [Before (L6894-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6894-L6900)

```diff
- 
-     function Wq(qq, Eq, gq, lq, Oq) {
-       const mq = Yq.o.Na[7],
-         xq = Yq.o.Na[8];
-       for (let Aq = 0; Aq < 2; ++Aq)
-         for (let cq = 0; cq < 2; ++cq)
-           for (let uq = 0; uq < 2; ++uq) mq.set(Aq ? Eq.x : qq.x, cq ? Eq.y : qq.y, uq ? Eq.z : qq.z), Yq.q.TransformCoordinatesToRef(mq, gq, xq), lq.minimizeInPlace(xq), Oq.maximizeInPlace(xq)
+     var pG = ZC(36641);
+     const PG = new Set(SZ.d);
+     class GG {
+       constructor(CC) {
+         this.toasts = CC, this.lastAt = -1 / 0
+       }
+       onAltAction(CC, zC, ZC) {
+         const QC = CC.getTargetedBlock();
+         if (!QC || function(CC) {
+             const zC = CC.split("|")[0];
+             return qZ(zC) || null !== IQ(zC) || vC(zC) || SZ.d.includes(zC)
+           }(ZC) && !PG.has(ZC.split("|")[0])) return;
+         const wC = CC.XzC(zC);
+         if (!wC || !PG.has(wC.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
+         const bC = wC.typeObj.id,
+           [nC, fC, oC] = QC.wp,
+ ... (32 more added lines; see GitHub link above)
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6903-L7291` → after: `L17170-L17175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17170-L17175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17170-L17175) · [Before (L6903-L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6903-L7291)

```diff
-     function Nq(qq, Eq, gq, lq, Oq) {
-       const mq = Yq.o.Na[7];
-       for (let xq = 0; xq < 3 * Eq; xq += 3) Yq.q.TransformCoordinatesFromFloatsToRef(qq[xq], qq[xq + 1], qq[xq + 2], gq, mq), lq.minimizeInPlace(mq), Oq.maximizeInPlace(mq)
-     }
-     let aq = !1;
-     aq || (aq = !0, mq.e.prototype.thinInstanceAdd = function(qq) {
-       let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.ZJ().Ba().getCaps().instancedArrays) return lq.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(qq) ? qq.length : 1);
-       const gq = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(qq))
-         for (let Yq = 0; Yq < qq.length; ++Yq) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, qq[Yq], Yq === qq.length - 1 && Eq);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, qq, Eq);
-       return gq
-     }, mq.e.prototype.thinInstanceAddSelf = function() {
-       let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
- ... (373 more removed lines; see GitHub link above)
+     function xG(CC, zC) {
+       const ZC = [...CC.baf2CoreBankPaused];
+       for (const [wC] of CC.baf2CoreBanked) ZC.push(wC);
+       for (const nC of wC) {
+         for (const {
+             item: CC
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7293-L7379` → after: `L17177-L17222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17177-L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17177-L17222) · [Before (L7293-L7379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7293-L7379)

```diff
-           return this.setPivotMatrix(Bq.e.Translation(-qq.x, -qq.y, -qq.z), !0)
-         }
-         getPivotPoint() {
-           const qq = Bq.q.Zero();
-           return this.getPivotPointToRef(qq), qq
-         }
-         getPivotPointToRef(qq) {
-           return qq.x = -this._pivotMatrix.m[12], qq.y = -this._pivotMatrix.m[13], qq.z = -this._pivotMatrix.m[14], this
-         }
-         getAbsolutePivotPoint() {
-           const qq = Bq.q.Zero();
-           return this.getAbsolutePivotPointToRef(qq), qq
-         }
-         getAbsolutePivotPointToRef(qq) {
-           return this.getPivotPointToRef(qq), Bq.q.TransformCoordinatesToRef(qq, this.getWorldMatrix(), qq), this
-         }
- ... (71 more removed lines; see GitHub link above)
+           of nC.cost) ZC.push(CC);
+         for (const CC of nC.newDeposits) ZC.push(CC.block);
+         for (const CC of nC.unlocks) ZC.push(CC, YC(CC));
+         nC.reward && ZC.push(nC.reward);
+         for (const {
+             item: CC
+           }
+           of null !== (QC = null === (bC = nC.charge) || void 0 === bC ? void 0 : bC.items) && void 0 !== QC ? QC : []) {
+           var QC, bC;
+           ZC.push(CC)
+         }
+       }
+       return {
+         message: CC,
+         itemNames: zC([...new Set(ZC)])
+       }
+ ... (30 more added lines; see GitHub link above)
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7381-L7409` → after: `L17224-L17252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17224-L17252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17224-L17252) · [Before (L7381-L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7381-L7409)

```diff
-           return this
-         }
-         addRotation(qq, Eq, gq) {
-           let Yq;
-           this.rotationQuaternion ? Yq = this.rotationQuaternion : (Yq = Bq.o.Quaternion[1], Bq.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Yq));
-           const lq = Bq.o.Quaternion[0];
-           return Bq.h.RotationYawPitchRollToRef(Eq, qq, gq, lq), Yq.multiplyInPlace(lq), this.rotationQuaternion || Yq.toEulerAnglesToRef(this.rotation), this
-         }
-         _getEffectiveParent() {
-           return this.parent
-         }
-         isWorldMatrixCameraDependent() {
-           return this._infiniteDistance && !this.parent || this._billboardMode !== qq.BILLBOARDMODE_NONE
-         }
-         computeWorldMatrix() {
-           let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
- ... (13 more removed lines; see GitHub link above)
+           return QC
+         }(pC, bC, CC),
+         AC = new rw(GC),
+         xC = new Cg((() => Rw.b.get("loadingOverlayVisible"))),
+         JC = new HF(PC, AC, xC),
+         IC = new bg,
+         iC = new GG(xC),
+         eC = new RG((CC => {
+           xC.show(CC, CC.baf2ToastMs)
+         })),
+         hC = new gg(WC),
+         KC = new Tp(hC),
+         YC = new en,
+         mC = new FP,
+         HC = new bf,
+         XC = new xg({
+ ... (13 more added lines; see GitHub link above)
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7411-L7461` → after: `L17254-L17266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17254-L17266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17254-L17266) · [Before (L7411-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7411-L7461)

```diff
-           if (mq.Vqq(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
-             if (this._rotationQuaternion._isDirty = !1, xq = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
-               this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Bq.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.Vqq(0, 0, 0))
-             }
-           } else xq = qq._TmpRotation, Bq.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, xq);
-           if (this._usePivotMatrix) {
-             const qq = Bq.o.Matrix[1];
-             Bq.e.ScalingToRef(mq.x, mq.y, mq.z, qq);
-             const Eq = Bq.o.Matrix[0];
-             xq.toRotationMatrix(Eq), this._pivotMatrix.multiplyToRef(qq, Bq.o.Matrix[4]), Bq.o.Matrix[4].multiplyToRef(Eq, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
-           } else Bq.e.ComposeToRef(mq, xq, Aq, this._localMatrix);
-           if (Oq && Oq.getWorldMatrix) {
-             if (Eq && Oq.computeWorldMatrix(Eq), this.billboardMode) {
-               if (this._transformToBoneReferal) {
-                 const qq = this.parent;
-                 qq.getSkeleton().prepare(), qq.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Bq.o.Matrix[7])
- ... (35 more removed lines; see GitHub link above)
+           return QC
+         }(pC, CC)), FS(PC)),
+         sC = new AS(XC, FS(PC)),
+         TC = new PS,
+         DC = (CC, zC) => {
+           let [ZC, QC, wC] = CC;
+           TC.answered(zC) || xC.show({
+             baf2ToastText: [(0, EC.Md)({
+               translationKey: "buildAFactory2Game:rxSizeNotTaken",
+               params: {
+                 w: ZC,
+                 h: QC,
+                 d: wC
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7463-L7477` → after: `L17268-L17293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17268-L17293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17268-L17293) · [Before (L7463-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7463-L7477)

```diff
-               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Bq.o.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Bq.o.Na[0])
-             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Oq && Oq._nonUniformScaling ? this._updateNonUniformScalingState(Oq._nonUniformScaling) : this._up … [truncated]
-         }
-         resetLocalMatrix() {
-           let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-           if (this.computeWorldMatrix(), qq) {
-             const qq = this.getChildren();
-             for (let Eq = 0; Eq < qq.length; ++Eq) {
-               const gq = qq[Eq];
-               if (gq) {
-                 gq.computeWorldMatrix();
-                 const qq = Bq.o.Matrix[0];
-                 gq._localMatrix.multiplyToRef(this._localMatrix, qq);
-                 const Eq = Bq.o.Quaternion[0];
-                 qq.decompose(gq.rc, Eq, gq.position), gq.rotationQuaternion ? gq.rotationQuaternion.WG(Eq) : Eq.toEulerAnglesToRef(gq.rotation)
+             }, EC.H.whiteUiText)],
+             baf2ToastMs: 4e3,
+             baf2ToastStyle: "baf2ToastWarn"
+           })
+         };
+       rC.onSizeNotTaken(DC), sC.onSizeNotTaken(DC);
+       const jC = new iS,
+         yC = new wp(XC),
+         UC = new np,
+         BC = new Pp(UC),
+         OC = new Kp,
+         VC = new ap,
+         Cz = new Vp(VC),
+         zz = new qP(VC),
+         Zz = VC.lookSource(),
+         Qz = new iP({
+ ... (10 more added lines; see GitHub link above)
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7480-L7557` → after: `L17296-L17397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17296-L17397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17296-L17397) · [Before (L7480-L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7480-L7557)

```diff
-           }
-           this.rc.Vqq(1, 1, 1), this.position.Vqq(0, 0, 0), this.rotation.Vqq(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Bq.h.Identity()), this._worldMatrix = Bq.e.Identity()
-         }
-         _afterComputeWorldMatrix() {}
-         registerAfterWorldMatrixUpdate(qq) {
-           return this.onAfterWorldMatrixUpdateObservable.add(qq), this
-         }
-         unregisterAfterWorldMatrixUpdate(qq) {
-           return this.onAfterWorldMatrixUpdateObservable.removeCallback(qq), this
-         }
-         getPositionInCameraSpace() {
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-           return qq || (qq = this.ZJ().activeCamera), Bq.q.TransformCoordinates(this.getAbsolutePosition(), qq.getViewMatrix())
-         }
-         getDistanceToCamera() {
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
- ... (62 more removed lines; see GitHub link above)
+           }(pC, hC, zC) : Zz.line(CC, zC),
+           version: () => Zz.version() + hC.version()
+         }, (CC => CS(XC.all(), CC, (CC => tg(pC, CC)))), (() => AC.get().tier)),
+         wz = new aS,
+         bz = new uP,
+         nz = new DP,
+         fz = DP.blade(),
+         oz = new VP,
+         qz = new og,
+         Fz = new wG,
+         Nz = new UP,
+         Mz = new LP;
+       let gz = -1 / 0,
+         Sz = 0,
+         pz = -1 / 0,
+         Pz = -1 / 0;
+ ... (86 more added lines; see GitHub link above)
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7559-L7570` → after: `L17399-L17410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17399-L17410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17399-L17410) · [Before (L7559-L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7559-L7570)

```diff
-           },
-           metadata: cq
-         }, jq, Hq), (0, xq.f)(null, null, gq, {
-           kind: "field",
-           name: "_rotation",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "_rotation" in qq,
-             get: qq => qq._rotation,
-             set: (qq, Eq) => {
-               qq._rotation = Eq
+           })), Rz.push((0, Pw.v)({
+             id: "baf2Quests",
+             labelKey: "buildAFactory2Game:questBookTitle",
+             icon: {
+               kind: "item",
+               name: "Book"
+             },
+             className: "Baf2QuestsButton",
+             onClick: () => {
+               Az({
+                 kind: "quests"
+               }), (0, Gw.u)()
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7572-L7583` → after: `L17412-L17443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17412-L17443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17412-L17443) · [Before (L7572-L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7572-L7583)

```diff
-           },
-           metadata: cq
-         }, oq, Pq), (0, xq.f)(null, null, Yq, {
-           kind: "field",
-           name: "_rotationQuaternion",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "_rotationQuaternion" in qq,
-             get: qq => qq._rotationQuaternion,
-             set: (qq, Eq) => {
-               qq._rotationQuaternion = Eq
+           })), Rz.push(function(CC, zC) {
+             let ZC = null,
+               QC = () => {};
+             const wC = zC => {
+               var wC;
+               let {
+                 tutorial: bC,
+                 tutorialKnown: nC
+               } = zC;
+               (null === (wC = ZC) || void 0 === wC ? void 0 : wC.tutorial) === bC && ZC.tutorialKnown === nC || (ZC = {
+                 tutorial: bC,
+                 tutorialKnown: nC
+               }, QC = (0, Pw.v)({
+                 id: "baf2Tutorial",
+                 order: -1,
+                 labelKey: dF[bC],
+ ... (16 more added lines; see GitHub link above)
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7585-L7596` → after: `L17445-L17460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17445-L17460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17445-L17460) · [Before (L7585-L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7585-L7596)

```diff
-           },
-           metadata: cq
-         }, Qq, yq), (0, xq.f)(null, null, lq, {
-           kind: "field",
-           name: "_scaling",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "_scaling" in qq,
-             get: qq => qq._scaling,
-             set: (qq, Eq) => {
-               qq._scaling = Eq
+           }(JC, AC)), Iz = !1, Rz.push(MG()), Rz.push(gG()), Rz.push(function() {
+             const CC = Hw.o.subscribe(lw, Vw),
+               zC = () => {
+                 if (kw) {
+                   const CC = kw;
+                   kw = null, (0, Ew.w)(CC)
+                 }
+               },
+               ZC = Hw.o.subscribe("toggleMenu", (CC => {
+                 "inventory" === (null === CC || void 0 === CC ? void 0 : CC.split("|")[0]) && zC()
+               })),
+               QC = Hw.o.subscribe("appManagerUpdated|openInGameMenuName", (CC => {
+                 "inventory" === CC && zC()
+               }));
+             return () => {
+               Hw.o.unsubscribe(CC), Hw.o.unsubscribe(ZC), Hw.o.unsubscribe(QC)
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7598-L7609` → after: `L17462-L17468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17462-L17468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17462-L17468) · [Before (L7598-L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7598-L7609)

```diff
-           },
-           metadata: cq
-         }, tq, rq), (0, xq.f)(null, null, Oq, {
-           kind: "field",
-           name: "_billboardMode",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "_billboardMode" in qq,
-             get: qq => qq._billboardMode,
-             set: (qq, Eq) => {
-               qq._billboardMode = Eq
+           }()), Rz.push(function(CC) {
+             const zC = oG(CC),
+               ZC = Hw.o.subscribe(lw, (CC => {
+                 fG.follow(CC, zC)
+               }));
+             return () => {
+               Hw.o.unsubscribe(ZC), fG.clear()
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7611-L7622` → after: `L17470-L17477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17470-L17477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17470-L17477) · [Before (L7611-L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7611-L7622)

```diff
-           },
-           metadata: cq
-         }, vq, hq), (0, xq.f)(null, null, mq, {
-           kind: "field",
-           name: "scalingDeterminant",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "scalingDeterminant" in qq,
-             get: qq => qq.scalingDeterminant,
-             set: (qq, Eq) => {
-               qq.scalingDeterminant = Eq
+           }(pC)), Rz.push(function() {
+             const CC = document.documentElement,
+               zC = (0, DM.b)(".InvenBodyRight", [], (() => {
+                 const zC = document.querySelector(".InvenBodyRight");
+                 zC && CC.style.setProperty("--baf2-backpack-width", `${zC.offsetWidth}px`)
+               }));
+             return () => {
+               zC(), CC.style.removeProperty("--baf2-backpack-width")
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7624-L7635` → after: `L17479-L17482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17479-L17482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17479-L17482) · [Before (L7624-L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7624-L7635)

```diff
-           },
-           metadata: cq
-         }, nq, bq), (0, xq.f)(null, null, Nq, {
-           kind: "field",
-           name: "_infiniteDistance",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "_infiniteDistance" in qq,
-             get: qq => qq._infiniteDistance,
-             set: (qq, Eq) => {
-               qq._infiniteDistance = Eq
+           }()), Rz.push(function() {
+             const CC = document.documentElement;
+             return CC.classList.add(bG), () => {
+               CC.classList.remove(bG)
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7637-L7648` → after: `L17484-L17524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17484-L17524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17484-L17524) · [Before (L7637-L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7637-L7648)

```diff
-           },
-           metadata: cq
-         }, iq, Zq), (0, xq.f)(null, null, aq, {
-           kind: "field",
-           name: "ignoreNonUniformScaling",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "ignoreNonUniformScaling" in qq,
-             get: qq => qq.ignoreNonUniformScaling,
-             set: (qq, Eq) => {
-               qq.ignoreNonUniformScaling = Eq
+           }()), Rz.push((() => {
+             FC.dispose(), qC.dispose()
+           })), SC.start(pC), Rz.push((() => {
+             SC.dispose(), oz.dispose(), KC.dispose()
+           }))
+         },
+         onClose: () => {
+           (0, Ew.w)([]), kw = null, Ow = new Set, FG = null, (0, Ew.t)(new Map), IG.clear();
+           for (const CC of Rz) CC();
+           AC.dispose(), Qz.dispose(), xC.dispose(), IC.dispose(), wz.dispose(), bz.dispose(pC), cC.dispose(pC), uC.dispose(pC), yC.dispose(pC), BC.dispose(pC), UC.dispose(), OC.dispose(), XC.dispose(), rC.dispose(), sC.dispose(), jC.dispose(), nz.dispose(), fz.dispose(), qz.dispo … [truncated]
+         },
+         onAfterRender: (CC, zC) => {
+           var ZC, QC, wC;
+           try {
+             SC.onAfterRender(zC)
+           } catch (qC) {
+ ... (25 more added lines; see GitHub link above)
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7650-L7661` → after: `L17526-L17734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17526-L17734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17526-L17734) · [Before (L7650-L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7650-L7661)

```diff
-           },
-           metadata: cq
-         }, fq, Mq), (0, xq.f)(null, null, Vq, {
-           kind: "field",
-           name: "reIntegrateRotationIntoRotationQuaternion",
-           static: !1,
-           private: !1,
-           access: {
-             has: qq => "reIntegrateRotationIntoRotationQuaternion" in qq,
-             get: qq => qq.reIntegrateRotationIntoRotationQuaternion,
-             set: (qq, Eq) => {
-               qq.reIntegrateRotationIntoRotationQuaternion = Eq
+           }(pC, bC), pC.isMining(), performance.now()), "dropMap" === (null === (wC = fC.get()) || void 0 === wC ? void 0 : wC.kind) && cQ(nC[1]) && xz()
+         },
+         onPlayerChangeBlock: (CC, zC, ZC, QC, wC, nC) => {
+           CC === bC && function(CC, zC, ZC, QC, wC, bC, nC) {
+             const fC = yP(bC, nC, CC.isPlayerCrouching(zC));
+             if (null === fC) return;
+             if (CC.TY(ZC, QC, wC, fC), !CC.getClientOption(zC, "canPickUpItems")) return;
+             const oC = nZ[fC.split("|")[0]];
+             var qC, FC, WC;
+             void 0 !== oC && (qC = CC.getInventoryItems(), FC = oC, WC = Jg.f.maxItemStackSize, CC.getInventoryFreeSlotCount(zC) > 0 || qC.some((CC => null !== CC && CC.name === FC && null !== CC.amount && CC.amount < WC))) && CC.playSound(zC, (0, pG.g)("pickUp"), .5, 1)
+           }(pC, CC, zC, ZC, QC, wC, nC)
+         },
+         onPlayerAltAction: (CC, zC, ZC, QC, wC) => {
+           var nC, fC;
+           if (!pC.getClientOption(bC, "canPickUpItems")) return;
+           const oC = null !== (nC = null === (fC = pC.XzC(bC)) || void 0 === fC ? void 0 : fC.name) && void 0 !== nC ? nC : null,
+ ... (193 more added lines; see GitHub link above)
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7663-L7680` → after: `L17736-L17752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17736-L17752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17736-L17752) · [Before (L7663-L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7663-L7680)

```diff
-           },
-           metadata: cq
-         }, Tq, zq), cq && Object.defineProperty(qq, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: cq
-         })
-       })(), qq.BILLBOARDMODE_NONE = 0, qq.BILLBOARDMODE_X = 1, qq.BILLBOARDMODE_Y = 2, qq.BILLBOARDMODE_Z = 4, qq.BILLBOARDMODE_ALL = 7, qq.BILLBOARDMODE_USE_POSITION = 128, qq.BillboardUseParentOrientation = !1, qq._TmpRotation = Bq.h.Zero(), qq._TmpScaling = Bq.q.Zero(), qq._Tm … [truncated]
-     })();
- 
-     function dq(qq, Eq, gq) {
-       const Yq = cq.d.Parse((() => new Vq(qq.name, Eq)), qq, Eq, gq);
-       if (qq.localMatrix ? Yq.setPreTransformMatrix(Bq.e.FromArray(qq.localMatrix)) : qq.pivotMatrix && Yq.setPivotMatrix(Bq.e.FromArray(qq.pivotMatrix)), Yq.hG(qq.isEnabled), Yq._waitingParsedUniqueId = qq.uniqueId, void 0 !== qq.parentId && (Yq._waitingParentId = qq.parentId),  … [truncated]
-         for (let Eq = 0; Eq < qq.animations.length; Eq++) {
-           const gq = qq.animations[Eq],
- ... (2 more removed lines; see GitHub link above)
+             const ZC = (wz = CC.baf2IslandsOpen, bz = "islands" === (null === (Cz = fC.get()) || void 0 === Cz ? void 0 : Cz.kind), Fz = Pz, Wz = Date.now(), wz && !bz && Wz - Fz < rq);
+             Az({
+               kind: "islands",
+               islands: CC,
+               arrivedAtMs: Date.now(),
+               backToCore: sq(fC.get())
+             }), ZC && (Pz = -1 / 0, pz = Date.now(), PC.send(LC)), CC.baf2IslandsOpen && ("clientGame" !== Rw.b.get("openInGameMenuName") && (0, Aw.f)(), (0, Gw.u)())
+           } else if ("baf2CoopTransfer" === CC) {
+             var Qz;
+             const CC = zC;
+             CC.baf2TransferOn ? (Az({
+               kind: "transfer",
+               transfer: CC,
+               arrivedAtMs: Date.now()
+             }), (0, Gw.u)()) : "transfer" === (null === (Qz = fC.get()) || void 0 === Qz ? void 0 : Qz.kind) && (0, Gw.h)()
+           } else "baf2IslandLeft" === CC ? (IC.dropHeld(), null !== fC.get() && xz(), "inventory" === Rw.b.get("openInGameMenuName") && (0, Aw.f)()) : "baf2Arc" === CC ? nz.fR(pC, zC) : "baf2Blade" === CC ? fz.onBlade(pC, zC) : "baf2JetFlame" === CC ? oz.fR(pC, zC) : "baf2GearPow … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7682-L7684` → after: `L17754-L17755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17754-L17755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17754-L17755) · [Before (L7682-L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7682-L7684)

```diff
-         Wq.c.ParseAnimationRanges(Yq, qq, Eq)
-       }
-       return qq.autoAnimate && Eq.beginAnimation(Yq, qq.autoAnimateFrom, qq.autoAnimateTo, qq.autoAnimateLoop, qq.autoAnimateSpeed || 1), Yq
+       };
+       return iz
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7692` → after: `L17758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17758) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7692)

```diff
-   40172: (qq, Eq, gq) => {
+   38341: (CC, zC, ZC) => {
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7694-L7710` → after: `L17760-L17790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17760-L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17760-L17790) · [Before (L7694-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7694-L7710)

```diff
-       try {
-         const Yq = qq.next();
-         Yq.done ? Eq(Yq) : Yq.value ? Yq.value.then((() => {
-           Yq.value = void 0, Eq(Yq)
-         }), gq) : Eq(Yq)
-       } catch (Yq) {
-         gq(Yq)
-       }
-     }
- 
-     function lq() {
-       let qq, Eq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (gq, lq, Oq) => {
-         const mq = performance.now();
-         void 0 === qq || mq - qq > Eq ? (qq = mq, setTimeout((() => {
-           Yq(gq, lq, Oq)
- ... (1 more removed lines; see GitHub link above)
+       const QC = new Set,
+         wC = new ResizeObserver(ZC),
+         bC = () => {
+           const zC = new Set(document.querySelectorAll(CC));
+           let bC = !1;
+           for (const CC of QC) zC.has(CC) || (wC.unobserve(CC), QC.delete(CC), bC = !0);
+           for (const CC of zC) QC.has(CC) || (wC.observe(CC), nC.observe(CC, {
+             attributes: !0,
+             attributeFilter: ["class", "style"]
+           }), QC.add(CC));
+           bC && ZC()
+         },
+         nC = new MutationObserver((zC => {
+           zC.some((CC => "attributes" === CC.type)) && ZC(), zC.some((zC => function(CC, zC, ZC) {
+             if ("childList" !== CC.type) return !1;
+             for (const QC of CC.addedNodes)
+ ... (15 more added lines; see GitHub link above)
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7714-L7724` → after: `L17804-L17810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17804-L17810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17804-L17810) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7714-L7724)

```diff
-     function Oq(qq, Eq, gq, Yq, lq) {
-       const Oq = () => {
-         let mq;
-         const xq = qq => {
-           qq.done ? gq(qq.value) : void 0 === mq ? mq = !0 : Oq()
-         };
-         do {
-           mq = void 0, lq && lq.aborted ? Yq(new Error("Aborted")) : Eq(qq, xq, Yq), void 0 === mq && (mq = !1)
-         } while (mq)
-       };
-       Oq()
+     function wC(CC) {
+       let zC = QC.get(CC);
+       return zC || (zC = {
+         hidden: CC.hidden,
+         x: NaN,
+         y: NaN
+       }, QC.set(CC, zC)), zC
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7728-L7736` → after: `L17814-L17815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17814-L17815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17814-L17815) · [Before (L7728-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7728-L7736)

```diff
-       let gq;
-       return Oq(qq, Yq, (qq => gq = qq), (qq => {
-         throw qq
-       }), Eq), gq
-     }
-     async function xq(qq, Eq, gq) {
-       return await new Promise(((Yq, lq) => {
-         Oq(qq, Eq, Yq, lq, gq)
-       }))
+       const ZC = wC(CC);
+       ZC.hidden !== zC && (ZC.hidden = zC, CC.hidden = zC)
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7739-L7742` → after: `L17818-L17820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R17818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L17818-L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L17818-L17820) · [Before (L7739-L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L7739-L7742)

```diff
-     function Aq(qq, Eq) {
-       return function() {
-         return mq(qq(...arguments), Eq)
-       }
+     function nC(CC, zC, ZC) {
+       const QC = wC(CC);
+       QC.x === zC && QC.y === ZC || (QC.x = zC, QC.y = ZC, CC.style.translate = `${zC}vw ${ZC}vh`)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/244.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/244.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L4)

```diff
-   39879: (qq, Eq, gq) => {
+   40930: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L6)

```diff
-       b: () => xq,
+       c: () => nC,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L11-L14` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L10-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L11-L14)

```diff
-     var Yq = gq(39689),
-       lq = gq(38653),
-       Oq = gq(39817),
-       mq = gq(39725);
+     var QC, wC = ZC(36991),
+       bC = ZC(36963);
+     ! function(CC) {
+       CC[CC.CW = 0] = "CW", CC[CC.CCW = 1] = "CCW"
+     }(QC || (QC = {}));
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L16-L56` → after: `L16-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L16-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L16-L24) · [Before (L16-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L16-L56)

```diff
-       get bM() {
-         return this._isDisposed
-       }
-       constructor(qq, Eq, gq) {
-         let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           xq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           Aq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           cq = arguments.length > 7 ? arguments[7] : void 0,
-           uq = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, mq.e)(), qq && qq.ZJ ? this._engine = qq.ZJ().Ba() : this._engine = qq, this._updatable = gq, this._instanced = xq, this._divisor = cq || 1, this._label = uq, Eq instanceof Yq.b ? (this._data = null, this._buffer = Eq) … [truncated]
-       }
-       createVertexBuffer(qq, Eq, gq, Yq, lq) {
-         let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           mq = arguments.length > 6 ? arguments[6] : void 0;
-         const xq = Oq ? Eq : Eq * Float32Array.BYTES_PER_ELEMENT,
- ... (25 more removed lines; see GitHub link above)
+       static Interpolate(CC, zC, ZC, QC, wC) {
+         if (0 === CC) return 0;
+         const bC = 1 - 3 * QC + 3 * zC,
+           nC = 3 * QC - 6 * zC,
+           fC = 3 * zC;
+         let oC = CC;
+         for (let qC = 0; qC < 5; qC++) {
+           const zC = oC * oC;
+           oC -= (bC * (zC * oC) + nC * zC + fC * oC - CC) * (1 / (3 * bC * zC + 2 * nC * oC + fC)), oC = Math.min(1, Math.max(0, oC))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L58-L70` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L26) · [Before (L58-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L58-L70)

```diff
-       }
-       update(qq) {
-         this.create(qq)
-       }
-       updateDirectly(qq, Eq, gq) {
-         let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, qq, Yq ? Eq : Eq * Float32Array.BYTES_PER_ELEMENT, gq ? gq * this.byteStride : void 0), this._data = 0 === Eq && void 0 === gq ? qq : null)
-       }
-       _increaseReferences() {
-         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
-       }
-       dispose() {
-         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
+         return 3 * Math.pow(1 - oC, 2) * oC * ZC + 3 * (1 - oC) * Math.pow(oC, 2) * wC + Math.pow(oC, 3)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L74-L160` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L30-L31) · [Before (L74-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L74-L160)

```diff
-       get bM() {
-         return this._isDisposed
-       }
-       get instanceDivisor() {
-         return this._instanceDivisor
-       }
-       set instanceDivisor(qq) {
-         const Eq = 0 != qq;
-         this._instanceDivisor = qq, Eq !== this._instanced && (this._instanced = Eq, this._computeHashCode())
-       }
-       get _maxVerticesCount() {
-         const qq = this.getData();
-         return qq ? Array.isArray(qq) ? qq.length / (this.byteStride / 4) - this.byteOffset / 4 : (qq.byteLength - this.byteOffset) / this.byteStride : 0
-       }
-       constructor(qq, Eq, gq, Yq, lq, mq, Bq, Wq, Nq, aq) {
-         let Vq, dq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
- ... (71 more removed lines; see GitHub link above)
+       constructor(CC) {
+         this._radians = CC, this._radians < 0 && (this._radians += 2 * Math.PI)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L162-L163` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L33-L34) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L162-L163)

```diff
-       create(qq) {
-         this._buffer.create(qq), this._alignBuffer()
+       degrees() {
+         return 180 * this._radians / Math.PI
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L165-L166` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L36-L37) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L165-L166)

```diff
-       update(qq) {
-         this._buffer.update(qq), this._alignBuffer()
+       radians() {
+         return this._radians
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L168-L170` → after: `L39-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L39-L42) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L168-L170)

```diff
-       updateDirectly(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._buffer.updateDirectly(qq, Eq, void 0, gq), this._alignBuffer()
+       static BetweenTwoPoints(CC, zC) {
+         const ZC = zC.subtract(CC),
+           QC = Math.atan2(ZC.y, ZC.x);
+         return new fC(QC)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L172-L173` → after: `L44-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L44-L51) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L172-L173)

```diff
-       dispose() {
-         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
+       static BetweenTwoVectors(CC, zC) {
+         let ZC = CC.lengthSquared() * zC.lengthSquared();
+         if (0 === ZC) return new fC(Math.PI / 2);
+         ZC = Math.sqrt(ZC);
+         let QC = CC.dot(zC) / ZC;
+         QC = (0, wC.Clamp)(QC, -1, 1);
+         const bC = Math.acos(QC);
+         return new fC(bC)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L175-L178` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L53-L54) · [Before (L175-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L175-L178)

```diff
-       forEach(qq, Eq) {
-         (0, Oq.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, qq, this.normalized, ((qq, gq) => {
-           for (let Yq = 0; Yq < this._size; Yq++) Eq(qq[Yq], gq + Yq)
-         }))
+       static FromRadians(CC) {
+         return new fC(CC)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L180-L204` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L56-L57) · [Before (L180-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L180-L204)

```diff
-       _alignBuffer() {}
-     }
- 
-     function cq(qq) {
-       switch (qq) {
-         case Aq.UVKind:
-         case Aq.UV2Kind:
-         case Aq.UV3Kind:
-         case Aq.UV4Kind:
-         case Aq.UV5Kind:
-         case Aq.UV6Kind:
-           return 2;
-         case Aq.NormalKind:
-         case Aq.PositionKind:
-           return 3;
-         case Aq.ColorKind:
- ... (9 more removed lines; see GitHub link above)
+       static FromDegrees(CC) {
+         return new fC(CC * Math.PI / 180)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L237-L241` → after: `L61-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L61-L71) · [Before (L237-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L237-L241)

```diff
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.WB = 0, this.is32Bits = !1, this.uniqueId = Yq._Counter++
+       constructor(CC, zC, ZC) {
+         this.startPoint = CC, this.midPoint = zC, this.endPoint = ZC;
+         const QC = Math.pow(zC.x, 2) + Math.pow(zC.y, 2),
+           wC = (Math.pow(CC.x, 2) + Math.pow(CC.y, 2) - QC) / 2,
+           nC = (QC - Math.pow(ZC.x, 2) - Math.pow(ZC.y, 2)) / 2,
+           oC = (CC.x - zC.x) * (zC.y - ZC.y) - (zC.x - ZC.x) * (CC.y - zC.y);
+         this.centerPoint = new bC.n((wC * (zC.y - ZC.y) - nC * (CC.y - zC.y)) / oC, ((CC.x - zC.x) * nC - (zC.x - ZC.x) * wC) / oC), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = fC.BetweenTwoPoints(this.centerPoint, this.startPoint);
+         const qC = this.startAngle.degrees();
+         let FC = fC.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
+           WC = fC.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
+         FC - qC > 180 && (FC -= 360), FC - qC < -180 && (FC += 360), WC - FC > 180 && (WC -= 360), WC - FC < -180 && (WC += 360), this.orientation = FC - qC < 0 ? 0 : 1, this.angle = fC.FromDegrees(0 === this.orientation ? qC - WC : WC - qC)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L253-L286` → after: `L75-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L75-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L75-L142) · [Before (L253-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L253-L286)

```diff
-       constructor() {
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
-       }
-       getNormal() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || Eq && !this.pickedMesh.isVerticesDataPresent(lq.g.NormalKind)) return null;
-         let gq, Oq = this.pickedMesh.iYq();
-         0 === Oq?.length && (Oq = null);
-         const mq = Yq.o.Na[0],
-           xq = Yq.o.Na[1],
-           Aq = Yq.o.Na[2];
-         if (Eq) {
-           const qq = this.pickedMesh.getVerticesData(lq.g.NormalKind);
-           let Eq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId], mq) : mq.Vqq(qq[3 * this.faceId * 3], qq[3 * this.faceId * 3 + 1], qq[3 * this.faceId * 3 + 2]),
-             cq = Oq ? Yq.q.FromArrayToRef(qq, 3 * Oq[3 * this.faceId + 1], xq) : xq.Vqq(qq[3 * (3 * this.faceId + 1)], qq[3 * (3 * this.faceId + 1) + 1], qq[3 * (3 * this.faceId + 1) + 2]),
- ... (18 more removed lines; see GitHub link above)
+       constructor(CC, zC) {
+         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new bC.n(CC, zC))
+       }
+       addLineTo(CC, zC) {
+         if (this.closed) return this;
+         const ZC = new bC.n(CC, zC),
+           QC = this._points[this._points.length - 1];
+         return this._points.push(ZC), this._length += ZC.subtract(QC).length(), this
+       }
+       addArcTo(CC, zC, ZC, QC) {
+         let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
+         if (this.closed) return this;
+         const nC = this._points[this._points.length - 1],
+           fC = new bC.n(CC, zC),
+           qC = new bC.n(ZC, QC),
+           FC = new oC(nC, fC, qC);
+ ... (52 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L296-L349` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L149) · [Before (L296-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L296-L349)

```diff
-         return gq.normalize(), gq
-       }
-       getTextureCoordinates() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lq.g.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(qq)) return null;
-         const Eq = this.pickedMesh.iYq();
-         if (!Eq) return null;
-         const gq = this.pickedMesh.getVerticesData(qq);
-         if (!gq) return null;
-         let Oq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId]),
-           mq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId + 1]),
-           xq = Yq.p.FromArray(gq, 2 * Eq[3 * this.faceId + 2]);
-         return Oq = Oq.scale(this.bu), mq = mq.scale(this.bv), xq = xq.scale(1 - this.bu - this.bv), new Yq.p(Oq.x + mq.x + xq.x, Oq.y + mq.y + xq.y)
-       }
-     }
-   },
- ... (38 more removed lines; see GitHub link above)
+         return zC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L351-L352` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L151-L152) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L351-L352)

```diff
-       addMSAARenderBuffer(qq) {
-         this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(qq)
+       close() {
+         return this.closed = !0, this
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L354-L357` → after: `L154-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L154-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L154-L158) · [Before (L354-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L354-L357)

```diff
-       releaseMSAARenderBuffers() {
-         if (this._MSAARenderBuffers) {
-           for (const qq of this._MSAARenderBuffers) this._context.deleteRenderbuffer(qq);
-           this._MSAARenderBuffers = null
+       length() {
+         let CC = this._length;
+         if (this.closed) {
+           const zC = this._points[this._points.length - 1];
+           CC += this._points[0].subtract(zC).length()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L360-L602` → after: `L162-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L162-L166) · [Before (L360-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L360-L602)

```diff
-       getMSAARenderBuffer() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return this._MSAARenderBuffers?.[qq] ?? null
-       }
-       release() {
-         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
-       }
-     }
-   },
-   39653: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Hq
-     });
-     var Yq = gq(37156),
-       lq = gq(39612),
-       Oq = gq(37153),
- ... (227 more removed lines; see GitHub link above)
+       area() {
+         const CC = this._points.length;
+         let zC = 0;
+         for (let ZC = CC - 1, QC = 0; QC < CC; ZC = QC++) zC += this._points[ZC].x * this._points[QC].y - this._points[QC].x * this._points[ZC].y;
+         return .5 * zC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L604-L605` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L168-L169) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L604-L605)

```diff
-       get stencilTest() {
-         return this.enabled
+       getPoints() {
+         return this._points
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L607-L608` → after: `L171-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L171-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L171-L187) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L607-L608)

```diff
-       set stencilTest(qq) {
-         this.enabled = qq
+       getPointAtLengthPosition(CC) {
+         if (CC < 0 || CC > 1) return bC.n.Zero();
+         const zC = CC * this.length();
+         let ZC = 0;
+         for (let QC = 0; QC < this._points.length; QC++) {
+           const CC = (QC + 1) % this._points.length,
+             wC = this._points[QC],
+             nC = this._points[CC].subtract(wC),
+             fC = nC.length() + ZC;
+           if (zC >= ZC && zC <= fC) {
+             const CC = nC.normalize(),
+               QC = zC - ZC;
+             return new bC.n(wC.x + CC.x * QC, wC.y + CC.y * QC)
+           }
+           ZC = fC
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L610-L623` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L189-L190) · [Before (L610-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L610-L623)

```diff
-     }
-     Bq.ALWAYS = 519, Bq.KEEP = 7680, Bq.REPLACE = 7681;
-     var Wq = gq(39667),
-       Nq = gq(39636),
-       aq = gq(39593),
-       Vq = gq(39626),
-       dq = gq(39630);
- 
-     function jq(qq, Eq) {
-       if (Eq) {
-         const {
-           requestAnimationFrame: gq
-         } = Eq;
-         if ("function" === typeof gq) return gq(qq)
+       static StartingAt(CC, zC) {
+         return new qC(CC, zC)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L634-L668` → after: `L194-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L194-L199) · [Before (L634-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L634-L668)

```diff
-       get frameId() {
-         return this._frameId
-       }
-       get isWebGPU() {
-         return this._isWebGPU
-       }
-       _getShaderProcessor(qq) {
-         return this._shaderProcessor
-       }
-       _resetAlphaMode() {
-         this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
-       }
-       get shaderPlatformName() {
-         return this._shaderPlatformName
-       }
-       _clearEmptyResources() {
- ... (19 more removed lines; see GitHub link above)
+       static CreateQuadraticBezier(CC, zC, ZC, QC) {
+         QC = QC > 2 ? QC : 3;
+         const wC = [],
+           nC = (CC, zC, ZC, QC) => (1 - CC) * (1 - CC) * zC + 2 * CC * (1 - CC) * ZC + CC * CC * QC;
+         for (let fC = 0; fC <= QC; fC++) wC.push(new bC.r(nC(fC / QC, CC.x, zC.x, ZC.x), nC(fC / QC, CC.y, zC.y, ZC.y), nC(fC / QC, CC.z, zC.z, ZC.z)));
+         return new FC(wC)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L670-L671` → after: `L201-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L201-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L201-L206) · [Before (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L670-L671)

```diff
-       get stencilState() {
-         return this._stencilState
+       static CreateCubicBezier(CC, zC, ZC, QC, wC) {
+         wC = wC > 3 ? wC : 4;
+         const nC = [],
+           fC = (CC, zC, ZC, QC, wC) => (1 - CC) * (1 - CC) * (1 - CC) * zC + 3 * CC * (1 - CC) * (1 - CC) * ZC + 3 * CC * CC * (1 - CC) * QC + CC * CC * CC * wC;
+         for (let oC = 0; oC <= wC; oC++) nC.push(new bC.r(fC(oC / wC, CC.x, zC.x, ZC.x, QC.x), fC(oC / wC, CC.y, zC.y, ZC.y, QC.y), fC(oC / wC, CC.z, zC.z, ZC.z, QC.z)));
+         return new FC(nC)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L673-L674` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L208-L212) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L673-L674)

```diff
-       get stencilStateComposer() {
-         return this._stencilStateComposer
+       static CreateHermiteSpline(CC, zC, ZC, QC, wC) {
+         const nC = [],
+           fC = 1 / wC;
+         for (let oC = 0; oC <= wC; oC++) nC.push(bC.r.Hermite(CC, zC, ZC, QC, oC * fC));
+         return new FC(nC)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L676-L680` → after: `L214-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L214-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L214-L233) · [Before (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L676-L680)

```diff
-       _getGlobalDefines(qq) {
-         if (qq) return this.isNDCHalfZRange ? qq.IS_NDC_HALF_ZRANGE = "" : delete qq.IS_NDC_HALF_ZRANGE, this.vYq ? qq.USE_REVERSE_DEPTHBUFFER = "" : delete qq.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? qq.USE_EXACT_SRGB_CONVERSIONS = "" : delete qq.USE_EXACT_SR … [truncated]
-         {
-           let qq = "";
-           return this.isNDCHalfZRange && (qq += "#define IS_NDC_HALF_ZRANGE"), this.vYq && (qq && (qq += "\n"), qq += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (qq && (qq += "\n"), qq += "#define USE_EXACT_SRGB_CONVERSIONS"), qq
+       static CreateCatmullRomSpline(CC, zC, ZC) {
+         const QC = [],
+           wC = 1 / zC;
+         let nC = 0;
+         if (ZC) {
+           const ZC = CC.length;
+           for (let fC = 0; fC < ZC; fC++) {
+             nC = 0;
+             for (let oC = 0; oC < zC; oC++) QC.push(bC.r.CatmullRom(CC[fC % ZC], CC[(fC + 1) % ZC], CC[(fC + 2) % ZC], CC[(fC + 3) % ZC], nC)), nC += wC
+           }
+           QC.push(QC[0])
+         } else {
+           const ZC = [];
+           ZC.push(CC[0].clone()), ZC.push(...CC), ZC.push(CC[CC.length - 1].clone());
+           let fC = 0;
+           for (; fC < ZC.length - 3; fC++) {
+ ... (4 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L683-L694` → after: `L237-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L237-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L237-L269) · [Before (L683-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L683-L694)

```diff
-       _rebuildInternalTextures() {
-         const qq = this._internalTexturesCache.slice();
-         for (const Eq of qq) Eq._rebuild()
-       }
-       _rebuildRenderTargetWrappers() {
-         const qq = this._renderTargetWrapperCache.slice();
-         for (const Eq of qq) Eq.textures?.some((qq => 15 === qq.source)) || Eq._rebuild()
-       }
-       _rebuildEffects() {
-         for (const qq in this._compiledEffects) {
-           const Eq = this._compiledEffects[qq];
-           Eq._pipelineContext = null, Eq._prepareEffect()
+       static ArcThru3Points(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
+           wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         const fC = [],
+           oC = zC.subtract(CC),
+           qC = ZC.subtract(zC),
+           WC = CC.subtract(ZC),
+           NC = bC.r.Cross(oC, qC),
+           MC = NC.length();
+         if (MC < Math.pow(10, -8)) return new FC(fC);
+         const gC = oC.lengthSquared(),
+           SC = qC.lengthSquared(),
+           pC = WC.lengthSquared(),
+           PC = NC.lengthSquared(),
+           GC = .5 * oC.length() * qC.length() * WC.length() / MC,
+ ... (17 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L696-L718` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L271) · [Before (L696-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L696-L718)

```diff
-         lq.d.ResetCache()
-       }
-       _rebuildGraphicsResources() {
-         this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
-       }
-       _flagContextRestored() {
-         mq.b.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
-       }
-       _restoreEngineAfterContextLost(qq) {
-         setTimeout((() => {
-           this._clearEmptyResources();
-           const Eq = this._depthCullingState.depthTest,
-             gq = this._depthCullingState.depthFunc,
-             Yq = this._depthCullingState.depthMask,
-             lq = this._stencilState.stencilTest;
-           qq(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Eq, this._depthCullingState.depthFunc = gq, this._depthCullingState.depthMask = Yq, this._stencilState.stencilTest = lq, this._flagContextRestored()
- ... (7 more removed lines; see GitHub link above)
+         return new FC(fC)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L720-L735` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L273-L274) · [Before (L720-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L720-L735)

```diff
-       set snapshotRendering(qq) {}
-       get snapshotRenderingMode() {
-         return 0
-       }
-       set snapshotRenderingMode(qq) {}
-       getClassName() {
-         return "AbstractEngine"
-       }
-       get emptyTexture() {
-         return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
-       }
-       get emptyTexture3D() {
-         return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
-       }
-       get emptyTexture2DArray() {
-         return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
+       constructor(CC) {
+         this._length = 0, this._points = CC, this._length = this._computeLength(CC)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L737-L743` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L276-L277) · [Before (L737-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L737-L743)

```diff
-       get emptyCubeTexture() {
-         if (!this._emptyCubeTexture) {
-           const qq = new Uint8Array(4),
-             Eq = [qq, qq, qq, qq, qq, qq];
-           this._emptyCubeTexture = this.createRawCubeTexture(Eq, 1, 5, 0, !1, !1, 1)
-         }
-         return this._emptyCubeTexture
+       getPoints() {
+         return this._points
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L745-L746` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L279-L280) · [Before (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L745-L746)

```diff
-       set framebufferDimensionsObject(qq) {
-         this._framebufferDimensionsObject = qq
+       length() {
+         return this._length
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L748-L749` → after: `L282-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L282-L287) · [Before (L748-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L748-L749)

```diff
-       get activeRenderLoops() {
-         return this._activeRenderLoops
+       continue (CC) {
+         const zC = this._points[this._points.length - 1],
+           ZC = this._points.slice(),
+           QC = CC.getPoints();
+         for (let wC = 1; wC < QC.length; wC++) ZC.push(QC[wC].subtract(QC[0]).add(zC));
+         return new FC(ZC)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L751-L754` → after: `L289-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L289-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L289-L292) · [Before (L751-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L751-L754)

```diff
-       stopRenderLoop(qq) {
-         if (!qq) return this._activeRenderLoops.length = 0, void this._cancelFrame();
-         const Eq = this._activeRenderLoops.indexOf(qq);
-         Eq >= 0 && (this._activeRenderLoops.splice(Eq, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
+       _computeLength(CC) {
+         let zC = 0;
+         for (let ZC = 1; ZC < CC.length; ZC++) zC += CC[ZC].subtract(CC[ZC - 1]).length();
+         return zC
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L756-L763` → after: `L294-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L294-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L294-L333) · [Before (L756-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L756-L763)

```diff
-       _cancelFrame() {
-         if (this.customAnimationFrameRequester) {
-           if (0 !== this._frameHandler) {
-             this._frameHandler = 0;
-             const {
-               cancelAnimationFrame: qq
-             } = this.customAnimationFrameRequester;
-             qq && qq(this.customAnimationFrameRequester.aa), delete this.customAnimationFrameRequester.aa
+     }
+   },
+   38501: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(38507);
+     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
+       ...CC
+     } : null : CC.clone(zC) : null;
+     class bC {
+       static DeepCopy(CC, zC, ZC, bC) {
+         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const fC = function(CC) {
+           const zC = [];
+           do {
+ ... (24 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L807-L863` → after: `L337-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L337-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L337-L349) · [Before (L807-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L807-L863)

```diff
-       _renderViews() {
-         return !1
-       }
-       _queueNewFrame(qq, Eq) {
-         return jq(qq, Eq)
-       }
-       _queueNewFrameForRenderLoop() {
-         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.aa = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.a … [truncated]
-       }
-       runRenderLoop(qq) {
-         -1 === this._activeRenderLoops.indexOf(qq) && (this._activeRenderLoops.push(qq), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
-       }
-       getDepthBuffer() {
-         return this._depthCullingState.depthTest
-       }
-       setDepthBuffer(qq) {
- ... (41 more removed lines; see GitHub link above)
+     }
+   },
+   38507: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
+     });
+     class QC {
+       static _CheckLimit(CC, zC) {
+         let ZC = QC._LogLimitOutputs[CC];
+         return ZC ? ZC.current++ : (ZC = {
+           limit: zC,
+           current: 1
+         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L865-L866` → after: `L351-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L351-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L351-L356) · [Before (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L865-L866)

```diff
-       createCanvasImage() {
-         return document.createElement("img")
+       static _GenerateLimitMessage(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ZC = QC._LogLimitOutputs[CC];
+         if (!ZC || !QC.MessageLimitReached) return;
+         const wC = this._Levels[zC];
+         ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L868-L869` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L358-L359) · [Before (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L868-L869)

```diff
-       createCanvasPath2D(qq) {
-         return new Path2D(qq)
+       static _AddLogEntry(CC) {
+         QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L871-L873` → after: `L361-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L361-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L361-L364) · [Before (L871-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L871-L873)

```diff
-       get description() {
-         let qq = this.name + this.version;
-         return this._caps.parallelShaderCompile && (qq += " - Parallel shader compilation"), qq
+       static _FormatMessage(CC) {
+         const zC = CC => CC < 10 ? "0" + CC : "" + CC,
+           ZC = new Date;
+         return "[" + zC(ZC.getHours()) + ":" + zC(ZC.getMinutes()) + ":" + zC(ZC.getSeconds()) + "]: " + CC
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L875-L8824` → after: `L366-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L366-L368) · [Before (L875-L8824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L875-L8824)

```diff
-       _createTextureBase(qq, Eq, gq, Yq) {
-         let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
-           xq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-           Aq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
-           cq = arguments.length > 7 ? arguments[7] : void 0,
-           uq = arguments.length > 8 ? arguments[8] : void 0,
-           Bq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
-           Wq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
-           Nq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
-           Vq = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
-           dq = arguments.length > 13 ? arguments[13] : void 0,
-           jq = arguments.length > 14 ? arguments[14] : void 0,
-           oq = arguments.length > 15 ? arguments[15] : void 0;
-         const Pq = "data:" === (qq = qq || "").substring(0, 5),
-           Qq = "blob:" === qq.substring(0, 5),
-           yq = Pq && -1 !== qq.indexOf(";base64,"),
- ... (7934 more removed lines; see GitHub link above)
+       static _LogDisabled(CC, zC) {}
+       static _LogEnabled() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L8826-L9630` → after: `L370-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L370-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/244.js#L370-L408) · [Before (L8826-L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/244.js#L8826-L9630)

```diff
-           gq = arguments.length > 2 ? arguments[2] : void 0,
-           Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-           Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (this.frameGraph) {
-           this._renderWithFrameGraph(!0, !1, !0);
-           const mq = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
-           for (const qq of mq) qq.objectRenderer._freezeActiveMeshes(Yq);
-           return this._freezeActiveMeshesCancel = (0, lq.e)((() => {
-             let qq = !0,
-               Eq = !0;
-             for (const gq of mq) qq && (qq = gq.objectRenderer._isFrozen), Eq && (Eq = null !== gq.objectRenderer._freezeActiveMeshesCancel);
-             if (qq) return !0;
-             if (!Eq) throw new Error("Freezing active meshes was cancelled");
-             return !1
-           }), (() => {
-             this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Oq, this._skipEvaluateActiveMeshesCompletely = qq, Eq?.()
- ... (789 more removed lines; see GitHub link above)
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         const wC = Array.isArray(zC) ? zC[0] : zC;
+         if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
+         const bC = QC._FormatMessage(wC),
+           nC = this._Levels[CC],
+           fC = Array.isArray(zC) ? zC.slice(1) : [];
+         nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
+         const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
+         QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
+       }
+       static get LogCache() {
+         return QC._LogCache
+       }
+       static ClearLogCache() {
+         QC._LogCache = "", QC._LogLimitOutputs = {}, QC.errorsCount = 0
+       }
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/245.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/245.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/245.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/245.js#L2)

```diff
- export const ids = [245, 346];
+ export const ids = [245];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L4` → after: `L4-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L4-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/245.js#L4-L294) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/245.js#L4)

```diff
-   39617: (qq, Eq, gq) => {
+   38631: (CC, zC, ZC) => {
+     var QC = {
+       "./cape_cow_cream.png": 27940,
+       "./cape_cow_normal.png": 27949,
+       "./cape_creator_level1.png": 27958,
+       "./cape_creator_level2.png": 27960,
+       "./cape_creator_level3.png": 27965,
+       "./cape_none.png": 27970,
+       "./cape_pig.png": 27978,
+       "./cape_sheep.png": 27981,
+       "./cape_super.png": 27987,
+       "./cape_super_inverted.png": 27996,
+       "./cape_youtuber.png": 28e3
+     };
+ 
+     function wC(CC) {
+ ... (275 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L6` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/245.js#L296) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/245.js#L6)

```diff
-       d: () => Yq
+       e: () => NC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L8-L19` → after: `L298-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L298-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/245.js#L298-L369) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/245.js#L8-L19)

```diff
-     class Yq {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersRepository : Yq.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.ShadersStore : Yq.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Yq.IncludesShadersStore : Yq.IncludesShadersStoreWGSL
-       }
-     }
-     Yq.ShadersRepository = "src/Shaders/", Yq.ShadersStore = {}, Yq.IncludesShadersStore = {}, Yq.ShadersRepositoryWGSL = "src/ShadersWGSL/", Yq.ShadersStoreWGSL = {}, Yq.IncludesShadersStoreWGSL = {}
+     var QC = ZC(37044),
+       wC = ZC(37059),
+       bC = ZC(37301),
+       nC = ZC(37061),
+       fC = ZC(37050);
+ 
+     function oC(CC) {
+       return `\n\t\t\t\t${(0,fC.u)(CC,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, fC.w)(CC, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, fC.w)(CC, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, fC.l)(CC, "mat2", "c", "s", "-s", "c")
+ ... (56 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L21` → after: `L371-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L371-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/245.js#L371-L414) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/245.js#L21)

```diff
-   61138: (qq, Eq, gq) => {
+   38517: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => FC,
+       c: () => WC
+     });
+     var QC = ZC(37044),
+       wC = ZC(37301),
+       bC = ZC(37050),
+       nC = ZC(37061);
+     const fC = "bloxdTextLodBias",
+       oC = [{
+         name: fC,
+         type: "float"
+       }],
+       qC = "bloxdTextSample",
+       FC = {
+ ... (28 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L23` → after: `L416-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L416-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/245.js#L416-L419) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/245.js#L23)

```diff
-       postprocessVertexShader: () => mq
+       CapeMaterialPlugin: () => AC,
+       HueTintMaterialPlugin: () => xC,
+       LifeformMaterialPlugin: () => JC,
+       OverlayMaterialPlugin: () => IC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L25-L28` → after: `L421-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L421-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/245.js#L421-L578) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/245.js#L25-L28)

```diff
-     var Yq = gq(39617);
-     const lq = "postprocessVertexShader",
-       Oq = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     Yq.d.ShadersStore[lq] || (Yq.d.ShadersStore[lq] = Oq);
+     var QC = ZC(40958),
+       wC = ZC(37849);
+     class bC extends((0, QC.g)(wC.e)) {}(0, QC.i)(wC.e, bC);
+     var nC = ZC(37040);
+     class fC extends((0, QC.g)(nC.f)) {}(0, QC.i)(nC.f, fC);
+     var oC = ZC(37677);
+     class qC extends((0, QC.g)(oC.d)) {}(0, QC.i)(oC.d, qC);
+     var FC = ZC(37290),
+       WC = ZC(40092),
+       NC = ZC(37285);
+     class MC extends((0, QC.g)(NC.d)) {
+       constructor(CC, zC, ZC) {
+         super(CC, zC, ZC), (0, FC.g)(CC)
+       }
+       dispose(CC) {
+         (0, FC.k)(this._material), super.dispose(CC)
+ ... (142 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L30-L31` → after: `L580-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L580-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/245.js#L580-L890) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/245.js#L30-L31)

```diff
-       name: lq,
-       shader: Oq
+       Mesh: dC.e,
+       TransformNode: EC.c,
+       gg: hC.c,
+       VertexBuffer: hC.f,
+       BoundingInfo: KC.d,
+       Eg: YC.Eg,
+       ArenaBuffer: cC,
+       SubMesh: HC.d,
+       VertexData: mC.e,
+       MirroredGeometry: XC.d,
+       meshFromArrays: XC.e,
+       plainMeshFromArrays: XC.f
+     };
+     (0, lC.e)(uC);
+     var rC = ZC(37290);
+     class sC extends(GC(FC.f)) {
+ ... (295 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (67 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 1. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4-L12` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L4-L8) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L4-L12)

```diff
-   39817: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Wq,
-       d: () => Bq,
-       h: () => Aq,
-       l: () => Nq,
-       o: () => cq,
-       q: () => xq,
-       r: () => uq
+   40923: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       openMobLineupPreview: () => sC,
+       openMobPreview: () => rC,
+       openPetPreview: () => TC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L14-L46` → after: `L10-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L10-L37) · [Before (L14-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L14-L46)

```diff
-     var Yq = gq(38653),
-       lq = gq(39819);
- 
-     function Oq(qq, Eq, gq, Yq) {
-       switch (Eq) {
-         case 5120: {
-           let Eq = qq.getInt8(gq);
-           return Yq && (Eq = Math.max(Eq / 127, -1)), Eq
-         }
-         case 5121: {
-           let Eq = qq.getUint8(gq);
-           return Yq && (Eq /= 255), Eq
-         }
-         case 5122: {
-           let Eq = qq.getInt16(gq, !0);
-           return Yq && (Eq = Math.max(Eq / 32767, -1)), Eq
- ... (17 more removed lines; see GitHub link above)
+     var QC = ZC(39635),
+       wC = ZC(39902),
+       bC = ZC(40925),
+       nC = ZC(37138),
+       fC = ZC(36961),
+       oC = ZC(40076),
+       qC = ZC(40946),
+       FC = ZC(38300),
+       WC = ZC(37032),
+       NC = ZC(37014),
+       MC = ZC(36952),
+       gC = ZC(38206),
+       SC = ZC(38201),
+       pC = ZC(37934),
+       PC = ZC(37988),
+       GC = ZC(37959),
+ ... (12 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L48-L76` → after: `L39-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L39-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L39-L56) · [Before (L48-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L48-L76)

```diff
-     function mq(qq, Eq, gq, Yq, Oq) {
-       switch (Eq) {
-         case 5120:
-           Yq && (Oq = Math.round(127 * Oq)), qq.setInt8(gq, Oq);
-           break;
-         case 5121:
-           Yq && (Oq = Math.round(255 * Oq)), qq.setUint8(gq, Oq);
-           break;
-         case 5122:
-           Yq && (Oq = Math.round(32767 * Oq)), qq.setInt16(gq, Oq, !0);
-           break;
-         case 5123:
-           Yq && (Oq = Math.round(65535 * Oq)), qq.setUint16(gq, Oq, !0);
-           break;
-         case 5131:
-           qq.setUint16(gq, (0, lq.j)(Oq), !0);
- ... (13 more removed lines; see GitHub link above)
+     function dC() {
+       if (null !== hC) return hC;
+       const CC = document.createElement("canvas");
+       CC.classList.add("MobPreviewCanvas");
+       const zC = new QC.d(CC, !0, {
+         preserveDrawingBuffer: !0
+       });
+       zC.BZC = (0, AC.e)().Vg.engine.BZC;
+       const ZC = new wC.e(zC);
+       ZC.clearColor = new nC.e(0, 0, 0, 0), ZC.ambientColor = new nC.Color3(1, 1, 1);
+       const qC = new bC.d("cp", Math.PI / 2, Math.PI / 2, JC, fC.Eg.Zero(), ZC),
+         FC = new oC.e("light", new fC.Eg(-.1, 1, -.3), ZC);
+       return FC.diffuse = new nC.Color3(1, 1, 1), FC.specular = new nC.Color3(1, 1, 1), FC.groundColor = new nC.Color3(.5, .5, .5), hC = {
+         engine: zC,
+         sS: ZC,
+         canvas: CC,
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L80-L94` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L60-L62) · [Before (L80-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L80-L94)

```diff
-       switch (qq) {
-         case 5120:
-         case 5121:
-           return 1;
-         case 5122:
-         case 5123:
-         case 5131:
-           return 2;
-         case 5124:
-         case 5125:
-         case 5126:
-           return 4;
-         default:
-           throw new Error(`Invalid type '${qq}'`)
-       }
+       return KC[CC] ??= (0, pC.t)(CC, dC().sS, !0).catch((zC => {
+         throw delete KC[CC], zC
+       })), KC[CC]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L97-L141` → after: `L65-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L65-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L65-L69) · [Before (L97-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L97-L141)

```diff
-     function Aq(qq, Eq, gq, Yq, lq, Aq, cq, uq) {
-       const Bq = new Array(Yq),
-         Wq = new Array(Yq);
-       if (qq instanceof Array) {
-         let lq = Eq / 4;
-         const Oq = gq / 4;
-         for (let Eq = 0; Eq < Aq; Eq += Yq) {
-           for (let Eq = 0; Eq < Yq; Eq++) Bq[Eq] = Wq[Eq] = qq[lq + Eq];
-           uq(Wq, Eq);
-           for (let Eq = 0; Eq < Yq; Eq++) Bq[Eq] !== Wq[Eq] && (qq[lq + Eq] = Wq[Eq]);
-           lq += Oq
-         }
-       } else {
-         const Nq = ArrayBuffer.isView(qq) ? new DataView(qq.buffer, qq.byteOffset, qq.byteLength) : new DataView(qq),
-           aq = xq(lq);
-         for (let qq = 0; qq < Aq; qq += Yq) {
- ... (29 more removed lines; see GitHub link above)
+     function HC(CC) {
+       let zC = YC.get(CC);
+       return zC || (zC = RC.x[CC].loadModel(dC().sS, !1).then((CC => (CC.IK(!1), CC)), (zC => {
+         throw YC.delete(CC), zC
+       })), YC.set(CC, zC)), zC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L144-L193` → after: `L72-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L72-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L72-L121) · [Before (L144-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L144-L193)

```diff
-     function uq(qq, Eq, gq, lq, Oq, mq, cq) {
-       const uq = xq(gq),
-         Bq = function(qq) {
-           switch (qq) {
-             case 5120:
-               return Int8Array;
-             case 5121:
-               return Uint8Array;
-             case 5122:
-               return Int16Array;
-             case 5123:
-             case 5131:
-               return Uint16Array;
-             case 5124:
-               return Int32Array;
-             case 5125:
- ... (34 more removed lines; see GitHub link above)
+     function EC(CC) {
+       var zC, ZC, QC;
+       let {
+         mobType: wC,
+         variation: bC,
+         animation: nC
+       } = CC, oC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, JC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const vC = null !== (zC = null === oC || void 0 === oC ? void 0 : oC.size) && void 0 !== zC ? zC : 1,
+         eC = null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.cosmetics) && void 0 !== ZC ? ZC : [],
+         hC = null !== (QC = null === oC || void 0 === oC ? void 0 : oC.Hx) && void 0 !== QC ? QC : null;
+       let KC = !1,
+         YC = null,
+         EC = null;
+       const {
+         engine: lC,
+         sS: XC
+ ... (34 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L220-L227` → after: `L126-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L126-L130) · [Before (L220-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L220-L227)

```diff
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       if (Array.isArray(qq)) {
-         for (let lq = 0; lq < Eq; lq++)
-           if (qq[gq + lq] - Yq > 65535) return !0;
-         return !1
-       }
-       return 4 === qq.BYTES_PER_ELEMENT
+       return EC({
+         mobType: "NPC",
+         variation: null,
+         animation: CC.animation
+       }, CC, zC)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L231-L274` → after: `L134-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L134-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L134-L159) · [Before (L231-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L231-L274)

```diff
-       const Eq = qq.buffer;
-       if (Eq instanceof ArrayBuffer) return qq;
-       const gq = new ArrayBuffer(qq.byteLength);
-       return new Uint8Array(gq).set(new Uint8Array(Eq, qq.byteOffset, qq.byteLength)), gq
-     }
-   },
-   39640: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => rq,
-       f: () => yq,
-       k: () => tq,
-       g: () => fq,
-       n: () => Mq
-     });
-     class Yq {
-       constructor() {
- ... (28 more removed lines; see GitHub link above)
+       let {
+         mobType: zC,
+         variation: ZC,
+         metaInfo: QC,
+         tamed: wC
+       } = CC, bC = !1, nC = null, fC = 0;
+       const oC = (0, AC.e)(),
+         qC = oC.Vg.nH,
+         FC = CC => {
+           fC += eC * (CC / 1e3) % (2 * Math.PI), qC.setRotationEulerY(nC, fC)
+         };
+       return mC(zC).then((CC => {
+         if (bC) return;
+         nC = (0, pC.l)(zC, vC, !0, !0), qC.setPosition(nC, 0, -vC, 0), CC.meshApi.updateVariation(nC, zC, ZC);
+         const fC = {
+           wool: "Sheared" !== QC,
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L278-L282` → after: `L163-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L163-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L163-L172) · [Before (L278-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L278-L282)

```diff
-       constructor() {
-         this._lines = []
-       }
-       get currentLine() {
-         return this._lines[this.lineIndex]
+       constructor(CC, zC) {
+         this.place = zC, this.remove = null;
+         const {
+           engine: ZC,
+           sS: QC,
+           canvas: wC
+         } = dC();
+         CC.appendChild(wC), ZC.resize(), ZC.runRenderLoop((() => {
+           QC.render()
+         }))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L284-L285` → after: `L174-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L174-L176) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L284-L285)

```diff
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
+       show(CC) {
+         var zC;
+         null === (zC = this.remove) || void 0 === zC || zC.call(this), this.remove = this.place(CC)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L287-L311` → after: `L178-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L178-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L178-L183) · [Before (L287-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L287-L311)

```diff
-       set lines(qq) {
-         this._lines.length = 0;
-         for (const Eq of qq) {
-           if (!Eq || "\r" === Eq) continue;
-           if ("#" === Eq[0]) {
-             this._lines.push(Eq);
-             continue
-           }
-           const qq = Eq.trim();
-           if (!qq) continue;
-           if (qq.startsWith("//")) {
-             this._lines.push(Eq);
-             continue
-           }
-           const gq = qq.indexOf(";");
-           if (-1 === gq) this._lines.push(qq);
- ... (9 more removed lines; see GitHub link above)
+       resize(CC, zC) {
+         const {
+           engine: ZC,
+           canvas: QC
+         } = dC();
+         QC.width = CC, QC.height = zC, ZC.resize()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L313-L325` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L185-L187) · [Before (L313-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L313-L325)

```diff
-     }
-     class Oq extends Yq {
-       process(qq, Eq, gq) {
-         for (let Yq = 0; Yq < this.children.length; Yq++) {
-           const lq = this.children[Yq];
-           if (lq.isValid(qq)) return lq.process(qq, Eq, gq)
-         }
-         return ""
-       }
-     }
-     class mq extends Yq {
-       isValid(qq) {
-         return this.testExpression.isTrue(qq)
+       close() {
+         var CC;
+         dC().engine.stopRenderLoop(), null === (CC = this.remove) || void 0 === CC || CC.call(this), this.remove = null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L390-L413` → after: `L192-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L192-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L192-L214) · [Before (L390-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L390-L413)

```diff
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         super(), this.define = qq, this.not = Eq
-       }
-       isTrue(qq) {
-         let Eq = void 0 !== qq[this.define];
-         return this.not && (Eq = !Eq), Eq
-       }
-     }
-     class cq extends xq {
-       isTrue(qq) {
-         return this.leftOperand.isTrue(qq) || this.rightOperand.isTrue(qq)
-       }
-     }
-     class uq extends xq {
-       isTrue(qq) {
-         return this.leftOperand.isTrue(qq) && this.rightOperand.isTrue(qq)
- ... (8 more removed lines; see GitHub link above)
+         this.preview = void 0, this.view = {
+           figures: [],
+           shown: []
+         }, this.aspect = 1, this.placed = [], this.preview = new cC(CC, (() => () => {}))
+       }
+       show(CC) {
+         CC.figures !== this.view.figures && this.preload(CC.figures), this.view = CC, this.place()
+       }
+       resize(CC, zC) {
+         this.preview.resize(CC, zC), this.aspect = CC / zC, this.place()
+       }
+       close() {
+         this.preview.close();
+         for (const CC of this.placed) null === CC || void 0 === CC || CC.remove();
+         this.placed = []
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L415-L439` → after: `L216-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L216-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L216-L233) · [Before (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L415-L439)

```diff
-       isTrue(qq) {
-         let Eq = !1;
-         const gq = parseInt(void 0 != qq[this.define] ? qq[this.define] : this.define),
-           Yq = parseInt(void 0 != qq[this.testValue] ? qq[this.testValue] : this.testValue);
-         if (isNaN(gq) || isNaN(Yq)) return !1;
-         switch (this.operand) {
-           case ">":
-             Eq = gq > Yq;
-             break;
-           case "<":
-             Eq = gq < Yq;
-             break;
-           case "<=":
-             Eq = gq <= Yq;
-             break;
-           case ">=":
- ... (9 more removed lines; see GitHub link above)
+       place() {
+         const {
+           figures: CC,
+           shown: zC
+         } = this.view, ZC = CC.map(((ZC, QC) => {
+           var wC;
+           const bC = null !== (wC = this.placed[QC]) && void 0 !== wC ? wC : null;
+           if (!zC[QC]) return null === bC || void 0 === bC || bC.remove(), null;
+           const nC = (fC = (QC + .5) / CC.length, oC = this.aspect, (.5 - fC) * (2 * JC * Math.tan(dC().camera.fov / 2)) * oC);
+           var fC, oC;
+           return null !== bC && bC.figure === ZC && bC.x === nC ? bC : (null === bC || void 0 === bC || bC.remove(), {
+             figure: ZC,
+             x: nC,
+             remove: lC(ZC, nC)
+           })
+         }));
+ ... (2 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L454` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L238) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L454)

```diff
-       qq.processor && qq.processor.initializeShaders && qq.processor.initializeShaders(qq.processingContext)
+       return new cC(CC, EC)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L457-L479` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L241-L242) · [Before (L457-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L457-L479)

```diff
-     function tq(qq, Eq, gq, Yq) {
-       Eq.processor?.preProcessShaderCode && (qq = Eq.processor.preProcessShaderCode(qq, Eq.isFragment)), fq(qq, Eq, (qq => {
-         Eq.processCodeAfterIncludes && (qq = Eq.processCodeAfterIncludes(Eq.isFragment ? "fragment" : "vertex", qq, Eq.defines));
-         const lq = function(qq, Eq, gq) {
-           let Yq = function(qq, Eq) {
-             if (Eq.processor?.noPrecision) return qq;
-             const gq = Eq.shouldUseHighPrecisionShader; - 1 === qq.indexOf("precision highp float") ? qq = gq ? "precision highp float;\n" + qq : "precision mediump float;\n" + qq : gq || (qq = qq.replace("precision highp float", "precision mediump float"));
-             return qq
-           }(qq, Eq);
-           if (!Eq.processor) return Yq;
-           if (0 === Eq.processor.shaderLanguage && -1 !== Yq.indexOf("#version 3") && (Yq = Yq.replace("#version 300 es", ""), !Eq.processor.parseGLES3)) return Yq;
-           const lq = Eq.defines,
-             Oq = Zq(Eq, gq);
-           Eq.processor.preProcessor && (Yq = Eq.processor.preProcessor(Yq, lq, Oq, Eq.isFragment, Eq.processingContext));
-           const mq = {};
-           Yq = iq(Yq, Oq, Eq, mq), Eq.processor.postProcessor && (Yq = Eq.processor.postProcessor(Yq, lq, Eq.isFragment, Eq.processingContext, gq ? {
- ... (7 more removed lines; see GitHub link above)
+     function sC(CC) {
+       return new uC(CC)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L482-L486` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L245-L246) · [Before (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L482-L486)

```diff
-     function rq(qq, Eq, gq) {
-       return gq.processor && gq.processor.finalizeShaders ? gq.processor.finalizeShaders(qq, Eq, gq.processingContext) : {
-         vertexCode: qq,
-         fragmentCode: Eq
-       }
+     function TC(CC) {
+       return new cC(CC, XC)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L490-L500` → after: `L260-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L260-L270) · [Before (L490-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L490-L500)

```diff
-       const Eq = /defined\((.+)\)/.exec(qq);
-       if (Eq && Eq.length) return new Aq(Eq[1].trim(), "!" === qq[0]);
-       const gq = ["==", "!=", ">=", "<=", "<", ">"];
-       let Yq = "",
-         lq = 0;
-       for (Yq of gq)
-         if (lq = qq.indexOf(Yq), lq > -1) break;
-       if (-1 === lq) return new Aq(qq);
-       const Oq = qq.substring(0, lq).trim(),
-         mq = qq.substring(lq + Yq.length).trim();
-       return new Bq(Oq, Yq, mq)
+       return `\n\t\t\t\t${(0,fC.u)(CC,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, fC.w)(CC, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, fC.w)(CC, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, fC.l)(CC, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L504-L522` → after: `L274-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L274-L277) · [Before (L504-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L504-L522)

```diff
-       const gq = new mq,
-         Yq = qq.substring(0, Eq);
-       let lq = qq.substring(Eq);
-       return lq = lq.substring(0, (lq.indexOf("//") + 1 || lq.length + 1) - 1).trim(), gq.testExpression = "#ifdef" === Yq ? new Aq(lq) : "#ifndef" === Yq ? new Aq(lq, !0) : function(qq) {
-         qq = qq.replace(aq, "defined[$1]");
-         const Eq = xq.infixToPostfix(qq),
-           gq = [];
-         for (const lq of Eq)
-           if ("||" !== lq && "&&" !== lq) gq.push(lq);
-           else if (gq.length >= 2) {
-           let qq = gq[gq.length - 1],
-             Eq = gq[gq.length - 2];
-           gq.length -= 2;
-           const Yq = "&&" == lq ? new uq : new cq;
-           "string" === typeof qq && (qq = qq.replace(Vq, "defined($1)")), "string" === typeof Eq && (Eq = Eq.replace(Vq, "defined($1)")), Yq.leftOperand = "string" === typeof Eq ? vq(Eq) : Eq, Yq.rightOperand = "string" === typeof qq ? vq(qq) : qq, gq.push(Yq)
-         }
- ... (3 more removed lines; see GitHub link above)
+       let ZC = (0, fC.ob)(CC, "skele" + (zC - 1));
+       for (let wC = zC - 2; wC >= 0; wC--) ZC = (0, fC.fb)(CC, `boneIdx == ${wC}`, (0, fC.ob)(CC, `skele${wC}`), ZC);
+       const QC = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,fC.w)(CC,"int","boneIdx",(0,fC.jb)(CC,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,fC.w)(CC,"vec3","bone",ZC)}\n\t\t\t\t${(0,fC.w)(CC,"vec2","pivot",(0,fC.l)(CC,"vec2","0.0",`${(0,fC.wb)(CC,"position")}.z`))}\n\t\t\t\t${(0,fC.S)(CC)?`positi … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L525-L538` → after: `L280-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L280-L281) · [Before (L525-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L525-L538)

```diff
-     function nq(qq, Eq, gq, lq) {
-       let Oq;
-       for (; bq(qq, gq, lq);) {
-         Oq = qq.currentLine;
-         const mq = Oq.substring(0, 5).toLowerCase();
-         if ("#else" === mq) {
-           const gq = new Yq;
-           return Eq.children.push(gq), void bq(qq, gq, lq)
-         }
-         if ("#elif" === mq) {
-           const qq = hq(Oq, 5);
-           Eq.children.push(qq), gq = qq
-         }
-       }
+     function FC(CC) {
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,fC.l)(CC,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L540-L581` → after: `L283-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L283-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L283-L288) · [Before (L540-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L540-L581)

```diff
- 
-     function bq(qq, Eq, gq) {
-       for (; qq.canRead;) {
-         qq.lineIndex++;
-         const lq = qq.currentLine;
-         if (lq.indexOf("#") >= 0) {
-           const Yq = Qq.exec(lq);
-           if (Yq && Yq.length) {
-             switch (Yq[0]) {
-               case "#ifdef": {
-                 const Yq = new Oq;
-                 Eq.children.push(Yq);
-                 const mq = hq(lq, 6);
-                 Yq.children.push(mq), nq(qq, Yq, mq, gq);
-                 break
-               }
- ... (26 more removed lines; see GitHub link above)
+     const WC = {
+         x: 0,
+         y: 0,
+         z: 0,
+         azC(CC, zC) {
+           return this.x = CC[zC], this.y = CC[zC + 1], this.z = CC[zC + 2], this
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L583-L640` → after: `L290-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L290-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L290-L320) · [Before (L583-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L583-L640)

```diff
-       }
-       return !1
-     }
- 
-     function iq(qq, Eq, gq, Oq) {
-       const mq = new Yq,
-         xq = new lq;
-       return xq.lineIndex = -1, xq.lines = qq.split("\n"), bq(xq, mq, Oq), mq.process(Eq, gq, Oq)
-     }
- 
-     function Zq(qq, Eq) {
-       const gq = qq.defines,
-         Yq = {};
-       for (const lq of gq) {
-         const qq = lq.replace("#define", "").replace(";", "").trim().split(" ");
-         Yq[qq[0]] = qq.length > 1 ? qq[1] : ""
- ... (42 more removed lines; see GitHub link above)
+       },
+       NC = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (CC, zC) => ({
+           ...(0, QC.b)("CAPE"),
+           BLOXD_CAPE_BONES: `${CC}`,
+           BLOXD_CAPE_MAX_Y: (0, wC.vb)(zC)
+         }),
+         getUniforms(CC) {
+           return (0, bC.d)(function(CC) {
+             const zC = [];
+             for (let ZC = 0; ZC < CC; ZC++) zC.push({
+               name: `skele${ZC}`,
+               type: "highp vec3"
+ ... (15 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L644-L653` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L323-L324) · [Before (L644-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L644-L653)

```diff
-       }
-       Pq.length = 0;
-       const mq = lq.join("");
-       Oq ? fq(mq.toString(), Eq, gq) : gq(mq)
-     }
-     const Mq = {
-       loadFile: (qq, Eq, gq, Yq, lq, Oq) => {
-         throw (0, Wq.m)("FileTools")
-       }
-     }
+       };
+     (0, nC.o)(NC)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L655` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L326) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L655)

```diff
-   39630: (qq, Eq, gq) => {
+   38517: (CC, zC, ZC) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L657-L661` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L328-L329) · [Before (L657-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L657-L661)

```diff
-       e: () => lq,
-       h: () => Oq,
-       i: () => xq,
-       m: () => mq,
-       p: () => Aq
+       b: () => FC,
+       c: () => WC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L663-L723` → after: `L331-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L331-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L331-L364) · [Before (L663-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L663-L723)

```diff
-     var Yq = gq(39636);
-     const lq = {};
- 
-     function Oq(qq, Eq) {
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Eq ? Eq + "\n" : "") + qq
-     }
- 
-     function mq(qq, Eq, gq, Oq, mq, xq, Aq) {
-       const cq = Aq || lq.loadFile;
-       if (!cq) throw (0, Yq.m)("FileTools");
-       return cq(qq, Eq, gq, Oq, mq, xq)
-     }
- 
-     function xq(qq, Eq, gq, Yq) {
-       if (qq) return Eq ? qq.IS_NDC_HALF_ZRANGE = "" : delete qq.IS_NDC_HALF_ZRANGE, gq ? qq.USE_REVERSE_DEPTHBUFFER = "" : delete qq.USE_REVERSE_DEPTHBUFFER, void(Yq ? qq.USE_EXACT_SRGB_CONVERSIONS = "" : delete qq.USE_EXACT_SRGB_CONVERSIONS);
-       {
- ... (45 more removed lines; see GitHub link above)
+     var QC = ZC(37044),
+       wC = ZC(37301),
+       bC = ZC(37050),
+       nC = ZC(37061);
+     const fC = "bloxdTextLodBias",
+       oC = [{
+         name: fC,
+         type: "float"
+       }],
+       qC = "bloxdTextSample",
+       FC = {
+         planes: -.5,
+         boards: -.5
+       },
+       WC = {
+         name: "TextSampler",
+ ... (18 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L726-L728` → after: `L390-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L390-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L390-L406) · [Before (L726-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L726-L728)

```diff
-       const lq = new Uint8Array(Eq);
-       return Yq && lq.set(new Uint8Array(Yq)), lq
-     }
+       dispose(CC) {
+         (0, FC.k)(this._material), super.dispose(CC)
+       }
+     }(0, QC.i)(NC.d, MC), (0, NC.f)({
+       disableUnusedSpecularTerm: QC.c,
+       isLightingDisabled: CC => CC instanceof WC.StandardMaterial && CC.disableLighting
+     });
+     var gC = ZC(38517);
+     class SC extends((0, QC.g)(gC.c)) {}(0, QC.i)(gC.c, SC);
+     var pC = ZC(38623),
+       PC = ZC(37149),
+       GC = ZC(37973),
+       RC = ZC(37086);
+     class AC extends((0, QC.g)(pC.e)) {}(0, QC.i)(pC.e, AC);
+     class xC extends((0, QC.g)(PC.b)) {}(0, QC.i)(PC.b, xC);
+     class JC extends((0, QC.g)(GC.q)) {}(0, QC.i)(GC.q, JC);
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L730` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L408) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L730)

```diff
-   39636: (qq, Eq, gq) => {
+   40958: (CC, zC, ZC) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L732-L735` → after: `L410-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L410-L412) · [Before (L732-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L732-L735)

```diff
-       b: () => cq,
-       e: () => uq,
-       i: () => Aq,
-       m: () => lq
+       c: () => TC,
+       g: () => GC,
+       i: () => LC
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L737-L744` → after: `L414-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L414-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L414-L427) · [Before (L737-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L737-L744)

```diff
-     const Yq = {};
- 
-     function lq(qq) {
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Yq[qq]) return Yq[qq] = !0, `${qq} needs to be imported before as it contains a side-effect required by your code.`
-     }
-     const Oq = {};
-     let mq = !1,
-       xq = 0;
+     var QC = ZC(40092),
+       wC = ZC(40963),
+       bC = ZC(40994),
+       nC = ZC(40968),
+       fC = ZC(37648),
+       oC = ZC(37660),
+       qC = ZC(37666),
+       FC = ZC(37670),
+       WC = ZC(37076),
+       NC = ZC(37083),
+       MC = ZC(40970),
+       gC = ZC(37061),
+       SC = ZC(37063),
+       pC = ZC(37050);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L747-L754` → after: `L430-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L430-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L430-L434) · [Before (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L747-L754)

```diff
-       let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const Yq = function() {
-         if ((gq || mq) && 0 === xq) {
-           const gq = `${qq}.${Eq}`;
-           Oq[gq] || (Oq[gq] = !0, console.warn(`[Babylon.js] ${gq}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
-         }
-       };
-       return Yq.__isSideEffectStub = !0, Yq
+       return Object.assign((function(CC, ZC, QC, wC) {
+         return zC(this.featureState, CC, ZC, QC, wC)
+       }), {
+         Qg: CC
+       })
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L758-L766` → after: `L438-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L438-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L438-L458) · [Before (L758-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L758-L766)

```diff
-       return !!qq && !qq.__isSideEffectStub
-     }
- 
-     function uq(qq, Eq) {
-       return {
-         get() {},
-         set(qq) {
-           Object.defineProperty(this, Eq, {
-             value: qq,
+       const zC = class extends MC.e {
+           constructor(zC, ZC) {
+             const QC = (0, SC.Y)(zC),
+               wC = QC && (0, SC.x)(QC, CC.name);
+             for (var bC = arguments.length, nC = new Array(bC > 2 ? bC - 2 : 0), fC = 2; fC < bC; fC++) nC[fC - 2] = arguments[fC];
+             super(zC, CC.name, CC.priority, wC ? wC.defines : CC.defines(...nC), !1), this.featureState = void 0, this.featureState = ZC, this._pluginManager._addPlugin(this), this._enable(!0), (0, SC.B)(this._material, CC, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return CC.className
+           }
+           isCompatible(CC) {
+             return CC === pC.e.GLSL || CC === pC.e.WGSL
+           }
+         },
+         ZC = (0, gC.l)(CC);
+       for (const [QC, wC] of Object.entries(gC.e)) {
+ ... (5 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L768-L769` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L460) · [Before (L768-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L768-L769)

```diff
-             configurable: !0,
-             enumerable: !0
+             configurable: !0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L771-L773` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L462) · [Before (L771-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L771-L773)

```diff
-         },
-         configurable: !0,
-         enumerable: !0
+         }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L776-L784` → after: `L466-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L466-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L466-L469) · [Before (L776-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L776-L784)

```diff
-   },
-   39626: (qq, Eq, gq) => {
-     function Yq() {
-       return "undefined" !== typeof window
-     }
- 
-     function lq() {
-       return "undefined" !== typeof navigator
-     }
+     class RC extends(GC(fC.d)) {}
+     var AC = ZC(39635),
+       xC = ZC(40977);
+     const JC = new WeakMap;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L786-L787` → after: `L471-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L471-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L471-L491) · [Before (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L786-L787)

```diff
-     function Oq() {
-       return "undefined" !== typeof document
+     function IC(CC, zC, ZC) {
+       let QC = JC.get(ZC);
+       QC || (QC = new Map, JC.set(ZC, QC));
+       const {
+         url: wC
+       } = CC;
+       let bC = QC.get(wC);
+       return bC || (bC = async function(CC, zC, ZC) {
+         var QC;
+         const {
+           width: wC,
+           height: bC
+         } = CC.getSize(), fC = Math.round(bC / wC), oC = CC.getInternalTexture(), qC = zC && zC.byteLength === wC * wC * fC * 4 ? zC : null !== (QC = iC.get(oC)) && void 0 !== QC ? QC : CC._readPixelsSync(), FC = new xC.d(qC, wC, wC, fC, AC.d.TEXTUREFORMAT_RGBA, ZC, !0, !1, nC.e. … [truncated]
+         iC.has(oC) || (! function(CC, zC) {
+           const ZC = zC.createRawTexture(new Uint8Array(4), 1, 1, AC.d.TEXTUREFORMAT_RGBA, !1, !1, nC.e.NEAREST_SAMPLINGMODE);
+           CC._hardwareTexture.release(), zC.unbindAllTextures(), ZC._swapAndDie(CC, !1)
+ ... (5 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L789-L794` → after: `L493-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L493-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L493-L532) · [Before (L789-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L789-L794)

```diff
- 
-     function mq(qq) {
-       let Eq = "",
-         gq = qq.firstChild;
-       for (; gq;) 3 === gq.nodeType && (Eq += gq.textContent), gq = gq.nextSibling;
-       return Eq
+     const iC = new WeakMap;
+     var vC = ZC(37673);
+     class eC extends(GC(oC.j)) {
+       constructor(CC, zC) {
+         super(CC, zC), zC.textures.forEach(((CC, zC) => {
+           CC.mirror.onLoadObservable.add((CC => {
+             this.setTextureArrayData(CC, zC).catch((CC => {
+               console.error(`Failed to build texture array for atlas ${zC}`, CC)
+             }))
+           }))
+         })), (0, vC.k)(zC, CC.shaderLanguage)
+       }
+       async setTextureArrayData(CC, zC) {
+         var ZC, QC;
+         const wC = this.featureState,
+           {
+ ... (24 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L812-L818` → after: `L535-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L535-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L535-L546) · [Before (L812-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L812-L818)

```diff
-       MeshInvalidPositionsError: 0,
-       UnsupportedTextureError: 1e3,
-       GLTFLoaderUnexpectedMagicError: 2e3,
-       SceneLoaderError: 3e3,
-       LoadFileError: 4e3,
-       RequestFileError: 4001,
-       ReadFileError: 4002
+       Mesh: dC.e,
+       TransformNode: EC.c,
+       gg: hC.c,
+       VertexBuffer: hC.f,
+       BoundingInfo: KC.d,
+       Eg: YC.Eg,
+       ArenaBuffer: cC,
+       SubMesh: HC.d,
+       VertexData: mC.e,
+       MirroredGeometry: XC.d,
+       meshFromArrays: XC.e,
+       plainMeshFromArrays: XC.f
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L820-L822` → after: `L548-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L548-L561) · [Before (L820-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L820-L822)

```diff
-     class Oq extends Yq {
-       constructor(qq, Eq, gq) {
-         super(qq), this.errorCode = Eq, this.innerError = gq, this.name = "RuntimeError", Yq._setPrototypeOf(this, Oq.prototype)
+     (0, lC.e)(uC);
+     var rC = ZC(37290);
+     class sC extends(GC(FC.f)) {
+       constructor(CC, zC) {
+         if (super(CC, zC), CC instanceof QC.StandardMaterial && zC.dirLightCount > 0) {
+           const zC = CC,
+             ZC = zC._blockDirtyMechanism;
+           zC._blockDirtyMechanism = !0, CC.disableLighting = !0, zC._blockDirtyMechanism = ZC;
+           const QC = (0, SC.Y)(CC);
+           QC && (QC.disableLighting = !0, (0, SC.W)(QC))
+         }(0, rC.g)(CC)
+       }
+       dispose(CC) {
+         (0, rC.k)(this._material), super.dispose(CC)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L825-L837` → after: `L564-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L564-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L564-L574) · [Before (L825-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L825-L837)

```diff
-   },
-   39799: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Zq,
-       i: () => oq,
-       m: () => hq,
-       q: () => bq,
-       u: () => rq,
-       x: () => yq,
-       z: () => tq,
-       D: () => Sq,
-       F: () => vq,
-       J: () => Pq
+ 
+     function TC(CC, zC) {
+       if (!(zC instanceof QC.StandardMaterial) || zC.specularTexture) return;
+       const {
+         r: ZC,
+         g: wC,
+         b: bC
+       } = zC.specularColor;
+       0 === ZC && 0 === wC && 0 === bC && (CC.SPECULARTERM = !1)
+     }(0, FC.d)({
+       disableUnusedSpecularTerm: TC
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L839-L853` → after: `L576-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L576-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L576-L579) · [Before (L839-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L839-L853)

```diff
-     var Yq = gq(39801),
-       lq = gq(39626),
-       Oq = gq(37156);
-     class mq {}
-     mq.FilesToLoad = {};
-     var xq = gq(39805),
-       Aq = gq(39810),
-       cq = gq(37153),
-       uq = gq(39630),
-       Bq = gq(39640),
-       Wq = gq(38653),
-       Nq = gq(39644),
-       aq = gq(39817);
-     const Vq = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
-     class dq extends xq.h {
+     var aC = ZC(37175),
+       tC = ZC(37450);
+     const DC = new RegExp(`^#define ${qC.e}\\s*$`, "m");
+     class jC extends(GC(qC.g)) {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L855` → after: `L581-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L581-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L581-L596) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L855)

```diff
-         super(qq, xq.f.LoadFileError), this.name = "LoadFileError", xq.e._setPrototypeOf(this, dq.prototype), Eq instanceof Yq.e ? this.request = Eq : this.file = Eq
+         super(CC, zC), this.Sg = !1, zC.ditherOnlyWhileFading && (tC.g.add(CC), this.prewarmDitherTwins(CC))
+       }
+       prewarmDitherTwins(CC) {
+         const zC = new WeakSet;
+         CC.onEffectCreatedObservable.add((ZC => {
+           let {
+             effect: QC,
+             subMesh: wC
+           } = ZC;
+           if (this.featureState.prewarmingDither || zC.has(QC)) return;
+           zC.add(QC);
+           const bC = null === wC || void 0 === wC ? void 0 : wC.getMesh();
+           bC && !DC.test(QC.defines) && CC.Km().onAfterRenderObservable.addOnce((() => {
+             this.prewarmDither(bC) || zC.delete(QC)
+           }))
+         }))
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L857-L860` → after: `L598-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L598-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L598-L607) · [Before (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L857-L860)

```diff
-     }
-     class jq extends xq.h {
-       constructor(qq, Eq) {
-         super(qq, xq.f.RequestFileError), this.request = Eq, this.name = "RequestFileError", xq.e._setPrototypeOf(this, jq.prototype)
+       prewarmDither(CC) {
+         if (this.Sg || CC.GJ()) return !1;
+         const zC = new HC.d(0, 0, 0, 0, 0, CC, void 0, !1, !1);
+         this.featureState.prewarmingDither = !0;
+         try {
+           this._material.isReadyForSubMesh(CC, zC)
+         } finally {
+           this.featureState.prewarmingDither = !1
+         }
+         return null !== zC.effect
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L862-L865` → after: `L609-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L609-L610) · [Before (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L862-L865)

```diff
-     }
-     class Hq extends xq.h {
-       constructor(qq, Eq) {
-         super(qq, xq.f.ReadFileError), this.file = Eq, this.name = "ReadFileError", xq.e._setPrototypeOf(this, Hq.prototype)
+       dispose(CC) {
+         this.Sg = !0, super.dispose(CC)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L868-L881` → after: `L613-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L613-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L613-L621) · [Before (L868-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L868-L881)

```diff
-     const oq = {
-         DefaultRetryStrategy: class {
-           static ExponentialBackoff() {
-             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
-               Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
-             return (gq, Yq, lq) => 0 !== Yq.status || lq >= qq || -1 !== gq.indexOf("file:") ? -1 : Math.pow(2, lq) * Eq
-           }
-         }.ExponentialBackoff(),
-         BaseUrl: "",
-         CorsBehavior: "anonymous",
-         PreprocessUrl: qq => qq,
-         ScriptBaseUrl: "",
-         ScriptPreprocessUrl: qq => qq,
-         CleanUrl: qq => qq = qq.replace(/#/gm, "%23")
+     const yC = new Map;
+ 
+     function LC(CC, zC) {
+       yC.set(CC, zC)
+     }
+     LC(fC.d, RC), LC(oC.j, eC), LC(qC.g, jC), LC(FC.f, sC), (0, WC.c)({
+       create: (CC, zC) => {
+         const ZC = new QC.StandardMaterial(CC.name, zC);
+         return (0, aC.u)(CC, ZC), ZC.detailMap._pluginDefineNames
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L883-L889` → after: `L623-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L623-L624) · [Before (L883-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L883-L889)

```diff
-       Pq = (qq, Eq) => {
-         if ((!qq || 0 !== qq.indexOf("data:")) && oq.CorsBehavior)
-           if ("string" === typeof oq.CorsBehavior || oq.CorsBehavior instanceof String) Eq.crossOrigin = oq.CorsBehavior;
-           else {
-             const gq = oq.CorsBehavior(qq);
-             gq && (Eq.crossOrigin = gq)
-           }
+       write: (CC, zC, ZC) => {
+         (0, aC.X)(CC.mirror, zC, ZC)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L891-L892` → after: `L626-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L626-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L626-L629) · [Before (L891-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L891-L892)

```diff
-       Qq = {
-         getRequiredSize: null
+       addFeature: (CC, zC, ZC) => {
+         const QC = yC.get(zC.feature);
+         if (!QC) throw new Error(`${zC.feature.name} has no plugin class (registerPluginClass)`);
+         new QC(CC.mirror, zC.state, ...ZC)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L894-L1013` → after: `L631-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L631-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L631-L647) · [Before (L894-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L894-L1013)

```diff
-       yq = function(qq, Eq, gq, lq) {
-         let Oq, xq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-           uq = arguments.length > 5 ? arguments[5] : void 0,
-           Bq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cq.b.LastCreatedEngine;
-         if ("undefined" === typeof HTMLImageElement && !Bq?._features.forceBitmapOverHTMLImageElement) return gq("LoadImage is only supported in web or BabylonNative environments."), null;
-         if (Bq?._features.forceBitmapOverHTMLImageElement && "string" !== typeof qq && "undefined" !== typeof Blob) {
-           let Yq;
-           if (qq instanceof Blob) Yq = qq;
-           else {
-             const Eq = qq instanceof ArrayBuffer ? qq : (0, aq.l)(qq);
-             Yq = new Blob([Eq], {
-               type: xq
-             })
-           }
-           return Bq.createImageBitmap(Yq, {
-             premultiplyAlpha: "none",
- ... (104 more removed lines; see GitHub link above)
+       texture: (CC, zC, ZC) => {
+         let {
+           url: QC,
+           noMipmap: wC,
+           invertY: bC,
+           samplingMode: fC,
+           data: oC,
+           sets: qC
+         } = ZC;
+         if (!oC) {
+           const ZC = new nC.e(QC, zC, wC, bC, fC);
+           return Object.assign(ZC, qC), void(0, NC.L)(CC, ZC)
+         }
+         const FC = {},
+           WC = new Promise(((CC, zC) => {
+             FC.onLoad = CC, FC.onError = (CC, ZC) => {
+ ... (1 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1015-L1021` → after: `L649-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L649-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L649-L654) · [Before (L1015-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1015-L1021)

```diff
-           }
-           tq()
-         }
-         return Vq
-       },
-       tq = (qq, Eq, gq, Yq, lq) => {
-         const mq = new FileReader,
+           })),
+           {
+             mimeType: MC,
+             bytes: gC,
+             label: SC
+           } = oC,
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1023-L1074` → after: `L656-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L656-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L656-L662) · [Before (L1023-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1023-L1074)

```diff
-             onCompleteObservable: new Oq.d,
-             abort: () => mq.abort()
-           };
-         return mq.onloadend = () => xq.onCompleteObservable.notifyObservers(xq), lq && (mq.onerror = () => {
-           lq(new Hq(`Unable to read ${qq.name}`, qq))
-         }), mq.onload = qq => {
-           Eq(qq.target.result)
-         }, gq && (mq.onprogress = gq), Yq ? mq.readAsArrayBuffer(qq) : mq.readAsText(qq), xq
-       },
-       rq = (qq, Eq, gq, Yq, lq, Aq, cq) => {
-         if (qq.name) return tq(qq, Eq, gq, lq, Aq ? qq => {
-           Aq(void 0, qq)
-         } : void 0);
-         const uq = qq;
-         if (-1 !== uq.indexOf("file:")) {
-           let qq = decodeURIComponent(uq.substring(5).toLowerCase());
- ... (36 more removed lines; see GitHub link above)
+             noMipmap: wC,
+             invertY: !1,
+             samplingMode: fC,
+             ...FC,
+             mimeType: MC,
+             loaderOptions: void 0,
+             useSRGBBuffer: !1
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1076-L1138` → after: `L664-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L664-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L664-L667) · [Before (L1076-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1076-L1138)

```diff
-           Vq = () => {
-             let qq, Oq = new Yq.e,
-               mq = null;
-             const cq = () => {
-               Oq && (gq && Oq.removeEventListener("progress", gq), qq && Oq.removeEventListener("readystatechange", qq), Oq.removeEventListener("loadend", Vq))
-             };
-             let Vq = () => {
-               cq(), aq.onCompleteObservable.notifyObservers(aq), aq.onCompleteObservable.clear(), gq = void 0, qq = null, Vq = null, Aq = void 0, uq = void 0, Eq = void 0
-             };
-             aq.abort = () => {
-               Nq = !0, Vq && Vq(), Oq && Oq.readyState !== (XMLHttpRequest.DONE || 4) && Oq.abort(), null !== mq && (clearTimeout(mq), mq = null), Oq = null
-             };
-             const dq = qq => {
-                 const Eq = qq.message || "Unknown error";
-                 Aq && Oq ? Aq(new jq(Eq, Oq)) : Wq.b.Error(Eq)
-               },
- ... (47 more removed lines; see GitHub link above)
+           PC = new nC.e(null, zC, pC);
+         aC.w.set(PC, WC), Object.assign(PC, qC), PC.updateURL(QC, gC);
+         const GC = PC.getInternalTexture();
+         GC && (GC.label = SC), CC.uvSet = PC.coordinatesIndex, CC.matrix.set((0, aC.P)(PC)), (0, NC.L)(CC, PC)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1140` → after: `L669-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L669-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L669-L675) · [Before (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1140)

```diff
-       hq = qq => {
+       cube: (CC, zC, ZC) => {
+         let {
+           rootUrl: QC,
+           files: bC,
+           noMipmap: fC,
+           luminance: oC
+         } = ZC;
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1142-L1169` → after: `L677-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L677-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L677-L681) · [Before (L1142-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1142-L1169)

```diff
-           match: Eq,
-           type: gq
-         } = iq(qq);
-         if (Eq) return gq || void 0;
-         const Yq = qq.lastIndexOf(".");
-         switch (qq.substring(Yq + 1).toLowerCase()) {
-           case "glb":
-             return "model/gltf-binary";
-           case "bin":
-             return "application/octet-stream";
-           case "QJ":
-             return "model/gltf+json";
-           case "jpg":
-           case "jpeg":
-             return "image/jpeg";
-           case "png":
- ... (12 more removed lines; see GitHub link above)
+           samplingMode: qC
+         } = CC.sampler, FC = qC === (0, NC.y)(fC) ? null : () => {
+           (0, aC.L)(WC, qC)
+         }, WC = new wC.c(QC, zC, null, fC, bC, FC, null, (0, NC.u)(oC));
+         WC.coordinatesMode = nC.e.SKYBOX_MODE, (0, NC.L)(CC, WC)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1171-L1267` → after: `L683-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L683-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L683-L698) · [Before (L1171-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1171-L1267)

```diff
-       nq = () => "undefined" !== typeof location && "file:" === location.protocol,
-       bq = qq => Vq.test(qq),
-       iq = qq => {
-         const Eq = Vq.exec(qq);
-         if (null === Eq || 0 === Eq.length) return {
-           match: !1,
-           type: ""
-         };
-         return {
-           match: !0,
-           type: Eq[0].replace("data:", "").replace(";base64,", "")
-         }
-       };
- 
-     function Zq(qq) {
-       return (0, Aq.b)(qq.split(",")[1])
- ... (81 more removed lines; see GitHub link above)
+       canvas: (CC, zC, ZC) => {
+         let {
+           width: QC,
+           height: wC,
+           mipmaps: fC,
+           samplingMode: oC,
+           hasAlpha: qC = !1,
+           wrap: FC = nC.e.CLAMP_ADDRESSMODE
+         } = ZC;
+         const WC = new bC.d(zC, {
+           width: QC,
+           height: wC
+         }, CC, fC, oC);
+         WC.hasAlpha = qC, WC.wrapU = FC, WC.wrapV = FC;
+         const NC = (0, aC.C)(WC);
+         return (0, aC.F)(NC, WC), NC
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1269-L1298` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L700) · [Before (L1269-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1269-L1298)

```diff
-       for (let Yq = 1024; Yq < 2048; ++Yq) mq[Yq] = 939524096 + (Yq - 1024 << 13);
-       for (let Yq = 1; Yq < 31; ++Yq) xq[Yq] = Yq << 23;
-       xq[31] = 1199570944, xq[32] = 2147483648;
-       for (let Yq = 33; Yq < 63; ++Yq) xq[Yq] = 2147483648 + (Yq - 32 << 23);
-       xq[63] = 3347054592;
-       for (let Yq = 1; Yq < 64; ++Yq) 32 !== Yq && (Aq[Yq] = 1024);
-       return Yq = {
-         floatView: Eq,
-         uint32View: gq,
-         baseTable: lq,
-         shiftTable: Oq,
-         mantissaTable: mq,
-         exponentTable: xq,
-         offsetTable: Aq
-       }, Yq
-     }
- ... (14 more removed lines; see GitHub link above)
+     })
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1300` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L702) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1300)

```diff
-   39810: (qq, Eq, gq) => {
+   40992: (CC, zC, ZC) => {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1306-L1364` → after: `L708-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L708-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L708-L715) · [Before (L1306-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1306-L1364)

```diff
-     const Yq = qq => {
-         const Eq = ArrayBuffer.isView(qq) ? new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength) : new Uint8Array(qq);
-         return "function" === typeof Eq.toBase64 ? Eq.toBase64() : function(qq) {
-           const Eq = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let gq, Yq, lq, Oq, mq, xq, Aq, cq = "",
-             uq = 0;
-           for (; uq < qq.length;) gq = qq[uq++], Yq = uq < qq.length ? qq[uq++] : Number.NaN, lq = uq < qq.length ? qq[uq++] : Number.NaN, Oq = gq >> 2, mq = (3 & gq) << 4 | Yq >> 4, xq = (15 & Yq) << 2 | lq >> 6, Aq = 63 & lq, isNaN(Yq) ? xq = Aq = 64 : isNaN(lq) && (Aq = 64), c … [truncated]
-           return cq
-         }(Eq)
-       },
-       lq = qq => atob(qq),
-       Oq = qq => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(qq).buffer : function(qq) {
-         const Eq = lq(qq),
-           gq = Eq.length,
-           Yq = new Uint8Array(new ArrayBuffer(gq));
-         for (let lq = 0; lq < gq; lq++) Yq[lq] = Eq.charCodeAt(lq);
- ... (43 more removed lines; see GitHub link above)
+     var QC = ZC(40985),
+       wC = ZC(39882),
+       bC = ZC(40127),
+       nC = ZC(40244),
+       fC = ZC(40988),
+       oC = ZC(40235),
+       qC = ZC(37339);
+     class FC extends nC.c {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1366-L1369` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L717-L719) · [Before (L1366-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1366-L1369)

```diff
-         this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
-       }
-       static get IsCustomRequestAvailable() {
-         return Object.keys(Yq.CustomRequestHeaders).length > 0 || Yq.CustomRequestModifiers.length > 0
+         super(...arguments), this.model = null, this.onGeometryUpdated = (CC, zC) => {
+           this.releaseUnlessInstanced(zC)
+         }, this.onLinked = null
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1371-L1372` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L721-L723) · [Before (L1371-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1371-L1372)

```diff
-       static _CleanUrl(qq) {
-         return qq = (qq = qq.replace("file:http:", "http:")).replace("file:https:", "https:")
+       link(CC) {
+         var zC;
+         (0, qC.n)(CC), this.model = CC, null === (zC = this.onLinked) || void 0 === zC || zC.call(this, CC)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1374-L1401` → after: `L725-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L725-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L725-L780) · [Before (L1374-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1374-L1401)

```diff
-       static _ShouldSkipRequestModifications(qq) {
-         return Yq.SkipRequestModificationForBabylonCDN && (qq.includes("preview.babylonjs.com") || qq.includes("cdn.babylonjs.com"))
-       }
-       static _CollectCustomizations(qq) {
-         const Eq = {
-           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
-         };
-         if (Yq._ShouldSkipRequestModifications(qq)) return {
-           url: qq,
-           headers: Eq
-         };
-         for (const lq in Yq.CustomRequestHeaders) {
-           const qq = Yq.CustomRequestHeaders[lq];
-           qq && (Eq[lq] = qq)
-         }
-         const gq = {
- ... (12 more removed lines; see GitHub link above)
+       relink() {
+         this.release();
+         const CC = [];
+         for (const wC of Object.values(this._vertexBuffers))
+           if (!wC.getIsInstanced()) {
+             const {
+               byteOffset: zC,
+               byteStride: ZC,
+               type: QC,
+               normalized: bC
+             } = wC;
+             CC.push({
+               kind: wC.getKind(),
+               data: wC.getData(),
+               offset: zC,
+               stride: ZC,
+ ... (40 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1404-L1416` → after: `L784-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L784-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L784-L791) · [Before (L1404-L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1404-L1416)

```diff
-       static async FetchAsync(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const gq = Eq.method ?? "GET";
-         if ("undefined" !== typeof fetch) {
-           const {
-             url: lq,
-             headers: Oq
-           } = Yq._CollectCustomizations(Yq._CleanUrl(qq), Eq.headers ?? {});
-           return await fetch(lq, {
-             method: gq,
-             headers: Oq,
-             body: Eq.body ?? void 0
-           })
+       static mergeMeshes(CC, zC, ZC, QC, wC, bC) {
+         const oC = CC[0].Km(),
+           qC = new fC.e(CC[0].name + "_merged", oC),
+           WC = new FC(nC.c.RandomId(), oC, void 0, !1, qC);
+         try {
+           if (!fC.e.MergeMeshes(CC, zC, ZC, qC, wC, bC)) return qC.dispose(), null
+         } catch (NC) {
+           throw qC.dispose(), NC
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1418-L1446` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L793) · [Before (L1418-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1418-L1446)

```diff
-         return await new Promise(((lq, Oq) => {
-           const mq = new Yq;
-           mq.responseType = "arraybuffer", mq.addEventListener("readystatechange", (() => {
-             if (4 === mq.readyState)
-               if (mq.status >= 200 && mq.status < 300) {
-                 const qq = "undefined" !== typeof Headers ? new Headers : void 0,
-                   Eq = mq.getResponseHeader("Content-Type");
-                 Eq && qq && qq.set("Content-Type", Eq), "undefined" !== typeof Response ? lq(new Response(mq.response, {
-                   status: mq.status,
-                   statusText: mq.statusText,
-                   headers: qq
-                 })) : lq({
-                   ok: !0,
-                   status: mq.status,
-                   statusText: mq.statusText,
-                   headers: {
- ... (13 more removed lines; see GitHub link above)
+         return WC.relink(), qC
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1448-L1449` → after: `L795-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L795-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L795-L796) · [Before (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1448-L1449)

```diff
-       set onprogress(qq) {
-         this._xhr.onprogress = qq
+       removeVerticesData(CC) {
+         this.releaseUnlessInstanced(CC), super.removeVerticesData(CC)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1451-L1452` → after: `L798-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L798-L799) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1451-L1452)

```diff
-       get readyState() {
-         return this._xhr.readyState
+       dispose() {
+         this.release(), super.dispose()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1454-L1455` → after: `L801-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L801-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L801-L803) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1454-L1455)

```diff
-       get status() {
-         return this._xhr.status
+       releaseUnlessInstanced(CC) {
+         var zC;
+         CC && null !== (zC = this.getVertexBuffer(CC)) && void 0 !== zC && zC.getIsInstanced() || this.release()
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1457-L1505` → after: `L805-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L805-L806) · [Before (L1457-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1457-L1505)

```diff
-       get statusText() {
-         return this._xhr.statusText
-       }
-       get response() {
-         return this._xhr.response
-       }
-       get responseURL() {
-         return this._xhr.responseURL
-       }
-       get responseText() {
-         return this._xhr.responseText
-       }
-       get responseType() {
-         return this._xhr.responseType
-       }
-       set responseType(qq) {
- ... (33 more removed lines; see GitHub link above)
+       release() {
+         this.model && ((0, qC.x)(this.model), this.model = null)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L1508` → after: `L809-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L809-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/246.js#L809-L846) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/246.js#L1508)

```diff
-     Yq.CustomRequestHeaders = {}, Yq.CustomRequestModifiers = new Array, Yq.SkipRequestModificationForBabylonCDN = !0
+ 
+     function WC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fC.e(CC, ZC);
+       const wC = (0, qC.j)(zC),
+         {
+           positions: bC,
+           normals: WC,
+           uvs: NC,
+           indices: MC,
+           named: gC = {}
+         } = zC,
+         SC = new oC.e;
+       SC.positions = bC, SC.normals = null !== WC && void 0 !== WC ? WC : null, SC.uvs = null !== NC && void 0 !== NC ? NC : null, SC.indices = MC;
+       const pC = new FC(nC.c.RandomId(), ZC, SC, !1, QC);
+       for (const {
+           kind: nC,
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/247.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/247.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L4-L22` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/247.js#L4-L18) · [Before (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/247.js#L4-L22)

```diff
-   39853: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Oq
-     });
-     var Yq = gq(38653),
-       lq = gq(37171);
-     class Oq {
-       static Instantiate(qq) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[qq]) return this.RegisteredExternalClasses[qq];
-         const Eq = (0, lq.e)(qq);
-         if (Eq) return Eq;
-         Yq.b.Warn(qq + " not found, you may have missed an import.");
-         const gq = qq.split(".");
-         let Oq = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let Yq = 0, lq = gq.length; Yq < lq; Yq++) Oq = Oq[gq[Yq]];
-         return "function" !== typeof Oq ? null : Oq
- ... (3 more removed lines; see GitHub link above)
+   40866: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => bC,
+       g: () => nC
+     });
+     var QC = ZC(1851);
+     let wC = !1;
+ 
+     function bC() {
+       wC = !0
+     }
+ 
+     function nC() {
+       wC && (wC = !1, (0, QC.c)())
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L24` → after: `L20-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L20-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/247.js#L20-L154) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/247.js#L24)

```diff
-   39662: (qq, Eq, gq) => {
+   40858: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC,
+       d: () => bC,
+       e: () => fC
+     });
+     var QC = ZC(40412),
+       wC = ZC(40423);
+ 
+     function bC(CC) {
+       if (CC.queries.drawCensus() < QC.Gb.BYTES) return null;
+       const zC = CC.memoryData(CC.scratch(), QC.Gb.BYTES, 4, "the draw census");
+       return null === zC ? null : {
+         terrainOpaque: QC.Gb.terrainOpaque(zC, 0),
+         terrainTransparent: QC.Gb.terrainTransparent(zC, 0),
+         terrainPack: QC.Gb.terrainPack(zC, 0),
+ ... (119 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L28-L33` → after: `L158-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L158-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/247.js#L158-L192) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/247.js#L28-L33)

```diff
-     var Yq = gq(39626);
-     class lq {
-       static get Now() {
-         return (0, Yq.n)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
-       }
-     }
+     var QC = ZC(4733),
+       wC = ZC(4727),
+       bC = ZC(40457),
+       nC = ZC(40470);
+     const fC = new Set(QC.S),
+       oC = QC.S.map((CC => (new TextEncoder).encode(CC))),
+       qC = new Map;
+ 
+     function FC(CC, zC) {
+       var ZC;
+       return null === (ZC = qC.get(CC)) || void 0 === ZC ? void 0 : ZC[zC]
+     }(0, nC.l)(QC.Bc.NewOtherEntitySettings, (CC => {
+       CC.payloadKind === wC.hc.Msgpack && oC.some((zC => function(CC, zC) {
+         const ZC = zC[0];
+         for (let QC = CC.indexOf(ZC); - 1 !== QC && QC + zC.length <= CC.length; QC = CC.indexOf(ZC, QC + 1)) {
+           let ZC = 1;
+ ... (19 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L35-L75` → after: `L194-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L194-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/247.js#L194-L279) · [Before (L35-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/247.js#L35-L75)

```diff
-   39696: (qq, Eq, gq) => {
-     function Yq(qq) {
-       let Eq = 1;
-       do {
-         Eq *= 2
-       } while (Eq < qq);
-       return Eq === qq
-     }
- 
-     function lq(qq, Eq, gq) {
-       return qq * (1 - gq) + Eq * gq
-     }
- 
-     function Oq(qq) {
-       const Eq = mq(qq),
-         gq = xq(qq);
- ... (25 more removed lines; see GitHub link above)
+   40838: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => MC,
+       f: () => qC,
+       j: () => WC
+     });
+     var QC = ZC(38832),
+       wC = ZC(1843),
+       bC = ZC(1248),
+       nC = ZC(40446),
+       fC = ZC(40449),
+       oC = ZC(40470);
+     const qC = new QC.c;
+     let FC = {};
+ 
+     function WC(CC) {
+ ... (70 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L80-L82` → after: `L284-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L284-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/247.js#L284-L442) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/247.js#L80-L82)

```diff
-       o: () => lq,
-       q: () => Oq
-     })
+       m: () => HC
+     });
+     var QC = ZC(1211),
+       wC = ZC(590),
+       bC = ZC(77),
+       nC = ZC(4733),
+       fC = ZC(40412),
+       oC = ZC(40440),
+       qC = ZC(40423),
+       FC = ZC(40845),
+       WC = ZC(40838),
+       NC = ZC(40449),
+       MC = ZC(40470);
+ 
+     function gC(CC) {
+       let {
+ ... (143 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L84-L103` → after: `L444-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L444-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/247.js#L444-L447) · [Before (L84-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/247.js#L84-L103)

```diff
-   39845: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => oq,
-       e: () => Qq,
-       f: () => jq,
-       h: () => Hq
-     });
-     var Yq, lq = gq(37156),
-       Oq = gq(39626),
-       mq = gq(38653),
-       xq = gq(38649),
-       Aq = gq(39662),
-       cq = gq(39636),
-       uq = gq(39801),
-       Bq = gq(37153),
-       Wq = gq(39799),
- ... (4 more removed lines; see GitHub link above)
+   38832: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
+     });
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L105-L243` → after: `L449-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L449-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/247.js#L449-L479) · [Before (L105-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/247.js#L105-L243)

```diff
-       static get BaseUrl() {
-         return Wq.i.BaseUrl
-       }
-       static set BaseUrl(qq) {
-         Wq.i.BaseUrl = qq
-       }
-       static get CleanUrl() {
-         return Wq.i.CleanUrl
-       }
-       static set CleanUrl(qq) {
-         Wq.i.CleanUrl = qq
-       }
-       static IsAbsoluteUrl(qq) {
-         return 0 === qq.indexOf("//") || -1 !== qq.indexOf("://") && (-1 !== qq.indexOf(".") && (-1 !== qq.indexOf("/") && (!(qq.indexOf(":") > qq.indexOf("/")) && (qq.indexOf("://") < qq.indexOf(".") || (0 === qq.indexOf("data:") || 0 === qq.indexOf("blob:"))))))
-       }
-       static set ScriptBaseUrl(qq) {
- ... (123 more removed lines; see GitHub link above)
+       constructor() {
+         this.members = new Map
+       }
+       apply(CC) {
+         const zC = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const QC of CC.OZ) {
+           let CC = this.members.get(QC.kZ);
+           if (CC || (CC = {
+               name: null,
+               settings: {}
+             }, this.members.set(QC.kZ, CC), zC.added.push(QC.kZ)), null !== QC.VZ && (CC.name = QC.VZ), null !== QC.CQ || QC.zQ.length > 0) {
+             const ZC = null === QC.CQ ? {} : JSON.parse(QC.CQ);
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L247-L612` → after: `L483-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L483-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/247.js#L483-L503) · [Before (L247-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/247.js#L247-L612)

```diff
-       static GetBabylonScriptURL(qq, Eq) {
-         if (!qq) return "";
-         if (qq.startsWith(Yq._DefaultCdnUrl))
-           if (Yq.ScriptBaseUrl) {
-             const Eq = Yq.ScriptBaseUrl.endsWith("/") ? Yq.ScriptBaseUrl.slice(0, -1) : Yq.ScriptBaseUrl;
-             qq = qq.replace(Yq._DefaultCdnUrl, Eq)
-           } else if (Yq._CdnVersion) {
-           const Eq = `${Yq._DefaultCdnUrl}/v${Yq._CdnVersion}`;
-           qq.startsWith(Eq) || (qq = qq.replace(Yq._DefaultCdnUrl, Eq))
-         }
-         return qq = Yq.ScriptPreprocessUrl(qq), Eq && !Yq.IsAbsoluteUrl(qq) && (qq = Yq.GetAbsoluteUrl(qq)), qq
-       }
-       static LoadBabylonScript(qq, Eq, gq, lq) {
-         qq = Yq.GetBabylonScriptURL(qq), Yq.LoadScript(qq, Eq, gq)
-       }
-       static async LoadBabylonScriptAsync(qq) {
- ... (350 more removed lines; see GitHub link above)
+       has(CC) {
+         return this.members.has(CC)
+       }
+       ids() {
+         return [...this.members.keys()]
+       }
+       getName(CC) {
+         var zC, ZC;
+         return null !== (zC = null === (ZC = this.members.get(CC)) || void 0 === ZC ? void 0 : ZC.name) && void 0 !== zC ? zC : void 0
+       }
+       getSettings(CC) {
+         var zC;
+         return null === (zC = this.members.get(CC)) || void 0 === zC ? void 0 : zC.settings
+       }
+       getSetting(CC, zC) {
+         var ZC;
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/248.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/248.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016)

#### 1. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4-L12` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L4-L6) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L4-L12)

```diff
-   40190: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Yq
-     });
-     let Yq = !1
-   },
-   39748: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => aq
+   39288: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       default: () => VZ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L14-L20` → after: `L8-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L8-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L8-L144) · [Before (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L14-L20)

```diff
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(37156),
-       mq = gq(37139),
-       xq = gq(37153),
-       Aq = gq(37872),
-       cq = gq(39774);
+     const QC = [0, 90, 180, 270],
+       wC = "plotsblueprint";
+     var bC = ZC(48),
+       nC = ZC(36488),
+       fC = ZC(20),
+       oC = ZC(1557),
+       qC = ZC(1645),
+       FC = ZC(28);
+     const WC = [
+         ["farm_hut", "farm_house", "farm_barn"],
+         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
+         ["market_stand", "market_stall", "market_shop"],
+         ["castle_wall", "castle_gate", "castle_tower"]
+       ],
+       NC = {
+         farm_hut: {
+ ... (121 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L22-L23` → after: `L146-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L146-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L146-L160) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L22-L23)

```diff
-       get wrapU() {
-         return this._wrapU
+       constructor(CC, zC) {
+         this.api = CC, this.placement = zC, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
+           this.placement.stop(), this.Cg("journal_opened")
+         }, this.build = CC => {
+           this.Cg("placement_started"), this.placement.start(CC), (0, nC.h)()
+         }, this.putAway = () => {
+           this.api.sendCommand(`${wC} cancel`)
+         }
+       }
+       getPages() {
+         return this.pages
+       }
+       Ag(CC) {
+         let [, zC, ZC] = CC;
+         this.pages = GC(zC, ZC), FC.o.bp(RC, this.pages, !0)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L25-L26` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L162-L163) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L25-L26)

```diff
-       set wrapU(qq) {
-         this._wrapU = qq
+       openFromServer() {
+         this.openRequested = !0, this.ZN()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L28-L29` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L165-L166) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L28-L29)

```diff
-       get wrapV() {
-         return this._wrapV
+       ZN() {
+         this.openRequested && !fC.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, oC.s)() || (0, qC.isTypingInInput)() || null !== this.placement.getView() || (0, nC.u)())
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L31-L32` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L168-L169) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L31-L32)

```diff
-       set wrapV(qq) {
-         this._wrapV = qq
+       Cg(CC) {
+         this.reported.has(CC) || (this.reported.add(CC), this.api.sendCommand(`${wC} report ${CC}`))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L34-L35` → after: `L171-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L171-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L171-L197) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L34-L35)

```diff
-       get coordinatesMode() {
-         return 0
+     }
+     var xC = ZC(1002),
+       JC = ZC.n(xC),
+       IC = ZC(1013),
+       iC = ZC(1388),
+       vC = ZC(4469),
+       eC = ZC(3403),
+       hC = ZC(1383),
+       KC = ZC(1074),
+       YC = ZC(1143),
+       dC = ZC(9194);
+     const mC = [0, 90, 180, 270],
+       HC = /^(meta\|rot\d)\|([lrud]+)$/,
+       EC = "nesw",
+       lC = /^meta\|([nesw]*)\|?(Stacked)?$/,
+       XC = function(CC) {
+ ... (11 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L37-L38` → after: `L199-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L199-L201) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L37-L38)

```diff
-       get isCube() {
-         return !!this._texture && this._texture.isCube
+       static
+       for (CC) {
+         return XC(CC)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L40-L41` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L203-L206) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L40-L41)

```diff
-       set isCube(qq) {
-         this._texture && (this._texture.isCube = qq)
+       getBlockIdMapping(CC, zC) {
+         const ZC = this.getBlockIdMappingKey(CC, zC);
+         let QC = this.blockIdMappings.get(ZC);
+         return void 0 === QC && mC.includes(CC) && (QC = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, CC, zC), this.blockIdMappings.set(ZC, QC)), QC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L43-L44` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L208-L209) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L43-L44)

```diff
-       get is3D() {
-         return !!this._texture && this._texture.is3D
+       turnBlockId(CC, zC, ZC) {
+         return this.mapBlockId(this.blockMetadata[CC], zC, this.getRotationMapping(zC, ZC), ZC)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L46-L47` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L211-L212) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L46-L47)

```diff
-       set is3D(qq) {
-         this._texture && (this._texture.is3D = qq)
+       getBlockIdMappingKey(CC, zC) {
+         return `r${CC}|m${Number(zC)}`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L49-L50` → after: `L214-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L214-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L214-L221) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L49-L50)

```diff
-       get is2DArray() {
-         return !!this._texture && this._texture.is2DArray
+       createBlockIdMapping(CC, zC, ZC, QC) {
+         const wC = new Uint16Array(zC + 1),
+           bC = this.getRotationMapping(ZC, QC);
+         for (const nC in CC) {
+           const zC = CC[nC];
+           wC[zC.id] = this.mapBlockId(zC, ZC, bC, QC)
+         }
+         return wC
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L52-L53` → after: `L223-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L223-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L223-L231) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L52-L53)

```diff
-       set is2DArray(qq) {
-         this._texture && (this._texture.is2DArray = qq)
+       getRotationMapping(CC, zC) {
+         const ZC = Math.round(CC / 90),
+           QC = new Uint8Array(4);
+         for (let wC = 0; wC < 4; wC++) QC[wC] = (4 + wC - ZC) % 4;
+         if (zC) {
+           let CC = QC[0];
+           QC[0] = QC[1], QC[1] = CC, CC = QC[2], QC[2] = QC[3], QC[3] = CC
+         }
+         return QC
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L55-L56` → after: `L233-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L233-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L233-L267) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L55-L56)

```diff
-       getClassName() {
-         return "ThinTexture"
+       mapBlockId(CC, zC, ZC, QC) {
+         var wC;
+         const {
+           blockMetadata: bC
+         } = this, nC = Math.round(zC / 90), {
+           id: fC,
+           meta: oC
+         } = CC, {
+           rot: qC,
+           rootName: FC,
+           metaStr: WC
+         } = oC;
+         let NC;
+         const [, MC, gC] = null !== (wC = lC.exec(WC)) && void 0 !== wC ? wC : [];
+         if (void 0 !== MC) {
+           var SC, pC;
+ ... (19 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L58-L59` → after: `L269-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L269-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L269-L399) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L58-L59)

```diff
-       static _IsRenderTargetWrapper(qq) {
-         return void 0 !== qq?.shareDepth
+     }
+ 
+     function uC(CC, zC, ZC) {
+       let {
+         xRotationMappedOrigin: QC,
+         shouldSwapXZ: wC
+       } = ZC;
+       const bC = wC ? zC : CC;
+       return null === QC ? bC : QC - bC
+     }
+ 
+     function rC(CC, zC, ZC) {
+       let {
+         zRotationMappedOrigin: QC,
+         shouldSwapXZ: wC
+       } = ZC;
+ ... (115 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L61-L62` → after: `L401-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L401-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L401-L538) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L61-L62)

```diff
-       constructor(qq) {
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = cq.b.Zero(), this._cachedBaseSize = cq.b.Zero(), this._initialSamplingMode = 2, this._texture = uq. … [truncated]
+       return QC
+     }
+     const tC = {
+       farm_hut: ZC.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
+       farm_house: ZC.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
+       farm_barn: ZC.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
+       rusticHome_tent: ZC.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
+       rusticHome_cabin: ZC.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
+       rusticHome_house: ZC.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
+       market_stand: ZC.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
+       market_stall: ZC.p + "static/media/market_stall.9a562807f9dff591618a.webp",
+       market_shop: ZC.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
+       castle_wall: ZC.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
+       castle_gate: ZC.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
+       castle_tower: ZC.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
+     };
+ ... (122 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L64-L65` → after: `L540-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L540-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L540-L544) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L64-L65)

```diff
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+       add(CC, zC) {
+         for (this.samples.push({
+             x: CC,
+             at: zC
+           }); zC - this.samples[0].at > 100;) this.samples.shift()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L67-L69` → after: `L546-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L546-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L546-L549) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+       get() {
+         const CC = this.samples[0],
+           zC = this.samples[this.samples.length - 1];
+         return zC.at > CC.at ? (zC.x - CC.x) / (zC.at - CC.at) : 0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L71-L74` → after: `L551-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L551-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L551-L600) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L71-L74)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
+     }
+ 
+     function zz(CC, zC) {
+       return CC > zC && CC >= 600
+     }
+ 
+     function Zz(CC) {
+       return kC(new DOMMatrixReadOnly(getComputedStyle(CC).transform).m11)
+     }
+ 
+     function Qz(CC, zC) {
+       CC.style.transform = `rotateY(${-zC}deg)`, CC.classList.add("Turning")
+     }
+ 
+     function wz(CC) {
+       let {
+ ... (34 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L76-L79` → after: `L602-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L602-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L602-L773) · [Before (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L76-L79)

```diff
-         return this._cachedSize
-       }
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+       }), [MC, gC, GC]), xC = (0, bC.useCallback)((CC => {
+         if (null !== FC.current) return;
+         const zC = GC();
+         ("Forward" === CC ? zC + MC < QC.length : zC > 0) && AC(CC, !0, 0, zC)
+       }), [GC, AC, MC, QC.length]);
+       (0, bC.useEffect)((() => {
+         zC.onOpened()
+       }), [zC]), (0, bC.useEffect)((() => () => {
+         var CC;
+         null === (CC = WC.current) || void 0 === CC || CC.animation.cancel()
+       }), []), (0, bC.useEffect)((() => {
+         const CC = CC => {
+           var zC;
+           CC.pointerId !== (null === (zC = FC.current) || void 0 === zC ? void 0 : zC.pointerId) || FC.current.following || (FC.current = null)
+         };
+         return window.addEventListener("pointerup", CC), () => {
+ ... (156 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L81-L82` → after: `L775-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L775-L776) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+       getStep() {
+         return this.step
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L84-L86` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L778-L779) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L84-L86)

```diff
-       updateSamplingMode(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(qq, this._texture, this._texture.generateMipMaps && Eq)
+       receiveStep(CC) {
+         this.step = CC, FC.o.bp(qz, CC, !0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L88-L89` → after: `L781-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L781-L782) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       getPlot() {
+         return this.plot
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L91-L92` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L784-L785) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L91-L92)

```diff
-       dispose() {
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+       receivePlot(CC) {
+         this.plot = CC, FC.o.bp(Fz, CC, !0)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L95-L195` → after: `L788-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L788-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L788-L894) · [Before (L95-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L95-L195)

```diff
-     var Bq, Wq = gq(39779),
-       Nq = gq(39636);
-     let aq = (() => {
-       var qq;
-       let Eq, gq, cq, Bq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq, Mq, Tq, zq = uq,
-         Sq = [],
-         pq = [],
-         Gq = [],
-         Lq = [],
-         Jq = [],
-         kq = [],
-         Rq = [],
-         Uq = [],
-         Fq = [],
-         sq = [],
-         Xq = [],
- ... (85 more removed lines; see GitHub link above)
+     const Nz = "KeyJ";
+ 
+     function Mz(CC) {
+       let {
+         hud: zC,
+         journal: ZC
+       } = CC;
+       const QC = (0, hC.f)(RC, ZC.getPages()),
+         wC = (0, hC.f)(qz, zC.getStep()),
+         {
+           isTouchScreen: bC
+         } = (0, fC.k)(["isTouchScreen"]),
+         {
+           t: FC
+         } = (0, YC.y)(),
+         WC = null !== QC && "none" === wC[0];
+ ... (91 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L197-L230` → after: `L896-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L896-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L896-L900) · [Before (L197-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L197-L230)

```diff
-           this.ZJ()?.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this)))
-         }
-         get isRGBD() {
-           return null != this._texture && this._texture._isRGBD
-         }
-         set isRGBD(qq) {
-           qq !== this.isRGBD && (this._texture && (this._texture._isRGBD = qq), this.ZJ()?.markAllMaterialsAsDirty(1, (qq => qq.hasTexture(this))))
-         }
-         get noMipmap() {
-           return !1
-         }
-         get lodGenerationOffset() {
-           return this._texture ? this._texture._lodGenerationOffset : 0
-         }
-         set lodGenerationOffset(qq) {
-           this._texture && (this._texture._lodGenerationOffset = qq)
- ... (18 more removed lines; see GitHub link above)
+           wC[CC] = MC ? 1 : 0, bC[CC] = oC || null !== zC.open || NC in Rz.b || FC.has(zC.rootName) || void 0 !== (0, Sz.g)(zC.rootName) ? 1 : 0;
+           const {
+             rootName: SC
+           } = zC;
+           nC[CC] = null !== zC.open || Sz.d.includes(SC) || SC.includes("Bookshelf") || SC.includes("Mailbox") ? 1 : 0, fC[CC] = null !== (WC = (0, gz.g)(CC)) && void 0 !== WC ? WC : SC
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L232-L233` → after: `L902-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L902-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L902-L908) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L232-L233)

```diff
-         get uid() {
-           return this._uid || (this._uid = (0, Aq.d)()), this._uid
+         return {
+           kinds: ZC,
+           shapes: QC,
+           empty: wC,
+           inUse: bC,
+           ownAltActionMessage: nC,
+           placingItems: fC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L235-L261` → after: `L910-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L910-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L910-L1017) · [Before (L235-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L235-L261)

```diff
-         toString() {
-           return this.name
-         }
-         getClassName() {
-           return "BaseTexture"
-         }
-         set onDispose(qq) {
-           this._onDisposeObserver && this.MJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.MJ.add(qq)
-         }
-         get isBlocking() {
-           return !0
-         }
-         get loadingError() {
-           return this._loadingError
-         }
-         get errorObject() {
- ... (11 more removed lines; see GitHub link above)
+       }(), Iz
+     }
+ 
+     function vz() {
+       return Object.keys(dC.g).filter((CC => dC.g[CC].name === CC))
+     }
+ 
+     function ez(CC) {
+       var zC;
+       const ZC = dC.g[CC],
+         {
+           rootName: QC,
+           rot: wC
+         } = ZC.meta,
+         [, ...bC] = (null !== (zC = ZC.rootMetaDesc) && void 0 !== zC ? zC : CC).split("|"),
+         nC = bC.filter((CC => !("meta" === CC || Jz.test(CC) || (0, Gz.F)(ZC) && /^[nesw]+$/.test(CC) || Pz.f.includes(QC) && /^[lrud]+$/.test(CC) || UC.D.includes(QC) && /^(left|right)$/.test(CC))));
+ ... (92 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L263-L264` → after: `L1019-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1019-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1019-L1043) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L263-L264)

```diff
-         getTextureMatrix() {
-           return mq.e.IdentityReadOnly
+         const fC = nC / zC[bC],
+           oC = (nC + 1) / zC[bC];
+         QC = Math.max(QC, Math.min(fC, oC)), wC = Math.min(wC, Math.max(fC, oC))
+       }
+       return QC <= wC ? QC : 1 / 0
+     }
+     var jz = ZC(37900),
+       yz = ZC(38349);
+     const Lz = [1, 1, 1];
+     class Uz {
+       constructor(CC) {
+         this.api = CC, this.meshes = null, this.shown = null
+       }
+       show(CC) {
+         if (!(0, sz.i)(CC, this.shown))
+           if (this.shown = null === CC ? null : [CC[0], CC[1], CC[2]], null !== this.meshes)
+ ... (9 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L266-L267` → after: `L1045-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1045-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1045-L1049) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L266-L267)

```diff
-         getReflectionTextureMatrix() {
-           return mq.e.IdentityReadOnly
+       }
+       dispose() {
+         for (const zC of null !== (CC = this.meshes) && void 0 !== CC ? CC : []) {
+           var CC;
+           this.api.disposeGameMesh(zC)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L269-L270` → after: `L1051-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1051-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1051-L1078) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L269-L270)

```diff
-         getRefractionTextureMatrix() {
-           return this.getReflectionTextureMatrix()
+         this.meshes = null, this.shown = null
+       }
+       build(CC, zC, ZC) {
+         const QC = [],
+           wC = [];
+         for (const [bC, nC, fC, oC, qC, FC] of CC)(0, yz.f)(QC, wC, [oC + .5, qC + .5, FC + .5], [bC, nC, fC]);
+         return this.api.createGameMesh({
+           positions: QC,
+           indices: wC
+         }, {
+           rgb: Lz,
+           alpha: zC,
+           onTop: !0
+         }, ZC)
+       }
+     }
+ ... (12 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L272-L273` → after: `L1080-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1080-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1080-L1089) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L272-L273)

```diff
-         isReadyOrNotBlocking() {
-           return !this.isBlocking || this.isReady() || this.loadingError
+         this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
+       }
+       changed() {
+         const CC = performance.now();
+         if (CC - this.lastCheckMs < 100) return !1;
+         this.lastCheckMs = CC;
+         let zC = !1;
+         for (let ZC = 0; ZC < this.chunks.length; ZC += 3) {
+           const CC = this.api.getChunkVersion(this.chunks[ZC], this.chunks[ZC + 1], this.chunks[ZC + 2]);
+           this.versions[ZC / 3] !== CC && (this.versions[ZC / 3] = CC, zC = !0)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L275-L277` → after: `L1091-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1091-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1091-L1142) · [Before (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L275-L277)

```diff
-         scale(qq) {}
-         get canRescale() {
-           return !1
+         return zC
+       }
+       watches(CC, zC, ZC) {
+         for (let QC = 0; QC < this.chunks.length; QC += 3)
+           if (this.chunks[QC] === CC && this.chunks[QC + 1] === zC && this.chunks[QC + 2] === ZC) return !0;
+         return !1
+       }
+     }
+     const Oz = .35,
+       kz = {
+         size: .9,
+         alpha: .35,
+         crossed: !1
+       },
+       Vz = {
+         size: 1.04,
+ ... (36 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L279-L286` → after: `L1144-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1144-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1144-L1148) · [Before (L279-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L279-L286)

```diff
-         _getFromCache(qq, Eq, gq, Yq, lq, Oq) {
-           const mq = this._getEngine();
-           if (!mq) return null;
-           const xq = mq._getUseSRGBBuffer(!!lq, Eq),
-             Aq = mq.getLoadedTexturesCache();
-           for (let cq = 0; cq < Aq.length; cq++) {
-             const mq = Aq[cq];
-             if ((void 0 === lq || xq === mq._useSRGBBuffer) && (void 0 === Yq || Yq === mq.invertY) && mq.url === qq && mq.generateMipMaps === !Eq && (!gq || gq === mq.samplingMode) && (void 0 === Oq || Oq === mq.isCube)) return mq.incrementReferences(), mq
+         this.dispose(), this.shown = zC
+       }
+       dispose() {
+         for (const {
+             meshes: CC
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L288` → after: `L1150-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1150-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1150-L1168) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L288)

```diff
-           return null
+           of this.shown)
+           for (const zC of CC) this.api.disposeGameMesh(zC);
+         this.shown = []
+       }
+       build(CC) {
+         const {
+           rgb: zC,
+           look: ZC,
+           boxes: QC
+         } = CC, wC = [zC[0] + (1 - zC[0]) * Oz, zC[1] + (1 - zC[1]) * Oz, zC[2] + (1 - zC[2]) * Oz], bC = [this.buildMesh(CC.cells, zC, ZC.alpha, ((CC, zC, wC, bC) => {
+           QZ(CC, zC, wC, QC[bC], ZC.size, !1)
+         })), this.buildMesh(CC.cells, wC, ZC.alpha, ((CC, zC, wC, bC) => {
+           QZ(CC, zC, wC, QC[bC], ZC.size, !0)
+         }))];
+         return ZC.crossed && bC.push(this.buildMesh(CC.cells, zC, .9, ((CC, zC, QC) => {
+           (0, yz.j)(CC, zC, QC, ZC.size + .01, .12)
+ ... (3 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L290-L292` → after: `L1170-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1170-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1170-L1230) · [Before (L290-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L290-L292)

```diff
-         _rebuild() {}
-         clone() {
-           return null
+       }
+       buildMesh(CC, zC, ZC, QC) {
+         const wC = [CC[0], CC[1], CC[2]],
+           bC = [],
+           nC = [];
+         for (let fC = 0; fC < CC.length; fC += 3) QC(bC, nC, [CC[fC] - wC[0] + .5, CC[fC + 1] - wC[1] + .5, CC[fC + 2] - wC[2] + .5], fC / 3);
+         return this.api.createGameMesh({
+           positions: bC,
+           indices: nC
+         }, {
+           rgb: [zC[0], zC[1], zC[2]],
+           alpha: ZC
+         }, wC)
+       }
+     }
+ 
+ ... (45 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L294-L295` → after: `L1232-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1232-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1232-L1278) · [Before (L294-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L294-L295)

```diff
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
+       }
+       filled(CC, zC) {
+         this.tap = null, this.turnFrom(CC, zC), this.retry(zC)
+       }
+       arrived(CC, zC) {
+         const {
+           tap: ZC
+         } = this;
+         if (null === ZC || zC - ZC.ms > 1500) return null;
+         const QC = (0, sz.e)(CC);
+         return (0, sz.i)(ZC.next, CC) || ZC.lines.some((CC => {
+           let [zC, ZC] = CC;
+           return function(CC, zC, ZC) {
+             const QC = [ZC[0] - zC[0], ZC[1] - zC[1], ZC[2] - zC[2]],
+               wC = [CC[0] - zC[0], CC[1] - zC[1], CC[2] - zC[2]],
+               bC = QC[0] ** 2 + QC[1] ** 2 + QC[2] ** 2,
+ ... (31 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L297-L298` → after: `L1280-L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1280-L1282) · [Before (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L297-L298)

```diff
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
+         this.api.turnCamera(bC, zC.turnMs), this.turning = {
+           to: ZC,
+           endMs: CC + zC.turnMs
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L300-L302` → after: `L1284-L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1284-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1284-L1295) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L300-L302)

```diff
-         _markAllSubMeshesAsTexturesDirty() {
-           const qq = this.ZJ();
-           qq && qq.markAllMaterialsAsDirty(1)
+       }
+     }
+     class oZ {
+       constructor(CC, zC, ZC) {
+         this.api = CC, this.localPlayerId = zC, this.juice = ZC, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], th … [truncated]
+       }
+       Ag(CC) {
+         const zC = "active" === CC[0] ? `${CC[1]}|${CC[3]}|${CC[4]}|${CC[5]}|${CC[6]}` : "";
+         if ("active" !== CC[0]) "built" === CC[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
+         else {
+           const [, , , , , , , ZC, QC, wC, bC] = CC;
+           zC !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = ZC) : ZC === this.layerY ? this.burstUnlisted(QC) : ZC > this.layerY && this.finishLayer(ZC), this.layerY = ZC, this.layerCells.has(ZC) || this.layerCells.set(ZC, QC.filter(FZ)), this.ghostCells = QC, th … [truncated]
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L304-L325` → after: `L1297-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1297-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1297-L1308) · [Before (L304-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L304-L325)

```diff
-         readPixels() {
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-             Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-             mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
-             xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
-             Aq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
-           if (!this._texture) return null;
-           const cq = this._getEngine();
-           if (!cq) return null;
-           const uq = this.getSize();
-           let Bq = uq.width,
-             Wq = uq.height;
- ... (6 more removed lines; see GitHub link above)
+         zC !== this.blueprint && (this.blueprint = zC, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((CC => this.api.blockNameToBlockId(CC))), this.chunkWatch.watch([...this.ghostCells.filter(FZ), . … [truncated]
+       }
+       finishLayer(CC) {
+         this.burstUnlisted([]), CC > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = CC)
+       }
+       ZN() {
+         if (this.chunkWatch.changed()) return void this.refresh();
+         const CC = performance.now();
+         let zC = !1;
+         for (const [wC, bC] of this.foreseen) {
+           var ZC;
+           if (CC - bC > 1e3) this.foreseen.delete(wC), zC = !0, (null === (ZC = this.lastFilled) || void 0 === ZC ? void 0 : ZC.join()) === wC && (this.lastFilled = this.lastSeenFilled)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L327-L344` → after: `L1310-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1310-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1310-L1325) · [Before (L327-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L327-L344)

```diff
-         _readPixelsSync() {
-           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-           if (!this._texture) return null;
-           const Oq = this.getSize();
-           let mq = Oq.width,
-             xq = Oq.height;
-           const Aq = this._getEngine();
-           if (!Aq) return null;
-           0 != Eq && (mq /= Math.pow(2, Eq), xq /= Math.pow(2, Eq), mq = Math.round(mq), xq = Math.round(xq));
-           try {
-             return this._texture.isCube ? Aq._readTexturePixelsSync(this._texture, mq, xq, qq, Eq, gq, Yq, lq) : Aq._readTexturePixelsSync(this._texture, mq, xq, -1, Eq, gq, Yq, lq)
-           } catch (cq) {
- ... (2 more removed lines; see GitHub link above)
+         const QC = qZ(this.api.getPositionView(this.localPlayerId));
+         (zC || QC.some(((CC, zC) => CC !== this.playerCells[zC]))) && this.showNext()
+       }
+       dispose() {
+         this.meshes.dispose(), this.outline.dispose()
+       }
+       burstUnlisted(CC) {
+         const zC = new Set;
+         for (let wC = 0; wC < CC.length; wC += 4) zC.add(`${CC[wC]},${CC[wC+1]},${CC[wC+2]}`);
+         const ZC = [],
+           {
+             ghostCells: QC
+           } = this;
+         for (let wC = 0; wC < QC.length; wC += 4) {
+           const CC = `${QC[wC]},${QC[wC+1]},${QC[wC+2]}`;
+           !zC.has(CC) && this.open.delete(CC) && ZC.push(this.filledCell(wC))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L346-L347` → after: `L1327-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1327-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/248.js#L1327-L1337) · [Before (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/248.js#L346-L347)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
+         this.burst(ZC)
+       }
+       refresh() {
+         const {
+           ghostCells: CC,
+           palette: zC,
+           occupiedCells: ZC
+         } = this, QC = new zZ, wC = new Set, bC = [], nC = [];
+         for (let fC = 0; fC < CC.length; fC += 4) {
+           const [ZC, oC, qC, FC] = [CC[fC], CC[fC + 1], CC[fC + 2], CC[fC + 3]], WC = this.api.getBlockId(ZC, oC, qC), NC = `${ZC},${oC},${qC}`, MC = hz(this.blockIds[FC], WC);
+           !MC && Kz(WC) ? QC.add(ZC, oC, qC, dz(zC[FC]), kz, rz(zC[FC])) : MC ? this.open.has(NC) && bC.push(this.filledCell(fC)) : QC.add(ZC, oC, qC, CZ, Vz), !MC && this.api.isBlockInLoadedChunk(ZC, oC, qC) && (wC.add(NC), nC.push(ZC, oC, qC, Kz(WC) ? 0 : 1))
```
