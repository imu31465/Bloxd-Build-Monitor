# Changed — Bundle Modifications Report (Part 018 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `18 / 86` (**259** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (281 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 144. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2836-L2846` → after: `L2484-L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2484-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2484-L2485) · [Before (L2836-L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2836-L2846)

```diff
-     };
- 
-     function dj(BB, OB) {
-       var GB;
-       const YB = null == BB || null === (GB = BB.config) || void 0 === GB ? void 0 : GB.get_current_url;
-       if (!AG(YB)) return OB;
-       try {
-         const BB = YB(OB);
-         return UG(BB) && BB ? BB : OB
-       } catch (BB) {
-         return Xo.error("Error in get_current_url, falling back to window.location.href", BB), OB
+       getRestMatrix() {
+         return this._restMatrix
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2848-L2894` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2487-L2488) · [Before (L2848-L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2848-L2894)

```diff
-     }
- 
-     function Kj(BB) {
-       var OB;
-       return BB instanceof Element && ("__POSTHOG_TOOLBAR__" === BB.id || !!(null === (OB = BB.closest) || void 0 === OB ? void 0 : OB.call(BB, ".toolbar-global-fade-container")))
-     }
- 
-     function uj(BB) {
-       return !!BB && 1 === BB.nodeType
-     }
- 
-     function mj(BB, OB) {
-       return !!BB && !!BB.tagName && BB.tagName.toLowerCase() === OB.toLowerCase()
-     }
- 
-     function Ij(BB) {
- ... (31 more removed lines; see GitHub link above)
+       getRestPose() {
+         return this.getRestMatrix()
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2896-L2922` → after: `L2490-L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2490-L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2490-L2491) · [Before (L2896-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2896-L2922)

```diff
-       return ij(OB)
-     }
- 
-     function rj(BB) {
-       return dG(BB) ? null : lG(BB).split(/(\s+)/).filter((BB => py(BB))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
-     }
- 
-     function Xj(BB) {
-       let OB = "";
-       return Qy(BB) && !oy(BB) && BB.childNodes && BB.childNodes.length && co(BB.childNodes, (function(BB) {
-         var GB;
-         Ij(BB) && BB.textContent && (OB += null !== (GB = rj(BB.textContent)) && void 0 !== GB ? GB : "")
-       })), lG(OB)
-     }
- 
-     function wj(BB) {
- ... (11 more removed lines; see GitHub link above)
+       setRestMatrix(WW) {
+         this._restMatrix.HJ(WW)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2924-L2957` → after: `L2493-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2493-L2494) · [Before (L2924-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2924-L2957)

```diff
-     }
- 
-     function hj(BB, OB) {
-       if (nG(OB)) return !0;
-       for (const GB of BB)
-         if (OB.some((BB => cj(GB, BB)))) return !0;
-       return !1
-     }
- 
-     function aj(BB) {
-       const OB = BB.parentNode;
-       return !(!OB || !uj(OB)) && OB
-     }
-     const ej = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
-       Tj = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
-       bj = [...Tj, "+", "-", "\u2212", "\u2013"],
- ... (18 more removed lines; see GitHub link above)
+       setRestPose(WW) {
+         this.setRestMatrix(WW)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2959-L2984` → after: `L2496-L2595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2496-L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2496-L2595) · [Before (L2959-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2959-L2984)

```diff
-     }
-     const By = [".ph-no-rageclick", ".ph-no-capture"],
-       Oy = ["", "text", "search", "email", "password", "url", "tel", "number"];
- 
-     function Gy(BB, OB) {
-       if (!vO || Yy(BB)) return !1;
-       let GB, YB, DB;
-       var QB, oB;
-       if (mG(OB) ? (GB = !!OB && By, YB = void 0, DB = !1) : (GB = null !== (QB = null == OB ? void 0 : OB.css_selector_ignorelist) && void 0 !== QB ? QB : By, YB = null == OB ? void 0 : OB.content_ignorelist, DB = null !== (oB = null == OB ? void 0 : OB.ignore_text_selection) && … [truncated]
-       if (DB && function(BB) {
-           return !(!BB || !uj(BB)) && (!!mj(BB, "textarea") || (mj(BB, "input") ? zG(Oy, (BB.getAttribute("type") || "").toLowerCase()) : function(BB) {
-             var OB;
-             if (BB.isContentEditable) return !0;
-             const GB = null === (OB = BB.getAttribute) || void 0 === OB ? void 0 : OB.call(BB, "contenteditable");
-             return "true" === GB || "" === GB
-           }(BB)))
- ... (10 more removed lines; see GitHub link above)
+       getBindPose() {
+         return this.getBindMatrix()
+       }
+       setBindMatrix(WW) {
+         this.tWW(WW)
+       }
+       setBindPose(WW) {
+         this.setBindMatrix(WW)
+       }
+       getFinalMatrix() {
+         return this._finalMatrix
+       }
+       getWorldMatrix() {
+         return this.getFinalMatrix()
+       }
+       returnToRest() {
+ ... (84 more added lines; see GitHub link above)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2986-L2988` → after: `L2597-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2597-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2597-L2599) · [Before (L2986-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2986-L2988)

```diff
-           if (!WG(BB)) return !1;
-           if (BB.length > Cj) return Xo.error(`[PostHog] content_ignorelist array cannot exceed ${Cj} items. Use css_selector_ignorelist for more complex matching.`), !1;
-           GB = BB.map((BB => BB.toLowerCase()))
+           const iW = DW._TmpMats[0],
+             PW = DW._TmpVecs[0];
+           this.parent ? (iW.HJ(this.parent.getAbsoluteMatrix()), OW && iW.multiplyToRef(OW.getWorldMatrix(), iW)) : NW.d.IdentityToRef(iW), mW && iW.setTranslationFromFloats(0, 0, 0), iW.invert(), NW.q.TransformCoordinatesToRef(WW, iW, PW), mW ? (EW.addAtIndex(12, PW.x), EW.addAt … [truncated]
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2990-L3001` → after: `L2601-L2623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2601-L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2601-L2623) · [Before (L2990-L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L2990-L3001)

```diff
-         return GB.some((BB => sj(YB, BB) || sj(DB, BB)))
-       }(YB, function(BB, OB) {
-         for (const GB of OB)
-           if (xj(GB)) return tj(GB);
-         for (const GB of OB) {
-           try {
-             if ("pointer" !== (null == vO ? void 0 : vO.getComputedStyle(GB).getPropertyValue("cursor"))) break
-           } catch (BB) {
-             break
-           }
-           const OB = tj(GB);
-           if (OB.safeText || OB.ariaLabel) return OB
+         this._markAsDirtyAndDecompose()
+       }
+       translate(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         this._updatePosition(WW, iW, OW, !0)
+       }
+       setPosition(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         this._updatePosition(WW, iW, OW, !1)
+       }
+       setAbsolutePosition(WW, iW) {
+         this.setPosition(WW, 1, iW)
+       }
+       scale(WW, iW, OW) {
+ ... (7 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3003-L3027` → after: `L2625-L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2625-L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2625-L2642) · [Before (L3003-L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3003-L3027)

```diff
-         return tj(BB)
-       }(BB, jB)) || hj(jB, GB))
-     }
-     const Yy = BB => !BB || mj(BB, "html") || !uj(BB),
-       Dy = (BB, OB) => {
-         if (!vO || Yy(BB)) return {
-           parentIsUsefulElement: !1,
-           targetElementList: []
-         };
-         let GB = !1;
-         const YB = [BB];
-         let DB = BB;
-         for (; DB.parentNode && !mj(DB, "body");) {
-           if (Fj(DB.parentNode)) {
-             YB.push(DB.parentNode.host), DB = DB.parentNode.host;
-             continue
- ... (9 more removed lines; see GitHub link above)
+         if (this._markAsDirtyAndDecompose(), mW)
+           for (const NW of this.children) NW.scale(WW, iW, OW, mW)
+       }
+       setScale(WW) {
+         this._decompose(), this._localScaling.HJ(WW), this._markAsDirtyAndCompose()
+       }
+       getScale() {
+         return this._decompose(), this._localScaling
+       }
+       getScaleToRef(WW) {
+         this._decompose(), WW.HJ(this._localScaling)
+       }
+       setYawPitchRoll(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           EW = arguments.length > 4 ? arguments[4] : void 0;
+         if (0 === mW) {
+ ... (2 more added lines; see GitHub link above)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3029-L3031` → after: `L2644-L2660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2644-L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2644-L2660) · [Before (L3029-L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3029-L3031)

```diff
-         return {
-           parentIsUsefulElement: GB,
-           targetElementList: YB
+         const PW = DW._TmpMats[0];
+         if (!this._getAbsoluteInverseMatrixUnscaledToRef(PW, EW)) return;
+         const LW = DW._TmpMats[1];
+         NW.d.RotationYawPitchRollToRef(WW, iW, OW, LW), PW.multiplyToRef(LW, LW), this._rotateWithMatrix(LW, mW, EW)
+       }
+       rotate(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           mW = arguments.length > 3 ? arguments[3] : void 0;
+         const EW = DW._TmpMats[0];
+         EW.setTranslationFromFloats(0, 0, 0), NW.d.RotationAxisToRef(WW, iW, EW), this._rotateWithMatrix(EW, OW, mW)
+       }
+       setAxisAngle(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           mW = arguments.length > 3 ? arguments[3] : void 0;
+         if (0 === OW) {
+           const EW = DW._TmpQuat;
+ ... (1 more added lines; see GitHub link above)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3033-L3049` → after: `L2662-L2836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2662-L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2662-L2836) · [Before (L3033-L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3033-L3049)

```diff
-       };
- 
-     function Qy(BB) {
-       const OB = new Set;
-       let GB = 0;
-       for (let QB = BB; QB.parentNode && !mj(QB, "body"); QB = QB.parentNode) {
-         if (GB++ >= 1e3 || OB.has(QB)) return !1;
-         OB.add(QB);
-         const BB = gj(QB);
-         if (zG(BB, "ph-sensitive") || zG(BB, "ph-no-capture")) return !1
-       }
-       if (zG(gj(BB), "ph-include")) return !0;
-       const YB = BB.type || "";
-       if (UG(YB)) switch (YB.toLowerCase()) {
-         case "hidden":
-         case "password":
- ... (1 more removed lines; see GitHub link above)
+         const EW = DW._TmpMats[0];
+         if (!this._getAbsoluteInverseMatrixUnscaledToRef(EW, mW)) return;
+         const PW = DW._TmpMats[1];
+         NW.d.RotationAxisToRef(WW, iW, PW), EW.multiplyToRef(PW, PW), this._rotateWithMatrix(PW, OW, mW)
+       }
+       setRotation(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         this.setYawPitchRoll(WW.y, WW.x, WW.z, iW, OW)
+       }
+       setRotationQuaternion(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         if (0 === iW) return this._decompose(), this._localRotation.HJ(WW), void this._markAsDirtyAndCompose();
+         const mW = DW._TmpMats[0];
+         if (!this._getAbsoluteInverseMatrixUnscaledToRef(mW, OW)) return;
+ ... (159 more added lines; see GitHub link above)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3055-L3056` → after: `L2848-L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2848-L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2848-L2850) · [Before (L3055-L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3055-L3056)

```diff
-     function oy(BB) {
-       return !!(mj(BB, "input") && !["button", "checkbox", "submit", "reset"].includes(BB.type) || mj(BB, "select") || mj(BB, "textarea") || "true" === BB.getAttribute("contenteditable"))
+     function RW(WW, iW) {
+       const OW = (0, lW.RandomRange)(0, 1);
+       tW.d.LerpToRef(iW.color1, iW.color2, OW, WW.color)
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3065-L3072` → after: `L2853-L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2853-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2853-L2854) · [Before (L3065-L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3065-L3072)

```diff
-     function ly(BB) {
-       let OB = 0,
-         GB = !1;
-       for (let YB = BB.length - 1; YB >= 0; YB--) {
-         let DB = BB.charCodeAt(YB) - 48;
-         GB && (DB *= 2, DB > 9 && (DB -= 9)), OB += DB, GB = !GB
-       }
-       return OB % 10 == 0
+     function GW(WW, iW) {
+       iW.colorDead.subtractToRef(WW.color, iW._colorDiff), iW._colorDiff.scaleToRef(1 / WW.lifeTime, WW.colorStep)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3075-L3106` → after: `L2857-L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2857-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2857-L2858) · [Before (L3075-L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3075-L3106)

```diff
-     function py(BB) {
-       let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (dG(BB)) return !1;
-       if (UG(BB)) {
-         if (BB = lG(BB), OB ? jy.test((BB || "").replace(/[- ]/g, "")) : function(BB) {
-             let OB;
-             for (yy.lastIndex = 0; OB = yy.exec(BB);) {
-               const BB = OB[2];
-               if (!BB) continue;
-               const GB = BB.replace(/[- ]/g, "");
-               for (let OB = 0; GB.length > OB; OB++)
-                 for (const BB of Jy) {
-                   const YB = OB + BB;
-                   if (GB.length >= YB) {
-                     const BB = GB.slice(OB, YB);
-                     if (jy.test(BB) && ly(BB)) return !0
- ... (16 more removed lines; see GitHub link above)
+     function IW(WW, iW) {
+       WW._properties.currentColorGradient = iW._colorGradients[0], WW._properties.currentColorGradient.getColorToRef(WW.color), WW._properties.currentColor1.HJ(WW.color), iW._colorGradients.length > 1 ? iW._colorGradients[1].getColorToRef(WW._properties.currentColor2) : WW._prope … [truncated]
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3109-L3111` → after: `L2861-L2865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2861-L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2861-L2865) · [Before (L3109-L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3109-L3111)

```diff
-     function qy(BB) {
-       let OB = Xj(BB);
-       return OB = `${OB} ${Zy(BB)}`.trim(), py(OB) ? OB : ""
+     function aW(WW, iW) {
+       const OW = iW._colorGradients;
+       mW.m.GetCurrentGradient(iW._ratio, OW, ((iW, OW, mW) => {
+         iW !== WW._properties.currentColorGradient && (WW._properties.currentColor1.HJ(WW._properties.currentColor2), OW.getColorToRef(WW._properties.currentColor2), WW._properties.currentColorGradient = iW), tW.d.LerpToRef(WW._properties.currentColor1, WW._properties.currentColo … [truncated]
+       }))
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3114-L3124` → after: `L2868-L2869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2868-L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2868-L2869) · [Before (L3114-L3124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3114-L3124)

```diff
-     function Zy(BB) {
-       let OB = "";
-       return BB && BB.childNodes && BB.childNodes.length && co(BB.childNodes, (function(BB) {
-         var GB;
-         if (BB && "span" === (null === (GB = BB.tagName) || void 0 === GB ? void 0 : GB.toLowerCase())) try {
-           const GB = Xj(BB);
-           OB = `${OB} ${GB}`.trim(), BB.childNodes && BB.childNodes.length && (OB = `${OB} ${Zy(BB)}`.trim())
-         } catch (BB) {
-           Xo.error("[AutoCapture]", BB)
-         }
-       })), OB
+     function rW(WW, iW) {
+       WW.colorStep.scaleToRef(iW._scaledUpdateSpeed, iW._scaledColorStep), WW.color.addInPlace(iW._scaledColorStep), WW.color.a < 0 && (WW.color.a = 0)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3127-L3128` → after: `L2872-L2875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2872-L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2872-L2875) · [Before (L3127-L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3127-L3128)

```diff
-     function Ny(BB) {
-       return BB.replace(/"|\\"/g, '\\"')
+     function zW(WW, iW) {
+       mW.m.GetCurrentGradient(iW._ratio, iW._angularSpeedGradients, ((iW, OW, mW) => {
+         iW !== WW._properties.currentAngularSpeedGradient && (WW._properties.currentAngularSpeed1 = WW._properties.currentAngularSpeed2, WW._properties.currentAngularSpeed2 = OW.getFactor(), WW._properties.currentAngularSpeedGradient = iW), WW.angularSpeed = (0, lW.Lerp)(WW._prop … [truncated]
+       }))
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3131-L3133` → after: `L2878-L2879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2878-L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2878-L2879) · [Before (L3131-L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3131-L3133)

```diff
-     function Ry(BB) {
-       const OB = BB.attr__class;
-       if (OB) return WG(OB) ? OB : ij(OB)
+     function FW(WW, iW) {
+       WW.angle += WW.angularSpeed * iW._scaledUpdateSpeed
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3184-L3252` → after: `L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2883) · [Before (L3184-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3184-L3252)

```diff
-       let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-       const YB = BB.config.segment;
-       if (!YB) return OB();
-       const {
-         analytics: DB,
-         filterProperties: QB
-       } = (BB => AG(BB.register))(oB = YB) ? {
-         analytics: oB
-       } : oB;
-       var oB;
-       ! function(BB, OB, GB, YB) {
-         const DB = OB => {
-             const DB = () => OB.anonymousId() || Dj();
-             BB.config.get_device_id = DB, YB && OB.id() && (BB.register({
-               distinct_id: OB.id(),
-               $device_id: DB()
- ... (53 more removed lines; see GitHub link above)
+       iW.particleEmitterType.startDirectionFunction(iW._emitterWorldMatrix, WW.direction, WW, iW.isLocal, iW._emitterInverseWorldMatrix)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3256-L3294` → after: `L2886-L2887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2886-L2887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2886-L2887) · [Before (L3256-L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3256-L3294)

```diff
-     function ky(BB) {
-       let {
-         organization: OB,
-         projectId: GB,
-         prefix: YB,
-         severityAllowList: DB = ["error"],
-         sendExceptionsToPostHog: QB = !0
-       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       return oB => {
-         var jB, yB, JB, MB, PB;
-         if ("*" !== DB && !DB.includes(oB.level) || !BB.__loaded) return oB;
-         oB.tags || (oB.tags = {});
-         const zB = BB.requestRouter.endpointFor("ui", `/project/${BB.config.token}/person/${BB.get_distinct_id()}`);
-         oB.tags["PostHog Person URL"] = zB, BB.sessionRecordingStarted() && (oB.tags["PostHog Recording URL"] = BB.get_session_replay_url({
-           withTimestamp: !0
-         }));
- ... (23 more removed lines; see GitHub link above)
+     function Wi(WW, iW) {
+       iW.startDirectionFunction(iW._emitterWorldMatrix, WW.direction, WW, iW.isLocal)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3650-L3655` → after: `L2890-L2895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2890-L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2890-L2895) · [Before (L3650-L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3650-L3655)

```diff
-     function iy() {
-       try {
-         return Intl.DateTimeFormat().resolvedOptions().timeZone
-       } catch (YB) {
-         return
-       }
+     function ii(WW, iW) {
+       WW._properties.currentVelocityGradient = iW._velocityGradients[0], WW._properties.currentVelocity1 = WW._properties.currentVelocityGradient.getFactor(), iW._velocityGradients.length > 1 ? WW._properties.currentVelocity2 = iW._velocityGradients[1].getFactor() : WW._propertie … [truncated]
+     }
+ 
+     function Oi(WW, iW) {
+       WW._properties.currentLimitVelocityGradient = iW._limitVelocityGradients[0], WW._properties.currentLimitVelocity1 = WW._properties.currentLimitVelocityGradient.getFactor(), iW._limitVelocityGradients.length > 1 ? WW._properties.currentLimitVelocity2 = iW._limitVelocityGradi … [truncated]
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3736-L3747` → after: `L2898-L2901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2898-L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2898-L2901) · [Before (L3736-L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3736-L3747)

```diff
-     function Cy(BB, OB, GB) {
-       if (!tO) return {};
-       const YB = OB ? [...ay, ...GB || []] : [],
-         DB = Hy(cy(tO.URL, YB, Ty), BB),
-         QB = function() {
-           const BB = {};
-           return co(by, (function(OB) {
-             const GB = xo(OB);
-             BB[OB] = GB || null
-           })), BB
-         }();
-       return ho(QB, DB)
+     function mi(WW, iW) {
+       mW.m.GetCurrentGradient(iW._ratio, iW._velocityGradients, ((iW, OW, mW) => {
+         iW !== WW._properties.currentVelocityGradient && (WW._properties.currentVelocity1 = WW._properties.currentVelocity2, WW._properties.currentVelocity2 = OW.getFactor(), WW._properties.currentVelocityGradient = iW), WW._properties.directionScale *= (0, lW.Lerp)(WW._propertie … [truncated]
+       }))
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3751-L3756` → after: `L2905-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2905-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2905-L2909) · [Before (L3751-L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3751-L3756)

```diff
-       const GB = ey.concat(OB || []),
-         YB = {};
-       return co(GB, (function(OB) {
-         const GB = Ey(BB, OB);
-         YB[OB] = GB || null
-       })), YB
+       mW.m.GetCurrentGradient(iW._ratio, iW._limitVelocityGradients, ((OW, mW, EW) => {
+         OW !== WW._properties.currentLimitVelocityGradient && (WW._properties.currentLimitVelocity1 = WW._properties.currentLimitVelocity2, WW._properties.currentLimitVelocity2 = mW.getFactor(), WW._properties.currentLimitVelocityGradient = OW);
+         const NW = (0, lW.Lerp)(WW._properties.currentLimitVelocity1, WW._properties.currentLimitVelocity2, EW);
+         WW.direction.length() > NW && WW.direction.scaleInPlace(iW.limitVelocityDamping)
+       }))
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3760-L3770` → after: `L2913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2913) · [Before (L3760-L3770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3760-L3770)

```diff
-       const OB = function(BB) {
-           return BB ? 0 === BB.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === BB.search("https?://(.*)bing.com") ? "bing" : 0 === BB.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === BB.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
-         }(BB),
-         GB = "yahoo" != OB ? "q" : "p",
-         YB = {};
-       if (!kG(OB)) {
-         YB.$search_engine = OB;
-         const BB = tO ? Ey(tO.referrer, GB) : "";
-         BB.length && (YB.ph_keyword = BB)
-       }
-       return YB
+       WW.direction.scaleToRef(WW._properties.directionScale, WW._properties.scaledDirection)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3773-L3774` → after: `L2916-L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2916-L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2916-L2917) · [Before (L3773-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3773-L3774)

```diff
-     function sy() {
-       return navigator.language || navigator.userLanguage
+     function Pi(WW, iW) {
+       iW.particleEmitterType.startPositionFunction(iW._emitterWorldMatrix, WW.position, WW, iW.isLocal)
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3777-L3779` → after: `L2920-L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2920-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2920-L2921) · [Before (L3777-L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3777-L3779)

```diff
-     function xy() {
-       const BB = sy();
-       return "string" == typeof BB ? BB.split("-")[0] : void 0
+     function Li(WW, iW) {
+       iW.startPositionFunction(iW._emitterWorldMatrix, WW.position, WW, iW.isLocal)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3783-L3784` → after: `L2924-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2924-L2925) · [Before (L3783-L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3783-L3784)

```diff
-     function BJ() {
-       return (null == tO ? void 0 : tO.referrer) || ty
+     function ci(WW, iW) {
+       WW._properties.localPosition ? WW._properties.localPosition.HJ(WW.position) : WW._properties.localPosition = WW.position.clone(), NW.q.TransformCoordinatesToRef(WW._properties.localPosition, iW._emitterWorldMatrix, WW.position)
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3788-L3795` → after: `L2929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2929) · [Before (L3788-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3788-L3795)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const YB = BB ? [...ay, ...OB || []] : [],
-         DB = GB ? MD(null == BG ? void 0 : BG.href) : null == BG ? void 0 : BG.href,
-         QB = null == DB ? void 0 : DB.substring(0, 1e3);
-       return {
-         r: BJ().substring(0, 1e3),
-         u: QB ? cy(QB, YB, Ty) : void 0
-       }
+       iW.isLocal && WW._properties.localPosition ? (WW._properties.localPosition.addInPlace(WW._properties.scaledDirection), NW.q.TransformCoordinatesToRef(WW._properties.localPosition, iW._emitterWorldMatrix, WW.position)) : WW.position.addInPlace(WW._properties.scaledDirection)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3798-L3819` → after: `L2932-L2933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2932-L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2932-L2933) · [Before (L3798-L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3798-L3819)

```diff
-     function GJ(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       var GB;
-       const {
-         r: YB,
-         u: DB
-       } = BB, QB = OB ? MD(DB) : DB, oB = {
-         $referrer: YB,
-         $referring_domain: null == YB ? void 0 : YB == ty ? ty : null === (GB = wy(YB)) || void 0 === GB ? void 0 : GB.host
-       };
-       if (QB) {
-         oB.$current_url = QB;
-         const BB = wy(QB);
-         oB.$host = null == BB ? void 0 : BB.host, oB.$pathname = null == BB ? void 0 : BB.pathname;
-         const OB = Hy(QB);
-         ho(oB, OB)
- ... (6 more removed lines; see GitHub link above)
+     function ti(WW, iW) {
+       WW._properties.currentDragGradient = iW._dragGradients[0], WW._properties.currentDrag1 = WW._properties.currentDragGradient.getFactor(), iW._dragGradients.length > 1 ? WW._properties.currentDrag2 = iW._dragGradients[1].getFactor() : WW._properties.currentDrag2 = WW._propert … [truncated]
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3822-L3827` → after: `L2936-L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2936-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2936-L2941) · [Before (L3822-L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3822-L3827)

```diff
-     function YJ() {
-       try {
-         return (new Date).getTimezoneOffset()
-       } catch (YB) {
-         return
-       }
+     function Zi(WW, iW) {
+       mW.m.GetCurrentGradient(iW._ratio, iW._dragGradients, ((iW, OW, mW) => {
+         iW !== WW._properties.currentDragGradient && (WW._properties.currentDrag1 = WW._properties.currentDrag2, WW._properties.currentDrag2 = OW.getFactor(), WW._properties.currentDragGradient = iW);
+         const EW = (0, lW.Lerp)(WW._properties.currentDrag1, WW._properties.currentDrag2, mW);
+         WW._properties.scaledDirection.scaleInPlace(1 - EW)
+       }))
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3829-L3937` → after: `L2943-L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2943-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2943-L2957) · [Before (L3829-L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3829-L3937)

```diff
-     const DJ = {
-         flags: MB,
-         surveys: jO
-       },
-       QJ = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
-       oJ = BB => `${BB}_cookie_identity_change_pending`,
-       jJ = BB => {
-         let OB = "",
-           GB = 0;
-         for (const YB of BB) {
-           const BB = encodeURIComponent(JSON.stringify(YB).slice(1, -1)).length;
-           if (GB + BB > 1e3) break;
-           OB += YB, GB += BB
-         }
-         return OB
-       },
- ... (93 more removed lines; see GitHub link above)
+ 
+     function xi(WW, iW) {
+       WW._properties.randomNoiseCoordinates1 && WW._properties.randomNoiseCoordinates2 ? (WW._properties.randomNoiseCoordinates1.yWW(Math.random(), Math.random(), Math.random()), WW._properties.randomNoiseCoordinates2.yWW(Math.random(), Math.random(), Math.random())) : (WW._prope … [truncated]
+     }
+ 
+     function li(WW, iW) {
+       const OW = iW._noiseTextureData,
+         mW = iW._noiseTextureSize;
+       if (OW && mW && WW._properties.randomNoiseCoordinates1 && WW._properties.randomNoiseCoordinates2) {
+         const EW = iW._fetchR(WW._properties.randomNoiseCoordinates1.x, WW._properties.randomNoiseCoordinates1.y, mW.width, mW.height, OW),
+           PW = iW._fetchR(WW._properties.randomNoiseCoordinates1.z, WW._properties.randomNoiseCoordinates2.x, mW.width, mW.height, OW),
+           LW = iW._fetchR(WW._properties.randomNoiseCoordinates2.y, WW._properties.randomNoiseCoordinates2.z, mW.width, mW.height, OW),
+           cW = NW.l.fA[0],
+           wW = NW.l.fA[1];
+         cW.yWW((2 * EW - 1) * iW.noiseStrength.x, (2 * PW - 1) * iW.noiseStrength.y, (2 * LW - 1) * iW.noiseStrength.z), cW.scaleToRef(iW._tempScaledUpdateSpeed, wW), WW.direction.addInPlace(wW)
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3939-L3978` → after: `L2959-L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2959-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L2959-L3154) · [Before (L3939-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3939-L3978)

```diff
-       _mergeCrossTabFeatureFlagProperties(BB, OB, GB) {
-         let YB = !1;
-         return JJ.forEach((GB => {
-           var DB;
-           const QB = null === (DB = Fy(GB)) || void 0 === DB ? void 0 : DB.storageGroup;
-           if (OB === yJ && this._splitStorage && QB || OB !== yJ && QB !== OB) return;
-           const oB = GB in BB,
-             jB = this._mergePendingCrossTabFeatureFlagChanges(GB, oB ? BB[GB] : void 0),
-             yB = this._pendingCrossTabFeatureFlagChanges.has(GB) ? GB in this.props : oB;
-           yB === GB in this.props && lJ(jB, this.props[GB]) || (yB ? this._setProp(GB, jB, !1) : this._deleteProp(GB, !1), YB = !0)
-         })), YB && GB && this._crossTabFeatureFlagHandlers.forEach((BB => BB())), YB
-       }
-       _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
-         if (!this._splitStorageEligible) return !1;
-         try {
-           this._crossTabFeatureFlagIdentityMismatch = !1;
- ... (24 more removed lines; see GitHub link above)
+     }
+ 
+     function Ai(WW, iW) {
+       iW.gravity.scaleToRef(iW._tempScaledUpdateSpeed, iW._scaledGravity), WW.direction.addInPlace(iW._scaledGravity)
+     }
+ 
+     function bi(WW, iW) {
+       WW.size = (0, lW.RandomRange)(iW.minSize, iW.maxSize), WW.scale.yWW((0, lW.RandomRange)(iW.minScaleX, iW.maxScaleX), (0, lW.RandomRange)(iW.minScaleY, iW.maxScaleY))
+     }
+ 
+     function ji(WW, iW) {
+       WW._properties.currentSizeGradient = iW._sizeGradients[0], WW._properties.currentSize1 = WW._properties.currentSizeGradient.getFactor(), WW.size = WW._properties.currentSize1, iW._sizeGradients.length > 1 ? WW._properties.currentSize2 = iW._sizeGradients[1].getFactor() : WW … [truncated]
+     }
+ 
+     function Ui(WW, iW) {
+       const OW = iW._actualFrame / iW.targetStopDuration;
+ ... (180 more added lines; see GitHub link above)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L3981-L3999` → after: `L3157-L3234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3157-L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3157-L3234) · [Before (L3981-L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L3981-L3999)

```diff
-       _setCrossTabFeatureFlagChangesPending(BB, OB) {
-         this._pendingCrossTabFeatureFlagChanges.set(BB, OB);
-         const GB = Fy(BB);
-         (null == GB ? void 0 : GB.volatile) || (this._slotWriteState((this._splitStorage ? null == GB ? void 0 : GB.storageGroup : void 0) || yJ).fingerprint = void 0, this._markGroupDirty(BB))
-       }
-       _markAllCrossTabFeatureFlagChangesPending() {
-         JJ.forEach((BB => this._pendingCrossTabFeatureFlagChanges.set(BB, !0)))
-       }
-       _markLoadedCrossTabFeatureFlagChangesPending() {
-         if (this._splitStorageEligible) try {
-           const BB = Pj._get(this._name),
-             OB = pJ(BB);
-           this._slotWriteState(yJ).storageValue = BB, JJ.forEach((BB => {
-             var GB;
-             const YB = this._splitStorage ? null === (GB = Fy(BB)) || void 0 === GB ? void 0 : GB.storageGroup : void 0,
-               DB = YB ? Pj._get(this._groupEntryName(YB)) : null;
- ... (3 more removed lines; see GitHub link above)
+       constructor(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           LW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
+           wW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+         pW || (pW = !0, oW(VW.i, DW)), (0, fW.d)(), super(WW), this._emitterInverseWorldMatrix = NW.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new NW.q, this.jD = new EW.e, this.onStoppedObservable = new  … [truncated]
+           const iW = this._particles.pop();
+           iW !== WW && iW.copyTo(WW), iW.metadata = null, this._stockParticles.push(iW)
+         }, this._createParticle = () => {
+           let WW;
+           return 0 !== this._stockParticles.length ? (WW = this._stockParticles.pop(), WW._reset()) : WW = new yW(this), this._prepareParticle(WW), WW
+         }, this.paused = !1, this._shadersLoaded = !1, this._capacity = iW, this._epsilon = LW, OW && "Scene" !== OW.getClassName() ? (this._engine = OW, this.defaultProjectionMatrix = NW.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = OW || cW. … [truncated]
+           process: Si,
+           previousItem: null,
+           nextItem: null
+         }, this._positionCreation = {
+ ... (62 more added lines; see GitHub link above)
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4001-L4041` → after: `L3236-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3236-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3236-L3364) · [Before (L4001-L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4001-L4041)

```diff
-             const QB = YB && !kG(DB) ? pJ(DB) : OB;
-             BB in this.props ? this._markPendingCrossTabFeatureFlagChanges(BB, QB[BB], this.props[BB]) : BB in QB && this._setCrossTabFeatureFlagChangesPending(BB, !0)
-           }))
-         } catch (YB) {}
-       }
-       _mergePendingCrossTabFeatureFlagChanges(BB, OB) {
-         const GB = this._pendingCrossTabFeatureFlagChanges.get(BB);
-         if (!GB) return OB;
-         if (!0 === GB) return this.props[BB];
-         if ("$active_feature_flags" === BB) {
-           const YB = new Set(WG(OB) ? OB : []),
-             DB = new Set(WG(this.props[BB]) ? this.props[BB] : []);
-           return GB.forEach((BB => DB.has(BB) ? YB.add(BB) : YB.delete(BB))), Array.from(YB)
-         }
-         const YB = VG(OB) ? RD({}, OB) : {},
-           DB = VG(this.props[BB]) ? this.props[BB] : {};
- ... (25 more removed lines; see GitHub link above)
+             this._ratio = mW.age / mW.lifeTime, mW._properties.directionScale = this._tempScaledUpdateSpeed;
+             let NW = this._updateQueueStart;
+             for (; NW;) NW.process(mW, this), NW = NW.nextItem;
+             if (this._isAnimationSheetEnabled && !wW && mW.updateCellIndex(), mW._inheritParticleInfoToSubEmitters(), mW.age >= mW.lifeTime) {
+               if (this._emitFromParticle(mW), mW._properties.attachedSubEmitters) {
+                 for (const WW of mW._properties.attachedSubEmitters) WW.particleSystem.disposeOnStop = !0, WW.particleSystem.stop();
+                 mW._properties.attachedSubEmitters = null
+               }
+               this.recycleParticle(mW), iW && OW--
+             } else;
+           }
+         }
+       }
+       serialize(WW) {
+         throw new Error("Method not implemented.")
+       }
+ ... (113 more added lines; see GitHub link above)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4093-L4127` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3367) · [Before (L4093-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4093-L4127)

```diff
-         if ((Jj._get(this._name) || void 0) !== OB) return !1;
-         this._lastSeenCookiePropertiesFingerprint = YB, this._lastSeenMainCookieValue = OB;
-         const QB = Aj(this._name, OB),
-           oB = [...lj, ...QB.properties],
-           zB = {};
-         if (Object.keys(DB).forEach((BB => {
-             const OB = DB[BB];
-             (nG(OB) || kG(OB) || "" === OB || "$user_state" === BB && "anonymous" !== OB && "identified" !== OB) && (zB[BB] = !0, delete DB[BB])
-           })), SG(DB)) return !1;
-         const NB = "distinct_id" in DB || "anonymous" === DB.$user_state || "identified" === DB.$user_state,
-           WB = this.props,
-           AB = WB[nB],
-           VB = WB[RO],
-           SB = ho({}, WB);
-         [...lj, ...BB.cookie_persisted_properties || []].forEach((BB => {
-           if (-1 !== oB.indexOf(BB) && !(BB in DB) && !zB[BB] && (NB || "distinct_id" !== BB && "$user_state" !== BB)) {
- ... (19 more removed lines; see GitHub link above)
+         this._rampGradientsTexture = LW.b.CreateRGBATexture(WW, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4129-L4138` → after: `L3369-L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3369-L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3369-L3370) · [Before (L4129-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4129-L4138)

```diff
-       _publishSuppressedCookieSnapshot() {
-         this._cookieSyncSuppressed && (nG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[yJ], this._writeNow(!0))
-       }
-       _endCookieSyncSuppression() {
-         let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         if (this._cookieSyncSuppressed) try {
-           BB ? this._publishSuppressedCookieSnapshot() : nG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
-         } finally {
-           this._cookieSyncSuppressed = !1
-         }
+       getRampGradients() {
+         return this._rampGradients
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4140-L4141` → after: `L3372-L3373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3372-L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3372-L3373) · [Before (L4140-L4141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4140-L4141)

```diff
-       isDisabled() {
-         return !!this._disabled
+       forceRefreshGradients() {
+         this._syncRampGradientTexture()
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4143-L4218` → after: `L3375-L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3375-L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3375-L3376) · [Before (L4143-L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4143-L4218)

```diff
-       _buildStorage(BB) {
-         -1 === QJ.indexOf(BB.persistence.toLowerCase()) && (Xo.critical("Unknown persistence type " + BB.persistence + "; falling back to localStorage+cookie"), BB.persistence = "localStorage+cookie");
-         const OB = function() {
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
-             OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
-           const YB = [...lj, ...BB];
-           return RD(RD({}, Pj), {}, {
-             _parse(BB) {
-               try {
-                 let QB, oB = {};
-                 try {
-                   QB = Jj._get(BB) || void 0, oB = QB ? Zj(JSON.parse(QB)) : {}
-                 } catch (BB) {}
-                 const jB = JSON.parse(Pj._get(BB) || "{}");
-                 let yB;
- ... (60 more removed lines; see GitHub link above)
+       _syncRampGradientTexture() {
+         this._rampGradients && (this._rampGradients.sort(((WW, iW) => WW.gradient < iW.gradient ? -1 : WW.gradient > iW.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4220-L4221` → after: `L3378-L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3378-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3378-L3381) · [Before (L4220-L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4220-L4221)

```diff
-       _groupEntryName(BB) {
-         return `${this._name}__${BB}`
+       addRampGradient(WW, iW) {
+         this._rampGradients || (this._rampGradients = []);
+         const OW = new mW.g(WW, iW);
+         return this._rampGradients.push(OW), this._syncRampGradientTexture(), this
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4223-L4224` → after: `L3383-L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3383-L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3383-L3384) · [Before (L4223-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4223-L4224)

```diff
-       _resolveSplitStorage(BB) {
-         return this._splitStorageEligible && !!BB.split_storage
+       removeRampGradient(WW) {
+         return this._removeGradientAndTexture(WW, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4226-L4235` → after: `L3386-L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3386-L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3386-L3389) · [Before (L4226-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4226-L4235)

```diff
-       properties() {
-         const BB = {};
-         return co(this.props, ((OB, GB) => {
-           const YB = Fy(GB);
-           if (!YB || "event" === YB.exposure) {
-             var DB;
-             if (null == YB || null === (DB = YB.shouldSkipFromEventProperties) || void 0 === DB ? void 0 : DB.call(YB, OB)) return;
-             BB[GB] = OB
-           }
-         })), BB
+       addColorGradient(WW, iW, OW) {
+         this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = IW, this._colorProcessing.process = aW);
+         const EW = new mW.d(WW, iW, OW);
+         return this._colorGradients.push(EW), this._colorGradients.sort(((WW, iW) => WW.gradient < iW.gradient ? -1 : WW.gradient > iW.gradient ? 1 : 0)), this
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4237-L4274` → after: `L3391-L3397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3391-L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3391-L3397) · [Before (L4237-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4237-L4274)

```diff
-       load() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._disabled && !BB) return;
-         const OB = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
-           GB = OB ? Pj._parse(this._name) : null;
-         let YB = {};
-         if (OB) try {
-           YB = Zj(Jj._parse(this._name)), co(YB, ((BB, OB) => {
-             (nG(BB) || kG(BB) || "" === BB) && delete YB[OB]
-           }))
-         } catch (BB) {}
-         const DB = this.Vq._parse(this._name);
-         if (DB && (this.props = ho({}, DB)), this._splitStorage && this._loadGroupEntries(), OB && DB) {
-           var QB, oB;
-           const BB = null == GB ? void 0 : GB[nB],
-             OB = null !== (QB = null == GB ? void 0 : GB.$user_state) && void 0 !== QB ? QB : cO,
- ... (22 more removed lines; see GitHub link above)
+       removeColorGradient(WW) {
+         if (!this._colorGradients) return this;
+         let iW = 0;
+         for (const OW of this._colorGradients) {
+           if (OW.gradient === WW) {
+             this._colorGradients.splice(iW, 1);
+             break
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4277` → after: `L3401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3401) · [Before (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4277)

```diff
-         fj._get(oJ(this._name)) && (this._cookieIdentityChangePending = !0)
+         return 0 === this._colorGradients.length && (this._colorCreation.process = RW, this._colorProcessing.process = rW), this
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4279-L4285` → after: `L3403-L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3403-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3403-L3408) · [Before (L4279-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4279-L4285)

```diff
-       _loadGroupEntries() {
-         for (const BB of uy) {
-           const OB = Pj._parse(this._groupEntryName(BB));
-           if (OB && !SG(OB)) {
-             const GB = this._slotWriteState(BB);
-             GB.persisted = !0, this._mainCarriesGroupKey(BB) || (GB.fingerprint = this._entryFingerprint(OB, BB)), this._groupEntryIsStale(BB, OB) || ho(this.props, OB)
-           }
+       resetDrawCache() {
+         if (this._drawWrappers) {
+           for (const WW of this._drawWrappers)
+             if (WW)
+               for (const iW of WW) iW?.dispose();
+           this._drawWrappers = []
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4288-L4314` → after: `L3411-L3412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3411-L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3411-L3412) · [Before (L4288-L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4288-L4314)

```diff
-       _mainCarriesGroupKey(BB) {
-         return Object.keys(this.props).some((OB => {
-           var GB;
-           return (null === (GB = Fy(OB)) || void 0 === GB ? void 0 : GB.storageGroup) === BB
-         }))
-       }
-       _groupEntryIsStale(BB, OB) {
-         const GB = DJ[BB];
-         if (!GB) return !1;
-         const YB = OB[GB],
-           DB = this.props[GB];
-         return KG(YB) && KG(DB) && DB > YB
-       }
-       refreshKey(BB) {
-         var OB;
-         if (this._disabled) return;
- ... (11 more removed lines; see GitHub link above)
+       _fetchR(WW, iW, OW, mW, EW) {
+         return EW[4 * (((WW = .5 * Math.abs(WW) + .5) * OW % OW | 0) + ((iW = .5 * Math.abs(iW) + .5) * mW % mW | 0) * OW)] / 255
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4316-L4321` → after: `L3414-L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3414-L3415) · [Before (L4316-L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4316-L4321)

```diff
-       save() {
-         if (this._disabled) return;
-         const BB = this._saveDebounceMs();
-         BB > 0 ? nG(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
-           this._pendingSaveTimer = void 0, this._writeNow()
-         }), BB)) : this._writeNow()
+       _reset() {
+         this._resetEffect()
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4323-L4324` → after: `L3417-L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3417-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3417-L3418) · [Before (L4323-L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4323-L4324)

```diff
-       flush() {
-         nG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
+       _resetEffect() {
+         this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayO … [truncated]
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4326-L4361` → after: `L3420-L3485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3420-L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3420-L3485) · [Before (L4326-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4326-L4361)

```diff
-       _writeNow() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._disabled || this._cookieSyncSuppressed && !BB) return;
-         BB || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || PJ.forEach((BB => this.refreshKey(BB))));
-         const OB = !BB && !this._storageMigrationInProgress;
-         OB || (this._crossTabFeatureFlagIdentityMismatch = !1);
-         const GB = !!OB && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
-         if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && Xo.warn("skipping persistence write because storage belongs to a different distinct ID"));
-         if (this._splitStorage) return this._writeNowSplit(), void(GB && this._crossTabFeatureFlagHandlers.forEach((BB => BB())));
-         const YB = this._writeEntry(this.Vq, this._name, this.props, yJ);
-         "written" === YB && this._rememberCurrentCookieProperties(this.props), "failed" !== YB && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), GB && this._crossTabFeatureFlagHandlers.forEach(( … [truncated]
-       }
-       _writeNowSplit() {
-         const {
-           main: BB,
-           groups: OB
- ... (20 more removed lines; see GitHub link above)
+       _createVertexBuffers() {
+         this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertex … [truncated]
+         const WW = this._engine,
+           iW = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
+         this._vertexData = new Float32Array(this._capacity * iW), this._vertexBuffer = new PW.b(WW, this._vertexData, !0, iW);
+         let OW = 0;
+         const mW = this._vertexBuffer.createVertexBuffer(PW.k.PositionKind, OW, 3, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers[PW.k.PositionKind] = mW, OW += 3;
+         const EW = this._vertexBuffer.createVertexBuffer(PW.k.ColorKind, OW, 4, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers[PW.k.ColorKind] = EW, OW += 4;
+         const NW = this._vertexBuffer.createVertexBuffer("angle", OW, 1, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers.angle = NW, OW += 1;
+         const LW = this._vertexBuffer.createVertexBuffer("size", OW, 2, this._vertexBufferSize, this._useInstancing);
+         if (this._vertexBuffers.size = LW, OW += 2, this._isAnimationSheetEnabled) {
+           const WW = this._vertexBuffer.createVertexBuffer("cellIndex", OW, 1, this._vertexBufferSize, this._useInstancing);
+           this._vertexBuffers.cellIndex = WW, OW += 1
+ ... (50 more added lines; see GitHub link above)
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4364-L4376` → after: `L3489-L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3489-L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3489-L3506) · [Before (L4364-L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4364-L4376)

```diff
-       _partitionProps() {
-         const BB = {},
-           OB = {
-             flags: {},
-             surveys: {}
-           };
-         return co(this.props, ((GB, YB) => {
-           var DB;
-           const QB = null === (DB = Fy(YB)) || void 0 === DB ? void 0 : DB.storageGroup;
-           QB ? OB[QB][YB] = GB : BB[YB] = GB
-         })), {
-           main: BB,
-           groups: OB
+       stop() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(WW))
+       }
+       _postStop(WW) {}
+       reset() {
+         this._stockParticles.length = 0, this._particles.length = 0
+       }
+       _appendParticleVertex(WW, iW, OW, mW) {
+         let EW = WW * this._vertexBufferSize;
+         const PW = NW.l.fA[0].HJ(this._scene?.floatingOriginOffset || NW.q.ZeroReadOnly);
+         if (this._vertexData[EW++] = iW.position.x + this.worldOffset.x - PW.x, this._vertexData[EW++] = iW.position.y + this.worldOffset.y - PW.y, this._vertexData[EW++] = iW.position.z + this.worldOffset.z - PW.z, this._vertexData[EW++] = iW.color.r, this._vertexData[EW++] = iW … [truncated]
+         else if (iW._properties.initialDirection) {
+           let WW = iW._properties.initialDirection;
+           this.isLocal && (NW.q.TransformNormalToRef(WW, this._emitterWorldMatrix, NW.l.fA[0]), WW = NW.l.fA[0]), 0 === WW.x && 0 === WW.z && (WW.x = .001), this._vertexData[EW++] = WW.x, this._vertexData[EW++] = WW.y, this._vertexData[EW++] = WW.z
+         } else {
+ ... (2 more added lines; see GitHub link above)
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4379-L4389` → after: `L3510-L3511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3510-L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3510-L3511) · [Before (L4379-L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4379-L4389)

```diff
-       _entryFingerprint(BB, OB) {
-         if (OB === yJ) return JSON.stringify(BB) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
-         const GB = {};
-         return co(BB, ((BB, OB) => {
-           var YB;
-           GB[OB] = (null === (YB = Fy(OB)) || void 0 === YB ? void 0 : YB.volatile) ? "__volatile__" : BB
-         })), JSON.stringify(GB)
-       }
-       _writeEntry(BB, OB, GB, YB) {
-         const DB = this._slotWriteState(YB);
-         if (YB !== yJ && !DB.ap && !nG(DB.fingerprint)) return "skipped";
+       _prepareParticle(WW) {}
+       _createNewOnes(WW) {
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4391-L4394` → after: `L3513-L3517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3513-L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3513-L3517) · [Before (L4391-L4394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4391-L4394)

```diff
-         try {
-           if (QB = this._entryFingerprint(GB, YB), QB === DB.fingerprint) return DB.ap = !1, "skipped"
-         } catch (BB) {
-           QB = void 0
+         for (let OW = 0; OW < WW && this._particles.length !== this._capacity; OW++) {
+           iW = this._createParticle(), this._particles.push(iW);
+           let WW = this._createQueueStart;
+           for (; WW;) WW.process(iW, this), WW = WW.nextItem;
+           iW._inheritParticleInfoToSubEmitters()
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4396-L4415` → after: `L3519-L3526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3519-L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3519-L3526) · [Before (L4396-L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4396-L4415)

```diff
-         return BB._set(OB, GB, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (DB.ap = !1, YB !== yJ && (DB.persisted = !0), nG(QB) || (DB.fingerprint = QB), this._splitStorageEligible && (DB.storageValue = Pj._get(OB)), "written") : (this._config.d … [truncated]
-       }
-       remove() {
-         let {
-           keepGroupEntries: BB = !1
-         } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         if (this._markAllCrossTabFeatureFlagChangesPending(), nG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.Vq._remove(this._name, !1), this.Vq._remove(this._name, !0), !BB && this._ownsSplitStorage)
-           for (const OB of uy) Pj._remove(this._groupEntryName(OB));
-         BB ? delete this._slotState[yJ] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
-       }
-       clear() {
-         this.remove(), this.props = {}
-       }
-       register_once(BB, OB, GB) {
-         if (VG(BB)) {
-           this.syncCookieProperties(), nG(OB) && (OB = "None"), this._expire_days = nG(GB) ? this._default_expiry : GB;
- ... (4 more removed lines; see GitHub link above)
+       }
+       _update(WW) {
+         if (this._alive = this._particles.length > 0, this.emitter.position) {
+           const WW = this.emitter;
+           this._emitterWorldMatrix = WW.getWorldMatrix()
+         } else {
+           const WW = this.emitter;
+           this._emitterWorldMatrix = NW.d.Translation(WW.x, WW.y, WW.z)
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4417` → after: `L3528-L3535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3528-L3535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3528-L3535) · [Before (L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4417)

```diff
-         return !1
+         this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(WW)
+       }
+       static _GetAttributeNamesOrOptions() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const mW = [PW.k.PositionKind, PW.k.ColorKind, "angle", "offset", "size"];
+         return WW && mW.push("cellIndex"), iW || mW.push("direction"), OW && mW.push("remapData"), mW
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4419-L4425` → after: `L3537-L3555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3537-L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3537-L3555) · [Before (L4419-L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4419-L4425)

```diff
-       register(BB, OB) {
-         if (VG(BB)) {
-           this.syncCookieProperties(), this._expire_days = nG(OB) ? this._default_expiry : OB;
-           let GB = !1;
-           if (co(BB, ((OB, YB) => {
-               BB.hasOwnProperty(YB) && (this.props[YB] !== OB || VG(OB) || WG(OB)) && (this._setProp(YB, OB), GB = !0)
-             })), GB) return this.save(), !0
+       static _GetEffectCreationOptions() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const mW = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
+         return (0, XW.d)(mW), WW && mW.push("particlesInfos"), iW && mW.push("logarithmicDepthConstant"), OW && (mW.push("vFogInfos"), mW.push("vFogColor")), mW
+       }
+       fillDefines(WW, iW) {
+         let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         if (this._scene && ((0, XW.k)(this, this._scene, WW), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && WW.push("#define FOG")), this._isAnimationSheetEnabled && WW.push("#define ANIMATESHEET"), this.useLogarithmicDepth && WW.push("#define LOGARITHMI … [truncated]
+           case 2:
+             WW.push("#define BILLBOARDY");
+             break;
+           case 8:
+           case 9:
+             WW.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && WW.push("#define BILLBOARDSTRETCHED_LOCAL");
+ ... (3 more added lines; see GitHub link above)
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4427` → after: `L3557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3557) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4427)

```diff
-         return !1
+         OW && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), WW.push(this._imageProcessingConfigurationDefines.toString()))
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4429-L4449` → after: `L3559-L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3559-L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3559-L3562) · [Before (L4429-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4429-L4449)

```diff
-       unregister(BB) {
-         this.syncCookieProperties();
-         const OB = "string" == typeof BB ? [BB] : BB;
-         let GB = !1;
-         for (const YB of OB) YB in this.props && (this._deleteProp(YB), GB = !0);
-         GB && this.save()
-       }
-       update_campaign_params() {
-         const BB = null == tO ? void 0 : tO.URL;
-         if (BB === this._campaign_params_url) return;
-         const OB = Cy(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
-           GB = !SG(To(OB));
-         return GB && this.register(OB), this._campaign_params_url = BB, GB ? OB : void 0
-       }
-       update_search_keyword() {
-         this.register(function() {
- ... (5 more removed lines; see GitHub link above)
+       fillUniformsAttributesAndSamplerNames(WW, iW, OW) {
+         iW.push(...di._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), WW.push(...di._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDep … [truncated]
+       }
+       _getWrapper(WW) {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4451-L4471` → after: `L3564-L3654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3564-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3564-L3654) · [Before (L4451-L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4451-L4471)

```diff
-         this.register_once({
-           $referrer: BJ(),
-           $referring_domain: (null == tO ? void 0 : tO.referrer) && (null === (BB = wy(tO.referrer)) || void 0 === BB ? void 0 : BB.host) || ty
-         }, void 0)
-       }
-       set_initial_person_info() {
-         if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
-         const BB = OJ(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
-         this.register_once({
-           [nO]: this._storesIdentityInCookie ? {
-             r: jJ(BB.r),
-             u: BB.u ? jJ(BB.u) : void 0
-           } : BB
-         }, void 0)
-       }
-       get_initial_props() {
- ... (5 more removed lines; see GitHub link above)
+         const OW = this._getCustomDrawWrapper(WW);
+         if (OW?.effect) return OW;
+         const mW = [];
+         this.fillDefines(mW, WW);
+         const NW = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
+           PW = oi.d._PrepareStringDefines(NW, mW),
+           LW = PW ? oi.d.GetConfiguration(NW) : void 0;
+         let cW = this._drawWrappers[NW];
+         cW || (cW = this._drawWrappers[NW] = [], 0 === NW || this._renderPassObserver || (this._renderPassObserver = ((iW = this._engine)._onReleaseRenderPassObservable ?? (iW._onReleaseRenderPassObservable = new EW.e)).add((WW => {
+           const iW = this._drawWrappers[WW];
+           if (iW) {
+             for (const WW of iW) WW?.dispose();
+             delete this._drawWrappers[WW]
+           }
+         }))));
+         let wW = cW[WW];
+ ... (75 more added lines; see GitHub link above)
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4487-L4512` → after: `L3659-L3698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3659-L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3659-L3698) · [Before (L4487-L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4487-L4512)

```diff
-       safe_merge(BB) {
-         return co(this.props, (function(OB, GB) {
-           GB in BB || (BB[GB] = OB)
-         })), BB
-       }
-       update_config(BB, OB, GB) {
-         const YB = BB.persistence !== OB.persistence,
-           DB = !((BB, OB) => {
-             if (BB.length !== OB.length) return !1;
-             const GB = [...BB].sort(),
-               YB = [...OB].sort();
-             return GB.every(((BB, OB) => BB === YB[OB]))
-           })(BB.cookie_persisted_properties || [], OB.cookie_persisted_properties || []),
-           QB = YB || DB,
-           oB = BB.cookieWinsOnConflict !== OB.cookieWinsOnConflict,
-           jB = BB.disable_persistence || !!GB,
- ... (10 more removed lines; see GitHub link above)
+       _appendParticleVertices(WW, iW) {
+         this._appendParticleVertex(WW++, iW, 0, 0), this._useInstancing || (this._appendParticleVertex(WW++, iW, 1, 0), this._appendParticleVertex(WW++, iW, 1, 1), this._appendParticleVertex(WW, iW, 0, 1))
+       }
+       rebuild() {
+         this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
+       }
+       async _initShaderSourceAsync() {
+         this._engine.isWebGPU && !di.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([OW.e(664).then((() => OW(64427))), OW.e(658).then((() => OW(64432)))])) : await Promise.all([OW.e(647).then((() => OW(64436))), Promise.all([OW.e(640), OW.e(673)]).then((() => OW(64439) … [truncated]
+       }
+       isReady() {
+         if (!this._shadersLoaded) return !1;
+         if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
+         if (this.blendMode !== SW.BLENDMODE_MULTIPLYADD) {
+           if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
+         } else {
+           if (!this._getWrapper(SW.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
+ ... (24 more added lines; see GitHub link above)
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4514-L4517` → after: `L3700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3700) · [Before (L4514-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4514-L4517)

```diff
-           if (this._default_expiry = this._expire_days = BB.cookie_expiration, this.set_disabled(jB), this.set_cross_subdomain(BB.cross_subdomain_cookie), this.set_secure(BB.secure_cookie), PB) {
-             const BB = this.props;
-             this.clear(), this.Vq = JB, this._splitStorage = MB, this.props = BB, this.save()
-           } else oB && (this.Vq = JB, jB || (delete this._slotState[yJ], this._writeNow()))
+           oi.d._BindAttachmentsForEffect(mW, OW) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(OW), this._useInstancing ? this._scene?.forceWireframe ? mW.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._cap … [truncated]
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4519` → after: `L3702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3702) · [Before (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4519)

```diff
-           this._storageMigrationInProgress = !1, zB && this._endCookieSyncSuppression()
+           oi.d._RestoreAttachments(mW)
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4522-L4530` → after: `L3706-L3710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3706-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3706-L3710) · [Before (L4522-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4522-L4530)

```diff
-       _truncateExistingPersonInfoForCookie() {
-         const BB = this.props[nO];
-         if (!this._storesIdentityInCookie || !VG(BB) || "string" != typeof BB.r) return;
-         const OB = jJ(BB.r),
-           GB = "string" == typeof BB.u ? jJ(BB.u) : BB.u;
-         OB === BB.r && GB === BB.u || this._setProp(nO, RD(RD({}, BB), {}, {
-           r: OB,
-           u: GB
-         }))
+       render() {
+         if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
+         const WW = this._engine;
+         let iW;
+         return WW.setState && (WW.setState(!1), this.forceDepthWrite && WW.setDepthWrite(!0)), iW = this.blendMode === SW.BLENDMODE_MULTIPLYADD ? this._render(SW.BLENDMODE_MULTIPLY) + this._render(SW.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttrib … [truncated]
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4532-L4533` → after: `L3712-L3721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3712-L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3712-L3721) · [Before (L4532-L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4532-L4533)

```diff
-       set_disabled(BB) {
-         this._disabled = BB, this._disabled ? this.remove() : this.save()
+       _onDispose() {}
+       dispose() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), … [truncated]
+           const WW = this._scene.vY.indexOf(this);
+           WW > -1 && this._scene.vY.splice(WW, 1), this._scene._activeParticleSystems.dispose()
+         }
+         this.jD.notifyObservers(this), this.jD.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4535-L4538` → after: `L3723-L3734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3723-L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3723-L3734) · [Before (L4535-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4535-L4538)

```diff
-       set_cross_subdomain(BB) {
-         BB !== this._cross_subdomain && (this._cross_subdomain = BB, this.remove({
-           keepGroupEntries: !0
-         }), this.save())
+     }
+     di.ForceGLSL = !1;
+     var ei, vi = OW(38299);
+     ! function(WW) {
+       WW[WW.ATTACHED = 0] = "ATTACHED", WW[WW.END = 1] = "END"
+     }(ei || (ei = {}));
+     class gi {
+       constructor(WW) {
+         if (this.particleSystem = WW, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !WW.emitter || !WW.emitter.dispose) {
+           const iW = (0, vi.d)("BABYLON.AbstractMesh");
+           WW.emitter = new iW("SubemitterSystemEmitter", WW.bD()), WW._disposeEmitterOnDispose = !0
+         }
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4540-L4543` → after: `L3736-L3745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3736-L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3736-L3745) · [Before (L4540-L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4540-L4543)

```diff
-       set_secure(BB) {
-         BB !== this._secure && (this._secure = BB, this.remove({
-           keepGroupEntries: !0
-         }), this.save())
+       clone() {
+         let WW = this.particleSystem.emitter;
+         if (WW) {
+           if (WW instanceof NW.q) WW = WW.clone();
+           else if (-1 !== WW.getClassName().indexOf("Mesh")) {
+             WW = new((0, vi.d)("BABYLON.Mesh"))("", WW.bD()), WW.isVisible = !1
+           }
+         } else WW = new NW.q;
+         const iW = new gi(this.particleSystem.clone(this.particleSystem.name, WW));
+         return iW.particleSystem.name += "Clone", iW.type = this.type, iW.inheritDirection = this.inheritDirection, iW.inheritedVelocityAmount = this.inheritedVelocityAmount, iW.particleSystem._disposeEmitterOnDispose = !0, iW.particleSystem.disposeOnStop = !0, iW
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4545-L4547` → after: `L3747-L3750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3747-L3750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3747-L3750) · [Before (L4545-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4545-L4547)

```diff
-       set_event_timer(BB, OB) {
-         const GB = this.props.__timers || {};
-         GB[BB] = OB, this._setProp(FB, GB), this.save()
+       serialize() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const iW = {};
+         return iW.type = this.type, iW.inheritDirection = this.inheritDirection, iW.inheritedVelocityAmount = this.inheritedVelocityAmount, iW.particleSystem = this.particleSystem.serialize(WW), iW
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4549-L4552` → after: `L3752-L3753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3752-L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3752-L3753) · [Before (L4549-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4549-L4552)

```diff
-       remove_event_timer(BB) {
-         const OB = this.props.__timers || {},
-           GB = OB[BB];
-         return nG(GB) || (delete OB[BB], this._setProp(FB, OB), this.save()), GB
+       static _ParseParticleSystem(WW, iW, OW) {
+         throw (0, gW.o)("ParseParticle")
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4554-L4555` → after: `L3755-L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3755-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3755-L3758) · [Before (L4554-L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4554-L4555)

```diff
-       get_property(BB) {
-         return this.props[BB]
+       static Parse(WW, iW, OW) {
+         const mW = WW.particleSystem,
+           EW = new gi(gi._ParseParticleSystem(mW, iW, OW, !0));
+         return EW.type = WW.type, EW.inheritDirection = WW.inheritDirection, EW.inheritedVelocityAmount = WW.inheritedVelocityAmount, EW.particleSystem._isSubEmitter = !0, EW
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4557-L4558` → after: `L3760-L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3760-L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3760-L3761) · [Before (L4557-L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4557-L4558)

```diff
-       set_property(BB, OB) {
-         this._setProp(BB, OB), this.save()
+       dispose() {
+         this.particleSystem.dispose()
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4560-L4564` → after: `L3763-L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3763-L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3763-L3787) · [Before (L4560-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4560-L4564)

```diff
-       _setProp(BB, OB) {
-         let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         var YB;
-         const DB = this.props[BB];
-         this.props[BB] = OB, GB && ("distinct_id" !== BB && "$user_state" !== BB || DB === OB || (this._localIdentityChangePending = !0), zJ(BB) && !lJ(DB, OB) && this._metaIdentifierChangePending.add(BB), this._markPendingCrossTabFeatureFlagChanges(BB, DB, OB), (null === (YB = F … [truncated]
+     }
+     var Di = OW(41423),
+       Vi = OW(41538);
+     const fi = () => {};
+     class Ci {
+       constructor() {
+         this.particlePositionGenerator = fi, this.particleDestinationGenerator = fi, this.particleDirectionGenerator = fi
+       }
+       startDirectionFunction(WW, iW, OW, mW) {
+         const EW = NW.l.fA[0];
+         if (this.particleDirectionGenerator && this.particleDirectionGenerator !== fi) this.particleDirectionGenerator(-1, OW, EW);
+         else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== fi) {
+           this.particleDestinationGenerator(-1, OW, EW);
+           const WW = NW.l.fA[1];
+           EW.subtractToRef(OW.position, WW), WW.scaleToRef(1 / OW.lifeTime, EW)
+         } else EW.set(0, 0, 0);
+ ... (9 more added lines; see GitHub link above)
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4566-L4568` → after: `L3789-L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3789-L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3789-L3792) · [Before (L4566-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4566-L4568)

```diff
-       _deleteProp(BB) {
-         let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         delete this.props[BB], OB && (MJ(BB) && this._setCrossTabFeatureFlagChangesPending(BB, !0), zJ(BB) && this._metaIdentifierChangePending.add(BB), this._markGroupDirty(BB))
+       applyToShader(WW) {}
+       buildUniformLayout(WW) {}
+       getEffectDefines() {
+         return "#define CUSTOMEMITTER"
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4570-L4573` → after: `L3794-L3795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3794-L3795) · [Before (L4570-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4570-L4573)

```diff
-       _markGroupDirty(BB) {
-         var OB;
-         const GB = null === (OB = Fy(BB)) || void 0 === OB ? void 0 : OB.storageGroup;
-         GB && (this._slotWriteState(GB).ap = !0)
+       getClassName() {
+         return "CustomParticleEmitter"
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4575-L4576` → after: `L3797-L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3797-L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3797-L3799) · [Before (L4575-L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4575-L4576)

```diff
-       _slotWriteState(BB) {
-         return this._slotState[BB] || (this._slotState[BB] = {})
+       serialize() {
+         const WW = {};
+         return WW.type = this.getClassName(), WW.particlePositionGenerator = this.particlePositionGenerator, WW.particleDestinationGenerator = this.particleDestinationGenerator, WW
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4578-L4606` → after: `L3801-L3802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3801-L3802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3801-L3802) · [Before (L4578-L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4578-L4606)

```diff
-     };
-     const NJ = {
-         GZipJS: "gzip-js",
-         Base64: "base64"
-       },
-       RJ = "events",
-       WJ = "cancelEvents",
-       AJ = "popover",
-       VJ = "api",
-       SJ = "widget",
-       nJ = "survey shown",
-       UJ = "survey dismissed",
-       fJ = "survey sent",
-       kJ = "$survey_id",
-       dJ = "$survey_iteration",
-       KJ = "$survey_last_seen_date",
- ... (13 more removed lines; see GitHub link above)
+       parse(WW) {
+         WW.particlePositionGenerator && (this.particlePositionGenerator = WW.particlePositionGenerator), WW.particleDestinationGenerator && (this.particleDestinationGenerator = WW.particleDestinationGenerator)
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4609-L4630` → after: `L3805-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3805-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3805-L3810) · [Before (L4609-L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4609-L4630)

```diff
-     const FJ = "product tour shown",
-       iJ = "$product_tour_last_seen_date",
-       LJ = "$product_tour_type",
-       gJ = wo("[RateLimiter]");
-     var rJ = class {
-       constructor(BB) {
-         this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = BB => {
-           const OB = BB.text;
-           if (OB && OB.length) try {
-             (JSON.parse(OB).quota_limited || []).forEach((BB => {
-               gJ.info(`${BB||"events"} is quota limited.`), this.serverLimits[BB] = (new Date).getTime() + 6e4
-             }))
-           } catch (BB) {
-             return void gJ.warn(`could not rate limit - continuing. Error: "${null==BB?void 0:BB.message}"`, {
-               text: OB
-             })
- ... (6 more removed lines; see GitHub link above)
+     const Xi = NW.q.Zero(),
+       Bi = NW.q.Zero(),
+       qi = NW.q.Zero();
+     class Ri {
+       constructor() {
+         this.strength = 0, this.position = NW.q.Zero()
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4632-L4634` → after: `L3812-L3815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3812-L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3812-L3815) · [Before (L4632-L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4632-L4634)

```diff
-       get captureEventsBurstLimit() {
-         var BB;
-         return Math.max((null === (BB = this.instance.config.rate_limiting) || void 0 === BB ? void 0 : BB.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
+       _processParticle(WW, iW) {
+         this.position.subtractToRef(WW.position, Xi);
+         const OW = Xi.lengthSquared() + 1;
+         Xi.normalize().scaleToRef(this.strength / OW, Bi), Bi.scaleToRef(iW._tempScaledUpdateSpeed, qi), WW.direction.addInPlace(qi)
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4636-L4650` → after: `L3817-L3820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3817-L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3817-L3820) · [Before (L4636-L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4636-L4650)

```diff
-       clientRateLimitContext() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         var OB, GB, YB;
-         const {
-           captureEventsBurstLimit: DB,
-           captureEventsPerSecond: QB
-         } = this, oB = (new Date).getTime(), jB = null !== (OB = null === (GB = this.instance.persistence) || void 0 === GB ? void 0 : GB.get_property("$capture_rate_limit")) && void 0 !== OB ? OB : {
-           tokens: DB,
-           last: oB
-         };
-         jB.tokens += (oB - jB.last) / 1e3 * QB, jB.last = oB, jB.tokens > DB && (jB.tokens = DB);
-         const yB = 1 > jB.tokens;
-         if (yB || BB || (jB.tokens = Math.max(0, jB.tokens - 1)), yB && !BB) {
-           const BB = (KG(jB.dropped) ? jB.dropped : 0) + 1;
-           jB.dropped = BB, !this.lastEventRateLimited && this._captureWarning(BB) && (jB.dropped = 0)
+       serialize() {
+         return {
+           position: this.position.wEW(),
+           strength: this.strength
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4652-L4654` → after: `L3822-L3834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3822-L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3822-L3834) · [Before (L4652-L4654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4652-L4654)

```diff
-         return this.lastEventRateLimited = yB, null === (YB = this.instance.persistence) || void 0 === YB || YB.set_property("$capture_rate_limit", jB), {
-           isRateLimited: yB,
-           remainingTokens: jB.tokens
+       }
+     }
+     const Gi = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationC … [truncated]
+     class Ii extends di {
+       constructor() {
+         super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metad … [truncated]
+           if (!this._subEmitters || 0 === this._subEmitters.length) return;
+           const iW = Math.floor(Math.random() * this._subEmitters.length);
+           for (const OW of this._subEmitters[iW])
+             if (1 === OW.type) {
+               const iW = OW.clone();
+               WW._inheritParticleInfoToSubEmitter(iW), iW.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(iW.particleSystem), iW.particleSystem.start()
+             }
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4657-L4659` → after: `L3837-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3837-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3837-L3838) · [Before (L4657-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4657-L4659)

```diff
-       _isPropertyAllowed(BB) {
-         const OB = this.instance.config.property_denylist;
-         return !WG(OB) || !OB.includes(BB)
+       get source() {
+         return this._source
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4661-L4675` → after: `L3840-L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3840-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3840-L3841) · [Before (L4661-L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4661-L4675)

```diff
-       _triggeringPage() {
-         var BB;
-         if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == BG ? void 0 : BG.pathname)) return `${null!==(BB=BG.origin)&&void 0!==BB?BB:""}${BG.pathname}`
-       }
-       _captureWarning(BB) {
-         var OB, GB;
-         const {
-           captureEventsBurstLimit: YB,
-           captureEventsPerSecond: DB
-         } = this, QB = this._triggeringPage(), oB = this._isPropertyAllowed("$session_id") ? null === (OB = (GB = this.instance).get_session_id) || void 0 === OB ? void 0 : OB.call(GB) : void 0, jB = [`${BB} event(s) dropped since the last warning`, QB ? `triggered on ${QB}` : vo … [truncated]
-         return !!this.instance.capture("$$client_ingestion_warning", {
-           $$client_ingestion_warning_message: `posthog-js client rate limited: ${jB}. Config is set to ${DB} events per second and ${YB} events burst limit.`
-         }, {
-           skip_client_rate_limiting: !0
-         })
+       get isNodeGenerated() {
+         return null !== this._source
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4677-L4679` → after: `L3843-L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3843-L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3843-L3844) · [Before (L4677-L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4677-L4679)

```diff
-       isServerRateLimited(BB) {
-         const OB = this.serverLimits[BB || "events"] || !1;
-         return !1 !== OB && (new Date).getTime() < OB
+       get flowMap() {
+         return this._flowMap
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4681-L4685` → after: `L3846-L3863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3846-L3863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3846-L3863) · [Before (L4681-L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4681-L4685)

```diff
-     };
-     const XJ = wo("[RemoteConfig]");
-     var wJ = class {
-       constructor(BB) {
-         this._instance = BB
+       set flowMap(WW) {
+         this._flowMap !== WW && (this._flowMap = WW, this._flowMapUpdate && (ui(this._flowMapUpdate), this._flowMapUpdate = null), WW && (this._flowMapUpdate = {
+           process: WW => {
+             const iW = this.bD()?.getTransformMatrix();
+             this._flowMap._processParticle(WW, this.flowMapStrength * this._tempScaledUpdateSpeed, iW)
+           },
+           previousItem: null,
+           nextItem: null
+         }, ni(this._flowMapUpdate, this._directionProcessing)))
+       }
+       addAttractor(WW) {
+         super.addAttractor(WW), 1 === this._attractors.length && (this._attractorUpdate = {
+           process: WW => {
+             for (const iW of this._attractors) iW._processParticle(WW, this)
+           },
+           previousItem: null,
+ ... (2 more added lines; see GitHub link above)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4687-L4689` → after: `L3865-L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3865-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3865-L3866) · [Before (L4687-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4687-L4689)

```diff
-       get remoteConfig() {
-         var BB;
-         return null === (BB = jG._POSTHOG_REMOTE_CONFIG) || void 0 === BB || null === (BB = BB[this._instance.config.token]) || void 0 === BB ? void 0 : BB.config
+       removeAttractor(WW) {
+         super.removeAttractor(WW), 0 === this._attractors.length && this._attractorUpdate && ui(this._attractorUpdate)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4691-L4693` → after: `L3868-L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3868-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3868-L3870) · [Before (L4691-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4691-L4693)

```diff
-       _loadRemoteConfigJs(BB) {
-         var OB, GB, YB;
-         (null === (OB = jG.__PosthogExtensions__) || void 0 === OB ? void 0 : OB.loadExternalDependency) ? null === (GB = jG.__PosthogExtensions__) || void 0 === GB || null === (YB = GB.loadExternalDependency) || void 0 === YB || YB.call(GB, this._instance, "remote-config", (() = … [truncated]
+       start() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
+         this.canStart() && super.start(WW)
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4695-L4700` → after: `L3872-L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3872-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3872-L3874) · [Before (L4695-L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4695-L4700)

```diff
-       _loadRemoteConfigJSON(BB) {
-         this._instance._send_request({
-           method: "GET",
-           url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
-           callback: BB
-         })
+       _prepareSubEmitterInternalArray() {
+         if (this._subEmitters = new Array, this.subEmitters)
+           for (const WW of this.subEmitters) WW instanceof Ii ? this._subEmitters.push([new gi(WW)]) : WW instanceof gi ? this._subEmitters.push([WW]) : WW instanceof Array && this._subEmitters.push(WW)
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4702-L4713` → after: `L3876-L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3876-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3876-L3879) · [Before (L4702-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4702-L4713)

```diff
-       load() {
-         try {
-           if (this.remoteConfig) return XJ.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
-           if (this._instance._shouldDisableFlags()) return void XJ.warn("Remote config is disabled. Falling back to local config.");
-           this._loadRemoteConfigJs((BB => {
-             if (!BB) return XJ.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((BB => {
-               this._onRemoteConfig(BB.json, BB)
-             }));
-             this._onRemoteConfig(BB)
-           }))
-         } catch (YB) {
-           XJ.error("Error loading remote config", YB), this._onRemoteConfig()
+       _stopSubEmitters() {
+         if (this.activeSubSystems) {
+           for (const WW of this.activeSubSystems) WW.stop(!0);
+           this.activeSubSystems = []
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4716-L4733` → after: `L3882-L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3882-L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3882-L3884) · [Before (L4716-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4716-L4733)

```diff
-       _onRemoteConfig(BB, OB) {
-         !BB && OB && (0 === OB.statusCode ? OB.error || XJ.warn("Failed to fetch remote config from PostHog.") : XJ.error("Failed to fetch remote config from PostHog."));
-         try {
-           this._instance._onRemoteConfig(BB ? {
-             ok: !0,
-             config: BB
-           } : {
-             ok: !1
-           })
-         } catch (BB) {
-           XJ.error("Error applying remote config", BB)
-         }
-         if (!1 !== (null == BB ? void 0 : BB.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
-           var GB;
-           null === (GB = this._instance.featureFlags) || void 0 === GB || GB.ensureFlagsLoaded()
-         } catch (BB) {
- ... (2 more removed lines; see GitHub link above)
+       _removeFromRoot() {
+         if (!this._rootParticleSystem) return;
+         const WW = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== WW && this._rootParticleSystem.activeSubSystems.splice(WW, 1), this._rootParticleSystem = null
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4735-L4805` → after: `L3886-L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3886-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3886-L3900) · [Before (L4735-L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4735-L4805)

```diff
-     };
-     var EJ = Uint8Array,
-       cJ = Uint16Array,
-       hJ = Uint32Array,
-       aJ = new EJ([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
-       eJ = new EJ([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
-       TJ = new EJ([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
-       bJ = function(BB, OB) {
-         for (var GB = new cJ(31), YB = 0; 31 > YB; ++YB) GB[YB] = OB += 1 << BB[YB - 1];
-         var DB = new hJ(GB[30]);
-         for (YB = 1; 30 > YB; ++YB)
-           for (var QB = GB[YB]; GB[YB + 1] > QB; ++QB) DB[QB] = QB - GB[YB] << 5 | YB;
-         return [GB, DB]
-       },
-       CJ = bJ(aJ, 2),
-       HJ = CJ[1];
- ... (55 more removed lines; see GitHub link above)
+       _preStart() {
+         this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
+       }
+       _postStop(WW) {
+         WW && this._stopSubEmitters()
+       }
+       _prepareParticle(WW) {
+         if (this._subEmitters && this._subEmitters.length > 0) {
+           const iW = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
+           WW._properties.attachedSubEmitters = [];
+           for (const OW of iW)
+             if (0 === OW.type) {
+               const iW = OW.clone();
+               WW._properties.attachedSubEmitters.push(iW), iW.particleSystem.start()
+             }
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4807-L4853` → after: `L3902-L3970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3902-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3902-L3970) · [Before (L4807-L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4807-L4853)

```diff
-         GB.sort((function(BB, OB) {
-           return BB.f - OB.f
-         })), GB.push({
-           s: -1,
-           f: 25001
-         });
-         var jB = GB[0],
-           yB = GB[1],
-           JB = 0,
-           MB = 1,
-           PB = 2;
-         for (GB[0] = {
-             s: -1,
-             f: jB.f + yB.f,
-             l: jB,
-             r: yB
- ... (31 more removed lines; see GitHub link above)
+       }
+       _onDispose() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), WW && this.particles)
+           for (const OW of this.particles)
+             if (OW._properties.attachedSubEmitters)
+               for (let WW = OW._properties.attachedSubEmitters.length - 1; WW >= 0; WW -= 1) OW._properties.attachedSubEmitters[WW].dispose();
+         if (iW && this.activeSubSystems)
+           for (let OW = this.activeSubSystems.length - 1; OW >= 0; OW -= 1) this.activeSubSystems[OW].dispose();
+         if (this._subEmitters && this._subEmitters.length) {
+           for (let WW = 0; WW < this._subEmitters.length; WW++)
+             for (const iW of this._subEmitters[WW]) iW.dispose();
+           this._subEmitters = [], this.subEmitters = []
+         }
+         this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
+ ... (53 more added lines; see GitHub link above)
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4855-L4905` → after: `L3972-L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L3972-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L3972-L4030) · [Before (L4855-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4855-L4905)

```diff
-         return [new EJ(lB), pB]
-       },
-       MM = function(BB, OB, GB) {
-         return -1 == BB.s ? Math.max(MM(BB.l, OB, GB + 1), MM(BB.r, OB, GB + 1)) : OB[BB.s] = GB
-       },
-       PM = function(BB) {
-         for (var OB = BB.length; OB && !BB[--OB];);
-         for (var GB = new cJ(++OB), YB = 0, DB = BB[0], QB = 1, oB = function(BB) {
-             GB[YB++] = BB
-           }, jB = 1; OB >= jB; ++jB)
-           if (BB[jB] == DB && jB != OB) ++QB;
-           else {
-             if (!DB && QB > 2) {
-               for (; QB > 138; QB -= 138) oB(32754);
-               QB > 2 && (oB(QB > 10 ? QB - 11 << 5 | 28690 : QB - 3 << 5 | 12305), QB = 0)
-             } else if (QB > 3) {
- ... (35 more removed lines; see GitHub link above)
+         let LW;
+         if (WW.particleEmitterType) {
+           switch (WW.particleEmitterType.type) {
+             case "SphereParticleEmitter":
+               LW = new jW;
+               break;
+             case "SphereDirectedParticleEmitter":
+               LW = new UW;
+               break;
+             case "ConeEmitter":
+             case "ConeParticleEmitter":
+               LW = new sW;
+               break;
+             case "ConeDirectedParticleEmitter":
+               LW = new MW;
+               break;
+ ... (43 more added lines; see GitHub link above)
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4923-L5061` → after: `L4033-L4036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4033-L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4033-L4036) · [Before (L4923-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L4923-L5061)

```diff
-         return BB
-       }()),
-       NM = function(BB, OB, GB) {
-         for (; GB; ++OB) BB[OB] = GB, GB >>>= 8
-       };
-     const RM = !!GG || !!OG,
-       WM = new WeakMap,
-       AM = "text/plain";
-     let VM = 0,
-       SM = !1;
-     const nM = (BB, OB) => {
-         const [GB, YB] = BB.split("#"), [DB, QB] = GB.split("?");
-         if (!QB) return BB;
-         const oB = QB.split("&").filter((BB => BB.split("=")[0] !== OB)).join("&");
-         return `${DB}${oB?`?${oB}`:""}${YB?`#${YB}`:""}`
-       },
- ... (123 more removed lines; see GitHub link above)
+         if (WW.attractors)
+           for (const tW of WW.attractors) {
+             const WW = new Ri;
+             WW.position = NW.q.FromArray(tW.position), WW.strength = tW.strength, xW.addAttractor(WW)
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5063-L5072` → after: `L4038-L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4038-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4038-L4048) · [Before (L5063-L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5063-L5072)

```diff
-         }
-         if (GB === NJ.Base64) {
-           const BB = function(BB) {
-               return BB ? btoa(encodeURIComponent(BB).replace(/%([0-9A-F]{2})/g, ((BB, OB) => String.fromCharCode(parseInt(OB, 16))))) : BB
-             }(Xy(OB)),
-             GB = (BB => "data=" + encodeURIComponent("string" == typeof BB ? BB : Xy(BB)))(BB);
-           return {
-             contentType: "application/x-www-form-urlencoded",
-             body: GB,
-             estimatedSize: new Blob([GB]).size
+         return Ii._Parse(WW, xW, iW, OW), WW.textureMask && (xW.textureMask = tW.d.FromArray(WW.textureMask)), WW.worldOffset && (xW.worldOffset = NW.q.FromArray(WW.worldOffset)), WW.preventAutoStart && (xW.preventAutoStart = WW.preventAutoStart), WW.metadata && (xW.metadata = WW … [truncated]
+       }
+       serialize() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const iW = {};
+         if (Ii._Serialize(iW, this, WW), iW.textureMask = this.textureMask.wEW(), iW.customShader = this.customShader, iW.preventAutoStart = this.preventAutoStart, iW.worldOffset = this.worldOffset.wEW(), this.metadata && (iW.metadata = this.metadata), this.subEmitters) {
+           iW.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
+           for (const OW of this._subEmitters) {
+             const mW = [];
+             for (const iW of OW) iW.particleSystem.doNotSerialize || mW.push(iW.serialize(WW));
+             iW.subEmitters.push(mW)
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5075-L5140` → after: `L4051-L4053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4051-L4053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4051-L4053) · [Before (L5075-L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5075-L5140)

```diff
-         const YB = Xy(OB);
-         return {
-           contentType: "application/json",
-           body: YB,
-           estimatedSize: new Blob([YB]).size
-         }
-       },
-       kM = BB => {
-         const OB = () => "sendBeacon" === BB.transport ? {
-           url: UM(BB.url, {
-             compression: NJ.Base64
-           }),
-           encodedBody: fM(RD(RD({}, BB), {}, {
-             compression: NJ.Base64,
-             _encodedBody: void 0
-           }))
- ... (50 more removed lines; see GitHub link above)
+         if (this._attractors && this._attractors.length) {
+           iW.attractors = [];
+           for (const WW of this._attractors) iW.attractors.push(WW.serialize())
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5142-L5163` → after: `L4055-L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4055-L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4055-L4063) · [Before (L5142-L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5142-L5163)

```diff
-       }(),
-       uM = /Failed to fetch|NetworkError|Load failed/i,
-       mM = BB => "TypeError" === (null == BB ? void 0 : BB.name) && uM.test((null == BB ? void 0 : BB.message) || ""),
-       IM = BB => {
-         try {
-           const OB = function(BB) {
-             let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-             if ("string" != typeof BB || !BB) return;
-             const GB = BB.trim(),
-               YB = /^\d+\s*,/.test(GB) ? GB.slice(0, GB.indexOf(",")).trim() : GB;
-             if (/^\d+$/.test(YB)) {
-               const BB = 1e3 * Math.min(Number(YB), 300);
-               return BB > 0 ? BB : void 0
-             }
-             if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(YB)) return;
-             const DB = /^\w{3} \w{3} /.test(YB) ? YB + " GMT" : YB,
- ... (6 more removed lines; see GitHub link above)
+         return iW
+       }
+       static _Serialize(WW, iW, OW) {
+         if (WW.name = iW.name, WW.id = iW.id, WW.aZ = iW.getCapacity(), WW.disposeOnStop = iW.disposeOnStop, WW.manualEmitCount = iW.manualEmitCount, iW.emitter.position) {
+           const OW = iW.emitter;
+           WW.emitterId = OW.id
+         } else {
+           const OW = iW.emitter;
+           WW.emitter = OW.wEW()
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5165-L5184` → after: `L4065-L4077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4065-L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4065-L4077) · [Before (L5165-L5184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5165-L5184)

```diff
-       },
-       FM = BB => {
-         const OB = dM(BB);
-         if (!OB) return;
-         const GB = new GG;
-         WM.set(GB, !0);
-         const {
-           url: YB,
-           encodedBody: DB
-         } = OB;
-         GB.open(BB.method || "GET", YB, !0);
-         const {
-           contentType: QB,
-           body: oB
-         } = null != DB ? DB : {};
-         co(BB.headers, (function(BB, OB) {
- ... (4 more removed lines; see GitHub link above)
+         if (iW.particleEmitterType && (WW.particleEmitterType = iW.particleEmitterType.serialize()), iW.particleTexture)
+           if (OW) WW.texture = iW.particleTexture.serialize();
+           else {
+             const OW = iW.particleTexture;
+             WW.textureName = iW.particleTexture.name, WW.invertY = !!OW._invertY;
+             const mW = {};
+             for (const WW of Gi) mW[WW] = OW[WW];
+             mW.samplingMode = OW.samplingMode, WW.textureSettings = mW
+           } WW.isLocal = iW.isLocal, Vi.d.AppendSerializedAnimations(iW, WW), WW.beginAnimationOnStart = iW.beginAnimationOnStart, WW.beginAnimationFrom = iW.beginAnimationFrom, WW.beginAnimationTo = iW.beginAnimationTo, WW.beginAnimationLoop = iW.beginAnimationLoop, WW.startDela … [truncated]
+         const mW = iW.getColorGradients();
+         if (mW) {
+           WW.colorGradients = [];
+           for (const iW of mW) {
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5186-L5187` → after: `L4079-L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4079-L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4079-L4080) · [Before (L5186-L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5186-L5187)

```diff
-               statusCode: GB.status,
-               text: GB.responseText
+               gradient: iW.gradient,
+               color1: iW.color1.wEW()
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5189-L5192` → after: `L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4082) · [Before (L5189-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5189-L5192)

```diff
-             if (200 === GB.status) try {
-               YB.json = JSON.parse(GB.responseText)
-             } catch (BB) {}
-             null === (OB = BB.callback) || void 0 === OB || OB.call(BB, YB, IM((() => GB.getResponseHeader("Retry-After"))))
+             iW.color2 ? OW.color2 = iW.color2.wEW() : OW.color2 = iW.color1.wEW(), WW.colorGradients.push(OW)
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5194-L5211` → after: `L4084-L4085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4084-L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4084-L4085) · [Before (L5194-L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5194-L5211)

```diff
-         }, GB.send(oB)
-       },
-       iM = BB => {
-         const OB = dM(BB);
-         if (!OB) return;
-         const {
-           url: GB,
-           encodedBody: YB
-         } = OB, {
-           contentType: DB,
-           body: QB,
-           estimatedSize: oB
-         } = null != YB ? YB : {}, jB = new Headers;
-         co(BB.headers, (function(BB, OB) {
-           jB.append(OB, BB)
-         })), DB && jB.append("Content-Type", DB);
- ... (2 more removed lines; see GitHub link above)
+         }
+         const EW = iW.getRampGradients();
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5213-L5224` → after: `L4087-L4093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4087-L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4087-L4093) · [Before (L5213-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5213-L5224)

```diff
-           const OB = new YG;
-           yB = {
-             signal: OB.signal,
-             timeout: setTimeout((() => {
-               JB = !0;
-               try {
-                 OB.abort(JD("AbortError", "PostHog request timed out" + ((GB = BB.timeout) ? ` after ${GB}ms` : "")))
-               } catch (BB) {
-                 PB(BB)
-               }
-               var GB
-             }), BB.timeout)
+           WW.rampGradients = [];
+           for (const iW of EW) {
+             const OW = {
+               gradient: iW.gradient,
+               color: iW.color.wEW()
+             };
+             WW.rampGradients.push(OW)
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5227-L5250` → after: `L4097-L4100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4097-L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4097-L4100) · [Before (L5227-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5227-L5250)

```diff
-         let MB = !1;
-         const PB = OB => {
-           var GB;
-           MB || (MB = !0, JB && "AbortError" === (null == OB ? void 0 : OB.name) || mM(OB) ? Xo.warn(OB) : Xo.error(OB), null === (GB = BB.callback) || void 0 === GB || GB.call(BB, {
-             statusCode: 0,
-             error: OB
-           }))
-         };
-         let zB = 0;
-         const lB = () => {
-           VM -= zB, zB = 0, yB && clearTimeout(yB.timeout)
-         };
-         try {
-           const OB = RD({
-               method: (null == BB ? void 0 : BB.method) || "GET",
-               headers: jB,
- ... (8 more removed lines; see GitHub link above)
+         const NW = iW.getColorRemapGradients();
+         if (NW) {
+           WW.colorRemapGradients = [];
+           for (const iW of NW) {
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5252-L5253` → after: `L4102-L4103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4102-L4103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4102-L4103) · [Before (L5252-L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5252-L5253)

```diff
-               statusCode: OB.status,
-               text: GB
+               gradient: iW.gradient,
+               factor1: iW.factor1
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5255-L5294` → after: `L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4105) · [Before (L5255-L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5255-L5294)

```diff
-             if (200 === OB.status) try {
-               DB.json = JSON.parse(GB)
-             } catch (BB) {
-               Xo.error(BB)
-             }
-             MB = !0, lB(), null === (YB = BB.callback) || void 0 === YB || YB.call(BB, DB, IM((() => OB.headers.get("Retry-After"))))
-           })))).catch((BB => {
-             lB(), PB(BB)
-           })).finally(lB)
-         } catch (BB) {
-           lB(), PB(BB)
-         }
-       },
-       LM = BB => {
-         try {
-           var OB;
- ... (24 more removed lines; see GitHub link above)
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.colorRemapGradients.push(OW)
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5302-L5375` → after: `L4108-L4116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4108-L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4108-L4116) · [Before (L5302-L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5302-L5375)

```diff
-       },
-       gM = (BB, OB, GB, YB) => {
-         const DB = "query" === YB ? "POST" === OB ? "sent_at" : "_" : void 0;
-         return UM(GB === NJ.GZipJS ? nM(BB, "compression") : BB, RD(RD({}, DB ? {
-           [DB]: Date.now().toString()
-         } : {}), GB === NJ.GZipJS ? {} : {
-           compression: GB
-         }))
-       },
-       rM = (() => {
-         const BB = [];
-         return OG && BB.push({
-           transport: "fetch",
-           method: iM
-         }), GG && BB.push({
-           transport: "XHR",
- ... (58 more removed lines; see GitHub link above)
+         const PW = iW.getAlphaRemapGradients();
+         if (PW) {
+           WW.alphaRemapGradients = [];
+           for (const iW of PW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.alphaRemapGradients.push(OW)
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5466-L5473` → after: `L4119-L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4119-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4119-L4127) · [Before (L5466-L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5466-L5473)

```diff
-         resume() {
-           if (!nG(vO) && "onLine" in vO.navigator) {
-             if (this._areWeOnline = vO.navigator.onLine, this._onlineListener) return;
-             this._onlineListener = () => {
-               this._areWeOnline = !0, this._flush()
-             }, this._offlineListener = () => {
-               this._areWeOnline = !1
-             }, vo(vO, "online", this._onlineListener), vo(vO, "offline", this._offlineListener)
+         const LW = iW.getSizeGradients();
+         if (LW) {
+           WW.sizeGradients = [];
+           for (const iW of LW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.sizeGradients.push(OW)
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5476-L5543` → after: `L4130-L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4130-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4130-L4138) · [Before (L5476-L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5476-L5543)

```diff
-         get length() {
-           return this._queue.length
-         }
-         retriableRequest(BB, OB) {
-           let {
-             retriesPerformedSoFar: GB
-           } = BB, YB = fQ(BB, cM);
-           uG(GB) && (YB.url = UM(YB.url, {
-             retry_count: GB
-           })), wM(this._instance, OB ? RD(RD({}, YB), {}, {
-             transport: OB
-           }) : YB, ((BB, OB) => {
-             var DB;
-             if (200 !== BB.statusCode && (400 > BB.statusCode || BB.statusCode >= 500)) {
-               if ((0 === BB.statusCode ? 3 : 10) > (null != GB ? GB : 0)) return void this._enqueue(RD({
-                 retriesPerformedSoFar: GB
- ... (52 more removed lines; see GitHub link above)
+         const cW = iW.getAngularSpeedGradients();
+         if (cW) {
+           WW.angularSpeedGradients = [];
+           for (const iW of cW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.angularSpeedGradients.push(OW)
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5547-L5558` → after: `L4141-L4149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4141-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4141-L4149) · [Before (L5547-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5547-L5558)

```diff
-       },
-       aM = class {
-         constructor(BB) {
-           this._instance = BB, this._updateScrollData = () => {
-             var BB, OB, GB, YB;
-             this._context || (this._context = {});
-             const DB = this.scrollElement(),
-               QB = this.scrollY(),
-               oB = DB ? Math.max(0, DB.scrollHeight - DB.clientHeight) : 0,
-               jB = QB + ((null == DB ? void 0 : DB.clientHeight) || 0),
-               yB = (null == DB ? void 0 : DB.scrollHeight) || 0;
-             this._context.lastScrollY = Math.ceil(QB), this._context.maxScrollY = Math.max(QB, null !== (BB = this._context.maxScrollY) && void 0 !== BB ? BB : 0), this._context.maxScrollHeight = Math.max(oB, null !== (OB = this._context.maxScrollHeight) && void 0 !== OB ? OB : 0 … [truncated]
+         const wW = iW.getVelocityGradients();
+         if (wW) {
+           WW.velocityGradients = [];
+           for (const iW of wW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.velocityGradients.push(OW)
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5561-L5587` → after: `L4152-L4160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4152-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4152-L4160) · [Before (L5561-L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5561-L5587)

```diff
-         get _scrollRoot() {
-           return this._instance.config.scroll_root_selector
-         }
-         getContext() {
-           return this._context
-         }
-         resetContext() {
-           const BB = this._context;
-           return this._context = void 0, setTimeout(this._updateScrollData, 0), BB
-         }
-         startMeasuringScrollPosition() {
-           vo(vO, "scroll", this._updateScrollData, {
-             capture: !0
-           }), vo(vO, "scrollend", this._updateScrollData, {
-             capture: !0
-           }), vo(vO, "resize", this._updateScrollData)
- ... (11 more removed lines; see GitHub link above)
+         const tW = iW.getDragGradients();
+         if (tW) {
+           WW.dragGradients = [];
+           for (const iW of tW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.dragGradients.push(OW)
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5590-L5595` → after: `L4163-L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4163-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4163-L4171) · [Before (L5590-L5595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5590-L5595)

```diff
-         _scrollPosition(BB) {
-           var OB, GB;
-           const YB = "y" === BB ? "scrollTop" : "scrollLeft";
-           if (this._scrollRoot) {
-             const BB = this.scrollElement();
-             return BB && BB[YB] || 0
+         const ZW = iW.getEmitRateGradients();
+         if (ZW) {
+           WW.emitRateGradients = [];
+           for (const iW of ZW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.emitRateGradients.push(OW)
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5602-L5611` → after: `L4174-L4177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4174-L4177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4174-L4177) · [Before (L5602-L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5602-L5611)

```diff
-         scrollX() {
-           return this._scrollPosition("x")
-         }
-       };
-     const eM = BB => OJ(null == BB ? void 0 : BB.config.mask_personal_data_properties, null == BB ? void 0 : BB.config.custom_personal_data_properties, null == BB ? void 0 : BB.config.disable_capture_url_hashes);
-     var TM = class {
-         constructor(BB, OB, GB, YB) {
-           this._onSessionIdCallback = BB => {
-             const OB = this._getStored();
-             if (OB && OB.sessionId === BB) return;
+         const xW = iW.getStartSizeGradients();
+         if (xW) {
+           WW.startSizeGradients = [];
+           for (const iW of xW) {
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5613-L5614` → after: `L4179-L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4179-L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4179-L4180) · [Before (L5613-L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5613-L5614)

```diff
-               sessionId: BB,
-               props: this._sessionSourceParamGenerator(this._instance)
+               gradient: iW.gradient,
+               factor1: iW.factor1
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5616-L5647` → after: `L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4182) · [Before (L5616-L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5616-L5647)

```diff
-             this._persistence.register({
-               [WO]: GB
-             })
-           }, this._instance = BB, this._sessionIdManager = OB, this._persistence = GB, this._sessionSourceParamGenerator = YB || eM, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
-         }
-         _getStored() {
-           return this._persistence.props[WO]
-         }
-         getSetOnceProps() {
-           var BB;
-           const OB = null === (BB = this._getStored()) || void 0 === BB ? void 0 : BB.props;
-           return OB ? "r" in OB ? GJ(OB, this._instance.config.disable_capture_url_hashes) : {
-             $referring_domain: OB.referringDomain,
-             $pathname: OB.initialPathName,
-             utm_source: OB.utm_source,
-             utm_campaign: OB.utm_campaign,
- ... (16 more removed lines; see GitHub link above)
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.startSizeGradients.push(OW)
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5650-L5683` → after: `L4185-L4194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4185-L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4185-L4194) · [Before (L5650-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5650-L5683)

```diff
-         emit(BB, OB) {
-           for (const GB of this._events[BB] || []) GB(OB);
-           for (const GB of this._events["*"] || []) GB(BB, OB)
-         }
-         constructor() {
-           this._events = {}
-         }
-       };
-     const CM = wo("[SessionId]"),
-       HM = 864e5;
-     var vM = class {
-       on(BB, OB) {
-         return this._eventEmitter.on(BB, OB)
-       }
-       constructor(BB, OB, GB) {
-         var YB;
- ... (18 more removed lines; see GitHub link above)
+         const lW = iW.getLifeTimeGradients();
+         if (lW) {
+           WW.lifeTimeGradients = [];
+           for (const iW of lW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.lifeTimeGradients.push(OW)
+           }
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5685-L5750` → after: `L4196-L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4196-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4196-L4204) · [Before (L5685-L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5685-L5750)

```diff
-       }
-       _canUseSessionStorage() {
-         return "memory" !== this._config.persistence && !this._persistence._disabled && fj._is_supported()
-       }
-       _setWindowId(BB) {
-         BB !== this._windowId && (this._windowId = BB, this._canUseSessionStorage() && fj._set(this._window_id_storage_key, BB))
-       }
-       _getWindowId() {
-         return this._windowId ? this._windowId : this._canUseSessionStorage() ? fj._parse(this._window_id_storage_key) : null
-       }
-       _isActivityChangeBelowGranularity(BB) {
-         const OB = this._lastPersistedActivityTimestamp;
-         return !kG(OB) && !kG(BB) && 5e3 > Math.abs(BB - OB)
-       }
-       _setSessionId(BB, OB, GB) {
-         const YB = OB !== this._sessionActivityTimestamp,
- ... (50 more removed lines; see GitHub link above)
+         const AW = iW.getLimitVelocityGradients();
+         if (AW) {
+           WW.limitVelocityGradients = [];
+           for (const iW of AW) {
+             const OW = {
+               gradient: iW.gradient,
+               factor1: iW.factor1
+             };
+             void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.limitVelocityGradients.push(OW)
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5752-L5780` → after: `L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4206) · [Before (L5752-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5752-L5780)

```diff
-         }(BB);
-         return !nG(GB) && (OB ? this._pendingBootstrapSession = {
-           sessionId: BB,
-           sessionStartTimestamp: GB
-         } : this._setSessionId(BB, (new Date).getTime(), GB), !0)
-       }
-       destroy() {
-         this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && vO && (vO.removeEventListener(eO, this._beforeUnloadListener, {
-           capture: !1
-         }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
-       }
-       _listenToReloadWindow() {
-         this._beforeUnloadListener = () => {
-           this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && fj._remove(this._primary_window_exists_storage_key)
-         }, vo(vO, eO, this._beforeUnloadListener, {
-           capture: !1
- ... (13 more removed lines; see GitHub link above)
+           WW.limitVelocityDamping = iW.limitVelocityDamping
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5782-L5815` → after: `L4208-L4211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4208-L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4208-L4211) · [Before (L5782-L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5782-L5815)

```diff
-         let [, jB, yB] = this._getSessionId();
-         const JB = !nG(DB) && jB !== DB,
-           MB = this._freshestActivityTimestamp();
-         let PB = this._getWindowId();
-         const zB = this._pendingBootstrapSession,
-           lB = !!zB && (zB.sessionStartTimestamp > YB + 6e4 || YB - zB.sessionStartTimestamp > HM),
-           pB = zB ? lB : uG(yB) && Math.abs(YB - yB) > HM;
-         let qB = !1,
-           ZB = JB,
-           NB = !jB || !!zB;
-         const RB = jB;
-         let WB = !NB && !BB && this._sessionHasBeenIdleTooLong(YB, MB);
-         if (WB && (WB = this._isSessionIdleAfterCrossTabRefresh(YB), WB || CM.info("cross-tab refresh kept the session alive", {
-             sessionId: jB
-           }), [, jB, yB] = this._getSessionId(), WB || (NB = !jB || !!zB)), NB || WB || pB) {
-           ZB = !1;
- ... (18 more removed lines; see GitHub link above)
+         iW.noiseTexture && (WW.noiseTexture = iW.noiseTexture.serialize())
+       }
+       clone(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5817-L5820` → after: `L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4213) · [Before (L5817-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5817-L5820)

```diff
-           noSessionId: NB,
-           activityTimeout: WB,
-           sessionPastMaximumLength: pB,
-           crossTabAdoption: ZB
+           ...this._customWrappers
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5822-L5839` → after: `L4215-L4255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4215-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4215-L4255) · [Before (L5822-L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5822-L5839)

```diff
-         return qB && this._sessionIdChangedHandlers.forEach((BB => BB(jB, PB, SB))), {
-           sessionId: jB,
-           windowId: PB,
-           sessionStartTimestamp: VB,
-           changeReason: qB ? SB : void 0,
-           lastActivityTimestamp: MB
-         }
-       }
-       _resetIdleTimer() {
-         this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
-           if (!this._destroyed)
-             if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
-               const BB = this._sessionId;
-               this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
-                 idleSessionId: BB
-               })
- ... (2 more removed lines; see GitHub link above)
+         let EW = null;
+         const NW = this._engine;
+         if ((0, gW.e)(NW.createEffectForParticles) && null != this.customShader) {
+           EW = this.customShader;
+           const WW = EW.shaderOptions.defines.length > 0 ? EW.shaderOptions.defines.join("\n") : "",
+             iW = NW.createEffectForParticles(EW.shaderPath.fragmentElement, EW.shaderOptions.uniforms, EW.shaderOptions.samplers, WW);
+           mW[0] ? mW[0].effect = iW : this.setCustomEffect(iW, 0)
+         }
+         const PW = this.serialize(OW),
+           LW = !1 === OW && this.particleTexture ? this.particleTexture.clone() : null;
+         LW && (PW.textureName = void 0);
+         const cW = Ii.Parse(PW, this._scene || this._engine, this._rootUrl);
+         return cW.name = WW, cW.customShader = EW, cW._customWrappers = mW, LW && (cW.particleTexture = LW), void 0 === iW && (iW = this.emitter), this.noiseTexture && (cW.noiseTexture = this.noiseTexture.clone()), cW.emitter = iW, this.preventAutoStart || cW.start(), cW
+       }
+     }
+     Ii.BILLBOARDMODE_Y = 2, Ii.BILLBOARDMODE_ALL = 7, Ii.BILLBOARDMODE_STRETCHED = 8, Ii.BILLBOARDMODE_STRETCHED_LOCAL = 9;
+ ... (25 more added lines; see GitHub link above)
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5871-L5872` → after: `L4260-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4260-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4260-L4267) · [Before (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5871-L5872)

```diff
-       var OB;
-       return !!(null === (OB = BB.conditions) || void 0 === OB || null === (OB = OB.events) || void 0 === OB || null === (OB = OB.values) || void 0 === OB ? void 0 : OB.length)
+       switch (WW) {
+         case wW.e.TEXTURETYPE_HALF_FLOAT:
+           return 65504;
+         case wW.e.TEXTURETYPE_FLOAT:
+           return 3e38;
+         default:
+           return 1
+       }
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5874-L5886` → after: `L4269-L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4269-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4269-L4304) · [Before (L5874-L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5874-L5886)

```diff
-     const OP = (BB, OB) => {
-         if (!(BB => {
-             try {
-               new RegExp(BB)
-             } catch (BB) {
-               return !1
-             }
-             return !0
-           })(OB)) return !1;
-         try {
-           return new RegExp(OB).test(BB)
-         } catch (BB) {
-           return !1
+     let sW = (() => {
+       var WW;
+       let iW, LW, wW, xW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW, uW = cW.e,
+         oW = [],
+         dW = [],
+         eW = [],
+         vW = [],
+         gW = [],
+         DW = [],
+         VW = [],
+         pW = [],
+         fW = [],
+         CW = [],
+         XW = [],
+         BW = [],
+         qW = [],
+ ... (20 more added lines; see GitHub link above)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5888-L5964` → after: `L4306-L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4306-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4306-L4307) · [Before (L5888-L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5888-L5964)

```diff
-       },
-       GP = BB => BB.toLowerCase(),
-       YP = {
-         exact: (BB, OB) => OB.some((OB => BB.some((BB => OB === BB)))),
-         is_not: (BB, OB) => OB.every((OB => BB.every((BB => OB !== BB)))),
-         regex: (BB, OB) => OB.some((OB => BB.some((BB => OP(OB, BB))))),
-         not_regex: (BB, OB) => OB.every((OB => BB.every((BB => !OP(OB, BB))))),
-         icontains: (BB, OB) => OB.map(GP).some((OB => BB.map(GP).some((BB => OB.includes(BB))))),
-         not_icontains: (BB, OB) => OB.map(GP).every((OB => BB.map(GP).every((BB => !OB.includes(BB))))),
-         gt: (BB, OB) => OB.some((OB => {
-           const GB = parseFloat(OB);
-           return !isNaN(GB) && BB.some((BB => GB > parseFloat(BB)))
-         })),
-         lt: (BB, OB) => OB.some((OB => {
-           const GB = parseFloat(OB);
-           return !isNaN(GB) && BB.some((BB => GB < parseFloat(BB)))
- ... (61 more removed lines; see GitHub link above)
+         needAlphaBlending() {
+           return this.alpha < 1
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5966-L5976` → after: `L4309-L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4309-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4309-L4310) · [Before (L5966-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5966-L5976)

```diff
-         if (DB && "api" === BB && JP.some((BB => 0 === OB.indexOf(BB)))) {
-           const BB = this._urlKey(YB);
-           if (BB) {
-             const OB = this.apiHost;
-             let GB = this._ingestionEndpoints;
-             (null == GB ? void 0 : GB.apiHost) === OB && GB.rewriteRequestPath === DB || (GB = {
-               apiHost: OB,
-               rewriteRequestPath: DB,
-               urls: new Set
-             }, this._ingestionEndpoints = GB), GB.urls.add(BB)
-           }
+         needAlphaTesting() {
+           return !1
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5978-L5991` → after: `L4312-L4313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4312-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4312-L4313) · [Before (L5978-L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5978-L5991)

```diff
-         return YB
-       }
-       isIngestionEndpoint(BB) {
-         const OB = this._ingestionEndpoints,
-           GB = this._urlKey(BB);
-         return (null == OB ? void 0 : OB.apiHost) === this.apiHost && OB.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!GB && OB.urls.has(GB)
-       }
-       endpointFor(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
-         if (OB && (OB = "/" === OB[0] ? OB : `/${OB}`), "ui" === BB) return this._prepareEndpoint(BB, OB, this.uiHost + OB);
-         if ("flags" === BB) return this._prepareEndpoint(BB, OB, this.flagsApiHost + OB);
-         if ("assets" === BB) {
-           const GB = this._staticAssetHostOverride(OB);
-           if (GB) return this._prepareEndpoint(BB, OB, `${GB}${OB}`)
+         getAlphaTestTexture() {
+           return null
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L5993-L6365` → after: `L4315-L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4315-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4315-L4349) · [Before (L5993-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L5993-L6365)

```diff
-         if (this.region === oP) return this._prepareEndpoint(BB, OB, this.apiHost + OB);
-         const GB = jP + OB;
-         switch (BB) {
-           case "assets":
-             return this._prepareEndpoint(BB, OB, `https://${this.region}-assets.${GB}`);
-           case "api":
-             return this._prepareEndpoint(BB, OB, `https://${this.region}.${GB}`)
-         }
-       }
-     };
-     const PP = wo("[Surveys]"),
-       zP = BB => {
-         try {
-           const OB = (BB => ((BB, OB) => `seenSurvey_${function(BB){return BB.current_iteration&&BB.current_iteration>0?`${BB.id}_${BB.current_iteration}`:BB.id}(OB)}`)(0, BB))(BB);
-           if (localStorage.getItem(OB)) return;
-           localStorage.setItem(OB, "true")
- ... (357 more removed lines; see GitHub link above)
+         isReadyForSubMesh(iW, OW) {
+           const mW = OW._drawWrapper;
+           if (this.isFrozen && mW.effect && mW._wasPreviouslyReady) return !0;
+           OW.materialDefines || (OW.materialDefines = new UW);
+           const EW = OW.materialDefines,
+             NW = this.bD();
+           if (this._isReadyForSubMesh(OW)) return !0;
+           if ((0, jW.Z)(iW, NW, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, EW, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, jW.M)(iW, EW, !0, !1), EW.IMAGEPROCESSINGPOSTPROCESS !== NW.imageProcessingConfiguration.applyByPostProcess && EW.mark … [truncated]
+             EW.markAsProcessed(), NW.resetCachedMaterial();
+             const iW = new AW.e;
+             EW.FOG && iW.addFallback(1, "FOG"), EW.IMAGEPROCESSINGPOSTPROCESS = NW.imageProcessingConfiguration.applyByPostProcess, EW.DITHER = this.dithering, EW.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
+             const mW = [tW.g.PositionKind];
+             EW.VERTEXCOLOR && mW.push(tW.g.ColorKind);
+             const PW = "sky",
+               LW = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue … [truncated]
+             (0, bW.d)(LW);
+ ... (19 more added lines; see GitHub link above)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6367-L6417` → after: `L4351-L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4351-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4351-L4400) · [Before (L6367-L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6367-L6417)

```diff
-           const OB = this._extensions.indexOf(BB); - 1 !== OB && this._extensions.splice(OB, 1)
-         }
-         _replaceExtension(BB, OB) {
-           var GB;
-           return this._removeExtension(BB), this._extensions.push(OB), null === (GB = OB.initialize) || void 0 === GB || GB.call(OB), OB
-         }
-         _inCookielessMode() {
-           return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
-         }
-         _warnIfVolatileIdentityWithoutStableId() {
-           if (this._hasWarnedAboutVolatileIdentity) return;
-           if (this.config.reuseAnonymousId) return;
-           if (this.config.segment) return;
-           if (this._inCookielessMode()) return;
-           const BB = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
-           if (!BB && !this.config.disable_persistence) return;
- ... (35 more removed lines; see GitHub link above)
+           const NW = OW.effect;
+           if (!NW) return;
+           this._activeEffect = NW, this.bindOnlyWorldMatrix(WW), this._activeEffect.setMatrix("viewProjection", mW.getTransformMatrix()), this._mustRebind(mW, NW, OW) && ((0, bW.g)(NW, this, mW), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._ … [truncated]
+           const LW = mW.activeCamera;
+           if (LW) {
+             const WW = LW.getWorldMatrix();
+             this._cameraPosition.x = WW.m[12], this._cameraPosition.y = WW.m[13], this._cameraPosition.z = WW.m[14], this._activeEffect.setVector3("cameraPosition", PW.TmpVectors.fA[0].HJ(this._cameraPosition).yEW(mW.floatingOriginOffset))
+           }
+           if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbi … [truncated]
+             const WW = mW.VA()._currentRenderTarget;
+             this._activeEffect.setFloat("maxColorValue", kW(WW?.texture?.type))
+           }
+           if (!this.useSunPosition) {
+             const WW = Math.PI * (this.inclination - .5),
+               iW = 2 * Math.PI * (this.azimuth - .5);
+             this.sunPosition.x = this.distance * Math.cos(iW) * Math.cos(WW), this.sunPosition.y = this.distance * Math.sin(-WW), this.sunPosition.z = this.distance * Math.sin(iW) * Math.cos(WW), PW.Quaternion.FromUnitVectorsToRef(PW.fA.UpReadOnly, this.up, this._skyOrientation), … [truncated]
+ ... (34 more added lines; see GitHub link above)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6419-L6432` → after: `L4402-L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4402-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4402-L4413) · [Before (L6419-L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6419-L6432)

```diff
-           }(this, BB), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager … [truncated]
-           const GB = null !== (OB = BB.__defaultExtensionClasses) && void 0 !== OB ? OB : {};
-           this.featureFlags = GB.featureFlags && new GB.featureFlags(this), this.toolbar = GB.toolbar && new GB.toolbar(this), this.surveys = GB.surveys && new GB.surveys(this), this.conversations = GB.conversations && new GB.conversations(this), this.logs = GB.logs && new GB.log … [truncated]
-             set: (BB, OB, GB) => {
-               const YB = UG(BB) ? {
-                 [BB]: OB
-               } : BB;
-               this.setPersonProperties(YB), null == GB || GB({})
-             },
-             set_once: (BB, OB, GB) => {
-               const YB = UG(BB) ? {
-                 [BB]: OB
-               } : BB;
-               this.setPersonProperties(void 0, YB), null == GB || GB({})
+           },
+           metadata: OW
+         }, oW, dW), (0, mW.e)(null, null, LW, {
+           kind: "field",
+           name: "turbidity",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "turbidity" in WW,
+             get: WW => WW.turbidity,
+             set: (WW, iW) => {
+               WW.turbidity = iW
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6434-L6503` → after: `L4415-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4415-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4415-L4426) · [Before (L6434-L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6434-L6503)

```diff
-           }, this.on("eventCaptured", (BB => Xo.info(`send "${null==BB?void 0:BB.event}"`, BB)))
-         }
-         init(OB, GB, YB) {
-           if (YB && YB !== wP) {
-             var DB;
-             const QB = null !== (DB = UP[YB]) && void 0 !== DB ? DB : new BB;
-             return QB._init(OB, GB, YB), UP[YB] = QB, UP[wP][YB] = QB, QB
-           }
-           return this._init(OB, GB, YB)
-         }
-         _init(BB) {
-           let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-             GB = arguments.length > 2 ? arguments[2] : void 0;
-           var YB, DB, oB;
-           const jB = UG(BB) ? BB.trim() : "";
-           if (!jB) return Xo.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
- ... (54 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, eW, vW), (0, mW.e)(null, null, wW, {
+           kind: "field",
+           name: "rayleigh",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "rayleigh" in WW,
+             get: WW => WW.rayleigh,
+             set: (WW, iW) => {
+               WW.rayleigh = iW
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6505-L6546` → after: `L4428-L4439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4428-L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4428-L4439) · [Before (L6505-L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6505-L6546)

```diff
-           }
-           if (ZB) this.register_once({
-             distinct_id: fO,
-             $device_id: null
-           }, "");
-           else if (!this.get_distinct_id()) {
-             const BB = this.config.get_device_id(Dj());
-             this.register_once({
-               distinct_id: BB,
-               $device_id: BB
-             }, ""), this.persistence.set_property(RO, cO)
-           }
-           return vo(vO, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
-             passive: !1
-           }), vo(vO, "pageshow", (() => {
-             var BB;
- ... (26 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, gW, DW), (0, mW.e)(null, null, xW, {
+           kind: "field",
+           name: "mieCoefficient",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "mieCoefficient" in WW,
+             get: WW => WW.mieCoefficient,
+             set: (WW, iW) => {
+               WW.mieCoefficient = iW
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6548-L6601` → after: `L4441-L4452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4441-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4441-L4452) · [Before (L6548-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6548-L6601)

```diff
-           }))) : this._extensions.push(BB)
-         }
-         _enrollFeatureFlags() {
-           var OB, GB, YB, DB = this;
-           const QB = null !== (OB = null === (GB = this.config.__extensionClasses) || void 0 === GB ? void 0 : GB.featureFlags) && void 0 !== OB ? OB : null === (YB = BB.__defaultExtensionClasses) || void 0 === YB ? void 0 : YB.featureFlags;
-           var oB, jB, yB;
-           if (QB)
-             if (this.featureFlags && this.featureFlags instanceof QB || (null === (oB = this._featureFlagsReloadingUnsubscribe) || void 0 === oB || oB.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new QB(this)), AG(this.featureFlags.onReloading) … [truncated]
-               if (!this._featureFlagsReloadingUnsubscribe) {
-                 this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
-                   this._internalEventEmitter.emit("featureFlagsReloading", !0)
-                 }));
-                 const BB = this.featureFlags;
-                 aG((function*() {
-                   try {
-                     yield BB.setup(DB._getBrowserClientAdapter())
- ... (38 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, VW, pW), (0, mW.e)(null, null, sW, {
+           kind: "field",
+           name: "mieDirectionalG",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "mieDirectionalG" in WW,
+             get: WW => WW.mieDirectionalG,
+             set: (WW, iW) => {
+               WW.mieDirectionalG = iW
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6603-L6614` → after: `L4454-L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4454-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4454-L4465) · [Before (L6603-L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6603-L6614)

```diff
-           })), this._processInitTaskQueue(DB, GB)
-         }
-         _processInitTaskQueue(BB, OB) {
-           for (; BB.length > 0;) {
-             if (this.config.__preview_deferred_init_extensions && performance.now() - OB >= 30 && BB.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
-               this._extensionInitTimeout = void 0, this._processInitTaskQueue(BB, OB)
-             }), 0));
-             const GB = BB.shift();
-             if (GB) try {
-               GB()
-             } catch (BB) {
-               Xo.error("Error initializing extension:", BB)
+           },
+           metadata: OW
+         }, fW, CW), (0, mW.e)(null, null, MW, {
+           kind: "field",
+           name: "distance",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "distance" in WW,
+             get: WW => WW.distance,
+             set: (WW, iW) => {
+               WW.distance = iW
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6616-L6733` → after: `L4467-L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4467-L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4467-L4478) · [Before (L6616-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6616-L6733)

```diff
-           }
-           const GB = Math.round(performance.now() - OB);
-           this.register_for_session({
-             [dO]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
-             [KO]: GB
-           }), this.config.__preview_deferred_init_extensions && Xo.info(`PostHog extensions initialized (${GB}ms)`)
-         }
-         _onRemoteConfig(BB) {
-           if (!tO || !tO.body) return Xo.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
-             this._onRemoteConfig(BB)
-           }), 500);
-           if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = BB), this._lastRemoteConfig = BB, this.compression = void 0, BB.ok) {
-             var OB;
-             const GB = BB.config;
-             GB.supportedCompression && !this.config.disable_compression && (this.compression = zG(GB.supportedCompression, NJ.GZipJS) ? NJ.GZipJS : zG(GB.supportedCompression, NJ.Base64) ? NJ.Base64 : void 0), (null === (OB = GB.analytics) || void 0 === OB ? void 0 : OB.endpoint) … [truncated]
-           }
- ... (102 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, XW, BW), (0, mW.e)(null, null, KW, {
+           kind: "field",
+           name: "inclination",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "inclination" in WW,
+             get: WW => WW.inclination,
+             set: (WW, iW) => {
+               WW.inclination = iW
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6735-L6754` → after: `L4480-L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4480-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4480-L4491) · [Before (L6735-L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6735-L6754)

```diff
-           }
-         }
-         get _facebookBrowserIdChannel() {
-           return {
-             property: mB,
-             persistenceKey: IB,
-             cookieName: "_fbp",
-             pattern: rP,
-             register: (BB, OB) => {
-               var GB;
-               return null === (GB = this.persistence) || void 0 === GB ? void 0 : GB.register({
-                 [IB]: {
-                   value: BB,
-                   delivered: OB
-                 }
-               })
- ... (4 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, qW, RW), (0, mW.e)(null, null, SW, {
+           kind: "field",
+           name: "azimuth",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "azimuth" in WW,
+             get: WW => WW.azimuth,
+             set: (WW, iW) => {
+               WW.azimuth = iW
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6756-L6874` → after: `L4493-L4504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4493-L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4493-L4504) · [Before (L6756-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6756-L6874)

```diff
-           }
-         }
-         _getPersistedMetaIdentifier(BB) {
-           var OB;
-           const GB = null === (OB = this.persistence) || void 0 === OB ? void 0 : OB.get_property(BB.persistenceKey);
-           return UG(GB) && BB.pattern.test(GB) ? {
-             value: GB,
-             delivered: !1
-           } : VG(GB) && UG(GB.value) && BB.pattern.test(GB.value) ? {
-             value: GB.value,
-             delivered: !0 === GB.delivered
-           } : void 0
-         }
-         _storeMetaIdentifier(BB, OB, GB) {
-           return OB === (null == GB ? void 0 : GB.value) ? {
-             value: OB,
- ... (103 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, GW, IW), (0, mW.e)(null, null, YW, {
+           kind: "field",
+           name: "sunPosition",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "sunPosition" in WW,
+             get: WW => WW.sunPosition,
+             set: (WW, iW) => {
+               WW.sunPosition = iW
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6876-L7084` → after: `L4506-L4517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4506-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4506-L4517) · [Before (L6876-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L6876-L7084)

```diff
-             of WB) IB && !0 === PB.properties.$process_person_profile && IB.pending && !mB && !zB && (PB.$set = RD({
-             [KB.property]: IB.value
-           }, PB.$set));
-           const AB = null == GB ? void 0 : GB.$unset;
-           AB && (PB.$unset = AB);
-           const VB = zB ? void 0 : this._calculate_set_once_properties(null == GB ? void 0 : GB.$set_once, BB !== HO, BB === CO);
-           if (VB && (PB.$set_once = VB), (null == GB ? void 0 : GB._noTruncate) || (SB = this.config.properties_string_max_length, PB = function(BB, OB) {
-               const GB = new Set;
-               return function BB(YB, DB) {
-                 if (YB !== Object(YB)) return OB ? OB(YB) : YB;
-                 if (GB.has(YB)) return;
-                 let QB;
-                 if (GB.add(YB), WG(YB)) QB = [], Eo(YB, (OB => {
-                   QB.push(BB(OB))
-                 }));
-                 else {
- ... (193 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, aW, rW), (0, mW.e)(null, null, yW, {
+           kind: "field",
+           name: "useSunPosition",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "useSunPosition" in WW,
+             get: WW => WW.useSunPosition,
+             set: (WW, iW) => {
+               WW.useSunPosition = iW
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L7086-L7108` → after: `L4519-L4530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4519-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4519-L4530) · [Before (L7086-L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L7086-L7108)

```diff
-             jB.$sdk_debug_retry_queue_size = null === (JB = this._retryQueue) || void 0 === JB ? void 0 : JB.length
-           } catch (BB) {
-             jB.$sdk_debug_error_capturing_properties = String(BB)
-           }
-           let MB;
-           if (this.requestRouter.region === oP && (jB.$lib_custom_api_host = this.config.api_host), MB = "$pageview" !== BB || QB ? "$pageleave" !== BB || QB ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(GB) : this.pageViewManager.doPageView(GB, YB), jB = ho … [truncated]
-             const BB = GB.getTime() - oB;
-             jB.$duration = parseFloat((BB / 1e3).toFixed(3))
-           }
-           QG && this.config.opt_out_useragent_filter && (jB.$browser_type = this._is_bot() ? "bot" : "browser");
-           const PB = this.persistence.properties(),
-             zB = this.sessionPersistence.properties(),
-             lB = jB.$groups,
-             pB = PB.$groups;
-           VG(lB) && !SG(lB) && (jB.$groups = RD(RD({}, VG(pB) ? pB : {}), lB)), co(["$referrer", "$referring_domain"], (BB => {
-             BB in PB && delete zB[BB]
- ... (7 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, zW, FW), (0, mW.e)(null, null, TW, {
+           kind: "field",
+           name: "cameraOffset",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "cameraOffset" in WW,
+             get: WW => WW.cameraOffset,
+             set: (WW, iW) => {
+               WW.cameraOffset = iW
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L7110-L7431` → after: `L4532-L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4532-L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4532-L4543) · [Before (L7110-L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L7110-L7431)

```diff
-           jB = ho({}, yB, PB, zB, RD(RD({}, qB), jB)), jB.$is_identified = this._isIdentified(), WG(this.config.property_denylist) ? co(this.config.property_denylist, (function(BB) {
-             delete jB[BB]
-           })) : Xo.error(mP + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
-           const ZB = this.config.sanitize_properties;
-           ZB && (Xo.error(uP), jB = ZB(jB, BB));
-           const NB = this._hasPersonProcessing();
-           return jB.$process_person_profile = NB, NB && !QB && this._requirePersonProcessing("_calculate_event_properties"), jB
-         }
-         _calculate_set_once_properties(BB) {
-           let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-             GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-           var YB;
-           if (!this.persistence || !this._hasPersonProcessing()) return BB;
-           if (this._personProcessingSetOncePropertiesSent && !GB) return BB;
-           const DB = this.persistence.get_initial_props(),
-             QB = null === (YB = this.sessionPropsManager) || void 0 === YB ? void 0 : YB.getSetOnceProps();
- ... (306 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, QW, Wi), (0, mW.e)(null, null, JW, {
+           kind: "field",
+           name: "up",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "up" in WW,
+             get: WW => WW.up,
+             set: (WW, iW) => {
+               WW.up = iW
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L7433-L7439` → after: `L4545-L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4545-L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4545-L4556) · [Before (L7433-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L7433-L7439)

```diff
-             if (this.register({
-                 $last_posthog_reset: (new Date).toISOString()
-               }, 1), GB && (GB.distinctID && !this._inCookielessMode() && (null === (IB = this.persistence) || void 0 === IB || IB.set_property("$user_state", GB.isIdentifiedID ? "identified" : "anonymous"), this.register({
-                 distinct_id: GB.distinctID
-               })), null === (uB = this.featureFlags) || void 0 === uB || uB.initialize(), !dG(JB) && !(null === (mB = this.sessionManager) || void 0 === mB ? void 0 : mB.setBootstrapSessionId(JB, !0)))) {
-               const BB = RD({}, GB);
-               delete BB.sessionID, this.config.bootstrap = BB
+           },
+           metadata: OW
+         }, ii, Oi), (0, mW.e)(null, null, hW, {
+           kind: "field",
+           name: "dithering",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "dithering" in WW,
+             get: WW => WW.dithering,
+             set: (WW, iW) => {
+               WW.dithering = iW
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L7441-L7497` → after: `L4558-L4569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4558-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4558-L4569) · [Before (L7441-L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L7441-L7497)

```diff
-             delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, ZB = !0
-           } finally {
-             var FB, iB;
-             this._isConsentTransition = qB, pB && (null === (FB = this.persistence) || void 0 === FB || null === (iB = FB._endCookieSyncSuppression) || void 0 === iB || iB.call(FB, ZB))
-           }
-           this.reloadFeatureFlags()
-         }
-         shutdown(BB) {
-           var OB = this;
-           return aG((function*() {
-             if (!OB.__loaded) return void Xo.uninitializedWarning("posthog.shutdown");
-             OB._isShutdown = !0, clearTimeout(OB._extensionInitTimeout), OB._extensionInitTimeout = void 0;
-             const BB = OB._featureFlagsReloadingUnsubscribe;
-             OB._featureFlagsReloadingUnsubscribe = void 0;
-             for (const GB of [() => {
-                 var BB;
- ... (41 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, mi, Ei), (0, mW.e)(null, null, HW, {
+           kind: "field",
+           name: "rawHdrOutput",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "rawHdrOutput" in WW,
+             get: WW => WW.rawHdrOutput,
+             set: (WW, iW) => {
+               WW.rawHdrOutput = iW
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L7499-L7560` → after: `L4571-L4582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4571-L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4571-L4582) · [Before (L7499-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L7499-L7560)

```diff
-           }))()
-         }
-         setIdentity(BB, OB) {
-           var GB;
-           delete this.config.identity_claims, this.config.identity_distinct_id = BB, this.config.identity_hash = OB, this.alias(BB), null === (GB = this.conversations) || void 0 === GB || GB._onIdentityChanged()
-         }
-         clearIdentity() {
-           var BB;
-           delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (BB = this.conversations) || void 0 === BB || BB._onIdentityCleared()
-         }
-         get_distinct_id() {
-           return this.get_property("distinct_id")
-         }
-         getGroups() {
-           return this.get_property("$groups") || {}
-         }
- ... (46 more removed lines; see GitHub link above)
+           },
+           metadata: OW
+         }, Ni, Pi), (0, mW.e)(null, null, nW, {
+           kind: "field",
+           name: "cloudiness",
+           static: !1,
+           private: !1,
+           access: {
+             has: WW => "cloudiness" in WW,
+             get: WW => WW.cloudiness,
+             set: (WW, iW) => {
+               WW.cloudiness = iW
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L8293-L8432` → after: `L4585-L4590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4585-L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4585-L4590) · [Before (L8293-L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L8293-L8432)

```diff
-           __posthog_layer__: {
-             enumerable: !1,
-             value: YB
-           }
-         })), BB[OB] = DB, () => {
-           if (BB[OB] === DB) return void(BB[OB] = YB.next);
-           let GB = BB[OB],
-             QB = Gz(GB);
-           for (; QB;) {
-             if (QB.next === DB) return void(QB.next = YB.next);
-             GB = QB.next, QB = Gz(GB)
-           }
-         }
-       } catch (BB) {
-         return Oz
-       }
- ... (124 more removed lines; see GitHub link above)
+           metadata: OW
+         }, Li, ci), OW && Object.defineProperty(WW, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: OW
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L8434-L12783` → after: `L4592-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4592-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/277.js#L4592-L4594) · [Before (L8434-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/277.js#L8434-L12783)

```diff
-       }
-       onSurveysLoaded(BB) {
-         return this._surveyCallbacks.push(BB), this._surveyManager && this._notifySurveyCallbacks({
-           isLoaded: !0
-         }), () => {
-           this._surveyCallbacks = this._surveyCallbacks.filter((OB => OB !== BB))
-         }
-       }
-       getSurveys(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         var GB;
-         const YB = null !== (GB = this._client) && void 0 !== GB ? GB : this._initialClientState;
-         if (!YB || this._disposed) return;
-         if (this._config.disableSurveys) return PP.info(nz), BB([]);
-         const DB = YB.kv.get(oO);
-         if (DB && !OB) return BB(DB, {
- ... (4334 more removed lines; see GitHub link above)
+       })(), WW._ShaderLoader = new lW.d((() => [OW.e(648).then((() => OW(64447))), OW.e(641).then((() => OW(64455)))]), (() => [OW.e(665).then((() => OW(64460))), OW.e(659).then((() => OW(64467)))])), WW
+     })();
+     (0, xW.h)("BABYLON.SkyMaterial", sW)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/278.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/278.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L6)

```diff
-   40812: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       playDocsSound: () => yB
+   42573: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW,
+       g: () => tW,
+       h: () => wW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L8-L74` → after: `L10-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L10-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/278.js#L10-L408) · [Before (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/278.js#L8-L74)

```diff
-     var YB = GB(5353),
-       DB = GB(37436),
-       QB = GB(1186),
-       oB = GB(37443);
-     const jB = new Map;
- 
-     function yB(BB, OB, GB, yB, JB) {
-       let MB, PB = 0;
-       if (OB) MB = new YB.Howl({
-         src: [`${QB.clientSideServerUrls.staticUrl}/sounds/music/${BB}.mp3`],
-         html5: !0,
-         volume: GB
-       });
-       else {
-         const OB = (0, DB.t)(BB);
-         PB = OB.ms / 1e3, MB = jB.get(BB), MB || (MB = new YB.Howl({
- ... (51 more removed lines; see GitHub link above)
+     var mW, EW = OW(38285),
+       NW = OW(38241);
+     ! function(WW) {
+       WW[WW.CW = 0] = "CW", WW[WW.CCW = 1] = "CCW"
+     }(mW || (mW = {}));
+     class PW {
+       static Interpolate(WW, iW, OW, mW, EW) {
+         if (0 === WW) return 0;
+         const NW = 1 - 3 * mW + 3 * iW,
+           PW = 3 * mW - 6 * iW,
+           LW = 3 * iW;
+         let cW = WW;
+         for (let wW = 0; wW < 5; wW++) {
+           const iW = cW * cW;
+           cW -= (NW * (iW * cW) + PW * iW + LW * cW - WW) * (1 / (3 * NW * iW + 2 * PW * cW + LW)), cW = Math.min(1, Math.max(0, cW))
+         }
+ ... (383 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/279.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/279.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L6` → after: `L4-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L4-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L71) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L6)

```diff
-   40821: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       default: () => CB
+   40014: (WW, iW, OW) => {
+     var mW = {
+       "./cape_cow_cream.png": 29007,
+       "./cape_cow_normal.png": 29012,
+       "./cape_creator_level1.png": 29015,
+       "./cape_creator_level2.png": 29018,
+       "./cape_creator_level3.png": 29022,
+       "./cape_none.png": 29027,
+       "./cape_pig.png": 29034,
+       "./cape_sheep.png": 29041,
+       "./cape_super.png": 29044,
+       "./cape_super_inverted.png": 29053,
+       "./cape_youtuber.png": 29057
+     };
+ 
+     function EW(WW) {
+ ... (52 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L8-L66` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L73-L78) · [Before (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L8-L66)

```diff
-     GB(6976);
-     var YB = GB(56),
-       DB = GB(40825),
-       QB = GB(41089),
-       oB = GB(41213),
-       jB = GB(41246),
-       yB = GB(41258),
-       JB = GB(37885),
-       MB = GB(37771),
-       PB = GB(41406),
-       zB = GB(41452),
-       lB = (GB(41472), GB(1217)),
-       pB = GB(192),
-       qB = GB(1175),
-       ZB = GB(16),
-       NB = GB(3072),
- ... (43 more removed lines; see GitHub link above)
+     var mW = OW(192);
+     const EW = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
+       NW = "PetRoot";
+     let PW = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
+       LW = EW;
+     new Map, new Map;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L69-L255` → after: `L81-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L81-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L81-L119) · [Before (L69-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L69-L255)

```diff
-       let {
-         heatmap: OB,
-         scale: GB,
-         fullyOpaqueFrom: FB,
-         bounds: XB,
-         fitBounds: wB,
-         schematic: EB,
-         controls: cB,
-         onStepTime: hB,
-         onShowAllTime: aB,
-         onTogglePlaying: eB,
-         getReadout: bB = null
-       } = BB;
-       const {
-         t: CB
-       } = (0, qB.H)(), {
- ... (171 more removed lines; see GitHub link above)
+       var iW;
+       return null !== (iW = (0, mW.c)(PW, WW)) && void 0 !== iW ? iW : null
+     }
+ 
+     function wW(WW) {
+       var iW;
+       return null !== (iW = (0, mW.c)(LW, WW)) && void 0 !== iW ? iW : null
+     }
+   },
+   40384: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW,
+       f: () => EW,
+       j: () => NW
+     });
+     class mW {
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L257-L280` → after: `L121-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L121-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L121-L133) · [Before (L257-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L257-L280)

```diff
-       }), []), (0, YB.useEffect)((() => {
-         const BB = JO.current;
-         if (!BB) return;
-         const OB = () => {
-             RO.current = !1, qO(document.pointerLockElement === BB)
-           },
-           GB = () => {
-             RO.current && (RO.current = !1, NO(!1))
-           },
-           YB = OB => {
-             const GB = !wO.current.canLock && document.activeElement === BB && 0 !== (1 & OB.buttons);
-             if (document.pointerLockElement !== BB && !GB) return;
-             const YB = wO.current.mouseSensitivity * kB;
-             dO((BB => function(BB, OB, GB) {
-               const YB = 2 * Math.PI;
-               return {
- ... (8 more removed lines; see GitHub link above)
+         this.lastFeet[0] = OW[0], this.lastFeet[1] = OW[1], this.lastFeet[2] = OW[2], this.stillS = this.speed > .3 ? 0 : this.stillS + LW;
+         const ZW = this.stillS >= .6 ? "perched" : "flying";
+         "flying" === ZW && "perched" === cW.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += LW, cW.mode = ZW;
+         const xW = Math.sin(mW),
+           lW = Math.cos(mW);
+         "perched" === ZW ? (NW(tW, OW, PW.perchOffset, xW, lW), tW[1] += WW.headTopY - OW[1]) : (NW(tW, OW, PW.followOffset, xW, lW), tW[1] += EW(PW, WW.timeS));
+         const {
+           pos: AW
+         } = cW, bW = Math.hypot(tW[0] - AW[0], tW[1] - AW[1], tW[2] - AW[2]);
+         if (!this.started || bW > 8 || "perched" === ZW && (this.perchLocked || bW < .05)) this.perchLocked = this.started && "perched" === ZW, AW[0] = tW[0], AW[1] = tW[1], AW[2] = tW[2], wW[0] = wW[1] = wW[2] = 0;
+         else {
+           const WW = PW.followStiffness;
+           for (let iW = 0; iW < 3; iW++) wW[iW] += (WW * WW * (tW[iW] - AW[iW]) - 2 * WW * wW[iW]) * LW, AW[iW] += wW[iW] * LW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L282-L300` → after: `L135-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L135-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L135-L218) · [Before (L282-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L282-L300)

```diff
-       }), []), (0, YB.useEffect)((() => {
-         const BB = MO.current;
-         null !== BB && 0 !== PO.width && 0 !== PO.height && (BB.engine.resize(), BB.needsRender = !0)
-       }), [PO.width, PO.height]), (0, YB.useEffect)((() => {
-         const BB = MO.current;
-         null !== BB && (BB.targetFieldOfView = iO * (SO ? fB : 1))
-       }), [iO, SO]), (0, YB.useEffect)((() => {
-         const BB = MO.current;
-         null !== BB && function(BB, OB, GB, YB) {
-           const DB = [],
-             QB = [],
-             oB = [],
-             jB = [];
-           for (let yB = 0; yB < OB.count; yB++) {
-             const BB = OB.values[yB],
-               JB = (0, AB.y)(BB, GB, YB);
- ... (3 more removed lines; see GitHub link above)
+         const jW = mW + PW.yawOffset;
+         var UW;
+         return this.started ? cW.yaw += ((UW = jW - cW.yaw) - 2 * Math.PI * Math.round(UW / (2 * Math.PI))) * Math.min(8 * LW, 1) : cW.yaw = jW, this.started = !0, cW.seated = "perched" === ZW && this.perchLocked, cW.clip = null === (iW = PW.clips) || void 0 === iW ? void 0 : iW[ … [truncated]
+       }
+       reset() {
+         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
+       }
+       bO(WW) {
+         return "perched" === WW ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
+       }
+     }
+ 
+     function EW(WW, iW) {
+       return WW.bobAmplitude * Math.sin(2 * Math.PI * WW.bobHz * iW)
+     }
+ 
+ ... (68 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L302-L318` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L220-L221) · [Before (L302-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L302-L318)

```diff
-           sB(BB.cells, Float32Array.from(DB), Float32Array.from(QB), QB.length / 4), BB.translucent = {
-             DZ: Float32Array.from(oB),
-             colours: Float32Array.from(jB),
-             count: jB.length / 4
-           }, BB.translucentSortedFrom = null, xB(BB), BB.needsRender = !0
-         }(BB, FO, GB, FB)
-       }), [FO, GB, FB]), (0, YB.useEffect)((() => {
-         const BB = MO.current;
-         null !== BB && function(BB, OB) {
-           BB.chunkGridOrigin = OB, BB.chunkGridCentre = null, vB(BB)
-         }(BB, XB.min)
-       }), [XB]), (0, YB.useEffect)((() => {
-         const BB = MO.current;
-         null !== BB && function(BB, OB, GB) {
-           const YB = [],
-             DB = [];
- ... (1 more removed lines; see GitHub link above)
+           let tW = "load_failed";
+           try {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L320-L443` → after: `L223-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L223-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L223-L235) · [Before (L320-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L320-L443)

```diff
-               positions: BB,
-               colours: QB,
-               count: oB
-             } = OB.surface;
-             for (let OB = 0; OB < oB; OB++) {
-               const oB = [BB[3 * OB], BB[3 * OB + 1], BB[3 * OB + 2]];
-               [0, 1, 2].every((BB => oB[BB] >= GB.min[BB] - IB && oB[BB] <= GB.max[BB] + IB)) && (YB.push(oB[0] - GB.min[0] + .5, oB[1] - GB.min[1] + .5, oB[2] - GB.min[2] + .5), DB.push(QB[3 * OB] / 255, QB[3 * OB + 1] / 255, QB[3 * OB + 2] / 255, 1))
-             }
-           }
-           sB(BB.schematicBlocks, Float32Array.from(YB), Float32Array.from(DB), DB.length / 4), BB.needsRender = !0
-         }(BB, EB, XB)
-       }), [EB, XB]), (0, YB.useEffect)((() => {
-         const BB = MO.current;
-         null !== BB && null !== BB.chunkGrid && (BB.chunkGrid.isVisible = UO, BB.needsRender = !0)
-       }), [UO, XB]), (0, YB.useEffect)((() => {
-         const BB = MO.current;
- ... (108 more removed lines; see GitHub link above)
+               create: OW
+             } = await (0, NW.v)(PW).load();
+             tW = "start_failed";
+             const mW = wW.d.antiAliasingOnWebGpuAdapter((0, lW.f)()),
+               EW = (0, cW.i)(WW),
+               LW = (0, cW.e)(EW, {
+                 size: WW => (0, ZW.m)(EW, WW)
+               });
+             return await OW(WW, {
+               ROW: mW,
+               sceneDepth: iW.sceneDepth,
+               sunShadow: iW.sunShadow,
+               bufferSize: LW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L445-L447` → after: `L237-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L237-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L237-L269) · [Before (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L445-L447)

```diff
-           })]
-         })]
-       })
+           } catch (jW) {
+             const WW = (0, EW.d)(jW);
+             (0, xW.setWebGpuFallbackReason)(WW ? kW[WW] : tW);
+             const iW = null === jW || void 0 === jW ? void 0 : jW.fallbackReason;
+             return "string" === typeof iW ? (console.warn(`Lite could not start, falling back to WebGL: ${String(jW)}`), iW) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", jW), "it failed to start (see the console)")
+           }
+         }(WW, iW, "setting" === OW.source, OW.choice);
+         if ("lite" === OW.choice && AW.i.setItem(UW.p, "string" === typeof LW), "string" !== typeof LW) return wW.d.followGameGpu((0, lW.f)()), (0, xW.setWebGpuFallbackReason)("none"), (0, PW.o)(OW), (0, NW.E)(LW), {
+           lite: LW
+         };
+         tW = (0, PW.b)(OW.choice, [LW]), WW.replaceWith(WW.cloneNode(!1))
+       } else "lite" === OW.requested ? (0, xW.setWebGpuFallbackReason)("load_failed") : "default" === OW.source && iW.webGpuDefaultOffReason ? (0, xW.setWebGpuFallbackReason)(iW.webGpuDefaultOffReason) : (0, xW.setWebGpuFallbackReason)("not_requested");
+       return (0, PW.o)({
+         ...OW,
+         choice: "webgl2",
+         fallbackReason: tW
+ ... (17 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L451-L556` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L273) · [Before (L451-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L451-L556)

```diff
-       let {
-         heading: OB,
-         pitch: GB,
-         onViewFrom: DB,
-         onTurn: QB,
-         onFlip: oB
-       } = BB;
-       const {
-         t: jB
-       } = (0, qB.H)(), yB = (0, YB.useRef)(null), JB = BO({
-         heading: OB,
-         pitch: GB
-       }), MB = OO(OB), PB = JO(JB, MB), zB = hB + aB + 2, lB = cB.flatMap((BB => [1, -1].map((OB => {
-         const GB = jO(BB.direction, OB);
-         return {
-           ...BB,
- ... (90 more removed lines; see GitHub link above)
+       return "lite" === (0, PW.k)((0, PW.j)(WW, !1)).choice && (0, xW.getWebGpuSupported)() && !AW.i.getItem(UW.p)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L560-L582` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L277-L279) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L560-L582)

```diff
-       var OB, GB, YB;
-       const {
-         chunkGridOrigin: DB,
-         camera: QB
-       } = BB;
-       if (null === DB) return;
-       const oB = [QB.position.x, QB.position.y, QB.position.z],
-         jB = [0, 2].map((BB => Math.floor((oB[BB] + DB[BB]) / pB.f.pP))),
-         yB = BB.chunkGridCentre;
-       if (null !== yB && yB.every(((BB, OB) => BB === jB[OB]))) return;
-       const PB = null === (OB = null === (GB = BB.chunkGrid) || void 0 === GB ? void 0 : GB.isVisible) || void 0 === OB || OB;
-       null === (YB = BB.chunkGrid) || void 0 === YB || YB.dispose();
-       const [lB, qB] = [0, 2].map(((BB, OB) => {
-         const GB = [];
-         for (let YB = jB[OB] - iB; YB <= jB[OB] + iB + 1; YB++) GB.push(YB * pB.f.pP - DB[BB]);
-         return GB
- ... (7 more removed lines; see GitHub link above)
+       yW(WW) || YW().catch((WW => {
+         console.warn("Failed to prefetch noa's Babylon backend.", WW)
+       }))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L585-L593` → after: `L282-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L282-L287) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L585-L593)

```diff
-     function sB(BB, OB, GB, YB) {
-       BB.DOB("matrix", function(BB, OB) {
-         const GB = new Float32Array(16 * OB);
-         for (let YB = 0; YB < OB; YB++) {
-           const OB = 16 * YB;
-           GB[OB] = 1, GB[OB + 5] = 1, GB[OB + 10] = 1, GB[OB + 12] = BB[3 * YB], GB[OB + 13] = BB[3 * YB + 1], GB[OB + 14] = BB[3 * YB + 2], GB[OB + 15] = 1
-         }
-         return GB
-       }(OB, YB), 16, !0), BB.DOB("color", GB, 4, !0), BB.isVisible = YB > 0
+     function JW(WW) {
+       (0, jW.e)((() => {
+         yW(WW) ? (0, NW.s)().load().catch((WW => {
+           console.warn("Failed to prefetch the Lite renderer.", WW)
+         })) : TW(WW)
+       }))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L597-L616` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L300-L301) · [Before (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L597-L616)

```diff
-       const {
-         camera: OB,
-         translucent: GB
-       } = BB, YB = [OB.position.x, OB.position.y, OB.position.z], DB = BB.translucentSortedFrom;
-       if (null !== DB && Math.hypot(YB[0] - DB[0], YB[1] - DB[1], YB[2] - DB[2]) < FB) return;
-       BB.translucentSortedFrom = YB;
-       const QB = new Float64Array(GB.count),
-         oB = new Uint32Array(GB.count);
-       for (let JB = 0; JB < GB.count; JB++) {
-         const BB = GB.DZ[3 * JB] - YB[0],
-           OB = GB.DZ[3 * JB + 1] - YB[1],
-           DB = GB.DZ[3 * JB + 2] - YB[2];
-         QB[JB] = BB * BB + OB * OB + DB * DB, oB[JB] = JB
-       }
-       oB.sort(((BB, OB) => QB[OB] - QB[BB]));
-       const jB = new Float32Array(3 * GB.count),
- ... (4 more removed lines; see GitHub link above)
+       var iW;
+       return null !== (iW = WW.parentElement) && void 0 !== iW ? iW : WW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L620-L624` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L305-L308) · [Before (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L620-L624)

```diff
-       const GB = (GB, YB, DB) => new MB.Xp(0 === GB ? BB[0] : OB[0], 0 === YB ? BB[1] : OB[1], 0 === DB ? BB[2] : OB[2]),
-         YB = [];
-       for (const DB of [0, 1])
-         for (const BB of [0, 1]) YB.push([GB(0, DB, BB), GB(1, DB, BB)], [GB(DB, 0, BB), GB(DB, 1, BB)], [GB(DB, BB, 0), GB(DB, BB, 1)]);
-       return YB
+       if (WW.clientWidth <= 0 || WW.clientHeight <= 0 || EW.c.isHeld()) return null;
+       const OW = (0, NW.p)(),
+         [PW, LW] = iW.size(OW);
+       return (0, NW.v)(PW, LW, OW, mW.d.get("clientEscMenuOptions").pixelScale)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L628` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L319-L320) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L628)

```diff
-       return [Math.sin(BB.heading) * Math.cos(BB.pitch), -Math.sin(BB.pitch), Math.cos(BB.heading) * Math.cos(BB.pitch)]
+       let iW = 0;
+       return WW > 5 && (iW = .12 * Math.min(WW - 5, 15), WW > 20 && (iW += .01 * (WW - 20))), 1.4 + iW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L632` → after: `L341-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L341-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L341-L345) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L632)

```diff
-       return [Math.cos(BB), 0, -Math.sin(BB)]
+       return !1 !== WW && (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
+     }
+ 
+     function wW(WW, iW) {
+       return null !== WW && void 0 !== WW ? WW : iW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L636-L652` → after: `L349-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L349-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L349-L382) · [Before (L636-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L636-L652)

```diff
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: XB,
-         pitch: wB
-       };
-       const DB = [BB.max[0] - BB.min[0], BB.max[1] - BB.min[1], BB.max[2] - BB.min[2]],
-         QB = BO(YB),
-         oB = OO(YB.heading),
-         jB = JO(QB, oB),
-         yB = Math.tan(GB / 2),
-         JB = yB * OB;
-       let MB = 1;
-       for (const PB of [-DB[0] / 2, DB[0] / 2])
-         for (const BB of [-DB[1] / 2, DB[1] / 2])
-           for (const OB of [-DB[2] / 2, DB[2] / 2]) {
-             const GB = [PB, BB, OB],
-               YB = yO(GB, QB);
- ... (1 more removed lines; see GitHub link above)
+       return iW && !OW ? Math.max(1, WW / LW) : 1
+     }
+     const ZW = new WeakMap;
+ 
+     function xW(WW, iW, OW, EW) {
+       const NW = WW.EY.XiW(OW),
+         PW = NW.offset;
+       PW[0] = PW[1] = PW[2] = 0;
+       const LW = WW.EY.XiW(iW);
+       if (EW || !LW || !NW.mesh.isEnabled() || !NW.mesh.isVisible) return 1;
+       const cW = WW.EY.YG(OW).Yz,
+         wW = WW.camera.mF(),
+         tW = WW.camera.XF(),
+         xW = wW[0] - cW[0],
+         lW = wW[1] - cW[1],
+         AW = wW[2] - cW[2];
+ ... (18 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L654-L658` → after: `L384-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L384-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L384-L425) · [Before (L654-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L654-L658)

```diff
-       return {
-         position: oO([BB.min[0] + DB[0] / 2, BB.min[1] + DB[1] / 2, BB.min[2] + DB[2] / 2], jO(QB, -MB * EB)),
-         heading: YB.heading,
-         pitch: YB.pitch
-       }
+         } if (!jW.valid) return 1;
+       const UW = function(WW, iW, OW, mW, EW) {
+         const NW = iW[0] - WW[0],
+           PW = iW[1] - WW[1],
+           LW = iW[2] - WW[2],
+           cW = Math.hypot(NW, PW, LW),
+           wW = -(EW[0] * NW + EW[1] * PW + EW[2] * LW);
+         if (cW < .1 || wW <= 0) return 0;
+         const tW = (Math.abs(EW[0]) * (mW.x - OW.x) + Math.abs(EW[1]) * (mW.y - OW.y) + Math.abs(EW[2]) * (mW.z - OW.z)) / 2,
+           ZW = -(EW[0] * ((OW.x + mW.x) / 2 - WW[0]) + EW[1] * ((OW.y + mW.y) / 2 - WW[1]) + EW[2] * ((OW.z + mW.z) / 2 - WW[2]));
+         return Math.max(0, Math.min((ZW + tW + .01) / wW, 2 * tW / wW, 1 - .1 / wW))
+       }(cW, wW, jW.minimum, jW.maximum, WW.camera.XF());
+       for (let mW = 0; mW < 3; mW++) PW[mW] = (wW[mW] - cW[mW]) * UW;
+       return 1 - UW
+     }
+ 
+ ... (26 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L662-L665` → after: `L429-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L429-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L429-L569) · [Before (L662-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L662-L665)

```diff
-       const YB = QO(BB),
-         DB = QO(GB),
-         QB = oO(BB.position, jO(OB, -1)),
-         oB = [0, 1, 2].reduce(((BB, OB) => oO(BB, jO(DB[OB], yO(QB, YB[OB])))), [0, 0, 0]);
+       if (!(0, mW.f)(WW)) return void WW.material.forceCompilation(WW, iW);
+       const PW = () => {
+         if (WW.Ay()) return void NW.delete(WW);
+         const mW = (0, EW.bb)(WW.material);
+         if (![null === mW || void 0 === mW ? void 0 : mW.diffuseTexture, null === mW || void 0 === mW ? void 0 : mW.opacityTexture, null === mW || void 0 === mW ? void 0 : mW.emissiveTexture, null === mW || void 0 === mW ? void 0 : mW.reflectionTexture].every((WW => !WW || OW.pre … [truncated]
+         NW.delete(WW), iW()
+       };
+       PW()
+     }
+   },
+   40070: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => fW,
+       c: () => DW,
+       d: () => zW,
+       e: () => XW,
+ ... (125 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L667-L669` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L571-L572) · [Before (L667-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L667-L669)

```diff
-         position: oO(OB, oB),
-         heading: GB.heading,
-         pitch: GB.pitch
+         width: DW.EFFECT_ICON_SIZE * iW,
+         height: iW > 0 ? DW.EFFECT_ICON_SIZE : 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L674` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L577) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L674)

```diff
-       return jO(oO(BB.min, BB.max), .5)
+       return WW && void 0 !== WW.str
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L678-L680` → after: `L581-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L581-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L581-L642) · [Before (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L678-L680)

```diff
-       const OB = BO(BB),
-         GB = OO(BB.heading);
-       return [OB, GB, JO(OB, GB)]
+       return WW && "object" === typeof WW && "icon" in WW && !("mainRGB" in WW)
+     }
+ 
+     function RW(WW) {
+       return WW && "object" === typeof WW && "mainRGB" in WW
+     }
+ 
+     function GW(WW) {
+       var iW, OW;
+       const mW = null !== (iW = BW(WW) ? null === (OW = WW.style) || void 0 === OW ? void 0 : OW.fontSize : void 0) && void 0 !== iW ? iW : `${DW.DEFAULT_FONT_SIZE}px`;
+       return VW.text(Number(mW.replace("px", "")))
+     }
+ 
+     function IW(WW) {
+       var iW;
+       const OW = null !== (iW = Object.hasOwn(eW.e, WW) ? eW.e[WW] : null) && void 0 !== iW ? iW : (0, PW.e)(WW, (0, PW.m)(WW));
+ ... (46 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L684` → after: `L646-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L646-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L646-L660) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L684)

```diff
-       return [BB[0] + OB[0], BB[1] + OB[1], BB[2] + OB[2]]
+       if (qW(WW)) return wi(WW);
+       if (RW(WW)) return function(WW) {
+         const iW = IW(WW);
+         if (!iW) return pW;
+         const [OW, mW] = iW.icon;
+         return pW * (OW / mW)
+       }(WW.icon) + DW.HORIZONTAL_PADDING;
+       const OW = GW(WW);
+       return function(WW, iW, OW) {
+         return OW.font = iW, OW.measureText(WW).width
+       }(rW(WW), OW, iW)
+     }
+ 
+     function QW(WW) {
+       return BW(WW) || qW(WW)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L688` → after: `L664-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L664-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L664-L871) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L688)

```diff
-       return [BB[0] * OB, BB[1] * OB, BB[2] * OB]
+       const OW = QW(WW),
+         mW = QW(iW);
+       return void 0 === WW && !mW || !OW && void 0 === iW ? 0 : OW !== mW ? .5 * DW.HORIZONTAL_PADDING : 0
+     }
+     let ii;
+ 
+     function Oi() {
+       return ii ??= document.createElement("canvas").getContext("2d"), ii
+     }
+     const mi = () => 0;
+ 
+     function Ei(WW, iW, OW, mW, EW) {
+       let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mi;
+       iW += Wi(void 0, WW[0]);
+       for (let PW = 0; PW < WW.length; PW++) {
+         const LW = WW[PW],
+ ... (192 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L692` → after: `L875-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L875-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L875-L918) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L692)

```diff
-       return BB[0] * OB[0] + BB[1] * OB[1] + BB[2] * OB[2]
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const EW = (0, jW.r)(iW, OW, mW);
+       return WW.renderingGroupId = EW ? jW.c : jW.k, EW
+     }
+   },
+   39913: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => wW,
+       g: () => PW,
+       k: () => cW,
+       l: () => LW
+     });
+     var mW = OW(38437),
+       EW = OW(38419),
+       NW = OW(39915);
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L696` → after: `L922-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L922-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/279.js#L922-L935) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/279.js#L696)

```diff
-       return [BB[1] * OB[2] - BB[2] * OB[1], BB[2] * OB[0] - BB[0] * OB[2], BB[0] * OB[1] - BB[1] * OB[0]]
+       WW.diffuseTexture.sampler.noMipmap || (0, EW.q)(WW, NW.d, {
+         lodBias: NW.b[iW]
+       })
+     }
+   },
+   39976: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return "object" === typeof WW && null !== WW ? Object.assign(WW, {
+         startStep: iW
+       }) : WW
+     }
+ 
+     function EW(WW) {
+       return "object" === typeof WW && null !== WW && "startStep" in WW ? WW.startStep : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/280.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/280.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L4)

```diff
-   41217: (BB, OB, GB) => {
+   42533: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L9-L635` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L9) · [Before (L9-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L9-L635)

```diff
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(41112),
-       oB = GB(37802),
-       jB = GB(37778),
-       yB = GB(41220),
-       JB = GB(39366),
-       MB = GB(37823),
-       PB = GB(40890),
-       zB = GB(38769),
-       lB = GB(38424),
-       pB = GB(40965),
-       qB = GB(41022);
-     let ZB = (() => {
-       var BB;
-       let OB, GB, MB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB = yB.b,
- ... (611 more removed lines; see GitHub link above)
+     var mW = OW(2047);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L639-L695` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L13) · [Before (L639-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L639-L695)

```diff
-       RB || (RB = !0, ZB.Parse = NB)
-     }
-   },
-   41230: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => DB
-     });
-     var YB = GB(37778);
-     class DB {
-       constructor(BB, OB, GB) {
-         this._cameraPosition = OB, this._behavior = GB, this.activeInput = !1, this.speed = 1, this.o4 = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
-       }
-       computeCurrentFrameDeltas() {
-         const BB = this._scene.Lp().getDeltaTime(),
-           OB = this._getEffectiveDeltaMs(BB);
-         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
- ... (41 more removed lines; see GitHub link above)
+       EW = !0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L697-L809` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L15-L17) · [Before (L697-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L697-L809)

```diff
-   },
-   41235: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => YB
-     });
-     class YB {
-       constructor(BB, OB) {
-         this.inputMap = [], this.handlers = BB, this._createDefaultEntries = OB, this.resetInputMap()
-       }
-       resolveInteraction(BB, OB) {
-         for (const GB of this.inputMap)
-           if (GB.source === BB && this._entryMatches(GB, OB)) return GB;
-         return null
-       }
-       resetInputMap() {
-         this.inputMap = this._createDefaultEntries?.() ?? []
- ... (97 more removed lines; see GitHub link above)
+ 
+     function PW() {
+       EW && (EW = !1, (0, mW.b)())
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L812` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L20) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L812)

```diff
-   41215: (BB, OB, GB) => {
+   42394: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L815` → after: `L32-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L32-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L32-L39) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L815)

```diff
-       h: () => qB
+       h: () => VW,
+       i: () => JW,
+       m: () => GW,
+       q: () => hW,
+       t: () => TW,
+       u: () => DW,
+       v: () => uW,
+       z: () => eW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L817-L1067` → after: `L41-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L41-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L41-L58) · [Before (L817-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L817-L1067)

```diff
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(41217),
-       oB = GB(37778),
-       jB = GB(37782),
-       yB = GB(41226),
-       JB = GB(41220),
-       MB = GB(41230),
-       PB = GB(41235);
-     class zB extends MB.e {
-       constructor(BB, OB, GB) {
-         super(BB, OB, GB), this.input = new PB.c({
-           translate: (BB, OB, GB) => {
-             this.panAccumulatedPixels.x += BB, this.panAccumulatedPixels.y += OB, this.panAccumulatedPixels.z += GB
-           },
-           rotate: (BB, OB) => {
- ... (235 more removed lines; see GitHub link above)
+     var mW = OW(1459),
+       EW = OW(27),
+       NW = OW(1294),
+       PW = OW(3305),
+       LW = OW(5575),
+       cW = OW(5533);
+     let wW, tW = !1,
+       ZW = !1,
+       xW = !1,
+       lW = !1;
+     const AW = 1300,
+       bW = 3e3;
+     let jW = 0,
+       UW = !1,
+       kW = !1,
+       sW = 0;
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1071` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L64) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1071)

```diff
-       ZB || (ZB = !0, JB.b.AddNodeConstructor("TargetCamera", ((BB, OB) => () => new qB(BB, oB.r.Zero(), OB))))
+       return tW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1082-L1096` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L68) · [Before (L1082-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1082-L1096)

```diff
-       DB || (DB = !0, YB.d.prototype.getInputElement = function() {
-         return this._renderingCanvas
-       }, YB.d.prototype.getRenderingCanvasClientRect = function() {
-         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
-       }, YB.d.prototype.getInputElementClientRect = function() {
-         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
-       }, YB.d.prototype.getAspectRatio = function(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const GB = BB.viewport;
-         return this.getRenderWidth(OB) * GB.width / (this.getRenderHeight(OB) * GB.height)
-       }, YB.d.prototype.getScreenAspectRatio = function() {
-         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
-       }, YB.d.prototype._verifyPointerLock = function() {
-         this._onPointerLockChange?.()
-       })
+       return kW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1124-L1144` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L72) · [Before (L1124-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1124-L1144)

```diff
-       DB || (DB = !0, YB.d.prototype.getRenderPassNames = function() {
-         return this._renderPassNames
-       }, YB.d.prototype.getCurrentRenderPassName = function() {
-         return this._renderPassNames[this.currentRenderPassId]
-       }, YB.d.prototype.createRenderPassId = function(BB) {
-         const OB = ++YB.d._RenderPassIdCounter;
-         return this._renderPassNames[OB] = BB ?? "NONAME", OB
-       }, YB.d.prototype.releaseRenderPassId = function(BB) {
-         this._renderPassNames[BB] = void 0;
-         for (let OB = 0; OB < this.scenes.length; ++OB) {
-           const GB = this.scenes[OB];
-           for (let OB = 0; OB < GB.meshes.length; ++OB) {
-             const YB = GB.meshes[OB];
-             if (YB._releaseRenderPassId(BB), YB.iW)
-               for (let OB = 0; OB < YB.iW.length; ++OB) {
-                 YB.iW[OB]._removeDrawWrapper(BB)
- ... (5 more removed lines; see GitHub link above)
+       return SW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1161-L1173` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L76) · [Before (L1161-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1161-L1173)

```diff
-       DB || (DB = !0, YB.ThinEngine.prototype.setAlphaMode = function(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (this._alphaMode[GB] === BB) {
-           if (!OB) {
-             const OB = 0 === BB;
-             this.depthCullingState.depthMask !== OB && (this.depthCullingState.depthMask = OB)
-           }
-           return
-         }
-         const YB = 0 === BB;
-         this._alphaState.setAlphaBlend(!YB, GB), this._alphaState.setAlphaMode(BB, GB), OB || (this.depthCullingState.depthMask = YB), this._alphaMode[GB] = BB
-       })
+       return (0, NW.z)() && !SW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1175-L1202` → after: `L78-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L78-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L78-L84) · [Before (L1175-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1175-L1202)

```diff
-   },
-   40974: (BB, OB, GB) => {
-     var YB = GB(40837),
-       DB = GB(39366),
-       QB = GB(40849),
-       oB = GB(40982),
-       jB = GB(40947);
-     class yB extends oB.c {
-       setDepthStencilTexture(BB) {
-         let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (super.setDepthStencilTexture(BB, OB), !BB) return;
-         const GB = this._engine,
-           YB = this._context,
-           DB = BB._hardwareTexture;
-         if (DB && BB._autoMSAAManagement && this._MSAAFramebuffer) {
-           const OB = GB._currentFramebuffer;
- ... (12 more removed lines; see GitHub link above)
+ 
+     function nW(WW) {
+       let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       if (WW !== SW) {
+         SW = WW;
+         for (const WW of [...yW]) WW(SW);
+         iW && BW()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1204-L1283` → after: `L86-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L86-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L86-L90) · [Before (L1204-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1204-L1283)

```diff
-       createDepthStencilTexture() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
-           DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
-           QB = arguments.length > 5 ? arguments[5] : void 0;
-         if (this._depthStencilBuffer) {
-           const BB = this._engine,
-             OB = BB._currentFramebuffer,
-             GB = this._context;
-           BB._bindUnboundFramebuffer(this._framebuffer), GB.framebufferRenderbuffer(GB.FRAMEBUFFER, GB.DEPTH_STENCIL_ATTACHMENT, GB.RENDERBUFFER, null), GB.framebufferRenderbuffer(GB.FRAMEBUFFER, GB.DEPTH_ATTACHMENT, GB.RENDERBUFFER, null), GB.framebufferRenderbuffer(GB.FRAMEBUFF … [truncated]
-         }
-         return super.createDepthStencilTexture(BB, OB, GB, YB, DB, QB)
-       }
-       shareDepth(BB) {
- ... (64 more removed lines; see GitHub link above)
+     }
+ 
+     function uW(WW) {
+       return yW.add(WW), () => {
+         yW.delete(WW)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1407-L1418` → after: `L94-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L94-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L94-L96) · [Before (L1407-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1407-L1418)

```diff
-       function OB(BB) {
-         return function(OB, GB, YB, DB, QB, jB, yB, JB) {
-           let MB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-             PB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
-           const zB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
-             lB = BB ? 10 : 11,
-             pB = new oB.b(this, lB);
-           pB.baseWidth = GB, pB.baseHeight = YB, pB.baseDepth = DB, pB.width = GB, pB.height = YB, pB.depth = DB, pB.format = QB, pB.type = PB, pB.generateMipMaps = jB, pB.samplingMode = JB, BB ? pB.is3D = !0 : pB.is2DArray = !0, this._doNotHandleContextLost || (pB._bufferView =  … [truncated]
-           const qB = this._getSamplingParameters(JB, jB);
-           return this._gl.texParameteri(zB, this._gl.TEXTURE_MAG_FILTER, qB.mag), this._gl.texParameteri(zB, this._gl.TEXTURE_MIN_FILTER, qB.min), jB && this._gl.generateMipmap(zB), this._bindTextureDirectly(zB, null), this._internalTexturesCache.push(pB), pB
-         }
-       }
+     function oW() {
+       (0, LW.j)(PW.y.Menu, (0, NW.z)() ? 0 : PW.y.Menu)
+     }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1420-L1883` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L98-L99) · [Before (L1420-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1420-L1883)

```diff
-       function GB(BB) {
-         return function(OB, GB, YB, DB) {
-           let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-             oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-           const jB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
-             yB = this._getWebGLTextureType(oB),
-             JB = this._getInternalFormat(YB),
-             MB = this._getRGBABufferInternalSizedFormat(oB, YB);
-           this._bindTextureDirectly(jB, OB, !0), this._unpackFlipY(void 0 === DB || !!DB), this._doNotHandleContextLost || (OB._bufferView = GB, OB.format = YB, OB.invertY = DB, OB._compression = QB), OB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), QB && … [truncated]
-         }
-       }
-       JB || (JB = !0, DB.ThinEngine.prototype.updateRawTexture = function(BB, OB, GB, YB) {
-         let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-           QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-           oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         if (!BB) return;
- ... (448 more removed lines; see GitHub link above)
+     function dW() {
+       kW = !1, sW = 0, oW(), BW()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1885-L1910` → after: `L101-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L101-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L101-L104) · [Before (L1885-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1885-L1910)

```diff
-     class yB {
-       constructor(BB) {
-         this._samples = new Array(BB), this.reset()
-       }
-       add(BB) {
-         let OB;
-         if (this.isSaturated()) {
-           const BB = this._samples[this._pos];
-           OB = BB - this.average, this.average -= OB / (this._sampleCount - 1), this._m2 -= OB * (BB - this.average)
-         } else this._sampleCount++;
-         OB = BB - this.average, this.average += OB / this._sampleCount, this._m2 += OB * (BB - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = BB, this._pos++, this._pos %= this._samples.length
-       }
-       history(BB) {
-         if (BB >= this._sampleCount || BB >= this._samples.length) return 0;
-         const OB = this._wrapPosition(this._pos - 1);
-         return this._samples[this._wrapPosition(OB - BB)]
- ... (10 more removed lines; see GitHub link above)
+ 
+     function eW(WW) {
+       return YW.add(WW), () => {
+         YW.delete(WW)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1920-L1977` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L109) · [Before (L1920-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1920-L1977)

```diff
-       const OB = function(BB) {
-         if (!(0, lB.c)() || !document.body) return null;
-         const OB = document.createElement("span");
-         OB.textContent = "Hg", OB.style.font = BB;
-         const GB = document.createElement("div");
-         GB.style.display = "inline-block", GB.style.width = "1px", GB.style.height = "0px", GB.style.verticalAlign = "bottom";
-         const YB = document.createElement("div");
-         let DB, QB;
-         YB.style.whiteSpace = "nowrap", YB.appendChild(OB), YB.appendChild(GB), document.body.appendChild(YB);
-         try {
-           QB = GB.getBoundingClientRect().top - OB.getBoundingClientRect().top, GB.style.verticalAlign = "baseline", DB = GB.getBoundingClientRect().top - OB.getBoundingClientRect().top
-         } finally {
-           document.body.removeChild(YB)
-         }
-         const oB = {
-           ascent: DB,
- ... (42 more removed lines; see GitHub link above)
+       ZW = !1, WW !== tW && (tW = WW, lW = !1, clearTimeout(wW), xW = !tW && KW, tW ? (UW = !1, kW = !1, sW = 0) : HW() && !KW && (kW = !0), KW = !1, tW && !HW() && aW(), zW(), xW && BW())
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1981` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L113) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1981)

```diff
-       return Number.isFinite(BB.ascent) && Number.isFinite(BB.height) && Number.isFinite(BB.descent) && BB.height > 0
+       WW !== UW && (UW = WW, WW || BW())
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1984-L1990` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L116-L117) · [Before (L1984-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1984-L1990)

```diff
-     function ZB(BB) {
-       if (BB.requestPointerLock) {
-         const OB = BB.requestPointerLock();
-         OB instanceof Promise ? OB.then((() => {
-           BB.focus()
-         })).catch((() => {})) : BB.focus()
-       }
+     function DW() {
+       ZW = !1, lW || !0 !== CW() || (lW = !0, clearTimeout(wW), wW = setTimeout(pW, AW))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1992-L2277` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L119-L121) · [Before (L1992-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L1992-L2277)

```diff
-     var NB = GB(40950),
-       RB = GB(40899),
-       WB = GB(40958),
-       AB = GB(40965);
-     class VB extends QB.ThinEngine {
-       static get NpmPackage() {
-         return zB.d.NpmPackage
-       }
-       static get Version() {
-         return zB.d.Version
-       }
-       static get Instances() {
-         return DB.b.Instances
-       }
-       static get LastCreatedEngine() {
-         return DB.b.LastCreatedEngine
- ... (270 more removed lines; see GitHub link above)
+ 
+     function VW() {
+       return (!ZW || performance.now() - jW > bW) && (ZW = (0, cW.K)().lockPointer(), jW = performance.now()), ZW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2279-L2494` → after: `L123-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L123-L125) · [Before (L2279-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L2279-L2494)

```diff
-     VB.ALPHA_DISABLE = 0, VB.ALPHA_ADD = 1, VB.ALPHA_COMBINE = 2, VB.ALPHA_SUBTRACT = 3, VB.ALPHA_MULTIPLY = 4, VB.ALPHA_MAXIMIZED = 5, VB.ALPHA_ONEONE = 6, VB.ALPHA_PREMULTIPLIED = 7, VB.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, VB.ALPHA_INTERPOLATE = 9, VB.ALPHA_SCREENMODE = 10, VB.D … [truncated]
-   },
-   40982: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => DB
-     });
-     var YB = GB(40947);
-     class DB {
-       get depthStencilTexture() {
-         return this._depthStencilTexture
-       }
-       setDepthStencilTexture(BB) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = BB, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, B … [truncated]
-       }
-       get depthStencilTextureWithStencil() {
-         return this._depthStencilTextureWithStencil
- ... (200 more removed lines; see GitHub link above)
+ 
+     function pW() {
+       fW() && XW() && VW()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2496-L2525` → after: `L127-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L127-L129) · [Before (L2496-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L2496-L2525)

```diff
-   },
-   41434: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => YB
-     });
-     class YB {
-       static get ForceFullSceneLoadingForIncremental() {
-         return YB._ForceFullSceneLoadingForIncremental
-       }
-       static set ForceFullSceneLoadingForIncremental(BB) {
-         YB._ForceFullSceneLoadingForIncremental = BB
-       }
-       static get ShowLoadingScreen() {
-         return YB._ShowLoadingScreen
-       }
-       static set ShowLoadingScreen(BB) {
- ... (14 more removed lines; see GitHub link above)
+ 
+     function fW() {
+       return HW() && !tW && !UW && !(0, mW.k)()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2536-L2539` → after: `L132-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L132-L134) · [Before (L2536-L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L2536-L2539)

```diff
-     function QB(BB, OB) {
-       (function(BB) {
-         return DB.delete(BB)
-       })(BB) && YB.b.Warn(`Extension with the name '${BB}' already exists`), DB.set(BB, OB)
+     function CW() {
+       var WW;
+       return "undefined" === typeof navigator || null === (WW = navigator.userActivation) || void 0 === WW ? void 0 : WW.isActive
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2542-L2545` → after: `L137-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L137-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L137-L173) · [Before (L2542-L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L2542-L2545)

```diff
-     function oB(BB, OB) {
-       "image/ktx" !== OB && "image/ktx2" !== OB || (BB = ".ktx"), DB.has(BB) || (BB.endsWith(".ies") && QB(".ies", (async () => await GB.e(618).then((() => GB(44911))).then((BB => new BB._IESTextureLoader)))), BB.endsWith(".dds") && QB(".dds", (async () => await GB.e(616).then((( … [truncated]
-       const YB = DB.get(BB);
-       return YB ? Promise.resolve(YB(OB)) : null
+     function XW() {
+       return xW && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== CW()
+     }
+ 
+     function BW() {
+       HW() ? fW() && !kW && XW() && VW() : tW && !KW && aW()
+     }
+ 
+     function qW() {
+       kW ? navigator.vendor.startsWith("Apple") ? IW() : sW = MW : BW()
+     }
+ 
+     function RW() {
+       sW > 0 && 0 === --sW && IW()
+     }
+ 
+ ... (21 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2548` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L176) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L2548)

```diff
-   41446: (BB, OB, GB) => {
+   42373: (WW, iW, OW) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2551-L6874` → after: `L179-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L179-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L179-L188) · [Before (L2551-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L2551-L6874)

```diff
-       f: () => JB
-     });
-     var YB = GB(41283),
-       DB = GB(41024),
-       QB = GB(37823);
-     class oB extends YB.b {
-       get jOB() {
-         return this._subMaterials
-       }
-       set jOB(BB) {
-         this._subMaterials = BB, this._hookArray(BB)
-       }
-       getChildren() {
-         return this.jOB
-       }
-       constructor(BB, OB) {
- ... (4308 more removed lines; see GitHub link above)
+       h: () => LW,
+       j: () => ZW,
+       n: () => wW,
+       q: () => PW,
+       t: () => tW,
+       x: () => cW
+     });
+     let mW = null,
+       EW = null,
+       NW = null;
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L6877-L6878` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L191) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L6877-L6878)

```diff
-       const OB = BB.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return OB instanceof Float32Array || OB instanceof Uint16Array
+       mW = WW
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L6881-L6888` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L194-L195) · [Before (L6881-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L6881-L6888)

```diff
-     function MB(BB, OB, GB, YB) {
-       GB.uBB(Number.POSITIVE_INFINITY), YB.uBB(Number.NEGATIVE_INFINITY);
-       for (let DB = 0; DB < 3 * OB; DB += 3) {
-         const OB = BB[DB],
-           QB = BB[DB + 1],
-           oB = BB[DB + 2];
-         OB < GB.x && (GB.x = OB), QB < GB.y && (GB.y = QB), oB < GB.z && (GB.z = oB), OB > YB.x && (YB.x = OB), QB > YB.y && (YB.y = QB), oB > YB.z && (YB.z = oB)
-       }
+     function LW() {
+       return mW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L6891-L6892` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L198-L199) · [Before (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L6891-L6892)

```diff
-     function PB(BB, OB, GB) {
-       GB && (BB.x -= BB.x * GB.x + GB.y, BB.y -= BB.y * GB.x + GB.y, BB.z -= BB.z * GB.x + GB.y, OB.x += OB.x * GB.x + GB.y, OB.y += OB.y * GB.x + GB.y, OB.z += OB.z * GB.x + GB.y)
+     function cW(WW) {
+       EW = WW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L6895-L6900` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L202-L203) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L6895-L6900)

```diff
-     function zB(BB, OB, GB, DB, QB) {
-       const oB = YB.k.Xp[7],
-         jB = YB.k.Xp[8];
-       for (let yB = 0; yB < 2; ++yB)
-         for (let JB = 0; JB < 2; ++JB)
-           for (let MB = 0; MB < 2; ++MB) oB.set(yB ? OB.x : BB.x, JB ? OB.y : BB.y, MB ? OB.z : BB.z), YB.r.TransformCoordinatesToRef(oB, GB, jB), DB.minimizeInPlace(jB), QB.maximizeInPlace(jB)
+     function wW() {
+       return EW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L6903-L6905` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L206-L207) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L6903-L6905)

```diff
-     function lB(BB, OB, GB, DB, QB) {
-       const oB = YB.k.Xp[7];
-       for (let jB = 0; jB < 3 * OB; jB += 3) YB.r.TransformCoordinatesFromFloatsToRef(BB[jB], BB[jB + 1], BB[jB + 2], GB, oB), DB.minimizeInPlace(oB), QB.maximizeInPlace(oB)
+     function tW(WW) {
+       NW = WW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L6907-L6943` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L209-L210) · [Before (L6907-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L6907-L6943)

```diff
-     let pB = !1;
-     pB || (pB = !0, oB.c.prototype.thinInstanceAdd = function(BB) {
-       let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.JF().Lp().getCaps().instancedArrays) return DB.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(BB) ? BB.length : 1);
-       const GB = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(BB))
-         for (let YB = 0; YB < BB.length; ++YB) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB[YB], YB === BB.length - 1 && OB);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB, OB);
-       return GB
-     }, oB.c.prototype.thinInstanceAddSelf = function() {
-       let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       return this.thinInstanceAdd(YB.d.IdentityReadOnly, BB)
-     }, oB.c.prototype.thinInstanceRegisterAttribute = function(BB, OB) {
-       BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), this.removeVerticesData(BB), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[BB] = OB, this._userThinInstanceBuffersStorage.sizes[BB] = OB * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, oB.c.prototype.thinInstanceSetMatrixAt = function(BB, OB) {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function ZW() {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L6945-L7036` → after: `L212-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L212-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L212-L245) · [Before (L6945-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L6945-L7036)

```diff
-     }, oB.c.prototype.DOB = function(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       if (GB = GB || 16, "matrix" === BB) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = OB ? OB.length : 32 * GB, this._thinInstanceDataStorage.matrixData = OB, this._thin … [truncated]
-       else if ("previousMatrix" === BB) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = OB, null !== OB && (this._thinInstanceDataStorage.previousMatrixBuf … [truncated]
-       else if ("splatIndex" === BB && OB) {
-         this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = OB.length / GB, this._userThinInstanceBuffersStorage.data[BB] = OB, this._userThinInstanceBuffersStorage.strides[BB] = GB, this._userThinInstanceBuffersStorage.sizes[BB] = OB.length;
-         const YB = new jB.c(this.Lp(), OB, !0, 16, !1, !0);
-         this._thinInstanceDataStorage.matrixBuffer = YB;
-         for (let OB = 0; OB < 4; OB++) this.setVerticesBuffer(YB.createVertexBuffer(BB + OB, 4 * OB, 4))
-       } else BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), null === OB ? this._userThinInstanceBuffersStorage?.data[BB] && (this.removeVerticesData(BB), delete this._userThinInstanceBuffersStorage.data[BB], delete this._userThinInstanceBuffersStorage.strides[BB], delete … [truncated]
-     }, oB.c.prototype.HBB = function(BB) {
-       "matrix" === BB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._thinInstanceDataStorage.matrixBuffer?.updateDir … [truncated]
-     }, oB.c.prototype.thinInstancePartialBufferUpdate = function(BB, OB, GB) {
-       if ("matrix" === BB) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof OB ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16  … [truncated]
-       else if (BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[BB]) {
- ... (76 more removed lines; see GitHub link above)
+     }
+ 
+     function xW() {
+       var WW, iW;
+       return !0 === (null === (WW = EW) || void 0 === WW || null === (iW = WW.currentViewer) || void 0 === iW ? void 0 : iW.inPlayback)
+     }
+   },
+   42528: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW,
+       c: () => NW,
+       f: () => LW
+     });
+     var mW = OW(42094),
+       EW = OW(42109);
+ 
+ ... (18 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7038-L7058` → after: `L247-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L247-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L247-L349) · [Before (L7038-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7038-L7058)

```diff
-       pB.reConstruct(YB.k.Xp[0], YB.k.Xp[1]), this._updateBoundingInfo()
-     }, oB.c.prototype._thinInstanceRecreateBuffer = function(BB) {
-       let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       "matrix" === BB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, OB)) : "previousMatrix" === BB ? this._scene.needsPreviousWorldMatr … [truncated]
-     }, oB.c.prototype._thinInstanceUpdateBufferSize = function(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind);
-       const GB = "matrix" === BB;
-       if (!GB && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[BB])) return;
-       const YB = GB ? 16 : this._userThinInstanceBuffersStorage.strides[BB],
-         DB = GB ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[BB];
-       let QB = GB ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[BB];
-       const oB = (this._thinInstanceDataStorage.instancesCount + OB) * YB;
-       let yB = DB;
-       for (; yB < oB;) yB *= 2;
-       if (!QB || DB != yB) {
- ... (5 more removed lines; see GitHub link above)
+     }
+ 
+     function PW(WW) {
+       const {
+         terrainOpaque: iW,
+         terrainTransparent: OW,
+         earthSky: mW,
+         skyMeshes: EW,
+         regular: NW,
+         thin: PW,
+         line: LW,
+         text: cW,
+         particles: wW
+       } = WW;
+       return iW + OW + mW + EW + NW + PW + LW + cW + wW
+     }
+ ... (87 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7060-L7069` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L351) · [Before (L7060-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7060-L7069)

```diff
-     }, oB.c.prototype._thinInstanceInitializeUserStorage = function() {
-       this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
-         data: {},
-         sizes: {},
-         vertexBuffers: {},
-         strides: {}
-       })
-     }, oB.c.prototype._disposeThinInstanceSpecificData = function() {
-       this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), th … [truncated]
-     })
+     }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7071` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L353) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7071)

```diff
-   41444: (BB, OB, GB) => {
+   42513: (WW, iW, OW) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7073-L7074` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L355) · [Before (L7073-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7073-L7074)

```diff
-       e: () => RB,
-       h: () => qB
+       c: () => tW
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7076-L7084` → after: `L357-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L357-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L357-L365) · [Before (L7076-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7076-L7084)

```diff
-     var YB, DB, QB, oB, jB = GB(40998),
-       yB = GB(41004),
-       JB = GB(41022),
-       MB = GB(37802),
-       PB = GB(37778),
-       zB = GB(41220),
-       lB = GB(37823),
-       pB = GB(40890);
-     let qB = (() => {
+     var mW = OW(5551),
+       EW = OW(5546),
+       NW = OW(42137),
+       PW = OW(42149);
+     const LW = new Set(mW.R),
+       cW = mW.R.map((WW => (new TextEncoder).encode(WW))),
+       wW = new Map;
+ 
+     function tW(WW, iW) {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7086-L7541` → after: `L367-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L367-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L367-L374) · [Before (L7086-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7086-L7541)

```diff
-       let OB, GB, YB, DB, QB, oB, lB, pB, qB, ZB = zB.b,
-         NB = [],
-         RB = [],
-         WB = [],
-         AB = [],
-         VB = [],
-         SB = [],
-         nB = [],
-         UB = [],
-         fB = [],
-         kB = [],
-         dB = [],
-         KB = [],
-         uB = [],
-         mB = [],
-         IB = [],
- ... (440 more removed lines; see GitHub link above)
+       return null === (OW = wW.get(WW)) || void 0 === OW ? void 0 : OW[iW]
+     }(0, PW.j)(mW.uc.NewOtherEntitySettings, (WW => {
+       WW.payloadKind === EW.hc.Msgpack && cW.some((iW => function(WW, iW) {
+         const OW = iW[0];
+         for (let mW = WW.indexOf(OW); - 1 !== mW && mW + iW.length <= WW.length; mW = WW.indexOf(OW, mW + 1)) {
+           let OW = 1;
+           for (; OW < iW.length && WW[mW + OW] === iW[OW];) OW++;
+           if (OW === iW.length) return !0
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7543-L7544` → after: `L376-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L376-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L376-L385) · [Before (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7543-L7544)

```diff
-         _syncAbsoluteScalingAndRotation() {
-           this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
+         return !1
+       }(WW.payload, iW))) && function(WW) {
+         if (null === WW || "object" !== typeof WW || null === WW.settings || "object" !== typeof WW.settings) return;
+         const iW = String(WW.eId),
+           OW = WW.settings;
+         let mW = wW.get(iW);
+         for (const EW in OW) {
+           if (!LW.has(EW)) continue;
+           const WW = OW[EW];
+           null === WW || void 0 === WW ? mW && delete mW[EW] : (mW ??= {}, mW[EW] = WW)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7546-L7672` → after: `L387-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L387-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L387-L406) · [Before (L7546-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7546-L7672)

```diff
-       }, (() => {
-         const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZB[Symbol.metadata] ?? null) : void 0;
-         OB = [(0, yB.H)("position")], GB = [(0, yB.H)("rotation")], YB = [(0, yB.z)("rotationQuaternion")], DB = [(0, yB.H)("SP")], QB = [(0, yB.L)("billboardMode")], oB = [(0, yB.L)()], lB = [(0, yB.L)("infiniteDistance")], pB = [(0, yB.L)()], qB = [(0, yB.L)()], (0, jB.h)(null, … [truncated]
-           kind: "field",
-           name: "_position",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "_position" in BB,
-             get: BB => BB._position,
-             set: (BB, OB) => {
-               BB._position = OB
-             }
-           },
-           metadata: JB
-         }, NB, RB), (0, jB.h)(null, null, GB, {
- ... (111 more removed lines; see GitHub link above)
+         mW && wW.set(iW, mW)
+       }((0, NW.d)(WW.payload))
+     })), (0, PW.e)((() => {
+       wW.clear()
+     }))
+   },
+   42502: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => lW,
+       i: () => wW,
+       m: () => ZW
+     });
+     var mW = OW(40205),
+       EW = OW(2042),
+       NW = OW(1296),
+       PW = OW(42131),
+ ... (4 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7674-L7684` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L408-L409) · [Before (L7674-L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7674-L7684)

```diff
-     function ZB(BB, OB, GB) {
-       const YB = JB.d.Parse((() => new qB(BB.name, OB)), BB, OB, GB);
-       if (BB.localMatrix ? YB.setPreTransformMatrix(PB.d.FromArray(BB.localMatrix)) : BB.pivotMatrix && YB.setPivotMatrix(PB.d.FromArray(BB.pivotMatrix)), YB.Zk(BB.isEnabled), YB._waitingParsedUniqueId = BB.uniqueId, void 0 !== BB.parentId && (YB._waitingParentId = BB.parentId),  … [truncated]
-         for (let OB = 0; OB < BB.animations.length; OB++) {
-           const GB = BB.animations[OB],
-             DB = (0, lB.c)("BABYLON.Animation");
-           DB && YB.animations.push(DB.Parse(GB))
-         }
-         zB.b.ParseAnimationRanges(YB, BB, OB)
-       }
-       return BB.autoAnimate && OB.beginAnimation(YB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), YB
+     function ZW(WW) {
+       return tW[WW]
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7686` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L411) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7686)

```diff
-     let NB = !1;
+     const xW = new NW.b;
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7688-L7690` → after: `L413-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L413-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L413-L476) · [Before (L7688-L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7688-L7690)

```diff
-     function RB() {
-       NB || (NB = !0, qB.Parse = ZB)
-     }(YB = qB.prototype).mC ?? (YB.mC = (0, pB.g)("TransformNode", "mC")), (DB = qB.prototype).applyImpulse ?? (DB.applyImpulse = (0, pB.g)("TransformNode", "applyImpulse")), (QB = qB.prototype).applyAngularImpulse ?? (QB.applyAngularImpulse = (0, pB.g)("TransformNode", "applyAng … [truncated]
+     function lW(WW) {
+       return xW.add(WW)
+     }
+ 
+     function AW(WW) {
+       xW.callEach(WW, "a roster listener")
+     }(0, cW.j)(PW.db, (WW => {
+       const iW = (0, LW.g)(PW.db, WW);
+       if (void 0 === iW) return;
+       const OW = iW.SE.some((WW => {
+           let {
+             YE: iW,
+             yE: OW
+           } = WW;
+           return null !== OW && wW.has(iW) && wW.getName(iW) !== OW
+         })),
+ ... (48 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7692-L7700` → after: `L478-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L478-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L478-L514) · [Before (L7692-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7692-L7700)

```diff
-   41420: (BB, OB, GB) => {
-     function YB(BB, OB, GB) {
-       try {
-         const YB = BB.next();
-         YB.done ? OB(YB) : YB.value ? YB.value.then((() => {
-           YB.value = void 0, OB(YB)
-         }), GB) : OB(YB)
-       } catch (YB) {
-         GB(YB)
+   42519: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => hW,
+       g: () => jW,
+       k: () => oW,
+       l: () => dW
+     });
+     var mW = OW(1259),
+       EW = OW(632),
+       NW = OW(100),
+       PW = OW(5551),
+       LW = OW(42094),
+       cW = OW(42125),
+       wW = OW(42109),
+       tW = OW(42513),
+       ZW = OW(42502),
+ ... (21 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7704-L7710` → after: `L518-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L518-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L518-L528) · [Before (L7704-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7704-L7710)

```diff
-     function DB() {
-       let BB, OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (GB, DB, QB) => {
-         const oB = performance.now();
-         void 0 === BB || oB - BB > OB ? (BB = oB, setTimeout((() => {
-           YB(GB, DB, QB)
-         }), 0)) : YB(GB, DB, QB)
+     function bW(WW) {
+       let {
+         killer: iW,
+         victim: OW,
+         withItem: mW
+       } = WW;
+       return {
+         killer: MW(iW),
+         victim: MW(OW),
+         withItem: mW,
+         killstreak: 0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7714-L7724` → after: `L532-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L532-L533) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7714-L7724)

```diff
-     function QB(BB, OB, GB, YB, DB) {
-       const QB = () => {
-         let oB;
-         const jB = BB => {
-           BB.done ? GB(BB.value) : void 0 === oB ? oB = !0 : QB()
-         };
-         do {
-           oB = void 0, DB && DB.aborted ? YB(new Error("Aborted")) : OB(BB, jB, YB), void 0 === oB && (oB = !1)
-         } while (oB)
-       };
-       QB()
+     function jW(WW) {
+       yW && JW((() => "killed" === WW.kind ? AW(WW.body) : bW(WW.body)))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7728-L7731` → after: `L539-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L539-L540) · [Before (L7728-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7728-L7731)

```diff
-       let GB;
-       return QB(BB, YB, (BB => GB = BB), (BB => {
-         throw BB
-       }), OB), GB
+       var OW;
+       return ZW.i.has(WW) ? null === (OW = ZW.i.getSettings(WW)) || void 0 === OW ? void 0 : OW[iW] : (0, tW.c)(WW, iW)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7733-L7736` → after: `L542-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L542-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L542-L589) · [Before (L7733-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7733-L7736)

```diff
-     async function jB(BB, OB, GB) {
-       return await new Promise(((YB, DB) => {
-         QB(BB, OB, YB, DB, GB)
-       }))
+ 
+     function MW(WW) {
+       var iW, OW, PW, LW, tW;
+       let {
+         eId: xW,
+         name: lW,
+         colour: AW,
+         lifeformType: bW
+       } = WW;
+       if (void 0 === xW || null === xW || "" === xW) {
+         const WW = lW || null;
+         return {
+           id: null,
+           shownName: WW,
+           lifeformType: null === WW && null !== bW && void 0 !== bW ? bW : null,
+           colour: AW || null,
+ ... (32 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7739-L7741` → after: `L592-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L592-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L592-L640) · [Before (L7739-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7739-L7741)

```diff
-     function yB(BB, OB) {
-       return function() {
-         return oB(BB(...arguments), OB)
+     function hW() {
+       TW || (TW = !0, (0, lW.j)(PW.uc.PlayerKilled, (WW => {
+         const iW = (0, xW.j)(WW);
+         (0, xW.d)(iW) && JW((() => AW(iW)))
+       })), (0, lW.j)(PW.uc.CustomKillfeed, (WW => {
+         const iW = (0, xW.j)(WW);
+         (0, xW.d)(iW) && (0, xW.d)(iW.killer) && (0, xW.d)(iW.victim) && JW((() => bW(iW)))
+       })), (0, lW.e)((() => {
+         SW = []
+       })))
+     }
+     const HW = Object.freeze([0, 0, 0]),
+       nW = [0, 0, 0],
+       uW = [0, 0, 0],
+       oW = {
+         kill: {
+ ... (33 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7743` → after: `L642-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L642-L643) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7743)

```diff
-     }
+   },
+   40205: (WW, iW, OW) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L7745-L7749` → after: `L645-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L645-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/280.js#L645-L703) · [Before (L7745-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/280.js#L7745-L7749)

```diff
-       e: () => DB,
-       h: () => yB,
-       i: () => jB,
-       l: () => oB
-     })
+       c: () => mW
+     });
+     class mW {
+       constructor() {
+         this.members = new Map
+       }
+       apply(WW) {
+         const iW = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const mW of WW.SE) {
+           let WW = this.members.get(mW.YE);
+           if (WW || (WW = {
+               name: null,
+ ... (43 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L4)

```diff
-   41150: (BB, OB, GB) => {
+   40712: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L6-L9)

```diff
-       c: () => jB,
-       d: () => qB,
-       e: () => JB,
-       h: () => yB
+       e: () => EW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L11-L71` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L8-L12) · [Before (L11-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L11-L71)

```diff
-     var YB = GB(40929),
-       DB = GB(39366),
-       QB = GB(41067),
-       oB = GB(40972);
-     class jB {
-       get lV() {
-         return this._isDisposed
-       }
-       constructor(BB, OB, GB) {
-         let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           jB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           yB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           JB = arguments.length > 7 ? arguments[7] : void 0,
-           MB = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, oB.c)(), BB && BB.JF ? this._engine = BB.JF().Lp() : this._engine = BB, this._updatable = GB, this._instanced = jB, this._divisor = JB || 1, this._label = MB, OB instanceof YB.b ? (this._data = null, this._buffer = OB) … [truncated]
- ... (45 more removed lines; see GitHub link above)
+     const mW = 1e3;
+ 
+     function EW(WW, iW) {
+       const OW = performance.now() + WW;
+       return 0 !== iW && Math.abs(OW - iW) < mW ? iW : OW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L73-L180` → after: `L14-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L14-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L14-L51) · [Before (L73-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L73-L180)

```diff
-     class yB {
-       get lV() {
-         return this._isDisposed
-       }
-       get instanceDivisor() {
-         return this._instanceDivisor
-       }
-       set instanceDivisor(BB) {
-         const OB = 0 != BB;
-         this._instanceDivisor = BB, OB !== this._instanced && (this._instanced = OB, this._computeHashCode())
-       }
-       get _maxVerticesCount() {
-         const BB = this.getData();
-         return BB ? Array.isArray(BB) ? BB.length / (this.byteStride / 4) - this.byteOffset / 4 : (BB.byteLength - this.byteOffset) / this.byteStride : 0
-       }
-       constructor(BB, OB, GB, YB, DB, oB, PB, zB, lB, pB) {
- ... (92 more removed lines; see GitHub link above)
+   },
+   40890: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => wO
+     });
+     var mW = OW(62);
+     const EW = "shootingLobby",
+       NW = {
+         Red: "#fc6464",
+         Blue: "#4f94f1"
+       };
+ 
+     function PW(WW, iW) {
+       const OW = WW.reduce(((WW, iW) => WW + iW[5]), 0);
+       return 0 === OW ? 0 === WW.length ? 0 : Math.round(100 / WW.length) : Math.round(WW[iW][5] / OW * 100)
+     }
+ ... (22 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L183-L204` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L54-L56) · [Before (L183-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L183-L204)

```diff
-     function JB(BB) {
-       switch (BB) {
-         case yB.UVKind:
-         case yB.UV2Kind:
-         case yB.UV3Kind:
-         case yB.UV4Kind:
-         case yB.UV5Kind:
-         case yB.UV6Kind:
-           return 2;
-         case yB.NormalKind:
-         case yB.PositionKind:
-           return 3;
-         case yB.ColorKind:
-         case yB.ColorInstanceKind:
-         case yB.MatricesIndicesKind:
-         case yB.MatricesIndicesExtraKind:
- ... (6 more removed lines; see GitHub link above)
+     function JW(WW, iW) {
+       return {
+         "--team": TW(WW, iW)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L209` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L70) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L209)

```diff
-       return BB instanceof Int8Array ? yB.BYTE : BB instanceof Uint8Array ? yB.UNSIGNED_BYTE : BB instanceof Int16Array ? yB.SHORT : BB instanceof Uint16Array ? yB.UNSIGNED_SHORT : BB instanceof Int32Array ? yB.INT : BB instanceof Uint32Array ? yB.UNSIGNED_INT : yB.FLOAT
+       return Object.hasOwn(NW, WW)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L213` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L80) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L213)

```diff
-       return (0, QB.s)(BB)
+       return uW[WW]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L216-L219` → after: `L83-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L83-L85) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L216-L219)

```diff
-     function zB(BB, OB, GB, YB, DB, oB, jB, yB) {
-       (0, QB.k)(BB, OB, GB, YB, DB, oB, jB, ((BB, OB) => {
-         for (let GB = 0; GB < YB; GB++) yB(BB[GB], OB + GB)
-       }))
+     function dW() {
+       const WW = (0, lW.g)("hiddenPlayerNames");
+       return (0, mW.useCallback)((iW => "" === iW ? "" : (0, SW.g)(iW, WW)), [WW])
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L222-L223` → after: `L88-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L88-L96) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L222-L223)

```diff
-     function lB(BB, OB, GB, YB, DB, oB, jB, yB) {
-       return (0, QB.r)(BB, OB, GB, YB, DB, oB, jB, yB)
+     function eW(WW) {
+       var iW;
+       let {
+         playerId: OW
+       } = WW;
+       const mW = null === (iW = (0, lW.g)("players").byId[OW]) || void 0 === iW ? void 0 : iW.cosmetics;
+       return (0, YW.jsx)(KW.e, {
+         cosmetics: null !== mW && void 0 !== mW ? mW : {}
+       })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L228-L229` → after: `L99-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L99-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L99-L119) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L228-L229)

```diff
-     function qB() {
-       pB || (pB = !0, yB.DeduceStride = JB, yB.GetDataType = MB, yB.GetTypeByteLength = PB, yB.ForEach = zB, yB.GetFloatData = lB)
+     function vW(WW) {
+       let {
+         icon: iW,
+         value: OW,
+         label: mW,
+         gold: EW = !1
+       } = WW;
+       return (0, YW.jsxs)("div", {
+         className: "ShootingStat",
+         children: [(0, YW.jsxs)("b", {
+           className: xW()("FullyFancyText", {
+             Gold: EW
+           }),
+           children: [iW && (0, YW.jsx)(AW.c, {
+             name: iW
+           }), OW]
+ ... (5 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L231-L242` → after: `L121-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L121-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L121-L125) · [Before (L231-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L231-L242)

```diff
-   },
-   40929: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB
-     });
-     class YB {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.CP = 0, this.is32Bits = !1, this.uniqueId = YB._Counter++
-       }
+     var gW = OW(1463),
+       DW = OW(40712);
+ 
+     function VW(WW) {
+       return `shooting:${WW}`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L254` → after: `L129-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L129-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L129-L148) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L254)

```diff
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
+         this.slices = {
+           hud: {
+             wire: null,
+             endsAt: 0,
+             spawnProtectionEndsAt: 0
+           },
+           lobby: {
+             wire: ["none"],
+             startsAt: 0
+           },
+           roundEnd: {
+             wire: ["none"],
+             lobbyAt: 0
+           },
+           leaderboard: [],
+           killfeed: [],
+ ... (4 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L256-L287` → after: `L150-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L150-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L150-L179) · [Before (L256-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L256-L287)

```diff
-       getNormal() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || OB && !this.pickedMesh.isVerticesDataPresent(DB.h.NormalKind)) return null;
-         let GB, QB = this.pickedMesh.KDB();
-         0 === QB?.length && (QB = null);
-         const oB = YB.k.Xp[0],
-           jB = YB.k.Xp[1],
-           yB = YB.k.Xp[2];
-         if (OB) {
-           const BB = this.pickedMesh.getVerticesData(DB.h.NormalKind);
-           let OB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId], oB) : oB.zOB(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
-             JB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 1], jB) : jB.zOB(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
-             MB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 2], yB) : yB.zOB(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]);
-           OB = OB.scale(this.bu), JB = JB.scale(this.bv), MB = MB.scale(1 - this.bu - this.bv), GB = new YB.r(OB.x + JB.x + MB.x, OB.y + JB.y + MB.y, OB.z + JB.z + MB.z)
-         } else {
- ... (16 more removed lines; see GitHub link above)
+       get(WW) {
+         return this.slices[WW]
+       }
+       yZ(WW, iW) {
+         switch (WW) {
+           case "shootingHud":
+             return this.receiveHud(iW), !0;
+           case EW: {
+             const WW = iW;
+             return this.set("lobby", {
+               wire: WW,
+               startsAt: "lobby" === WW[0] ? (0, DW.e)(WW[2], this.slices.lobby.startsAt) : 0
+             }), !0
+           }
+           case "shootingRoundEnd": {
+             const WW = iW;
+ ... (14 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L289-L290` → after: `L181-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L181-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L181-L200) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L289-L290)

```diff
-           let GB = BB.getWorldMatrix();
-           BB.nonUniformScaling && (YB.k.Matrix[0].IU(GB), GB = YB.k.Matrix[0], GB.setTranslationFromFloats(0, 0, 0), GB.invert(), GB.transposeToRef(YB.k.Matrix[1]), GB = YB.k.Matrix[1]), YB.r.TransformNormalToRef(OB, GB, OB)
+           case "shootingEvent":
+             return this.receiveEvent(iW), !0;
+           default:
+             return !1
+         }
+       }
+       receiveHud(WW) {
+         var iW;
+         const OW = this.slices.hud,
+           mW = (null === (iW = OW.wire) || void 0 === iW ? void 0 : iW[1]) === WW[1];
+         OW.wire && !mW && (this.set("kill", null), this.set("tier", null), this.set("death", null)), this.set("hud", {
+           wire: WW,
+           endsAt: (0, DW.e)(WW[4], mW ? OW.endsAt : 0),
+           spawnProtectionEndsAt: 0 === WW[13] ? 0 : (0, DW.e)(WW[13], OW.spawnProtectionEndsAt)
+         })
+       }
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L292-L294` → after: `L202-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L202-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L202-L219) · [Before (L292-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L292-L294)

```diff
-         if (BB && JB(this.pickedMesh, GB), this.ray) {
-           const OB = YB.k.Xp[0].IU(GB);
-           BB || JB(this.pickedMesh, OB), YB.r.Dot(OB, this.ray.direction) > 0 && GB.negateInPlace()
+         switch (WW[0]) {
+           case "kill":
+             this.set("kill", {
+               ...iW,
+               wire: WW
+             });
+             break;
+           case "tier":
+             this.set("tier", {
+               ...iW,
+               wire: WW
+             });
+             break;
+           case "death":
+             this.set("death", {
+               ...iW,
+ ... (2 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L298-L308` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L222-L223) · [Before (L298-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L298-L308)

```diff
-       getTextureCoordinates() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DB.h.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(BB)) return null;
-         const OB = this.pickedMesh.KDB();
-         if (!OB) return null;
-         const GB = this.pickedMesh.getVerticesData(BB);
-         if (!GB) return null;
-         let QB = YB.o.FromArray(GB, 2 * OB[3 * this.faceId]),
-           oB = YB.o.FromArray(GB, 2 * OB[3 * this.faceId + 1]),
-           jB = YB.o.FromArray(GB, 2 * OB[3 * this.faceId + 2]);
-         return QB = QB.scale(this.bu), oB = oB.scale(this.bv), jB = jB.scale(1 - this.bu - this.bv), new YB.o(QB.x + oB.x + jB.x, QB.y + oB.y + jB.y)
+       set(WW, iW) {
+         this.slices[WW] = iW, LW.l.iZ(VW(WW), iW, !0)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L319-L326` → after: `L227-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L227-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L227-L303) · [Before (L319-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L319-L326)

```diff
-     function QB() {
-       DB || (DB = !0, YB.ThinEngine.prototype.updateDynamicIndexBuffer = function(BB, OB) {
-         let GB;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(BB), GB = BB.is32Bits ? OB instanceof Uint32Array ? OB : new Uint32Array(OB) : OB instanceof Uint16Array ? OB : new Uint16Array(OB), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, GB, … [truncated]
-       }, YB.ThinEngine.prototype.updateDynamicVertexBuffer = function(BB, OB, GB, YB) {
-         this.bindArrayBuffer(BB), void 0 === GB && (GB = 0);
-         const DB = OB.byteLength || OB.length;
-         void 0 === YB || YB >= DB && 0 === GB ? OB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GB, new Float32Array(OB)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GB, OB) : OB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GB, new Floa … [truncated]
+     function fW(WW, iW) {
+       return (0, gW.e)(VW(iW), (() => WW.get(iW)))
+     }
+     const CW = ["Red", "Blue"],
+       XW = {
+         streak: `${yW}scoreIs_streak`,
+         diamonds: `${yW}scoreIs_diamonds`,
+         kills: `${yW}scoreIs_kills`
+       };
+ 
+     function BW(WW) {
+       var iW;
+       let {
+         store: OW,
+         variation: mW
+       } = WW;
+ ... (61 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L329-L366` → after: `L306-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L306-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L306-L387) · [Before (L329-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L329-L366)

```diff
-   },
-   40938: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB
-     });
-     class YB {
-       get underlyingResource() {
-         return this._webGLTexture
-       }
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           OB = arguments.length > 1 ? arguments[1] : void 0;
-         if (this._MSAARenderBuffers = null, this._context = OB, !BB && (BB = OB.createTexture(), !BB)) throw new Error("Unable to create webGL texture");
-         this.set(BB)
-       }
-       setUsage() {}
- ... (22 more removed lines; see GitHub link above)
+ 
+     function qW(WW) {
+       let {
+         title: iW,
+         team: OW,
+         rows: mW,
+         localId: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, sW.B)(), PW = dW(), LW = [{
+         key: "name",
+         header: (0, YW.jsxs)("span", {
+           className: "ShootingBoardTeam",
+           children: [(0, YW.jsxs)("span", {
+             children: [iW, (null === OW || void 0 === OW ? void 0 : OW.mine) && (0, YW.jsxs)("span", {
+ ... (66 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L368-L378` → after: `L389-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L389-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L389-L399) · [Before (L368-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L368-L378)

```diff
-   },
-   40905: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => RB
-     });
-     var YB = GB(37802),
-       DB = GB(40857),
-       QB = GB(37796),
-       oB = GB(39366),
-       jB = GB(37793),
-       yB = GB(40911);
+     var RW = OW(37868),
+       GW = OW(37919),
+       IW = OW(25),
+       aW = OW(5668),
+       rW = OW(2080),
+       zW = OW(5251),
+       FW = OW(3599),
+       QW = OW(1526),
+       Wi = OW(1551),
+       ii = OW(39775);
+     const Oi = "shooting:vote";
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L380-L430` → after: `L401-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L401-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L401-L442) · [Before (L380-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L380-L430)

```diff
-       constructor() {
-         let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, BB && this.reset()
-       }
-       get isDirty() {
-         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
-       }
-       get zOffset() {
-         return this._zOffset
-       }
-       set zOffset(BB) {
-         this._zOffset !== BB && (this._zOffset = BB, this._isZOffsetDirty = !0)
-       }
-       get zOffsetUnits() {
-         return this._zOffsetUnits
-       }
- ... (35 more removed lines; see GitHub link above)
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ii.c;
+         this.iZ = WW, this.sendCommand = iW, this.pacer = OW, this.view = {
+           hidden: !1,
+           pending: null
+         }, this.unsent = !1, this.cardsKey = "", this.pendingTimer = null, this.unsubscribePacer = void 0, this.vote = WW => {
+           this.unsent = !0, this.set({
+             ...this.view,
+             pending: WW
+           }), this.flush()
+         }, this.setHidden = WW => {
+           this.set({
+             ...this.view,
+             hidden: WW
+           })
+         }, this.flush = () => {
+ ... (26 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L432-L433` → after: `L444-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L444-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L444-L445) · [Before (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L432-L433)

```diff
-       set frontFace(BB) {
-         this._frontFace !== BB && (this._frontFace = BB, this._isFrontFaceDirty = !0)
+       dispose() {
+         this.unsubscribePacer(), this.pacer.dispose(), this.clearPendingTimer()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L435-L436` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L447-L448) · [Before (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L435-L436)

```diff
-       reset() {
-         this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._is … [truncated]
+       clearPendingTimer() {
+         null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L438-L439` → after: `L450-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L450-L451) · [Before (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L438-L439)

```diff
-       apply(BB) {
-         this.isDirty && (this._isCullDirty && (this.cull ? BB.enable(BB.CULL_FACE) : BB.disable(BB.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (BB.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (BB.depthMask(this.depthMask), this … [truncated]
+       set(WW) {
+         this.view = WW, this.iZ(WW)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L442-L529` → after: `L454-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L454-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L454-L531) · [Before (L442-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L442-L529)

```diff
-     class MB {
-       get isDirty() {
-         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
-       }
-       get func() {
-         return this._func
-       }
-       set func(BB) {
-         this._func !== BB && (this._func = BB, this._isStencilFuncDirty = !0)
-       }
-       get backFunc() {
-         return this._func
-       }
-       set backFunc(BB) {
-         this._backFunc !== BB && (this._backFunc = BB, this._isStencilFuncDirty = !0)
-       }
- ... (72 more removed lines; see GitHub link above)
+     const Ei = "ShootingVoteStripOpen";
+ 
+     function Ni(WW) {
+       var iW, OW, EW, NW, LW;
+       let {
+         maps: cW,
+         votes: wW
+       } = WW;
+       const {
+         t: tW
+       } = (0, sW.B)(), ZW = (0, QW.g)(Oi, wW.getView()), {
+         isTouchScreen: lW,
+         openInGameMenuName: bW,
+         openEverythingMenuName: jW
+       } = (0, IW.p)(["isTouchScreen", "openInGameMenuName", "openEverythingMenuName"]), UW = null !== bW || null !== jW, kW = (0, FW.e)();
+       (0, zW.b)(!0, !lW && !ZW.hidden && !UW && !kW, "shootingVoteStrip", !0), (0, mW.useEffect)((() => {
+ ... (62 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L531-L609` → after: `L533-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L533-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L533-L607) · [Before (L531-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L531-L609)

```diff
-     class PB {
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = PB.ALWAYS, this.opStencilFail = PB.KEEP, this.opDepthFail = PB.KEEP, this.opStencilDepthPass = PB.REPLACE, this.backFunc = PB.ALWAYS, this.backOpStencilFail = PB.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(BB) {
-         this.func = BB
-       }
-       get stencilBackFunc() {
-         return this.backFunc
-       }
- ... (63 more removed lines; see GitHub link above)
+ 
+     function Pi(WW) {
+       let {
+         map: iW,
+         chance: OW,
+         mine: EW,
+         onVote: NW,
+         showHeads: PW
+       } = WW;
+       const {
+         t: LW
+       } = (0, sW.B)(), [cW, wW, tW, ZW, lW, bW, , jW, UW] = iW, [kW, MW] = (0, mW.useState)(!1);
+       return (0, YW.jsxs)("button", {
+         type: "button",
+         className: xW()("ShootingMapCard", {
+           Mine: EW
+ ... (59 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L618-L631` → after: `L610-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L610-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L610-L623) · [Before (L618-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L618-L631)

```diff
-     function NB(BB, OB) {
-       if (OB) {
-         const {
-           requestAnimationFrame: GB
-         } = OB;
-         if ("function" === typeof GB) return GB(BB)
-       }
-       if ((0, qB.j)()) {
-         const {
-           requestAnimationFrame: GB
-         } = OB || window;
-         if ("function" === typeof GB) return GB(BB)
-       } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(BB);
-       return setTimeout(BB, 16)
+     function Li(WW) {
+       let {
+         voters: iW
+       } = WW;
+       const OW = (0, lW.g)("players");
+       return (0, YW.jsx)("span", {
+         className: "ShootingMapCardHeads",
+         children: iW.slice(0, 8).map((WW => {
+           var iW;
+           return (null === (iW = OW.byId[WW]) || void 0 === iW ? void 0 : iW.cosmetics) && (0, YW.jsx)(eW, {
+             playerId: WW
+           }, WW)
+         }))
+       })
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1375-L1385` → after: `L627-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L627-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L627-L648) · [Before (L1375-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1375-L1385)

```diff
-       let OB = QB.get(BB);
-       if (!OB) {
-         if (!BB) return oB;
-         OB = {
-           _webGLVersion: BB.TEXTURE_BINDING_3D ? 2 : 1,
-           _context: BB,
-           parallelShaderCompile: BB.getExtension("KHR_parallel_shader_compile") || void 0,
-           cachedPipelines: {}
-         }, QB.set(BB, OB)
-       }
-       return OB
+       let {
+         store: iW,
+         votes: OW,
+         variation: mW
+       } = WW;
+       const EW = fW(iW, "lobby"),
+         NW = (0, lW.g)("localPlayerAlive"),
+         PW = (0, lW.f)("connectedGame", (WW => WW.replay));
+       if ("lobby" !== EW.wire[0] || PW) return null;
+       const LW = EW.wire;
+       return (0, YW.jsxs)(YW.Fragment, {
+         children: [(0, YW.jsx)(wi, {
+           wire: LW,
+           startsAt: EW.startsAt,
+           variation: mW
+         }), NW && LW[9].length > 0 && (0, YW.jsx)(RW.h, {
+ ... (6 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1389` → after: `L706-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L706-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L706-L729) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1389)

```diff
-       QB.delete(BB)
+       let {
+         waiting: iW,
+         startsAt: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, sW.B)(), EW = (0, kW.f)(iW ? 0 : OW);
+       return (0, YW.jsxs)("div", {
+         className: "ShootingLobbyCountdown",
+         children: [iW && (0, YW.jsx)("span", {
+           className: "ShootingLobbyCountdownLabel",
+           children: mW("shootingLobby:waiting")
+         }), !iW && (0, YW.jsxs)(YW.Fragment, {
+           children: [(0, YW.jsx)("span", {
+             className: "ShootingLobbyCountdownLabel",
+             children: mW("shootingLobby:startingIn")
+ ... (8 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1392-L1395` → after: `L732-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L732-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L732-L755) · [Before (L1392-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1392-L1395)

```diff
-     function JB(BB, OB, GB, YB, DB, QB) {
-       const oB = jB(YB);
-       QB || (QB = oB._createShaderProgramInjection ?? zB);
-       return QB(BB, NB(OB, "vertex", YB, oB._contextWasLost), NB(GB, "fragment", YB, oB._contextWasLost), YB, DB, oB.validateShaderPrograms)
+     function Zi(WW) {
+       let {
+         team: iW,
+         count: OW,
+         cap: mW,
+         mine: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, sW.B)();
+       return (0, YW.jsxs)("span", {
+         className: xW()("ShootingLobbyTeam", {
+           Mine: EW,
+           Full: OW >= mW
+         }),
+         style: JW(iW, "tdm"),
+ ... (8 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1398-L1404` → after: `L875-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L875-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L875-L892) · [Before (L1398-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1398-L1404)

```diff
-     function MB(BB, OB, GB, YB, DB) {
-       let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         oB = arguments.length > 6 ? arguments[6] : void 0;
-       const yB = jB(DB);
-       oB || (oB = yB._createShaderProgramInjection ?? zB);
-       const JB = yB._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
-       return oB(BB, ZB(OB, "vertex", YB, JB, DB, yB._contextWasLost), ZB(GB, "fragment", YB, JB, DB, yB._contextWasLost), DB, QB, yB.validateShaderPrograms)
+     function Ui(WW) {
+       let {
+         endsAt: iW,
+         label: OW
+       } = WW;
+       const mW = (0, kW.f)(iW);
+       return (0, YW.jsxs)("div", {
+         className: "CubeWarfareClock",
+         children: [(0, YW.jsx)("div", {
+           className: xW()("CubeWarfareClockTime", {
+             Urgent: mW < 60
+           }),
+           children: (0, kW.d)(mW)
+         }), (0, YW.jsx)("div", {
+           className: "CubeWarfareClockLabel",
+           children: OW
+ ... (2 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1407-L1410` → after: `L895-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L895-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L895-L948) · [Before (L1407-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1407-L1410)

```diff
-     function PB(BB, OB) {
-       const GB = new YB,
-         DB = jB(BB);
-       return DB.parallelShaderCompile && !DB.disableParallelShaderCompile && (GB.isParallelCompiled = !0), GB.context = DB._context, GB
+     function ki(WW) {
+       const {
+         t: iW
+       } = (0, sW.B)(), OW = iW => WW.leaderboard.filter((WW => WW[2] === iW)), mW = {
+         team: "Red",
+         name: iW(hW.Red),
+         score: WW.redScore,
+         members: OW("Red")
+       }, EW = {
+         team: "Blue",
+         name: iW(hW.Blue),
+         score: WW.blueScore,
+         members: OW("Blue")
+       }, [NW, PW] = "Blue" === WW.myTeam ? [EW, mW] : [mW, EW], LW = (OW, mW) => (0, YW.jsxs)("div", {
+         className: xW()("CubeWarfareSide", mW, `Team-${OW.team}`, {
+           Mine: OW.team === WW.myTeam
+ ... (38 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1413-L1417` → after: `L951-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L951-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L951-L1005) · [Before (L1413-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1413-L1417)

```diff
-     function zB(BB, OB, GB, YB) {
-       let DB = arguments.length > 5 ? arguments[5] : void 0;
-       const QB = YB.createProgram();
-       if (BB.program = QB, !QB) throw new Error("Unable to create program");
-       return YB.attachShader(QB, OB), YB.attachShader(QB, GB), YB.linkProgram(QB), BB.context = YB, BB.vertexShader = OB, BB.fragmentShader = GB, BB.isParallelCompiled || pB(BB, YB, DB), QB
+     function si(WW) {
+       var iW;
+       const {
+         t: OW
+       } = (0, sW.B)(), mW = dW(), EW = null !== (iW = WW.second) && void 0 !== iW ? iW : WW.spectating || WW.playerCount > 1 ? WW.leader : null;
+       return (0, YW.jsxs)(YW.Fragment, {
+         children: [!WW.spectating && (0, YW.jsxs)("div", {
+           className: xW()("CubeWarfareSide", "Left", "Mine", "Ffa"),
+           style: {
+             "--team": (0, MW.lb)(WW.myTeam)
+           },
+           children: [(0, YW.jsx)("span", {
+             className: "CubeWarfareYouTag",
+             children: OW("shootingOverlays:you")
+           }), (0, YW.jsxs)("div", {
+             className: "CubeWarfareSideText",
+ ... (39 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1420-L1424` → after: `L1008-L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1008-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1008-L1022) · [Before (L1420-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1420-L1424)

```diff
-     function lB(BB, OB, GB) {
-       const YB = BB;
-       if (YB._isDisposed) return !1;
-       const DB = jB(OB);
-       return !!(DB && DB.parallelShaderCompile && DB.parallelShaderCompile.COMPLETION_STATUS_KHR && YB.program && OB.getProgramParameter(YB.program, DB.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (pB(YB, OB, GB), !0)
+     function Mi(WW) {
+       let {
+         score: iW,
+         target: OW
+       } = WW;
+       return (0, YW.jsx)("div", {
+         className: xW()("CubeWarfareStrip", {
+           Progress: OW > 0
+         }),
+         children: OW > 0 && (0, YW.jsx)("i", {
+           style: {
+             transform: `scaleX(${Math.min(1,iW/OW)})`
+           }
+         })
+       })
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1427-L1451` → after: `L1045-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1045-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1045-L1103) · [Before (L1427-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1427-L1451)

```diff
-     function pB(BB, OB, GB) {
-       const YB = BB.context,
-         DB = BB.vertexShader,
-         QB = BB.fragmentShader,
-         oB = BB.program;
-       if (!YB.getProgramParameter(oB, YB.LINK_STATUS)) {
-         if (!OB.getShaderParameter(DB, OB.COMPILE_STATUS)) {
-           const GB = OB.getShaderInfoLog(DB);
-           if (GB) throw BB.vertexCompilationError = GB, new Error("VERTEX SHADER " + GB)
-         }
-         if (!OB.getShaderParameter(QB, OB.COMPILE_STATUS)) {
-           const GB = OB.getShaderInfoLog(QB);
-           if (GB) throw BB.fragmentCompilationError = GB, new Error("FRAGMENT SHADER " + GB)
-         }
-         const GB = YB.getProgramInfoLog(oB);
-         if (GB) throw BB.programLinkError = GB, new Error(GB)
- ... (9 more removed lines; see GitHub link above)
+     function Si(WW) {
+       let {
+         wire: iW,
+         touch: OW = !1
+       } = WW;
+       const {
+         t: mW
+       } = (0, sW.B)(), EW = iW[11], NW = iW[12], PW = NW.findIndex((WW => {
+         let [, iW] = WW;
+         return EW < iW
+       }));
+       return (0, YW.jsxs)("div", {
+         className: "CubeWarfarePerkColumn",
+         children: [(0, YW.jsxs)("div", {
+           className: "CubeWarfarePerkPoints SmallTextBold",
+           children: [(0, YW.jsx)(AW.c, {
+ ... (43 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1454-L1461` → after: `L1106-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1106-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1106-L1115) · [Before (L1454-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1454-L1461)

```diff
-     function qB(BB, OB, GB, YB, DB, QB, oB, yB, PB) {
-       let zB = arguments.length > 10 ? arguments[10] : void 0,
-         lB = arguments.length > 11 ? arguments[11] : void 0,
-         pB = arguments.length > 12 ? arguments[12] : void 0;
-       const qB = jB(BB.context);
-       lB || (lB = qB.createRawShaderProgramInjection ?? JB), pB || (pB = qB.createShaderProgramInjection ?? MB);
-       const ZB = BB;
-       ZB.program = YB ? lB(ZB, OB, GB, ZB.context, PB) : pB(ZB, OB, GB, yB, ZB.context, PB), ZB.program.__SPECTOR_rebuildProgram = oB, zB()
+     function Yi(WW) {
+       const [, iW] = (0, mW.useReducer)((WW => WW + 1), 0);
+       (0, mW.useEffect)((() => {
+         const OW = WW - performance.now();
+         if (0 === WW || OW <= 0) return;
+         const mW = window.setTimeout(iW, OW);
+         return () => {
+           window.clearTimeout(mW)
+         }
+       }), [WW])
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1464-L1465` → after: `L1119-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1119-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1119-L1130) · [Before (L1464-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1464-L1465)

```diff
-     function ZB(BB, OB, GB, YB, QB, oB) {
-       return NB((0, DB.d)(BB, GB, YB), OB, QB, oB)
+     function Ti(WW) {
+       let {
+         store: iW
+       } = WW;
+       const OW = ui(fW(iW, "kill"), 2500),
+         mW = dW();
+       return OW ? (0, YW.jsx)(Hi, {
+         victimName: mW(OW.wire[2]),
+         headshot: OW.wire[4],
+         killsThisLife: OW.wire[5],
+         gold: OW.wire[6]
+       }, OW.seq) : null
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1468-L1476` → after: `L1133-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1133-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1133-L1142) · [Before (L1468-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1468-L1476)

```diff
-     function NB(BB, OB, GB, YB) {
-       const DB = GB.createShader("vertex" === OB ? GB.VERTEX_SHADER : GB.FRAGMENT_SHADER);
-       if (!DB) {
-         let BB, DB = GB.NO_ERROR;
-         for (;
-           (BB = GB.getError()) !== GB.NO_ERROR;) DB = BB;
-         throw new Error(`Something went wrong while creating a gl ${OB} shader object. gl error=${DB}, gl isContextLost=${GB.isContextLost()}, _contextWasLost=${YB}`)
-       }
-       return GB.shaderSource(DB, BB), GB.compileShader(DB), DB
+     function Ji(WW) {
+       let {
+         store: iW
+       } = WW;
+       const OW = ui(fW(iW, "tier"), 3500);
+       return OW ? (0, YW.jsx)(ni, {
+         tier: OW.wire[1],
+         perk: OW.wire[2],
+         icon: OW.wire[3]
+       }, OW.seq) : null
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1479-L1480` → after: `L1145-L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1145-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1145-L1216) · [Before (L1479-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1479-L1480)

```diff
-     function RB(BB, OB) {
-       OB.useProgram(BB)
+     function Hi(WW) {
+       let {
+         victimName: iW,
+         headshot: OW,
+         killsThisLife: mW,
+         gold: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, sW.B)(), PW = yi[Math.min(mW, yi.length - 1)];
+       return (0, YW.jsxs)("div", {
+         className: "CubeWarfareKillPop",
+         children: [PW && (0, YW.jsx)("div", {
+           className: "CubeWarfareMultiKill SmallTextBold",
+           children: NW(PW)
+         }), (0, YW.jsxs)("div", {
+ ... (56 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1484-L1489` → after: `L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1220) · [Before (L1484-L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1484-L1489)

```diff
-       const GB = BB;
-       if (!GB.isParallelCompiled) return void OB(BB);
-       const YB = GB.onCompiled;
-       GB.onCompiled = () => {
-         YB?.(), OB(BB)
-       }
+       return Yi(WW ? WW.at + iW : 0), WW && performance.now() - WW.at < iW ? WW : null
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1491-L1512` → after: `L1222-L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1222-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1222-L1242) · [Before (L1491-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1491-L1512)

```diff
-   },
-   40849: (BB, OB, GB) => {
-     GB.d(OB, {
-       ThinEngine: () => VB
-     });
-     var YB = GB(40857),
-       DB = GB(40878),
-       QB = GB(40905),
-       oB = GB(40918),
-       jB = GB(39366),
-       yB = GB(40870);
-     class JB {
-       constructor() {
-         this.shaderLanguage = 0
-       }
-       postProcessor(BB, OB, GB, YB, DB) {
- ... (6 more removed lines; see GitHub link above)
+     var oi = OW(3332);
+ 
+     function di() {
+       var WW, iW;
+       const OW = null === (WW = (0, oi.e)("currencyAmounts")) || void 0 === WW || null === (iW = WW.gold) || void 0 === iW ? void 0 : iW.amount,
+         [EW, NW] = (0, mW.useState)(0),
+         PW = (0, mW.useRef)(OW);
+       return (0, mW.useEffect)((() => {
+         void 0 !== OW && void 0 !== PW.current && OW > PW.current && NW((WW => WW + 1)), PW.current = OW
+       }), [OW]), void 0 === OW ? null : (0, YW.jsx)(RW.h, {
+         placement: "statBars",
+         children: (0, YW.jsxs)("div", {
+           className: xW()("CubeWarfareWallet SmallTextBold", {
+             Bump: EW > 0
+           }),
+           children: [(0, YW.jsx)(AW.c, {
+ ... (5 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1514-L1540` → after: `L1244-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1244-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1244-L1251) · [Before (L1514-L1540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1514-L1540)

```diff
-     const MB = /(flat\s)?\s*varying\s*.*/;
-     class PB {
-       constructor() {
-         this.shaderLanguage = 0
-       }
-       attributeProcessor(BB) {
-         return BB.replace("attribute", "in")
-       }
-       varyingCheck(BB, OB) {
-         return MB.test(BB)
-       }
-       varyingProcessor(BB, OB) {
-         return BB.replace("varying", OB ? "in" : "out")
-       }
-       postProcessor(BB, OB, GB) {
-         const YB = -1 !== BB.search(/#extension.+GL_EXT_draw_buffers.+require/);
- ... (11 more removed lines; see GitHub link above)
+ 
+     function ei(WW) {
+       let {
+         endsAt: iW
+       } = WW;
+       return 0 === iW ? null : (0, YW.jsx)(gi, {
+         endsAt: iW
+       }, iW)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1542-L1610` → after: `L1253-L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1253-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/281.js#L1253-L1375) · [Before (L1542-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/281.js#L1542-L1610)

```diff
-     var zB = GB(40920),
-       lB = GB(40932),
-       pB = GB(40938),
-       qB = GB(40837),
-       ZB = GB(40883),
-       NB = GB(40868),
-       RB = GB(40947),
-       WB = GB(40914);
-     class AB {}
-     class VB extends QB.d {
-       get name() {
-         return this._name
-       }
-       set name(BB) {
-         this._name = BB
-       }
- ... (53 more removed lines; see GitHub link above)
+ 
+     function vi(WW) {
+       let {
+         endsAt: iW
+       } = WW;
+       return Yi(iW), iW <= performance.now() ? null : (0, YW.jsx)("div", {
+         className: "CubeWarfareProtectionEdge"
+       })
+     }
+ 
+     function gi(WW) {
+       let {
+         endsAt: iW
+       } = WW;
+       const {
+         t: OW
+ ... (107 more added lines; see GitHub link above)
```
