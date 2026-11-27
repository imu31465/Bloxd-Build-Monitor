# Changed — Bundle Modifications Report (Part 023 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `23 / 86` (**280** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 022](part-022.md) · [Part 024 →](part-024.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/301.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/301.js` (475 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9)

#### 154. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2788-L2793` → after: `L5978-L5979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5978-L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5978-L5979) · [Before (L2788-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2788-L2793)

```diff
-       instanceBatch(BB) {
-         const OB = this.batchOf(BB);
-         return OB.dispatched || (OB.dispatched = OB.renderSelf = !0, OB.row = this.rowOf(BB)), OB
-       }
-       rowOf(BB) {
-         return BB.row
+       appendChild(WW) {
+         throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2795-L2834` → after: `L5981-L5982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5981-L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5981-L5982) · [Before (L2795-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2795-L2834)

```diff
-       activate(BB, OB) {
-         if (!BB.SF) {
-           const GB = BB;
-           if (GB.WQB) {
-             const BB = this.batchOf(GB);
-             BB.dispatched = !0, BB.renderSelf = !0, BB.row = OB
-           }
-           return void this.dispatch(GB, OB, OB)
-         }
-         const GB = BB,
-           YB = GB.AQB;
-         if (YB._getWorldMatrixDeterminant() >= 0 !== GB._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${YB.name}`, `A mirrored InstancedMesh of ${YB.name} is not drawn yet`);
-         const DB = this.batchOf(YB);
-         DB.instances.push(GB), DB.rows.push(OB), DB.dispatched || (DB.dispatched = !0, this.dispatch(YB, OB, this.rowOf(YB)))
-       }
-       batchOf(BB) {
- ... (24 more removed lines; see GitHub link above)
+       insertBefore(WW, iW) {
+         throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2836-L2855` → after: `L5984-L5988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5984-L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5984-L5988) · [Before (L2836-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2836-L2855)

```diff
-       groupOf(BB) {
-         let OB = this.groups.get(BB);
-         return OB || (OB = {
-           opaque: {
-             units: [],
-             rows: []
-           },
-           alphaTest: {
-             units: [],
-             rows: []
-           },
-           transparent: {
-             units: [],
-             rows: []
-           },
-           text: {
- ... (4 more removed lines; see GitHub link above)
+       removeChild(WW) {
+         throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
+       }
+       toString() {
+         return "RRNode"
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2858-L2862` → after: `L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5991) · [Before (L2858-L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2858-L2862)

```diff
- 
-     function FQ(BB) {
-       BB.opaque.length = 0, BB.transparent.length = 0
-     }
-     class iQ {
+     class EN extends mN {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2864` → after: `L5993-L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5993-L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5993-L5994) · [Before (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2864)

```diff
-         this.sJ = new Map, this.enabled = [], this.groups = new Map, this.GP = [], this.warned = new Set, this.selected = 0, this.drawn = 0
+         for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+         super(iW), cm(this, "nodeType", 9), cm(this, "nodeName", "#document"), cm(this, "compatMode", "CSS1Compat"), cm(this, "RRNodeType", rE.Document), cm(this, "textContent", null), this.ownerDocument = this
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2866-L2876` → after: `L5996-L5997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5996-L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5996-L5997) · [Before (L2866-L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2866-L2876)

```diff
-       add(BB) {
-         if (this.sJ.has(BB)) return;
-         const OB = {
-           mesh: BB,
-           observer: BB.onEffectiveEnabledStateChangedObservable.add((BB => {
-             this.Zk(OB, BB)
-           })),
-           index: -1,
-           steady: null
-         };
-         this.sJ.set(BB, OB), this.Zk(OB, BB.isEnabled())
+       get documentElement() {
+         return this.childNodes.find((WW => WW.RRNodeType === rE.Element && "HTML" === WW.tagName)) || null
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2878-L2880` → after: `L5999-L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5999-L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5999-L6001) · [Before (L2878-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2878-L2880)

```diff
-       remove(BB) {
-         const OB = this.sJ.get(BB);
-         OB && (OB.observer.remove(!0), this.Zk(OB, !1), this.sJ.delete(BB))
+       get body() {
+         var WW;
+         return (null == (WW = this.documentElement) ? void 0 : WW.childNodes.find((WW => WW.RRNodeType === rE.Element && "BODY" === WW.tagName))) || null
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2882-L2883` → after: `L6003-L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6003-L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6003-L6005) · [Before (L2882-L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2882-L2883)

```diff
-       dropSteady() {
-         for (const BB of this.sJ.values()) BB.steady = null
+       get head() {
+         var WW;
+         return (null == (WW = this.documentElement) ? void 0 : WW.childNodes.find((WW => WW.RRNodeType === rE.Element && "HEAD" === WW.tagName))) || null
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2885-L2886` → after: `L6007-L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6007-L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6007-L6008) · [Before (L2885-L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2885-L2886)

```diff
-       base(BB) {
-         return this.sJ.get(BB)
+       get implementation() {
+         return this
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2888-L2893` → after: `L6010-L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6010-L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6010-L6011) · [Before (L2888-L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2888-L2893)

```diff
-       drawStats() {
-         return {
-           drawn: this.drawn,
-           selected: this.selected,
-           sJ: this.sJ.size
-         }
+       get firstElementChild() {
+         return this.documentElement
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2895-L2900` → after: `L6013-L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6013-L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6013-L6017) · [Before (L2895-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2895-L2900)

```diff
-       forEachSelected(BB) {
-         for (const [OB, GB] of this.groups) {
-           for (const YB of GB.opaque) BB(YB.owner, "opaque", OB);
-           for (const YB of GB.transparent) BB(YB.owner, "transparent", OB)
-         }
-         for (const OB of this.GP) BB(OB.mesh, "opaque", 0)
+       appendChild(WW) {
+         const iW = WW.RRNodeType;
+         if ((iW === rE.Element || iW === rE.DocumentType) && this.childNodes.some((WW => WW.RRNodeType === iW))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${iW===rE.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
+         const OW = lN(this, WW);
+         return OW.parentElement = null, OW
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2902-L2903` → after: `L6019-L6023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6019-L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6019-L6023) · [Before (L2902-L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2902-L2903)

```diff
-       group(BB) {
-         return this.groups.get(BB)
+       insertBefore(WW, iW) {
+         const OW = WW.RRNodeType;
+         if ((OW === rE.Element || OW === rE.DocumentType) && this.childNodes.some((WW => WW.RRNodeType === OW))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${OW===rE.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
+         const mW = AN(this, WW, iW);
+         return mW.parentElement = null, mW
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2905-L2906` → after: `L6025-L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6025-L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6025-L6026) · [Before (L2905-L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2905-L2906)

```diff
-       forEachGroup(BB) {
-         this.groups.forEach(BB)
+       removeChild(WW) {
+         return bN(this, WW)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2908-L2934` → after: `L6028-L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6028-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6028-L6029) · [Before (L2908-L2934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2908-L2934)

```diff
-       select(BB, OB) {
-         if (this.drawn = 0, this.selected = 0, this.GP.length = 0, this.groups.forEach(FQ), !BB) return;
-         const GB = this.enabled;
-         for (let YB = 0; YB < GB.length; YB++) {
-           const DB = GB[YB];
-           if (DB.steady && OB(DB, BB)) {
-             this.selected++, this.GP.push(DB);
-             continue
-           }
-           const QB = DB.mesh;
-           if (QB.isBlocked || QB.SP.hasAZeroComponent) continue;
-           if (!QB.isVisible || QB.visibility <= 0 || 0 === (QB.layerMask & BB.layerMask)) continue;
-           if (QB.WQB) {
-             this.warned.has(QB.name) || (this.warned.add(QB.name), console.warn(`Lite: thin instance base ${QB.name} has InstancedMeshes and is not drawn`));
-             continue
-           }
- ... (11 more removed lines; see GitHub link above)
+       open() {
+         this.firstChild = null, this.lastChild = null
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2936-L2943` → after: `L6031-L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6031-L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6031-L6036) · [Before (L2936-L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2936-L2943)

```diff
-       Zk(BB, OB) {
-         if (OB === BB.index >= 0) return;
-         BB.steady = null;
-         const GB = this.enabled;
-         if (OB) BB.index = GB.length, GB.push(BB);
-         else {
-           const OB = GB.pop();
-           OB !== BB && (GB[BB.index] = OB, OB.index = BB.index), BB.index = -1
+       close() {}
+       write(WW) {
+         let iW;
+         if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === WW ? iW = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === WW && (iW = "-//W3C//DTD HTML 4.0 Transitional//EN"), iW) {
+           const WW = this.createDocumentType("html", iW, "");
+           this.open(), this.appendChild(WW)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2946-L2951` → after: `L6039-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6039-L6040) · [Before (L2946-L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2946-L2951)

```diff
-       listsFor(BB) {
-         let OB = this.groups.get(BB);
-         return OB || (OB = {
-           opaque: [],
-           transparent: []
-         }, this.groups.set(BB, OB)), OB
+       createDocument(WW, iW, OW) {
+         return new EN
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2953-L2957` → after: `L6042-L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6042-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6042-L6044) · [Before (L2953-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2953-L2957)

```diff
-     }
-     var LQ = GB(40357);
-     class gQ {
-       constructor() {
-         this.bundle = null, this.stale = !0, this.sJ = new Set
+       createDocumentType(WW, iW, OW) {
+         const mW = new NN(WW, iW, OW);
+         return mW.ownerDocument = this, mW
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2959-L3019` → after: `L6046-L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6046-L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6046-L6048) · [Before (L2959-L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2959-L3019)

```diff
-     }
-     class rQ {
-       constructor(BB, OB, GB) {
-         this.device = BB, this.slots = OB, this.host = GB, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
-           BB.seen !== this.frame && (BB.draw && (BB.draw = null, this.args[5 * BB.slot + 1] = 0, this.argsDirty = !0, this.Jm.stale ||= BB.Jm), this.frame - BB.seen > 120 && (this.records.delete(BB.unit), this.freeSlots.push(BB.slot), BB.recorded && (this.bundleOf(BB).stale = !0) … [truncated]
-         }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(BB) {
-           var OB, GB;
-           let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (OB = null === (GB = globalThis.navigator) || void 0 === GB ? void 0 : GB.userAgent) && void 0 !== OB ? OB : "";
-           const DB = BB.adapterInfo;
-           return "intel" === (null === DB || void 0 === DB ? void 0 : DB.vendor) && "gen-12lp" === DB.architecture && YB.includes("Windows")
-         }(BB), (0, LQ.G)(this.direct)
-       }
-       zW() {
-         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, LQ.G)(this.directThisFrame)
-       }
-       add(BB, OB, GB, YB) {
- ... (45 more removed lines; see GitHub link above)
+       createElement(WW) {
+         const iW = new PN(WW);
+         return iW.ownerDocument = this, iW
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3021-L3023` → after: `L6050-L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6050-L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6050-L6051) · [Before (L3021-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3021-L3023)

```diff
-       noRangedBundle() {
-         for (const BB of this.records.values()) BB.Jm && (BB.recorded = !1);
-         return this.Jm.sJ.clear(), this.Jm.stale = !1, null
+       createElementNS(WW, iW) {
+         return this.createElement(iW)
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3025-L3028` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6053-L6055) · [Before (L3025-L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3025-L3028)

```diff
-       drawsRanged() {
-         for (const BB of this.records.values())
-           if (BB.Jm && BB.draw) return !0;
-         return !1
+       createTextNode(WW) {
+         const iW = new wN(WW);
+         return iW.ownerDocument = this, iW
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3030-L3096` → after: `L6057-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6057-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6057-L6059) · [Before (L3030-L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3030-L3096)

```diff
-       encode(BB, OB, GB, YB) {
-         const DB = [];
-         for (const yB of this.records.values()) "direct" !== YB && yB.Jm !== ("Jm" === YB) || (yB.recorded = !1, yB.draw && DB.push(yB));
-         DB.sort(EQ);
-         const QB = "direct" === YB ? null : "Jm" === YB ? this.Jm : this.main;
-         null === QB || void 0 === QB || QB.sJ.clear(), this.binder.reset();
-         let oB = !1;
-         for (const yB of DB) {
-           var jB;
-           const DB = yB.draw,
-             JB = this.host.pipelineFor(DB, OB, GB);
-           if (!JB) {
-             this.host.pipelineCompiling(DB, GB) ? oB = !0 : QB && this.keep(yB, DB, QB.sJ);
-             continue
-           }
-           let MB;
- ... (51 more removed lines; see GitHub link above)
+       createComment(WW) {
+         const iW = new tN(WW);
+         return iW.ownerDocument = this, iW
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3098-L3106` → after: `L6061-L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6061-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6061-L6063) · [Before (L3098-L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3098-L3106)

```diff
-     }
- 
-     function XQ(BB, OB, GB, YB, DB) {
-       const QB = GB[YB + 1],
-         oB = DB.data;
-       for (let jB = 0; jB < DB.count; jB++) {
-         const DB = Math.min(oB[2 * jB], QB),
-           yB = Math.min(oB[2 * jB + 1], QB - DB);
-         0 !== yB && (OB ? BB.drawIndexed(GB[YB], yB, GB[YB + 2], 0, DB) : BB.draw(GB[YB], yB, GB[YB + 2], DB))
+       createCDATASection(WW) {
+         const iW = new ZN(WW);
+         return iW.ownerDocument = this, iW
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3108-L3208` → after: `L6065-L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6065-L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6065-L6066) · [Before (L3108-L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3108-L3208)

```diff
-     }
- 
-     function wQ(BB, OB) {
-       if (BB.pipelineKey !== OB.pipelineKey || BB.materialGroup !== OB.material.bindGroup || BB.indexBuffer !== OB.indexBuffer || BB.indexFormat !== OB.indexFormat || BB.vertexOffsets !== OB.vertexOffsets || BB.vertexBuffers.length !== OB.vertexBuffers.length) return !1;
-       for (let GB = 0; GB < BB.vertexBuffers.length; GB++)
-         if (BB.vertexBuffers[GB] !== OB.vertexBuffers[GB]) return !1;
-       return !0
-     }
- 
-     function EQ(BB, OB) {
-       return BQ(BB.draw, OB.draw)
-     }
-     const cQ = new WeakMap,
-       hQ = {
-         depth: !1,
-         sunShadow: !1
- ... (85 more removed lines; see GitHub link above)
+       toString() {
+         return "RRDocument"
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3233-L3301` → after: `L6069-L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6069-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6069-L6071) · [Before (L3233-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3233-L3301)

```diff
-     class CQ {
-       constructor(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.device = BB, this.sunShadow = GB, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(vO.f), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = BB.createBuffer({
-           label: "shader-pack-inputs",
-           size: vO.f,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         });
-         const YB = (0, vO.t)(OB);
-         this.textures = BB.createBuffer({
-           label: "shader-pack-textures",
-           size: YB.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), BB.queue.writeBuffer(this.textures, 0, YB), this.bindGroup = BB.createBindGroup({
-           label: "shader-pack-inputs",
-           layout: eQ(BB),
- ... (53 more removed lines; see GitHub link above)
+     class NN extends mN {
+       constructor(WW, iW, OW) {
+         super(), cm(this, "nodeType", 10), cm(this, "RRNodeType", rE.DocumentType), cm(this, "name"), cm(this, "publicId"), cm(this, "systemId"), cm(this, "textContent", null), this.name = WW, this.publicId = iW, this.systemId = OW, this.nodeName = WW
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3303-L3306` → after: `L6073-L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6073-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6073-L6074) · [Before (L3303-L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3303-L3306)

```diff
-       bind(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         BB.setBindGroup(vO.e, this.bindGroupFor(OB, GB, YB))
+       toString() {
+         return "RRDocumentType"
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3309-L3328` → after: `L6077-L6079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6077-L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6077-L6079) · [Before (L3309-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3309-L3328)

```diff
- 
-     function HQ(BB, OB, GB) {
-       if (BB.gpuVersion === OB.gpuBuffersVersion) return !0;
-       let YB;
-       do {
-         if (YB = OB.gpuBuffersVersion, !vQ(BB, OB, GB)) return !1
-       } while (OB.gpuBuffersVersion !== YB);
-       return BB.gpuVersion = YB, BB.fitInstances = 0, !0
-     }
- 
-     function vQ(BB, OB, GB) {
-       let YB = null;
-       for (let QB = 0; QB < BB.slotData.length; QB++) {
-         var DB;
-         const oB = BB.slotData[QB],
-           jB = oB ? OB.gpuBuffer(oB) : GB;
- ... (4 more removed lines; see GitHub link above)
+     class PN extends mN {
+       constructor(WW) {
+         super(), cm(this, "nodeType", 1), cm(this, "RRNodeType", rE.Element), cm(this, "tagName"), cm(this, "attributes", {}), cm(this, "shadowRoot", null), cm(this, "scrollLeft"), cm(this, "scrollTop"), this.tagName = WW.toUpperCase(), this.nodeName = WW.toUpperCase()
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3330-L3352` → after: `L6081-L6083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6081-L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6081-L6083) · [Before (L3330-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3330-L3352)

```diff
-       return YB && (BB.offsets = YB), !0
-     }
- 
-     function sQ(BB, OB, GB, YB) {
-       if (OB <= BB.fitInstances) return null;
-       const {
-         layout: DB,
-         ends: QB,
-         offsets: oB,
-         slotData: jB,
-         iBB: yB
-       } = BB;
-       let JB = !1;
-       for (let MB = 0; MB < DB.buffers.length; MB++) {
-         const BB = DB.instanceEnds[MB];
-         if (BB < 0) continue;
- ... (7 more removed lines; see GitHub link above)
+       get textContent() {
+         let WW = "";
+         return this.childNodes.forEach((iW => WW += iW.textContent)), WW
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3354-L3392` → after: `L6085-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6085-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6085-L6086) · [Before (L3354-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3354-L3392)

```diff
-       return JB && HQ(BB, GB, YB), BB.fitInstances = OB, null
-     }
-     var xQ = GB(38494),
-       tQ = GB(38531);
-     const Bo = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
-       Oo = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
-       Go = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
-       Yo = `((vertexInputs.aPackedLightLevels >> 16u) | ${mO.b.placed}u)`,
-       Do = "u32(vertexInputs.aShaderPackItem.x)",
-       Qo = `${mO.b.lifeform}u`;
- 
-     function oo(BB) {
-       return "item" === BB.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
-     }
-     const jo = "bloxdSpEnchant",
-       yo = "floor(finalWorld[3].xyz)";
- ... (23 more removed lines; see GitHub link above)
+       set textContent(WW) {
+         this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(WW))
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3394-L3404` → after: `L6088-L6091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6088-L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6088-L6091) · [Before (L3394-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3394-L3404)

```diff
-     }
- 
-     function zo(BB) {
-       if ("item" === BB.kind) {
-         return {
-           vertexFlags: `(${Do} & 0xffffu)`,
-           varying: "vPackItem",
-           value: Do,
-           flags: "(fragmentInputs.vPackItem & 0xffffu)",
-           enchantTier: "(fragmentInputs.vPackItem >> 16u)"
-         }
+       get classList() {
+         return new xN(this.attributes.class, (WW => {
+           this.attributes.class = WW
+         }))
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3406-L3477` → after: `L6093-L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6093-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6093-L6120) · [Before (L3406-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3406-L3477)

```diff
-       return BB.defines.BLOXD_LIGHT_WORD ? {
-         vertexFlags: Yo,
-         varying: "vPackFlags",
-         value: Yo,
-         flags: "fragmentInputs.vPackFlags",
-         enchantTier: "0u"
-       } : null
-     }
- 
-     function po(BB) {
-       return "lifeform" === BB.kind ? Qo : "0u"
-     }
- 
-     function qo(BB) {
-       return !!BB.BLOXD_PLUGIN_ENCHANTMENT
-     }
- ... (56 more removed lines; see GitHub link above)
+       get id() {
+         return this.attributes.id || ""
+       }
+       get className() {
+         return this.attributes.class || ""
+       }
+       get style() {
+         const WW = this.attributes.style ? function(WW) {
+             const iW = {},
+               OW = /:(.+)/;
+             return WW.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(WW) {
+               if (WW) {
+                 const mW = WW.split(OW);
+                 mW.length > 1 && (iW[WN(mW[0].trim())] = mW[1].trim())
+               }
+             })), iW
+ ... (12 more added lines; see GitHub link above)
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3479-L3519` → after: `L6122-L6123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6122-L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6122-L6123) · [Before (L3479-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3479-L3519)

```diff
-     }
- 
-     function Vo(BB, OB) {
-       return "box" === OB.kind && !!BB.hooks.surface && null !== Ao(OB)
-     }
- 
-     function So(BB, OB) {
-       return BB.reads.fragment.includes(OB)
-     }
- 
-     function no(BB) {
-       return !!BB.BLOXD_LIGHTING && !BB.BLOXD_UNLIT
-     }
- 
-     function Uo(BB, OB, GB, YB) {
-       const DB = BB.filter((BB => {
- ... (25 more removed lines; see GitHub link above)
+       getAttribute(WW) {
+         return void 0 === this.attributes[WW] ? null : this.attributes[WW]
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3521-L3538` → after: `L6125-L6126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6125-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6125-L6126) · [Before (L3521-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3521-L3538)

```diff
-       const {
-         overlay: PB
-       } = OB;
-       PB && Ro(OB) && DB.surface && (MB = MB.filter((BB => !Mo(BB, PB))));
-       const zB = DB.light ? function(BB) {
-         return "placed" === BB.kind ? {
-           name: "terrain",
-           engine: (0, bO.T)(SB.c.WGSL),
-           pack: (0, bO.lb)(SB.c.WGSL)
-         } : BB.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
-           name: "entity",
-           engine: (0, bO.L)(SB.c.WGSL),
-           pack: (0, bO.gb)(SB.c.WGSL)
-         } : null
-       }(OB) : null;
-       if (zB && (MB = Uo(MB, zB.engine, zB.pack, `${zB.name} light`), "placed" !== QB && no(oB))) {
- ... (2 more removed lines; see GitHub link above)
+       setAttribute(WW, iW) {
+         this.attributes[WW] = iW
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3540-L3542` → after: `L6128-L6129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6128-L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6128-L6129) · [Before (L3540-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3540-L3542)

```diff
-       return {
-         vertexCode: jB,
-         fragmentCode: MB
+       setAttributeNS(WW, iW, OW) {
+         this.setAttribute(iW, OW)
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3544-L3612` → after: `L6131-L6132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6131-L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6131-L6132) · [Before (L3544-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3544-L3612)

```diff
-     }
- 
-     function ko(BB, OB, GB, YB) {
-       return YY(BB, OB, GB, YB, "model")
-     }
-     const Ko = "\t@builtin(position) position: vec4f,\n";
- 
-     function uo(BB, OB) {
-       const GB = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(BB)[0];
-       return `${GB}${OB}${BB.slice(GB.length)}`
-     }
- 
-     function mo(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const {
-         hooks: DB
- ... (53 more removed lines; see GitHub link above)
+       removeAttribute(WW) {
+         delete this.attributes[WW]
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3614-L3619` → after: `L6134-L6135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6134-L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6134-L6135) · [Before (L3614-L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3614-L3619)

```diff
-       const NB = `${yY(OB,QB,function(BB,OB){return OB.TWOSIDEDLIGHTING?BB:`select(-(${BB}), ${BB}, fragmentInputs.frontFacing)`}(yB.normal,jB),yB.flags)}${NY(DB,OB.strict,OB.program,zB,yB)}`;
-       NB && (qB = ko(qB, Oo, `${NB.slice(1)}${Oo}`, "surface")), QB && OB.sunShadow && !jB.TWOSIDEDLIGHTING && (qB = ko(qB, Ko, `${Ko}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
-       const RB = AY(DB);
-       if (RB) {
-         const BB = WY(DB, no(jB), !0, yB);
-         qB = ko(qB, Go, `${BB}${RB.slice(1)}${Go}`, "light")
+       appendChild(WW) {
+         return lN(this, WW)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3621-L3625` → after: `L6137-L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6137-L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6137-L6138) · [Before (L3621-L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3621-L3625)

```diff
-       const WB = Vo(OB, GB) ? PY : "";
-       return {
-         ...BB,
-         vertex: uo(pB, lB(MB, !1, WB)),
-         fragment: uo(qB, lB(zB, QB))
+       insertBefore(WW, iW) {
+         return AN(this, WW, iW)
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3627-L3634` → after: `L6140-L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6140-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6140-L6141) · [Before (L3627-L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3627-L3634)

```diff
-     }
-     const Io = {
-       name: "earthSky",
-       uniqueId: -1
-     };
-     class Fo {
-       constructor(BB, OB) {
-         this.resources = BB, this.epoch = OB, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
+       removeChild(WW) {
+         return bN(this, WW)
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3636-L3638` → after: `L6143-L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6143-L6145) · [Before (L3636-L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3636-L3638)

```diff
-       release() {
-         for (const BB of this.instances.values()) BB.released = !0, this.resources.destroyBuffer(BB.buffer);
-         this.instances.clear()
+       attachShadow(WW) {
+         const iW = this.ownerDocument.createElement("SHADOWROOT");
+         return this.shadowRoot = iW, iW
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3640-L3693` → after: `L6147-L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6147-L6148) · [Before (L3640-L3693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3640-L3693)

```diff
-     }
- 
-     function io(BB) {
-       return BB.failed && null !== BB.packGroup
-     }
-     class Lo {
-       constructor(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iQ,
-           DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new IQ;
-         this.device = BB, this.resources = OB, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.mBB = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new xD, this.s … [truncated]
-           label: "meshes-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
- ... (38 more removed lines; see GitHub link above)
+       dispatchEvent(WW) {
+         return !0
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3695-L3696` → after: `L6150-L6153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6150-L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6150-L6153) · [Before (L3695-L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3695-L3696)

```diff
-       get pipelinesCompiling() {
-         return this.compiling
+       toString() {
+         let WW = "";
+         for (const iW in this.attributes) WW += `${iW}="${this.attributes[iW]}" `;
+         return `${this.tagName} ${WW}`
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3698-L3719` → after: `L6155-L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6155-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6155-L6158) · [Before (L3698-L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3698-L3719)

```diff
-       prepare(BB, OB, GB) {
-         var YB;
-         let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         this.frame++, this.view = OB, this.drawDefines.view = OB, this.thinBundle.zW(), this.writeFrameUniforms();
-         const QB = null !== (YB = null === DB || void 0 === DB ? void 0 : DB.defineFor("model")) && void 0 !== YB ? YB : 0;
-         this.drawDefines.modelPackVariant = QB, DB && 0 !== QB && (this.packInputs ??= new CQ(this.device, DB.textureLayers(), this.sunShadow), this.packInputs.write(DB, OB.eye, DB.wq())), this.lists.clear(), this.slotCount = 0;
-         const oB = BB.activeCamera;
-         this.mBB.select(oB, this.keepSteadyBase), this.modelMeshes.select(oB, OB), GB && this.pushEarthSky(GB), this.lists.collect(BB), this.thinBundle.AP(), this.uploadMeshSlots()
-       }
-       pushDraws(BB, OB, GB, YB, DB, QB) {
-         let oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
-         const jB = QB.length;
-         for (let yB = 0; yB < GB; yB++) {
-           const GB = OB[yB];
-           let jB = this.retainedDraw(BB, GB, YB, DB);
-           if (void 0 === jB && (jB = this.drawFor(BB, GB, YB, DB), this.retain(GB, jB)), jB) {
- ... (6 more removed lines; see GitHub link above)
+     }
+     class LN extends PN {
+       constructor() {
+         super(...arguments), cm(this, "currentTime"), cm(this, "volume"), cm(this, "paused"), cm(this, "muted"), cm(this, "playbackRate"), cm(this, "loop")
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3721-L3732` → after: `L6160-L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6160-L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6160-L6164) · [Before (L3721-L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3721-L3732)

```diff
-       bundleDraws(BB, OB, GB) {
-         let YB = 0;
-         for (const DB of OB) {
-           let OB = this.retainedDraw(BB, DB, GB, !1);
-           const QB = void 0 !== OB;
-           if (void 0 === OB && (OB = this.drawFor(BB, DB, GB, !1), this.retain(DB, OB)), OB) {
-             const BB = DB.owner,
-               GB = this.thinBundle.add(DB, OB, BB.getWorldMatrix().m, BB.visibility);
-             QB && this.steadyFrom(DB, OB, GB), YB++
-           }
-         }
-         return YB
+       attachShadow(WW) {
+         throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
+       }
+       play() {
+         this.paused = !1
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3734-L3758` → after: `L6166-L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6166-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6166-L6167) · [Before (L3734-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3734-L3758)

```diff
-       steadyFrom(BB, OB, GB) {
-         const YB = BB.owner,
-           DB = this.mBB.base(YB),
-           QB = YB.material,
-           {
-             drawState: oB,
-             instance: jB
-           } = OB.inputs.retained;
-         if (!DB || !QB || 1 !== BB.parts.materials.length || KQ(BB) !== QB) return;
-         const yB = DB.steady ??= {
-           unit: BB,
-           material: QB,
-           visibility: 1,
-           draw: OB,
-           record: GB,
-           drawState: oB,
- ... (9 more removed lines; see GitHub link above)
+       pause() {
+         this.paused = !0
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3760-L3852` → after: `L6169-L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6169-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6169-L6172) · [Before (L3760-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3760-L3852)

```diff
-       keepSteady(BB, OB) {
-         const GB = BB.steady;
-         if (GB.handedFrame !== this.frame - 1 || (this.frame + GB.phase) % 8 === 0) return !1;
-         const YB = BB.mesh,
-           {
-             unit: DB,
-             draw: QB,
-             instance: oB,
-             drawState: jB
-           } = GB,
-           yB = YB.forcedInstanceCount || YB.rBB;
-         if (!YB.isVisible || YB.WQB || YB.visibility !== GB.visibility || 0 === (YB.layerMask & OB.layerMask) || YB.material !== GB.material || 0 !== YB.renderingGroupId || YB.hasVertexAlpha || !this.drawDefines.definesHold(jB, DB, jB.instancing) || GB.gpuVersion !== this.resourc … [truncated]
-         if (oB.frame !== this.frame && this.bindMaterial(oB, this.modelUniforms.refreshModelUniforms(YB.JF(), oB, oB.model, this.view)), !oB.bindable || oB.bindGroup !== GB.bindGroup) return !1;
-         const JB = YB.computeWorldMatrix(),
-           MB = JB.updateFlag !== GB.worldFlag;
-         return GB.worldFlag = JB.updateFlag, QB.instances = yB, this.thinBundle.addAgain(GB.record, QB, MB ? JB.m : null, GB.visibility), GB.handedFrame = this.frame, this.mBB.drawn++, !0
- ... (77 more removed lines; see GitHub link above)
+     }
+     class cN extends PN {
+       constructor() {
+         super(...arguments), cm(this, "tagName", "DIALOG"), cm(this, "nodeName", "DIALOG")
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3854-L3882` → after: `L6174-L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6174-L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6174-L6175) · [Before (L3854-L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3854-L3882)

```diff
-       indexKey(BB) {
-         const OB = yQ(BB);
-         return OB ? this.resources.modelIndex(OB) : null
-       }
-       setRange(BB, OB, GB, YB) {
-         GB && (BB.indexBuffer = GB, BB.indexFormat = this.resources.indexFormat(YB));
-         const DB = 4 * OB.range + (GB ? 0 : 2);
-         BB.unit = OB, BB.first = OB.parts.JZ[DB], BB.count = OB.parts.JZ[DB + 1]
-       }
-       makeDraw(BB, OB, GB, YB, DB) {
-         OB.state !== GB && (OB.state = GB, OB.pipelineKey = `${BB.id}|${OB.layout.key}|${GB.key}`, OB.pipeline = null);
-         const QB = OB.draw ??= {
-           program: BB,
-           inputs: OB,
-           pipelineKey: "",
-           layout: OB.layout,
- ... (13 more removed lines; see GitHub link above)
+       get isModal() {
+         return "modal" === this.getAttribute("rr_open_mode")
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3884-L3892` → after: `L6177-L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6177-L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6177-L6178) · [Before (L3884-L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3884-L3892)

```diff
-       instanceCount(BB, OB) {
-         switch (OB) {
-           case "thin":
-             return BB.forcedInstanceCount || BB.rBB;
-           case "instanced":
-             return this.prepareInstances(BB);
-           case "none":
-             return 1
-         }
+       get open() {
+         return null !== this.getAttribute("open")
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3894-L3951` → after: `L6180-L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6180-L6181) · [Before (L3894-L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3894-L3951)

```diff
-       prepareInstances(BB) {
-         const OB = function(BB, OB) {
-           const GB = OB._userInstancedBuffersStorage,
-             YB = BB.batchUploads.get(OB);
-           if (YB) {
-             var DB;
-             if (YB.layout === (null !== (DB = null === GB || void 0 === GB ? void 0 : GB.interleavedKinds) && void 0 !== DB ? DB : null)) return YB;
-             YB.release()
-           }
-           return new lO(BB, OB, GB)
-         }(this.resources, BB);
-         return OB.frame !== this.frame && OB.pack(BB, this.modelMeshes.instanceBatch(BB), this.modelMeshes.worlds, this.frame), OB.count
-       }
-       programWithModel(BB, OB, GB) {
-         const YB = this.modelSlot(BB),
-           DB = PQ(YB, BB, GB),
- ... (42 more removed lines; see GitHub link above)
+       close() {
+         this.removeAttribute("open"), this.removeAttribute("rr_open_mode")
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3953-L3981` → after: `L6183-L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6183-L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6183-L6184) · [Before (L3953-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3953-L3981)

```diff
-       modelPackProgram(BB, OB, GB, YB, DB) {
-         const QB = this.programs.get(GB);
-         if (QB || this.unbuildable.has(GB)) return null !== QB && void 0 !== QB ? QB : null;
-         const oB = this.drawDefines.modelPackVariant;
-         let jB;
-         try {
-           const BB = function(BB) {
-               return (0, sO.d)(BB, "model")
-             }(oB),
-             GB = fo(BB, DB, YB.vertexCode, YB.fragmentCode);
-           jB = mo(uD({
-             defines: oQ(OB),
-             ...GB,
-             pluginUniforms: YB.pluginUniforms
-           }), BB, DB, !!this.sunShadow)
-         } catch (MB) {
- ... (13 more removed lines; see GitHub link above)
+       show() {
+         this.setAttribute("open", ""), this.setAttribute("rr_open_mode", "non-modal")
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L3983-L4048` → after: `L6186-L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6186-L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6186-L6187) · [Before (L3983-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L3983-L4048)

```diff
-       lineProgramFor(BB, OB, GB) {
-         const YB = NB(BB, GB, OB, this.view);
-         let DB = this.linePrograms.get(YB);
-         var QB;
-         return DB || (DB = this.createProgram(`lines#${YB}`, (QB = function(BB) {
-           const OB = new Map;
-           for (let GB = 0; GB < JB.length; GB++) BB & 1 << GB && OB.set(JB[GB], !0);
-           return OB
-         }(YB), iD({
-           defines: QB,
-           vertex: ID,
-           fragment: FD,
-           members: [],
-           structName: "MaterialUniforms"
-         })), "color"), this.linePrograms.set(YB, DB)), DB
-       }
- ... (50 more removed lines; see GitHub link above)
+       showModal() {
+         this.setAttribute("open", ""), this.setAttribute("rr_open_mode", "modal")
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4050-L4052` → after: `L6189-L6192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6189-L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6189-L6192) · [Before (L4050-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4050-L4052)

```diff
-       writeFrameUniforms() {
-         const BB = this.frameUniforms;
-         RQ(this.view, BB), this.device.queue.writeBuffer(this.frameBuffer, 0, BB)
+     }
+     class wN extends mN {
+       constructor(WW) {
+         super(), cm(this, "nodeType", 3), cm(this, "nodeName", "#text"), cm(this, "RRNodeType", rE.Text), cm(this, "data"), this.data = WW
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4054-L4079` → after: `L6194-L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6194-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6194-L6195) · [Before (L4054-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4054-L4079)

```diff
-       materialInstance(BB, OB) {
-         let GB = this.materials.get(BB);
-         if (!GB) {
-           const OB = new Map;
-           this.materials.set(BB, OB);
-           const {
-             resources: YB,
-             materials: DB
-           } = this;
-           BB.lF.addOnce((() => {
-             for (const BB of OB.values()) BB.released = !0, YB.destroyBuffer(BB.buffer);
-             DB.delete(BB)
-           })), GB = OB
-         }
-         let YB = GB.get(OB.key);
-         return YB || (YB = this.newMaterialInstance(BB, null, OB), GB.set(OB.key, YB)), YB
- ... (10 more removed lines; see GitHub link above)
+       get textContent() {
+         return this.data
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4081-L4104` → after: `L6197-L6198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6197-L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6197-L6198) · [Before (L4081-L4104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4081-L4104)

```diff
-       newMaterialInstance(BB, OB, GB) {
-         const YB = GB.program.material.floats,
-           DB = new Float32Array(YB),
-           QB = new Map;
-         return {
-           owner: BB,
-           model: OB,
-           program: GB,
-           data: DB,
-           uploaded: new Float32Array(YB).fill(Number.NaN),
-           buffer: this.device.createBuffer({
-             label: `${BB.name}-uniforms`,
-             size: Math.max(16, 4 * YB),
-             usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-           }),
-           textures: QB,
- ... (8 more removed lines; see GitHub link above)
+       set textContent(WW) {
+         this.data = WW
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4106-L4131` → after: `L6200-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6200-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6200-L6201) · [Before (L4106-L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4106-L4131)

```diff
-       pushEarthSky(BB) {
-         var OB;
-         const GB = this.earthSkyProgram ??= this.createProgram("earthSky", {
-             vertex: wD + ED,
-             fragment: wD + cD,
-             attributes: [],
-             material: XD,
-             textures: []
-           }, "earthSky"),
-           YB = this.earthSkyUniforms ??= this.newMaterialInstance(Io, null, GB);
-         this.earthSkyFrom !== BB && (this.earthSkyFrom = BB, YB.data.fill(0)), vD(YB.ubo, BB, this.view);
-         const DB = this.vertexInputs(GB, Io, "earthSky", GB, null);
-         if (GB.failed || !DB || !this.bindMaterial(YB, !1)) return;
-         const QB = null !== (OB = DB.state) && void 0 !== OB ? OB : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
-           oB = this.makeDraw(GB, DB, QB, YB, 1);
-         oB.count = LD.length;
- ... (10 more removed lines; see GitHub link above)
+       toString() {
+         return `RRText text=${JSON.stringify(this.data)}`
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4133-L4134` → after: `L6203-L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6203-L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6203-L6206) · [Before (L4133-L4134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4133-L4134)

```diff
-       bindMaterial(BB, OB) {
-         return BB.frame !== this.frame && (BB.frame = this.frame, OB || this.uploadIfChanged(BB), BB.bindable = this.bindTextures(BB)), BB.bindable
+     }
+     class tN extends mN {
+       constructor(WW) {
+         super(), cm(this, "nodeType", 8), cm(this, "nodeName", "#comment"), cm(this, "RRNodeType", rE.Comment), cm(this, "data"), this.data = WW
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4136-L4169` → after: `L6208-L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6208-L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6208-L6209) · [Before (L4136-L4169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4136-L4169)

```diff
-       bindTextures(BB) {
-         const {
-           program: OB,
-           bound: GB
-         } = BB, YB = OB.program.textures;
-         let DB = !BB.bindGroup,
-           QB = !0;
-         for (let oB = 0; oB < YB.length; oB++) {
-           const OB = BB.textures.get(YB[oB].name),
-             jB = OB ? this.resources.boundTexture(OB) : null;
-           jB ? GB[2 * oB] === jB.view && GB[2 * oB + 1] === jB.sampler || (GB[2 * oB] = jB.view, GB[2 * oB + 1] = jB.sampler, DB = !0) : (OB || BB.ubo.expected.has(YB[oB].name) || this.warnOnce(`texture:${BB.owner.name}:${YB[oB].name}`, `${BB.owner.name} has no ${YB[oB].name}`),  … [truncated]
-         }
-         if (!QB) return DB && (BB.bindGroup = null), !1;
-         if (DB) {
-           const DB = [{
-             binding: 0,
- ... (18 more removed lines; see GitHub link above)
+       get textContent() {
+         return this.data
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4171-L4173` → after: `L6211-L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6211-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6211-L6212) · [Before (L4171-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4171-L4173)

```diff
-       writeMeshSlot(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, BB, OB, GB), this.slotCount++ * JD
+       set textContent(WW) {
+         this.data = WW
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4175-L4176` → after: `L6214-L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6214-L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6214-L6215) · [Before (L4175-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4175-L4176)

```diff
-       uploadMeshSlots() {
-         this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
+       toString() {
+         return `RRComment text=${JSON.stringify(this.data)}`
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4178-L4185` → after: `L6217-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6217-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6217-L6220) · [Before (L4178-L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4178-L4185)

```diff
-       vertexInputs(BB, OB, GB, YB, DB) {
-         let QB = this.inputs.get(BB);
-         if (!QB || QB.program !== YB || !UQ(OB, QB, this.resources, DB)) {
-           var oB;
-           if (QB = null !== (oB = this.vertexLayouts.resolveInputs(OB, GB, YB, DB)) && void 0 !== oB ? oB : void 0, !QB) return null;
-           this.inputs.set(BB, QB)
-         }
-         return this.withGpuBuffers(QB)
+     }
+     class ZN extends mN {
+       constructor(WW) {
+         super(), cm(this, "nodeName", "#cdata-section"), cm(this, "nodeType", 4), cm(this, "RRNodeType", rE.CDATA), cm(this, "data"), this.data = WW
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4187-L4193` → after: `L6222-L6223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6222-L6223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6222-L6223) · [Before (L4187-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4187-L4193)

```diff
-       meshInputs(BB, OB, GB) {
-         const YB = this.inputs.get(BB);
-         if (YB && this.inputsStamped(YB, BB, GB, OB)) return this.withGpuBuffers(YB);
-         const DB = BB.owner,
-           QB = yQ(BB),
-           oB = this.vertexInputs(BB, DB, DB.name, OB, QB);
-         return oB && (oB.geometry = JQ(BB), oB.instanceLayout = this.drawDefines.instanceLayout(DB, GB)), oB
+       get textContent() {
+         return this.data
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4195-L4198` → after: `L6225-L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6225-L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6225-L6226) · [Before (L4195-L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4195-L4198)

```diff
-       inputsStamped(BB, OB, GB, YB) {
-         return function(BB, OB, GB, YB) {
-           return BB.program === GB && BB.geometry === JQ(OB) && BB.instanceLayout === YB
-         }(BB, OB, YB, this.drawDefines.instanceLayout(OB.owner, GB))
+       set textContent(WW) {
+         this.data = WW
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4200-L4201` → after: `L6228-L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6228-L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6228-L6229) · [Before (L4200-L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4200-L4201)

```diff
-       withGpuBuffers(BB) {
-         return HQ(BB, this.resources, this.zeroBuffer) ? BB : null
+       toString() {
+         return `RRCDATASection data=${JSON.stringify(this.data)}`
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4203-L4207` → after: `L6231-L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6231-L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6231-L6247) · [Before (L4203-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4203-L4207)

```diff
-       instanceBuffersFit(BB, OB, GB) {
-         const YB = sQ(OB, GB, this.resources, this.zeroBuffer);
-         if (YB) {
-           const DB = OB.ends[YB.index] - OB.offsets[YB.index] + OB.iBB[YB.index];
-           return this.warnOnce(`overrun:${BB}`, `${BB} draws ${GB} instances from a ${DB}-byte buffer (${YB.needed} needed)`), !1
+     }
+     class xN {
+       constructor(WW, iW) {
+         var OW = this;
+         if (cm(this, "onChange"), cm(this, "classes", []), cm(this, "add", (function() {
+             for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
+             for (const EW of iW) {
+               const WW = String(EW);
+               OW.classes.indexOf(WW) >= 0 || OW.classes.push(WW)
+             }
+             OW.onChange && OW.onChange(OW.classes.join(" "))
+           })), cm(this, "remove", (function() {
+             for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
+             OW.classes = OW.classes.filter((WW => -1 === iW.indexOf(WW))), OW.onChange && OW.onChange(OW.classes.join(" "))
+           })), WW) {
+           const iW = WW.trim().split(/\s+/);
+ ... (1 more added lines; see GitHub link above)
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4209` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6249) · [Before (L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4209)

```diff
-         return !0
+         this.onChange = iW
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4211-L4221` → after: `L6251-L6373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6251-L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6251-L6373) · [Before (L4211-L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4211-L4221)

```diff
-       createBinding(BB, OB, GB, YB) {
-         const DB = `${OB._colorFormat}|${OB._depthStencilFormat}|${OB._depthCompare}|${OB._sampleCount}`,
-           QB = KO(this.device, OB);
-         if (BB === this.skyLastRenderable) {
-           let GB = null;
-           return {
-             renderable: BB,
-             pipeline: QB,
-             draw: BB => GB ? this.drawSky(BB, OB, DB, GB) : 0,
-             update: BB => {
-               GB = BB
+     }
+ 
+     function lN(WW, iW) {
+       return iW.parentNode && iW.parentNode.removeChild(iW), WW.lastChild ? (WW.lastChild.nextSibling = iW, iW.previousSibling = WW.lastChild) : (WW.firstChild = iW, iW.previousSibling = null), WW.lastChild = iW, iW.nextSibling = null, iW.parentNode = WW, iW.parentElement = WW, i … [truncated]
+     }
+ 
+     function AN(WW, iW, OW) {
+       if (!OW) return lN(WW, iW);
+       if (OW.parentNode !== WW) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
+       return iW === OW || (iW.parentNode && iW.parentNode.removeChild(iW), iW.previousSibling = OW.previousSibling, OW.previousSibling = iW, iW.nextSibling = OW, iW.previousSibling ? iW.previousSibling.nextSibling = iW : WW.firstChild = iW, iW.parentElement = WW, iW.parentNode =  … [truncated]
+     }
+ 
+     function bN(WW, iW) {
+       if (iW.parentNode !== WW) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
+       return iW.previousSibling ? iW.previousSibling.nextSibling = iW.nextSibling : WW.firstChild = iW.nextSibling, iW.nextSibling ? iW.nextSibling.previousSibling = iW.previousSibling : WW.lastChild = iW.previousSibling, iW.previousSibling = null, iW.nextSibling = null, iW.paren … [truncated]
+     }
+ ... (107 more added lines; see GitHub link above)
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4225-L4228` → after: `L6464-L6469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6464-L6469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6464-L6469) · [Before (L4225-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4225-L4228)

```diff
-         return {
-           renderable: BB,
-           pipeline: QB,
-           draw: BB => (YB ? YB.execute(BB, OB, DB) : 0) + this.drawList(BB, OB, DB, GB)
+         xW = EW[++cW], bW = NW[--ZW]
+       } else if (yN(lW, AW, OW.mirror, mW)) {
+         try {
+           WW.insertBefore(lW, xW)
+         } catch (kW) {
+           console.warn(kW)
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4230-L4237` → after: `L6471-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6471-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6471-L6478) · [Before (L4230-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4230-L4237)

```diff
-       }
-       drawSky(BB, OB, GB, YB) {
-         const DB = this.lists.skyDraws,
-           QB = DB.length > 0;
-         if (QB) {
-           var oB;
-           const GB = (null !== (oB = OB._depthCompare) && void 0 !== oB ? oB : UO).startsWith("greater") ? 0 : 1;
-           BB.setViewport(0, 0, YB.targetWidth, YB.targetHeight, GB, GB)
+         lW = EW[--wW], AW = NW[++tW]
+       } else {
+         if (!PW) {
+           PW = {};
+           for (let WW = cW; WW <= wW; WW++) {
+             const iW = EW[WW];
+             iW && OW.mirror.hasNode(iW) && (PW[OW.mirror.getId(iW)] = WW)
+           }
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4239-L4248` → after: `L6480-L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6480-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6480-L6496) · [Before (L4239-L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4239-L4248)

```diff
-         const jB = this.drawList(BB, OB, GB, DB);
-         return QB && BB.setViewport(0, 0, YB.targetWidth, YB.targetHeight, 0, 1), jB
-       }
-       drawList(BB, OB, GB, YB) {
-         let DB = 0;
-         const QB = this.binder;
-         QB.reset();
-         for (const oB of YB) {
-           const YB = this.pipelineFor(oB, OB, GB);
-           YB && (QB.bind(BB, oB, YB, this.meshSlots.bindGroup, oB.slotOffset), oB.indexBuffer ? BB.drawIndexed(oB.count, oB.instances, oB.first, 0, 0) : BB.draw(oB.count, oB.instances, oB.first, 0), DB++)
+         LW = PW[mW.getId(AW)];
+         const iW = EW[LW];
+         if (void 0 !== LW && iW && yN(iW, AW, OW.mirror, mW)) {
+           try {
+             WW.insertBefore(iW, xW)
+           } catch (kW) {
+             console.warn(kW)
+           }
+           EW[LW] = void 0
+         } else {
+           const iW = SN(AW, OW.mirror, mW);
+           "#document" === WW.nodeName && xW && (iW.nodeType === iW.DOCUMENT_TYPE_NODE && xW.nodeType === xW.DOCUMENT_TYPE_NODE || iW.nodeType === iW.ELEMENT_NODE && xW.nodeType === xW.ELEMENT_NODE) && (WW.removeChild(xW), OW.mirror.removeNodeFromMap(xW), xW = EW[++cW]);
+           try {
+             WW.insertBefore(iW, xW || null)
+           } catch (kW) {
+             console.warn(kW)
+ ... (1 more added lines; see GitHub link above)
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4250` → after: `L6498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6498) · [Before (L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4250)

```diff
-         return DB
+         AW = NW[++tW]
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4252-L4290` → after: `L6500-L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6500-L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6500-L6508) · [Before (L4252-L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4252-L4290)

```diff
-       pipelineFor(BB, OB, GB) {
-         var YB, DB;
-         if (BB.program.failed) return null;
-         const QB = BB.inputs;
-         if (QB.pipeline && QB.pipelineTarget === GB) return QB.pipeline;
-         const oB = `${BB.pipelineKey}|${GB}`,
-           jB = this.pipelines.get(oB);
-         if (void 0 !== jB) return jB && (QB.pipeline = jB, QB.pipelineTarget = GB), jB || null;
-         this.pipelines.set(oB, null);
-         const {
-           program: yB,
-           layout: JB,
-           state: MB
-         } = BB, PB = {
-           label: `standard-${yB.id}`,
-           layout: yB.pipelineLayout,
- ... (23 more removed lines; see GitHub link above)
+       if (cW > wW) {
+         const iW = NW[ZW + 1];
+         let EW = null;
+         for (iW && (EW = OW.mirror.AmW(mW.getId(iW))); tW <= ZW; ++tW) {
+           const iW = SN(NW[tW], OW.mirror, mW);
+           try {
+             WW.insertBefore(iW, EW)
+           } catch (kW) {
+             console.warn(kW)
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4336-L4346` → after: `L6511-L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6511-L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6511-L6518) · [Before (L4336-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4336-L4346)

```diff
-         return DB >= 0 && (OB.instances = this.casterWorlds, OB.instanceCount = DB), OB.instanceCount > 0
-       }
-       async reportFailure(BB, OB, GB) {
-         const YB = [];
-         let DB = !0;
-         for (const [QB, oB] of [
-             ["vertex", BB.vertex],
-             ["fragment", BB.fragment]
-           ]) {
-           const BB = await oB.getCompilationInfo();
-           for (const OB of BB.messages) DB &&= "error" !== OB.type, YB.push(`${QB}:${OB.lineNum}:${OB.linePos} ${OB.type}: ${OB.message}`)
+       } else if (tW > ZW)
+         for (; cW <= wW; cW++) {
+           const iW = EW[cW];
+           if (iW && iW.parentNode === WW) try {
+             WW.removeChild(iW), OW.mirror.removeNodeFromMap(iW)
+           } catch (kW) {
+             console.warn(kW)
+           }
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4348-L4359` → after: `L6520-L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6520-L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6520-L6522) · [Before (L4348-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4348-L4359)

```diff
-         if (DB && !BB.packGroup) return this.pipelines.set(OB, !1), console.error(`Lite: pipeline ${OB} failed`, GB), void MO(this.device, "mesh", BB.kind, GB);
-         BB.failed || (BB.failed = !0, console.error(`Lite: program ${BB.id} failed`, GB, YB.join("\n"), {
-           program: BB.program,
-           key: BB.key
-         }), MO(this.device, "mesh", BB.kind, GB, DB ? null : YB[0]))
-       }
-     }
- 
-     function go(BB) {
-       var OB, GB;
-       const YB = null === (OB = BB.yX) || void 0 === OB || null === (GB = OB.aShaderPackItem) || void 0 === GB ? void 0 : GB.x;
-       return void 0 !== YB && 0 !== (YB & mO.h)
+       let jW = WW.firstChild,
+         UW = iW.firstChild;
+       for (; null !== jW && null !== UW;) MN(jW, UW, OW, mW), jW = jW.nextSibling, UW = UW.nextSibling
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4367-L4403` → after: `L6525-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6525-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6525-L6549) · [Before (L4367-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4367-L4403)

```diff
-     function ho(BB, OB, GB, YB, DB) {
-       const QB = GB[0].width;
-       try {
-         return DB ? function(BB, OB, GB) {
-           const YB = (0, Eo.c)(BB, GB, GB, 6);
-           for (let DB = 0; DB < 6; DB++)(0, Eo.d)(BB, YB, DB, OB[co[DB]], {
-             invertY: !1
-           });
-           return YB.texture
-         }(BB, GB, QB) : function(BB, OB, GB, YB) {
-           const DB = BB.createTexture({
-             label: "sink-cube",
-             size: {
-               width: GB,
-               height: GB,
-               depthOrArrayLayers: 6
- ... (21 more removed lines; see GitHub link above)
+     function SN(WW, iW, OW) {
+       const mW = OW.getId(WW),
+         EW = OW.getMeta(WW);
+       let NW = null;
+       if (mW > -1 && (NW = iW.AmW(mW)), null !== NW && YN(NW, WW)) return NW;
+       switch (WW.RRNodeType) {
+         case rE.Document:
+           NW = new Document;
+           break;
+         case rE.DocumentType:
+           NW = document.implementation.createDocumentType(WW.name, WW.publicId, WW.systemId);
+           break;
+         case rE.Element: {
+           let iW = WW.tagName.toLowerCase();
+           iW = kN[iW] || iW, NW = EW && "isSVG" in EW && (null == EW ? void 0 : EW.isSVG) ? document.createElementNS(UN.svg, iW) : document.createElement(WW.tagName);
+           break
+ ... (9 more added lines; see GitHub link above)
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4407-L4408` → after: `L6560-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6560-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6560-L6561) · [Before (L4407-L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4407-L4408)

```diff
-     function ao(BB) {
-       for (const OB of null !== BB && void 0 !== BB ? BB : []) null === OB || void 0 === OB || OB.close()
+     function YN(WW, iW) {
+       return WW.nodeType === iW.nodeType && (WW.nodeType !== WW.ELEMENT_NODE || WW.tagName.toUpperCase() === iW.tagName)
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4410-L4418` → after: `L6563-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6563-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6563-L6567) · [Before (L4410-L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4410-L4418)

```diff
-     async function eo(BB) {
-       const OB = [],
-         GB = [];
-       if (await Promise.all(BB.map(((BB, YB) => (OB[YB] = null, BB.then((BB => {
-           OB[YB] = BB
-         }), (BB => {
-           GB.push(BB)
-         })))))), GB.length > 0) throw ao(OB), GB[0];
-       return OB
+ 
+     function yN(WW, iW, OW, mW) {
+       const EW = OW.getId(WW),
+         NW = mW.getId(iW);
+       return -1 !== EW && EW === NW && YN(WW, iW)
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4420` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6569) · [Before (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4420)

```diff
-     class To {
+     class TN extends EN {
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4422-L4434` → after: `L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6571) · [Before (L4422-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4422-L4434)

```diff
-         this.CP = BB, this.starts = [], this.lengths = [], this.used = 0, BB > 0 && (this.starts.push(0), this.lengths.push(BB))
-       }
-       allocate(BB) {
-         const {
-           starts: OB,
-           lengths: GB
-         } = this;
-         for (let YB = 0; YB < OB.length; YB++) {
-           if (GB[YB] < BB) continue;
-           const DB = OB[YB];
-           return GB[YB] === BB ? (OB.splice(YB, 1), GB.splice(YB, 1)) : (OB[YB] += BB, GB[YB] -= BB), this.used += BB, DB
-         }
-         return -1
+         super(), cm(this, "UNSERIALIZED_STARTING_ID", -2), cm(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), cm(this, "mirror", new pN), cm(this, "scrollData", null), WW && (this.mirror = WW)
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4436-L4439` → after: `L6573-L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6573-L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6573-L6574) · [Before (L4436-L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4436-L4439)

```diff
-       free(BB, OB) {
-         this.used -= OB;
-         const GB = Math.min(BB + OB, this.CP);
-         GB > BB && this.release(BB, GB - BB)
+       get unserializedId() {
+         return this._unserializedId--
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4441-L4443` → after: `L6576-L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6576-L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6576-L6577) · [Before (L4441-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4441-L4443)

```diff
-       grow(BB) {
-         const OB = this.CP;
-         this.CP = BB, this.release(OB, BB - OB)
+       createDocument(WW, iW, OW) {
+         return new TN
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4445-L4511` → after: `L6579-L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6579-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6579-L6581) · [Before (L4445-L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4445-L4511)

```diff
-       truncate(BB) {
-         const {
-           starts: OB,
-           lengths: GB
-         } = this;
-         for (let YB = OB.length - 1; YB >= 0 && OB[YB] + GB[YB] > BB; YB--) OB[YB] >= BB ? (OB.splice(YB, 1), GB.splice(YB, 1)) : GB[YB] = BB - OB[YB];
-         this.CP = BB
-       }
-       release(BB, OB) {
-         const {
-           starts: GB,
-           lengths: YB
-         } = this;
-         let DB = 0,
-           QB = GB.length;
-         for (; DB < QB;) {
- ... (51 more removed lines; see GitHub link above)
+       createDocumentType(WW, iW, OW) {
+         const mW = new JN(WW, iW, OW);
+         return mW.ownerDocument = this, mW
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4513-L4517` → after: `L6583-L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6583-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6583-L6610) · [Before (L4513-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4513-L4517)

```diff
-       copyWords(BB, OB, GB, YB) {
-         let DB = this.sourceWords.get(OB);
-         DB || (DB = new Uint32Array(OB, 0, OB.byteLength >> 2), this.sourceWords.set(OB, DB));
-         const QB = this.words;
-         for (let oB = 0; oB < YB; oB++) QB[BB + oB] = DB[GB + oB]
+       createElement(WW) {
+         const iW = WW.toUpperCase();
+         let OW;
+         switch (iW) {
+           case "AUDIO":
+           case "VIDEO":
+             OW = new HN(iW);
+             break;
+           case "IFRAME":
+             OW = new dN(iW, this.mirror);
+             break;
+           case "CANVAS":
+             OW = new uN(iW);
+             break;
+           case "STYLE":
+             OW = new oN(iW);
+ ... (12 more added lines; see GitHub link above)
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4519-L4520` → after: `L6612-L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6612-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6612-L6614) · [Before (L4519-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4519-L4520)

```diff
-       move(BB, OB, GB) {
-         this.bytes.copyWithin(OB, BB, BB + GB), this.markDirty(OB, OB + GB)
+       createCDATASection(WW) {
+         const iW = new gN(WW);
+         return iW.ownerDocument = this, iW
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4522-L4544` → after: `L6616-L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6616-L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6616-L6618) · [Before (L4522-L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4522-L4544)

```diff
-       flush() {
-         for (const OB of this.retired) this.onReplaced(OB), OB.destroy();
-         this.retired.length = 0;
-         const BB = this.dirtyStarts.length;
-         if (BB > 0) {
-           const {
-             dirtyStarts: OB,
-             dirtyEnds: GB,
-             order: YB
-           } = this;
-           YB.length = BB;
-           for (let jB = 0; jB < BB; jB++) YB[jB] = jB;
-           BB > 1 && YB.sort(((BB, GB) => OB[BB] - OB[GB]));
-           const DB = this.mergeGap;
-           let QB = OB[YB[0]],
-             oB = GB[YB[0]];
- ... (7 more removed lines; see GitHub link above)
+       createTextNode(WW) {
+         const iW = new eN(WW);
+         return iW.ownerDocument = this, iW
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4546-L4550` → after: `L6620-L6621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6620-L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6620-L6621) · [Before (L4546-L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4546-L4550)

```diff
-       AP() {
-         this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
-         const BB = this.freed;
-         for (let OB = 0; OB < BB.length; OB += 2) this.JZ.free(BB[OB] / bo, BB[OB + 1] / bo);
-         BB.length = 0
+       destroyTree() {
+         this.firstChild = null, this.lastChild = null, this.mirror.reset()
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4552-L4557` → after: `L6623-L6624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6623-L6624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6623-L6624) · [Before (L4552-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4552-L4557)

```diff
-       send(BB, OB) {
-         this.device.queue.writeBuffer(this.gpu, BB, this.bytes.buffer, BB, OB - BB);
-         for (const GB of this.replaced) {
-           const YB = Math.min(OB, GB.size);
-           YB > BB && this.device.queue.writeBuffer(GB, BB, this.bytes.buffer, BB, YB - BB)
-         }
+       open() {
+         super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4559-L4560` → after: `L6626-L6630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6626-L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6626-L6630) · [Before (L4559-L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4559-L4560)

```diff
-       markDirty(BB, OB) {
-         BB &= -4, OB = OB + 3 & -4, this.holding ? (this.dirtyStarts.push(BB), this.dirtyEnds.push(OB)) : this.send(BB, OB)
+     }
+     const JN = NN;
+     class hN extends PN {
+       constructor() {
+         super(...arguments), cm(this, "inputData", null), cm(this, "scrollData", null)
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4562-L4568` → after: `L6632-L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6632-L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6632-L6637) · [Before (L4562-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4562-L4568)

```diff
-       grow(BB) {
-         const OB = this.JZ.CP,
-           GB = Math.max(2 * OB, BB),
-           YB = new Uint8Array(GB * bo);
-         YB.set(this.bytes);
-         const DB = this.gpu;
-         this.gpu = this.createGpu(YB.byteLength), this.bytes = YB, this.words = new Uint32Array(YB.buffer), this.JZ.grow(GB), DB && (this.replaced.push(DB), this.onReplaced(DB)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, OB * bo)
+     }
+     class HN extends LN {}
+     class nN extends cN {}
+     class uN extends hN {
+       constructor() {
+         super(...arguments), cm(this, "rr_dataURL", null), cm(this, "canvasMutations", [])
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4570-L4575` → after: `L6639-L6640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6639-L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6639-L6640) · [Before (L4570-L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4570-L4575)

```diff
-       createGpu(BB) {
-         return this.device.createBuffer({
-           label: "sink-dynamic-arena",
-           size: BB,
-           usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
-         })
+       getContext() {
+         return null
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4578-L4580` → after: `L6643-L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6643-L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6643-L6646) · [Before (L4578-L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4578-L4580)

```diff
- 
-     function Ho(BB) {
-       return Array.isArray(BB) ? new Float32Array(BB) : BB
+     class oN extends hN {
+       constructor() {
+         super(...arguments), cm(this, "rules", [])
+       }
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4582-L4588` → after: `L6648-L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6648-L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6648-L6651) · [Before (L4582-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4582-L4588)

```diff
- 
-     function vo(BB, OB, GB, YB, DB) {
-       const QB = bB(DB),
-         oB = Math.min(DB, YB.byteLength);
-       if (QB === oB && YB.byteOffset % 4 === 0) return void BB.queue.writeBuffer(OB, GB, YB.buffer, YB.byteOffset, QB);
-       const jB = new Uint8Array(QB);
-       jB.set(new Uint8Array(YB.buffer, YB.byteOffset, oB)), BB.queue.writeBuffer(OB, GB, jB)
+     class dN extends hN {
+       constructor(WW, iW) {
+         super(WW), cm(this, "contentDocument", new TN), this.contentDocument.mirror = iW
+       }
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4591-L4617` → after: `L6657-L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6657-L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6657-L6661) · [Before (L4591-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4591-L4617)

```diff
-     function so(BB, OB, GB) {
-       const YB = "linear",
-         DB = "nearest";
-       let QB = DB,
-         oB = DB,
-         jB = "nearest",
-         yB = !OB;
-       switch (BB) {
-         case 11:
-           QB = YB, oB = YB;
-           break;
-         case 3:
-           QB = YB, oB = YB, jB = OB ? "linear" : "nearest";
-           break;
-         case 8:
-           jB = OB ? "linear" : "nearest";
- ... (11 more removed lines; see GitHub link above)
+     function DN(WW, iW, OW, mW) {
+       let EW;
+       switch (WW.nodeType) {
+         case jN.DOCUMENT_NODE:
+           mW && "IFRAME" === mW.nodeName ? EW = mW.contentDocument : (EW = iW, EW.compatMode = WW.compatMode);
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4619-L4620` → after: `L6663-L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6663-L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6663-L6682) · [Before (L4619-L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4619-L4620)

```diff
-         case 9:
-           QB = YB;
+         case jN.DOCUMENT_TYPE_NODE: {
+           const OW = WW;
+           EW = iW.createDocumentType(OW.name, OW.publicId, OW.systemId);
+           break
+         }
+         case jN.ELEMENT_NODE: {
+           const OW = WW,
+             mW = (NW = OW) instanceof HTMLFormElement ? "FORM" : NW.tagName.toUpperCase();
+           EW = iW.createElement(mW);
+           const PW = EW;
+           for (const {
+               name: WW,
+               value: iW
+             }
+             of Array.from(OW.attributes)) PW.attributes[WW] = iW;
+           OW.scrollLeft && (PW.scrollLeft = OW.scrollLeft), OW.scrollTop && (PW.scrollTop = OW.scrollTop);
+ ... (4 more added lines; see GitHub link above)
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4622-L4623` → after: `L6684-L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6684-L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6684-L6685) · [Before (L4622-L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4622-L4623)

```diff
-         case 10:
-           QB = YB, jB = OB ? "linear" : "nearest";
+         case jN.CDATA_SECTION_NODE:
+           EW = iW.createCDATASection(WW.data);
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4625-L4626` → after: `L6687-L6688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6687-L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6687-L6688) · [Before (L4625-L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4625-L4626)

```diff
-         case 2:
-           QB = YB, oB = YB, GB > 1 ? (jB = "linear", yB = !1) : yB = !0;
+         case jN.COMMENT_NODE:
+           EW = iW.createComment(WW.textContent || "");
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4628-L4629` → after: `L6690-L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6690-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6690-L6693) · [Before (L4628-L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4628-L4629)

```diff
-         case 12:
-           QB = YB, yB = !0;
+         case jN.DOCUMENT_FRAGMENT_NODE:
+           EW = mW.attachShadow({
+             mode: "open"
+           });
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4632-L4646` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6696) · [Before (L4632-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4632-L4646)

```diff
-           yB = !0
-       }
-       return GB > 1 && !yB ? {
-         magFilter: YB,
-         minFilter: YB,
-         mipmapFilter: "linear",
-         maxAnisotropy: GB
-       } : {
-         magFilter: QB,
-         minFilter: oB,
-         mipmapFilter: jB,
-         ...yB ? {
-           lodMinClamp: 0,
-           lodMaxClamp: 0
-         } : {}
+           return null
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4651` → after: `L6706-L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6706-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6706-L6715) · [Before (L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4651)

```diff
-       return 0 === BB ? "clamp-to-edge" : 2 === BB ? "mirror-repeat" : "repeat"
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Zm,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TN;
+       return function WW(mW, EW) {
+         const NW = DN(mW, OW, iW, EW);
+         if (null !== NW)
+           if ("IFRAME" !== (null == EW ? void 0 : EW.nodeName) && mW.nodeType !== jN.DOCUMENT_FRAGMENT_NODE && (null == EW || EW.appendChild(NW), NW.parentNode = EW, NW.parentElement = EW), "IFRAME" === mW.nodeName) {
+             const iW = mW.contentDocument;
+             iW && WW(iW, NW)
+           } else mW.nodeType !== jN.DOCUMENT_NODE && mW.nodeType !== jN.ELEMENT_NODE && mW.nodeType !== jN.DOCUMENT_FRAGMENT_NODE || (mW.nodeType === jN.ELEMENT_NODE && mW.shadowRoot && WW(mW.shadowRoot, NW), mW.childNodes.forEach((iW => WW(iW, NW))))
+       }(WW, null), OW
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4654-L4673` → after: `L6718-L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6718-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6718-L6719) · [Before (L4654-L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4654-L4673)

```diff
-       constructor(BB, OB) {
-         let {
-           vertexArena: GB = !0
-         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         this.engine = BB, this.device = OB, this.buffers = new WeakMap, this.lBB = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet,  … [truncated]
-       }
-       createArena() {
-         return new Co(this.device, (BB => {
-           var OB;
-           null === (OB = this.onDestroy) || void 0 === OB || OB.call(this, BB), this.gpuBuffersVersion++
-         }))
-       }
-       rebind(BB, OB) {
-         this.engine = BB, this.device = OB, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
-         for (const GB of this.liveUploads) GB.rebind();
-         for (const GB of this.rebindWaiters.splice(0)) GB()
- ... (4 more removed lines; see GitHub link above)
+       constructor() {
+         cm(this, "idNodeMap", new Map), cm(this, "nodeMetaMap", new WeakMap)
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4675` → after: `L6721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6721) · [Before (L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4675)

```diff
-       endUploadFrame() {
+       getId(WW) {
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4677-L4709` → after: `L6723-L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6723-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6723-L6724) · [Before (L4677-L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4677-L4709)

```diff
-         null === (BB = this.arena) || void 0 === BB || BB.AP()
-       }
-       vertexBufferCreated(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GB ? "sink-dynamic-vertices" : "sink-vertices";
-         this.bufferDeleted(BB);
-         const DB = Ho(OB);
-         BB.CP = DB.byteLength, this.buffers.set(BB, {
-           gpu: null,
-           slot: -1,
-           slotBytes: 0,
-           size: 0,
-           arena: GB && null !== this.arena,
-           pending: DB,
-           ownsPending: !1,
-           usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
-           label: YB
- ... (17 more removed lines; see GitHub link above)
+         if (!WW) return -1;
+         return (null == (iW = this.getMeta(WW)) ? void 0 : iW.id) ?? -1
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4711-L4730` → after: `L6726-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6726-L6727) · [Before (L4711-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4711-L4730)

```diff
-       indexBufferCreated(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
-         this.bufferDeleted(BB);
-         const YB = function(BB) {
-           if (BB instanceof Uint16Array || BB instanceof Uint32Array) return BB;
-           for (let OB = 0; OB < BB.length; OB++)
-             if (BB[OB] >= 65535) return new Uint32Array(BB);
-           return new Uint16Array(BB)
-         }(OB);
-         BB.is32Bits = 4 === YB.BYTES_PER_ELEMENT, BB.CP = YB.byteLength, this.buffers.set(BB, {
-           gpu: null,
-           slot: -1,
-           slotBytes: 0,
-           size: 0,
-           arena: !1,
-           pending: YB,
- ... (4 more removed lines; see GitHub link above)
+       AmW(WW) {
+         return this.idNodeMap.get(WW) || null
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4732-L4759` → after: `L6729-L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6729-L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6729-L6730) · [Before (L4732-L4759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4732-L4759)

```diff
-       bufferDeleted(BB) {
-         const OB = this.buffers.get(BB);
-         null !== OB && void 0 !== OB && OB.gpu ? (this.destroyBuffer(OB.gpu), this.gpuBuffersVersion++) : OB && OB.slot >= 0 && (this.arena.free(OB.slot, OB.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(BB)
-       }
-       update(BB, OB, GB, YB) {
-         if (BB.slot >= 0) this.updateSlot(BB, OB, GB, YB);
-         else if (BB.gpu) {
-           if (GB + bB(YB) > BB.gpu.size) {
-             const OB = this.device.createBuffer({
-                 label: BB.label,
-                 size: bB(Math.max(2 * BB.gpu.size, GB + YB)),
-                 usage: BB.usage | GPUBufferUsage.COPY_SRC
-               }),
-               DB = this.device.createCommandEncoder();
-             DB.copyBufferToBuffer(BB.gpu, 0, OB, 0, BB.gpu.size), this.device.queue.submit([DB.finish()]), this.destroyBuffer(BB.gpu), this.gpuBuffersVersion++, BB.gpu = OB
-           }
- ... (12 more removed lines; see GitHub link above)
+       getIds() {
+         return Array.from(this.idNodeMap.keys())
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4761-L4763` → after: `L6732-L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6732-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6732-L6733) · [Before (L4761-L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4761-L4763)

```diff
-       updateSlot(BB, OB, GB, YB) {
-         const DB = this.arena;
-         GB + bB(YB) > BB.size && (BB.size = bB(Math.max(2 * BB.size, GB + YB)), DB.growTo(BB.slot + BB.size), this.gpuBuffersVersion++), 0 === YB ? this.writeSlot(BB, GB, Oj, 0, 4, !1) : this.writeSlot(BB, GB, OB, OB.byteOffset, YB, !0)
+       getMeta(WW) {
+         return this.nodeMetaMap.get(WW) || null
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4765-L4767` → after: `L6735-L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6735-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6735-L6737) · [Before (L4765-L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4765-L4767)

```diff
-       writeSlot(BB, OB, GB, YB, DB, QB) {
-         const oB = OB + (QB ? bB(DB) : DB);
-         oB > BB.slotBytes && this.moveSlot(BB, oB), this.arena.write(BB.slot + OB, GB, YB, DB, QB)
+       removeNodeFromMap(WW) {
+         const iW = this.getId(WW);
+         this.idNodeMap.delete(iW), WW.childNodes && WW.childNodes.forEach((WW => this.removeNodeFromMap(WW)))
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4769-L4773` → after: `L6739-L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6739-L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6739-L6740) · [Before (L4769-L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4769-L4773)

```diff
-       moveSlot(BB, OB) {
-         const GB = this.arena,
-           YB = Co.slotBytes(Math.max(OB, Math.min(2 * BB.slotBytes, BB.size))),
-           DB = GB.allocate(YB, null, BB.size);
-         GB.move(BB.slot, DB, BB.slotBytes), GB.free(BB.slot, BB.slotBytes), BB.slot = DB, BB.slotBytes = YB, this.gpuBuffersVersion++
+       has(WW) {
+         return this.idNodeMap.has(WW)
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4775-L4779` → after: `L6742-L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6742-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6742-L6743) · [Before (L4775-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4775-L4779)

```diff
-       cover(BB, OB) {
-         const GB = this.buffers.get(BB);
-         if (!GB || GB.slot < 0) return !1;
-         const YB = Math.min(OB, GB.size);
-         return !(YB <= GB.slotBytes) && (this.moveSlot(GB, YB), !0)
+       hasNode(WW) {
+         return this.nodeMetaMap.has(WW)
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4781-L4783` → after: `L6745-L6747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6745-L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6745-L6747) · [Before (L4781-L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4781-L4783)

```diff
-       destroyBuffer(BB) {
-         var OB;
-         null === (OB = this.onDestroy) || void 0 === OB || OB.call(this, BB), BB.destroy()
+       add(WW, iW) {
+         const OW = iW.id;
+         this.idNodeMap.set(OW, WW), this.nodeMetaMap.set(WW, iW)
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4785-L4814` → after: `L6749-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6749-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6749-L6753) · [Before (L4785-L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4785-L4814)

```diff
-       gpuBuffer(BB) {
-         const OB = this.buffers.get(BB);
-         if (!OB) return null;
-         if (OB.slot >= 0) return this.arena.buffer;
-         if (OB.arena && OB.pending) {
-           const BB = OB.pending,
-             GB = this.arena;
-           return OB.size = bB(BB.byteLength), OB.slotBytes = Co.slotBytes(function(BB) {
-             const OB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength);
-             let GB = OB.length;
-             if (BB.byteOffset % 4 === 0) {
-               for (; GB % 4 !== 0 && 0 === OB[GB - 1];) GB--;
-               if (GB % 4 === 0) {
-                 const OB = new Uint32Array(BB.buffer, BB.byteOffset, GB / 4);
-                 let YB = OB.length;
-                 for (; YB > 0 && 0 === OB[YB - 1];) YB--;
- ... (14 more removed lines; see GitHub link above)
+       replace(WW, iW) {
+         const OW = this.AmW(WW);
+         if (OW) {
+           const WW = this.nodeMetaMap.get(OW);
+           WW && this.nodeMetaMap.set(iW, WW)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4816-L4826` → after: `L6755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6755) · [Before (L4816-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4816-L4826)

```diff
-         return OB.gpu
-       }
-       gpuOffset(BB) {
-         var OB, GB;
-         const YB = null !== (OB = null === (GB = this.buffers.get(BB)) || void 0 === GB ? void 0 : GB.slot) && void 0 !== OB ? OB : -1;
-         return YB < 0 ? 0 : YB
-       }
-       gpuEnd(BB) {
-         var OB, GB;
-         const YB = this.buffers.get(BB);
-         return YB ? YB.slot >= 0 ? YB.slot + YB.size : null !== (OB = null === (GB = YB.gpu) || void 0 === GB ? void 0 : GB.size) && void 0 !== OB ? OB : 0 : 0
+         this.idNodeMap.set(WW, iW)
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4828-L4830` → after: `L6757-L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6757-L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6757-L6758) · [Before (L4828-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4828-L4830)

```diff
-       vertexInput(BB, OB, GB) {
-         var YB, DB, QB, oB;
-         return null !== (YB = null !== (DB = GB && this.modelInput(GB, OB)) && void 0 !== DB ? DB : null === (QB = null !== (oB = this.lBB.get(BB)) && void 0 !== oB ? oB : this.batchUploads.get(BB)) || void 0 === QB ? void 0 : QB.inputs[OB]) && void 0 !== YB ? YB : null
+       reset() {
+         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4832-L4837` → after: `L6760-L6776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6760-L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6760-L6776) · [Before (L4832-L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4832-L4837)

```diff
-       modelInput(BB, OB) {
-         const GB = this.geometrySlot(BB);
-         let YB = GB.inputs.get(OB);
-         if (void 0 === YB) {
-           const DB = BB.vertexAttributes.find((BB => BB.kind === OB));
-           YB = DB ? new pO(this.modelKey(GB, DB.data, !1), DB.offset, DB.stride, DB.components, !1, DB.glType, DB.isNormalized) : null, GB.inputs.set(OB, YB)
+     }
+ 
+     function fN(WW, iW) {
+       switch (WW.RRNodeType) {
+         case rE.Document:
+           return {
+             id: iW, type: WW.RRNodeType, childNodes: []
+           };
+         case rE.DocumentType: {
+           const OW = WW;
+           return {
+             id: iW,
+             type: WW.RRNodeType,
+             name: OW.name,
+             publicId: OW.publicId,
+             systemId: OW.systemId
+ ... (1 more added lines; see GitHub link above)
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4839-L4842` → after: `L6778-L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6778-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6778-L6790) · [Before (L4839-L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4839-L4842)

```diff
-         return YB
-       }
-       modelIndex(BB) {
-         return BB.indexData && this.modelKey(this.geometrySlot(BB), BB.indexData, !0)
+         case rE.Element:
+           return {
+             id: iW, type: WW.RRNodeType, tagName: WW.tagName.toLowerCase(), attributes: {}, childNodes: []
+           };
+         case rE.Text:
+         case rE.Comment:
+           return {
+             id: iW, type: WW.RRNodeType, textContent: WW.textContent || ""
+           };
+         case rE.CDATA:
+           return {
+             id: iW, type: WW.RRNodeType, textContent: ""
+           }
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4844-L4863` → after: `L6792-L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6792-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6792-L6832) · [Before (L4844-L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4844-L4863)

```diff
-       geometrySlot(BB) {
-         var OB;
-         let GB = BB.gpu[dB.f.lite];
-         if ((null === (OB = GB) || void 0 === OB ? void 0 : OB.epoch) !== this.epoch) {
-           const OB = new Map,
-             YB = () => {
-               for (const BB of OB.values()) this.bufferDeleted(BB)
-             },
-             DB = BB => {
-               const GB = OB.get(BB);
-               GB && this.vertexBufferUpdated(GB, BB)
-             };
-           GB = {
-             keys: OB,
-             inputs: new Map,
-             release: YB,
- ... (4 more removed lines; see GitHub link above)
+     }
+     const CN = {
+         Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
+         ShadowRoot: ["host", "styleSheets"],
+         Element: ["shadowRoot", "querySelector", "querySelectorAll"],
+         MutationObserver: []
+       },
+       XN = {
+         Node: ["contains", "getRootNode"],
+         ShadowRoot: ["getSelection"],
+         Element: [],
+         MutationObserver: ["constructor"]
+       },
+       BN = {},
+       qN = {};
+ 
+ ... (25 more added lines; see GitHub link above)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4866-L4878` → after: `L6835-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6835-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6835-L6871) · [Before (L4866-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4866-L4878)

```diff
-       modelKey(BB, OB, GB) {
-         let YB = BB.keys.get(OB);
-         if (!YB) {
-           if (GB) {
-             const BB = {
-               CP: 0,
-               is32Bits: !1
-             };
-             this.indexBufferCreated(BB, OB, "model-indices"), YB = BB
-           } else YB = {
-             CP: 0
-           }, this.vertexBufferCreated(YB, OB, !1, "model-vertices");
-           BB.keys.set(OB, YB)
+     }
+     const GN = {};
+ 
+     function IN(WW, iW, OW) {
+       var mW, EW;
+       const NW = null == (mW = GN[WW]) ? void 0 : mW[OW];
+       if (NW) return NW.call(iW);
+       const PW = RN(WW),
+         LW = null == (EW = Object.getOwnPropertyDescriptor(PW, OW)) ? void 0 : EW.get;
+       return LW ? ((GN[WW] || (GN[WW] = {}))[OW] = LW, LW.call(iW)) : iW[OW]
+     }
+     const aN = {};
+ 
+     function rN(WW, iW, OW) {
+       const mW = `${WW}.${String(OW)}`;
+       if (aN[mW]) return aN[mW].bind(iW);
+ ... (21 more added lines; see GitHub link above)
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4880` → after: `L6873-L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6873-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6873-L6874) · [Before (L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4880)

```diff
-         return YB
+       } catch {
+         return () => {}
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4882-L4883` → after: `L6876-L6950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6876-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6876-L6950) · [Before (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4882-L4883)

```diff
-       indexFormat(BB) {
-         return BB.is32Bits ? "uint32" : "uint16"
+     }
+     /[1-9][0-9]{12}/.test(Date.now().toString()) || (FN = () => (new Date).getTime());
+     const WP = {
+       ownerDocument: function(WW) {
+         return IN("Node", WW, "ownerDocument")
+       },
+       childNodes: function(WW) {
+         return IN("Node", WW, "childNodes")
+       },
+       parentNode: function(WW) {
+         return IN("Node", WW, "parentNode")
+       },
+       parentElement: function(WW) {
+         return IN("Node", WW, "parentElement")
+       },
+       textContent: function(WW) {
+ ... (59 more added lines; see GitHub link above)
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4885-L4886` → after: `L6952-L6966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6952-L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6952-L6966) · [Before (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4885-L4886)

```diff
-       get texturesLoading() {
-         return this.pending
+     };
+ 
+     function EP(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
+         mW = null,
+         EW = 0;
+       return function() {
+         for (var NW = arguments.length, PW = new Array(NW), LW = 0; LW < NW; LW++) PW[LW] = arguments[LW];
+         const cW = Date.now();
+         EW || !1 !== OW.leading || (EW = cW);
+         const wW = iW - (cW - EW),
+           tW = this;
+         wW <= 0 || wW > iW ? (mW && (clearTimeout(mW), mW = null), EW = cW, WW.apply(tW, PW)) : mW || !1 === OW.trailing || (mW = setTimeout((() => {
+           EW = !1 === OW.leading ? 0 : Date.now(), mW = null, WW.apply(tW, PW)
+         }), wW))
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4888-L4889` → after: `L6968-L6987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6968-L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6968-L6987) · [Before (L4888-L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4888-L4889)

```diff
-       releaseSlot(BB, OB) {
-         --BB.refs > 0 || (this.releaseTexture(BB), ao(BB.images), null !== OB && this.textures.delete(OB))
+     }
+ 
+     function NP(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
+       const NW = EW.Object.getOwnPropertyDescriptor(WW, iW);
+       return EW.Object.defineProperty(WW, iW, mW ? OW : {
+         set(WW) {
+           setTimeout((() => {
+             OW.set.call(this, WW)
+           }), 0), NW && NW.set && NW.set.call(this, WW)
+         }
+       }), () => NP(WW, iW, NW || {}, !0)
+     }
+ 
+     function PP(WW) {
+       var iW, OW, mW, EW;
+ ... (4 more added lines; see GitHub link above)
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4891-L4919` → after: `L6989-L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6989-L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L6989-L7016) · [Before (L4891-L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4891-L4919)

```diff
-       load(BB, OB) {
-         const {
-           epoch: GB
-         } = this, YB = OB.decoded = async function(BB) {
-           if ("cube" === BB.kind) return async function(BB) {
-             if (6 !== BB.length) throw new Error(`${BB.length} files where six faces were expected`);
-             const OB = await eo(BB.map((BB => tB(BB)))),
-               GB = OB[0].width;
-             return eo(OB.map((async BB => {
-               if (BB.width === GB && BB.height === GB) return BB;
-               try {
-                 return await createImageBitmap(BB, {
-                   ...sB,
-                   resizeWidth: GB,
-                   resizeHeight: GB
-                 })
- ... (13 more removed lines; see GitHub link above)
+     }
+ 
+     function LP() {
+       return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
+     }
+ 
+     function cP() {
+       return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
+     }
+ 
+     function wP(WW) {
+       if (!WW) return null;
+       return WW.nodeType === WW.ELEMENT_NODE ? WW : WP.parentElement(WW)
+     }
+ 
+     function tP(WW, iW, OW, mW) {
+ ... (12 more added lines; see GitHub link above)
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4921-L4930` → after: `L7018-L7057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7018-L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7018-L7057) · [Before (L4921-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4921-L4930)

```diff
-       canvasUpdated(BB, OB, GB) {
-         const {
-           state: YB
-         } = this.textureSlot(BB);
-         YB.dynamicSource = {
-           invertY: OB,
-           premultiplied: GB
-         }, YB.dynamic && this.pushDynamic(BB.source, YB)
-       }
-       async atlasArrays(BB) {
+       return !1
+     }
+ 
+     function ZP(WW, iW) {
+       return -1 !== iW.getId(WW)
+     }
+ 
+     function xP(WW, iW, OW) {
+       return !("TITLE" !== WW.tagName || !OW.headTitleMutations) || -2 === iW.getId(WW)
+     }
+ 
+     function lP(WW, iW) {
+       if (KW(WW)) return !1;
+       const OW = iW.getId(WW);
+       if (!iW.has(OW)) return !0;
+       const mW = WP.parentNode(WW);
+ ... (24 more added lines; see GitHub link above)
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4932-L4943` → after: `L7059-L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7059-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7059-L7069) · [Before (L4932-L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4932-L4943)

```diff
-           device: OB,
-           epoch: GB
-         } = this;
-         let YB;
-         try {
-           YB = await OO(OB, BB)
-         } catch (QB) {
-           if (GB === this.epoch) {
-             if (!JO(OB)) throw QB;
-             await new Promise((BB => {
-               this.rebindWaiters.push(BB)
-             }))
+           nextId: WW,
+           parentId: NW
+         } = EW;
+         if (WW && WW in iW) {
+           const NW = iW[WW];
+           if (NW.parent) {
+             const WW = NW.parent.children.indexOf(NW);
+             NW.parent.children.splice(WW, 0, OW(EW, NW.parent))
+           } else {
+             const WW = mW.indexOf(NW);
+             mW.splice(WW, 0, OW(EW, null))
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4945-L4967` → after: `L7071-L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7071-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7071-L7126) · [Before (L4945-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4945-L4967)

```diff
-           return this.atlasArrays(BB)
-         }
-         if (YB.forEach(((OB, GB) => {
-             this.atlasSources.has(OB) || this.atlasSources.set(OB, {
-               sources: BB,
-               index: GB,
-               stride: YB[0].layers
-             })
-           })), GB !== this.epoch) return YB;
-         const DB = (0, ro.c)(this.engine, {
-           magFilter: "nearest",
-           minFilter: "nearest",
-           mipmapFilter: "linear",
-           addressModeU: "repeat",
-           addressModeV: "repeat"
-         });
- ... (7 more removed lines; see GitHub link above)
+         } else if (NW in iW) {
+           const WW = iW[NW];
+           WW.children.push(OW(EW, WW))
+         } else mW.push(OW(EW, null))
+       }
+       return mW
+     }
+ 
+     function UP(WW, iW) {
+       iW(WW.value);
+       for (let OW = WW.children.length - 1; OW >= 0; OW--) UP(WW.children[OW], iW)
+     }
+ 
+     function kP(WW, iW) {
+       return Boolean("IFRAME" === WW.nodeName && iW.getMeta(WW))
+     }
+ ... (40 more added lines; see GitHub link above)
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4969-L5003` → after: `L7128-L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7128-L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7128-L7135) · [Before (L4969-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4969-L5003)

```diff
-       boundTexture(BB) {
-         const OB = this.atlasBindings.get(BB);
-         if (OB) return OB;
-         const GB = this.atlasSources.get(BB);
-         if (GB) return this.rebuildAtlas(BB, GB), null;
-         const YB = BB;
-         if (YB.released) return null;
-         const DB = this.textureSlot(YB, !0),
-           {
-             state: QB
-           } = DB;
-         if (!QB.view && (QB.wanted = !0, QB.loading || QB.failed || this.upload(YB, QB), !QB.view)) return null;
-         const oB = this.chosenSampler(YB, DB),
-           jB = DB.bound;
-         return jB && jB.view === QB.view && jB.sampler === oB ? jB : (DB.bound = {
-           view: QB.view,
- ... (19 more removed lines; see GitHub link above)
+     }
+ 
+     function yP(WW) {
+       const iW = new Set,
+         OW = [];
+       for (let mW = WW.length; mW--;) {
+         const EW = WW[mW];
+         iW.has(EW.id) || (OW.push(EW), iW.add(EW.id))
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5005-L5007` → after: `L7137-L7144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7137-L7144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7137-L7144) · [Before (L5005-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5005-L5007)

```diff
-       textureLoaded(BB) {
-         var OB, GB;
-         return null !== (OB = null === (GB = this.heldSlot(BB)) || void 0 === GB ? void 0 : GB.state.decoded) && void 0 !== OB ? OB : null
+       return OW
+     }
+     "undefined" !== typeof window && window.Proxy && window.Reflect && (mP = new Proxy(mP, {
+       get: (WW, iW, OW) => ("map" === iW && console.error(OP), Reflect.get(WW, iW, OW))
+     }));
+     class TP {
+       constructor() {
+         NW(this, "id", 1), NW(this, "styleIDMap", new WeakMap), NW(this, "idStyleMap", new Map)
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5009-L5011` → after: `L7146-L7147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7146-L7147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7146-L7147) · [Before (L5009-L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5009-L5011)

```diff
-       textureFailed(BB) {
-         var OB;
-         return !0 === (null === (OB = this.heldSlot(BB)) || void 0 === OB ? void 0 : OB.state.failed)
+       getId(WW) {
+         return this.styleIDMap.get(WW) ?? -1
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5013-L5015` → after: `L7149-L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7149-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7149-L7150) · [Before (L5013-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5013-L5015)

```diff
-       heldSlot(BB) {
-         const OB = BB.gpu[dB.f.lite];
-         return (null === OB || void 0 === OB ? void 0 : OB.epoch) === this.epoch ? OB : void 0
+       has(WW) {
+         return this.styleIDMap.has(WW)
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5017-L5038` → after: `L7152-L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7152-L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7152-L7155) · [Before (L5017-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5017-L5038)

```diff
-       chosenSampler(BB, OB) {
-         const {
-           samplingMode: GB,
-           wrapU: YB,
-           wrapV: DB
-         } = BB.sampler, QB = OB.state.hasMips, oB = function(BB, OB) {
-           const {
-             bilinear: GB,
-             trilinear: YB
-           } = dB.g;
-           return !OB && BB !== GB || 11 !== BB && BB !== YB && BB !== GB ? 1 : 4
-         }(GB, QB), jB = OB.sampler;
-         if (jB && jB.samplingMode === GB && jB.hasMips === QB && jB.anisotropy === oB && jB.wrapU === YB && jB.wrapV === DB) return jB.sampler;
-         const yB = this.samplerFor(GB, QB, oB, YB, DB);
-         return OB.sampler = {
-           samplingMode: GB,
- ... (6 more removed lines; see GitHub link above)
+       add(WW, iW) {
+         if (this.has(WW)) return this.getId(WW);
+         let OW;
+         return OW = void 0 === iW ? this.id++ : iW, this.styleIDMap.set(WW, OW), this.idStyleMap.set(OW, WW), OW
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5040-L5043` → after: `L7157-L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7157-L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7157-L7158) · [Before (L5040-L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5040-L5043)

```diff
-       releaseTexture(BB) {
-         var OB, GB;
-         BB.view && (null === (GB = this.onDestroy) || void 0 === GB || GB.call(this, BB.view));
-         null === (OB = BB.destroy) || void 0 === OB || OB.call(BB)
+       getStyle(WW) {
+         return this.idStyleMap.get(WW) || null
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5045-L5085` → after: `L7160-L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7160-L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7160-L7161) · [Before (L5045-L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5045-L5085)

```diff
-       textureSlot(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const GB = BB.gpu[dB.f.lite];
-         if ((null === GB || void 0 === GB ? void 0 : GB.epoch) === this.epoch) return GB;
-         const YB = function(BB) {
-           let {
-             source: OB,
-             sampler: GB
-           } = BB;
-           return "canvas" === OB.kind ? null : `${OB.kind}|${Bj(OB)}|${GB.noMipmap}|${GB.samplingMode}|${GB.invertY}`
-         }(BB);
-         let DB = null === YB ? void 0 : this.textures.get(YB);
-         var QB;
-         DB || (DB = {
-           refs: 0,
-           view: null,
- ... (25 more removed lines; see GitHub link above)
+       reset() {
+         this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5087-L5090` → after: `L7163-L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7163-L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7163-L7290) · [Before (L5087-L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5087-L5090)

```diff
-       samplerFor(BB, OB, GB, YB, DB) {
-         const QB = `${BB}|${OB}|${GB}|${YB}|${DB}`;
-         let oB = this.samplers.get(QB);
-         if (!oB) {
+       generateId() {
+         return this.id++
+       }
+     }
+ 
+     function JP(WW) {
+       var iW;
+       let OW = null;
+       return "getRootNode" in WW && (null == (iW = WP.getRootNode(WW)) ? void 0 : iW.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && WP.host(WP.getRootNode(WW)) && (OW = WP.host(WP.getRootNode(WW))), OW
+     }
+ 
+     function hP(WW) {
+       let iW, OW = WW;
+       for (; iW = JP(OW);) OW = iW;
+       return OW
+     }
+ ... (112 more added lines; see GitHub link above)
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5092-L5094` → after: `L7292-L7315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7292-L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7292-L7315) · [Before (L5092-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5092-L5094)

```diff
-             ...so(BB, OB, GB),
-             addressModeU: xo(YB),
-             addressModeV: xo(DB)
+             texts: this.texts.map((WW => {
+               const iW = WW.node,
+                 OW = WP.parentNode(iW);
+               return OW && "TEXTAREA" === OW.tagName && this.genTextAreaValueMutation(OW), {
+                 id: this.mirror.getId(iW),
+                 value: WW.value
+               }
+             })).filter((WW => !iW.has(WW.id))).filter((WW => this.mirror.has(WW.id))),
+             attributes: this.attributes.map((WW => {
+               const {
+                 attributes: iW
+               } = WW;
+               if ("string" === typeof iW.style) {
+                 const OW = JSON.stringify(WW.styleDiff),
+                   mW = JSON.stringify(WW._unchangedStyles);
+                 OW.length < iW.style.length && (OW + mW).split("var(").length === iW.style.split("var(").length && (iW.style = WW.styleDiff)
+ ... (8 more added lines; see GitHub link above)
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5096-L5098` → after: `L7317-L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7317-L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7317-L7421) · [Before (L5096-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5096-L5098)

```diff
-           oB = (0, ro.c)(this.engine, jB), this.samplers.set(QB, oB)
-         }
-         return oB
+           (tW.texts.length || tW.attributes.length || tW.removes.length || tW.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTr … [truncated]
+         })), NW(this, "genTextAreaValueMutation", (WW => {
+           let iW = this.attributeMap.get(WW);
+           iW || (iW = {
+             node: WW,
+             attributes: {},
+             styleDiff: {},
+             _unchangedStyles: {}
+           }, this.attributes.push(iW), this.attributeMap.set(WW, iW));
+           const OW = Array.from(WP.childNodes(WW), (WW => WP.textContent(WW) || "")).join("");
+           iW.attributes.value = hW({
+             element: WW,
+             maskInputOptions: this.maskInputOptions,
+             tagName: WW.tagName,
+             type: uW(WW),
+             value: OW,
+ ... (89 more added lines; see GitHub link above)
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5100-L5105` → after: `L7423-L7426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7423-L7426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7423-L7426) · [Before (L5100-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5100-L5105)

```diff
-       upload(BB, OB) {
-         const {
-           source: GB,
-           sampler: YB
-         } = BB;
-         OB.hasMips = !YB.noMipmap, "canvas" === GB.kind ? this.createDynamic(GB, OB) : "cube" === GB.kind ? this.uploadCube(OB, GB.luminance) : this.uploadImage(OB, !0 === YB.invertY, GB.url)
+       init(WW) {
+         ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", … [truncated]
+           this[iW] = WW[iW]
+         }))
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5107-L5119` → after: `L7428-L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7428-L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7428-L7429) · [Before (L5107-L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5107-L5119)

```diff
-       uploadImage(BB, OB, GB) {
-         const [YB] = BB.images;
-         BB.images = null;
-         const {
-           epoch: DB
-         } = this, QB = (0, Xo.e)(this.engine, YB, {
-           mipMaps: BB.hasMips,
-           invertY: OB,
-           srgb: !1
-         }).then((OB => {
-           YB.close(), 0 !== BB.refs && DB === this.epoch ? (BB.view = OB.view, BB.destroy = OB.texture.destroy.bind(OB.texture)) : OB.texture.destroy()
-         }));
-         this.track(BB, GB, QB)
+       freeze() {
+         this.frozen = !0, this.canvasManager.freeze()
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5121-L5129` → after: `L7431-L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7431-L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7431-L7432) · [Before (L5121-L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5121-L5129)

```diff
-       track(BB, OB, GB, YB) {
-         const {
-           epoch: DB
-         } = this;
-         BB.loading = !0, this.pending++, GB.catch((GB => {
-           DB === this.epoch && (BB.failed = !0, console.warn(`Lite: could not load texture ${xB(OB)}`, GB))
-         })).finally((() => {
-           DB === this.epoch && (BB.loading = !1, this.pending--, null === YB || void 0 === YB || YB())
-         }))
+       unfreeze() {
+         this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5131-L5139` → after: `L7434-L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7434-L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7434-L7435) · [Before (L5131-L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5131-L5139)

```diff
-       uploadCube(BB, OB) {
-         const GB = BB.images;
-         BB.images = null;
-         const YB = ho(this.engine, this.device, GB, (0, dB.u)(OB), BB.hasMips);
-         BB.view = YB.createView({
-           dimension: "cube"
-         }), BB.destroy = () => {
-           YB.destroy()
-         }
+       isFrozen() {
+         return this.frozen
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5141-L5150` → after: `L7437-L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7437-L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7437-L7438) · [Before (L5141-L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5141-L5150)

```diff
-       createDynamic(BB, OB) {
-         const {
-           canvas: GB
-         } = BB, YB = (0, wo.e)(this.engine, Math.max(1, GB.width), Math.max(1, GB.height), {
-           mipMaps: OB.hasMips,
-           srgb: !1
-         });
-         OB.dynamic = YB, OB.view = YB.view, OB.destroy = () => {
-           YB.texture.destroy()
-         }, this.pushDynamic(BB, OB)
+       lock() {
+         this.locked = !0, this.canvasManager.lock()
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5152-L5161` → after: `L7440-L7444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7440-L7444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7440-L7444) · [Before (L5152-L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5152-L5161)

```diff
-       pushDynamic(BB, OB) {
-         const GB = OB.dynamicSource,
-           YB = OB.dynamic,
-           {
-             canvas: DB
-           } = BB;
-         if (GB && YB && 0 !== DB.width && 0 !== DB.height) return DB.width !== YB.width || DB.height !== YB.height ? (this.releaseTexture(OB), OB.dynamic = null, OB.view = null, void this.createDynamic(BB, OB)) : void(0, wo.i)(this.engine, YB, DB, {
-           invertY: GB.invertY,
-           premultiplyAlpha: GB.premultiplied
-         })
+       unlock() {
+         this.locked = !1, this.canvasManager.unlock(), this.emit()
+       }
+       reset() {
+         this.shadowDomManager.reset(), this.canvasManager.reset()
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5166` → after: `L7566-L7591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7566-L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7566-L7591) · [Before (L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5166)

```diff
-       return "cube" === BB.kind ? BB.rootUrl : "canvas" === BB.kind ? "canvas" : BB.url
+       let {
+         scrollCb: iW,
+         doc: OW,
+         mirror: mW,
+         blockClass: EW,
+         blockSelector: NW,
+         sampling: PW
+       } = WW;
+       const LW = RP(EP(RP((WW => {
+         const PW = IP(WW);
+         if (!PW || tP(PW, EW, NW, !0)) return;
+         const LW = mW.getId(PW);
+         if (PW === OW && OW.defaultView) {
+           const WW = PP(OW.defaultView);
+           iW({
+             id: LW,
+ ... (10 more added lines; see GitHub link above)
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5168-L5169` → after: `L7593-L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7593-L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7593-L7594) · [Before (L5168-L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5168-L5169)

```diff
-     const Oj = new Uint8Array(4);
-     var Gj = GB(39446);
+     const FP = ["INPUT", "TEXTAREA", "SELECT"],
+       QP = new WeakMap;
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5172-L5186` → after: `L7597-L7608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7597-L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7597-L7608) · [Before (L5172-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5172-L5186)

```diff
-       const OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
-       BB._colorAttachment.storeOp = BB._targetSignature._sampleCount > 1 ? OB : "store";
-       const GB = BB._renderPassDescriptor.depthStencilAttachment;
-       GB && (GB.depthStoreOp = OB, GB.stencilStoreOp && (GB.stencilStoreOp = OB))
-     }
-     var Dj = GB(38432),
-       Qj = GB(38496),
-       oj = GB(38074),
-       jj = GB(40363);
-     const yj = new Float64Array([1, 1, 1]),
-       Jj = new Float64Array([0, 1, 0]),
-       Mj = new Float64Array(4),
-       Pj = new Float32Array(16),
-       zj = new Float64Array(3),
-       lj = new Float64Array(4);
+       return function WW(iW, OW) {
+         if (EL("CSSGroupingRule") && iW.parentRule instanceof CSSGroupingRule || EL("CSSMediaRule") && iW.parentRule instanceof CSSMediaRule || EL("CSSSupportsRule") && iW.parentRule instanceof CSSSupportsRule || EL("CSSConditionRule") && iW.parentRule instanceof CSSConditionRule … [truncated]
+           const mW = Array.from(iW.parentRule.cssRules).indexOf(iW);
+           return OW.unshift(mW), WW(iW.parentRule, OW)
+         }
+         if (iW.parentStyleSheet) {
+           const WW = Array.from(iW.parentStyleSheet.cssRules).indexOf(iW);
+           OW.unshift(WW)
+         }
+         return OW
+       }(WW, [])
+     }
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5189-L5195` → after: `L7611-L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7611-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7611-L7615) · [Before (L5189-L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5189-L5195)

```diff
-       BB.fov = OB.fov, BB.near = OB.near, BB.far = OB.far, BB.renderWidth = GB.renderWidth, BB.renderHeight = GB.renderHeight, (0, oj.v)(OB.holderRotation, 0, Mj, 0), (0, oj.e)(yj, 0, Mj, 0, OB.holderPosition, 0, Pj);
-       const YB = OB.q_;
-       zj[0] = YB[0], zj[1] = YB[1], zj[2] = YB[2] + 1;
-       const DB = BB.viewMatrix;
-       (0, oj.n)(YB, zj, Jj, DB), (0, oj.j)(DB, 0, DB), (0, oj.o)(DB, Pj, 0, DB), (0, oj.j)(DB, 0, DB);
-       const QB = BB.worldMatrix;
-       (0, oj.j)(DB, 0, QB), BB.eye[0] = QB[12], BB.eye[1] = QB[13], BB.eye[2] = QB[14], lj[0] = BB.fov, lj[1] = BB.renderWidth / BB.renderHeight, lj[2] = BB.near, lj[3] = BB.far, (0, oj.r)(lj, BB.projectionMatrix), (0, oj.o)(DB, BB.projectionMatrix, 0, BB.viewProjectionMatrix), ( … [truncated]
+       let mW, EW;
+       return WW ? (WW.ownerNode ? mW = iW.getId(WW.ownerNode) : EW = OW.getId(WW), {
+         styleId: EW,
+         id: mW
+       }) : {}
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5199-L5206` → after: `L7619-L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7619-L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7619-L7650) · [Before (L5199-L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5199-L5206)

```diff
-       let GB = BB.frustumPlanes;
-       GB || (GB = BB.frustumPlanes = Array.from({
-         length: 6
-       }, (() => new Dj.c(0, 0, 0, 0))));
-       for (let YB = 0; YB < 6; YB++) {
-         const BB = GB[YB].normal;
-         BB._x = OB[4 * YB], BB._y = OB[4 * YB + 1], BB._z = OB[4 * YB + 2], BB._isDirty = !0, GB[YB].d = OB[4 * YB + 3]
-       }
+       let {
+         mirror: OW,
+         stylesheetManager: mW
+       } = WW;
+       var EW, NW, PW;
+       let LW = null;
+       LW = "#document" === iW.nodeName ? OW.getId(iW) : OW.getId(WP.host(iW));
+       const cW = "#document" === iW.nodeName ? null == (EW = iW.defaultView) ? void 0 : EW.Document : null == (PW = null == (NW = iW.ownerDocument) ? void 0 : NW.defaultView) ? void 0 : PW.ShadowRoot,
+         wW = (null == cW ? void 0 : cW.prototype) ? Object.getOwnPropertyDescriptor(null == cW ? void 0 : cW.prototype, "adoptedStyleSheets") : void 0;
+       return null !== LW && -1 !== LW && cW && wW ? (Object.defineProperty(iW, "adoptedStyleSheets", {
+         configurable: wW.configurable,
+         enumerable: wW.enumerable,
+         get() {
+           var WW;
+           return null == (WW = wW.get) ? void 0 : WW.call(this)
+         },
+ ... (16 more added lines; see GitHub link above)
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5209-L5213` → after: `L7653-L8155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L7653-L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L7653-L8155) · [Before (L5209-L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5209-L5213)

```diff
-     function Zj(BB, OB) {
-       const GB = OB.clearColor;
-       BB.clearColour[0] = GB.r, BB.clearColour[1] = GB.g, BB.clearColour[2] = GB.b, BB.clearColour[3] = GB.a;
-       const YB = OB.ambientColor;
-       BB.ambientColour[0] = YB.r, BB.ambientColour[1] = YB.g, BB.ambientColour[2] = YB.b, BB.animationRatio = OB.animationRatio, BB.frameId = OB.frameId, BB.version++
+     function mL(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const OW = WW.doc.defaultView;
+       if (!OW) return () => {};
+       let mW;
+       ! function(WW, iW) {
+         const {
+           mutationCb: OW,
+           mousemoveCb: mW,
+           mouseInteractionCb: EW,
+           scrollCb: NW,
+           viewportResizeCb: PW,
+           inputCb: LW,
+           mediaInteractionCb: cW,
+           styleSheetRuleCb: wW,
+           styleDeclarationCb: tW,
+ ... (487 more added lines; see GitHub link above)
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5217-L5218` → after: `L8159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8159) · [Before (L5217-L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5217-L5218)

```diff
-       const OB = BB.model.view;
-       return OB.animTick = (0, Qj.g)(), OB.timeMs = performance.now(), Zj(OB, BB.eq), BB.model.update(OB.frameId), OB
+       return "undefined" !== typeof window[WW]
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5222-L5227` → after: `L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8163) · [Before (L5222-L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5222-L5227)

```diff
-       const OB = BB.eq,
-         {
-           view: GB,
-           p_: YB
-         } = BB.model;
-       return pj(GB, YB, OB.Lp()), OB.onBeforeRenderObservable.notifyObservers(OB), qj(OB, GB.frustum), OB.onBeforeCameraRenderObservable.notifyObservers(OB.activeCamera), Nj(BB)
+       return Boolean("undefined" !== typeof window[WW] && window[WW].prototype && "insertRule" in window[WW].prototype && "deleteRule" in window[WW].prototype)
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5257-L5283` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8167) · [Before (L5257-L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5257-L5283)

```diff
-         this.units = BB, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
-       }
-       get ready() {
-         return this.bufferReady && (!this.twin || this.twinReady)
-       }
-       destroy() {
-         var BB;
-         this.buffer.destroy(), null === (BB = this.twin) || void 0 === BB || BB.destroy()
-       }
-     }
-     class fj {
-       constructor(BB, OB) {
-         this.arena = BB, this.JZ = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.JZ = new To(OB);
-         const GB = new Uj(OB);
-         GB.buffer = this.createBuffer(GB, !1), this.backings.push(GB), this.refresh()
-       }
- ... (11 more removed lines; see GitHub link above)
+         NW(this, "iframeIdToRemoteIdMap", new WeakMap), NW(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = WW
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5285-L5330` → after: `L8169-L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8169-L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8169-L8173) · [Before (L5285-L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5285-L5330)

```diff
-       get allocatedBytes() {
-         let BB = 0;
-         for (const OB of this.backings) BB += OB.units * (this.arena.unitBytes + (OB.twin ? this.arena.twinUnitBytes : 0));
-         return BB
-       }
-       holds(BB) {
-         return BB.start + BB.length <= this.usable
-       }
-       lost(BB) {
-         return this.dropped || BB.start + BB.length > this.CP
-       }
-       write(BB, OB) {
-         const {
-           device: GB,
-           unitBytes: YB
-         } = this.arena;
- ... (30 more removed lines; see GitHub link above)
+       getId(WW, iW, OW, mW) {
+         const EW = OW || this.getIdToRemoteIdMap(WW),
+           NW = mW || this.getRemoteIdToIdMap(WW);
+         let PW = EW.get(iW);
+         return PW || (PW = this.generateIdFn(), EW.set(iW, PW), NW.set(PW, iW)), PW
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5332-L5333` → after: `L8175-L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8175-L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8175-L8178) · [Before (L5332-L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5332-L5333)

```diff
-       retire() {
-         this.dropped = !0, this.refresh()
+       getIds(WW, iW) {
+         const OW = this.getIdToRemoteIdMap(WW),
+           mW = this.getRemoteIdToIdMap(WW);
+         return iW.map((iW => this.getId(WW, iW, OW, mW)))
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5335-L5340` → after: `L8180-L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8180-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8180-L8184) · [Before (L5335-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5335-L5340)

```diff
-       drop() {
-         if (!this.dropped) {
-           this.dropped = !0;
-           for (const BB of this.backings) BB.destroy();
-           this.refresh(), this.arena.remove(this)
-         }
+       getRemoteId(WW, iW, OW) {
+         const mW = OW || this.getRemoteIdToIdMap(WW);
+         if ("number" !== typeof iW) return iW;
+         const EW = mW.get(iW);
+         return EW || -1
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5342-L5360` → after: `L8186-L8188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8186-L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8186-L8188) · [Before (L5342-L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5342-L5360)

```diff
-       createBuffer(BB, OB) {
-         const {
-           device: GB,
-           unitBytes: YB,
-           twinUnitBytes: DB,
-           usage: QB,
-           label: oB
-         } = this.arena;
-         GB.pushErrorScope("out-of-memory");
-         const jB = GB.createBuffer({
-           label: OB ? `${oB}-light` : oB,
-           size: BB.units * (OB ? DB : YB),
-           usage: (OB ? this.arena.twinUsage : QB) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
-         });
-         return this.arena.awaitingVerdict++, GB.popErrorScope().then((GB => {
-           this.arena.awaitingVerdict--, this.settle(BB, OB, !GB, !0)
- ... (3 more removed lines; see GitHub link above)
+       getRemoteIds(WW, iW) {
+         const OW = this.getRemoteIdToIdMap(WW);
+         return iW.map((iW => this.getRemoteId(WW, iW, OW)))
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5362-L5371` → after: `L8190-L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8190-L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8190-L8192) · [Before (L5362-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5362-L5371)

```diff
-       settle(BB, OB, GB, YB) {
-         const DB = this.backings.indexOf(BB);
-         if (!(this.dropped || DB < 0)) {
-           if (!GB) {
-             if (YB && this.arena.ranOutOfMemory(BB.units, BB.units * (OB ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === DB) return void this.drop();
-             for (const BB of this.backings.splice(DB)) BB.destroy();
-             return this.JZ.truncate(this.backings[DB - 1].units), this.growable = !1, void this.promote()
-           }
-           OB ? BB.twinReady = !0 : (BB.bufferReady = !0, this.arena.allocatedBuffer(BB.units)), this.promote()
-         }
+       reset(WW) {
+         if (!WW) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
+         this.iframeIdToRemoteIdMap.delete(WW), this.iframeRemoteIdToIdMap.delete(WW)
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5373-L5380` → after: `L8194-L8196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8194-L8196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8194-L8196) · [Before (L5373-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5373-L5380)

```diff
-       promote() {
-         const {
-           backings: BB
-         } = this;
-         let OB = 0;
-         for (; OB + 1 < BB.length && BB[OB].ready && BB[OB + 1].ready;) OB++;
-         for (const GB of BB.splice(0, OB)) GB.destroy();
-         this.refresh()
+       getIdToRemoteIdMap(WW) {
+         let iW = this.iframeIdToRemoteIdMap.get(WW);
+         return iW || (iW = new Map, this.iframeIdToRemoteIdMap.set(WW, iW)), iW
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5382-L5384` → after: `L8198-L8200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8198-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8198-L8200) · [Before (L5382-L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5382-L5384)

```diff
-       refresh() {
-         const BB = this.backings[0];
-         this.buffer = BB.buffer, this.twin = BB.twinReady ? BB.twin : null, this.usable = !this.dropped && BB.bufferReady ? BB.units : 0
+       getRemoteIdToIdMap(WW) {
+         let iW = this.iframeRemoteIdToIdMap.get(WW);
+         return iW || (iW = new Map, this.iframeRemoteIdToIdMap.set(WW, iW)), iW
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5388-L5463` → after: `L8204-L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8204-L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8204-L8205) · [Before (L5388-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5388-L5463)

```diff
-       constructor(BB, OB, GB, YB) {
-         let {
-           verticesPerUnit: DB = 1,
-           twinUsage: QB = GPUBufferUsage.VERTEX
-         } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-         if (this.device = BB, this.unitBytes = OB, this.usage = GB, this.label = YB, this.pages = [], this.WP = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.c … [truncated]
-         this.verticesPerUnit = DB, this.twinUsage = QB, this.twinValueBytes = DB > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * DB
-       }
-       twinLight(BB, OB) {
-         if (4 === this.twinValueBytes) return this.widened.length < OB && (this.widened = new Float32Array(Math.max(OB, 2 * this.widened.length))), this.widened.set(BB.subarray(0, OB)), {
-           light: this.widened,
-           count: OB
-         };
-         const GB = OB % this.verticesPerUnit;
-         if (0 === GB) return {
-           light: BB,
- ... (60 more removed lines; see GitHub link above)
+       constructor(WW) {
+         NW(this, "iframes", new WeakMap), NW(this, "crossOriginIframeMap", new WeakMap), NW(this, "crossOriginIframeMirror", new PL(RW)), NW(this, "crossOriginIframeStyleMirror"), NW(this, "crossOriginIframeRootIdMap", new WeakMap), NW(this, "mirror"), NW(this, "mutationCb"), NW( … [truncated]
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5465-L5477` → after: `L8207-L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8207-L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8207-L8208) · [Before (L5465-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5465-L5477)

```diff
-       stats() {
-         let BB = 0,
-           OB = 0,
-           GB = 0,
-           YB = 0;
-         for (const DB of this.pages) BB += DB.CP, OB += DB.JZ.used, GB += DB.hasTwin ? DB.CP * this.twinUnitBytes : 0, YB += DB.allocatedBytes;
-         return {
-           pages: this.pages.length,
-           capacityBytes: BB * this.unitBytes,
-           usedBytes: OB * this.unitBytes,
-           twinBytes: GB,
-           allocatedBytes: YB
-         }
+       addIframe(WW) {
+         this.iframes.set(WW, !0), WW.contentWindow && this.crossOriginIframeMap.set(WW.contentWindow, WW)
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5479-L5486` → after: `L8210-L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8210-L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8210-L8211) · [Before (L5479-L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5479-L5486)

```diff
-       assertNotDrawing() {}
-       pageLimit() {
-         const {
-           maxBufferSize: BB,
-           maxStorageBufferBindingSize: OB
-         } = this.device.limits;
-         let GB = Math.floor(Math.min(67108864, BB) / this.unitBytes);
-         return this.usage & GPUBufferUsage.STORAGE && (GB = Math.min(GB, Math.floor(OB / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (GB = Math.min(GB, Math.floor(OB / this.twinUnitBytes))), GB
+       addLoadListener(WW) {
+         this.loadListener = WW
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5488-L5526` → after: `L8213-L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8213-L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8213-L8234) · [Before (L5488-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5488-L5526)

```diff
-     }
-     const dj = 16383;
- 
-     function Kj(BB, OB, GB, YB, DB) {
-       let QB = 0;
-       for (let oB = GB; oB < YB; oB += dj) BB.drawIndexed(6 * Math.min(dj, YB - oB), 1, 0, OB + 4 * oB, DB), QB++;
-       return QB
-     }
-     class uj {
-       constructor(BB, OB) {
-         this.recordsGroup = OB, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
-         const GB = CO.g.strideWithoutAtlas;
-         this.vertexArena = new kj(BB, GB, GPUBufferUsage.VERTEX, `terrain-vertices-${GB}`), this.quadArena = new kj(BB, Aj.d, GPUBufferUsage.STORAGE, "terrain-quads", {
-           verticesPerUnit: 4,
-           twinUsage: GPUBufferUsage.STORAGE
-         });
- ... (23 more removed lines; see GitHub link above)
+       attachIframe(WW, iW) {
+         var OW, mW;
+         this.mutationCb({
+           adds: [{
+             parentId: this.mirror.getId(WW),
+             nextId: null,
+             node: iW
+           }],
+           removes: [],
+           texts: [],
+           attributes: [],
+           isAttachIframe: !0
+         }), this.recordCrossOriginIframes && (null == (OW = WW.contentWindow) || OW.addEventListener("message", this.handleMessage.bind(this))), null == (mW = this.loadListener) || mW.call(this, WW), WW.contentDocument && WW.contentDocument.adoptedStyleSheets && WW.contentDocumen … [truncated]
+       }
+       handleMessage(WW) {
+         const iW = WW;
+ ... (6 more added lines; see GitHub link above)
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5528-L5532` → after: `L8236-L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8236-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8236-L8308) · [Before (L5528-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5528-L5532)

```diff
-       lightFullSky(BB, OB) {
-         this.fullSky.length < OB && (this.fullSky = new Uint16Array(Math.max(OB, 4096)).fill(nj.e));
-         for (const GB of BB) {
-           const BB = GB.vertices;
-           BB.page.live && (BB.page.writeLight(BB, this.fullSky), GB.lit = !0)
+       transformCrossOriginEvent(WW, iW) {
+         var OW;
+         switch (iW.type) {
+           case uP.FullSnapshot: {
+             this.crossOriginIframeMirror.reset(WW), this.crossOriginIframeStyleMirror.reset(WW), this.replaceIdOnNode(iW.data.node, WW);
+             const OW = iW.data.node.id;
+             return this.crossOriginIframeRootIdMap.set(WW, OW), this.patchRootIdOnNode(iW.data.node, OW), {
+               timestamp: iW.timestamp,
+               type: uP.IncrementalSnapshot,
+               data: {
+                 source: oP.Mutation,
+                 adds: [{
+                   parentId: this.mirror.getId(WW),
+                   nextId: null,
+                   node: iW.data.node
+                 }],
+ ... (57 more added lines; see GitHub link above)
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5535-L5545` → after: `L8312-L8314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8312-L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8312-L8314) · [Before (L5535-L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5535-L5545)

```diff
-       backed(BB) {
-         const {
-           vertices: OB
-         } = BB;
-         return !!OB && OB.page.holds(OB)
-       }
-       lost(BB) {
-         const {
-           vertices: OB
-         } = BB;
-         return !!OB && OB.page.lost(OB)
+       replace(WW, iW, OW, mW) {
+         for (const EW of mW)(Array.isArray(iW[EW]) || "number" === typeof iW[EW]) && (Array.isArray(iW[EW]) ? iW[EW] = WW.getIds(OW, iW[EW]) : iW[EW] = WW.getId(OW, iW[EW]));
+         return iW
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5547-L5548` → after: `L8316-L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8316-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8316-L8317) · [Before (L5547-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5547-L5548)

```diff
-       release(BB) {
-         BB.vertices && BB.vertices.page.arena.free(BB.vertices), BB.vertices = null, BB.lit = !1
+       replaceIds(WW, iW, OW) {
+         return this.replace(this.crossOriginIframeMirror, WW, iW, OW)
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5550-L5551` → after: `L8319-L8320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8319-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8319-L8320) · [Before (L5550-L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5550-L5551)

```diff
-       setDrawing(BB) {
-         this.forgetBound()
+       replaceStyleIds(WW, iW, OW) {
+         return this.replace(this.crossOriginIframeStyleMirror, WW, iW, OW)
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5553-L5576` → after: `L8322-L8325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8322-L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8322-L8325) · [Before (L5553-L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5553-L5576)

```diff
-       draw(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : OB.faceCount;
-         const QB = OB.vertices,
-           oB = QB.page,
-           jB = GB ? oB.twin : null;
-         if (!oB.holds(QB) || GB && !jB) return 0;
-         const {
-           verticesPerUnit: yB
-         } = oB.arena;
-         let JB = QB.start * yB;
-         this.boundPattern || (BB.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
-         const MB = YB + DB;
-         if (yB > 1) return oB.buffer === this.boundRecords && jB === this.boundRecordsLight || (BB.setBindGroup(1, this.recordsGroup(oB.buffer, jB)), this.boundRecords = oB.buffer, this.boundRecordsLight = jB), Kj(BB, JB, YB, MB, OB.slot);
-         oB.buffer !== this.boundVertices && (BB.setVertexBuffer(0, oB.buffer), this.boundVertices = oB.buffer), jB && jB !== this.boundLight && (BB.setVertexBuffer(1, jB), this.boundLight = jB);
-         const PB = OB.faceCount;
- ... (8 more removed lines; see GitHub link above)
+       replaceIdOnNode(WW, iW) {
+         this.replaceIds(WW, iW, ["id", "rootId"]), "childNodes" in WW && WW.childNodes.forEach((WW => {
+           this.replaceIdOnNode(WW, iW)
+         }))
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5578-L5579` → after: `L8327-L8330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8327-L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8327-L8330) · [Before (L5578-L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5578-L5579)

```diff
-       forgetBound() {
-         this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
+       patchRootIdOnNode(WW, iW) {
+         WW.type === VP.Document || WW.rootId || (WW.rootId = iW), "childNodes" in WW && WW.childNodes.forEach((WW => {
+           this.patchRootIdOnNode(WW, iW)
+         }))
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5583-L5606` → after: `L8334-L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8334-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8334-L8372) · [Before (L5583-L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5583-L5606)

```diff
-       constructor(BB, OB, GB, YB) {
-         this.device = BB, this.splitBefore = OB, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = BB.createBu … [truncated]
-           label: "scene-depth-unproject",
-           size: 8,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         });
-         const DB = BB.createShaderModule({
-           label: "scene-depth-copy",
-           code: (QB = GB._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${QB?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
-         });
-         var QB;
-         BB.createRenderPipelineAsync({
-           label: "scene-depth-copy",
-           layout: "auto",
-           vertex: {
-             module: DB,
- ... (8 more removed lines; see GitHub link above)
+       constructor(WW) {
+         NW(this, "shadowDoms", new WeakSet), NW(this, "mutationCb"), NW(this, "scrollCb"), NW(this, "bypassOptions"), NW(this, "mirror"), NW(this, "restoreHandlers", []), this.mutationCb = WW.mutationCb, this.scrollCb = WW.scrollCb, this.bypassOptions = WW.bypassOptions, this.mir … [truncated]
+       }
+       init() {
+         this.reset(), this.patchAttachShadow(Element, document)
+       }
+       addShadowRoot(WW, iW) {
+         if (!SW(WW)) return;
+         if (this.shadowDoms.has(WW)) return;
+         this.shadowDoms.add(WW);
+         const [OW] = aP({
+           ...this.bypassOptions,
+           doc: iW,
+           mutationCb: this.mutationCb,
+           mirror: this.mirror,
+           shadowDomManager: this
+ ... (23 more added lines; see GitHub link above)
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5608-L5612` → after: `L8374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8374) · [Before (L5608-L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5608-L5612)

```diff
-         }).then((BB => {
-           this.pipeline = BB, this.building = !1
-         }), (BB => {
-           this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", BB)
-         })), GB._executeWithTransmission = () => this.execute(GB, YB)
+         })))
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5614-L5615` → after: `L8376-L8381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8376-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8376-L8381) · [Before (L5614-L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5614-L5615)

```diff
-       get compiling() {
-         return this.building
+       reset() {
+         this.restoreHandlers.forEach((WW => {
+           try {
+             WW()
+           } catch (iW) {}
+         })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5617-L5618` → after: `L8383-L8403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8383-L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8383-L8403) · [Before (L5617-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5617-L5618)

```diff
-       setWanted(BB) {
-         this.wanted = BB
+     }
+     for (var wL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tL = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), ZL = 0; ZL < 64; ZL++) tL[wL.charCodeAt(ZL)] = ZL;
+     const xL = new Map;
+     const lL = (WW, iW, OW) => {
+       if (!WW || !jL(WW, iW) && "object" !== typeof WW) return;
+       const mW = function(WW, iW) {
+         let OW = xL.get(WW);
+         return OW || (OW = new Map, xL.set(WW, OW)), OW.has(iW) || OW.set(iW, []), OW.get(iW)
+       }(OW, WW.constructor.name);
+       let EW = mW.indexOf(WW);
+       return -1 === EW && (EW = mW.length, mW.push(WW)), EW
+     };
+ 
+     function AL(WW, iW, OW) {
+       if (WW instanceof Array) return WW.map((WW => AL(WW, iW, OW)));
+       if (null === WW) return WW;
+ ... (5 more added lines; see GitHub link above)
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5620-L5621` → after: `L8405-L8415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8405-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8405-L8415) · [Before (L5620-L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5620-L5621)

```diff
-       setPlanes(BB, OB) {
-         BB === this.near && OB === this.far || (this.near = BB, this.far = OB, this.unproject[0] = BB / (OB - BB), this.unproject[1] = OB * BB / (OB - BB), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
+       if (WW instanceof ArrayBuffer) {
+         return {
+           rr_type: WW.constructor.name,
+           base64: function(WW) {
+             var iW, OW = new Uint8Array(WW),
+               mW = OW.length,
+               EW = "";
+             for (iW = 0; iW < mW; iW += 3) EW += wL[OW[iW] >> 2], EW += wL[(3 & OW[iW]) << 4 | OW[iW + 1] >> 4], EW += wL[(15 & OW[iW + 1]) << 2 | OW[iW + 2] >> 6], EW += wL[63 & OW[iW + 2]];
+             return mW % 3 === 2 ? EW = EW.substring(0, EW.length - 1) + "=" : mW % 3 === 1 && (EW = EW.substring(0, EW.length - 2) + "=="), EW
+           }(WW)
+         }
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5623-L5625` → after: `L8417-L8421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8417-L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8417-L8421) · [Before (L5623-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5623-L5625)

```diff
-       get view() {
-         var BB, OB;
-         return null !== (BB = null === (OB = this.copy) || void 0 === OB ? void 0 : OB.view) && void 0 !== BB ? BB : null
+       if (WW instanceof DataView) {
+         return {
+           rr_type: WW.constructor.name,
+           args: [AL(WW.buffer, iW, OW), WW.byteOffset, WW.byteLength]
+         }
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5627-L5641` → after: `L8423-L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8423-L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8423-L8424) · [Before (L5627-L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5627-L5641)

```diff
-       execute(BB, OB) {
-         var GB;
-         null === (GB = this.retired) || void 0 === GB || GB.destroy(), this.retired = null;
-         const YB = SO(OB),
-           DB = BB._transparentBindings,
-           QB = this.wanted && this.pipeline ? this.splitIndex(DB) : -1,
-           oB = BB._colorAttachment,
-           jB = oB.resolveTarget;
-         QB >= 0 && (oB.resolveTarget = void 0, Yj(BB, !0));
-         let yB = YB.beginRenderPass(BB._renderPassDescriptor);
-         yB.setBindGroup(0, BB._sceneBG);
-         let JB = this.drawList(yB, OB, BB._opaqueBindings, 0, BB._opaqueBindings.length);
-         if (JB += this.drawList(yB, OB, BB._directBindings, 0, BB._directBindings.length), JB += this.drawList(yB, OB, DB, 0, QB >= 0 ? QB : DB.length), yB.end(), QB < 0) return JB;
-         Yj(BB);
-         const MB = BB._renderPassDescriptor.depthStencilAttachment,
+       if (WW instanceof HTMLImageElement) {
+         const iW = WW.constructor.name,
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5643-L5651` → after: `L8426-L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8426-L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8426-L8430) · [Before (L5643-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5643-L5651)

```diff
-             depthLoadOp: PB,
-             stencilLoadOp: zB
-           } = MB,
-           lB = oB.loadOp;
-         oB.resolveTarget = jB;
-         try {
-           this.copyDepth(YB, BB), oB.loadOp = "load", MB.depthLoadOp = "load", zB && (MB.stencilLoadOp = "load"), yB = YB.beginRenderPass(BB._renderPassDescriptor), yB.setBindGroup(0, BB._sceneBG), JB += this.drawList(yB, OB, DB, QB, DB.length), yB.end()
-         } finally {
-           oB.loadOp = lB, MB.depthLoadOp = PB, MB.stencilLoadOp = zB
+             src: OW
+           } = WW;
+         return {
+           rr_type: iW,
+           src: OW
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5655-L5666` → after: `L8433-L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8433-L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8433-L8436) · [Before (L5655-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5655-L5666)

```diff
-       splitIndex(BB) {
-         for (let OB = 0; OB < BB.length; OB++)
-           if (BB[OB].renderable === this.splitBefore) return OB;
-         return -1
-       }
-       drawList(BB, OB, GB, YB, DB) {
-         let QB = null,
-           oB = 0;
-         for (let jB = YB; jB < DB; jB++) {
-           const YB = GB[jB],
-             DB = YB.renderable.mesh;
-           DB && !1 === DB.visible || (YB.pipeline !== QB && (BB.setPipeline(YB.pipeline), QB = YB.pipeline), oB += YB.draw(BB, OB))
+       if (WW instanceof HTMLCanvasElement) {
+         return {
+           rr_type: "HTMLImageElement",
+           src: WW.toDataURL()
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5670-L5675` → after: `L8439-L8443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8439-L8443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8439-L8443) · [Before (L5670-L5675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5670-L5675)

```diff
-       copyDepth(BB, OB) {
-         var GB, YB;
-         const DB = (null !== (GB = OB._config.depth) && void 0 !== GB ? GB : OB._config.rt)._depthTexture,
-           QB = (null === (YB = this.copy) || void 0 === YB ? void 0 : YB.source) === DB ? this.copy : this.remakeCopy(DB),
-           oB = BB.beginRenderPass(QB.pass);
-         oB.setPipeline(this.pipeline), oB.setBindGroup(0, QB.bindGroup), oB.draw(3), oB.end()
+       if (WW instanceof ImageData) {
+         return {
+           rr_type: WW.constructor.name,
+           args: [AL(WW.data, iW, OW), WW.width, WW.height]
+         }
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5677-L5717` → after: `L8445-L8449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8445-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8445-L8449) · [Before (L5677-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5677-L5717)

```diff
-       remakeCopy(BB) {
-         var OB, GB;
-         this.retired = null !== (OB = null === (GB = this.copy) || void 0 === GB ? void 0 : GB.texture) && void 0 !== OB ? OB : null;
-         const YB = this.device.createTexture({
-             label: "scene-depth",
-             size: [BB.width, BB.height],
-             format: "r32float",
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
-           DB = YB.createView(),
-           QB = this.device.createBindGroup({
-             label: "scene-depth-copy",
-             layout: this.pipeline.getBindGroupLayout(0),
-             entries: [{
-               binding: 0,
-               resource: BB.createView({
- ... (25 more removed lines; see GitHub link above)
+       if (jL(WW, iW) || "object" === typeof WW) {
+         return {
+           rr_type: WW.constructor.name,
+           index: lL(WW, iW, OW)
+         }
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5720` → after: `L8453-L8457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8453-L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8453-L8457) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5720)

```diff
-     const Ij = "rgba8unorm";
+     const bL = (WW, iW, OW) => WW.map((WW => AL(WW, iW, OW))),
+       jL = (WW, iW) => {
+         const OW = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((WW => "function" ===  … [truncated]
+         return Boolean(OW.find((OW => WW instanceof iW[OW])))
+       };
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5722-L5749` → after: `L8459-L8475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8459-L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8459-L8475) · [Before (L5722-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5722-L5749)

```diff
-     function Fj(BB) {
-       return BB ? 15 : 1
-     }
-     class ij {
-       constructor(BB, OB, GB, YB) {
-         this.device = BB, this.terrain = YB, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = OB._targetSi … [truncated]
-           label: "sun-shadow-mask-camera",
-           size: 64,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.layout = BB.createBindGroupLayout({
-           label: "sun-shadow-mask",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.FRAGMENT,
-             texture: {
-               sampleType: "unfilterable-float"
- ... (12 more removed lines; see GitHub link above)
+     function UL(WW, iW, OW, mW) {
+       const EW = [];
+       try {
+         const NW = QN(WW.HTMLCanvasElement.prototype, "getContext", (function(WW) {
+           return function(EW) {
+             for (var NW = arguments.length, PW = new Array(NW > 1 ? NW - 1 : 0), LW = 1; LW < NW; LW++) PW[LW - 1] = arguments[LW];
+             if (!tP(this, iW, OW, !0)) {
+               const WW = function(WW) {
+                 return "experimental-webgl" === WW ? "webgl" : WW
+               }(EW);
+               if ("__context" in this || (this.__context = WW), mW && ["webgl", "webgl2"].includes(WW))
+                 if (PW[0] && "object" === typeof PW[0]) {
+                   const WW = PW[0];
+                   WW.preserveDrawingBuffer || (WW.preserveDrawingBuffer = !0)
+                 } else PW.splice(0, 1, {
+                   preserveDrawingBuffer: !0
+ ... (1 more added lines; see GitHub link above)
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5751-L5784` → after: `L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8477) · [Before (L5751-L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5751-L5784)

```diff
-           }]
-         });
-         const DB = BB.createBindGroupLayout({
-           label: "sun-shadow-mask-empty",
-           entries: []
-         });
-         this.empty = BB.createBindGroup({
-           label: "sun-shadow-mask-empty",
-           layout: DB,
-           entries: []
-         });
-         const QB = BB.createShaderModule({
-           label: "sun-shadow-mask",
-           code: (oB = this.edge, `${(0,vO.w)()}${jY({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
-         });
-         var oB;
- ... (18 more removed lines; see GitHub link above)
+             return WW.apply(this, [EW, ...PW])
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5791-L5852` → after: `L8480-L8482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8480-L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8480-L8482) · [Before (L5791-L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5791-L5852)

```diff
-         const jB = OB._executeWithTransmission;
-         OB._executeWithTransmission = BB => this.execute(OB, GB, (() => jB ? jB(BB) : function(BB, OB) {
-           const GB = SO(OB).beginRenderPass(BB._renderPassDescriptor);
-           GB.setBindGroup(0, BB._sceneBG);
-           let YB = Lj(GB, OB, BB._opaqueBindings);
-           return YB += Lj(GB, OB, BB._directBindings), YB += Lj(GB, OB, BB._transparentBindings), GB.end(), YB
-         }(OB, GB)))
-       }
-       get compiling() {
-         return this.building
-       }
-       get view() {
-         var BB, OB;
-         return null !== (BB = null === (OB = this.targets) || void 0 === OB ? void 0 : OB.maskView) && void 0 !== BB ? BB : null
-       }
-       get maskFormat() {
- ... (46 more removed lines; see GitHub link above)
+         EW.push(NW)
+       } catch {
+         console.error("failed to patch HTMLCanvasElement.prototype.getContext")
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5854-L5935` → after: `L8484-L8485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8484-L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8484-L8485) · [Before (L5854-L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5854-L5935)

```diff
-       remake(BB, OB) {
-         var GB;
-         this.retired = this.targets;
-         const YB = [OB.width, OB.height],
-           DB = this.device.createTexture({
-             label: "sun-shadow-mask",
-             size: YB,
-             format: this.maskFormat,
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
-           QB = this.device.createTexture({
-             label: "sun-shadow-prepass-normals",
-             size: YB,
-             format: Ij,
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
- ... (66 more removed lines; see GitHub link above)
+       return () => {
+         EW.forEach((WW => WW()))
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5939-L5967` → after: `L8489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8489) · [Before (L5939-L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5939-L5967)

```diff
-     function Lj(BB, OB, GB) {
-       let YB = null,
-         DB = 0;
-       for (const QB of GB) {
-         const GB = QB.renderable.mesh;
-         GB && !1 === GB.visible || (QB.pipeline !== YB && (BB.setPipeline(QB.pipeline), YB = QB.pipeline), DB += QB.draw(BB, OB))
-       }
-       return DB
-     }
-     const gj = 6e4,
-       rj = {
-         status: "ok"
-       },
-       Xj = {
-         status: "skipped"
-       };
- ... (13 more removed lines; see GitHub link above)
+     function kL(WW, iW, OW, mW, EW, NW) {
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L5969-L6003` → after: `L8491-L8506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8491-L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8491-L8506) · [Before (L5969-L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L5969-L6003)

```diff
-         QB = Promise.all(Array.from(new Set(BB.materials), (async GB => {
-           DB.push(await async function(BB, OB, GB, YB) {
-             const DB = {
-               lighting: BB.lighting,
-               dirLightCount: Math.min(BB.dirLightCount, 4),
-               zp: BB.runtime
-             };
-             try {
-               const QB = OB.material(YB);
-               return QB && IY(OB.programKey(QB, !1, DB)) ? (await QB.ready, BB.isCancelled() ? rj : QB.bindGroupLayout ? await async function(BB, OB, GB, YB) {
-                 const {
-                   device: DB
-                 } = BB;
-                 let QB, oB;
-                 DB.pushErrorScope("validation");
-                 try {
- ... (19 more removed lines; see GitHub link above)
+         LW = Object.getOwnPropertyNames(WW);
+       for (const cW of LW)
+         if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(cW)) try {
+           if ("function" !== typeof WW[cW]) continue;
+           const LW = QN(WW, cW, (function(WW) {
+             return function() {
+               for (var PW = arguments.length, LW = new Array(PW), wW = 0; wW < PW; wW++) LW[wW] = arguments[wW];
+               const tW = WW.apply(this, LW);
+               if (lL(tW, NW, this), "tagName" in this.canvas && !tP(this.canvas, mW, EW, !0)) {
+                 const WW = bL(LW, NW, this),
+                   mW = {
+                     type: iW,
+                     property: cW,
+                     args: WW
+                   };
+                 OW(this.canvas, mW)
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6020-L6024` → after: `L8511-L8520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8511-L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8511-L8520) · [Before (L6020-L6024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6020-L6024)

```diff
-           return {
-             signal: QB,
-             lost: () => DB,
-             dispose: () => {
-               clearTimeout(GB), clearInterval(YB)
+           PW.push(LW)
+         } catch {
+           const mW = NP(WW, cW, {
+             set(WW) {
+               OW(this.canvas, {
+                 type: iW,
+                 property: cW,
+                 args: [WW],
+                 setter: !0
+               })
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6026-L6112` → after: `L8522-L8525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8522-L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8522-L8525) · [Before (L6026-L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6026-L6112)

```diff
-           }
-         }(OB.device, BB);
-       let jB;
-       try {
-         jB = await Promise.race([QB.then((() => "done")), oB.signal])
-       } finally {
-         oB.dispose()
-       }
-       if ("rB" === jB || GB()) return {
-         status: "rB"
-       };
-       const yB = DB.find((BB => "failed" === BB.status));
-       return yB && "lost" !== jB && !oB.lost() && await new Promise((BB => {
-         setTimeout(BB, 0)
-       })), "lost" === jB || oB.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
-         status: "skipped"
- ... (71 more removed lines; see GitHub link above)
+           });
+           PW.push(mW)
+         }
+       return PW
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6115-L6116` → after: `L8532-L8548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8532-L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8532-L8548) · [Before (L6115-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6115-L6116)

```diff
-     function Hj(BB, OB) {
-       return BB.group - OB.group || BB.nearest - OB.nearest
+     function KL(WW) {
+       let iW;
+       try {
+         if (iW = ML && (self.URL || self.webkitURL).createObjectURL(ML), !iW) throw "";
+         const OW = new Worker(iW, {
+           name: null == WW ? void 0 : WW.name
+         });
+         return OW.addEventListener("error", (() => {
+           (self.URL || self.webkitURL).revokeObjectURL(iW)
+         })), OW
+       } catch (OW) {
+         return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(sL), {
+           name: null == WW ? void 0 : WW.name
+         })
+       } finally {
+         iW && (self.URL || self.webkitURL).revokeObjectURL(iW)
+ ... (1 more added lines; see GitHub link above)
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6119-L6126` → after: `L8551-L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8551-L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8551-L8567) · [Before (L6119-L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6119-L6126)

```diff
-       constructor(BB, OB) {
-         this.device = BB, this.vN = OB, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
-       }
-       createBuffer() {
-         return this.device.createBuffer({
-           label: "terrain-chunk-slots",
-           size: this.data.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+       constructor(WW) {
+         NW(this, "pendingCanvasMutations", new Map), NW(this, "rafStamps", {
+           latestId: 0,
+           invokeId: null
+         }), NW(this, "mirror"), NW(this, "mutationCb"), NW(this, "resetObservers"), NW(this, "frozen", !1), NW(this, "locked", !1), NW(this, "processMutation", ((WW, iW) => {
+           !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(WW) || this.pendingCanvasMutations.set(WW, []), this.pendingCanvasMutatio … [truncated]
+         }));
+         const {
+           sampling: iW = "all",
+           win: OW,
+           blockClass: mW,
+           blockSelector: EW,
+           recordCanvas: PW,
+           dataURLOptions: LW
+         } = WW;
+         this.mutationCb = WW.mutationCb, this.mirror = WW.mirror, PW && "all" === iW && this.initCanvasMutationObserver(OW, mW, EW), PW && "number" === typeof iW && this.initCanvasFPSObserver(iW, OW, mW, EW, {
+ ... (1 more added lines; see GitHub link above)
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6129-L6143` → after: `L8570-L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8570-L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8570-L8571) · [Before (L6129-L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6129-L6143)

```diff
-       allocate() {
-         var BB;
-         const OB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.next++;
-         if (8 * OB >= this.data.length) {
-           const BB = new Float32Array(2 * this.data.length);
-           BB.set(this.data), this.data = BB, this.words = new Uint32Array(BB.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.vN()
-         }
-         return OB
-       }
-       release(BB) {
-         this.free.push(BB)
-       }
-       set(BB, OB, GB, YB, DB) {
-         const QB = 8 * BB + hY;
-         this.data[QB] = OB, this.data[QB + 1] = GB, this.data[QB + 2] = YB, this.setVisibility(BB, DB)
+       reset() {
+         this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6145-L6146` → after: `L8573-L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8573-L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8573-L8574) · [Before (L6145-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6145-L6146)

```diff
-       setVisibility(BB, OB) {
-         this.data[8 * BB + aY] = OB, this.markDirty(BB, BB)
+       freeze() {
+         this.frozen = !0
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6148-L6150` → after: `L8576-L8577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8576-L8577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8576-L8577) · [Before (L6148-L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6148-L6150)

```diff
-       setFaces(BB, OB, GB) {
-         const YB = 8 * BB;
-         this.words[YB + eY] = OB, this.words[YB + TY] = GB, this.markDirty(BB, BB)
+       unfreeze() {
+         this.frozen = !1
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6152-L6153` → after: `L8579-L8580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8579-L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8579-L8580) · [Before (L6152-L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6152-L6153)

```diff
-       markDirty(BB, OB) {
-         this.dirtyMin = Math.min(this.dirtyMin, BB), this.dirtyMax = Math.max(this.dirtyMax, OB)
+       lock() {
+         this.locked = !0
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6155-L6157` → after: `L8582-L8583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8582-L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8582-L8583) · [Before (L6155-L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6155-L6157)

```diff
-       flush() {
-         if (this.dirtyMax < this.dirtyMin) return;
-         this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
+       unlock() {
+         this.locked = !1
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6159-L6245` → after: `L8585-L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8585-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8585-L8637) · [Before (L6159-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6159-L6245)

```diff
-     }
-     const sj = cY,
-       xj = !0;
-     const tj = {
-         arrayStride: 4,
-         stepMode: "vertex",
-         attributes: [{
-           shaderLocation: sj.packedLight,
-           offset: 0,
-           format: "float32"
-         }]
-       },
-       By = {
-         srcFactor: "src-alpha",
-         dstFactor: "one-minus-src-alpha",
-         operation: "add"
- ... (71 more removed lines; see GitHub link above)
+       initCanvasFPSObserver(WW, iW, OW, mW, EW) {
+         const NW = UL(iW, OW, mW, !0),
+           PW = new Map,
+           LW = new KL;
+         LW.onmessage = WW => {
+           const {
+             id: iW
+           } = WW.data;
+           if (PW.set(iW, !1), !("base64" in WW.data)) return;
+           const {
+             base64: OW,
+             type: mW,
+             width: EW,
+             height: NW
+           } = WW.data;
+           this.mutationCb({
+ ... (37 more added lines; see GitHub link above)
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6247-L6250` → after: `L8639-L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8639-L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8639-L8686) · [Before (L6247-L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6247-L6250)

```diff
-           }, {
-             binding: 1,
-             resource: {
-               buffer: this.slots.buffer
+             const mW = await createImageBitmap(WW);
+             LW.postMessage({
+               id: OW,
+               bitmap: mW,
+               width: WW.width,
+               height: WW.height,
+               dataURLOptions: EW.dataURLOptions
+             }, [mW])
+           }))), wW = requestAnimationFrame(ZW)
+         };
+         wW = requestAnimationFrame(ZW), this.resetObservers = () => {
+           NW(), cancelAnimationFrame(wW)
+         }
+       }
+       initCanvasMutationObserver(WW, iW, OW) {
+         this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
+ ... (32 more added lines; see GitHub link above)
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6252-L6255` → after: `L8688-L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8688-L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8688-L8689) · [Before (L6252-L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6252-L6255)

```diff
-           }, {
-             binding: 2,
-             resource: {
-               buffer: null !== BB && void 0 !== BB ? BB : this.slots.buffer
+             return () => {
+               EW.forEach((WW => WW()))
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6257-L6260` → after: `L8691-L8695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8691-L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8691-L8695) · [Before (L6257-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6257-L6260)

```diff
-           }, {
-             binding: 3,
-             resource: {
-               buffer: null !== OB && void 0 !== OB ? OB : this.slots.buffer
+           }(this.processMutation.bind(this), WW, iW, OW),
+           NW = function(WW, iW, OW, mW) {
+             const EW = [];
+             return "undefined" !== typeof iW.WebGLRenderingContext && EW.push(...kL(iW.WebGLRenderingContext.prototype, vP.WebGL, WW, OW, mW, iW)), "undefined" !== typeof iW.WebGL2RenderingContext && EW.push(...kL(iW.WebGL2RenderingContext.prototype, vP.WebGL2, WW, OW, mW, iW)),  … [truncated]
+               EW.forEach((WW => WW()))
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6262-L6263` → after: `L8697-L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8697-L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8697-L8700) · [Before (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6262-L6263)

```diff
-           }]
-         })
+           }(this.processMutation.bind(this), WW, iW, OW);
+         this.resetObservers = () => {
+           mW(), EW(), NW()
+         }
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6265-L6268` → after: `L8702-L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8702-L8703) · [Before (L6265-L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6265-L6268)

```diff
-       recordsGroup(BB, OB) {
-         const GB = null !== OB && void 0 !== OB ? OB : BB;
-         let YB = this.recordsGroups.get(GB);
-         return YB || (YB = this.createFrameBindGroup(BB, OB), this.recordsGroups.set(GB, YB)), YB
+       startPendingCanvasMutationFlusher() {
+         requestAnimationFrame((() => this.flushPendingCanvasMutations()))
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6270-L6389` → after: `L8705-L8707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8705-L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8705-L8707) · [Before (L6270-L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6270-L6389)

```diff
-       setChunkMesh(BB, OB, GB) {
-         var YB;
-         let DB = this.chunks.get(BB);
-         DB ? this.geometry.release(DB) : (DB = {
-           mesh: BB,
-           slot: this.slots.allocate(),
-           origin: [GB[0], GB[1], GB[2]],
-           material: null,
-           vertices: null,
-           lit: !1,
-           faceCount: 0,
-           vertexCount: 0,
-           packed: !1,
-           lostRemeshes: 0,
-           lostRetryAt: 0,
-           visibility: BB.visibility,
- ... (104 more removed lines; see GitHub link above)
+       startRAFTimestamping() {
+         const WW = iW => {
+           this.rafStamps.latestId = iW, requestAnimationFrame(WW)
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6391-L6401` → after: `L8709-L8725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8709-L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8709-L8725) · [Before (L6391-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6391-L6401)

```diff
-         return this.materials.set(BB, yB), this.device.queue.writeBuffer(yB.uniformBuffer, 0, jB), yB.ready = this.createMaterialBindGroup(yB, DB).catch((OB => {
-           console.error(`Lite terrain failed to load the textures of material "${BB.name}"`, OB)
-         })), yB
-       }
-       materialLayout(BB) {
-         const OB = function(BB) {
-             const OB = ["uniforms"];
-             if ("atlas" === BB.texture) {
-               BB.animated && OB.push("animData"), OB.push("sampler");
-               for (let GB = 0; GB < BB.atlasCount; GB++) OB.push("textureArray")
-             } else "single" === BB.texture && OB.push("sampler", "texture");
+         requestAnimationFrame(WW)
+       }
+       flushPendingCanvasMutations() {
+         this.pendingCanvasMutations.forEach(((WW, iW) => {
+           const OW = this.mirror.getId(iW);
+           this.flushPendingCanvasMutationFor(iW, OW)
+         })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
+       }
+       flushPendingCanvasMutationFor(WW, iW) {
+         if (this.frozen || this.locked) return;
+         const OW = this.pendingCanvasMutations.get(WW);
+         if (!OW || -1 === iW) return;
+         const mW = OW.map((WW => {
+             const {
+               type: iW,
+               ...OW
+ ... (1 more added lines; see GitHub link above)
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6403-L6448` → after: `L8727-L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8727-L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8727-L8735) · [Before (L6403-L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6403-L6448)

```diff
-           }(BB),
-           GB = OB.join(",");
-         let YB = this.materialLayouts.get(GB);
-         if (!YB) {
-           const BB = GPUShaderStage.FRAGMENT;
-           YB = this.device.createBindGroupLayout({
-             label: `terrain-material-${GB}`,
-             entries: OB.map(((OB, GB) => {
-               switch (OB) {
-                 case "uniforms":
-                   return {
-                     binding: GB, visibility: GPUShaderStage.VERTEX | BB, buffer: {
-                       type: "uniform"
-                     }
-                   };
-                 case "animData":
- ... (30 more removed lines; see GitHub link above)
+           })),
+           {
+             type: EW
+           } = OW[0];
+         this.mutationCb({
+           id: iW,
+           type: EW,
+           commands: mW
+         }), this.pendingCanvasMutations.delete(WW)
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6450-L6472` → after: `L8737-L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8737-L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8737-L8771) · [Before (L6450-L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6450-L6472)

```diff
-       async createMaterialBindGroup(BB, OB) {
-         const GB = [{
-           buffer: BB.uniformBuffer
-         }];
-         if (OB) {
-           const YB = await OO(this.device, OB.sources);
-           BB.atlasCount = YB.length, BB.v_ = YB[0].layerWidth, BB.atlasLayers = YB[0].layers, OB.animDataPerTex && GB.push({
-             buffer: CB(this.device, Float32Array.from(OB.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
-           }), GB.push(this.sampler);
-           for (const BB of YB) GB.push(BB.texture.createView({
-             dimension: "2d-array"
-           }))
-         } else if ("single" === BB.texture) {
-           const {
-             url: OB
-           } = BB.model.diffuseTexture.source, {
- ... (7 more removed lines; see GitHub link above)
+     }
+     class YL {
+       constructor(WW) {
+         NW(this, "trackedLinkElements", new WeakSet), NW(this, "mutationCb"), NW(this, "adoptedStyleSheetCb"), NW(this, "styleMirror", new TP), this.mutationCb = WW.mutationCb, this.adoptedStyleSheetCb = WW.adoptedStyleSheetCb
+       }
+       attachLinkElement(WW, iW) {
+         "_cssText" in iW.attributes && this.mutationCb({
+           adds: [],
+           removes: [],
+           texts: [],
+           attributes: [{
+             id: iW.id,
+             attributes: iW.attributes
+           }]
+         }), this.trackLinkElement(WW)
+       }
+ ... (19 more added lines; see GitHub link above)
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6474-L6482` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8773) · [Before (L6474-L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6474-L6482)

```diff
-         const YB = this.materialLayout(this.programKey(BB, !1));
-         BB.bindGroupLayout = YB, BB.bindGroup = this.device.createBindGroup({
-           label: `terrain-material-${BB.model.name}`,
-           layout: YB,
-           entries: GB.map(((BB, OB) => ({
-             binding: OB,
-             resource: BB
-           })))
-         })
+         mW.length > 0 && (OW.styles = mW), this.adoptedStyleSheetCb(OW)
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6484-L6576` → after: `L8775-L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8775-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8775-L8782) · [Before (L6484-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6484-L6576)

```diff
-       programKey(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const YB = GB ? GB.lighting : this.lighting,
-           DB = GB ? GB.zp : this.zp,
-           QB = {
-             texture: BB.texture,
-             atlasCount: BB.atlasCount,
-             v_: BB.v_,
-             atlasLayers: BB.atlasLayers,
-             animated: BB.animated,
-             alphaTest: BB.model.transparencyMode === fB.s.alphaTest,
-             lighting: YB,
-             dirLightCount: GB ? GB.dirLightCount : this.dirLightCount,
-             packed: OB
-           };
-         if (!DB) return QB;
- ... (77 more removed lines; see GitHub link above)
+       reset() {
+         this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
+       }
+       trackStylesheetInLinkElement(WW) {}
+     }
+     class yL {
+       constructor() {
+         NW(this, "nodeMap", new WeakMap), NW(this, "active", !1)
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6578-L6579` → after: `L8784-L8786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8784-L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8784-L8786) · [Before (L6578-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6578-L6579)

```diff
-       pipelineId(BB, OB, GB) {
-         return Gy(OB, this.isBlended(BB), BB.model.backFaceCulling, GB)
+       inOtherBuffer(WW, iW) {
+         const OW = this.nodeMap.get(WW);
+         return OW && Array.from(OW).some((WW => WW !== iW))
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6581-L6584` → after: `L8788-L8799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8788-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8788-L8799) · [Before (L6581-L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6581-L6584)

```diff
-       pipelineBuild(BB, OB, GB) {
-         var YB;
-         const DB = this.pipelineId(BB, OB, GB);
-         return null !== (YB = this.builds.get(DB)) && void 0 !== YB ? YB : this.startPipeline(DB, BB, OB, GB)
+       add(WW, iW) {
+         this.active || (this.active = !0, requestAnimationFrame((() => {
+           this.nodeMap = new WeakMap, this.active = !1
+         }))), this.nodeMap.set(WW, (this.nodeMap.get(WW) || new Set).add(iW))
+       }
+       destroy() {}
+     }
+     let TL, JL, hL, HL = !1;
+     try {
+       if (2 !== Array.from([1], (WW => 2 * WW))[0]) {
+         const WW = document.createElement("iframe");
+         document.body.appendChild(WW), Array.from = (null == (mW = WW.contentWindow) ? void 0 : mW.Array.from) || Array.from, document.body.removeChild(WW)
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6586` → after: `L8801-L8880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8801-L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8801-L8880) · [Before (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6586)

```diff
-       startPipeline(BB, OB, GB, YB) {
+     } catch (Ac) {
+       console.debug("Unable to override Array.from", Ac)
+     }
+     const nL = JW();
+ 
+     function uL() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+       const {
+         emit: iW,
+         checkoutEveryNms: OW,
+         checkoutEveryNth: mW,
+         blockClass: EW = "rr-block",
+         blockSelector: NW = null,
+         ignoreClass: PW = "rr-ignore",
+         ignoreSelector: LW = null,
+         maskTextClass: cW = "rr-mask",
+ ... (64 more added lines; see GitHub link above)
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6588-L6601` → after: `L8882-L8891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8882-L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8882-L8891) · [Before (L6588-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6588-L6601)

```diff
-         this.pipelines.set(BB, null);
-         const QB = xY(GB),
-           oB = this.isBlended(OB),
-           jB = this.shadowMask && YB._depthStencilFormat ? function(BB, OB, GB, YB) {
-             if (void 0 === BB.packVariant || BB.liquid || OB) return "none";
-             const DB = (0, sO.h)(BB.packVariant);
-             return null === DB || void 0 === DB || !DB.sunShadow || !QY(DB, GB) || DB.discards || BB.alphaTest && dY(BB.packVariant) ? "none" : YB ? "edge" : "plain"
-           }(GB, oB, !!this.sunShadow, YB._sampleCount > 1) : "none";
-         let yB;
-         try {
-           yB = tY(GB, !!this.sunShadow, jB)
-         } catch (ZB) {
-           if (!IY(GB)) throw ZB;
-           return this.failedPackBuild(BB, GB, QB, ZB)
+         const PW = WW;
+         if (PW.timestamp = FN(), !(null == (NW = GP[0]) ? void 0 : NW.isFrozen()) || PW.type === uP.FullSnapshot || PW.type === uP.IncrementalSnapshot && PW.data.source === oP.Mutation || GP.forEach((WW => WW.unfreeze())), eW) null == iW || iW(fW(PW), EW);
+         else if (vW) {
+           const WW = {
+             type: "rrweb",
+             event: fW(PW),
+             origin: window.location.origin,
+             isCheckout: EW
+           };
+           window.parent.postMessage(WW, "*")
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6603-L6659` → after: `L8893-L8931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8893-L8931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8893-L8931) · [Before (L6603-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6603-L6659)

```diff
-         const JB = this.shaderModule(yB, QB),
-           MB = [];
-         GB.packed || (MB.push(function(BB, OB) {
-           const GB = [{
-             shaderLocation: sj.position,
-             offset: CO.g.LQ,
-             format: "float32x3"
-           }, {
-             shaderLocation: sj.normal,
-             offset: CO.g.normalOffset,
-             format: "snorm8x4"
-           }, {
-             shaderLocation: sj.color,
-             offset: CO.g.colorOffset,
-             format: "unorm8x4"
-           }];
- ... (41 more removed lines; see GitHub link above)
+         if (PW.type === uP.FullSnapshot) VW = PW, pW = 0;
+         else if (PW.type === uP.IncrementalSnapshot) {
+           if (PW.data.source === oP.Mutation && PW.data.isAttachIframe) return;
+           pW++;
+           const WW = mW && pW >= mW,
+             iW = OW && PW.timestamp - VW.timestamp > OW;
+           (WW || iW) && JL(!0)
+         }
+       };
+       const CW = WW => {
+           TL({
+             type: uP.IncrementalSnapshot,
+             data: {
+               source: oP.Mutation,
+               ...WW
+             }
+ ... (23 more added lines; see GitHub link above)
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6662-L6668` → after: `L9081-L9222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9081-L9222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9081-L9222) · [Before (L6662-L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6662-L6668)

```diff
-           lB = GB.resting ? 0 : 1;
-         this.compiling += lB;
-         const pB = "none" === jB ? this.device.createRenderPipelineAsync(zB) : this.startMaskPipelines(JB, zB, "edge" === jB);
-         pB.then((OB => {
-           this.compiling -= lB, this.pipelines.set(BB, OB)
-         }), (BB => {
-           this.compiling -= lB, console.error(`Lite terrain pipeline ${QB} failed`, BB), hj(this.device, GB, QB, JB, BB)
+           onStylesheetLoad: (WW, iW) => {
+             qW.attachLinkElement(WW, iW)
+           },
+           keepIframeSrcFn: uW
+         });
+         if (!iW) return console.warn("Failed to snapshot the document");
+         TL({
+           type: uP.FullSnapshot,
+           data: {
+             node: iW,
+             initialOffset: PP(window)
+           }
+         }, WW), GP.forEach((WW => WW.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && qW.adoptStyleSheets(document.adoptedStyleSheets, nL.getId(document))
+       };
+       try {
+         const WW = [],
+ ... (126 more added lines; see GitHub link above)
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6670-L6713` → after: `L9224-L9225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9224-L9225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9224-L9225) · [Before (L6670-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6670-L6713)

```diff
-         const qB = {
-           name: QB,
-           module: JB,
-           built: pB
-         };
-         return this.builds.set(BB, qB), qB
-       }
-       startMaskPipelines(BB, OB, GB) {
-         const YB = OB.depthStencil,
-           DB = this.device.createRenderPipelineAsync(GB ? OB : {
-             ...OB,
-             depthStencil: {
-               ...YB,
-               depthCompare: "equal",
-               depthWriteEnabled: !1
-             }
- ... (28 more removed lines; see GitHub link above)
+         const OW = () => {
+           JL(), WW.push(iW(document)), HL = !0
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6715-L6731` → after: `L9227-L9238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9227-L9238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9227-L9238) · [Before (L6715-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6715-L6731)

```diff
-         return this.builds.set(BB, QB), QB
-       }
-       checkShaderPack(BB) {
-         return wj(BB, {
-           device: this.device,
-           target: this.target,
-           material: BB => this.materialFor(BB),
-           programKey: (BB, OB, GB) => this.programKey(BB, OB, GB),
-           pipelineBuild: (BB, OB, GB) => this.pipelineBuild(BB, OB, GB)
-         })
-       }
-       createBinding(BB, OB, GB) {
-         return this.target = OB, {
-           renderable: BB,
-           pipeline: KO(this.device, OB),
-           draw: BB => {
- ... (1 more removed lines; see GitHub link above)
+         return ["interactive", "complete"].includes(document.readyState) ? OW() : (WW.push(iP("DOMContentLoaded", (() => {
+           TL({
+             type: uP.DomContentLoaded,
+             data: {}
+           }), "DOMContentLoaded" === yW && OW()
+         }))), WW.push(iP("load", (() => {
+           TL({
+             type: uP.Load,
+             data: {}
+           }), "load" === yW && OW()
+         }), window))), () => {
+           WW.forEach((WW => {
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6733-L6735` → after: `L9240-L9242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9240-L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9240-L9242) · [Before (L6733-L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6733-L6735)

```diff
-               return GB ? this.drawTransparent(BB, OB) : this.drawOpaque(BB, OB)
-             } finally {
-               this.geometry.setDrawing(!1)
+               WW()
+             } catch (iW) {
+               String(iW).toLowerCase().includes("cross-origin") || console.warn(iW)
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6737-L6815` → after: `L9244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9244) · [Before (L6737-L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6737-L6815)

```diff
-           }
-         }
-       }
-       prepare(BB, OB) {
-         var GB, YB, DB, QB;
-         const {
-           kz: oB
-         } = BB;
-         this.lighting = BB.wq;
-         const jB = (0, Wj.u)(OB);
-         this.dirLightCount = Math.min(jB, 4), this.zp = null !== (GB = oB.zp) && void 0 !== GB ? GB : null, jB > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(BB, OB), this.animateMaterials(OB.animTick);
-         const yB = oB.Tz,
-           JB = yB[0] !== this.originOffset[0] || yB[1] !== this.originOffset[1] || yB[2] !== this.originOffset[2];
-         JB && (this.originOffset[0] = yB[0], this.originOffset[1] = yB[1], this.originOffset[2] = yB[2]);
-         const MB = OB.eye;
-         this.eye[0] = MB[0], this.eye[1] = MB[1], this.eye[2] = MB[2], this.writeShaderPackInputs();
- ... (63 more removed lines; see GitHub link above)
+           })), GW.destroy(), HL = !1, qP = void 0
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6817-L6820` → after: `L9246-L9247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9246-L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9246-L9247) · [Before (L6817-L6820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6817-L6820)

```diff
-         for (const uB of this.transparent) WB ||= RB && uB.material.liquid && !uB.material.customRenderMat;
-         this.submittedTriangles = kB, KB && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(BB, OB, KB)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(WB) : WB && this.warnOnce("sceneDepth", "Lite: a shader pack reads sc … [truncated]
-         for (const uB of this.opaqueBatches) this.chunkSorter.sort(uB.meshes, 1) || uB.meshes.sort(Yy);
-         this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Dy)
+       } catch (rW) {
+         console.warn(rW)
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6822-L6828` → after: `L9249-L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9249-L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9249-L9267) · [Before (L6822-L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6822-L6828)

```diff
-       sweepVisibility(BB, OB, GB) {
-         const {
-           mP: YB
-         } = BB.kz, DB = YB.qP, QB = this.visPassable, oB = this.eye[0] + this.originOffset[0], jB = this.eye[1] + this.originOffset[1], yB = this.eye[2] + this.originOffset[2];
-         if (!GB.eyeClear(oB, jB, yB, OB.near, OB.projectionMatrix, YB)) return null;
-         const [JB, MB] = YB.gDB, PB = GB.update(oB, jB, yB, DB, JB, MB, QB);
-         return this.visSweeps = GB.sweeps, PB ? GB : null
+     }
+ 
+     function oL() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
+         iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
+       if ("scrollBehavior" in iW.documentElement.style && !0 !== WW.__forceSmoothScrollPolyfill__) return;
+       const OW = WW.HTMLElement || WW.Element,
+         mW = {
+           scroll: WW.scroll || WW.scrollTo,
+           scrollBy: WW.scrollBy,
+           elementScroll: OW.prototype.scroll || LW,
+           scrollIntoView: OW.prototype.scrollIntoView
+         },
+         EW = WW.performance && WW.performance.now ? WW.performance.now.bind(WW.performance) : Date.now;
+       const NW = (PW = WW.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(PW) ? 1 : 0);
+       var PW;
+ ... (3 more added lines; see GitHub link above)
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6830-L6834` → after: `L9269-L9273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9269-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9269-L9273) · [Before (L6830-L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6830-L6834)

```diff
-       visSeeThrough(BB, OB) {
-         const {
-           material: GB
-         } = BB;
-         return (!GB || !this.isBlended(GB)) && (BB.mesh.visibility < 1 || !(null !== GB && void 0 !== GB && GB.bindGroup) || BB.faceCount > 0 && (!this.geometry.backed(BB) || this.lighting && !BB.vertices.page.twin) || !this.batchDraws(GB, BB.packed, OB))
+ 
+       function cW(WW) {
+         if (null === WW || "object" !== typeof WW || void 0 === WW.behavior || "auto" === WW.behavior || "instant" === WW.behavior) return !0;
+         if ("object" === typeof WW && "smooth" === WW.behavior) return !1;
+         throw new TypeError("behavior member of ScrollOptions " + WW.behavior + " is not a valid value for enumeration ScrollBehavior.")
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6836-L6846` → after: `L9275-L9277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9275-L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9275-L9277) · [Before (L6836-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6836-L6846)

```diff
-       batchDraws(BB, OB, GB) {
-         var YB;
-         const DB = OB ? 2 : 0;
-         if (BB === this.visDrawsMaterial && function(BB, OB) {
-             return 0 !== (BB & 1 << OB)
-           }(this.visDrawsBits, DB)) return 0 !== (this.visDrawsBits & 2 << DB);
-         let QB = null !== (YB = this.visBatchDraws.get(BB)) && void 0 !== YB ? YB : 0;
-         if (!(QB & 1 << DB)) {
-           QB |= 1 << DB | (!!BB.bindGroupLayout && this.canDraw(BB, OB) && !!this.pipelines.get(this.pipelineIdNow(BB, OB, !1, GB)) ? 2 << DB : 0), this.visBatchDraws.set(BB, QB)
-         }
-         return this.visDrawsMaterial = BB, this.visDrawsBits = QB, 0 !== (QB & 2 << DB)
+ 
+       function wW(WW, iW) {
+         return "Y" === iW ? WW.clientHeight + NW < WW.scrollHeight : "X" === iW ? WW.clientWidth + NW < WW.scrollWidth : void 0
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6848-L6877` → after: `L9279-L9292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9279-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9279-L9292) · [Before (L6848-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6848-L6877)

```diff
-       runVisCheck(BB, OB, GB) {
-         const {
-           kz: YB
-         } = BB, {
-           mP: DB
-         } = YB, QB = DB.qP, oB = new Set;
-         for (const lB of this.chunks.values()) oB.add(lB.key);
-         const jB = hD.Matrix.FromArray(OB.viewProjectionMatrix).invert(),
-           [yB, JB, MB] = this.originOffset,
-           PB = new hD.Xp,
-           zB = function(BB, OB, GB, YB) {
-             const DB = new Set;
-             for (let QB = 0; QB < 27; QB++)
-               for (let oB = 0; oB < 48; oB++) {
-                 const jB = GB((oB + .5) / 48 * 2 - 1, (QB + .5) / 27 * 2 - 1);
-                 Cj(BB, OB, [jB[0] - OB[0], jB[1] - OB[1], jB[2] - OB[2]], YB, DB)
- ... (14 more removed lines; see GitHub link above)
+ 
+       function tW(iW, OW) {
+         const mW = WW.getComputedStyle(iW, null)["overflow" + OW];
+         return "auto" === mW || "scroll" === mW
+       }
+ 
+       function ZW(WW) {
+         const iW = wW(WW, "Y") && tW(WW, "Y"),
+           OW = wW(WW, "X") && tW(WW, "X");
+         return iW || OW
+       }
+ 
+       function xW(iW) {
+         let OW, mW, NW, PW = (EW() - iW.startTime) / 468;
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6879` → after: `L9294-L9308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9294-L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9294-L9308) · [Before (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6879)

```diff
-         null !== (BB = this.zp) && void 0 !== BB && BB.isRunning() && (this.shaderPackInputs ??= new CQ(this.device, this.zp.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.zp, this.eye, this.lighting))
+         PW = PW > 1 ? 1 : PW, LW = PW, OW = .5 * (1 - Math.cos(Math.PI * LW)), mW = iW.startX + (iW.x - iW.startX) * OW, NW = iW.startY + (iW.y - iW.startY) * OW, iW.method.call(iW.scrollable, mW, NW), mW === iW.x && NW === iW.y || WW.requestAnimationFrame(xW.bind(WW, iW))
+       }
+ 
+       function lW(OW, NW, PW) {
+         let cW, wW, tW, ZW;
+         const lW = EW();
+         OW === iW.body ? (cW = WW, wW = WW.scrollX || WW.pageXOffset, tW = WW.scrollY || WW.pageYOffset, ZW = mW.scroll) : (cW = OW, wW = OW.scrollLeft, tW = OW.scrollTop, ZW = LW), xW({
+           scrollable: cW,
+           method: ZW,
+           startTime: lW,
+           startX: wW,
+           startY: tW,
+           x: NW,
+           y: PW
+         })
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6881-L6901` → after: `L9310-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9310-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9310-L9345) · [Before (L6881-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6881-L6901)

```diff
-       bindShaderPackInputs(BB, OB, GB) {
-         var YB, DB, QB, oB;
-         let jB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const yB = this.packVariant(OB, GB);
-         if (void 0 === yB) return;
-         this.shaderPackInputs || (this.shaderPackInputs = new CQ(this.device, GB.textureLayers(), this.sunShadow), this.shaderPackInputs.write(GB, this.eye, this.lighting));
-         const JB = kY(yB) ? null !== (YB = null === (DB = this.sceneDepth) || void 0 === DB ? void 0 : DB.view) && void 0 !== YB ? YB : this.standIn() : null,
-           MB = jB ? null !== (QB = null === (oB = this.shadowMask) || void 0 === oB ? void 0 : oB.view) && void 0 !== QB ? QB : this.standIn() : null;
-         this.shaderPackInputs.bind(BB, JB, TQ(yB, !!this.sunShadow), MB)
-       }
-       standIn() {
-         return this.depthStandIn ??= this.device.createTexture({
-           label: "scene-depth-stand-in",
-           size: [1, 1],
-           format: "r32float",
-           usage: GPUTextureUsage.TEXTURE_BINDING
- ... (5 more removed lines; see GitHub link above)
+       WW.scroll = WW.scrollTo = function() {
+         void 0 !== arguments[0] && (!0 !== cW(arguments[0]) ? lW.call(WW, iW.body, void 0 !== arguments[0].left ? ~~arguments[0].left : WW.scrollX || WW.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : WW.scrollY || WW.pageYOffset) : mW.scroll.call(WW, void 0 !== a … [truncated]
+       }, WW.scrollBy = function() {
+         void 0 !== arguments[0] && (cW(arguments[0]) ? mW.scrollBy.call(WW, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : lW.ca … [truncated]
+       }, OW.prototype.scroll = OW.prototype.scrollTo = function() {
+         if (void 0 === arguments[0]) return;
+         if (!0 === cW(arguments[0])) {
+           if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
+           return void mW.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop … [truncated]
+         }
+         const WW = arguments[0].left,
+           iW = arguments[0].top;
+         lW.call(this, this, "undefined" === typeof WW ? this.scrollLeft : ~~WW, "undefined" === typeof iW ? this.scrollTop : ~~iW)
+       }, OW.prototype.scrollBy = function() {
+         void 0 !== arguments[0] && (!0 !== cW(arguments[0]) ? this.scroll({
+           left: ~~arguments[0].left + this.scrollLeft,
+ ... (20 more added lines; see GitHub link above)
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6903-L6907` → after: `L9347-L9367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9347-L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9347-L9367) · [Before (L6903-L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6903-L6907)

```diff
-       resetBatches(BB) {
-         const OB = this.opaqueBatches;
-         let GB = 0;
-         for (const YB of OB) YB.meshes.length > 0 && (YB.meshes.length = 0, YB.faceCull = this.batchFaceCull(YB.material, BB), OB[GB++] = YB);
-         OB.length = GB
+     }
+     uL.addCustomEvent = (WW, iW) => {
+       if (!HL) throw new Error("please add custom event after start recording");
+       TL({
+         type: uP.Custom,
+         data: {
+           tag: WW,
+           payload: iW
+         }
+       })
+     }, uL.freezePage = () => {
+       GP.forEach((WW => WW.freeze()))
+     }, uL.takeFullSnapshot = WW => {
+       if (!HL) throw new Error("please take full snapshot after start recording");
+       JL(WW)
+     }, uL.mirror = nL;
+ ... (5 more added lines; see GitHub link above)
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6909-L6921` → after: `L9369-L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9369-L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9369-L9374) · [Before (L6909-L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6909-L6921)

```diff
-       orderBatches() {
-         const BB = this.opaqueBatches;
-         for (let OB = 0; OB < BB.length; OB++) {
-           const GB = BB[OB];
-           GB.group = OB;
-           for (let YB = 0; YB < OB; YB++) {
-             const OB = BB[YB];
-             if (OB.material === GB.material && OB.packed === GB.packed) {
-               GB.group = OB.group;
-               break
-             }
-           }
-           GB.nearest = GB.meshes.length > 0 ? GB.meshes[0].distance : 1 / 0
+       addAction(WW) {
+         const iW = !0 === this.raf;
+         if (!this.actions.length || this.actions[this.actions.length - 1].delay <= WW.delay) this.actions.push(WW);
+         else {
+           const iW = this.findActionIndex(WW);
+           this.actions.splice(iW, 0, WW)
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6923` → after: `L9376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9376) · [Before (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6923)

```diff
-         BB.sort(Hj)
+         iW && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6925-L6938` → after: `L9378-L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9378-L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9378-L9379) · [Before (L6925-L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6925-L6938)

```diff
-       batchFor(BB, OB, GB, YB, DB) {
-         for (const oB of this.opaqueBatches)
-           if (oB.material === BB && oB.packed === OB && oB.page === GB && oB.resting === YB) return oB;
-         const QB = {
-           material: BB,
-           packed: OB,
-           page: GB,
-           resting: YB,
-           meshes: [],
-           group: 0,
-           nearest: 0,
-           faceCull: this.batchFaceCull(BB, DB)
-         };
-         return this.opaqueBatches.push(QB), QB
+       start() {
+         this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6940-L6944` → after: `L9381-L9382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9381-L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9381-L9382) · [Before (L6940-L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6940-L6944)

```diff
-       batchFaceCull(BB, OB) {
-         return !(!OB || !(0, aj.n)(BB.model)) && (!this.zp || ! function(BB) {
-           var OB;
-           return !(null === (OB = (0, sO.h)(BB)) || void 0 === OB || !OB.movesVertices)
-         }(this.packVariant(BB, this.zp)))
+       updateLiveTime() {
+         !0 === this.raf && this.rafCheck()
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6946-L6952` → after: `L9384-L9389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9384-L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9384-L9389) · [Before (L6946-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6946-L6952)

```diff
-       writeFrameUniforms(BB, OB) {
-         const GB = this.frameUniforms,
-           YB = FY;
-         if ((0, Wj.w)(BB, GB), GB[YB.fogInfos] = OB.fogEnabled ? OB.fogMode : 0, GB[YB.fogInfos + 1] = OB.fogStart, GB[YB.fogInfos + 2] = OB.fogEnd, GB[YB.fogInfos + 3] = OB.fogDensity, GB.set(OB.fogColour, YB.fogColour), GB[YB.outputHeight] = OB.renderHeight, GB.set(OB.ambientCo … [truncated]
-           const OB = (0, Aj.i)(BB.Qq, BB.mp, BB.Ip);
-           for (let BB = 0; BB < 4; BB++) GB[YB.aoLevels + BB] = OB[BB] / 255;
-           this.aoLevelsWritten = !0
+       rafCheck() {
+         const WW = performance.now();
+         for (this.timeOffset += (WW - this.lastTimestamp) * this.speed, this.lastTimestamp = WW; this.actions.length;) {
+           const WW = this.actions[0];
+           if (!(this.timeOffset >= WW.delay)) break;
+           this.actions.shift(), WW.doAction()
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6954` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9391) · [Before (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6954)

```diff
-         this.device.queue.writeBuffer(this.frameBuffer, 0, GB)
+         this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6956-L6961` → after: `L9393-L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9393-L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9393-L9394) · [Before (L6956-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6956-L6961)

```diff
-       animateMaterials(BB) {
-         const OB = LY.anim;
-         for (const GB of this.materials.values()) GB.animated && (GB.uniformData[OB] = BB, this.device.queue.writeBuffer(GB.uniformBuffer, 4 * OB, GB.uniformData, OB, 1))
-       }
-       canDraw(BB, OB) {
-         return !("atlas" === BB.texture && !OB) || (this.warnOnce(`stride:${BB.id}`, `Lite terrain: material "${BB.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
+       clear() {
+         this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6963-L6971` → after: `L9396-L9397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9396-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9396-L9397) · [Before (L6963-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6963-L6971)

```diff
-       drawOpaque(BB, OB) {
-         let GB = 0;
-         BB.setBindGroup(1, this.frameBindGroup);
-         for (const YB of this.opaqueBatches) {
-           if (!YB.meshes.length || !this.canDraw(YB.material, YB.packed)) continue;
-           const DB = this.pipelineFor(YB.material, YB.packed, OB, YB.resting);
-           DB && (BB.setPipeline(DB), BB.setBindGroup(2, YB.material.bindGroup), this.zp && this.bindShaderPackInputs(BB, YB.material, this.zp, this.prepassOf.has(DB)), GB += this.drawBatch(BB, YB))
-         }
-         return GB
+       setSpeed(WW) {
+         this.speed = WW
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6973-L6974` → after: `L9399-L9400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9399-L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9399-L9400) · [Before (L6973-L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6973-L6974)

```diff
-       get readsMask() {
-         return this.maskPipelines > 0
+       isActive() {
+         return null !== this.raf
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6976-L6979` → after: `L9402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9402) · [Before (L6976-L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6976-L6979)

```diff
-       drawPrepass(BB, OB, GB) {
-         const YB = this.target,
-           DB = this.zp;
-         if (!YB || !DB || 0 === this.maskPipelines) return 0;
+       findActionIndex(WW) {
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6981-L6988` → after: `L9404-L9410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9404-L9410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9404-L9410) · [Before (L6981-L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6981-L6988)

```diff
-           oB = null;
-         this.geometry.setDrawing(!0);
-         try {
-           for (const jB of this.opaqueBatches) {
-             if (!jB.meshes.length || !this.canDraw(jB.material, jB.packed)) continue;
-             const yB = this.pipelineFor(jB.material, jB.packed, YB, jB.resting),
-               JB = yB && this.prepassOf.get(yB);
-             JB && (oB || (oB = BB.beginRenderPass(OB), oB.setBindGroup(0, GB), oB.setBindGroup(1, this.frameBindGroup)), oB.setPipeline(JB), oB.setBindGroup(2, jB.material.bindGroup), this.bindShaderPackInputs(oB, jB.material, DB, !0), QB += this.drawBatch(oB, jB))
+           OW = this.actions.length - 1;
+         for (; iW <= OW;) {
+           const mW = Math.floor((iW + OW) / 2);
+           if (this.actions[mW].delay < WW.delay) iW = mW + 1;
+           else {
+             if (!(this.actions[mW].delay > WW.delay)) return mW + 1;
+             OW = mW - 1
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6996-L7004` → after: `L9415-L9421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9415-L9421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9415-L9421) · [Before (L6996-L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L6996-L7004)

```diff
-       drawBatch(BB, OB) {
-         let GB = 0;
-         for (const YB of OB.meshes) {
-           const {
-             rangeCount: OB
-           } = YB;
-           OB > 0 && (GB += this.geometry.draw(BB, YB, this.lighting, YB.first0, YB.count0), OB > 1 && (GB += this.geometry.draw(BB, YB, this.lighting, YB.first1, YB.count1)))
-         }
-         return GB
+     }
+ 
+     function eL(WW, iW) {
+       if (WW.type === uP.IncrementalSnapshot && WW.data.source === oP.MouseMove && WW.data.positions && WW.data.positions.length) {
+         const OW = WW.data.positions[0].timeOffset,
+           mW = WW.timestamp + OW;
+         return WW.delay = mW - iW, mW - iW
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7006-L7015` → after: `L9423-L9442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9423-L9442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9423-L9442) · [Before (L7006-L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7006-L7015)

```diff
-       drawTransparent(BB, OB) {
-         let GB = 0,
-           YB = null,
-           DB = null;
-         BB.setBindGroup(1, this.frameBindGroup);
-         for (const QB of this.transparent) {
-           const oB = QB.material;
-           if (!this.canDraw(oB, QB.packed)) continue;
-           const jB = this.pipelineFor(oB, QB.packed, OB);
-           jB && (jB !== YB && (BB.setPipeline(jB), YB = jB, this.zp && this.bindShaderPackInputs(BB, oB, this.zp)), oB !== DB && (BB.setBindGroup(2, oB.bindGroup), DB = oB), GB += this.geometry.draw(BB, QB, this.lighting))
+       return WW.delay = WW.timestamp - iW, WW.delay
+     }
+ 
+     function vL(WW, iW) {
+       var OW = "function" == typeof Symbol && WW[Symbol.iterator];
+       if (!OW) return WW;
+       var mW, EW, NW = OW.call(WW),
+         PW = [];
+       try {
+         for (;
+           (void 0 === iW || iW-- > 0) && !(mW = NW.next()).done;) PW.push(mW.value)
+       } catch (LW) {
+         EW = {
+           error: LW
+         }
+       } finally {
+ ... (4 more added lines; see GitHub link above)
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7021-L7022` → after: `L9453-L9454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9453-L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9453-L9454) · [Before (L7021-L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7021-L7022)

```diff
-     function Gy(BB, OB, GB, YB) {
-       return `${xY(BB)}|${BB.atlasLayers}|${BB.v_}|${OB}|${GB}|${YB._colorFormat}|${YB._depthStencilFormat}|${YB._sampleCount}`
+     function pL(WW) {
+       return void 0 === WW ? [] : [].concat(WW)
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7025-L7026` → after: `L9457-L9461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9457-L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9457-L9461) · [Before (L7025-L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7025-L7026)

```diff
-     function Yy(BB, OB) {
-       return BB.distance - OB.distance
+     function fL(WW) {
+       return {
+         type: "xstate.assign",
+         assignment: WW
+       }
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7030` → after: `L9465-L9470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9465-L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9465-L9470) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7030)

```diff
-       return OB.distance - BB.distance
+       return "string" == typeof(WW = "string" == typeof WW && iW && iW[WW] ? iW[WW] : WW) ? {
+         type: WW
+       } : "function" == typeof WW ? {
+         type: WW.name,
+         exec: WW
+       } : WW
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7032-L7034` → after: `L9472-L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9472-L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9472-L9475) · [Before (L7032-L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7032-L7034)

```diff
-     class Qy {
-       constructor() {
-         this.left = []
+ 
+     function XL(WW) {
+       return function(iW) {
+         return WW === iW
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7036-L7041` → after: `L9477-L9491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9477-L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9477-L9491) · [Before (L7036-L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7036-L7041)

```diff
-       sort(BB, OB) {
-         for (let GB = 0; GB < BB.length; GB++) {
-           const OB = BB[GB].distance;
-           if (OB - OB !== 0) return !1
-         }
-         return this.sortRange(BB, 0, BB.length, OB), !0
+     }
+ 
+     function BL(WW) {
+       return "string" == typeof WW ? {
+         type: WW
+       } : WW
+     }
+ 
+     function qL(WW, iW) {
+       return {
+         value: WW,
+         context: iW,
+         actions: [],
+         changed: !1,
+         matches: XL(WW)
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7043-L7052` → after: `L9493-L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9493-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9493-L9504) · [Before (L7043-L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7043-L7052)

```diff
-       sortRange(BB, OB, GB, YB) {
-         if (GB - OB <= 16) {
-           for (let DB = OB + 1; DB < GB; DB++) {
-             const GB = BB[DB],
-               QB = YB * GB.distance;
-             let oB = DB - 1;
-             for (; oB >= OB && YB * BB[oB].distance > QB; oB--) BB[oB + 1] = BB[oB];
-             BB[oB + 1] = GB
-           }
-           return
+     }
+ 
+     function RL(WW, iW, OW) {
+       var mW = iW,
+         EW = !1;
+       return [WW.filter((function(WW) {
+         if ("xstate.assign" === WW.type) {
+           EW = !0;
+           var iW = Object.assign({}, mW);
+           return "function" == typeof WW.assignment ? iW = WW.assignment(mW, OW) : Object.keys(WW.assignment).forEach((function(EW) {
+             iW[EW] = "function" == typeof WW.assignment[EW] ? WW.assignment[EW](mW, OW) : WW.assignment[EW]
+           })), mW = iW, !1
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7054-L7065` → after: `L9506-L9507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9506-L9507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9506-L9507) · [Before (L7054-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7054-L7065)

```diff
-         const DB = OB + GB >>> 1;
-         if (this.sortRange(BB, OB, DB, YB), this.sortRange(BB, DB, GB, YB), YB * BB[DB - 1].distance <= YB * BB[DB].distance) return;
-         const {
-           left: QB
-         } = this, oB = DB - OB;
-         for (let MB = 0; MB < oB; MB++) QB[MB] = BB[OB + MB];
-         let jB = 0,
-           yB = DB,
-           JB = OB;
-         for (; jB < oB && yB < GB;) BB[JB++] = YB * BB[yB].distance < YB * QB[jB].distance ? BB[yB++] : QB[jB++];
-         for (; jB < oB;) BB[JB++] = QB[jB++]
-       }
+         return !0
+       })), mW, EW]
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7069-L7084` → after: `L9510-L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9510-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9510-L9599) · [Before (L7069-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7069-L7084)

```diff
-     function jy(BB, OB, GB, YB) {
-       let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : OB;
-       const QB = Math.min(OB, GB),
-         oB = new Uint32Array(SG(YB));
-       for (let jB = 0; jB < YB; jB++) {
-         const OB = Math.floor(jB * QB / YB),
-           GB = Math.max(OB + 1, Math.floor((jB + 1) * QB / YB));
-         for (let yB = 0; yB < YB; yB++) {
-           const JB = Math.floor(yB * QB / YB),
-             MB = Math.max(JB + 1, Math.floor((yB + 1) * QB / YB));
-           let PB = 0;
-           for (let YB = OB; YB < GB; YB++)
-             for (let OB = JB; OB < MB; OB++) BB[YB * DB + OB] >= oy && PB++;
-           if (2 * PB >= (GB - OB) * (MB - JB)) {
-             const BB = yB + YB * jB;
-             oB[BB >>> 5] |= 1 << (31 & BB)
+     function GL(WW, iW) {
+       void 0 === iW && (iW = {});
+       var OW = vL(RL(pL(WW.states[WW.initial].entry).map((function(WW) {
+           return CL(WW, iW.actions)
+         })), WW.context, VL), 2),
+         mW = OW[0],
+         EW = OW[1],
+         NW = {
+           config: WW,
+           _options: iW,
+           initialState: {
+             value: WW.initial,
+             actions: mW,
+             context: EW,
+             matches: XL(WW.initial)
+           },
+ ... (74 more added lines; see GitHub link above)
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7086-L7087` → after: `L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9601) · [Before (L7086-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7086-L7087)

```diff
-         }
-       }
+         };
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7092` → after: `L9612-L9654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9612-L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9612-L9654) · [Before (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7092)

```diff
-       return Math.max(1, Math.min(16, BB))
+       var iW = WW.initialState,
+         OW = gL.NotStarted,
+         mW = new Set,
+         EW = {
+           _machine: WW,
+           send: function(EW) {
+             OW === gL.Running && (iW = WW.transition(iW, EW), IL(iW, BL(EW)), mW.forEach((function(WW) {
+               return WW(iW)
+             })))
+           },
+           subscribe: function(WW) {
+             return mW.add(WW), WW(iW), {
+               unsubscribe: function() {
+                 return mW.delete(WW)
+               }
+             }
+ ... (27 more added lines; see GitHub link above)
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7094-L7134` → after: `L9656-L9718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9656-L9718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9656-L9718) · [Before (L7094-L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7094-L7134)

```diff
-     class Jy {
-       constructor(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
-         this.sink = BB, this.loadTexture = OB, this.warn = GB, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise. … [truncated]
-       }
-       update(BB, OB) {
-         return (BB.pC !== this.builtVersion || this.blockCaster.length !== OB) && (this.build(BB, OB), !0)
-       }
-       build(BB, OB) {
-         this.builtVersion = BB.pC;
-         const GB = new Uint16Array(OB),
-           YB = new Map;
-         for (let DB = 1; DB < OB; DB++) {
-           const OB = this.classify(BB, DB, YB);
-           if (null === OB || OB === NG) {
-             GB[DB] = null === OB ? 0 : NG;
- ... (25 more removed lines; see GitHub link above)
+ 
+     function rL(WW, iW) {
+       let {
+         getCastFn: OW,
+         applyEventsSynchronously: mW,
+         emitter: EW
+       } = iW;
+       return aL(GL({
+         id: "player",
+         context: WW,
+         initial: "paused",
+         states: {
+           playing: {
+             on: {
+               PAUSE: {
+                 target: "paused",
+ ... (47 more added lines; see GitHub link above)
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7137-L7150` → after: `L9721-L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9721-L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9721-L9731) · [Before (L7137-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7137-L7150)

```diff
-         if (BB.Ul[OB]) return null;
-         const DB = BB.kl[OB] ? BB.WC(OB) : null;
-         if (DB && DB.length >= 6) {
-           const BB = function(BB) {
-             const OB = new Uint32Array(16);
-             for (let GB = 0; GB + 6 <= BB.length; GB += 6) {
-               const YB = [0, 1, 2].map((OB => Math.max(0, Math.ceil(8 * BB[GB + OB] - .5)))),
-                 DB = [0, 1, 2].map((OB => Math.min(7, Math.floor(8 * BB[GB + OB + 3] - .5))));
-               for (let BB = YB[2]; BB <= DB[2]; BB++)
-                 for (let GB = YB[1]; GB <= DB[1]; GB++)
-                   for (let QB = YB[0]; QB <= DB[0]; QB++) {
-                     const YB = QB + 8 * (GB + 8 * BB);
-                     OB[YB >>> 5] |= 1 << (31 & YB)
-                   }
+       }, {
+         actions: {
+           castEvent: fL({
+             lastPlayedEvent: (WW, iW) => "CAST_EVENT" === iW.type ? iW.payload.event : WW.lastPlayedEvent
+           }),
+           recordTimeOffset: fL(((WW, iW) => {
+             let OW = WW.timeOffset;
+             return "payload" in iW && "timeOffset" in iW.payload && (OW = iW.payload.timeOffset), {
+               ...WW,
+               timeOffset: OW,
+               baselineTime: WW.events[0].timestamp + OW
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7152-L7167` → after: `L9733-L9735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9733-L9735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9733-L9735) · [Before (L7152-L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7152-L7167)

```diff
-             return OB
-           }(DB);
-           return function(BB) {
-             return BB.every((BB => 4294967295 === BB))
-           }(BB) ? NG : BB.every((BB => 0 === BB)) ? null : {
-             kind: "shape",
-             key: `shape:${BB.join(",")}`,
-             mask: BB
-           }
-         }
-         if (BB.cV[OB] || !BB.oq[OB]) return null;
-         const QB = [0, 1, 2, 3, 4, 5].map((YB => {
-           const DB = BB.jq[6 * OB + YB];
-           let QB = GB.get(DB);
-           return void 0 === QB && (QB = function(BB) {
-             if (!BB || BB.Nq) return null;
+           })),
+           play(WW) {
+             var iW;
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7169-L7171` → after: `L9737-L9740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9737-L9740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9737-L9740) · [Before (L7169-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7169-L7171)

```diff
-               b_: OB,
-               v_: GB,
-               T_: YB
+               timer: NW,
+               events: PW,
+               baselineTime: LW,
+               lastPlayedEvent: cW
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7173-L7263` → after: `L9742-L9813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9742-L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9742-L9813) · [Before (L7173-L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7173-L7263)

```diff
-             if (!OB || !GB || !(GB > 0) || void 0 === YB || !(YB >= 0)) return null;
-             const DB = OB[0],
-               QB = GB * GB * 4;
-             if (!DB || DB.byteLength < QB) return null;
-             const oB = Math.floor(DB.byteLength / QB),
-               jB = OB[Math.floor(YB / oB)];
-             if (!jB) return null;
-             const yB = new Uint8Array(jB.buffer, jB.byteOffset, jB.byteLength),
-               JB = YB % oB * QB;
-             if (JB + QB > yB.length) return null;
-             const MB = new Uint8Array(GB * GB);
-             let PB = !1;
-             for (let zB = 0; zB < MB.length; zB++) MB[zB] = yB[JB + 4 * zB + 3], PB ||= MB[zB] < oy;
-             return PB ? {
-               alpha: MB,
-               width: GB
- ... (75 more removed lines; see GitHub link above)
+             NW.clear();
+             for (const OW of PW) eL(OW, LW);
+             const wW = function(WW, iW) {
+               for (let OW = WW.length - 1; OW >= 0; OW--) {
+                 const mW = WW[OW];
+                 if (mW.type === uP.Meta && mW.timestamp <= iW) return WW.slice(OW)
+               }
+               return WW
+             }(PW, LW);
+             let tW = null == cW ? void 0 : cW.timestamp;
+             (null == cW ? void 0 : cW.type) === uP.IncrementalSnapshot && cW.data.source === oP.MouseMove && (tW = cW.timestamp + (null == (iW = cW.data.positions[0]) ? void 0 : iW.timeOffset)), LW < (tW || 0) && EW.emit(DP.PlayBack);
+             const ZW = new Array;
+             for (const mW of wW)
+               if (!(tW && tW < LW && (mW.timestamp <= tW || mW === cW)))
+                 if (mW.timestamp < LW) ZW.push(mW);
+                 else {
+ ... (56 more added lines; see GitHub link above)
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7266-L7271` → after: `L9817-L9819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9817-L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9817-L9819) · [Before (L7266-L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7266-L7271)

```diff
-     function zy() {
-       return {
-         bricks: new Uint32Array(JG),
-         cells: new Uint16Array(32768),
-         special: new Uint8Array(jG)
-       }
+     function FL(WW, iW) {
+       let OW = zL.get(WW);
+       return OW || (OW = new Map, zL.set(WW, OW)), OW.has(iW) || OW.set(iW, []), OW.get(iW)
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7273-L7428` → after: `L9821-L9859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9821-L9859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9821-L9859) · [Before (L7273-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7273-L7428)

```diff
-     class ly {
-       constructor(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
-         this.casters = BB, this.writeVoxels = OB, this.writePool = GB, this.warn = YB, this.eyeChunk = null, this.slotChunk = new Array(OG).fill(null), this.slotVersion = new Float64Array(OG).fill(-1), this.slotPool = new Array(OG).fill(null), this.starved = new Uint8Array(OG), t … [truncated]
-         for (let DB = 0; DB < fG; DB++) this.freePool[DB] = 65535 - DB
-       }
-       get queuedCount() {
-         return this.queue.length
-       }
-       get poolInUse() {
-         return fG - this.freeCount
-       }
-       chunkAdded(BB) {
-         if (null === this.eyeChunk || !this.inRadius(BB.i, BB.j, BB.k)) return;
-         const OB = pG(BB.i, BB.j, BB.k);
-         this.slotChunk[OB] = BB, this.slotVersion[OB] = -1, this.enqueue(OB)
- ... (140 more removed lines; see GitHub link above)
+ 
+     function QL(WW, iW, OW) {
+       return async mW => {
+         if (mW && "object" === typeof mW && "rr_type" in mW) {
+           if (OW && (OW.isUnchanged = !1), "ImageBitmap" === mW.rr_type && "args" in mW) {
+             const EW = await QL(WW, iW, OW)(mW.args);
+             return await createImageBitmap.apply(null, EW)
+           }
+           if ("index" in mW) {
+             if (OW || null === iW) return mW;
+             const {
+               rr_type: WW,
+               index: EW
+             } = mW;
+             return FL(iW, WW)[EW]
+           }
+ ... (23 more added lines; see GitHub link above)
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7431` → after: `L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9871) · [Before (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7431)

```diff
-         return 0 === qB ? YG : 32768 === ZB ? DG | NB << 8 : (this.writePoolEntries(OB, GB, YB), this.writeVoxels(yG + OB * JG, zB), QG | NB << 8)
+         return mW
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7433-L7456` → after: `L9873-L9888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9873-L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9873-L9888) · [Before (L7433-L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7433-L7456)

```diff
-       writePoolEntries(BB, OB, GB) {
-         const {
-           bricks: YB,
-           cells: DB,
-           special: QB
-         } = OB, oB = this.entry;
-         let jB = 0;
-         for (let MB = 0; MB < jG; MB++) jB += QB[MB];
-         if (0 === jB) return;
-         GB && this.freeCount < jB && this.evictBeyond(BB, jB);
-         const yB = new Uint32Array(GB ? Math.min(jB, this.freeCount) : 0);
-         let JB = 0;
-         for (let MB = 0; MB < jG; MB++) {
-           if (!QB[MB]) continue;
-           const GB = 3 * MB;
-           if (JB === yB.length) {
- ... (8 more removed lines; see GitHub link above)
+     }
+     const Wc = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
+     async function ic(WW) {
+       let {
+         mutation: iW,
+         target: OW,
+         type: mW,
+         imageMap: EW,
+         errorHandler: NW
+       } = WW;
+       try {
+         const WW = function(WW, iW) {
+           try {
+             return iW === vP.WebGL ? WW.getContext("webgl") || WW.getContext("experimental-webgl") : WW.getContext("webgl2")
+           } catch (OW) {
+             return null
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7458-L7460` → after: `L9890-L9905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9890-L9905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9890-L9905) · [Before (L7458-L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7458-L7460)

```diff
-           YB[GB + 2] = jB + 1, this.writePool(kG + 32 * jB, oB)
-         }
-         yB.length > 0 && (this.slotPool[BB] = yB)
+         }(OW, mW);
+         if (!WW) return;
+         if (iW.setter) return void(WW[iW.property] = iW.args[0]);
+         const NW = WW[iW.property],
+           PW = await Promise.all(iW.args.map(QL(EW, WW)));
+         ! function(WW, iW) {
+           if (!(null == iW ? void 0 : iW.constructor)) return;
+           const {
+             name: OW
+           } = iW.constructor;
+           if (!Wc.includes(OW)) return;
+           const mW = FL(WW, OW);
+           mW.includes(iW) || mW.push(iW)
+         }(WW, NW.apply(WW, PW))
+       } catch (PW) {
+         NW(iW, PW)
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7462-L7470` → after: `L9907-L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9907-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9907-L9931) · [Before (L7462-L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7462-L7470)

```diff
-       evictBeyond(BB, OB) {
-         const GB = this.slotDistance(BB),
-           YB = [];
-         for (let DB = 0; DB < OG; DB++) DB !== BB && this.slotPool[DB] && this.slotDistance(DB) > GB && YB.push(DB);
-         YB.sort(((BB, OB) => this.slotDistance(OB) - this.slotDistance(BB)));
-         for (const DB of YB) {
-           if (this.freeCount >= OB) return;
-           const BB = this.slotChunk[DB];
-           BB && !BB.lV && BB.sz && (BB.Bq === this.slotVersion[DB] || Py(BB)) && this.encodeSlot(DB, this.victimScratch, !1)
+     }
+     async function Oc(WW) {
+       let {
+         event: iW,
+         mutation: OW,
+         target: mW,
+         imageMap: EW,
+         canvasEventMap: NW,
+         errorHandler: PW
+       } = WW;
+       try {
+         const WW = NW.get(iW) || OW,
+           LW = "commands" in WW ? WW.commands : [WW];
+         if ([vP.WebGL, vP.WebGL2].includes(OW.type)) {
+           for (let WW = 0; WW < LW.length; WW++) {
+             const iW = LW[WW];
+ ... (9 more added lines; see GitHub link above)
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7472-L7476` → after: `L9933-L9962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9933-L9962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9933-L9962) · [Before (L7472-L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7472-L7476)

```diff
-       }
-       dropSpecials(BB, OB) {
-         this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
-         const GB = 3 * OB;
-         for (let YB = 0; YB < oG; YB++) BB.cells[OB * oG + YB] !== NG && (BB.bricks[GB + (YB >>> 5)] &= ~(1 << (31 & YB)))
+         await async function(WW) {
+           let {
+             event: iW,
+             mutations: OW,
+             target: mW,
+             imageMap: EW,
+             errorHandler: NW
+           } = WW;
+           const PW = mW.getContext("2d");
+           if (!PW) return void NW(OW[0], new Error("Canvas context is null"));
+           const LW = OW.map((async WW => Promise.all(WW.args.map(QL(EW, PW)))));
+           (await Promise.all(LW)).forEach(((WW, mW) => {
+             const LW = OW[mW];
+             try {
+               if (LW.setter) return void(PW[LW.property] = LW.args[0]);
+               const OW = PW[LW.property];
+ ... (14 more added lines; see GitHub link above)
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7482-L7489` → after: `L9967-L9984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9967-L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9967-L9984) · [Before (L7482-L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7482-L7489)

```diff
-         this.device = BB, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new XG, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.mP = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = BB.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = BB.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         NW(this, "mediaMap", new Map), NW(this, "warn"), NW(this, "service"), NW(this, "speedService"), NW(this, "emitter"), NW(this, "getCurrentTime"), NW(this, "metadataCallbackMap", new Map), this.warn = WW.warn, this.service = WW.service, this.speedService = WW.speedService,  … [truncated]
+           this.syncAllMediaElements()
+         }))
+       }
+       syncAllMediaElements() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
+           pause: !1
+         };
+         this.mediaMap.forEach(((iW, OW) => {
+           this.syncTargetWithState(OW), WW.pause && OW.pause()
+         }))
+       }
+       start() {
+         this.syncAllMediaElements()
+       }
+       pause() {
+ ... (2 more added lines; see GitHub link above)
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7492-L7506` → after: `L9987-L10021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L9987-L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L9987-L10021) · [Before (L7492-L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7492-L7506)

```diff
-       update(BB, OB, GB) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
-           frame: YB
-         } = this;
-         YB.ZP(BB, OB), GB.forEachSunShadowCaster((BB => {
-           this.add(BB)
-         })), YB.finish();
-         const DB = 0 === YB.parts;
-         if (DB && this.uploadedEmpty) return;
-         this.uploadedEmpty = DB;
-         const {
-           queue: QB
-         } = this.device, {
-           words: oB
+       seekTo(WW) {
+         let {
+           time: iW,
+           target: OW,
+           mediaState: mW
+         } = WW;
+         if (mW.isPlaying) {
+           const WW = (iW - mW.lastInteractionTimeOffset) / 1e3 * mW.playbackRate,
+             EW = "duration" in OW && OW.duration;
+           if (Number.isNaN(EW)) return void this.waitForMetadata(OW);
+           let NW = mW.currentTimeAtLastInteraction + WW;
+           OW.loop && !1 !== EW && (NW %= EW), OW.currentTime = NW
+         } else OW.pause(), OW.currentTime = mW.currentTimeAtLastInteraction
+       }
+       waitForMetadata(WW) {
+         if (this.metadataCallbackMap.has(WW)) return;
+ ... (19 more added lines; see GitHub link above)
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7508` → after: `L10023-L10040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10023-L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10023-L10040) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7508)

```diff
-         QB.writeBuffer(this.frameBuffer, 0, oB, 0, 16385), YB.refs > 0 && QB.writeBuffer(this.frameBuffer, 65540, oB, mG, YB.refs), DB || QB.writeBuffer(this.frameBuffer, 327684, oB, IG, YB.parts * uG)
+         const EW = this.mediaMap.get(iW),
+           {
+             type: NW,
+             playbackRate: PW,
+             currentTime: LW,
+             muted: cW,
+             volume: wW,
+             loop: tW
+           } = mW;
+         return {
+           isPlaying: NW === gP.Play || NW !== gP.Pause && ((null == EW ? void 0 : EW.isPlaying) || null !== iW.getAttribute("autoplay")),
+           currentTimeAtLastInteraction: LW ?? (null == EW ? void 0 : EW.currentTimeAtLastInteraction) ?? 0,
+           lastInteractionTimeOffset: OW,
+           playbackRate: PW ?? (null == EW ? void 0 : EW.playbackRate) ?? 1,
+           volume: wW ?? (null == EW ? void 0 : EW.volume) ?? 1,
+           muted: cW ?? (null == EW ? void 0 : EW.muted) ?? null === iW.getAttribute("muted"),
+ ... (2 more added lines; see GitHub link above)
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7510-L7511` → after: `L10042-L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10042-L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10042-L10043) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7510-L7511)

```diff
-       add(BB) {
-         const OB = this.gridFor(BB);
+       syncTargetWithState(WW) {
+         const iW = this.mediaMap.get(WW);
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7514-L7524` → after: `L10046-L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10046-L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10046-L10059) · [Before (L7514-L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7514-L7524)

```diff
-           frame: GB
-         } = this, {
-           mP: YB,
-           worldAt: DB,
-           instances: QB,
-           instanceCount: oB,
-           thin: jB
-         } = BB;
-         if (QB)
-           for (let yB = 0; yB < oB; yB++) jB ? (EG(QB, 16 * yB, YB, DB, this.mP), GB.add(OB, this.mP)) : GB.add(OB, QB, 16 * yB);
-         else GB.add(OB, YB, DB)
+           muted: OW,
+           loop: mW,
+           volume: EW,
+           isPlaying: NW
+         } = iW, PW = this.service.state.matches("paused"), LW = iW.playbackRate * this.speedService.state.context.timer.speed;
+         try {
+           this.seekTo({
+             time: this.getCurrentTime(),
+             target: WW,
+             mediaState: iW
+           }), WW.volume !== EW && (WW.volume = EW), WW.muted = OW, WW.loop = mW, WW.playbackRate !== LW && (WW.playbackRate = LW), NW && !PW ? WW.play() : WW.pause()
+         } catch (cW) {
+           this.warn(`Failed to replay media interactions: ${cW.message||cW}`)
+         }
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7526` → after: `L10061-L10089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10061-L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10061-L10089) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7526)

```diff
-       gridFor(BB) {
+       addMediaElements(WW, iW, OW) {
+         if (!["AUDIO", "VIDEO"].includes(WW.nodeName)) return;
+         const mW = WW,
+           EW = OW.getMeta(mW);
+         if (!EW || !("attributes" in EW)) return;
+         const NW = this.service.state.matches("paused"),
+           PW = EW.attributes;
+         let LW = !1;
+         LW = PW.rr_mediaState ? "played" === PW.rr_mediaState : null !== mW.getAttribute("autoplay"), LW && NW && mW.pause();
+         let cW = 1;
+         "number" === typeof PW.rr_mediaPlaybackRate && (cW = PW.rr_mediaPlaybackRate);
+         let wW = !1;
+         wW = "boolean" === typeof PW.rr_mediaMuted ? PW.rr_mediaMuted : null !== mW.getAttribute("muted");
+         let tW = !1;
+         tW = "boolean" === typeof PW.rr_mediaLoop ? PW.rr_mediaLoop : null !== mW.getAttribute("loop");
+         let ZW = 1;
+ ... (13 more added lines; see GitHub link above)
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7528-L7600` → after: `L10091-L10093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10091-L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10091-L10093) · [Before (L7528-L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7528-L7600)

```diff
-           geometry: OB,
-           indexed: GB,
-           first: YB,
-           count: DB,
-           skip: QB
-         } = BB, oB = this.grids.get(OB);
-         oB || (oB = new Map, this.grids.set(OB, oB));
-         const jB = `${GB?YB:-1-YB}:${DB}:${null!==QB&&void 0!==QB?QB:""}`;
-         let yB = oB.get(jB);
-         if (void 0 !== yB || this.gridsFull) return yB;
-         const JB = performance.now();
-         if (this.bakeDeadline < 0) this.bakeDeadline = JB + 2;
-         else if (JB > this.bakeDeadline) return;
-         return yB = this.bake(OB, GB, YB, DB, QB), void 0 !== yB && oB.set(jB, yB), yB
-       }
-       bake(BB, OB, GB, YB, DB) {
- ... (57 more removed lines; see GitHub link above)
+           target: iW,
+           timeOffset: OW,
+           mutation: mW
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7602-L7607` → after: `L10095-L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10095-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10095-L10105) · [Before (L7602-L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7602-L7607)

```diff
-         if (this.gridTop + jB.length > iG) return void(this.gridsFull = !0);
-         const JB = this.gridTop;
-         return this.gridTop += jB.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * JB, jB), {
-           ...yB,
-           at: JB
-         }
+         this.mediaMap.set(iW, this.getMediaStateFromMutation({
+           target: iW,
+           timeOffset: OW,
+           mutation: mW
+         })), this.syncTargetWithState(iW)
+       }
+       isSupportedMediaElement(WW) {
+         return ["AUDIO", "VIDEO"].includes(WW.nodeName)
+       }
+       reset() {
+         this.mediaMap.clear()
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7613` → after: `L10110-L10117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10110-L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10110-L10117) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7613)

```diff
-       return BB[0] * OB[0] + BB[1] * OB[1] + BB[2] * OB[2] < Zy
+       if ("DIALOG" !== WW.nodeName || WW instanceof mN) return;
+       const OW = WW,
+         mW = OW.open,
+         EW = mW && OW.matches("dialog:modal"),
+         NW = OW.getAttribute("rr_open_mode"),
+         PW = "string" === typeof(null == iW ? void 0 : iW.attributes.open) || "string" === typeof OW.getAttribute("open"),
+         LW = "modal" === NW;
+       mW && !(EW && "non-modal" === NW || !EW && LW) || (OW.isConnected ? (mW && OW.close(), PW && (LW ? OW.showModal() : OW.show())) : console.warn("dialog is not attached to the dom", OW))
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7615-L7626` → after: `L10119-L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10119-L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10119-L10123) · [Before (L7615-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7615-L7626)

```diff
-     async function Ry(BB) {
-       const {
-         pixels: OB,
-         width: GB,
-         height: YB
-       } = await BO(BB), DB = new Uint8Array(GB * YB);
-       for (let QB = 0; QB < DB.length; QB++) DB[QB] = OB[4 * QB + 3];
-       return {
-         width: GB,
-         height: YB,
-         alpha: DB
-       }
+ 
+     function Nc(WW, iW) {
+       if ("DIALOG" !== WW.nodeName || WW instanceof mN) return;
+       const OW = WW;
+       OW.isConnected ? null === iW.attributes.open && (OW.removeAttribute("open"), OW.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", OW)
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7628-L7649` → after: `L10125-L10130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10125-L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10125-L10130) · [Before (L7628-L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7628-L7649)

```diff
-     class Wy {
-       constructor(BB, OB) {
-         this.device = BB, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(aG.n), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = BB.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * zG,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = BB.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [GB, YB, DB] = aG.q;
- ... (6 more removed lines; see GitHub link above)
+     const Pc = function(WW) {
+         return {
+           all: WW = WW || new Map,
+           on: function(iW, OW) {
+             var mW = WW.get(iW);
+             mW ? mW.push(OW) : WW.set(iW, [OW])
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7651-L7899` → after: `L10132-L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10132-L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10132-L10142) · [Before (L7651-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7651-L7899)

```diff
-           dimension: "3d",
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
-         }), this.volumeView = this.volume.createView({
-           label: "sun-shadow-volume"
-         }), this.volumeSampler = BB.createSampler({
-           label: "sun-shadow-volume",
-           magFilter: "linear",
-           minFilter: "linear",
-           addressModeU: "repeat",
-           addressModeV: "repeat",
-           addressModeW: "repeat"
-         }), this.work = BB.createBuffer({
-           label: "sun-shadow-volume-work",
-           size: aG.n,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
- ... (233 more removed lines; see GitHub link above)
+           off: function(iW, OW) {
+             var mW = WW.get(iW);
+             mW && (OW ? mW.splice(mW.indexOf(OW) >>> 0, 1) : WW.set(iW, []))
+           },
+           emit: function(iW, OW) {
+             var mW = WW.get(iW);
+             mW && mW.slice().map((function(WW) {
+               WW(OW)
+             })), (mW = WW.get("*")) && mW.slice().map((function(WW) {
+               WW(iW, OW)
+             }))
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7901-L7932` → after: `L10144-L10152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10144-L10152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10144-L10152) · [Before (L7901-L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7901-L7932)

```diff
-         }), (BB => {
-           this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(BB)}`)
-         })), null
-       }
-       start(BB) {
-         if (this.window) return this.window;
-         const OB = (BB, OB) => {
-           this.written = !0, this.device.queue.writeBuffer(this.special, 4 * BB, OB)
-         };
-         this.casters = new Jy(((BB, GB) => {
-           this.castersWritten = !0, OB(BB, GB)
-         }), Ry);
-         const GB = new ly(this.casters, ((BB, OB) => {
-           this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * BB, OB)
-         }), OB);
-         GB.encoded = BB => {
- ... (16 more removed lines; see GitHub link above)
+         }
+       },
+       Lc = "[replayer]",
+       cc = {
+         duration: 500,
+         lineCap: "round",
+         lineWidth: 3,
+         strokeStyle: "red"
+       };
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7934-L8007` → after: `L10154-L10155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10154-L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10154-L10155) · [Before (L7934-L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7934-L8007)

```diff
-     function ky(BB, OB, GB, YB) {
-       BB.drawOffset(OB, YB + Sy), OB[YB + ny] = BB.drawTime(), GB[YB + Uy] = BB.ring.drawStart(), GB[YB + fy] = BB.ring.drawCount()
-     }
-     const dy = `\n${XY}\n\nconst MAX_STOPS = ${Vy.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Vy.b/4}>,\n\tcolor1: array<vec4f, ${Vy.b}>,\n\t … [truncated]
-     var Ky = GB(44735);
-     class uy {
-       constructor(BB, OB, GB, YB) {
-         this.device = BB, this.system = OB, this.frameIndex = GB, this.bindings = YB, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Ky.g)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, BB * Vy.d * 4, this.system.ring.records, BB * Vy.d, (OB - BB) * Vy.d)
-         };
-         const {
-           name: DB
-         } = OB;
-         this.ring = BB.createBuffer({
-           label: `particles-${DB}`,
-           size: OB.ring.records.byteLength,
- ... (58 more removed lines; see GitHub link above)
+     function wc(WW) {
+       return WW.type == uP.IncrementalSnapshot && (WW.data.source == oP.TouchMove || WW.data.source == oP.MouseInteraction && WW.data.type == dP.TouchStart)
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8011-L8057` → after: `L10159-L10174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10159-L10174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10159-L10174) · [Before (L8011-L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8011-L8057)

```diff
-         this.device = BB, this.resources = OB, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-           order: 251,
-           isTransparent: !0,
-           _worldCenter: [0, 0, 0],
-           bind: (BB, OB) => (this.bindTarget(OB), {
-             renderable: this.renderable,
-             pipeline: KO(this.device, OB),
-             draw: BB => OB === this.preparedTarget ? this.draw(BB) : 0
-           })
-         }
-       }
-       rebind(BB) {
-         this.device = BB, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
-         for (const [OB, GB] of this.systems) {
-           const YB = new uy(BB, OB, GB.frameIndex, this.bindings),
-             DB = OB.ring.drawCount();
- ... (31 more removed lines; see GitHub link above)
+         var OW = this;
+         if (NW(this, "wrapper"), NW(this, "iframe"), NW(this, "UNSAFE_replayCanvas", !1), NW(this, "service"), NW(this, "speedService"), NW(this, "config"), NW(this, "usingVirtualDom", !1), NW(this, "virtualDom", new TN), NW(this, "mouse"), NW(this, "mouseTail", null), NW(this, " … [truncated]
+             this.iframe.style.display = "inherit";
+             for (const iW of [this.mouseTail, this.iframe]) iW && (iW.setAttribute("width", String(WW.width)), iW.setAttribute("height", String(WW.height)))
+           })), NW(this, "applyEventsSynchronously", (WW => {
+             for (const iW of WW) {
+               switch (iW.type) {
+                 case uP.DomContentLoaded:
+                 case uP.Load:
+                   continue;
+                 case uP.FullSnapshot:
+                 case uP.Meta:
+                 case uP.Plugin:
+                 case uP.IncrementalSnapshot:
+               }
+               this.getCastFn(iW, !0)()
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8059-L8063` → after: `L10176-L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10176-L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10176-L10220) · [Before (L8059-L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8059-L8063)

```diff
-           }, {
-             binding: 4,
-             visibility: GPUShaderStage.FRAGMENT,
-             sampler: {
-               type: "filtering"
+           })), NW(this, "getCastFn", (function(WW) {
+             let iW, mW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             switch (WW.type) {
+               case uP.DomContentLoaded:
+               case uP.Load:
+                 break;
+               case uP.Custom:
+                 iW = () => {
+                   OW.emitter.emit(DP.CustomEvent, WW)
+                 };
+                 break;
+               case uP.Meta:
+                 iW = () => OW.emitter.emit(DP.Resize, {
+                   width: WW.data.width,
+                   height: WW.data.height
+                 });
+ ... (29 more added lines; see GitHub link above)
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8065-L8069` → after: `L10222-L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10222-L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10222-L10241) · [Before (L8065-L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8065-L8069)

```diff
-           }, {
-             binding: 5,
-             visibility: GPUShaderStage.FRAGMENT,
-             texture: {
-               sampleType: "float"
+             return () => {
+               iW && iW();
+               for (const iW of OW.config.plugins || []) iW.handler && iW.handler(WW, mW, {
+                 replayer: OW
+               });
+               OW.service.send({
+                 type: "CAST_EVENT",
+                 payload: {
+                   event: WW
+                 }
+               });
+               const EW = OW.service.state.context.events.length - 1;
+               if (!OW.config.liveMode && WW === OW.service.state.context.events[EW]) {
+                 const iW = () => {
+                   EW < OW.service.state.context.events.length - 1 || (OW.backToNormal(), OW.service.send("END"), OW.emitter.emit(DP.Finish))
+                 };
+ ... (4 more added lines; see GitHub link above)
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8071` → after: `L10243-L10265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10243-L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10243-L10265) · [Before (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8071)

```diff
-           }]
+           })), !(null == iW ? void 0 : iW.liveMode) && WW.length < 2) throw new Error("Replayer need at least 2 events.");
+         const mW = {
+           speed: 1,
+           maxSpeed: 360,
+           root: document.body,
+           loadTimeout: 0,
+           skipInactive: !1,
+           inactivePeriodThreshold: 1e4,
+           showWarning: !0,
+           showDebug: !1,
+           blockClass: "rr-block",
+           liveMode: !1,
+           insertStyleRules: [],
+           triggerFocus: !0,
+           UNSAFE_replayCanvas: !1,
+           pauseAnimation: !0,
+ ... (7 more added lines; see GitHub link above)
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8073-L8080` → after: `L10267-L10296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10267-L10296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10267-L10296) · [Before (L8073-L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8073-L8080)

```diff
-         this.frameLayout = BB.createBindGroupLayout({
-           label: "particles-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX,
-             buffer: {
-               type: "uniform",
-               hasDynamicOffset: !0
+         this.emitter.on(DP.Flush, (() => {
+           if (this.usingVirtualDom) {
+             const OW = {
+               mirror: this.mirror,
+               applyCanvas: (WW, iW, OW) => {
+                 Oc({
+                   event: WW,
+                   mutation: iW,
+                   target: OW,
+                   imageMap: this.imageMap,
+                   canvasEventMap: this.canvasEventMap,
+                   errorHandler: this.warnCanvasMutationFailed.bind(this)
+                 })
+               },
+               applyInput: this.applyInput.bind(this),
+               applyScroll: this.applyScroll.bind(this),
+ ... (14 more added lines; see GitHub link above)
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8082-L8087` → after: `L10298-L10321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10298-L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10298-L10321) · [Before (L8082-L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8082-L8087)

```diff
-           }]
-         }), this.pipelineLayout = BB.createPipelineLayout({
-           bindGroupLayouts: [nO(BB), OB, this.frameLayout]
-         }), this.module = BB.createShaderModule({
-           label: "particles",
-           code: dy
+             if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
+               for (const WW in this.legacy_missingNodeRetryMap) try {
+                 const iW = this.legacy_missingNodeRetryMap[WW],
+                   mW = SN(iW.node, this.mirror, this.virtualDom.mirror);
+                 MN(mW, iW.node, OW, this.virtualDom.mirror), iW.node = mW
+               } catch (iW) {
+                 this.warn(iW)
+               }
+             this.constructedStyleMutations.forEach((WW => {
+               this.applyStyleSheetMutation(WW)
+             })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((WW => {
+               this.applyAdoptedStyleSheet(WW)
+             })), this.adoptedStyleSheets = []
+           }
+           if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove(" … [truncated]
+             const [WW, iW] = this.lastMouseDownEvent;
+ ... (8 more added lines; see GitHub link above)
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8089-L8093` → after: `L10323-L10391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10323-L10391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10323-L10391) · [Before (L8089-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8089-L8093)

```diff
-         const GB = BB.createTexture({
-           label: "particles-no-ramp",
-           size: [1, 1],
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
+         this.service = rL({
+           events: WW.map((WW => iW && iW.unpackFn ? iW.unpackFn(WW) : WW)).sort(((WW, iW) => WW.timestamp - iW.timestamp)),
+           timer: EW,
+           timeOffset: 0,
+           baselineTime: 0,
+           lastPlayedEvent: null
+         }, {
+           getCastFn: this.getCastFn,
+           applyEventsSynchronously: this.applyEventsSynchronously,
+           emitter: this.emitter
+         }), this.service.start(), this.service.subscribe((WW => {
+           this.emitter.emit(DP.StateChange, {
+             player: WW
+           })
+         })), this.speedService = aL(GL({
+           id: "speed",
+ ... (53 more added lines; see GitHub link above)
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8095-L8157` → after: `L10393-L10405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10393-L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10393-L10405) · [Before (L8095-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8095-L8157)

```diff
-         BB.queue.writeTexture({
-           texture: GB
-         }, new Uint8Array([255, 255, 255, 255]), {
-           bytesPerRow: 4
-         }, [1, 1]), this.bindings = {
-           layout: OB,
-           rampSampler: BB.createSampler({
-             label: "particles-ramp",
-             magFilter: "nearest",
-             minFilter: "nearest",
-             addressModeU: "repeat",
-             addressModeV: "repeat"
-           }),
-           whiteRamp: GB.createView()
-         }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
-       }
- ... (47 more removed lines; see GitHub link above)
+         const PW = this.service.state.context.events.find((WW => WW.type === uP.Meta)),
+           LW = this.service.state.context.events.find((WW => WW.type === uP.FullSnapshot));
+         if (PW) {
+           const {
+             width: WW,
+             height: iW
+           } = PW.data;
+           setTimeout((() => {
+             this.emitter.emit(DP.Resize, {
+               width: WW,
+               height: iW
+             })
+           }), 0)
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8159` → after: `L10407-L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10407-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10407-L10410) · [Before (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8159)

```diff
-         GB > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, GB)
+         LW && setTimeout((() => {
+           var WW;
+           this.firstFullSnapshot || (this.firstFullSnapshot = LW, this.rebuildFullSnapshot(LW), null == (WW = this.iframe.contentWindow) || WW.scrollTo(LW.data.initialOffset))
+         }), 1), this.service.state.context.events.find(wc) && this.mouse.classList.add("touch-device")
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8161-L8168` → after: `L10412-L10413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10412-L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10412-L10413) · [Before (L8161-L8168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8161-L8168)

```diff
-       draw(BB) {
-         let OB = 0,
-           GB = null;
-         for (const YB of this.draws) {
-           BB.setBindGroup(1, YB.bindGroup), BB.setBindGroup(2, this.frameBindGroup, [256 * YB.frameIndex]);
-           for (const DB of YB.pipelines) DB !== GB && (BB.setPipeline(DB), GB = DB), BB.draw(4, YB.count), OB++
-         }
-         return OB
+       get timer() {
+         return this.service.state.context.timer
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8170-L8174` → after: `L10415-L10429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L10415-L10429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L10415-L10429) · [Before (L8170-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L8170-L8174)

```diff
-       bindTarget(BB) {
-         this.target = BB;
-         const OB = `${BB._colorFormat}|${BB._depthStencilFormat}|${BB._depthCompare}|${BB._sampleCount}`;
-         let GB = this.pipelines.get(OB);
-         GB || (GB = new Map, this.pipelines.set(OB, GB)), this.targetPipelines = GB
+       on(WW, iW) {
+         return this.emitter.on(WW, iW), this
+       }
+       off(WW, iW) {
+         return this.emitter.off(WW, iW), this
+       }
+       setConfig(WW) {
+         Object.keys(WW).forEach((iW => {
+           WW[iW], this.config[iW] = WW[iW]
+         })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof WW.speed && this.speedService.send({
+           type: "SET_SPEED",
+           payload: {
+             speed: WW.speed
+           }
+         }), "undefined" !== typeof WW.mouseTail && (!1 === WW.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail … [truncated]
```
