# Changed — Bundle Modifications Report (Part 031 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `31 / 99` (**259** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 030](part-030.md) · [Part 032 →](part-032.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (113 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 86. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10520-L10554` → after: `L1030-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1030-L1031) · [Before (L10520-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10520-L10554)

```diff
-       rebuildFullSnapshot(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
-         Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
-         const iM = [],
-           OM = new Set,
-           SM = (rM, SM) => {
-             if ("DIALOG" === rM.nodeName && OM.add(rM), this.collectIframeAndAttachDocument(iM, rM), this.mediaManager.isSupportedMediaElement(rM)) {
-               const {
-                 events: iM
-               } = this.service.state.context;
-               this.mediaManager.addMediaElements(rM, MM.timestamp - iM[0].timestamp, this.mirror)
-             }
-             for (const MM of this.config.plugins || []) MM.onBuild && MM.onBuild(rM, {
-               id: SM,
-               replayer: this
- ... (19 more removed lines; see GitHub link above)
+       isComponentSet() {
+         return null != this.component
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10556-L10574` → after: `L1033-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1033-L1035) · [Before (L10556-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10556-L10574)

```diff
-       insertStyleRules(MM, rM) {
-         var iM;
-         const OM = (SM = this.config.blockClass, [`.${SM} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
-         var SM;
-         if (this.config.pauseAnimation && OM.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), OM.length)
-           if (this.usingVirtualDom) {
-             const iM = this.virtualDom.createElement("style");
-             this.virtualDom.mirror.add(iM, Yj(iM, this.virtualDom.unserializedId)), MM.insertBefore(iM, rM), iM.rules.push({
-               source: pa.StyleSheetRule,
-               adds: OM.map(((MM, rM) => ({
-                 rule: MM,
-                 index: rM
-               })))
-             })
-           } else {
-             const SM = document.createElement("style");
- ... (3 more removed lines; see GitHub link above)
+       isInitialized() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QU;
+         return this.instances.has(UU)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10576-L10609` → after: `L1037-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1037-L1039) · [Before (L10576-L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10576-L10609)

```diff
-       attachDocumentToIframe(MM, rM) {
-         const iM = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
-           OM = [],
-           SM = new Set,
-           jM = (MM, jM) => {
-             "DIALOG" === MM.nodeName && SM.add(MM), this.collectIframeAndAttachDocument(OM, MM);
-             const aM = iM.getMeta(MM);
-             if ((null == aM ? void 0 : aM.type) === oa.Element && "HTML" === (null == aM ? void 0 : aM.tagName.toUpperCase())) {
-               const {
-                 documentElement: MM,
-                 head: iM
-               } = rM.contentDocument;
-               this.insertStyleRules(MM, iM)
-             }
-             if (!this.usingVirtualDom)
-               for (const rM of this.config.plugins || []) rM.onBuild && rM.onBuild(MM, {
- ... (18 more removed lines; see GitHub link above)
+       getOptions() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QU;
+         return this.instancesOptions.get(UU) || {}
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10611-L10617` → after: `L1041-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1041-L1053) · [Before (L10611-L10617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10611-L10617)

```diff
-       collectIframeAndAttachDocument(MM, rM) {
-         if (ya(rM, this.mirror)) {
-           const iM = this.newDocumentQueue.find((MM => MM.parentId === this.mirror.getId(rM)));
-           iM && MM.push({
-             mutationInQueue: iM,
-             builtNode: rM
-           })
+       initialize() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const {
+           options: XU = {}
+         } = UU, zU = this.normalizeInstanceIdentifier(UU.instanceIdentifier);
+         if (this.isInitialized(zU)) throw Error(`${this.name}(${zU}) has already been initialized`);
+         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
+         const cU = this.getOrInitializeService({
+           instanceIdentifier: zU,
+           options: XU
+         });
+         for (const [yU, QU] of this.instancesDeferred.entries()) {
+           zU === this.normalizeInstanceIdentifier(yU) && QU.resolve(cU)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10620` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1057) · [Before (L10620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10620)

```diff
-       waitForStylesheetLoad() {
+       wY(UU, XU) {
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10622-L10641` → after: `L1059-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1059-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1059-L1064) · [Before (L10622-L10641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10622-L10641)

```diff
-         const rM = null == (MM = this.iframe.contentDocument) ? void 0 : MM.head;
-         if (rM) {
-           const MM = new Set;
-           let iM, OM = this.service.state;
-           const SM = () => {
-             OM = this.service.state
-           };
-           this.emitter.on(Za.Start, SM), this.emitter.on(Za.Pause, SM);
-           const jM = () => {
-             this.emitter.off(Za.Start, SM), this.emitter.off(Za.Pause, SM)
-           };
-           rM.querySelectorAll('link[rel="stylesheet"]').forEach((rM => {
-             rM.sheet || (MM.add(rM), rM.addEventListener("load", (() => {
-               MM.delete(rM), 0 === MM.size && -1 !== iM && (OM.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(Za.LoadStylesheetEnd), iM && clearTimeout(iM), jM())
-             })))
-           })), MM.size > 0 && (this.service.send({
- ... (4 more removed lines; see GitHub link above)
+         const cU = this.normalizeInstanceIdentifier(XU),
+           yU = null !== (zU = this.onInitCallbacks.get(cU)) && void 0 !== zU ? zU : new Set;
+         yU.add(UU), this.onInitCallbacks.set(cU, yU);
+         const QU = this.instances.get(cU);
+         return QU && UU(QU, cU), () => {
+           yU.delete(UU)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10644-L10660` → after: `L1067-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1067-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1067-L1072) · [Before (L10644-L10660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10644-L10660)

```diff
-       async preloadAllImages() {
-         const MM = [];
-         for (const rM of this.service.state.context.events)
-           if (rM.type === Ra.IncrementalSnapshot && rM.data.source === pa.CanvasMutation) {
-             MM.push(this.deserializeAndPreloadCanvasEvents(rM.data, rM));
-             ("commands" in rM.data ? rM.data.commands : [rM.data]).forEach((MM => {
-               this.preloadImages(MM, rM)
-             }))
-           } return Promise.all(MM)
-       }
-       preloadImages(MM, rM) {
-         if ("drawImage" === MM.property && "string" === typeof MM.args[0] && !this.imageMap.has(rM)) {
-           const MM = document.createElement("canvas"),
-             rM = MM.getContext("2d"),
-             iM = null == rM ? void 0 : rM.createImageData(MM.width, MM.height);
-           null == rM || rM.putImageData(iM, 0, 0)
- ... (1 more removed lines; see GitHub link above)
+       invokeOnInitCallbacks(UU, XU) {
+         const zU = this.onInitCallbacks.get(XU);
+         if (zU)
+           for (const yU of zU) try {
+             yU(UU, XU)
+           } catch (cU) {}
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10662-L10686` → after: `L1074-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1074-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1074-L1086) · [Before (L10662-L10686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10662-L10686)

```diff
-       async deserializeAndPreloadCanvasEvents(MM, rM) {
-         if (!this.canvasEventMap.has(rM)) {
-           const iM = {
-             isUnchanged: !0
-           };
-           if ("commands" in MM) {
-             const OM = await Promise.all(MM.commands.map((async MM => {
-               const rM = await Promise.all(MM.args.map(VP(this.imageMap, null, iM)));
-               return {
-                 ...MM,
-                 args: rM
-               }
-             })));
-             !1 === iM.isUnchanged && this.canvasEventMap.set(rM, {
-               ...MM,
-               commands: OM
- ... (9 more removed lines; see GitHub link above)
+       getOrInitializeService(UU) {
+         let {
+           instanceIdentifier: XU,
+           options: zU = {}
+         } = UU, cU = this.instances.get(XU);
+         if (!cU && this.component && (cU = this.component.instanceFactory(this.container, {
+             instanceIdentifier: (yU = XU, yU === QU ? void 0 : yU),
+             options: zU
+           }), this.instances.set(XU, cU), this.instancesOptions.set(XU, zU), this.invokeOnInitCallbacks(cU, XU), this.component.onInstanceCreated)) try {
+           this.component.onInstanceCreated(this.container, XU, cU)
+         } catch (AU) {}
+         var yU;
+         return cU || null
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10688-L10849` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1088-L1090) · [Before (L10688-L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10688-L10849)

```diff
-       applyIncremental(MM, rM) {
-         var iM, OM, SM;
-         const {
-           data: jM
-         } = MM;
-         switch (jM.source) {
-           case pa.Mutation:
-             try {
-               this.applyMutation(jM, rM)
-             } catch (aM) {
-               this.warn(`Exception in mutation ${aM.message||aM}`, jM)
-             }
-             break;
-           case pa.Drag:
-           case pa.TouchMove:
-           case pa.MouseMove:
- ... (146 more removed lines; see GitHub link above)
+       normalizeInstanceIdentifier() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QU;
+         return this.component ? this.component.multipleInstances ? UU : QU : UU
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L10851-L11019` → after: `L1092-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1092-L1093) · [Before (L10851-L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L10851-L11019)

```diff
-       applyMutation(MM, rM) {
-         if (this.config.useVirtualDom && !this.usingVirtualDom && rM && (this.usingVirtualDom = !0, oj(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
-           for (const nM in this.legacy_missingNodeRetryMap) try {
-             const MM = this.legacy_missingNodeRetryMap[nM],
-               rM = Zj(MM.node, this.virtualDom, this.mirror);
-             rM && (MM.node = rM)
-           } catch (PM) {
-             this.warn(PM)
-           }
-         const iM = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
-         MM.removes = MM.removes.filter((rM => !!iM.lD(rM.id) || (this.warnNodeNotFound(MM, rM.id), !1))), MM.removes.forEach((rM => {
-           var OM;
-           const SM = iM.lD(rM.id);
-           if (!SM) return;
-           let jM = iM.lD(rM.parentId);
-           if (!jM) return this.warnNodeNotFound(MM, rM.parentId);
- ... (153 more removed lines; see GitHub link above)
+       shouldAutoInitialize() {
+         return !!this.component && "EXPLICIT" !== this.component.instantiationMode
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11021-L11042` → after: `L1095-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1095-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1095-L1098) · [Before (L11021-L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11021-L11042)

```diff
-       applyScroll(MM, rM) {
-         var iM, OM;
-         const SM = this.mirror.lD(MM.id);
-         if (!SM) return this.debugNodeNotFound(MM, MM.id);
-         const jM = this.mirror.getMeta(SM);
-         if (SM === this.iframe.contentDocument) null == (iM = this.iframe.contentWindow) || iM.scrollTo({
-           top: MM.y,
-           left: MM.x,
-           behavior: rM ? "auto" : "smooth"
-         });
-         else if ((null == jM ? void 0 : jM.type) === oa.Document) null == (OM = SM.defaultView) || OM.scrollTo({
-           top: MM.y,
-           left: MM.x,
-           behavior: rM ? "auto" : "smooth"
-         });
-         else try {
- ... (6 more removed lines; see GitHub link above)
+     }
+     class FU {
+       constructor(UU) {
+         this.name = UU, this.providers = new Map
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11044-L11049` → after: `L1100-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1100-L1103) · [Before (L11044-L11049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11044-L11049)

```diff
-       applyInput(MM) {
-         const rM = this.mirror.lD(MM.id);
-         if (!rM) return this.debugNodeNotFound(MM, MM.id);
-         try {
-           rM.checked = MM.isChecked, rM.value = MM.text
-         } catch (iM) {}
+       sH(UU) {
+         const XU = this.getProvider(UU.name);
+         if (XU.isComponentSet()) throw new Error(`Component ${UU.name} has already been registered with ${this.name}`);
+         XU.setComponent(UU)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11051-L11077` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1105-L1106) · [Before (L11051-L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11051-L11077)

```diff
-       applySelection(MM) {
-         try {
-           const rM = new Set,
-             iM = MM.Ld.map((MM => {
-               let {
-                 start: iM,
-                 startOffset: OM,
-                 end: SM,
-                 endOffset: jM
-               } = MM;
-               const aM = this.mirror.lD(iM),
-                 PM = this.mirror.lD(SM);
-               if (!aM || !PM) return;
-               const nM = new Range;
-               nM.setStart(aM, OM), nM.setEnd(PM, jM);
-               const QM = aM.ownerDocument,
- ... (11 more removed lines; see GitHub link above)
+       addOrOverwriteComponent(UU) {
+         this.getProvider(UU.name).isComponentSet() && this.providers.delete(UU.name), this.sH(UU)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11079-L11082` → after: `L1108-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1108-L1111) · [Before (L11079-L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11079-L11082)

```diff
-       applyStyleSheetMutation(MM) {
-         var rM;
-         let iM = null;
-         MM.styleId ? iM = this.styleMirror.getStyle(MM.styleId) : MM.id && (iM = (null == (rM = this.mirror.lD(MM.id)) ? void 0 : rM.sheet) || null), iM && (MM.source === pa.StyleSheetRule ? this.applyStyleSheetRule(MM, iM) : MM.source === pa.StyleDeclaration && this.applyStyleDe … [truncated]
+       getProvider(UU) {
+         if (this.providers.has(UU)) return this.providers.get(UU);
+         const XU = new AU(UU, this);
+         return this.providers.set(UU, XU), XU
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11084-L11121` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1113-L1114) · [Before (L11084-L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11084-L11121)

```diff
-       applyStyleSheetRule(MM, rM) {
-         var iM, OM, SM, jM;
-         if (null == (iM = MM.adds) || iM.forEach((MM => {
-             let {
-               rule: iM,
-               index: OM
-             } = MM;
-             try {
-               if (Array.isArray(OM)) {
-                 const {
-                   positions: MM,
-                   index: SM
-                 } = Ca(OM), jM = Ga(rM.cssRules, MM);
-                 null == jM || jM.insertRule(iM, SM)
-               } else {
-                 const MM = void 0 === OM ? void 0 : Math.min(OM, rM.cssRules.length);
- ... (22 more removed lines; see GitHub link above)
+       getProviders() {
+         return Array.from(this.providers.values())
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11123-L11131` → after: `L1116-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1116-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1116-L1156) · [Before (L11123-L11131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11123-L11131)

```diff
-       applyStyleDeclaration(MM, rM) {
-         if (MM.set) {
-           const iM = Ga(rM.rules, MM.index);
-           (null == iM ? void 0 : iM.style) && iM.style.setProperty(MM.set.property, MM.set.value, MM.set.priority)
-         }
-         if (MM.remove) {
-           const iM = Ga(rM.rules, MM.index);
-           (null == iM ? void 0 : iM.style) && iM.style.removeProperty(MM.remove.property)
-         }
+     }
+   },
+   41603: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => yU,
+       d: () => DU,
+       f: () => EU,
+       j: () => YU
+     });
+     const cU = [];
+     var yU;
+     ! function(UU) {
+       UU[UU.DEBUG = 0] = "DEBUG", UU[UU.VERBOSE = 1] = "VERBOSE", UU[UU.INFO = 2] = "INFO", UU[UU.WARN = 3] = "WARN", UU[UU.ERROR = 4] = "ERROR", UU[UU.SILENT = 5] = "SILENT"
+     }(yU || (yU = {}));
+     const QU = {
+         debug: yU.DEBUG,
+ ... (25 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11133-L11153` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1158-L1159) · [Before (L11133-L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11133-L11153)

```diff
-       applyAdoptedStyleSheet(MM) {
-         var rM;
-         const iM = this.mirror.lD(MM.id);
-         if (!iM) return;
-         null == (rM = MM.styles) || rM.forEach((MM => {
-           var rM;
-           let OM = null,
-             SM = null;
-           if (Ua(iM) ? SM = (null == (rM = iM.ownerDocument) ? void 0 : rM.defaultView) || null : "#document" === iM.nodeName && (SM = iM.defaultView), SM) try {
-             OM = new SM.CSSStyleSheet, this.styleMirror.add(OM, MM.styleId), this.applyStyleSheetRule({
-               source: pa.StyleSheetRule,
-               adds: MM.rules
-             }, OM)
-           } catch (jM) {}
-         }));
-         let OM = 0;
- ... (5 more removed lines; see GitHub link above)
+       get logLevel() {
+         return this._logLevel
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11155-L11173` → after: `L1161-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1161-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1161-L1163) · [Before (L11155-L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11155-L11173)

```diff
-       legacy_resolveMissingNode(MM, rM, iM, OM) {
-         const {
-           previousId: SM,
-           nextId: jM
-         } = OM, aM = SM && MM[SM], PM = jM && MM[jM];
-         if (aM) {
-           const {
-             node: OM,
-             mutation: SM
-           } = aM;
-           rM.insertBefore(OM, iM), delete MM[SM.node.id], delete this.legacy_missingNodeRetryMap[SM.node.id], (SM.previousId || SM.nextId) && this.legacy_resolveMissingNode(MM, rM, OM, SM)
-         }
-         if (PM) {
-           const {
-             node: OM,
-             mutation: SM
- ... (3 more removed lines; see GitHub link above)
+       set logLevel(UU) {
+         if (!(UU in yU)) throw new TypeError(`Invalid value "${UU}" assigned to \`logLevel\``);
+         this._logLevel = UU
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11175-L11184` → after: `L1165-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1165-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1165-L1166) · [Before (L11175-L11184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11175-L11184)

```diff
-       moveAndHover(MM, rM, iM, OM, SM) {
-         const jM = this.mirror.lD(iM);
-         if (!jM) return this.debugNodeNotFound(SM, iM);
-         const aM = Ea(jM, this.iframe),
-           PM = MM * aM.absoluteScale + aM.x,
-           nM = rM * aM.absoluteScale + aM.y;
-         this.mouse.style.left = `${PM}px`, this.mouse.style.top = `${nM}px`, OM || this.drawMouseTail({
-           x: PM,
-           y: nM
-         }), this.hoverElements(jM)
+       setLogLevel(UU) {
+         this._logLevel = "string" === typeof UU ? QU[UU] : UU
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11186-L11200` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1168-L1169) · [Before (L11186-L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11186-L11200)

```diff
-       drawMouseTail(MM) {
-         if (!this.mouseTail) return;
-         const {
-           lineCap: rM,
-           lineWidth: iM,
-           strokeStyle: OM,
-           duration: SM
-         } = !0 === this.config.mouseTail ? nn : Object.assign({}, nn, this.config.mouseTail), jM = () => {
-           if (!this.mouseTail) return;
-           const MM = this.mouseTail.getContext("2d");
-           MM && this.tailPositions.length && (MM.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), MM.beginPath(), MM.lineWidth = iM, MM.lineCap = rM, MM.strokeStyle = OM, MM.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((rM => M … [truncated]
-         };
-         this.tailPositions.push(MM), jM(), setTimeout((() => {
-           this.tailPositions = this.tailPositions.filter((rM => rM !== MM)), jM()
-         }), SM / this.speedService.state.context.timer.speed)
+       get logHandler() {
+         return this._logHandler
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11202-L11208` → after: `L1171-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1171-L1173) · [Before (L11202-L11208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11202-L11208)

```diff
-       hoverElements(MM) {
-         var rM;
-         null == (rM = this.lastHoveredRootNode || this.iframe.contentDocument) || rM.querySelectorAll(".\\:hover").forEach((MM => {
-           MM.classList.remove(":hover")
-         })), this.lastHoveredRootNode = MM.getRootNode();
-         let iM = MM;
-         for (; iM;) iM.classList && iM.classList.add(":hover"), iM = iM.parentElement
+       set logHandler(UU) {
+         if ("function" !== typeof UU) throw new TypeError("Value assigned to `logHandler` must be a function");
+         this._logHandler = UU
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11210-L11211` → after: `L1175-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1175-L1176) · [Before (L11210-L11211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11210-L11211)

```diff
-       isUserInteraction(MM) {
-         return MM.type === Ra.IncrementalSnapshot && (MM.data.source > pa.Mutation && MM.data.source <= pa.Input)
+       get userLogHandler() {
+         return this._userLogHandler
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11213-L11218` → after: `L1178-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1178-L1179) · [Before (L11213-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11213-L11218)

```diff
-       backToNormal() {
-         this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
-           type: "BACK_TO_NORMAL"
-         }), this.emitter.emit(Za.SkipEnd, {
-           speed: this.speedService.state.context.normalSpeed
-         }))
+       set userLogHandler(UU) {
+         this._userLogHandler = UU
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11220-L11221` → after: `L1181-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1181-L1183) · [Before (L11220-L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11220-L11221)

```diff
-       warnNodeNotFound(MM, rM) {
-         this.warn(`Node with id '${rM}' not found. `, MM)
+       debug() {
+         for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
+         this._userLogHandler && this._userLogHandler(this, yU.DEBUG, ...XU), this._logHandler(this, yU.DEBUG, ...XU)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11223-L11224` → after: `L1185-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1185-L1187) · [Before (L11223-L11224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11223-L11224)

```diff
-       warnCanvasMutationFailed(MM, rM) {
-         this.warn("Has error on canvas update", rM, "canvas mutation:", MM)
+       log() {
+         for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
+         this._userLogHandler && this._userLogHandler(this, yU.VERBOSE, ...XU), this._logHandler(this, yU.VERBOSE, ...XU)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11226-L11227` → after: `L1189-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1189-L1191) · [Before (L11226-L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11226-L11227)

```diff
-       debugNodeNotFound(MM, rM) {
-         this.debug(`Node with id '${rM}' not found. `, MM)
+       info() {
+         for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
+         this._userLogHandler && this._userLogHandler(this, yU.INFO, ...XU), this._logHandler(this, yU.INFO, ...XU)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11230-L11233` → after: `L1194-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1194-L1195) · [Before (L11230-L11233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11230-L11233)

```diff
-         if (this.config.showWarning) {
-           for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
-           this.config.logger.warn(Pn, ...rM)
-         }
+         for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
+         this._userLogHandler && this._userLogHandler(this, yU.WARN, ...XU), this._logHandler(this, yU.WARN, ...XU)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L11235-L11238` → after: `L1197-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1197-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/291.js#L1197-L1230) · [Before (L11235-L11238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/291.js#L11235-L11238)

```diff
-       debug() {
-         if (this.config.showDebug) {
-           for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
-           this.config.logger.log(Pn, ...rM)
+       error() {
+         for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
+         this._userLogHandler && this._userLogHandler(this, yU.ERROR, ...XU), this._logHandler(this, yU.ERROR, ...XU)
+       }
+     }
+ 
+     function EU(UU) {
+       cU.forEach((XU => {
+         XU.setLogLevel(UU)
+       }))
+     }
+ 
+     function YU(UU, XU) {
+       for (const zU of cU) {
+         let cU = null;
+         XU && XU.level && (cU = QU[XU.level]), zU.userLogHandler = null === UU ? null : function(XU, zU) {
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/292.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/292.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/292.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/292.js#L1)

```diff
- /*! For license information please see fo1voe.292.a9528d01.chunk.js.LICENSE.txt */
+ /*! For license information please see fecih8.292.0449abef.chunk.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/292.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/292.js#L5)

```diff
-   41593: (MM, rM, iM) => {
+   41610: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L7-L24` → after: `L7-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L7-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/292.js#L7-L18) · [Before (L7-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/292.js#L7-L24)

```diff
-       FirebaseError: () => OM.d,
-       SDK_VERSION: () => OM.g,
-       _DEFAULT_ENTRY_NAME: () => OM.j,
-       MOM: () => OM.l,
-       _addOrOverwriteComponent: () => OM.o,
-       _apps: () => OM.r,
-       _clearComponents: () => OM.t,
-       _components: () => OM.w,
-       _getProvider: () => OM.x,
-       _registerComponent: () => OM.z,
-       _removeServiceInstance: () => OM.A,
-       deleteApp: () => OM.B,
-       getApp: () => OM.G,
-       getApps: () => OM.F,
-       initializeApp: () => OM.H,
-       onLog: () => OM.K,
- ... (2 more removed lines; see GitHub link above)
+       getAnalytics: () => xX,
+       getGoogleAnalyticsClientId: () => bX,
+       initializeAnalytics: () => JX,
+       isSupported: () => jX,
+       logEvent: () => zz,
+       setAnalyticsCollectionEnabled: () => Uz,
+       setConsent: () => cz,
+       setCurrentScreen: () => KX,
+       setDefaultEventParameters: () => Xz,
+       setUserId: () => TX,
+       setUserProperties: () => hX,
+       settings: () => mX
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L26-L27` → after: `L20-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L20-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/292.js#L20-L1039) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/292.js#L26-L27)

```diff
-     var OM = iM(41598);
-     (0, OM.O)("firebase", "9.23.0", "app")
+     var cU = zU(41582),
+       yU = zU(41603),
+       QU = zU(41599),
+       AU = zU(41590);
+     let FU, oU;
+     const DU = new WeakMap,
+       EU = new WeakMap,
+       YU = new WeakMap,
+       NU = new WeakMap,
+       IU = new WeakMap;
+     let pU = {
+       get(UU, XU, zU) {
+         if (UU instanceof IDBTransaction) {
+           if ("done" === XU) return EU.get(UU);
+           if ("objectStoreNames" === XU) return UU.objectStoreNames || YU.get(UU);
+           if ("store" === XU) return zU.objectStoreNames[1] ? void 0 : zU.objectStore(zU.objectStoreNames[0])
+ ... (1004 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/293.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/293.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22)

#### 1. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L1)

```diff
- /*! For license information please see fo1voe.293.fdd0173b.chunk.js.LICENSE.txt */
+ /*! For license information please see fecih8.293.159d40a7.chunk.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L5-L77` → after: `L5-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L5-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L5-L1275) · [Before (L5-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L5-L77)

```diff
-   41611: (MM, rM, iM) => {
-     iM.d(rM, {
-       $: () => JM,
-       C: () => tM,
-       D: () => pM,
-       G: () => LM,
-       H: () => zM,
-       L: () => mM,
-       N: () => NM,
-       P: () => hM,
-       T: () => dM,
-       U: () => wM,
-       V: () => lM,
-       X: () => EM,
-       db: () => yM,
-       e: () => HM,
- ... (57 more removed lines; see GitHub link above)
+     41615: (UU, XU, zU) => {
+         zU.r(XU), zU.d(XU, {
+           ActionCodeOperation: () => NU,
+           ActionCodeURL: () => bX,
+           AuthCredential: () => HX,
+           AuthErrorCodes: () => gU,
+           EmailAuthCredential: () => lX,
+           EmailAuthProvider: () => hX,
+           FacebookAuthProvider: () => cz,
+           FactorId: () => oU,
+           GithubAuthProvider: () => Qz,
+           GoogleAuthProvider: () => yz,
+           OAuthCredential: () => JX,
+           OAuthProvider: () => zz,
+           OperationType: () => YU,
+           PhoneAuthCredential: () => KX,
+ ... (1255 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L79-L93` → after: `L1277-L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L1277-L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L1277-L3059) · [Before (L79-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L79-L93)

```diff
-             let iM = 0,
-               OM = 0;
-             for (; iM < MM.length;) {
-               const SM = MM[iM++];
-               if (SM < 128) rM[OM++] = String.fromCharCode(SM);
-               else if (SM > 191 && SM < 224) {
-                 const jM = MM[iM++];
-                 rM[OM++] = String.fromCharCode((31 & SM) << 6 | 63 & jM)
-               } else if (SM > 239 && SM < 365) {
-                 const jM = ((7 & SM) << 18 | (63 & MM[iM++]) << 12 | (63 & MM[iM++]) << 6 | 63 & MM[iM++]) - 65536;
-                 rM[OM++] = String.fromCharCode(55296 + (jM >> 10)), rM[OM++] = String.fromCharCode(56320 + (1023 & jM))
-               } else {
-                 const jM = MM[iM++],
-                   aM = MM[iM++];
-                 rM[OM++] = String.fromCharCode((15 & SM) << 12 | (63 & jM) << 6 | 63 & aM)
+             try {
+               for (const zU of this.queue) await zU(UU), zU.onAbort && XU.push(zU.onAbort)
+             } catch (zU) {
+               XU.reverse();
+               for (const UU of XU) try {
+                 UU()
+               } catch (cU) {}
+               throw this.auth._errorFactory.create("login-blocked", {
+                 originalMessage: null === zU || void 0 === zU ? void 0 : zU.message
+               })
+             }
+           }
+         }
+         class qX {
+           constructor(UU, XU, zU, cU) {
+             this.app = UU, this.heartbeatServiceProvider = XU, this.appCheckServiceProvider = zU, this.config = cU, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new SX(this), this.idTokenSubscription = new  … [truncated]
+ ... (1767 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L96-L117` → after: `L3099-L3145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3099-L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3099-L3145) · [Before (L96-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L96-L117)

```diff
-             return rM.join("")
-           }(this.decodeStringToByteArray(MM, rM))
-         },
-         decodeStringToByteArray(MM, rM) {
-           this.init_();
-           const iM = rM ? this.charToByteMapWebSafe_ : this.charToByteMap_,
-             OM = [];
-           for (let SM = 0; SM < MM.length;) {
-             const rM = iM[MM.charAt(SM++)],
-               aM = SM < MM.length ? iM[MM.charAt(SM)] : 0;
-             ++SM;
-             const PM = SM < MM.length ? iM[MM.charAt(SM)] : 64;
-             ++SM;
-             const nM = SM < MM.length ? iM[MM.charAt(SM)] : 64;
-             if (++SM, null == rM || null == aM || null == PM || null == nM) throw new jM;
-             const QM = rM << 2 | aM >> 4;
- ... (6 more removed lines; see GitHub link above)
+           }
+           async initializeServiceWorkerMessaging() {
+             return Lc() ? this.initializeReceiver() : this.initializeSender()
+           }
+           async initializeReceiver() {
+             this.receiver = Rc._getInstance(Lc() ? self : null), this.receiver._subscribe("keyChanged", (async (UU, XU) => ({
+               keyProcessed: (await this._poll()).includes(XU.key)
+             }))), this.receiver._subscribe("ping", (async (UU, XU) => ["keyChanged"]))
+           }
+           async initializeSender() {
+             var UU, XU;
+             if (this.activeServiceWorker = await async function() {
+                 if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
+                 try {
+                   return (await navigator.serviceWorker.ready).active
+                 } catch (UU) {
+ ... (31 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L120-L160` → after: `L3148-L3337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3148-L3337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3148-L3337) · [Before (L120-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L120-L160)

```diff
-           return OM
-         },
-         init_() {
-           if (!this.byteToCharMap_) {
-             this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
-             for (let MM = 0; MM < this.ENCODED_VALS.length; MM++) this.byteToCharMap_[MM] = this.ENCODED_VALS.charAt(MM), this.charToByteMap_[this.byteToCharMap_[MM]] = MM, this.byteToCharMapWebSafe_[MM] = this.ENCODED_VALS_WEBSAFE.charAt(MM), this.charToByteMapWebSafe_[this.byte … [truncated]
-           }
-         }
-       };
-     class jM extends Error {
-       constructor() {
-         super(...arguments), this.name = "DecodeBase64StringError"
-       }
-     }
-     const aM = function(MM) {
-         return function(MM) {
- ... (25 more removed lines; see GitHub link above)
+           async _set(UU, XU) {
+             return this._withPendingWrite((async () => (await this._withRetries((zU => rc(zU, UU, XU))), this.localCache[UU] = XU, this.notifyServiceWorker(UU))))
+           }
+           async _get(UU) {
+             const XU = await this._withRetries((XU => async function(UU, XU) {
+               const zU = Oc(UU, !1).get(XU),
+                 cU = await new qc(zU).toPromise();
+               return void 0 === cU ? null : cU.value
+             }(XU, UU)));
+             return this.localCache[UU] = XU, XU
+           }
+           async _remove(UU) {
+             return this._withPendingWrite((async () => (await this._withRetries((XU => uc(XU, UU))), delete this.localCache[UU], this.notifyServiceWorker(UU))))
+           }
+           async _poll() {
+             const UU = await this._withRetries((UU => {
+ ... (174 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L162` → after: `L3339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3339) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L162)

```diff
-               MM = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
+               this.assertNotDestroyed()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L164` → after: `L3341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3341) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L164)

```diff
-               return
+               return Promise.reject(UU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L166-L267` → after: `L3343-L3352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3343-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3343-L3352) · [Before (L166-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L166-L267)

```diff
-             const rM = MM && PM(MM[1]);
-             return rM && JSON.parse(rM)
-           })()
-         } catch (MM) {
-           return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${MM}`)
-         }
-       },
-       zM = MM => {
-         var rM, iM;
-         return null === (iM = null === (rM = QM()) || void 0 === rM ? void 0 : rM.emulatorHosts) || void 0 === iM ? void 0 : iM[MM]
-       },
-       LM = () => {
-         var MM;
-         return null === (MM = QM()) || void 0 === MM ? void 0 : MM.config
-       },
-       mM = MM => {
- ... (86 more removed lines; see GitHub link above)
+             return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((UU => {
+               throw this.renderPromise = null, UU
+             }))), this.renderPromise
+           }
+           _reset() {
+             this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
+           }
+           clear() {
+             this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((UU => {
+               this.container.removeChild(UU)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L269-L858` → after: `L3354-L3363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3354-L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3354-L3363) · [Before (L269-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L269-L858)

```diff
-           }(OM, rM) : "Error",
-           jM = `${this.serviceName}: ${SM} (${iM}).`;
-         return new CM(iM, jM, rM)
-       }
-     }
-     const bM = /\{\$([^}]+)}/g;
- 
-     function wM(MM) {
-       for (const rM in MM)
-         if (Object.prototype.hasOwnProperty.call(MM, rM)) return !1;
-       return !0
-     }
- 
-     function tM(MM, rM) {
-       if (MM === rM) return !0;
-       const iM = Object.keys(MM),
- ... (574 more removed lines; see GitHub link above)
+           }
+           validateStartingState() {
+             dU(!this.parameters.sitekey, this.auth, "argument-error"), dU(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), dU("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
+           }
+           makeTokenCallback(UU) {
+             return XU => {
+               if (this.tokenChangeListeners.forEach((UU => UU(XU))), "function" === typeof UU) UU(XU);
+               else if ("string" === typeof UU) {
+                 const zU = dc()[UU];
+                 "function" === typeof zU && zU(XU)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L862-L864` → after: `L3366-L3377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3366-L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3366-L3377) · [Before (L862-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L862-L864)

```diff
-             return {
-               heartbeatsToSend: iM,
-               unsentEntries: OM
+           }
+           assertNotDestroyed() {
+             dU(!this.destroyed, this.auth, "internal-error")
+           }
+           async makeRenderPromise() {
+             if (await this.init(), !this.widgetId) {
+               let UU = this.container;
+               if (!this.isInvisible) {
+                 const XU = document.createElement("div");
+                 UU.appendChild(XU), UU = XU
+               }
+               this.widgetId = this.getAssertedRecaptcha().render(UU, this.parameters)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L866-L895` → after: `L3379-L3459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3379-L3459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3379-L3459) · [Before (L866-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L866-L895)

```diff
-           }(this._heartbeatsCache.heartbeats),
-           OM = (0, jM.r)(JSON.stringify({
-             version: 2,
-             heartbeats: rM
-           }));
-         return this._heartbeatsCache.lastSentHeartbeatDate = MM, iM.length > 0 ? (this._heartbeatsCache.heartbeats = iM, await this.yJ.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.yJ.overwrite(this._heartbeatsCache)), OM
-       }
-     }
- 
-     function wr() {
-       return (new Date).toISOString().substring(0, 10)
-     }
-     class tr {
-       constructor(MM) {
-         this.app = MM, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
-       }
- ... (14 more removed lines; see GitHub link above)
+             return this.widgetId
+           }
+           async init() {
+             dU(wU() && !Lc(), this.auth, "internal-error"), await
+             function() {
+               let UU = null;
+               return new Promise((XU => {
+                 "complete" !== document.readyState ? (UU = () => XU(), window.addEventListener("load", UU)) : XU()
+               })).catch((XU => {
+                 throw UU && window.removeEventListener("load", UU), XU
+               }))
+             }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
+             const UU = await async function(UU) {
+               return (await HU(UU, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
+             }(this.auth);
+             dU(UU, this.auth, "internal-error"), this.parameters.sitekey = UU
+ ... (65 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L897` → after: `L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3461) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L897)

```diff
-                 wM.warn(MM.message)
+                 return AU.phoneResponseInfo.sessionInfo
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L900-L901` → after: `L3474-L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3474-L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3474-L3475) · [Before (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L900-L901)

```diff
-           }(this.app) || {
-             heartbeats: []
+           } finally {
+             zU._reset()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L904-L905` → after: `L3478-L3479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3478-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3478-L3479) · [Before (L904-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L904-L905)

```diff
-         return {
-           heartbeats: []
+         async function Uy(UU, XU) {
+           await gz((0, cU.R)(UU), XU)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L907-L915` → after: `L3481-L3508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3481-L3508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3481-L3508) · [Before (L907-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L907-L915)

```diff
-       }
-       async overwrite(MM) {
-         var rM;
-         if (await this._canUseIndexedDBPromise) {
-           const iM = await this.read();
-           return Cr(this.app, {
-             lastSentHeartbeatDate: null !== (rM = MM.lastSentHeartbeatDate) && void 0 !== rM ? rM : iM.lastSentHeartbeatDate,
-             heartbeats: MM.heartbeats
-           })
+         class Xy {
+           constructor(UU) {
+             this.providerId = Xy.PROVIDER_ID, this.auth = OX(UU)
+           }
+           verifyPhoneNumber(UU, XU) {
+             return hc(this.auth, UU, (0, cU.R)(XU))
+           }
+           static credential(UU, XU) {
+             return KX._fromVerification(UU, XU)
+           }
+           static credentialFromResult(UU) {
+             const XU = UU;
+             return Xy.credentialFromTaggedObject(XU)
+           }
+           static credentialFromError(UU) {
+             return Xy.credentialFromTaggedObject(UU.customData || {})
+ ... (12 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L917-L925` → after: `L3510-L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3510-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3510-L3512) · [Before (L917-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L917-L925)

```diff
-       }
-       async add(MM) {
-         var rM;
-         if (await this._canUseIndexedDBPromise) {
-           const iM = await this.read();
-           return Cr(this.app, {
-             lastSentHeartbeatDate: null !== (rM = MM.lastSentHeartbeatDate) && void 0 !== rM ? rM : iM.lastSentHeartbeatDate,
-             heartbeats: [...iM.heartbeats, ...MM.heartbeats]
-           })
+ 
+         function zy(UU, XU) {
+           return XU ? QX(XU) : (dU(UU._popupRedirectResolver, UU, "argument-error"), UU._popupRedirectResolver)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L927-L976` → after: `L3514-L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3514-L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3514-L3539) · [Before (L927-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L927-L976)

```diff
-       }
-     }
- 
-     function gr(MM) {
-       return (0, jM.r)(JSON.stringify({
-         version: 2,
-         heartbeats: MM
-       })).length
-     }
-     var ur;
-     ur = "", Sr(new OM.g("platform-logger", (MM => new CM(MM)), "PRIVATE")), Sr(new OM.g("heartbeat", (MM => new br(MM)), "PRIVATE")), dr(eM, bM, ur), dr(eM, bM, "esm2017"), dr("fire-js", "")
-   },
-   41605: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => PM,
-       g: () => SM
- ... (34 more removed lines; see GitHub link above)
+         Xy.PROVIDER_ID = "phone", Xy.PHONE_SIGN_IN_METHOD = "phone";
+         class cy extends HX {
+           constructor(UU) {
+             super("custom", "custom"), this.params = UU
+           }
+           _getIdTokenResponse(UU) {
+             return xX(UU, this._buildIdpRequest())
+           }
+           _linkToIdToken(UU, XU) {
+             return xX(UU, this._buildIdpRequest(XU))
+           }
+           _getReauthenticationResolver(UU) {
+             return xX(UU, this._buildIdpRequest())
+           }
+           _buildIdpRequest(UU) {
+             const XU = {
+ ... (10 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L978-L1012` → after: `L3541-L3596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3541-L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3541-L3596) · [Before (L978-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L978-L1012)

```diff
-         return this.instancesDeferred.get(rM).promise
-       }
-       getImmediate(MM) {
-         var rM;
-         const iM = this.normalizeInstanceIdentifier(null === MM || void 0 === MM ? void 0 : MM.identifier),
-           OM = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.optional) && void 0 !== rM && rM;
-         if (!this.isInitialized(iM) && !this.shouldAutoInitialize()) {
-           if (OM) return null;
-           throw Error(`Service ${this.name} is not available`)
-         }
-         try {
-           return this.getOrInitializeService({
-             instanceIdentifier: iM
-           })
-         } catch (SM) {
-           if (OM) return null;
- ... (19 more removed lines; see GitHub link above)
+ 
+         function yy(UU) {
+           return Bz(UU.auth, new cy(UU), UU.bypassAuthState)
+         }
+ 
+         function Qy(UU) {
+           const {
+             auth: XU,
+             user: zU
+           } = UU;
+           return dU(zU, XU, "internal-error"), Gz(zU, new cy(UU), UU.bypassAuthState)
+         }
+         async function Ay(UU) {
+           const {
+             auth: XU,
+             user: zU
+ ... (40 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L1014-L1018` → after: `L3598-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3598-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3598-L3628) · [Before (L1014-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L1014-L1018)

```diff
-               const MM = this.getOrInitializeService({
-                 instanceIdentifier: OM
-               });
-               iM.resolve(MM)
-             } catch (rM) {}
+               this.resolve(await this.getIdpTask(AU)(FU))
+             } catch (oU) {
+               this.reject(oU)
+             }
+           }
+           onError(UU) {
+             this.reject(UU)
+           }
+           getIdpTask(UU) {
+             switch (UU) {
+               case "signInViaPopup":
+               case "signInViaRedirect":
+                 return yy;
+               case "linkViaPopup":
+               case "linkViaRedirect":
+                 return Ay;
+ ... (15 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L1021-L1069` → after: `L3631-L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3631-L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3631-L3853) · [Before (L1021-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L1021-L1069)

```diff
-       }
-       clearInstance() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jM;
-         this.instancesDeferred.delete(MM), this.instancesOptions.delete(MM), this.instances.delete(MM)
-       }
-       async delete() {
-         const MM = Array.from(this.instances.values());
-         await Promise.all([...MM.filter((MM => "INTERNAL" in MM)).map((MM => MM.INTERNAL.delete())), ...MM.filter((MM => "_delete" in MM)).map((MM => MM._delete()))])
-       }
-       isComponentSet() {
-         return null != this.component
-       }
-       isInitialized() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jM;
-         return this.instances.has(MM)
-       }
- ... (33 more removed lines; see GitHub link above)
+         const oy = new OU(2e3, 1e4);
+         async function Dy(UU, XU, zU) {
+           const cU = OX(UU);
+           PU(UU, XU, Uz);
+           const yU = zy(cU, zU);
+           return new Ny(cU, "signInViaPopup", XU, yU).executeNotNull()
+         }
+         async function Ey(UU, XU, zU) {
+           const yU = (0, cU.R)(UU);
+           PU(yU.auth, XU, Uz);
+           const QU = zy(yU.auth, zU);
+           return new Ny(yU.auth, "reauthViaPopup", XU, QU, yU).executeNotNull()
+         }
+         async function Yy(UU, XU, zU) {
+           const yU = (0, cU.R)(UU);
+           PU(yU.auth, XU, Uz);
+ ... (207 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L1071` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3855) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L1071)

```diff
-             SM(MM, rM)
+             if (Sy(cU)) return
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L1073-L1210` → after: `L3857-L3883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3857-L3883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3857-L3883) · [Before (L1073-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L1073-L1210)

```diff
-       }
-       getOrInitializeService(MM) {
-         let {
-           instanceIdentifier: rM,
-           options: iM = {}
-         } = MM, OM = this.instances.get(rM);
-         if (!OM && this.component && (OM = this.component.instanceFactory(this.container, {
-             instanceIdentifier: (SM = rM, SM === jM ? void 0 : SM),
-             options: iM
-           }), this.instances.set(rM, OM), this.instancesOptions.set(rM, iM), this.invokeOnInitCallbacks(OM, rM), this.component.onInstanceCreated)) try {
-           this.component.onInstanceCreated(this.container, rM, OM)
-         } catch (aM) {}
-         var SM;
-         return OM || null
-       }
-       normalizeInstanceIdentifier() {
- ... (122 more removed lines; see GitHub link above)
+           BU(UU, "unauthorized-domain")
+         }
+ 
+         function Sy(UU) {
+           const XU = CU(),
+             {
+               protocol: zU,
+               hostname: cU
+             } = new URL(XU);
+           if (UU.startsWith("chrome-extension://")) {
+             const yU = new URL(UU);
+             return "" === yU.hostname && "" === cU ? "chrome-extension:" === zU && UU.replace("chrome-extension://", "") === XU.replace("chrome-extension://", "") : "chrome-extension:" === zU && yU.hostname === cU
+           }
+           if (!qy.test(zU)) return !1;
+           if (wy.test(UU)) return cU === UU;
+           const yU = UU.replace(/\./g, "\\.");
+ ... (11 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L1212-L1230` → after: `L3885-L3997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3885-L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3885-L3997) · [Before (L1212-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L1212-L1230)

```diff
-         rM && rM.level && (OM = jM[rM.level]), iM.userLogHandler = null === MM ? null : function(rM, iM) {
-           for (var jM = arguments.length, aM = new Array(jM > 2 ? jM - 2 : 0), PM = 2; PM < jM; PM++) aM[PM - 2] = arguments[PM];
-           const nM = aM.map((MM => {
-             if (null == MM) return null;
-             if ("string" === typeof MM) return MM;
-             if ("number" === typeof MM || "boolean" === typeof MM) return MM.toString();
-             if (MM instanceof Error) return MM.message;
-             try {
-               return JSON.stringify(MM)
-             } catch (rM) {
-               return null
-             }
-           })).filter((MM => MM)).join(" ");
-           iM >= (null !== OM && void 0 !== OM ? OM : rM.logLevel) && MM({
-             level: SM[iM].toLowerCase(),
-             message: nM,
- ... (3 more removed lines; see GitHub link above)
+ 
+         function iy(UU) {
+           return fy = fy || function(UU) {
+             return new Promise(((XU, zU) => {
+               var cU, yU, QU;
+ 
+               function AU() {
+                 uy(), gapi.load("gapi.iframes", {
+                   callback: () => {
+                     XU(gapi.iframes.getContext())
+                   },
+                   ontimeout: () => {
+                     uy(), zU(ZU(UU, "network-request-failed"))
+                   },
+                   timeout: ry.get()
+                 })
+ ... (97 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L1232-L1237` → after: `L3999-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L3999-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/293.js#L3999-L4026) · [Before (L1232-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/293.js#L1232-L1237)

```diff
-       }
-     }
-   }
- };
- Object.freeze(modules);
- for (const MM in modules) Object.freeze(modules[MM]);
+         const ly = "__/auth/handler",
+           xy = "emulator/auth/handler",
+           Jy = encodeURIComponent("fac");
+         async function jy(UU, XU, zU, QU, AU, FU) {
+             dU(UU.config.authDomain, UU, "auth-domain-config-required"), dU(UU.config.apiKey, UU, "invalid-api-key");
+             const oU = {
+               apiKey: UU.config.apiKey,
+               appName: UU.name,
+               authType: zU,
+               redirectUrl: QU,
+               v: yU.e,
+               eventId: AU
+             };
+             if (XU instanceof Uz) {
+               XU.setDefaultLanguage(UU.languageCode), oU.providerId = XU.providerId || "", (0, cU.ab)(XU.getCustomParameters()) || (oU.customParameters = JSON.stringify(XU.getCustomParameters()));
+               for (const [UU, XU] of Object.entries(FU || {})) oU[UU] = XU
+ ... (12 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/294.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/294.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79)

#### 1. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L5-L18` → after: `L4-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L4-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L142) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L5-L18)

```diff
-   41619: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       getAnalytics: () => Xr,
-       getGoogleAnalyticsClientId: () => Tr,
-       initializeAnalytics: () => Ir,
-       isSupported: () => Kr,
-       logEvent: () => ii,
-       setAnalyticsCollectionEnabled: () => Mi,
-       setConsent: () => Oi,
-       setCurrentScreen: () => qr,
-       setDefaultEventParameters: () => ri,
-       setUserId: () => Vr,
-       setUserProperties: () => cr,
-       settings: () => Fr
+   41652: (UU, XU, zU) => {
+     zU.d(XU, {
+       $: () => Ac,
+       $b: () => qU,
+       $f: () => fz,
+       A: () => mU,
+       Ab: () => zz,
+       Af: () => Xc,
+       Bc: () => mX,
+       Bd: () => rU,
+       Be: () => nz,
+       Cb: () => Xz,
+       Cc: () => VU,
+       Cf: () => Tz,
+       D: () => xX,
+       E: () => NU,
+ ... (123 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L20-L41` → after: `L144-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L144-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L144-L784) · [Before (L20-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L20-L41)

```diff
-     var OM = iM(41598),
-       SM = iM(41614),
-       jM = iM(41611),
-       aM = iM(41605);
-     let PM, nM;
-     const QM = new WeakMap,
-       zM = new WeakMap,
-       LM = new WeakMap,
-       mM = new WeakMap,
-       HM = new WeakMap;
-     let hM = {
-       get(MM, rM, iM) {
-         if (MM instanceof IDBTransaction) {
-           if ("done" === rM) return zM.get(MM);
-           if ("objectStoreNames" === rM) return MM.objectStoreNames || LM.get(MM);
-           if ("store" === rM) return iM.objectStoreNames[1] ? void 0 : iM.objectStore(iM.objectStoreNames[0])
- ... (6 more removed lines; see GitHub link above)
+     const cU = -2147483648,
+       yU = 12,
+       QU = 12,
+       AU = 4095,
+       FU = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
+       },
+       oU = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+ ... (625 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L43-L53` → after: `L786-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L786-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L786-L840) · [Before (L43-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L43-L53)

```diff
-     function JM(MM) {
-       return MM !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (nM || (nM = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(MM) ? function() {
-         for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
-         return MM.apply(lM(this), iM), yM(QM.get(this))
-       } : function() {
-         for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
-         return yM(MM.apply(lM(this), iM))
-       } : function(rM) {
-         for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
-         const jM = MM.call(lM(this), rM, ...OM);
-         return LM.set(jM, rM.sort ? rM.sort() : [rM]), yM(jM)
+     function oz(UU, XU, zU, cU, yU) {
+       var QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU;
+       switch (UU) {
+         case 32:
+           return 4 === cU && (null === (QU = yU.tickEnd) || void 0 === QU || QU.call(yU, gX.LY(XU, zU)), !0);
+         case 33:
+           return 12 === cU && (null === (AU = yU.entitySpawned) || void 0 === AU || AU.call(yU, kX.serverId(XU, zU), kX.index(XU, zU), kX.kind(XU, zU)), !0);
+         case 34:
+           return 12 === cU && (null === (FU = yU.entityDespawned) || void 0 === FU || FU.call(yU, kX.serverId(XU, zU), kX.index(XU, zU), kX.kind(XU, zU)), !0);
+         case 39:
+           return !(cU < 20) && (null === (oU = yU.changeBlockFail) || void 0 === oU || oU.call(yU, GX.pos(XU, zU, 0), GX.pos(XU, zU, 1), GX.pos(XU, zU, 2), GX.actual(XU, zU), GX.dataLen(XU, zU), zU + 20, cU - 20), !0);
+         case 46:
+           return 0 === cU && (null === (DU = yU.changeBlockFailEnd) || void 0 === DU || DU.call(yU), !0);
+         case 48:
+           return 20 === cU && (null === (EU = yU.inventoryEvent) || void 0 === EU || EU.call(yU, BX.what(XU, zU), BX.value(XU, zU), BX.pos(XU, zU, 0), BX.pos(XU, zU, 1), BX.pos(XU, zU, 2), BX.block(XU, zU)), !0);
+         case 49:
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L58-L74` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L899) · [Before (L58-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L58-L74)

```diff
-       return "function" === typeof MM ? JM(MM) : (MM instanceof IDBTransaction && function(MM) {
-         if (zM.has(MM)) return;
-         const rM = new Promise(((rM, iM) => {
-           const OM = () => {
-               MM.removeEventListener("complete", SM), MM.removeEventListener("error", jM), MM.removeEventListener("abort", jM)
-             },
-             SM = () => {
-               rM(), OM()
-             },
-             jM = () => {
-               iM(MM.error || new DOMException("AbortError", "AbortError")), OM()
-             };
-           MM.addEventListener("complete", SM), MM.addEventListener("error", jM), MM.addEventListener("abort", jM)
-         }));
-         zM.set(MM, rM)
-       }(MM), rM = MM, (PM || (PM = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((MM => rM instanceof MM)) ? new Proxy(MM, hM) : MM);
- ... (1 more removed lines; see GitHub link above)
+       return Ez.buffer !== UU.buffer && (Ez = new Uint8Array(UU.buffer)), Ez
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L77-L97` → after: `L902-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L902-L905) · [Before (L77-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L77-L97)

```diff
-     function yM(MM) {
-       if (MM instanceof IDBRequest) return function(MM) {
-         const rM = new Promise(((rM, iM) => {
-           const OM = () => {
-               MM.removeEventListener("success", SM), MM.removeEventListener("error", jM)
-             },
-             SM = () => {
-               rM(yM(MM.result)), OM()
-             },
-             jM = () => {
-               iM(MM.error), OM()
-             };
-           MM.addEventListener("success", SM), MM.addEventListener("error", jM)
-         }));
-         return rM.then((rM => {
-           rM instanceof IDBCursor && QM.set(rM, MM)
- ... (5 more removed lines; see GitHub link above)
+     function Nz(UU, XU, zU) {
+       const cU = UU.gY(66, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint8(cU + 0, zU), !0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L104-L117` → after: `L908-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L908-L911) · [Before (L104-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L104-L117)

```diff
-     function CM(MM, rM) {
-       if (!(MM instanceof IDBDatabase) || rM in MM || "string" !== typeof rM) return;
-       if (GM.get(rM)) return GM.get(rM);
-       const iM = rM.replace(/FromIndex$/, ""),
-         OM = rM !== iM,
-         SM = UM.includes(iM);
-       if (!(iM in (OM ? IDBIndex : IDBObjectStore).prototype) || !SM && !EM.includes(iM)) return;
-       const jM = async function(MM) {
-         const rM = this.transaction(MM, SM ? "readwrite" : "readonly");
-         let jM = rM.store;
-         for (var aM = arguments.length, PM = new Array(aM > 1 ? aM - 1 : 0), nM = 1; nM < aM; nM++) PM[nM - 1] = arguments[nM];
-         return OM && (jM = jM.index(PM.shift())), (await Promise.all([jM[iM](...PM), SM && rM.done]))[0]
-       };
-       return GM.set(rM, jM), jM
+     function Iz(UU, XU, zU) {
+       const cU = UU.gY(67, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint32(cU + 0, zU, !0), !0
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L140-L141` → after: `L914-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L914-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L914-L917) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L140-L141)

```diff
-     function WM(MM) {
-       return MM instanceof jM.j && MM.code.includes("request-failed")
+     function pz(UU, XU, zU) {
+       const cU = UU.gY(68, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint8(cU + 0, zU), !0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L144-L148` → after: `L920-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L920-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L920-L924) · [Before (L144-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L144-L148)

```diff
-     function sM(MM) {
-       let {
-         projectId: rM
-       } = MM;
-       return `https://firebaseinstallations.googleapis.com/v1/projects/${rM}/installations`
+     function az(UU, XU, zU, cU) {
+       const yU = UU.gY(69, XU, 4 + cU.length);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       return QU.setUint8(yU + 0, zU), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L151-L167` → after: `L927-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L927-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L927-L931) · [Before (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L151-L167)

```diff
-     function DM(MM) {
-       return {
-         token: MM.token,
-         requestStatus: 2,
-         expiresIn: (rM = MM.expiresIn, Number(rM.replace("s", "000"))),
-         creationTime: Date.now()
-       };
-       var rM
-     }
-     async function kM(MM, rM) {
-       const iM = (await rM.json()).error;
-       return pM.create("request-failed", {
-         requestName: MM,
-         serverCode: iM.code,
-         serverMessage: iM.message,
-         serverStatus: iM.status
- ... (1 more removed lines; see GitHub link above)
+     function tz(UU, XU, zU, cU, yU) {
+       const QU = UU.gY(128, XU, 4 + yU.length);
+       if (QU < 0) return !1;
+       const AU = UU.view;
+       return AU.setUint8(QU + 0, zU), AU.setUint16(QU + 2, cU, !0), Yz(AU).set(yU, AU.byteOffset + QU + 4), !0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L170-L178` → after: `L934-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L934-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L934-L937) · [Before (L170-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L170-L178)

```diff
-     function ZM(MM) {
-       let {
-         apiKey: rM
-       } = MM;
-       return new Headers({
-         "Content-Type": "application/json",
-         Accept: "application/json",
-         "x-goog-api-key": rM
-       })
+     function gz(UU, XU, zU) {
+       const cU = UU.gY(131, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setInt32(cU + 0, zU, !0), !0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L181-L192` → after: `L940-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L940-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L940-L943) · [Before (L181-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L181-L192)

```diff
-     function oM(MM, rM) {
-       let {
-         refreshToken: iM
-       } = rM;
-       const OM = ZM(MM);
-       return OM.append("Authorization", function(MM) {
-         return `${gM} ${MM}`
-       }(iM)), OM
-     }
-     async function fM(MM) {
-       const rM = await MM();
-       return rM.status >= 500 && rM.status < 600 ? MM() : rM
+     function kz(UU, XU, zU) {
+       const cU = UU.gY(132, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint32(cU + 0, zU, !0), !0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L195-L198` → after: `L946-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L946-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L946-L949) · [Before (L195-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L195-L198)

```diff
-     function YM(MM) {
-       return new Promise((rM => {
-         setTimeout(rM, MM)
-       }))
+     function Gz(UU, XU, zU) {
+       const cU = UU.gY(133, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint32(cU + 0, zU, !0), !0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L202-L214` → after: `L952-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L952-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L952-L955) · [Before (L202-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L202-L214)

```diff
-     function AM() {
-       try {
-         const MM = new Uint8Array(17);
-         (self.crypto || self.msCrypto).getRandomValues(MM), MM[0] = 112 + MM[0] % 16;
-         const rM = function(MM) {
-           const rM = (iM = MM, btoa(String.fromCharCode(...iM)).replace(/\+/g, "-").replace(/\//g, "_"));
-           var iM;
-           return rM.substr(0, 22)
-         }(MM);
-         return NM.test(rM) ? rM : ""
-       } catch (MM) {
-         return ""
-       }
+     function Bz(UU, XU, zU) {
+       const cU = UU.gY(144, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint8(cU + 0, zU), !0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L217-L218` → after: `L958-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L958-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L958-L962) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L217-L218)

```diff
-     function xM(MM) {
-       return `${MM.appName}!${MM.appId}`
+     function Zz(UU, XU, zU, cU, yU) {
+       const QU = UU.gY(145, XU, 12);
+       if (QU < 0) return !1;
+       const AU = UU.view;
+       return AU.setInt32(QU + 0, zU, !0), AU.setInt32(QU + 4, cU, !0), AU.setInt32(QU + 8, yU, !0), !0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L222-L232` → after: `L965-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L965-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L965-L969) · [Before (L222-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L222-L232)

```diff
-     function FM(MM, rM) {
-       const iM = xM(MM);
-       BM(iM, rM),
-         function(MM, rM) {
-           const iM = IM();
-           iM && iM.postMessage({
-             key: MM,
-             fid: rM
-           });
-           KM()
-         }(iM, rM)
+     function Rz(UU, XU, zU, cU) {
+       const yU = UU.gY(256, XU, 4 + cU.length);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       return QU.setUint16(yU + 0, zU, !0), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L235-L238` → after: `L972-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L972-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L972-L975) · [Before (L235-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L235-L238)

```diff
-     function BM(MM, rM) {
-       const iM = vM.get(MM);
-       if (iM)
-         for (const OM of iM) OM(rM)
+     function Pz(UU, XU, zU) {
+       const cU = UU.gY(258, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint8(cU + 0, zU), !0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L242-L245` → after: `L978-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L978-L985) · [Before (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L242-L245)

```diff
-     function IM() {
-       return !XM && "BroadcastChannel" in self && (XM = new BroadcastChannel("[Firebase] FID Change"), XM.onmessage = MM => {
-         BM(MM.data.key, MM.data.fid)
-       }), XM
+     function Wz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
+       const DU = UU.gY(320, XU, 48 + oU.length);
+       if (DU < 0) return !1;
+       const EU = UU.view;
+       EU.setUint32(DU + 0, zU, !0), EU.setUint16(DU + 4, cU, !0), EU.setUint16(DU + 6, yU, !0), EU.setUint32(DU + 8, QU, !0);
+       for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 12 + 8 * YU, AU[YU], !0);
+       for (let YU = 0; YU < 3; YU++) EU.setFloat32(DU + 36 + 4 * YU, FU[YU], !0);
+       return Yz(EU).set(oU, EU.byteOffset + DU + 48), !0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L248-L249` → after: `L988-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L988-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L988-L995) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L248-L249)

```diff
-     function KM() {
-       0 === vM.size && XM && (XM.close(), XM = null)
+     function dz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
+       const DU = UU.gY(321, XU, 48 + oU.length);
+       if (DU < 0) return !1;
+       const EU = UU.view;
+       EU.setUint32(DU + 0, zU, !0), EU.setInt32(DU + 4, cU, !0), EU.setUint16(DU + 8, yU, !0), EU.setUint16(DU + 10, QU, !0);
+       for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 12 + 8 * YU, AU[YU], !0);
+       for (let YU = 0; YU < 3; YU++) EU.setFloat32(DU + 36 + 4 * YU, FU[YU], !0);
+       return Yz(EU).set(oU, EU.byteOffset + DU + 48), !0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L254-L398` → after: `L998-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L998-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L998-L1005) · [Before (L254-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L254-L398)

```diff
-     function VM() {
-       return TM || (TM = function(MM, rM) {
-         let {
-           blocked: iM,
-           upgrade: OM,
-           blocking: SM,
-           terminated: jM
-         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         const aM = indexedDB.open(MM, rM),
-           PM = yM(aM);
-         return OM && aM.addEventListener("upgradeneeded", (MM => {
-           OM(yM(aM.result), MM.oldVersion, MM.newVersion, yM(aM.transaction))
-         })), iM && aM.addEventListener("blocked", (() => iM())), PM.then((MM => {
-           jM && MM.addEventListener("close", (() => jM())), SM && MM.addEventListener("versionchange", (() => SM()))
-         })).catch((() => {})), PM
-       }("firebase-installations-database", 1, {
- ... (129 more removed lines; see GitHub link above)
+     function Lz(UU, XU, zU, cU, yU, QU, AU) {
+       const FU = UU.gY(322, XU, 44 + AU.length);
+       if (FU < 0) return !1;
+       const oU = UU.view;
+       oU.setUint32(FU + 0, zU, !0), oU.setUint32(FU + 4, cU, !0);
+       for (let DU = 0; DU < 3; DU++) oU.setFloat64(FU + 8 + 8 * DU, yU[DU], !0);
+       for (let DU = 0; DU < 3; DU++) oU.setFloat32(FU + 32 + 4 * DU, QU[DU], !0);
+       return Yz(oU).set(AU, oU.byteOffset + FU + 44), !0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L401-L405` → after: `L1008-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1008-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1008-L1011) · [Before (L401-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L401-L405)

```diff
-     function Sr(MM) {
-       return rr(MM, (MM => {
-         if (!MM) throw pM.create("installation-not-found");
-         return jr(MM)
-       }))
+     function ez(UU, XU, zU) {
+       const cU = UU.gY(323, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint32(cU + 0, zU, !0), !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L408-L500` → after: `L1014-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1014-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1014-L1020) · [Before (L408-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L408-L500)

```diff
-     function jr(MM) {
-       return 1 === (rM = MM).registrationStatus && rM.registrationTime + wM < Date.now() ? {
-         fid: MM.fid,
-         registrationStatus: 0
-       } : MM;
-       var rM
-     }
-     async function ar(MM, rM) {
-       let {
-         appConfig: iM,
-         heartbeatServiceProvider: OM
-       } = MM;
-       const SM = function(MM, rM) {
-           let {
-             fid: iM
-           } = rM;
- ... (77 more removed lines; see GitHub link above)
+     function Cz(UU, XU, zU, cU, yU, QU) {
+       const AU = UU.gY(324, XU, 32 + QU.length);
+       if (AU < 0) return !1;
+       const FU = UU.view;
+       FU.setUint32(AU + 0, zU, !0), FU.setUint32(AU + 4, cU, !0);
+       for (let oU = 0; oU < 3; oU++) FU.setFloat64(AU + 8 + 8 * oU, yU[oU], !0);
+       return Yz(FU).set(QU, FU.byteOffset + AU + 32), !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L503-L513` → after: `L1023-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1023-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1023-L1024) · [Before (L503-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L503-L513)

```diff
-     function nr(MM) {
-       return rr(MM, (MM => {
-         if (!Qr(MM)) throw pM.create("not-registered");
-         const rM = MM.authToken;
-         return 1 === (iM = rM).requestStatus && iM.requestTime + wM < Date.now() ? Object.assign(Object.assign({}, MM), {
-           authToken: {
-             requestStatus: 0
-           }
-         }) : MM;
-         var iM
-       }))
+     function wz(UU, XU) {
+       return !(UU.gY(325, XU, 0) < 0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L516-L517` → after: `L1027-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1027-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1027-L1031) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L516-L517)

```diff
-     function Qr(MM) {
-       return void 0 !== MM && 2 === MM.registrationStatus
+     function qz(UU, XU, zU, cU, yU, QU) {
+       const AU = UU.gY(384, XU, 16);
+       if (AU < 0) return !1;
+       const FU = UU.view;
+       return FU.setUint32(AU + 0, zU, !0), FU.setUint32(AU + 4, cU, !0), FU.setFloat32(AU + 8, yU, !0), FU.setFloat32(AU + 12, QU, !0), !0
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L519-L528` → after: `L1033-L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1033-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1033-L1040) · [Before (L519-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L519-L528)

```diff
-     async function zr(MM) {
-       let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const iM = MM;
-       await async function(MM) {
-         const {
-           registrationPromise: rM
-         } = await ir(MM);
-         rM && await rM
-       }(iM);
-       return (await Pr(iM, rM)).token
+ 
+     function Oz(UU, XU, zU, cU, yU, QU, AU) {
+       const FU = UU.gY(385, XU, 36 + AU.length);
+       if (FU < 0) return !1;
+       const oU = UU.view;
+       oU.setUint32(FU + 0, zU, !0), oU.setUint32(FU + 4, cU, !0);
+       for (let DU = 0; DU < 3; DU++) oU.setFloat64(FU + 8 + 8 * DU, yU[DU], !0);
+       return oU.setUint32(FU + 32, QU, !0), Yz(oU).set(AU, oU.byteOffset + FU + 36), !0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L531-L534` → after: `L1043-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1043-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1043-L1050) · [Before (L531-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L531-L534)

```diff
-     function Lr(MM) {
-       return pM.create("missing-app-config-values", {
-         valueName: MM
-       })
+     function Sz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
+       const DU = UU.gY(386, XU, 56 + oU.length);
+       if (DU < 0) return !1;
+       const EU = UU.view;
+       EU.setUint32(DU + 0, zU, !0), EU.setUint8(DU + 4, cU);
+       for (let YU = 0; YU < 4; YU++) EU.setFloat32(DU + 8 + 4 * YU, yU[YU], !0);
+       for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 24 + 8 * YU, QU[YU], !0);
+       return EU.setUint32(DU + 48, AU, !0), EU.setUint32(DU + 52, FU, !0), Yz(EU).set(oU, EU.byteOffset + DU + 56), !0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L594-L601` → after: `L1053-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1053-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1053-L1062) · [Before (L594-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L594-L601)

```diff
-     function Ur(MM) {
-       if (!MM.startsWith(dr)) {
-         const rM = Er.create("invalid-gtag-resource", {
-           gtagURL: MM
-         });
-         return yr.warn(rM.message), ""
-       }
-       return MM
+     function rz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
+       const DU = UU.gY(387, XU, 56);
+       if (DU < 0) return !1;
+       const EU = UU.view;
+       EU.setUint32(DU + 0, zU, !0), EU.setUint16(DU + 4, cU, !0), EU.setUint8(DU + 6, yU);
+       for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 8 + 8 * YU, QU[YU], !0);
+       for (let YU = 0; YU < 2; YU++) EU.setFloat32(DU + 32 + 4 * YU, AU[YU], !0);
+       EU.setFloat32(DU + 40, FU, !0);
+       for (let YU = 0; YU < 3; YU++) EU.setFloat32(DU + 44 + 4 * YU, oU[YU], !0);
+       return !0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L604-L605` → after: `L1065-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1065-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1065-L1068) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L604-L605)

```diff
-     function Gr(MM) {
-       return Promise.all(MM.map((MM => MM.catch((MM => MM)))))
+     function uz(UU, XU, zU) {
+       const cU = UU.gY(388, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint32(cU + 0, zU, !0), !0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L608-L617` → after: `L1071-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1071-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1071-L1075) · [Before (L608-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L608-L617)

```diff
-     function Cr(MM, rM) {
-       const iM = function(MM, rM) {
-           let iM;
-           return window.trustedTypes && (iM = window.trustedTypes.createPolicy(MM, rM)), iM
-         }("firebase-js-sdk-policy", {
-           createScriptURL: Ur
-         }),
-         OM = document.createElement("script"),
-         SM = `${dr}?l=${MM}&id=${rM}`;
-       OM.src = iM ? null === iM || void 0 === iM ? void 0 : iM.createScriptURL(SM) : SM, OM.async = !0, document.head.appendChild(OM)
+     function fz(UU, XU, zU, cU) {
+       const yU = UU.gY(389, XU, 8);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       return QU.setInt32(yU + 0, zU, !0), QU.setFloat32(yU + 4, cU, !0), !0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L621-L676` → after: `L1079-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1079-L1082) · [Before (L621-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L621-L676)

```diff
-       return async function(SM) {
-         try {
-           for (var jM = arguments.length, aM = new Array(jM > 1 ? jM - 1 : 0), PM = 1; PM < jM; PM++) aM[PM - 1] = arguments[PM];
-           if ("event" === SM) {
-             const [OM, SM] = aM;
-             await async function(MM, rM, iM, OM, SM) {
-               try {
-                 let jM = [];
-                 if (SM && SM.send_to) {
-                   let MM = SM.send_to;
-                   Array.isArray(MM) || (MM = [MM]);
-                   const OM = await Gr(iM);
-                   for (const iM of MM) {
-                     const MM = OM.find((MM => MM.measurementId === iM)),
-                       SM = MM && rM[MM.appId];
-                     if (!SM) {
- ... (40 more removed lines; see GitHub link above)
+       const yU = UU.gY(390, XU, 8);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       return QU.setInt32(yU + 0, zU, !0), QU.setFloat32(yU + 4, cU, !0), !0
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L695-L699` → after: `L1085-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1085-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1085-L1089) · [Before (L695-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L695-L699)

```diff
-     function wr(MM) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": MM
-       })
+     function Hz(UU, XU, zU, cU, yU, QU) {
+       const AU = UU.gY(391, XU, 12);
+       if (AU < 0) return !1;
+       const FU = UU.view;
+       return FU.setFloat32(AU + 0, zU, !0), FU.setFloat32(AU + 4, cU, !0), FU.setUint8(AU + 8, yU), FU.setUint8(AU + 9, QU), !0
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L701-L728` → after: `L1091-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1091-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1091-L1095) · [Before (L701-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L701-L728)

```diff
-     async function tr(MM) {
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : br,
-         iM = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: OM,
-         apiKey: SM,
-         measurementId: jM
-       } = MM.options;
-       if (!OM) throw Er.create("no-app-id");
-       if (!SM) {
-         if (jM) return {
-           measurementId: jM,
-           appId: OM
-         };
-         throw Er.create("no-api-key")
-       }
- ... (12 more removed lines; see GitHub link above)
+ 
+     function Mz(UU, XU, zU) {
+       const cU = UU.gY(392, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint32(cU + 0, zU, !0), !0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L730-L803` → after: `L1097-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1097-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1097-L1102) · [Before (L730-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L730-L803)

```diff
-     async function gr(MM, rM, iM) {
-       let {
-         throttleEndTimeMillis: OM,
-         backoffCount: SM
-       } = rM, aM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : br;
-       var PM;
-       const {
-         appId: nM,
-         measurementId: QM
-       } = MM;
-       try {
-         await
-         function(MM, rM) {
-           return new Promise(((iM, OM) => {
-             const SM = Math.max(rM - Date.now(), 0),
-               jM = setTimeout(iM, SM);
- ... (58 more removed lines; see GitHub link above)
+ 
+     function vz(UU, XU, zU, cU, yU) {
+       const QU = UU.gY(393, XU, 12);
+       if (QU < 0) return !1;
+       const AU = UU.view;
+       return AU.setUint32(QU + 0, zU, !0), AU.setUint16(QU + 4, cU, !0), AU.setFloat32(QU + 8, yU, !0), !0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L805-L814` → after: `L1104-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1104-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1104-L1113) · [Before (L805-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L805-L814)

```diff
-     class ur {
-       constructor() {
-         this.listeners = []
-       }
-       addEventListener(MM) {
-         this.listeners.push(MM)
-       }
-       abort() {
-         this.listeners.forEach((MM => MM()))
-       }
+ 
+     function Vz(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU) {
+       const NU = UU.gY(394, XU, 56 + YU.length);
+       if (NU < 0) return !1;
+       const IU = UU.view;
+       IU.setUint32(NU + 0, zU, !0), IU.setUint16(NU + 4, cU, !0), IU.setUint8(NU + 6, yU), IU.setUint8(NU + 7, QU);
+       for (let pU = 0; pU < 3; pU++) IU.setFloat64(NU + 8 + 8 * pU, AU[pU], !0);
+       IU.setFloat32(NU + 32, FU, !0), IU.setInt32(NU + 36, oU, !0);
+       for (let pU = 0; pU < 3; pU++) IU.setFloat32(NU + 40 + 4 * pU, DU[pU], !0);
+       return IU.setFloat32(NU + 52, EU, !0), Yz(IU).set(YU, IU.byteOffset + NU + 56), !0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L818-L819` → after: `L1116-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1116-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1116-L1119) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L818-L819)

```diff
-     function Wr(MM) {
-       pr = MM
+     function sz(UU, XU, zU) {
+       const cU = UU.gY(398, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setUint32(cU + 0, zU, !0), !0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L822-L823` → after: `L1122-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1122-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1122-L1126) · [Before (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L822-L823)

```diff
-     function sr(MM) {
-       Rr = MM
+     function nz(UU, XU, zU, cU, yU) {
+       const QU = UU.gY(399, XU, 12);
+       if (QU < 0) return !1;
+       const AU = UU.view;
+       return AU.setUint32(QU + 0, zU, !0), AU.setUint32(QU + 4, cU, !0), AU.setFloat32(QU + 8, yU, !0), !0
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L825-L851` → after: `L1128-L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1128-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1128-L1132) · [Before (L825-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L825-L851)

```diff
-     async function Dr(MM, rM, iM, OM, SM, aM, PM) {
-       var nM;
-       const QM = tr(MM);
-       QM.then((rM => {
-         iM[rM.measurementId] = rM.appId, MM.options.measurementId && rM.measurementId !== MM.options.measurementId && yr.warn(`The measurement ID in the local Firebase config (${MM.options.measurementId}) does not match the measurement ID fetched from the server (${rM.measurement … [truncated]
-       })).catch((MM => yr.error(MM))), rM.push(QM);
-       const zM = async function() {
-         if (!(0, jM.X)()) return yr.warn(Er.create("indexeddb-unavailable", {
-           errorInfo: "IndexedDB is not available in this environment."
-         }).message), !1;
-         try {
-           await (0, jM.jb)()
-         } catch (MM) {
-           return yr.warn(Er.create("indexeddb-unavailable", {
-             errorInfo: null === MM || void 0 === MM ? void 0 : MM.toString()
-           }).message), !1
- ... (11 more removed lines; see GitHub link above)
+ 
+     function mz(UU, XU, zU) {
+       const cU = UU.gY(448, XU, 4);
+       if (cU < 0) return !1;
+       return UU.view.setFloat32(cU + 0, zU, !0), !0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L853-L859` → after: `L1134-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1134-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1134-L1140) · [Before (L853-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L853-L859)

```diff
-     class kr {
-       constructor(MM) {
-         this.app = MM
-       }
-       _delete() {
-         return delete Zr[this.app.options.appId], Promise.resolve()
-       }
+ 
+     function lz(UU, XU, zU, cU) {
+       const yU = UU.gY(450, XU, 12);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       for (let AU = 0; AU < 2; AU++) QU.setFloat32(yU + 0 + 4 * AU, zU[AU], !0);
+       return QU.setUint8(yU + 8, cU), !0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L868-L870` → after: `L1143-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1143-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1143-L1147) · [Before (L868-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L868-L870)

```diff
-     function Fr(MM) {
-       if (vr) throw Er.create("already-initialized");
-       MM.dataLayerName && (Ar = MM.dataLayerName), MM.gtagName && (xr = MM.gtagName)
+     function xz(UU, XU, zU, cU) {
+       const yU = UU.gY(452, XU, 8);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       return QU.setFloat32(yU + 0, zU, !0), QU.setUint8(yU + 4, cU), !0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L873-L914` → after: `L1150-L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1150-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1150-L1154) · [Before (L873-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L873-L914)

```diff
-     function Br(MM, rM, iM) {
-       ! function() {
-         const MM = [];
-         if ((0, jM.T)() && MM.push("This is a browser extension environment."), (0, jM.m)() || MM.push("Cookies are not available."), MM.length > 0) {
-           const rM = MM.map(((MM, rM) => `(${rM+1}) ${MM}`)).join(" "),
-             iM = Er.create("invalid-analytics-context", {
-               errorInfo: rM
-             });
-           yr.warn(iM.message)
-         }
-       }();
-       const OM = MM.options.appId;
-       if (!OM) throw Er.create("no-app-id");
-       if (!MM.options.apiKey) {
-         if (!MM.options.measurementId) throw Er.create("no-api-key");
-         yr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${MM.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
- ... (26 more removed lines; see GitHub link above)
+     function Jz(UU, XU, zU, cU, yU) {
+       const QU = UU.gY(454, XU, 4);
+       if (QU < 0) return !1;
+       const AU = UU.view;
+       return AU.setUint8(QU + 0, zU), AU.setUint8(QU + 1, cU), AU.setUint8(QU + 2, yU), !0
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L917-L921` → after: `L1157-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1157-L1162) · [Before (L917-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L917-L921)

```diff
-     function Xr() {
-       let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.G)();
-       MM = (0, jM.N)(MM);
-       const rM = (0, OM.x)(MM, Jr);
-       return rM.isInitialized() ? rM.getImmediate() : Ir(MM)
+     function jz(UU, XU, zU, cU) {
+       const yU = UU.gY(455, XU, 40);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       for (let AU = 0; AU < 9; AU++) QU.setInt32(yU + 0 + 4 * AU, zU[AU], !0);
+       return QU.setUint32(yU + 36, cU, !0), !0
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L924-L934` → after: `L1165-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1165-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1165-L1169) · [Before (L924-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L924-L934)

```diff
-     function Ir(MM) {
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const iM = (0, OM.x)(MM, Jr);
-       if (iM.isInitialized()) {
-         const MM = iM.getImmediate();
-         if ((0, jM.C)(rM, iM.getOptions())) return MM;
-         throw Er.create("already-initialized")
-       }
-       return iM.initialize({
-         options: rM
-       })
+     function Kz(UU, XU, zU, cU) {
+       const yU = UU.gY(456, XU, 8);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       return QU.setFloat32(yU + 0, zU, !0), QU.setUint8(yU + 4, cU), !0
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L936-L944` → after: `L1171-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1171-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1171-L1178) · [Before (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L936-L944)

```diff
-     async function Kr() {
-       if ((0, jM.T)()) return !1;
-       if (!(0, jM.m)()) return !1;
-       if (!(0, jM.X)()) return !1;
-       try {
-         return await (0, jM.jb)()
-       } catch (MM) {
-         return !1
-       }
+ 
+     function bz(UU, XU, zU, cU, yU) {
+       const QU = UU.gY(457, XU, 16);
+       if (QU < 0) return !1;
+       const AU = UU.view;
+       for (let FU = 0; FU < 3; FU++) AU.setInt32(QU + 0 + 4 * FU, zU[FU], !0);
+       for (let FU = 0; FU < 3; FU++) AU.setInt8(QU + 12 + 1 * FU, cU[FU]);
+       return AU.setUint8(QU + 15, yU), !0
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L947-L956` → after: `L1181-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1181-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1181-L1185) · [Before (L947-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L947-L956)

```diff
-     function qr(MM, rM, iM) {
-       MM = (0, jM.N)(MM), async function(MM, rM, iM, OM) {
-         if (OM && OM.global) return MM("set", {
-           screen_name: iM
-         }), Promise.resolve();
-         MM("config", await rM, {
-           update: !0,
-           screen_name: iM
-         })
-       }(Nr, Zr[MM.app.options.appId], rM, iM).catch((MM => yr.error(MM)))
+     function Tz(UU, XU, zU, cU) {
+       const yU = UU.gY(530, XU, 4 + cU.length);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       return QU.setUint8(yU + 0, zU), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L958-L966` → after: `L1187-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1187-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1187-L1192) · [Before (L958-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L958-L966)

```diff
-     async function Tr(MM) {
-       return MM = (0, jM.N)(MM), async function(MM, rM) {
-         const iM = await rM;
-         return new Promise(((rM, OM) => {
-           MM("get", iM, "client_id", (MM => {
-             MM || OM(Er.create("no-client-id")), rM(MM)
-           }))
-         }))
-       }(Nr, Zr[MM.app.options.appId])
+ 
+     function hz(UU, XU, zU, cU, yU, QU) {
+       const AU = UU.gY(531, XU, 12 + QU.length);
+       if (AU < 0) return !1;
+       const FU = UU.view;
+       return FU.setFloat32(AU + 0, zU, !0), FU.setFloat32(AU + 4, cU, !0), FU.setUint32(AU + 8, yU, !0), Yz(FU).set(QU, FU.byteOffset + AU + 12), !0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L969-L978` → after: `L1195-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1195-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1195-L1199) · [Before (L969-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L969-L978)

```diff
-     function Vr(MM, rM, iM) {
-       MM = (0, jM.N)(MM), async function(MM, rM, iM, OM) {
-         if (OM && OM.global) return MM("set", {
-           user_id: iM
-         }), Promise.resolve();
-         MM("config", await rM, {
-           update: !0,
-           user_id: iM
-         })
-       }(Nr, Zr[MM.app.options.appId], rM, iM).catch((MM => yr.error(MM)))
+     function Uc(UU, XU, zU, cU, yU, QU) {
+       const AU = UU.gY(532, XU, 12 + QU.length);
+       if (AU < 0) return !1;
+       const FU = UU.view;
+       return FU.setInt32(AU + 0, zU, !0), FU.setInt32(AU + 4, cU, !0), FU.setUint32(AU + 8, yU, !0), Yz(FU).set(QU, FU.byteOffset + AU + 12), !0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L981-L992` → after: `L1202-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1202-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1202-L1206) · [Before (L981-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L981-L992)

```diff
-     function cr(MM, rM, iM) {
-       MM = (0, jM.N)(MM), async function(MM, rM, iM, OM) {
-         if (OM && OM.global) {
-           const rM = {};
-           for (const MM of Object.keys(iM)) rM[`user_properties.${MM}`] = iM[MM];
-           return MM("set", rM), Promise.resolve()
-         }
-         MM("config", await rM, {
-           update: !0,
-           user_properties: iM
-         })
-       }(Nr, Zr[MM.app.options.appId], rM, iM).catch((MM => yr.error(MM)))
+     function Xc(UU, XU, zU, cU, yU) {
+       const QU = UU.gY(533, XU, 8 + yU.length);
+       if (QU < 0) return !1;
+       const AU = UU.view;
+       return AU.setInt32(QU + 0, zU, !0), AU.setInt32(QU + 4, cU, !0), Yz(AU).set(yU, AU.byteOffset + QU + 8), !0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L996-L999` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1210) · [Before (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L996-L999)

```diff
-       MM = (0, jM.N)(MM), async function(MM, rM) {
-         const iM = await MM;
-         window[`ga-disable-${iM}`] = !rM
-       }(Zr[MM.app.options.appId], rM).catch((MM => yr.error(MM)))
+       return !(UU.gY(576, XU, 0) < 0)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1002-L1003` → after: `L1213-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1213-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1213-L1220) · [Before (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L1002-L1003)

```diff
-     function ri(MM) {
-       Nr ? Nr("set", MM) : sr(MM)
+     function cc(UU, XU, zU, cU, yU, QU) {
+       const AU = UU.gY(577, XU, 36 + QU.length);
+       if (AU < 0) return !1;
+       const FU = UU.view;
+       FU.setUint8(AU + 0, zU);
+       for (let oU = 0; oU < 16; oU++) FU.setUint8(AU + 4 + 1 * oU, cU[oU]);
+       for (let oU = 0; oU < 16; oU++) FU.setUint8(AU + 20 + 1 * oU, yU[oU]);
+       return Yz(FU).set(QU, FU.byteOffset + AU + 36), !0
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1007-L1015` → after: `L1224-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1224-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1224-L1227) · [Before (L1007-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L1007-L1015)

```diff
-       MM = (0, jM.N)(MM), async function(MM, rM, iM, OM, SM) {
-         if (SM && SM.global) MM("event", iM, OM);
-         else {
-           const SM = await rM;
-           MM("event", iM, Object.assign(Object.assign({}, OM), {
-             send_to: SM
-           }))
-         }
-       }(Nr, Zr[MM.app.options.appId], rM, iM, OM).catch((MM => yr.error(MM)))
+       const yU = UU.gY(578, XU, 4 + cU.length);
+       if (yU < 0) return !1;
+       const QU = UU.view;
+       return QU.setUint8(yU + 0, zU), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1018-L1019` → after: `L1230-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1230-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1230-L1234) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L1018-L1019)

```diff
-     function Oi(MM) {
-       Nr ? Nr("consent", "update", MM) : Wr(MM)
+     function Qc(UU, XU, zU, cU, yU, QU, AU, FU) {
+       const oU = UU.gY(579, XU, 36);
+       if (oU < 0) return !1;
+       const DU = UU.view;
+       return DU.setFloat64(oU + 0, zU, !0), DU.setFloat64(oU + 8, cU, !0), DU.setFloat64(oU + 16, yU, !0), DU.setFloat64(oU + 24, QU, !0), DU.setUint16(oU + 32, AU, !0), DU.setUint8(oU + 34, FU), !0
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1021-L1037` → after: `L1236-L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1236-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1236-L1242) · [Before (L1021-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L1021-L1037)

```diff
-     const Si = "@firebase/analytics",
-       ji = "0.10.0";
-     (0, OM.z)(new aM.g(Jr, ((MM, rM) => {
-       let {
-         options: iM
-       } = rM;
-       return Br(MM.getProvider("app").getImmediate(), MM.getProvider("installations-internal").getImmediate(), iM)
-     }), "PUBLIC")), (0, OM.z)(new aM.g("analytics-internal", (function(MM) {
-       try {
-         const rM = MM.getProvider(Jr).getImmediate();
-         return {
-           logEvent: (MM, iM, OM) => ii(rM, MM, iM, OM)
-         }
-       } catch (rM) {
-         throw Er.create("interop-component-reg-failed", {
-           reason: rM
- ... (1 more removed lines; see GitHub link above)
+     class Ac {
+       constructor(UU, XU) {
+         this.core = UU, this.afterCall = XU
+       }
+       canModify(UU, XU, zU) {
+         const cU = this.core.tAU(UU, XU, zU);
+         return this.afterCall(), cU
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1039` → after: `L1244-L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1244-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/294.js#L1244-L1384) · [Before (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/294.js#L1039)

```diff
-     }), "PRIVATE")), (0, OM.O)(Si, ji), (0, OM.O)(Si, ji, "esm2017")
+       terrainBlocked(UU, XU, zU, cU, yU) {
+         const QU = this.core.oFU(UU, XU, zU, cU, yU);
+         return this.afterCall(), QU
+       }
+       Jw(UU, XU, zU, cU) {
+         const yU = this.core.pI(UU, XU, zU, cU);
+         return this.afterCall(), yU
+       }
+       blockData(UU, XU, zU) {
+         const cU = this.core.pAU(UU, XU, zU);
+         return this.afterCall(), cU
+       }
+       cameraSweep(UU, XU, zU, cU, yU, QU, AU) {
+         const FU = this.core.NQU(UU, XU, zU, cU, yU, QU, AU);
+         return this.afterCall(), FU
+       }
+ ... (125 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/295.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/295.js` (145 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5-L91` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4-L13) · [Before (L5-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L5-L91)

```diff
-     41628: (MM, rM, iM) => {
-         iM.r(rM), iM.d(rM, {
-           ActionCodeOperation: () => mM,
-           ActionCodeURL: () => Tr,
-           AuthCredential: () => fr,
-           AuthErrorCodes: () => yM,
-           EmailAuthCredential: () => Br,
-           EmailAuthProvider: () => cr,
-           FacebookAuthProvider: () => Oi,
-           FactorId: () => nM,
-           GithubAuthProvider: () => ji,
-           GoogleAuthProvider: () => Si,
-           OAuthCredential: () => Ir,
-           OAuthProvider: () => ii,
-           OperationType: () => LM,
-           PhoneAuthCredential: () => qr,
- ... (71 more removed lines; see GitHub link above)
+   44281: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => tU,
+       e: () => FU,
+       i: () => AU,
+       m: () => DU
+     });
+     var cU = zU(37919),
+       yU = zU(39519),
+       QU = zU(39516);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L93-L140` → after: `L15-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L15-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L15-L34) · [Before (L93-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L93-L140)

```diff
-         function jM(MM, rM) {
-           var iM = {};
-           for (var OM in MM) Object.prototype.hasOwnProperty.call(MM, OM) && rM.indexOf(OM) < 0 && (iM[OM] = MM[OM]);
-           if (null != MM && "function" === typeof Object.getOwnPropertySymbols) {
-             var SM = 0;
-             for (OM = Object.getOwnPropertySymbols(MM); SM < OM.length; SM++) rM.indexOf(OM[SM]) < 0 && Object.prototype.propertyIsEnumerable.call(MM, OM[SM]) && (iM[OM[SM]] = MM[OM[SM]])
-           }
-           return iM
-         }
-         Object.create;
-         Object.create;
-         "function" === typeof SuppressedError && SuppressedError;
-         var aM = iM(41614),
-           PM = iM(41605);
-         const nM = {
-             PHONE: "phone",
- ... (32 more removed lines; see GitHub link above)
+     function AU(UU, XU, zU, cU) {
+       const yU = QU.t;
+       XU.fill(0), UU.gravity.toArray(XU, yU.gravity), UU.colorDead.toArray(XU, yU.colorDead), zU[yU.ramp] = UU.useRampGradients ? 1 : 0;
+       const AU = UU.getColorGradients(),
+         FU = NU(UU, AU, "colour", cU);
+       zU[yU.colorCount] = FU;
+       for (let QU = 0; QU < FU; QU++) {
+         var oU;
+         const UU = AU[IU(AU, QU)];
+         XU[yU.colorPositions + QU] = UU.gradient, UU.color1.toArray(XU, yU.color1 + 4 * QU), (null !== (oU = UU.color2) && void 0 !== oU ? oU : UU.color1).toArray(XU, yU.color2 + 4 * QU)
+       }
+       const DU = UU.getVelocityGradients(),
+         EU = NU(UU, DU, "Et", cU);
+       zU[yU.velocityCount] = EU;
+       for (let QU = 0; QU < EU; QU++) kU(XU, yU.Et + 4 * QU, DU[IU(DU, QU)]);
+       const YU = UU.useRampGradients ? UU.getColorRemapGradients() : null,
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L142-L365` → after: `L36-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L36-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L36-L42) · [Before (L142-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L142-L365)

```diff
-         function HM() {
-           return {
-             "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
-           }
-         }
-         const hM = function() {
-             return {
-               "admin-restricted-operation": "This operation is restricted to administrators only.",
-               "argument-error": "",
-               "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
-               "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
-               "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
-               "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
-               "cordova-not-ready": "Cordova framework is not ready.",
-               "cors-unsupported": "This browser is not supported.",
-               "credential-already-in-use": "This credential is already associated with a different user account.",
- ... (208 more removed lines; see GitHub link above)
+     function FU() {
+       return {
+         key: [],
+         texels: new Uint8Array(4 * QU.n)
+       }
+     }
+     const oU = [];
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L367-L372` → after: `L44-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L44-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L44-L50) · [Before (L367-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L367-L372)

```diff
-         function EM(MM) {
-           if (lM.logLevel <= aM.d.ERROR) {
-             for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
-             lM.error(`Auth (${SM.g}): ${MM}`, ...iM)
-           }
-         }
+     function DU(UU, XU) {
+       return EU(UU, oU), !gU(oU, XU.key) && (XU.key.length = 0, XU.key.push(...oU), XU.key.length > 0 && function(UU, XU) {
+         for (let zU = 0; zU < QU.n; zU++) yU.g.GetCurrentGradient(zU / QU.n, UU, ((UU, XU, zU) => {
+           cU.Color3.LerpToRef(UU.color, XU.color, zU, YU)
+         })), XU[4 * zU] = 255 * YU.r, XU[4 * zU + 1] = 255 * YU.g, XU[4 * zU + 2] = 255 * YU.b, XU[4 * zU + 3] = 255
+       }(UU.getRampGradients(), XU.texels), !0)
+     }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L374-L377` → after: `L52-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L52-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L52-L60) · [Before (L374-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L374-L377)

```diff
-         function UM(MM) {
-           for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
-           throw bM(MM, ...iM)
-         }
+     function EU(UU, XU) {
+       XU.length = 0;
+       const zU = UU.useRampGradients ? UU.getRampGradients() : null;
+       if (null !== zU && void 0 !== zU && zU.length) {
+         XU.push(zU.length);
+         for (const UU of zU) XU.push(UU.gradient, UU.color.r, UU.color.g, UU.color.b)
+       }
+     }
+     const YU = new cU.Color3;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L379-L382` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L62-L64) · [Before (L379-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L379-L382)

```diff
-         function GM(MM) {
-           for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
-           return bM(MM, ...iM)
-         }
+     function NU(UU, XU, zU, cU) {
+       return XU ? XU.length > QU.c ? (cU(`particleStops:${zU}`, `GPU particles use the first 2 and last ${QU.c-2} of more than ${QU.c} ${zU} gradient stops (${UU.name})`), QU.c) : XU.length : 0
+     }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L384-L391` → after: `L66-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L66-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L66-L70) · [Before (L384-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L384-L391)

```diff
-         function CM(MM, rM, iM) {
-           const SM = Object.assign(Object.assign({}, JM()), {
-             [rM]: iM
-           });
-           return new OM.h("auth", "Firebase", SM).create(rM, {
-             appName: MM.name
-           })
-         }
+     function IU(UU, XU) {
+       return XU < 2 || UU.length <= QU.c ? XU : UU.length - QU.c + XU
+     }
+     const pU = new Float32Array(QU.q),
+       aU = new Uint32Array(pU.buffer);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L393-L395` → after: `L72-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L72-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L72-L74) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L393-L395)

```diff
-         function eM(MM, rM, iM) {
-           if (!(rM instanceof iM)) throw iM.name !== rM.constructor.name && UM(MM, "argument-error"), CM(MM, "argument-error", `Type of ${rM.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
-         }
+     function tU(UU, XU, zU) {
+       return AU(UU, pU, aU, zU), XU && gU(aU, XU) ? null : aU.slice()
+     }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L397-L405` → after: `L76-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L76-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L76-L81) · [Before (L397-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L397-L405)

```diff
-         function bM(MM) {
-           for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
-           if ("string" !== typeof MM) {
-             const rM = iM[0],
-               OM = [...iM.slice(1)];
-             return OM[0] && (OM[0].appName = MM.name), MM._errorFactory.create(rM, ...OM)
-           }
-           return dM.create(MM, ...iM)
-         }
+     function gU(UU, XU) {
+       if (UU.length !== XU.length) return !1;
+       for (let zU = 0; zU < UU.length; zU++)
+         if (UU[zU] !== XU[zU]) return !1;
+       return !0
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L407-L412` → after: `L83-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L83-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L83-L117) · [Before (L407-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L407-L412)

```diff
-         function wM(MM, rM) {
-           if (!MM) {
-             for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM];
-             throw bM(rM, ...OM)
-           }
-         }
+     function kU(UU, XU, zU) {
+       var cU;
+       UU[XU] = zU.gradient, UU[XU + 1] = zU.factor1, UU[XU + 2] = null !== (cU = zU.factor2) && void 0 !== cU ? cU : zU.factor1
+     }
+   },
+   42259: (UU, XU, zU) => {
+     function cU(UU, XU, zU) {
+       const cU = XU * XU * 4,
+         yU = UU[0].layers,
+         QU = yU * (UU.length - 1) + UU[UU.length - 1].layers,
+         AU = new Uint8Array(QU * cU);
+       UU.forEach(((XU, zU) => {
+         const QU = zU + 1 < UU.length ? Math.min(XU.layers, yU) : XU.layers;
+         AU.set(new Uint8Array(XU.pixels.buffer, XU.pixels.byteOffset, QU * cU), zU * yU * cU)
+       }));
+       const FU = Math.max(1, Math.min(QU, zU || QU));
+ ... (19 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L414-L417` → after: `L119-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L119-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L119-L194) · [Before (L414-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L414-L417)

```diff
-         function tM(MM) {
-           const rM = "INTERNAL ASSERTION FAILED: " + MM;
-           throw EM(rM), new Error(rM)
-         }
+     function QU(UU, XU, zU) {
+       var cU, QU;
+       const AU = null !== (cU = yU.get(UU)) && void 0 !== cU ? cU : new Map;
+       yU.set(UU, AU);
+       const FU = null !== (QU = AU.get(XU[0])) && void 0 !== QU ? QU : [];
+       AU.set(XU[0], FU);
+       const oU = FU.find((UU => UU.urls.length === XU.length && UU.urls.every(((UU, zU) => UU === XU[zU]))));
+       if (oU) return oU.built;
+       const DU = {
+         urls: [...XU],
+         built: zU()
+       };
+       return FU.push(DU), DU.built.catch((() => {
+         FU.splice(FU.indexOf(DU), 1)
+       })), DU.built
+     }
+ ... (60 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L419-L421` → after: `L196-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L196-L199) · [Before (L419-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L419-L421)

```diff
-         function gM(MM, rM) {
-           MM || tM(rM)
-         }
+     function gU(UU, XU, zU, cU) {
+       let yU = 0;
+       return UU.isVerticesDataPresent("color") && (yU |= YU), "none" !== XU && (yU |= NU), "thin" === XU && (yU |= IU, UU.isVerticesDataPresent("instanceColor") && (yU |= pU)), cU.fogEnabled && UU.applyFog && 0 !== cU.fogMode && (yU |= aU), zU >= 1 && (yU |= tU), yU
+     }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L423-L426` → after: `L201-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L201-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L201-L255) · [Before (L423-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L423-L426)

```diff
-         function uM() {
-           var MM;
-           return "undefined" !== typeof self && (null === (MM = self.location) || void 0 === MM ? void 0 : MM.href) || ""
-         }
+     function kU(UU, XU) {
+       UU.updateColor4("color", XU.color, XU.alpha)
+     }
+     var GU = zU(38592),
+       BU = zU(38057),
+       ZU = zU(38007),
+       RU = zU(37946),
+       PU = zU(38573),
+       WU = zU(38589),
+       dU = zU(37977),
+       LU = zU(37986),
+       eU = zU(38004);
+     const CU = RU.b.GLSL;
+     class wU {
+       constructor(UU, XU) {
+         this.name = UU, this.sa = XU, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.bS = {
+ ... (39 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L428-L430` → after: `L257-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L257-L259) · [Before (L428-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L428-L430)

```diff
-         function RM() {
-           return "http:" === pM() || "https:" === pM()
-         }
+     function OU(UU) {
+       return qU.has(UU)
+     }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L432-L443` → after: `L261-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L261-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L261-L353) · [Before (L432-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L432-L443)

```diff
-         function pM() {
-           var MM;
-           return "undefined" !== typeof self && (null === (MM = self.location) || void 0 === MM ? void 0 : MM.protocol) || null
-         }
-         class WM {
-           constructor(MM, rM) {
-             this.shortDelay = MM, this.longDelay = rM, gM(rM > MM, "Short delay should be less than long delay!"), this.isMobile = (0, OM.$)() || (0, OM.db)()
-           }
-           get() {
-             return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (RM() || (0, OM.T)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.s … [truncated]
-           }
-         }
+     function SU(UU) {
+       qU.add(UU)
+     }
+     const rU = {
+       create: (UU, XU) => ((0, ZU.m)(UU, new wU(UU.name, XU)), LU.c.defines()),
+       write: () => {},
+       addFeature: (UU, XU) => {
+         const zU = UU.mirror;
+         XU.feature === WU.h && XU.state.dirLightCount > 0 && (UU.disableLighting = !0, (0, dU.T)(UU)), "BLOXD_LIGHTING" in XU.defines && (0, BU.h)(zU), XU.feature === PU.j && ((0, GU.h)(XU.state, CU), function(UU, XU) {
+           const zU = UU.nS().qp();
+           setTimeout((() => {
+             zU.atlasArrays(XU.sources).then((zU => {
+               (0, GU.b)(UU, XU, zU.map((UU => ({
+                 atlas: UU,
+                 layers: UU.layers
+               }))), zU[0].layerWidth, CU)
+ ... (77 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L445-L446` → after: `L355-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L355-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L355-L395) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L445-L446)

```diff
-         function sM(MM, rM) {
-           gM(MM.emulator, "Emulator should always be set here");
+     function HU() {
+       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
+     }
+     const MU = {
+       tcU: HU,
+       iyU: (UU, XU) => {
+         const zU = new iU(UU.engine, cU.e.FromArray(XU.clearColor), cU.Color3.FromArray(XU.ambientColor));
+         (0, AU.e)(rU, zU), UU.sa = zU,
+           function(UU, XU) {
+             const zU = Object.assign((0, uU.i)(UU, "camera"), {
+               layerMask: 268435455
+             });
+             UU.model.nodes.setWorldSource(zU.row, UU.model.view.worldMatrix), UU.camera = XU.activeCamera = zU
+           }(UU, zU), (0, yU.i)(UU, ((UU, XU, zU) => (0, QU.g)(UU, XU, zU, FU.b)))
+       },
+       SyU: () => {},
+ ... (25 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L448-L512` → after: `L397-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L397-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L397-L435) · [Before (L448-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L448-L512)

```diff
-             url: iM
-           } = MM.emulator;
-           return rM ? `${iM}${rM.startsWith("/")?rM.slice(1):rM}` : iM
-         }
-         class DM {
-           static initialize(MM, rM, iM) {
-             this.fetchImpl = MM, rM && (this.headersImpl = rM), iM && (this.responseImpl = iM)
-           }
-           static fetch() {
-             return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void tM("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
-           }
-           static headers() {
-             return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void tM("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
-           }
-           static response() {
-             return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void tM("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
- ... (49 more removed lines; see GitHub link above)
+             name: XU,
+             message: zU
+           } = null !== UU && void 0 !== UU ? UU : {};
+           return "InvalidStateError" === XU && "string" === typeof zU && zU.startsWith("GPUDevice.")
+         })(UU) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
+           reason: "unknown",
+           message: UU.message,
+           framesRefused: !0
+         }))
+       }
+     }
+     var mU = zU(42259),
+       lU = zU(39529);
+ 
+     function xU(UU) {
+       return Math.max(4, 4 * Math.ceil(UU / 4))
+ ... (23 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L514-L557` → after: `L437-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L437-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L437-L476) · [Before (L514-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L514-L557)

```diff
-           ZM = new WM(3e4, 6e4);
- 
-         function oM(MM, rM) {
-           return MM.tenantId && !rM.tenantId ? Object.assign(Object.assign({}, rM), {
-             tenantId: MM.tenantId
-           }) : rM
-         }
-         async function fM(MM, rM, iM, SM) {
-           return YM(MM, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
-             let jM = {},
-               aM = {};
-             SM && ("GET" === rM ? aM = SM : jM = {
-               body: JSON.stringify(SM)
-             });
-             const PM = (0, OM.ib)(Object.assign({
-                 key: MM.config.apiKey
- ... (28 more removed lines; see GitHub link above)
+           format: "rgba8unorm",
+           mipLevelCount: jU(zU, cU),
+           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
+         }),
+         FU = (XU, zU, cU, QU) => {
+           UU.queue.writeTexture({
+             texture: AU,
+             mipLevel: zU
+           }, XU, {
+             bytesPerRow: 4 * cU,
+             rowsPerImage: QU
+           }, {
+             width: cU,
+             height: QU,
+             depthOrArrayLayers: yU
+           })
+ ... (24 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L559-L572` → after: `L478-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L478-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L478-L490) · [Before (L559-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L559-L572)

```diff
-           } catch (jM) {
-             if (jM instanceof OM.j) throw jM;
-             UM(MM, "network-request-failed", {
-               message: String(jM)
-             })
-           }
-         }
-         async function NM(MM, rM, iM, OM) {
-           let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-           const jM = await fM(MM, rM, iM, OM, SM);
-           return "mfaPendingCredential" in jM && UM(MM, "multi-factor-auth-required", {
-             _serverResponse: jM
-           }), jM
-         }
+             yield {
+               data: zU,
+               width: UU,
+               height: XU
+             }, yU = zU, QU = UU, AU = XU
+           }
+         }(XU, zU, cU, yU)) FU(DU.data, oU++, DU.width, DU.height);
+       return AU
+     }
+     const bU = {
+       premultiplyAlpha: "none",
+       colorSpaceConversion: "none"
+     };
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L574-L587` → after: `L492-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L492-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L492-L520) · [Before (L574-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L574-L587)

```diff
-         function AM(MM, rM, iM, OM) {
-           const SM = `${rM}${iM}?${OM}`;
-           return MM.config.emulator ? sM(MM.config, SM) : `${MM.config.apiScheme}://${SM}`
-         }
-         class xM {
-           constructor(MM) {
-             this.auth = MM, this.timer = null, this.promise = new Promise(((MM, rM) => {
-               this.timer = setTimeout((() => rM(GM(this.auth, "network-request-failed"))), ZM.get())
-             }))
-           }
-           clearNetworkTimeout() {
-             clearTimeout(this.timer)
-           }
-         }
+     function TU(UU) {
+       if (UU.startsWith("data:")) {
+         const XU = UU.search(/[;,]/);
+         return `data:${XU>5?UU.slice(5,XU):""} URL of ${UU.length} characters`
+       }
+       return UU.length > 80 ? `${UU.slice(0,80)}...` : UU
+     }
+     async function hU(UU) {
+       const XU = await fetch(UU);
+       if (!XU.ok) throw new Error(`${TU(UU)}: ${XU.status} ${XU.statusText}`);
+       return createImageBitmap(await XU.blob(), bU)
+     }
+     async function UX(UU) {
+       const XU = await hU(UU),
+         zU = new OffscreenCanvas(XU.width, XU.height),
+         cU = zU.getContext("2d", {
+ ... (13 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L589-L616` → after: `L522-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L522-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L522-L547) · [Before (L589-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L589-L616)

```diff
-         function vM(MM, rM, iM) {
-           const OM = {
-             appName: MM.name
-           };
-           iM.email && (OM.email = iM.email), iM.phoneNumber && (OM.phoneNumber = iM.phoneNumber);
-           const SM = GM(MM, rM, OM);
-           return SM.customData._tokenResponse = iM, SM
-         }
- 
-         function FM(MM) {
-           if (MM) try {
-             const rM = new Date(Number(MM));
-             if (!isNaN(rM.getTime())) return rM.toUTCString()
-           } catch (rM) {}
-         }
- 
- ... (12 more removed lines; see GitHub link above)
+     function XX(UU, XU) {
+       return (0, mU.g)(UU, XU.urls, (async () => {
+         const zU = await Promise.all(XU.urls.map((async (UU, zU) => {
+             var cU, yU, QU, AU, FU;
+             return null !== (AU = null !== (yU = null === (QU = XU.pixels) || void 0 === QU ? void 0 : QU[zU]) && void 0 !== yU ? yU : null, FU = XU.layerWidth, cU = null !== AU && void 0 !== AU && AU.byteLength && FU && AU.byteLength % (FU * FU * 4) === 0 ? {
+               pixels: AU,
+               layerWidth: FU,
+               layers: AU.byteLength / (FU * FU * 4)
+             } : null) && void 0 !== cU ? cU : await async function(UU) {
+               const {
+                 pixels: XU,
+                 width: zU
+               } = await UX(UU);
+               return {
+                 pixels: XU,
+                 layerWidth: zU,
+ ... (10 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L618-L626` → after: `L549-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L549-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L549-L585) · [Before (L618-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L618-L626)

```diff
-             claims: jM,
-             token: SM,
-             authTime: FM(IM(jM.auth_time)),
-             issuedAtTime: FM(IM(jM.iat)),
-             expirationTime: FM(IM(jM.exp)),
-             signInProvider: PM || null,
-             signInSecondFactor: (null === aM || void 0 === aM ? void 0 : aM.sign_in_second_factor) || null
-           }
-         }
+             texture: KU(UU, QU, cU, cU, AU, `atlas-${yU}-${TU(XU.urls[0])}`),
+             layerWidth: cU,
+             layers: AU
+           }
+         }))
+       }))
+     }
+     const zX = new Map([
+         [0, "zero"],
+         [1, "one"],
+         [768, "src"],
+         [769, "one-minus-src"],
+         [770, "src-alpha"],
+         [771, "one-minus-src-alpha"],
+         [772, "dst-alpha"],
+         [773, "one-minus-dst-alpha"],
+ ... (21 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L628-L630` → after: `L587-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L587-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L587-L591) · [Before (L628-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L628-L630)

```diff
-         function IM(MM) {
-           return 1e3 * Number(MM)
-         }
+     function yX(UU) {
+       for (const XU of (0, lU.h)(UU))
+         if (!cX.has((0, lU.g)(XU))) return !1;
+       return !0
+     }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L632-L710` → after: `L593-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L593-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L593-L725) · [Before (L632-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L632-L710)

```diff
-         function KM(MM) {
-           const [rM, iM, SM] = MM.split(".");
-           if (void 0 === rM || void 0 === iM || void 0 === SM) return EM("JWT malformed, contained fewer than 3 sections"), null;
-           try {
-             const MM = (0, OM.q)(iM);
-             return MM ? JSON.parse(MM) : (EM("Failed to decode base64 JWT payload"), null)
-           } catch (jM) {
-             return EM("Caught error parsing JWT payload as JSON", null === jM || void 0 === jM ? void 0 : jM.toString()), null
-           }
-         }
-         async function qM(MM, rM) {
-           if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return rM;
-           try {
-             return await rM
-           } catch (iM) {
-             throw iM instanceof OM.j && function(MM) {
- ... (63 more removed lines; see GitHub link above)
+     function QX(UU) {
+       const XU = cX.get(UU);
+       if (!XU) return null;
+       const [zU, cU, yU] = XU;
+       return {
+         srcFactor: zX.get(zU),
+         dstFactor: zX.get(cU),
+         operation: yU
+       }
+     }
+     let AX = null;
+ 
+     function FX(UU) {
+       AX = UU
+     }
+     const oX = new WeakSet;
+ ... (117 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L712-L844` → after: `L727-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L727-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L727-L892) · [Before (L712-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L712-L844)

```diff
-           const iM = MM.auth,
-             OM = await MM.getIdToken(),
-             SM = await qM(MM, async function(MM, rM) {
-               return fM(MM, "POST", "/v1/accounts:lookup", rM)
-             }(iM, {
-               idToken: OM
-             }));
-           wM(null === SM || void 0 === SM ? void 0 : SM.users.length, iM, "internal-error");
-           const aM = SM.users[0];
-           MM._notifyReloadListener(aM);
-           const PM = (null === (rM = aM.providerUserInfo) || void 0 === rM ? void 0 : rM.length) ? aM.providerUserInfo.map((MM => {
-             var {
-               providerId: rM
-             } = MM, iM = jM(MM, ["providerId"]);
-             return {
-               providerId: rM,
- ... (117 more removed lines; see GitHub link above)
+           const XU = null !== (oU = AU[FU[DU]]) && void 0 !== oU ? oU : 0,
+             zU = UU * this.rowStride + this.offsets[DU];
+           XU.toArray ? XU.toArray(QU, zU) : XU.copyToArray ? XU.copyToArray(QU, zU) : QU[zU] = XU
+         }
+       }
+     }
+     class pX {
+       constructor(UU, XU, zU, cU) {
+         let yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
+           AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+         this.key = UU, this.byteOffset = XU, this.byteStride = zU, this.size = cU, this.instanced = yU, this.type = QU, this.normalized = AU
+       }
+       getBuffer() {
+         return this.key
+       }
+ ... (150 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L846-L848` → after: `L894-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L894-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L894-L969) · [Before (L846-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L846-L848)

```diff
-         function ir(MM, rM) {
-           wM("string" === typeof MM || "undefined" === typeof MM, "internal-error", {
-             appName: rM
+     function HX(UU, XU, zU) {
+       const {
+         up: cU,
+         mieDirectionalG: yU
+       } = UU, QU = 1 - VX(1 - Math.exp(XU[1] / 45e4), 0, 1), AU = UU.rayleigh - (1 - QU), FU = Math.hypot(XU[0], XU[1], XU[2]), oU = FU > 0 ? 1 / FU : 0, DU = zU.sunDir;
+       for (let IU = 0; IU < 3; IU++) DU[IU] = XU[IU] * oU;
+       const EU = DU[0] * cU[0] + DU[1] * cU[1] + DU[2] * cU[2],
+         YU = 1e3 * Math.max(0, 1 - Math.exp(-(uX - Math.acos(VX(EU, -1, 1))) / 1.5));
+       zU.sunE = YU;
+       const NU = .2 * UU.turbidity * 1e-17 * UU.mieCoefficient;
+       for (let IU = 0; IU < 3; IU++) {
+         const UU = fX[IU] * AU,
+           XU = iX[IU] * NU,
+           cU = YU / (UU + XU);
+         zU.inScatterR[IU] = UU * cU, zU.inScatterM[IU] = XU * cU, zU.extinctionBeta[IU] = 8400 * UU + 1250 * XU
+       }
+ ... (60 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L850-L975` → after: `L971-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L971-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L971-L985) · [Before (L850-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L850-L975)

```diff
-         }
-         class Or {
-           constructor(MM) {
-             var {
-               uid: rM,
-               auth: iM,
-               stsTokenManager: OM
-             } = MM, SM = jM(MM, ["uid", "auth", "stsTokenManager"]);
-             this.providerId = "firebase", this.proactiveRefresh = new TM(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = rM, this.auth = iM, this.stsTokenManager = OM, this.accessToken = OM.accessToken, this.displayName = SM.displayName || null, this.ema … [truncated]
-           }
-           async getIdToken(MM) {
-             const rM = await qM(this, this.stsTokenManager.getToken(this.auth, MM));
-             return wM(rM, this.auth, "internal-error"), this.accessToken !== rM && (this.accessToken = rM, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), rM
-           }
-           getIdTokenResult(MM) {
-             return XM(this, MM)
- ... (110 more removed lines; see GitHub link above)
+         } else if ("elif" === XU || "else" === XU) {
+           const UU = yU[yU.length - 1];
+           if (!UU) throw new Error(`#${XU} without #if`);
+           const cU = !UU.taken && ("else" === XU || lX(DU, zU));
+           UU.active = UU.parentActive && cU, UU.taken = UU.taken || cU
+         } else if ("endif" === XU) {
+           if (!yU.pop()) throw new Error("#endif without #if")
+         } else if (QU()) {
+           const [UU, ...cU] = DU.split(/\s+/);
+           "undef" === XU ? zU.delete(UU) : zU.set(UU, !cU.length || cU.join(" ")), FU()
+         }
+       }
+       if (yU.length) throw new Error("Unterminated #if");
+       return cU.join("\n")
+     }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L977-L984` → after: `L987-L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L987-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L987-L1009) · [Before (L977-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L977-L984)

```diff
-         function jr(MM) {
-           gM(MM instanceof Function, "Expected a class definition");
-           let rM = Sr.get(MM);
-           return rM ? (gM(rM instanceof MM, "Instance stored in cache mismatched with class"), rM) : (rM = new MM, Sr.set(MM, rM), rM)
-         }
-         class ar {
-           constructor() {
-             this.type = "NONE", this.storage = {}
+     function mX(UU, XU, zU) {
+       return UU.replace(XU, (UU => {
+         const XU = zU.get(UU);
+         return "string" === typeof XU ? XU : UU
+       }))
+     }
+ 
+     function lX(UU, XU) {
+       var zU;
+       const cU = null !== (zU = UU.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== zU ? zU : [];
+       let yU = 0;
+       const QU = () => cU[yU],
+         AU = () => cU[yU++],
+         FU = UU => {
+           const zU = /^\d/.test(UU) ? UU : XU.get(UU);
+           return "string" === typeof zU ? parseInt(zU) : Number.NaN
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L986-L987` → after: `L1011-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1011-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1011-L1015) · [Before (L986-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L986-L987)

```diff
-           async _isAvailable() {
-             return !0
+           if ("defined" === UU) {
+             const UU = "(" === QU();
+             UU && AU();
+             const zU = AU();
+             return UU && AU(), XU.has(zU)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L989-L990` → after: `L1017-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1017-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1017-L1036) · [Before (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L989-L990)

```diff
-           async _set(MM, rM) {
-             this.storage[MM] = rM
+           const zU = QU();
+           if ("==" === zU || "!=" === zU || ">" === zU || "<" === zU || ">=" === zU || "<=" === zU) {
+             AU();
+             const XU = FU(UU),
+               cU = FU(AU());
+             if (Number.isNaN(XU) || Number.isNaN(cU)) return !1;
+             switch (zU) {
+               case "==":
+                 return XU === cU;
+               case "!=":
+                 return XU !== cU;
+               case ">":
+                 return XU > cU;
+               case "<":
+                 return XU < cU;
+               case ">=":
+ ... (4 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L992-L994` → after: `L1038-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1038-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1038-L1046) · [Before (L992-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L992-L994)

```diff
-           async _get(MM) {
-             const rM = this.storage[MM];
-             return void 0 === rM ? null : rM
+           return XU.has(UU)
+         },
+         DU = () => {
+           let UU = oU();
+           for (;
+             "&&" === QU();) {
+             AU();
+             const XU = oU();
+             UU = UU && XU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L996-L997` → after: `L1048-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1048-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1048-L1056) · [Before (L996-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L996-L997)

```diff
-           async _remove(MM) {
-             delete this.storage[MM]
+           return UU
+         },
+         EU = () => {
+           let UU = DU();
+           for (;
+             "||" === QU();) {
+             AU();
+             const XU = DU();
+             UU = UU || XU
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L999-L1003` → after: `L1058-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1058-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1058-L1083) · [Before (L999-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L999-L1003)

```diff
-           _addListener(MM, rM) {}
-           _removeListener(MM, rM) {}
-         }
-         ar.type = "NONE";
-         const Pr = ar;
+           return UU
+         },
+         YU = EU();
+       if (yU !== cU.length) throw new Error(`Cannot evaluate #if ${UU}`);
+       return YU
+     }
+     var xX = zU(38037),
+       JX = zU(38169),
+       jX = zU(38171),
+       KX = zU(41770),
+       bX = zU(39571);
+     const TX = 32,
+       hX = [10, 3, 10],
+       Uz = [21, 7, 21],
+       Xz = Uz[0] * Uz[1] * Uz[2],
+       zz = 0,
+ ... (10 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1005-L1076` → after: `L1085-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1085-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1085-L1215) · [Before (L1005-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1005-L1076)

```diff
-         function nr(MM, rM, iM) {
-           return `firebase:${MM}:${rM}:${iM}`
-         }
-         class Qr {
-           constructor(MM, rM, iM) {
-             this.persistence = MM, this.auth = rM, this.userKey = iM;
-             const {
-               config: OM,
-               name: SM
-             } = this.auth;
-             this.fullUserKey = nr(this.userKey, OM.apiKey, SM), this.fullPersistenceKey = nr("persistence", OM.apiKey, SM), this.boundEventHandler = rM._onStorageEvent.bind(rM), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
-           }
-           setCurrentUser(MM) {
-             return this.persistence._set(this.fullUserKey, MM.toJSON())
-           }
-           async getCurrentUser() {
- ... (56 more removed lines; see GitHub link above)
+     function Iz(UU, XU) {
+       const zU = UU % XU;
+       return zU < 0 ? zU + XU : zU
+     }
+ 
+     function pz(UU, XU, zU) {
+       return cU = Iz(UU, Uz[0]), yU = Iz(XU, Uz[1]), QU = Iz(zU, Uz[2]), cU + Uz[0] * (yU + Uz[1] * QU);
+       var cU, yU, QU
+     }
+ 
+     function az(UU, XU, zU) {
+       return UU + 8 * (XU + 8 * zU)
+     }
+ 
+     function tz(UU, XU, zU) {
+       return UU + 4 * (XU + 4 * zU)
+ ... (115 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1078-L1083` → after: `L1217-L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1217-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1217-L1265) · [Before (L1078-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1078-L1083)

```diff
-             const rM = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
-               iM = MM.match(rM);
-             if (2 === (null === iM || void 0 === iM ? void 0 : iM.length)) return iM[1]
-           }
-           return "Other"
-         }
+             cell: gU,
+             dims: kU,
+             lo: GU
+           } = UU,
+           BU = Oz + pU * wz;
+         for (let ZU = 0; ZU < 3; ZU++) this.floats[BU + 4 * ZU] = tU[ZU] / gU, this.floats[BU + 4 * ZU + 1] = tU[4 + ZU] / gU, this.floats[BU + 4 * ZU + 2] = tU[8 + ZU] / gU, this.floats[BU + 4 * ZU + 3] = (tU[12 + ZU] - GU[ZU]) / gU;
+         this.words[BU + 12] = UU.at, this.floats[BU + 13] = EU + .001 * (1 + Math.abs(EU)), this.words[BU + 14] = kU[0] | kU[1] << 8 | kU[2] << 16
+       }
+       finish() {
+         const UU = ez,
+           {
+             counts: XU,
+             rects: zU,
+             words: cU
+           } = this;
+         XU.fill(0);
+ ... (33 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1085-L1088` → after: `L1267-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1267-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1267-L1269) · [Before (L1085-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1085-L1088)

```diff
-         function Lr() {
-           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
-           return /firefox\//i.test(MM)
-         }
+     function Mz(UU) {
+       return Math.min(127, Math.max(0, Math.floor((.5 * UU + .5) * ez)))
+     }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1090-L1093` → after: `L1271-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1271-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1271-L1274) · [Before (L1090-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1090-L1093)

```diff
-         function mr() {
-           const MM = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)()).toLowerCase();
-           return MM.includes("safari/") && !MM.includes("chrome/") && !MM.includes("crios/") && !MM.includes("android")
-         }
+     function vz(UU, XU, zU, cU, yU) {
+       for (let QU = 0; QU < 4; QU++)
+         for (let AU = 0; AU < 4; AU++) yU[4 * QU + AU] = UU[XU + 4 * QU] * zU[cU + AU] + UU[XU + 4 * QU + 1] * zU[cU + 4 + AU] + UU[XU + 4 * QU + 2] * zU[cU + 8 + AU] + UU[XU + 4 * QU + 3] * zU[cU + 12 + AU]
+     }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1095-L1098` → after: `L1276-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1276-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1276-L1319) · [Before (L1095-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1095-L1098)

```diff
-         function Hr() {
-           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
-           return /crios\//i.test(MM)
-         }
+     function Vz(UU, XU, zU, cU, yU) {
+       const QU = UU[0] - XU,
+         AU = UU[1] - zU,
+         FU = UU[2] - cU,
+         oU = UU[3] - XU,
+         DU = UU[4] - zU,
+         EU = UU[5] - cU,
+         YU = UU[6] - XU,
+         NU = UU[7] - zU,
+         IU = UU[8] - cU;
+       if (Math.min(QU, oU, YU) > yU || Math.max(QU, oU, YU) < -yU) return !1;
+       if (Math.min(AU, DU, NU) > yU || Math.max(AU, DU, NU) < -yU) return !1;
+       if (Math.min(FU, EU, IU) > yU || Math.max(FU, EU, IU) < -yU) return !1;
+       const pU = oU - QU,
+         aU = DU - AU,
+         tU = EU - FU,
+ ... (28 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1100-L1103` → after: `L1321-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1321-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1321-L1324) · [Before (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1100-L1103)

```diff
-         function hr() {
-           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
-           return /iemobile/i.test(MM)
-         }
+     function mz(UU) {
+       const [XU, zU, cU] = nz.r;
+       return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${UU.group}) @binding(${UU.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeT … [truncated]
+     }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1105-L1108` → after: `L1326-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1326-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1326-L1340) · [Before (L1105-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1105-L1108)

```diff
-         function Jr() {
-           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
-           return /android/i.test(MM)
-         }
+     function lz(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const [yU, QU, AU] = Uz, [FU, oU, DU] = hX, EU = Math.log2(TX), YU = cU ? "var<private> bloxdSpCrossed: bool;\n" : "", NU = cU ? "\t\t\tbloxdSpCrossed = true;\n" : "";
+       return `@group(${UU.group}) @binding(${UU.lN}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${UU.group}) @binding(${UU.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${zU?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${YU}struct BloxdSpBoxE … [truncated]
+     }
+     const xz = {
+       group: 0,
+       uniform: 0,
+       lN: 1,
+       special: 2,
+       work: 3,
+       volume: 4
+     };
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1110-L1113` → after: `L1342-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1342-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1342-L1347) · [Before (L1110-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1110-L1113)

```diff
-         function dr() {
-           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
-           return /blackberry/i.test(MM)
-         }
+     function Jz() {
+       const UU = xz;
+       return `${mz(UU)}${lz(UU,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${nz.c}>,\n}\n@group(${UU.group}) @binding(${UU.work}) var<uniform> bloxd … [truncated]
+     }
+     const jz = 2;
+     const Kz = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1115-L1118` → after: `L1349-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1349-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1349-L1357) · [Before (L1115-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1115-L1118)

```diff
-         function yr() {
-           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
-           return /webos/i.test(MM)
-         }
+     function bz(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
+       const cU = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${XU.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y … [truncated]
+         yU = "trace" === zU || "lit" === zU,
+         QU = "maskEdge" === zU ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
+         AU = yU ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${XU.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of step … [truncated]
+       return `${cU}${UU.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${yU?function(){const[UU,XU,zU]=nz.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif  … [truncated]
+     }
+     const Tz = "bloxdSpOwnTexture";
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1120-L1123` → after: `L1359-L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1359-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1359-L1362) · [Before (L1120-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1120-L1123)

```diff
-         function lr() {
-           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
-           return /iphone|ipad|ipod/i.test(MM) || /macintosh/i.test(MM) && /mobile/i.test(MM)
-         }
+     function hz(UU) {
+       return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${UU.texture}) - 1u)))`
+     }
+     const Uc = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${qX.g.map((UU=>{let[XU,zU]=UU;return`\tbloxdSpOut.${XU} = (bloxdSpWord & ${zU}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1125-L1128` → after: `L1364-L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1364-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1364-L1367) · [Before (L1125-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1125-L1128)

```diff
-         function Er() {
-           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
-           return lr(MM) || Jr(MM) || yr(MM) || dr(MM) || /windows phone/i.test(MM) || hr(MM)
-         }
+     function Xc(UU) {
+       return `bloxdSpFlags(${UU})`
+     }
+     const zc = `${KX.m}.eyePosition`;
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1130-L1147` → after: `L1369-L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1369-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1369-L1373) · [Before (L1130-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1130-L1147)

```diff
-         function Ur(MM) {
-           let rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-           switch (MM) {
-             case "Browser":
-               rM = zr((0, OM.P)());
-               break;
-             case "Worker":
-               rM = `${zr((0,OM.P)())}-${MM}`;
-               break;
-             default:
-               rM = MM
-           }
-           const jM = iM.length ? iM.join(",") : "FirebaseCore-web";
-           return `${rM}/JsCore/${SM.g}/${jM}`
-         }
-         async function Gr(MM, rM) {
- ... (2 more removed lines; see GitHub link above)
+     function cc(UU, XU, zU, cU, yU) {
+       const QU = UU.indexOf(XU);
+       if (QU < 0 || UU.indexOf(XU, QU + 1) >= 0) throw new Error(`Lite's ${yU} program changed at the shader pack ${cU} hook: ${QU<0?"no":"more than one"} anchor (lite/${yU}ShaderPack.ts)`);
+       return UU.slice(0, QU) + zU + UU.slice(QU + XU.length)
+     }
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1149-L1151` → after: `L1375-L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1375-L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1375-L1377) · [Before (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1149-L1151)

```diff
-         function Cr(MM) {
-           return void 0 !== MM && void 0 !== MM.getResponse
-         }
+     function yc(UU) {
+       return UU.sunShadow || UU.airShadow
+     }
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1153-L1161` → after: `L1379-L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1379-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1379-L1385) · [Before (L1153-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1153-L1161)

```diff
-         function er(MM) {
-           return void 0 !== MM && void 0 !== MM.enterprise
-         }
-         class br {
-           constructor(MM) {
-             if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === MM.recaptchaKey) throw new Error("recaptchaKey undefined");
-             this.siteKey = MM.recaptchaKey.split("/")[3], this.emailPasswordEnabled = MM.recaptchaEnforcementState.some((MM => "EMAIL_PASSWORD_PROVIDER" === MM.provider && "OFF" !== MM.enforcementState))
-           }
-         }
+     function Qc(UU, XU) {
+       return XU && yc(UU)
+     }
+     const Ac = {
+       group: KX.h,
+       ...KX.u
+     };
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1163-L1175` → after: `L1387-L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1387-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1387-L1407) · [Before (L1163-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1163-L1175)

```diff
-         function wr(MM) {
-           return new Promise(((rM, iM) => {
-             const OM = document.createElement("script");
-             OM.setAttribute("src", MM), OM.onload = rM, OM.onerror = MM => {
-                 const rM = GM("internal-error");
-                 rM.customData = MM, iM(rM)
-               }, OM.type = "text/javascript", OM.charset = "UTF-8",
-               function() {
-                 var MM, rM;
-                 return null !== (rM = null === (MM = document.getElementsByTagName("head")) || void 0 === MM ? void 0 : MM[0]) && void 0 !== rM ? rM : document
-               }().appendChild(OM)
-           }))
-         }
+     function Fc(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
+       if (!yc(UU)) return "";
+       if (XU) {
+         const XU = Ac,
+           yU = "trace" === zU || "lit" === zU;
+         let QU = "";
+         UU.sunShadow && (QU = yU ? `${lz(XU,!0,"lit"===zU)}${cU=XU,`@group(${cU.group}) @binding(${cU.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${cU.group}) @binding(${cU.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn blo … [truncated]
+           const cU = `@group(${UU}) @binding(${XU}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
+           return zU ? `${cU}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Kz}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = text … [truncated]
+         }(XU.group, KX.y, "maskEdge" === zU));
+         const AU = {
+           shadowDirection: `${KX.m}.shadowDirection`,
+           renderOffset: `${KX.m}.renderOffset`,
+           eyePosition: `${KX.m}.eyePosition`
+         };
+ ... (5 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1177-L1271` → after: `L1409-L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1409-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1409-L1673) · [Before (L1177-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1177-L1271)

```diff
-         function tr(MM) {
-           return `__${MM}${Math.floor(1e6*Math.random())}`
-         }
-         class gr {
-           constructor(MM) {
-             this.type = "recaptcha-enterprise", this.auth = Wr(MM)
-           }
-           async verify() {
-             let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
-               rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
- 
-             function iM(rM, iM, OM) {
-               const SM = window.grecaptcha;
-               er(SM) ? SM.enterprise.ready((() => {
-                 SM.enterprise.execute(rM, {
-                   action: MM
- ... (79 more removed lines; see GitHub link above)
+     function oc(UU, XU, zU, cU) {
+       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
+       if (!XU) return "";
+       const QU = (AU = "fragmentInputs.vPositionW", FU = UU.sunShadow ? {
+         normal: zU,
+         flags: cU
+       } : null, `\n\tbloxdSpShadowPosition = ${AU};\n${FU?`\tbloxdSpShadowNormal = normalize(${FU.normal});\n\tbloxdSpShadowEmissive = (${FU.flags} & ${qX.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${FU.flags} & ${qX.i}u) != 0u;\n`:""}`);
+       var AU, FU;
+       return UU.sunShadow && ("mask" === yU || "maskEdge" === yU) ? `${QU}${oU="fragmentInputs.position",DU="maskEdge"===yU,`\n\tbloxdSpShadowPixel = vec2i(${oU}.xy);\n${DU?`\tbloxdSpShadowZ = ${oU}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${oU}.z), dpdy(${oU}.z));\n`:""}`}` : QU;
+       var oU, DU
+     }
+     const Dc = "bloxdSpTextureRotation",
+       Ec = "bloxdSpTextureLayers",
+       Yc = `@group(${KX.h}) @binding(${KX.z}) var<storage, read> ${Ec}: array<u32>;\n`;
+ 
+     function Nc(UU) {
+ ... (249 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1273-L1503` → after: `L1675-L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1675-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1675-L1712) · [Before (L1273-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1273-L1503)

```diff
-           }
-           async runMiddleware(MM) {
-             if (this.auth.currentUser === MM) return;
-             const rM = [];
-             try {
-               for (const iM of this.queue) await iM(MM), iM.onAbort && rM.push(iM.onAbort)
-             } catch (iM) {
-               rM.reverse();
-               for (const MM of rM) try {
-                 MM()
-               } catch (OM) {}
-               throw this.auth._errorFactory.create("login-blocked", {
-                 originalMessage: null === iM || void 0 === iM ? void 0 : iM.message
-               })
-             }
-           }
- ... (215 more removed lines; see GitHub link above)
+           }(UU),
+           DU = `\n${Hc}\n${fc}\n${ic}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\ … [truncated]
+           EU = new Set;
+         UU.lighting && EU.add("BLOXD_LIGHTING");
+         yU && EU.add("BLOXD_TERRAIN_DIRECTIONAL");
+         return nX(DU, new Map([...EU].map((UU => [UU, !0]))))
+       }(UU, zU);
+       if (!Oc(UU)) return cU;
+       const yU = wc(UU, cU, Kc, XU, zU);
+       return "none" === zU ? yU : `${yU}${function(UU){const XU="none"!==UU.texture&&UU.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${UU.resting?"":Mc}\n\t${UU.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material … [truncated]
+     }
+     const Uy = new Map([
+       ["float", {
+         wgsl: "f32",
+         align: 1,
+         floats: 1
+ ... (22 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1505-L1515` → after: `L1714-L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1714-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1714-L1788) · [Before (L1505-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1505-L1515)

```diff
-         function Wr(MM) {
-           return (0, OM.N)(MM)
-         }
-         class sr {
-           constructor(MM) {
-             this.auth = MM, this.observer = null, this.addObserver = (0, OM.y)((MM => this.observer = MM))
-           }
-           get next() {
-             return wM(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
-           }
-         }
+     function Xy(UU, XU) {
+       const zU = new Map;
+       let cU = 0;
+       const yU = [],
+         QU = [],
+         AU = [];
+       for (const DU of XU) {
+         var FU, oU;
+         const XU = null !== (FU = DU.type.trim().split(/\s+/).pop()) && void 0 !== FU ? FU : DU.type,
+           EU = Uy.get(XU);
+         if (!EU) throw new Error(`Lite: no uniform layout for ${DU.name}: ${DU.type}`);
+         const YU = null !== (oU = DU.arraySize) && void 0 !== oU ? oU : 0,
+           NU = YU ? 4 : EU.align;
+         cU = Math.ceil(cU / NU) * NU;
+         const IU = YU ? 4 * Math.ceil(EU.floats / 4) : EU.floats;
+         if (zU.set(DU.name, {
+ ... (59 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1517-L1528` → after: `L1790-L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1790-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1790-L1792) · [Before (L1517-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1517-L1528)

```diff
-         function Dr(MM, rM) {
-           const iM = (0, SM.x)(MM, "auth");
-           if (iM.isInitialized()) {
-             const MM = iM.getImmediate(),
-               SM = iM.getOptions();
-             if ((0, OM.C)(SM, null !== rM && void 0 !== rM ? rM : {})) return MM;
-             UM(MM, "already-initialized")
-           }
-           return iM.initialize({
-             options: rM
-           })
-         }
+     function Qy(UU, XU) {
+       return `#if defined(${UU}) && ${UU}DIRECTUV == 0\nvarying v${XU}UV: vec2f;\n#endif`
+     }
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1530-L1580` → after: `L1794-L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1794-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1794-L1796) · [Before (L1530-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1530-L1580)

```diff
-         function kr(MM, rM, iM) {
-           const OM = Wr(MM);
-           wM(OM._canInitEmulator, OM, "emulator-config-failed"), wM(/^https?:\/\//.test(rM), OM, "invalid-emulator-scheme");
-           const SM = !!(null === iM || void 0 === iM ? void 0 : iM.disableWarnings),
-             jM = Zr(rM),
-             {
-               host: aM,
-               port: PM
-             } = function(MM) {
-               const rM = Zr(MM),
-                 iM = /(\/\/)?([^?#/]+)/.exec(MM.substr(rM.length));
-               if (!iM) return {
-                 host: "",
-                 port: null
-               };
-               const OM = iM[2].split("@").pop() || "",
- ... (35 more removed lines; see GitHub link above)
+     function Ay(UU, XU, zU) {
+       return `#if defined(${UU}) && ${UU}DIRECTUV == 0\nif (uniforms.v${XU}Infos.x==0.)\n{vertexOutputs.v${XU}UV= (uniforms.${zU}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${XU}UV= (uniforms.${zU}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
+     }
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1582-L1585` → after: `L1798-L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1798-L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1798-L1852) · [Before (L1582-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1582-L1585)

```diff
-         function Zr(MM) {
-           const rM = MM.indexOf(":");
-           return rM < 0 ? "" : MM.substr(0, rM + 1)
-         }
+     function Fy(UU, XU, zU) {
+       return `#ifdef ${UU}\n#if ${UU}DIRECTUV == 1\n#define v${XU}UV vMainUV1\n#elif ${UU}DIRECTUV == 2\n#define v${XU}UV vMainUV2\n#else\nvarying v${XU}UV: vec2f;\n#endif\nvar ${zU}SamplerSampler: sampler;\nvar ${zU}Sampler: texture_2d<f32>;\n#endif`
+     }
+     const oy = {
+         lights: 0,
+         lightStride: 12,
+         fogInfos: 96,
+         fogColour: 100,
+         outputHeight: 103,
+         animTick: 104,
+         timeMs: 105
+       },
+       Dy = 256,
+       Ey = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) … [truncated]
+       Yy = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
+       Ny = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
+ ... (39 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1587-L1590` → after: `L1854-L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1854-L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L1854-L2249) · [Before (L1587-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1587-L1590)

```diff
-         function or(MM) {
-           if (!MM) return null;
-           const rM = Number(MM);
-           return isNaN(rM) ? null : rM
+     function Ry(UU, XU) {
+       let zU = UU;
+       const cU = new Map;
+       for (const [QU, AU] of XU) {
+         var yU;
+         cU.set(QU, `${null!==(yU=cU.get(QU))&&void 0!==yU?yU:""}${AU}\n`)
+       }
+       for (const [QU, AU] of cU) {
+         if (!QU.startsWith("!")) {
+           const UU = `#define ${QU}`;
+           if (!zU.includes(UU)) {
+             Zy(QU);
+             continue
+           }
+           zU = zU.replace(UU, (() => `\n${AU}\n${UU}`));
+           continue
+ ... (380 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1592-L1603` → after: `L2251-L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2251-L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2251-L2257) · [Before (L1592-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1592-L1603)

```diff
-         class fr {
-           constructor(MM, rM) {
-             this.providerId = MM, this.signInMethod = rM
-           }
-           toJSON() {
-             return tM("not implemented")
-           }
-           _getIdTokenResponse(MM) {
-             return tM("not implemented")
-           }
-           _linkToIdToken(MM, rM) {
-             return tM("not implemented")
+         this.modelPackKind(zU) && (cU._needNormals = !0), cU.NORMAL = cU._needNormals && XU.isVerticesDataPresent("normal"), cU.UV1 = cU._needUVs && XU.isVerticesDataPresent("uv"), cU.UV2 = cU._needUVs && XU.isVerticesDataPresent("uv2");
+         const gU = XU.useVertexColors && XU.isVerticesDataPresent("color");
+         cU.VERTEXCOLOR = gU, cU.VERTEXALPHA = XU.hasVertexAlpha && gU, cU.INSTANCESCOLOR = "none" !== QU && XU.isVerticesDataPresent("instanceColor");
+         for (const {
+             feature: PU,
+             state: WU,
+             active: dU
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1605-L1625` → after: `L2259-L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2259-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2259-L2261) · [Before (L1605-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1605-L1625)

```diff
-           _getReauthenticationResolver(MM) {
-             return tM("not implemented")
-           }
-         }
-         async function Yr(MM, rM) {
-           return fM(MM, "POST", "/v1/accounts:resetPassword", oM(MM, rM))
-         }
-         async function Nr(MM, rM) {
-           return fM(MM, "POST", "/v1/accounts:update", rM)
-         }
-         async function Ar(MM, rM) {
-           return NM(MM, "POST", "/v1/accounts:signInWithPassword", oM(MM, rM))
-         }
-         async function xr(MM, rM) {
-           return fM(MM, "POST", "/v1/accounts:sendOobCode", oM(MM, rM))
-         }
- ... (5 more removed lines; see GitHub link above)
+           of AU) {
+           var kU, GU;
+           if (dU) null === (kU = (GU = (0, SX.j)(PU)).prepareDefines) || void 0 === kU || kU.call(GU, WU, cU, UU, XU, zU)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1627-L1633` → after: `L2263-L2267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2263-L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2263-L2267) · [Before (L1627-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1627-L1633)

```diff
-         class Br extends fr {
-           constructor(MM, rM, iM) {
-             let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-             super("password", iM), this._email = MM, this._password = rM, this._tenantId = OM
-           }
-           static _fromEmailAndPassword(MM, rM) {
-             return new Br(MM, rM, "password")
+         const BU = UU.qp();
+         for (const {
+             feature: PU,
+             state: WU,
+             active: dU
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1635-L1654` → after: `L2269-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2269-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2269-L2298) · [Before (L1635-L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1635-L1654)

```diff
-           static _fromEmailAndCode(MM, rM) {
-             return new Br(MM, rM, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-           }
-           toJSON() {
-             return {
-               email: this._email,
-               password: this._password,
-               signInMethod: this.signInMethod,
-               tenantId: this._tenantId
-             }
-           }
-           static fromJSON(MM) {
-             const rM = "string" === typeof MM ? JSON.parse(MM) : MM;
-             if ((null === rM || void 0 === rM ? void 0 : rM.email) && (null === rM || void 0 === rM ? void 0 : rM.password)) {
-               if ("password" === rM.signInMethod) return this._fromEmailAndPassword(rM.email, rM.password);
-               if ("emailLink" === rM.signInMethod) return this._fromEmailAndCode(rM.email, rM.password, rM.tenantId)
- ... (4 more removed lines; see GitHub link above)
+           of AU) {
+           var ZU, RU;
+           if (dU && !1 === (null === (ZU = (RU = (0, SX.j)(PU)).isReadyForSubMesh) || void 0 === ZU ? void 0 : ZU.call(RU, WU, cU, UU, BU))) return !1
+         }
+         return !0
+       }
+     }
+ 
+     function YQ(UU, XU, zU) {
+       return UU.codeVersion !== XU.version && function(UU, XU) {
+         const zU = [],
+           cU = [];
+         for (const {
+             feature: NU,
+             state: IU,
+             active: pU
+ ... (14 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1656-L1709` → after: `L2300-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2300-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2300-L2304) · [Before (L1656-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1656-L1709)

```diff
-             switch (this.signInMethod) {
-               case "password":
-                 const iM = {
-                   returnSecureToken: !0,
-                   email: this._email,
-                   password: this._password,
-                   clientType: "CLIENT_TYPE_WEB"
-                 };
-                 if (null === (rM = MM._getRecaptchaConfig()) || void 0 === rM ? void 0 : rM.emailPasswordEnabled) {
-                   const rM = await ur(MM, iM, "signInWithPassword");
-                   return Ar(MM, rM)
-                 }
-                 return Ar(MM, iM).catch((async rM => {
-                   if ("auth/missing-recaptcha-token" === rM.code) {
-                     console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
-                     const rM = await ur(MM, iM, "signInWithPassword");
- ... (38 more removed lines; see GitHub link above)
+             XU.size && XU.type && oU.push({
+               name: XU.name,
+               type: XU.type,
+               arraySize: XU.arraySize
+             })
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1712-L1713` → after: `L2307-L2612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2307-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2307-L2612) · [Before (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1712-L1713)

```diff
-         async function Xr(MM, rM) {
-           return NM(MM, "POST", "/v1/accounts:signInWithIdp", oM(MM, rM))
+         UU.vertexCode = zU, UU.fragmentCode = cU, UU.pluginUniforms = oU, UU.codeKey = JSON.stringify([zU, cU, oU]), UU.codeVersion = XU.version
+       }(UU, XU), `${zU}#${UU.codeKey}`
+     }
+ 
+     function NQ(UU, XU) {
+       if (UU)
+         for (const zU in UU) UU[zU] && XU.push([zU, UU[zU]])
+     }
+     const IQ = new Map([
+       [512, "never"],
+       [513, "greater"],
+       [514, "equal"],
+       [515, "greater-equal"],
+       [516, "less"],
+       [517, "not-equal"],
+       [518, "less-equal"],
+ ... (290 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1715-L1731` → after: `L2614-L2708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2614-L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2614-L2708) · [Before (L1715-L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1715-L1731)

```diff
-         class Ir extends fr {
-           constructor() {
-             super(...arguments), this.pendingToken = null
-           }
-           static _fromParams(MM) {
-             const rM = new Ir(MM.providerId, MM.signInMethod);
-             return MM.idToken || MM.accessToken ? (MM.idToken && (rM.idToken = MM.idToken), MM.accessToken && (rM.accessToken = MM.accessToken), MM.nonce && !MM.pendingToken && (rM.nonce = MM.nonce), MM.pendingToken && (rM.pendingToken = MM.pendingToken)) : MM.oauthToken && MM.oa … [truncated]
-           }
-           toJSON() {
-             return {
-               idToken: this.idToken,
-               accessToken: this.accessToken,
-               secret: this.secret,
-               nonce: this.nonce,
-               pendingToken: this.pendingToken,
-               providerId: this.providerId,
- ... (1 more removed lines; see GitHub link above)
+         if (yU.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${XU}`, `${XU} needs ${yU.length} vertex buffers`), null;
+         let FU = "";
+         for (const EU of yU) {
+           FU += `${EU.stride}${"instance"===EU.step?"i":"v"}`;
+           for (const UU of EU.attributes) FU += `,${UU.shaderLocation}:${UU.offset}:${UU.format}`;
+           FU += ";"
+         }
+         let oU = this.layouts.get(FU);
+         oU || (oU = {
+           key: FU,
+           buffers: yU.map((UU => ({
+             arrayStride: UU.stride,
+             stepMode: UU.step,
+             attributes: UU.attributes
+           }))),
+           instanceEnds: yU.map((UU => {
+ ... (79 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1733-L1764` → after: `L2710-L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2710-L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2710-L2714) · [Before (L1733-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1733-L1764)

```diff
-           }
-           static fromJSON(MM) {
-             const rM = "string" === typeof MM ? JSON.parse(MM) : MM,
-               {
-                 providerId: iM,
-                 signInMethod: OM
-               } = rM,
-               SM = jM(rM, ["providerId", "signInMethod"]);
-             if (!iM || !OM) return null;
-             const aM = new Ir(iM, OM);
-             return aM.idToken = SM.idToken || void 0, aM.accessToken = SM.accessToken || void 0, aM.secret = SM.secret, aM.nonce = SM.nonce, aM.pendingToken = SM.pendingToken || null, aM
-           }
-           _getIdTokenResponse(MM) {
-             return Xr(MM, this.buildRequest())
-           }
-           _linkToIdToken(MM, rM) {
- ... (16 more removed lines; see GitHub link above)
+           }, {
+             binding: 1,
+             resource: {
+               buffer: this.buffer,
+               size: 80
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1766` → after: `L2716-L2853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2716-L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2716-L2853) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1766)

```diff
-             return MM
+           }]
+         })
+       }
+     }
+ 
+     function eQ(UU) {
+       return UU.gpu[eU.e.lite] ??= UU.materials.map(((XU, zU) => ({
+         parts: UU,
+         range: zU,
+         owner: UU.owner
+       })))
+     }
+ 
+     function CQ(UU) {
+       var XU, zU, cU;
+       return null !== (XU = null !== (zU = null === (cU = UU.parts.materials[UU.range]) || void 0 === cU ? void 0 : cU.mirror) && void 0 !== zU ? zU : UU.owner.material) && void 0 !== XU ? XU : null
+ ... (122 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1768` → after: `L2855-L2867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2855-L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2855-L2867) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1768)

```diff
-         }
+         }, this.groups.set(UU, XU)), XU
+       }
+     }
+ 
+     function SQ(UU) {
+       UU.opaque.length = 0, UU.transparent.length = 0
+     }
+     class rQ {
+       constructor() {
+         this.uD = new Map, this.enabled = [], this.groups = new Map, this.cY = [], this.warned = new Set, this.selected = 0, this.drawn = 0
+       }
+       add(UU) {
+         if (this.uD.has(UU)) return;
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1770` → after: `L2869-L2874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2869-L2874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2869-L2874) · [Before (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1770)

```diff
-           USER_NOT_FOUND: "user-not-found"
+           mesh: UU,
+           observer: UU.onEffectiveEnabledStateChangedObservable.add((UU => {
+             this.YC(XU, UU)
+           })),
+           index: -1,
+           steady: null
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1772-L1780` → after: `L2876-L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2876-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2876-L2922) · [Before (L1772-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1772-L1780)

```diff
-         class qr extends fr {
-           constructor(MM) {
-             super("phone", "phone"), this.params = MM
-           }
-           static _fromVerification(MM, rM) {
-             return new qr({
-               verificationId: MM,
-               verificationCode: rM
-             })
+         this.uD.set(UU, XU), this.YC(XU, UU.isEnabled())
+       }
+       remove(UU) {
+         const XU = this.uD.get(UU);
+         XU && (XU.observer.remove(!0), this.YC(XU, !1), this.uD.delete(UU))
+       }
+       dropSteady() {
+         for (const UU of this.uD.values()) UU.steady = null
+       }
+       base(UU) {
+         return this.uD.get(UU)
+       }
+       drawStats() {
+         return {
+           drawn: this.drawn,
+           selected: this.selected,
+ ... (31 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1782-L1883` → after: `L2924-L3043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2924-L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L2924-L3043) · [Before (L1782-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1782-L1883)

```diff
-           static _fromTokenResponse(MM, rM) {
-             return new qr({
-               phoneNumber: MM,
-               temporaryProof: rM
-             })
-           }
-           _getIdTokenResponse(MM) {
-             return async function(MM, rM) {
-               return NM(MM, "POST", "/v1/accounts:signInWithPhoneNumber", oM(MM, rM))
-             }(MM, this._makeVerificationRequest())
-           }
-           _linkToIdToken(MM, rM) {
-             return async function(MM, rM) {
-               const iM = await NM(MM, "POST", "/v1/accounts:signInWithPhoneNumber", oM(MM, rM));
-               if (iM.temporaryProof) throw vM(MM, "account-exists-with-different-credential", iM);
-               return iM
- ... (86 more removed lines; see GitHub link above)
+           const {
+             parts: AU
+           } = QU;
+           if (!AU) continue;
+           QU.computeWorldMatrix(), this.selected++;
+           const FU = this.listsFor(QU.renderingGroupId);
+           for (const UU of eQ(AU)) {
+             const XU = CQ(UU);
+             XU && (XU.needAlphaBlendingForMesh(QU) ? FU.transparent.push(UU) : FU.opaque.push(UU))
+           }
+         }
+       }
+       YC(UU, XU) {
+         if (XU === UU.index >= 0) return;
+         UU.steady = null;
+         const zU = this.enabled;
+ ... (104 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1885` → after: `L3045-L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3045-L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3045-L3098) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1885)

```diff
-         }
+           let EU;
+           if (oU.mw && "indirect" !== cU) {
+             const UU = oU.unit.owner;
+             EU = "direct" === cU && (0, uQ.x)(UU) || (0, uQ.o)(UU) || void 0
+           }
+           if (QU && this.keep(oU, yU, QU.uD), 0 === (null === (FU = EU) || void 0 === FU ? void 0 : FU.count)) continue;
+           this.binder.bind(UU, yU, DU, this.slots.bindGroup, oU.slot * Dy);
+           const YU = 5 * oU.slot;
+           if ("indirect" === cU) {
+             yU.indexBuffer ? UU.drawIndexedIndirect(this.argsBuffer, 4 * YU) : UU.drawIndirect(this.argsBuffer, 4 * YU);
+             continue
+           }
+           const NU = this.args;
+           EU ? HQ(UU, null !== yU.indexBuffer, NU, YU, EU) : yU.indexBuffer ? UU.drawIndexed(NU[YU], NU[YU + 1], NU[YU + 2], 0, 0) : UU.draw(NU[YU], NU[YU + 1], NU[YU + 2], 0)
+         }
+         QU && (QU.stale = AU)
+ ... (38 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1887-L2003` → after: `L3100-L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3100-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3100-L3159) · [Before (L1887-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L1887-L2003)

```diff
-         function Vr(MM) {
-           return Tr.parseLink(MM)
-         }
-         class cr {
-           constructor() {
-             this.providerId = cr.PROVIDER_ID
-           }
-           static credential(MM, rM) {
-             return Br._fromEmailAndPassword(MM, rM)
-           }
-           static credentialWithLink(MM, rM) {
-             const iM = Tr.parseLink(rM);
-             return wM(iM, "argument-error"), Br._fromEmailAndCode(MM, iM.code, iM.tenantId)
-           }
-         }
-         cr.PROVIDER_ID = "password", cr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", cr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
- ... (101 more removed lines; see GitHub link above)
+     function HQ(UU, XU, zU, cU, yU) {
+       const QU = zU[cU + 1],
+         AU = yU.data;
+       for (let FU = 0; FU < yU.count; FU++) {
+         const yU = Math.min(AU[2 * FU], QU),
+           oU = Math.min(AU[2 * FU + 1], QU - yU);
+         0 !== oU && (XU ? UU.drawIndexed(zU[cU], oU, zU[cU + 2], 0, yU) : UU.draw(zU[cU], oU, zU[cU + 2], yU))
+       }
+     }
+ 
+     function MQ(UU, XU) {
+       if (UU.pipelineKey !== XU.pipelineKey || UU.materialGroup !== XU.material.bindGroup || UU.indexBuffer !== XU.indexBuffer || UU.indexFormat !== XU.indexFormat || UU.vertexOffsets !== XU.vertexOffsets || UU.vertexBuffers.length !== XU.vertexBuffers.length) return !1;
+       for (let zU = 0; zU < UU.vertexBuffers.length; zU++)
+         if (UU.vertexBuffers[zU] !== XU.vertexBuffers[zU]) return !1;
+       return !0
+     }
+ ... (44 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2005-L2039` → after: `L3161-L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3161-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3161-L3165) · [Before (L2005-L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2005-L2039)

```diff
-           }
-         }
-         Oi.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Oi.PROVIDER_ID = "facebook.com";
-         class Si extends ri {
-           constructor() {
-             super("google.com"), this.addScope("profile")
-           }
-           static credential(MM, rM) {
-             return Ir._fromParams({
-               providerId: Si.PROVIDER_ID,
-               signInMethod: Si.GOOGLE_SIGN_IN_METHOD,
-               idToken: MM,
-               accessToken: rM
-             })
-           }
-           static credentialFromResult(MM) {
- ... (19 more removed lines; see GitHub link above)
+           }, {
+             binding: XU.lN,
+             visibility: UU,
+             buffer: {
+               type: "read-only-storage"
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2041-L2070` → after: `L3167-L3171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3167-L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3167-L3171) · [Before (L2041-L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2041-L2070)

```diff
-           }
-         }
-         Si.GOOGLE_SIGN_IN_METHOD = "google.com", Si.PROVIDER_ID = "google.com";
-         class ji extends ri {
-           constructor() {
-             super("github.com")
-           }
-           static credential(MM) {
-             return Ir._fromParams({
-               providerId: ji.PROVIDER_ID,
-               signInMethod: ji.GITHUB_SIGN_IN_METHOD,
-               accessToken: MM
-             })
-           }
-           static credentialFromResult(MM) {
-             return ji.credentialFromTaggedObject(MM)
- ... (14 more removed lines; see GitHub link above)
+           }, {
+             binding: XU.special,
+             visibility: UU,
+             buffer: {
+               type: "read-only-storage"
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2072-L2094` → after: `L3173-L3178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3173-L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3173-L3178) · [Before (L2072-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2072-L2094)

```diff
-           }
-         }
-         ji.GITHUB_SIGN_IN_METHOD = "github.com", ji.PROVIDER_ID = "github.com";
-         class ai extends fr {
-           constructor(MM, rM) {
-             super(MM, MM), this.pendingToken = rM
-           }
-           _getIdTokenResponse(MM) {
-             return Xr(MM, this.buildRequest())
-           }
-           _linkToIdToken(MM, rM) {
-             const iM = this.buildRequest();
-             return iM.idToken = rM, Xr(MM, iM)
-           }
-           _getReauthenticationResolver(MM) {
-             const rM = this.buildRequest();
- ... (7 more removed lines; see GitHub link above)
+           }, {
+             binding: XU.volume,
+             visibility: UU,
+             texture: {
+               sampleType: "float",
+               viewDimension: "3d"
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2096-L2113` → after: `L3180-L3184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3180-L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3180-L3184) · [Before (L2096-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2096-L2113)

```diff
-           }
-           static fromJSON(MM) {
-             const rM = "string" === typeof MM ? JSON.parse(MM) : MM,
-               {
-                 providerId: iM,
-                 signInMethod: OM,
-                 pendingToken: SM
-               } = rM;
-             return iM && OM && SM && iM === OM ? new ai(iM, SM) : null
-           }
-           static _create(MM, rM) {
-             return new ai(MM, rM)
-           }
-           buildRequest() {
-             return {
-               requestUri: "http://localhost",
- ... (2 more removed lines; see GitHub link above)
+           }, {
+             binding: XU.sampler,
+             visibility: UU,
+             sampler: {
+               type: "filtering"
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2115-L2144` → after: `L3186-L3190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3186-L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3186-L3190) · [Before (L2115-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2115-L2144)

```diff
-           }
-         }
-         class Pi extends Mi {
-           constructor(MM) {
-             wM(MM.startsWith("saml."), "argument-error"), super(MM)
-           }
-           static credentialFromResult(MM) {
-             return Pi.samlCredentialFromTaggedObject(MM)
-           }
-           static credentialFromError(MM) {
-             return Pi.samlCredentialFromTaggedObject(MM.customData || {})
-           }
-           static credentialFromJSON(MM) {
-             const rM = ai.fromJSON(MM);
-             return wM(rM, "argument-error"), rM
-           }
- ... (14 more removed lines; see GitHub link above)
+           }, {
+             binding: XU.entities,
+             visibility: UU,
+             buffer: {
+               type: "read-only-storage"
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2146-L2179` → after: `L3192-L3196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3192-L3196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3192-L3196) · [Before (L2146-L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2146-L2179)

```diff
-           }
-         }
-         class ni extends ri {
-           constructor() {
-             super("twitter.com")
-           }
-           static credential(MM, rM) {
-             return Ir._fromParams({
-               providerId: ni.PROVIDER_ID,
-               signInMethod: ni.TWITTER_SIGN_IN_METHOD,
-               oauthToken: MM,
-               oauthTokenSecret: rM
-             })
-           }
-           static credentialFromResult(MM) {
-             return ni.credentialFromTaggedObject(MM)
- ... (18 more removed lines; see GitHub link above)
+           }, {
+             binding: XU.entityGrids,
+             visibility: UU,
+             buffer: {
+               type: "read-only-storage"
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2181-L2212` → after: `L3198-L3211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3198-L3211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3198-L3211) · [Before (L2181-L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2181-L2212)

```diff
-           }
-         }
-         async function Qi(MM, rM) {
-           return NM(MM, "POST", "/v1/accounts:signUp", oM(MM, rM))
-         }
-         ni.TWITTER_SIGN_IN_METHOD = "twitter.com", ni.PROVIDER_ID = "twitter.com";
-         class zi {
-           constructor(MM) {
-             this.user = MM.user, this.providerId = MM.providerId, this._tokenResponse = MM._tokenResponse, this.operationType = MM.operationType
-           }
-           static async _fromIdTokenResponse(MM, rM, iM) {
-             let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-             const SM = await Or._fromIdTokenResponse(MM, iM, OM),
-               jM = Li(iM);
-             return new zi({
-               user: SM,
- ... (16 more removed lines; see GitHub link above)
+           }]
+         }()), XU.shadowMask && QU.push({
+           binding: KX.y,
+           visibility: GPUShaderStage.FRAGMENT,
+           texture: {
+             sampleType: "unfilterable-float"
+           }
+         }), yU = UU.createBindGroupLayout({
+           label: `${XU.depth?"terrain-":""}shader-pack-inputs${cU}`,
+           entries: QU
+         }), zU.set(cU, yU)
+       }
+       return yU
+     }
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2214-L2226` → after: `L3213-L3296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3213-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3213-L3296) · [Before (L2214-L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2214-L2226)

```diff
-         function Li(MM) {
-           return MM.providerId ? MM.providerId : "phoneNumber" in MM ? "phone" : null
-         }
-         async function mi(MM) {
-           var rM;
-           const iM = Wr(MM);
-           if (await iM._initializationPromise, null === (rM = iM.currentUser) || void 0 === rM ? void 0 : rM.isAnonymous) return new zi({
-             user: iM.currentUser,
-             providerId: null,
-             operationType: "signIn"
-           });
-           const OM = await Qi(iM, {
-               returnSecureToken: !0
+     function mQ(UU) {
+       return nQ(UU, sQ)
+     }
+ 
+     function lQ(UU, XU) {
+       if (!XU) return !1;
+       const zU = (0, bX.e)(UU);
+       return !!zU && Qc(zU, XU)
+     }
+ 
+     function xQ(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!Oc(XU)) return [];
+       return [nQ(UU, {
+         depth: Lc(XU.packVariant),
+ ... (68 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2228-L2244` → after: `L3298-L3308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3298-L3308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3298-L3308) · [Before (L2228-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2228-L2244)

```diff
-             SM = await zi._fromIdTokenResponse(iM, "signIn", OM, !0);
-           return await iM._updateCurrentUser(SM.user), SM
-         }
-         class Hi extends OM.j {
-           constructor(MM, rM, iM, OM) {
-             var SM;
-             super(rM.code, rM.message), this.operationType = iM, this.user = OM, Object.setPrototypeOf(this, Hi.prototype), this.customData = {
-               appName: MM.name,
-               tenantId: null !== (SM = MM.tenantId) && void 0 !== SM ? SM : void 0,
-               _serverResponse: rM.customData._serverResponse,
-               operationType: iM
-             }
-           }
-           static _fromErrorAndOperation(MM, rM, iM, OM) {
-             return new Hi(MM, rM, iM, OM)
-           }
- ... (1 more removed lines; see GitHub link above)
+             entries: XU
+           }), this.groups.set(yU, QU)
+         }
+         return QU
+       }
+       bind(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         UU.setBindGroup(KX.h, this.bindGroupFor(XU, zU, cU))
+       }
+     }
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2246-L2251` → after: `L3310-L3317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3310-L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3310-L3317) · [Before (L2246-L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2246-L2251)

```diff
-         function Ji(MM, rM, iM, OM) {
-           return ("reauthenticate" === rM ? iM._getReauthenticationResolver(MM) : iM._getIdTokenResponse(MM)).catch((iM => {
-             if ("auth/multi-factor-auth-required" === iM.code) throw Hi._fromErrorAndOperation(MM, iM, rM, OM);
-             throw iM
-           }))
-         }
+     function jQ(UU, XU, zU) {
+       if (UU.gpuVersion === XU.gpuBuffersVersion) return !0;
+       let cU;
+       do {
+         if (cU = XU.gpuBuffersVersion, !KQ(UU, XU, zU)) return !1
+       } while (XU.gpuBuffersVersion !== cU);
+       return UU.gpuVersion = cU, UU.fitInstances = 0, !0
+     }
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2253-L2352` → after: `L3319-L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3319-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3319-L3331) · [Before (L2253-L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2253-L2352)

```diff
-         function di(MM) {
-           return new Set(MM.map((MM => {
-             let {
-               providerId: rM
-             } = MM;
-             return rM
-           })).filter((MM => !!MM)))
-         }
-         async function yi(MM, rM) {
-           const iM = (0, OM.N)(MM);
-           await Ei(!0, iM, rM);
-           const {
-             providerUserInfo: SM
-           } = await async function(MM, rM) {
-             return fM(MM, "POST", "/v1/accounts:update", rM)
-           }(iM.auth, {
- ... (84 more removed lines; see GitHub link above)
+     function KQ(UU, XU, zU) {
+       let cU = null;
+       for (let QU = 0; QU < UU.slotData.length; QU++) {
+         var yU;
+         const AU = UU.slotData[QU],
+           FU = AU ? XU.gpuBuffer(AU) : zU;
+         if (!FU) return !1;
+         AU && UU.layout.instanceEnds[QU] < 0 && XU.cover(AU, Number.POSITIVE_INFINITY), UU.buffers[QU] = FU;
+         const oU = UU.gUU[QU] + (AU ? XU.gpuOffset(AU) : 0);
+         oU !== (null !== (yU = cU) && void 0 !== yU ? yU : UU.offsets)[QU] && (cU ??= UU.offsets.slice(), cU[QU] = oU), UU.ends[QU] = AU ? XU.gpuEnd(AU) : FU.size
+       }
+       return cU && (UU.offsets = cU), !0
+     }
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2354-L2448` → after: `L3333-L3363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3333-L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3333-L3363) · [Before (L2354-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2354-L2448)

```diff
-         function Ri(MM, rM, iM) {
-           var OM;
-           wM((null === (OM = iM.url) || void 0 === OM ? void 0 : OM.length) > 0, MM, "invalid-continue-uri"), wM("undefined" === typeof iM.dynamicLinkDomain || iM.dynamicLinkDomain.length > 0, MM, "invalid-dynamic-link-domain"), rM.continueUrl = iM.url, rM.dynamicLinkDomain = iM. … [truncated]
-         }
-         async function Wi(MM, rM, iM) {
-           var OM;
-           const SM = Wr(MM),
-             jM = {
-               requestType: "PASSWORD_RESET",
-               email: rM,
-               clientType: "CLIENT_TYPE_WEB"
-             };
-           if (null === (OM = SM._getRecaptchaConfig()) || void 0 === OM ? void 0 : OM.emailPasswordEnabled) {
-             const MM = await ur(SM, jM, "getOobCode", !0);
-             iM && Ri(SM, MM, iM), await vr(SM, MM)
-           } else iM && Ri(SM, jM, iM), await vr(SM, jM).catch((async MM => {
- ... (79 more removed lines; see GitHub link above)
+     function bQ(UU, XU, zU, cU) {
+       if (XU <= UU.fitInstances) return null;
+       const {
+         layout: yU,
+         ends: QU,
+         offsets: AU,
+         slotData: FU,
+         gUU: oU
+       } = UU;
+       let DU = !1;
+       for (let EU = 0; EU < yU.buffers.length; EU++) {
+         const UU = yU.instanceEnds[EU];
+         if (UU < 0) continue;
+         const cU = (XU - 1) * yU.buffers[EU].arrayStride + UU;
+         if (QU[EU] - AU[EU] < cU) return {
+           index: EU,
+ ... (15 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2450-L2460` → after: `L3365-L3369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3365-L3369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3365-L3369) · [Before (L2450-L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2450-L2460)

```diff
-         function fi(MM, rM, iM) {
-           return Ci((0, OM.N)(MM), cr.credential(rM, iM))
-         }
-         async function Yi(MM, rM, iM) {
-           var OM;
-           const SM = Wr(MM),
-             jM = {
-               requestType: "EMAIL_SIGNIN",
-               email: rM,
-               clientType: "CLIENT_TYPE_WEB"
-             };
+     function AA(UU) {
+       return "item" === UU.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
+     }
+     const FA = "bloxdSpEnchant",
+       oA = "floor(finalWorld[3].xyz)";
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2462-L2476` → after: `L3371-L3373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3371-L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3371-L3373) · [Before (L2462-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2462-L2476)

```diff
-           function aM(MM, rM) {
-             wM(rM.handleCodeInApp, SM, "argument-error"), rM && Ri(SM, MM, rM)
-           }
-           if (null === (OM = SM._getRecaptchaConfig()) || void 0 === OM ? void 0 : OM.emailPasswordEnabled) {
-             const MM = await ur(SM, jM, "getOobCode", !0);
-             aM(MM, iM), await Fr(SM, MM)
-           } else aM(jM, iM), await Fr(SM, jM).catch((async MM => {
-             if ("auth/missing-recaptcha-token" !== MM.code) return Promise.reject(MM);
-             {
-               console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
-               const MM = await ur(SM, jM, "getOobCode", !0);
-               aM(MM, iM), await Fr(SM, MM)
-             }
-           }))
-         }
+     function DA(UU, XU, zU) {
+       return "placed" === XU.kind && UU.reads[zU].includes("bloxdFragmentBlockPosition")
+     }
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2478-L2552` → after: `L3375-L3378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3375-L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3375-L3378) · [Before (L2478-L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2478-L2552)

```diff
-         function Ni(MM, rM) {
-           const iM = Tr.parseLink(rM);
-           return "EMAIL_SIGNIN" === (null === iM || void 0 === iM ? void 0 : iM.operation)
-         }
-         async function Ai(MM, rM, iM) {
-           const SM = (0, OM.N)(MM),
-             jM = cr.credentialWithLink(rM, iM || uM());
-           return wM(jM._tenantId === (SM.tenantId || null), SM, "tenant-id-mismatch"), Ci(SM, jM)
-         }
-         async function xi(MM, rM) {
-           const iM = {
-               identifier: rM,
-               continueUri: RM() ? uM() : "http://localhost"
-             },
-             {
-               signinMethods: SM
- ... (59 more removed lines; see GitHub link above)
+     function EA(UU, XU) {
+       let [zU, cU] = UU;
+       return zU === XU.point && cU === XU.code
+     }
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2554-L2556` → after: `L3380-L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3380-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3380-L3394) · [Before (L2554-L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2554-L2556)

```diff
-         function Xi(MM, rM) {
-           return Ki((0, OM.N)(MM), rM, null)
-         }
+     function YA(UU, XU) {
+       var zU, cU, yU;
+       const QU = null === (zU = UU.find((UU => UU.texture))) || void 0 === zU ? void 0 : zU.texture,
+         AU = null === (cU = UU.find((UU => UU.enchantTier))) || void 0 === cU ? void 0 : cU.enchantTier,
+         FU = null === (yU = UU.find((UU => UU.overlay))) || void 0 === yU ? void 0 : yU.overlay,
+         oU = FU ? XU.filter((UU => EA(UU, FU))).length : 0;
+       return FU && 1 === oU ? {
+         texture: QU,
+         overlay: FU,
+         enchantTier: AU
+       } : {
+         texture: QU,
+         enchantTier: AU
+       }
+     }
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2558-L2566` → after: `L3396-L3977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3396-L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3396-L3977) · [Before (L2558-L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2558-L2566)

```diff
-         function Ii(MM, rM) {
-           return Ki((0, OM.N)(MM), null, rM)
-         }
-         async function Ki(MM, rM, iM) {
-           const {
-             auth: OM
-           } = MM, SM = {
-             idToken: await MM.getIdToken(),
-             returnSecureToken: !0
+     function NA(UU) {
+       if ("item" === UU.kind) {
+         return {
+           vertexFlags: `(${yA} & 0xffffu)`,
+           varying: "vPackItem",
+           value: yA,
+           flags: "(fragmentInputs.vPackItem & 0xffffu)",
+           enchantTier: "(fragmentInputs.vPackItem >> 16u)"
+         }
+       }
+       return UU.defines.BLOXD_LIGHT_WORD ? {
+         vertexFlags: cA,
+         varying: "vPackFlags",
+         value: cA,
+         flags: "fragmentInputs.vPackFlags",
+         enchantTier: "0u"
+ ... (566 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2568-L2586` → after: `L3979-L4167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3979-L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L3979-L4167) · [Before (L2568-L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2568-L2586)

```diff
-           rM && (SM.email = rM), iM && (SM.password = iM);
-           const jM = await qM(MM, Nr(OM, SM));
-           await MM._updateTokensIfNecessary(jM, !0)
-         }
-         class qi {
-           constructor(MM, rM) {
-             let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-             this.isNewUser = MM, this.providerId = rM, this.profile = iM
-           }
-         }
-         class Ti extends qi {
-           constructor(MM, rM, iM, OM) {
-             super(MM, rM, iM), this.username = OM
-           }
-         }
-         class Vi extends qi {
- ... (3 more removed lines; see GitHub link above)
+         return this.createProgram(zU, FU, function(UU) {
+           return `standard-sp${UU}`
+         }(AU), DU)
+       }
+       lineProgramFor(UU, XU, zU) {
+         const cU = gU(UU, zU, XU, this.view);
+         let yU = this.linePrograms.get(cU);
+         var QU;
+         return yU || (yU = this.createProgram(`lines#${cU}`, (QU = function(UU) {
+           const XU = new Map;
+           for (let zU = 0; zU < DU.length; zU++) UU & 1 << zU && XU.set(DU[zU], !0);
+           return XU
+         }(cU), ry({
+           defines: QU,
+           vertex: Oy,
+           fragment: Sy,
+ ... (173 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2588-L2590` → after: `L4169-L4222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4169-L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4169-L4222) · [Before (L2588-L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2588-L2590)

```diff
-         class ci extends Ti {
-           constructor(MM, rM) {
-             super(MM, "github.com", rM, "string" === typeof(null === rM || void 0 === rM ? void 0 : rM.login) ? null === rM || void 0 === rM ? void 0 : rM.login : null)
+         return !0
+       }
+       writeMeshSlot(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, UU, XU, zU), this.slotCount++ * Dy
+       }
+       uploadMeshSlots() {
+         this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
+       }
+       vertexInputs(UU, XU, zU, cU, yU) {
+         let QU = this.inputs.get(UU);
+         if (!QU || QU.program !== cU || !WQ(XU, QU, this.resources, yU)) {
+           var AU;
+           if (QU = null !== (AU = this.vertexLayouts.resolveInputs(XU, zU, cU, yU)) && void 0 !== AU ? AU : void 0, !QU) return null;
+           this.inputs.set(UU, QU)
+         }
+ ... (38 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2593-L2596` → after: `L4225-L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4225-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4225-L4228) · [Before (L2593-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2593-L2596)

```diff
-         class MO extends qi {
-           constructor(MM, rM) {
-             super(MM, "google.com", rM)
-           }
+         return {
+           renderable: UU,
+           pipeline: QU,
+           draw: UU => (cU ? cU.execute(UU, XU, yU) : 0) + this.drawList(UU, XU, yU, zU)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2598-L2600` → after: `L4230-L4290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4230-L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4230-L4290) · [Before (L2598-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2598-L2600)

```diff
-         class rO extends Ti {
-           constructor(MM, rM, iM) {
-             super(MM, "twitter.com", rM, iM)
+       }
+       drawSky(UU, XU, zU, cU) {
+         const yU = this.lists.skyDraws,
+           QU = yU.length > 0;
+         if (QU) {
+           var AU;
+           const zU = (null !== (AU = XU._depthCompare) && void 0 !== AU ? AU : WX).startsWith("greater") ? 0 : 1;
+           UU.setViewport(0, 0, cU.targetWidth, cU.targetHeight, zU, zU)
+         }
+         const FU = this.drawList(UU, XU, zU, yU);
+         return QU && UU.setViewport(0, 0, cU.targetWidth, cU.targetHeight, 0, 1), FU
+       }
+       drawList(UU, XU, zU, cU) {
+         let yU = 0;
+         const QU = this.binder;
+         QU.reset();
+ ... (45 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2602-L2637` → after: `L4292-L4319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4292-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4292-L4319) · [Before (L2602-L2637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2602-L2637)

```diff
-         }
- 
-         function iO(MM) {
-           const {
-             user: rM,
-             _tokenResponse: iM
-           } = MM;
-           return rM.isAnonymous && !iM ? {
-             providerId: null,
-             isNewUser: !1,
-             profile: null
-           } : function(MM) {
-             var rM, iM;
-             if (!MM) return null;
-             const {
-               providerId: OM
- ... (20 more removed lines; see GitHub link above)
+         };
+         return this.compiling++, this.device.createRenderPipelineAsync(YU).then((UU => {
+           this.compiling--, this.pipelines.set(AU, UU)
+         }), (UU => {
+           this.compiling--, this.reportFailure(oU, AU, UU)
+         })), null
+       }
+       forEachSunShadowCaster(UU) {
+         const XU = this.caster,
+           zU = (zU, cU, yU) => {
+             const QU = zU.unit && function(UU) {
+               const XU = UU.material.model;
+               return null !== XU && (XU.lifeform || XU.item) && XU.castsSunShadow && "triangle-list" === UU.state.topology
+             }(zU) ? oQ(zU.unit) : null;
+             if (!QU) return;
+             const AU = zU.unit.owner;
+ ... (12 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2639-L2644` → after: `L4321-L4354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4321-L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4321-L4354) · [Before (L2639-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2639-L2644)

```diff
-           }(iM)
-         }
- 
-         function OO(MM, rM) {
-           return (0, OM.N)(MM).setPersistence(rM)
-         }
+             UU(XU)
+           };
+         for (const cU of this.lists.opaqueDraws) zU(cU, this.meshSlots.data, cU.slotOffset / 4);
+         this.thinBundle.forEachDrawn(zU)
+       }
+       writeBatchCasters(UU) {
+         const {
+           caster: XU
+         } = this, zU = UU.packedMatrices, cU = UU.count;
+         XU.instances = zU, XU.instanceCount = cU;
+         let yU = -1;
+         for (let QU = 0; QU < cU; QU++) {
+           const XU = rA(UU.packedRowMesh(QU));
+           XU && yU < 0 ? (this.casterWorlds.length < 16 * cU && (this.casterWorlds = new Float32Array(zU.length)), this.casterWorlds.set(zU.subarray(0, 16 * QU)), yU = QU) : !XU && yU >= 0 && (this.casterWorlds.set(zU.subarray(16 * QU, 16 * QU + 16), 16 * yU), yU++)
+         }
+         return yU >= 0 && (XU.instances = this.casterWorlds, XU.instanceCount = yU), XU.instanceCount > 0
+ ... (18 more added lines; see GitHub link above)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2646-L2648` → after: `L4356-L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4356-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4356-L4365) · [Before (L2646-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2646-L2648)

```diff
-         function SO(MM) {
-           return Wr(MM).initializeRecaptchaConfig()
-         }
+     function rA(UU) {
+       var XU, zU;
+       const cU = null === (XU = UU.XM) || void 0 === XU || null === (zU = XU.aShaderPackItem) || void 0 === zU ? void 0 : zU.x;
+       return void 0 !== cU && 0 !== (cU & qX.i)
+     }
+     var uA = zU(44369),
+       fA = zU(44374),
+       iA = zU(44382),
+       HA = zU(44328);
+     const MA = [0, 3, 1, 4, 2, 5];
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2650-L2652` → after: `L4367-L4405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4367-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4367-L4405) · [Before (L2650-L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2650-L2652)

```diff
-         function jO(MM, rM, iM, SM) {
-           return (0, OM.N)(MM).onIdTokenChanged(rM, iM, SM)
-         }
+     function vA(UU, XU, zU, cU, yU) {
+       const QU = zU[0].width;
+       try {
+         return yU ? function(UU, XU, zU) {
+           const cU = (0, HA.e)(UU, zU, zU, 6);
+           for (let yU = 0; yU < 6; yU++)(0, HA.h)(UU, cU, yU, XU[MA[yU]], {
+             invertY: !1
+           });
+           return cU.texture
+         }(UU, zU, QU) : function(UU, XU, zU, cU) {
+           const yU = UU.createTexture({
+             label: "sink-cube",
+             size: {
+               width: zU,
+               height: zU,
+               depthOrArrayLayers: 6
+ ... (23 more added lines; see GitHub link above)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2654-L2656` → after: `L4407-L4577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4407-L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4407-L4577) · [Before (L2654-L2656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2654-L2656)

```diff
-         function aO(MM, rM, iM) {
-           return (0, OM.N)(MM).beforeAuthStateChanged(rM, iM)
-         }
+     function VA(UU) {
+       for (const XU of null !== UU && void 0 !== UU ? UU : []) null === XU || void 0 === XU || XU.close()
+     }
+     async function sA(UU) {
+       const XU = [],
+         zU = [];
+       if (await Promise.all(UU.map(((UU, cU) => (XU[cU] = null, UU.then((UU => {
+           XU[cU] = UU
+         }), (UU => {
+           zU.push(UU)
+         })))))), zU.length > 0) throw VA(XU), zU[0];
+       return XU
+     }
+     class nA {
+       constructor(UU) {
+         this.xY = UU, this.starts = [], this.lengths = [], this.used = 0, UU > 0 && (this.starts.push(0), this.lengths.push(UU))
+ ... (155 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2658-L2660` → after: `L4579-L4581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4579-L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4579-L4581) · [Before (L2658-L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2658-L2660)

```diff
-         function PO(MM, rM, iM, SM) {
-           return (0, OM.N)(MM).onAuthStateChanged(rM, iM, SM)
-         }
+     function xA(UU) {
+       return Array.isArray(UU) ? new Float32Array(UU) : UU
+     }
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2662-L2664` → after: `L4583-L4589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4583-L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4583-L4589) · [Before (L2662-L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2662-L2664)

```diff
-         function nO(MM) {
-           (0, OM.N)(MM).useDeviceLanguage()
-         }
+     function JA(UU, XU, zU, cU, yU) {
+       const QU = xU(yU),
+         AU = Math.min(yU, cU.byteLength);
+       if (QU === AU && cU.byteOffset % 4 === 0) return void UU.queue.writeBuffer(XU, zU, cU.buffer, cU.byteOffset, QU);
+       const FU = new Uint8Array(QU);
+       FU.set(new Uint8Array(cU.buffer, cU.byteOffset, AU)), UU.queue.writeBuffer(XU, zU, FU)
+     }
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2666-L2668` → after: `L4591-L4648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4591-L4648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4591-L4648) · [Before (L2666-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2666-L2668)

```diff
-         function QO(MM, rM) {
-           return (0, OM.N)(MM).updateCurrentUser(rM)
-         }
+     function jA(UU, XU, zU) {
+       const cU = "linear",
+         yU = "nearest";
+       let QU = yU,
+         AU = yU,
+         FU = "nearest",
+         oU = !XU;
+       switch (UU) {
+         case 11:
+           QU = cU, AU = cU;
+           break;
+         case 3:
+           QU = cU, AU = cU, FU = XU ? "linear" : "nearest";
+           break;
+         case 8:
+           FU = XU ? "linear" : "nearest";
+ ... (42 more added lines; see GitHub link above)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2670-L2690` → after: `L4650-L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4650-L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4650-L4801) · [Before (L2670-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2670-L2690)

```diff
-         function zO(MM) {
-           return (0, OM.N)(MM).signOut()
-         }
-         async function LO(MM) {
-           return (0, OM.N)(MM).delete()
-         }
-         class mO {
-           constructor(MM, rM, iM) {
-             this.type = MM, this.credential = rM, this.auth = iM
-           }
-           static _fromIdtoken(MM, rM) {
-             return new mO("enroll", MM, rM)
-           }
-           static _fromMfaPendingCredential(MM) {
-             return new mO("signin", MM)
-           }
- ... (5 more removed lines; see GitHub link above)
+     function KA(UU) {
+       return 0 === UU ? "clamp-to-edge" : 2 === UU ? "mirror-repeat" : "repeat"
+     }
+     class bA {
+       constructor(UU, XU) {
+         let {
+           vertexArena: zU = !0
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         this.engine = UU, this.device = XU, this.buffers = new WeakMap, this.w6 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, t … [truncated]
+       }
+       createArena() {
+         return new lA(this.device, (UU => {
+           var XU;
+           null === (XU = this.onDestroy) || void 0 === XU || XU.call(this, UU), this.gpuBuffersVersion++
+         }))
+       }
+ ... (136 more added lines; see GitHub link above)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2693-L2727` → after: `L4804-L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4804-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4804-L4908) · [Before (L2693-L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2693-L2727)

```diff
-           }
-           static fromJSON(MM) {
-             var rM, iM;
-             if (null === MM || void 0 === MM ? void 0 : MM.multiFactorSession) {
-               if (null === (rM = MM.multiFactorSession) || void 0 === rM ? void 0 : rM.pendingCredential) return mO._fromMfaPendingCredential(MM.multiFactorSession.pendingCredential);
-               if (null === (iM = MM.multiFactorSession) || void 0 === iM ? void 0 : iM.idToken) return mO._fromIdtoken(MM.multiFactorSession.idToken)
-             }
-             return null
-           }
-         }
-         class HO {
-           constructor(MM, rM, iM) {
-             this.session = MM, this.hints = rM, this.signInResolver = iM
-           }
-           static _fromError(MM, rM) {
-             const iM = Wr(MM),
- ... (19 more removed lines; see GitHub link above)
+             for (; zU > 0 && 0 === XU[zU - 1];) zU--;
+             return zU
+           }(UU)), XU.slot = zU.allocate(XU.slotBytes, UU, XU.size), XU.pending = null, zU.buffer
+         }
+         if (!XU.gpu && XU.pending) {
+           const UU = XU.pending;
+           XU.gpu = this.device.createBuffer({
+             label: XU.label,
+             size: xU(UU.byteLength),
+             usage: XU.usage
+           }), JA(this.device, XU.gpu, 0, UU, UU.byteLength), XU.pending = null
+         }
+         return XU.gpu
+       }
+       gpuOffset(UU) {
+         var XU, zU;
+ ... (89 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2731-L2734` → after: `L4945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L4945) · [Before (L2731-L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2731-L2734)

```diff
-           async resolveSignIn(MM) {
-             const rM = MM;
-             return this.signInResolver(rM)
-           }
+           return this.atlasArrays(UU)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2737-L2781` → after: `L5165-L5169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5165-L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5165-L5169) · [Before (L2737-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2737-L2781)

```diff
-         function hO(MM, rM) {
-           var iM;
-           const SM = (0, OM.N)(MM),
-             jM = rM;
-           return wM(rM.customData.operationType, SM, "argument-error"), wM(null === (iM = jM.customData._serverResponse) || void 0 === iM ? void 0 : iM.mfaPendingCredential, SM, "argument-error"), HO._fromError(SM, jM)
-         }
-         class JO {
-           constructor(MM) {
-             this.user = MM, this.enrolledFactors = [], MM._onReload((rM => {
-               rM.mfaInfo && (this.enrolledFactors = rM.mfaInfo.map((rM => ti._fromServerResponse(MM.auth, rM))))
-             }))
-           }
-           static _fromUser(MM) {
-             return new JO(MM)
-           }
-           async getSession() {
- ... (29 more removed lines; see GitHub link above)
+     function TA(UU) {
+       return "cube" === UU.kind ? UU.rootUrl : "canvas" === UU.kind ? "canvas" : UU.url
+     }
+     const hA = new Uint8Array(4);
+     var UF = zU(39566);
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2783-L3016` → after: `L5171-L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5171-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5171-L5186) · [Before (L2783-L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L2783-L3016)

```diff
-         function yO(MM) {
-           const rM = (0, OM.N)(MM);
-           return dO.has(rM) || dO.set(rM, JO._fromUser(rM)), dO.get(rM)
-         }
-         const lO = "__sak";
-         class EO {
-           constructor(MM, rM) {
-             this.storageRetriever = MM, this.type = rM
-           }
-           _isAvailable() {
-             try {
-               return this.storage ? (this.storage.setItem(lO, "1"), this.storage.removeItem(lO), Promise.resolve(!0)) : Promise.resolve(!1)
-             } catch (MM) {
-               return Promise.resolve(!1)
-             }
-           }
- ... (218 more removed lines; see GitHub link above)
+     function XF(UU) {
+       const XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
+       UU._colorAttachment.storeOp = UU._targetSignature._sampleCount > 1 ? XU : "store";
+       const zU = UU._renderPassDescriptor.depthStencilAttachment;
+       zU && (zU.depthStoreOp = XU, zU.stencilStoreOp && (zU.stencilStoreOp = XU))
+     }
+     var zF = zU(38505),
+       cF = zU(38567),
+       yF = zU(38106),
+       QF = zU(40476);
+     const AF = new Float64Array([1, 1, 1]),
+       FF = new Float64Array([0, 1, 0]),
+       oF = new Float64Array(4),
+       DF = new Float32Array(16),
+       EF = new Float64Array(3),
+       YF = new Float64Array(4);
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3018-L3020` → after: `L5188-L5196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5188-L5196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5188-L5196) · [Before (L3018-L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3018-L3020)

```diff
-         function gO() {
-           return window
-         }
+     function NF(UU, XU, zU) {
+       UU.fov = XU.fov, UU.near = XU.near, UU.far = XU.far, UU.renderWidth = zU.renderWidth, UU.renderHeight = zU.renderHeight, (0, yF.u)(XU.holderRotation, 0, oF, 0), (0, yF.e)(AF, 0, oF, 0, XU.holderPosition, 0, DF);
+       const cU = XU.n_;
+       EF[0] = cU[0], EF[1] = cU[1], EF[2] = cU[2] + 1;
+       const yU = UU.viewMatrix;
+       (0, yF.n)(cU, EF, FF, yU), (0, yF.k)(yU, 0, yU), (0, yF.q)(yU, DF, 0, yU), (0, yF.k)(yU, 0, yU);
+       const QU = UU.worldMatrix;
+       (0, yF.k)(yU, 0, QU), UU.eye[0] = QU[12], UU.eye[1] = QU[13], UU.eye[2] = QU[14], YF[0] = UU.fov, YF[1] = UU.renderWidth / UU.renderHeight, YF[2] = UU.near, YF[3] = UU.far, (0, yF.t)(YF, UU.projectionMatrix), (0, yF.q)(yU, UU.projectionMatrix, 0, UU.viewProjectionMatrix), ( … [truncated]
+     }
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3022-L3041` → after: `L5198-L5207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5198-L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5198-L5207) · [Before (L3022-L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3022-L3041)

```diff
-         function uO() {
-           return "undefined" !== typeof gO().WorkerGlobalScope && "function" === typeof gO().importScripts
-         }
-         const RO = "firebaseLocalStorageDb",
-           pO = "firebaseLocalStorage",
-           WO = "fbase_key";
-         class sO {
-           constructor(MM) {
-             this.request = MM
-           }
-           toPromise() {
-             return new Promise(((MM, rM) => {
-               this.request.addEventListener("success", (() => {
-                 MM(this.request.result)
-               })), this.request.addEventListener("error", (() => {
-                 rM(this.request.error)
- ... (4 more removed lines; see GitHub link above)
+     function IF(UU, XU) {
+       let zU = UU.frustumPlanes;
+       zU || (zU = UU.frustumPlanes = Array.from({
+         length: 6
+       }, (() => new zF.d(0, 0, 0, 0))));
+       for (let cU = 0; cU < 6; cU++) {
+         const UU = zU[cU].normal;
+         UU._x = XU[4 * cU], UU._y = XU[4 * cU + 1], UU._z = XU[4 * cU + 2], UU._isDirty = !0, zU[cU].d = XU[4 * cU + 3]
+       }
+     }
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3043-L3045` → after: `L5209-L5214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5209-L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5209-L5214) · [Before (L3043-L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3043-L3045)

```diff
-         function DO(MM, rM) {
-           return MM.transaction([pO], rM ? "readwrite" : "readonly").objectStore(pO)
-         }
+     function pF(UU, XU) {
+       const zU = XU.clearColor;
+       UU.clearColour[0] = zU.r, UU.clearColour[1] = zU.g, UU.clearColour[2] = zU.b, UU.clearColour[3] = zU.a;
+       const cU = XU.ambientColor;
+       UU.ambientColour[0] = cU.r, UU.ambientColour[1] = cU.g, UU.ambientColour[2] = cU.b, UU.animationRatio = XU.animationRatio, UU.frameId = XU.frameId, UU.version++
+     }
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3047-L3077` → after: `L5216-L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5216-L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5216-L5219) · [Before (L3047-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3047-L3077)

```diff
-         function kO() {
-           const MM = indexedDB.open(RO, 1);
-           return new Promise(((rM, iM) => {
-             MM.addEventListener("error", (() => {
-               iM(MM.error)
-             })), MM.addEventListener("upgradeneeded", (() => {
-               const rM = MM.result;
-               try {
-                 rM.createObjectStore(pO, {
-                   keyPath: WO
-                 })
-               } catch (OM) {
-                 iM(OM)
-               }
-             })), MM.addEventListener("success", (async () => {
-               const iM = MM.result;
- ... (15 more removed lines; see GitHub link above)
+     function aF(UU) {
+       const XU = UU.model.view;
+       return XU.animTick = (0, cF.e)(), XU.timeMs = performance.now(), pF(XU, UU.sa), UU.model.update(XU.frameId), XU
+     }
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3079-L3198` → after: `L5221-L5241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5221-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5221-L5241) · [Before (L3079-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3079-L3198)

```diff
-         function oO(MM, rM) {
-           const iM = DO(MM, !0).delete(rM);
-           return new sO(iM).toPromise()
-         }
-         class fO {
-           constructor() {
-             this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._w … [truncated]
-           }
-           async _openDb() {
-             return this.db || (this.db = await kO()), this.db
-           }
-           async _withRetries(MM) {
-             let rM = 0;
-             for (;;) try {
-               const rM = await this._openDb();
-               return await MM(rM)
- ... (104 more removed lines; see GitHub link above)
+     function tF(UU) {
+       const XU = UU.sa,
+         {
+           view: zU,
+           v_: cU
+         } = UU.model;
+       return NF(zU, cU, XU.qp()), XU.onBeforeRenderObservable.notifyObservers(XU), IF(XU, zU.frustum), XU.onBeforeCameraRenderObservable.notifyObservers(XU.activeCamera), aF(UU)
+     }
+     var gF = zU(38065),
+       kF = zU(38180),
+       GF = zU(38560);
+ 
+     function BF(UU) {
+       var XU, zU;
+       const cU = (0, dU.V)(UU);
+       if (!cU || cU.diffuseTexture && (0, GF.h)(UU)) return null;
+ ... (5 more added lines; see GitHub link above)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3200-L3312` → after: `L5243-L5701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5243-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5243-L5701) · [Before (L3200-L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3200-L3312)

```diff
-         const NO = 1e12;
-         class AO {
-           constructor(MM) {
-             this.auth = MM, this.counter = NO, this._widgets = new Map
-           }
-           render(MM, rM) {
-             const iM = this.counter;
-             return this._widgets.set(iM, new xO(MM, this.auth.name, rM || {})), this.counter++, iM
-           }
-           reset(MM) {
-             var rM;
-             const iM = MM || NO;
-             null === (rM = this._widgets.get(iM)) || void 0 === rM || rM.delete(), this._widgets.delete(iM)
-           }
-           getResponse(MM) {
-             var rM;
- ... (97 more removed lines; see GitHub link above)
+         cU.set(UU.diffuseColor, AU.diffuse), cU[AU.diffuse + 3] = UU.alpha, cU.set(UU.ambientColor, AU.ambientAndCutoff), cU[AU.ambientAndCutoff + 3] = UU.alphaCutOff, cU.set(UU.emissiveColor, AU.emissiveAndLevel), cU[AU.emissiveAndLevel + 3] = null !== (yU = null === (QU = UU.di … [truncated]
+       }(cU, yU, QU, AU), {
+         model: cU,
+         atlas: yU,
+         texture: yU ? "atlas" : cU.diffuseTexture ? "single" : "none",
+         animated: yU ? !!yU.animDataPerTex : !!QU,
+         liquid: (0, GF.k)(UU),
+         customRenderMat: (0, GF.h)(UU),
+         uniformData: AU
+       }
+     }
+     var ZF = zU(3163);
+     class RF {
+       constructor(UU) {
+         this.units = UU, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
+       }
+ ... (443 more added lines; see GitHub link above)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3314-L3315` → after: `L5703-L5709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5703-L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5703-L5709) · [Before (L3314-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3314-L3315)

```diff
-             theme: "light",
-             type: "image"
+             label: "scene-depth-copy",
+             colorAttachments: [{
+               view: yU,
+               loadOp: "clear",
+               storeOp: "store",
+               clearValue: [0, 0, 0, 0]
+             }]
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3317-L3341` → after: `L5711-L5737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5711-L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5711-L5737) · [Before (L3317-L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3317-L3341)

```diff
-         class qO {
-           constructor(MM) {
-             let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, KO),
-               iM = arguments.length > 2 ? arguments[2] : void 0;
-             this.parameters = rM, this.type = IO, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Wr(iM), this.isInvisible = "invisible" === this.parameters.size, wM("undefined" !== type … [truncated]
-             const OM = "string" === typeof MM ? document.getElementById(MM) : MM;
-             wM(OM, this.auth, "argument-error"), this.container = OM, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new XO : new BO, this.validateStartingState()
-           }
-           async verify() {
-             this.assertNotDestroyed();
-             const MM = await this.render(),
-               rM = this.getAssertedRecaptcha(),
-               iM = rM.getResponse(MM);
-             return iM || new Promise((iM => {
-               const OM = MM => {
-                 MM && (this.tokenChangeListeners.delete(OM), iM(MM))
- ... (9 more removed lines; see GitHub link above)
+         return this.copy = {
+           source: UU,
+           texture: cU,
+           view: yU,
+           bindGroup: QU,
+           pass: AU
+         }, this.copy
+       }
+     }
+     const wF = "rgba8unorm";
+ 
+     function qF(UU) {
+       return UU ? 15 : 1
+     }
+     class OF {
+       constructor(UU, XU, zU, cU) {
+ ... (11 more added lines; see GitHub link above)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3343-L3364` → after: `L5739-L5743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5739-L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5739-L5743) · [Before (L3343-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3343-L3364)

```diff
-             return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((MM => {
-               throw this.renderPromise = null, MM
-             }))), this.renderPromise
-           }
-           _reset() {
-             this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
-           }
-           clear() {
-             this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((MM => {
-               this.container.removeChild(MM)
-             }))
-           }
-           validateStartingState() {
-             wM(!this.parameters.sitekey, this.auth, "argument-error"), wM(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), wM("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
-           }
-           makeTokenCallback(MM) {
- ... (6 more removed lines; see GitHub link above)
+           }, {
+             binding: 1,
+             visibility: GPUShaderStage.FRAGMENT,
+             buffer: {
+               type: "uniform"
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3366-L3377` → after: `L5745-L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5745-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5745-L5749) · [Before (L3366-L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3366-L3377)

```diff
-           }
-           assertNotDestroyed() {
-             wM(!this.destroyed, this.auth, "internal-error")
-           }
-           async makeRenderPromise() {
-             if (await this.init(), !this.widgetId) {
-               let MM = this.container;
-               if (!this.isInvisible) {
-                 const rM = document.createElement("div");
-                 MM.appendChild(rM), MM = rM
-               }
-               this.widgetId = this.getAssertedRecaptcha().render(MM, this.parameters)
+           }, {
+             binding: 2,
+             visibility: GPUShaderStage.FRAGMENT,
+             texture: {
+               sampleType: "float"
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3379-L3461` → after: `L5751-L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5751-L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5751-L5910) · [Before (L3379-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3379-L3461)

```diff
-             return this.widgetId
-           }
-           async init() {
-             wM(RM() && !uO(), this.auth, "internal-error"), await
-             function() {
-               let MM = null;
-               return new Promise((rM => {
-                 "complete" !== document.readyState ? (MM = () => rM(), window.addEventListener("load", MM)) : rM()
-               })).catch((rM => {
-                 throw MM && window.removeEventListener("load", MM), rM
-               }))
-             }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
-             const MM = await async function(MM) {
-               return (await fM(MM, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
-             }(this.auth);
-             wM(MM, this.auth, "internal-error"), this.parameters.sitekey = MM
- ... (67 more removed lines; see GitHub link above)
+           }]
+         });
+         const yU = UU.createBindGroupLayout({
+           label: "sun-shadow-mask-empty",
+           entries: []
+         });
+         this.empty = UU.createBindGroup({
+           label: "sun-shadow-mask-empty",
+           layout: yU,
+           entries: []
+         });
+         const QU = UU.createShaderModule({
+           label: "sun-shadow-mask",
+           code: (AU = this.edge, `${(0,KX.E)()}${Fc({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
+         });
+         var AU;
+ ... (144 more added lines; see GitHub link above)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3463-L3509` → after: `L5912-L5937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5912-L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5912-L5937) · [Before (L3463-L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3463-L3509)

```diff
-             } {
-               const {
-                 sessionInfo: rM
-               } = await async function(MM, rM) {
-                 return fM(MM, "POST", "/v1/accounts:sendVerificationCode", oM(MM, rM))
-               }(MM, {
-                 phoneNumber: jM.phoneNumber,
-                 recaptchaToken: SM
-               });
-               return rM
-             }
-           } finally {
-             iM._reset()
-           }
-         }
-         async function iS(MM, rM) {
- ... (31 more removed lines; see GitHub link above)
+             }, {
+               binding: 2,
+               resource: QU.createView()
+             }]
+           }),
+           NU = {
+             label: "sun-shadow-mask",
+             colorAttachments: [{
+               view: yU.createView(),
+               loadOp: "clear",
+               storeOp: "store",
+               clearValue: [qF(this.edge), 0, 0, 0]
+             }]
+           };
+         return this.targets = {
+           source: XU,
+ ... (10 more added lines; see GitHub link above)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3511-L3528` → after: `L5939-L5970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5939-L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5939-L5970) · [Before (L3511-L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3511-L3528)

```diff
-         function SS(MM, rM) {
-           return rM ? jr(rM) : (wM(MM._popupRedirectResolver, MM, "argument-error"), MM._popupRedirectResolver)
-         }
-         OS.PROVIDER_ID = "phone", OS.PHONE_SIGN_IN_METHOD = "phone";
-         class jS extends fr {
-           constructor(MM) {
-             super("custom", "custom"), this.params = MM
-           }
-           _getIdTokenResponse(MM) {
-             return Xr(MM, this._buildIdpRequest())
-           }
-           _linkToIdToken(MM, rM) {
-             return Xr(MM, this._buildIdpRequest(rM))
-           }
-           _getReauthenticationResolver(MM) {
-             return Xr(MM, this._buildIdpRequest())
- ... (2 more removed lines; see GitHub link above)
+     function SF(UU, XU, zU) {
+       let cU = null,
+         yU = 0;
+       for (const QU of zU) {
+         const zU = QU.renderable.mesh;
+         zU && !1 === zU.visible || (QU.pipeline !== cU && (UU.setPipeline(QU.pipeline), cU = QU.pipeline), yU += QU.draw(UU, XU))
+       }
+       return yU
+     }
+     const rF = 6e4,
+       uF = {
+         status: "ok"
+       },
+       fF = {
+         status: "skipped"
+       };
+ ... (16 more added lines; see GitHub link above)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3530-L3536` → after: `L5972-L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5972-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5972-L5974) · [Before (L3530-L3536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3530-L3536)

```diff
-               requestUri: this.params.requestUri,
-               sessionId: this.params.sessionId,
-               postBody: this.params.postBody,
-               tenantId: this.params.tenantId,
-               pendingToken: this.params.pendingToken,
-               returnSecureToken: !0,
-               returnIdpCredential: !0
+               lighting: UU.lighting,
+               dirLightCount: Math.min(UU.dirLightCount, 4),
+               Fp: UU.runtime
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3538` → after: `L5976-L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5976-L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L5976-L6025) · [Before (L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3538)

```diff
-             return MM && (rM.idToken = MM), rM
+             try {
+               const QU = XU.material(cU);
+               return QU && Oc(XU.programKey(QU, !1, yU)) ? (await QU.ready, UU.isCancelled() ? uF : QU.bindGroupLayout ? await async function(UU, XU, zU, cU) {
+                 const {
+                   device: yU
+                 } = UU;
+                 let QU, AU;
+                 yU.pushErrorScope("validation");
+                 try {
+                   QU = UU.pipelineBuild(XU, zU, cU)
+                 } finally {
+                   AU = yU.popErrorScope().catch((() => null))
+                 }
+                 const [FU, oU] = await Promise.all([AU, QU.built.then((() => null), (UU => null !== UU && void 0 !== UU ? UU : new Error("pipeline failed")))]);
+                 if (!FU && !oU) return uF;
+                 const DU = await HF(QU.module),
+ ... (34 more added lines; see GitHub link above)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3540` → after: `L6027-L6064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6027-L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6027-L6064) · [Before (L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3540)

```diff
-         }
+         }(XU.device, UU);
+       let FU;
+       try {
+         FU = await Promise.race([QU.then((() => "done")), AU.signal])
+       } finally {
+         AU.dispose()
+       }
+       if ("QU" === FU || zU()) return {
+         status: "QU"
+       };
+       const oU = yU.find((UU => "failed" === UU.status));
+       return oU && "lost" !== FU && !AU.lost() && await new Promise((UU => {
+         setTimeout(UU, 0)
+       })), "lost" === FU || AU.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
+         status: "skipped"
+       }) : oU ? {
+ ... (22 more added lines; see GitHub link above)
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3542-L3544` → after: `L6066-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6066-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6066-L6069) · [Before (L3542-L3544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3542-L3544)

```diff
-         function aS(MM) {
-           return Gi(MM.auth, new jS(MM), MM.bypassAuthState)
-         }
+     function MF(UU) {
+       var XU;
+       return null !== (XU = null === UU || void 0 === UU ? void 0 : UU.message) && void 0 !== XU ? XU : String(UU)
+     }
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3546-L3574` → after: `L6071-L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6071-L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6071-L6443) · [Before (L3546-L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3546-L3574)

```diff
-         function PS(MM) {
-           const {
-             auth: rM,
-             user: iM
-           } = MM;
-           return wM(iM, rM, "internal-error"), Ui(iM, new jS(MM), MM.bypassAuthState)
-         }
-         async function nS(MM) {
-           const {
-             auth: rM,
-             user: iM
-           } = MM;
-           return wM(iM, rM, "internal-error"), li(iM, new jS(MM), MM.bypassAuthState)
-         }
-         class QS {
-           constructor(MM, rM, iM, OM) {
- ... (13 more removed lines; see GitHub link above)
+     function vF(UU, XU, zU, cU, yU) {
+       Oc(XU) ? HF(cU).then((XU => {
+         const [cU] = XU;
+         EX(UU, "terrain", zU, yU, cU ? `${cU.lineNum}:${cU.linePos} error: ${cU.message}` : null)
+       })) : EX(UU, "terrain", zU, yU)
+     }
+     var VF = zU(38185),
+       sF = zU(38202),
+       nF = zU(38214),
+       mF = zU(3150);
+ 
+     function lF(UU, XU, zU, cU, yU) {
+       const QU = Math.hypot(zU[0], zU[1], zU[2]);
+       if (!(QU > 0)) return;
+       const AU = [zU[0] / QU, zU[1] / QU, zU[2] / QU],
+         FU = [Math.floor(XU[0]), Math.floor(XU[1]), Math.floor(XU[2])],
+ ... (357 more added lines; see GitHub link above)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3577-L3600` → after: `L6446-L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6446-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6446-L6659) · [Before (L3577-L3600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3577-L3600)

```diff
-           }
-           async onAuthEvent(MM) {
-             const {
-               urlResponse: rM,
-               sessionId: iM,
-               postBody: OM,
-               tenantId: SM,
-               error: jM,
-               type: aM
-             } = MM;
-             if (jM) return void this.reject(jM);
-             const PM = {
-               auth: this.auth,
-               requestUri: rM,
-               sessionId: iM,
-               tenantId: SM || void 0,
- ... (8 more removed lines; see GitHub link above)
+           }), this.materialLayouts.set(zU, cU)
+         }
+         return cU
+       }
+       async createMaterialBindGroup(UU, XU) {
+         const zU = [{
+           buffer: UU.uniformBuffer
+         }];
+         if (XU) {
+           const cU = await XX(this.device, XU.sources);
+           UU.atlasCount = cU.length, UU.Y5 = cU[0].layerWidth, UU.atlasLayers = cU[0].layers, XU.animDataPerTex && zU.push({
+             buffer: JU(this.device, Float32Array.from(XU.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
+           }), zU.push(this.sampler);
+           for (const UU of cU) zU.push(UU.texture.createView({
+             dimension: "2d-array"
+           }))
+ ... (198 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3602-L3618` → after: `L6661-L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6661-L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6661-L6735) · [Before (L3602-L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3602-L3618)

```diff
-           }
-           onError(MM) {
-             this.reject(MM)
-           }
-           getIdpTask(MM) {
-             switch (MM) {
-               case "signInViaPopup":
-               case "signInViaRedirect":
-                 return aS;
-               case "linkViaPopup":
-               case "linkViaRedirect":
-                 return nS;
-               case "reauthViaPopup":
-               case "reauthViaRedirect":
-                 return PS;
-               default:
- ... (1 more removed lines; see GitHub link above)
+           },
+           IU = zU.resting ? 0 : 1;
+         this.compiling += IU;
+         const pU = "none" === FU ? this.device.createRenderPipelineAsync(NU) : this.startMaskPipelines(DU, NU, "edge" === FU);
+         pU.then((XU => {
+           this.compiling -= IU, this.pipelines.set(UU, XU)
+         }), (UU => {
+           this.compiling -= IU, console.error(`Lite terrain pipeline ${QU} failed`, UU), vF(this.device, zU, QU, DU, UU)
+         }));
+         const aU = {
+           name: QU,
+           module: DU,
+           built: pU
+         };
+         return this.builds.set(UU, aU), aU
+       }
+ ... (59 more added lines; see GitHub link above)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3687-L3709` → after: `L6739-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6739-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6739-L6782) · [Before (L3687-L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3687-L3709)

```diff
-         hS.currentPopupAction = null;
-         const JS = "pendingRedirect",
-           dS = new Map;
-         class yS extends QS {
-           constructor(MM, rM) {
-             super(MM, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], rM, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
-           }
-           async execute() {
-             let MM = dS.get(this.auth._key());
-             if (!MM) {
-               try {
-                 const rM = await async function(MM, rM) {
-                   const iM = GS(rM),
-                     OM = US(MM);
-                   if (!await OM._isAvailable()) return !1;
-                   const SM = "true" === await OM._get(iM);
- ... (7 more removed lines; see GitHub link above)
+       }
+       prepare(UU, XU) {
+         var zU, cU, yU, QU;
+         const {
+           WN: AU
+         } = UU;
+         this.lighting = UU.ia;
+         const FU = (0, gF.C)(XU);
+         this.dirLightCount = Math.min(FU, 4), this.Fp = null !== (zU = AU.Fp) && void 0 !== zU ? zU : null, FU > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(UU, XU), this.animateMaterials(XU.animTick);
+         const oU = AU.VN,
+           DU = oU[0] !== this.originOffset[0] || oU[1] !== this.originOffset[1] || oU[2] !== this.originOffset[2];
+         DU && (this.originOffset[0] = oU[0], this.originOffset[1] = oU[1], this.originOffset[2] = oU[2]);
+         const EU = XU.eye;
+         this.eye[0] = EU[0], this.eye[1] = EU[1], this.eye[2] = EU[2], this.writeShaderPackInputs();
+         const YU = XU.projectionMatrix,
+           NU = 0 === YU[15];
+ ... (28 more added lines; see GitHub link above)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3711-L3719` → after: `L6784-L6863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6784-L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6784-L6863) · [Before (L3711-L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3711-L3719)

```diff
-             return this.bypassAuthState || dS.set(this.auth._key(), (() => Promise.resolve(null))), MM()
-           }
-           async onAuthEvent(MM) {
-             if ("signInViaRedirect" === MM.type) return super.onAuthEvent(MM);
-             if ("unknown" !== MM.type) {
-               if (MM.eventId) {
-                 const rM = await this.auth._redirectUserForId(MM.eventId);
-                 if (rM) return this.user = rM, super.onAuthEvent(MM);
-                 this.resolve(null)
+             if (0 === UU.rangeCount) return
+           } else - 1 !== UU.faceMask && this.drawWhole(UU);
+           zU.meshes.push(UU), LU += 2 * ((UU.rangeCount > 0 ? UU.count0 : 0) + (UU.rangeCount > 1 ? UU.count1 : 0))
+         };
+         for (const wU of this.chunks.values()) {
+           DU && this.writeSlot(wU);
+           const UU = wU.mesh.visibility;
+           UU !== wU.visibility && (wU.visibility = UU, this.slots.setVisibility(wU.slot, UU));
+           const {
+             material: zU
+           } = wU;
+           this.geometry.lost(wU) && performance.now() >= wU.lostRetryAt && this.remeshLost(AU, wU);
+           const cU = !(null === zU || void 0 === zU || !zU.bindGroup) && this.geometry.backed(wU),
+             yU = cU && this.lighting && !wU.vertices.page.twin;
+           if (ZU && (Number.isNaN(wU.key) && (wU.ci = Math.floor(wU.origin[0] / aU), wU.cj = Math.floor(wU.origin[1] / aU), wU.ck = Math.floor(wU.origin[2] / aU), wU.key = (0, mF.k)(wU.ci, wU.cj, wU.ck)), (!cU || UU < 1 || yU || !this.batchDraws(zU, wU.packed, ZU)) && this.visSee … [truncated]
+           yU || (wU.lostRemeshes = 0);
+ ... (64 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3721` → after: `L6865-L6919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6865-L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6865-L6919) · [Before (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3721)

```diff
-             } else this.resolve(null)
+             return yU
+           }({
+             VJ: (UU, XU, zU) => yU.VJ(UU, XU, zU),
+             occluders: zU.occluders,
+             opaque: zU.opaque,
+             aY: QU,
+             isDrawn: (UU, XU, cU) => zU.isDrawn(UU, XU, cU),
+             hasParts: (UU, XU, zU) => AU.has((0, mF.k)(UU, XU, zU))
+           }, [this.eye[0] + oU, this.eye[1] + DU, this.eye[2] + EU], ((UU, XU) => (sy.Sp.TransformCoordinatesFromFloatsToRef(UU, XU, .5, FU, YU), [YU.x + oU, YU.y + DU, YU.z + EU])), (yU.EyU[0] + 1) * QU);
+         this.visViolations = NU.size;
+         for (const IU of NU) this.warnOnce(`vis:${IU}`, `Lite terrain cave culling skipped chunk ${IU}, which a ray from the eye reaches.`)
+       }
+       writeShaderPackInputs() {
+         var UU;
+         null !== (UU = this.Fp) && void 0 !== UU && UU.isRunning() && (this.shaderPackInputs ??= new JQ(this.device, this.Fp.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Fp, this.eye, this.lighting))
+       }
+ ... (39 more added lines; see GitHub link above)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3723-L3724` → after: `L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6921) · [Before (L3723-L3724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3723-L3724)

```diff
-           async onExecution() {}
-           cleanUp() {}
+           zU.nearest = zU.meshes.length > 0 ? zU.meshes[0].distance : 1 / 0
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3726-L3727` → after: `L6923-L6992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6923-L6992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L6923-L6992) · [Before (L3726-L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3726-L3727)

```diff
-         async function lS(MM, rM) {
-           return US(MM)._set(GS(rM), "true")
+         UU.sort(xF)
+       }
+       batchFor(UU, XU, zU, cU, yU) {
+         for (const AU of this.opaqueBatches)
+           if (AU.material === UU && AU.packed === XU && AU.page === zU && AU.resting === cU) return AU;
+         const QU = {
+           material: UU,
+           packed: XU,
+           page: zU,
+           resting: cU,
+           meshes: [],
+           group: 0,
+           nearest: 0,
+           faceCull: this.batchFaceCull(UU, yU)
+         };
+         return this.opaqueBatches.push(QU), QU
+ ... (54 more added lines; see GitHub link above)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3730-L3732` → after: `L7021-L7023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7021-L7023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7021-L7023) · [Before (L3730-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3730-L3732)

```diff
-         function ES(MM, rM) {
-           dS.set(MM._key(), rM)
-         }
+     function Uo(UU, XU, zU, cU) {
+       return `${Tc(UU)}|${UU.atlasLayers}|${UU.Y5}|${XU}|${zU}|${cU._colorFormat}|${cU._depthStencilFormat}|${cU._sampleCount}`
+     }
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3734-L3736` → after: `L7025-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7025-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7025-L7027) · [Before (L3734-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3734-L3736)

```diff
-         function US(MM) {
-           return jr(MM._redirectPersistence)
-         }
+     function Xo(UU, XU) {
+       return UU.distance - XU.distance
+     }
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3738-L3740` → after: `L7029-L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7029-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7029-L7067) · [Before (L3738-L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3738-L3740)

```diff
-         function GS(MM) {
-           return nr(JS, MM.config.apiKey, MM.name)
-         }
+     function zo(UU, XU) {
+       return XU.distance - UU.distance
+     }
+     class co {
+       constructor() {
+         this.left = []
+       }
+       sort(UU, XU) {
+         for (let zU = 0; zU < UU.length; zU++) {
+           const XU = UU[zU].distance;
+           if (XU - XU !== 0) return !1
+         }
+         return this.sortRange(UU, 0, UU.length, XU), !0
+       }
+       sortRange(UU, XU, zU, cU) {
+         if (zU - XU <= 16) {
+ ... (23 more added lines; see GitHub link above)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3742-L3830` → after: `L7069-L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7069-L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7069-L7159) · [Before (L3742-L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3742-L3830)

```diff
-         function CS(MM, rM, iM) {
-           return async function(MM, rM, iM) {
-             const OM = Wr(MM);
-             eM(MM, rM, Mi), await OM._initializationPromise;
-             const SM = SS(OM, iM);
-             return await lS(SM, OM), SM._openRedirect(OM, rM, "signInViaRedirect")
-           }(MM, rM, iM)
-         }
- 
-         function eS(MM, rM, iM) {
-           return async function(MM, rM, iM) {
-             const SM = (0, OM.N)(MM);
-             eM(SM.auth, rM, Mi), await SM.auth._initializationPromise;
-             const jM = SS(SM.auth, iM);
-             await lS(jM, SM.auth);
-             const aM = await gS(SM);
- ... (73 more removed lines; see GitHub link above)
+     function Qo(UU, XU, zU, cU) {
+       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : XU;
+       const QU = Math.min(XU, zU),
+         AU = new Uint32Array(Rz(cU));
+       for (let FU = 0; FU < cU; FU++) {
+         const XU = Math.floor(FU * QU / cU),
+           zU = Math.max(XU + 1, Math.floor((FU + 1) * QU / cU));
+         for (let oU = 0; oU < cU; oU++) {
+           const DU = Math.floor(oU * QU / cU),
+             EU = Math.max(DU + 1, Math.floor((oU + 1) * QU / cU));
+           let YU = 0;
+           for (let cU = XU; cU < zU; cU++)
+             for (let XU = DU; XU < EU; XU++) UU[cU * yU + XU] >= yo && YU++;
+           if (2 * YU >= (zU - XU) * (EU - DU)) {
+             const UU = oU + cU * FU;
+             AU[UU >>> 5] |= 1 << (31 & UU)
+ ... (75 more added lines; see GitHub link above)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3834-L3836` → after: `L7262-L7264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7262-L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7262-L7264) · [Before (L3834-L3836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3834-L3836)

```diff
-         function RS(MM) {
-           return [MM.type, MM.eventId, MM.sessionId, MM.tenantId].filter((MM => MM)).join("-")
-         }
+     function Do(UU) {
+       return !UU.ga && !UU.pR && !UU.xp
+     }
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3838-L3841` → after: `L7266-L7403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7266-L7403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7266-L7403) · [Before (L3838-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3838-L3841)

```diff
-         function pS(MM) {
-           let {
-             type: rM,
-             error: iM
+     function Eo() {
+       return {
+         bricks: new Uint32Array(Dz),
+         cells: new Uint16Array(32768),
+         special: new Uint8Array(Fz)
+       }
+     }
+     class Yo {
+       constructor(UU, XU, zU) {
+         let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
+         this.casters = UU, this.writeVoxels = XU, this.writePool = zU, this.warn = cU, this.eyeChunk = null, this.slotChunk = new Array(Xz).fill(null), this.slotVersion = new Float64Array(Xz).fill(-1), this.slotPool = new Array(Xz).fill(null), this.starved = new Uint8Array(Xz), t … [truncated]
+         for (let yU = 0; yU < dz; yU++) this.freePool[yU] = 65535 - yU
+       }
+       get queuedCount() {
+         return this.queue.length
+       }
+ ... (122 more added lines; see GitHub link above)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3843-L3882` → after: `L7405-L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7405-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7405-L7429) · [Before (L3843-L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3843-L3882)

```diff
-           return "unknown" === rM && "auth/no-auth-event" === (null === iM || void 0 === iM ? void 0 : iM.code)
-         }
-         const WS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
-           sS = /^https?/;
-         async function DS(MM) {
-           if (MM.config.emulator) return;
-           const {
-             authorizedDomains: rM
-           } = await async function(MM) {
-             return fM(MM, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
-           }(MM);
-           for (const OM of rM) try {
-             if (kS(OM)) return
-           } catch (iM) {}
-           UM(MM, "unauthorized-domain")
-         }
- ... (24 more removed lines; see GitHub link above)
+         NU.fill(0), pU.fill(0);
+         let aU = 0,
+           tU = 0,
+           gU = 0;
+         for (let kU = 0; kU < YU; kU++) {
+           const XU = kU >> 2,
+             zU = 3 & kU,
+             cU = UU.MI[kU],
+             AU = cU === oo.e ? -1 : cU < yU.length ? yU[cU] : 0;
+           if (0 !== AU)
+             for (let UU = 0; UU < YU; UU++) {
+               const cU = UU >> 2,
+                 GU = 3 & UU;
+               let BU = FU + UU * oU + kU * DU;
+               for (let UU = 0; UU < YU; UU++, BU += EU) {
+                 let FU = AU;
+ ... (9 more added lines; see GitHub link above)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3884` → after: `L7431-L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7431-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7431-L7610) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3884)

```diff
-         let fS = null;
+         return 0 === aU ? cz : 32768 === tU ? yz | gU << 8 : (this.writePoolEntries(XU, zU, cU), this.writeVoxels(oz + XU * Dz, NU), Qz | gU << 8)
+       }
+       writePoolEntries(UU, XU, zU) {
+         const {
+           bricks: cU,
+           cells: yU,
+           special: QU
+         } = XU, AU = this.entry;
+         let FU = 0;
+         for (let EU = 0; EU < Fz; EU++) FU += QU[EU];
+         if (0 === FU) return;
+         zU && this.freeCount < FU && this.evictBeyond(UU, FU);
+         const oU = new Uint32Array(zU ? Math.min(FU, this.freeCount) : 0);
+         let DU = 0;
+         for (let EU = 0; EU < Fz; EU++) {
+           if (!QU[EU]) continue;
+ ... (164 more added lines; see GitHub link above)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3886-L3900` → after: `L7612-L7825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7612-L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7612-L7825) · [Before (L3886-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3886-L3900)

```diff
-         function YS(MM) {
-           return fS = fS || function(MM) {
-             return new Promise(((rM, iM) => {
-               var OM, SM, jM;
- 
-               function aM() {
-                 oS(), gapi.load("gapi.iframes", {
-                   callback: () => {
-                     rM(gapi.iframes.getContext())
-                   },
-                   ontimeout: () => {
-                     oS(), iM(GM(MM, "network-request-failed"))
-                   },
-                   timeout: ZS.get()
-                 })
+     function ao(UU, XU) {
+       return UU[0] * XU[0] + UU[1] * XU[1] + UU[2] * XU[2] < po
+     }
+     async function to(UU) {
+       const {
+         pixels: XU,
+         width: zU,
+         height: cU
+       } = await UX(UU), yU = new Uint8Array(zU * cU);
+       for (let QU = 0; QU < yU.length; QU++) yU[QU] = XU[4 * QU + 3];
+       return {
+         width: zU,
+         height: cU,
+         alpha: yU
+       }
+     }
+ ... (198 more added lines; see GitHub link above)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3902-L3910` → after: `L7827-L7831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7827-L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7827-L7831) · [Before (L3902-L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3902-L3910)

```diff
-               if (null === (SM = null === (OM = gO().gapi) || void 0 === OM ? void 0 : OM.iframes) || void 0 === SM ? void 0 : SM.Iframe) rM(gapi.iframes.getContext());
-               else {
-                 if (!(null === (jM = gO().gapi) || void 0 === jM ? void 0 : jM.load)) {
-                   const rM = tr("iframefcb");
-                   return gO()[rM] = () => {
-                     gapi.load ? aM() : iM(GM(MM, "network-request-failed"))
-                   }, wr(`https://apis.google.com/js/api.js?onload=${rM}`).catch((MM => iM(MM)))
-                 }
-                 aM()
+             }, {
+               binding: UU.lN,
+               visibility: XU,
+               buffer: {
+                 type: "read-only-storage"
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3912-L3915` → after: `L7833-L8019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7833-L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L7833-L8019) · [Before (L3912-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3912-L3915)

```diff
-             })).catch((MM => {
-               throw fS = null, MM
-             }))
-           }(MM), fS
+             }, {
+               binding: UU.special,
+               visibility: XU,
+               buffer: {
+                 type: "read-only-storage"
+               }
+             }, {
+               binding: UU.work,
+               visibility: XU,
+               buffer: {
+                 type: "uniform"
+               }
+             }, {
+               binding: UU.volume,
+               visibility: XU,
+               storageTexture: {
+ ... (171 more added lines; see GitHub link above)
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3917-L3926` → after: `L8021-L8193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8021-L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L8021-L8193) · [Before (L3917-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3917-L3926)

```diff
-         const NS = new WM(5e3, 15e3),
-           AS = {
-             style: {
-               position: "absolute",
-               top: "-100px",
-               width: "1px",
-               height: "1px"
-             },
-             "aria-hidden": "true",
-             tabindex: "-1"
+       }
+       rebind(UU) {
+         this.device = UU, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
+         for (const [XU, zU] of this.systems) {
+           const cU = new Co(UU, XU, zU.frameIndex, this.bindings),
+             yU = XU.ring.drawCount();
+           yU > 0 && cU.upload(0, yU), this.systems.set(XU, cU)
+         }
+       }
+       build() {
+         const {
+           device: UU
+         } = this, XU = UU.createBindGroupLayout({
+           label: "particles-system",
+           entries: [{
+             binding: 0,
+ ... (157 more added lines; see GitHub link above)
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3928-L3946` → after: `L8195-L8381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8195-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L8195-L8381) · [Before (L3928-L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3928-L3946)

```diff
-           xS = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function vS(MM) {
-           const rM = MM.config;
-           wM(rM.authDomain, MM, "auth-domain-config-required");
-           const iM = rM.emulator ? sM(rM, "emulator/auth/iframe") : `https://${MM.config.authDomain}/__/auth/iframe`,
-             jM = {
-               apiKey: rM.apiKey,
-               appName: MM.name,
-               v: SM.g
-             },
-             aM = xS.get(MM.config.apiHost);
- ... (3 more removed lines; see GitHub link above)
+           fragment: kX({
+             module: this.module,
+             entryPoint: "mainFragment",
+             constants: {
+               MULTIPLY_PASS: QU ? 1 : 0
+             }
+           }, yU, QX((0, lU.g)(UU))),
+           primitive: {
+             topology: "triangle-strip",
+             cullMode: "none"
+           },
+           depthStencil: yU._depthStencilFormat ? {
+             format: yU._depthStencilFormat,
+             depthCompare: AU,
+             depthWriteEnabled: !1
+           } : void 0,
+ ... (171 more added lines; see GitHub link above)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3949-L3952` → after: `L8384-L8499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8384-L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L8384-L8499) · [Before (L3949-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3949-L3952)

```diff
-           location: "yes",
-           resizable: "yes",
-           statusbar: "yes",
-           toolbar: "no"
+             width: this.rzU.renderWidth,
+             height: this.rzU.renderHeight
+           },
+           FU = await Ho(this.canvas, this.options, AU, QU),
+           oU = BX(FU),
+           DU = Mo(oU);
+         try {
+           this.resources.rebind(FU, oU), this.particles.rebind(oU), this.pUU.dropSteady();
+           const UU = {
+               resources: this.resources,
+               particles: this.particles,
+               pUU: this.pUU,
+               modelMeshes: this.modelMeshes
+             },
+             XU = await vo(FU, oU, this.options, UU),
+             zU = DU();
+ ... (100 more added lines; see GitHub link above)
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3954-L3962` → after: `L8501-L8515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8501-L8515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L8501-L8515) · [Before (L3954-L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3954-L3962)

```diff
-         class BS {
-           constructor(MM) {
-             this.window = MM, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (MM) {}
-           }
+       UU.style.background = "black";
+       const QU = await Ho(UU, XU, XU.bufferSize, zU),
+         AU = BX(QU),
+         FU = Mo(AU);
+       try {
+         const zU = new So(await vo(QU, AU, XU, null), UU, XU, yU),
+           cU = FU();
+         if (null !== cU) {
+           const {
+             reason: UU,
+             message: XU
+           } = cU;
+           throw Object.assign(new Error(`${uo} (${UU}): ${XU}`), {
+             fallbackReason: uo
+           })
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3965-L4026` → after: `L8544-L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8544-L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/295.js#L8544-L8684) · [Before (L3965-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/295.js#L3965-L4026)

```diff
-         function XS(MM, rM, iM) {
-           let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const aM = Math.max((window.screen.availHeight - jM) / 2, 0).toString(),
-             PM = Math.max((window.screen.availWidth - SM) / 2, 0).toString();
-           let nM = "";
-           const QM = Object.assign(Object.assign({}, FS), {
-               width: SM.toString(),
-               height: jM.toString(),
-               top: aM,
-               left: PM
-             }),
-             zM = (0, OM.P)().toLowerCase();
-           iM && (nM = Hr(zM) ? "_blank" : iM), Lr(zM) && (rM = rM || "http://localhost", QM.scrollbars = "yes");
-           const LM = Object.entries(QM).reduce(((MM, rM) => {
-             let [iM, OM] = rM;
- ... (46 more removed lines; see GitHub link above)
+     function Mo(UU) {
+       let XU = null;
+       return UU.lost.then((UU => {
+         XU = UU, console.error(`WebGPU device lost (${UU.reason}): ${UU.message}`)
+       })), () => XU
+     }
+     async function vo(UU, XU, zU, cU) {
+       var yU, QU;
+       let {
+         sceneDepth: AU,
+         sunShadow: FU
+       } = zU;
+       const oU = (0, sU.c)(UU),
+         DU = null !== (yU = null === cU || void 0 === cU ? void 0 : cU.resources) && void 0 !== yU ? yU : new bA(UU, XU),
+         EU = new hF(XU),
+         YU = new SA(XU, DU, (UU => function(UU, XU) {
+ ... (125 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/296.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/296.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L142` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/296.js#L4-L6) · [Before (L4-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/296.js#L4-L142)

```diff
-   41669: (MM, rM, iM) => {
-     iM.d(rM, {
-       $: () => Tr,
-       $b: () => jr,
-       $d: () => GM,
-       $f: () => di,
-       A: () => mM,
-       Ae: () => Ii,
-       Af: () => OO,
-       Bb: () => Pr,
-       Bc: () => Qr,
-       Be: () => ki,
-       Cd: () => zM,
-       E: () => Sr,
-       Ed: () => dr,
-       Ee: () => oi,
- ... (123 more removed lines; see GitHub link above)
+   42154: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       gamePackSource: () => QU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L144-L896` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/296.js#L8-L9) · [Before (L144-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/296.js#L144-L896)

```diff
-     const OM = -2147483648,
-       SM = 12,
-       jM = 12,
-       aM = 4095,
-       PM = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       nM = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (737 more removed lines; see GitHub link above)
+     var cU = zU(5527),
+       yU = zU(1545);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L899-L1382` → after: `L12-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/296.js#L12-L14) · [Before (L899-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/296.js#L899-L1382)

```diff
-       return zi.buffer !== MM.buffer && (zi = new Uint8Array(MM.buffer)), zi
-     }
- 
-     function mi(MM, rM, iM) {
-       const OM = MM.JL(66, rM, 4);
-       if (OM < 0) return !1;
-       return MM.view.setUint8(OM + 0, iM), !0
-     }
- 
-     function Hi(MM, rM, iM) {
-       const OM = MM.JL(67, rM, 4);
-       if (OM < 0) return !1;
-       return MM.view.setUint32(OM + 0, iM, !0), !0
-     }
- 
-     function Ji(MM, rM, iM) {
- ... (468 more removed lines; see GitHub link above)
+       return {
+         packKey: async XU => (await yU.c.getGame(UU, XU, !0)).customTexturePackKey,
+         fetchPack: cU.c
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/297.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/297.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/297.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/297.js#L2)

```diff
- export const ids = [297];
+ export const ids = [296, 297];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L9)

```diff
-   44259: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => dM,
-       e: () => PM,
-       h: () => aM,
-       i: () => QM
+   42154: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       gamePackSource: () => QU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L11-L13` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/297.js#L8-L9) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/297.js#L11-L13)

```diff
-     var OM = iM(38167),
-       SM = iM(39748),
-       jM = iM(39741);
+     var cU = zU(5527),
+       yU = zU(1545);
```
