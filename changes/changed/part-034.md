# Changed — Bundle Modifications Report (Part 034 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `34 / 115` (**268** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 033](part-033.md) · [Part 035 →](part-035.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (281 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 206. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4540-L4543` → after: `L3736-L3745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3736-L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3736-L3745) · [Before (L4540-L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4540-L4543)

```diff
-       set_secure(UU) {
-         UU !== this._secure && (this._secure = UU, this.remove({
-           keepGroupEntries: !0
-         }), this.save())
+       clone() {
+         let HH = this.particleSystem.emitter;
+         if (HH) {
+           if (HH instanceof SH.o) HH = HH.clone();
+           else if (-1 !== HH.getClassName().indexOf("Mesh")) {
+             HH = new((0, cB.b)("BABYLON.Mesh"))("", HH.yN()), HH.isVisible = !1
+           }
+         } else HH = new SH.o;
+         const BH = new eB(this.particleSystem.clone(this.particleSystem.name, HH));
+         return BH.particleSystem.name += "Clone", BH.type = this.type, BH.inheritDirection = this.inheritDirection, BH.inheritedVelocityAmount = this.inheritedVelocityAmount, BH.particleSystem._disposeEmitterOnDispose = !0, BH.particleSystem.disposeOnStop = !0, BH
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4545-L4547` → after: `L3747-L3750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3747-L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3747-L3750) · [Before (L4545-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4545-L4547)

```diff
-       set_event_timer(UU, XU) {
-         const zU = this.props.__timers || {};
-         zU[UU] = XU, this._setProp(SU, zU), this.save()
+       serialize() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const BH = {};
+         return BH.type = this.type, BH.inheritDirection = this.inheritDirection, BH.inheritedVelocityAmount = this.inheritedVelocityAmount, BH.particleSystem = this.particleSystem.serialize(HH), BH
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4549-L4552` → after: `L3752-L3753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3752-L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3752-L3753) · [Before (L4549-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4549-L4552)

```diff
-       remove_event_timer(UU) {
-         const XU = this.props.__timers || {},
-           zU = XU[UU];
-         return Pz(zU) || (delete XU[UU], this._setProp(SU, XU), this.save()), zU
+       static _ParseParticleSystem(HH, BH, LH) {
+         throw (0, qH.i)("ParseParticle")
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4554-L4555` → after: `L3755-L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3755-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3755-L3758) · [Before (L4554-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4554-L4555)

```diff
-       get_property(UU) {
-         return this.props[UU]
+       static Parse(HH, BH, LH) {
+         const AH = HH.particleSystem,
+           rH = new eB(eB._ParseParticleSystem(AH, BH, LH, !0));
+         return rH.type = HH.type, rH.inheritDirection = HH.inheritDirection, rH.inheritedVelocityAmount = HH.inheritedVelocityAmount, rH.particleSystem._isSubEmitter = !0, rH
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4557-L4558` → after: `L3760-L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3760-L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3760-L3761) · [Before (L4557-L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4557-L4558)

```diff
-       set_property(UU, XU) {
-         this._setProp(UU, XU), this.save()
+       dispose() {
+         this.particleSystem.dispose()
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4560-L4564` → after: `L3763-L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3763-L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3763-L3787) · [Before (L4560-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4560-L4564)

```diff
-       _setProp(UU, XU) {
-         let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         var cU;
-         const yU = this.props[UU];
-         this.props[UU] = XU, zU && ("distinct_id" !== UU && "$user_state" !== UU || yU === XU || (this._localIdentityChangePending = !0), ND(UU) && !ID(yU, XU) && this._metaIdentifierChangePending.add(UU), this._markPendingCrossTabFeatureFlagChanges(UU, yU, XU), (null === (cU = O … [truncated]
+     }
+     var qB = LH(41184),
+       gB = LH(41319);
+     const NB = () => {};
+     class RB {
+       constructor() {
+         this.particlePositionGenerator = NB, this.particleDestinationGenerator = NB, this.particleDirectionGenerator = NB
+       }
+       startDirectionFunction(HH, BH, LH, AH) {
+         const rH = SH.l.lu[0];
+         if (this.particleDirectionGenerator && this.particleDirectionGenerator !== NB) this.particleDirectionGenerator(-1, LH, rH);
+         else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== NB) {
+           this.particleDestinationGenerator(-1, LH, rH);
+           const HH = SH.l.lu[1];
+           rH.subtractToRef(LH.position, HH), HH.scaleToRef(1 / LH.lifeTime, rH)
+         } else rH.set(0, 0, 0);
+ ... (9 more added lines; see GitHub link above)
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4566-L4568` → after: `L3789-L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3789-L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3789-L3792) · [Before (L4566-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4566-L4568)

```diff
-       _deleteProp(UU) {
-         let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         delete this.props[UU], XU && (ED(UU) && this._setCrossTabFeatureFlagChangesPending(UU, !0), ND(UU) && this._metaIdentifierChangePending.add(UU), this._markGroupDirty(UU))
+       applyToShader(HH) {}
+       buildUniformLayout(HH) {}
+       getEffectDefines() {
+         return "#define CUSTOMEMITTER"
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4570-L4573` → after: `L3794-L3795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3794-L3795) · [Before (L4570-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4570-L4573)

```diff
-       _markGroupDirty(UU) {
-         var XU;
-         const zU = null === (XU = Oo(UU)) || void 0 === XU ? void 0 : XU.storageGroup;
-         zU && (this._slotWriteState(zU).vp = !0)
+       getClassName() {
+         return "CustomParticleEmitter"
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4575-L4576` → after: `L3797-L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3797-L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3797-L3799) · [Before (L4575-L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4575-L4576)

```diff
-       _slotWriteState(UU) {
-         return this._slotState[UU] || (this._slotState[UU] = {})
+       serialize() {
+         const HH = {};
+         return HH.type = this.getClassName(), HH.particlePositionGenerator = this.particlePositionGenerator, HH.particleDestinationGenerator = this.particleDestinationGenerator, HH
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4578-L4606` → after: `L3801-L3802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3801-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3801-L3802) · [Before (L4578-L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4578-L4606)

```diff
-     };
-     const gD = {
-         GZipJS: "gzip-js",
-         Base64: "base64"
-       },
-       kD = "events",
-       GD = "cancelEvents",
-       BD = "popover",
-       ZD = "api",
-       RD = "widget",
-       PD = "survey shown",
-       WD = "survey dismissed",
-       dD = "survey sent",
-       LD = "$survey_id",
-       eD = "$survey_iteration",
-       CD = "$survey_last_seen_date",
- ... (13 more removed lines; see GitHub link above)
+       parse(HH) {
+         HH.particlePositionGenerator && (this.particlePositionGenerator = HH.particlePositionGenerator), HH.particleDestinationGenerator && (this.particleDestinationGenerator = HH.particleDestinationGenerator)
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4609-L4630` → after: `L3805-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3805-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3805-L3810) · [Before (L4609-L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4609-L4630)

```diff
-     const SD = "product tour shown",
-       rD = "$product_tour_last_seen_date",
-       uD = "$product_tour_type",
-       fD = iA("[RateLimiter]");
-     var iD = class {
-       constructor(UU) {
-         this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = UU => {
-           const XU = UU.text;
-           if (XU && XU.length) try {
-             (JSON.parse(XU).quota_limited || []).forEach((UU => {
-               fD.info(`${UU||"events"} is quota limited.`), this.serverLimits[UU] = (new Date).getTime() + 6e4
-             }))
-           } catch (UU) {
-             return void fD.warn(`could not rate limit - continuing. Error: "${null==UU?void 0:UU.message}"`, {
-               text: XU
-             })
- ... (6 more removed lines; see GitHub link above)
+     const jB = SH.o.Zero(),
+       nB = SH.o.Zero(),
+       FB = SH.o.Zero();
+     class DB {
+       constructor() {
+         this.strength = 0, this.position = SH.o.Zero()
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4632-L4634` → after: `L3812-L3815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3812-L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3812-L3815) · [Before (L4632-L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4632-L4634)

```diff
-       get captureEventsBurstLimit() {
-         var UU;
-         return Math.max((null === (UU = this.instance.config.rate_limiting) || void 0 === UU ? void 0 : UU.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
+       _processParticle(HH, BH) {
+         this.position.subtractToRef(HH.position, jB);
+         const LH = jB.lengthSquared() + 1;
+         jB.normalize().scaleToRef(this.strength / LH, nB), nB.scaleToRef(BH._tempScaledUpdateSpeed, FB), HH.direction.addInPlace(FB)
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4636-L4650` → after: `L3817-L3820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3817-L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3817-L3820) · [Before (L4636-L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4636-L4650)

```diff
-       clientRateLimitContext() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         var XU, zU, cU;
-         const {
-           captureEventsBurstLimit: yU,
-           captureEventsPerSecond: QU
-         } = this, AU = (new Date).getTime(), FU = null !== (XU = null === (zU = this.instance.persistence) || void 0 === zU ? void 0 : zU.get_property("$capture_rate_limit")) && void 0 !== XU ? XU : {
-           tokens: yU,
-           last: AU
-         };
-         FU.tokens += (AU - FU.last) / 1e3 * QU, FU.last = AU, FU.tokens > yU && (FU.tokens = yU);
-         const oU = 1 > FU.tokens;
-         if (oU || UU || (FU.tokens = Math.max(0, FU.tokens - 1)), oU && !UU) {
-           const UU = (Cz(FU.dropped) ? FU.dropped : 0) + 1;
-           FU.dropped = UU, !this.lastEventRateLimited && this._captureWarning(UU) && (FU.dropped = 0)
+       serialize() {
+         return {
+           position: this.position.xrH(),
+           strength: this.strength
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4652-L4654` → after: `L3822-L3834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3822-L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3822-L3834) · [Before (L4652-L4654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4652-L4654)

```diff
-         return this.lastEventRateLimited = oU, null === (cU = this.instance.persistence) || void 0 === cU || cU.set_property("$capture_rate_limit", FU), {
-           isRateLimited: oU,
-           remainingTokens: FU.tokens
+       }
+     }
+     const wB = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationC … [truncated]
+     class ZB extends lB {
+       constructor() {
+         super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metad … [truncated]
+           if (!this._subEmitters || 0 === this._subEmitters.length) return;
+           const BH = Math.floor(Math.random() * this._subEmitters.length);
+           for (const LH of this._subEmitters[BH])
+             if (1 === LH.type) {
+               const BH = LH.clone();
+               HH._inheritParticleInfoToSubEmitter(BH), BH.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(BH.particleSystem), BH.particleSystem.start()
+             }
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4657-L4659` → after: `L3837-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3837-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3837-L3838) · [Before (L4657-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4657-L4659)

```diff
-       _isPropertyAllowed(UU) {
-         const XU = this.instance.config.property_denylist;
-         return !Gz(XU) || !XU.includes(UU)
+       get source() {
+         return this._source
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4661-L4675` → after: `L3840-L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3840-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3840-L3841) · [Before (L4661-L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4661-L4675)

```diff
-       _triggeringPage() {
-         var UU;
-         if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == Uz ? void 0 : Uz.pathname)) return `${null!==(UU=Uz.origin)&&void 0!==UU?UU:""}${Uz.pathname}`
-       }
-       _captureWarning(UU) {
-         var XU, zU;
-         const {
-           captureEventsBurstLimit: cU,
-           captureEventsPerSecond: yU
-         } = this, QU = this._triggeringPage(), AU = this._isPropertyAllowed("$session_id") ? null === (XU = (zU = this.instance).get_session_id) || void 0 === XU ? void 0 : XU.call(zU) : void 0, FU = [`${UU} event(s) dropped since the last warning`, QU ? `triggered on ${QU}` : vo … [truncated]
-         return !!this.instance.capture("$$client_ingestion_warning", {
-           $$client_ingestion_warning_message: `posthog-js client rate limited: ${FU}. Config is set to ${yU} events per second and ${cU} events burst limit.`
-         }, {
-           skip_client_rate_limiting: !0
-         })
+       get isNodeGenerated() {
+         return null !== this._source
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4677-L4679` → after: `L3843-L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3843-L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3843-L3844) · [Before (L4677-L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4677-L4679)

```diff
-       isServerRateLimited(UU) {
-         const XU = this.serverLimits[UU || "events"] || !1;
-         return !1 !== XU && (new Date).getTime() < XU
+       get flowMap() {
+         return this._flowMap
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4681-L4685` → after: `L3846-L3863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3846-L3863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3846-L3863) · [Before (L4681-L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4681-L4685)

```diff
-     };
-     const HD = iA("[RemoteConfig]");
-     var MD = class {
-       constructor(UU) {
-         this._instance = UU
+       set flowMap(HH) {
+         this._flowMap !== HH && (this._flowMap = HH, this._flowMapUpdate && (IB(this._flowMapUpdate), this._flowMapUpdate = null), HH && (this._flowMapUpdate = {
+           process: HH => {
+             const BH = this.yN()?.getTransformMatrix();
+             this._flowMap._processParticle(HH, this.flowMapStrength * this._tempScaledUpdateSpeed, BH)
+           },
+           previousItem: null,
+           nextItem: null
+         }, oB(this._flowMapUpdate, this._directionProcessing)))
+       }
+       addAttractor(HH) {
+         super.addAttractor(HH), 1 === this._attractors.length && (this._attractorUpdate = {
+           process: HH => {
+             for (const BH of this._attractors) BH._processParticle(HH, this)
+           },
+           previousItem: null,
+ ... (2 more added lines; see GitHub link above)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4687-L4689` → after: `L3865-L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3865-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3865-L3866) · [Before (L4687-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4687-L4689)

```diff
-       get remoteConfig() {
-         var UU;
-         return null === (UU = Fz._POSTHOG_REMOTE_CONFIG) || void 0 === UU || null === (UU = UU[this._instance.config.token]) || void 0 === UU ? void 0 : UU.config
+       removeAttractor(HH) {
+         super.removeAttractor(HH), 0 === this._attractors.length && this._attractorUpdate && IB(this._attractorUpdate)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4691-L4693` → after: `L3868-L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3868-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3868-L3870) · [Before (L4691-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4691-L4693)

```diff
-       _loadRemoteConfigJs(UU) {
-         var XU, zU, cU;
-         (null === (XU = Fz.__PosthogExtensions__) || void 0 === XU ? void 0 : XU.loadExternalDependency) ? null === (zU = Fz.__PosthogExtensions__) || void 0 === zU || null === (cU = zU.loadExternalDependency) || void 0 === cU || cU.call(zU, this._instance, "remote-config", (() = … [truncated]
+       start() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
+         this.canStart() && super.start(HH)
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4695-L4700` → after: `L3872-L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3872-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3872-L3874) · [Before (L4695-L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4695-L4700)

```diff
-       _loadRemoteConfigJSON(UU) {
-         this._instance._send_request({
-           method: "GET",
-           url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
-           callback: UU
-         })
+       _prepareSubEmitterInternalArray() {
+         if (this._subEmitters = new Array, this.subEmitters)
+           for (const HH of this.subEmitters) HH instanceof ZB ? this._subEmitters.push([new eB(HH)]) : HH instanceof eB ? this._subEmitters.push([HH]) : HH instanceof Array && this._subEmitters.push(HH)
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4702-L4713` → after: `L3876-L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3876-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3876-L3879) · [Before (L4702-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4702-L4713)

```diff
-       load() {
-         try {
-           if (this.remoteConfig) return HD.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
-           if (this._instance._shouldDisableFlags()) return void HD.warn("Remote config is disabled. Falling back to local config.");
-           this._loadRemoteConfigJs((UU => {
-             if (!UU) return HD.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((UU => {
-               this._onRemoteConfig(UU.json, UU)
-             }));
-             this._onRemoteConfig(UU)
-           }))
-         } catch (cU) {
-           HD.error("Error loading remote config", cU), this._onRemoteConfig()
+       _stopSubEmitters() {
+         if (this.activeSubSystems) {
+           for (const HH of this.activeSubSystems) HH.stop(!0);
+           this.activeSubSystems = []
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4716-L4733` → after: `L3882-L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3882-L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3882-L3884) · [Before (L4716-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4716-L4733)

```diff
-       _onRemoteConfig(UU, XU) {
-         !UU && XU && (0 === XU.statusCode ? XU.error || HD.warn("Failed to fetch remote config from PostHog.") : HD.error("Failed to fetch remote config from PostHog."));
-         try {
-           this._instance._onRemoteConfig(UU ? {
-             ok: !0,
-             config: UU
-           } : {
-             ok: !1
-           })
-         } catch (UU) {
-           HD.error("Error applying remote config", UU)
-         }
-         if (!1 !== (null == UU ? void 0 : UU.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
-           var zU;
-           null === (zU = this._instance.featureFlags) || void 0 === zU || zU.ensureFlagsLoaded()
-         } catch (UU) {
- ... (2 more removed lines; see GitHub link above)
+       _removeFromRoot() {
+         if (!this._rootParticleSystem) return;
+         const HH = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== HH && this._rootParticleSystem.activeSubSystems.splice(HH, 1), this._rootParticleSystem = null
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4735-L4805` → after: `L3886-L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3886-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3886-L3900) · [Before (L4735-L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4735-L4805)

```diff
-     };
-     var vD = Uint8Array,
-       VD = Uint16Array,
-       sD = Uint32Array,
-       nD = new vD([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
-       mD = new vD([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
-       lD = new vD([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
-       xD = function(UU, XU) {
-         for (var zU = new VD(31), cU = 0; 31 > cU; ++cU) zU[cU] = XU += 1 << UU[cU - 1];
-         var yU = new sD(zU[30]);
-         for (cU = 1; 30 > cU; ++cU)
-           for (var QU = zU[cU]; zU[cU + 1] > QU; ++QU) yU[QU] = QU - zU[cU] << 5 | cU;
-         return [zU, yU]
-       },
-       JD = xD(nD, 2),
-       jD = JD[1];
- ... (55 more removed lines; see GitHub link above)
+       _preStart() {
+         this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
+       }
+       _postStop(HH) {
+         HH && this._stopSubEmitters()
+       }
+       _prepareParticle(HH) {
+         if (this._subEmitters && this._subEmitters.length > 0) {
+           const BH = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
+           HH._properties.attachedSubEmitters = [];
+           for (const LH of BH)
+             if (0 === LH.type) {
+               const BH = LH.clone();
+               HH._properties.attachedSubEmitters.push(BH), BH.particleSystem.start()
+             }
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4807-L4853` → after: `L3902-L3970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3902-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3902-L3970) · [Before (L4807-L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4807-L4853)

```diff
-         zU.sort((function(UU, XU) {
-           return UU.f - XU.f
-         })), zU.push({
-           s: -1,
-           f: 25001
-         });
-         var FU = zU[0],
-           oU = zU[1],
-           DU = 0,
-           EU = 1,
-           YU = 2;
-         for (zU[0] = {
-             s: -1,
-             f: FU.f + oU.f,
-             l: FU,
-             r: oU
- ... (31 more removed lines; see GitHub link above)
+       }
+       _onDispose() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), HH && this.particles)
+           for (const LH of this.particles)
+             if (LH._properties.attachedSubEmitters)
+               for (let HH = LH._properties.attachedSubEmitters.length - 1; HH >= 0; HH -= 1) LH._properties.attachedSubEmitters[HH].dispose();
+         if (BH && this.activeSubSystems)
+           for (let LH = this.activeSubSystems.length - 1; LH >= 0; LH -= 1) this.activeSubSystems[LH].dispose();
+         if (this._subEmitters && this._subEmitters.length) {
+           for (let HH = 0; HH < this._subEmitters.length; HH++)
+             for (const BH of this._subEmitters[HH]) BH.dispose();
+           this._subEmitters = [], this.subEmitters = []
+         }
+         this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
+ ... (53 more added lines; see GitHub link above)
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4855-L4905` → after: `L3972-L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3972-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3972-L4030) · [Before (L4855-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4855-L4905)

```diff
-         return [new vD(IU), pU]
-       },
-       EE = function(UU, XU, zU) {
-         return -1 == UU.s ? Math.max(EE(UU.l, XU, zU + 1), EE(UU.r, XU, zU + 1)) : XU[UU.s] = zU
-       },
-       YE = function(UU) {
-         for (var XU = UU.length; XU && !UU[--XU];);
-         for (var zU = new VD(++XU), cU = 0, yU = UU[0], QU = 1, AU = function(UU) {
-             zU[cU++] = UU
-           }, FU = 1; XU >= FU; ++FU)
-           if (UU[FU] == yU && FU != XU) ++QU;
-           else {
-             if (!yU && QU > 2) {
-               for (; QU > 138; QU -= 138) AU(32754);
-               QU > 2 && (AU(QU > 10 ? QU - 11 << 5 | 28690 : QU - 3 << 5 | 12305), QU = 0)
-             } else if (QU > 3) {
- ... (35 more removed lines; see GitHub link above)
+         let tH;
+         if (HH.particleEmitterType) {
+           switch (HH.particleEmitterType.type) {
+             case "SphereParticleEmitter":
+               tH = new WH;
+               break;
+             case "SphereDirectedParticleEmitter":
+               tH = new MH;
+               break;
+             case "ConeEmitter":
+             case "ConeParticleEmitter":
+               tH = new vH;
+               break;
+             case "ConeDirectedParticleEmitter":
+               tH = new PH;
+               break;
+ ... (43 more added lines; see GitHub link above)
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4923-L5061` → after: `L4033-L4036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4033-L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4033-L4036) · [Before (L4923-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4923-L5061)

```diff
-         return UU
-       }()),
-       gE = function(UU, XU, zU) {
-         for (; zU; ++XU) UU[XU] = zU, zU >>>= 8
-       };
-     const kE = !!zz || !!Xz,
-       GE = new WeakMap,
-       BE = "text/plain";
-     let ZE = 0,
-       RE = !1;
-     const PE = (UU, XU) => {
-         const [zU, cU] = UU.split("#"), [yU, QU] = zU.split("?");
-         if (!QU) return UU;
-         const AU = QU.split("&").filter((UU => UU.split("=")[0] !== XU)).join("&");
-         return `${yU}${AU?`?${AU}`:""}${cU?`#${cU}`:""}`
-       },
- ... (123 more removed lines; see GitHub link above)
+         if (HH.attractors)
+           for (const EH of HH.attractors) {
+             const HH = new DB;
+             HH.position = SH.o.FromArray(EH.position), HH.strength = EH.strength, GH.addAttractor(HH)
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5063-L5072` → after: `L4038-L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4038-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4038-L4048) · [Before (L5063-L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5063-L5072)

```diff
-         }
-         if (zU === gD.Base64) {
-           const UU = function(UU) {
-               return UU ? btoa(encodeURIComponent(UU).replace(/%([0-9A-F]{2})/g, ((UU, XU) => String.fromCharCode(parseInt(XU, 16))))) : UU
-             }(io(XU)),
-             zU = (UU => "data=" + encodeURIComponent("string" == typeof UU ? UU : io(UU)))(UU);
-           return {
-             contentType: "application/x-www-form-urlencoded",
-             body: zU,
-             estimatedSize: new Blob([zU]).size
+         return ZB._Parse(HH, GH, BH, LH), HH.textureMask && (GH.textureMask = EH.g.FromArray(HH.textureMask)), HH.worldOffset && (GH.worldOffset = SH.o.FromArray(HH.worldOffset)), HH.preventAutoStart && (GH.preventAutoStart = HH.preventAutoStart), HH.metadata && (GH.metadata = HH … [truncated]
+       }
+       serialize() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const BH = {};
+         if (ZB._Serialize(BH, this, HH), BH.textureMask = this.textureMask.xrH(), BH.customShader = this.customShader, BH.preventAutoStart = this.preventAutoStart, BH.worldOffset = this.worldOffset.xrH(), this.metadata && (BH.metadata = this.metadata), this.subEmitters) {
+           BH.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
+           for (const LH of this._subEmitters) {
+             const AH = [];
+             for (const BH of LH) BH.particleSystem.doNotSerialize || AH.push(BH.serialize(HH));
+             BH.subEmitters.push(AH)
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5075-L5140` → after: `L4051-L4053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4051-L4053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4051-L4053) · [Before (L5075-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5075-L5140)

```diff
-         const cU = io(XU);
-         return {
-           contentType: "application/json",
-           body: cU,
-           estimatedSize: new Blob([cU]).size
-         }
-       },
-       LE = UU => {
-         const XU = () => "sendBeacon" === UU.transport ? {
-           url: WE(UU.url, {
-             compression: gD.Base64
-           }),
-           encodedBody: dE(ky(ky({}, UU), {}, {
-             compression: gD.Base64,
-             _encodedBody: void 0
-           }))
- ... (50 more removed lines; see GitHub link above)
+         if (this._attractors && this._attractors.length) {
+           BH.attractors = [];
+           for (const HH of this._attractors) BH.attractors.push(HH.serialize())
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5142-L5163` → after: `L4055-L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4055-L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4055-L4063) · [Before (L5142-L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5142-L5163)

```diff
-       }(),
-       wE = /Failed to fetch|NetworkError|Load failed/i,
-       qE = UU => "TypeError" === (null == UU ? void 0 : UU.name) && wE.test((null == UU ? void 0 : UU.message) || ""),
-       OE = UU => {
-         try {
-           const XU = function(UU) {
-             let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-             if ("string" != typeof UU || !UU) return;
-             const zU = UU.trim(),
-               cU = /^\d+\s*,/.test(zU) ? zU.slice(0, zU.indexOf(",")).trim() : zU;
-             if (/^\d+$/.test(cU)) {
-               const UU = 1e3 * Math.min(Number(cU), 300);
-               return UU > 0 ? UU : void 0
-             }
-             if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(cU)) return;
-             const yU = /^\w{3} \w{3} /.test(cU) ? cU + " GMT" : cU,
- ... (6 more removed lines; see GitHub link above)
+         return BH
+       }
+       static _Serialize(HH, BH, LH) {
+         if (HH.name = BH.name, HH.id = BH.id, HH.aX = BH.getCapacity(), HH.disposeOnStop = BH.disposeOnStop, HH.manualEmitCount = BH.manualEmitCount, BH.emitter.position) {
+           const LH = BH.emitter;
+           HH.emitterId = LH.id
+         } else {
+           const LH = BH.emitter;
+           HH.emitter = LH.xrH()
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5165-L5184` → after: `L4065-L4077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4065-L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4065-L4077) · [Before (L5165-L5184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5165-L5184)

```diff
-       },
-       SE = UU => {
-         const XU = eE(UU);
-         if (!XU) return;
-         const zU = new zz;
-         GE.set(zU, !0);
-         const {
-           url: cU,
-           encodedBody: yU
-         } = XU;
-         zU.open(UU.method || "GET", cU, !0);
-         const {
-           contentType: QU,
-           body: AU
-         } = null != yU ? yU : {};
-         MA(UU.headers, (function(UU, XU) {
- ... (4 more removed lines; see GitHub link above)
+         if (BH.particleEmitterType && (HH.particleEmitterType = BH.particleEmitterType.serialize()), BH.particleTexture)
+           if (LH) HH.texture = BH.particleTexture.serialize();
+           else {
+             const LH = BH.particleTexture;
+             HH.textureName = BH.particleTexture.name, HH.invertY = !!LH._invertY;
+             const AH = {};
+             for (const HH of wB) AH[HH] = LH[HH];
+             AH.samplingMode = LH.samplingMode, HH.textureSettings = AH
+           } HH.isLocal = BH.isLocal, gB.c.AppendSerializedAnimations(BH, HH), HH.beginAnimationOnStart = BH.beginAnimationOnStart, HH.beginAnimationFrom = BH.beginAnimationFrom, HH.beginAnimationTo = BH.beginAnimationTo, HH.beginAnimationLoop = BH.beginAnimationLoop, HH.startDela … [truncated]
+         const AH = BH.getColorGradients();
+         if (AH) {
+           HH.colorGradients = [];
+           for (const BH of AH) {
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5186-L5187` → after: `L4079-L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4079-L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4079-L4080) · [Before (L5186-L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5186-L5187)

```diff
-               statusCode: zU.status,
-               text: zU.responseText
+               gradient: BH.gradient,
+               color1: BH.color1.xrH()
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5189-L5192` → after: `L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4082) · [Before (L5189-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5189-L5192)

```diff
-             if (200 === zU.status) try {
-               cU.json = JSON.parse(zU.responseText)
-             } catch (UU) {}
-             null === (XU = UU.callback) || void 0 === XU || XU.call(UU, cU, OE((() => zU.getResponseHeader("Retry-After"))))
+             BH.color2 ? LH.color2 = BH.color2.xrH() : LH.color2 = BH.color1.xrH(), HH.colorGradients.push(LH)
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5194-L5211` → after: `L4084-L4085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4084-L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4084-L4085) · [Before (L5194-L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5194-L5211)

```diff
-         }, zU.send(AU)
-       },
-       rE = UU => {
-         const XU = eE(UU);
-         if (!XU) return;
-         const {
-           url: zU,
-           encodedBody: cU
-         } = XU, {
-           contentType: yU,
-           body: QU,
-           estimatedSize: AU
-         } = null != cU ? cU : {}, FU = new Headers;
-         MA(UU.headers, (function(UU, XU) {
-           FU.append(XU, UU)
-         })), yU && FU.append("Content-Type", yU);
- ... (2 more removed lines; see GitHub link above)
+         }
+         const rH = BH.getRampGradients();
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5213-L5224` → after: `L4087-L4093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4087-L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4087-L4093) · [Before (L5213-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5213-L5224)

```diff
-           const XU = new cz;
-           oU = {
-             signal: XU.signal,
-             timeout: setTimeout((() => {
-               DU = !0;
-               try {
-                 XU.abort(Dy("AbortError", "PostHog request timed out" + ((zU = UU.timeout) ? ` after ${zU}ms` : "")))
-               } catch (UU) {
-                 YU(UU)
-               }
-               var zU
-             }), UU.timeout)
+           HH.rampGradients = [];
+           for (const BH of rH) {
+             const LH = {
+               gradient: BH.gradient,
+               color: BH.color.xrH()
+             };
+             HH.rampGradients.push(LH)
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5227-L5250` → after: `L4097-L4100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4097-L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4097-L4100) · [Before (L5227-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5227-L5250)

```diff
-         let EU = !1;
-         const YU = XU => {
-           var zU;
-           EU || (EU = !0, DU && "AbortError" === (null == XU ? void 0 : XU.name) || qE(XU) ? fA.warn(XU) : fA.error(XU), null === (zU = UU.callback) || void 0 === zU || zU.call(UU, {
-             statusCode: 0,
-             error: XU
-           }))
-         };
-         let NU = 0;
-         const IU = () => {
-           ZE -= NU, NU = 0, oU && clearTimeout(oU.timeout)
-         };
-         try {
-           const XU = ky({
-               method: (null == UU ? void 0 : UU.method) || "GET",
-               headers: FU,
- ... (8 more removed lines; see GitHub link above)
+         const SH = BH.getColorRemapGradients();
+         if (SH) {
+           HH.colorRemapGradients = [];
+           for (const BH of SH) {
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5252-L5253` → after: `L4102-L4103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4102-L4103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4102-L4103) · [Before (L5252-L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5252-L5253)

```diff
-               statusCode: XU.status,
-               text: zU
+               gradient: BH.gradient,
+               factor1: BH.factor1
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5255-L5294` → after: `L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4105) · [Before (L5255-L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5255-L5294)

```diff
-             if (200 === XU.status) try {
-               yU.json = JSON.parse(zU)
-             } catch (UU) {
-               fA.error(UU)
-             }
-             EU = !0, IU(), null === (cU = UU.callback) || void 0 === cU || cU.call(UU, yU, OE((() => XU.headers.get("Retry-After"))))
-           })))).catch((UU => {
-             IU(), YU(UU)
-           })).finally(IU)
-         } catch (UU) {
-           IU(), YU(UU)
-         }
-       },
-       uE = UU => {
-         try {
-           var XU;
- ... (24 more removed lines; see GitHub link above)
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.colorRemapGradients.push(LH)
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5302-L5375` → after: `L4108-L4116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4108-L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4108-L4116) · [Before (L5302-L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5302-L5375)

```diff
-       },
-       fE = (UU, XU, zU, cU) => {
-         const yU = "query" === cU ? "POST" === XU ? "sent_at" : "_" : void 0;
-         return WE(zU === gD.GZipJS ? PE(UU, "compression") : UU, ky(ky({}, yU ? {
-           [yU]: Date.now().toString()
-         } : {}), zU === gD.GZipJS ? {} : {
-           compression: zU
-         }))
-       },
-       iE = (() => {
-         const UU = [];
-         return Xz && UU.push({
-           transport: "fetch",
-           method: rE
-         }), zz && UU.push({
-           transport: "XHR",
- ... (58 more removed lines; see GitHub link above)
+         const hH = BH.getAlphaRemapGradients();
+         if (hH) {
+           HH.alphaRemapGradients = [];
+           for (const BH of hH) {
+             const LH = {
+               gradient: BH.gradient,
+               factor1: BH.factor1
+             };
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.alphaRemapGradients.push(LH)
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5466-L5473` → after: `L4119-L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4119-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4119-L4127) · [Before (L5466-L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5466-L5473)

```diff
-         resume() {
-           if (!Pz(KX) && "onLine" in KX.navigator) {
-             if (this._areWeOnline = KX.navigator.onLine, this._onlineListener) return;
-             this._onlineListener = () => {
-               this._areWeOnline = !0, this._flush()
-             }, this._offlineListener = () => {
-               this._areWeOnline = !1
-             }, JA(KX, "online", this._onlineListener), JA(KX, "offline", this._offlineListener)
+         const tH = BH.getSizeGradients();
+         if (tH) {
+           HH.sizeGradients = [];
+           for (const BH of tH) {
+             const LH = {
+               gradient: BH.gradient,
+               factor1: BH.factor1
+             };
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.sizeGradients.push(LH)
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5476-L5543` → after: `L4130-L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4130-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4130-L4138) · [Before (L5476-L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5476-L5543)

```diff
-         get length() {
-           return this._queue.length
-         }
-         retriableRequest(UU, XU) {
-           let {
-             retriesPerformedSoFar: zU
-           } = UU, cU = dQ(UU, VE);
-           wz(zU) && (cU.url = WE(cU.url, {
-             retry_count: zU
-           })), ME(this._instance, XU ? ky(ky({}, cU), {}, {
-             transport: XU
-           }) : cU, ((UU, XU) => {
-             var yU;
-             if (200 !== UU.statusCode && (400 > UU.statusCode || UU.statusCode >= 500)) {
-               if ((0 === UU.statusCode ? 3 : 10) > (null != zU ? zU : 0)) return void this._enqueue(ky({
-                 retriesPerformedSoFar: zU
- ... (52 more removed lines; see GitHub link above)
+         const zH = BH.getAngularSpeedGradients();
+         if (zH) {
+           HH.angularSpeedGradients = [];
+           for (const BH of zH) {
+             const LH = {
+               gradient: BH.gradient,
+               factor1: BH.factor1
+             };
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.angularSpeedGradients.push(LH)
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5547-L5558` → after: `L4141-L4149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4141-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4141-L4149) · [Before (L5547-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5547-L5558)

```diff
-       },
-       nE = class {
-         constructor(UU) {
-           this._instance = UU, this._updateScrollData = () => {
-             var UU, XU, zU, cU;
-             this._context || (this._context = {});
-             const yU = this.scrollElement(),
-               QU = this.scrollY(),
-               AU = yU ? Math.max(0, yU.scrollHeight - yU.clientHeight) : 0,
-               FU = QU + ((null == yU ? void 0 : yU.clientHeight) || 0),
-               oU = (null == yU ? void 0 : yU.scrollHeight) || 0;
-             this._context.lastScrollY = Math.ceil(QU), this._context.maxScrollY = Math.max(QU, null !== (UU = this._context.maxScrollY) && void 0 !== UU ? UU : 0), this._context.maxScrollHeight = Math.max(AU, null !== (XU = this._context.maxScrollHeight) && void 0 !== XU ? XU : 0 … [truncated]
+         const CH = BH.getVelocityGradients();
+         if (CH) {
+           HH.velocityGradients = [];
+           for (const BH of CH) {
+             const LH = {
+               gradient: BH.gradient,
+               factor1: BH.factor1
+             };
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.velocityGradients.push(LH)
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5561-L5587` → after: `L4152-L4160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4152-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4152-L4160) · [Before (L5561-L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5561-L5587)

```diff
-         get _scrollRoot() {
-           return this._instance.config.scroll_root_selector
-         }
-         getContext() {
-           return this._context
-         }
-         resetContext() {
-           const UU = this._context;
-           return this._context = void 0, setTimeout(this._updateScrollData, 0), UU
-         }
-         startMeasuringScrollPosition() {
-           JA(KX, "scroll", this._updateScrollData, {
-             capture: !0
-           }), JA(KX, "scrollend", this._updateScrollData, {
-             capture: !0
-           }), JA(KX, "resize", this._updateScrollData)
- ... (11 more removed lines; see GitHub link above)
+         const EH = BH.getDragGradients();
+         if (EH) {
+           HH.dragGradients = [];
+           for (const BH of EH) {
+             const LH = {
+               gradient: BH.gradient,
+               factor1: BH.factor1
+             };
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.dragGradients.push(LH)
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5590-L5595` → after: `L4163-L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4163-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4163-L4171) · [Before (L5590-L5595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5590-L5595)

```diff
-         _scrollPosition(UU) {
-           var XU, zU;
-           const cU = "y" === UU ? "scrollTop" : "scrollLeft";
-           if (this._scrollRoot) {
-             const UU = this.scrollElement();
-             return UU && UU[cU] || 0
+         const XH = BH.getEmitRateGradients();
+         if (XH) {
+           HH.emitRateGradients = [];
+           for (const BH of XH) {
+             const LH = {
+               gradient: BH.gradient,
+               factor1: BH.factor1
+             };
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.emitRateGradients.push(LH)
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5602-L5611` → after: `L4174-L4177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4174-L4177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4174-L4177) · [Before (L5602-L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5602-L5611)

```diff
-         scrollX() {
-           return this._scrollPosition("x")
-         }
-       };
-     const mE = UU => XD(null == UU ? void 0 : UU.config.mask_personal_data_properties, null == UU ? void 0 : UU.config.custom_personal_data_properties, null == UU ? void 0 : UU.config.disable_capture_url_hashes);
-     var lE = class {
-         constructor(UU, XU, zU, cU) {
-           this._onSessionIdCallback = UU => {
-             const XU = this._getStored();
-             if (XU && XU.sessionId === UU) return;
+         const GH = BH.getStartSizeGradients();
+         if (GH) {
+           HH.startSizeGradients = [];
+           for (const BH of GH) {
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5613-L5614` → after: `L4179-L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4179-L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4179-L4180) · [Before (L5613-L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5613-L5614)

```diff
-               sessionId: UU,
-               props: this._sessionSourceParamGenerator(this._instance)
+               gradient: BH.gradient,
+               factor1: BH.factor1
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5616-L5647` → after: `L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4182) · [Before (L5616-L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5616-L5647)

```diff
-             this._persistence.register({
-               [GX]: zU
-             })
-           }, this._instance = UU, this._sessionIdManager = XU, this._persistence = zU, this._sessionSourceParamGenerator = cU || mE, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
-         }
-         _getStored() {
-           return this._persistence.props[GX]
-         }
-         getSetOnceProps() {
-           var UU;
-           const XU = null === (UU = this._getStored()) || void 0 === UU ? void 0 : UU.props;
-           return XU ? "r" in XU ? zD(XU, this._instance.config.disable_capture_url_hashes) : {
-             $referring_domain: XU.referringDomain,
-             $pathname: XU.initialPathName,
-             utm_source: XU.utm_source,
-             utm_campaign: XU.utm_campaign,
- ... (16 more removed lines; see GitHub link above)
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.startSizeGradients.push(LH)
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5650-L5683` → after: `L4185-L4194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4185-L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4185-L4194) · [Before (L5650-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5650-L5683)

```diff
-         emit(UU, XU) {
-           for (const zU of this._events[UU] || []) zU(XU);
-           for (const zU of this._events["*"] || []) zU(UU, XU)
-         }
-         constructor() {
-           this._events = {}
-         }
-       };
-     const JE = iA("[SessionId]"),
-       jE = 864e5;
-     var KE = class {
-       on(UU, XU) {
-         return this._eventEmitter.on(UU, XU)
-       }
-       constructor(UU, XU, zU) {
-         var cU;
- ... (18 more removed lines; see GitHub link above)
+         const YH = BH.getLifeTimeGradients();
+         if (YH) {
+           HH.lifeTimeGradients = [];
+           for (const BH of YH) {
+             const LH = {
+               gradient: BH.gradient,
+               factor1: BH.factor1
+             };
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.lifeTimeGradients.push(LH)
+           }
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5685-L5750` → after: `L4196-L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4196-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4196-L4204) · [Before (L5685-L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5685-L5750)

```diff
-       }
-       _canUseSessionStorage() {
-         return "memory" !== this._config.persistence && !this._persistence._disabled && PF._is_supported()
-       }
-       _setWindowId(UU) {
-         UU !== this._windowId && (this._windowId = UU, this._canUseSessionStorage() && PF._set(this._window_id_storage_key, UU))
-       }
-       _getWindowId() {
-         return this._windowId ? this._windowId : this._canUseSessionStorage() ? PF._parse(this._window_id_storage_key) : null
-       }
-       _isActivityChangeBelowGranularity(UU) {
-         const XU = this._lastPersistedActivityTimestamp;
-         return !Lz(XU) && !Lz(UU) && 5e3 > Math.abs(UU - XU)
-       }
-       _setSessionId(UU, XU, zU) {
-         const cU = XU !== this._sessionActivityTimestamp,
- ... (50 more removed lines; see GitHub link above)
+         const uH = BH.getLimitVelocityGradients();
+         if (uH) {
+           HH.limitVelocityGradients = [];
+           for (const BH of uH) {
+             const LH = {
+               gradient: BH.gradient,
+               factor1: BH.factor1
+             };
+             void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.limitVelocityGradients.push(LH)
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5752-L5780` → after: `L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4206) · [Before (L5752-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5752-L5780)

```diff
-         }(UU);
-         return !Pz(zU) && (XU ? this._pendingBootstrapSession = {
-           sessionId: UU,
-           sessionStartTimestamp: zU
-         } : this._setSessionId(UU, (new Date).getTime(), zU), !0)
-       }
-       destroy() {
-         this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && KX && (KX.removeEventListener(mX, this._beforeUnloadListener, {
-           capture: !1
-         }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
-       }
-       _listenToReloadWindow() {
-         this._beforeUnloadListener = () => {
-           this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && PF._remove(this._primary_window_exists_storage_key)
-         }, JA(KX, mX, this._beforeUnloadListener, {
-           capture: !1
- ... (13 more removed lines; see GitHub link above)
+           HH.limitVelocityDamping = BH.limitVelocityDamping
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5782-L5815` → after: `L4208-L4211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4208-L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4208-L4211) · [Before (L5782-L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5782-L5815)

```diff
-         let [, FU, oU] = this._getSessionId();
-         const DU = !Pz(yU) && FU !== yU,
-           EU = this._freshestActivityTimestamp();
-         let YU = this._getWindowId();
-         const NU = this._pendingBootstrapSession,
-           IU = !!NU && (NU.sessionStartTimestamp > cU + 6e4 || cU - NU.sessionStartTimestamp > jE),
-           pU = NU ? IU : wz(oU) && Math.abs(cU - oU) > jE;
-         let aU = !1,
-           tU = DU,
-           gU = !FU || !!NU;
-         const kU = FU;
-         let GU = !gU && !UU && this._sessionHasBeenIdleTooLong(cU, EU);
-         if (GU && (GU = this._isSessionIdleAfterCrossTabRefresh(cU), GU || JE.info("cross-tab refresh kept the session alive", {
-             sessionId: FU
-           }), [, FU, oU] = this._getSessionId(), GU || (gU = !FU || !!NU)), gU || GU || pU) {
-           tU = !1;
- ... (18 more removed lines; see GitHub link above)
+         BH.noiseTexture && (HH.noiseTexture = BH.noiseTexture.serialize())
+       }
+       clone(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5817-L5820` → after: `L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4213) · [Before (L5817-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5817-L5820)

```diff
-           noSessionId: gU,
-           activityTimeout: GU,
-           sessionPastMaximumLength: pU,
-           crossTabAdoption: tU
+           ...this._customWrappers
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5822-L5839` → after: `L4215-L4255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4215-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4215-L4255) · [Before (L5822-L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5822-L5839)

```diff
-         return aU && this._sessionIdChangedHandlers.forEach((UU => UU(FU, YU, RU))), {
-           sessionId: FU,
-           windowId: YU,
-           sessionStartTimestamp: ZU,
-           changeReason: aU ? RU : void 0,
-           lastActivityTimestamp: EU
-         }
-       }
-       _resetIdleTimer() {
-         this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
-           if (!this._destroyed)
-             if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
-               const UU = this._sessionId;
-               this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
-                 idleSessionId: UU
-               })
- ... (2 more removed lines; see GitHub link above)
+         let rH = null;
+         const SH = this._engine;
+         if ((0, qH.c)(SH.createEffectForParticles) && null != this.customShader) {
+           rH = this.customShader;
+           const HH = rH.shaderOptions.defines.length > 0 ? rH.shaderOptions.defines.join("\n") : "",
+             BH = SH.createEffectForParticles(rH.shaderPath.fragmentElement, rH.shaderOptions.uniforms, rH.shaderOptions.samplers, HH);
+           AH[0] ? AH[0].effect = BH : this.setCustomEffect(BH, 0)
+         }
+         const hH = this.serialize(LH),
+           tH = !1 === LH && this.particleTexture ? this.particleTexture.clone() : null;
+         tH && (hH.textureName = void 0);
+         const zH = ZB.Parse(hH, this._scene || this._engine, this._rootUrl);
+         return zH.name = HH, zH.customShader = rH, zH._customWrappers = AH, tH && (zH.particleTexture = tH), void 0 === BH && (BH = this.emitter), this.noiseTexture && (zH.noiseTexture = this.noiseTexture.clone()), zH.emitter = BH, this.preventAutoStart || zH.start(), zH
+       }
+     }
+     ZB.BILLBOARDMODE_Y = 2, ZB.BILLBOARDMODE_ALL = 7, ZB.BILLBOARDMODE_STRETCHED = 8, ZB.BILLBOARDMODE_STRETCHED_LOCAL = 9;
+ ... (25 more added lines; see GitHub link above)
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5871-L5872` → after: `L4260-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4260-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4260-L4267) · [Before (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5871-L5872)

```diff
-       var XU;
-       return !!(null === (XU = UU.conditions) || void 0 === XU || null === (XU = XU.events) || void 0 === XU || null === (XU = XU.values) || void 0 === XU ? void 0 : XU.length)
+       switch (HH) {
+         case CH.c.TEXTURETYPE_HALF_FLOAT:
+           return 65504;
+         case CH.c.TEXTURETYPE_FLOAT:
+           return 3e38;
+         default:
+           return 1
+       }
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5874-L5886` → after: `L4269-L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4269-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4269-L4304) · [Before (L5874-L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5874-L5886)

```diff
-     const XY = (UU, XU) => {
-         if (!(UU => {
-             try {
-               new RegExp(UU)
-             } catch (UU) {
-               return !1
-             }
-             return !0
-           })(XU)) return !1;
-         try {
-           return new RegExp(XU).test(UU)
-         } catch (UU) {
-           return !1
+     let vH = (() => {
+       var HH;
+       let BH, tH, CH, GH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH = zH.b,
+         lH = [],
+         KH = [],
+         cH = [],
+         eH = [],
+         qH = [],
+         gH = [],
+         NH = [],
+         RH = [],
+         jH = [],
+         nH = [],
+         FH = [],
+         DH = [],
+         wH = [],
+ ... (20 more added lines; see GitHub link above)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5888-L5964` → after: `L4306-L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4306-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4306-L4307) · [Before (L5888-L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5888-L5964)

```diff
-       },
-       zY = UU => UU.toLowerCase(),
-       cY = {
-         exact: (UU, XU) => XU.some((XU => UU.some((UU => XU === UU)))),
-         is_not: (UU, XU) => XU.every((XU => UU.every((UU => XU !== UU)))),
-         regex: (UU, XU) => XU.some((XU => UU.some((UU => XY(XU, UU))))),
-         not_regex: (UU, XU) => XU.every((XU => UU.every((UU => !XY(XU, UU))))),
-         icontains: (UU, XU) => XU.map(zY).some((XU => UU.map(zY).some((UU => XU.includes(UU))))),
-         not_icontains: (UU, XU) => XU.map(zY).every((XU => UU.map(zY).every((UU => !XU.includes(UU))))),
-         gt: (UU, XU) => XU.some((XU => {
-           const zU = parseFloat(XU);
-           return !isNaN(zU) && UU.some((UU => zU > parseFloat(UU)))
-         })),
-         lt: (UU, XU) => XU.some((XU => {
-           const zU = parseFloat(XU);
-           return !isNaN(zU) && UU.some((UU => zU < parseFloat(UU)))
- ... (61 more removed lines; see GitHub link above)
+         needAlphaBlending() {
+           return this.alpha < 1
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5966-L5976` → after: `L4309-L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4309-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4309-L4310) · [Before (L5966-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5966-L5976)

```diff
-         if (yU && "api" === UU && DY.some((UU => 0 === XU.indexOf(UU)))) {
-           const UU = this._urlKey(cU);
-           if (UU) {
-             const XU = this.apiHost;
-             let zU = this._ingestionEndpoints;
-             (null == zU ? void 0 : zU.apiHost) === XU && zU.rewriteRequestPath === yU || (zU = {
-               apiHost: XU,
-               rewriteRequestPath: yU,
-               urls: new Set
-             }, this._ingestionEndpoints = zU), zU.urls.add(UU)
-           }
+         needAlphaTesting() {
+           return !1
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5978-L5991` → after: `L4312-L4313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4312-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4312-L4313) · [Before (L5978-L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5978-L5991)

```diff
-         return cU
-       }
-       isIngestionEndpoint(UU) {
-         const XU = this._ingestionEndpoints,
-           zU = this._urlKey(UU);
-         return (null == XU ? void 0 : XU.apiHost) === this.apiHost && XU.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!zU && XU.urls.has(zU)
-       }
-       endpointFor(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
-         if (XU && (XU = "/" === XU[0] ? XU : `/${XU}`), "ui" === UU) return this._prepareEndpoint(UU, XU, this.uiHost + XU);
-         if ("flags" === UU) return this._prepareEndpoint(UU, XU, this.flagsApiHost + XU);
-         if ("assets" === UU) {
-           const zU = this._staticAssetHostOverride(XU);
-           if (zU) return this._prepareEndpoint(UU, XU, `${zU}${XU}`)
+         getAlphaTestTexture() {
+           return null
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5993-L6365` → after: `L4315-L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4315-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4315-L4349) · [Before (L5993-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L5993-L6365)

```diff
-         if (this.region === AY) return this._prepareEndpoint(UU, XU, this.apiHost + XU);
-         const zU = FY + XU;
-         switch (UU) {
-           case "assets":
-             return this._prepareEndpoint(UU, XU, `https://${this.region}-assets.${zU}`);
-           case "api":
-             return this._prepareEndpoint(UU, XU, `https://${this.region}.${zU}`)
-         }
-       }
-     };
-     const YY = iA("[Surveys]"),
-       NY = UU => {
-         try {
-           const XU = (UU => ((UU, XU) => `seenSurvey_${function(UU){return UU.current_iteration&&UU.current_iteration>0?`${UU.id}_${UU.current_iteration}`:UU.id}(XU)}`)(0, UU))(UU);
-           if (localStorage.getItem(XU)) return;
-           localStorage.setItem(XU, "true")
- ... (357 more removed lines; see GitHub link above)
+         isReadyForSubMesh(BH, LH) {
+           const AH = LH._drawWrapper;
+           if (this.isFrozen && AH.effect && AH._wasPreviouslyReady) return !0;
+           LH.materialDefines || (LH.materialDefines = new MH);
+           const rH = LH.materialDefines,
+             SH = this.yN();
+           if (this._isReadyForSubMesh(LH)) return !0;
+           if ((0, WH.Z)(BH, SH, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, rH, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, WH.L)(BH, rH, !0, !1), rH.IMAGEPROCESSINGPOSTPROCESS !== SH.imageProcessingConfiguration.applyByPostProcess && rH.mark … [truncated]
+             rH.markAsProcessed(), SH.resetCachedMaterial();
+             const BH = new uH.b;
+             rH.FOG && BH.addFallback(1, "FOG"), rH.IMAGEPROCESSINGPOSTPROCESS = SH.imageProcessingConfiguration.applyByPostProcess, rH.DITHER = this.dithering, rH.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
+             const AH = [EH.e.PositionKind];
+             rH.VERTEXCOLOR && AH.push(EH.e.ColorKind);
+             const hH = "sky",
+               tH = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue … [truncated]
+             (0, QH.b)(tH);
+ ... (19 more added lines; see GitHub link above)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6367-L6417` → after: `L4351-L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4351-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4351-L4400) · [Before (L6367-L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6367-L6417)

```diff
-           const XU = this._extensions.indexOf(UU); - 1 !== XU && this._extensions.splice(XU, 1)
-         }
-         _replaceExtension(UU, XU) {
-           var zU;
-           return this._removeExtension(UU), this._extensions.push(XU), null === (zU = XU.initialize) || void 0 === zU || zU.call(XU), XU
-         }
-         _inCookielessMode() {
-           return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
-         }
-         _warnIfVolatileIdentityWithoutStableId() {
-           if (this._hasWarnedAboutVolatileIdentity) return;
-           if (this.config.reuseAnonymousId) return;
-           if (this.config.segment) return;
-           if (this._inCookielessMode()) return;
-           const UU = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
-           if (!UU && !this.config.disable_persistence) return;
- ... (35 more removed lines; see GitHub link above)
+           const SH = LH.effect;
+           if (!SH) return;
+           this._activeEffect = SH, this.bindOnlyWorldMatrix(HH), this._activeEffect.setMatrix("viewProjection", AH.getTransformMatrix()), this._mustRebind(AH, SH, LH) && ((0, QH.d)(SH, this, AH), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._ … [truncated]
+           const tH = AH.activeCamera;
+           if (tH) {
+             const HH = tH.getWorldMatrix();
+             this._cameraPosition.x = HH.m[12], this._cameraPosition.y = HH.m[13], this._cameraPosition.z = HH.m[14], this._activeEffect.setVector3("cameraPosition", hH.TmpVectors.lu[0].Tm(this._cameraPosition).grH(AH.floatingOriginOffset))
+           }
+           if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbi … [truncated]
+             const HH = AH.Iu()._currentRenderTarget;
+             this._activeEffect.setFloat("maxColorValue", xH(HH?.texture?.type))
+           }
+           if (!this.useSunPosition) {
+             const HH = Math.PI * (this.inclination - .5),
+               BH = 2 * Math.PI * (this.azimuth - .5);
+             this.sunPosition.x = this.distance * Math.cos(BH) * Math.cos(HH), this.sunPosition.y = this.distance * Math.sin(-HH), this.sunPosition.z = this.distance * Math.sin(BH) * Math.cos(HH), hH.Quaternion.FromUnitVectorsToRef(hH.lu.UpReadOnly, this.up, this._skyOrientation), … [truncated]
+ ... (34 more added lines; see GitHub link above)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6419-L6432` → after: `L4402-L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4402-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4402-L4413) · [Before (L6419-L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6419-L6432)

```diff
-           }(this, UU), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager … [truncated]
-           const zU = null !== (XU = UU.__defaultExtensionClasses) && void 0 !== XU ? XU : {};
-           this.featureFlags = zU.featureFlags && new zU.featureFlags(this), this.toolbar = zU.toolbar && new zU.toolbar(this), this.surveys = zU.surveys && new zU.surveys(this), this.conversations = zU.conversations && new zU.conversations(this), this.logs = zU.logs && new zU.log … [truncated]
-             set: (UU, XU, zU) => {
-               const cU = Wz(UU) ? {
-                 [UU]: XU
-               } : UU;
-               this.setPersonProperties(cU), null == zU || zU({})
-             },
-             set_once: (UU, XU, zU) => {
-               const cU = Wz(UU) ? {
-                 [UU]: XU
-               } : UU;
-               this.setPersonProperties(void 0, cU), null == zU || zU({})
+           },
+           metadata: LH
+         }, lH, KH), (0, AH.g)(null, null, tH, {
+           kind: "field",
+           name: "turbidity",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "turbidity" in HH,
+             get: HH => HH.turbidity,
+             set: (HH, BH) => {
+               HH.turbidity = BH
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6434-L6503` → after: `L4415-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4415-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4415-L4426) · [Before (L6434-L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6434-L6503)

```diff
-           }, this.on("eventCaptured", (UU => fA.info(`send "${null==UU?void 0:UU.event}"`, UU)))
-         }
-         init(XU, zU, cU) {
-           if (cU && cU !== MY) {
-             var yU;
-             const QU = null !== (yU = WY[cU]) && void 0 !== yU ? yU : new UU;
-             return QU._init(XU, zU, cU), WY[cU] = QU, WY[MY][cU] = QU, QU
-           }
-           return this._init(XU, zU, cU)
-         }
-         _init(UU) {
-           let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-             zU = arguments.length > 2 ? arguments[2] : void 0;
-           var cU, yU, AU;
-           const FU = Wz(UU) ? UU.trim() : "";
-           if (!FU) return fA.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
- ... (54 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, cH, eH), (0, AH.g)(null, null, CH, {
+           kind: "field",
+           name: "rayleigh",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "rayleigh" in HH,
+             get: HH => HH.rayleigh,
+             set: (HH, BH) => {
+               HH.rayleigh = BH
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6505-L6546` → after: `L4428-L4439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4428-L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4428-L4439) · [Before (L6505-L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6505-L6546)

```diff
-           }
-           if (tU) this.register_once({
-             distinct_id: dX,
-             $device_id: null
-           }, "");
-           else if (!this.get_distinct_id()) {
-             const UU = this.config.get_device_id(zF());
-             this.register_once({
-               distinct_id: UU,
-               $device_id: UU
-             }, ""), this.persistence.set_property(kX, VX)
-           }
-           return JA(KX, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
-             passive: !1
-           }), JA(KX, "pageshow", (() => {
-             var UU;
- ... (26 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, qH, gH), (0, AH.g)(null, null, GH, {
+           kind: "field",
+           name: "mieCoefficient",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "mieCoefficient" in HH,
+             get: HH => HH.mieCoefficient,
+             set: (HH, BH) => {
+               HH.mieCoefficient = BH
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6548-L6601` → after: `L4441-L4452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4441-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4441-L4452) · [Before (L6548-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6548-L6601)

```diff
-           }))) : this._extensions.push(UU)
-         }
-         _enrollFeatureFlags() {
-           var XU, zU, cU, yU = this;
-           const QU = null !== (XU = null === (zU = this.config.__extensionClasses) || void 0 === zU ? void 0 : zU.featureFlags) && void 0 !== XU ? XU : null === (cU = UU.__defaultExtensionClasses) || void 0 === cU ? void 0 : cU.featureFlags;
-           var AU, FU, oU;
-           if (QU)
-             if (this.featureFlags && this.featureFlags instanceof QU || (null === (AU = this._featureFlagsReloadingUnsubscribe) || void 0 === AU || AU.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new QU(this)), Bz(this.featureFlags.onReloading) … [truncated]
-               if (!this._featureFlagsReloadingUnsubscribe) {
-                 this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
-                   this._internalEventEmitter.emit("featureFlagsReloading", !0)
-                 }));
-                 const UU = this.featureFlags;
-                 nz((function*() {
-                   try {
-                     yield UU.setup(yU._getBrowserClientAdapter())
- ... (38 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, NH, RH), (0, AH.g)(null, null, vH, {
+           kind: "field",
+           name: "mieDirectionalG",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "mieDirectionalG" in HH,
+             get: HH => HH.mieDirectionalG,
+             set: (HH, BH) => {
+               HH.mieDirectionalG = BH
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6603-L6614` → after: `L4454-L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4454-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4454-L4465) · [Before (L6603-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6603-L6614)

```diff
-           })), this._processInitTaskQueue(yU, zU)
-         }
-         _processInitTaskQueue(UU, XU) {
-           for (; UU.length > 0;) {
-             if (this.config.__preview_deferred_init_extensions && performance.now() - XU >= 30 && UU.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
-               this._extensionInitTimeout = void 0, this._processInitTaskQueue(UU, XU)
-             }), 0));
-             const zU = UU.shift();
-             if (zU) try {
-               zU()
-             } catch (UU) {
-               fA.error("Error initializing extension:", UU)
+           },
+           metadata: LH
+         }, jH, nH), (0, AH.g)(null, null, PH, {
+           kind: "field",
+           name: "distance",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "distance" in HH,
+             get: HH => HH.distance,
+             set: (HH, BH) => {
+               HH.distance = BH
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6616-L6733` → after: `L4467-L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4467-L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4467-L4478) · [Before (L6616-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6616-L6733)

```diff
-           }
-           const zU = Math.round(performance.now() - XU);
-           this.register_for_session({
-             [eX]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
-             [CX]: zU
-           }), this.config.__preview_deferred_init_extensions && fA.info(`PostHog extensions initialized (${zU}ms)`)
-         }
-         _onRemoteConfig(UU) {
-           if (!hX || !hX.body) return fA.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
-             this._onRemoteConfig(UU)
-           }), 500);
-           if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = UU), this._lastRemoteConfig = UU, this.compression = void 0, UU.ok) {
-             var XU;
-             const zU = UU.config;
-             zU.supportedCompression && !this.config.disable_compression && (this.compression = Nz(zU.supportedCompression, gD.GZipJS) ? gD.GZipJS : Nz(zU.supportedCompression, gD.Base64) ? gD.Base64 : void 0), (null === (XU = zU.analytics) || void 0 === XU ? void 0 : XU.endpoint) … [truncated]
-           }
- ... (102 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, FH, DH), (0, AH.g)(null, null, TH, {
+           kind: "field",
+           name: "inclination",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "inclination" in HH,
+             get: HH => HH.inclination,
+             set: (HH, BH) => {
+               HH.inclination = BH
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6735-L6754` → after: `L4480-L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4480-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4480-L4491) · [Before (L6735-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6735-L6754)

```diff
-           }
-         }
-         get _facebookBrowserIdChannel() {
-           return {
-             property: qU,
-             persistenceKey: OU,
-             cookieName: "_fbp",
-             pattern: iY,
-             register: (UU, XU) => {
-               var zU;
-               return null === (zU = this.persistence) || void 0 === zU ? void 0 : zU.register({
-                 [OU]: {
-                   value: UU,
-                   delivered: XU
-                 }
-               })
- ... (4 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, wH, ZH), (0, AH.g)(null, null, UH, {
+           kind: "field",
+           name: "azimuth",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "azimuth" in HH,
+             get: HH => HH.azimuth,
+             set: (HH, BH) => {
+               HH.azimuth = BH
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6756-L6874` → after: `L4493-L4504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4493-L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4493-L4504) · [Before (L6756-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6756-L6874)

```diff
-           }
-         }
-         _getPersistedMetaIdentifier(UU) {
-           var XU;
-           const zU = null === (XU = this.persistence) || void 0 === XU ? void 0 : XU.get_property(UU.persistenceKey);
-           return Wz(zU) && UU.pattern.test(zU) ? {
-             value: zU,
-             delivered: !1
-           } : Zz(zU) && Wz(zU.value) && UU.pattern.test(zU.value) ? {
-             value: zU.value,
-             delivered: !0 === zU.delivered
-           } : void 0
-         }
-         _storeMetaIdentifier(UU, XU, zU) {
-           return XU === (null == zU ? void 0 : zU.value) ? {
-             value: XU,
- ... (103 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, dH, aH), (0, AH.g)(null, null, VH, {
+           kind: "field",
+           name: "sunPosition",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "sunPosition" in HH,
+             get: HH => HH.sunPosition,
+             set: (HH, BH) => {
+               HH.sunPosition = BH
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6876-L7084` → after: `L4506-L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4506-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4506-L4517) · [Before (L6876-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6876-L7084)

```diff
-             of GU) OU && !0 === YU.properties.$process_person_profile && OU.pending && !qU && !NU && (YU.$set = ky({
-             [CU.property]: OU.value
-           }, YU.$set));
-           const BU = null == zU ? void 0 : zU.$unset;
-           BU && (YU.$unset = BU);
-           const ZU = NU ? void 0 : this._calculate_set_once_properties(null == zU ? void 0 : zU.$set_once, UU !== jX, UU === JX);
-           if (ZU && (YU.$set_once = ZU), (null == zU ? void 0 : zU._noTruncate) || (RU = this.config.properties_string_max_length, YU = function(UU, XU) {
-               const zU = new Set;
-               return function UU(cU, yU) {
-                 if (cU !== Object(cU)) return XU ? XU(cU) : cU;
-                 if (zU.has(cU)) return;
-                 let QU;
-                 if (zU.add(cU), Gz(cU)) QU = [], HA(cU, (XU => {
-                   QU.push(UU(XU))
-                 }));
-                 else {
- ... (193 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, sH, JH), (0, AH.g)(null, null, OH, {
+           kind: "field",
+           name: "useSunPosition",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "useSunPosition" in HH,
+             get: HH => HH.useSunPosition,
+             set: (HH, BH) => {
+               HH.useSunPosition = BH
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L7086-L7108` → after: `L4519-L4530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4519-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4519-L4530) · [Before (L7086-L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L7086-L7108)

```diff
-             FU.$sdk_debug_retry_queue_size = null === (DU = this._retryQueue) || void 0 === DU ? void 0 : DU.length
-           } catch (UU) {
-             FU.$sdk_debug_error_capturing_properties = String(UU)
-           }
-           let EU;
-           if (this.requestRouter.region === AY && (FU.$lib_custom_api_host = this.config.api_host), EU = "$pageview" !== UU || QU ? "$pageleave" !== UU || QU ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(zU) : this.pageViewManager.doPageView(zU, cU), FU = vA … [truncated]
-             const UU = zU.getTime() - AU;
-             FU.$duration = parseFloat((UU / 1e3).toFixed(3))
-           }
-           Qz && this.config.opt_out_useragent_filter && (FU.$browser_type = this._is_bot() ? "bot" : "browser");
-           const YU = this.persistence.properties(),
-             NU = this.sessionPersistence.properties(),
-             IU = FU.$groups,
-             pU = YU.$groups;
-           Zz(IU) && !Rz(IU) && (FU.$groups = ky(ky({}, Zz(pU) ? pU : {}), IU)), MA(["$referrer", "$referring_domain"], (UU => {
-             UU in YU && delete NU[UU]
- ... (7 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, iH, pH), (0, AH.g)(null, null, bH, {
+           kind: "field",
+           name: "cameraOffset",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "cameraOffset" in HH,
+             get: HH => HH.cameraOffset,
+             set: (HH, BH) => {
+               HH.cameraOffset = BH
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L7110-L7431` → after: `L4532-L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4532-L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4532-L4543) · [Before (L7110-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L7110-L7431)

```diff
-           FU = vA({}, oU, YU, NU, ky(ky({}, aU), FU)), FU.$is_identified = this._isIdentified(), Gz(this.config.property_denylist) ? MA(this.config.property_denylist, (function(UU) {
-             delete FU[UU]
-           })) : fA.error(qY + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
-           const tU = this.config.sanitize_properties;
-           tU && (fA.error(wY), FU = tU(FU, UU));
-           const gU = this._hasPersonProcessing();
-           return FU.$process_person_profile = gU, gU && !QU && this._requirePersonProcessing("_calculate_event_properties"), FU
-         }
-         _calculate_set_once_properties(UU) {
-           let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-             zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-           var cU;
-           if (!this.persistence || !this._hasPersonProcessing()) return UU;
-           if (this._personProcessingSetOncePropertiesSent && !zU) return UU;
-           const yU = this.persistence.get_initial_props(),
-             QU = null === (cU = this.sessionPropsManager) || void 0 === cU ? void 0 : cU.getSetOnceProps();
- ... (306 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, yH, HB), (0, AH.g)(null, null, kH, {
+           kind: "field",
+           name: "up",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "up" in HH,
+             get: HH => HH.up,
+             set: (HH, BH) => {
+               HH.up = BH
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L7433-L7439` → after: `L4545-L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4545-L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4545-L4556) · [Before (L7433-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L7433-L7439)

```diff
-             if (this.register({
-                 $last_posthog_reset: (new Date).toISOString()
-               }, 1), zU && (zU.distinctID && !this._inCookielessMode() && (null === (OU = this.persistence) || void 0 === OU || OU.set_property("$user_state", zU.isIdentifiedID ? "identified" : "anonymous"), this.register({
-                 distinct_id: zU.distinctID
-               })), null === (wU = this.featureFlags) || void 0 === wU || wU.initialize(), !ez(DU) && !(null === (qU = this.sessionManager) || void 0 === qU ? void 0 : qU.setBootstrapSessionId(DU, !0)))) {
-               const UU = ky({}, zU);
-               delete UU.sessionID, this.config.bootstrap = UU
+           },
+           metadata: LH
+         }, BB, LB), (0, AH.g)(null, null, mH, {
+           kind: "field",
+           name: "dithering",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "dithering" in HH,
+             get: HH => HH.dithering,
+             set: (HH, BH) => {
+               HH.dithering = BH
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L7441-L7497` → after: `L4558-L4569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4558-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4558-L4569) · [Before (L7441-L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L7441-L7497)

```diff
-             delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, tU = !0
-           } finally {
-             var SU, rU;
-             this._isConsentTransition = aU, pU && (null === (SU = this.persistence) || void 0 === SU || null === (rU = SU._endCookieSyncSuppression) || void 0 === rU || rU.call(SU, tU))
-           }
-           this.reloadFeatureFlags()
-         }
-         shutdown(UU) {
-           var XU = this;
-           return nz((function*() {
-             if (!XU.__loaded) return void fA.uninitializedWarning("posthog.shutdown");
-             XU._isShutdown = !0, clearTimeout(XU._extensionInitTimeout), XU._extensionInitTimeout = void 0;
-             const UU = XU._featureFlagsReloadingUnsubscribe;
-             XU._featureFlagsReloadingUnsubscribe = void 0;
-             for (const zU of [() => {
-                 var UU;
- ... (41 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, AB, rB), (0, AH.g)(null, null, oH, {
+           kind: "field",
+           name: "rawHdrOutput",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "rawHdrOutput" in HH,
+             get: HH => HH.rawHdrOutput,
+             set: (HH, BH) => {
+               HH.rawHdrOutput = BH
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L7499-L7560` → after: `L4571-L4582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4571-L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4571-L4582) · [Before (L7499-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L7499-L7560)

```diff
-           }))()
-         }
-         setIdentity(UU, XU) {
-           var zU;
-           delete this.config.identity_claims, this.config.identity_distinct_id = UU, this.config.identity_hash = XU, this.alias(UU), null === (zU = this.conversations) || void 0 === zU || zU._onIdentityChanged()
-         }
-         clearIdentity() {
-           var UU;
-           delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (UU = this.conversations) || void 0 === UU || UU._onIdentityCleared()
-         }
-         get_distinct_id() {
-           return this.get_property("distinct_id")
-         }
-         getGroups() {
-           return this.get_property("$groups") || {}
-         }
- ... (46 more removed lines; see GitHub link above)
+           },
+           metadata: LH
+         }, SB, hB), (0, AH.g)(null, null, IH, {
+           kind: "field",
+           name: "cloudiness",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "cloudiness" in HH,
+             get: HH => HH.cloudiness,
+             set: (HH, BH) => {
+               HH.cloudiness = BH
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L8293-L8432` → after: `L4585-L4590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4585-L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4585-L4590) · [Before (L8293-L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L8293-L8432)

```diff
-           __posthog_layer__: {
-             enumerable: !1,
-             value: cU
-           }
-         })), UU[XU] = yU, () => {
-           if (UU[XU] === yU) return void(UU[XU] = cU.next);
-           let zU = UU[XU],
-             QU = zN(zU);
-           for (; QU;) {
-             if (QU.next === yU) return void(QU.next = cU.next);
-             zU = QU.next, QU = zN(zU)
-           }
-         }
-       } catch (UU) {
-         return XN
-       }
- ... (124 more removed lines; see GitHub link above)
+           metadata: LH
+         }, tB, zB), LH && Object.defineProperty(HH, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: LH
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L8434-L12783` → after: `L4592-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4592-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4592-L4594) · [Before (L8434-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L8434-L12783)

```diff
-       }
-       onSurveysLoaded(UU) {
-         return this._surveyCallbacks.push(UU), this._surveyManager && this._notifySurveyCallbacks({
-           isLoaded: !0
-         }), () => {
-           this._surveyCallbacks = this._surveyCallbacks.filter((XU => XU !== UU))
-         }
-       }
-       getSurveys(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         var zU;
-         const cU = null !== (zU = this._client) && void 0 !== zU ? zU : this._initialClientState;
-         if (!cU || this._disposed) return;
-         if (this._config.disableSurveys) return YY.info(PN), UU([]);
-         const yU = cU.kv.get(AX);
-         if (yU && !XU) return UU(yU, {
- ... (4334 more removed lines; see GitHub link above)
+       })(), HH._ShaderLoader = new YH.b((() => [LH.e(639).then((() => LH(64158))), LH.e(632).then((() => LH(64164)))]), (() => [LH.e(656).then((() => LH(64172))), LH.e(650).then((() => LH(64178)))])), HH
+     })();
+     (0, GH.f)("BABYLON.SkyMaterial", vH)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/272.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/272.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L6)

```diff
-   40909: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       playDocsSound: () => oU
+   42396: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH,
+       c: () => EH,
+       e: () => CH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L8-L74` → after: `L10-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L10-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/272.js#L10-L408) · [Before (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/272.js#L8-L74)

```diff
-     var cU = zU(5378),
-       yU = zU(37480),
-       QU = zU(1203),
-       AU = zU(37484);
-     const FU = new Map;
- 
-     function oU(UU, XU, zU, oU, DU) {
-       let EU, YU = 0;
-       if (XU) EU = new cU.Howl({
-         src: [`${QU.clientSideServerUrls.staticUrl}/sounds/music/${UU}.mp3`],
-         html5: !0,
-         volume: zU
-       });
-       else {
-         const XU = (0, yU.y)(UU);
-         YU = XU.ms / 1e3, EU = FU.get(UU), EU || (EU = new cU.Howl({
- ... (51 more removed lines; see GitHub link above)
+     var AH, rH = LH(38002),
+       SH = LH(37963);
+     ! function(HH) {
+       HH[HH.CW = 0] = "CW", HH[HH.CCW = 1] = "CCW"
+     }(AH || (AH = {}));
+     class hH {
+       static Interpolate(HH, BH, LH, AH, rH) {
+         if (0 === HH) return 0;
+         const SH = 1 - 3 * AH + 3 * BH,
+           hH = 3 * AH - 6 * BH,
+           tH = 3 * BH;
+         let zH = HH;
+         for (let CH = 0; CH < 5; CH++) {
+           const BH = zH * zH;
+           zH -= (SH * (BH * zH) + hH * BH + tH * zH - HH) * (1 / (3 * SH * BH + 2 * hH * zH + tH)), zH = Math.min(1, Math.max(0, zH))
+         }
+ ... (383 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/273.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/273.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L6)

```diff
-   40922: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       default: () => JU
+   42416: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => YH,
+       e: () => CH,
+       h: () => XH,
+       k: () => EH,
+       m: () => GH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L8-L66` → after: `L12-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L12-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L12-L23) · [Before (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L8-L66)

```diff
-     zU(7044);
-     var cU = zU(61),
-       yU = zU(40929),
-       QU = zU(41199),
-       AU = zU(41295),
-       FU = zU(41331),
-       oU = zU(41348),
-       DU = zU(37919),
-       EU = zU(37814),
-       YU = zU(41473),
-       NU = zU(41532),
-       IU = (zU(41563), zU(1236)),
-       pU = zU(212),
-       aU = zU(1193),
-       tU = zU(27),
-       gU = zU(3021),
- ... (43 more removed lines; see GitHub link above)
+     var AH = LH(1168),
+       rH = LH(2339),
+       SH = LH(38041),
+       hH = LH(38378);
+     class tH {
+       constructor(HH, BH) {
+         this.pose = HH, this.nodes = void 0, this.nodes = HH.boneNames.map((HH => BH.get(HH)))
+       }
+       write(HH) {
+         this.pose.pose(HH), (0, hH.l)(this.pose, this.nodes)
+       }
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L70-L80` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L31-L32) · [Before (L70-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L70-L80)

```diff
-         heatmap: XU,
-         scale: zU,
-         fullyOpaqueFrom: SU,
-         bounds: HU,
-         fitBounds: MU,
-         schematic: vU,
-         controls: VU,
-         onStepTime: sU,
-         onShowAllTime: nU,
-         onTogglePlaying: mU,
-         getReadout: xU = null
+         keepTransforms: rH,
+         backFaceCulling: hH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L82-L101` → after: `L34-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L34-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L34-L79) · [Before (L82-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L82-L101)

```diff
-       const {
-         t: JU
-       } = (0, aU.I)(), {
-         clientEscMenuOptions: QX
-       } = (0, tU.q)(["clientEscMenuOptions"]), oX = (0, cU.useRef)(null), DX = (0, cU.useRef)(null), EX = (0, cU.useRef)(null), YX = (0, gU.d)(oX), [NX, IX] = (0, cU.useState)(!1), [pX, aX] = (0, cU.useState)(!1), [tX, gX] = (0, cU.useState)(!0), kX = (0, cU.useRef)(!1), [GX, BX] … [truncated]
-       wX[0] === CX[0] && wX[1] === CX[1] && wX[2] === CX[2] || (qX(CX), null !== LX && eX({
-         ...LX,
-         position: AX(LX.position, AX(wX, FX(CX, -1)))
-       }));
-       const OX = (0, cU.useMemo)((() => function(UU) {
-           return [UU.max[0] - UU.min[0] + 1, UU.max[1] - UU.min[1] + 1, UU.max[2] - UU.min[2] + 1]
-         }(HU)), [HU]),
-         SX = (0, cU.useMemo)((() => function(UU, XU) {
-           const zU = [],
-             cU = [];
-           for (const [yU, QU] of Object.entries(UU.frequencies)) {
- ... (4 more removed lines; see GitHub link above)
+       const tH = await (0, SH.i)(BH, HH),
+         CH = (0, SH.f)(null !== LH && void 0 !== LH ? LH : BH, HH, void 0, hH);
+       (0, SH.l)(tH, CH, {
+         keepTransforms: rH,
+         backFaceCulling: hH,
+         onProcessedMesh: BH => {
+           HH.QrH(BH, !1), BH.isVisible = !1
+         }
+       });
+       for (const SH of tH.rootNodes) zH(SH);
+       return tH
+     }
+ 
+     function EH(HH, BH) {
+       HH.isVisible = BH;
+       for (const LH of HH.getChildMeshes()) LH.isVisible = BH
+ ... (30 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L104-L245` → after: `L84-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L84-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L84-L98) · [Before (L104-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L104-L245)

```diff
-           return {
-             positions: Int32Array.from(zU),
-             values: Float64Array.from(cU),
-             count: cU.length
-           }
-         }(XU, CX)), [XU, CX]),
-         rX = WU * QX.cameraFOV / 100,
-         uX = YX.height > 0 ? YX.width / YX.height : 1,
-         fX = (0, cU.useMemo)((() => function(UU, XU) {
-           return {
-             min: [UU.min[0] - XU[0], UU.min[1] - XU[1], UU.min[2] - XU[2]],
-             max: [UU.max[0] - XU[0] + 1, UU.max[1] - XU[1] + 1, UU.max[2] - XU[2] + 1]
-           }
-         }(MU, CX)), [MU, CX]),
-         iX = zX(fX, uX, rX),
-         HX = null !== LX && void 0 !== LX ? LX : iX,
- ... (126 more removed lines; see GitHub link above)
+         })()), this.modelCache[AH]
+       }
+       async update(HH, BH) {
+         var LH;
+         const {
+           thinInstMgr: SH,
+           kR: hH
+         } = this;
+         this.cosmeticNames[HH] = BH;
+         const tH = this.attachmentsByType[HH];
+         if (tH)
+           for (const {
+               mesh: rH,
+               destNode: CH,
+               bones: XH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L247-L300` → after: `L100-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L100-L103) · [Before (L247-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L247-L300)

```diff
-           }(UU, MX.current.fieldOfView)
-         } catch (zU) {
-           return console.error("Failed to start the 3D heatmap", zU), void IX(!0)
-         }
-         return EX.current = XU, XU.engine.runRenderLoop((() => {
-           const UU = XU.camera;
-           UU.fov !== XU.targetFieldOfView && (UU.fov += (XU.targetFieldOfView - UU.fov) * (UU.fov > XU.targetFieldOfView ? .3 : .2), Math.abs(XU.targetFieldOfView - UU.fov) < 5e-4 && (UU.fov = XU.targetFieldOfView), XU.needsRender = !0), XU.needsRender && (XU.sa.render(), XU.need … [truncated]
-         })), () => {
-           EX.current = null, XU.engine.dispose()
-         }
-       }), []), (0, cU.useEffect)((() => {
-         const UU = DX.current;
-         if (!UU) return;
-         const XU = () => {
-             kX.current = !1, aX(document.pointerLockElement === UU)
-           },
- ... (38 more removed lines; see GitHub link above)
+             of tH) {
+             null !== XH && (0, AH.kb)(this.shownBones, XH), EH(rH, !1);
+             const HH = SH.getNamedNode(hH, CH);
+             SH.detachTransformNodeIfFound(rH, hH, HH)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L302-L326` → after: `L105-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L105-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L105-L113) · [Before (L302-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L302-L326)

```diff
-           bU(UU.cells, Float32Array.from(yU), Float32Array.from(QU), QU.length / 4), UU.translucent = {
-             Ut: Float32Array.from(AU),
-             colours: Float32Array.from(FU),
-             count: FU.length / 4
-           }, UU.translucentSortedFrom = null, TU(UU), UU.needsRender = !0
-         }(UU, SX, zU, SU)
-       }), [SX, zU, SU]), (0, cU.useEffect)((() => {
-         const UU = EX.current;
-         null !== UU && function(UU, XU) {
-           UU.chunkGridOrigin = XU, UU.chunkGridCentre = null, KU(UU)
-         }(UU, HU.min)
-       }), [HU]), (0, cU.useEffect)((() => {
-         const UU = EX.current;
-         null !== UU && function(UU, XU, zU) {
-           const cU = [],
-             yU = [];
- ... (9 more removed lines; see GitHub link above)
+         this.attachmentsByType[HH] = [];
+         const zH = (0, rH.h)(HH, BH);
+         if (null !== zH && void 0 !== zH && null !== (LH = zH.attachments) && void 0 !== LH && LH.length)
+           for (const AH of zH.attachments) {
+             let LH;
+             try {
+               LH = await this.loadModel(AH.modelGlb, AH.texture, AH.animation)
+             } catch {
+               continue
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L329-L447` → after: `L123-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L123-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L123-L215) · [Before (L329-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L329-L447)

```diff
-           bU(UU.schematicBlocks, Float32Array.from(cU), Float32Array.from(yU), yU.length / 4), UU.needsRender = !0
-         }(UU, vU, HU)
-       }), [vU, HU]), (0, cU.useEffect)((() => {
-         const UU = EX.current;
-         null !== UU && null !== UU.chunkGrid && (UU.chunkGrid.isVisible = WX, UU.needsRender = !0)
-       }), [WX, HU]), (0, cU.useEffect)((() => {
-         const UU = EX.current;
-         null !== UU && function(UU, XU, zU) {
-           const {
-             camera: cU
-           } = UU;
-           cU.position.set(XU.position[0], XU.position[1], XU.position[2]), cU.rotation.set(XU.pitch, XU.heading, 0);
-           const yU = (rU + 1) * pU.f.aY * Math.sqrt(3);
-           cU.maxZ = Math.max(yU, Math.hypot(...AX(XU.position, FX(yX({
-             min: [0, 0, 0],
-             max: zU
- ... (103 more removed lines; see GitHub link above)
+       }
+       writePoses(HH) {
+         for (const BH of this.shownBones) BH.write(HH)
+       }
+     }
+   },
+   42386: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       openMobLineupPreview: () => ZH,
+       openMobPreview: () => wH,
+       openPetPreview: () => dH
+     });
+     var AH = LH(41106),
+       rH = LH(41374),
+       SH = LH(42390),
+       hH = LH(38071),
+ ... (77 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L452-L457` → after: `L234-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L234-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L234-L243) · [Before (L452-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L452-L457)

```diff
-         heading: XU,
-         pitch: zU,
-         onViewFrom: yU,
-         onTurn: QU,
-         onFlip: AU
-       } = UU;
+         mobType: rH,
+         variation: SH,
+         animation: hH
+       } = HH, zH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, PH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const TH = null !== (BH = null === zH || void 0 === zH ? void 0 : zH.size) && void 0 !== BH ? BH : 1,
+         mH = null !== (LH = null === zH || void 0 === zH ? void 0 : zH.cosmetics) && void 0 !== LH ? LH : [],
+         fH = null !== (AH = null === zH || void 0 === zH ? void 0 : zH.pU) && void 0 !== AH ? AH : null;
+       let lH = !1,
+         KH = null,
+         cH = null;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L459-L490` → after: `L245-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L245-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L245-L383) · [Before (L459-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L459-L490)

```diff
-         t: FU
-       } = (0, aU.I)(), oU = (0, cU.useRef)(null), DU = UX({
-         heading: XU,
-         pitch: zU
-       }), EU = XX(XU), YU = DX(DU, EU), NU = sU + nU + 2, IU = VU.flatMap((UU => [1, -1].map((XU => {
-         const zU = FX(UU.direction, XU);
-         return {
-           ...UU,
-           sign: XU,
-           direction: zU,
-           endX: NU + oX(zU, EU) * sU,
-           endY: NU - oX(zU, YU) * sU,
-           depth: oX(zU, DU)
-         }
-       })))).sort(((UU, XU) => XU.depth - UU.depth));
-       return (0, PU.jsxs)("svg", {
- ... (16 more removed lines; see GitHub link above)
+         engine: eH,
+         NQ: RH
+       } = qH(), jH = RH.onBeforeRenderObservable.add((() => {
+         var HH;
+         null === (HH = cH) || void 0 === HH || HH.render(eH.getDeltaTime())
+       })), nH = null === fH ? null : NH(fH).catch((HH => (console.error(`Mob preview: could not load ${fH}`, HH), null)));
+       return Promise.all([gH(rH), nH, UH(qH().NQ, mH)]).then((HH => {
+         var BH, LH, AH;
+         let [zH, UH, eH] = HH;
+         if (lH) return;
+         const gH = (0, xH.c)().mX.bR,
+           {
+             hitBoxDimensions: NH
+           } = (0, EH.d)(rH),
+           RH = oH / Math.max(NH.height, NH.width);
+         if (KH = (0, WH.m)(rH, RH * TH, !0, !0), gH.setPosition(KH, PH, -NH.height * RH / 2, 0), gH.setRotationEulerY(KH, IH), zH.meshApi instanceof OH.b && mH.length > 0) {
+ ... (123 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L492-L553` → after: `L385-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L385-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L385-L400) · [Before (L492-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L492-L553)

```diff
-         },
-         onPointerMove: UU => {
-           const XU = oU.current;
-           if (null === XU || XU.pointerId !== UU.pointerId) return;
-           const zU = UU.clientX - XU.x,
-             cU = UU.clientY - XU.y;
-           XU.x = UU.clientX, XU.y = UU.clientY, XU.travel += Math.abs(zU) + Math.abs(cU), XU.travel >= xU && QU(zU, cU)
-         },
-         onPointerUp: UU => {
-           const XU = oU.current;
-           oU.current = null, null === XU || XU.pointerId !== UU.pointerId || XU.travel >= xU || (null !== XU.side ? yU(XU.side) : XU.isOnMiddle && AU())
-         },
-         onPointerCancel: () => {
-           oU.current = null
-         },
-         children: [IU.map(((UU, XU) => {
- ... (46 more removed lines; see GitHub link above)
+           of HH) null !== LH && NH(LH).catch(BH), UH(qH().NQ, AH).catch(BH)
+       }
+       place() {
+         const {
+           figures: HH,
+           shown: BH
+         } = this.view, LH = HH.map(((LH, AH) => {
+           var rH;
+           const SH = null !== (rH = this.placed[AH]) && void 0 !== rH ? rH : null;
+           if (!BH[AH]) return null === SH || void 0 === SH || SH.remove(), null;
+           const hH = (tH = (AH + .5) / HH.length, zH = this.aspect, (.5 - tH) * (2 * mH * Math.tan(qH().camera.fov / 2)) * zH);
+           var tH, zH;
+           return null !== SH && SH.figure === LH && SH.x === hH ? SH : (null === SH || void 0 === SH || SH.remove(), {
+             figure: LH,
+             x: hH,
+             remove: jH(LH, hH)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L555-L556` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L402-L405) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L555-L556)

```diff
-         })]
-       })
+         }));
+         for (const AH of this.placed.slice(HH.length)) null === AH || void 0 === AH || AH.remove();
+         this.placed = LH
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L560-L582` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L409) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L560-L582)

```diff
-       var XU, zU, cU;
-       const {
-         chunkGridOrigin: yU,
-         camera: QU
-       } = UU;
-       if (null === yU) return;
-       const AU = [QU.position.x, QU.position.y, QU.position.z],
-         FU = [0, 2].map((UU => Math.floor((AU[UU] + yU[UU]) / pU.f.aY))),
-         oU = UU.chunkGridCentre;
-       if (null !== oU && oU.every(((UU, XU) => UU === FU[XU]))) return;
-       const YU = null === (XU = null === (zU = UU.chunkGrid) || void 0 === zU ? void 0 : zU.isVisible) || void 0 === XU || XU;
-       null === (cU = UU.chunkGrid) || void 0 === cU || cU.dispose();
-       const [IU, aU] = [0, 2].map(((UU, XU) => {
-         const zU = [];
-         for (let cU = FU[XU] - rU; cU <= FU[XU] + rU + 1; cU++) zU.push(cU * pU.f.aY - yU[UU]);
-         return zU
- ... (7 more removed lines; see GitHub link above)
+       return new FH(HH, RH)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L585-L593` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L412-L413) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L585-L593)

```diff
-     function bU(UU, XU, zU, cU) {
-       UU.fUU("matrix", function(UU, XU) {
-         const zU = new Float32Array(16 * XU);
-         for (let cU = 0; cU < XU; cU++) {
-           const XU = 16 * cU;
-           zU[XU] = 1, zU[XU + 5] = 1, zU[XU + 10] = 1, zU[XU + 12] = UU[3 * cU], zU[XU + 13] = UU[3 * cU + 1], zU[XU + 14] = UU[3 * cU + 2], zU[XU + 15] = 1
-         }
-         return zU
-       }(XU, cU), 16, !0), UU.fUU("color", zU, 4, !0), UU.isVisible = cU > 0
+     function ZH(HH) {
+       return new DH(HH)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L597-L616` → after: `L417-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L417-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L417-L441) · [Before (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L597-L616)

```diff
-       const {
-         camera: XU,
-         translucent: zU
-       } = UU, cU = [XU.position.x, XU.position.y, XU.position.z], yU = UU.translucentSortedFrom;
-       if (null !== yU && Math.hypot(cU[0] - yU[0], cU[1] - yU[1], cU[2] - yU[2]) < SU) return;
-       UU.translucentSortedFrom = cU;
-       const QU = new Float64Array(zU.count),
-         AU = new Uint32Array(zU.count);
-       for (let DU = 0; DU < zU.count; DU++) {
-         const UU = zU.Ut[3 * DU] - cU[0],
-           XU = zU.Ut[3 * DU + 1] - cU[1],
-           yU = zU.Ut[3 * DU + 2] - cU[2];
-         QU[DU] = UU * UU + XU * XU + yU * yU, AU[DU] = DU
-       }
-       AU.sort(((UU, XU) => QU[XU] - QU[UU]));
-       const FU = new Float32Array(3 * zU.count),
- ... (4 more removed lines; see GitHub link above)
+       return new FH(HH, nH)
+     }
+   },
+   39726: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => GH
+     });
+     var AH = LH(38084),
+       rH = LH(38183),
+       SH = LH(38213),
+       hH = LH(38098),
+       tH = LH(38086);
+ 
+     function zH(HH) {
+       return `\n\t\t\t\t${(0,tH.x)(HH,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+ ... (9 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L620-L624` → after: `L445-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L445-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L445-L448) · [Before (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L620-L624)

```diff
-       const zU = (zU, cU, yU) => new EU.Sp(0 === zU ? UU[0] : XU[0], 0 === cU ? UU[1] : XU[1], 0 === yU ? UU[2] : XU[2]),
-         cU = [];
-       for (const yU of [0, 1])
-         for (const UU of [0, 1]) cU.push([zU(0, yU, UU), zU(1, yU, UU)], [zU(yU, 0, UU), zU(yU, 1, UU)], [zU(yU, UU, 0), zU(yU, UU, 1)]);
-       return cU
+       let LH = (0, tH.Cb)(HH, "skele" + (BH - 1));
+       for (let rH = BH - 2; rH >= 0; rH--) LH = (0, tH.pb)(HH, `boneIdx == ${rH}`, (0, tH.Cb)(HH, `skele${rH}`), LH);
+       const AH = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,tH.C)(HH,"int","boneIdx",(0,tH.ub)(HH,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,tH.C)(HH,"vec3","bone",LH)}\n\t\t\t\t${(0,tH.C)(HH,"vec2","pivot",(0,tH.l)(HH,"vec2","0.0",`${(0,tH.Lb)(HH,"position")}.z`))}\n\t\t\t\t${(0,tH.$)(HH)?`positi … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L628` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L452) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L628)

```diff
-       return [Math.sin(UU.heading) * Math.cos(UU.pitch), -Math.sin(UU.pitch), Math.cos(UU.heading) * Math.cos(UU.pitch)]
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,tH.l)(HH,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L631-L632` → after: `L600-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L600-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L600-L605) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L631-L632)

```diff
-     function XX(UU) {
-       return [Math.cos(UU), 0, -Math.sin(UU)]
+     function MH(HH, BH) {
+       return Object.assign((function(HH, LH, AH, rH) {
+         return BH(this.featureState, HH, LH, AH, rH)
+       }), {
+         EX: HH
+       })
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L635-L652` → after: `L608-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L608-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L608-L617) · [Before (L635-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L635-L652)

```diff
-     function zX(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: HU,
-         pitch: MU
-       };
-       const yU = [UU.max[0] - UU.min[0], UU.max[1] - UU.min[1], UU.max[2] - UU.min[2]],
-         QU = UX(cU),
-         AU = XX(cU.heading),
-         FU = DX(QU, AU),
-         oU = Math.tan(zU / 2),
-         DU = oU * XU;
-       let EU = 1;
-       for (const YU of [-yU[0] / 2, yU[0] / 2])
-         for (const UU of [-yU[1] / 2, yU[1] / 2])
-           for (const XU of [-yU[2] / 2, yU[2] / 2]) {
-             const zU = [YU, UU, XU],
- ... (2 more removed lines; see GitHub link above)
+     function xH(HH) {
+       const BH = class extends YH.e {
+           constructor(BH, LH) {
+             const AH = (0, QH.V)(BH),
+               rH = AH && (0, QH.s)(AH, HH.name);
+             for (var SH = arguments.length, hH = new Array(SH > 2 ? SH - 2 : 0), tH = 2; tH < SH; tH++) hH[tH - 2] = arguments[tH];
+             super(BH, HH.name, HH.priority, rH ? rH.defines : HH.defines(...hH), !1), this.featureState = void 0, this.featureState = LH, this._pluginManager._addPlugin(this), this._enable(!0), (0, QH.v)(this._material, HH, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return HH.className
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L654-L657` → after: `L619-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L619-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L619-L633) · [Before (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L654-L657)

```diff
-       return {
-         position: AX([UU.min[0] + yU[0] / 2, UU.min[1] + yU[1] / 2, UU.min[2] + yU[2] / 2], FX(QU, -EU * vU)),
-         heading: cU.heading,
-         pitch: cU.pitch
+           isCompatible(HH) {
+             return HH === WH.c.GLSL || HH === WH.c.WGSL
+           }
+         },
+         LH = (0, uH.h)(HH);
+       for (const [AH, rH] of Object.entries(uH.d)) {
+         const SH = HH[AH];
+         if (SH) {
+           const HH = LH[AH];
+           Object.defineProperty(BH.prototype, rH, {
+             value: MH(SH, HH),
+             writable: !0,
+             configurable: !0
+           })
+         }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L662-L669` → after: `L643-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L643-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L643-L695) · [Before (L662-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L662-L669)

```diff
-       const cU = QX(UU),
-         yU = QX(zU),
-         QU = AX(UU.position, FX(XU, -1)),
-         AU = [0, 1, 2].reduce(((UU, XU) => AX(UU, FX(yU[XU], oX(QU, cU[XU])))), [0, 0, 0]);
-       return {
-         position: AX(XU, AU),
-         heading: zU.heading,
-         pitch: zU.pitch
+       return (0, UH.d)(LH, BH.urls, (() => async function(HH, BH, LH) {
+         const {
+           width: AH
+         } = HH[0].getSize(), rH = HH.map(((HH, LH) => {
+           var rH;
+           const SH = Math.round(HH.getSize().height / AH),
+             hH = null === BH || void 0 === BH ? void 0 : BH[LH];
+           return {
+             pixels: hH && hH.byteLength === AH * AH * SH * 4 ? hH : null !== (rH = OH.get(HH.getInternalTexture())) && void 0 !== rH ? rH : HH._readPixelsSync(),
+             layers: SH
+           }
+         })), SH = Math.min(LH.Iu().getCaps().texture2DArrayMaxLayerCount, 256), tH = (0, UH.c)(rH, AH, SH).map((HH => {
+           let {
+             pixels: BH,
+             layers: rH
+           } = HH;
+ ... (37 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L672-L674` → after: `L698-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L698-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L698-L714) · [Before (L672-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L672-L674)

```diff
- 
-     function yX(UU) {
-       return FX(AX(UU.min, UU.max), .5)
+     var mH = LH(42455),
+       oH = LH(41588),
+       IH = LH(37961),
+       fH = LH(42458),
+       lH = LH(41703),
+       KH = LH(41578),
+       cH = LH(42414),
+       eH = LH(38339),
+       qH = LH(42463);
+     class gH extends mH.b {
+       getData() {
+         return null
+       }
+       _rebuild() {}
+       restore() {
+         super._rebuild()
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L676-L680` → after: `L716-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L716-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L716-L744) · [Before (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L676-L680)

```diff
- 
-     function QX(UU) {
-       const XU = UX(UU),
-         zU = XX(UU.heading);
-       return [XU, zU, DX(XU, zU)]
+     const NH = {
+       Mesh: fH.c,
+       TransformNode: cH.c,
+       rX: mH.b,
+       VertexBuffer: mH.e,
+       BoundingInfo: oH.d,
+       lu: IH.lu,
+       ArenaBuffer: gH,
+       SubMesh: KH.d,
+       VertexData: lH.b,
+       MirroredGeometry: qH.c,
+       meshFromArrays: qH.f,
+       plainMeshFromArrays: qH.g
+     };
+     (0, eH.d)(NH);
+     var RH = LH(38194);
+ ... (13 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L684` → after: `L748-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L748-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L748-L793) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L684)

```diff
-       return [UU[0] + XU[0], UU[1] + XU[1], UU[2] + XU[2]]
+       if (!(BH instanceof AH.StandardMaterial) || BH.specularTexture) return;
+       const {
+         r: LH,
+         g: rH,
+         b: SH
+       } = BH.specularColor;
+       0 === LH && 0 === rH && 0 === SH && (HH.SPECULARTERM = !1)
+     }(0, EH.d)({
+       disableUnusedSpecularTerm: nH
+     });
+     var FH = LH(38141),
+       DH = LH(38353);
+     const wH = new RegExp(`^#define ${CH.d}\\s*$`, "m");
+     class ZH extends(xH(CH.j)) {
+       constructor(HH, BH) {
+         super(HH, BH), this.Mu = !1, BH.ditherOnlyWhileFading && (DH.c.add(HH), this.prewarmDitherTwins(HH))
+ ... (30 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L688` → after: `L798-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L798-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L798-L989) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L688)

```diff
-       return [UU[0] * XU, UU[1] * XU, UU[2] * XU]
+       dH.set(HH, BH)
+     }
+     aH(tH.c, vH), aH(zH.g, kH), aH(CH.j, ZH), aH(EH.h, jH), (0, XH.d)({
+       create: (HH, BH) => {
+         const LH = new AH.StandardMaterial(HH.name, BH);
+         return (0, FH.m)(HH, LH), LH.detailMap._pluginDefineNames
+       },
+       write: (HH, BH, LH) => {
+         (0, FH.P)(HH.mirror, BH, LH)
+       },
+       addFeature: (HH, BH, LH) => {
+         const AH = dH.get(BH.feature);
+         if (!AH) throw new Error(`${BH.feature.name} has no plugin class (registerPluginClass)`);
+         new AH(HH.mirror, BH.state, ...LH)
+       },
+       texture: (HH, BH, LH) => {
+ ... (176 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L691-L692` → after: `L992-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L992-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L992-L1010) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L691-L692)

```diff
-     function oX(UU, XU) {
-       return UU[0] * XU[0] + UU[1] * XU[1] + UU[2] * XU[2]
+     function XH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new tH.c(HH, LH);
+       const rH = (0, CH.p)(BH),
+         {
+           positions: SH,
+           normals: XH,
+           uvs: GH,
+           indices: YH,
+           named: uH = {}
+         } = BH,
+         QH = new zH.b;
+       QH.positions = SH, QH.normals = null !== XH && void 0 !== XH ? XH : null, QH.uvs = null !== GH && void 0 !== GH ? GH : null, QH.indices = YH;
+       const WH = new EH(hH.d.RandomId(), LH, QH, !1, AH);
+       for (const {
+           kind: hH,
+           components: tH
+ ... (3 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L695-L696` → after: `L1013-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L1013-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/273.js#L1013-L1075) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/273.js#L695-L696)

```diff
-     function DX(UU, XU) {
-       return [UU[1] * XU[2] - UU[2] * XU[1], UU[2] * XU[0] - UU[0] * XU[2], UU[0] * XU[1] - UU[1] * XU[0]]
+     function GH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const rH = new tH.c(HH, LH),
+         {
+           positions: SH,
+           normals: hH,
+           uvs: CH,
+           indices: EH
+         } = BH;
+       return Object.assign(new zH.b, {
+         positions: SH,
+         normals: hH,
+         uvs: CH,
+         indices: EH
+       }).applyToMesh(rH, AH), rH
+     }
+ ... (47 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/274.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/274.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L4)

```diff
-   41309: (UU, XU, zU) => {
+   42352: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6-L6866` → after: `L6-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L6-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L6-L18) · [Before (L6-L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L6-L6866)

```diff
-       d: () => tU,
-       e: () => GU
-     });
-     var cU = zU(41113),
-       yU = zU(41121),
-       QU = zU(41210),
-       AU = zU(37846),
-       FU = zU(37819),
-       oU = zU(41314),
-       DU = zU(39493),
-       EU = zU(37863),
-       YU = zU(40989),
-       NU = zU(38845),
-       IU = zU(38502),
-       pU = zU(41068),
-       aU = zU(41134);
- ... (6845 more removed lines; see GitHub link above)
+       e: () => SH,
+       f: () => hH
+     });
+     var AH = LH(2010);
+     let rH = !1;
+ 
+     function SH() {
+       rH = !0
+     }
+ 
+     function hH() {
+       rH && (rH = !1, (0, AH.e)())
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6868-L6874` → after: `L20-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L20-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L20-L27) · [Before (L6868-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L6868-L6874)

```diff
-   41563: (UU, XU, zU) => {
-     var cU = zU(37819),
-       yU = zU(39493),
-       QU = zU(41387),
-       AU = zU(41481),
-       FU = zU(41237);
-     const oU = "bakedVertexAnimationSettingsInstanced";
+   42343: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH,
+       h: () => SH,
+       j: () => tH
+     });
+     var AH = LH(41898),
+       rH = LH(41911);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6877-L6878` → after: `L30-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L30-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L30-L47) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L6877-L6878)

```diff
-       const XU = UU.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return XU instanceof Float32Array || XU instanceof Uint16Array
+       if (HH.queries.drawCensus() < AH.Gb.BYTES) return null;
+       const BH = HH.memoryData(HH.scratch(), AH.Gb.BYTES, 4, "the draw census");
+       return null === BH ? null : {
+         terrainOpaque: AH.Gb.terrainOpaque(BH, 0),
+         terrainTransparent: AH.Gb.terrainTransparent(BH, 0),
+         terrainPack: AH.Gb.terrainPack(BH, 0),
+         earthSky: AH.Gb.earthSky(BH, 0),
+         skyMeshes: AH.Gb.skyMeshes(BH, 0),
+         regular: AH.Gb.regular(BH, 0),
+         thin: AH.Gb.thin(BH, 0),
+         line: AH.Gb.line(BH, 0),
+         text: AH.Gb.text(BH, 0),
+         particles: AH.Gb.particles(BH, 0),
+         terrainParts: AH.Gb.terrainParts(BH, 0),
+         terrainCompiling: AH.Gb.terrainCompiling(BH, 0),
+         ringCopiesMax: AH.Gb.ringCopiesMax(BH, 0),
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6881-L6888` → after: `L50-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L50-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L50-L62) · [Before (L6881-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L6881-L6888)

```diff
-     function EU(UU, XU, zU, cU) {
-       zU.IUU(Number.POSITIVE_INFINITY), cU.IUU(Number.NEGATIVE_INFINITY);
-       for (let yU = 0; yU < 3 * XU; yU += 3) {
-         const XU = UU[yU],
-           QU = UU[yU + 1],
-           AU = UU[yU + 2];
-         XU < zU.x && (zU.x = XU), QU < zU.y && (zU.y = QU), AU < zU.z && (zU.z = AU), XU > cU.x && (cU.x = XU), QU > cU.y && (cU.y = QU), AU > cU.z && (cU.z = AU)
-       }
+     function hH(HH) {
+       const {
+         terrainOpaque: BH,
+         terrainTransparent: LH,
+         earthSky: AH,
+         skyMeshes: rH,
+         regular: SH,
+         thin: hH,
+         line: tH,
+         text: zH,
+         particles: CH
+       } = HH;
+       return BH + LH + AH + rH + SH + hH + tH + zH + CH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6891-L6892` → after: `L65-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L65-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L65-L98) · [Before (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L6891-L6892)

```diff
-     function YU(UU, XU, zU) {
-       zU && (UU.x -= UU.x * zU.x + zU.y, UU.y -= UU.y * zU.x + zU.y, UU.z -= UU.z * zU.x + zU.y, XU.x += XU.x * zU.x + zU.y, XU.y += XU.y * zU.x + zU.y, XU.z += XU.z * zU.x + zU.y)
+     function tH() {
+       const HH = (0, rH.i)();
+       return !0 === (null === HH || void 0 === HH ? void 0 : HH.isCoreRunning) ? function(HH) {
+         const BH = SH(HH);
+         if (null === BH) return [];
+         const {
+           terrainOpaque: LH,
+           terrainTransparent: AH,
+           terrainPack: rH,
+           earthSky: tH,
+           skyMeshes: zH,
+           regular: CH,
+           thin: EH,
+           line: XH,
+           text: GH,
+           particles: YH
+ ... (18 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6895-L6900` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L116-L118) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L6895-L6900)

```diff
-     function NU(UU, XU, zU, yU, QU) {
-       const AU = cU.l.Sp[7],
-         FU = cU.l.Sp[8];
-       for (let oU = 0; oU < 2; ++oU)
-         for (let DU = 0; DU < 2; ++DU)
-           for (let EU = 0; EU < 2; ++EU) AU.set(oU ? XU.x : UU.x, DU ? XU.y : UU.y, EU ? XU.z : UU.z), cU.q.TransformCoordinatesToRef(AU, zU, FU), yU.minimizeInPlace(FU), QU.maximizeInPlace(FU)
+     function XH(HH) {
+       const BH = (0, SH.i)();
+       return null !== BH && +HH === BH.api.localId
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6903-L6905` → after: `L121-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L121-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L121-L140) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L6903-L6905)

```diff
-     function IU(UU, XU, zU, yU, QU) {
-       const AU = cU.l.Sp[7];
-       for (let FU = 0; FU < 3 * XU; FU += 3) cU.q.TransformCoordinatesFromFloatsToRef(UU[FU], UU[FU + 1], UU[FU + 2], zU, AU), yU.minimizeInPlace(AU), QU.maximizeInPlace(AU)
+     function GH() {
+       EH || (EH = !0, (0, zH.k)(hH.k, (HH => {
+         var BH, LH;
+         const AH = (0, tH.f)(hH.k, HH);
+         if (!(0, tH.c)(AH)) return;
+         const rH = AH;
+         XH(rH.fH) && YH(rH.lH, {
+           icon: rH.VA,
+           level: rH.bA,
+           displayName: null !== (BH = rH.KH) && void 0 !== BH ? BH : null,
+           durationMs: null !== (LH = rH.OA) && void 0 !== LH ? LH : null
+         })
+       })), (0, zH.k)(hH.N, (HH => {
+         const BH = (0, tH.f)(hH.N, HH);
+         if (!(0, tH.c)(BH)) return;
+         const LH = BH;
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6907-L7058` → after: `L142-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L142-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L142-L150) · [Before (L6907-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L6907-L7058)

```diff
-     let pU = !1;
-     pU || (pU = !0, AU.b.prototype.thinInstanceAdd = function(UU) {
-       let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.nS().qp().getCaps().instancedArrays) return yU.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(UU) ? UU.length : 1);
-       const zU = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(UU))
-         for (let cU = 0; cU < UU.length; ++cU) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, UU[cU], cU === UU.length - 1 && XU);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, UU, XU);
-       return zU
-     }, AU.b.prototype.thinInstanceAddSelf = function() {
-       let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       return this.thinInstanceAdd(cU.e.IdentityReadOnly, UU)
-     }, AU.b.prototype.thinInstanceRegisterAttribute = function(UU, XU) {
-       UU === FU.h.ColorKind && (UU = FU.h.ColorInstanceKind), this.removeVerticesData(UU), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[UU] = XU, this._userThinInstanceBuffersStorage.sizes[UU] = XU * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, AU.b.prototype.thinInstanceSetMatrixAt = function(UU, XU) {
- ... (136 more removed lines; see GitHub link above)
+ 
+     function YH(HH, BH) {
+       AH.c.update(HH, BH), CH.forEach((BH => {
+         BH(HH)
+       }))
+     }
+     const uH = {
+       localEffectUpdated: {
+         watch: HH => CH.add(HH)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7060-L7069` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L152) · [Before (L7060-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7060-L7069)

```diff
-     }, AU.b.prototype._thinInstanceInitializeUserStorage = function() {
-       this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
-         data: {},
-         sizes: {},
-         vertexBuffers: {},
-         strides: {}
-       })
-     }, AU.b.prototype._disposeThinInstanceSpecificData = function() {
-       this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), th … [truncated]
-     })
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7071` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L154) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7071)

```diff
-   41515: (UU, XU, zU) => {
+   42337: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7073-L7074` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L156) · [Before (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7073-L7074)

```diff
-       d: () => kU,
-       e: () => aU
+       d: () => EH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7076-L7084` → after: `L158-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L158-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L158-L166) · [Before (L7076-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7076-L7084)

```diff
-     var cU, yU, QU, AU, FU = zU(41113),
-       oU = zU(41121),
-       DU = zU(41134),
-       EU = zU(37846),
-       YU = zU(37819),
-       NU = zU(41314),
-       IU = zU(37863),
-       pU = zU(40989);
-     let aU = (() => {
+     var AH = LH(5268),
+       rH = LH(5265),
+       SH = LH(41946),
+       hH = LH(41954);
+     const tH = new Set(AH.Q),
+       zH = AH.Q.map((HH => (new TextEncoder).encode(HH))),
+       CH = new Map;
+ 
+     function EH(HH, BH) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7086-L7541` → after: `L168-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L168-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L168-L175) · [Before (L7086-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7086-L7541)

```diff
-       let XU, zU, cU, yU, QU, AU, IU, pU, aU, tU = NU.e,
-         gU = [],
-         kU = [],
-         GU = [],
-         BU = [],
-         ZU = [],
-         RU = [],
-         PU = [],
-         WU = [],
-         dU = [],
-         LU = [],
-         eU = [],
-         CU = [],
-         wU = [],
-         qU = [],
-         OU = [],
- ... (440 more removed lines; see GitHub link above)
+       return null === (LH = CH.get(HH)) || void 0 === LH ? void 0 : LH[BH]
+     }(0, hH.k)(AH.nc.NewOtherEntitySettings, (HH => {
+       HH.payloadKind === rH.jc.Msgpack && zH.some((BH => function(HH, BH) {
+         const LH = BH[0];
+         for (let AH = HH.indexOf(LH); - 1 !== AH && AH + BH.length <= HH.length; AH = HH.indexOf(LH, AH + 1)) {
+           let LH = 1;
+           for (; LH < BH.length && HH[AH + LH] === BH[LH];) LH++;
+           if (LH === BH.length) return !0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7543-L7544` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L177-L186) · [Before (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7543-L7544)

```diff
-         _syncAbsoluteScalingAndRotation() {
-           this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
+         return !1
+       }(HH.payload, BH))) && function(HH) {
+         if (null === HH || "object" !== typeof HH || null === HH.settings || "object" !== typeof HH.settings) return;
+         const BH = String(HH.eId),
+           LH = HH.settings;
+         let AH = CH.get(BH);
+         for (const rH in LH) {
+           if (!tH.has(rH)) continue;
+           const HH = LH[rH];
+           null === HH || void 0 === HH ? AH && delete AH[rH] : (AH ??= {}, AH[rH] = HH)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7546-L7672` → after: `L188-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L188-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L188-L207) · [Before (L7546-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7546-L7672)

```diff
-       }, (() => {
-         const DU = "function" === typeof Symbol && Symbol.metadata ? Object.create(tU[Symbol.metadata] ?? null) : void 0;
-         XU = [(0, oU.F)("position")], zU = [(0, oU.F)("rotation")], cU = [(0, oU.v)("rotationQuaternion")], yU = [(0, oU.F)("RY")], QU = [(0, oU.I)("billboardMode")], AU = [(0, oU.I)()], IU = [(0, oU.I)("infiniteDistance")], pU = [(0, oU.I)()], aU = [(0, oU.I)()], (0, FU.j)(null, … [truncated]
-           kind: "field",
-           name: "_position",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "_position" in UU,
-             get: UU => UU._position,
-             set: (UU, XU) => {
-               UU._position = XU
-             }
-           },
-           metadata: DU
-         }, gU, kU), (0, FU.j)(null, null, zU, {
- ... (111 more removed lines; see GitHub link above)
+         AH && CH.set(BH, AH)
+       }((0, SH.e)(HH.payload))
+     })), (0, hH.g)((() => {
+       CH.clear()
+     }))
+   },
+   42327: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => YH,
+       f: () => CH,
+       j: () => XH
+     });
+     var AH = LH(39919),
+       rH = LH(2003),
+       SH = LH(1245),
+       hH = LH(41933),
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7674-L7684` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L209-L210) · [Before (L7674-L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7674-L7684)

```diff
-     function tU(UU, XU, zU) {
-       const cU = DU.b.Parse((() => new aU(UU.name, XU)), UU, XU, zU);
-       if (UU.localMatrix ? cU.setPreTransformMatrix(YU.e.FromArray(UU.localMatrix)) : UU.pivotMatrix && cU.setPivotMatrix(YU.e.FromArray(UU.pivotMatrix)), cU.YC(UU.isEnabled), cU._waitingParsedUniqueId = UU.uniqueId, void 0 !== UU.parentId && (cU._waitingParentId = UU.parentId),  … [truncated]
-         for (let XU = 0; XU < UU.animations.length; XU++) {
-           const zU = UU.animations[XU],
-             yU = (0, IU.e)("BABYLON.Animation");
-           yU && cU.animations.push(yU.Parse(zU))
-         }
-         NU.e.ParseAnimationRanges(cU, UU, XU)
-       }
-       return UU.autoAnimate && XU.beginAnimation(cU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), cU
+     function XH(HH) {
+       return EH[HH]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7686` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L212) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7686)

```diff
-     let gU = !1;
+     const GH = new SH.c;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7688-L7690` → after: `L214-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L214-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L214-L277) · [Before (L7688-L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7688-L7690)

```diff
-     function kU() {
-       gU || (gU = !0, aU.Parse = tU)
-     }(cU = aU.prototype).Bx ?? (cU.Bx = (0, pU.k)("TransformNode", "Bx")), (yU = aU.prototype).applyImpulse ?? (yU.applyImpulse = (0, pU.k)("TransformNode", "applyImpulse")), (QU = aU.prototype).applyAngularImpulse ?? (QU.applyAngularImpulse = (0, pU.k)("TransformNode", "applyAng … [truncated]
+     function YH(HH) {
+       return GH.add(HH)
+     }
+ 
+     function uH(HH) {
+       GH.callEach(HH, "a roster listener")
+     }(0, zH.k)(hH.Z, (HH => {
+       const BH = (0, tH.f)(hH.Z, HH);
+       if (void 0 === BH) return;
+       const LH = BH.RA.some((HH => {
+           let {
+             jA: BH,
+             nA: LH
+           } = HH;
+           return null !== LH && CH.has(BH) && CH.getName(BH) !== LH
+         })),
+ ... (48 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7692-L7700` → after: `L279-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L279-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L279-L315) · [Before (L7692-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7692-L7700)

```diff
-   41486: (UU, XU, zU) => {
-     function cU(UU, XU, zU) {
-       try {
-         const cU = UU.next();
-         cU.done ? XU(cU) : cU.value ? cU.value.then((() => {
-           cU.value = void 0, XU(cU)
-         }), zU) : XU(cU)
-       } catch (cU) {
-         zU(cU)
+   42339: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => mH,
+       e: () => WH,
+       g: () => lH,
+       k: () => KH
+     });
+     var AH = LH(1206),
+       rH = LH(609),
+       SH = LH(81),
+       hH = LH(5268),
+       tH = LH(41898),
+       zH = LH(41928),
+       CH = LH(41911),
+       EH = LH(42337),
+       XH = LH(42327),
+ ... (21 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7704-L7710` → after: `L319-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L319-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L319-L329) · [Before (L7704-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7704-L7710)

```diff
-     function yU() {
-       let UU, XU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (zU, yU, QU) => {
-         const AU = performance.now();
-         void 0 === UU || AU - UU > XU ? (UU = AU, setTimeout((() => {
-           cU(zU, yU, QU)
-         }), 0)) : cU(zU, yU, QU)
+     function QH(HH) {
+       let {
+         killer: BH,
+         victim: LH,
+         withItem: AH
+       } = HH;
+       return {
+         killer: PH(BH),
+         victim: PH(LH),
+         withItem: AH,
+         killstreak: 0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7714-L7724` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L333-L334) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7714-L7724)

```diff
-     function QU(UU, XU, zU, cU, yU) {
-       const QU = () => {
-         let AU;
-         const FU = UU => {
-           UU.done ? zU(UU.value) : void 0 === AU ? AU = !0 : QU()
-         };
-         do {
-           AU = void 0, yU && yU.aborted ? cU(new Error("Aborted")) : XU(UU, FU, cU), void 0 === AU && (AU = !1)
-         } while (AU)
-       };
-       QU()
+     function WH(HH) {
+       OH && kH((() => "killed" === HH.kind ? uH(HH.body) : QH(HH.body)))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7728-L7731` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L340-L341) · [Before (L7728-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7728-L7731)

```diff
-       let zU;
-       return QU(UU, cU, (UU => zU = UU), (UU => {
-         throw UU
-       }), XU), zU
+       var LH;
+       return XH.f.has(HH) ? null === (LH = XH.f.getSettings(HH)) || void 0 === LH ? void 0 : LH[BH] : (0, EH.d)(HH, BH)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7733-L7736` → after: `L343-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L343-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L343-L390) · [Before (L7733-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7733-L7736)

```diff
-     async function FU(UU, XU, zU) {
-       return await new Promise(((cU, yU) => {
-         QU(UU, XU, cU, yU, zU)
-       }))
+ 
+     function PH(HH) {
+       var BH, LH, hH, tH, EH;
+       let {
+         eId: GH,
+         name: YH,
+         colour: uH,
+         lifeformType: QH
+       } = HH;
+       if (void 0 === GH || null === GH || "" === GH) {
+         const HH = YH || null;
+         return {
+           id: null,
+           shownName: HH,
+           lifeformType: null === HH && null !== QH && void 0 !== QH ? QH : null,
+           colour: uH || null,
+ ... (32 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7739-L7741` → after: `L393-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L393-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L393-L441) · [Before (L7739-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7739-L7741)

```diff
-     function oU(UU, XU) {
-       return function() {
-         return AU(UU(...arguments), XU)
+     function mH() {
+       bH || (bH = !0, (0, YH.k)(hH.nc.PlayerKilled, (HH => {
+         const BH = (0, GH.i)(HH);
+         (0, GH.c)(BH) && kH((() => uH(BH)))
+       })), (0, YH.k)(hH.nc.CustomKillfeed, (HH => {
+         const BH = (0, GH.i)(HH);
+         (0, GH.c)(BH) && (0, GH.c)(BH.killer) && (0, GH.c)(BH.victim) && kH((() => QH(BH)))
+       })), (0, YH.g)((() => {
+         UH = []
+       })))
+     }
+     const oH = Object.freeze([0, 0, 0]),
+       IH = [0, 0, 0],
+       fH = [0, 0, 0],
+       lH = {
+         kill: {
+ ... (33 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7743` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L443-L444) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7743)

```diff
-     }
+   },
+   39919: (HH, BH, LH) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7745-L7749` → after: `L446-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L446-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/274.js#L446-L504) · [Before (L7745-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/274.js#L7745-L7749)

```diff
-       b: () => yU,
-       c: () => oU,
-       e: () => FU,
-       i: () => AU
-     })
+       e: () => AH
+     });
+     class AH {
+       constructor() {
+         this.members = new Map
+       }
+       apply(HH) {
+         const BH = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const AH of HH.RA) {
+           let HH = this.members.get(AH.jA);
+           if (HH || (HH = {
+               name: null,
+ ... (43 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/275.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/275.js` (145 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896)

#### 1. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L4)

```diff
-   41237: (UU, XU, zU) => {
+   40413: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L6-L7)

```diff
-       d: () => FU,
-       e: () => aU,
+       c: () => hH,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L11-L181` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L10) · [Before (L11-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L11-L181)

```diff
-     var cU = zU(41032),
-       yU = zU(39493),
-       QU = zU(41177),
-       AU = zU(41085);
-     class FU {
-       get oR() {
-         return this._isDisposed
-       }
-       constructor(UU, XU, zU) {
-         let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           FU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           oU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           DU = arguments.length > 7 ? arguments[7] : void 0,
-           EU = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, AU.c)(), UU && UU.nS ? this._engine = UU.nS().qp() : this._engine = UU, this._updatable = zU, this._instanced = FU, this._divisor = DU || 1, this._label = EU, XU instanceof cU.c ? (this._data = null, this._buffer = XU) … [truncated]
- ... (155 more removed lines; see GitHub link above)
+     var AH = LH(45);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L184-L205` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L13) · [Before (L184-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L184-L205)

```diff
-       switch (UU) {
-         case oU.UVKind:
-         case oU.UV2Kind:
-         case oU.UV3Kind:
-         case oU.UV4Kind:
-         case oU.UV5Kind:
-         case oU.UV6Kind:
-           return 2;
-         case oU.NormalKind:
-         case oU.PositionKind:
-           return 3;
-         case oU.ColorKind:
-         case oU.ColorInstanceKind:
-         case oU.MatricesIndicesKind:
-         case oU.MatricesIndicesExtraKind:
-         case oU.MatricesWeightsKind:
- ... (6 more removed lines; see GitHub link above)
+       return tH(HH, zH)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L209` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L17) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L209)

```diff
-       return UU instanceof Int8Array ? oU.BYTE : UU instanceof Uint8Array ? oU.UNSIGNED_BYTE : UU instanceof Int16Array ? oU.SHORT : UU instanceof Uint16Array ? oU.UNSIGNED_SHORT : UU instanceof Int32Array ? oU.INT : UU instanceof Uint32Array ? oU.UNSIGNED_INT : oU.FLOAT
+       return tH(HH, CH)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L213` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L21) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L213)

```diff
-       return (0, QU.r)(UU)
+       return `${Math.floor(HH/60)}:${String(HH%60).padStart(2,"0")}`
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L216-L219` → after: `L24-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L24-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L24-L38) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L216-L219)

```diff
-     function NU(UU, XU, zU, cU, yU, AU, FU, oU) {
-       (0, QU.j)(UU, XU, zU, cU, yU, AU, FU, ((UU, XU) => {
-         for (let zU = 0; zU < cU; zU++) oU(UU[zU], XU + zU)
-       }))
+     function tH(HH, BH) {
+       const [, LH] = (0, AH.useState)(null);
+       return (0, AH.useEffect)((() => {
+         if (0 === HH) return;
+         const AH = window.setInterval((() => {
+           const AH = BH(HH);
+           LH((BH => (null === BH || void 0 === BH ? void 0 : BH.endsAt) === HH && BH.value === AH ? BH : {
+             endsAt: HH,
+             value: AH
+           }))
+         }), 250);
+         return () => {
+           window.clearInterval(AH)
+         }
+       }), [HH, BH]), BH(HH)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L222-L223` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L41-L42) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L222-L223)

```diff
-     function IU(UU, XU, zU, cU, yU, AU, FU, oU) {
-       return (0, QU.n)(UU, XU, zU, cU, yU, AU, FU, oU)
+     function zH(HH) {
+       return (HH - performance.now()) / 1e3
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L228-L229` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L45-L46) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L228-L229)

```diff
-     function aU() {
-       pU || (pU = !0, oU.DeduceStride = DU, oU.GetDataType = EU, oU.GetTypeByteLength = YU, oU.ForEach = NU, oU.GetFloatData = IU)
+     function CH(HH) {
+       return Math.max(0, Math.ceil(zH(HH)))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L232` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L49) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L232)

```diff
-   41032: (UU, XU, zU) => {
+   40433: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L236-L242` → after: `L53-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L53-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L53-L58) · [Before (L236-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L236-L242)

```diff
-     class cU {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.xY = 0, this.is32Bits = !1, this.uniqueId = cU._Counter++
-       }
+     var AH = LH(40437);
+     async function rH() {
+       const {
+         averageColors: HH
+       } = await LH.e(228).then((() => LH(35079)));
+       return new AH.c(HH)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L246` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L61) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L246)

```diff
-   41235: (UU, XU, zU) => {
+   40419: (HH, BH, LH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L248` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L63) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L248)

```diff
-       c: () => QU
+       b: () => zH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L250-L251` → after: `L65-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L65-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L65-L69) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L250-L251)

```diff
-     var cU = zU(37819),
-       yU = zU(41237);
+     var AH = LH(37565),
+       rH = LH(1123),
+       SH = LH(1194),
+       hH = LH(39370),
+       tH = LH(39425);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L253-L290` → after: `L71-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L71-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L71-L88) · [Before (L253-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L253-L290)

```diff
-       constructor() {
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
-       }
-       getNormal() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || XU && !this.pickedMesh.isVerticesDataPresent(yU.h.NormalKind)) return null;
-         let zU, QU = this.pickedMesh.yyU();
-         0 === QU?.length && (QU = null);
-         const AU = cU.l.Sp[0],
-           FU = cU.l.Sp[1],
-           oU = cU.l.Sp[2];
-         if (XU) {
-           const UU = this.pickedMesh.getVerticesData(yU.h.NormalKind);
-           let XU = QU ? cU.q.FromArrayToRef(UU, 3 * QU[3 * this.faceId], AU) : AU.sUU(UU[3 * this.faceId * 3], UU[3 * this.faceId * 3 + 1], UU[3 * this.faceId * 3 + 2]),
-             DU = QU ? cU.q.FromArrayToRef(UU, 3 * QU[3 * this.faceId + 1], FU) : FU.sUU(UU[3 * (3 * this.faceId + 1)], UU[3 * (3 * this.faceId + 1) + 1], UU[3 * (3 * this.faceId + 1) + 2]),
- ... (22 more removed lines; see GitHub link above)
+       constructor(HH, BH) {
+         var LH;
+         this.classes = HH, this.distanceKey = BH, this.markers = new Map, this.refs = new Map, this.viewport = {
+           width: window.innerWidth,
+           height: window.innerHeight
+         }, this.render = null, this.Mu = !1, this.Av = () => {
+           this.viewport = {
+             width: window.innerWidth,
+             height: window.innerHeight
+           }
+         }, window.addEventListener("resize", this.Av), null === (LH = window.visualViewport) || void 0 === LH || LH.addEventListener("resize", this.Av)
+       }
+       bindMarker(HH) {
+         const BH = this.refs.get(HH);
+         if (BH) return BH;
+         const LH = BH => {
+ ... (2 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L292-L336` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L90) · [Before (L292-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L292-L336)

```diff
-         if (UU && DU(this.pickedMesh, zU), this.ray) {
-           const XU = cU.l.Sp[0].YL(zU);
-           UU || DU(this.pickedMesh, XU), cU.q.Dot(XU, this.ray.direction) > 0 && zU.negateInPlace()
-         }
-         return zU.normalize(), zU
-       }
-       getTextureCoordinates() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yU.h.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(UU)) return null;
-         const XU = this.pickedMesh.yyU();
-         if (!XU) return null;
-         const zU = this.pickedMesh.getVerticesData(UU);
-         if (!zU) return null;
-         let QU = cU.m.FromArray(zU, 2 * XU[3 * this.faceId]),
-           AU = cU.m.FromArray(zU, 2 * XU[3 * this.faceId + 1]),
-           FU = cU.m.FromArray(zU, 2 * XU[3 * this.faceId + 2]);
- ... (29 more removed lines; see GitHub link above)
+         return this.refs.set(HH, LH), LH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L338-L346` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L92-L93) · [Before (L338-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L338-L346)

```diff
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           XU = arguments.length > 1 ? arguments[1] : void 0;
-         if (this._MSAARenderBuffers = null, this._context = XU, !UU && (UU = XU.createTexture(), !UU)) throw new Error("Unable to create webGL texture");
-         this.set(UU)
-       }
-       setUsage() {}
-       set(UU) {
-         this._webGLTexture = UU
+       hasMarkers() {
+         return this.markers.size > 0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L348-L349` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L95-L96) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L348-L349)

```diff
-       reset() {
-         this._webGLTexture = null, this._MSAARenderBuffers = null
+       setRender(HH) {
+         this.render = HH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L351-L352` → after: `L98-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L98-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L98-L100) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L351-L352)

```diff
-       addMSAARenderBuffer(UU) {
-         this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(UU)
+       update(HH, BH, LH, AH, rH) {
+         const SH = this.markers.get(HH);
+         SH && (SH.target ??= [0, 0, 0], SH.target[0] = BH, SH.target[1] = LH, SH.target[2] = AH, this.place(SH), this.eA(SH, rH && Math.hypot(BH - rH[0], LH - rH[1], AH - rH[2])))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L354-L358` → after: `L102-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L102-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L102-L106) · [Before (L354-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L354-L358)

```diff
-       releaseMSAARenderBuffers() {
-         if (this._MSAARenderBuffers) {
-           for (const UU of this._MSAARenderBuffers) this._context.deleteRenderbuffer(UU);
-           this._MSAARenderBuffers = null
-         }
+       dispose() {
+         var HH;
+         this.Mu = !0, window.removeEventListener("resize", this.Av), null === (HH = window.visualViewport) || void 0 === HH || HH.removeEventListener("resize", this.Av);
+         for (const BH of this.markers.values()) BH.stopObserving();
+         this.markers.clear(), this.refs.clear(), this.render = null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L360-L362` → after: `L108-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L108-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L108-L134) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L360-L362)

```diff
-       getMSAARenderBuffer() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return this._MSAARenderBuffers?.[UU] ?? null
+       place(HH) {
+         const {
+           render: BH,
+           viewport: LH
+         } = this;
+         if (!BH || !HH.target) return;
+         const AH = (50 - BH.screenBandPct.y) / 100 * LH.height,
+           rH = {
+             x: HH.halfSize.width + 8,
+             top: HH.halfSize.height + 8,
+             bottom: HH.halfSize.height + HH.labelsBelow + AH
+           },
+           SH = BH.projectWorldPosToViewport(HH.target),
+           zH = null !== SH && void 0 !== SH ? SH : BH.projectWorldPosToScreenPos(HH.target),
+           CH = (0, tH.e)({
+             x: zH.x,
+ ... (11 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L364-L365` → after: `L136-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L136-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L136-L163) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L364-L365)

```diff
-       release() {
-         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
+       mount(HH) {
+         const BH = {
+             root: HH,
+             distance: HH.querySelector(`.${this.classes.distance}`),
+             halfSize: {
+               width: 0,
+               height: 0
+             },
+             labelsBelow: 0,
+             target: null,
+             metres: null,
+             metresShownAt: 0,
+             stopObserving: () => {}
+           },
+           LH = HH.querySelector(`.${this.classes.labels}`),
+           AH = new ResizeObserver((() => {
+ ... (12 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L369-L371` → after: `L167-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L167-L169) · [Before (L369-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L369-L371)

```diff
-   41003: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => kU
+   40428: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       default: () => ar
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L373-L378` → after: `L171-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L171-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L171-L179) · [Before (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L373-L378)

```diff
-     var cU = zU(37846),
-       yU = zU(40954),
-       QU = zU(37841),
-       AU = zU(39493),
-       FU = zU(37834),
-       oU = zU(41010);
+     const AH = "ore sell",
+       rH = "lumber ",
+       SH = "farm ",
+       hH = ["market", "demolition", "mining", "woodcutting", "farming"];
+     var tH = LH(45),
+       zH = LH(18),
+       CH = LH(39461),
+       EH = LH(37474);
+     const XH = "greenvilleBackpackView";
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L380-L436` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L181-L182) · [Before (L380-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L380-L436)

```diff
-       constructor() {
-         let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, UU && this.reset()
-       }
-       get isDirty() {
-         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
-       }
-       get zOffset() {
-         return this._zOffset
-       }
-       set zOffset(UU) {
-         this._zOffset !== UU && (this._zOffset = UU, this._isZOffsetDirty = !0)
-       }
-       get zOffsetUnits() {
-         return this._zOffsetUnits
-       }
- ... (41 more removed lines; see GitHub link above)
+       constructor(HH) {
+         this.AX = HH, this.view = null, this.arrivalToken = 0, this.showToken = 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L438-L439` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L184-L185) · [Before (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L438-L439)

```diff
-       apply(UU) {
-         this.isDirty && (this._isCullDirty && (this.cull ? UU.enable(UU.CULL_FACE) : UU.disable(UU.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (UU.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (UU.depthMask(this.depthMask), this … [truncated]
+       getView() {
+         return this.view
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L443-L498` → after: `L711-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L711-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L711-L726) · [Before (L443-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L443-L498)

```diff
-       get isDirty() {
-         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
-       }
-       get func() {
-         return this._func
-       }
-       set func(UU) {
-         this._func !== UU && (this._func = UU, this._isStencilFuncDirty = !0)
-       }
-       get backFunc() {
-         return this._func
-       }
-       set backFunc(UU) {
-         this._backFunc !== UU && (this._backFunc = UU, this._isStencilFuncDirty = !0)
-       }
-       get funcRef() {
- ... (40 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH) {
+         this.pacer = HH, this.send = BH, this.onAnswersTimedOut = LH, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
+           if (!this.flushing) {
+             this.flushing = !0;
+             try {
+               for (; this.queued.length > 0 && this.pacer.tryStart();) {
+                 const HH = this.queued.shift();
+                 this.unanswered.push(HH), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(HH)
+               }
+             } finally {
+               this.flushing = !1
+             }
+           }
+         }, this.onAnswerTimeout = () => {
+           this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
+         }, HH.subscribe(this.flush)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L500-L501` → after: `L728-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L728-L729) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L500-L501)

```diff
-       get backOpStencilDepthPass() {
-         return this._backOpStencilDepthPass
+       getPending() {
+         return [...this.unanswered, ...this.queued]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L503-L504` → after: `L731-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L731-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L731-L732) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L503-L504)

```diff
-       set backOpStencilDepthPass(UU) {
-         this._backOpStencilDepthPass !== UU && (this._backOpStencilDepthPass = UU, this._isStencilOpDirty = !0)
+       TX() {
+         return 0 === this.unanswered.length && 0 === this.queued.length
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L506-L507` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L734-L735) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L506-L507)

```diff
-       get mask() {
-         return this._mask
+       getLastSent() {
+         return this.unanswered.at(-1)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L509-L510` → after: `L737-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L737-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L737-L739) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L509-L510)

```diff
-       set mask(UU) {
-         this._mask !== UU && (this._mask = UU, this._isStencilMaskDirty = !0)
+       getLastPending() {
+         var HH;
+         return null !== (HH = this.queued.at(-1)) && void 0 !== HH ? HH : this.unanswered.at(-1)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L512-L513` → after: `L741-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L741-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L741-L742) · [Before (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L512-L513)

```diff
-       get enabled() {
-         return this._enabled
+       push(HH) {
+         this.queued.push(HH), this.flush()
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L515-L516` → after: `L744-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L744-L746) · [Before (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L515-L516)

```diff
-       set enabled(UU) {
-         this._enabled !== UU && (this._enabled = UU, this._isStencilTestDirty = !0)
+       dropWaiting() {
+         const HH = this.queued.length > 0;
+         return this.queued = [], HH
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L518-L520` → after: `L748-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L748-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L748-L751) · [Before (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L518-L520)

```diff
-       constructor() {
-         let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, UU && this.reset()
+       takeAnswer() {
+         var HH;
+         const BH = null !== (HH = this.unanswered.shift()) && void 0 !== HH ? HH : null;
+         return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), BH
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L522-L523` → after: `L753-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L753-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L753-L754) · [Before (L522-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L522-L523)

```diff
-       reset() {
-         this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
+       clear() {
+         this.queued = [], this.unanswered = [], this.stopAnswerTimer()
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L525-L528` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L756-L757) · [Before (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L525-L528)

```diff
-       apply(UU) {
-         if (!UU) return;
-         const XU = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
-         this.enabled = XU ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = XU ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = XU ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = XU ? this.stencilMaterial. … [truncated]
+       stopAnswerTimer() {
+         null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L532-L560` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L761-L762) · [Before (L532-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L532-L560)

```diff
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = YU.ALWAYS, this.opStencilFail = YU.KEEP, this.opDepthFail = YU.KEEP, this.opStencilDepthPass = YU.REPLACE, this.backFunc = YU.ALWAYS, this.backOpStencilFail = YU.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(UU) {
-         this.func = UU
-       }
-       get stencilBackFunc() {
-         return this.backFunc
-       }
-       set stencilBackFunc(UU) {
- ... (13 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH, AH) {
+         this.confirmed = HH, this.picks = void 0, this.picks = new ZH(BH, LH, AH)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L562-L563` → after: `L764-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L764-L765) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L562-L563)

```diff
-       get stencilOpStencilFail() {
-         return this.opStencilFail
+       confirm(HH) {
+         this.confirmed = HH
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L565-L566` → after: `L767-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L767-L768) · [Before (L565-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L565-L566)

```diff
-       set stencilOpStencilFail(UU) {
-         this.opStencilFail = UU
+       getLastPending() {
+         return this.picks.getLastPending()
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L568-L569` → after: `L770-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L770-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L770-L772) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L568-L569)

```diff
-       get stencilOpDepthFail() {
-         return this.opDepthFail
+       getLatest() {
+         var HH;
+         return null !== (HH = this.getLastPending()) && void 0 !== HH ? HH : this.confirmed
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L571-L572` → after: `L774-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L774-L775) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L571-L572)

```diff
-       set stencilOpDepthFail(UU) {
-         this.opDepthFail = UU
+       TX() {
+         return this.picks.TX()
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L574-L575` → after: `L777-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L777-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L777-L780) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L574-L575)

```diff
-       get stencilOpStencilDepthPass() {
-         return this.opStencilDepthPass
+       pushLatest(HH) {
+         var BH;
+         const LH = null !== (BH = this.picks.getLastSent()) && void 0 !== BH ? BH : this.confirmed;
+         this.picks.dropWaiting() && HH === LH || this.picks.push(HH)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L577-L578` → after: `L782-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L782-L783) · [Before (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L577-L578)

```diff
-       set stencilOpStencilDepthPass(UU) {
-         this.opStencilDepthPass = UU
+       takeAnswer() {
+         this.picks.takeAnswer()
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L580-L581` → after: `L785-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L785-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L785-L786) · [Before (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L580-L581)

```diff
-       get stencilBackOpStencilFail() {
-         return this.backOpStencilFail
+       clear() {
+         this.picks.clear()
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L583-L584` → after: `L788-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L788-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L788-L795) · [Before (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L583-L584)

```diff
-       set stencilBackOpStencilFail(UU) {
-         this.backOpStencilFail = UU
+     }
+     class aH {
+       constructor(HH, BH, LH) {
+         this.closed = HH, this.AX = BH, this.menu = LH, this.view = void 0, this.dismiss = () => {
+           this.closePanel() && this.menu.dismiss()
+         }, this.onMenuClosed = () => {
+           this.closePanel()
+         }, this.view = HH
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L586-L587` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L797-L798) · [Before (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L586-L587)

```diff
-       get stencilBackOpDepthFail() {
-         return this.backOpDepthFail
+       getView() {
+         return this.view
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L589-L590` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L800-L801) · [Before (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L589-L590)

```diff
-       set stencilBackOpDepthFail(UU) {
-         this.backOpDepthFail = UU
+       show(HH) {
+         this.set(HH), this.menu.open(this)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L592-L593` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L803-L804) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L592-L593)

```diff
-       get stencilBackOpStencilDepthPass() {
-         return this.backOpStencilDepthPass
+       close() {
+         this.closePanel() && this.menu.close()
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L595-L596` → after: `L806-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L806-L807) · [Before (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L595-L596)

```diff
-       set stencilBackOpStencilDepthPass(UU) {
-         this.backOpStencilDepthPass = UU
+       set(HH) {
+         this.view = HH, this.AX(HH)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L598-L599` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L809-L810) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L598-L599)

```diff
-       get stencilMask() {
-         return this.mask
+       closePanel() {
+         return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L601-L602` → after: `L812-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L812-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L812-L842) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L601-L602)

```diff
-       set stencilMask(UU) {
-         this.mask = UU
+     }
+     const sH = "greenvilleDepotView",
+       JH = {
+         open: !1,
+         explosives: [],
+         picked: 0,
+         selected: 0,
+         level: 1,
+         line: "demolitionDepotIntro"
+       };
+     class iH extends aH {
+       constructor(HH, BH, LH, AH) {
+         super(JH, HH, BH), this.picks = void 0, this.select = HH => {
+           this.set({
+             ...this.getView(),
+             selected: HH
+ ... (15 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L604-L605` → after: `L844-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L844-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L844-L861) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L604-L605)

```diff
-       get stencilTest() {
-         return this.enabled
+       kX(HH) {
+         if ("openDepot" === HH[0]) {
+           const BH = HH[4];
+           BH && this.picks.takeAnswer();
+           const LH = this.getView();
+           if (BH && !LH.open) return;
+           this.picks.confirm(HH[2]);
+           const AH = this.picks.getLatest(),
+             rH = !LH.open;
+           this.show({
+             open: !0,
+             explosives: HH[1],
+             picked: AH,
+             selected: rH ? AH : LH.selected,
+             level: HH[3],
+             line: rH ? "demolitionDepotIntro" : LH.line
+ ... (2 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L607-L608` → after: `L863-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L863-L864) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L607-L608)

```diff
-       set stencilTest(UU) {
-         this.enabled = UU
+       dropPresses() {
+         this.picks.clear()
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L611-L616` → after: `L867-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L867-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L867-L872) · [Before (L611-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L611-L616)

```diff
-     YU.ALWAYS = 519, YU.KEEP = 7680, YU.REPLACE = 7681;
-     var NU = zU(41012),
-       IU = zU(40989),
-       pU = zU(40940),
-       aU = zU(40971),
-       tU = zU(40983);
+     var pH = LH(1315),
+       yH = LH(1455),
+       HB = LH(35006),
+       BB = LH(3639),
+       LB = LH(1967),
+       AB = LH(4941);
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L618-L631` → after: `L874-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L874-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L874-L883) · [Before (L618-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L618-L631)

```diff
-     function gU(UU, XU) {
-       if (XU) {
-         const {
-           requestAnimationFrame: zU
-         } = XU;
-         if ("function" === typeof zU) return zU(UU)
-       }
-       if ((0, aU.h)()) {
-         const {
-           requestAnimationFrame: zU
-         } = XU || window;
-         if ("function" === typeof zU) return zU(UU)
-       } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(UU);
-       return setTimeout(UU, 16)
+     function rB(HH) {
+       var BH;
+       let {
+         item: LH,
+         className: AH
+       } = HH;
+       return (0, UH.jsx)(LB.b, {
+         className: AH,
+         text: null !== (BH = (0, HB.displayNameOf)((0, BB.e)(LH))) && void 0 !== BH ? BH : LH
+       })
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1375-L1385` → after: `L887-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L887-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L887-L893) · [Before (L1375-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1375-L1385)

```diff
-       let XU = QU.get(UU);
-       if (!XU) {
-         if (!UU) return AU;
-         XU = {
-           _webGLVersion: UU.TEXTURE_BINDING_3D ? 2 : 1,
-           _context: UU,
-           parallelShaderCompile: UU.getExtension("KHR_parallel_shader_compile") || void 0,
-           cachedPipelines: {}
-         }, QU.set(UU, XU)
-       }
-       return XU
+       let {
+         item: BH
+       } = HH;
+       return (0, UH.jsx)(MH.e, {
+         itemName: BH,
+         amount: 0
+       })
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1389` → after: `L897-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L897-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L897-L939) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1389)

```diff
-       QU.delete(UU)
+       let {
+         open: BH,
+         onDismiss: LH,
+         title: AH,
+         className: rH,
+         headerExtra: SH,
+         tabs: hH,
+         status: tH,
+         children: zH
+       } = HH;
+       const CH = `${rH}Title`;
+       return (0, UH.jsx)(AB.b, {
+         show: BH,
+         close: LH,
+         togglePointerLock: !1,
+         ignorePressesAsShown: !0,
+ ... (27 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1392-L1395` → after: `L942-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L942-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L942-L967) · [Before (L1392-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1392-L1395)

```diff
-     function DU(UU, XU, zU, cU, yU, QU) {
-       const AU = FU(cU);
-       QU || (QU = AU._createShaderProgramInjection ?? NU);
-       return QU(UU, gU(XU, "vertex", cU, AU._contextWasLost), gU(zU, "fragment", cU, AU._contextWasLost), cU, yU, AU.validateShaderPrograms)
+     function tB(HH) {
+       let {
+         tabs: BH,
+         selected: LH,
+         onSelect: AH
+       } = HH;
+       return (0, UH.jsx)("nav", {
+         className: "GreenvilleBoardTabs",
+         "data-pad-tabs": "1",
+         children: BH.map((HH => {
+           const BH = HH.id === LH;
+           return (0, UH.jsxs)("button", {
+             type: "button",
+             className: uH()("GreenvilleBoardTab", {
+               Selected: BH
+             }),
+ ... (10 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1398-L1404` → after: `L970-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L970-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L970-L986) · [Before (L1398-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1398-L1404)

```diff
-     function EU(UU, XU, zU, cU, yU) {
-       let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         AU = arguments.length > 6 ? arguments[6] : void 0;
-       const oU = FU(yU);
-       AU || (AU = oU._createShaderProgramInjection ?? NU);
-       const DU = oU._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
-       return AU(UU, tU(XU, "vertex", cU, DU, yU, oU._contextWasLost), tU(zU, "fragment", cU, DU, yU, oU._contextWasLost), yU, QU, oU.validateShaderPrograms)
+     function zB(HH) {
+       let {
+         className: BH,
+         roomy: LH = !1,
+         children: AH
+       } = HH;
+       return (0, UH.jsx)("div", {
+         className: uH()("GreenvilleBoardTiles", BH, {
+           Roomy: LH
+         }),
+         style: LH ? {
+           "--tile-columns": (rH = tH.Children.count(AH), rH <= 3 ? rH : Math.min(4, Math.ceil(rH / 2)))
+         } : void 0,
+         "data-pad-select-on-focus": !0,
+         children: AH
+       });
+ ... (1 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1407-L1410` → after: `L989-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L989-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L989-L1015) · [Before (L1407-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1407-L1410)

```diff
-     function YU(UU, XU) {
-       const zU = new cU,
-         yU = FU(UU);
-       return yU.parallelShaderCompile && !yU.disableParallelShaderCompile && (zU.isParallelCompiled = !0), zU.context = yU._context, zU
+     function CB(HH) {
+       let {
+         icon: BH,
+         name: LH,
+         selected: AH,
+         locked: rH = !1,
+         className: SH,
+         onSelect: hH,
+         children: tH
+       } = HH;
+       return (0, UH.jsxs)("button", {
+         type: "button",
+         className: uH()("GreenvilleBoardTile", SH, {
+           Selected: AH,
+           Locked: rH
+         }),
+ ... (11 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1413-L1417` → after: `L1018-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1018-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1018-L1045) · [Before (L1413-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1413-L1417)

```diff
-     function NU(UU, XU, zU, cU) {
-       let yU = arguments.length > 5 ? arguments[5] : void 0;
-       const QU = cU.createProgram();
-       if (UU.program = QU, !QU) throw new Error("Unable to create program");
-       return cU.attachShader(QU, XU), cU.attachShader(QU, zU), cU.linkProgram(QU), UU.context = cU, UU.vertexShader = XU, UU.fragmentShader = zU, UU.isParallelCompiled || pU(UU, cU, yU), QU
+     function EB(HH) {
+       let {
+         icon: BH,
+         name: LH,
+         badges: AH,
+         children: rH
+       } = HH;
+       return (0, UH.jsxs)("section", {
+         className: "GreenvilleBoardDetail",
+         children: [(0, UH.jsxs)("header", {
+           className: "GreenvilleBoardDetailHeader",
+           children: [(0, UH.jsx)("span", {
+             className: "GreenvilleBoardDetailHero",
+             children: (0, UH.jsx)("span", {
+               className: "GreenvilleBoardDetailIcon",
+               children: BH
+ ... (12 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1420-L1424` → after: `L1048-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1048-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1048-L1062) · [Before (L1420-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1420-L1424)

```diff
-     function IU(UU, XU, zU) {
-       const cU = UU;
-       if (cU._isDisposed) return !1;
-       const yU = FU(XU);
-       return !!(yU && yU.parallelShaderCompile && yU.parallelShaderCompile.COMPLETION_STATUS_KHR && cU.program && XU.getProgramParameter(cU.program, yU.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (pU(cU, XU, zU), !0)
+     function XB(HH) {
+       let {
+         level: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, PH.B)();
+       return (0, UH.jsxs)("span", {
+         className: "GreenvilleBoardBadge Muted",
+         children: [(0, UH.jsx)(pH.c, {
+           name: "lock"
+         }), LH("greenvilleGame:boardLevelBadge", {
+           level: BH
+         })]
+       })
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1427-L1451` → after: `L1065-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1065-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1065-L1072) · [Before (L1427-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1427-L1451)

```diff
-     function pU(UU, XU, zU) {
-       const cU = UU.context,
-         yU = UU.vertexShader,
-         QU = UU.fragmentShader,
-         AU = UU.program;
-       if (!cU.getProgramParameter(AU, cU.LINK_STATUS)) {
-         if (!XU.getShaderParameter(yU, XU.COMPILE_STATUS)) {
-           const zU = XU.getShaderInfoLog(yU);
-           if (zU) throw UU.vertexCompilationError = zU, new Error("VERTEX SHADER " + zU)
-         }
-         if (!XU.getShaderParameter(QU, XU.COMPILE_STATUS)) {
-           const zU = XU.getShaderInfoLog(QU);
-           if (zU) throw UU.fragmentCompilationError = zU, new Error("FRAGMENT SHADER " + zU)
-         }
-         const zU = cU.getProgramInfoLog(AU);
-         if (zU) throw UU.programLinkError = zU, new Error(zU)
- ... (9 more removed lines; see GitHub link above)
+     function GB() {
+       const {
+         t: HH
+       } = (0, PH.B)();
+       return (0, UH.jsx)("span", {
+         className: "GreenvilleBoardBadge",
+         children: HH("greenvilleGame:demolitionDepotPicked")
+       })
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1454-L1461` → after: `L1075-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1075-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1075-L1086) · [Before (L1454-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1454-L1461)

```diff
-     function aU(UU, XU, zU, cU, yU, QU, AU, oU, YU) {
-       let NU = arguments.length > 10 ? arguments[10] : void 0,
-         IU = arguments.length > 11 ? arguments[11] : void 0,
-         pU = arguments.length > 12 ? arguments[12] : void 0;
-       const aU = FU(UU.context);
-       IU || (IU = aU.createRawShaderProgramInjection ?? DU), pU || (pU = aU.createShaderProgramInjection ?? EU);
-       const tU = UU;
-       tU.program = cU ? IU(tU, XU, zU, tU.context, YU) : pU(tU, XU, zU, oU, tU.context, YU), tU.program.__SPECTOR_rebuildProgram = AU, NU()
+     function YB(HH) {
+       let {
+         line: BH,
+         picked: LH,
+         level: AH
+       } = HH;
+       const rH = BH[3];
+       return (0, UH.jsxs)(UH.Fragment, {
+         children: [LH && (0, UH.jsx)(GB, {}), rH > AH && (0, UH.jsx)(XB, {
+           level: rH
+         })]
+       })
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1464-L1465` → after: `L1089-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1089-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1089-L1131) · [Before (L1464-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1464-L1465)

```diff
-     function tU(UU, XU, zU, cU, QU, AU) {
-       return gU((0, yU.d)(UU, zU, cU), XU, QU, AU)
+     function uB(HH) {
+       let {
+         view: BH,
+         controller: LH
+       } = HH;
+       const {
+         t: AH
+       } = (0, PH.B)(), rH = BH.selected, SH = BH.explosives[rH], [hH, tH, zH, CH, EH] = SH, XH = rH === BH.picked, GH = CH > BH.level;
+       return (0, UH.jsxs)(EB, {
+         icon: (0, UH.jsx)(SB, {
+           item: hH
+         }),
+         name: AH(`greenvilleGame:${tH}`),
+         badges: GH && (0, UH.jsx)(XB, {
+           level: CH
+         }),
+ ... (27 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1468-L1476` → after: `L1134-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1134-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1134-L1193) · [Before (L1468-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1468-L1476)

```diff
-     function gU(UU, XU, zU, cU) {
-       const yU = zU.createShader("vertex" === XU ? zU.VERTEX_SHADER : zU.FRAGMENT_SHADER);
-       if (!yU) {
-         let UU, yU = zU.NO_ERROR;
-         for (;
-           (UU = zU.getError()) !== zU.NO_ERROR;) yU = UU;
-         throw new Error(`Something went wrong while creating a gl ${XU} shader object. gl error=${yU}, gl isContextLost=${zU.isContextLost()}, _contextWasLost=${cU}`)
-       }
-       return zU.shaderSource(yU, UU), zU.compileShader(yU), yU
+     function QB(HH) {
+       let {
+         controller: BH
+       } = HH;
+       const LH = (0, xH.e)(sH, BH.getView()),
+         {
+           t: AH
+         } = (0, PH.B)();
+       return 0 === LH.explosives.length ? null : (0, UH.jsxs)(hB, {
+         open: LH.open,
+         onDismiss: BH.dismiss,
+         title: AH("greenvilleGame:demolitionDepotTitle"),
+         className: "GreenvilleDepotBoard",
+         headerExtra: (0, UH.jsx)("span", {
+           className: "GreenvilleBoardLevel",
+           children: AH("greenvilleGame:demolitionDepotLevel", {
+ ... (44 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1478-L1488` → after: `L1195-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1195-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1195-L1225) · [Before (L1478-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1478-L1488)

```diff
- 
-     function kU(UU, XU) {
-       XU.useProgram(UU)
-     }
- 
-     function GU(UU, XU) {
-       const zU = UU;
-       if (!zU.isParallelCompiled) return void XU(UU);
-       const cU = zU.onCompiled;
-       zU.onCompiled = () => {
-         cU?.(), XU(UU)
+     const WB = "greenvilleGarageView",
+       MB = {
+         open: !1,
+         cars: [],
+         out: null,
+         awaiting: !1,
+         selected: null,
+         line: "dealershipGarageIntro"
+       };
+     class xB extends aH {
+       constructor(HH, BH, LH, AH) {
+         super(MB, HH, BH), this.picks = void 0, this.select = HH => {
+           this.set({
+             ...this.getView(),
+             selected: HH
+           })
+ ... (15 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1490-L1504` → after: `L1227-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1227-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1227-L1246) · [Before (L1490-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1490-L1504)

```diff
-     }
-   },
-   40948: (UU, XU, zU) => {
-     zU.d(XU, {
-       ThinEngine: () => ZU
-     });
-     var cU = zU(40954),
-       yU = zU(40977),
-       QU = zU(41003),
-       AU = zU(41017),
-       FU = zU(39493),
-       oU = zU(40971);
-     class DU {
-       constructor() {
-         this.shaderLanguage = 0
+       kX(HH) {
+         if ("open" === HH[0]) {
+           var BH;
+           const LH = HH[3];
+           LH && this.picks.takeAnswer();
+           const AH = this.getView();
+           if (LH && !AH.open) return;
+           this.picks.confirm(HH[2]);
+           const rH = HH[1],
+             SH = this.picks.getLatest(),
+             hH = !AH.open;
+           this.show({
+             open: !0,
+             cars: rH,
+             out: SH,
+             awaiting: !this.picks.TX(),
+ ... (4 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1506-L1511` → after: `L1248-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1248-L1249) · [Before (L1506-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1506-L1511)

```diff
-       postProcessor(UU, XU, zU, cU, yU) {
-         if (yU.drawBuffersExtensionDisabled) {
-           const XU = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
-           UU = UU.replace(XU, "")
-         }
-         return UU
+       dropPresses() {
+         this.picks.clear()
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1514-L1526` → after: `L1252-L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1252-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1252-L1372) · [Before (L1514-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1514-L1526)

```diff
-     const EU = /(flat\s)?\s*varying\s*.*/;
-     class YU {
-       constructor() {
-         this.shaderLanguage = 0
-       }
-       attributeProcessor(UU) {
-         return UU.replace("attribute", "in")
-       }
-       varyingCheck(UU, XU) {
-         return EU.test(UU)
-       }
-       varyingProcessor(UU, XU) {
-         return UU.replace("varying", XU ? "in" : "out")
+ 
+     function vB() {
+       const {
+         t: HH
+       } = (0, PH.B)();
+       return (0, UH.jsx)("span", {
+         className: "GreenvilleBoardBadge",
+         children: HH("greenvilleGame:dealershipGarageOut")
+       })
+     }
+ 
+     function PB(HH) {
+       let {
+         car: BH,
+         out: LH,
+         awaiting: AH,
+ ... (105 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1528-L1537` → after: `L1374-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1374-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1374-L1386) · [Before (L1528-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1528-L1537)

```diff
-       postProcessor(UU, XU, zU) {
-         const cU = -1 !== UU.search(/#extension.+GL_EXT_draw_buffers.+require/);
-         if (UU = (UU = UU.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), zU) {
-           const zU = -1 !== UU.search(/layout *\(location *= *0\) *out/g),
-             yU = -1 !== XU.indexOf("#define DUAL_SOURCE_BLENDING"),
-             QU = yU ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
-           yU && (UU = "#extension GL_EXT_blend_func_extended : require\n" + UU), UU = (UU = (UU = (UU = (UU = (UU = (UU = UU.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_F … [truncated]
-         } else {
-           XU.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (UU = "invariant gl_Position;\n" + UU);
-           if (-1 !== XU.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + UU
+     }
+ 
+     function bB(HH, BH) {
+       return "sell" === BH.action ? function(HH, BH) {
+         let LH = HH.goldOwned;
+         const AH = HH.sellLines.map((HH => {
+           const [AH, rH, SH] = HH;
+           return null !== BH && BH !== AH ? HH : (LH += rH * SH, [AH, 0, SH])
+         }));
+         return {
+           ...HH,
+           goldOwned: LH,
+           sellLines: AH
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1539` → after: `L1388-L1411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1388-L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1388-L1411) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1539)

```diff
-         return UU
+       }(HH, BH.item) : "accept" === BH.action ? function(HH, BH) {
+         var LH;
+         const AH = HH.orders[BH];
+         return {
+           ...HH,
+           tracked: null !== (LH = HH.tracked) && void 0 !== LH ? LH : BH,
+           orders: HH.orders.map((HH => HH === AH ? {
+             ...HH,
+             XE: !0
+           } : HH)),
+           sellLines: HH.sellLines.map((HH => {
+             const [BH, LH, rH] = HH, SH = AH.items.find((HH => {
+               let [LH] = HH;
+               return LH === BH
+             }));
+             return void 0 === SH ? HH : [BH, Math.max(0, LH - SH[1]), rH]
+ ... (8 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1542-L1568` → after: `L1414-L1463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1414-L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1414-L1463) · [Before (L1542-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1542-L1568)

```diff
-     var NU = zU(41023),
-       IU = zU(41036),
-       pU = zU(41042),
-       aU = zU(40940),
-       tU = zU(40983),
-       gU = zU(40965),
-       kU = zU(41048),
-       GU = zU(41012);
-     class BU {}
-     class ZU extends QU.c {
-       get name() {
-         return this._name
-       }
-       set name(UU) {
-         this._name = UU
-       }
- ... (11 more removed lines; see GitHub link above)
+     const kB = "greenvilleLumberMillView",
+       mB = "greenvilleLumberTrackerView";
+     class oB extends aH {
+       constructor(HH, BH, LH, AH, SH) {
+         super(VB, HH, LH), this.publishTracker = BH, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = UB, this.selectTab = HH => {
+           this.tab = HH, this.set({
+             ...this.getView(),
+             tab: HH
+           })
+         }, this.selectOrder = HH => {
+           this.selectedSlot = HH, this.set({
+             ...this.getView(),
+             selectedSlot: HH
+           })
+         }, this.selectWood = HH => {
+           this.selectedWood = HH, this.set({
+ ... (34 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1570-L1571` → after: `L1465-L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1465-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1465-L1466) · [Before (L1570-L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1570-L1571)

```diff
-       get needPOTTextures() {
-         return this._webGLVersion < 2 || this.forcePOTTextures
+       getTracker() {
+         return this.tracker
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1573-L1574` → after: `L1468-L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1468-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1468-L1530) · [Before (L1573-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1573-L1574)

```diff
-       get _supportsHardwareTextureRescaling() {
-         return !1
+       kX(HH) {
+         if ("open" === HH[0]) {
+           const LH = HH[6],
+             AH = LH ? this.commands.takeAnswer() : null,
+             rH = !this.getView().open;
+           if (LH && rH) return;
+           if (rH) this.onReopened(HH);
+           else if (null !== AH) {
+             var BH;
+             this.line = null !== (BH = function(HH, BH, LH) {
+               if ("deliver" === HH.action) {
+                 const [, AH] = BH[1][HH.slot];
+                 return LH[1][HH.slot][5] ? null : {
+                   kind: "delivered",
+                   titleKey: AH
+                 }
+ ... (47 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1576-L1577` → after: `L1532-L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1532-L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1532-L1533) · [Before (L1576-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1576-L1577)

```diff
-       snapshotRenderingReset() {
-         this.snapshotRendering = !1
+       queue(HH) {
+         this.commands.push(HH), this.set(this.getBoardView())
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1579-L1610` → after: `L1535-L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1535-L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1535-L1615) · [Before (L1579-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1579-L1610)

```diff
-       constructor(UU, XU, zU, cU) {
-         if (zU = zU || {}, super(XU ?? zU.antialias, zU, cU), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], th … [truncated]
-         let QU;
-         if (UU.getContext) {
-           if (QU = UU, void 0 === zU.preserveDrawingBuffer && (zU.preserveDrawingBuffer = !1), void 0 === zU.xrCompatible && (zU.xrCompatible = !1), navigator && navigator.userAgent) {
-             this._setupMobileChecks();
-             const UU = navigator.userAgent;
-             for (const XU of ZU.ExceptionList) {
-               const cU = XU.key,
-                 yU = XU.targets;
-               if (new RegExp(cU).test(UU)) {
-                 if (XU.capture && XU.captureConstraint) {
-                   const zU = XU.capture,
-                     cU = XU.captureConstraint,
-                     yU = new RegExp(zU).exec(UU);
-                   if (yU && yU.length > 0) {
- ... (16 more removed lines; see GitHub link above)
+     }
+     var IB = LH(1365),
+       fB = LH(2051);
+     const lB = "Gold Coin";
+ 
+     function KB(HH) {
+       let {
+         amount: BH,
+         item: LH = lB,
+         LX: AH,
+         inTile: rH = !1,
+         iconRef: SH
+       } = HH;
+       return (0, UH.jsx)(IB.g, {
+         delayShow: 200,
+         hoverOnly: rH,
+ ... (65 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1612-L1629` → after: `L1617-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1617-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1617-L1685) · [Before (L1612-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1612-L1629)

```diff
-             }
-           }
-           if (this._doNotHandleContextLost ? this._onContextLost = () => {
-               (0, yU.y)(this._gl)
-             } : (this._onContextLost = UU => {
-               UU.preventDefault(), this._contextWasLost = !0, (0, yU.y)(this._gl), FU.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
-             }, this._onContextRestored = () => {
-               this._restoreEngineAfterContextLost((() => this._initGLContext()))
-             }, QU.addEventListener("webglcontextrestored", this._onContextRestored, !1), zU.powerPreference = zU.powerPreference || "high-performance"), QU.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (zU.xrCompatible = !1), !zU.disableWebG … [truncated]
-             this._gl = QU.getContext("webgl2", zU) || QU.getContext("experimental-webgl2", zU), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
-           } catch (EU) {}
-           if (!this._gl) {
-             if (!QU) throw new Error("The provided canvas is null or undefined.");
-             try {
-               this._gl = QU.getContext("webgl", zU) || QU.getContext("experimental-webgl", zU)
-             } catch (EU) {
- ... (2 more removed lines; see GitHub link above)
+             })
+           })]
+         })]
+       })
+     }
+ 
+     function eB(HH) {
+       let {
+         gold: BH,
+         children: LH
+       } = HH;
+       const AH = (0, tH.useRef)(null);
+       var rH;
+       return rH = AH, (0, tH.useLayoutEffect)((() => {
+         const HH = rH.current;
+         return nH = HH, () => {
+ ... (53 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1631-L1645` → after: `L1687-L2141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L1687-L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L1687-L2141) · [Before (L1631-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1631-L1645)

```diff
-             }
-           }
-           if (!this._gl) throw new Error("WebGL not supported")
-         } else {
-           this._gl = UU, QU = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
-           const XU = this._gl.getContextAttributes();
-           XU && (zU.stencil = XU.stencil)
-         }
-         this._sharedInit(QU), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== zU.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = zU.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
-         for (let yU = 0; yU < this._caps.maxVertexAttribs; yU++) this._currentBufferPointers[yU] = new BU;
-         this._shaderProcessor = this.Fa > 1 ? new YU : new DU;
-         const AU = `Babylon.js v${ZU.Version}`;
-         FU.b.Log(AU + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", AU);
-         const oU = (0, yU.A)(this._gl);
-         oU.validateShaderPrograms = this.validateShaderPrograms, oU.parallelShaderCompile = this._caps.parallelShaderCompile
+             }), (0, UH.jsx)(rB, {
+               item: BH,
+               className: "GreenvilleLumberNeedName"
+             }), (0, UH.jsxs)("span", {
+               className: "GreenvilleLumberNeedCount",
+               children: [Math.min(AH, LH).toLocaleString(), "/", LH.toLocaleString()]
+             }), (0, UH.jsx)("span", {
+               className: "GreenvilleLumberNeedTick",
+               "aria-hidden": "true",
+               children: rH && "\u2713"
+             })]
+           }, BH)
+         }))
+       })
+     }
+ 
+ ... (439 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1647-L1648` → after: `L2143-L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2143-L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2143-L2158) · [Before (L1647-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1647-L1648)

```diff
-       _clearEmptyResources() {
-         this._dummyFramebuffer = null, super._clearEmptyResources()
+       kX(HH) {
+         if ("close" !== HH[0]) {
+           const [, BH, LH, AH] = HH, rH = "open" === HH[0] && HH[4];
+           rH && this.sales.takeAnswer();
+           const SH = this.getView();
+           if ((rH || "refresh" === HH[0]) && !SH.open) return;
+           this.serverLines = BH;
+           const hH = BH.findIndex((HH => HH[4] > 0));
+           this.show({
+             open: !0,
+             lines: this.getLines(),
+             selected: SH.open ? SH.selected : Math.max(0, hH),
+             level: LH,
+             goldOwned: AH
+           })
+         } else this.close()
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1650-L1651` → after: `L2160-L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2160-L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2160-L2161) · [Before (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1650-L1651)

```diff
-       _getShaderProcessingContext(UU) {
-         return null
+       dropPresses() {
+         this.sales.clear()
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1653-L1657` → after: `L2163-L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2163-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2163-L2168) · [Before (L1653-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1653-L1657)

```diff
-       areAllEffectsReady() {
-         for (const UU in this._compiledEffects) {
-           if (!this._compiledEffects[UU].isReady()) return !1
-         }
-         return !0
+       getLines() {
+         const HH = this.sales.getPending();
+         return this.serverLines.map((BH => {
+           const [LH, AH, rH, SH, , hH] = BH;
+           return HH.some((HH => null === HH || HH === LH)) ? [LH, AH, rH, SH, 0, hH] : BH
+         }))
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1659-L1777` → after: `L2170-L2265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2170-L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2170-L2265) · [Before (L1659-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1659-L1777)

```diff
-       _initGLContext() {
-         this._caps = {
-           maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
-           maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
-           maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
-           maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
-           maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
-           maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
-           maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
-           maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
-           maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
-           maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
-           maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
-           shaderFloatPrecision: 0,
-           parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
-           standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
- ... (103 more removed lines; see GitHub link above)
+     }
+ 
+     function yB(HH) {
+       let {
+         line: BH,
+         level: LH
+       } = HH;
+       const {
+         t: AH
+       } = (0, PH.B)(), [, , , rH, SH, hH] = BH;
+       return (0, UH.jsxs)(UH.Fragment, {
+         children: [SH > 0 && (0, UH.jsx)("span", {
+           className: "GreenvilleBoardBadge",
+           children: AH("greenvilleGame:oreBuyerHeld", {
+             count: SH
+           })
+ ... (80 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1779-L1787` → after: `L2267-L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2267-L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2267-L2380) · [Before (L1779-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1779-L1787)

```diff
-           }
-           if (this._creationOptions) {
-             const UU = this._creationOptions.forceSRGBBufferSupportState;
-             void 0 !== UU && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && UU)
-           }
-         }
-         this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
-         for (let zU = 0; zU < this._maxSimultaneousTextures; zU++) this._nextFreeTextureSlots.push(zU);
-         "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
+           }), (0, UH.jsx)("p", {
+             className: "GreenvilleBoardDescription",
+             children: AH("greenvilleGame:oreBuyerTip")
+           })]
+         }), (0, UH.jsxs)("div", {
+           className: "GreenvilleBoardActions",
+           children: [(0, UH.jsxs)(yH.u, {
+             disabled: 0 === CH,
+             onClick: () => {
+               LH.sell(SH)
+             },
+             children: [CH > 0 && AH("greenvilleGame:oreBuyerSell", {
+               count: CH
+             }), 0 === CH && AH("greenvilleGame:oreBuyerSellNone")]
+           }), (0, UH.jsx)(yH.i, {
+             disabled: !GH,
+ ... (98 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1789-L1816` → after: `L2382-L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2382-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2382-L2410) · [Before (L1789-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1789-L1816)

```diff
-       _initFeatures() {
-         this._features = {
-           forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
-           supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
-           supportDepthStencilTexture: 1 !== this._webGLVersion,
-           supportShadowSamplers: 1 !== this._webGLVersion,
-           uniformBufferHardCheckMatrix: !1,
-           allowTexturePrefiltering: 1 !== this._webGLVersion,
-           trackUbosInFrame: !1,
-           checkUbosContentBeforeUpload: !1,
-           supportCSM: 1 !== this._webGLVersion,
-           basisNeedsPOT: 1 === this._webGLVersion,
-           support3DTextures: 1 !== this._webGLVersion,
-           needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
-           supportMSAA: 1 !== this._webGLVersion,
-           supportSSAO2: 1 !== this._webGLVersion,
- ... (12 more removed lines; see GitHub link above)
+     }
+ 
+     function hL(HH, BH) {
+       let [, , LH, AH] = HH;
+       return BH ? LH : LH - AH
+     }
+ 
+     function tL(HH, BH) {
+       let [LH, AH] = HH;
+       return LH === BH.item && null !== AH === BH.golden
+     }
+ 
+     function zL(HH, BH) {
+       return (BH.golden ? HH.goldenLines : HH.sellLines).find((HH => tL(HH, BH)))
+     }
+ 
+ ... (13 more added lines; see GitHub link above)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1818-L1834` → after: `L2412-L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2412-L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2412-L2439) · [Before (L1818-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1818-L1834)

```diff
-       }
-       get Fa() {
-         return this._webGLVersion
-       }
-       getClassName() {
-         return "ThinEngine"
-       }
-       _prepareWorkingCanvas() {
-         if (this._workingCanvas) return;
-         this._workingCanvas = this.createCanvas(1, 1);
-         const UU = this._workingCanvas.getContext("2d");
-         UU && (this._workingContext = UU)
-       }
-       getInfo() {
-         return this.getGlInfo()
-       }
- ... (1 more removed lines; see GitHub link above)
+       }(HH, BH.kind, BH.all)) : "accept" === BH.action ? function(HH, BH) {
+         var LH;
+         const {
+           needs: AH
+         } = HH.orders[BH], rH = HH => {
+           const [BH, LH, rH, SH, hH] = HH, tH = XL(AH, HH);
+           return tH ? [BH, LH, rH, Math.min(rH, SH + tH[2]), hH] : HH
+         };
+         return {
+           ...HH,
+           tracked: null !== (LH = HH.tracked) && void 0 !== LH ? LH : BH,
+           orders: HH.orders.map((HH => HH.slot === BH ? {
+             ...HH,
+             XE: !0
+           } : HH)),
+           sellLines: HH.sellLines.map(rH),
+ ... (12 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1836-L1838` → after: `L2441-L2444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2441-L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2441-L2444) · [Before (L1836-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1836-L1838)

```diff
-           vendor: this._glVendor,
-           renderer: this._glRenderer,
-           version: this._glVersion
+           ...HH,
+           sellLines: HH.sellLines.map(AH),
+           goldenLines: EL(HH.goldenLines.map(AH)),
+           delivering: [...HH.delivering, BH]
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1840-L7744` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2446) · [Before (L1840-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L1840-L7744)

```diff
-       }
-       extractDriverInfo() {
-         const UU = this.getGlInfo();
-         return UU && UU.renderer ? UU.renderer : ""
-       }
-       getRenderWidth() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
-       }
-       getRenderHeight() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
-       }
-       clear(UU, XU, zU) {
-         let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
-         const QU = this.stencilStateComposer.useStencilGlobalOnly;
-         this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = QU;
- ... (5889 more removed lines; see GitHub link above)
+       }(HH, BH.slot))
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L7746-L7753` → after: `L2448-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2448-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2448-L2453) · [Before (L7746-L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L7746-L7753)

```diff
-     JU._UniqueIdCounter = 1;
-     var jU = zU(41152),
-       KU = zU(41293),
-       bU = zU(37827);
-     class TU {
-       constructor() {
-         this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
-       }
+ 
+     function EL(HH) {
+       return HH.filter((HH => {
+         let [, , BH] = HH;
+         return BH > 0
+       }))
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L7755-L8218` → after: `L2455-L2481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2455-L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2455-L2481) · [Before (L7755-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L7755-L8218)

```diff
-     var hU, UX, XX, zX, cX, yX, QX, AX, FX, oX, DX, EX, YX, NX, IX, pX, aX, tX, gX, kX, GX, BX, ZX, RX, PX, WX, dX, LX, eX, CX, wX, qX, OX, SX, rX, uX, fX, iX, HX, MX, vX, VX, sX, nX, mX, lX, xX, JX, jX, KX, bX, TX, hX, Uz = zU(39493),
-       Xz = zU(37863);
-     const zz = new EU.t,
-       cz = new EU.t;
-     var yz;
-     ! function(UU) {
-       UU[UU.BackwardCompatible = 0] = "BackwardCompatible", UU[UU.Intermediate = 1] = "Intermediate", UU[UU.Aggressive = 2] = "Aggressive"
-     }(yz || (yz = {}));
-     class Qz {
-       static DefaultMaterialFactory(UU) {
-         throw (0, ZU.m)("StandardMaterial")
-       }
-       static CollisionCoordinatorFactory() {
-         throw (0, ZU.m)("DefaultCollisionCoordinator")
-       }
-       get clearColor() {
- ... (448 more removed lines; see GitHub link above)
+ 
+     function XL(HH, BH) {
+       let [LH, AH] = BH;
+       return HH.find((HH => {
+         let [BH, rH] = HH;
+         return BH === LH && rH === AH
+       }))
+     }
+ 
+     function GL(HH) {
+       const BH = (BH, LH) => {
+           const AH = (null === LH ? HH.sellLines : HH.goldenLines).find((HH => {
+             let [LH] = HH;
+             return LH === BH
+           }));
+           return AH ? AH[2] : 0
+ ... (11 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8220-L8347` → after: `L2483-L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2483-L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2483-L2486) · [Before (L8220-L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8220-L8347)

```diff
-         }
-         for (UU = 0; UU < this.geometries.length; UU++) {
-           2 === this.geometries[UU].delayLoadState && (yU = !1)
-         }
-         if (this.activeCameras && this.activeCameras.length > 0)
-           for (const QU of this.activeCameras) QU.isReady(!0) || (yU = !1);
-         else this.activeCamera && (this.activeCamera.isReady(!0) || (yU = !1));
-         for (const QU of this.nB) QU.isReady() || (yU = !1);
-         if (this.proceduralTexturesEnabled)
-           for (const QU of this.proceduralTextures) QU.isReady() || (yU = !1);
-         if (this.layers)
-           for (const QU of this.layers) QU.isReady() || (yU = !1);
-         if (this.effectLayers)
-           for (const QU of this.effectLayers) QU.isLayerReady() || (yU = !1);
-         for (const QU of this._isReadyChecks) QU.isReady() || (yU = !1);
-         return zU.areAllEffectsReady() || (yU = !1), zU.currentRenderPassId = cU, yU
- ... (112 more removed lines; see GitHub link above)
+         }));
+       return {
+         ...HH,
+         orders: LH
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8349-L8356` → after: `L2488-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2488-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2488-L2557) · [Before (L8349-L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8349-L8356)

```diff
-       UyU(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (!this._blockEntityCollection && (this.meshes.push(UU), UU._resyncLightSources(), UU.parent || UU._addToSceneRootNodes(), yU.e.SetImmediate((() => {
-             this.onNewMeshAddedObservable.notifyObservers(UU)
-           })), XU)) {
-           const XU = UU.getChildMeshes();
-           for (const UU of XU) this.UyU(UU)
-         }
+     }
+ 
+     function YL(HH) {
+       let [, , , BH, LH] = HH;
+       return [...BH, ...LH].reduce(((HH, BH) => {
+         let [, , LH] = BH;
+         return HH + LH
+       }), 0)
+     }
+     const uL = "greenvilleFarmBoardView",
+       QL = "greenvilleFarmTrackerView",
+       WL = {
+         open: !1,
+         orders: [],
+         tracked: null,
+         sellLines: [],
+ ... (54 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8359-L8618` → after: `L2560-L2605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2560-L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2560-L2605) · [Before (L8359-L8618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8359-L8618)

```diff
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const zU = this.meshes.indexOf(UU);
-         if (-1 !== zU && (this.meshes.splice(zU, 1), UU.parent || UU._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(UU), this.onMeshRemovedObservable.notifyObservers(UU), XU) {
-           const XU = UU.getChildMeshes();
-           for (const UU of XU) this.ZH(UU)
-         }
-         return zU
-       }
-       addTransformNode(UU) {
-         this._blockEntityCollection || UU.nS() === this && -1 !== UU._indexInSceneTransformNodesArray || (UU._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(UU), UU.parent || UU._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable … [truncated]
-       }
-       removeTransformNode(UU) {
-         const XU = UU._indexInSceneTransformNodesArray;
-         if (-1 !== XU) {
-           if (XU !== this.transformNodes.length - 1) {
-             const UU = this.transformNodes[this.transformNodes.length - 1];
- ... (244 more removed lines; see GitHub link above)
+         if ("open" === HH[0]) {
+           const LH = HH[7],
+             AH = LH ? this.commands.takeAnswer() : null,
+             rH = !this.getView().open;
+           if (LH && rH) return;
+           const SH = this.board;
+           if (this.board = HH, rH) this.onReopened();
+           else if (null !== AH) {
+             var BH;
+             this.line = null !== (BH = function(HH, BH, LH) {
+               const AH = LH[6] - BH[6];
+               if (AH <= 0) return null;
+               if ("deliver" === HH.action) return {
+                 kind: "delivered",
+                 nameKey: BH[1][HH.slot][1],
+                 gold: AH
+ ... (30 more added lines; see GitHub link above)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8620-L8624` → after: `L2607-L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2607-L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2607-L2629) · [Before (L8620-L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8620-L8624)

```diff
-       getBoneByName(UU) {
-         for (let XU = 0; XU < this.skeletons.length; XU++) {
-           const zU = this.skeletons[XU];
-           for (let XU = 0; XU < zU.bones.length; XU++)
-             if (zU.bones[XU].name === UU) return zU.bones[XU]
+       toView(HH) {
+         let [, BH, LH, AH, rH, SH, hH] = HH;
+         return {
+           open: !0,
+           orders: BH.map(SL),
+           tracked: LH,
+           sellLines: AH,
+           goldenLines: rH,
+           level: SH,
+           goldOwned: hH,
+           delivering: [],
+           tab: this.tab,
+           selectedOrder: this.selectedOrder,
+           selectedProduce: this.selectedProduce,
+           line: this.line
+         }
+ ... (7 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8628-L8631` → after: `L2632-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2632-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2632-L2634) · [Before (L8628-L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8628-L8631)

```diff
-       getLightByName(UU) {
-         for (let XU = 0; XU < this.lights.length; XU++)
-           if (this.lights[XU].name === UU) return this.lights[XU];
-         return null
+       settleView() {
+         const HH = this.getBoardView();
+         return this.commands.TX() && (this.selectedProduce = HH.selectedProduce), HH
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8633-L8679` → after: `L2636-L2650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2636-L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2636-L2650) · [Before (L8633-L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8633-L8679)

```diff
-       getLightById(UU) {
-         for (let XU = 0; XU < this.lights.length; XU++)
-           if (this.lights[XU].id === UU) return this.lights[XU];
-         return null
-       }
-       getLightByUniqueId(UU) {
-         for (let XU = 0; XU < this.lights.length; XU++)
-           if (this.lights[XU].uniqueId === UU) return this.lights[XU];
-         return null
-       }
-       getParticleSystemById(UU) {
-         for (let XU = 0; XU < this.nB.length; XU++)
-           if (this.nB[XU].id === UU) return this.nB[XU];
-         return null
-       }
-       getGeometryById(UU) {
- ... (31 more removed lines; see GitHub link above)
+       pickProduce(HH) {
+         var BH, LH;
+         const AH = this.selectedProduce;
+         if (AH && zL(HH, AH)) return AH;
+         if (AH) return {
+           item: AH.item,
+           golden: !1
+         };
+         const [rH, SH] = null !== (BH = null !== (LH = HH.goldenLines[0]) && void 0 !== LH ? LH : HH.sellLines.find((HH => {
+           let [, , BH] = HH;
+           return BH > 0
+         }))) && void 0 !== BH ? BH : HH.sellLines[0];
+         return {
+           item: rH,
+           golden: null !== SH
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8701-L8704` → after: `L2653-L2654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2653-L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2653-L2654) · [Before (L8701-L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8701-L8704)

```diff
-       getTransformNodeByUniqueId(UU) {
-         for (let XU = 0; XU < this.transformNodes.length; XU++)
-           if (this.transformNodes[XU].uniqueId === UU) return this.transformNodes[XU];
-         return null
+       queue(HH) {
+         this.commands.push(HH), this.set(this.getBoardView())
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8706-L8708` → after: `L2656-L2767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2656-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2656-L2767) · [Before (L8706-L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8706-L8708)

```diff
-       getTransformNodesById(UU) {
-         return this.transformNodes.filter((function(XU) {
-           return XU.id === UU
+     }
+     var xL = LH(1344);
+ 
+     function vL() {
+       const HH = (0, tH.useRef)(null);
+       return (0, xL.d)(HH), (0, UH.jsx)("span", {
+         ref: HH,
+         className: "GreenvilleFarmSparkle",
+         "aria-hidden": "true"
+       })
+     }
+ 
+     function PL(HH) {
+       let {
+         item: BH,
+         golden: LH
+ ... (96 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8710-L8876` → after: `L2769-L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L2769-L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L2769-L3060) · [Before (L8710-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8710-L8876)

```diff
-       }
-       getMeshByUniqueId(UU) {
-         for (let XU = 0; XU < this.meshes.length; XU++)
-           if (this.meshes[XU].uniqueId === UU) return this.meshes[XU];
-         return null
-       }
-       getLastMeshById(UU) {
-         for (let XU = this.meshes.length - 1; XU >= 0; XU--)
-           if (this.meshes[XU].id === UU) return this.meshes[XU];
-         return null
-       }
-       getLastTransformNodeById(UU) {
-         for (let XU = this.transformNodes.length - 1; XU >= 0; XU--)
-           if (this.transformNodes[XU].id === UU) return this.transformNodes[XU];
-         return null
-       }
- ... (151 more removed lines; see GitHub link above)
+       })
+     }
+ 
+     function oL(HH) {
+       let {
+         order: BH,
+         inTile: LH = !1
+       } = HH;
+       const {
+         t: AH
+       } = (0, PH.B)();
+       return (0, UH.jsxs)("span", {
+         className: "GreenvilleFarmReward",
+         children: [(0, UH.jsx)(KB, {
+           amount: BH.gold,
+           inTile: LH
+ ... (276 more added lines; see GitHub link above)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8879-L8932` → after: `L3207-L3208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3207-L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3207-L3208) · [Before (L8879-L8932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8879-L8932)

```diff
-       _isInIntermediateRendering() {
-         return this._intermediateRendering
-       }
-       _isInRenderingMeshEvaluation() {
-         return this._renderingMeshEvaluationDepth > 0
-       }
-       freezeActiveMeshes() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           XU = arguments.length > 1 ? arguments[1] : void 0,
-           zU = arguments.length > 2 ? arguments[2] : void 0,
-           cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-           QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (this.frameGraph) {
-           this._renderWithFrameGraph(!0, !1, !0);
-           const AU = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
-           for (const UU of AU) UU.objectRenderer._freezeActiveMeshes(cU);
- ... (38 more removed lines; see GitHub link above)
+       getPlace() {
+         return this.place
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8934-L8935` → after: `L3210-L3211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3210-L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3210-L3211) · [Before (L8934-L8935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8934-L8935)

```diff
-       _executeActiveContainerCleanup(UU) {
-         (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => UU.dispose()))
+       getMood() {
+         return this.mood
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8937-L8983` → after: `L3213-L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3213-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3213-L3291) · [Before (L8937-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8937-L8983)

```diff
-       _evaluateActiveMeshes() {
-         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._acti … [truncated]
-         if (this._activeMeshesFrozen && this._activeMeshes.length) {
-           if (!this._skipEvaluateActiveMeshesCompletely) {
-             const UU = this._activeMeshes.length;
-             for (let XU = 0; XU < UU; XU++) {
-               this._activeMeshes.data[XU].computeWorldMatrix()
-             }
-           }
-           if (this._activeParticleSystems) {
-             const UU = this._activeParticleSystems.length;
-             for (let XU = 0; XU < UU; XU++) this._activeParticleSystems.data[XU].animate()
-           }
-           return void this._renderingManager.resetSprites()
-         }
-         if (!this.activeCamera) return;
- ... (31 more removed lines; see GitHub link above)
+       kX(HH) {
+         const BH = performance.now();
+         switch (HH[0]) {
+           case "hudMood": {
+             const [, LH, AH, rH, SH, hH, tH] = HH;
+             return this.mood = {
+               energy: LH,
+               earningsPercent: AH,
+               breakEvenEnergy: rH,
+               restedEndsAt: SH > 0 ? BH + SH : 0,
+               adBoosted: hH,
+               luckPercent: tH
+             }, void this.publishMood(this.mood)
+           }
+           case "hudTown": {
+             const [BH, LH, AH] = HH;
+ ... (63 more added lines; see GitHub link above)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8988-L8989` → after: `L3296-L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3296-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3296-L3299) · [Before (L8988-L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8988-L8989)

```diff
-       _prepareSkeleton(UU) {
-         this._skeletonsEnabled && UU.skeleton && (this._activeSkeletons.pushNoDuplicate(UU.skeleton) && (UU.skeleton.prepare(), this._activeBones.addCount(UU.skeleton.bones.length, !1)), UU.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(UU) && this.frameG … [truncated]
+       getRunStart(HH) {
+         var BH;
+         const LH = "hudHome" === (null === (BH = this.place) || void 0 === BH ? void 0 : BH.kind) ? this.place.runStartedAt : null;
+         return null !== LH && Math.abs(LH - HH) < 500 ? LH : HH
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L8991-L9000` → after: `L3301-L3319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3301-L3319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3301-L3319) · [Before (L8991-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L8991-L9000)

```diff
-       _activeMesh(UU, XU) {
-         this._prepareSkeleton(XU);
-         let zU = UU.jyU || UU.UH || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || XU.Op;
-         if (XU && XU.uB && XU.uB.length > 0) {
-           const cU = this.getActiveSubMeshCandidates(XU),
-             yU = cU.length;
-           zU = zU || 1 === yU;
-           for (let QU = 0; QU < yU; QU++) {
-             const yU = cU.data[QU];
-             this._evaluateSubMesh(yU, XU, UU, zU)
+     }
+ 
+     function FL(HH) {
+       switch (HH[0]) {
+         case "hudTier":
+           return {
+             kind: HH[0], tierKey: HH[1], locked: HH[2]
+           };
+         case "hudBay":
+           return {
+             kind: HH[0], materialKey: HH[1], objectKey: HH[2], percent: HH[3]
+           };
+         case "hudBayEmpty":
+           return {
+             kind: HH[0]
+           };
+ ... (3 more added lines; see GitHub link above)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9024-L9062` → after: `L3322-L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3322-L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3322-L3427) · [Before (L9024-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9024-L9062)

```diff
-       _renderForCamera(UU, XU) {
-         let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         if (UU && UU._skipRendering) return;
-         const yU = this._engine;
-         if (this._activeCamera = UU, !this.activeCamera) throw new Error("Active camera not set");
-         if (yU.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && zU) {
-           let XU = !0;
-           UU._renderingMultiview && UU.outputRenderTarget && (XU = UU.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, UU.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), UU._renderingMultiview &&  … [truncated]
-         }
-         this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = UU.outputRenderTarget?.renderPassId ?? UU.renderPassId ?? 0, this._evaluateActiveMeshes();
-         for (let cU = 0; cU < this._softwareSkinnedMeshes.length; cU++) {
-           const UU = this._softwareSkinnedMeshes.data[cU];
-           UU.applySkeleton(UU.skeleton)
-         }
-         this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), UU.customRenderTargets && UU.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(UU.customRenderTargets), XU  … [truncated]
-         for (let cU = 0, FU = this._gatherActiveCameraRenderTargetsStage; cU < FU.length; cU++) {
- ... (23 more removed lines; see GitHub link above)
+     }
+     var DL = LH(3770),
+       wL = LH(1204),
+       ZL = LH(176);
+     const dL = JSON.parse('{"e":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","sk … [truncated]
+       aL = ZL.g.xX,
+       sL = 1e3 * aL,
+       JL = aL,
+       iL = JL + 2 * aL,
+       pL = 4 * iL + JL;
+ 
+     function yL(HH, BH, LH) {
+       return BH >= HH.x0 && BH <= HH.x1 && LH >= HH.z0 && LH <= HH.z1
+     }
+     const HA = dL.f,
+       BA = Object.fromEntries(Object.entries(dL.e).map((HH => {
+ ... (90 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9064` → after: `L3429-L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3429-L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3429-L3453) · [Before (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9064)

```diff
-             XU && UU && (XU.renderList.data = UU, XU.renderList.length = UU.length)
+           }(HH, BH.place);
+           return {
+             key: `place|${LH}`,
+             name: LH,
+             eyebrow: null
+           }
+         }
+         case "hudHome": {
+           const LH = BH.isOwner ? HH("greenvilleGame:placeYourHouse") : HH("greenvilleGame:homePlayersHouse", {
+               player: (0, wL.f)(BH.ownerName, AH)
+             }),
+             rH = `home|${BH.ownerName}|${BH.houseName}`;
+           return null === BH.houseName ? {
+             key: rH,
+             name: LH,
+             eyebrow: null
+ ... (9 more added lines; see GitHub link above)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9087-L9093` → after: `L3456-L3680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3456-L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3456-L3680) · [Before (L9087-L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9087-L9093)

```diff
-       _processSubCameras(UU) {
-         let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (0 === UU.cameraRigMode || UU._renderingMultiview) return UU._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(UU, void 0, XU), void this.onAfterRenderCameraObservable.notifyObservers(UU);
-         if (UU._useMultiviewToSingleView) this._renderMultiviewToSingleView(UU);
-         else {
-           this.onBeforeCameraRenderObservable.notifyObservers(UU);
-           for (let XU = 0; XU < UU._rigCameras.length; XU++) this._renderForCamera(UU._rigCameras[XU], UU)
+     }
+ 
+     function tA(HH) {
+       let {
+         controller: BH,
+         children: LH
+       } = HH;
+       (0, xH.e)(RL, null);
+       const [AH, rH] = (0, tH.useState)(null);
+       (0, DL.h)(AH, ".RightElements");
+       const SH = BH.getPlace();
+       return (0, UH.jsx)(WH.e, {
+         placement: "topRight",
+         children: (0, UH.jsx)("div", {
+           className: "GreenvilleHudColumn",
+           children: (0, UH.jsxs)("div", {
+ ... (209 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9097-L9114` → after: `L3683-L3684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3683-L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3683-L3684) · [Before (L9097-L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9097-L9114)

```diff
-       _checkIntersections() {
-         for (let UU = 0; UU < this._meshesForIntersections.length; UU++) {
-           const XU = this._meshesForIntersections.data[UU];
-           if (XU.actionManager)
-             for (let UU = 0; XU.actionManager && UU < XU.actionManager.actions.length; UU++) {
-               const zU = XU.actionManager.actions[UU];
-               if (12 === zU.trigger || 13 === zU.trigger) {
-                 const UU = zU.getTriggerParameter(),
-                   cU = UU.mesh ? UU.mesh : UU,
-                   yU = cU.syU(XU, UU.usePreciseIntersection),
-                   QU = XU._intersectionsInProgress.indexOf(cU);
-                 yU && -1 === QU ? 12 === zU.trigger ? (zU._executeCurrent(pU.CreateNew(XU, void 0, cU)), XU._intersectionsInProgress.push(cU)) : 13 === zU.trigger && XU._intersectionsInProgress.push(cU) : !yU && QU > -1 && (13 === zU.trigger && zU._executeCurrent(pU.CreateNew(XU, … [truncated]
-                   const XU = UU.mesh ? UU.mesh : UU;
-                   return cU === XU
-                 })) && 13 !== zU.trigger || XU._intersectionsInProgress.splice(QU, 1))
-               }
- ... (2 more removed lines; see GitHub link above)
+       getLevelUps() {
+         return this.levelUps
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9116-L9130` → after: `L3686-L3828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3686-L3828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3686-L3828) · [Before (L9116-L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9116-L9130)

```diff
-       _advancePhysicsEngineStep(UU) {}
-       _animate(UU) {}
-       animate() {
-         if (this._engine.isDeterministicLockStep()) {
-           let UU = Math.max(Qz.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Qz.MaxDeltaTime)) + this._timeAccumulator;
-           const XU = this._engine.getTimeStep(),
-             zU = 1e3 / XU / 1e3;
-           let cU = 0;
-           const yU = this._engine.getLockstepMaxSteps();
-           let QU = Math.floor(UU / XU);
-           for (QU = Math.min(QU, yU); UU > 0 && cU < QU;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = XU * zU, this._animate(XU), this.onAfterAnimationsObservable.notifyObservers(this), this.hV && this._advancePhysicsEngineStep(XU), this.onAfterStepO … [truncated]
-           this._timeAccumulator = UU < 0 ? 0 : UU
-         } else {
-           const UU = this.useConstantAnimationDeltaTime ? 16 : Math.max(Qz.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Qz.MaxDeltaTime));
-           this._animationRatio = .06 * UU, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.hV && this._advancePhysicsEngineStep(UU)
+       kX(HH) {
+         const [BH, LH, AH] = HH;
+         this.setLevelUps([...this.levelUps, {
+           job: BH,
+           level: LH,
+           unlock: null === AH ? null : {
+             item: AH[0],
+             nameKey: AH[1],
+             level: AH[2]
+           },
+           token: ++this.token
+         }])
+       }
+       setLevelUps(HH) {
+         this.levelUps = HH, this.publishLevelUps(HH)
+       }
+ ... (127 more added lines; see GitHub link above)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9133-L9134` → after: `L3836-L3837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3836-L3837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3836-L3837) · [Before (L9133-L9134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9133-L9134)

```diff
-       _clear() {
-         (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
+       getView() {
+         return this.view
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9136-L9140` → after: `L3839-L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3839-L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3839-L3876) · [Before (L9136-L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9136-L9140)

```diff
-       _checkCameraRenderTarget(UU) {
-         if (UU?.outputRenderTarget && !UU?.isRigCamera && (UU.outputRenderTarget._cleared = !1), UU?.rigCameras?.length)
-           for (let XU = 0; XU < UU.rigCameras.length; ++XU) {
-             const zU = UU.rigCameras[XU].outputRenderTarget;
-             zU && (zU._cleared = !1)
+       kX(HH) {
+         const BH = performance.now();
+         switch (HH[0]) {
+           case "hide":
+             this.view = null;
+             break;
+           case "marketIdle":
+             this.view = {
+               job: null,
+               waypoints: vA(HH[1])
+             };
+             break;
+           case "marketPick":
+           case "marketStock": {
+             const [LH, AH, rH, SH] = HH;
+             this.view = {
+ ... (22 more added lines; see GitHub link above)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9161-L9169` → after: `L3881-L3929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3881-L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3881-L3929) · [Before (L9161-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9161-L9169)

```diff
-       _renderWithFrameGraphAfterBeforeRender(UU) {
-         this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
-         const XU = this._frameGraph?.findMainCamera() ?? null;
-         if (this.renderTargetsEnabled) {
-           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), cU.j.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
-           for (let UU = 0; UU < this._renderTargets.length; UU++) {
-             const zU = this._renderTargets.data[UU],
-               cU = zU.activeCamera || XU;
-             this._renderRenderTarget(zU, cU, !0, this.dumpNextRenderTargets)
+     }
+     var TA = LH(40413);
+     const UA = [{
+       transform: "scale(1)",
+       filter: "brightness(1)"
+     }, {
+       transform: "scale(1.35)",
+       filter: "brightness(1.4)",
+       offset: .3
+     }, {
+       transform: "scale(1)",
+       filter: "brightness(1)"
+     }];
+ 
+     function VA(HH) {
+       var BH;
+ ... (33 more added lines; see GitHub link above)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9171-L9195` → after: `L3931-L4179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R3931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L3931-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L3931-L4179) · [Before (L9171-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9171-L9195)

```diff
-           cU.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
-         }
-         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
-         for (let zU = 0, cU = this._beforeClearStage; zU < cU.length; zU++) {
-           cU[zU].action()
-         }
-         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
-         else {
-           const XU = this.getActiveMeshCandidates(),
-             zU = XU.length;
-           if (this._activeMeshesFrozen) {
-             if (!this._skipEvaluateActiveMeshesCompletely)
-               for (let UU = 0; UU < zU; UU++) {
-                 const zU = XU.data[UU];
-                 zU._internalAbstractMeshDataInfo._wasActiveLastFrame && zU.computeWorldMatrix()
-               }
- ... (9 more removed lines; see GitHub link above)
+         })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (AH = hH.current) || void 0 === AH || AH.cancel(), hH.current = SH.current.animate(UA, {
+           duration: 420,
+           easing: "ease-out"
+         })))
+       }), [BH, LH]), (0, tH.useEffect)((() => () => {
+         var HH;
+         null === (HH = hH.current) || void 0 === HH || HH.cancel()
+       }), []);
+       const XH = Math.floor(rH / 60);
+       return (0, UH.jsxs)("div", {
+         className: uH()("GreenvilleMarketCountdown", {
+           Urgent: rH < 10
+         }),
+         role: "timer",
+         children: [(0, UH.jsxs)("div", {
+           ref: SH,
+ ... (233 more added lines; see GitHub link above)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9197-L9215` → after: `L4181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4181) · [Before (L9197-L9215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9197-L9215)

```diff
-             if (this.particlesEnabled)
-               for (let UU = 0; UU < this.nB.length; UU++) {
-                 const XU = this.nB[UU];
-                 if (!XU.isStarted() || !XU.emitter) continue;
-                 const zU = XU.emitter;
-                 zU.position && !zU.isEnabled() || (this._activeParticleSystems.push(XU), XU.animate())
-               }
-           }
-         }
-         this.frameGraph?.execute()
-       }
-       _renderRenderTarget(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         if (this._intermediateRendering = !0, UU._shouldRender()) {
-           if (this._renderId++, this.activeCamera = XU, !this.activeCamera) throw new Error("Active camera not set");
- ... (3 more removed lines; see GitHub link above)
+             of LH.waypoints) this.waypoints.update(AH, rH[0], rH[1] + 1, rH[2], BH)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9217-L9225` → after: `L4183-L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4183-L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4183-L4201) · [Before (L9217-L9225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9217-L9225)

```diff
-       render() {
-         let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.oR) return;
-         const zU = this._renderingMeshEvaluationDepth;
-         try {
-           this._renderFrame(UU, XU)
-         } finally {
-           this._renderingMeshEvaluationDepth = zU
+     }
+     const qA = {
+       Street: "St",
+       Avenue: "Ave",
+       Road: "Rd",
+       Lane: "Ln"
+     };
+ 
+     function gA(HH, BH) {
+       return BH.map(((BH, LH) => {
+         const AH = BH.lastIndexOf(" "),
+           rH = BH.slice(AH + 1);
+         let SH = qA[rH];
+         return void 0 === SH && (console.warn(`Greenville street "${BH}" has no suffix abbreviation`), SH = rH), {
+           axis: HH,
+           line: LH,
+ ... (3 more added lines; see GitHub link above)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9228-L9252` → after: `L4224-L4254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4224-L4254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4224-L4254) · [Before (L9228-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9228-L9252)

```diff
-       _renderFrame(UU, XU) {
-         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), tU.d.nS = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
-           for (const zU of this.activeCameras) this._checkCameraRenderTarget(zU);
-         this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimatio … [truncated]
-         for (let zU = 0, cU = this._beforeCameraUpdateStage; zU < cU.length; zU++) {
-           cU[zU].action()
-         }
-         if (UU)
-           if (this.activeCameras && this.activeCameras.length > 0)
-             for (let zU = 0; zU < this.activeCameras.length; zU++) {
-               const UU = this.activeCameras[zU];
-               if (UU.update(), 0 !== UU.cameraRigMode)
-                 for (let XU = 0; XU < UU._rigCameras.length; XU++) UU._rigCameras[XU].update()
-             } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
-               for (let zU = 0; zU < this.activeCamera._rigCameras.length; zU++) this.activeCamera._rigCameras[zU].update();
-         if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(UU, XU);
- ... (9 more removed lines; see GitHub link above)
+     }
+     let FA = null;
+ 
+     function DA(HH, BH, LH, AH) {
+       if (AH && "outside" !== AH.kind) {
+         const {
+           box: LH
+         } = AH;
+         if (!yL(LH, HH, BH) && yL({
+             x0: LH.x0 - 2,
+             z0: LH.z0 - 2,
+             x1: LH.x1 + 2,
+             z1: LH.z1 + 2
+           }, HH, BH)) return AH
+       }
+       return function(HH, BH, LH) {
+ ... (15 more added lines; see GitHub link above)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9260-L9262` → after: `L4257-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4257-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4257-L4267) · [Before (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9260-L9262)

```diff
-           this._clearFrameBuffer(this.activeCamera);
-           for (let XU = 0, zU = this._gatherRenderTargetsStage; XU < zU.length; XU++) {
-             zU[XU].action(this._renderTargets)
+           case "junction": {
+             const SH = nA(HH.column * iL, HH.row * iL, JL, JL),
+               hH = [AH[HH.row], rH[HH.column]],
+               tH = "street" === (null === LH || void 0 === LH ? void 0 : LH.kind) ? LH.street : "junction" === (null === LH || void 0 === LH ? void 0 : LH.kind) ? LH.along : null,
+               zH = tH && hH.includes(tH) ? tH : Math.abs(Math.sin(BH)) > Math.abs(Math.cos(BH)) ? hH[0] : hH[1];
+             return {
+               kind: "junction",
+               box: SH,
+               along: zH,
+               cross: zH === hH[0] ? hH[1] : hH[0]
+             }
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9264-L9268` → after: `L4269-L4285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4269-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4269-L4285) · [Before (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9264-L9268)

```diff
-           if (this.activeCameras && this.activeCameras.length > 0)
-             for (let XU = 0; XU < this.activeCameras.length; XU++) this._processSubCameras(this.activeCameras[XU], XU > 0);
-           else {
-             if (!this.activeCamera) throw new Error("No camera defined");
-             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
+           case "plot": {
+             const BH = HH.column * iL + JL + HH.dx * JL,
+               LH = HH.row * iL + JL + HH.dz * JL,
+               rH = 0 === HH.dz;
+             return {
+               kind: "plot",
+               box: nA(BH, LH, JL, JL),
+               plotId: (SH = (sL + BH) / JL, hH = (sL + LH) / JL, FA || (FA = new Map(AA().map(((HH, BH) => {
+                 let {
+                   chunk: LH
+                 } = HH;
+                 return [`${LH[0]},${LH[2]}`, BH + 1]
+               })))), FA.get(`${SH},${hH}`)),
+               number: jA(HH.column, 0 === HH.dx ? 30 : 70, rH),
+               street: AH[rH ? HH.row : HH.row + 1],
+               neighbourhood: HH.neighbourhood
+ ... (1 more added lines; see GitHub link above)
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9270-L9278` → after: `L4287-L4299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4287-L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4287-L4299) · [Before (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9270-L9278)

```diff
-         }
-         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
-         for (let zU = 0, cU = this._afterRenderStage; zU < cU.length; zU++) {
-           cU[zU].action()
-         }
-         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
-           for (let UU = 0; UU < this._toBeDisposed.length; UU++) {
-             const XU = this._toBeDisposed[UU];
-             XU && XU.dispose()
+           case "tile": {
+             const {
+               column: BH,
+               row: LH,
+               district: rH
+             } = HH;
+             return {
+               kind: "tile",
+               box: nA(BH * iL + JL, LH * iL + JL, iL - JL, iL - JL),
+               district: rH,
+               number: jA(BH, 50, !0),
+               street: AH[LH]
+             }
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9282-L9288` → after: `L4302-L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4302-L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4302-L4424) · [Before (L9282-L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9282-L9288)

```diff
-         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
-       }
-       freezeMaterials() {
-         for (let UU = 0; UU < this.materials.length; UU++) this.materials[UU].freeze()
-       }
-       unfreezeMaterials() {
-         for (let UU = 0; UU < this.materials.length; UU++) this.materials[UU].unfreeze()
+         var SH, hH
+       }(function(HH, BH) {
+         const LH = HH - sL,
+           AH = BH - sL;
+         if (LH < 0 || AH < 0 || LH >= pL || AH >= pL) return {
+           kind: "outside"
+         };
+         const rH = Math.floor(LH / iL),
+           SH = Math.floor(AH / iL),
+           hH = LH - rH * iL - JL,
+           tH = AH - SH * iL - JL;
+         if (hH < 0 && tH < 0) return {
+           kind: "junction",
+           column: rH,
+           row: SH
+         };
+ ... (107 more added lines; see GitHub link above)
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9291-L9299` → after: `L4427-L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4427-L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4427-L4430) · [Before (L9291-L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9291-L9299)

```diff
-         if (this.oR) return;
-         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
-           for (const UU of this._activeAnimatables) UU.onAnimationEndObservable.clear(), UU.onAnimationEnd = null;
-           this.stopAllAnimations()
-         }
-         this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSyste … [truncated]
-         const UU = this._activeRequests.slice();
-         for (const QU of UU) QU.abort();
-         this._activeRequests.length = 0;
+         var HH, BH;
+         null !== this.timer && clearTimeout(this.timer), null === (HH = this.cancelIdle) || void 0 === HH || HH.call(this), this.host = null, this.Mu = !0, null === (BH = this.baked) || void 0 === BH || BH.close(), this.baked = null
+       }
+       async drawBakedMap() {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9301` → after: `L4432-L4438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4432-L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4432-L4438) · [Before (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9301)

```diff
-           this.bS.notifyObservers(this)
+           const HH = await fetch(this.map.imageUrl);
+           if (!HH.ok) throw new Error(`HTTP ${HH.status}`);
+           const BH = await createImageBitmap(await HH.blob(), {
+             colorSpaceConversion: "none"
+           });
+           if (this.Mu) return void BH.close();
+           this.baked = BH, this.context.drawImage(BH, 0, 0)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9303-L9323` → after: `L4440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4440) · [Before (L9303-L9323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9303-L9323)

```diff
-           Uz.b.Error("An error occurred while calling onDisposeObservable!", yU)
-         }
-         this.detachControl();
-         const XU = this._engine.getInputElement?.();
-         if (XU)
-           for (let QU = 0; QU < this.cameras.length; QU++) this.cameras[QU].detachControl();
-         this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (UU => UU.dispose(!0))), this._disp … [truncated]
-         const zU = this.cameras;
-         this._disposeList(zU), this._disposeList(this.nB), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multivi … [truncated]
-         let cU = this._engine.scenes.indexOf(this);
-         if (cU > -1 && this._engine.scenes.splice(cU, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, tU.j)(), BU.b._LastCreatedScene === this) {
-           BU.b._LastCreatedScene = null;
-           let UU = BU.b.Instances.length - 1;
-           for (; UU >= 0;) {
-             const XU = BU.b.Instances[UU];
-             if (XU.scenes.length > 0) {
- ... (5 more removed lines; see GitHub link above)
+           console.error("Greenville map: the baked map failed to load", HH)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9327-L9334` → after: `L4443-L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4443-L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4443-L4448) · [Before (L9327-L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9327-L9334)

```diff
-       _disposeList(UU, XU) {
-         const zU = UU.slice(0);
-         XU = XU ?? (UU => UU.dispose());
-         for (const cU of zU) XU(cU);
-         UU.length = 0
-       }
-       get oR() {
-         return this._isDisposed
+       schedule(HH) {
+         this.timer = setTimeout((() => {
+           this.timer = null, this.cancelIdle = (0, aA.d)(this.pass, {
+             timeoutMs: 1e3
+           })
+         }), HH)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9336-L9339` → after: `L4450-L4458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4450-L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4450-L4458) · [Before (L9336-L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9336-L9339)

```diff
-       clearCachedVertexData() {
-         for (let UU = 0; UU < this.meshes.length; UU++) {
-           const XU = this.meshes[UU].geometry;
-           XU && XU.clearCachedData()
+       readVersions(HH) {
+         const {
+           origin: BH
+         } = this.map.area, LH = BH / sA + HH % this.columns, AH = BH / sA + Math.floor(HH / this.columns);
+         let rH = !1;
+         for (let hH = 0; hH < this.layers; hH++) {
+           var SH;
+           const BH = null !== (SH = this.api.getChunkVersion(LH, this.lowestLayer + hH, AH)) && void 0 !== SH ? SH : 0;
+           this.current[hH] = BH, rH ||= BH !== this.versions[HH * this.layers + hH]
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9342-L9345` → after: `L4462-L4464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4462-L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4462-L4464) · [Before (L9342-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9342-L9345)

```diff
-       cleanCachedTextureBuffer() {
-         for (const UU of this.textures) {
-           UU._buffer && (UU._buffer = null)
-         }
+       repaintIfPainted(HH, BH) {
+         const LH = BH * this.columns + HH;
+         HH < this.columns && BH < this.columns && 1 === this.painted[LH] && this.versions.fill(NaN, LH * this.layers, (LH + 1) * this.layers)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9347-L9364` → after: `L4466-L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4466-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4466-L4477) · [Before (L9347-L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9347-L9364)

```diff
-       getWorldExtends(UU) {
-         const XU = new EU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           zU = new EU.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         UU = UU || (() => !0);
-         const cU = this.meshes.filter(UU);
-         for (const yU of cU) {
-           if (yU.computeWorldMatrix(!0), !yU.uB || 0 === yU.uB.length || yU.infiniteDistance) continue;
-           const UU = yU.gM(),
-             cU = UU.boundingBox.minimumWorld,
-             QU = UU.boundingBox.maximumWorld;
-           EU.q.CheckExtends(cU, XU, zU), EU.q.CheckExtends(QU, XU, zU)
-         }
-         return XU.x === Number.MAX_VALUE ? {
-           min: EU.q.Zero(),
-           max: EU.q.Zero()
-         } : {
- ... (2 more removed lines; see GitHub link above)
+       storeHeights(HH, BH) {
+         const {
+           size: LH
+         } = this.map.area;
+         let AH = !1,
+           rH = !1;
+         for (let SH = 0; SH < this.ids.length; SH++) {
+           const hH = SH % sA,
+             tH = Math.floor(SH / sA),
+             zH = (BH * sA + tH) * LH + HH * sA + hH,
+             CH = 0 === this.ids[SH] ? ZA.f : this.tops[SH];
+           this.heights[zH] !== CH && (AH ||= hH === sA - 1, rH ||= tH === sA - 1, this.heights[zH] = CH)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9367-L9420` → after: `L4481-L4492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4481-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4481-L4492) · [Before (L9367-L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9367-L9420)

```diff
-       createPickingRay(UU, XU, zU, cU) {
-         throw (0, ZU.m)("Ray")
-       }
-       createPickingRayToRef(UU, XU, zU, cU, yU) {
-         throw (0, ZU.m)("Ray")
-       }
-       createPickingRayInCameraSpace(UU, XU, zU) {
-         throw (0, ZU.m)("Ray")
-       }
-       createPickingRayInCameraSpaceToRef(UU, XU, zU, cU) {
-         throw (0, ZU.m)("Ray")
-       }
-       DI(UU, XU, zU, cU, yU, QU) {
-         const AU = (0, ZU.m)("Ray", !0);
-         return AU && Uz.b.Warn(AU), new IU.c
-       }
- ... (38 more removed lines; see GitHub link above)
+       readEdgeHeights(HH, BH, LH, AH, rH) {
+         const {
+           origin: SH,
+           size: hH,
+           Sr: tH,
+           hr: zH
+         } = this.map.area;
+         this.api.readColumnTops(HH, BH, LH, AH, tH, zH, rH, this.edgeIds, this.edgeTops);
+         const CH = LH - HH;
+         for (let EH = 0; EH < sA; EH++) {
+           const LH = (BH - SH + Math.floor(EH / CH)) * hH + HH - SH + EH % CH;
+           this.heights[LH] = 0 === this.edgeIds[EH] ? ZA.f : this.edgeTops[EH]
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9462-L9479` → after: `L4495-L4526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4495-L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4495-L4526) · [Before (L9462-L9479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9462-L9479)

```diff
-       markAllMaterialsAsDirty(UU, XU) {
-         if (!this._blockMaterialDirtyMechanism)
-           for (const zU of this.materials) XU && !XU(zU) || zU.OzU(UU)
-       }
-       _loadFile(UU, XU, zU, cU, yU, QU, AU) {
-         const FU = (0, jU.q)(UU, XU, zU, cU ? this.offlineProvider : void 0, yU, QU, AU);
-         return this._activeRequests.push(FU), FU.onCompleteObservable.add((UU => {
-           this._activeRequests.splice(this._activeRequests.indexOf(UU), 1)
-         })), FU
-       }
-       async _loadFileAsync(UU, XU, zU, cU, yU) {
-         return await new Promise(((QU, AU) => {
-           this._loadFile(UU, (UU => {
-             QU(UU)
-           }), XU, zU, cU, ((UU, XU) => {
-             AU(XU)
- ... (2 more removed lines; see GitHub link above)
+       paint(HH, BH, LH, AH) {
+         const {
+           origin: rH,
+           size: SH,
+           Sr: hH,
+           hr: tH
+         } = this.map.area, zH = BH * this.columns + HH, CH = 1 === this.stale[zH];
+         this.stale[zH] = 0;
+         const EH = rH + HH * sA,
+           XH = rH + BH * sA,
+           GH = SH - (HH + 1) * sA,
+           {
+             ids: YH,
+             tops: uH,
+             heights: QH
+           } = this;
+ ... (16 more added lines; see GitHub link above)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9481-L9493` → after: `L4528-L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4528-L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4528-L4587) · [Before (L9481-L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9481-L9493)

```diff
-       async _loadDelayedFileAsync(UU, XU, zU) {
-         this._delayedFileRequests || (this._delayedFileRequests = new Map);
-         const cU = `${UU}|${XU?"binary":"string"}`;
-         let yU = this._delayedFileRequests.get(cU);
-         if (!yU) {
-           yU = XU ? this._loadFileAsync(UU, void 0, zU, !0) : this._loadFileAsync(UU, void 0, zU, !1);
-           const QU = yU;
-           (async () => {
-             try {
-               await QU
-             } catch {}
-             this._delayedFileRequests?.delete(cU)
-           })(), this._delayedFileRequests.set(cU, yU)
+     }
+     const iA = "greenvilleNavAddress",
+       pA = "greenvilleNavPlots",
+       yA = "greenvilleNavMarkers",
+       Hr = 5 * Math.PI / 180,
+       Br = {
+         kind: "outside"
+       };
+     class Lr {
+       constructor(HH, BH, LH, AH) {
+         this.map = HH, this.publishAddress = BH, this.publishPlots = LH, this.publishMarkers = AH, this.address = Br, this.addressKey = wA(Br), this.block = {
+           x: NaN,
+           z: NaN
+         }, this.plots = void 0, this.markers = [], this.terrain = null, this.cX = null, this.worldResize = null, this.worldPx = 0, this.arrowTrack = null, this.arrow = null, this.zoom = 0, this.lastFrameMs = NaN, this.written = {
+           u: NaN,
+           v: NaN,
+ ... (44 more added lines; see GitHub link above)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9548-L9549` → after: `L4590-L4591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4590-L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4590-L4591) · [Before (L9548-L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9548-L9549)

```diff
-       getBoneByID(UU) {
-         return this.getBoneById(UU)
+       start(HH) {
+         this.terrain = new JA(HH, this.map, this.plots.plots)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9551-L9576` → after: `L4593-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4593-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4593-L4594) · [Before (L9551-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9551-L9576)

```diff
-       getLightByID(UU) {
-         return this.getLightById(UU)
-       }
-       getLightByUniqueID(UU) {
-         return this.getLightByUniqueId(UU)
-       }
-       getParticleSystemByID(UU) {
-         return this.getParticleSystemById(UU)
-       }
-       getGeometryByID(UU) {
-         return this.getGeometryById(UU)
-       }
-       getMeshByID(UU) {
-         return this.getMeshById(UU)
-       }
-       getMeshByUniqueID(UU) {
- ... (10 more removed lines; see GitHub link above)
+       dispose() {
+         this.terrain.dispose()
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9578-L9579` → after: `L4596-L4597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4596-L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4596-L4597) · [Before (L9578-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9578-L9579)

```diff
-       getTransformNodeByUniqueID(UU) {
-         return this.getTransformNodeByUniqueId(UU)
+       getAddress() {
+         return this.address
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9581-L9582` → after: `L4599-L4600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4599-L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4599-L4600) · [Before (L9581-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9581-L9582)

```diff
-       getTransformNodesByID(UU) {
-         return this.getTransformNodesById(UU)
+       isMapShown() {
+         return !this.map.city || "outside" !== this.address.kind
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9584-L9585` → after: `L4602-L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4602-L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4602-L4603) · [Before (L9584-L9585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9584-L9585)

```diff
-       getNodeByID(UU) {
-         return this.getNodeById(UU)
+       getPlots() {
+         return this.plots
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L9587-L9588` → after: `L4605-L4606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4605-L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/275.js#L4605-L4606) · [Before (L9587-L9588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/275.js#L9587-L9588)

```diff
-       getLastEntryByID(UU) {
-         return this.getLastEntryById(UU)
+       getMarkers() {
+         return this.markers
```
