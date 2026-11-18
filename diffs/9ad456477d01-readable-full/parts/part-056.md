# Historical build diff — part 056

- Base: e7e20713782fba2472c7866f1ac5b84e503e7647
- Build: 9ad456477d01ce4e7883eecb0f575724f962561f
- Files in this part: 4

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/wasmReplayVideoExport.js</code> · modified · +98 / -98</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +3 / -3</summary>

```diff
@@ -1,12 +1,12 @@
 export const ⟦2-char-id⟧ = 59;
 export const ids = [53, 59, 85];
 export const modules = {
-  35998: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  35941: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       d: () => ⟦2-char-id⟧,
-      f: () => ⟦2-char-id⟧
+      h: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(17);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(24);
     const ⟦2-char-id⟧ = 1500,
       ⟦2-char-id⟧ = 1⟦2-char-id⟧,
       ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 2 · Change · +4 / -4</summary>

```diff
@@ -95,18 +95,18 @@
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.timeoutMs) && void 0 !== ⟦2-char-id⟧ ? cJ : "Error" === ⟦2-char-id⟧.type ? UJ : ⟦2-char-id⟧;
-      ⟦2-char-id⟧.i.Uf("showBottomMessage", {
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.timeoutMs) && void 0 !== ⟦2-char-id⟧ ? TB : "Error" === ⟦2-char-id⟧.type ? yB : ⟦2-char-id⟧;
+      ⟦2-char-id⟧.h.yH("showBottomMessage", {
         message: ⟦2-char-id⟧.text,
         timeoutLength: ⟦2-char-id⟧,
         type: ⟦2-char-id⟧.type
       })
     }
   },
-  36009: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  35950: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       c: () => ⟦2-char-id⟧,
-      e: () => ⟦2-char-id⟧
+      g: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = "data-replay-ui-active",
       ⟦2-char-id⟧ = [{
```

</details>

<details>
<summary>Hunk 3 · Change · +8 / -8</summary>

```diff
@@ -159,28 +159,28 @@
         label: "Everything else"
       }]
   },
-  36014: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  35959: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧,
+      d: () => ⟦2-char-id⟧,
       e: () => ⟦2-char-id⟧,
-      h: () => ⟦2-char-id⟧
+      g: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(13),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(17),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36009);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(21),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(24),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35950);
 
     function ⟦2-char-id⟧() {
       const ⟦2-char-id⟧ = {};
       for (const {
           group: ⟦2-char-id⟧
         }
-        of ⟦2-char-id⟧.e) ⟦2-char-id⟧[⟦2-char-id⟧] = !0;
+        of ⟦2-char-id⟧.g) ⟦2-char-id⟧[⟦2-char-id⟧] = !0;
       return ⟦2-char-id⟧
     }
     let ⟦2-char-id⟧ = ⟦2-char-id⟧();
 
     function ⟦2-char-id⟧() {
-      ⟦2-char-id⟧.i.Uf("replayViewer|uiVisibilityChanged")
+      ⟦2-char-id⟧.h.yH("replayViewer|uiVisibilityChanged")
     }
 
     function ⟦2-char-id⟧() {
```

</details>

<details>
<summary>Hunk 4 · Change · +8 / -8</summary>

```diff
@@ -202,22 +202,22 @@
       }), ⟦2-char-id⟧()
     }
   },
-  38196: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  38176: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       d: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1620),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1247),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(47),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(926),
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(1612),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1235),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(62),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(933),
       ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(1329),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(80);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(1324),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(95);
     const ⟦2-char-id⟧ = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
       ⟦2-char-id⟧ = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return "webm" === ⟦2-char-id⟧ ? YJ : ⟦2-char-id⟧
+      return "webm" === ⟦2-char-id⟧ ? oB : ⟦2-char-id⟧
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -229,7 +229,7 @@
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return null !== ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧))
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(990);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(980);
     const ⟦2-char-id⟧ = [{
       id: "webm",
       label: "WebM",
```

</details>

<details>
<summary>Hunk 6 · Change · +2 / -2</summary>

```diff
@@ -298,10 +298,10 @@
             children: "Can't export video"
           }), (0, ⟦2-char-id⟧.jsx)("div", {
             className: "PromptPopupNotificationSubtitle SmallTextLight",
-            children: `Your device does not support exporting. Try recording with an external software like ${JJ}.`
+            children: `Your device does not support exporting. Try recording with an external software like ${BB}.`
           }), (0, ⟦2-char-id⟧.jsx)("div", {
             className: "PromptPopupNotificationBody",
-            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.I, {
+            children: (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.K, {
               className: "PromptPopupNotificationBodyButton",
               onClick: () => {
                 ⟦2-char-id⟧.options = null, ⟦2-char-id⟧()
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -373,7 +373,7 @@
           })]
         }), (0, ⟦2-char-id⟧.jsxs)("div", {
           className: "PromptPopupNotificationBody",
-          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.m, {
+          children: [(0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.k, {
             className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
             disabled: !⟦2-char-id⟧,
             onClick: () => {
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -383,7 +383,7 @@
               }, ⟦2-char-id⟧()
             },
             children: "Export"
-          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.I, {
+          }), (0, ⟦2-char-id⟧.jsx)(⟦2-char-id⟧.K, {
             className: "PromptPopupNotificationBodyButton",
             onClick: () => {
               ⟦2-char-id⟧.options = null, ⟦2-char-id⟧()
```

</details>

<details>
<summary>Hunk 9 · Change · +5 / -5</summary>

```diff
@@ -393,19 +393,19 @@
         })]
       })
     }));
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4259),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36009),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36014);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4258),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35950),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35959);
     let ⟦2-char-id⟧ = null;
 
     function ⟦2-char-id⟧() {
       return function() {
-        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.b)();
+        const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.d)();
         for (const {
             group: ⟦2-char-id⟧,
             dataAttr: ⟦2-char-id⟧
           }
-          of ⟦2-char-id⟧.e)
+          of ⟦2-char-id⟧.g)
           if (⟦2-char-id⟧ && ⟦2-char-id⟧[⟦2-char-id⟧]) return !0;
         return !1
       }() ? function() {
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -434,7 +434,7 @@
         return ⟦2-char-id⟧
       }(): ⟦2-char-id⟧().captureStream(Math.max(1, Math.round(⟦2-char-id⟧)))
     }
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38033);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38028);
     let ⟦2-char-id⟧ = !1;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 11 · Change · +1 / -1</summary>

```diff
@@ -484,7 +484,7 @@
         ⟦2-char-id⟧ = !1
       }
       if (!⟦2-char-id⟧) return;
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.startFailure) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? cJ : null;
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.startFailure) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? TB : null;
       if (null !== ⟦2-char-id⟧) return void ⟦2-char-id⟧.NotificationProvider.showAlertPopup({
         title: "Video export failed",
         subtitle: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -494,7 +494,7 @@
         }(⟦2-char-id⟧)) return;
       let ⟦2-char-id⟧ = null;
       try {
-        ⟦2-char-id⟧ = await ⟦2-char-id⟧(⟦2-char-id⟧.includeUi, (() => ⟦2-char-id⟧.canvas()), ⟦2-char-id⟧.Gy)
+        ⟦2-char-id⟧ = await ⟦2-char-id⟧(⟦2-char-id⟧.includeUi, (() => ⟦2-char-id⟧.canvas()), ⟦2-char-id⟧.WU)
       } catch (⟦2-char-id⟧) {
         return console.error("Failed to create video stream for export", ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧), void ⟦2-char-id⟧.NotificationProvider.showAlertPopup({
           title: "Video export failed",
```

</details>

<details>
<summary>Hunk 13 · Change · +1 / -1</summary>

```diff
@@ -507,7 +507,7 @@
         ⟦2-char-id⟧ = null;
       try {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-        ⟦2-char-id⟧ = ⟦2-char-id⟧.playbackSpeed(), ⟦2-char-id⟧.closeViewer(), ⟦2-char-id⟧.setPlaybackSpeed(1), ⟦2-char-id⟧.pause(), ⟦2-char-id⟧.seekToTick(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? AJ : 0);
+        ⟦2-char-id⟧ = ⟦2-char-id⟧.playbackSpeed(), ⟦2-char-id⟧.closeViewer(), ⟦2-char-id⟧.setPlaybackSpeed(1), ⟦2-char-id⟧.pause(), ⟦2-char-id⟧.seekToTick(null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? JB : 0);
         const ⟦2-char-id⟧ = await async function() {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.b.masterGain;
           if (!⟦2-char-id⟧.b.ctx || !⟦2-char-id⟧) return null;
```

</details>

<details>
<summary>Hunk 14 · Change · +2 / -2</summary>

```diff
@@ -515,14 +515,14 @@
           const ⟦2-char-id⟧ = ⟦2-char-id⟧.b.ctx.createMediaStreamDestination();
           ⟦2-char-id⟧.connect(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧;
           const [⟦2-char-id⟧] = ⟦2-char-id⟧.stream.getAudioTracks();
-          return null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? ZJ : null
+          return null !== ⟦2-char-id⟧ && void 0 !== ⟦2-char-id⟧ ? dB : null
         }();
         ⟦2-char-id⟧ = new MediaStream;
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.getVideoTracks()) ⟦2-char-id⟧.addTrack(⟦2-char-id⟧);
         ⟦2-char-id⟧ && ⟦2-char-id⟧.addTrack(⟦2-char-id⟧);
         const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧(⟦2-char-id⟧));
-          if (!⟦2-char-id⟧) throw new Error(`No MediaRecorder mime type available for ${JJ}`);
+          if (!⟦2-char-id⟧) throw new Error(`No MediaRecorder mime type available for ${BB}`);
           return ⟦2-char-id⟧
         }(⟦2-char-id⟧.format);
         ⟦2-char-id⟧ = new MediaRecorder(⟦2-char-id⟧, {
```

</details>

<details>
<summary>Hunk 15 · Change · +5 / -5</summary>

```diff
@@ -565,20 +565,20 @@
           title: "Video export failed",
           subtitle: "The recorder encountered an error. Nothing was saved."
         });
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.playbackFailure) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? EJ : null;
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.playbackFailure) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? tB : null;
         if (null !== ⟦2-char-id⟧) return void ⟦2-char-id⟧.NotificationProvider.showAlertPopup({
           title: "Video export failed",
-          subtitle: `${YJ} Nothing was saved.`
+          subtitle: `${oB} Nothing was saved.`
         });
         const ⟦2-char-id⟧ = new Blob(⟦2-char-id⟧, {
           type: ⟦2-char-id⟧
         });
-        ⟦2-char-id⟧.size > 0 ? (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+        ⟦2-char-id⟧.size > 0 ? (0, ⟦2-char-id⟧.c)(⟦2-char-id⟧, function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
             return "mp4" === ⟦2-char-id⟧ ? "mp4" : "webm"
           }(⟦2-char-id⟧);
-          if (⟦2-char-id⟧) return `${JJ.replace(/\.bloxdreplay$/i,"")}.${ZJ}`;
-          return `bloxd-replay-${Date.now()}.${ZJ}`
+          if (⟦2-char-id⟧) return `${BB.replace(/\.bloxdreplay$/i,"")}.${dB}`;
+          return `bloxd-replay-${Date.now()}.${dB}`
         }(⟦2-char-id⟧.fileName(), ⟦2-char-id⟧.format)) : ⟦2-char-id⟧.NotificationProvider.showAlertPopup({
           title: "Video export failed",
           subtitle: "No video data was captured. Try again."
```

</details>

<details>
<summary>Hunk 16 · Change · +2 / -2</summary>

```diff
@@ -611,13 +611,13 @@
       }
     }
   },
-  4259: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  4258: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       Howl: () => ⟦2-char-id⟧.Howl,
       b: () => ⟦2-char-id⟧.Howler,
       readyAudioContext: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4267);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(4262);
 
     function ⟦2-char-id⟧() {
       const ⟦2-char-id⟧ = ⟦2-char-id⟧.Howler;
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -626,7 +626,7 @@
     }
     ⟦2-char-id⟧.Howler._mobileUnloaded = !0
   },
-  41240: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  41274: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       b: () => ⟦2-char-id⟧,
       d: () => ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 18 · Change · +7 / -7</summary>

```diff
@@ -638,21 +638,21 @@
       return BigInt(⟦2-char-id⟧[1]) << 32n | BigInt(⟦2-char-id⟧[0])
     }
   },
-  41272: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  41304: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       HOLD_TIMEOUT_MS: () => ⟦2-char-id⟧,
       ReplayViewer: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35998),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(36014),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4189),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(41240);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(35941),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(35959),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4186),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(41274);
     const ⟦2-char-id⟧ = 1⟦2-char-id⟧,
-      ⟦2-char-id⟧ = new Set(["Jn"]);
+      ⟦2-char-id⟧ = new Set(["pD"]);
     class ⟦2-char-id⟧ {
       constructor(⟦2-char-id⟧) {
         var ⟦2-char-id⟧;
-        this.deps = ⟦2-char-id⟧, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.now) && void 0 !== ⟦2-char-id⟧ ? cJ : () => performance.now()
+        this.deps = ⟦2-char-id⟧, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.now) && void 0 !== ⟦2-char-id⟧ ? TB : () => performance.now()
       }
       get inPlayback() {
         return this.playback
```

</details>

<details>
<summary>Hunk 19 · Change · +1 / -1</summary>

```diff
@@ -661,7 +661,7 @@
         return this.lastView
       }
       get isOpen() {
-        return null !== this.lastView && this.lastView.state !== ⟦2-char-id⟧.cd.None
+        return null !== this.lastView && this.lastView.state !== ⟦2-char-id⟧.hd.None
       }
       get keyframes() {
         return this.deps.client.keyframes()
```

</details>

<details>
<summary>Hunk 20 · Change · +4 / -4</summary>

```diff
@@ -703,18 +703,18 @@
               case "reloading":
                 return null;
               case "stopped":
-              case ⟦2-char-id⟧.Sc.ModuleTrap:
+              case ⟦2-char-id⟧.Wc.ModuleTrap:
                 return ⟦2-char-id⟧.d.coreStopped;
-              case ⟦2-char-id⟧.Sc.ModuleLoad:
+              case ⟦2-char-id⟧.Wc.ModuleLoad:
                 return ⟦2-char-id⟧.d.viewerLoadFailed;
-              case ⟦2-char-id⟧.Sc.TooLarge:
+              case ⟦2-char-id⟧.Wc.TooLarge:
                 return ⟦2-char-id⟧.d.cantOpen
             }
           }(⟦2-char-id⟧);
           if (null === ⟦2-char-id⟧) return;
           throw new Error(⟦2-char-id⟧.text)
         }
-        return this.rejectSave(new Error(⟦2-char-id⟧.d.saveClosed.text)), this.fileName = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.fileName) && void 0 !== ⟦2-char-id⟧ ? UJ : null === (⟦2-char-id⟧ = ⟦2-char-id⟧.fileHandle) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? ZJ : null, this.fileHandle = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.fileHandle) && void 0 !== ⟦2-char-id⟧ ? AJ : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        return this.rejectSave(new Error(⟦2-char-id⟧.d.saveClosed.text)), this.fileName = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.fileName) && void 0 !== ⟦2-char-id⟧ ? yB : null === (⟦2-char-id⟧ = ⟦2-char-id⟧.fileHandle) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? dB : null, this.fileHandle = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.fileHandle) && void 0 !== ⟦2-char-id⟧ ? JB : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           this.pendingOpen = {
             resolve: ⟦2-char-id⟧,
             reject: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 21 · Change · +3 / -3</summary>

```diff
@@ -722,18 +722,18 @@
         }))
       }
       play() {
-        this.holds.has("Jn") || this.deps.client.play()
+        this.holds.has("pD") || this.deps.client.play()
       }
       pause() {
         this.deps.client.pause()
       }
       holdForShaderPackFailure() {
-        this.isOpen && this.pause(), this.hold("Jn")
+        this.isOpen && this.pause(), this.hold("pD")
       }
       seek(⟦2-char-id⟧) {
         let ⟦2-char-id⟧ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
         const ⟦2-char-id⟧ = this.lastView;
-        null !== ⟦2-char-id⟧ && (⟦2-char-id⟧ || ⟦2-char-id⟧ < ⟦2-char-id⟧.Hh) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(⟦2-char-id⟧, ⟦2-char-id⟧)
+        null !== ⟦2-char-id⟧ && (⟦2-char-id⟧ || ⟦2-char-id⟧ < ⟦2-char-id⟧.dL) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(⟦2-char-id⟧, ⟦2-char-id⟧)
       }
       setSpeed(⟦2-char-id⟧) {
         this.deps.client.setSpeed(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -743,7 +743,7 @@
       }
       cycleCameraMode() {
         const ⟦2-char-id⟧ = this.lastView;
-        null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.state !== ⟦2-char-id⟧.cd.None && this.setCameraMode(⟦2-char-id⟧.b[(⟦2-char-id⟧.b.indexOf(⟦2-char-id⟧.cameraMode) + 1) % ⟦2-char-id⟧.b.length])
+        null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.state !== ⟦2-char-id⟧.hd.None && this.setCameraMode(⟦2-char-id⟧.b[(⟦2-char-id⟧.b.indexOf(⟦2-char-id⟧.cameraMode) + 1) % ⟦2-char-id⟧.b.length])
       }
       addKeyframe() {
         this.edited(this.deps.client.addKeyframe())
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -772,7 +772,7 @@
           this.pendingSave = ⟦2-char-id⟧, this.editsAtSave = this.edits, this.deps.client.save((0, ⟦2-char-id⟧.d)()).then((⟦2-char-id⟧ => {
             this.pendingSave === ⟦2-char-id⟧ && this.saveStarted(⟦2-char-id⟧)
           }), (⟦2-char-id⟧ => {
-            this.pendingSave === ⟦2-char-id⟧ && this.rejectSave(⟦2-char-id⟧ instanceof Error ? JJ : new Error(String(⟦2-char-id⟧)))
+            this.pendingSave === ⟦2-char-id⟧ && this.rejectSave(⟦2-char-id⟧ instanceof Error ? BB : new Error(String(⟦2-char-id⟧)))
           }))
         }))
       }
```

</details>

<details>
<summary>Hunk 24 · Change · +1 / -1</summary>

```diff
@@ -790,7 +790,7 @@
       }
       markSaved(⟦2-char-id⟧, ⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧;
-        this.fileHandle = ⟦2-char-id⟧, this.fileName = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? FJ : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? ZJ : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
+        this.fileHandle = ⟦2-char-id⟧, this.fileName = null !== (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.name) && void 0 !== ⟦2-char-id⟧ ? VB : ⟦2-char-id⟧) && void 0 !== ⟦2-char-id⟧ ? dB : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
       }
       end() {
         this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(⟦2-char-id⟧.d.coreStopped.text)), this.rejectSave(new Error(⟦2-char-id⟧.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
```

</details>

<details>
<summary>Hunk 25 · Change · +2 / -2</summary>

```diff
@@ -799,8 +799,8 @@
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = this.deps.client.view(),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ !== this.lastView;
-        this.lastView = ⟦2-char-id⟧, this.opening && null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.state !== ⟦2-char-id⟧.cd.None && ⟦2-char-id⟧.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, ⟦2-char-id⟧.e)()), this.cropAsked ? (this.cropAsked = !1, null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.state === ⟦2-char-id⟧.cd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.state !== ⟦2-char-id⟧.cd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
-        const ⟦2-char-id⟧ = 0 === this.settleFrames && 0 === (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (⟦2-char-id⟧ = this.deps).meshPending) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? JJ : 0);
+        this.lastView = ⟦2-char-id⟧, this.opening && null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.state !== ⟦2-char-id⟧.hd.None && ⟦2-char-id⟧.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, ⟦2-char-id⟧.e)()), this.cropAsked ? (this.cropAsked = !1, null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.state === ⟦2-char-id⟧.hd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.state !== ⟦2-char-id⟧.hd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
+        const ⟦2-char-id⟧ = 0 === this.settleFrames && 0 === (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = (⟦2-char-id⟧ = this.deps).meshPending) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.call(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? BB : 0);
         this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && ⟦2-char-id⟧ && this.release("opening"), this.holds.has("seek") && ⟦2-char-id⟧ && this.release("seek"), this.holds.has("crop") && !this.cropRunning && ⟦2-char-id⟧ && this.release("crop");
         const ⟦2-char-id⟧ = this.now();
         for (const [⟦2-char-id⟧, ⟦2-char-id⟧] of this.holds) !⟦2-char-id⟧.has(⟦2-char-id⟧) && ⟦2-char-id⟧ - ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (this.release(⟦2-char-id⟧), "opening" === ⟦2-char-id⟧ && (this.opening = !1, this.settleOpen(null)));
```

</details>

<details>
<summary>Hunk 26 · Change · +5 / -5</summary>

```diff
@@ -811,14 +811,14 @@
       }
       onFailed(⟦2-char-id⟧) {
         switch (⟦2-char-id⟧.reason) {
-          case ⟦2-char-id⟧.Sc.TooLarge:
+          case ⟦2-char-id⟧.Wc.TooLarge:
             break;
-          case ⟦2-char-id⟧.Sc.Open:
-          case ⟦2-char-id⟧.Sc.NothingStaged:
+          case ⟦2-char-id⟧.Wc.Open:
+          case ⟦2-char-id⟧.Wc.NothingStaged:
             this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(⟦2-char-id⟧.d.cantOpen), this.settleOpen(new Error(⟦2-char-id⟧.d.cantOpen.text));
             break;
-          case ⟦2-char-id⟧.Sc.Crop:
-            if (⟦2-char-id⟧.code === ⟦2-char-id⟧.Oc.Busy) {
+          case ⟦2-char-id⟧.Wc.Crop:
+            if (⟦2-char-id⟧.code === ⟦2-char-id⟧.Tc.Busy) {
               this.cropBusy();
               break
             }
```

</details>

<details>
<summary>Hunk 27 · Change · +6 / -6</summary>

```diff
@@ -828,16 +828,16 @@
             }
             this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(⟦2-char-id⟧.d.cropFailed);
             break;
-          case ⟦2-char-id⟧.Sc.ModuleTrap:
-          case ⟦2-char-id⟧.Sc.ModuleLoad:
-          case ⟦2-char-id⟧.Sc.Port:
-            this.moduleEnded(⟦2-char-id⟧.reason === ⟦2-char-id⟧.Sc.ModuleTrap ? ⟦2-char-id⟧.d.coreStopped : ⟦2-char-id⟧.d.cantOpen);
+          case ⟦2-char-id⟧.Wc.ModuleTrap:
+          case ⟦2-char-id⟧.Wc.ModuleLoad:
+          case ⟦2-char-id⟧.Wc.Port:
+            this.moduleEnded(⟦2-char-id⟧.reason === ⟦2-char-id⟧.Wc.ModuleTrap ? ⟦2-char-id⟧.d.coreStopped : ⟦2-char-id⟧.d.cantOpen);
             break;
-          case ⟦2-char-id⟧.Sc.NotLive:
+          case ⟦2-char-id⟧.Wc.NotLive:
             console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
             break;
           default:
-            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${JJ.reason})`), this.seekAsked = !1, this.release("seek")
+            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${BB.reason})`), this.seekAsked = !1, this.release("seek")
         }
         this.deps.onChange()
       }
```

</details>

<details>
<summary>Hunk 28 · Change · +17 / -17</summary>

```diff
@@ -880,59 +880,59 @@
       }
     }
   },
-  41265: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  41299: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       MESH_TAIL_MS: () => ⟦2-char-id⟧,
       PLAY_START_TIMEOUT_MS: () => ⟦2-char-id⟧,
       startWasmReplayVideoExport: () => ⟦2-char-id⟧
     });
-    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38196),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(41272),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(4189),
-      ⟦2-char-id⟧ = ⟦2-char-id⟧(2161);
+    var ⟦2-char-id⟧ = ⟦2-char-id⟧(38176),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(41304),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(4186),
+      ⟦2-char-id⟧ = ⟦2-char-id⟧(2117);
     const ⟦2-char-id⟧ = ⟦2-char-id⟧.HOLD_TIMEOUT_MS + 5⟦2-char-id⟧,
       ⟦2-char-id⟧ = 50,
       ⟦2-char-id⟧ = 200;
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       var ⟦2-char-id⟧;
-      return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.state) === ⟦2-char-id⟧.cd.Cropping || ⟦2-char-id⟧.hj.includes("crop")
+      return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.state) === ⟦2-char-id⟧.hd.Cropping || ⟦2-char-id⟧.Dg.includes("crop")
     }
 
     function ⟦2-char-id⟧(⟦2-char-id⟧) {
       return (0, ⟦2-char-id⟧.d)((() => function(⟦2-char-id⟧) {
         var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.viewer(),
-          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.view) && void 0 !== ⟦2-char-id⟧ ? cJ : null,
+          ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.view) && void 0 !== ⟦2-char-id⟧ ? TB : null,
           ⟦2-char-id⟧ = ⟦2-char-id⟧.canvas();
-        if (!⟦2-char-id⟧ || !⟦2-char-id⟧ || ⟦2-char-id⟧.state === ⟦2-char-id⟧.cd.None || 0 === ⟦2-char-id⟧.totalTicks || !⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)) return null;
-        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.now) && void 0 !== ⟦2-char-id⟧ ? ZJ : () => performance.now(),
+        if (!⟦2-char-id⟧ || !⟦2-char-id⟧ || ⟦2-char-id⟧.state === ⟦2-char-id⟧.hd.None || 0 === ⟦2-char-id⟧.totalTicks || !⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧)) return null;
+        const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.now) && void 0 !== ⟦2-char-id⟧ ? dB : () => performance.now(),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.id,
           ⟦2-char-id⟧ = () => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.viewer();
-            return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧.id === ⟦2-char-id⟧ && ⟦2-char-id⟧.isOpen ? cJ : null
-          },
-          ⟦2-char-id⟧ = Math.min(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.mark) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.outTick) && void 0 !== ⟦2-char-id⟧ ? FJ : 1 / 0, ⟦2-char-id⟧.totalTicks - 1);
+            return ⟦2-char-id⟧ === ⟦2-char-id⟧ && ⟦2-char-id⟧.id === ⟦2-char-id⟧ && ⟦2-char-id⟧.isOpen ? TB : null
+          },
+          ⟦2-char-id⟧ = Math.min(null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.mark) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.outTick) && void 0 !== ⟦2-char-id⟧ ? VB : 1 / 0, ⟦2-char-id⟧.totalTicks - 1);
         let ⟦2-char-id⟧ = null,
           ⟦2-char-id⟧ = !1;
         const ⟦2-char-id⟧ = () => {
           var ⟦2-char-id⟧, ⟦2-char-id⟧;
-          return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧()) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.state) === ⟦2-char-id⟧.cd.Playing
+          return (null === (⟦2-char-id⟧ = ⟦2-char-id⟧()) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.state) === ⟦2-char-id⟧.hd.Playing
         };
         return {
-          Gy: ⟦2-char-id⟧.rd,
-          playbackMarkInTick: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.mark) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.inTick) && void 0 !== ⟦2-char-id⟧ ? hJ : null,
+          WU: ⟦2-char-id⟧.ud,
+          playbackMarkInTick: null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.mark) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.inTick) && void 0 !== ⟦2-char-id⟧ ? kB : null,
           startFailure: () => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧();
             return null === ⟦2-char-id⟧ ? "Another replay opened. Export it again from there." : ⟦2-char-id⟧(⟦2-char-id⟧) ? "Wait for the crop to finish, then export again." : null
           },
           fileName: () => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
-            return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.fileName) && void 0 !== ⟦2-char-id⟧ ? JJ : null
+            return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧()) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.fileName) && void 0 !== ⟦2-char-id⟧ ? BB : null
           },
           playbackSpeed: () => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-            return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧()) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.speed) && void 0 !== ⟦2-char-id⟧ ? JJ : 1
+            return null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧()) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.speed) && void 0 !== ⟦2-char-id⟧ ? BB : 1
           },
           setPlaybackSpeed: ⟦2-char-id⟧ => {
             var ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 29 · Change · +2 / -2</summary>

```diff
@@ -953,12 +953,12 @@
           seekSettled: () => new Promise((⟦2-char-id⟧ => {
             const ⟦2-char-id⟧ = setInterval((() => {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧();
-              null === ⟦2-char-id⟧ ? (clearInterval(⟦2-char-id⟧), ⟦2-char-id⟧()) : ⟦2-char-id⟧.hj.includes("seek") || (clearInterval(⟦2-char-id⟧), setTimeout(⟦2-char-id⟧, ⟦2-char-id⟧))
+              null === ⟦2-char-id⟧ ? (clearInterval(⟦2-char-id⟧), ⟦2-char-id⟧()) : ⟦2-char-id⟧.Dg.includes("seek") || (clearInterval(⟦2-char-id⟧), setTimeout(⟦2-char-id⟧, ⟦2-char-id⟧))
             }), ⟦2-char-id⟧)
           })),
           isPlaying: () => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-            return null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧() && (!!⟦2-char-id⟧() || !⟦2-char-id⟧ && (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧()) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Hh) && void 0 !== ⟦2-char-id⟧ ? JJ : 0) < ⟦2-char-id⟧ && ⟦2-char-id⟧() - ⟦2-char-id⟧ < ⟦2-char-id⟧)
+            return null !== ⟦2-char-id⟧ && null !== ⟦2-char-id⟧() && (!!⟦2-char-id⟧() || !⟦2-char-id⟧ && (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧()) || void 0 === ⟦2-char-id⟧ || null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dL) && void 0 !== ⟦2-char-id⟧ ? BB : 0) < ⟦2-char-id⟧ && ⟦2-char-id⟧() - ⟦2-char-id⟧ < ⟦2-char-id⟧)
           },
           watchPlayback: ⟦2-char-id⟧ => {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.watchViewer((() => {
```

</details>

<details>
<summary>Hunk 30 · Change · +1 / -1</summary>

```diff
@@ -972,7 +972,7 @@
           playbackFailure: () => {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧();
-            return null === ⟦2-char-id⟧ ? "The replay closed before the video finished." : (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Hh) && void 0 !== ⟦2-char-id⟧ ? JJ : 0) >= ⟦2-char-id⟧ ? null : ⟦2-char-id⟧ ? "The replay stopped before the video finished." : "The replay didn't start playing."
+            return null === ⟦2-char-id⟧ ? "The replay closed before the video finished." : (null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.view) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.dL) && void 0 !== ⟦2-char-id⟧ ? BB : 0) >= ⟦2-char-id⟧ ? null : ⟦2-char-id⟧ ? "The replay stopped before the video finished." : "The replay didn't start playing."
           },
           canvas: () => ⟦2-char-id⟧,
           closeViewer: () => {
```

</details>

</details>

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/wasmZstdDecoder.js</code> · modified · +9 / -9</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +1 / -1</summary>

```diff
@@ -1,7 +1,7 @@
 export const ⟦2-char-id⟧ = 60;
 export const ids = [60];
 export const modules = {
-  39858: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  39813: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       ZstdErrorCode: () => ⟦2-char-id⟧,
       ZstdFrameDecoder: () => ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -55,7 +55,7 @@
           const ⟦2-char-id⟧ = 3 == ⟦2-char-id⟧ ? 4 : ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
           ⟦2-char-id⟧ += ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 1 << qJ : ⟦2-char-id⟧,
+          const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 1 << YB : ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) + (1 == ⟦2-char-id⟧ && 256);
           let ⟦2-char-id⟧ = ⟦2-char-id⟧;
           if (!⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -63,13 +63,13 @@
             ⟦2-char-id⟧ = ⟦2-char-id⟧ + (⟦2-char-id⟧ >> 3) * (7 & ⟦2-char-id⟧[5])
           }
           ⟦2-char-id⟧ > 2145386496 && ⟦2-char-id⟧(1);
-          const ⟦2-char-id⟧ = new ⟦2-char-id⟧((1 == ⟦2-char-id⟧ ? ⟦2-char-id⟧ || fJ : ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧) + 12);
+          const ⟦2-char-id⟧ = new ⟦2-char-id⟧((1 == ⟦2-char-id⟧ ? ⟦2-char-id⟧ || HB : ⟦2-char-id⟧ ? 0 : ⟦2-char-id⟧) + 12);
           return ⟦2-char-id⟧[0] = 1, ⟦2-char-id⟧[4] = 4, ⟦2-char-id⟧[8] = 8, {
             b: ⟦2-char-id⟧ + ⟦2-char-id⟧,
             y: 0,
             l: 0,
             d: ⟦2-char-id⟧,
-            w: ⟦2-char-id⟧ && 1 != ⟦2-char-id⟧ ? cJ : ⟦2-char-id⟧.subarray(12),
+            w: ⟦2-char-id⟧ && 1 != ⟦2-char-id⟧ ? TB : ⟦2-char-id⟧.subarray(12),
             e: ⟦2-char-id⟧,
             o: new ⟦2-char-id⟧(⟦2-char-id⟧.buffer, 0, 3),
             u: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 4 · Change · +1 / -1</summary>

```diff
@@ -269,7 +269,7 @@
                 })(⟦2-char-id⟧, ⟦2-char-id⟧);
                 ⟦2-char-id⟧ += ⟦2-char-id⟧ - (⟦2-char-id⟧ = ⟦2-char-id⟧[0]), ⟦2-char-id⟧.h = ⟦2-char-id⟧ = ⟦2-char-id⟧[1]
               } else ⟦2-char-id⟧ || ⟦2-char-id⟧(0);
-              (⟦2-char-id⟧ ? SJ : ⟦2-char-id⟧)(⟦2-char-id⟧.subarray(⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧), ⟦2-char-id⟧.subarray(⟦2-char-id⟧), ⟦2-char-id⟧)
+              (⟦2-char-id⟧ ? zB : ⟦2-char-id⟧)(⟦2-char-id⟧.subarray(⟦2-char-id⟧, ⟦2-char-id⟧ += ⟦2-char-id⟧), ⟦2-char-id⟧.subarray(⟦2-char-id⟧), ⟦2-char-id⟧)
             }
             let ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧++];
             if (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 5 · Change · +1 / -1</summary>

```diff
@@ -334,7 +334,7 @@
               if (⟦2-char-id⟧ != ⟦2-char-id⟧)
                 for (; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) ⟦2-char-id⟧[⟦2-char-id⟧++] = ⟦2-char-id⟧[⟦2-char-id⟧++];
               else ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
-              ⟦2-char-id⟧ ? ⟦2-char-id⟧.y += SJ : ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, 0, ⟦2-char-id⟧)
+              ⟦2-char-id⟧ ? ⟦2-char-id⟧.y += zB : ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, 0, ⟦2-char-id⟧)
             } else if (⟦2-char-id⟧) {
               if (⟦2-char-id⟧.y += ⟦2-char-id⟧, ⟦2-char-id⟧)
                 for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[⟦2-char-id⟧ + ⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 6 · Change · +1 / -1</summary>

```diff
@@ -358,7 +358,7 @@
       }
       push(⟦2-char-id⟧) {
         if (this.done) return;
-        if (this.parts.push(⟦2-char-id⟧), this.hj += ⟦2-char-id⟧.length, this.hj < this.needed) return;
+        if (this.parts.push(⟦2-char-id⟧), this.Dg += ⟦2-char-id⟧.length, this.Dg < this.needed) return;
         const ⟦2-char-id⟧ = ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
           if (1 == ⟦2-char-id⟧.length) return ⟦2-char-id⟧[0];
           const ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 7 · Change · +1 / -1</summary>

```diff
@@ -367,7 +367,7 @@
             ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧.length
           }
           return ⟦2-char-id⟧
-        })(this.parts, this.hj);
+        })(this.parts, this.Dg);
         let ⟦2-char-id⟧ = this.st;
         if (!⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, new ⟦2-char-id⟧(0));
```

</details>

<details>
<summary>Hunk 8 · Change · +1 / -1</summary>

```diff
@@ -396,7 +396,7 @@
         }
         this.decoded = ⟦2-char-id⟧.y;
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.subarray(⟦2-char-id⟧.b);
-        this.parts = ⟦2-char-id⟧.length ? [⟦2-char-id⟧] : [], this.hj = ⟦2-char-id⟧.length, ⟦2-char-id⟧.b = 0
+        this.parts = ⟦2-char-id⟧.length ? [⟦2-char-id⟧] : [], this.Dg = ⟦2-char-id⟧.length, ⟦2-char-id⟧.b = 0
       }
     }
   }
```

</details>

</details>

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/worldgenWorker.js</code> · modified · +1638 / -1632</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +2 / -2</summary>

```diff
@@ -1,7 +1,7 @@
-/*! For license information please see symm5.worldgenWorker.5af74a0b.chunk.js.LICENSE.txt */
+/*! For license information please see l9xvfg.worldgenWorker.1354fadd.chunk.js.LICENSE.txt */
 (() => {
   var ⟦2-char-id⟧ = {
-      1544: ⟦2-char-id⟧ => {
+      1521: ⟦2-char-id⟧ => {
         const ⟦2-char-id⟧ = "object" === typeof performance && performance && "function" === typeof performance.now ? performance : Date,
           ⟦2-char-id⟧ = () => ⟦2-char-id⟧.now(),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧ === 1 / 0 || (⟦2-char-id⟧ => ⟦2-char-id⟧ && ⟦2-char-id⟧ === Math.floor(⟦2-char-id⟧) && ⟦2-char-id⟧ > 0 && isFinite(⟦2-char-id⟧))(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -79,7 +79,7 @@
           }
           getRemainingTTL(⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.expirationMap.get(⟦2-char-id⟧);
-            return ⟦2-char-id⟧ === 1 / 0 ? cJ : void 0 !== ⟦2-char-id⟧ ? Math.max(0, Math.ceil(⟦2-char-id⟧ - ⟦2-char-id⟧())) : 0
+            return ⟦2-char-id⟧ === 1 / 0 ? TB : void 0 !== ⟦2-char-id⟧ ? Math.max(0, Math.ceil(⟦2-char-id⟧ - ⟦2-char-id⟧())) : 0
           }
           get(⟦2-char-id⟧) {
             let {
```

</details>

<details>
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -148,13 +148,13 @@
         }
         ⟦2-char-id⟧.exports = ⟦2-char-id⟧
       },
-      36698: ⟦2-char-id⟧ => {
+      36631: ⟦2-char-id⟧ => {
         ⟦2-char-id⟧.exports = function(⟦2-char-id⟧) {
           for (var ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ++⟦2-char-id⟧) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧;
           return ⟦2-char-id⟧
         }
       },
-      36700: ⟦2-char-id⟧ => {
+      36636: ⟦2-char-id⟧ => {
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           return !!⟦2-char-id⟧.constructor && "function" === typeof ⟦2-char-id⟧.constructor.isBuffer && ⟦2-char-id⟧.constructor.isBuffer(⟦2-char-id⟧)
         }
```

</details>

<details>
<summary>Hunk 4 · Change · +5 / -5</summary>

```diff
@@ -164,20 +164,20 @@
           }(⟦2-char-id⟧) || !!⟦2-char-id⟧._isBuffer)
         }
       },
-      59613: ⟦2-char-id⟧ => {
+      59909: ⟦2-char-id⟧ => {
         ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           ⟦2-char-id⟧ = ⟦2-char-id⟧ || 2;
           for (var ⟦2-char-id⟧ = 2 * (⟦2-char-id⟧ = ⟦2-char-id⟧ || 1) + 1, ⟦2-char-id⟧ = Math.pow(⟦2-char-id⟧, ⟦2-char-id⟧) - 1, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
-            for (var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧ / 2 ? eJ : ⟦2-char-id⟧ + 1, ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) {
+            for (var ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧] = new Array(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧ < ⟦2-char-id⟧ / 2 ? pB : ⟦2-char-id⟧ + 1, ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) {
               var ⟦2-char-id⟧ = ⟦2-char-id⟧ % Math.pow(⟦2-char-id⟧, ⟦2-char-id⟧);
               ⟦2-char-id⟧[⟦2-char-id⟧ - 1] = ⟦2-char-id⟧ / Math.pow(⟦2-char-id⟧, ⟦2-char-id⟧ - 1) - ⟦2-char-id⟧, ⟦2-char-id⟧ -= ⟦2-char-id⟧
             }
           return ⟦2-char-id⟧
         }
       },
-      36692: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(36698),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(36700),
+      36627: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(36631),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(36636),
           ⟦2-char-id⟧ = "undefined" !== typeof Float64Array;
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 5 · Change · +4 / -4</summary>

```diff
@@ -322,10 +322,10 @@
           return (0, ⟦2-char-id⟧[⟦2-char-id⟧ + 1])(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
         }
       },
-      59592: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59601).integer,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59607),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59610);
+      59891: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59894).integer,
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59900),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59902);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
           for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧ += Math.pow(⟦2-char-id⟧[⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧], 2);
```

</details>

<details>
<summary>Hunk 6 · Change · +4 / -4</summary>

```diff
@@ -389,10 +389,10 @@
           this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
         }, ⟦2-char-id⟧.exports = ⟦2-char-id⟧
       },
-      59616: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59601).array,
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59607),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59610);
+      59918: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59894).array,
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59900),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59902);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
           for (var ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) ⟦2-char-id⟧ += Math.pow(⟦2-char-id⟧[⟦2-char-id⟧] - ⟦2-char-id⟧[⟦2-char-id⟧], 2);
```

</details>

<details>
<summary>Hunk 7 · Change · +2 / -2</summary>

```diff
@@ -475,8 +475,8 @@
           this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
         }, ⟦2-char-id⟧.exports = ⟦2-char-id⟧
       },
-      59610: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59613);
+      59902: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59909);
         var ⟦2-char-id⟧ = {};
         ⟦2-char-id⟧.exports = function(⟦2-char-id⟧) {
           return ⟦2-char-id⟧[⟦2-char-id⟧] || (⟦2-char-id⟧[⟦2-char-id⟧] = function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 8 · Change · +3 / -3</summary>

```diff
@@ -495,9 +495,9 @@
           }(⟦2-char-id⟧)), ⟦2-char-id⟧[⟦2-char-id⟧]
         }
       },
-      59583: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59592),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59616);
+      59889: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59891),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59918);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
           this.shape = ⟦2-char-id⟧.shape, "function" === typeof ⟦2-char-id⟧.distanceFunction ? this.implementation = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) : this.implementation = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 9 · Change · +1 / -1</summary>

```diff
@@ -518,7 +518,7 @@
           this.implementation.reset()
         }, ⟦2-char-id⟧.exports = ⟦2-char-id⟧
       },
-      59607: ⟦2-char-id⟧ => {
+      59900: ⟦2-char-id⟧ => {
         ⟦2-char-id⟧.exports = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧),
             ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / 2) << 1,
```

</details>

<details>
<summary>Hunk 10 · Change · +1 / -1</summary>

```diff
@@ -532,7 +532,7 @@
           return ⟦2-char-id⟧
         }
       },
-      59601: ⟦2-char-id⟧ => {
+      59894: ⟦2-char-id⟧ => {
         ⟦2-char-id⟧.exports = {
           integer: function(⟦2-char-id⟧) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.length,
```

</details>

<details>
<summary>Hunk 11 · Change · +2 / -2</summary>

```diff
@@ -558,8 +558,8 @@
           }
         }
       },
-      36711: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(36715);
+      36649: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(36656);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           for (var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = 0, ⟦2-char-id⟧ = ⟦2-char-id⟧.length, ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length;) {
```

</details>

<details>
<summary>Hunk 12 · Change · +1 / -1</summary>

```diff
@@ -591,7 +591,7 @@
           return ⟦2-char-id⟧
         }
       },
-      36715: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      36656: (⟦2-char-id⟧, ⟦2-char-id⟧) => {
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           var ⟦2-char-id⟧ = 32;
           return (⟦2-char-id⟧ &= -⟦2-char-id⟧) && ⟦2-char-id⟧--, 65535 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 16), 16711935 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 8), 252645135 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 4), 858993459 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 2), 1431655765 & ⟦2-char-id⟧ && (⟦2-char-id⟧ -= 1), ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 13 · Change · +5 / -5</summary>

```diff
@@ -645,13 +645,13 @@
           return ⟦2-char-id⟧ + 1 | (~⟦2-char-id⟧ & -~⟦2-char-id⟧) - 1 >>> ⟦2-char-id⟧(⟦2-char-id⟧) + 1
         }
       },
-      59523: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59835: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          e: () => ⟦2-char-id⟧
+          d: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59549),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59540),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59622);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59859),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59848),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59927);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = 2166136261;
```

</details>

<details>
<summary>Hunk 14 · Change · +1 / -1</summary>

```diff
@@ -660,7 +660,7 @@
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
-          return ⟦2-char-id⟧(`${JJ}Wasteland`)
+          return ⟦2-char-id⟧(`${BB}Wasteland`)
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 15 · Change · +4 / -4</summary>

```diff
@@ -695,10 +695,10 @@
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          return 36 * (1 === ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧) + 2 + Math.floor(32 * ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ ^ ⟦2-char-id⟧ ^ ⟦2-char-id⟧))
-        }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59532),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59543);
+          return 36 * (1 === ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧) + 2 + Math.floor(32 * ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ ^ ⟦2-char-id⟧ ^ ⟦2-char-id⟧))
+        }
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59843),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59857);
         const ⟦2-char-id⟧ = 160,
           ⟦2-char-id⟧ = 10,
           ⟦2-char-id⟧ = 3 * (Math.ceil(50 / 6) + 1) + 2 + ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 16 · Change · +1 / -1</summary>

```diff
@@ -725,7 +725,7 @@
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
           ! function(⟦2-char-id⟧) {
-            ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧))
+            ⟦2-char-id⟧ !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.e)(⟦2-char-id⟧), ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧))
           }(⟦2-char-id⟧);
           const ⟦2-char-id⟧ = 625341585 ^ ⟦2-char-id⟧,
             ⟦2-char-id⟧ = ⟦2-char-id⟧ - 2 * ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 17 · Change · +1 / -1</summary>

```diff
@@ -774,7 +774,7 @@
               if (0 === ⟦2-char-id⟧ && 0 === ⟦2-char-id⟧) return 0;
               const ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧) / Math.max(⟦2-char-id⟧, ⟦2-char-id⟧);
               let ⟦2-char-id⟧ = ⟦2-char-id⟧ * (Math.PI / 4 + .273 * (1 - ⟦2-char-id⟧)) / (2 * Math.PI);
-              return ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = .25 - ⟦2-char-id⟧), ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = .5 - ⟦2-char-id⟧), ⟦2-char-id⟧ < 0 ? 1 - eJ : ⟦2-char-id⟧
+              return ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = .25 - ⟦2-char-id⟧), ⟦2-char-id⟧ < 0 && (⟦2-char-id⟧ = .5 - ⟦2-char-id⟧), ⟦2-char-id⟧ < 0 ? 1 - pB : ⟦2-char-id⟧
             }(⟦2-char-id⟧, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = (⟦2-char-id⟧.radius - ⟦2-char-id⟧) / 3 - ⟦2-char-id⟧,
             ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 18 · Change · +2 / -2</summary>

```diff
@@ -807,14 +807,14 @@
           }
           taking(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.cellHole(⟦2-char-id⟧, ⟦2-char-id⟧);
-            return ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) ? ZJ : null
+            return ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) ? dB : null
           }
           clearsPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧;
             for (let ⟦2-char-id⟧ = Math.floor((⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧); ⟦2-char-id⟧ <= Math.floor((⟦2-char-id⟧ + ⟦2-char-id⟧) / ⟦2-char-id⟧); ⟦2-char-id⟧++)
               for (let ⟦2-char-id⟧ = Math.floor((⟦2-char-id⟧ - ⟦2-char-id⟧) / ⟦2-char-id⟧); ⟦2-char-id⟧ <= Math.floor((⟦2-char-id⟧ + ⟦2-char-id⟧) / ⟦2-char-id⟧); ⟦2-char-id⟧++) {
                 const ⟦2-char-id⟧ = this.holeIn(⟦2-char-id⟧, ⟦2-char-id⟧);
-                if (⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧.floorY - ⟦2-char-id⟧.g && ⟦2-char-id⟧ <= ⟦2-char-id⟧.topY + ⟦2-char-id⟧) {
+                if (⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧.floorY - ⟦2-char-id⟧.c && ⟦2-char-id⟧ <= ⟦2-char-id⟧.topY + ⟦2-char-id⟧) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.radius + ⟦2-char-id⟧ + ⟦2-char-id⟧;
                   if ((⟦2-char-id⟧.x - ⟦2-char-id⟧) ** 2 + (⟦2-char-id⟧.z - ⟦2-char-id⟧) ** 2 < ⟦2-char-id⟧ * ⟦2-char-id⟧) return !1
                 }
```

</details>

<details>
<summary>Hunk 19 · Change · +2 / -2</summary>

```diff
@@ -839,11 +839,11 @@
             return void 0 === ⟦2-char-id⟧ && (this.cells.size >= 4096 && this.cells.clear(), ⟦2-char-id⟧ = ⟦2-char-id⟧(this.seed, ⟦2-char-id⟧, ⟦2-char-id⟧, this.lookAt), this.cells.set(⟦2-char-id⟧, ⟦2-char-id⟧)), this.lastCellX = ⟦2-char-id⟧, this.lastCellZ = ⟦2-char-id⟧, this.lastHole = ⟦2-char-id⟧, ⟦2-char-id⟧
           }
         }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59566);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59874);
         const ⟦2-char-id⟧ = new Set(["rock", "rubble", "dryCactus", "bone"]);
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.Kn = ⟦2-char-id⟧, this.chances = ⟦2-char-id⟧, this.mound = ⟦2-char-id⟧, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = ⟦2-char-id⟧.salt ^ ⟦2-char-id⟧(⟦2-char-id⟧), this.sinkholes = ⟦2-char-id⟧.sinkholes;
+            this.UD = ⟦2-char-id⟧, this.chances = ⟦2-char-id⟧, this.mound = ⟦2-char-id⟧, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = ⟦2-char-id⟧.salt ^ ⟦2-char-id⟧(⟦2-char-id⟧), this.sinkholes = ⟦2-char-id⟧.sinkholes;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧].id;
             this.ids = {
               deadBush: ⟦2-char-id⟧("Dead Bush"),
```

</details>

<details>
<summary>Hunk 20 · Change · +3 / -3</summary>

```diff
@@ -864,19 +864,19 @@
             const ⟦2-char-id⟧ = this.mound(⟦2-char-id⟧, ⟦2-char-id⟧);
             if (⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-              for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.height && ⟦2-char-id⟧ + ⟦2-char-id⟧ < this.Kn; ⟦2-char-id⟧++) ⟦2-char-id⟧ + ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧.block);
+              for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.height && ⟦2-char-id⟧ + ⟦2-char-id⟧ < this.UD; ⟦2-char-id⟧++) ⟦2-char-id⟧ + ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧.block);
               return
             }
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, this.salt);
             let ⟦2-char-id⟧ = 0;
             for (const ⟦2-char-id⟧ of this.order) {
               var ⟦2-char-id⟧;
-              if (⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = this.chances[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? hJ : 0, ⟦2-char-id⟧ < ⟦2-char-id⟧) return void(⟦2-char-id⟧.has(⟦2-char-id⟧) && this.sinkholes.taking(⟦2-char-id⟧, ⟦2-char-id⟧) || this.place(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, 1540483477 ^ this.salt)))
+              if (⟦2-char-id⟧ += null !== (⟦2-char-id⟧ = this.chances[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? kB : 0, ⟦2-char-id⟧ < ⟦2-char-id⟧) return void(⟦2-char-id⟧.has(⟦2-char-id⟧) && this.sinkholes.taking(⟦2-char-id⟧, ⟦2-char-id⟧) || this.place(⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, 1540483477 ^ this.salt)))
             }
           }
           place(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
-                ⟦2-char-id⟧ + ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ + ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+                ⟦2-char-id⟧ + ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ + ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
               },
               ⟦2-char-id⟧ = this.ids;
             if ("rock" === ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 21 · Change · +1 / -1</summary>

```diff
@@ -885,7 +885,7 @@
             } else "rubble" === ⟦2-char-id⟧ ? ⟦2-char-id⟧(0, ⟦2-char-id⟧ < .55 ? ⟦2-char-id⟧.rubble1 : ⟦2-char-id⟧ < .75 ? ⟦2-char-id⟧.rubble2 : ⟦2-char-id⟧.rubble3) : "dryCactus" === ⟦2-char-id⟧ ? (⟦2-char-id⟧(0, ⟦2-char-id⟧.dryCactus), ⟦2-char-id⟧ < .5 && ⟦2-char-id⟧(1, ⟦2-char-id⟧.dryCactus)) : "tallGrass" === ⟦2-char-id⟧ ? (⟦2-char-id⟧(0, ⟦2-char-id⟧.tallGrass), ⟦2-char-id⟧(1, ⟦2-char-id⟧.tallGrassTop)) : ⟦2-char-id⟧(0, ⟦2-char-id⟧[⟦2-char-id⟧])
           }
         }
-        class ⟦2-char-id⟧ extends ⟦2-char-id⟧.e {
+        class ⟦2-char-id⟧ extends ⟦2-char-id⟧.i {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null), this.noise = ⟦2-char-id⟧, this.grassChance = 0, this.tallGrassChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = null, this.maxFloraHeight = 3, this.waterKept = .25, this.maxSurfacePrefabRelief = 6, this.floraChances = void 0, this.canyonStrength = 1, this.canyonDepth = 26, this.outcropChance = void 0, this.ids = void 0;
             const ⟦2-char-id⟧ = {};
```

</details>

<details>
<summary>Hunk 22 · Change · +1 / -1</summary>

```diff
@@ -893,7 +893,7 @@
             this.ids = ⟦2-char-id⟧, this.lowsoilBlockType = ⟦2-char-id⟧.Dirt
           }
           init() {
-            super.init(), this.floraGenerator = new ⟦2-char-id⟧(this.blockMetadata, this.Kn, this.noise, this.seed, this.floraChances, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.mound(⟦2-char-id⟧, ⟦2-char-id⟧)))
+            super.init(), this.floraGenerator = new ⟦2-char-id⟧(this.blockMetadata, this.UD, this.noise, this.seed, this.floraChances, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.mound(⟦2-char-id⟧, ⟦2-char-id⟧)))
           }
           getHeightmapVal(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.getGroundHeight(⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 23 · Change · +1 / -1</summary>

```diff
@@ -931,7 +931,7 @@
           }
           mound(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-              return 0 === ⟦2-char-id⟧ || 1 === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ ^ ⟦2-char-id⟧ ^ 3) < .5 ? 2 - FJ : 0
+              return 0 === ⟦2-char-id⟧ || 1 === ⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ ^ ⟦2-char-id⟧ ^ 3) < .5 ? 2 - VB : 0
             }(⟦2-char-id⟧, ⟦2-char-id⟧, this.noise.salt, this.outcropDistance(⟦2-char-id⟧, ⟦2-char-id⟧));
             return ⟦2-char-id⟧ > 0 ? {
               block: this.ids["Copper Ore"],
```

</details>

<details>
<summary>Hunk 24 · Change · +6 / -6</summary>

```diff
@@ -960,28 +960,28 @@
             this.salt = void 0, this.sinkholes = void 0, this.canyon = void 0, this.canyonWarp = void 0, this.canyonMask = void 0, this.patchNoise = void 0, this.fineNoise = void 0, this.canyonAtX = NaN, this.canyonAtZ = NaN, this.canyonAt = 0, this.salt = ⟦2-char-id⟧(⟦2-char-id⟧), this.sinkholes = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ((⟦2-char-id⟧, ⟦2-char-id⟧) => this.fine(⟦2-char-id⟧, ⟦2-char-id⟧)), ((⟦2-char-id⟧, ⟦2-char-id⟧) => {
               return ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧.key) ? ⟦2-char-id⟧.key : null;
               var ⟦2-char-id⟧
-            })), this.canyon = new ⟦2-char-id⟧.j([{
+            })), this.canyon = new ⟦2-char-id⟧.g([{
               amplitude: 1,
               frequency: 1 / 260
-            }], `${JJ}WastelandCanyon`), this.canyonWarp = new ⟦2-char-id⟧.j([{
+            }], `${BB}WastelandCanyon`), this.canyonWarp = new ⟦2-char-id⟧.g([{
               amplitude: 28,
               frequency: 1 / 90
-            }], `${JJ}WastelandCanyonWarp`), this.canyonMask = new ⟦2-char-id⟧.j([{
+            }], `${BB}WastelandCanyonWarp`), this.canyonMask = new ⟦2-char-id⟧.g([{
               amplitude: 1,
               frequency: 1 / 650
-            }], `${JJ}WastelandCanyonMask`), this.patchNoise = new ⟦2-char-id⟧.j([{
+            }], `${BB}WastelandCanyonMask`), this.patchNoise = new ⟦2-char-id⟧.g([{
               amplitude: 1,
               frequency: 1 / 48
             }, {
               amplitude: .4,
               frequency: 1 / 14
-            }], `${JJ}WastelandPatch`), this.fineNoise = new ⟦2-char-id⟧.j([{
+            }], `${BB}WastelandPatch`), this.fineNoise = new ⟦2-char-id⟧.g([{
               amplitude: .75,
               frequency: 1 / 16
             }, {
               amplitude: .25,
               frequency: .2
-            }], `${JJ}WastelandFine`)
+            }], `${BB}WastelandFine`)
           }
           canyonDepth(⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (⟦2-char-id⟧ === this.canyonAtX && ⟦2-char-id⟧ === this.canyonAtZ) return this.canyonAt;
```

</details>

<details>
<summary>Hunk 25 · Change · +4 / -4</summary>

```diff
@@ -1004,10 +1004,10 @@
             return this.fineNoise.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)
           }
         }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(3735),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(535),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(38085),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59564);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(3734),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(572),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(38074),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59872);
         const ⟦2-char-id⟧ = "oldWorks";
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 26 · Change · +2 / -2</summary>

```diff
@@ -1017,8 +1017,8 @@
 
         function ⟦2-char-id⟧() {
           return ⟦2-char-id⟧ ??= function() {
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
-            return ⟦2-char-id⟧.set(0, 0, 0, ⟦2-char-id⟧("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCAQ8AEYIBDwABggEBgAEBggEKgAEBggEBgAECggERAAGCAQmAAQEAAoABFQACgAEBAAGAAQEAAYABAgABgAG7AQAGHwGIAQEfGAAHgQEBiAEYAAGBAQGIAQKBAQGIAQOBARgAAogBBoEBGAABgQEBiAEDgQEBiAECgQEYAAGIAQGBAQGIAQSBAQGIARgAAogBAoEBA4gBAYEBGQABgQEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAYEBHwABgQEWAAMdAogBAR0DiAEBgQECiAEDHQKIAQ8AAYEBAx8BiAECHwEHAh8CiAECBwIfAYgBDwABiAEGfwFQCH8BgQEPAAGAAQZ/AQcIfwGAAQ8AAYABD38BgAEPAAGAAQ9/AYABDwABgAEPfwGAAQ8AAYABD38BgAEPAAGAAQ9/AYABDwABggEPfwGCAQ8AAYABDwABgAH3AQABiAEEHwGIAQEfAYgBGAABgQEB4AEEfwFYAYEBGAABgQEB4AEFfwGIARgAAYEBAeABBX8BiAEYAAGIAQHgAQV/AYEBGAABgQEB4AEFfwGBARgAAYEBAeABBoEBGAABgQEB4AEBgQEdAAGBAQHgAQGBAR0AAYEBAeABAYEBHQABgQEB4AEBgQEdAAGBAQHgAQGBAR0AAYEBAeABAYEBHQABgQEB4AEBgQEVAAIdAogBAR0DiAEBgQEB4AEBgQEBHQGIAQIdAogBDwABiAEEHwGIAQEfAYgBAR8B4AECHwKIAQIfAYgBDwABiAEBfwFFAX8DVgl/AYgBDwABgAECfwVWCH8BgAEPAAN/BVYJfw8AA38FVgl/DwAEfwNWCn8PABF/DwABgAEPfwGAAQ8AAYIBD38BggEPAAGAAQ8AAYAB9wEAAR8BiAEDHwGIAQIfGAABgQEGfwGBARgAAYEBBn8BgQEYAAGBAQZ/AYEBGAABiAEGfwGIARgAAYEBBn8BiAEYAAGIAQOBAQGIAQOBARkAAYEBHwABgQEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAYEBFgAJHQGBAQUdAogBDwABgQEEHwEHAYgBCR8BgQEPAAGBAQFQAX8BBwNUAYgBCH8BgQEPAAGAAQEHAX8BWAFUAlgBVAh/AYABDwADfwRUAVgJfw8AA38CWANUCX8PAAR/A1QKfw8AEX8PAAGAAQ9/EAABggEPfwGCAQ8AAYABDwABgAH3AQAGHwGIAQEfGAABgQEGfwGBARgAAYEBBn8BgQEYAAGBAQZ/AYgBGAABgQEGfwGBARgAAYgBBn8BgQEYAAWBAQGIAQKBAfABAAOIAQEdAYgBAh0BiAEEHQGIAQEdA4gBDwABgQECHwGIAQIHBB8BiAECHwGIAQIfAYgBDwABiAEDfwNUA38BiAEFfwGBAQ8AAYIBAn8BVAFYA1QCfwEHBX8BggEPAAGCAQJ/AVQBWAJUAVgIfwGCAQ8AAYIBAn8DWAJUCH8BggEPAAGCAQN/AlQBWAl/AYIBDwABggEEfwFWCn8BggEPAAGCAQR/AVYKfwGCAQ8AAYIBBH8BWAp/AYIBDwABggEEAAFWCgABggEUAAFWHwABWB8AAVaiAQACHwGIAQUfGAABgQEFfwHMAQGIARgAAYEBBn8BiAEYAAGBAQZ/AYEBGAABgQEGfwGBARgAAYgBBn8BiAEYAAKIAQKBAQGIAQOBAfABAAGIAQEdA4gBAh0CiAEBHQKIAQIdA4gBDwABgQEBBwUfAogBAR8BBwMfAQcBHwGBAQ8AAYgBAX8CBwFUAVgBVAZ/AVQBBwF/AYEBDwABgAECfwRUAVgFfwG/CQEHAX8BgAEPAAGAAQJ/AVQBWAJUAVgIfwGAAQ8AAYABAn8BVANYAVQIfwGAAQ8AAYIBA38BVAFYAVQJfwGAAQ8AAYABD38BgAEPAAGAAQ9/EAABggEPfxAAAYABhwIAAogBAh8BiAEDHxgAAYEBBn8BgQEYAAGIAQZ/AYgBGAABgQEGfwGIARgAAYEBBn8BgQEYAAGBAQZ/AYEBGAAGgQEBiAEBgQHwAQABHQGIAQIdAYgBAh0CiAEBHQKIAQEdA4gBAR0PAAGBAQgfAQcCHwGIAQEfAYgBAQcBgQEPAAGBAQEHAn8DVgd/AQcBfwGBAQ8AAYIBAn8FVgV/Ab8JAQcBfwGCAQ8AA38FVgl/DwADfwVWCX8PAAR/A1YKfw8AEX8PAAGAAQ9/AYABDwABggEPfwGCAQ8AAYABAVgBVAJYAVQBWAFUBVgDAAGCAREAAlgBVAMAAVQDAAFUFwACWAIAAVQCAAJYGQACWAFUAlgdAAFYfwABHwGIAQMfAYgBAh8YAAGBAQV/AVQBgQEYAAGIAQZ/AYEBGAABgQEGfwGBARgAAYEBBn8BgQEYAAGBAQZ/AYgBGAADgQEBiAEEgQHwAQACHQGIAQEdAYgBAR0BiAEBHQKIAQEdAogBAh0BiAEBHQ8AAYEBAgcBiAEFHwKIAQUfAYEBDwABiAEBRQJ/A1QJfwGBAQ8AAYABAQcBfwJUAVgCVAV/Ab8JAn8BgAEPAAN/AVQBWAJUAVgJfw8AA38FVAl/DwAEfwFYAlQKfw8AEX8PAAGAAQ9/AYIBDwABggEPfwGCAQ8AAYABDwABgAH3AQAIHxgAAYEBAVQBVQF/AdEMAX8BWAGBARgAAYEBAVQEfwFUAYEBGAABgQEBVAV/AYEBGAABgQEGfwGBARgAAYEBBn8BgQEYAAeBAQGIAfABAAIdA4gBBB0BiAECHQKIAQEdAogBDwABgQEBHwGIAQIfAYgBAR8CiAEFHwIHAYEBDwABgQEDfwNUAn8BiAEDfwFUAn8BgQEPAAGCAQJ/A1QBWAFUBX8BvwkCfwGCAQ8AAYIBAn8CVAJYAVQIfwGCARAAAn8EVAFYCH8BggEPAAGCAQN/AlQBWAl/AYIBDwABggEPfwGCAQ8AAYIBD38BggEPAAGCAQ9/AYIBDwABggEPAAGCAfcBAAGIAQQfAYgBAh8YAAGIAQGBAQGIAQSBAQGIARgAAYEBAogBAoEBAYgBAoEBGAABiAEHgQEYAAGBAQOIAQGBAQGIAQGBAQGIARgAAogBBoEBGAACiAECgQEBiAEDgQHwAQABHQGIAQEdBIgBAx0BiAEBHQOIAQIdDwABiAEDHwGIAQQfAYgBAR8BiAEEHwGIAQ8AAYgBA38DVAJ/AYgBAVADfwEHAX8BgQEPAAGAAQJ/AVQBWANUBX8BvwkCfwGAAQ8AAYIBAn8CVAFYAVQBWAh/AYABDwABgAECfwVUCH8BgAEPAAGAAQN/AVQBWAFUCX8BgAEPAAGAAQ9/AYIBDwABgAEPfwGAAQ8AAYIBD38BggEPAAGAAQ8AAYABrwUAAYgBAR0BiAEBHQSIAQMdAYgBBR0PAAGBAQMfAYgBCB8BiAECBwGBAQ8AAYEBA38DVgJ/AUUGfwGBAQEHDgABgAECfwVWAX8BBwN/Ab8JAn8BgAEPAAN/BVYJfw8AA38FVgl/DwAEfwNWCn8PABF/EAAPfxEAD3/QBQACiAEBHQaIAQEdAogBAR0EiAEPAAGIAQEfAYgBAh8CiAECHwEHAYgBAh8BiAEBBwEfAYEBDwABiAEDfwFFAYgBAUUEfwFQAX8BVAFFAQcBiAEPAAGAAQx/Ab8JAYABAX8BgAEPAAV/AVUKfxAAEH8QABB/EAAQfxEAD38RAA9/0AUAA4gBAh0CiAEBHQOIAQEdAogBAx0PAAGBAQUfAYgBBh8BiAECHwGBAQ8AAYgBBH8BRQGIAQZ/AQcBWAF/AYEBAQABgAEBggEMAAGCAQR/AQcGfwFYAb8JAn8QAAGCAQl/AlgEfxAAAYIBBH8BVQN/AVQGfxAAAYIBBn8CWAd/EAABggEEfwJYCX8QAAGCAQJ/AVgBVAt/EAABggEBfwFYDX/QBQABHQKIAQIdAogBBB0BiAECHQGIAQIdDwABgQEKHwEHAR8BiAECHwGBAQ8AAYgBA38DVgF/AgcBRQJ/AUUCfwGIAQEAAYIBDQABggECfwFWAX8BVAF/AVYCBwN/Ab8JAn8BgAEPAAGCAQF/AVYCfwFUAn8BVgd/EQABfwFWAlQBVQJUAVYHfxEAAX8BVgJ/AVQCfwFWB38RAAJ/AVYBfwFUAX8BVgh/EQADfwNWCX8RAA9/0AUABIgBAR0DiAEBHQGIAQYdAYgBDwABiAEBBwIfAQcBHwEHAYgBCB8BgQEPAAGBAQV/AVAFfwEHAX8BBwFFAYEBAYABAQABggEMAAGAAQV/AQcIfwKAARAAD38RAA9/EQAPfxEAD38RAA9/EQAPf9AFAASIAQEdBYgBAx0DiAEBHQ8AAYgBAR8BBwMfAYgBBR8BBwMfAYEBDwABiAEDfwFFA38BBwF/A4EBA38BiAEBBwEAAYIBDAABgAEKfwFUBH8BgAEQAAp/AVQEfxEACn8BVAR/EQAKfwFUBH8RAAp/AVQEfxEACn8BVAR/EQAKfwFWBH/QBQABHQGIAQMdBIgBAh0CiAEBHQGIAQIdDwABgQEDHwIHAx8BBwOIAQMfAYEBDwABgQEBRQR/AUUDfwOBAQN/AYEBDwABggEFfwEHCX8RAA9/EQAPfxEACX8CVQFYA38RAAl/A1UDfxEAD38RAAp/AVYEf9AFAAEdAogBAR0EiAEBHQKIAQMdA4gBDwABiAEDHwEHAR8BBwQfAQcCHwGIAQEfAYgBDwABgQEGfwFQAX8BiAEDgQEDfwGIAQEHDgABgAEIfwEHBn8QAAGAAQ9/EAABgAEPfxAAAYABCX8DVQN/EAABgAEJfwJVAVgDfxAAAYABD38QAAGCAQp/AVYEf9AFAAGIAQEdAogBAR0CiAEBHQKIAQEdAYgBAR0BiAEBHQGIAQEdDwABgQEEHwEHAh8BBwEfAYgBBR8BiAEPAAGBAQR/AUUCfwGIAQFQA4EBAUUBfwFQAYgBDwABggEEfwEHCn8BgAEPABF/DwAQfxAACn8DVQN/EAAKfwFYAlUDfxEAD38RAAp/AVYEfxAAAYABAVgBVAJYAVQFWAFUAVgBVAJYEgACWAFUAwABVAMAAVQCWBMAAVABRQJYAgABVAIAAlgXAAJFAlgBVAJYGwACRQFYtwQAAR0BiAEFHQGIAQEdA4gBAR0EiAEPAAGBAQEfAYgBAR8CiAEBBwMfAQcBiAEEHwGBAQ8AAYgBCX8DgQECfwEHAYEBDwABggEKfwFUBH8QAAt/AVgEfxAAC38BVAR/EAALfwFUBH8QAAt/AVgEfxAAAYABCn8BWAR/EAABggEKfwFWBH8QAAGCASAAAVABWAsAAVgTAAJQAQABWAUAAVgYAAJQIAABUAEAAVi3BAACiAEFHQKIAQMdAYgBAh0CiAEPAAGIAQMfAYgBAR8BiAEDHwGIAQEfAYgBAR8BBwEfAYEBDwABgQEBBwN/AYgBB38BUAGAAQF/AYEBDwABggENfwGAAQF/EAABggEPfxAAAYIBD38QAAGCAQ9/EAABggEPfxAAAYIBD38QAAGCAQ9/MgABWAsAAVgUAAFFAQABWAUAAVgYAAFQIQABRQEAAVi3BAACHQGIAQIdBYgBAh0BiAEEHQ8AAYEBAYgBCh8BBwGIAQIfAYgBDwABgQEBfwFFCn8CRQF/AYgBAQABgAENAAGCAQF/AQcKfwGAAQJ/EAABgAEPfxAAAYABD38QAAGAAQ9/EAABgAEPfxAAAYABD38QAAGCAQ9/MQABRQFYCwABWBMAAVACAAFYBQABWBgAAVABRSAAAVABAAFYtwQAAYgBAx0BiAEBHQKIAQIdAYgBAR0EiAEBHQ8AAYgBAoEBA4gBAYEBAogBAYEBAYgBBIEBAogBAwABRQsAAYgBBIEBAogBAoEBAYgBBYEBAYgBAYEBAQcCAAFYCwACgAEBggEGgAEBggEHgAEDAAFYCwAJgAEBggEHgAEDAAFFCwABgAEBggEBgAEBggEKgAEBggECgAEDAAFFCwAOgAEBAAKAAQ8AA4ABAYIBC4ABAYIBAYABAwABWAsADoABAYIBAoABDwAGggEBAAaCAQEAA4IBDwAEgAEBAAOAAQF/CIABEQABgAEBggEDgAEDfwWAARUABIABAX8BAAGAAQKCARkABYABHQABgAG9BAAEgQEcAASBAQkAA1gQAASBAQkAA1gQAASBAQkAAUUBWAFFEAAEgQEJAAJFAVgQAASBAQkAAVgCRRAAA4ABHQADgAEKAAFFEgADgAEdAAOCAR0AA4ABHQADgAEdAAOAAR0AA4ABHQADgAEdAAOCAR0AA4AB/QMAAYEBAgABgQEcAAGBAQJ/AYEBCAABWAFFAlgBRQ8AAYEBAn8BgQEIAANFAVgBRQ8AAYEBAn8BgQEIAANYAUUBWA8AAYEBAn8BgQEIAAJFA1gPAAGBAQJ/AYEBCAADRQJYDwABgAEBfwGAAQkAAUUCAAFFAVgPAAGAAQF/AYABDAABRRAAAYABAX8BgAEdAAGCAQF/AYIBHQABgAEBfwGAAR0AAYABAX8BgAEdAAGAAQF/AYABHQABgAEBfwGAAR0AAYABAX8BgAEdAAGCAQF/AYIBHQABgAEBfwGAAf0DAAGBAQIAAYEBHAABgQECfwGBAQkAAlgBRRAAAYEBAn8BgQEJAANFEAABgQECfwGBAQkAAVgCRRAAAYEBAn8BgQEJAAJFAVgQAAGBAQJ/AYEBCQABRQJYEAADgAEKAAFYAQABRRAAA4ABCwABRQFYEAADgAEdAAOCAR0AA4ABHQADgAEdAAOAAR0AA4ABHQADgAEdAAOCAR0AA4AB/QMABIEBHAAEgQEKAAFYEQAEgQEKAAFYEQAEgQEKAAFYEQAEgQEKAAFFEQAEgQEKAAFYPwABRacaAA==")), ⟦2-char-id⟧.set(0, 1, 0, ⟦2-char-id⟧("isgBAAOAAR0AA4ABHQADgAEdAAOAAR0AAYABAlYdAAJWAYABHQADVh4AAYABngYAAYABAX8BgAEdAAGAAQF/AYABHQABgAEBfwGAAR0AAYABAX8BgAEdAAGAAQF/AVYdAAFWAX8BgAEdAAFWAX8eAAFWAX8BVp0GAAOAAR0AA4ABHQADgAEdAAOAAR0AA1YdAAGAAQJWHQADgAEeAAFWlCYA")), new ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
+            return ⟦2-char-id⟧.set(0, 0, 0, ⟦2-char-id⟧("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCAQ8AEYIBDwABggEBgAEBggEKgAEBggEBgAECggERAAGCAQmAAQEAAoABFQACgAEBAAGAAQEAAYABAgABgAG7AQAGHwGIAQEfGAAHgQEBiAEYAAGBAQGIAQKBAQGIAQOBARgAAogBBoEBGAABgQEBiAEDgQEBiAECgQEYAAGIAQGBAQGIAQSBAQGIARgAAogBAoEBA4gBAYEBGQABgQEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAYEBHwABgQEWAAMdAogBAR0DiAEBgQECiAEDHQKIAQ8AAYEBAx8BiAECHwEHAh8CiAECBwIfAYgBDwABiAEGfwFQCH8BgQEPAAGAAQZ/AQcIfwGAAQ8AAYABD38BgAEPAAGAAQ9/AYABDwABgAEPfwGAAQ8AAYABD38BgAEPAAGAAQ9/AYABDwABggEPfwGCAQ8AAYABDwABgAH3AQABiAEEHwGIAQEfAYgBGAABgQEB4AEEfwFYAYEBGAABgQEB4AEFfwGIARgAAYEBAeABBX8BiAEYAAGIAQHgAQV/AYEBGAABgQEB4AEFfwGBARgAAYEBAeABBoEBGAABgQEB4AEBgQEdAAGBAQHgAQGBAR0AAYEBAeABAYEBHQABgQEB4AEBgQEdAAGBAQHgAQGBAR0AAYEBAeABAYEBHQABgQEB4AEBgQEVAAIdAogBAR0DiAEBgQEB4AEBgQEBHQGIAQIdAogBDwABiAEEHwGIAQEfAYgBAR8B4AECHwKIAQIfAYgBDwABiAEBfwFFAX8DVgl/AYgBDwABgAECfwVWCH8BgAEPAAN/BVYJfw8AA38FVgl/DwAEfwNWCn8PABF/DwABgAEPfwGAAQ8AAYIBD38BggEPAAGAAQ8AAYAB9wEAAR8BiAEDHwGIAQIfGAABgQEGfwGBARgAAYEBBn8BgQEYAAGBAQZ/AYEBGAABiAEGfwGIARgAAYEBBn8BiAEYAAGIAQOBAQGIAQOBARkAAYEBHwABgQEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAYEBFgAJHQGBAQUdAogBDwABgQEEHwEHAYgBCR8BgQEPAAGBAQFQAX8BBwNUAYgBCH8BgQEPAAGAAQEHAX8BWAFUAlgBVAh/AYABDwADfwRUAVgJfw8AA38CWANUCX8PAAR/A1QKfw8AEX8PAAGAAQ9/EAABggEPfwGCAQ8AAYABDwABgAH3AQAGHwGIAQEfGAABgQEGfwGBARgAAYEBBn8BgQEYAAGBAQZ/AYgBGAABgQEGfwGBARgAAYgBBn8BgQEYAAWBAQGIAQKBAfABAAOIAQEdAYgBAh0BiAEEHQGIAQEdA4gBDwABgQECHwGIAQIHBB8BiAECHwGIAQIfAYgBDwABiAEDfwNUA38BiAEFfwGBAQ8AAYIBAn8BVAFYA1QCfwEHBX8BggEPAAGCAQJ/AVQBWAJUAVgIfwGCAQ8AAYIBAn8DWAJUCH8BggEPAAGCAQN/AlQBWAl/AYIBDwABggEEfwFWCn8BggEPAAGCAQR/AVYKfwGCAQ8AAYIBBH8BWAp/AYIBDwABggEEAAFWCgABggEUAAFWHwABWB8AAVaiAQACHwGIAQUfGAABgQEFfwHMAQGIARgAAYEBBn8BiAEYAAGBAQZ/AYEBGAABgQEGfwGBARgAAYgBBn8BiAEYAAKIAQKBAQGIAQOBAfABAAGIAQEdA4gBAh0CiAEBHQKIAQIdA4gBDwABgQEBBwUfAogBAR8BBwMfAQcBHwGBAQ8AAYgBAX8CBwFUAVgBVAZ/AVQBBwF/AYEBDwABgAECfwRUAVgFfwG/CQEHAX8BgAEPAAGAAQJ/AVQBWAJUAVgIfwGAAQ8AAYABAn8BVANYAVQIfwGAAQ8AAYIBA38BVAFYAVQJfwGAAQ8AAYABD38BgAEPAAGAAQ9/EAABggEPfxAAAYABhwIAAogBAh8BiAEDHxgAAYEBBn8BgQEYAAGIAQZ/AYgBGAABgQEGfwGIARgAAYEBBn8BgQEYAAGBAQZ/AYEBGAAGgQEBiAEBgQHwAQABHQGIAQIdAYgBAh0CiAEBHQKIAQEdA4gBAR0PAAGBAQgfAQcCHwGIAQEfAYgBAQcBgQEPAAGBAQEHAn8DVgd/AQcBfwGBAQ8AAYIBAn8FVgV/Ab8JAQcBfwGCAQ8AA38FVgl/DwADfwVWCX8PAAR/A1YKfw8AEX8PAAGAAQ9/AYABDwABggEPfwGCAQ8AAYABAVgBVAJYAVQBWAFUBVgDAAGCAREAAlgBVAMAAVQDAAFUFwACWAIAAVQCAAJYGQACWAFUAlgdAAFYfwABHwGIAQMfAYgBAh8YAAGBAQV/AVQBgQEYAAGIAQZ/AYEBGAABgQEGfwGBARgAAYEBBn8BgQEYAAGBAQZ/AYgBGAADgQEBiAEEgQHwAQACHQGIAQEdAYgBAR0BiAEBHQKIAQEdAogBAh0BiAEBHQ8AAYEBAgcBiAEFHwKIAQUfAYEBDwABiAEBRQJ/A1QJfwGBAQ8AAYABAQcBfwJUAVgCVAV/Ab8JAn8BgAEPAAN/AVQBWAJUAVgJfw8AA38FVAl/DwAEfwFYAlQKfw8AEX8PAAGAAQ9/AYIBDwABggEPfwGCAQ8AAYABDwABgAH3AQAIHxgAAYEBAVQBVQF/AdEMAX8BWAGBARgAAYEBAVQEfwFUAYEBGAABgQEBVAV/AYEBGAABgQEGfwGBARgAAYEBBn8BgQEYAAeBAQGIAfABAAIdA4gBBB0BiAECHQKIAQEdAogBDwABgQEBHwGIAQIfAYgBAR8CiAEFHwIHAYEBDwABgQEDfwNUAn8BiAEDfwFUAn8BgQEPAAGCAQJ/A1QBWAFUBX8BvwkCfwGCAQ8AAYIBAn8CVAJYAVQIfwGCARAAAn8EVAFYCH8BggEPAAGCAQN/AlQBWAl/AYIBDwABggEPfwGCAQ8AAYIBD38BggEPAAGCAQ9/AYIBDwABggEPAAGCAfcBAAGIAQQfAYgBAh8YAAGIAQGBAQGIAQSBAQGIARgAAYEBAogBAoEBAYgBAoEBGAABiAEHgQEYAAGBAQOIAQGBAQGIAQGBAQGIARgAAogBBoEBGAACiAECgQEBiAEDgQHwAQABHQGIAQEdBIgBAx0BiAEBHQOIAQIdDwABiAEDHwGIAQQfAYgBAR8BiAEEHwGIAQ8AAYgBA38DVAJ/AYgBAVADfwEHAX8BgQEPAAGAAQJ/AVQBWANUBX8BvwkCfwGAAQ8AAYIBAn8CVAFYAVQBWAh/AYABDwABgAECfwVUCH8BgAEPAAGAAQN/AVQBWAFUCX8BgAEPAAGAAQ9/AYIBDwABgAEPfwGAAQ8AAYIBD38BggEPAAGAAQ8AAYABrwUAAYgBAR0BiAEBHQSIAQMdAYgBBR0PAAGBAQMfAYgBCB8BiAECBwGBAQ8AAYEBA38DVgJ/AUUGfwGBAQEHDgABgAECfwVWAX8BBwN/Ab8JAn8BgAEPAAN/BVYJfw8AA38FVgl/DwAEfwNWCn8PABF/EAAPfxEAD3/QBQACiAEBHQaIAQEdAogBAR0EiAEPAAGIAQEfAYgBAh8CiAECHwEHAYgBAh8BiAEBBwEfAYEBDwABiAEDfwFFAYgBAUUEfwFQAX8BVAFFAQcBiAEPAAGAAQx/Ab8JAYABAX8BgAEPAAV/AVUKfxAAEH8QABB/EAAQfxEAD38RAA9/0AUAA4gBAh0CiAEBHQOIAQEdAogBAx0PAAGBAQUfAYgBBh8BiAECHwGBAQ8AAYgBBH8BRQGIAQZ/AQcBWAF/AYEBAQABgAEBggEMAAGCAQR/AQcGfwFYAb8JAn8QAAGCAQl/AlgEfxAAAYIBBH8BVQN/AVQGfxAAAYIBBn8CWAd/EAABggEEfwJYCX8QAAGCAQJ/AVgBVAt/EAABggEBfwFYDX/QBQABHQKIAQIdAogBBB0BiAECHQGIAQIdDwABgQEKHwEHAR8BiAECHwGBAQ8AAYgBA38DVgF/AgcBRQJ/AUUCfwGIAQEAAYIBDQABggECfwFWAX8BVAF/AVYCBwN/Ab8JAn8BgAEPAAGCAQF/AVYCfwFUAn8BVgd/EQABfwFWAlQBVQJUAVYHfxEAAX8BVgJ/AVQCfwFWB38RAAJ/AVYBfwFUAX8BVgh/EQADfwNWCX8RAA9/0AUABIgBAR0DiAEBHQGIAQYdAYgBDwABiAEBBwIfAQcBHwEHAYgBCB8BgQEPAAGBAQV/AVAFfwEHAX8BBwFFAYEBAYABAQABggEMAAGAAQV/AQcIfwKAARAAD38RAA9/EQAPfxEAD38RAA9/EQAPf9AFAASIAQEdBYgBAx0DiAEBHQ8AAYgBAR8BBwMfAYgBBR8BBwMfAYEBDwABiAEDfwFFA38BBwF/A4EBA38BiAEBBwEAAYIBDAABgAEKfwFUBH8BgAEQAAp/AVQEfxEACn8BVAR/EQAKfwFUBH8RAAp/AVQEfxEACn8BVAR/EQAKfwFWBH/QBQABHQGIAQMdBIgBAh0CiAEBHQGIAQIdDwABgQEDHwIHAx8BBwOIAQMfAYEBDwABgQEBRQR/AUUDfwOBAQN/AYEBDwABggEFfwEHCX8RAA9/EQAPfxEACX8CVQFYA38RAAl/A1UDfxEAD38RAAp/AVYEf9AFAAEdAogBAR0EiAEBHQKIAQMdA4gBDwABiAEDHwEHAR8BBwQfAQcCHwGIAQEfAYgBDwABgQEGfwFQAX8BiAEDgQEDfwGIAQEHDgABgAEIfwEHBn8QAAGAAQ9/EAABgAEPfxAAAYABCX8DVQN/EAABgAEJfwJVAVgDfxAAAYABD38QAAGCAQp/AVYEf9AFAAGIAQEdAogBAR0CiAEBHQKIAQEdAYgBAR0BiAEBHQGIAQEdDwABgQEEHwEHAh8BBwEfAYgBBR8BiAEPAAGBAQR/AUUCfwGIAQFQA4EBAUUBfwFQAYgBDwABggEEfwEHCn8BgAEPABF/DwAQfxAACn8DVQN/EAAKfwFYAlUDfxEAD38RAAp/AVYEfxAAAYABAVgBVAJYAVQFWAFUAVgBVAJYEgACWAFUAwABVAMAAVQCWBMAAVABRQJYAgABVAIAAlgXAAJFAlgBVAJYGwACRQFYtwQAAR0BiAEFHQGIAQEdA4gBAR0EiAEPAAGBAQEfAYgBAR8CiAEBBwMfAQcBiAEEHwGBAQ8AAYgBCX8DgQECfwEHAYEBDwABggEKfwFUBH8QAAt/AVgEfxAAC38BVAR/EAALfwFUBH8QAAt/AVgEfxAAAYABCn8BWAR/EAABggEKfwFWBH8QAAGCASAAAVABWAsAAVgTAAJQAQABWAUAAVgYAAJQIAABUAEAAVi3BAACiAEFHQKIAQMdAYgBAh0CiAEPAAGIAQMfAYgBAR8BiAEDHwGIAQEfAYgBAR8BBwEfAYEBDwABgQEBBwN/AYgBB38BUAGAAQF/AYEBDwABggENfwGAAQF/EAABggEPfxAAAYIBD38QAAGCAQ9/EAABggEPfxAAAYIBD38QAAGCAQ9/MgABWAsAAVgUAAFFAQABWAUAAVgYAAFQIQABRQEAAVi3BAACHQGIAQIdBYgBAh0BiAEEHQ8AAYEBAYgBCh8BBwGIAQIfAYgBDwABgQEBfwFFCn8CRQF/AYgBAQABgAENAAGCAQF/AQcKfwGAAQJ/EAABgAEPfxAAAYABD38QAAGAAQ9/EAABgAEPfxAAAYABD38QAAGCAQ9/MQABRQFYCwABWBMAAVACAAFYBQABWBgAAVABRSAAAVABAAFYtwQAAYgBAx0BiAEBHQKIAQIdAYgBAR0EiAEBHQ8AAYgBAoEBA4gBAYEBAogBAYEBAYgBBIEBAogBAwABRQsAAYgBBIEBAogBAoEBAYgBBYEBAYgBAYEBAQcCAAFYCwACgAEBggEGgAEBggEHgAEDAAFYCwAJgAEBggEHgAEDAAFFCwABgAEBggEBgAEBggEKgAEBggECgAEDAAFFCwAOgAEBAAKAAQ8AA4ABAYIBC4ABAYIBAYABAwABWAsADoABAYIBAoABDwAGggEBAAaCAQEAA4IBDwAEgAEBAAOAAQF/CIABEQABgAEBggEDgAEDfwWAARUABIABAX8BAAGAAQKCARkABYABHQABgAG9BAAEgQEcAASBAQkAA1gQAASBAQkAA1gQAASBAQkAAUUBWAFFEAAEgQEJAAJFAVgQAASBAQkAAVgCRRAAA4ABHQADgAEKAAFFEgADgAEdAAOCAR0AA4ABHQADgAEdAAOAAR0AA4ABHQADgAEdAAOCAR0AA4AB/QMAAYEBAgABgQEcAAGBAQJ/AYEBCAABWAFFAlgBRQ8AAYEBAn8BgQEIAANFAVgBRQ8AAYEBAn8BgQEIAANYAUUBWA8AAYEBAn8BgQEIAAJFA1gPAAGBAQJ/AYEBCAADRQJYDwABgAEBfwGAAQkAAUUCAAFFAVgPAAGAAQF/AYABDAABRRAAAYABAX8BgAEdAAGCAQF/AYIBHQABgAEBfwGAAR0AAYABAX8BgAEdAAGAAQF/AYABHQABgAEBfwGAAR0AAYABAX8BgAEdAAGCAQF/AYIBHQABgAEBfwGAAf0DAAGBAQIAAYEBHAABgQECfwGBAQkAAlgBRRAAAYEBAn8BgQEJAANFEAABgQECfwGBAQkAAVgCRRAAAYEBAn8BgQEJAAJFAVgQAAGBAQJ/AYEBCQABRQJYEAADgAEKAAFYAQABRRAAA4ABCwABRQFYEAADgAEdAAOCAR0AA4ABHQADgAEdAAOAAR0AA4ABHQADgAEdAAOCAR0AA4AB/QMABIEBHAAEgQEKAAFYEQAEgQEKAAFYEQAEgQEKAAFYEQAEgQEKAAFFEQAEgQEKAAFYPwABRacaAA==")), ⟦2-char-id⟧.set(0, 1, 0, ⟦2-char-id⟧("isgBAAOAAR0AA4ABHQADgAEdAAOAAR0AAYABAlYdAAJWAYABHQADVh4AAYABngYAAYABAX8BgAEdAAGAAQF/AYABHQABgAEBfwGAAR0AAYABAX8BgAEdAAGAAQF/AVYdAAFWAX8BgAEdAAFWAX8eAAFWAX8BVp0GAAOAAR0AA4ABHQADgAEdAAOAAR0AA1YdAAGAAQJWHQADgAEeAAFWlCYA")), new ⟦2-char-id⟧.c(⟦2-char-id⟧, {
               x: 0,
               y: 0,
               z: 0
```

</details>

<details>
<summary>Hunk 27 · Change · +4 / -4</summary>

```diff
@@ -1058,14 +1058,14 @@
               localX: 7,
               localY: 2,
               localZ: 18,
-              qualityDistribution: new ⟦2-char-id⟧.f([{
-                value: ⟦2-char-id⟧.i.UNCOMMON,
+              qualityDistribution: new ⟦2-char-id⟧.d([{
+                value: ⟦2-char-id⟧.j.UNCOMMON,
                 weight: 1
               }, {
-                value: ⟦2-char-id⟧.i.RARE,
+                value: ⟦2-char-id⟧.j.RARE,
                 weight: 2
               }, {
-                value: ⟦2-char-id⟧.i.EPIC,
+                value: ⟦2-char-id⟧.j.EPIC,
                 weight: 1
               }])
             }],
```

</details>

<details>
<summary>Hunk 28 · Change · +1 / -1</summary>

```diff
@@ -1073,7 +1073,7 @@
               localX: 10,
               localY: 2,
               localZ: 16,
-              mobTypeDistribution: new ⟦2-char-id⟧.f([{
+              mobTypeDistribution: new ⟦2-char-id⟧.d([{
                 value: "Draugr Zombie",
                 weight: 1
               }])
```

</details>

<details>
<summary>Hunk 29 · Change · +5 / -5</summary>

```diff
@@ -1081,27 +1081,27 @@
           };
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          return (0, ⟦2-char-id⟧.eb)(⟦2-char-id⟧, [{
+          return (0, ⟦2-char-id⟧.db)(⟦2-char-id⟧, [{
             prefab: ⟦2-char-id⟧,
             frequency: ⟦2-char-id⟧
-          }, ...⟦2-char-id⟧.d.map((⟦2-char-id⟧ => ({
+          }, ...⟦2-char-id⟧.f.map((⟦2-char-id⟧ => ({
             prefab: ⟦2-char-id⟧,
             frequency: ⟦2-char-id⟧
           })))])
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${eJ}DustFlats`, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.MEDIUM, 1.25, ⟦2-char-id⟧)), this.key = "dustFlats", this.floraChances = {
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${pB}DustFlats`, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.MEDIUM, 1.25, ⟦2-char-id⟧)), this.key = "dustFlats", this.floraChances = {
               deadBush: .012,
               rock: .0015,
               bone: 2e-4
-            }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = ⟦2-char-id⟧.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new ⟦2-char-id⟧.j([{
+            }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = ⟦2-char-id⟧.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new ⟦2-char-id⟧.g([{
               amplitude: 5,
               frequency: 1 / 90
             }, {
               amplitude: 2,
               frequency: 1 / 30
-            }], `${eJ}DustFlatsHeight`)
+            }], `${pB}DustFlatsHeight`)
           }
           getGroundHeight(⟦2-char-id⟧, ⟦2-char-id⟧) {
             return -2 + this.height.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 30 · Change · +3 / -3</summary>

```diff
@@ -1116,17 +1116,17 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${FJ}ScorchedMesa`, ⟦2-char-id⟧, ⟦2-char-id⟧), this.key = "scorchedMesa", this.floraChances = {
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${VB}ScorchedMesa`, ⟦2-char-id⟧, ⟦2-char-id⟧), this.key = "scorchedMesa", this.floraChances = {
               deadBush: .015,
               dryCactus: .0012,
               rock: 8e-4
-            }, this.outcropChance = ⟦2-char-id⟧.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids["Orange Baked Clay"], this.height = new ⟦2-char-id⟧.j([{
+            }, this.outcropChance = ⟦2-char-id⟧.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids["Orange Baked Clay"], this.height = new ⟦2-char-id⟧.g([{
               amplitude: 40,
               frequency: 1 / 300
             }, {
               amplitude: 12,
               frequency: 1 / 80
-            }], `${FJ}ScorchedMesaHeight`);
+            }], `${VB}ScorchedMesaHeight`);
             const ⟦2-char-id⟧ = this.ids;
             this.bandPalette = [⟦2-char-id⟧["Orange Baked Clay"], ⟦2-char-id⟧["Baked Clay"], ⟦2-char-id⟧["Orange Baked Clay"], ⟦2-char-id⟧["Brown Baked Clay"], ⟦2-char-id⟧["Red Baked Clay"], ⟦2-char-id⟧["Orange Baked Clay"], ⟦2-char-id⟧["Yellow Baked Clay"], ⟦2-char-id⟧["Baked Clay"], ⟦2-char-id⟧["Light Gray Baked Clay"], ⟦2-char-id⟧["Red Baked Clay"], ⟦2-char-id⟧["White Baked Clay"], ⟦2-char-id⟧["Brown Baked Clay"]]
           }
```

</details>

<details>
<summary>Hunk 31 · Change · +5 / -5</summary>

```diff
@@ -1158,19 +1158,19 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${FJ}ShatteredHighlands`, ⟦2-char-id⟧, ⟦2-char-id⟧), this.key = "shatteredHighlands", this.floraChances = {
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${VB}ShatteredHighlands`, ⟦2-char-id⟧, ⟦2-char-id⟧), this.key = "shatteredHighlands", this.floraChances = {
               deadBush: .006,
               rock: .004
-            }, this.outcropChance = ⟦2-char-id⟧.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids["Rocky Dirt"], this.ridge1 = new ⟦2-char-id⟧.j([{
+            }, this.outcropChance = ⟦2-char-id⟧.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids["Rocky Dirt"], this.ridge1 = new ⟦2-char-id⟧.g([{
               amplitude: 60,
               frequency: 1 / 240
-            }], `${FJ}HighlandsRidge1`), this.ridge2 = new ⟦2-char-id⟧.j([{
+            }], `${VB}HighlandsRidge1`), this.ridge2 = new ⟦2-char-id⟧.g([{
               amplitude: 25,
               frequency: 1 / 110
-            }], `${FJ}HighlandsRidge2`), this.bumps = new ⟦2-char-id⟧.j([{
+            }], `${VB}HighlandsRidge2`), this.bumps = new ⟦2-char-id⟧.g([{
               amplitude: 6,
               frequency: .02
-            }], `${FJ}HighlandsBumps`)
+            }], `${VB}HighlandsBumps`)
           }
           getGroundHeight(⟦2-char-id⟧, ⟦2-char-id⟧) {
             return 1.2 * (85 - Math.abs(this.ridge1.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)) - Math.abs(this.ridge2.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧))) - 25 + this.bumps.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 32 · Change · +1 / -1</summary>

```diff
@@ -1181,7 +1181,7 @@
           }
           soilBelow(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.peakSeam(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-            return 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧ > 50 ? this.ids.Stone : ⟦2-char-id⟧ > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+            return 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧ > 50 ? this.ids.Stone : ⟦2-char-id⟧ > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
           }
           getStrataBlock(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             return this.peakSeam(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 33 · Change · +4 / -4</summary>

```diff
@@ -1192,25 +1192,25 @@
               const ⟦2-char-id⟧ = 2600822924 ^ ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, 0, ⟦2-char-id⟧),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ < .4 ? "Coal Ore" : ⟦2-char-id⟧ < .7 ? "Iron Ore" : null;
-              return null === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧ >> 2, ⟦2-char-id⟧, ⟦2-char-id⟧ >> 2, ⟦2-char-id⟧) >= .25 ? null : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) < .65 ? XJ : null
+              return null === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧ >> 2, ⟦2-char-id⟧, ⟦2-char-id⟧ >> 2, ⟦2-char-id⟧) >= .25 ? null : ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) < .65 ? lB : null
             }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.noise.salt);
             return ⟦2-char-id⟧ ? this.ids[⟦2-char-id⟧] : 0
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${eJ}RuinFields`, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.HIGH, 2.25, ⟦2-char-id⟧)), this.key = "ruinFields", this.floraChances = {
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${pB}RuinFields`, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.HIGH, 2.25, ⟦2-char-id⟧)), this.key = "ruinFields", this.floraChances = {
               deadBush: .02,
               rubble: .008,
               rock: .001,
               bone: 3e-4
-            }, this.outcropChance = ⟦2-char-id⟧.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new ⟦2-char-id⟧.j([{
+            }, this.outcropChance = ⟦2-char-id⟧.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new ⟦2-char-id⟧.g([{
               amplitude: 3,
               frequency: 1 / 80
             }, {
               amplitude: 1.5,
               frequency: .04
-            }], `${eJ}RuinFieldsHeight`)
+            }], `${pB}RuinFieldsHeight`)
           }
           getGroundHeight(⟦2-char-id⟧, ⟦2-char-id⟧) {
             return -3 + this.height.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 34 · Change · +3 / -3</summary>

```diff
@@ -1222,16 +1222,16 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${FJ}SaltFlats`, ⟦2-char-id⟧, ⟦2-char-id⟧), this.key = "saltFlats", this.floraChances = {
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${VB}SaltFlats`, ⟦2-char-id⟧, ⟦2-char-id⟧), this.key = "saltFlats", this.floraChances = {
               deadBush: .002,
               bone: 6e-4
-            }, this.outcropChance = ⟦2-char-id⟧.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new ⟦2-char-id⟧.j([{
+            }, this.outcropChance = ⟦2-char-id⟧.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new ⟦2-char-id⟧.g([{
               amplitude: 1.5,
               frequency: 1 / 120
             }, {
               amplitude: .6,
               frequency: .05
-            }], `${FJ}SaltFlatsHeight`)
+            }], `${VB}SaltFlatsHeight`)
           }
           getGroundHeight(⟦2-char-id⟧, ⟦2-char-id⟧) {
             return -8 + this.height.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 35 · Change · +3 / -3</summary>

```diff
@@ -1249,17 +1249,17 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${FJ}SurvivorGrove`, ⟦2-char-id⟧, ⟦2-char-id⟧), this.key = "survivorGrove", this.floraChances = {
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${VB}SurvivorGrove`, ⟦2-char-id⟧, ⟦2-char-id⟧), this.key = "survivorGrove", this.floraChances = {
               grass: .12,
               tallGrass: .015,
               deadBush: .004
-            }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = ⟦2-char-id⟧.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new ⟦2-char-id⟧.j([{
+            }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = ⟦2-char-id⟧.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new ⟦2-char-id⟧.g([{
               amplitude: 4,
               frequency: 1 / 70
             }, {
               amplitude: 2,
               frequency: 1 / 30
-            }], `${FJ}SurvivorGroveHeight`)
+            }], `${VB}SurvivorGroveHeight`)
           }
           getGroundHeight(⟦2-char-id⟧, ⟦2-char-id⟧) {
             return -3 + this.height.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 36 · Change · +1 / -1</summary>

```diff
@@ -1274,7 +1274,7 @@
         const ⟦2-char-id⟧ = {
           buildBiomes: function(⟦2-char-id⟧) {
             let {
-              Kn: ⟦2-char-id⟧,
+              UD: ⟦2-char-id⟧,
               blockMetadata: ⟦2-char-id⟧,
               worldGenerator: ⟦2-char-id⟧,
               seed: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 37 · Change · +1 / -1</summary>

```diff
@@ -1290,7 +1290,7 @@
                 saltFlats: new ⟦2-char-id⟧(...⟦2-char-id⟧),
                 survivorGrove: new ⟦2-char-id⟧(...⟦2-char-id⟧)
               },
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.k)(⟦2-char-id⟧);
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.l)(⟦2-char-id⟧);
             return Object.keys(⟦2-char-id⟧).map((⟦2-char-id⟧ => ({
               biome: ⟦2-char-id⟧[⟦2-char-id⟧],
               frequency: ⟦2-char-id⟧[⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 38 · Change · +2 / -2</summary>

```diff
@@ -1300,9 +1300,9 @@
           }
         }
       },
-      518: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      551: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          b: () => ⟦2-char-id⟧
+          c: () => ⟦2-char-id⟧
         });
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 39 · Change · +2 / -2</summary>

```diff
@@ -1310,8 +1310,8 @@
             const ⟦2-char-id⟧ = {};
             for (const ⟦2-char-id⟧ in this.keyToValueTable) {
               const ⟦2-char-id⟧ = this.keyToValueTable[⟦2-char-id⟧];
-              if (void 0 !== ⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Duplicate value found in bi-directional table: ${String(JJ)}`);
-              ⟦2-char-id⟧[⟦2-char-id⟧] = "string" === ⟦2-char-id⟧ ? FJ : Number(⟦2-char-id⟧)
+              if (void 0 !== ⟦2-char-id⟧[⟦2-char-id⟧]) throw new Error(`Duplicate value found in bi-directional table: ${String(BB)}`);
+              ⟦2-char-id⟧[⟦2-char-id⟧] = "string" === ⟦2-char-id⟧ ? VB : Number(⟦2-char-id⟧)
             }
             this.valueToKeyTable = ⟦2-char-id⟧
           }
```

</details>

<details>
<summary>Hunk 40 · Change · +4 / -4</summary>

```diff
@@ -1323,14 +1323,14 @@
           }
         }
       },
-      59564: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59872: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          d: () => ⟦2-char-id⟧
+          c: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(38085);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(38074);
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ⟦2-char-id⟧.e,
+            let ⟦2-char-id⟧ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ⟦2-char-id⟧.c,
               ⟦2-char-id⟧ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                 x: 0,
                 y: 0,
```

</details>

<details>
<summary>Hunk 41 · Change · +2 / -2</summary>

```diff
@@ -1356,9 +1356,9 @@
           }
         }
       },
-      38085: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      38074: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          e: () => ⟦2-char-id⟧
+          c: () => ⟦2-char-id⟧
         });
         class ⟦2-char-id⟧ {
           constructor() {
```

</details>

<details>
<summary>Hunk 42 · Change · +4 / -4</summary>

```diff
@@ -1459,14 +1459,14 @@
         }
         class ⟦2-char-id⟧ extends Error {
           constructor() {
-            super(`${FJ.name} has been mutated during iteration`)
+            super(`${VB.name} has been mutated during iteration`)
           }
         }
       },
-      59618: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59925: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          b: () => ⟦2-char-id⟧,
-          f: () => ⟦2-char-id⟧
+          e: () => ⟦2-char-id⟧,
+          i: () => ⟦2-char-id⟧
         });
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 43 · Change · +1 / -1</summary>

```diff
@@ -1533,7 +1533,7 @@
         const ⟦2-char-id⟧ = 2 ** 25;
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          return ⟦2-char-id⟧ > -⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ > -⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧ * (2 * ⟦2-char-id⟧) + cJ : `${JJ}|${cJ}`
+          return ⟦2-char-id⟧ > -⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧ > -⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ ? ⟦2-char-id⟧ * (2 * ⟦2-char-id⟧) + TB : `${BB}|${TB}`
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 44 · Change · +24 / -24</summary>

```diff
@@ -1545,45 +1545,45 @@
           ⟦2-char-id⟧.prev.next = ⟦2-char-id⟧.next, ⟦2-char-id⟧.next.prev = ⟦2-char-id⟧.prev
         }
       },
-      59566: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59874: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          c: () => ⟦2-char-id⟧,
-          d: () => ⟦2-char-id⟧,
           e: () => ⟦2-char-id⟧,
+          f: () => ⟦2-char-id⟧,
           i: () => ⟦2-char-id⟧,
-          m: () => ⟦2-char-id⟧,
-          n: () => ⟦2-char-id⟧,
-          q: () => ⟦2-char-id⟧,
-          t: () => ⟦2-char-id⟧,
+          k: () => ⟦2-char-id⟧,
+          o: () => ⟦2-char-id⟧,
+          p: () => ⟦2-char-id⟧,
+          s: () => ⟦2-char-id⟧,
           v: () => ⟦2-char-id⟧,
-          x: () => ⟦2-char-id⟧,
+          w: () => ⟦2-char-id⟧,
+          y: () => ⟦2-char-id⟧,
           B: () => ⟦2-char-id⟧,
-          C: () => ⟦2-char-id⟧,
-          E: () => ⟦2-char-id⟧,
+          D: () => ⟦2-char-id⟧,
           F: () => ⟦2-char-id⟧,
-          I: () => ⟦2-char-id⟧,
-          K: () => ⟦2-char-id⟧,
+          G: () => ⟦2-char-id⟧,
+          H: () => ⟦2-char-id⟧,
+          J: () => ⟦2-char-id⟧,
           L: () => ⟦2-char-id⟧,
-          O: () => ⟦2-char-id⟧,
-          S: () => ⟦2-char-id⟧,
-          T: () => ⟦2-char-id⟧,
+          N: () => ⟦2-char-id⟧,
+          P: () => ⟦2-char-id⟧,
+          R: () => ⟦2-char-id⟧,
+          U: () => ⟦2-char-id⟧,
           V: () => ⟦2-char-id⟧,
-          X: () => ⟦2-char-id⟧,
-          $: () => ⟦2-char-id⟧,
-          bb: () => ⟦2-char-id⟧,
-          eb: () => ⟦2-char-id⟧
+          Y: () => ⟦2-char-id⟧,
+          ab: () => ⟦2-char-id⟧,
+          db: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59540),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(535),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59574),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(3735);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59848),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(572),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59881),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(3734);
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             let {
               cactusChance: ⟦2-char-id⟧,
               maxCactusHeight: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
-            this.columnRandom = new ⟦2-char-id⟧.g(""), this.flowerPatchRandom = new ⟦2-char-id⟧.g(""), this.cactusRandom = new ⟦2-char-id⟧.g(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = void 0, this.pineGrassChance = void 0, this.pineFernChance = void 0, this.jungleTallGrassChance = void 0, this.catnipChance = void 0, this.autumnFernChance = void 0, this.cactusChance = void 0, this.maxCactusHeight = void 0, this.doFlowerGen = void 0, this.flowerInfos = void 0, this.totalFlowerPatchChance = void 0, this.flowerPatchPointGen = void 0, this.Kn = void 0, this.maxPatchRadius = void 0, this.grassId = void 0, this.tallGrassId = void 0, this.tallGrassTopId = void 0, this.cornSeedsId = void 0, this.cornPlantId = void 0, this.spectralGrassId = void 0, this.pineGrassId = void 0, this.pineFernId = void 0, this.jungleTallGrassId = void 0, this.jungleTallGrassTopId = void 0, this.catnipId = void 0, this.autumnFernId = void 0, this.cactusId = void 0, this.fatCactusId = void 0, this.blockMetadata = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.grassChance = ⟦2-char-id⟧, this.tallGrassChance = ⟦2-char-id⟧, this.cornChance = ⟦2-char-id⟧, this.spectralGrassChance = ⟦2-char-id⟧, this.pineGrassChance = ⟦2-char-id⟧, this.pineFernChance = ⟦2-char-id⟧, this.jungleTallGrassChance = ⟦2-char-id⟧, this.catnipChance = ⟦2-char-id⟧, this.autumnFernChance = ⟦2-char-id⟧, this.cactusChance = ⟦2-char-id⟧, this.maxCactusHeight = ⟦2-char-id⟧, this.Kn = ⟦2-char-id⟧, this.flowerInfos = [{
+            this.columnRandom = new ⟦2-char-id⟧.g(""), this.flowerPatchRandom = new ⟦2-char-id⟧.g(""), this.cactusRandom = new ⟦2-char-id⟧.g(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = void 0, this.pineGrassChance = void 0, this.pineFernChance = void 0, this.jungleTallGrassChance = void 0, this.catnipChance = void 0, this.autumnFernChance = void 0, this.cactusChance = void 0, this.maxCactusHeight = void 0, this.doFlowerGen = void 0, this.flowerInfos = void 0, this.totalFlowerPatchChance = void 0, this.flowerPatchPointGen = void 0, this.UD = void 0, this.maxPatchRadius = void 0, this.grassId = void 0, this.tallGrassId = void 0, this.tallGrassTopId = void 0, this.cornSeedsId = void 0, this.cornPlantId = void 0, this.spectralGrassId = void 0, this.pineGrassId = void 0, this.pineFernId = void 0, this.jungleTallGrassId = void 0, this.jungleTallGrassTopId = void 0, this.catnipId = void 0, this.autumnFernId = void 0, this.cactusId = void 0, this.fatCactusId = void 0, this.blockMetadata = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.grassChance = ⟦2-char-id⟧, this.tallGrassChance = ⟦2-char-id⟧, this.cornChance = ⟦2-char-id⟧, this.spectralGrassChance = ⟦2-char-id⟧, this.pineGrassChance = ⟦2-char-id⟧, this.pineFernChance = ⟦2-char-id⟧, this.jungleTallGrassChance = ⟦2-char-id⟧, this.catnipChance = ⟦2-char-id⟧, this.autumnFernChance = ⟦2-char-id⟧, this.cactusChance = ⟦2-char-id⟧, this.maxCactusHeight = ⟦2-char-id⟧, this.UD = ⟦2-char-id⟧, this.flowerInfos = [{
               flower: "Dandelion",
               patchChance: ⟦2-char-id⟧.dandelionChance,
               insidePatchSpawnChance: ⟦2-char-id⟧.defaultFlowerInsidePatchSpawnChance,
```

</details>

<details>
<summary>Hunk 45 · Change · +18 / -18</summary>

```diff
@@ -1723,75 +1723,75 @@
                 patchChance: ⟦2-char-id⟧
               }
               of this.flowerInfos) this.totalFlowerPatchChance += ⟦2-char-id⟧;
-            this.doFlowerGen = null !== ⟦2-char-id⟧.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new ⟦2-char-id⟧.e("flwrPtch", ⟦2-char-id⟧.flowerPatchDistApart, !1, !0, ⟦2-char-id⟧, 4, ⟦2-char-id⟧)), this.grassId = ⟦2-char-id⟧.Grass.id, this.tallGrassId = ⟦2-char-id⟧["Tall Grass"].id, this.tallGrassTopId = ⟦2-char-id⟧["Tall Grass|Top"].id, this.cornSeedsId = ⟦2-char-id⟧["Corn Seeds|FreshlyGrown"].id, this.cornPlantId = ⟦2-char-id⟧["Corn Plant|FreshlyGrown"].id, this.spectralGrassId = ⟦2-char-id⟧["Spectral Grass"].id, this.pineGrassId = ⟦2-char-id⟧["Pine Grass"].id, this.pineFernId = ⟦2-char-id⟧["Pine Fern"].id, this.jungleTallGrassId = ⟦2-char-id⟧["Jungle Tall Grass"].id, this.jungleTallGrassTopId = ⟦2-char-id⟧["Jungle Tall Grass|Top"].id, this.catnipId = ⟦2-char-id⟧.Catnip.id, this.autumnFernId = ⟦2-char-id⟧["Autumn Fern"].id, this.cactusId = ⟦2-char-id⟧.Cactus.id, this.fatCactusId = ⟦2-char-id⟧["Fat Cactus"].id
+            this.doFlowerGen = null !== ⟦2-char-id⟧.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new ⟦2-char-id⟧.c("flwrPtch", ⟦2-char-id⟧.flowerPatchDistApart, !1, !0, ⟦2-char-id⟧, 4, ⟦2-char-id⟧)), this.grassId = ⟦2-char-id⟧.Grass.id, this.tallGrassId = ⟦2-char-id⟧["Tall Grass"].id, this.tallGrassTopId = ⟦2-char-id⟧["Tall Grass|Top"].id, this.cornSeedsId = ⟦2-char-id⟧["Corn Seeds|FreshlyGrown"].id, this.cornPlantId = ⟦2-char-id⟧["Corn Plant|FreshlyGrown"].id, this.spectralGrassId = ⟦2-char-id⟧["Spectral Grass"].id, this.pineGrassId = ⟦2-char-id⟧["Pine Grass"].id, this.pineFernId = ⟦2-char-id⟧["Pine Fern"].id, this.jungleTallGrassId = ⟦2-char-id⟧["Jungle Tall Grass"].id, this.jungleTallGrassTopId = ⟦2-char-id⟧["Jungle Tall Grass|Top"].id, this.catnipId = ⟦2-char-id⟧.Catnip.id, this.autumnFernId = ⟦2-char-id⟧["Autumn Fern"].id, this.cactusId = ⟦2-char-id⟧.Cactus.id, this.fatCactusId = ⟦2-char-id⟧["Fat Cactus"].id
           }
           addBiomeFloraToColumn(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            if (⟦2-char-id⟧ + 3 >= ⟦2-char-id⟧ && ⟦2-char-id⟧ + 1 < ⟦2-char-id⟧ + this.Kn) {
+            if (⟦2-char-id⟧ + 3 >= ⟦2-char-id⟧ && ⟦2-char-id⟧ + 1 < ⟦2-char-id⟧ + this.UD) {
               const ⟦2-char-id⟧ = this.columnRandom;
-              ⟦2-char-id⟧.reseed(`${UJ}${XJ}${this.seed}flora`);
+              ⟦2-char-id⟧.reseed(`${yB}${lB}${this.seed}flora`);
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.next();
               if (⟦2-char-id⟧ < this.grassChance) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-                0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.grassId)
+                0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.grassId)
               } else {
                 if (⟦2-char-id⟧ < this.grassChance + this.tallGrassChance) {
                   {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.tallGrassId)
+                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.tallGrassId)
                   } {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 2 - ⟦2-char-id⟧;
-                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.tallGrassTopId)
+                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.tallGrassTopId)
                   }
                   return
                 }
                 if (⟦2-char-id⟧ < this.grassChance + this.tallGrassChance + this.cornChance) {
                   {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.cornSeedsId)
+                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.cornSeedsId)
                   } {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 2 - ⟦2-char-id⟧;
-                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.cornPlantId)
+                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.cornPlantId)
                   } {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 3 - ⟦2-char-id⟧;
-                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.cornPlantId)
+                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.cornPlantId)
                   }
                   return
                 }
                 if (⟦2-char-id⟧ < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-                  0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.spectralGrassId)
+                  0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.spectralGrassId)
                 } else if (⟦2-char-id⟧ < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-                  0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.pineGrassId)
+                  0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.pineGrassId)
                 } else if (⟦2-char-id⟧ < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-                  0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.pineFernId)
+                  0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.pineFernId)
                 } else {
                   if (⟦2-char-id⟧ < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance) {
                     {
                       const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-                      0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.jungleTallGrassId)
+                      0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.jungleTallGrassId)
                     } {
                       const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 2 - ⟦2-char-id⟧;
-                      0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.jungleTallGrassTopId)
+                      0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.jungleTallGrassTopId)
                     }
                     return
                   }
                   if (⟦2-char-id⟧ < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance) {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.catnipId)
+                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.catnipId)
                   } else if (⟦2-char-id⟧ < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance + this.autumnFernChance) {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1 - ⟦2-char-id⟧;
-                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.autumnFernId)
+                    0 <= ⟦2-char-id⟧ && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.autumnFernId)
                   }
                 }
               }
               if (this.doFlowerGen && this.totalFlowerPatchChance > 0 && ⟦2-char-id⟧ + 1 >= ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = this.flowerPatchPointGen.getClosestPoint(⟦2-char-id⟧, ⟦2-char-id⟧),
-                  ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.A)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+                  ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.H)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
                 if (⟦2-char-id⟧ < this.maxPatchRadius) {
                   const ⟦2-char-id⟧ = this.flowerPatchRandom;
-                  ⟦2-char-id⟧.reseed(`${jJ[0]}${jJ[1]}${this.seed}flowerpatch`);
+                  ⟦2-char-id⟧.reseed(`${gB[0]}${gB[1]}${this.seed}flowerpatch`);
                   const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.next() * this.totalFlowerPatchChance);
                   let ⟦2-char-id⟧ = 0,
                     ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 46 · Change · +8 / -8</summary>

```diff
@@ -1806,29 +1806,29 @@
             }
             if (0 !== this.cactusChance) {
               const ⟦2-char-id⟧ = this.cactusRandom;
-              ⟦2-char-id⟧.reseed(`${UJ}${XJ}${this.seed}cactus`);
+              ⟦2-char-id⟧.reseed(`${yB}${lB}${this.seed}cactus`);
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.next();
               if (⟦2-char-id⟧ < this.cactusChance) {
                 const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.next() * (this.maxCactusHeight - 1)) + 1,
-                  ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + ⟦2-char-id⟧ + 1, ⟦2-char-id⟧ + this.Kn),
+                  ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + ⟦2-char-id⟧ + 1, ⟦2-char-id⟧ + this.UD),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ < this.cactusChance * (2 / 3);
                 for (let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧ + 1, ⟦2-char-id⟧); ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ ? this.fatCactusId : this.cactusId)
               }
             }
           }
         }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59549),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59564),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(38085);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59859),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59872),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(38074);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ);
-            if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${eJ.chunkX}, ${eJ.chunkY}, ${eJ.chunkZ}`);
+            if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${pB.chunkX}, ${pB.chunkY}, ${pB.chunkZ}`);
             ⟦2-char-id⟧.set(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ, ⟦2-char-id⟧.rle)
           }
-          return new ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+          return new ⟦2-char-id⟧.c(⟦2-char-id⟧, {
             x: 0,
             y: 0,
             z: 0
```

</details>

<details>
<summary>Hunk 47 · Change · +3 / -3</summary>

```diff
@@ -2033,13 +2033,13 @@
         };
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ);
-            if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${eJ.chunkX}, ${eJ.chunkY}, ${eJ.chunkZ}`);
+            if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${pB.chunkX}, ${pB.chunkY}, ${pB.chunkZ}`);
             ⟦2-char-id⟧.set(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ, ⟦2-char-id⟧.rle)
           }
-          return new ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+          return new ⟦2-char-id⟧.c(⟦2-char-id⟧, {
             x: 0,
             y: 0,
             z: 0
```

</details>

<details>
<summary>Hunk 48 · Change · +3 / -3</summary>

```diff
@@ -2249,13 +2249,13 @@
         };
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ);
-            if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${eJ.chunkX}, ${eJ.chunkY}, ${eJ.chunkZ}`);
+            if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${pB.chunkX}, ${pB.chunkY}, ${pB.chunkZ}`);
             ⟦2-char-id⟧.set(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ, ⟦2-char-id⟧.rle)
           }
-          return new ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+          return new ⟦2-char-id⟧.c(⟦2-char-id⟧, {
             x: 0,
             y: 0,
             z: 0
```

</details>

<details>
<summary>Hunk 49 · Change · +3 / -3</summary>

```diff
@@ -2675,13 +2675,13 @@
         };
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ);
-            if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${eJ.chunkX}, ${eJ.chunkY}, ${eJ.chunkZ}`);
+            if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${pB.chunkX}, ${pB.chunkY}, ${pB.chunkZ}`);
             ⟦2-char-id⟧.set(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ, ⟦2-char-id⟧.rle)
           }
-          return new ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+          return new ⟦2-char-id⟧.c(⟦2-char-id⟧, {
             x: 0,
             y: 0,
             z: 0
```

</details>

<details>
<summary>Hunk 50 · Change · +24 / -24</summary>

```diff
@@ -3112,56 +3112,56 @@
                 localX: 10,
                 localY: 4,
                 localZ: 22,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 9,
                 localY: 4,
                 localZ: 13,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 10,
                 localY: 4,
                 localZ: 16,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 22,
                 localY: 4,
                 localZ: 9,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 51 · Change · +2 / -2</summary>

```diff
@@ -3203,8 +3203,8 @@
                 localX: 12,
                 localY: 2,
                 localZ: 11,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 52 · Change · +6 / -6</summary>

```diff
@@ -3316,14 +3316,14 @@
                 localX: 15,
                 localY: 11,
                 localZ: 20,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 53 · Change · +6 / -6</summary>

```diff
@@ -3365,14 +3365,14 @@
                 localX: 8,
                 localY: 8,
                 localZ: 14,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 54 · Change · +9 / -9</summary>

```diff
@@ -3390,25 +3390,25 @@
                 localX: 5,
                 localY: 0,
                 localZ: 4,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 6,
                 localY: 1,
                 localZ: 6,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 55 · Change · +1 / -1</summary>

```diff
@@ -3416,7 +3416,7 @@
                 localX: 6,
                 localY: 2,
                 localZ: 6,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Frost Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 56 · Change · +12 / -12</summary>

```diff
@@ -3446,28 +3446,28 @@
                 localX: 5,
                 localY: 6,
                 localZ: 8,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 7,
                 localY: 9,
                 localZ: 8,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 57 · Change · +1 / -1</summary>

```diff
@@ -3475,7 +3475,7 @@
                 localX: 2,
                 localY: 4,
                 localZ: 8,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Frost Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 58 · Change · +8 / -8</summary>

```diff
@@ -3505,22 +3505,22 @@
                 localX: 4,
                 localY: 3,
                 localZ: 3,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }])
               }, {
                 localX: 10,
                 localY: 7,
                 localZ: 5,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 59 · Change · +1 / -1</summary>

```diff
@@ -3528,7 +3528,7 @@
                 localX: 7,
                 localY: 2,
                 localZ: 5,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Frost Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 60 · Change · +6 / -6</summary>

```diff
@@ -3558,14 +3558,14 @@
                 localX: 5,
                 localY: 2,
                 localZ: 4,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 61 · Change · +1 / -1</summary>

```diff
@@ -3573,7 +3573,7 @@
                 localX: 5,
                 localY: 3,
                 localZ: 4,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Frost Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 62 · Change · +12 / -12</summary>

```diff
@@ -3621,28 +3621,28 @@
                 localX: 3,
                 localY: 4,
                 localZ: 5,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 6,
                 localY: 4,
                 localZ: 21,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 63 · Change · +1 / -1</summary>

```diff
@@ -3650,7 +3650,7 @@
                 localX: 6,
                 localY: 6,
                 localZ: 8,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Frost Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 64 · Change · +18 / -18</summary>

```diff
@@ -3686,42 +3686,42 @@
                 localX: 4,
                 localY: 6,
                 localZ: 12,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 13,
                 localY: 6,
                 localZ: 3,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 17,
                 localY: 6,
                 localZ: 13,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 65 · Change · +1 / -1</summary>

```diff
@@ -3729,7 +3729,7 @@
                 localX: 15,
                 localY: 2,
                 localZ: 8,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Frost Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 66 · Change · +4 / -4</summary>

```diff
@@ -3771,16 +3771,16 @@
                 localX: 21,
                 localY: 19,
                 localZ: 14,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 21,
                 localY: 20,
                 localZ: 27,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 67 · Change · +1 / -1</summary>

```diff
@@ -3788,7 +3788,7 @@
                 localX: 21,
                 localY: 20,
                 localZ: 14,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Knight",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 68 · Change · +4 / -4</summary>

```diff
@@ -3830,16 +3830,16 @@
                 localX: 18,
                 localY: 25,
                 localZ: 19,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 19,
                 localY: 27,
                 localZ: 2,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 69 · Change · +1 / -1</summary>

```diff
@@ -3847,7 +3847,7 @@
                 localX: 16,
                 localY: 25,
                 localZ: 9,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Knight",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 70 · Change · +11 / -11</summary>

```diff
@@ -3865,25 +3865,25 @@
                 localX: 9,
                 localY: 1,
                 localZ: 6,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 1
                 }])
               }, {
                 localX: 4,
                 localY: 0,
                 localZ: 4,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 71 · Change · +1 / -1</summary>

```diff
@@ -3891,7 +3891,7 @@
                 localX: 6,
                 localY: 1,
                 localZ: 6,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 72 · Change · +16 / -16</summary>

```diff
@@ -3918,36 +3918,36 @@
                 localX: 1,
                 localY: 2,
                 localZ: 1,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 1
                 }])
               }, {
                 localX: 7,
                 localY: 1,
                 localZ: 4,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 0,
                 localZ: 6,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 73 · Change · +1 / -1</summary>

```diff
@@ -3955,7 +3955,7 @@
                 localX: 6,
                 localY: 1,
                 localZ: 5,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 74 · Change · +11 / -11</summary>

```diff
@@ -3979,25 +3979,25 @@
                 localX: 1,
                 localY: 1,
                 localZ: 6,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 1
                 }])
               }, {
                 localX: 6,
                 localY: 0,
                 localZ: 4,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 75 · Change · +1 / -1</summary>

```diff
@@ -4005,7 +4005,7 @@
                 localX: 7,
                 localY: 1,
                 localZ: 4,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 76 · Change · +11 / -11</summary>

```diff
@@ -4023,25 +4023,25 @@
                 localX: 5,
                 localY: 2,
                 localZ: 4,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 1
                 }])
               }, {
                 localX: 2,
                 localY: 0,
                 localZ: 1,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 77 · Change · +1 / -1</summary>

```diff
@@ -4049,7 +4049,7 @@
                 localX: 1,
                 localY: 2,
                 localZ: 2,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 78 · Change · +17 / -17</summary>

```diff
@@ -4067,39 +4067,39 @@
                 localX: 2,
                 localY: 2,
                 localZ: 9,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 1
                 }])
               }, {
                 localX: 6,
                 localY: 7,
                 localZ: 7,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 1,
                 localZ: 6,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 79 · Change · +1 / -1</summary>

```diff
@@ -4107,7 +4107,7 @@
                 localX: 6,
                 localY: 7,
                 localZ: 5,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 80 · Change · +18 / -18</summary>

```diff
@@ -4125,42 +4125,42 @@
                 localX: 3,
                 localY: 6,
                 localZ: 7,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 2,
                 localZ: 8,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 1,
                 localZ: 7,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 81 · Change · +1 / -1</summary>

```diff
@@ -4168,7 +4168,7 @@
                 localX: 7,
                 localY: 6,
                 localZ: 5,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 82 · Change · +11 / -11</summary>

```diff
@@ -4192,25 +4192,25 @@
                 localX: 7,
                 localY: 10,
                 localZ: 13,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 6,
                 localY: 2,
                 localZ: 5,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 83 · Change · +1 / -1</summary>

```diff
@@ -4218,7 +4218,7 @@
                 localX: 6,
                 localY: 9,
                 localZ: 13,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 84 · Change · +11 / -11</summary>

```diff
@@ -4248,25 +4248,25 @@
                 localX: 12,
                 localY: 9,
                 localZ: 9,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 7,
                 localY: 0,
                 localZ: 16,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 85 · Change · +1 / -1</summary>

```diff
@@ -4274,7 +4274,7 @@
                 localX: 9,
                 localY: 0,
                 localZ: 9,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 86 · Change · +1 / -1</summary>

```diff
@@ -4282,7 +4282,7 @@
                 localX: 16,
                 localY: 7,
                 localZ: 10,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 87 · Change · +11 / -11</summary>

```diff
@@ -4312,25 +4312,25 @@
                 localX: 13,
                 localY: 10,
                 localZ: 25,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 1,
                 localZ: 5,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 88 · Change · +1 / -1</summary>

```diff
@@ -4338,7 +4338,7 @@
                 localX: 4,
                 localY: 6,
                 localZ: 5,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 89 · Change · +1 / -1</summary>

```diff
@@ -4346,7 +4346,7 @@
                 localX: 4,
                 localY: 6,
                 localZ: 25,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 90 · Change · +11 / -11</summary>

```diff
@@ -4376,25 +4376,25 @@
                 localX: 3,
                 localY: 6,
                 localZ: 2,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }])
               }, {
                 localX: 3,
                 localY: 1,
                 localZ: 10,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 91 · Change · +1 / -1</summary>

```diff
@@ -4402,7 +4402,7 @@
                 localX: 3,
                 localY: 6,
                 localZ: 5,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 92 · Change · +1 / -1</summary>

```diff
@@ -4410,7 +4410,7 @@
                 localX: 15,
                 localY: 6,
                 localZ: 19,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 93 · Change · +12 / -12</summary>

```diff
@@ -4428,28 +4428,28 @@
                 localX: 9,
                 localY: 13,
                 localZ: 10,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 1,
                 localZ: 4,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 94 · Change · +1 / -1</summary>

```diff
@@ -4457,7 +4457,7 @@
                 localX: 8,
                 localY: 1,
                 localZ: 7,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 95 · Change · +1 / -1</summary>

```diff
@@ -4465,7 +4465,7 @@
                 localX: 9,
                 localY: 13,
                 localZ: 5,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 96 · Change · +14 / -14</summary>

```diff
@@ -4498,36 +4498,36 @@
                 localX: 4,
                 localY: 5,
                 localZ: 3,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 16,
                 localY: 3,
                 localZ: 20,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 13,
                 localY: 1,
                 localZ: 12,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 97 · Change · +1 / -1</summary>

```diff
@@ -4535,7 +4535,7 @@
                 localX: 4,
                 localY: 6,
                 localZ: 9,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 98 · Change · +1 / -1</summary>

```diff
@@ -4543,7 +4543,7 @@
                 localX: 13,
                 localY: 1,
                 localZ: 8,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 99 · Change · +1 / -1</summary>

```diff
@@ -4551,7 +4551,7 @@
                 localX: 13,
                 localY: 1,
                 localZ: 16,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 100 · Change · +14 / -14</summary>

```diff
@@ -4581,36 +4581,36 @@
                 localX: 5,
                 localY: 7,
                 localZ: 8,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 18,
                 localZ: 9,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 6,
                 localY: 1,
                 localZ: 5,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 101 · Change · +1 / -1</summary>

```diff
@@ -4618,7 +4618,7 @@
                 localX: 9,
                 localY: 1,
                 localZ: 7,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 102 · Change · +1 / -1</summary>

```diff
@@ -4626,7 +4626,7 @@
                 localX: 9,
                 localY: 13,
                 localZ: 5,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 103 · Change · +16 / -16</summary>

```diff
@@ -4650,36 +4650,36 @@
                 localX: 7,
                 localY: 3,
                 localZ: 3,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }])
               }, {
                 localX: 6,
                 localY: 14,
                 localZ: 4,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 7,
                 localY: 2,
                 localZ: 2,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.RARE,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.RARE,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 104 · Change · +1 / -1</summary>

```diff
@@ -4687,7 +4687,7 @@
                 localX: 3,
                 localY: 3,
                 localZ: 4,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 105 · Change · +1 / -1</summary>

```diff
@@ -4695,7 +4695,7 @@
                 localX: 11,
                 localY: 3,
                 localZ: 4,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 106 · Change · +17 / -17</summary>

```diff
@@ -4722,39 +4722,39 @@
                 localX: 1,
                 localY: 7,
                 localZ: 2,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 11,
                 localY: 2,
                 localZ: 11,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 0,
                 localZ: 1,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 107 · Change · +1 / -1</summary>

```diff
@@ -4762,7 +4762,7 @@
                 localX: 3,
                 localY: 2,
                 localZ: 3,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 108 · Change · +1 / -1</summary>

```diff
@@ -4770,7 +4770,7 @@
                 localX: 9,
                 localY: 2,
                 localZ: 9,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 109 · Change · +23 / -23</summary>

```diff
@@ -4797,53 +4797,53 @@
                 localX: 5,
                 localY: 2,
                 localZ: 5,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 11,
                 localZ: 13,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 6,
                 localY: 15,
                 localZ: 23,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 19,
                 localZ: 23,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.RARE,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.RARE,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 110 · Change · +1 / -1</summary>

```diff
@@ -4851,7 +4851,7 @@
                 localX: 4,
                 localY: 15,
                 localZ: 23,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 111 · Change · +1 / -1</summary>

```diff
@@ -4859,7 +4859,7 @@
                 localX: 5,
                 localY: 2,
                 localZ: 20,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 112 · Change · +1 / -1</summary>

```diff
@@ -4867,7 +4867,7 @@
                 localX: 5,
                 localY: 3,
                 localZ: 2,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 113 · Change · +17 / -17</summary>

```diff
@@ -4894,39 +4894,39 @@
                 localX: 1,
                 localY: 13,
                 localZ: 23,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 2,
                 localY: 11,
                 localZ: 14,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 6,
                 localY: 15,
                 localZ: 14,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 114 · Change · +1 / -1</summary>

```diff
@@ -4934,7 +4934,7 @@
                 localX: 3,
                 localY: 16,
                 localZ: 15,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 115 · Change · +1 / -1</summary>

```diff
@@ -4942,7 +4942,7 @@
                 localX: 4,
                 localY: 1,
                 localZ: 14,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 116 · Change · +23 / -23</summary>

```diff
@@ -4972,53 +4972,53 @@
                 localX: 12,
                 localY: 2,
                 localZ: 12,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 15,
                 localY: 13,
                 localZ: 11,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 6,
                 localY: 22,
                 localZ: 19,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.RARE,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.RARE,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }, {
                 localX: 7,
                 localY: 0,
                 localZ: 18,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.RARE,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.RARE,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 117 · Change · +1 / -1</summary>

```diff
@@ -5026,7 +5026,7 @@
                 localX: 8,
                 localY: 22,
                 localZ: 17,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 118 · Change · +1 / -1</summary>

```diff
@@ -5034,7 +5034,7 @@
                 localX: 14,
                 localY: 1,
                 localZ: 8,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 119 · Change · +1 / -1</summary>

```diff
@@ -5042,7 +5042,7 @@
                 localX: 16,
                 localY: 16,
                 localZ: 14,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 120 · Change · +34 / -34</summary>

```diff
@@ -5072,78 +5072,78 @@
                 localX: 20,
                 localY: 7,
                 localZ: 11,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 5,
                 localY: 13,
                 localZ: 21,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 27,
                 localY: 22,
                 localZ: 22,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 4,
                 localY: 23,
                 localZ: 30,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 18,
                 localY: 2,
                 localZ: 20,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.EPIC,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.EPIC,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }, {
                 localX: 4,
                 localY: 11,
                 localZ: 26,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.RARE,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.RARE,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 121 · Change · +1 / -1</summary>

```diff
@@ -5151,7 +5151,7 @@
                 localX: 4,
                 localY: 25,
                 localZ: 26,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 122 · Change · +1 / -1</summary>

```diff
@@ -5159,7 +5159,7 @@
                 localX: 9,
                 localY: 16,
                 localZ: 24,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 123 · Change · +1 / -1</summary>

```diff
@@ -5167,7 +5167,7 @@
                 localX: 12,
                 localY: 2,
                 localZ: 26,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 124 · Change · +1 / -1</summary>

```diff
@@ -5175,7 +5175,7 @@
                 localX: 17,
                 localY: 7,
                 localZ: 8,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 125 · Change · +34 / -34</summary>

```diff
@@ -5208,78 +5208,78 @@
                 localX: 18,
                 localY: 2,
                 localZ: 14,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 1
                 }])
               }, {
                 localX: 16,
                 localY: 24,
                 localZ: 31,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.EPIC,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.EPIC,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }, {
                 localX: 19,
                 localY: 13,
                 localZ: 5,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 4,
                 localY: 15,
                 localZ: 20,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 18,
                 localY: 1,
                 localZ: 22,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 32,
                 localY: 2,
                 localZ: 23,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 126 · Change · +1 / -1</summary>

```diff
@@ -5287,7 +5287,7 @@
                 localX: 17,
                 localY: 2,
                 localZ: 13,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 127 · Change · +1 / -1</summary>

```diff
@@ -5295,7 +5295,7 @@
                 localX: 18,
                 localY: 2,
                 localZ: 30,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 128 · Change · +1 / -1</summary>

```diff
@@ -5303,7 +5303,7 @@
                 localX: 18,
                 localY: 15,
                 localZ: 15,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 129 · Change · +1 / -1</summary>

```diff
@@ -5311,7 +5311,7 @@
                 localX: 18,
                 localY: 15,
                 localZ: 25,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 130 · Change · +1 / -1</summary>

```diff
@@ -5319,7 +5319,7 @@
                 localX: 20,
                 localY: 24,
                 localZ: 31,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Skeleton",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 131 · Change · +2 / -2</summary>

```diff
@@ -5331,8 +5331,8 @@
               groundingRadius: 4,
               clearingRadiusSquared: 0,
               undergroundYInterval: {
-                Fe: -15,
-                Ze: -97
+                FB: -15,
+                UB: -97
               },
               yOffset: -2,
               transformationsEnabled: !0,
```

</details>

<details>
<summary>Hunk 132 · Change · +6 / -6</summary>

```diff
@@ -5340,14 +5340,14 @@
                 localX: 7,
                 localY: 1,
                 localZ: 1,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.COMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.COMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 133 · Change · +1 / -1</summary>

```diff
@@ -5355,7 +5355,7 @@
                 localX: 5,
                 localY: 1,
                 localZ: 5,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 2
                 }, {
```

</details>

<details>
<summary>Hunk 134 · Change · +2 / -2</summary>

```diff
@@ -5391,8 +5391,8 @@
               groundingRadius: 2,
               clearingRadiusSquared: 0,
               undergroundYInterval: {
-                Fe: -40,
-                Ze: -97
+                FB: -40,
+                UB: -97
               },
               yOffset: -2,
               transformationsEnabled: !0,
```

</details>

<details>
<summary>Hunk 135 · Change · +12 / -12</summary>

```diff
@@ -5400,28 +5400,28 @@
                 localX: 6,
                 localY: 1,
                 localZ: 8,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 20,
                 localY: 1,
                 localZ: 18,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 136 · Change · +1 / -1</summary>

```diff
@@ -5429,7 +5429,7 @@
                 localX: 13,
                 localY: 1,
                 localZ: 13,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 2
                 }, {
```

</details>

<details>
<summary>Hunk 137 · Change · +2 / -2</summary>

```diff
@@ -5465,8 +5465,8 @@
               groundingRadius: 2,
               clearingRadiusSquared: 0,
               undergroundYInterval: {
-                Fe: -60,
-                Ze: -95
+                FB: -60,
+                UB: -95
               },
               yOffset: -4,
               transformationsEnabled: !0,
```

</details>

<details>
<summary>Hunk 138 · Change · +24 / -24</summary>

```diff
@@ -5474,56 +5474,56 @@
                 localX: 1,
                 localY: 4,
                 localZ: 30,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                  value: ⟦2-char-id⟧.j.EPIC,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }, {
                 localX: 10,
                 localY: 4,
                 localZ: 1,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                  value: ⟦2-char-id⟧.j.EPIC,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }, {
                 localX: 19,
                 localY: 4,
                 localZ: 9,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }, {
                 localX: 10,
                 localY: 4,
                 localZ: 38,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.EPIC,
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 139 · Change · +1 / -1</summary>

```diff
@@ -5531,7 +5531,7 @@
                 localX: 10,
                 localY: 4,
                 localZ: 9,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Draugr Zombie",
                   weight: 2
                 }, {
```

</details>

<details>
<summary>Hunk 140 · Change · +1 / -1</summary>

```diff
@@ -5548,7 +5548,7 @@
                 localX: 10,
                 localY: 4,
                 localZ: 30,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Cave Golem",
                   weight: 2
                 }, {
```

</details>

<details>
<summary>Hunk 141 · Change · +2 / -2</summary>

```diff
@@ -5584,8 +5584,8 @@
               groundingRadius: 2,
               clearingRadiusSquared: 0,
               undergroundYInterval: {
-                Fe: -70,
-                Ze: -95
+                FB: -70,
+                UB: -95
               },
               yOffset: -4,
               transformationsEnabled: !0,
```

</details>

<details>
<summary>Hunk 142 · Change · +16 / -16</summary>

```diff
@@ -5593,44 +5593,44 @@
                 localX: 6,
                 localY: 6,
                 localZ: 32,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 33,
                 localY: 6,
                 localZ: 7,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.UNCOMMON,
-                  weight: 1
-                }, {
-                  value: ⟦2-char-id⟧.i.RARE,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.UNCOMMON,
+                  weight: 1
+                }, {
+                  value: ⟦2-char-id⟧.j.RARE,
                   weight: 1
                 }])
               }, {
                 localX: 19,
                 localY: 6,
                 localZ: 20,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }, {
                 localX: 20,
                 localY: 6,
                 localZ: 18,
-                qualityDistribution: new ⟦2-char-id⟧.f([{
-                  value: ⟦2-char-id⟧.i.EPIC,
+                qualityDistribution: new ⟦2-char-id⟧.d([{
+                  value: ⟦2-char-id⟧.j.EPIC,
                   weight: 2
                 }, {
-                  value: ⟦2-char-id⟧.i.LEGENDARY,
+                  value: ⟦2-char-id⟧.j.LEGENDARY,
                   weight: 1
                 }])
               }],
```

</details>

<details>
<summary>Hunk 143 · Change · +1 / -1</summary>

```diff
@@ -5638,7 +5638,7 @@
                 localX: 12,
                 localY: 6,
                 localZ: 12,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Magma Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 144 · Change · +1 / -1</summary>

```diff
@@ -5646,7 +5646,7 @@
                 localX: 12,
                 localY: 6,
                 localZ: 27,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Magma Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 145 · Change · +1 / -1</summary>

```diff
@@ -5654,7 +5654,7 @@
                 localX: 27,
                 localY: 6,
                 localZ: 12,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Magma Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 146 · Change · +1 / -1</summary>

```diff
@@ -5662,7 +5662,7 @@
                 localX: 27,
                 localY: 6,
                 localZ: 27,
-                mobTypeDistribution: new ⟦2-char-id⟧.f([{
+                mobTypeDistribution: new ⟦2-char-id⟧.d([{
                   value: "Magma Golem",
                   weight: 1
                 }])
```

</details>

<details>
<summary>Hunk 147 · Change · +51 / -51</summary>

```diff
@@ -5670,169 +5670,169 @@
             }
           },
           ⟦2-char-id⟧ = [{
-            oU: "ruinStoneSmall1",
+            fB: "ruinStoneSmall1",
             frequency: .15
           }, {
-            oU: "ruinStoneSmall2",
+            fB: "ruinStoneSmall2",
             frequency: .15
           }, {
-            oU: "ruinStoneSmall3",
+            fB: "ruinStoneSmall3",
             frequency: .15
           }, {
-            oU: "ruinStoneSmall4",
+            fB: "ruinStoneSmall4",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium1",
+            fB: "ruinStoneMedium1",
             frequency: .15
           }, {
-            oU: "ruinStoneSmall5",
+            fB: "ruinStoneSmall5",
             frequency: .15
           }, {
-            oU: "ruinStoneSmall6",
+            fB: "ruinStoneSmall6",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium2",
+            fB: "ruinStoneMedium2",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium3",
+            fB: "ruinStoneMedium3",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium4",
+            fB: "ruinStoneMedium4",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium5",
+            fB: "ruinStoneMedium5",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium6",
+            fB: "ruinStoneMedium6",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium7",
+            fB: "ruinStoneMedium7",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium8",
+            fB: "ruinStoneMedium8",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium9",
+            fB: "ruinStoneMedium9",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium10",
+            fB: "ruinStoneMedium10",
             frequency: .15
           }, {
-            oU: "ruinStoneMedium11",
+            fB: "ruinStoneMedium11",
             frequency: .15
           }, {
-            oU: "ruinStoneLarge1",
+            fB: "ruinStoneLarge1",
             frequency: .15
           }, {
-            oU: "ruinStoneLarge2",
+            fB: "ruinStoneLarge2",
             frequency: .15
           }, {
-            oU: "ruinStoneLarge3",
+            fB: "ruinStoneLarge3",
             frequency: .15
           }],
           ⟦2-char-id⟧ = [{
-            oU: "treeMapleLarge1",
+            fB: "treeMapleLarge1",
             frequency: 1
           }, {
-            oU: "treeMapleLarge2",
+            fB: "treeMapleLarge2",
             frequency: 1.5
           }],
           ⟦2-char-id⟧ = {
             ruins: [{
-              oU: "ruinStoneSmall1",
+              fB: "ruinStoneSmall1",
               frequency: .3
             }, {
-              oU: "ruinStoneSmall2",
+              fB: "ruinStoneSmall2",
               frequency: .3
             }, {
-              oU: "ruinStoneSmall3",
+              fB: "ruinStoneSmall3",
               frequency: .3
             }, {
-              oU: "ruinStoneSmall4",
+              fB: "ruinStoneSmall4",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium1",
+              fB: "ruinStoneMedium1",
               frequency: .3
             }, {
-              oU: "ruinStoneSmall5",
+              fB: "ruinStoneSmall5",
               frequency: .3
             }, {
-              oU: "ruinStoneSmall6",
+              fB: "ruinStoneSmall6",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium2",
+              fB: "ruinStoneMedium2",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium3",
+              fB: "ruinStoneMedium3",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium4",
+              fB: "ruinStoneMedium4",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium5",
+              fB: "ruinStoneMedium5",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium6",
+              fB: "ruinStoneMedium6",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium7",
+              fB: "ruinStoneMedium7",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium8",
+              fB: "ruinStoneMedium8",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium9",
+              fB: "ruinStoneMedium9",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium10",
+              fB: "ruinStoneMedium10",
               frequency: .3
             }, {
-              oU: "ruinStoneMedium11",
+              fB: "ruinStoneMedium11",
               frequency: .3
             }, {
-              oU: "ruinStoneLarge1",
+              fB: "ruinStoneLarge1",
               frequency: .3
             }, {
-              oU: "ruinStoneLarge2",
+              fB: "ruinStoneLarge2",
               frequency: .3
             }, {
-              oU: "ruinStoneLarge3",
+              fB: "ruinStoneLarge3",
               frequency: .3
             }],
             trees: [{
-              oU: "treeMapleLarge1",
+              fB: "treeMapleLarge1",
               frequency: 2
             }, {
-              oU: "treeMapleLarge2",
+              fB: "treeMapleLarge2",
               frequency: 3
             }]
           },
           ⟦2-char-id⟧ = {
             ruins: ⟦2-char-id⟧.ruins,
             trees: [{
-              oU: "treePineLarge1",
+              fB: "treePineLarge1",
               frequency: 5
             }, {
-              oU: "treePineLarge2",
+              fB: "treePineLarge2",
               frequency: 5
             }]
           },
           ⟦2-char-id⟧ = [{
-            oU: "dungeonDraugrSmall1",
+            fB: "dungeonDraugrSmall1",
             frequency: 45
           }, {
-            oU: "dungeonDraugrMedium1",
+            fB: "dungeonDraugrMedium1",
             frequency: 10
           }, {
-            oU: "dungeonDraugrLarge1",
+            fB: "dungeonDraugrLarge1",
             frequency: 10
           }, {
-            oU: "dungeonMagmaLarge1",
+            fB: "dungeonMagmaLarge1",
             frequency: 25
           }],
           ⟦2-char-id⟧ = ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
             let {
-              oU: ⟦2-char-id⟧
+              fB: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
             return ⟦2-char-id⟧
           }));
```

</details>

<details>
<summary>Hunk 148 · Change · +1 / -1</summary>

```diff
@@ -5841,7 +5841,7 @@
           for (var ⟦2-char-id⟧ = arguments.length, ⟦2-char-id⟧ = new Array(⟦2-char-id⟧ > 1 ? ⟦2-char-id⟧ - 1 : 0), ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧[⟦2-char-id⟧ - 1] = arguments[⟦2-char-id⟧];
           return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.flat().map((⟦2-char-id⟧ => {
             let {
-              oU: ⟦2-char-id⟧,
+              fB: ⟦2-char-id⟧,
               frequency: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
             return {
```

</details>

<details>
<summary>Hunk 149 · Change · +1 / -1</summary>

```diff
@@ -5854,7 +5854,7 @@
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let ⟦2-char-id⟧ = 0;
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧ += ⟦2-char-id⟧.frequency;
-          if (⟦2-char-id⟧ > 100) throw new Error(`Total frequency of prefabs exceeds 100: ${ZJ}`);
+          if (⟦2-char-id⟧ > 100) throw new Error(`Total frequency of prefabs exceeds 100: ${dB}`);
           return {
             density: ⟦2-char-id⟧,
             frequencyParams: {
```

</details>

<details>
<summary>Hunk 150 · Change · +4 / -4</summary>

```diff
@@ -5868,13 +5868,13 @@
             let {
               oreGenerator: ⟦2-char-id⟧
             } = ⟦2-char-id⟧, ⟦2-char-id⟧ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
-            this.minDistanceFromOrigin = 0, this.offsettedHeight = -5, this.topsoilBlockType = void 0, this.lowsoilBlockType = void 0, this.topwaterBlockType = void 0, this.blockMetadata = void 0, this.Kn = void 0, this.treeMinDist = 5, this.hasScatteredLakes = !1, this._heightmapSimplex = void 0, this.worldGenerator = void 0, this.oreGenerator = void 0, this.floraGenerator = void 0, this.maxCactusHeight = 4, this.grassChance = .0225, this.tallGrassChance = .0025, this.cornChance = 0, this.spectralGrassChance = 0, this.pineGrassChance = 0, this.pineFernChance = 0, this.jungleTallGrassChance = 0, this.catnipChance = 0, this.autumnFernChance = 0, this.maxFloraHeight = this.maxCactusHeight, this.flowerPatchDistApart = 35, this.defaultFlowerInsidePatchSpawnChance = .5, this.defaultFlowerPatchRadius = 3, this.poppyChance = 100, this.daisyChance = 100, this.pinkTulipChance = 100, this.cactusChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.bluebellChance = 0, this.alliumChance = 0, this.fallenMapleLeavesChance = 0, this.fallenCherryLeavesChance = 0, this.melonChance = 0, this.watermelonChance = 0, this.pumpkinChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cottonChance = 0, this.chiliPepperChance = 0, this.lavaChiliPepperChance = 0, this.shadowRoseChance = 0, this.fallenPineConeChance = 0, this.mapleTreeChance = 1, this.pineTreeChance = 0, this.plumTreeChance = 0, this.cedarTreeChance = 0, this.aspenTreeChance = 0, this.jungleTreeChance = 0, this.palmTreeChance = 0, this.autumnMapleTreeChance = 0, this.pearTreeChance = 0, this.cherryTreeChance = 0, this.spectralTreeChance = 0, this.mangoTreeChance = 0, this.autumnAspenTreeChance = 0, this.deadTreeChance = 0, this.fallenLogChance = 0, this.waterKept = 1, this.strataDepth = 0, this.maxSurfacePrefabRelief = null, this.key = "base", this.seed = void 0, this.tags = [], this.totalTreeChance = void 0, this.treeChances = void 0, this.prefabDataPerType = void 0, this.Kn = ⟦2-char-id⟧, this.blockMetadata = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.topsoilBlockType = ⟦2-char-id⟧["Grass Block"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Dirt.id, this.topwaterBlockType = ⟦2-char-id⟧.Water.id, this.worldGenerator = ⟦2-char-id⟧, this.oreGenerator = ⟦2-char-id⟧;
+            this.minDistanceFromOrigin = 0, this.offsettedHeight = -5, this.topsoilBlockType = void 0, this.lowsoilBlockType = void 0, this.topwaterBlockType = void 0, this.blockMetadata = void 0, this.UD = void 0, this.treeMinDist = 5, this.hasScatteredLakes = !1, this._heightmapSimplex = void 0, this.worldGenerator = void 0, this.oreGenerator = void 0, this.floraGenerator = void 0, this.maxCactusHeight = 4, this.grassChance = .0225, this.tallGrassChance = .0025, this.cornChance = 0, this.spectralGrassChance = 0, this.pineGrassChance = 0, this.pineFernChance = 0, this.jungleTallGrassChance = 0, this.catnipChance = 0, this.autumnFernChance = 0, this.maxFloraHeight = this.maxCactusHeight, this.flowerPatchDistApart = 35, this.defaultFlowerInsidePatchSpawnChance = .5, this.defaultFlowerPatchRadius = 3, this.poppyChance = 100, this.daisyChance = 100, this.pinkTulipChance = 100, this.cactusChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.bluebellChance = 0, this.alliumChance = 0, this.fallenMapleLeavesChance = 0, this.fallenCherryLeavesChance = 0, this.melonChance = 0, this.watermelonChance = 0, this.pumpkinChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cottonChance = 0, this.chiliPepperChance = 0, this.lavaChiliPepperChance = 0, this.shadowRoseChance = 0, this.fallenPineConeChance = 0, this.mapleTreeChance = 1, this.pineTreeChance = 0, this.plumTreeChance = 0, this.cedarTreeChance = 0, this.aspenTreeChance = 0, this.jungleTreeChance = 0, this.palmTreeChance = 0, this.autumnMapleTreeChance = 0, this.pearTreeChance = 0, this.cherryTreeChance = 0, this.spectralTreeChance = 0, this.mangoTreeChance = 0, this.autumnAspenTreeChance = 0, this.deadTreeChance = 0, this.fallenLogChance = 0, this.waterKept = 1, this.strataDepth = 0, this.maxSurfacePrefabRelief = null, this.key = "base", this.seed = void 0, this.tags = [], this.totalTreeChance = void 0, this.treeChances = void 0, this.prefabDataPerType = void 0, this.UD = ⟦2-char-id⟧, this.blockMetadata = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.topsoilBlockType = ⟦2-char-id⟧["Grass Block"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Dirt.id, this.topwaterBlockType = ⟦2-char-id⟧.Water.id, this.worldGenerator = ⟦2-char-id⟧, this.oreGenerator = ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = Math.ceil(⟦2-char-id⟧.prefabSize / 2),
               ⟦2-char-id⟧ = {
-                [⟦2-char-id⟧.q.SURFACE]: ⟦2-char-id⟧,
-                [⟦2-char-id⟧.q.UNDERGROUND]: ⟦2-char-id⟧(⟦2-char-id⟧.m.MEDIUM, ⟦2-char-id⟧)
+                [⟦2-char-id⟧.r.SURFACE]: ⟦2-char-id⟧,
+                [⟦2-char-id⟧.r.UNDERGROUND]: ⟦2-char-id⟧(⟦2-char-id⟧.n.MEDIUM, ⟦2-char-id⟧)
               };
-            this.prefabDataPerType = Object.fromEntries(Object.values(⟦2-char-id⟧.q).filter((⟦2-char-id⟧ => Number.isInteger(⟦2-char-id⟧))).map((⟦2-char-id⟧ => Number(⟦2-char-id⟧))).map((⟦2-char-id⟧ => {
+            this.prefabDataPerType = Object.fromEntries(Object.values(⟦2-char-id⟧.r).filter((⟦2-char-id⟧ => Number.isInteger(⟦2-char-id⟧))).map((⟦2-char-id⟧ => Number(⟦2-char-id⟧))).map((⟦2-char-id⟧ => {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
               if (!⟦2-char-id⟧ || 0 === ⟦2-char-id⟧.frequencyParams.prefabFrequencies.length) return [⟦2-char-id⟧, null];
               const {
```

</details>

<details>
<summary>Hunk 151 · Change · +1 / -1</summary>

```diff
@@ -5883,7 +5883,7 @@
               } = ⟦2-char-id⟧;
               return [⟦2-char-id⟧, {
                 density: ⟦2-char-id⟧,
-                distribution: new ⟦2-char-id⟧.f([...⟦2-char-id⟧.noPrefabFrequency > 0 ? [{
+                distribution: new ⟦2-char-id⟧.d([...⟦2-char-id⟧.noPrefabFrequency > 0 ? [{
                   weight: ⟦2-char-id⟧.noPrefabFrequency,
                   value: null
                 }] : [], ...⟦2-char-id⟧.prefabFrequencies.map((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 152 · Change · +5 / -5</summary>

```diff
@@ -5896,13 +5896,13 @@
                       name: ⟦2-char-id⟧
                     } : ⟦2-char-id⟧,
                     ⟦2-char-id⟧ = ⟦2-char-id⟧.name;
-                  if ("string" !== typeof ⟦2-char-id⟧ && Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧)) throw new Error(`Prefab definition "${eJ}" has a built-in prefab's name`);
+                  if ("string" !== typeof ⟦2-char-id⟧ && Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧)) throw new Error(`Prefab definition "${pB}" has a built-in prefab's name`);
                   const ⟦2-char-id⟧ = Math.floor(Math.sqrt(⟦2-char-id⟧.clearingRadiusSquared));
-                  if (⟦2-char-id⟧ > ⟦2-char-id⟧) throw new Error(`Prefab ${eJ} has clearing radius ${XJ} which is greater than the world generator's prefab radius ${jJ}`);
-                  if (⟦2-char-id⟧.groundingRadius > ⟦2-char-id⟧.maxPrefabGroundingRadius) throw new Error(`Prefab ${eJ} has grounding radius ${UJ.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${ZJ.maxPrefabGroundingRadius}`);
-                  if ("centre" !== ⟦2-char-id⟧.groundingPoints && 0 === ⟦2-char-id⟧.groundingPoints.length) throw new Error(`Prefab ${eJ} has no grounding points`);
+                  if (⟦2-char-id⟧ > ⟦2-char-id⟧) throw new Error(`Prefab ${pB} has clearing radius ${lB} which is greater than the world generator's prefab radius ${gB}`);
+                  if (⟦2-char-id⟧.groundingRadius > ⟦2-char-id⟧.maxPrefabGroundingRadius) throw new Error(`Prefab ${pB} has grounding radius ${yB.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${dB.maxPrefabGroundingRadius}`);
+                  if ("centre" !== ⟦2-char-id⟧.groundingPoints && 0 === ⟦2-char-id⟧.groundingPoints.length) throw new Error(`Prefab ${pB} has no grounding points`);
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.schematic.dimensions;
-                  if (⟦2-char-id⟧.x > ⟦2-char-id⟧.prefabSize || ⟦2-char-id⟧.y > ⟦2-char-id⟧.prefabSize || ⟦2-char-id⟧.z > ⟦2-char-id⟧.prefabSize) throw new Error(`Prefab ${eJ} has dimensions ${JSON.stringify(AJ)} which are too large for the world generator's prefab size of ${ZJ.prefabSize}`);
+                  if (⟦2-char-id⟧.x > ⟦2-char-id⟧.prefabSize || ⟦2-char-id⟧.y > ⟦2-char-id⟧.prefabSize || ⟦2-char-id⟧.z > ⟦2-char-id⟧.prefabSize) throw new Error(`Prefab ${pB} has dimensions ${JSON.stringify(JB)} which are too large for the world generator's prefab size of ${dB.prefabSize}`);
                   return {
                     weight: ⟦2-char-id⟧,
                     value: {
```

</details>

<details>
<summary>Hunk 153 · Change · +1 / -1</summary>

```diff
@@ -5917,7 +5917,7 @@
             })))
           }
           init() {
-            this.floraGenerator = new ⟦2-char-id⟧(this.blockMetadata, this.Kn, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernChance, {
+            this.floraGenerator = new ⟦2-char-id⟧(this.blockMetadata, this.UD, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernChance, {
               cactusChance: this.cactusChance,
               maxCactusHeight: this.maxCactusHeight
             }, {
```

</details>

<details>
<summary>Hunk 154 · Change · +15 / -15</summary>

```diff
@@ -5951,49 +5951,49 @@
               lavaChiliPepperChance: this.lavaChiliPepperChance,
               fallenPineConeChance: this.fallenPineConeChance
             }), this.treeChances = [{
-              treeType: ⟦2-char-id⟧.x.Maple,
+              treeType: ⟦2-char-id⟧.u.Maple,
               chance: this.mapleTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Pine,
+              treeType: ⟦2-char-id⟧.u.Pine,
               chance: this.pineTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Plum,
+              treeType: ⟦2-char-id⟧.u.Plum,
               chance: this.plumTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Cedar,
+              treeType: ⟦2-char-id⟧.u.Cedar,
               chance: this.cedarTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Aspen,
+              treeType: ⟦2-char-id⟧.u.Aspen,
               chance: this.aspenTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Jungle,
+              treeType: ⟦2-char-id⟧.u.Jungle,
               chance: this.jungleTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Palm,
+              treeType: ⟦2-char-id⟧.u.Palm,
               chance: this.palmTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.AutumnMaple,
+              treeType: ⟦2-char-id⟧.u.AutumnMaple,
               chance: this.autumnMapleTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Pear,
+              treeType: ⟦2-char-id⟧.u.Pear,
               chance: this.pearTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Cherry,
+              treeType: ⟦2-char-id⟧.u.Cherry,
               chance: this.cherryTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Spectral,
+              treeType: ⟦2-char-id⟧.u.Spectral,
               chance: this.spectralTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Mango,
+              treeType: ⟦2-char-id⟧.u.Mango,
               chance: this.mangoTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.AutumnAspen,
+              treeType: ⟦2-char-id⟧.u.AutumnAspen,
               chance: this.autumnAspenTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.Dead,
+              treeType: ⟦2-char-id⟧.u.Dead,
               chance: this.deadTreeChance
             }, {
-              treeType: ⟦2-char-id⟧.x.FallenLog,
+              treeType: ⟦2-char-id⟧.u.FallenLog,
               chance: this.fallenLogChance
             }], this.totalTreeChance = 0;
             for (const {
```

</details>

<details>
<summary>Hunk 155 · Change · +1 / -1</summary>

```diff
@@ -6002,7 +6002,7 @@
               of this.treeChances) this.totalTreeChance += ⟦2-char-id⟧
           }
           xzId(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return `${JJ}|${cJ}`
+            return `${BB}|${TB}`
           }
           getHeightmapVal(⟦2-char-id⟧, ⟦2-char-id⟧) {
             return this.offsettedHeight + this._heightmapSimplex.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 156 · Change · +2 / -2</summary>

```diff
@@ -6042,13 +6042,13 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${UJ}Desert`, ⟦2-char-id⟧, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.treeMinDist = null, this.topsoilBlockType = ⟦2-char-id⟧.Sand.id, this.lowsoilBlockType = ⟦2-char-id⟧.Sand.id, this._heightmapSimplex = new ⟦2-char-id⟧.j([{
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${yB}Desert`, ⟦2-char-id⟧, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.treeMinDist = null, this.topsoilBlockType = ⟦2-char-id⟧.Sand.id, this.lowsoilBlockType = ⟦2-char-id⟧.Sand.id, this._heightmapSimplex = new ⟦2-char-id⟧.g([{
               amplitude: 2,
               frequency: 1 / 70
             }, {
               amplitude: 1,
               frequency: 1 / 30
-            }], `${UJ}DesertBiomeHeightMap`)
+            }], `${yB}DesertBiomeHeightMap`)
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 157 · Change · +5 / -5</summary>

```diff
@@ -6058,19 +6058,19 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.VERY_HIGH, [{
-              oU: "treePalmLarge1",
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.VERY_HIGH, [{
+              fB: "treePalmLarge1",
               frequency: 45
             }, {
-              oU: "treePalmLarge2",
+              fB: "treePalmLarge2",
               frequency: 45
-            }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(⟦2-char-id⟧.d.OASIS), this._heightmapSimplex = new ⟦2-char-id⟧.j([{
+            }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(⟦2-char-id⟧.d.OASIS), this._heightmapSimplex = new ⟦2-char-id⟧.g([{
               amplitude: 1,
               frequency: 1 / 90
             }, {
               amplitude: .5,
               frequency: 1 / 35
-            }], `${eJ}OasisBiomeHeightMap`)
+            }], `${pB}OasisBiomeHeightMap`)
           }
           canPlaceSurfacePrefab(⟦2-char-id⟧, ⟦2-char-id⟧) {
             return !(this.worldGenerator.getDistToLakeEdge(⟦2-char-id⟧, ⟦2-char-id⟧, this.maxPrefabDistFromLakeEdge) > this.maxPrefabDistFromLakeEdge)
```

</details>

<details>
<summary>Hunk 158 · Change · +3 / -3</summary>

```diff
@@ -6078,18 +6078,18 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${FJ}RedDesert`, ⟦2-char-id⟧), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = ⟦2-char-id⟧["Red Sand"].id, this.lowsoilBlockType = ⟦2-char-id⟧["Red Sand"].id
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${VB}RedDesert`, ⟦2-char-id⟧), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = ⟦2-char-id⟧["Red Sand"].id, this.lowsoilBlockType = ⟦2-char-id⟧["Red Sand"].id
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${eJ}Plains`, ⟦2-char-id⟧, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ⟦2-char-id⟧(⟦2-char-id⟧.m.MEDIUM, ⟦2-char-id⟧, ⟦2-char-id⟧)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, this.whiteTulipChance = 100, this.orangeTulipChance = 100, this.redTulipChance = 100, this.dandelionChance = 100, this.alliumChance = 100, this.watermelonChance = 20, this.cottonChance = 30, this.tags.push(⟦2-char-id⟧.d.PLAINS), this.topsoilBlockType = ⟦2-char-id⟧["Grass Block"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Dirt.id, this.treeMinDist = 75, this._heightmapSimplex = new ⟦2-char-id⟧.j([{
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${pB}Plains`, ⟦2-char-id⟧, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ⟦2-char-id⟧(⟦2-char-id⟧.n.MEDIUM, ⟦2-char-id⟧, ⟦2-char-id⟧)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, this.whiteTulipChance = 100, this.orangeTulipChance = 100, this.redTulipChance = 100, this.dandelionChance = 100, this.alliumChance = 100, this.watermelonChance = 20, this.cottonChance = 30, this.tags.push(⟦2-char-id⟧.d.PLAINS), this.topsoilBlockType = ⟦2-char-id⟧["Grass Block"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Dirt.id, this.treeMinDist = 75, this._heightmapSimplex = new ⟦2-char-id⟧.g([{
               amplitude: 4,
               frequency: 1 / 70
             }, {
               amplitude: 2,
               frequency: 1 / 30
-            }], `${eJ}PlainsBiomeHeightMap`)
+            }], `${pB}PlainsBiomeHeightMap`)
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 159 · Change · +6 / -6</summary>

```diff
@@ -6099,29 +6099,29 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.MEDIUM, [{
-              oU: "treeMapleLarge1",
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.MEDIUM, [{
+              fB: "treeMapleLarge1",
               frequency: 6
             }, {
-              oU: "treeMapleLarge2",
+              fB: "treeMapleLarge2",
               frequency: 9
             }])), this.key = "meadowPlains", this.grassChance = .12, this.tallGrassChance = .24, this.cornChance = 25e-5, this.flowerPatchDistApart = 5
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.MEDIUM, ⟦2-char-id⟧)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 10, this.cottonChance = 0, this.topsoilBlockType = ⟦2-char-id⟧.Snow.id, this.topwaterBlockType = ⟦2-char-id⟧.Ice.id
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.MEDIUM, ⟦2-char-id⟧)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 10, this.cottonChance = 0, this.topsoilBlockType = ⟦2-char-id⟧.Snow.id, this.topwaterBlockType = ⟦2-char-id⟧.Ice.id
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${UJ}Forest`, ⟦2-char-id⟧, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ⟦2-char-id⟧(⟦2-char-id⟧.m.MEDIUM, ⟦2-char-id⟧.ruins, ⟦2-char-id⟧.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance = 8, this.brownMushroomChance = 8, this.fatRedMushroomChance = 8, this.fatBrownMushroomChance = 8, this.melonChance = 30, this.topsoilBlockType = ⟦2-char-id⟧["Grass Block"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Dirt.id, this.treeMinDist = 6, this._heightmapSimplex = new ⟦2-char-id⟧.j([{
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${yB}Forest`, ⟦2-char-id⟧, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ⟦2-char-id⟧(⟦2-char-id⟧.n.MEDIUM, ⟦2-char-id⟧.ruins, ⟦2-char-id⟧.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance = 8, this.brownMushroomChance = 8, this.fatRedMushroomChance = 8, this.fatBrownMushroomChance = 8, this.melonChance = 30, this.topsoilBlockType = ⟦2-char-id⟧["Grass Block"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Dirt.id, this.treeMinDist = 6, this._heightmapSimplex = new ⟦2-char-id⟧.g([{
               amplitude: 4,
               frequency: 1 / 70
             }, {
               amplitude: 2,
               frequency: 1 / 30
-            }], `${UJ}ForestBiomeHeightMap`)
+            }], `${yB}ForestBiomeHeightMap`)
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 160 · Change · +11 / -11</summary>

```diff
@@ -6136,41 +6136,41 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.MEDIUM, ⟦2-char-id⟧.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autumnAspenTreeChance = 1, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.tags.push(⟦2-char-id⟧.d.AUTUMN)
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.MEDIUM, ⟦2-char-id⟧.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autumnAspenTreeChance = 1, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.tags.push(⟦2-char-id⟧.d.AUTUMN)
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.HIGH, [{
-              oU: "treeJungleLarge1",
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.HIGH, [{
+              fB: "treeJungleLarge1",
               frequency: 20
             }, {
-              oU: "treeJungleLarge2",
+              fB: "treeJungleLarge2",
               frequency: 20
             }, {
-              oU: "rockJungleLarge1",
+              fB: "rockJungleLarge1",
               frequency: 8
             }, {
-              oU: "rockJungleLarge2",
+              fB: "rockJungleLarge2",
               frequency: 8
             }, {
-              oU: "rockJungleLarge3",
+              fB: "rockJungleLarge3",
               frequency: 8
             }, {
-              oU: "rockJungleLarge4",
+              fB: "rockJungleLarge4",
               frequency: 8
             }, {
-              oU: "rockJungleLarge5",
+              fB: "rockJungleLarge5",
               frequency: 8
             }, {
-              oU: "rockJungleLarge6",
+              fB: "rockJungleLarge6",
               frequency: 8
             }])), this.key = "jungleForest", this.minDistanceFromOrigin = 200, this.grassChance = .01, this.tallGrassChance = .02, this.jungleTallGrassChance = .04, this.catnipChance = .02, this.flowerPatchDistApart = 12, this.melonChance = 0, this.fatRedMushroomChance = 12, this.fatBrownMushroomChance = 12, this.aspenTreeChance = 0, this.mapleTreeChance = 0, this.jungleTreeChance = 10, this.palmTreeChance = 2, this.mangoTreeChance = 2, this.topsoilBlockType = ⟦2-char-id⟧["Jungle Grass Block"].id
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ⟦2-char-id⟧(⟦2-char-id⟧.m.MEDIUM, ⟦2-char-id⟧.ruins, ⟦2-char-id⟧.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this.pineFernChance = .01, this.flowerPatchDistApart = 15, this.melonChance = 0, this.fallenPineConeChance = 250, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.pineTreeChance = 15, this.cedarTreeChance = 1, this.cranberryChance = 1, this.topsoilBlockType = ⟦2-char-id⟧["Pine Grass Block"].id
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ⟦2-char-id⟧(⟦2-char-id⟧.n.MEDIUM, ⟦2-char-id⟧.ruins, ⟦2-char-id⟧.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this.pineFernChance = .01, this.flowerPatchDistApart = 15, this.melonChance = 0, this.fallenPineConeChance = 250, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.pineTreeChance = 15, this.cedarTreeChance = 1, this.cranberryChance = 1, this.topsoilBlockType = ⟦2-char-id⟧["Pine Grass Block"].id
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 161 · Change · +8 / -8</summary>

```diff
@@ -6180,37 +6180,37 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${FJ}Blue`, ⟦2-char-id⟧), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${VB}Blue`, ⟦2-char-id⟧), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.MEDIUM, ⟦2-char-id⟧.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadius = 10, this.fallenCherryLeavesChance = 500, this.melonChance = 0, this.poppyChance = 0, this.daisyChance = 50, this.pinkTulipChance = 150, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.MEDIUM, ⟦2-char-id⟧.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadius = 10, this.fallenCherryLeavesChance = 500, this.melonChance = 0, this.poppyChance = 0, this.daisyChance = 50, this.pinkTulipChance = 150, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${UJ}RollingHills`, ⟦2-char-id⟧), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = ⟦2-char-id⟧["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new ⟦2-char-id⟧.j([{
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${yB}RollingHills`, ⟦2-char-id⟧), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = ⟦2-char-id⟧["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new ⟦2-char-id⟧.g([{
               amplitude: 20,
               frequency: .005
             }, {
               amplitude: 4,
               frequency: 1 / 70
-            }], `${UJ}RollingHillsBiomeHeightMap`)
+            }], `${yB}RollingHillsBiomeHeightMap`)
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${UJ}SnowyMountains`, ⟦2-char-id⟧), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this.ridgedNoiseOctave2 = void 0, this.nonRidgedNoise = void 0, this.treeMinDist = 50, this.offsettedHeight = 0, this.ridgedNoiseOctave1 = new ⟦2-char-id⟧.j([{
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${yB}SnowyMountains`, ⟦2-char-id⟧), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this.ridgedNoiseOctave2 = void 0, this.nonRidgedNoise = void 0, this.treeMinDist = 50, this.offsettedHeight = 0, this.ridgedNoiseOctave1 = new ⟦2-char-id⟧.g([{
               amplitude: 80,
               frequency: .005
-            }], `${UJ}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new ⟦2-char-id⟧.j([{
+            }], `${yB}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new ⟦2-char-id⟧.g([{
               amplitude: 20,
               frequency: 1 / 120
-            }], `${UJ}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new ⟦2-char-id⟧.j([{
+            }], `${yB}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new ⟦2-char-id⟧.g([{
               amplitude: 8,
               frequency: 1 / 120
-            }], `${UJ}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, ⟦2-char-id⟧.x)(this.ridgedNoiseOctave1) + (0, ⟦2-char-id⟧.x)(this.ridgedNoiseOctave2)
+            }], `${yB}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, ⟦2-char-id⟧.D)(this.ridgedNoiseOctave1) + (0, ⟦2-char-id⟧.D)(this.ridgedNoiseOctave2)
           }
           getHeightmapVal(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.ridgedNoiseAmplitude - Math.abs(this.ridgedNoiseOctave1.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)) - Math.abs(this.ridgedNoiseOctave2.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧));
```

</details>

<details>
<summary>Hunk 162 · Change · +57 / -57</summary>

```diff
@@ -6225,162 +6225,162 @@
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.HIGH, [{
-              oU: "treeSpectralLarge1",
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.HIGH, [{
+              fB: "treeSpectralLarge1",
               frequency: 4
             }, {
-              oU: "treeSpectralLarge2",
+              fB: "treeSpectralLarge2",
               frequency: 4
             }, {
-              oU: "rockSnowLarge1",
+              fB: "rockSnowLarge1",
               frequency: 18
             }, {
-              oU: "rockSnowLarge2",
+              fB: "rockSnowLarge2",
               frequency: 18
             }, {
-              oU: "rockSnowLarge3",
+              fB: "rockSnowLarge3",
               frequency: 18
             }, {
-              oU: "ruinSnowSmall1",
+              fB: "ruinSnowSmall1",
               frequency: 4
             }, {
-              oU: "ruinSnowSmall2",
+              fB: "ruinSnowSmall2",
               frequency: 4
             }, {
-              oU: "ruinSnowSmall3",
+              fB: "ruinSnowSmall3",
               frequency: 4
             }, {
-              oU: "ruinSnowSmall4",
+              fB: "ruinSnowSmall4",
               frequency: 4
             }, {
-              oU: "ruinSnowMedium1",
+              fB: "ruinSnowMedium1",
               frequency: 4
             }, {
-              oU: "ruinSnowMedium2",
+              fB: "ruinSnowMedium2",
               frequency: 4
             }, {
-              oU: "ruinSnowLarge1",
+              fB: "ruinSnowLarge1",
               frequency: 3
             }, {
-              oU: "ruinSnowLarge2",
+              fB: "ruinSnowLarge2",
               frequency: 3
-            }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .02, this.spectralTreeChance = 1, this.shadowRoseChance = 8, this.topsoilBlockType = ⟦2-char-id⟧["Packed Snow"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Snow.id, this.topwaterBlockType = ⟦2-char-id⟧.Ice.id, this._heightmapSimplex = new ⟦2-char-id⟧.j([{
+            }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .02, this.spectralTreeChance = 1, this.shadowRoseChance = 8, this.topsoilBlockType = ⟦2-char-id⟧["Packed Snow"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Snow.id, this.topwaterBlockType = ⟦2-char-id⟧.Ice.id, this._heightmapSimplex = new ⟦2-char-id⟧.g([{
               amplitude: 3,
               frequency: 1 / 70
             }, {
               amplitude: 1,
               frequency: 1 / 30
-            }], `${UJ}FrozenBadlandsPlainsHeightMap`)
+            }], `${yB}FrozenBadlandsPlainsHeightMap`)
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.m.HIGH, [{
-              oU: "treeSpectralLarge1",
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧(⟦2-char-id⟧.n.HIGH, [{
+              fB: "treeSpectralLarge1",
               frequency: 8
             }, {
-              oU: "treeSpectralLarge2",
+              fB: "treeSpectralLarge2",
               frequency: 8
             }, {
-              oU: "rockSnowLarge1",
+              fB: "rockSnowLarge1",
               frequency: 4
             }, {
-              oU: "rockSnowLarge2",
+              fB: "rockSnowLarge2",
               frequency: 4
             }, {
-              oU: "rockSnowLarge3",
+              fB: "rockSnowLarge3",
               frequency: 4
             }, {
-              oU: "ruinSnowSmall1",
+              fB: "ruinSnowSmall1",
               frequency: 6
             }, {
-              oU: "ruinSnowSmall2",
+              fB: "ruinSnowSmall2",
               frequency: 6
             }, {
-              oU: "ruinSnowSmall3",
+              fB: "ruinSnowSmall3",
               frequency: 6
             }, {
-              oU: "ruinSnowSmall4",
+              fB: "ruinSnowSmall4",
               frequency: 6
             }, {
-              oU: "ruinSnowMedium1",
+              fB: "ruinSnowMedium1",
               frequency: 4
             }, {
-              oU: "ruinSnowMedium2",
+              fB: "ruinSnowMedium2",
               frequency: 4
             }, {
-              oU: "ruinSnowLarge1",
+              fB: "ruinSnowLarge1",
               frequency: 3
             }, {
-              oU: "ruinSnowLarge2",
+              fB: "ruinSnowLarge2",
               frequency: 3
-            }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.melonChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.brownMushroomChance = 0, this.fatBrownMushroomChance = 0, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .08, this.spectralTreeChance = 8, this.shadowRoseChance = 8, this.topsoilBlockType = ⟦2-char-id⟧["Packed Snow"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Snow.id, this.topwaterBlockType = ⟦2-char-id⟧.Ice.id, this.treeMinDist = 7, this._heightmapSimplex = new ⟦2-char-id⟧.j([{
+            }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.melonChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.brownMushroomChance = 0, this.fatBrownMushroomChance = 0, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .08, this.spectralTreeChance = 8, this.shadowRoseChance = 8, this.topsoilBlockType = ⟦2-char-id⟧["Packed Snow"].id, this.lowsoilBlockType = ⟦2-char-id⟧.Snow.id, this.topwaterBlockType = ⟦2-char-id⟧.Ice.id, this.treeMinDist = 7, this._heightmapSimplex = new ⟦2-char-id⟧.g([{
               amplitude: 3,
               frequency: 1 / 70
             }, {
               amplitude: 1,
               frequency: 1 / 30
-            }], `${UJ}FrozenBadlandsForestHeightMap`)
+            }], `${yB}FrozenBadlandsForestHeightMap`)
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${eJ}Custom_${AJ.Se}_${AJ.Ie}`, ⟦2-char-id⟧), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinDist = null, this.topsoilBlockType = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.Se, ⟦2-char-id⟧), this.lowsoilBlockType = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.Ie, ⟦2-char-id⟧), this._heightmapSimplex = new ⟦2-char-id⟧.j([{
+            super(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, `${pB}Custom_${JB.eB}_${JB.BT}`, ⟦2-char-id⟧), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinDist = null, this.topsoilBlockType = (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.eB, ⟦2-char-id⟧), this.lowsoilBlockType = (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.BT, ⟦2-char-id⟧), this._heightmapSimplex = new ⟦2-char-id⟧.g([{
               amplitude: 4,
               frequency: 1 / 70
             }, {
               amplitude: 2,
               frequency: 1 / 30
-            }], `${eJ}CustomBiomeHeightMap`)
+            }], `${pB}CustomBiomeHeightMap`)
           }
         }
       },
-      59622: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59927: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          c: () => ⟦2-char-id⟧,
-          d: () => ⟦2-char-id⟧,
-          h: () => ⟦2-char-id⟧,
-          k: () => ⟦2-char-id⟧
+          e: () => ⟦2-char-id⟧,
+          g: () => ⟦2-char-id⟧,
+          j: () => ⟦2-char-id⟧,
+          l: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59566),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59549),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59540),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(535),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59574),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(3735),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59618);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59874),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59859),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59848),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(572),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59881),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(3734),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59925);
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.Ke = void 0, this.anyStrata = void 0, this.biomeFrequencies = void 0, this.seed = void 0, this.blockMetadata = void 0, this.Kn = void 0, this.mostRecentlyAccessedPtForBiome = [0, 0], this.mostRecentlyAccessedBiome = void 0, this.biomesByPoint = new Map, this.mostRecentlyAccessedModifierPt = [0, 0], this.mostRecentlyAccessedModifier = void 0, this.lastBiomeOffsetAtX = NaN, this.lastBiomeOffsetAtZ = NaN, this.lastBiomeOffsets = [0, 0], this.lastScatteredLakeCellX = NaN, this.lastScatteredLakeCellZ = NaN, this.lastScatteredLakeCellResult = !1, this.seed = ⟦2-char-id⟧, this.blockMetadata = ⟦2-char-id⟧, this.Kn = ⟦2-char-id⟧, this.biomePointGen = new ⟦2-char-id⟧.e("biome", 150, !1, !0, ⟦2-char-id⟧, 3, ⟦2-char-id⟧), this.biomeOffsetSimplex = new ⟦2-char-id⟧.j([{
+            this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.bB = void 0, this.anyStrata = void 0, this.biomeFrequencies = void 0, this.seed = void 0, this.blockMetadata = void 0, this.UD = void 0, this.mostRecentlyAccessedPtForBiome = [0, 0], this.mostRecentlyAccessedBiome = void 0, this.biomesByPoint = new Map, this.mostRecentlyAccessedModifierPt = [0, 0], this.mostRecentlyAccessedModifier = void 0, this.lastBiomeOffsetAtX = NaN, this.lastBiomeOffsetAtZ = NaN, this.lastBiomeOffsets = [0, 0], this.lastScatteredLakeCellX = NaN, this.lastScatteredLakeCellZ = NaN, this.lastScatteredLakeCellResult = !1, this.seed = ⟦2-char-id⟧, this.blockMetadata = ⟦2-char-id⟧, this.UD = ⟦2-char-id⟧, this.biomePointGen = new ⟦2-char-id⟧.c("biome", 150, !1, !0, ⟦2-char-id⟧, 3, ⟦2-char-id⟧), this.biomeOffsetSimplex = new ⟦2-char-id⟧.g([{
               amplitude: 1,
               frequency: .2
             }, {
               amplitude: 5,
               frequency: 1 / 70
-            }], `${ZJ}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, ⟦2-char-id⟧.x)(this.biomeOffsetSimplex)), this.baseBiome = new ⟦2-char-id⟧.e(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, {
+            }], `${dB}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, ⟦2-char-id⟧.D)(this.biomeOffsetSimplex)), this.baseBiome = new ⟦2-char-id⟧.i(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, {
               oreGenerator: ⟦2-char-id⟧
-            }), this.baseBiome.init(), this.Ke = ⟦2-char-id⟧, this.anyStrata = ⟦2-char-id⟧.some((⟦2-char-id⟧ => {
+            }), this.baseBiome.init(), this.bB = ⟦2-char-id⟧, this.anyStrata = ⟦2-char-id⟧.some((⟦2-char-id⟧ => {
               let {
                 biome: ⟦2-char-id⟧
               } = ⟦2-char-id⟧;
               return ⟦2-char-id⟧.strataDepth > 0
-            })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.Ke.length);
-            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.Ke.length; ⟦2-char-id⟧++) {
-              const ⟦2-char-id⟧ = this.Ke[⟦2-char-id⟧],
+            })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.bB.length);
+            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.bB.length; ⟦2-char-id⟧++) {
+              const ⟦2-char-id⟧ = this.bB[⟦2-char-id⟧],
                 {
                   biome: ⟦2-char-id⟧,
                   frequency: ⟦2-char-id⟧,
                   altBiome: ⟦2-char-id⟧
                 } = ⟦2-char-id⟧;
               if (this.biomeFrequencies[⟦2-char-id⟧] = ⟦2-char-id⟧, null !== ⟦2-char-id⟧) {
-                if (⟦2-char-id⟧.init(), ⟦2-char-id⟧.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${FJ}`);
+                if (⟦2-char-id⟧.init(), ⟦2-char-id⟧.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${VB}`);
                 let ⟦2-char-id⟧ = !1;
-                for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.Ke.length; ⟦2-char-id⟧++)
-                  if (this.Ke[⟦2-char-id⟧].biome === ⟦2-char-id⟧) {
+                for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.bB.length; ⟦2-char-id⟧++)
+                  if (this.bB[⟦2-char-id⟧].biome === ⟦2-char-id⟧) {
                     ⟦2-char-id⟧ = !0;
                     break
-                  } if (!⟦2-char-id⟧) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${FJ}`)
-              } else if (⟦2-char-id⟧.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${FJ}`);
+                  } if (!⟦2-char-id⟧) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${VB}`)
+              } else if (⟦2-char-id⟧.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${VB}`);
               this.biomesTotalFrequency += ⟦2-char-id⟧, ⟦2-char-id⟧.init()
             }
           }
```

</details>

<details>
<summary>Hunk 163 · Change · +1 / -1</summary>

```diff
@@ -6431,7 +6431,7 @@
                 if (void 0 === ⟦2-char-id⟧) {
                   ⟦2-char-id⟧ = !1;
                   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
-                    if (this.getBiomeForBiomePoint(⟦2-char-id⟧).biome.hasPrefabs(⟦2-char-id⟧.q.SURFACE, ⟦2-char-id⟧.m.VERY_HIGH)) {
+                    if (this.getBiomeForBiomePoint(⟦2-char-id⟧).biome.hasPrefabs(⟦2-char-id⟧.r.SURFACE, ⟦2-char-id⟧.n.VERY_HIGH)) {
                       ⟦2-char-id⟧ = !0;
                       break
                     } this.veryHighSurfacePrefabCells.set(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 164 · Change · +6 / -6</summary>

```diff
@@ -6448,19 +6448,19 @@
           }
           getBiomeForBiomePoint(⟦2-char-id⟧) {
             if (this.mostRecentlyAccessedBiome && ⟦2-char-id⟧[0] === this.mostRecentlyAccessedPtForBiome[0] && ⟦2-char-id⟧[1] === this.mostRecentlyAccessedPtForBiome[1]) return this.mostRecentlyAccessedBiome;
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.f)(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]);
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.i)(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]);
             let ⟦2-char-id⟧ = this.biomesByPoint.get(⟦2-char-id⟧);
             return void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = this.pickBiomeForBiomePoint(⟦2-char-id⟧), this.biomesByPoint.size >= 1024 && this.biomesByPoint.clear(), this.biomesByPoint.set(⟦2-char-id⟧, ⟦2-char-id⟧)), this.mostRecentlyAccessedBiome = ⟦2-char-id⟧, this.mostRecentlyAccessedPtForBiome[0] = ⟦2-char-id⟧[0], this.mostRecentlyAccessedPtForBiome[1] = ⟦2-char-id⟧[1], ⟦2-char-id⟧
           }
           pickBiomeForBiomePoint(⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = Math.max(Math.abs(⟦2-char-id⟧[0]), Math.abs(⟦2-char-id⟧[1])),
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${JJ[0]}|${JJ[1]}|${this.seed}`);
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${BB[0]}|${BB[1]}|${this.seed}`);
             let ⟦2-char-id⟧ = ⟦2-char-id⟧(this.biomeFrequencies, this.biomesTotalFrequency, ⟦2-char-id⟧),
-              ⟦2-char-id⟧ = this.Ke[⟦2-char-id⟧].biome;
+              ⟦2-char-id⟧ = this.bB[⟦2-char-id⟧].biome;
             if (⟦2-char-id⟧ < ⟦2-char-id⟧.minDistanceFromOrigin) {
-              ⟦2-char-id⟧ = this.Ke[⟦2-char-id⟧].altBiome;
-              for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.Ke.length; ⟦2-char-id⟧++)
-                if (this.Ke[⟦2-char-id⟧].biome === ⟦2-char-id⟧) {
+              ⟦2-char-id⟧ = this.bB[⟦2-char-id⟧].altBiome;
+              for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.bB.length; ⟦2-char-id⟧++)
+                if (this.bB[⟦2-char-id⟧].biome === ⟦2-char-id⟧) {
                   ⟦2-char-id⟧ = ⟦2-char-id⟧;
                   break
                 }
```

</details>

<details>
<summary>Hunk 165 · Change · +8 / -8</summary>

```diff
@@ -6475,28 +6475,28 @@
             const {
               biomeId: ⟦2-char-id⟧
             } = this.getBiomeForBiomePoint(⟦2-char-id⟧), {
-              Me: ⟦2-char-id⟧,
+              TT: ⟦2-char-id⟧,
               stoneFrequencies: ⟦2-char-id⟧,
               stonesTotalFrequency: ⟦2-char-id⟧
-            } = this.Ke[⟦2-char-id⟧], ⟦2-char-id⟧ = {
-              stoneTypeId: ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, new ⟦2-char-id⟧.g(`${JJ[0]}|${JJ[1]}|${this.seed}Modifiers`))].stoneId
+            } = this.bB[⟦2-char-id⟧], ⟦2-char-id⟧ = {
+              stoneTypeId: ⟦2-char-id⟧[⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, new ⟦2-char-id⟧.g(`${BB[0]}|${BB[1]}|${this.seed}Modifiers`))].stoneId
             };
             return this.mostRecentlyAccessedModifier = ⟦2-char-id⟧, this.mostRecentlyAccessedModifierPt[0] = ⟦2-char-id⟧[0], this.mostRecentlyAccessedModifierPt[1] = ⟦2-char-id⟧[1], ⟦2-char-id⟧
           }
           getBiomeInfoForChunkFill(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = {
-              biomeIds: new ⟦2-char-id⟧.g(this.Kn, [⟦2-char-id⟧, ⟦2-char-id⟧]),
-              stoneTypeIds: new ⟦2-char-id⟧.g(this.Kn, [⟦2-char-id⟧, ⟦2-char-id⟧])
+              biomeIds: new ⟦2-char-id⟧.c(this.UD, [⟦2-char-id⟧, ⟦2-char-id⟧]),
+              stoneTypeIds: new ⟦2-char-id⟧.c(this.UD, [⟦2-char-id⟧, ⟦2-char-id⟧])
             };
-            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++) {
+            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧)[0];
                 ⟦2-char-id⟧.biomeIds.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.biomeId), ⟦2-char-id⟧.stoneTypeIds.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.biomeModifiers.stoneTypeId)
               }
             return ⟦2-char-id⟧
           }
           getBiomeFromId(⟦2-char-id⟧) {
-            return this.Ke[⟦2-char-id⟧].biome
+            return this.bB[⟦2-char-id⟧].biome
           }
         }
 
```

</details>

<details>
<summary>Hunk 166 · Change · +1 / -1</summary>

```diff
@@ -6505,7 +6505,7 @@
           const ⟦2-char-id⟧ = [];
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧ += ⟦2-char-id⟧.frequency, ⟦2-char-id⟧.push(⟦2-char-id⟧.frequency);
           return {
-            Me: ⟦2-char-id⟧,
+            TT: ⟦2-char-id⟧,
             stoneFrequencies: ⟦2-char-id⟧,
             stonesTotalFrequency: ⟦2-char-id⟧
           }
```

</details>

<details>
<summary>Hunk 167 · Change · +21 / -21</summary>

```diff
@@ -6539,33 +6539,33 @@
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
           let {
-            Kn: ⟦2-char-id⟧,
+            UD: ⟦2-char-id⟧,
             blockMetadata: ⟦2-char-id⟧,
             worldGenerator: ⟦2-char-id⟧,
             seed: ⟦2-char-id⟧,
             biomeOpts: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
-          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.q(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.C(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.s(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.D(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.G(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.P(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.L(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.v(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.N(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.H(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.J(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.V(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.B(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.e(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.R(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.U(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.k(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.o(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.Y(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.ab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = new ⟦2-char-id⟧.F(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.S(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.L(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.t(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.O(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.I(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.K(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.X(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.B(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.c(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.T(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.V(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.i(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.m(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.$(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.bb(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.E(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.x(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-            ⟦2-char-id⟧ = new ⟦2-char-id⟧.v(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.y(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            ⟦2-char-id⟧ = new ⟦2-char-id⟧.w(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
             ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧);
           return [{
             biome: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 168 · Change · +1 / -1</summary>

```diff
@@ -6679,7 +6679,7 @@
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
           let {
-            Kn: ⟦2-char-id⟧,
+            UD: ⟦2-char-id⟧,
             blockMetadata: ⟦2-char-id⟧,
             worldGenerator: ⟦2-char-id⟧,
             seed: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 169 · Change · +3 / -3</summary>

```diff
@@ -6687,9 +6687,9 @@
           } = ⟦2-char-id⟧;
           if (0 === ⟦2-char-id⟧.length) throw new Error("buildCustomBiomes requires at least one custom biome");
           return ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.n(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.Me.map((⟦2-char-id⟧ => ({
-                stoneId: (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.blockName, ⟦2-char-id⟧),
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.p(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.TT.map((⟦2-char-id⟧ => ({
+                stoneId: (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.blockName, ⟦2-char-id⟧),
                 frequency: ⟦2-char-id⟧.frequency
               })));
             return {
```

</details>

<details>
<summary>Hunk 170 · Change · +13 / -13</summary>

```diff
@@ -6701,29 +6701,29 @@
           }))
         }
       },
-      59556: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59863: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          c: () => ⟦2-char-id⟧
+          e: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59549),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59540),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(1544),
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59859),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59848),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(1521),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(535),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(36692),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(572),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(36627),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(36711),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59564),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(38085);
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(36649),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59872),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(38074);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+          const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ);
-            if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${UJ.chunkX}, ${UJ.chunkY}, ${UJ.chunkZ}`);
+            if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) throw new Error(`Duplicate chunk at ${yB.chunkX}, ${yB.chunkY}, ${yB.chunkZ}`);
             ⟦2-char-id⟧.set(⟦2-char-id⟧.chunkX, ⟦2-char-id⟧.chunkY, ⟦2-char-id⟧.chunkZ, ⟦2-char-id⟧.rle)
           }
-          return new ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+          return new ⟦2-char-id⟧.c(⟦2-char-id⟧, {
             x: 0,
             y: 0,
             z: 0
```

</details>

<details>
<summary>Hunk 171 · Change · +3 / -3</summary>

```diff
@@ -6783,18 +6783,18 @@
         };
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.Kn = ⟦2-char-id⟧, this.chunkToFixedPointPrefabs = void 0;
+            this.UD = ⟦2-char-id⟧, this.chunkToFixedPointPrefabs = void 0;
             const ⟦2-char-id⟧ = {},
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧;
             for (const {
-                oU: ⟦2-char-id⟧,
+                fB: ⟦2-char-id⟧,
                 x: ⟦2-char-id⟧,
                 y: ⟦2-char-id⟧,
                 z: ⟦2-char-id⟧
               }
               of ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
-              if (void 0 === ⟦2-char-id⟧) throw new Error(`Fixed-point prefab "${UJ}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
+              if (void 0 === ⟦2-char-id⟧) throw new Error(`Fixed-point prefab "${yB}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
               const {
                 dimensions: ⟦2-char-id⟧
               } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.x, ⟦2-char-id⟧ = ⟦2-char-id⟧.y, ⟦2-char-id⟧ = ⟦2-char-id⟧.z, ⟦2-char-id⟧ = ⟦2-char-id⟧ - (⟦2-char-id⟧ >> 1), ⟦2-char-id⟧ = ⟦2-char-id⟧ - (⟦2-char-id⟧ >> 1), ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ - 1, ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧ - 1, ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 172 · Change · +5 / -5</summary>

```diff
@@ -6845,25 +6845,25 @@
             const ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧);
             return {
               decodedFixedPointPrefabsForChunk: ⟦2-char-id⟧,
-              nearestFixedPrefabInfoForChunk: ⟦2-char-id⟧.q.create(this.Kn, [⟦2-char-id⟧, ⟦2-char-id⟧], ⟦2-char-id⟧.i.NumFields, ⟦2-char-id⟧)
+              nearestFixedPrefabInfoForChunk: ⟦2-char-id⟧.p.create(this.UD, [⟦2-char-id⟧, ⟦2-char-id⟧], ⟦2-char-id⟧.l.NumFields, ⟦2-char-id⟧)
             }
           }
           static smoothHeightmapForFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (null === ⟦2-char-id⟧) return null;
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.i.DistanceToNearestFixedPrefab);
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.l.DistanceToNearestFixedPrefab);
             if (⟦2-char-id⟧ > ⟦2-char-id⟧) return null;
             let ⟦2-char-id⟧ = ⟦2-char-id⟧ / ⟦2-char-id⟧;
             ⟦2-char-id⟧ *= ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.i.HeightOfNearestFixedPrefab);
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.l.HeightOfNearestFixedPrefab);
             return Math.floor(⟦2-char-id⟧ * ⟦2-char-id⟧ + (1 - ⟦2-char-id⟧) * ⟦2-char-id⟧)
           }
           static isNearFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (null === ⟦2-char-id⟧) return !1;
-            return ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.i.DistanceToNearestFixedPrefab) <= ⟦2-char-id⟧
+            return ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.l.DistanceToNearestFixedPrefab) <= ⟦2-char-id⟧
           }
           static isWithinFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (null === ⟦2-char-id⟧) return !1;
-            return 0 === ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.i.DistanceToNearestFixedPrefab)
+            return 0 === ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.l.DistanceToNearestFixedPrefab)
           }
           static getBlockFromFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const {
```

</details>

<details>
<summary>Hunk 173 · Change · +10 / -10</summary>

```diff
@@ -6881,24 +6881,24 @@
             return ⟦2-char-id⟧.decodedPrefabSchematic.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           getKeyForChunk(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return `${JJ}|${cJ}`
+            return `${BB}|${TB}`
           }
           getDecodedPrefabSchematic(⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.name,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.get(⟦2-char-id⟧);
-            if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) return ⟦2-char-id⟧;
+            if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) return ⟦2-char-id⟧;
             const {
               dimensions: ⟦2-char-id⟧
             } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧()(new Uint16Array(⟦2-char-id⟧.x * ⟦2-char-id⟧.y * ⟦2-char-id⟧.z), [⟦2-char-id⟧.x, ⟦2-char-id⟧.y, ⟦2-char-id⟧.z]);
-            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.x; ⟦2-char-id⟧ += ⟦2-char-id⟧.E)
-              for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.y; ⟦2-char-id⟧ += ⟦2-char-id⟧.E)
-                for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.z; ⟦2-char-id⟧ += ⟦2-char-id⟧.E) {
-                  const ⟦2-char-id⟧ = ⟦2-char-id⟧()(new Uint16Array(⟦2-char-id⟧.E * ⟦2-char-id⟧.E * ⟦2-char-id⟧.E), [⟦2-char-id⟧.E, ⟦2-char-id⟧.E, ⟦2-char-id⟧.E]),
-                    ⟦2-char-id⟧ = ⟦2-char-id⟧.getRLEChunk((0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧));
+            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.x; ⟦2-char-id⟧ += ⟦2-char-id⟧.z)
+              for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.y; ⟦2-char-id⟧ += ⟦2-char-id⟧.z)
+                for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.z; ⟦2-char-id⟧ += ⟦2-char-id⟧.z) {
+                  const ⟦2-char-id⟧ = ⟦2-char-id⟧()(new Uint16Array(⟦2-char-id⟧.z * ⟦2-char-id⟧.z * ⟦2-char-id⟧.z), [⟦2-char-id⟧.z, ⟦2-char-id⟧.z, ⟦2-char-id⟧.z]),
+                    ⟦2-char-id⟧ = ⟦2-char-id⟧.getRLEChunk((0, ⟦2-char-id⟧.W)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧));
                   ⟦2-char-id⟧.decode(⟦2-char-id⟧, ⟦2-char-id⟧.data);
-                  const ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.E, ⟦2-char-id⟧.x - ⟦2-char-id⟧),
-                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.E, ⟦2-char-id⟧.y - ⟦2-char-id⟧),
-                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.E, ⟦2-char-id⟧.z - ⟦2-char-id⟧);
+                  const ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.z, ⟦2-char-id⟧.x - ⟦2-char-id⟧),
+                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.z, ⟦2-char-id⟧.y - ⟦2-char-id⟧),
+                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.z, ⟦2-char-id⟧.z - ⟦2-char-id⟧);
                   for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
                     for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
                       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
```

</details>

<details>
<summary>Hunk 174 · Change · +11 / -11</summary>

```diff
@@ -6933,30 +6933,30 @@
               } = ⟦2-char-id⟧, ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧ - ⟦2-char-id⟧, 0, ⟦2-char-id⟧ - ⟦2-char-id⟧) + Math.max(⟦2-char-id⟧ - ⟦2-char-id⟧, 0, ⟦2-char-id⟧ - ⟦2-char-id⟧);
               ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.floorY)
             }
-            ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.i.DistanceToNearestFixedPrefab, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.i.HeightOfNearestFixedPrefab, ⟦2-char-id⟧)
+            ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.l.DistanceToNearestFixedPrefab, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.l.HeightOfNearestFixedPrefab, ⟦2-char-id⟧)
           }
         }
         const ⟦2-char-id⟧ = 12
       },
-      59532: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59843: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          e: () => ⟦2-char-id⟧,
-          h: () => ⟦2-char-id⟧,
-          i: () => ⟦2-char-id⟧
+          c: () => ⟦2-char-id⟧,
+          d: () => ⟦2-char-id⟧,
+          e: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59540),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59549),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59543),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59556);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59848),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59859),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59857),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59863);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧) {
-          return new ⟦2-char-id⟧.j([{
+          return new ⟦2-char-id⟧.g([{
             amplitude: 11,
             frequency: 1 / 4⟦2-char-id⟧
           }, {
             amplitude: 4,
             frequency: .001
-          }], `${JJ}GlobalHeightmapOffset`)
+          }], `${BB}GlobalHeightmapOffset`)
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 175 · Change · +1 / -1</summary>

```diff
@@ -6992,7 +6992,7 @@
               isLake: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧[0].biome.carveGround(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-            null !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.p, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.g, ⟦2-char-id⟧ = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+            null !== ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.o, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.c, ⟦2-char-id⟧ = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           getWithWaterHeightmapVal(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 176 · Change · +2 / -2</summary>

```diff
@@ -7005,8 +7005,8 @@
                 needOutsideWaterDist: ⟦2-char-id⟧
               } = this.waterBodyGenerator.getInfoNeededForWaterGen(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
             let ⟦2-char-id⟧ = 0,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.p,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.l,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.o,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.h,
               ⟦2-char-id⟧ = 0;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧;
             if (⟦2-char-id⟧ <= ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 177 · Change · +1 / -1</summary>

```diff
@@ -7016,7 +7016,7 @@
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧ / ⟦2-char-id⟧;
                 ⟦2-char-id⟧ ? (⟦2-char-id⟧ *= ⟦2-char-id⟧ * ⟦2-char-id⟧, ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧ - 2)) : (⟦2-char-id⟧ *= ⟦2-char-id⟧, ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧)), ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 1 : 0;
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧[0].biome.waterKept;
-                ⟦2-char-id⟧ < 1 && (⟦2-char-id⟧ = ⟦2-char-id⟧ + Math.floor((⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧), ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.p, ⟦2-char-id⟧ = ⟦2-char-id⟧.j))
+                ⟦2-char-id⟧ < 1 && (⟦2-char-id⟧ = ⟦2-char-id⟧ + Math.floor((⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧), ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.o, ⟦2-char-id⟧ = ⟦2-char-id⟧.g))
               } else if (⟦2-char-id⟧ <= ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧) / (⟦2-char-id⟧ - ⟦2-char-id⟧);
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ + Math.ceil((⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 178 · Change · +1 / -1</summary>

```diff
@@ -7024,7 +7024,7 @@
                 const ⟦2-char-id⟧ = (⟦2-char-id⟧ - ⟦2-char-id⟧) / (⟦2-char-id⟧ - ⟦2-char-id⟧);
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ + Math.ceil((⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧)
               }
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.g
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.c
             } else ⟦2-char-id⟧ = ⟦2-char-id⟧;
             return {
               groundHeight: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 179 · Change · +2 / -2</summary>

```diff
@@ -7034,8 +7034,8 @@
             }
           }
           setHeightmapValuesWithFixedPrefabSmoothing(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.smoothHeightmapForFixedPointPrefab(Math.round(⟦2-char-id⟧ + ⟦2-char-id⟧ / 4), Math.round(⟦2-char-id⟧ + ⟦2-char-id⟧ / 4), ⟦2-char-id⟧, this.nearestFixedPrefabInfoForChunk);
-            null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ > (⟦2-char-id⟧ = ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧.p, ⟦2-char-id⟧ = 0), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.WaterHeight, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.CavesAllowedBelowY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.IsLake, ⟦2-char-id⟧), this.shouldCurtailCave(⟦2-char-id⟧, ⟦2-char-id⟧, null !== ⟦2-char-id⟧) && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.CavesAllowedBelowY, ⟦2-char-id⟧ - ⟦2-char-id⟧.g)
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.e.smoothHeightmapForFixedPointPrefab(Math.round(⟦2-char-id⟧ + ⟦2-char-id⟧ / 4), Math.round(⟦2-char-id⟧ + ⟦2-char-id⟧ / 4), ⟦2-char-id⟧, this.nearestFixedPrefabInfoForChunk);
+            null !== ⟦2-char-id⟧ && ⟦2-char-id⟧ > (⟦2-char-id⟧ = ⟦2-char-id⟧) && (⟦2-char-id⟧ = ⟦2-char-id⟧.o, ⟦2-char-id⟧ = 0), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.WaterHeight, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.CavesAllowedBelowY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.IsLake, ⟦2-char-id⟧), this.shouldCurtailCave(⟦2-char-id⟧, ⟦2-char-id⟧, null !== ⟦2-char-id⟧) && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.CavesAllowedBelowY, ⟦2-char-id⟧ - ⟦2-char-id⟧.c)
           }
           shouldCurtailCave(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (⟦2-char-id⟧) return !0;
```

</details>

<details>
<summary>Hunk 180 · Change · +7 / -7</summary>

```diff
@@ -7047,16 +7047,16 @@
           }
         }
       },
-      59574: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59881: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          e: () => ⟦2-char-id⟧
+          c: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59540),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59583),
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59848),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59889),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(3735),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59618);
-        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.b("point cells", 500, 6⟦2-char-id⟧);
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(3734),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59925);
+        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e("point cells", 500, 6⟦2-char-id⟧);
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
```

</details>

<details>
<summary>Hunk 181 · Change · +2 / -2</summary>

```diff
@@ -7073,14 +7073,14 @@
           }
           assertReachableFromChunkCentre(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧ / 2 + ⟦2-char-id⟧ - 1;
-            if (this.gridSize < ⟦2-char-id⟧) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${ZJ} (chunkSize=${JJ}, halfBox=${cJ}). Points near chunk edges would be missed.`)
+            if (this.gridSize < ⟦2-char-id⟧) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${dB} (chunkSize=${BB}, halfBox=${TB}). Points near chunk edges would be missed.`)
           }
           isPoint(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.getCellCoordFromGlobalCoord(⟦2-char-id⟧, ⟦2-char-id⟧),
               {
                 pointsSet: ⟦2-char-id⟧
               } = this.getCell(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]);
-            return !!⟦2-char-id⟧.has((0, ⟦2-char-id⟧.f)(⟦2-char-id⟧, ⟦2-char-id⟧))
+            return !!⟦2-char-id⟧.has((0, ⟦2-char-id⟧.i)(⟦2-char-id⟧, ⟦2-char-id⟧))
           }
           getClosestPoint(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.getCellCoordFromGlobalCoord(⟦2-char-id⟧, ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 182 · Change · +1 / -1</summary>

```diff
@@ -7089,7 +7089,7 @@
             let ⟦2-char-id⟧ = [0, 0],
               ⟦2-char-id⟧ = 1⟦2-char-id⟧;
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
               ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧)
             }
             return ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 183 · Change · +1 / -1</summary>

```diff
@@ -7118,7 +7118,7 @@
             let ⟦2-char-id⟧ = [0, 0],
               ⟦2-char-id⟧ = 1⟦2-char-id⟧;
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.surroundingPoints) {
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
               ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧)
             }
             const ⟦2-char-id⟧ = [{
```

</details>

<details>
<summary>Hunk 184 · Change · +1 / -1</summary>

```diff
@@ -7130,7 +7130,7 @@
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.surroundingPoints.length; ⟦2-char-id⟧++) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.surroundingPoints[⟦2-char-id⟧];
               if (⟦2-char-id⟧[0] === ⟦2-char-id⟧[0] && ⟦2-char-id⟧[1] === ⟦2-char-id⟧[1]) continue;
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) - ⟦2-char-id⟧;
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) - ⟦2-char-id⟧;
               ⟦2-char-id⟧ < ⟦2-char-id⟧ && (⟦2-char-id⟧.push({
                 pt: ⟦2-char-id⟧,
                 distDiffFromFirstPt: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 185 · Change · +1 / -1</summary>

```diff
@@ -7163,7 +7163,7 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧ * this.gridSize;
             let ⟦2-char-id⟧, ⟦2-char-id⟧;
             if (this.useJitteredGrid) {
-              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${JJ}${cJ}${this.seed}jitter`);
+              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${BB}${TB}${this.seed}jitter`);
               ⟦2-char-id⟧ = [];
               const ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.gridSize,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.gridSize;
```

</details>

<details>
<summary>Hunk 186 · Change · +1 / -1</summary>

```diff
@@ -7174,7 +7174,7 @@
                   ⟦2-char-id⟧.push([⟦2-char-id⟧, ⟦2-char-id⟧])
                 }
             } else {
-              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${JJ}${cJ}${this.seed}pts`),
+              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${BB}${TB}${this.seed}pts`),
                 ⟦2-char-id⟧ = () => ⟦2-char-id⟧.next();
               let ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = this.gridSize - (this.customCellGap || this.minDist);
```

</details>

<details>
<summary>Hunk 187 · Change · +12 / -12</summary>

```diff
@@ -7202,32 +7202,32 @@
             }
             if (this.useIsPoint) {
               ⟦2-char-id⟧ = new Set;
-              for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.add((0, ⟦2-char-id⟧.f)(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]))
+              for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.add((0, ⟦2-char-id⟧.i)(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]))
             }
             return {
               pointsSet: ⟦2-char-id⟧,
-              points: this.useKthClosestPoint ? UJ : null
+              points: this.useKthClosestPoint ? yB : null
             }
           }
         }
       },
-      59630: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59932: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
           WorldGenerator: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59540),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59574),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59549),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59543),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(36711),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(535),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(3735);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59848),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59881),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59859),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59857),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(36649),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(572),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(3734);
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.Kn = ⟦2-char-id⟧, this.pointsGenerator = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * ⟦2-char-id⟧ / this.Kn) + 1
+            this.UD = ⟦2-char-id⟧, this.pointsGenerator = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * ⟦2-char-id⟧ / this.UD) + 1
           }
           getChunkCoordFromGlobalCoord(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return this.tempChunkCoord[0] = Math.floor(⟦2-char-id⟧ / this.Kn), this.tempChunkCoord[1] = Math.floor(⟦2-char-id⟧ / this.Kn), this.tempChunkCoord
+            return this.tempChunkCoord[0] = Math.floor(⟦2-char-id⟧ / this.UD), this.tempChunkCoord[1] = Math.floor(⟦2-char-id⟧ / this.UD), this.tempChunkCoord
           }
           getSurroundingFeatures(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.getChunkCoordFromGlobalCoord(⟦2-char-id⟧, ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 188 · Change · +8 / -8</summary>

```diff
@@ -7237,16 +7237,16 @@
             return ⟦2-char-id⟧
           }
           getRandomPointInChunk(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧ * this.Kn,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ * this.Kn,
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${JJ}|${cJ}|${this.seed}`);
-            return [⟦2-char-id⟧ + Math.floor(⟦2-char-id⟧.next() * this.Kn), ⟦2-char-id⟧ + Math.floor(⟦2-char-id⟧.next() * this.Kn)]
-          }
-        }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59618);
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧ * this.UD,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ * this.UD,
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${BB}|${TB}|${this.seed}`);
+            return [⟦2-char-id⟧ + Math.floor(⟦2-char-id⟧.next() * this.UD), ⟦2-char-id⟧ + Math.floor(⟦2-char-id⟧.next() * this.UD)]
+          }
+        }
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59925);
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.numCaveTypes = ⟦2-char-id⟧, this.caveTypeToBlockIds = ⟦2-char-id⟧, this.caveTypePrioritization = ⟦2-char-id⟧, this.Kn = ⟦2-char-id⟧
+            this.numCaveTypes = ⟦2-char-id⟧, this.caveTypeToBlockIds = ⟦2-char-id⟧, this.caveTypePrioritization = ⟦2-char-id⟧, this.UD = ⟦2-char-id⟧
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 189 · Change · +1 / -1</summary>

```diff
@@ -7257,7 +7257,7 @@
             return this.data.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           viewJustInnerChunk() {
-            return new ⟦2-char-id⟧(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.Kn, this.data.viewJustInnerChunk())
+            return new ⟦2-char-id⟧(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.UD, this.data.viewJustInnerChunk())
           }
         }
         class ⟦2-char-id⟧ extends ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 190 · Change · +12 / -12</summary>

```diff
@@ -7281,29 +7281,29 @@
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.Kn = ⟦2-char-id⟧, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+            this.UD = ⟦2-char-id⟧, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           static isInCave(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.numCaveTypes; ⟦2-char-id⟧++) {
-              const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.FloorY),
-                ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.CeilingY);
+              const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.FloorY),
+                ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.CeilingY);
               if (⟦2-char-id⟧ <= ⟦2-char-id⟧ && ⟦2-char-id⟧ <= ⟦2-char-id⟧) return !0
             }
             return !1
           }
           static addCavesToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`caveBlocks${cJ}|${ZJ}|${FJ}`);
-            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + ⟦2-char-id⟧.Kn; ⟦2-char-id⟧++)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + ⟦2-char-id⟧.Kn; ⟦2-char-id⟧++) {
-                const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight);
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`caveBlocks${TB}|${dB}|${VB}`);
+            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + ⟦2-char-id⟧.UD; ⟦2-char-id⟧++)
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + ⟦2-char-id⟧.UD; ⟦2-char-id⟧++) {
+                const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight);
                 for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.caveTypePrioritization) {
-                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.FloorY);
-                  if (⟦2-char-id⟧ === ⟦2-char-id⟧.n) continue;
-                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.CeilingY),
-                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + 1, ⟦2-char-id⟧ + ⟦2-char-id⟧.Kn, ⟦2-char-id⟧ + 1),
+                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.FloorY);
+                  if (⟦2-char-id⟧ === ⟦2-char-id⟧.l) continue;
+                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.CeilingY),
+                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + 1, ⟦2-char-id⟧ + ⟦2-char-id⟧.UD, ⟦2-char-id⟧ + 1),
                     ⟦2-char-id⟧ = ⟦2-char-id⟧.caveTypeToBlockIds[⟦2-char-id⟧];
                   for (let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧); ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
-                    const ⟦2-char-id⟧ = "number" === typeof ⟦2-char-id⟧ ? GJ : ⟦2-char-id⟧.sample(⟦2-char-id⟧);
+                    const ⟦2-char-id⟧ = "number" === typeof ⟦2-char-id⟧ ? uB : ⟦2-char-id⟧.sample(⟦2-char-id⟧);
                     ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)
                   }
                 }
```

</details>

<details>
<summary>Hunk 191 · Change · +6 / -6</summary>

```diff
@@ -7311,21 +7311,21 @@
           }
           getCaveHeightmapVals(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = [⟦2-char-id⟧, ⟦2-char-id⟧],
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.caveMetadataForChunkCache, ⟦2-char-id⟧, this.Kn),
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧(this.caveMetadataForChunkCache, ⟦2-char-id⟧, this.UD),
               ⟦2-char-id⟧ = this.caveMetadataForChunkCache.numCaveTypes,
               ⟦2-char-id⟧ = this.caveMetadataForChunkCache.caveTypeToBlockId,
               ⟦2-char-id⟧ = this.caveMetadataForChunkCache.caveTypePrioritization,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.e.create(this.Kn, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.NumFields, ⟦2-char-id⟧);
-            return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.Kn, ⟦2-char-id⟧)
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.b.create(this.UD, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.NumFields, ⟦2-char-id⟧);
+            return new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.UD, ⟦2-char-id⟧)
           }
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            if (this.caveMetadataForChunkCache = ⟦2-char-id⟧, this.heightmapVals = ⟦2-char-id⟧, this.caveGeneratorsPerChunk = [], ⟦2-char-id⟧ !== ⟦2-char-id⟧.E) throw new Error(`Cave generation is not supported for chunk sizes other than ${qJ.E}`)
+            if (this.caveMetadataForChunkCache = ⟦2-char-id⟧, this.heightmapVals = ⟦2-char-id⟧, this.caveGeneratorsPerChunk = [], ⟦2-char-id⟧ !== ⟦2-char-id⟧.z) throw new Error(`Cave generation is not supported for chunk sizes other than ${YB.z}`)
           }
           generateAndSet(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧),
-              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧);
+            const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧),
+              ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧);
             this.getOrCreateCaveGeneratorForChunk(⟦2-char-id⟧, ⟦2-char-id⟧).generateAndSet(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           getOrCreateCaveGeneratorForChunk(⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 192 · Change · +2 / -2</summary>

```diff
@@ -7340,14 +7340,14 @@
             this.setDefaultCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.generateAndSetSpaghettiCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.generateAndSetPitCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.generateAndSetRavineCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.generateAndSetSphereCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.removeCavesNearWater(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           setDefaultCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.numCaveTypes; ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.FloorY, ⟦2-char-id⟧.n), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.CeilingY, ⟦2-char-id⟧.n)
+            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.numCaveTypes; ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.FloorY, ⟦2-char-id⟧.l), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.CeilingY, ⟦2-char-id⟧.l)
           }
           generateAndSetSpaghettiCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             for (const ⟦2-char-id⟧ of this.spaghettiCaveMetadataForChunk) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.caveEdgeNoiseGenerator.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧);
               if (⟦2-char-id⟧ >= ⟦2-char-id⟧.SPAGHETTI_CAVE_EDGE_CUTOFF) continue;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.caveHeightNoiseGenerator.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧);
-              if (⟦2-char-id⟧ === ⟦2-char-id⟧.c) continue;
+              if (⟦2-char-id⟧ === ⟦2-char-id⟧.b) continue;
               if (!(⟦2-char-id⟧.caveHeightThreshold.low < ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧.caveHeightThreshold.high)) continue;
               let ⟦2-char-id⟧;
               {
```

</details>

<details>
<summary>Hunk 193 · Change · +1 / -1</summary>

```diff
@@ -7360,7 +7360,7 @@
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.caveYPerturbNoiseGenerator.getOctaves(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧),
                 ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.caveCentreY + ⟦2-char-id⟧ - ⟦2-char-id⟧);
               let ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.caveCentreY + ⟦2-char-id⟧ + ⟦2-char-id⟧);
-              ⟦2-char-id⟧ + 1 === this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight) && ⟦2-char-id⟧++, ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.c.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.c.CeilingY, ⟦2-char-id⟧)
+              ⟦2-char-id⟧ + 1 === this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight) && ⟦2-char-id⟧++, ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.d.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.d.CeilingY, ⟦2-char-id⟧)
             }
           }
           generateAndSetPitCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 194 · Change · +2 / -2</summary>

```diff
@@ -7386,9 +7386,9 @@
                 const ⟦2-char-id⟧ = 1 - ⟦2-char-id⟧ / ⟦2-char-id⟧;
                 ⟦2-char-id⟧ += (5 + ⟦2-char-id⟧.pitMidpointYPerturbNoiseGenerator.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧)) * ⟦2-char-id⟧, ⟦2-char-id⟧ || (⟦2-char-id⟧ -= (⟦2-char-id⟧ - ⟦2-char-id⟧) * ⟦2-char-id⟧)
               }
-              ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧), (⟦2-char-id⟧ || ⟦2-char-id⟧ + 1 === this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight)) && ⟦2-char-id⟧++;
+              ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧), (⟦2-char-id⟧ || ⟦2-char-id⟧ + 1 === this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight)) && ⟦2-char-id⟧++;
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.caveType;
-              null !== ⟦2-char-id⟧.wallType && (⟦2-char-id⟧ <= .9 || ⟦2-char-id⟧ <= .9) ? ⟦2-char-id⟧ = ⟦2-char-id⟧.wallType : ⟦2-char-id⟧.pitCeilingThickness > 0 && (⟦2-char-id⟧ -= ⟦2-char-id⟧.pitCeilingThickness, ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.ceilingType, ⟦2-char-id⟧.c.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.ceilingType, ⟦2-char-id⟧.c.CeilingY, ⟦2-char-id⟧ + ⟦2-char-id⟧.pitCeilingThickness)), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.CeilingY, ⟦2-char-id⟧)
+              null !== ⟦2-char-id⟧.wallType && (⟦2-char-id⟧ <= .9 || ⟦2-char-id⟧ <= .9) ? ⟦2-char-id⟧ = ⟦2-char-id⟧.wallType : ⟦2-char-id⟧.pitCeilingThickness > 0 && (⟦2-char-id⟧ -= ⟦2-char-id⟧.pitCeilingThickness, ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.ceilingType, ⟦2-char-id⟧.d.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.ceilingType, ⟦2-char-id⟧.d.CeilingY, ⟦2-char-id⟧ + ⟦2-char-id⟧.pitCeilingThickness)), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.CeilingY, ⟦2-char-id⟧)
             }
           }
           generateAndSetRavineCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 195 · Change · +2 / -2</summary>

```diff
@@ -7402,12 +7402,12 @@
               if (Math.abs(⟦2-char-id⟧ * ⟦2-char-id⟧.axisNormalX + ⟦2-char-id⟧ * ⟦2-char-id⟧.axisNormalZ) > ⟦2-char-id⟧.reachFromAxis) continue;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.ravineXZPerturbNoiseGenerator.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.ravineXZPerturbNoiseGenerator.getOctaves(⟦2-char-id⟧ + 430, ⟦2-char-id⟧ - 330),
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
               if (⟦2-char-id⟧ > ⟦2-char-id⟧) continue;
               const ⟦2-char-id⟧ = [⟦2-char-id⟧, ⟦2-char-id⟧],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = [⟦2-char-id⟧[0] + ⟦2-char-id⟧.ravineDirection[0], ⟦2-char-id⟧[1] + ⟦2-char-id⟧.ravineDirection[1]],
-                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.s)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+                ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.w)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ * (1 - ⟦2-char-id⟧ / ⟦2-char-id⟧);
               if (⟦2-char-id⟧ > ⟦2-char-id⟧) continue;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.ravineYPerturbNoiseGenerator.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 196 · Change · +1 / -1</summary>

```diff
@@ -7419,7 +7419,7 @@
                 const ⟦2-char-id⟧ = 1 - ⟦2-char-id⟧ / ⟦2-char-id⟧;
                 ⟦2-char-id⟧ += ⟦2-char-id⟧.ravineHeight * ⟦2-char-id⟧
               }
-              ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧), ⟦2-char-id⟧ + 1 === this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight) && ⟦2-char-id⟧++, ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.c.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.c.CeilingY, ⟦2-char-id⟧)
+              ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧), ⟦2-char-id⟧ + 1 === this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight) && ⟦2-char-id⟧++, ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.d.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.d.CeilingY, ⟦2-char-id⟧)
             }
           }
           generateAndSetSphereCaves(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 197 · Change · +6 / -6</summary>

```diff
@@ -7436,20 +7436,20 @@
               const ⟦2-char-id⟧ = Math.sqrt(⟦2-char-id⟧.sphereRadiusSquared - ⟦2-char-id⟧),
                 ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.sphereCentreY - ⟦2-char-id⟧);
               let ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.sphereCentreY + ⟦2-char-id⟧);
-              ⟦2-char-id⟧ + 1 === this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight) && ⟦2-char-id⟧++, ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.c.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.c.CeilingY, ⟦2-char-id⟧)
+              ⟦2-char-id⟧ + 1 === this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight) && ⟦2-char-id⟧++, ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.d.FloorY, ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.caveType, ⟦2-char-id⟧.d.CeilingY, ⟦2-char-id⟧)
             }
           }
           removeCavesNearWater(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.CavesAllowedBelowY);
-            if (⟦2-char-id⟧ !== ⟦2-char-id⟧.l)
+            const ⟦2-char-id⟧ = this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.CavesAllowedBelowY);
+            if (⟦2-char-id⟧ !== ⟦2-char-id⟧.h)
               for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.numCaveTypes; ⟦2-char-id⟧++) {
-                if (⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.CeilingY) <= ⟦2-char-id⟧) continue;
-                ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.FloorY) <= ⟦2-char-id⟧ ? ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.CeilingY, ⟦2-char-id⟧) : (⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.FloorY, ⟦2-char-id⟧.n), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.CeilingY, ⟦2-char-id⟧.n))
+                if (⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.CeilingY) <= ⟦2-char-id⟧) continue;
+                ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.FloorY) <= ⟦2-char-id⟧ ? ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.CeilingY, ⟦2-char-id⟧) : (⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.FloorY, ⟦2-char-id⟧.l), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.CeilingY, ⟦2-char-id⟧.l))
               }
           }
         }
         ⟦2-char-id⟧.SPAGHETTI_CAVE_EDGE_CUTOFF = .08;
-        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.b("cave chunk metadata", 100, 6⟦2-char-id⟧);
+        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e("cave chunk metadata", 100, 6⟦2-char-id⟧);
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             this.seed = ⟦2-char-id⟧, this.spaghettiCaveMetadata = void 0, this.pitCaveMetadata = void 0, this.ravineCaveMetadata = void 0, this.sphereCaveMetadata = void 0, this.numCaveTypes = void 0, this.caveTypeToBlockId = void 0, this.caveTypePrioritization = void 0, this.perChunkCache = ⟦2-char-id⟧.partition();
```

</details>

<details>
<summary>Hunk 198 · Change · +4 / -4</summary>

```diff
@@ -7597,13 +7597,13 @@
                   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.caveYPerturbNoiseParams) ⟦2-char-id⟧ += ⟦2-char-id⟧.amplitude;
                   for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.count; ⟦2-char-id⟧++) ⟦2-char-id⟧.push({
                     caveType: ⟦2-char-id⟧++,
-                    caveEdgeNoiseGenerator: new ⟦2-char-id⟧.j(⟦2-char-id⟧.caveEdgeNoiseParams, `${JJ}CaveCutoff${XJ}${UJ}`),
-                    caveHeightNoiseGenerator: new ⟦2-char-id⟧.l(⟦2-char-id⟧.caveHeightNoiseParams, ⟦2-char-id⟧.caveHeightNoiseThresholdParams, `${JJ}Cave${XJ}${UJ}`),
+                    caveEdgeNoiseGenerator: new ⟦2-char-id⟧.g(⟦2-char-id⟧.caveEdgeNoiseParams, `${BB}CaveCutoff${lB}${yB}`),
+                    caveHeightNoiseGenerator: new ⟦2-char-id⟧.i(⟦2-char-id⟧.caveHeightNoiseParams, ⟦2-char-id⟧.caveHeightNoiseThresholdParams, `${BB}Cave${lB}${yB}`),
                     caveHeightThreshold: ⟦2-char-id⟧(⟦2-char-id⟧.caveHeightNoiseThresholdParams),
                     caveHeightMax: ⟦2-char-id⟧.caveHeightMax,
                     caveHeightPercentageUpperBound: ⟦2-char-id⟧.caveHeightPercentageUpperBound,
-                    caveXZPerturbNoiseGenerator: new ⟦2-char-id⟧.j(⟦2-char-id⟧.caveXZPerturbNoiseParams, `${JJ}CaveHeightPerturb${XJ}${UJ}`),
-                    caveYPerturbNoiseGenerator: new ⟦2-char-id⟧.j(⟦2-char-id⟧.caveYPerturbNoiseParams, `${JJ}CaveHeightNoise${XJ}${UJ}`),
+                    caveXZPerturbNoiseGenerator: new ⟦2-char-id⟧.g(⟦2-char-id⟧.caveXZPerturbNoiseParams, `${BB}CaveHeightPerturb${lB}${yB}`),
+                    caveYPerturbNoiseGenerator: new ⟦2-char-id⟧.g(⟦2-char-id⟧.caveYPerturbNoiseParams, `${BB}CaveHeightNoise${lB}${yB}`),
                     caveCentreY: ⟦2-char-id⟧.caveCentreYMin + ⟦2-char-id⟧
                   })
                 }
```

</details>

<details>
<summary>Hunk 199 · Change · +2 / -2</summary>

```diff
@@ -7698,8 +7698,8 @@
                     pitMaxFloorY: -10,
                     pitMinHeight: 7,
                     pitMaxHeight: 15,
-                    fillBlockId: (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧),
-                    wallBlockIds: new ⟦2-char-id⟧.f([{
+                    fillBlockId: (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧, ⟦2-char-id⟧),
+                    wallBlockIds: new ⟦2-char-id⟧.d([{
                       value: ⟦2-char-id⟧.Stone.id,
                       weight: 3
                     }, {
```

</details>

<details>
<summary>Hunk 200 · Change · +7 / -7</summary>

```diff
@@ -7722,18 +7722,18 @@
                   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.pitXZPerturbNoiseParams) ⟦2-char-id⟧ += ⟦2-char-id⟧.amplitude;
                   for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.count; ⟦2-char-id⟧++) {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧.length,
-                      ⟦2-char-id⟧ = new ⟦2-char-id⟧.j(⟦2-char-id⟧.pitXZPerturbNoiseParams, `${JJ}DistPitPerturb${eJ}`),
-                      ⟦2-char-id⟧ = `${JJ}PitGen${eJ}`,
-                      ⟦2-char-id⟧ = new ⟦2-char-id⟧.e("cavePit", ⟦2-char-id⟧.numChunksBetweenPits, !0, !1, ⟦2-char-id⟧, 100, ⟦2-char-id⟧),
+                      ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(⟦2-char-id⟧.pitXZPerturbNoiseParams, `${BB}DistPitPerturb${pB}`),
+                      ⟦2-char-id⟧ = `${BB}PitGen${pB}`,
+                      ⟦2-char-id⟧ = new ⟦2-char-id⟧.c("cavePit", ⟦2-char-id⟧.numChunksBetweenPits, !0, !1, ⟦2-char-id⟧, 100, ⟦2-char-id⟧),
                       ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.pitMaxWidth + 2 * ⟦2-char-id⟧, ⟦2-char-id⟧);
-                    console.assert(⟦2-char-id⟧.chunkSearchRadius <= ⟦2-char-id⟧.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${fJ.chunkSearchRadius} ${qJ.numChunksBetweenPits/2}`);
+                    console.assert(⟦2-char-id⟧.chunkSearchRadius <= ⟦2-char-id⟧.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${HB.chunkSearchRadius} ${YB.numChunksBetweenPits/2}`);
                     const ⟦2-char-id⟧ = new ⟦2-char-id⟧.h(⟦2-char-id⟧.pitMinWidth, ⟦2-char-id⟧.pitMaxWidth),
                       ⟦2-char-id⟧ = new ⟦2-char-id⟧.h(⟦2-char-id⟧.pitMinFloorY, ⟦2-char-id⟧.pitMaxFloorY),
                       ⟦2-char-id⟧ = new ⟦2-char-id⟧.h(⟦2-char-id⟧.pitMinHeight, ⟦2-char-id⟧.pitMaxHeight),
-                      ⟦2-char-id⟧ = new ⟦2-char-id⟧.j(⟦2-char-id⟧.pitFloorYPerturbNoiseParams, `${JJ}yPitPerturb${eJ}`);
+                      ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(⟦2-char-id⟧.pitFloorYPerturbNoiseParams, `${BB}yPitPerturb${pB}`);
                     let ⟦2-char-id⟧ = null;
-                    null !== ⟦2-char-id⟧.pitHeightPerturbNoiseParams && (⟦2-char-id⟧ = new ⟦2-char-id⟧.j(⟦2-char-id⟧.pitHeightPerturbNoiseParams, `${JJ}heightPitPerturb${eJ}`));
-                    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.j(⟦2-char-id⟧.pitMidpointNoiseParams, `${JJ}edgesPitPerturb${eJ}`),
+                    null !== ⟦2-char-id⟧.pitHeightPerturbNoiseParams && (⟦2-char-id⟧ = new ⟦2-char-id⟧.g(⟦2-char-id⟧.pitHeightPerturbNoiseParams, `${BB}heightPitPerturb${pB}`));
+                    const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(⟦2-char-id⟧.pitMidpointNoiseParams, `${BB}edgesPitPerturb${pB}`),
                       ⟦2-char-id⟧ = ⟦2-char-id⟧++;
                     ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧.fillBlockId;
                     let ⟦2-char-id⟧ = null;
```

</details>

<details>
<summary>Hunk 201 · Change · +5 / -5</summary>

```diff
@@ -7803,14 +7803,14 @@
                   ⟦2-char-id⟧ = [];
                 for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.count; ⟦2-char-id⟧++) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧,
-                    ⟦2-char-id⟧ = new ⟦2-char-id⟧.j(⟦2-char-id⟧.ravineXZPerturbNoiseParams, `${JJ}DistRavPerturb${AJ}`);
+                    ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(⟦2-char-id⟧.ravineXZPerturbNoiseParams, `${BB}DistRavPerturb${JB}`);
                   let ⟦2-char-id⟧ = 0;
                   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.ravineXZPerturbNoiseParams) ⟦2-char-id⟧ += ⟦2-char-id⟧.amplitude;
-                  const ⟦2-char-id⟧ = new ⟦2-char-id⟧.j(⟦2-char-id⟧.ravineYPerturbNoiseParams, `${JJ}yRavinePerturb${AJ}`),
-                    ⟦2-char-id⟧ = `${JJ}RavineGen${AJ}`,
-                    ⟦2-char-id⟧ = new ⟦2-char-id⟧.e("caveRav", ⟦2-char-id⟧.numChunksBetweenRavines, !0, !1, ⟦2-char-id⟧, 100, ⟦2-char-id⟧),
+                  const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(⟦2-char-id⟧.ravineYPerturbNoiseParams, `${BB}yRavinePerturb${JB}`),
+                    ⟦2-char-id⟧ = `${BB}RavineGen${JB}`,
+                    ⟦2-char-id⟧ = new ⟦2-char-id⟧.c("caveRav", ⟦2-char-id⟧.numChunksBetweenRavines, !0, !1, ⟦2-char-id⟧, 100, ⟦2-char-id⟧),
                     ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, Math.max(⟦2-char-id⟧.ravineMaxLength, ⟦2-char-id⟧.ravineMaxWidth) + 2 * ⟦2-char-id⟧, ⟦2-char-id⟧);
-                  console.assert(⟦2-char-id⟧.chunkSearchRadius <= ⟦2-char-id⟧.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${fJ.chunkSearchRadius} ${qJ.numChunksBetweenRavines/2}`);
+                  console.assert(⟦2-char-id⟧.chunkSearchRadius <= ⟦2-char-id⟧.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${HB.chunkSearchRadius} ${YB.numChunksBetweenRavines/2}`);
                   const ⟦2-char-id⟧ = new ⟦2-char-id⟧.h(⟦2-char-id⟧.ravineMinWidth, ⟦2-char-id⟧.ravineMaxWidth),
                     ⟦2-char-id⟧ = new ⟦2-char-id⟧.h(⟦2-char-id⟧.ravineMinLength, ⟦2-char-id⟧.ravineMaxLength),
                     ⟦2-char-id⟧ = new ⟦2-char-id⟧.h(⟦2-char-id⟧.ravineMinFloorY, ⟦2-char-id⟧.ravineMaxFloorY, !0),
```

</details>

<details>
<summary>Hunk 202 · Change · +4 / -4</summary>

```diff
@@ -7857,13 +7857,13 @@
                   ⟦2-char-id⟧ = [];
                 for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.count; ⟦2-char-id⟧++) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧,
-                    ⟦2-char-id⟧ = new ⟦2-char-id⟧.j(⟦2-char-id⟧.sphereXZPerturbNoiseParams, `${JJ}DistSpherePerturb${AJ}`);
+                    ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(⟦2-char-id⟧.sphereXZPerturbNoiseParams, `${BB}DistSpherePerturb${JB}`);
                   let ⟦2-char-id⟧ = 0;
                   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.sphereXZPerturbNoiseParams) ⟦2-char-id⟧ += ⟦2-char-id⟧.amplitude;
-                  const ⟦2-char-id⟧ = `${JJ}SphereGen${AJ}`,
-                    ⟦2-char-id⟧ = new ⟦2-char-id⟧.e("caveSph", ⟦2-char-id⟧.numChunksBetweenSpheres, !0, !1, ⟦2-char-id⟧, 100, ⟦2-char-id⟧),
+                  const ⟦2-char-id⟧ = `${BB}SphereGen${JB}`,
+                    ⟦2-char-id⟧ = new ⟦2-char-id⟧.c("caveSph", ⟦2-char-id⟧.numChunksBetweenSpheres, !0, !1, ⟦2-char-id⟧, 100, ⟦2-char-id⟧),
                     ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, 2 * (⟦2-char-id⟧.sphereMaxRadius + ⟦2-char-id⟧), ⟦2-char-id⟧);
-                  console.assert(⟦2-char-id⟧.chunkSearchRadius <= ⟦2-char-id⟧.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${GJ.chunkSearchRadius} ${qJ.numChunksBetweenSpheres/2}`);
+                  console.assert(⟦2-char-id⟧.chunkSearchRadius <= ⟦2-char-id⟧.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${uB.chunkSearchRadius} ${YB.numChunksBetweenSpheres/2}`);
                   const ⟦2-char-id⟧ = new ⟦2-char-id⟧.h(⟦2-char-id⟧.sphereMinRadius, ⟦2-char-id⟧.sphereMaxRadius, !0),
                     ⟦2-char-id⟧ = new ⟦2-char-id⟧.h(⟦2-char-id⟧.sphereMinCentreY, ⟦2-char-id⟧.sphereMaxCentreY);
                   ⟦2-char-id⟧.push({
```

</details>

<details>
<summary>Hunk 203 · Change · +2 / -2</summary>

```diff
@@ -7899,8 +7899,8 @@
           }
           getOrBuildCaveMetadataForChunk(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.perChunkCache.get(⟦2-char-id⟧, ⟦2-char-id⟧);
-            if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) return ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.B)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.B)(⟦2-char-id⟧)],
+            if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) return ⟦2-char-id⟧;
+            const ⟦2-char-id⟧ = [(0, ⟦2-char-id⟧.v)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.v)(⟦2-char-id⟧)],
               ⟦2-char-id⟧ = {
                 spaghettiCaveMetadataForChunk: this.spaghettiCaveMetadata,
                 pitCaveMetadataForChunk: this.buildPitCaveMetadataForChunk(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 204 · Change · +1 / -1</summary>

```diff
@@ -7918,7 +7918,7 @@
                 var ⟦2-char-id⟧, ⟦2-char-id⟧;
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
                   ⟦2-char-id⟧ = ⟦2-char-id⟧[1],
-                  ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`pit${XJ}|${AJ}|${UJ}${this.seed}`),
+                  ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`pit${lB}|${JB}|${yB}${this.seed}`),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.pitWidthDistribution.sample(⟦2-char-id⟧) >> 1,
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.pitLengthDistribution.sample(⟦2-char-id⟧) >> 1,
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 205 · Change · +1 / -1</summary>

```diff
@@ -7928,7 +7928,7 @@
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.pitXZPerturbNoiseGenerator.maxMagnitude(),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.pitFloorYDistribution.sample(⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.pitHeightDistribution.sample(⟦2-char-id⟧),
-                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.pitCeilingThicknessDistribution) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sample(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? ZJ : 0;
+                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.pitCeilingThicknessDistribution) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sample(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? dB : 0;
                 ⟦2-char-id⟧.push({
                   caveType: ⟦2-char-id⟧.caveType,
                   wallType: ⟦2-char-id⟧.wallType,
```

</details>

<details>
<summary>Hunk 206 · Change · +2 / -2</summary>

```diff
@@ -7961,13 +7961,13 @@
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
                   ⟦2-char-id⟧ = ⟦2-char-id⟧[1],
-                  ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`rav${eJ}|${XJ}|${ZJ}${this.seed}`),
+                  ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`rav${pB}|${lB}|${dB}${this.seed}`),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.ravineWidthDistribution.sample(⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.ravineLengthDistribution.sample(⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.ravineFloorYDistribution.sample(⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.ravineHeightDistribution.sample(⟦2-char-id⟧),
                   ⟦2-char-id⟧ = [⟦2-char-id⟧.ravineXZDirectionDistribution.sample(⟦2-char-id⟧), ⟦2-char-id⟧.ravineXZDirectionDistribution.sample(⟦2-char-id⟧)];
-                (0, ⟦2-char-id⟧.C)(⟦2-char-id⟧);
+                (0, ⟦2-char-id⟧.J)(⟦2-char-id⟧);
                 const ⟦2-char-id⟧ = Math.SQRT2 * ⟦2-char-id⟧.ravineXZPerturbNoiseGenerator.maxMagnitude(),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
                   ⟦2-char-id⟧ = Math.hypot(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]);
```

</details>

<details>
<summary>Hunk 207 · Change · +1 / -1</summary>

```diff
@@ -7998,7 +7998,7 @@
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
                   ⟦2-char-id⟧ = ⟦2-char-id⟧[1],
-                  ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`sph${UJ}|${eJ}|${ZJ}${this.seed}`),
+                  ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`sph${yB}|${pB}|${dB}${this.seed}`),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.sphereRadiusDistribution.sample(⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ * ⟦2-char-id⟧,
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.sphereCentreYDistribution.sample(⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 208 · Change · +2 / -2</summary>

```diff
@@ -8017,8 +8017,8 @@
             return ⟦2-char-id⟧
           }
         }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(518),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(38085);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(551),
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(38074);
         let ⟦2-char-id⟧ = function() {
           let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
           return crypto.getRandomValues(new Uint8Array(⟦2-char-id⟧)).reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧ += (⟦2-char-id⟧ &= 63) < 36 ? ⟦2-char-id⟧.toString(36) : ⟦2-char-id⟧ < 62 ? (⟦2-char-id⟧ - 26).toString(36).toUpperCase() : ⟦2-char-id⟧ > 62 ? "-" : "_"), "")
```

</details>

<details>
<summary>Hunk 209 · Change · +1 / -1</summary>

```diff
@@ -8033,7 +8033,7 @@
           }
           getPossibleEnchantmentsForItem(⟦2-char-id⟧) {
             var ⟦2-char-id⟧;
-            return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[this.suffixMapping[⟦2-char-id⟧]]) && void 0 !== ⟦2-char-id⟧ ? cJ : []
+            return null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[this.suffixMapping[⟦2-char-id⟧]]) && void 0 !== ⟦2-char-id⟧ ? TB : []
           }
           chooseRandomEnchantmentAttributes(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = [...⟦2-char-id⟧],
```

</details>

<details>
<summary>Hunk 210 · Change · +1 / -1</summary>

```diff
@@ -8052,7 +8052,7 @@
               const {
                 enchantments: ⟦2-char-id⟧
               } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧[Math.floor(⟦2-char-id⟧.next() * ⟦2-char-id⟧.length)];
-              ⟦2-char-id⟧[⟦2-char-id⟧] = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? XJ : 0) + 1, ⟦2-char-id⟧[⟦2-char-id⟧] >= ⟦2-char-id⟧ && ⟦2-char-id⟧.splice(⟦2-char-id⟧.indexOf(⟦2-char-id⟧), 1)
+              ⟦2-char-id⟧[⟦2-char-id⟧] = (null !== (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? lB : 0) + 1, ⟦2-char-id⟧[⟦2-char-id⟧] >= ⟦2-char-id⟧ && ⟦2-char-id⟧.splice(⟦2-char-id⟧.indexOf(⟦2-char-id⟧), 1)
             }
             return ⟦2-char-id⟧
           }
```

</details>

<details>
<summary>Hunk 211 · Change · +1 / -1</summary>

```diff
@@ -8119,7 +8119,7 @@
             return this.mapBlockId(this.blockMetadata[⟦2-char-id⟧], ⟦2-char-id⟧, this.getRotationMapping(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧)
           }
           getBlockIdMappingKey(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return `r${JJ}|m${Number(cJ)}`
+            return `r${BB}|m${Number(TB)}`
           }
           createBlockIdMapping(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = new Uint16Array(⟦2-char-id⟧ + 1),
```

</details>

<details>
<summary>Hunk 212 · Change · +6 / -6</summary>

```diff
@@ -8153,23 +8153,23 @@
               metaStr: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
             let ⟦2-char-id⟧;
-            const [, ⟦2-char-id⟧, ⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.exec(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? UJ : [];
+            const [, ⟦2-char-id⟧, ⟦2-char-id⟧] = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.exec(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? yB : [];
             if (void 0 !== ⟦2-char-id⟧) {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
-              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[`${YJ}|meta|${[wJ.split("").filter(((JJ,cJ)=>sJ.split("").some((JJ=>{const ZJ=wJ.indexOf(JJ);return((FJ?3-ZJ:ZJ)+XJ)%4===cJ})))).join(""),nJ].filter(Boolean).join("|")}`]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? GJ : ⟦2-char-id⟧
+              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[`${oB}|meta|${[KB.split("").filter(((BB,TB)=>OB.split("").some((BB=>{const dB=KB.indexOf(BB);return((VB?3-dB:dB)+lB)%4===TB})))).join(""),DB].filter(Boolean).join("|")}`]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? uB : ⟦2-char-id⟧
             } else if (null === ⟦2-char-id⟧) ⟦2-char-id⟧ = ⟦2-char-id⟧;
             else {
               var ⟦2-char-id⟧, ⟦2-char-id⟧;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ - 1] + 1;
-              let ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(`rot${jJ}`, `rot${JJ}`);
+              let ⟦2-char-id⟧ = ⟦2-char-id⟧.replace(`rot${gB}`, `rot${BB}`);
               ⟦2-char-id⟧ && ⟦2-char-id⟧.stairsCorner && (⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/(Left|Right)$/, (⟦2-char-id⟧ => "Left" === ⟦2-char-id⟧ ? "Right" : "Left"))), ⟦2-char-id⟧ && "Chest" === ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧.replace(/\|(left|right)$/, ((⟦2-char-id⟧, ⟦2-char-id⟧) => "left" === ⟦2-char-id⟧ ? "|right" : "|left")));
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.exec(⟦2-char-id⟧);
               if (⟦2-char-id⟧ && null !== ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = "lrud".split("").filter((⟦2-char-id⟧ => ⟦2-char-id⟧[2].includes("l" === ⟦2-char-id⟧ ? "r" : "r" === ⟦2-char-id⟧ ? "l" : ⟦2-char-id⟧)));
-                ⟦2-char-id⟧ = `${UJ[1]}|${JJ.join("")}`
+                ⟦2-char-id⟧ = `${yB[1]}|${BB.join("")}`
               }
-              const ⟦2-char-id⟧ = `${YJ}|${cJ}`;
-              if (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? xJ : null, null === ⟦2-char-id⟧) {
+              const ⟦2-char-id⟧ = `${oB}|${TB}`;
+              if (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧]) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id) && void 0 !== ⟦2-char-id⟧ ? EB : null, null === ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.rootMetaDesc === ⟦2-char-id⟧ ? ⟦2-char-id⟧.id : ⟦2-char-id⟧
               }
```

</details>

<details>
<summary>Hunk 213 · Change · +5 / -5</summary>

```diff
@@ -8177,16 +8177,16 @@
             return ⟦2-char-id⟧
           }
         }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(36692),
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(36627),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧),
-          ⟦2-char-id⟧ = ⟦2-char-id⟧(59556);
+          ⟦2-char-id⟧ = ⟦2-char-id⟧(59863);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
           for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.numCaveTypes; ⟦2-char-id⟧++) {
             if (⟦2-char-id⟧ && 0 !== ⟦2-char-id⟧.caveTypeToBlockIds[⟦2-char-id⟧]) continue;
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.FloorY);
-            if (⟦2-char-id⟧ === ⟦2-char-id⟧.n) continue;
-            ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.c.CeilingY))
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.FloorY);
+            if (⟦2-char-id⟧ === ⟦2-char-id⟧.l) continue;
+            ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.d.CeilingY))
           }
         }
 
```

</details>

<details>
<summary>Hunk 214 · Change · +1 / -1</summary>

```diff
@@ -8207,7 +8207,7 @@
             ceilingY: ⟦2-char-id⟧
           })
         }
-        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.f([{
+        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d([{
             value: 0,
             weight: 1
           }, {
```

</details>

<details>
<summary>Hunk 215 · Change · +1 / -1</summary>

```diff
@@ -8220,7 +8220,7 @@
             value: 270,
             weight: 1
           }]),
-          ⟦2-char-id⟧ = new ⟦2-char-id⟧.f([{
+          ⟦2-char-id⟧ = new ⟦2-char-id⟧.d([{
             value: !1,
             weight: 1
           }, {
```

</details>

<details>
<summary>Hunk 216 · Change · +1 / -1</summary>

```diff
@@ -8230,7 +8230,7 @@
         let ⟦2-char-id⟧, ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
           return ⟦2-char-id⟧[⟦2-char-id⟧.GUARANTEED_AIR = -1] = "GUARANTEED_AIR", ⟦2-char-id⟧
         }({});
-        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.f(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Otherworldly", "Runic", "Fabled", "Primordial", "Cosmic", "Enkindled"].map((⟦2-char-id⟧ => ({
+        const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Otherworldly", "Runic", "Fabled", "Primordial", "Cosmic", "Enkindled"].map((⟦2-char-id⟧ => ({
           value: ⟦2-char-id⟧,
           weight: 1
         }))));
```

</details>

<details>
<summary>Hunk 217 · Change · +1 / -1</summary>

```diff
@@ -8239,7 +8239,7 @@
             this.mobType = ⟦2-char-id⟧
           }
           sample(⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = `${iJ.sample(JJ)} ${this.mobType}`;
+            const ⟦2-char-id⟧ = `${GB.sample(BB)} ${this.mobType}`;
             return {
               customDisplayName: ⟦2-char-id⟧,
               customAttributes: {
```

</details>

<details>
<summary>Hunk 218 · Change · +1 / -1</summary>

```diff
@@ -8260,7 +8260,7 @@
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.items) {
                 var ⟦2-char-id⟧;
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.amount ? new ⟦2-char-id⟧.h(⟦2-char-id⟧.amount.min, ⟦2-char-id⟧.amount.max + 1) : null,
-                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.itemAttributesDistribution) && void 0 !== ⟦2-char-id⟧ ? ZJ : null;
+                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.itemAttributesDistribution) && void 0 !== ⟦2-char-id⟧ ? dB : null;
                 ⟦2-char-id⟧.push({
                   weight: ⟦2-char-id⟧.frequency,
                   value: {
```

</details>

<details>
<summary>Hunk 219 · Change · +2 / -2</summary>

```diff
@@ -8270,13 +8270,13 @@
                   }
                 })
               }
-              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.f(⟦2-char-id⟧);
+              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.d(⟦2-char-id⟧);
               ⟦2-char-id⟧.push({
                 numItemsDistribution: ⟦2-char-id⟧,
                 itemDistribution: ⟦2-char-id⟧
               })
             }
-            this.itemCategoryDistributions = ⟦2-char-id⟧, this.shouldEnchantDistribution = new ⟦2-char-id⟧.c(⟦2-char-id⟧.enchantmentProbability), this.enchantmentTier = ⟦2-char-id⟧.enchantmentTier
+            this.itemCategoryDistributions = ⟦2-char-id⟧, this.shouldEnchantDistribution = new ⟦2-char-id⟧.b(⟦2-char-id⟧.enchantmentProbability), this.enchantmentTier = ⟦2-char-id⟧.enchantmentTier
           }
           sample(⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = Array(⟦2-char-id⟧.m).fill(null);
```

</details>

<details>
<summary>Hunk 220 · Change · +5 / -5</summary>

```diff
@@ -8287,23 +8287,23 @@
                 var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.itemDistribution.sample(⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.name,
-                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.amountDistribution) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sample(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? FJ : null,
-                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.attributesDistribution) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sample(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? eJ : {},
-                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.getEnchantmentAttributesForItem(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? AJ : {};
+                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.amountDistribution) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sample(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? VB : null,
+                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.attributesDistribution) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.sample(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? pB : {},
+                  ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = this.getEnchantmentAttributesForItem(⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? JB : {};
                 ⟦2-char-id⟧[⟦2-char-id⟧] = {
                   name: ⟦2-char-id⟧,
                   amount: ⟦2-char-id⟧,
                   attributes: {
                     ...⟦2-char-id⟧,
                     customAttributes: {
-                      ...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customAttributes) && void 0 !== ⟦2-char-id⟧ ? YJ : {},
+                      ...null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.customAttributes) && void 0 !== ⟦2-char-id⟧ ? oB : {},
                       ...⟦2-char-id⟧
                     }
                   }
                 }
               }
             }
-            return (0, ⟦2-char-id⟧.p)(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
+            return (0, ⟦2-char-id⟧.m)(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
           }
           getEnchantmentAttributesForItem(⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (!this.shouldEnchantDistribution.sample(⟦2-char-id⟧)) return null;
```

</details>

<details>
<summary>Hunk 221 · Change · +5 / -5</summary>

```diff
@@ -8590,26 +8590,26 @@
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
           return ⟦2-char-id⟧([{
-            name: `${JJ} Pickaxe`,
+            name: `${BB} Pickaxe`,
             frequency: 1,
             amount: null
           }, {
-            name: `${JJ} Axe`,
+            name: `${BB} Axe`,
             frequency: .9,
             amount: null
           }, {
-            name: `${JJ} Spade`,
+            name: `${BB} Spade`,
             frequency: .7,
             amount: null
           }, {
-            name: `${JJ} Hoe`,
+            name: `${BB} Hoe`,
             frequency: .2,
             amount: null
           }], ⟦2-char-id⟧)
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${cJ}`);
+          if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${TB}`);
           const ⟦2-char-id⟧ = [{
               name: "Arrow",
               frequency: 1 - ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 222 · Change · +3 / -3</summary>

```diff
@@ -8633,15 +8633,15 @@
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
           return ⟦2-char-id⟧([{
-            name: `${JJ} Sword`,
+            name: `${BB} Sword`,
             frequency: .75,
             amount: null
           }, {
-            name: `${JJ} Bow`,
+            name: `${BB} Bow`,
             frequency: .6,
             amount: null
           }, {
-            name: `${JJ} Crossbow`,
+            name: `${BB} Crossbow`,
             frequency: .15,
             amount: null
           }, ...⟦2-char-id⟧(1, {
```

</details>

<details>
<summary>Hunk 223 · Change · +6 / -6</summary>

```diff
@@ -8654,25 +8654,25 @@
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-          if (⟦2-char-id⟧ === ⟦2-char-id⟧.STONE) throw new Error(`${JJ} armour is not supported`);
+          if (⟦2-char-id⟧ === ⟦2-char-id⟧.STONE) throw new Error(`${BB} armour is not supported`);
           const ⟦2-char-id⟧ = [{
-              name: `${JJ} Helmet`,
+              name: `${BB} Helmet`,
               frequency: 1,
               amount: null
             }, {
-              name: `${JJ} Chestplate`,
+              name: `${BB} Chestplate`,
               frequency: 1,
               amount: null
             }, {
-              name: `${JJ} Gauntlets`,
+              name: `${BB} Gauntlets`,
               frequency: 1,
               amount: null
             }, {
-              name: `${JJ} Leggings`,
+              name: `${BB} Leggings`,
               frequency: 1,
               amount: null
             }, {
-              name: `${JJ} Boots`,
+              name: `${BB} Boots`,
               frequency: 1,
               amount: null
             }],
```

</details>

<details>
<summary>Hunk 224 · Change · +1 / -1</summary>

```diff
@@ -8680,7 +8680,7 @@
           return ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
         }
         const ⟦2-char-id⟧ = {
-          [⟦2-char-id⟧.i.COMMON]: new ⟦2-char-id⟧({
+          [⟦2-char-id⟧.j.COMMON]: new ⟦2-char-id⟧({
             enchantmentTier: "Tier 1",
             enchantmentProbability: 1,
             itemCategories: [{
```

</details>

<details>
<summary>Hunk 225 · Change · +1 / -1</summary>

```diff
@@ -8709,7 +8709,7 @@
               items: [⟦2-char-id⟧]
             }]
           }),
-          [⟦2-char-id⟧.i.UNCOMMON]: new ⟦2-char-id⟧({
+          [⟦2-char-id⟧.j.UNCOMMON]: new ⟦2-char-id⟧({
             enchantmentTier: "Tier 2",
             enchantmentProbability: .9,
             itemCategories: [{
```

</details>

<details>
<summary>Hunk 226 · Change · +1 / -1</summary>

```diff
@@ -8738,7 +8738,7 @@
               items: [⟦2-char-id⟧, ⟦2-char-id⟧]
             }]
           }),
-          [⟦2-char-id⟧.i.RARE]: new ⟦2-char-id⟧({
+          [⟦2-char-id⟧.j.RARE]: new ⟦2-char-id⟧({
             enchantmentTier: "Tier 3",
             enchantmentProbability: .75,
             itemCategories: [{
```

</details>

<details>
<summary>Hunk 227 · Change · +1 / -1</summary>

```diff
@@ -8767,7 +8767,7 @@
               items: [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]
             }]
           }),
-          [⟦2-char-id⟧.i.EPIC]: new ⟦2-char-id⟧({
+          [⟦2-char-id⟧.j.EPIC]: new ⟦2-char-id⟧({
             enchantmentTier: "Tier 4",
             enchantmentProbability: .6,
             itemCategories: [{
```

</details>

<details>
<summary>Hunk 228 · Change · +1 / -1</summary>

```diff
@@ -8804,7 +8804,7 @@
               items: [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]
             }]
           }),
-          [⟦2-char-id⟧.i.LEGENDARY]: new ⟦2-char-id⟧({
+          [⟦2-char-id⟧.j.LEGENDARY]: new ⟦2-char-id⟧({
             enchantmentTier: "Tier 5",
             enchantmentProbability: .5,
             itemCategories: [{
```

</details>

<details>
<summary>Hunk 229 · Change · +1 / -1</summary>

```diff
@@ -8934,7 +8934,7 @@
             return {
               data: {
                 persisted: {
-                  chestStr: (0, ⟦2-char-id⟧.I)(⟦2-char-id⟧),
+                  chestStr: (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧),
                   lootQuality: this.chestQuality
                 }
               },
```

</details>

<details>
<summary>Hunk 230 · Change · +4 / -4</summary>

```diff
@@ -8944,23 +8944,23 @@
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧) {
-            this.seed = void 0, this.Kn = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCentrePointGeneratorPerDensityPerType = void 0;
+            this.seed = void 0, this.UD = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCentrePointGeneratorPerDensityPerType = void 0;
             const {
               seed: ⟦2-char-id⟧,
-              Kn: ⟦2-char-id⟧,
+              UD: ⟦2-char-id⟧,
               blockMetadata: ⟦2-char-id⟧,
               itemMetadata: ⟦2-char-id⟧,
               prefabSize: ⟦2-char-id⟧,
               typeSettings: ⟦2-char-id⟧
             } = ⟦2-char-id⟧;
-            ⟦2-char-id⟧.BLOCK_ID_MAPPINGS || (⟦2-char-id⟧.BLOCK_ID_MAPPINGS = new ⟦2-char-id⟧(⟦2-char-id⟧)), ⟦2-char-id⟧ || (⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧)), this.seed = ⟦2-char-id⟧, this.Kn = ⟦2-char-id⟧, this.invisibleSolidBlockId = ⟦2-char-id⟧["Invisible Solid"].id, this.emptySpawnerBlockId = ⟦2-char-id⟧["Empty Spawner Block"].id, this.chestToLootChestBlockId = new ⟦2-char-id⟧.b({
+            ⟦2-char-id⟧.BLOCK_ID_MAPPINGS || (⟦2-char-id⟧.BLOCK_ID_MAPPINGS = new ⟦2-char-id⟧(⟦2-char-id⟧)), ⟦2-char-id⟧ || (⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧)), this.seed = ⟦2-char-id⟧, this.UD = ⟦2-char-id⟧, this.invisibleSolidBlockId = ⟦2-char-id⟧["Invisible Solid"].id, this.emptySpawnerBlockId = ⟦2-char-id⟧["Empty Spawner Block"].id, this.chestToLootChestBlockId = new ⟦2-char-id⟧.c({
               [⟦2-char-id⟧.Chest.id]: ⟦2-char-id⟧["Loot Chest"].id,
               [⟦2-char-id⟧["Chest|meta|rot2"].id]: ⟦2-char-id⟧["Loot Chest|meta|rot2"].id,
               [⟦2-char-id⟧["Chest|meta|rot3"].id]: ⟦2-char-id⟧["Loot Chest|meta|rot3"].id,
               [⟦2-char-id⟧["Chest|meta|rot4"].id]: ⟦2-char-id⟧["Loot Chest|meta|rot4"].id
             }, "number");
             const ⟦2-char-id⟧ = {};
-            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.r) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[`${UJ} Spawner Block`].id;
+            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.t) ⟦2-char-id⟧[⟦2-char-id⟧] = ⟦2-char-id⟧[`${yB} Spawner Block`].id;
             this.mobTypeToSpawnerBlockId = ⟦2-char-id⟧, this.defaultSpawnerBlockId = this.mobTypeToSpawnerBlockId[⟦2-char-id⟧.DEFAULT_MOB_TYPE], this.prefabRadius = Math.ceil(⟦2-char-id⟧ / 2);
             const ⟦2-char-id⟧ = {};
             for (const ⟦2-char-id⟧ in ⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 231 · Change · +1 / -1</summary>

```diff
@@ -8975,7 +8975,7 @@
                 let ⟦2-char-id⟧ = null;
                 if (null !== ⟦2-char-id⟧) {
                   const ⟦2-char-id⟧ = Math.ceil(400 / ⟦2-char-id⟧.minDistanceBetweenPrefabs);
-                  ⟦2-char-id⟧ = new ⟦2-char-id⟧.e(`prefab|${JJ}|${XJ}`, ⟦2-char-id⟧.minDistanceBetweenPrefabs, !1, !0, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null, !0)
+                  ⟦2-char-id⟧ = new ⟦2-char-id⟧.c(`prefab|${BB}|${lB}`, ⟦2-char-id⟧.minDistanceBetweenPrefabs, !1, !0, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null, !0)
                 }
                 ⟦2-char-id⟧[⟦2-char-id⟧][⟦2-char-id⟧] = ⟦2-char-id⟧
               }
```

</details>

<details>
<summary>Hunk 232 · Change · +1 / -1</summary>

```diff
@@ -8989,7 +8989,7 @@
             return !1
           }
           prefabRandomAt(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return new ⟦2-char-id⟧.g(`${JJ}|${cJ}|${this.seed}|prefabGenerator`)
+            return new ⟦2-char-id⟧.g(`${BB}|${TB}|${this.seed}|prefabGenerator`)
           }
           getLootPrefabCentres(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 233 · Change · +3 / -3</summary>

```diff
@@ -9018,11 +9018,11 @@
           }
           getPrefabsForChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = [],
-              ⟦2-char-id⟧ = this.Kn >> 1,
+              ⟦2-char-id⟧ = this.UD >> 1,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ - this.prefabRadius,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.Kn + this.prefabRadius,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.UD + this.prefabRadius,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ - this.prefabRadius,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.Kn + this.prefabRadius;
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.UD + this.prefabRadius;
             for (const ⟦2-char-id⟧ in this.prefabCentrePointGeneratorPerDensityPerType) {
               const ⟦2-char-id⟧ = Number(⟦2-char-id⟧),
                 ⟦2-char-id⟧ = this.prefabCentrePointGeneratorPerDensityPerType[⟦2-char-id⟧];
```

</details>

<details>
<summary>Hunk 234 · Change · +1 / -1</summary>

```diff
@@ -9030,7 +9030,7 @@
                 const ⟦2-char-id⟧ = Number(⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧];
                 if (null === ⟦2-char-id⟧) continue;
-                if (⟦2-char-id⟧ === ⟦2-char-id⟧.q.SURFACE && ⟦2-char-id⟧ === ⟦2-char-id⟧.m.VERY_HIGH && !⟦2-char-id⟧.regionMayHaveVeryHighSurfacePrefabs(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) continue;
+                if (⟦2-char-id⟧ === ⟦2-char-id⟧.r.SURFACE && ⟦2-char-id⟧ === ⟦2-char-id⟧.n.VERY_HIGH && !⟦2-char-id⟧.regionMayHaveVeryHighSurfacePrefabs(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) continue;
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.getPointsAroundPoint(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧);
                 for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧[0],
```

</details>

<details>
<summary>Hunk 235 · Change · +1 / -1</summary>

```diff
@@ -9040,7 +9040,7 @@
                     ⟦2-char-id⟧ = this.prefabRandomAt(⟦2-char-id⟧, ⟦2-char-id⟧),
                     ⟦2-char-id⟧ = ⟦2-char-id⟧.getRandomPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
                   if (null === ⟦2-char-id⟧) continue;
-                  if (⟦2-char-id⟧ === ⟦2-char-id⟧.q.SURFACE && !⟦2-char-id⟧.canPlaceSurfacePrefab(⟦2-char-id⟧, ⟦2-char-id⟧)) continue;
+                  if (⟦2-char-id⟧ === ⟦2-char-id⟧.r.SURFACE && !⟦2-char-id⟧.canPlaceSurfacePrefab(⟦2-char-id⟧, ⟦2-char-id⟧)) continue;
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.transformationsEnabled ? ⟦2-char-id⟧.sample(⟦2-char-id⟧) : 0,
                     ⟦2-char-id⟧ = !!⟦2-char-id⟧.transformationsEnabled && ⟦2-char-id⟧.sample(⟦2-char-id⟧);
                   let ⟦2-char-id⟧ = null,
```

</details>

<details>
<summary>Hunk 236 · Change · +1 / -1</summary>

```diff
@@ -9059,7 +9059,7 @@
                       ⟦2-char-id⟧ = ⟦2-char-id⟧.dimensionZ - 1, ⟦2-char-id⟧ = !⟦2-char-id⟧;
                       break;
                     default:
-                      console.error(`Invalid prefab rotation: ${rJ}`)
+                      console.error(`Invalid prefab rotation: ${vB}`)
                   }
                   const ⟦2-char-id⟧ = {
                       centreX: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 237 · Change · +2 / -2</summary>

```diff
@@ -9076,14 +9076,14 @@
                       isOnSolidGround: ⟦2-char-id⟧
                     } = this.getPrefabGroundingInfo(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
                   if (!⟦2-char-id⟧) continue;
-                  if (⟦2-char-id⟧ === ⟦2-char-id⟧.q.SURFACE && null !== ⟦2-char-id⟧.maxSurfacePrefabRelief) {
+                  if (⟦2-char-id⟧ === ⟦2-char-id⟧.r.SURFACE && null !== ⟦2-char-id⟧.maxSurfacePrefabRelief) {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧.shouldSwapXZ ? ⟦2-char-id⟧.dimensionZ : ⟦2-char-id⟧.dimensionX,
                       ⟦2-char-id⟧ = ⟦2-char-id⟧.shouldSwapXZ ? ⟦2-char-id⟧.dimensionX : ⟦2-char-id⟧.dimensionZ;
                     if (⟦2-char-id⟧.footprintRelief(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) > ⟦2-char-id⟧.maxSurfacePrefabRelief) continue
                   }
                   const ⟦2-char-id⟧ = Math.ceil(Math.sqrt(⟦2-char-id⟧.dimensionX * ⟦2-char-id⟧.dimensionX + ⟦2-char-id⟧.dimensionZ * ⟦2-char-id⟧.dimensionZ) / 2);
                   if (!⟦2-char-id⟧.allowsPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧.dimensionY - 1)) continue;
-                  const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+                  const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
                   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.chestLocations) {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.localX, ⟦2-char-id⟧.localZ),
                       ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.localX, ⟦2-char-id⟧.localZ),
```

</details>

<details>
<summary>Hunk 238 · Change · +1 / -1</summary>

```diff
@@ -9091,7 +9091,7 @@
                       ⟦2-char-id⟧ = ⟦2-char-id⟧.qualityDistribution.sample(⟦2-char-id⟧);
                     ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
                   }
-                  const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+                  const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
                   for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.spawnerBlockLocations) {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.localX, ⟦2-char-id⟧.localZ),
                       ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.localX, ⟦2-char-id⟧.localZ),
```

</details>

<details>
<summary>Hunk 239 · Change · +1 / -1</summary>

```diff
@@ -9121,7 +9121,7 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧ >> 1;
             for (let ⟦2-char-id⟧ = -⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧ += Math.max(1, ⟦2-char-id⟧))
               for (let ⟦2-char-id⟧ = -⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧ += Math.max(1, ⟦2-char-id⟧)) {
-                const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight);
+                const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight);
                 ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧)
               }
             return ⟦2-char-id⟧ - ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 240 · Change · +2 / -2</summary>

```diff
@@ -9142,8 +9142,8 @@
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.undergroundYInterval;
             if (null !== ⟦2-char-id⟧) {
               const {
-                Ze: ⟦2-char-id⟧,
-                Fe: ⟦2-char-id⟧
+                UB: ⟦2-char-id⟧,
+                FB: ⟦2-char-id⟧
               } = ⟦2-char-id⟧;
               ⟦2-char-id⟧ = this.getCaveGroundingInfoFromGroundingPoints(⟦2-char-id⟧, ⟦2-char-id⟧.groundingRadius, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
             } else ⟦2-char-id⟧ = this.getSurfaceGroundingInfoFromGroundingPoints(⟦2-char-id⟧, ⟦2-char-id⟧.groundingRadius, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 241 · Change · +3 / -3</summary>

```diff
@@ -9156,16 +9156,16 @@
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[1];
               for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + ⟦2-char-id⟧; ⟦2-char-id⟧++)
                 for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + ⟦2-char-id⟧; ⟦2-char-id⟧++) {
-                  if (⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.WaterHeight) !== ⟦2-char-id⟧.p) return {
+                  if (⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.WaterHeight) !== ⟦2-char-id⟧.o) return {
                     anchorY: -1⟦2-char-id⟧,
                     isOnSolidGround: !1
                   };
-                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight);
+                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight);
                   if (⟦2-char-id⟧.isInCave(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) return {
                     anchorY: -1⟦2-char-id⟧,
                     isOnSolidGround: !1
                   };
-                  if (⟦2-char-id⟧.c.isNearFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) return {
+                  if (⟦2-char-id⟧.e.isNearFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) return {
                     anchorY: -1⟦2-char-id⟧,
                     isOnSolidGround: !1
                   };
```

</details>

<details>
<summary>Hunk 242 · Change · +3 / -3</summary>

```diff
@@ -9212,10 +9212,10 @@
             let ⟦2-char-id⟧ = this.getPrefabBlock(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
             if (0 === ⟦2-char-id⟧) return ⟦2-char-id⟧;
             var ⟦2-char-id⟧;
-            if (⟦2-char-id⟧ === this.emptySpawnerBlockId && (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.spawnerBlockLocationToBlockId.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? qJ : this.defaultSpawnerBlockId), ⟦2-char-id⟧ < 0) return ⟦2-char-id⟧;
-            if (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.blockIdMapping) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧, void 0 !== this.chestToLootChestBlockId.reverseGet(⟦2-char-id⟧)) {
+            if (⟦2-char-id⟧ === this.emptySpawnerBlockId && (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.spawnerBlockLocationToBlockId.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? YB : this.defaultSpawnerBlockId), ⟦2-char-id⟧ < 0) return ⟦2-char-id⟧;
+            if (⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === (⟦2-char-id⟧ = ⟦2-char-id⟧.blockIdMapping) || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧[⟦2-char-id⟧]) && void 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧, void 0 !== this.chestToLootChestBlockId.reverseGet(⟦2-char-id⟧)) {
               var ⟦2-char-id⟧;
-              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.chestLocationToQuality.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? jJ : ⟦2-char-id⟧.DEFAULT_CHEST_QUALITY,
+              const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.chestLocationToQuality.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? gB : ⟦2-char-id⟧.DEFAULT_CHEST_QUALITY,
                 ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, this.seed, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
               ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
             }
```

</details>

<details>
<summary>Hunk 243 · Change · +10 / -10</summary>

```diff
@@ -9242,19 +9242,19 @@
               dimensionX: ⟦2-char-id⟧,
               dimensionY: ⟦2-char-id⟧,
               dimensionZ: ⟦2-char-id⟧
-            } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧()(new Int32Array(⟦2-char-id⟧ * ⟦2-char-id⟧ * ⟦2-char-id⟧), [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]), ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+            } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧()(new Int32Array(⟦2-char-id⟧ * ⟦2-char-id⟧ * ⟦2-char-id⟧), [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]), ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.chestLocations) ⟦2-char-id⟧.set(⟦2-char-id⟧.localX, ⟦2-char-id⟧.localY, ⟦2-char-id⟧.localZ, !0);
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e;
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c;
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.spawnerBlockLocations) ⟦2-char-id⟧.set(⟦2-char-id⟧.localX, ⟦2-char-id⟧.localY, ⟦2-char-id⟧.localZ, !0);
-            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧ += ⟦2-char-id⟧.E)
-              for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧ += ⟦2-char-id⟧.E)
-                for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧ += ⟦2-char-id⟧.E) {
-                  const ⟦2-char-id⟧ = ⟦2-char-id⟧()(new Uint16Array(⟦2-char-id⟧.E * ⟦2-char-id⟧.E * ⟦2-char-id⟧.E), [⟦2-char-id⟧.E, ⟦2-char-id⟧.E, ⟦2-char-id⟧.E]),
-                    ⟦2-char-id⟧ = ⟦2-char-id⟧.schematic.getRLEChunk((0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.Y)(⟦2-char-id⟧));
+            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧ += ⟦2-char-id⟧.z)
+              for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧ += ⟦2-char-id⟧.z)
+                for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧ += ⟦2-char-id⟧.z) {
+                  const ⟦2-char-id⟧ = ⟦2-char-id⟧()(new Uint16Array(⟦2-char-id⟧.z * ⟦2-char-id⟧.z * ⟦2-char-id⟧.z), [⟦2-char-id⟧.z, ⟦2-char-id⟧.z, ⟦2-char-id⟧.z]),
+                    ⟦2-char-id⟧ = ⟦2-char-id⟧.schematic.getRLEChunk((0, ⟦2-char-id⟧.W)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧), (0, ⟦2-char-id⟧.W)(⟦2-char-id⟧));
                   ⟦2-char-id⟧.decode(⟦2-char-id⟧, ⟦2-char-id⟧.data);
-                  const ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.E, ⟦2-char-id⟧ - ⟦2-char-id⟧),
-                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.E, ⟦2-char-id⟧ - ⟦2-char-id⟧),
-                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.E, ⟦2-char-id⟧ - ⟦2-char-id⟧);
+                  const ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.z, ⟦2-char-id⟧ - ⟦2-char-id⟧),
+                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.z, ⟦2-char-id⟧ - ⟦2-char-id⟧),
+                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.z, ⟦2-char-id⟧ - ⟦2-char-id⟧);
                   for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
                     for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
                       for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
```

</details>

<details>
<summary>Hunk 244 · Change · +2 / -2</summary>

```diff
@@ -9263,10 +9263,10 @@
                           ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
                           ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧;
                         if (this.invisibleSolidBlockId === ⟦2-char-id⟧) ⟦2-char-id⟧ = ⟦2-char-id⟧.GUARANTEED_AIR;
-                        else if (this.emptySpawnerBlockId === ⟦2-char-id⟧) ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) || console.error(`Empty spawner block found in prefab ${JJ.schematic.name} at (${qJ}, ${sJ}, ${nJ}) with no mob type specified. Defaulting to "${nc.DEFAULT_MOB_TYPE}" mob type.`);
+                        else if (this.emptySpawnerBlockId === ⟦2-char-id⟧) ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) || console.error(`Empty spawner block found in prefab ${BB.schematic.name} at (${YB}, ${OB}, ${DB}) with no mob type specified. Defaulting to "${DT.DEFAULT_MOB_TYPE}" mob type.`);
                         else {
                           const ⟦2-char-id⟧ = this.chestToLootChestBlockId.get(⟦2-char-id⟧);
-                          void 0 !== ⟦2-char-id⟧ && (⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) || console.error(`Chest found in prefab ${JJ.schematic.name} at (${qJ}, ${sJ}, ${nJ}) with no quality specified. Defaulting to "${nc.DEFAULT_CHEST_QUALITY}" quality.`), ⟦2-char-id⟧ = ⟦2-char-id⟧)
+                          void 0 !== ⟦2-char-id⟧ && (⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) || console.error(`Chest found in prefab ${BB.schematic.name} at (${YB}, ${OB}, ${DB}) with no quality specified. Defaulting to "${DT.DEFAULT_CHEST_QUALITY}" quality.`), ⟦2-char-id⟧ = ⟦2-char-id⟧)
                         }
                         ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
                       }
```

</details>

<details>
<summary>Hunk 245 · Change · +4 / -4</summary>

```diff
@@ -9289,16 +9289,16 @@
           return function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             null !== ⟦2-char-id⟧.xRotationOffset && (⟦2-char-id⟧ = ⟦2-char-id⟧.xRotationOffset - ⟦2-char-id⟧);
             return ⟦2-char-id⟧ + ⟦2-char-id⟧.anchorX
-          }(⟦2-char-id⟧, ⟦2-char-id⟧.shouldSwapXZ ? ZJ : ⟦2-char-id⟧)
+          }(⟦2-char-id⟧, ⟦2-char-id⟧.shouldSwapXZ ? dB : ⟦2-char-id⟧)
         }
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
           return function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             null !== ⟦2-char-id⟧.zRotationOffset && (⟦2-char-id⟧ = ⟦2-char-id⟧.zRotationOffset - ⟦2-char-id⟧);
             return ⟦2-char-id⟧ + ⟦2-char-id⟧.anchorZ
-          }(⟦2-char-id⟧, ⟦2-char-id⟧.shouldSwapXZ ? cJ : ⟦2-char-id⟧)
-        }
-        ⟦2-char-id⟧.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, ⟦2-char-id⟧.BLOCK_ID_MAPPINGS = void 0, ⟦2-char-id⟧.DEFAULT_MOB_TYPE = "Draugr Zombie", ⟦2-char-id⟧.DEFAULT_CHEST_QUALITY = ⟦2-char-id⟧.i.COMMON;
+          }(⟦2-char-id⟧, ⟦2-char-id⟧.shouldSwapXZ ? TB : ⟦2-char-id⟧)
+        }
+        ⟦2-char-id⟧.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, ⟦2-char-id⟧.BLOCK_ID_MAPPINGS = void 0, ⟦2-char-id⟧.DEFAULT_MOB_TYPE = "Draugr Zombie", ⟦2-char-id⟧.DEFAULT_CHEST_QUALITY = ⟦2-char-id⟧.j.COMMON;
         var ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
             return ⟦2-char-id⟧[⟦2-char-id⟧.STANDARD = 0] = "STANDARD", ⟦2-char-id⟧[⟦2-char-id⟧.FRILLED = 1] = "FRILLED", ⟦2-char-id⟧[⟦2-char-id⟧.TALL = 2] = "TALL", ⟦2-char-id⟧[⟦2-char-id⟧.FLAT = 3] = "FLAT", ⟦2-char-id⟧[⟦2-char-id⟧.DROOPY = 4] = "DROOPY", ⟦2-char-id⟧
           }(⟦2-char-id⟧ || {}),
```

</details>

<details>
<summary>Hunk 246 · Change · +1 / -1</summary>

```diff
@@ -9319,7 +9319,7 @@
             }))
           }
           static initCanopyGenerationSchemaByFunction(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(2 * ⟦2-char-id⟧ + 1, [-⟦2-char-id⟧, -⟦2-char-id⟧]);
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c(2 * ⟦2-char-id⟧ + 1, [-⟦2-char-id⟧, -⟦2-char-id⟧]);
             for (let ⟦2-char-id⟧ = -⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++)
               for (let ⟦2-char-id⟧ = -⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 247 · Change · +2 / -2</summary>

```diff
@@ -9328,10 +9328,10 @@
             return ⟦2-char-id⟧
           }
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.Kn = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.blockMetadata = ⟦2-char-id⟧, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+            this.UD = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.blockMetadata = ⟦2-char-id⟧, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
             const ⟦2-char-id⟧ = 1 / 30;
             if (this.treeInfos = {
-                [⟦2-char-id⟧.x.Maple]: {
+                [⟦2-char-id⟧.u.Maple]: {
                   trunkBlockId: ⟦2-char-id⟧["Maple Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Maple Log|TreeBase|Maple"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Maple Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 248 · Change · +1 / -1</summary>

```diff
@@ -9339,7 +9339,7 @@
                   canopyType: ⟦2-char-id⟧.STANDARD,
                   vineProbability: ⟦2-char-id⟧
                 },
-                [⟦2-char-id⟧.x.Pine]: {
+                [⟦2-char-id⟧.u.Pine]: {
                   trunkBlockId: ⟦2-char-id⟧["Pine Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Pine Log|TreeBase|Pine"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Pine Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 249 · Change · +1 / -1</summary>

```diff
@@ -9349,7 +9349,7 @@
                   minHeight: 5,
                   maxHeight: 7
                 },
-                [⟦2-char-id⟧.x.Plum]: {
+                [⟦2-char-id⟧.u.Plum]: {
                   trunkBlockId: ⟦2-char-id⟧["Plum Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Plum Log|TreeBase|Plum"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Plum Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 250 · Change · +1 / -1</summary>

```diff
@@ -9357,7 +9357,7 @@
                   canopyType: ⟦2-char-id⟧.STANDARD,
                   vineProbability: ⟦2-char-id⟧
                 },
-                [⟦2-char-id⟧.x.Cedar]: {
+                [⟦2-char-id⟧.u.Cedar]: {
                   trunkBlockId: ⟦2-char-id⟧["Cedar Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Cedar Log|TreeBase|Cedar"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Cedar Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 251 · Change · +1 / -1</summary>

```diff
@@ -9365,7 +9365,7 @@
                   canopyType: ⟦2-char-id⟧.STANDARD,
                   vineProbability: ⟦2-char-id⟧
                 },
-                [⟦2-char-id⟧.x.Aspen]: {
+                [⟦2-char-id⟧.u.Aspen]: {
                   trunkBlockId: ⟦2-char-id⟧["Aspen Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Aspen Log|TreeBase|Aspen"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Aspen Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 252 · Change · +1 / -1</summary>

```diff
@@ -9375,7 +9375,7 @@
                   minHeight: 5,
                   maxHeight: 6
                 },
-                [⟦2-char-id⟧.x.Jungle]: {
+                [⟦2-char-id⟧.u.Jungle]: {
                   trunkBlockId: ⟦2-char-id⟧["Jungle Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Jungle Log|TreeBase|Jungle"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Jungle Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 253 · Change · +1 / -1</summary>

```diff
@@ -9385,7 +9385,7 @@
                   minHeight: 2,
                   maxHeight: 7
                 },
-                [⟦2-char-id⟧.x.Palm]: {
+                [⟦2-char-id⟧.u.Palm]: {
                   trunkBlockId: ⟦2-char-id⟧["Palm Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Palm Log|TreeBase|Palm"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Palm Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 254 · Change · +1 / -1</summary>

```diff
@@ -9395,7 +9395,7 @@
                   minHeight: 4,
                   maxHeight: 6
                 },
-                [⟦2-char-id⟧.x.AutumnMaple]: {
+                [⟦2-char-id⟧.u.AutumnMaple]: {
                   trunkBlockId: ⟦2-char-id⟧["Maple Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Maple Log|TreeBase|Maple"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Autumn Maple Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 255 · Change · +1 / -1</summary>

```diff
@@ -9403,7 +9403,7 @@
                   canopyType: ⟦2-char-id⟧.STANDARD,
                   vineProbability: ⟦2-char-id⟧
                 },
-                [⟦2-char-id⟧.x.Pear]: {
+                [⟦2-char-id⟧.u.Pear]: {
                   trunkBlockId: ⟦2-char-id⟧["Pear Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Pear Log|TreeBase|Pear"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Pear Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 256 · Change · +1 / -1</summary>

```diff
@@ -9413,7 +9413,7 @@
                   minHeight: 3,
                   maxHeight: 5
                 },
-                [⟦2-char-id⟧.x.Cherry]: {
+                [⟦2-char-id⟧.u.Cherry]: {
                   trunkBlockId: ⟦2-char-id⟧["Cherry Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Cherry Log|TreeBase|Cherry"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Cherry Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 257 · Change · +1 / -1</summary>

```diff
@@ -9423,7 +9423,7 @@
                   minHeight: 4,
                   maxHeight: 6
                 },
-                [⟦2-char-id⟧.x.Spectral]: {
+                [⟦2-char-id⟧.u.Spectral]: {
                   trunkBlockId: ⟦2-char-id⟧["Spectral Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Spectral Log|TreeBase|Spectral"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Spectral Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 258 · Change · +1 / -1</summary>

```diff
@@ -9431,7 +9431,7 @@
                   canopyType: ⟦2-char-id⟧.STANDARD,
                   vineProbability: 0
                 },
-                [⟦2-char-id⟧.x.Mango]: {
+                [⟦2-char-id⟧.u.Mango]: {
                   trunkBlockId: ⟦2-char-id⟧["Mango Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Mango Log|TreeBase|Mango"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Mango Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 259 · Change · +1 / -1</summary>

```diff
@@ -9441,7 +9441,7 @@
                   minHeight: 3,
                   maxHeight: 6
                 },
-                [⟦2-char-id⟧.x.AutumnAspen]: {
+                [⟦2-char-id⟧.u.AutumnAspen]: {
                   trunkBlockId: ⟦2-char-id⟧["Aspen Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Aspen Log|TreeBase|Aspen"].id,
                   canopyLeavesId: ⟦2-char-id⟧["Autumn Aspen Leaves|TreeCanopy"].id,
```

</details>

<details>
<summary>Hunk 260 · Change · +1 / -1</summary>

```diff
@@ -9451,7 +9451,7 @@
                   minHeight: 5,
                   maxHeight: 6
                 },
-                [⟦2-char-id⟧.x.Dead]: {
+                [⟦2-char-id⟧.u.Dead]: {
                   trunkBlockId: ⟦2-char-id⟧["Barkless Maple Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Barkless Maple Log"].id,
                   canopyLeavesId: 0,
```

</details>

<details>
<summary>Hunk 261 · Change · +1 / -1</summary>

```diff
@@ -9461,7 +9461,7 @@
                   minHeight: 3,
                   maxHeight: 7
                 },
-                [⟦2-char-id⟧.x.FallenLog]: {
+                [⟦2-char-id⟧.u.FallenLog]: {
                   trunkBlockId: ⟦2-char-id⟧["Barkless Maple Log"].id,
                   trunkBaseId: ⟦2-char-id⟧["Barkless Maple Log"].id,
                   canopyLeavesId: 0,
```

</details>

<details>
<summary>Hunk 262 · Change · +2 / -2</summary>

```diff
@@ -9471,8 +9471,8 @@
                   minHeight: 3,
                   maxHeight: 6
                 }
-              }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧].id)), this.maxTreeRadius = ⟦2-char-id⟧.maxTreeRadius, this.Kn <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk size");
-            if (this.Kn <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+              }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧].id)), this.maxTreeRadius = ⟦2-char-id⟧.maxTreeRadius, this.UD <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk size");
+            if (this.UD <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
             this.canopyInfos = {
               [⟦2-char-id⟧.STANDARD]: {
                 canopyBottomOffset: -2,
```

</details>

<details>
<summary>Hunk 263 · Change · +3 / -3</summary>

```diff
@@ -9546,12 +9546,12 @@
             };
             for (const ⟦2-char-id⟧ in this.canopyInfos) {
               const ⟦2-char-id⟧ = this.canopyInfos[⟦2-char-id⟧];
-              if (⟦2-char-id⟧.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${JJ.radius} for canopy type "${UJ}" is larger than tree radius ${this.maxTreeRadius}`)
+              if (⟦2-char-id⟧.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${BB.radius} for canopy type "${yB}" is larger than tree radius ${this.maxTreeRadius}`)
             }
             let ⟦2-char-id⟧ = 1⟦2-char-id⟧,
               ⟦2-char-id⟧ = 0;
-            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.biomeSelector.Ke) ⟦2-char-id⟧.biome.treeMinDist && (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.biome.treeMinDist), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.biome.treeMinDist));
-            this.treePointGen = new ⟦2-char-id⟧.e("tree", 6, !0, !1, ⟦2-char-id⟧, 300, ⟦2-char-id⟧, {
+            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.biomeSelector.bB) ⟦2-char-id⟧.biome.treeMinDist && (⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧.biome.treeMinDist), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧.biome.treeMinDist));
+            this.treePointGen = new ⟦2-char-id⟧.c("tree", 6, !0, !1, ⟦2-char-id⟧, 300, ⟦2-char-id⟧, {
               func: ⟦2-char-id⟧ => ⟦2-char-id⟧.getBiome(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]).biome.treeMinDist || ⟦2-char-id⟧,
               min: ⟦2-char-id⟧,
               max: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 264 · Change · +8 / -8</summary>

```diff
@@ -9559,26 +9559,26 @@
           }
           getTreesForChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = [];
-            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ - this.maxTreeRadius; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn + this.maxTreeRadius; ⟦2-char-id⟧++)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ - this.maxTreeRadius; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn + this.maxTreeRadius; ⟦2-char-id⟧++) {
+            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ - this.maxTreeRadius; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD + this.maxTreeRadius; ⟦2-char-id⟧++)
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ - this.maxTreeRadius; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD + this.maxTreeRadius; ⟦2-char-id⟧++) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧)[0].biome;
                 if (null !== ⟦2-char-id⟧.treeMinDist) {
                   if (⟦2-char-id⟧.getTotalTreeChance() <= 0 && console.error("Biome", ⟦2-char-id⟧, "has 0 total tree chance"), !this.treePointGen.isPoint(⟦2-char-id⟧, ⟦2-char-id⟧)) continue;
-                  if (⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.WaterHeight) !== ⟦2-char-id⟧.p) continue;
-                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight);
+                  if (⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.WaterHeight) !== ⟦2-char-id⟧.o) continue;
+                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight);
                   if (⟦2-char-id⟧.isInCave(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) continue;
                   if (⟦2-char-id⟧.isWithinPrefabClearing(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) continue;
-                  if (⟦2-char-id⟧.c.isNearFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) continue;
-                  const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${DJ}${JJ}${this.seed}treeHeight`),
+                  if (⟦2-char-id⟧.e.isNearFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)) continue;
+                  const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${LB}${BB}${this.seed}treeHeight`),
                     ⟦2-char-id⟧ = ⟦2-char-id⟧.getTreeTypeFromBiome(⟦2-char-id⟧, ⟦2-char-id⟧);
                   let {
                     height: ⟦2-char-id⟧,
                     vineDir: ⟦2-char-id⟧
                   } = this.getRandTreeInfo(⟦2-char-id⟧, ⟦2-char-id⟧);
-                  if (⟦2-char-id⟧ === ⟦2-char-id⟧.x.FallenLog) {
+                  if (⟦2-char-id⟧ === ⟦2-char-id⟧.u.FallenLog) {
                     ⟦2-char-id⟧ = ⟦2-char-id⟧.next() < .5 ? 0 : 1;
                     for (let ⟦2-char-id⟧ = -1; ⟦2-char-id⟧ < ⟦2-char-id⟧ - 1; ⟦2-char-id⟧++) {
-                      if (⟦2-char-id⟧.getOrGenerate(0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧ + cJ : ⟦2-char-id⟧, 0 === ⟦2-char-id⟧ ? JJ : ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight) !== ⟦2-char-id⟧) {
+                      if (⟦2-char-id⟧.getOrGenerate(0 === ⟦2-char-id⟧ ? ⟦2-char-id⟧ + TB : ⟦2-char-id⟧, 0 === ⟦2-char-id⟧ ? BB : ⟦2-char-id⟧ + ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight) !== ⟦2-char-id⟧) {
                         ⟦2-char-id⟧ = 1;
                         break
                       }
```

</details>

<details>
<summary>Hunk 265 · Change · +2 / -2</summary>

```diff
@@ -9599,8 +9599,8 @@
           getRandTreeInfo(⟦2-char-id⟧, ⟦2-char-id⟧) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = this.treeInfos[⟦2-char-id⟧],
-              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.minHeight) && void 0 !== ⟦2-char-id⟧ ? ZJ : this.minTreeHeight,
-              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.maxHeight) && void 0 !== ⟦2-char-id⟧ ? FJ : this.maxTreeHeight;
+              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.minHeight) && void 0 !== ⟦2-char-id⟧ ? dB : this.minTreeHeight,
+              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.maxHeight) && void 0 !== ⟦2-char-id⟧ ? VB : this.maxTreeHeight;
             return {
               height: Math.floor(⟦2-char-id⟧.next() * (⟦2-char-id⟧ - ⟦2-char-id⟧)) + ⟦2-char-id⟧,
               vineDir: ⟦2-char-id⟧.next() < ⟦2-char-id⟧.vineProbability ? Math.floor(4 * ⟦2-char-id⟧.next()) : -1
```

</details>

<details>
<summary>Hunk 266 · Change · +2 / -2</summary>

```diff
@@ -9615,8 +9615,8 @@
           }
           addTreesToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${eJ.treeX}|${eJ.treeZ}|${eJ.trunkBase}|tree`);
-              if (⟦2-char-id⟧.treeType === ⟦2-char-id⟧.x.Dead || ⟦2-char-id⟧.treeType === ⟦2-char-id⟧.x.FallenLog) {
+              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${pB.treeX}|${pB.treeZ}|${pB.trunkBase}|tree`);
+              if (⟦2-char-id⟧.treeType === ⟦2-char-id⟧.u.Dead || ⟦2-char-id⟧.treeType === ⟦2-char-id⟧.u.FallenLog) {
                 this.addDeadTreeToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
                 continue
               }
```

</details>

<details>
<summary>Hunk 267 · Change · +3 / -3</summary>

```diff
@@ -9633,11 +9633,11 @@
                 height: ⟦2-char-id⟧
               } = ⟦2-char-id⟧,
               ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
-                ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)
+                ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)
               };
-            if (⟦2-char-id⟧.treeType === ⟦2-char-id⟧.x.FallenLog) {
+            if (⟦2-char-id⟧.treeType === ⟦2-char-id⟧.u.FallenLog) {
               if (⟦2-char-id⟧ <= 1) return void ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-              for (let ⟦2-char-id⟧ = -1; ⟦2-char-id⟧ < ⟦2-char-id⟧ - 1; ⟦2-char-id⟧++) ⟦2-char-id⟧(0 === ⟦2-char-id⟧.vineDir ? ⟦2-char-id⟧ + JJ : ⟦2-char-id⟧, ⟦2-char-id⟧, 0 === ⟦2-char-id⟧.vineDir ? jJ : ⟦2-char-id⟧ + ⟦2-char-id⟧);
+              for (let ⟦2-char-id⟧ = -1; ⟦2-char-id⟧ < ⟦2-char-id⟧ - 1; ⟦2-char-id⟧++) ⟦2-char-id⟧(0 === ⟦2-char-id⟧.vineDir ? ⟦2-char-id⟧ + BB : ⟦2-char-id⟧, ⟦2-char-id⟧, 0 === ⟦2-char-id⟧.vineDir ? gB : ⟦2-char-id⟧ + ⟦2-char-id⟧);
               return
             }
             for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 268 · Change · +3 / -3</summary>

```diff
@@ -9662,13 +9662,13 @@
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.height + ⟦2-char-id⟧.canopyBottomOffset,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧.height + ⟦2-char-id⟧.canopyTopOffset,
               ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧),
-              ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧ + this.Kn - 1);
+              ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧ + this.UD - 1);
             if (⟦2-char-id⟧ < ⟦2-char-id⟧) return ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧ - ⟦2-char-id⟧.radius, ⟦2-char-id⟧),
-              ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + ⟦2-char-id⟧.radius, ⟦2-char-id⟧ + this.Kn - 1);
+              ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + ⟦2-char-id⟧.radius, ⟦2-char-id⟧ + this.UD - 1);
             if (⟦2-char-id⟧ > ⟦2-char-id⟧) return ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧ - ⟦2-char-id⟧.radius, ⟦2-char-id⟧),
-              ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + ⟦2-char-id⟧.radius, ⟦2-char-id⟧ + this.Kn - 1);
+              ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + ⟦2-char-id⟧.radius, ⟦2-char-id⟧ + this.UD - 1);
             if (⟦2-char-id⟧ > ⟦2-char-id⟧) return ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.canopyLeavesId,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.canopyLeavesWithDropId;
```

</details>

<details>
<summary>Hunk 269 · Change · +4 / -4</summary>

```diff
@@ -9743,16 +9743,16 @@
             if (⟦2-char-id⟧ === ⟦2-char-id⟧.ALWAYS) ⟦2-char-id⟧ = ⟦2-char-id⟧;
             else {
               if (⟦2-char-id⟧ === ⟦2-char-id⟧.NEVER) return;
-              if (⟦2-char-id⟧ !== ⟦2-char-id⟧.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${GJ}`);
+              if (⟦2-char-id⟧ !== ⟦2-char-id⟧.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${uB}`);
               if (!(⟦2-char-id⟧.next() < .8)) return;
               ⟦2-char-id⟧ = ⟦2-char-id⟧
             }
             null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.next() < 1 / 15 && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           addTreeTrunkToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.Kn,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.Kn,
-              ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.Kn,
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.UD,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.UD,
+              ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.UD,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.treeX,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.trunkBase,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.treeZ,
```

</details>

<details>
<summary>Hunk 270 · Change · +1 / -1</summary>

```diff
@@ -9778,7 +9778,7 @@
             }
           }
           getAllBlocksForTree(⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = this.Kn >> 1,
+            const ⟦2-char-id⟧ = this.UD >> 1,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.treeX - ⟦2-char-id⟧,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.trunkBase,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.treeZ - ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 271 · Change · +1 / -1</summary>

```diff
@@ -9803,7 +9803,7 @@
         let ⟦2-char-id⟧ = null;
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.biomeSelector = ⟦2-char-id⟧, this.noWaterHeightmapGenerator = ⟦2-char-id⟧, this.hydrology = ⟦2-char-id⟧, this.lakeRadiusNoiseModifier = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.needOutsideWaterDist = ⟦2-char-id⟧, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, this.pointGenerator = void 0, this.lakes = void 0, this.lakeRadiusNoiseAmplitude = void 0, ⟦2-char-id⟧ || (⟦2-char-id⟧ = new ⟦2-char-id⟧.b("scattered lakes", ⟦2-char-id⟧ ? 4e3 : 500, 6⟦2-char-id⟧)), this.lakes = ⟦2-char-id⟧.partition(), this.pointGenerator = new ⟦2-char-id⟧.e("oasisLake", this.distApart, !1, !0, `${XJ}oasisLake`, 6, ⟦2-char-id⟧), this.lakeRadiusNoiseAmplitude = (0, ⟦2-char-id⟧.x)(⟦2-char-id⟧)
+            this.biomeSelector = ⟦2-char-id⟧, this.noWaterHeightmapGenerator = ⟦2-char-id⟧, this.hydrology = ⟦2-char-id⟧, this.lakeRadiusNoiseModifier = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.needOutsideWaterDist = ⟦2-char-id⟧, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, this.pointGenerator = void 0, this.lakes = void 0, this.lakeRadiusNoiseAmplitude = void 0, ⟦2-char-id⟧ || (⟦2-char-id⟧ = new ⟦2-char-id⟧.e("scattered lakes", ⟦2-char-id⟧ ? 4e3 : 500, 6⟦2-char-id⟧)), this.lakes = ⟦2-char-id⟧.partition(), this.pointGenerator = new ⟦2-char-id⟧.c("oasisLake", this.distApart, !1, !0, `${lB}oasisLake`, 6, ⟦2-char-id⟧), this.lakeRadiusNoiseAmplitude = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧)
           }
           getWaterGenInfo(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.maxRadius + ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 272 · Change · +2 / -2</summary>

```diff
@@ -9813,11 +9813,11 @@
               ⟦2-char-id⟧ = 0,
               ⟦2-char-id⟧ = 1⟦2-char-id⟧;
             for (const ⟦2-char-id⟧ of this.pointGenerator.getPointsAroundPoint(⟦2-char-id⟧, ⟦2-char-id⟧)) {
-              if ((0, ⟦2-char-id⟧.G)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) > ⟦2-char-id⟧) continue;
+              if ((0, ⟦2-char-id⟧.M)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) > ⟦2-char-id⟧) continue;
               const ⟦2-char-id⟧ = this.getLakeAtOrigin(⟦2-char-id⟧);
               if (null === ⟦2-char-id⟧) continue;
               void 0 === ⟦2-char-id⟧ && (⟦2-char-id⟧ = this.lakeRadiusNoiseModifier.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧) + this.lakeRadiusNoiseAmplitude);
-              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧.origin, ⟦2-char-id⟧, ⟦2-char-id⟧),
+              const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.origin, ⟦2-char-id⟧, ⟦2-char-id⟧),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ * (⟦2-char-id⟧.radius / this.maxRadius),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧.radius - ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 273 · Change · +1 / -1</summary>

```diff
@@ -9834,7 +9834,7 @@
           }
           getLakeAtOrigin(⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.lakes.get(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]);
-            if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) return ⟦2-char-id⟧.lake;
+            if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) return ⟦2-char-id⟧.lake;
             const ⟦2-char-id⟧ = this.buildLake(⟦2-char-id⟧);
             return this.lakes.set(⟦2-char-id⟧[0], ⟦2-char-id⟧[1], {
               lake: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 274 · Change · +1 / -1</summary>

```diff
@@ -9847,7 +9847,7 @@
               minRadius: ⟦2-char-id⟧,
               maxRadius: ⟦2-char-id⟧,
               minGapFromHydrologyWater: ⟦2-char-id⟧
-            } = this, ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${JJ[0]}|${JJ[1]}${this.seed}oasisLake`), ⟦2-char-id⟧ = this.hydrology.getHydrologyWaterGenInfo(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.distFromWater - ⟦2-char-id⟧.waterRadius - ⟦2-char-id⟧);
+            } = this, ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${BB[0]}|${BB[1]}${this.seed}oasisLake`), ⟦2-char-id⟧ = this.hydrology.getHydrologyWaterGenInfo(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.distFromWater - ⟦2-char-id⟧.waterRadius - ⟦2-char-id⟧);
             if (⟦2-char-id⟧ < ⟦2-char-id⟧) return null;
             const ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + Math.floor(⟦2-char-id⟧.next() * (⟦2-char-id⟧ - ⟦2-char-id⟧ + 1)), ⟦2-char-id⟧),
               ⟦2-char-id⟧ = Math.floor(this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(⟦2-char-id⟧[0], ⟦2-char-id⟧[1], ⟦2-char-id⟧) - 7);
```

</details>

<details>
<summary>Hunk 275 · Change · +1 / -1</summary>

```diff
@@ -9867,7 +9867,7 @@
         let ⟦2-char-id⟧ = null;
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.biomeSelector = ⟦2-char-id⟧, this.noWaterHeightmapGenerator = ⟦2-char-id⟧, this.needOutsideWaterBodyDist = ⟦2-char-id⟧, this.ee = ⟦2-char-id⟧, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+            this.biomeSelector = ⟦2-char-id⟧, this.noWaterHeightmapGenerator = ⟦2-char-id⟧, this.needOutsideWaterBodyDist = ⟦2-char-id⟧, this.IB = ⟦2-char-id⟧, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
               width: 23,
               atFlux: 800
             }, this.lakeSettings = {
```

</details>

<details>
<summary>Hunk 276 · Change · +5 / -5</summary>

```diff
@@ -9879,23 +9879,23 @@
               cellX: NaN,
               cellZ: NaN,
               info: null
-            }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, ⟦2-char-id⟧ || (⟦2-char-id⟧ = new ⟦2-char-id⟧.b("water cells", ⟦2-char-id⟧ ? 800 : 60, 6⟦2-char-id⟧)), this.waterBodyInfos = ⟦2-char-id⟧.partition();
+            }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, ⟦2-char-id⟧ || (⟦2-char-id⟧ = new ⟦2-char-id⟧.e("water cells", ⟦2-char-id⟧ ? 800 : 60, 6⟦2-char-id⟧)), this.waterBodyInfos = ⟦2-char-id⟧.partition();
             const ⟦2-char-id⟧ = Math.max(this.lakeSettings.maxRadius, this.maxRiverSettings.width / 2 + this.widthOffset) + ⟦2-char-id⟧ + ⟦2-char-id⟧;
-            this.cellCenterMaxOffset = this.gridSize / 2 - ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.lakeRadiusNoiseModifier = new ⟦2-char-id⟧.j([{
+            this.cellCenterMaxOffset = this.gridSize / 2 - ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.lakeRadiusNoiseModifier = new ⟦2-char-id⟧.g([{
               amplitude: 10,
               frequency: 1 / 55
             }, {
               amplitude: 4,
               frequency: .04
-            }], `${ZJ}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, ⟦2-char-id⟧.x)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, this, this.lakeRadiusNoiseModifier, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+            }], `${dB}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, ⟦2-char-id⟧.D)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, this, this.lakeRadiusNoiseModifier, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           getInfoNeededForWaterGen(⟦2-char-id⟧, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-            if (!this.ee) return ⟦2-char-id⟧(this.needOutsideWaterBodyDist);
+            if (!this.IB) return ⟦2-char-id⟧(this.needOutsideWaterBodyDist);
             const ⟦2-char-id⟧ = this.getHydrologyWaterGenInfo(⟦2-char-id⟧, ⟦2-char-id⟧);
             if (!⟦2-char-id⟧) return ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = this.scatteredLakes.getWaterGenInfo(⟦2-char-id⟧, ⟦2-char-id⟧, this.needOutsideWaterBodyDist);
-            return null === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧) <= ⟦2-char-id⟧(⟦2-char-id⟧) ? FJ : ⟦2-char-id⟧
+            return null === ⟦2-char-id⟧ || ⟦2-char-id⟧(⟦2-char-id⟧) <= ⟦2-char-id⟧(⟦2-char-id⟧) ? VB : ⟦2-char-id⟧
           }
           columnMayHaveScatteredLakes(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             for (const {
```

</details>

<details>
<summary>Hunk 277 · Change · +2 / -2</summary>

```diff
@@ -9921,10 +9921,10 @@
               ⟦2-char-id⟧ = 0;
             if (⟦2-char-id⟧.downhill) {
               const {
-                DA: ⟦2-char-id⟧,
+                cg: ⟦2-char-id⟧,
                 fracAlong: ⟦2-char-id⟧,
                 lineSegmentLength: ⟦2-char-id⟧
-              } = (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧, ⟦2-char-id⟧.origin, ⟦2-char-id⟧.downhill.origin);
+              } = (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧, ⟦2-char-id⟧.origin, ⟦2-char-id⟧.downhill.origin);
               ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧);
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.incomingFlux;
               if (⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧.selfFlux, ⟦2-char-id⟧ = Math.min(1, ⟦2-char-id⟧ / this.maxRiverSettings.atFlux), ⟦2-char-id⟧ = Math.max(1, Math.ceil(⟦2-char-id⟧ * this.maxRiverSettings.width)), ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧ / 2, ⟦2-char-id⟧ = ⟦2-char-id⟧.originNoWaterHeight + -3, ⟦2-char-id⟧.downhill.lakeInfo.hasLake) {
```

</details>

<details>
<summary>Hunk 278 · Change · +2 / -2</summary>

```diff
@@ -9936,10 +9936,10 @@
             }
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.uphills) {
               const {
-                DA: ⟦2-char-id⟧,
+                cg: ⟦2-char-id⟧,
                 fracAlong: ⟦2-char-id⟧,
                 lineSegmentLength: ⟦2-char-id⟧
-              } = (0, ⟦2-char-id⟧.u)(⟦2-char-id⟧, ⟦2-char-id⟧.origin, ⟦2-char-id⟧.origin), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧);
+              } = (0, ⟦2-char-id⟧.z)(⟦2-char-id⟧, ⟦2-char-id⟧.origin, ⟦2-char-id⟧.origin), ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧);
               let ⟦2-char-id⟧ = ⟦2-char-id⟧.incomingFlux;
               ⟦2-char-id⟧ += ⟦2-char-id⟧ * ⟦2-char-id⟧.selfFlux;
               const ⟦2-char-id⟧ = Math.min(1, ⟦2-char-id⟧ / this.maxRiverSettings.atFlux),
```

</details>

<details>
<summary>Hunk 279 · Change · +1 / -1</summary>

```diff
@@ -9960,7 +9960,7 @@
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧.lakeInfo;
                 let ⟦2-char-id⟧ = this.lakeRadiusNoiseModifier.getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧);
                 ⟦2-char-id⟧ += this.lakeRadiusNoiseAmplitude;
-                ⟦2-char-id⟧ *= ⟦2-char-id⟧.lakeRadius / this.lakeSettings.maxRadius, ⟦2-char-id⟧ = ⟦2-char-id⟧.lakeRadius - ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧.origin, ⟦2-char-id⟧, ⟦2-char-id⟧) - ⟦2-char-id⟧
+                ⟦2-char-id⟧ *= ⟦2-char-id⟧.lakeRadius / this.lakeSettings.maxRadius, ⟦2-char-id⟧ = ⟦2-char-id⟧.lakeRadius - ⟦2-char-id⟧, ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.origin, ⟦2-char-id⟧, ⟦2-char-id⟧) - ⟦2-char-id⟧
               }
               const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ + (⟦2-char-id⟧ - ⟦2-char-id⟧) * (1 - ⟦2-char-id⟧)),
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ - (Math.ceil(10 * ⟦2-char-id⟧) + 2);
```

</details>

<details>
<summary>Hunk 280 · Change · +1 / -1</summary>

```diff
@@ -9974,7 +9974,7 @@
                   needOutsideWaterDist: this.needOutsideWaterBodyDist
                 }
               } {
-                const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.D)(⟦2-char-id⟧.origin, ⟦2-char-id⟧, ⟦2-char-id⟧),
+                const ⟦2-char-id⟧ = (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.origin, ⟦2-char-id⟧, ⟦2-char-id⟧),
                   ⟦2-char-id⟧ = ⟦2-char-id⟧.lakeInfo;
                 return {
                   distFromWater: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 281 · Change · +1 / -1</summary>

```diff
@@ -10001,7 +10001,7 @@
           getCellInfo(⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (⟦2-char-id⟧ === this.lastReadInfo.cellX && ⟦2-char-id⟧ === this.lastReadInfo.cellZ) return this.lastReadInfo.info;
             const ⟦2-char-id⟧ = this.waterBodyInfos.get(⟦2-char-id⟧, ⟦2-char-id⟧);
-            if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧)) return this.lastReadInfo.cellX = ⟦2-char-id⟧, this.lastReadInfo.cellZ = ⟦2-char-id⟧, this.lastReadInfo.info = ⟦2-char-id⟧, ⟦2-char-id⟧;
+            if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧)) return this.lastReadInfo.cellX = ⟦2-char-id⟧, this.lastReadInfo.cellZ = ⟦2-char-id⟧, this.lastReadInfo.info = ⟦2-char-id⟧, ⟦2-char-id⟧;
             const ⟦2-char-id⟧ = this.getCellOrigin(⟦2-char-id⟧, ⟦2-char-id⟧),
               ⟦2-char-id⟧ = this.biomeSelector.generate(⟦2-char-id⟧[0], ⟦2-char-id⟧[1]),
               ⟦2-char-id⟧ = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(⟦2-char-id⟧[0], ⟦2-char-id⟧[1], ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 282 · Change · +2 / -2</summary>

```diff
@@ -10065,12 +10065,12 @@
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
                 ⟦2-char-id⟧ > 0 && ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧.cell[0] = ⟦2-char-id⟧, ⟦2-char-id⟧.cell[1] = ⟦2-char-id⟧, ⟦2-char-id⟧.origin = ⟦2-char-id⟧, ⟦2-char-id⟧.originNoWaterHeight = ⟦2-char-id⟧)
               }
-            return -1 !== ⟦2-char-id⟧ ? FJ : null
+            return -1 !== ⟦2-char-id⟧ ? VB : null
           }
           getCellOrigin(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧ * this.gridSize + this.gridSize / 2,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ * this.gridSize + this.gridSize / 2,
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${JJ}${cJ}${this.seed}riverCell`);
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${BB}${TB}${this.seed}riverCell`);
             return [⟦2-char-id⟧ + Math.floor(⟦2-char-id⟧.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset), ⟦2-char-id⟧ + Math.floor(⟦2-char-id⟧.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset)]
           }
           fillInLakeInfo(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 283 · Change · +40 / -40</summary>

```diff
@@ -10110,95 +10110,95 @@
         const ⟦2-char-id⟧ = [{
           blockName: "Moonstone Ore",
           radius: 2,
-          pe: 40,
-          Ze: -85,
-          Fe: -85,
-          de: .5
+          pT: 40,
+          UB: -85,
+          FB: -85,
+          lT: .5
         }, {
           blockName: "Diamond Ore",
           radius: 2,
-          pe: 13,
-          Ze: -100,
-          Fe: -85,
-          de: .28
+          pT: 13,
+          UB: -100,
+          FB: -85,
+          lT: .28
         }, {
           blockName: "Gold Ore",
           radius: 2,
-          pe: 10,
-          Ze: -100,
-          Fe: -75,
-          de: .4
+          pT: 10,
+          UB: -100,
+          FB: -75,
+          lT: .4
         }, {
           blockName: "Iron Ore",
           radius: 2,
-          pe: 5,
-          Ze: -80,
-          Fe: 15,
-          de: .5
+          pT: 5,
+          UB: -80,
+          FB: 15,
+          lT: .5
         }, {
           blockName: "Coal Ore",
           radius: 3,
-          pe: 4,
-          Ze: -60,
-          Fe: 40,
-          de: .5
+          pT: 4,
+          UB: -60,
+          FB: 40,
+          lT: .5
         }];
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.seed = ⟦2-char-id⟧, this.Kn = ⟦2-char-id⟧, this.Pe = void 0, this.Pe = ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
-              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e("ore", ⟦2-char-id⟧.pe, !1, !0, `${cJ}${FJ.blockName}`, 20, ⟦2-char-id⟧, null, !0);
+            this.seed = ⟦2-char-id⟧, this.UD = ⟦2-char-id⟧, this.VT = void 0, this.VT = ⟦2-char-id⟧.map((⟦2-char-id⟧ => {
+              const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c("ore", ⟦2-char-id⟧.pT, !1, !0, `${TB}${VB.blockName}`, 20, ⟦2-char-id⟧, null, !0);
               return ⟦2-char-id⟧.assertReachableFromChunkCentre(⟦2-char-id⟧, ⟦2-char-id⟧.radius), {
-                EA: (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.blockName, ⟦2-char-id⟧),
+                rY: (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.blockName, ⟦2-char-id⟧),
                 radius: ⟦2-char-id⟧.radius,
-                pe: ⟦2-char-id⟧.pe,
-                Ze: ⟦2-char-id⟧.Ze,
-                Fe: ⟦2-char-id⟧.Fe,
-                de: ⟦2-char-id⟧.de,
+                pT: ⟦2-char-id⟧.pT,
+                UB: ⟦2-char-id⟧.UB,
+                FB: ⟦2-char-id⟧.FB,
+                lT: ⟦2-char-id⟧.lT,
                 pointGenerator: ⟦2-char-id⟧
               }
             }))
           }
           getOreBlocksForChunk(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = [],
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${JJ}${cJ}${this.seed}oreExists`);
-            for (const ⟦2-char-id⟧ of this.Pe) {
-              const ⟦2-char-id⟧ = ⟦2-char-id⟧.pointGenerator.getPointsAroundPoint(⟦2-char-id⟧ + this.Kn / 2, ⟦2-char-id⟧ + this.Kn / 2),
-                ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.Kn + ⟦2-char-id⟧.radius,
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${BB}${TB}${this.seed}oreExists`);
+            for (const ⟦2-char-id⟧ of this.VT) {
+              const ⟦2-char-id⟧ = ⟦2-char-id⟧.pointGenerator.getPointsAroundPoint(⟦2-char-id⟧ + this.UD / 2, ⟦2-char-id⟧ + this.UD / 2),
+                ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.UD + ⟦2-char-id⟧.radius,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.radius - 1,
-                ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.Kn + ⟦2-char-id⟧.radius,
+                ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.UD + ⟦2-char-id⟧.radius,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧.radius - 1;
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
                 if (⟦2-char-id⟧[0] >= ⟦2-char-id⟧ || ⟦2-char-id⟧[0] <= ⟦2-char-id⟧ || ⟦2-char-id⟧[1] >= ⟦2-char-id⟧ || ⟦2-char-id⟧[1] <= ⟦2-char-id⟧) continue;
-                const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${DJ[0]}${DJ[1]}${this.seed}ore`),
-                  ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.next() * (⟦2-char-id⟧.Fe + 1 - ⟦2-char-id⟧.Ze)) + ⟦2-char-id⟧.Ze,
+                const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${LB[0]}${LB[1]}${this.seed}ore`),
+                  ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧.next() * (⟦2-char-id⟧.FB + 1 - ⟦2-char-id⟧.UB)) + ⟦2-char-id⟧.UB,
                   ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧[0] - ⟦2-char-id⟧.radius),
-                  ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + this.Kn - 1, ⟦2-char-id⟧[0] + ⟦2-char-id⟧.radius),
+                  ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + this.UD - 1, ⟦2-char-id⟧[0] + ⟦2-char-id⟧.radius),
                   ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧[1] - ⟦2-char-id⟧.radius),
-                  ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + this.Kn - 1, ⟦2-char-id⟧[1] + ⟦2-char-id⟧.radius);
+                  ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ + this.UD - 1, ⟦2-char-id⟧[1] + ⟦2-char-id⟧.radius);
                 for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++)
                   for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ <= ⟦2-char-id⟧; ⟦2-char-id⟧++) {
-                    (0, ⟦2-char-id⟧.A)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) > ⟦2-char-id⟧.radius || (⟦2-char-id⟧.next() >= ⟦2-char-id⟧.de || ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.EA))
+                    (0, ⟦2-char-id⟧.H)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) > ⟦2-char-id⟧.radius || (⟦2-char-id⟧.next() >= ⟦2-char-id⟧.lT || ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.rY))
                   }
               }
             }
             return new Int32Array(⟦2-char-id⟧)
           }
           addOresToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.Kn,
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧ + this.UD,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.length;
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧ += 4) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1];
               if (⟦2-char-id⟧ < ⟦2-char-id⟧ || ⟦2-char-id⟧ >= ⟦2-char-id⟧) continue;
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 2];
-              if (⟦2-char-id⟧ < ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight) - ⟦2-char-id⟧) {
+              if (⟦2-char-id⟧ < ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight) - ⟦2-char-id⟧) {
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 3];
                 ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)
               }
             }
           }
         }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59622);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59927);
         const ⟦2-char-id⟧ = [0, -1, 0],
           ⟦2-char-id⟧ = [0, 1, 0],
           ⟦2-char-id⟧ = [-1, 0, 0],
```

</details>

<details>
<summary>Hunk 284 · Change · +2 / -2</summary>

```diff
@@ -10208,8 +10208,8 @@
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
           const {
-            ne: ⟦2-char-id⟧,
-            Qe: ⟦2-char-id⟧,
+            WB: ⟦2-char-id⟧,
+            xB: ⟦2-char-id⟧,
             shallowClusterY: ⟦2-char-id⟧,
             deepClusterY: ⟦2-char-id⟧
           } = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 285 · Change · +9 / -9</summary>

```diff
@@ -10219,24 +10219,24 @@
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = [];
-          return ⟦2-char-id⟧.he && ⟦2-char-id⟧.push({
+          return ⟦2-char-id⟧.aB && ⟦2-char-id⟧.push({
             offset: ⟦2-char-id⟧,
-            EA: ⟦2-char-id⟧[⟦2-char-id⟧].id
-          }), ⟦2-char-id⟧.De && ⟦2-char-id⟧.push({
+            rY: ⟦2-char-id⟧[⟦2-char-id⟧].id
+          }), ⟦2-char-id⟧.ZB && ⟦2-char-id⟧.push({
             offset: ⟦2-char-id⟧,
-            EA: ⟦2-char-id⟧[`${cJ}|meta|rot2|side`].id
+            rY: ⟦2-char-id⟧[`${TB}|meta|rot2|side`].id
           }, {
             offset: ⟦2-char-id⟧,
-            EA: ⟦2-char-id⟧[`${cJ}|meta|rot4|side`].id
+            rY: ⟦2-char-id⟧[`${TB}|meta|rot4|side`].id
           }, {
             offset: ⟦2-char-id⟧,
-            EA: ⟦2-char-id⟧[`${cJ}|meta|rot1|side`].id
+            rY: ⟦2-char-id⟧[`${TB}|meta|rot1|side`].id
           }, {
             offset: ⟦2-char-id⟧,
-            EA: ⟦2-char-id⟧[`${cJ}|meta|rot3|side`].id
-          }), ⟦2-char-id⟧.se && ⟦2-char-id⟧.push({
+            rY: ⟦2-char-id⟧[`${TB}|meta|rot3|side`].id
+          }), ⟦2-char-id⟧.XB && ⟦2-char-id⟧.push({
             offset: ⟦2-char-id⟧,
-            EA: ⟦2-char-id⟧[`${cJ}|meta|rot1|top`].id
+            rY: ⟦2-char-id⟧[`${TB}|meta|rot1|top`].id
           }), ⟦2-char-id⟧
         }
 
```

</details>

<details>
<summary>Hunk 286 · Change · +23 / -23</summary>

```diff
@@ -10245,45 +10245,45 @@
             return [{
               seedPrefix: "crystal",
               anchorOptions: ⟦2-char-id⟧(⟦2-char-id⟧, "Crystal", {
-                he: !0,
-                De: !0,
-                se: !0
+                aB: !0,
+                ZB: !0,
+                XB: !0
               }),
               clusterBoxSize: 4,
-              Ge: .8,
-              fe: 0,
-              ne: .12,
-              Qe: .25,
+              hB: .8,
+              CB: 0,
+              WB: .12,
+              xB: .25,
               shallowClusterY: -20,
               deepClusterY: -85
             }, {
               seedPrefix: "mushroom",
               anchorOptions: ⟦2-char-id⟧(⟦2-char-id⟧, "Glowing Mushroom", {
-                he: !0,
-                De: !0,
-                se: !1
+                aB: !0,
+                ZB: !0,
+                XB: !1
               }),
               clusterBoxSize: 4,
-              Ge: .7,
-              fe: 2,
-              ne: .58
+              hB: .7,
+              CB: 2,
+              WB: .58
             }]
           }(⟦2-char-id⟧) : ⟦2-char-id⟧.map((⟦2-char-id⟧ => function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = ⟦2-char-id⟧.xe;
+            const ⟦2-char-id⟧ = ⟦2-char-id⟧.GB;
             return {
               seedPrefix: ⟦2-char-id⟧.blockName,
               anchorOptions: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.blockName, {
-                he: ⟦2-char-id⟧.he,
-                De: ⟦2-char-id⟧.De,
-                se: ⟦2-char-id⟧.se
+                aB: ⟦2-char-id⟧.aB,
+                ZB: ⟦2-char-id⟧.ZB,
+                XB: ⟦2-char-id⟧.XB
               }),
               clusterBoxSize: 4,
-              Ge: ⟦2-char-id⟧.Ge,
-              fe: ⟦2-char-id⟧.fe,
-              ne: ⟦2-char-id⟧.ne,
-              Qe: null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Qe,
-              shallowClusterY: null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Ee,
-              deepClusterY: null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Ve
+              hB: ⟦2-char-id⟧.hB,
+              CB: ⟦2-char-id⟧.CB,
+              WB: ⟦2-char-id⟧.WB,
+              xB: null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.xB,
+              shallowClusterY: null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.jB,
+              deepClusterY: null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.AB
             }
           }(⟦2-char-id⟧, ⟦2-char-id⟧)))
         }
```

</details>

<details>
<summary>Hunk 287 · Change · +2 / -2</summary>

```diff
@@ -10302,14 +10302,14 @@
           generate(⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, this.caveHeightmapVals, !0);
             if (0 === ⟦2-char-id⟧.length) return ⟦2-char-id⟧;
-            const ⟦2-char-id⟧ = this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight) - this.surfaceMargin,
+            const ⟦2-char-id⟧ = this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight) - this.surfaceMargin,
               {
                 minCaveHeight: ⟦2-char-id⟧
               } = this,
               ⟦2-char-id⟧ = [];
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧.ceilingY, ⟦2-char-id⟧);
-              ⟦2-char-id⟧ - ⟦2-char-id⟧.floorY + 1 < ⟦2-char-id⟧ || ⟦2-char-id⟧.push(⟦2-char-id⟧ === ⟦2-char-id⟧.ceilingY ? eJ : {
+              ⟦2-char-id⟧ - ⟦2-char-id⟧.floorY + 1 < ⟦2-char-id⟧ || ⟦2-char-id⟧.push(⟦2-char-id⟧ === ⟦2-char-id⟧.ceilingY ? pB : {
                 floorY: ⟦2-char-id⟧.floorY,
                 ceilingY: ⟦2-char-id⟧
               })
```

</details>

<details>
<summary>Hunk 288 · Change · +2 / -2</summary>

```diff
@@ -10319,13 +10319,13 @@
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.heightmapVals = ⟦2-char-id⟧, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new ⟦2-char-id⟧.n(new ⟦2-char-id⟧(⟦2-char-id⟧)), this.decoratableCavesCache = new ⟦2-char-id⟧.n(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
+            this.heightmapVals = ⟦2-char-id⟧, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new ⟦2-char-id⟧.l(new ⟦2-char-id⟧(⟦2-char-id⟧)), this.decoratableCavesCache = new ⟦2-char-id⟧.l(new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
           }
           getAllCaves(⟦2-char-id⟧, ⟦2-char-id⟧) {
             return this.allCavesCache.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           getGroundHeight(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight)
+            return this.heightmapVals.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight)
           }
           getDecoratableCaves(⟦2-char-id⟧, ⟦2-char-id⟧) {
             return this.decoratableCavesCache.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 289 · Change · +10 / -10</summary>

```diff
@@ -10344,29 +10344,29 @@
           let ⟦2-char-id⟧ = null;
           const ⟦2-char-id⟧ = [];
           for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
-            ⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧.offset[0], ⟦2-char-id⟧ + ⟦2-char-id⟧.offset[1], ⟦2-char-id⟧ + ⟦2-char-id⟧.offset[2], ⟦2-char-id⟧) && (⟦2-char-id⟧.offset === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = qJ : ⟦2-char-id⟧.push(⟦2-char-id⟧))
-          }
-          return null !== ⟦2-char-id⟧ ? XJ : 0 === ⟦2-char-id⟧.length ? null : ⟦2-char-id⟧[Math.floor(⟦2-char-id⟧ * ⟦2-char-id⟧.length)]
+            ⟦2-char-id⟧(⟦2-char-id⟧ + ⟦2-char-id⟧.offset[0], ⟦2-char-id⟧ + ⟦2-char-id⟧.offset[1], ⟦2-char-id⟧ + ⟦2-char-id⟧.offset[2], ⟦2-char-id⟧) && (⟦2-char-id⟧.offset === ⟦2-char-id⟧ ? ⟦2-char-id⟧ = YB : ⟦2-char-id⟧.push(⟦2-char-id⟧))
+          }
+          return null !== ⟦2-char-id⟧ ? lB : 0 === ⟦2-char-id⟧.length ? null : ⟦2-char-id⟧[Math.floor(⟦2-char-id⟧ * ⟦2-char-id⟧.length)]
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-            this.Kn = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+            this.UD = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
             const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
             let ⟦2-char-id⟧ = 0,
               ⟦2-char-id⟧ = 0;
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
               var ⟦2-char-id⟧;
-              if (!Number.isInteger(⟦2-char-id⟧.clusterBoxSize) || ⟦2-char-id⟧.clusterBoxSize < 2 || ⟦2-char-id⟧.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${UJ.seedPrefix}" has invalid clusterBoxSize (${UJ.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs at least one cell per axis).`);
+              if (!Number.isInteger(⟦2-char-id⟧.clusterBoxSize) || ⟦2-char-id⟧.clusterBoxSize < 2 || ⟦2-char-id⟧.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${yB.seedPrefix}" has invalid clusterBoxSize (${yB.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs at least one cell per axis).`);
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.clusterBoxSize >> 1;
-              ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ += Math.max(⟦2-char-id⟧.ne, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.Qe) && void 0 !== ⟦2-char-id⟧ ? qJ : ⟦2-char-id⟧.ne)
-            }
-            if (⟦2-char-id⟧ > 1) throw new Error(`Cave decoration cluster chances sum to ${AJ} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-            this.pointsGen = new ⟦2-char-id⟧.e("caveDeco", 10, !1, !0, ⟦2-char-id⟧, 4, ⟦2-char-id⟧, null, !0), this.pointsGen.assertReachableFromChunkCentre(⟦2-char-id⟧, ⟦2-char-id⟧), this.configs = ⟦2-char-id⟧, this.maxHalfBox = ⟦2-char-id⟧
+              ⟦2-char-id⟧ > ⟦2-char-id⟧ && (⟦2-char-id⟧ = ⟦2-char-id⟧), ⟦2-char-id⟧ += Math.max(⟦2-char-id⟧.WB, null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.xB) && void 0 !== ⟦2-char-id⟧ ? YB : ⟦2-char-id⟧.WB)
+            }
+            if (⟦2-char-id⟧ > 1) throw new Error(`Cave decoration cluster chances sum to ${JB} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+            this.pointsGen = new ⟦2-char-id⟧.c("caveDeco", 10, !1, !0, ⟦2-char-id⟧, 4, ⟦2-char-id⟧, null, !0), this.pointsGen.assertReachableFromChunkCentre(⟦2-char-id⟧, ⟦2-char-id⟧), this.configs = ⟦2-char-id⟧, this.maxHalfBox = ⟦2-char-id⟧
           }
           getDecorationsForChunkColumn(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = [],
-              ⟦2-char-id⟧ = this.Kn,
+              ⟦2-char-id⟧ = this.UD,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
               ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
               ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, 4, 3),
```

</details>

<details>
<summary>Hunk 290 · Change · +2 / -2</summary>

```diff
@@ -10383,12 +10383,12 @@
           }
           static addCaveDecorationsToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧;
-            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.y >= ⟦2-char-id⟧ && ⟦2-char-id⟧.y < ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧.x - ⟦2-char-id⟧, ⟦2-char-id⟧.y - ⟦2-char-id⟧, ⟦2-char-id⟧.z - ⟦2-char-id⟧, ⟦2-char-id⟧.EA)
+            for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.y >= ⟦2-char-id⟧ && ⟦2-char-id⟧.y < ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧.x - ⟦2-char-id⟧, ⟦2-char-id⟧.y - ⟦2-char-id⟧, ⟦2-char-id⟧.z - ⟦2-char-id⟧, ⟦2-char-id⟧.rY)
           }
           collectClusterPlacements(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.getDecoratableCaves(⟦2-char-id⟧, ⟦2-char-id⟧);
             if (0 === ⟦2-char-id⟧.length) return;
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${this.seed}|${JJ}|${cJ}|cluster`),
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${this.seed}|${BB}|${TB}|cluster`),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.next(),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.next(),
               ⟦2-char-id⟧ = ⟦2-char-id⟧.next(),
```

</details>

<details>
<summary>Hunk 291 · Change · +2 / -2</summary>

```diff
@@ -10402,13 +10402,13 @@
                 break
               } if (null === ⟦2-char-id⟧) return;
             const ⟦2-char-id⟧ = [];
-            if (this.scatterClusterCells(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), !(⟦2-char-id⟧.length < ⟦2-char-id⟧.fe))
+            if (this.scatterClusterCells(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), !(⟦2-char-id⟧.length < ⟦2-char-id⟧.CB))
               for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧.x >= ⟦2-char-id⟧ && ⟦2-char-id⟧.x < ⟦2-char-id⟧ && ⟦2-char-id⟧.z >= ⟦2-char-id⟧ && ⟦2-char-id⟧.z < ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧)
           }
           scatterClusterCells(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const {
               clusterBoxSize: ⟦2-char-id⟧,
-              Ge: ⟦2-char-id⟧,
+              hB: ⟦2-char-id⟧,
               anchorOptions: ⟦2-char-id⟧
             } = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ >> 1, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++)
```

</details>

<details>
<summary>Hunk 292 · Change · +1 / -1</summary>

```diff
@@ -10428,7 +10428,7 @@
                     x: ⟦2-char-id⟧,
                     y: ⟦2-char-id⟧,
                     z: ⟦2-char-id⟧,
-                    EA: ⟦2-char-id⟧.EA
+                    rY: ⟦2-char-id⟧.rY
                   })
                 }
           }
```

</details>

<details>
<summary>Hunk 293 · Change · +14 / -14</summary>

```diff
@@ -10442,34 +10442,34 @@
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.prefabGenerator = ⟦2-char-id⟧, this.seed = void 0, this.Kn = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0, this.sandId = void 0, this.clayId = void 0, this.chalkId = void 0, this.grassBlockId = void 0, this.dirtId = void 0, this.seed = ⟦2-char-id⟧, this.Kn = ⟦2-char-id⟧, this.biomeSelector = ⟦2-char-id⟧, this.treeGenerator = ⟦2-char-id⟧, this.blockMetadata = ⟦2-char-id⟧, this.oreGenerator = ⟦2-char-id⟧, this.bedrockId = ⟦2-char-id⟧.Bedrock.id, this.waterId = ⟦2-char-id⟧.Water.id, this.sandId = ⟦2-char-id⟧.Sand.id, this.clayId = ⟦2-char-id⟧.Clay.id, this.chalkId = ⟦2-char-id⟧.Chalk.id, this.grassBlockId = ⟦2-char-id⟧["Grass Block"].id, this.dirtId = ⟦2-char-id⟧.Dirt.id, this.riverbedFeatureGenerator = new ⟦2-char-id⟧.e("clay", 50, !1, !0, ⟦2-char-id⟧, 4, ⟦2-char-id⟧, null, !0)
+            this.prefabGenerator = ⟦2-char-id⟧, this.seed = void 0, this.UD = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0, this.sandId = void 0, this.clayId = void 0, this.chalkId = void 0, this.grassBlockId = void 0, this.dirtId = void 0, this.seed = ⟦2-char-id⟧, this.UD = ⟦2-char-id⟧, this.biomeSelector = ⟦2-char-id⟧, this.treeGenerator = ⟦2-char-id⟧, this.blockMetadata = ⟦2-char-id⟧, this.oreGenerator = ⟦2-char-id⟧, this.bedrockId = ⟦2-char-id⟧.Bedrock.id, this.waterId = ⟦2-char-id⟧.Water.id, this.sandId = ⟦2-char-id⟧.Sand.id, this.clayId = ⟦2-char-id⟧.Clay.id, this.chalkId = ⟦2-char-id⟧.Chalk.id, this.grassBlockId = ⟦2-char-id⟧["Grass Block"].id, this.dirtId = ⟦2-char-id⟧.Dirt.id, this.riverbedFeatureGenerator = new ⟦2-char-id⟧.c("clay", 50, !1, !0, ⟦2-char-id⟧, 4, ⟦2-char-id⟧, null, !0)
           }
           fillChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            if (⟦2-char-id⟧ + this.Kn <= ⟦2-char-id⟧.r.bedrockLevel) return {
+            if (⟦2-char-id⟧ + this.UD <= ⟦2-char-id⟧.r.bedrockLevel) return {
               specialBlocks: []
             };
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e,
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.minTerrainHeight,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.maxTerrainHeight,
               ⟦2-char-id⟧ = ⟦2-char-id⟧.hasWater;
-            if (⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++) {
+            if (⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD)
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.biomeIds.get(⟦2-char-id⟧, ⟦2-char-id⟧),
                     ⟦2-char-id⟧ = this.biomeSelector.getBiomeFromId(⟦2-char-id⟧),
-                    ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight);
-                  if (⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn) {
-                    const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.IsLake) === ⟦2-char-id⟧.j ? ⟦2-char-id⟧.getDryBedBlock(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧.getTopsoilBlock(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+                    ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight);
+                  if (⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD) {
+                    const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.IsLake) === ⟦2-char-id⟧.g ? ⟦2-char-id⟧.getDryBedBlock(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : ⟦2-char-id⟧.getTopsoilBlock(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
                     ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)
                   }
                 }
-            if (⟦2-char-id⟧ + 1 >= ⟦2-char-id⟧ && ⟦2-char-id⟧ - 4 < ⟦2-char-id⟧ + this.Kn)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++) {
+            if (⟦2-char-id⟧ + 1 >= ⟦2-char-id⟧ && ⟦2-char-id⟧ - 4 < ⟦2-char-id⟧ + this.UD)
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.biomeIds.get(⟦2-char-id⟧, ⟦2-char-id⟧),
                     ⟦2-char-id⟧ = this.biomeSelector.getBiomeFromId(⟦2-char-id⟧),
-                    ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight),
-                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧ + this.Kn);
+                    ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight),
+                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧ + this.UD);
                   for (let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧ - 4, ⟦2-char-id⟧); ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧.getLowsoilBlockType(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
                 }
             const ⟦2-char-id⟧ = ⟦2-char-id⟧.banks;
```

</details>

<details>
<summary>Hunk 294 · Change · +13 / -13</summary>

```diff
@@ -10477,32 +10477,32 @@
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1] - ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 2];
-              for (let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧ - 4, 0); ⟦2-char-id⟧ < Math.min(⟦2-char-id⟧, this.Kn); ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.dirtId);
-              ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.grassBlockId)
+              for (let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧ - 4, 0); ⟦2-char-id⟧ < Math.min(⟦2-char-id⟧, this.UD); ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.dirtId);
+              ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.grassBlockId)
             }
             if (⟦2-char-id⟧ - 4 >= ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = this.biomeSelector.anyStrata;
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++) {
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++) {
                   const ⟦2-char-id⟧ = ⟦2-char-id⟧.stoneTypeIds.get(⟦2-char-id⟧, ⟦2-char-id⟧),
-                    ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight),
-                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ - 4, ⟦2-char-id⟧ + this.Kn),
+                    ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight),
+                    ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧ - 4, ⟦2-char-id⟧ + this.UD),
                     ⟦2-char-id⟧ = ⟦2-char-id⟧ ? this.biomeSelector.getBiomeFromId(⟦2-char-id⟧.biomeIds.get(⟦2-char-id⟧, ⟦2-char-id⟧)) : null,
                     ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ && ⟦2-char-id⟧.strataDepth > 0 ? ⟦2-char-id⟧ - 4 - ⟦2-char-id⟧.strataDepth : ⟦2-char-id⟧;
                   for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧; ⟦2-char-id⟧++) {
                     const ⟦2-char-id⟧ = ⟦2-char-id⟧ >= ⟦2-char-id⟧ ? ⟦2-char-id⟧.getStrataBlock(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) : 0;
-                    ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, 0 !== ⟦2-char-id⟧ ? eJ : ⟦2-char-id⟧)
+                    ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, 0 !== ⟦2-char-id⟧ ? pB : ⟦2-char-id⟧)
                   }
                 }
             }
-            if (⟦2-char-id⟧ - 4 >= ⟦2-char-id⟧ && this.oreGenerator.addOresToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, 4, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (⟦2-char-id⟧.addCavesToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.addCaveDecorationsToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.Kn, ⟦2-char-id⟧)), ⟦2-char-id⟧.r.bedrockLevel >= ⟦2-char-id⟧ && ⟦2-char-id⟧.r.bedrockLevel < ⟦2-char-id⟧ + this.Kn)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧.r.bedrockLevel - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.bedrockId);
+            if (⟦2-char-id⟧ - 4 >= ⟦2-char-id⟧ && this.oreGenerator.addOresToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, 4, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ >= ⟦2-char-id⟧ && (⟦2-char-id⟧.addCavesToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.addCaveDecorationsToChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.UD, ⟦2-char-id⟧)), ⟦2-char-id⟧.r.bedrockLevel >= ⟦2-char-id⟧ && ⟦2-char-id⟧.r.bedrockLevel < ⟦2-char-id⟧ + this.UD)
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧.r.bedrockLevel - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.bedrockId);
             this.addSurfaceBlocks(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.flora);
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-                  for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++) {
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+                  for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++) {
                     const ⟦2-char-id⟧ = this.prefabGenerator.getBlockFromPrefabAtPoint(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
                     0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ === ⟦2-char-id⟧.GUARANTEED_AIR ? 0 : ⟦2-char-id⟧)
                   }
```

</details>

<details>
<summary>Hunk 295 · Change · +9 / -9</summary>

```diff
@@ -10513,20 +10513,20 @@
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1],
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 2] - ⟦2-char-id⟧,
                 ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 3] - ⟦2-char-id⟧;
-              for (let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, 0); ⟦2-char-id⟧ < Math.min(⟦2-char-id⟧, this.Kn); ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.waterId);
-              ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 4])
+              for (let ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, 0); ⟦2-char-id⟧ < Math.min(⟦2-char-id⟧, this.UD); ⟦2-char-id⟧++) ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.waterId);
+              ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 4])
             }
             let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-            if (this.addSurfaceBlocks(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.lilyPads), ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++) {
-                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.WaterHeight),
-                    ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight);
-                  if (⟦2-char-id⟧ !== ⟦2-char-id⟧.p && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn)
+            if (this.addSurfaceBlocks(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.lilyPads), ⟦2-char-id⟧ && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD)
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++) {
+                  const ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.WaterHeight),
+                    ⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight);
+                  if (⟦2-char-id⟧ !== ⟦2-char-id⟧.o && ⟦2-char-id⟧ >= ⟦2-char-id⟧ && ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD)
                     if (⟦2-char-id⟧ === ⟦2-char-id⟧) ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, this.sandId);
                     else {
                       const ⟦2-char-id⟧ = this.riverbedFeatureGenerator.getClosestPoint(⟦2-char-id⟧, ⟦2-char-id⟧);
-                      if ((0, ⟦2-char-id⟧.G)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) < 100) ⟦2-char-id⟧ === ⟦2-char-id⟧[0] && ⟦2-char-id⟧ === ⟦2-char-id⟧[1] || (⟦2-char-id⟧ = ⟦2-char-id⟧[0], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${this.seed}${yJ}${SJ}`).next() < .3 ? this.chalkId : this.clayId), ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ - 1 >= ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - 1 - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ - 2 >= ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - 2 - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧);
+                      if ((0, ⟦2-char-id⟧.M)(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) < 100) ⟦2-char-id⟧ === ⟦2-char-id⟧[0] && ⟦2-char-id⟧ === ⟦2-char-id⟧[1] || (⟦2-char-id⟧ = ⟦2-char-id⟧[0], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = new ⟦2-char-id⟧.g(`${this.seed}${MB}${zB}`).next() < .3 ? this.chalkId : this.clayId), ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ - 1 >= ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - 1 - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ - 2 >= ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - 2 - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧);
                       else {
                         const ⟦2-char-id⟧ = ⟦2-char-id⟧.biomeIds.get(⟦2-char-id⟧, ⟦2-char-id⟧),
                           ⟦2-char-id⟧ = this.biomeSelector.getBiomeFromId(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 296 · Change · +4 / -4</summary>

```diff
@@ -10535,10 +10535,10 @@
                     }
                 }
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-                  for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++) {
-                    const ⟦2-char-id⟧ = ⟦2-char-id⟧.c.getBlockFromFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+                for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+                  for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++) {
+                    const ⟦2-char-id⟧ = ⟦2-char-id⟧.e.getBlockFromFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
                     0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.set(⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧, ⟦2-char-id⟧)
                   }
             const ⟦2-char-id⟧ = [];
```

</details>

<details>
<summary>Hunk 297 · Change · +1 / -1</summary>

```diff
@@ -10559,7 +10559,7 @@
           addSurfaceBlocks(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧ += 4) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧[⟦2-char-id⟧ + 1] - ⟦2-char-id⟧;
-              ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ < this.Kn && ⟦2-char-id⟧.set(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 2], ⟦2-char-id⟧[⟦2-char-id⟧ + 3])
+              ⟦2-char-id⟧ >= 0 && ⟦2-char-id⟧ < this.UD && ⟦2-char-id⟧.set(⟦2-char-id⟧[⟦2-char-id⟧], ⟦2-char-id⟧, ⟦2-char-id⟧[⟦2-char-id⟧ + 2], ⟦2-char-id⟧[⟦2-char-id⟧ + 3])
             }
           }
         }
```

</details>

<details>
<summary>Hunk 298 · Change · +1 / -1</summary>

```diff
@@ -10573,7 +10573,7 @@
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            this.Kn = ⟦2-char-id⟧, this.biomeSelector = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.random = new ⟦2-char-id⟧.g(""), this.lilyPadId = void 0, this.lilyPadId = ⟦2-char-id⟧["Lily Pad"].id
+            this.UD = ⟦2-char-id⟧, this.biomeSelector = ⟦2-char-id⟧, this.seed = ⟦2-char-id⟧, this.random = new ⟦2-char-id⟧.g(""), this.lilyPadId = void 0, this.lilyPadId = ⟦2-char-id⟧["Lily Pad"].id
           }
           getInfoForChunkColumn(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = [],
```

</details>

<details>
<summary>Hunk 299 · Change · +8 / -8</summary>

```diff
@@ -10583,21 +10583,21 @@
             let ⟦2-char-id⟧ = 1 / 0,
               ⟦2-char-id⟧ = -1 / 0,
               ⟦2-char-id⟧ = !1;
-            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++)
-              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.Kn; ⟦2-char-id⟧++) {
+            for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++)
+              for (let ⟦2-char-id⟧ = ⟦2-char-id⟧; ⟦2-char-id⟧ < ⟦2-char-id⟧ + this.UD; ⟦2-char-id⟧++) {
                 const ⟦2-char-id⟧ = this.biomeSelector.getBiomeFromId(⟦2-char-id⟧.biomeIds.get(⟦2-char-id⟧, ⟦2-char-id⟧)),
-                  ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.GroundHeight),
-                  ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.WaterHeight);
+                  ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.GroundHeight),
+                  ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.WaterHeight);
                 ⟦2-char-id⟧ = Math.min(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = Math.max(⟦2-char-id⟧, ⟦2-char-id⟧);
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧,
                   ⟦2-char-id⟧ = ⟦2-char-id⟧ - ⟦2-char-id⟧;
-                if (⟦2-char-id⟧ !== ⟦2-char-id⟧.p) {
-                  ⟦2-char-id⟧ = !0, ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧, ⟦2-char-id⟧.topwaterBlockType), ⟦2-char-id⟧.hasScatteredLakes && 1 === ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.IsLake) && (this.random.reseed(`${GJ}|${xJ}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧, this.lilyPadId));
+                if (⟦2-char-id⟧ !== ⟦2-char-id⟧.o) {
+                  ⟦2-char-id⟧ = !0, ⟦2-char-id⟧ < ⟦2-char-id⟧ && ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧, ⟦2-char-id⟧.topwaterBlockType), ⟦2-char-id⟧.hasScatteredLakes && 1 === ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.IsLake) && (this.random.reseed(`${uB}|${EB}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) && ⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧, this.lilyPadId));
                   continue
                 }
                 let ⟦2-char-id⟧ = ⟦2-char-id⟧.floraGenerator;
-                if (⟦2-char-id⟧.hasScatteredLakes && this.isBesideLake(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) && (this.random.reseed(`${GJ}|${xJ}|${this.seed}oasisShore`), this.random.next() < .85 && (⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = this.biomeSelector.baseBiome.floraGenerator)), !⟦2-char-id⟧.isInCave(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) && !⟦2-char-id⟧.c.isWithinFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
-                  for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧ + ⟦2-char-id⟧.maxFloraHeight; ⟦2-char-id⟧ += this.Kn) ⟦2-char-id⟧.startY = ⟦2-char-id⟧, ⟦2-char-id⟧.addBiomeFloraToColumn(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+                if (⟦2-char-id⟧.hasScatteredLakes && this.isBesideLake(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) && (this.random.reseed(`${uB}|${EB}|${this.seed}oasisShore`), this.random.next() < .85 && (⟦2-char-id⟧.push(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ = this.biomeSelector.baseBiome.floraGenerator)), !⟦2-char-id⟧.isInCave(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) && !⟦2-char-id⟧.e.isWithinFixedPointPrefab(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧))
+                  for (let ⟦2-char-id⟧ = ⟦2-char-id⟧ + 1; ⟦2-char-id⟧ <= ⟦2-char-id⟧ + ⟦2-char-id⟧.maxFloraHeight; ⟦2-char-id⟧ += this.UD) ⟦2-char-id⟧.startY = ⟦2-char-id⟧, ⟦2-char-id⟧.addBiomeFloraToColumn(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
               }
             return {
               minTerrainHeight: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 300 · Change · +11 / -11</summary>

```diff
@@ -10610,28 +10610,28 @@
             }
           }
           isInsideWater(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧ + 1, ⟦2-char-id⟧, ⟦2-char-id⟧.f.WaterHeight) !== ⟦2-char-id⟧.p && ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧ - 1, ⟦2-char-id⟧, ⟦2-char-id⟧.f.WaterHeight) !== ⟦2-char-id⟧.p && ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧.f.WaterHeight) !== ⟦2-char-id⟧.p && ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧.f.WaterHeight) !== ⟦2-char-id⟧.p
+            return ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧ + 1, ⟦2-char-id⟧, ⟦2-char-id⟧.h.WaterHeight) !== ⟦2-char-id⟧.o && ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧ - 1, ⟦2-char-id⟧, ⟦2-char-id⟧.h.WaterHeight) !== ⟦2-char-id⟧.o && ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧.h.WaterHeight) !== ⟦2-char-id⟧.o && ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧.h.WaterHeight) !== ⟦2-char-id⟧.o
           }
           isBesideLake(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             return this.isLakeWater(⟦2-char-id⟧ + 1, ⟦2-char-id⟧, ⟦2-char-id⟧) || this.isLakeWater(⟦2-char-id⟧ - 1, ⟦2-char-id⟧, ⟦2-char-id⟧) || this.isLakeWater(⟦2-char-id⟧, ⟦2-char-id⟧ + 1, ⟦2-char-id⟧) || this.isLakeWater(⟦2-char-id⟧, ⟦2-char-id⟧ - 1, ⟦2-char-id⟧)
           }
           isLakeWater(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.WaterHeight) !== ⟦2-char-id⟧.p && 1 === ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.f.IsLake)
-          }
-        }
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59532);
+            return ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.WaterHeight) !== ⟦2-char-id⟧.o && 1 === ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧.h.IsLake)
+          }
+        }
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59843);
         let ⟦2-char-id⟧ = null;
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             var ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
-            if (this.Kn = ⟦2-char-id⟧, this.hashChunkContents = ⟦2-char-id⟧, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSelector = void 0, this.fixedPointPrefabTracker = void 0, this.noWaterHeightmapGenerator = void 0, this.heightmapPerturb = void 0, this.waterBodyGenerator = void 0, this.needOutsideWaterDist = 15, this.mostRecentlyAccessedChunkColumnPos = [0, 0], this.mostRecentlyAccessedChunkColumn = null, this.chunkColumnInfos = void 0, this.chunkFiller = void 0, this.surfaceGenerator = void 0, !⟦2-char-id⟧) {
+            if (this.UD = ⟦2-char-id⟧, this.hashChunkContents = ⟦2-char-id⟧, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSelector = void 0, this.fixedPointPrefabTracker = void 0, this.noWaterHeightmapGenerator = void 0, this.heightmapPerturb = void 0, this.waterBodyGenerator = void 0, this.needOutsideWaterDist = 15, this.mostRecentlyAccessedChunkColumnPos = [0, 0], this.mostRecentlyAccessedChunkColumn = null, this.chunkColumnInfos = void 0, this.chunkFiller = void 0, this.surfaceGenerator = void 0, !⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧ ? 1750 : 125;
-              ⟦2-char-id⟧ = new ⟦2-char-id⟧.b("chunk columns", ⟦2-char-id⟧, 4⟦2-char-id⟧)
-            }
-            this.chunkColumnInfos = ⟦2-char-id⟧.partition(), this.caveGenerator = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Xe.qe) && void 0 !== ⟦2-char-id⟧ ? DJ : "Lava");
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Pe) && void 0 !== ⟦2-char-id⟧ ? sJ : [...⟦2-char-id⟧, ...null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Ce) && void 0 !== ⟦2-char-id⟧ ? nJ : []]),
+              ⟦2-char-id⟧ = new ⟦2-char-id⟧.e("chunk columns", ⟦2-char-id⟧, 4⟦2-char-id⟧)
+            }
+            this.chunkColumnInfos = ⟦2-char-id⟧.partition(), this.caveGenerator = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.cB.PB) && void 0 !== ⟦2-char-id⟧ ? LB : "Lava");
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.VT) && void 0 !== ⟦2-char-id⟧ ? OB : [...⟦2-char-id⟧, ...null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.kT) && void 0 !== ⟦2-char-id⟧ ? DB : []]),
               ⟦2-char-id⟧ = {
-                Kn: ⟦2-char-id⟧,
+                UD: ⟦2-char-id⟧,
                 blockMetadata: ⟦2-char-id⟧,
                 worldGenerator: this,
                 seed: ⟦2-char-id⟧,
```

</details>

<details>
<summary>Hunk 301 · Change · +14 / -14</summary>

```diff
@@ -10639,40 +10639,40 @@
                   oreGenerator: ⟦2-char-id⟧
                 }
               },
-              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Ke) && void 0 !== ⟦2-char-id⟧ ? GJ : null,
-              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.buildBiomes) && void 0 !== ⟦2-char-id⟧ ? xJ : null,
-              ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.d)(⟦2-char-id⟧, ⟦2-char-id⟧) : null !== ⟦2-char-id⟧ ? this.buildTerrainBiomes(⟦2-char-id⟧, ⟦2-char-id⟧) : (0, ⟦2-char-id⟧.h)(⟦2-char-id⟧);
-            this.biomeSelector = new ⟦2-char-id⟧.c(this, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.treeGenerator = new ⟦2-char-id⟧(this, this.biomeSelector, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.fixedPointPrefabTracker = new ⟦2-char-id⟧.c(⟦2-char-id⟧, ⟦2-char-id⟧), this.prefabGenerator = new ⟦2-char-id⟧({
+              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.bB) && void 0 !== ⟦2-char-id⟧ ? uB : null,
+              ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.buildBiomes) && void 0 !== ⟦2-char-id⟧ ? EB : null,
+              ⟦2-char-id⟧ = null !== ⟦2-char-id⟧ ? (0, ⟦2-char-id⟧.g)(⟦2-char-id⟧, ⟦2-char-id⟧) : null !== ⟦2-char-id⟧ ? this.buildTerrainBiomes(⟦2-char-id⟧, ⟦2-char-id⟧) : (0, ⟦2-char-id⟧.j)(⟦2-char-id⟧);
+            this.biomeSelector = new ⟦2-char-id⟧.e(this, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.treeGenerator = new ⟦2-char-id⟧(this, this.biomeSelector, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), this.fixedPointPrefabTracker = new ⟦2-char-id⟧.e(⟦2-char-id⟧, ⟦2-char-id⟧), this.prefabGenerator = new ⟦2-char-id⟧({
               seed: ⟦2-char-id⟧,
-              Kn: ⟦2-char-id⟧,
+              UD: ⟦2-char-id⟧,
               blockMetadata: ⟦2-char-id⟧,
               itemMetadata: ⟦2-char-id⟧,
               typeSettings: {
-                [⟦2-char-id⟧.q.SURFACE]: {
+                [⟦2-char-id⟧.r.SURFACE]: {
                   densitySettings: {
-                    [⟦2-char-id⟧.m.MEDIUM]: {
+                    [⟦2-char-id⟧.n.MEDIUM]: {
                       minDistanceBetweenPrefabs: 100
                     },
-                    [⟦2-char-id⟧.m.HIGH]: {
+                    [⟦2-char-id⟧.n.HIGH]: {
                       minDistanceBetweenPrefabs: 50
                     },
-                    [⟦2-char-id⟧.m.VERY_HIGH]: {
+                    [⟦2-char-id⟧.n.VERY_HIGH]: {
                       minDistanceBetweenPrefabs: 25
                     }
                   }
                 },
-                [⟦2-char-id⟧.q.UNDERGROUND]: {
+                [⟦2-char-id⟧.r.UNDERGROUND]: {
                   densitySettings: {
-                    [⟦2-char-id⟧.m.MEDIUM]: {
+                    [⟦2-char-id⟧.n.MEDIUM]: {
                       minDistanceBetweenPrefabs: 80
                     },
-                    [⟦2-char-id⟧.m.HIGH]: null,
-                    [⟦2-char-id⟧.m.VERY_HIGH]: null
+                    [⟦2-char-id⟧.n.HIGH]: null,
+                    [⟦2-char-id⟧.n.VERY_HIGH]: null
                   }
                 }
               },
               prefabSize: this.prefabSize
-            }), this.noWaterHeightmapGenerator = new ⟦2-char-id⟧.h((0, ⟦2-char-id⟧.i)(⟦2-char-id⟧)), this.heightmapPerturb = new ⟦2-char-id⟧.j([{
+            }), this.noWaterHeightmapGenerator = new ⟦2-char-id⟧.d((0, ⟦2-char-id⟧.e)(⟦2-char-id⟧)), this.heightmapPerturb = new ⟦2-char-id⟧.g([{
               amplitude: 1,
               frequency: 1 / 14
             }, {
```

</details>

<details>
<summary>Hunk 302 · Change · +2 / -2</summary>

```diff
@@ -10681,13 +10681,13 @@
             }, {
               amplitude: 20,
               frequency: .004
-            }], `${UJ}HeightmapPerturb`);
+            }], `${yB}HeightmapPerturb`);
             let ⟦2-char-id⟧ = 0;
             for (const {
                 amplitude: ⟦2-char-id⟧
               }
               of this.heightmapPerturb.customOctaves) ⟦2-char-id⟧ += ⟦2-char-id⟧;
-            this.waterBodyGenerator = new ⟦2-char-id⟧(this.biomeSelector, this.noWaterHeightmapGenerator, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.needOutsideWaterDist, ⟦2-char-id⟧, null === (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ee) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧), this.caveDecorationGenerator = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.Xe.je) && void 0 !== ⟦2-char-id⟧ ? vJ : null), this.surfaceGenerator = new ⟦2-char-id⟧(⟦2-char-id⟧, this.biomeSelector, ⟦2-char-id⟧, ⟦2-char-id⟧), this.chunkFiller = new ⟦2-char-id⟧(⟦2-char-id⟧, this.biomeSelector, this.treeGenerator, this.prefabGenerator, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+            this.waterBodyGenerator = new ⟦2-char-id⟧(this.biomeSelector, this.noWaterHeightmapGenerator, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.needOutsideWaterDist, ⟦2-char-id⟧, null === (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.IB) || void 0 === ⟦2-char-id⟧ || ⟦2-char-id⟧), this.caveDecorationGenerator = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.cB.QB) && void 0 !== ⟦2-char-id⟧ ? mB : null), this.surfaceGenerator = new ⟦2-char-id⟧(⟦2-char-id⟧, this.biomeSelector, ⟦2-char-id⟧, ⟦2-char-id⟧), this.chunkFiller = new ⟦2-char-id⟧(⟦2-char-id⟧, this.biomeSelector, this.treeGenerator, this.prefabGenerator, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           getChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             try {
```

</details>

<details>
<summary>Hunk 303 · Change · +1 / -1</summary>

```diff
@@ -10706,7 +10706,7 @@
             return this.waterBodyGenerator.getDistToScatteredLakeEdge(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
           }
           getOresForChunkColumn(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = this.Kn,
+            const ⟦2-char-id⟧ = this.UD,
               ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧) * ⟦2-char-id⟧,
               ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / ⟦2-char-id⟧) * ⟦2-char-id⟧,
               ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧ / 2);
```

</details>

<details>
<summary>Hunk 304 · Change · +1 / -1</summary>

```diff
@@ -10724,7 +10724,7 @@
               }
               of ⟦2-char-id⟧) {
               var ⟦2-char-id⟧;
-              if ((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.key)) && void 0 !== ⟦2-char-id⟧ ? UJ : ⟦2-char-id⟧) !== ⟦2-char-id⟧) throw new Error(`A world-gen terrain built two biomes keyed "${eJ.key}"`);
+              if ((null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧.key)) && void 0 !== ⟦2-char-id⟧ ? yB : ⟦2-char-id⟧) !== ⟦2-char-id⟧) throw new Error(`A world-gen terrain built two biomes keyed "${pB.key}"`);
               ⟦2-char-id⟧.set(⟦2-char-id⟧.key, ⟦2-char-id⟧)
             }
             return [...⟦2-char-id⟧]
```

</details>

<details>
<summary>Hunk 305 · Change · +4 / -4</summary>

```diff
@@ -10734,14 +10734,14 @@
             for (const ⟦2-char-id⟧ of this.prefabGenerator.getLootPrefabCentres(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.biomeSelector)) {
               var ⟦2-char-id⟧;
               if (void 0 !== ⟦2-char-id⟧ && ⟦2-char-id⟧.prefab.name !== ⟦2-char-id⟧) continue;
-              const ⟦2-char-id⟧ = `${Math.floor(qJ.x/this.Kn)}|${Math.floor(qJ.z/this.Kn)}`,
-                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? XJ : [];
+              const ⟦2-char-id⟧ = `${Math.floor(YB.x/this.UD)}|${Math.floor(YB.z/this.UD)}`,
+                ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = ⟦2-char-id⟧.get(⟦2-char-id⟧)) && void 0 !== ⟦2-char-id⟧ ? lB : [];
               ⟦2-char-id⟧.push(⟦2-char-id⟧), ⟦2-char-id⟧.set(⟦2-char-id⟧, ⟦2-char-id⟧)
             }
             const ⟦2-char-id⟧ = [];
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.values()) {
-              const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧[0].x / this.Kn) * this.Kn,
-                ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧[0].z / this.Kn) * this.Kn,
+              const ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧[0].x / this.UD) * this.UD,
+                ⟦2-char-id⟧ = Math.floor(⟦2-char-id⟧[0].z / this.UD) * this.UD,
                 ⟦2-char-id⟧ = this.getClosestBiomesForChunk(⟦2-char-id⟧, ⟦2-char-id⟧),
                 {
                   nearestFixedPrefabInfoForChunk: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 306 · Change · +1 / -1</summary>

```diff
@@ -10762,7 +10762,7 @@
                   y: ⟦2-char-id⟧,
                   z: ⟦2-char-id⟧,
                   underground: ⟦2-char-id⟧,
-                  oU: ⟦2-char-id⟧.prefab.name
+                  fB: ⟦2-char-id⟧.prefab.name
                 })
               }
             }
```

</details>

<details>
<summary>Hunk 307 · Change · +1 / -1</summary>

```diff
@@ -10795,7 +10795,7 @@
               ⟦2-char-id⟧ = this.caveGenerator.getCaveHeightmapVals(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
               ⟦2-char-id⟧ = this.prefabGenerator.getPrefabsForChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, this.biomeSelector),
               ⟦2-char-id⟧ = this.treeGenerator.getTreesForChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧ + Math.floor(this.Kn / 2), ⟦2-char-id⟧ + Math.floor(this.Kn / 2))[0].biome.oreGenerator.getOreBlocksForChunk(⟦2-char-id⟧, ⟦2-char-id⟧),
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.getOrGenerate(⟦2-char-id⟧ + Math.floor(this.UD / 2), ⟦2-char-id⟧ + Math.floor(this.UD / 2))[0].biome.oreGenerator.getOreBlocksForChunk(⟦2-char-id⟧, ⟦2-char-id⟧),
               ⟦2-char-id⟧ = this.caveDecorationGenerator.getDecorationsForChunkColumn(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
               ⟦2-char-id⟧ = this.biomeSelector.getBiomeInfoForChunkFill(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
               ⟦2-char-id⟧ = this.surfaceGenerator.getInfoForChunkColumn(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
```

</details>

<details>
<summary>Hunk 308 · Change · +15 / -15</summary>

```diff
@@ -10813,32 +10813,32 @@
             return this.mostRecentlyAccessedChunkColumnPos[0] = ⟦2-char-id⟧, this.mostRecentlyAccessedChunkColumnPos[1] = ⟦2-char-id⟧, this.mostRecentlyAccessedChunkColumn = ⟦2-char-id⟧, this.chunkColumnInfos.set(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧
           }
           getClosestBiomesForChunk(⟦2-char-id⟧, ⟦2-char-id⟧) {
-            return ⟦2-char-id⟧.r.create(this.Kn, [⟦2-char-id⟧, ⟦2-char-id⟧], this.biomeSelector)
+            return ⟦2-char-id⟧.s.create(this.UD, [⟦2-char-id⟧, ⟦2-char-id⟧], this.biomeSelector)
           }
           getHeightMapVals(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.e(⟦2-char-id⟧, ⟦2-char-id⟧, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-            return ⟦2-char-id⟧.q.create(this.Kn, [⟦2-char-id⟧, ⟦2-char-id⟧], ⟦2-char-id⟧.f.NumFields, ⟦2-char-id⟧)
+            const ⟦2-char-id⟧ = new ⟦2-char-id⟧.c(⟦2-char-id⟧, ⟦2-char-id⟧, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+            return ⟦2-char-id⟧.p.create(this.UD, [⟦2-char-id⟧, ⟦2-char-id⟧], ⟦2-char-id⟧.h.NumFields, ⟦2-char-id⟧)
           }
         }
       },
-      59540: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59848: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          e: () => ⟦2-char-id⟧,
+          b: () => ⟦2-char-id⟧,
+          c: () => ⟦2-char-id⟧,
           g: () => ⟦2-char-id⟧,
-          j: () => ⟦2-char-id⟧,
+          i: () => ⟦2-char-id⟧,
           l: () => ⟦2-char-id⟧,
-          n: () => ⟦2-char-id⟧,
-          q: () => ⟦2-char-id⟧,
-          r: () => ⟦2-char-id⟧,
+          p: () => ⟦2-char-id⟧,
           s: () => ⟦2-char-id⟧,
-          u: () => ⟦2-char-id⟧,
-          x: () => ⟦2-char-id⟧,
-          A: () => ⟦2-char-id⟧,
-          C: () => ⟦2-char-id⟧,
+          w: () => ⟦2-char-id⟧,
+          z: () => ⟦2-char-id⟧,
           D: () => ⟦2-char-id⟧,
-          G: () => ⟦2-char-id⟧
+          H: () => ⟦2-char-id⟧,
+          J: () => ⟦2-char-id⟧,
+          L: () => ⟦2-char-id⟧,
+          M: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(36692),
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(36627),
           ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧);
         const ⟦2-char-id⟧ = .5 * (Math.sqrt(3) - 1),
           ⟦2-char-id⟧ = (3 - Math.sqrt(3)) / 6,
```

</details>

<details>
<summary>Hunk 309 · Change · +1 / -1</summary>

```diff
@@ -10851,7 +10851,7 @@
         const ⟦2-char-id⟧ = class {
           constructor() {
             let ⟦2-char-id⟧ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
-            const ⟦2-char-id⟧ = "function" == typeof ⟦2-char-id⟧ ? JJ : function(⟦2-char-id⟧) {
+            const ⟦2-char-id⟧ = "function" == typeof ⟦2-char-id⟧ ? BB : function(⟦2-char-id⟧) {
               let ⟦2-char-id⟧ = 0,
                 ⟦2-char-id⟧ = 0,
                 ⟦2-char-id⟧ = 0,
```

</details>

<details>
<summary>Hunk 310 · Change · +1 / -1</summary>

```diff
@@ -11060,7 +11060,7 @@
             return 27 * (⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧ + ⟦2-char-id⟧)
           }
         };
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59543);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(59857);
 
         function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
           return Math.abs(⟦2-char-id⟧[0] - ⟦2-char-id⟧) + Math.abs(⟦2-char-id⟧[1] - ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 311 · Change · +1 / -1</summary>

```diff
@@ -11089,7 +11089,7 @@
             ⟦2-char-id⟧ = ((⟦2-char-id⟧[0] - ⟦2-char-id⟧[0]) * (⟦2-char-id⟧[0] - ⟦2-char-id⟧[0]) + (⟦2-char-id⟧[1] - ⟦2-char-id⟧[1]) * (⟦2-char-id⟧[1] - ⟦2-char-id⟧[1])) / ⟦2-char-id⟧;
           let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧;
           return ⟦2-char-id⟧ < 0 ? (⟦2-char-id⟧ = ⟦2-char-id⟧[0], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = 0) : ⟦2-char-id⟧ > 1 ? (⟦2-char-id⟧ = ⟦2-char-id⟧[0], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧ = 1) : (⟦2-char-id⟧ = ⟦2-char-id⟧[0] + ⟦2-char-id⟧ * (⟦2-char-id⟧[0] - ⟦2-char-id⟧[0]), ⟦2-char-id⟧ = ⟦2-char-id⟧[1] + ⟦2-char-id⟧ * (⟦2-char-id⟧[1] - ⟦2-char-id⟧[1]), ⟦2-char-id⟧ = ⟦2-char-id⟧), {
-            DA: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
+            cg: ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧),
             fracAlong: ⟦2-char-id⟧,
             lineSegmentLength: Math.sqrt(⟦2-char-id⟧)
           }
```

</details>

<details>
<summary>Hunk 312 · Change · +1 / -1</summary>

```diff
@@ -11120,7 +11120,7 @@
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
             this.customOctaves = void 0, this._simplexes = [], console.assert(void 0 !== ⟦2-char-id⟧, "Seed must be defined"), this.customOctaves = ⟦2-char-id⟧;
-            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) this._simplexes.push(new ⟦2-char-id⟧(`${cJ}${ZJ}`))
+            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) this._simplexes.push(new ⟦2-char-id⟧(`${TB}${dB}`))
           }
           maxMagnitude() {
             let ⟦2-char-id⟧ = 1;
```

</details>

<details>
<summary>Hunk 313 · Change · +1 / -1</summary>

```diff
@@ -11145,7 +11145,7 @@
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             this.customOctaves = void 0, this._simplexes = [], this.remainingAmplitudes = void 0, this.threshold = void 0, console.assert(void 0 !== ⟦2-char-id⟧, "Seed must be defined"), this.customOctaves = ⟦2-char-id⟧, this.threshold = ⟦2-char-id⟧;
-            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) this._simplexes.push(new ⟦2-char-id⟧(`${ZJ}${UJ}`));
+            for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++) this._simplexes.push(new ⟦2-char-id⟧(`${dB}${yB}`));
             this.remainingAmplitudes = new Array(⟦2-char-id⟧.length);
             let ⟦2-char-id⟧ = 0;
             for (let ⟦2-char-id⟧ = this.remainingAmplitudes.length - 1; ⟦2-char-id⟧ >= 0; ⟦2-char-id⟧--) ⟦2-char-id⟧ += this.customOctaves[⟦2-char-id⟧].amplitude, this.remainingAmplitudes[⟦2-char-id⟧] = ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 314 · Change · +1 / -1</summary>

```diff
@@ -11153,7 +11153,7 @@
           getOctaves(⟦2-char-id⟧, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = 0;
             for (let ⟦2-char-id⟧ = 0; ⟦2-char-id⟧ < this.customOctaves.length; ⟦2-char-id⟧++) {
-              if (⟦2-char-id⟧ - this.remainingAmplitudes[⟦2-char-id⟧] > this.threshold.high || ⟦2-char-id⟧ + this.remainingAmplitudes[⟦2-char-id⟧] < this.threshold.low) return ⟦2-char-id⟧.c;
+              if (⟦2-char-id⟧ - this.remainingAmplitudes[⟦2-char-id⟧] > this.threshold.high || ⟦2-char-id⟧ + this.remainingAmplitudes[⟦2-char-id⟧] < this.threshold.low) return ⟦2-char-id⟧.b;
               const {
                 amplitude: ⟦2-char-id⟧,
                 frequency: ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 315 · Change · +1 / -1</summary>

```diff
@@ -11281,7 +11281,7 @@
           get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (this.innerContiguousArray.isInBounds(⟦2-char-id⟧, ⟦2-char-id⟧)) return this.innerContiguousArray.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
             const ⟦2-char-id⟧ = this.outerSparseArray.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-            if (void 0 === ⟦2-char-id⟧) throw new Error(`Number not found for x=${JJ}, z=${cJ}, thirdIndex=${ZJ}`);
+            if (void 0 === ⟦2-char-id⟧) throw new Error(`Number not found for x=${BB}, z=${TB}, thirdIndex=${dB}`);
             return ⟦2-char-id⟧
           }
         }
```

</details>

<details>
<summary>Hunk 316 · Change · +1 / -1</summary>

```diff
@@ -11330,7 +11330,7 @@
           get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (this.innerContiguousArray.isInBounds(⟦2-char-id⟧, ⟦2-char-id⟧)) return this.innerContiguousArray.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
             const ⟦2-char-id⟧ = this.outerSparseArray.get(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-            if (void 0 === ⟦2-char-id⟧) throw new Error(`Number not found for x=${JJ}, z=${cJ}, thirdIndex=${ZJ}, fourthIndex=${FJ}`);
+            if (void 0 === ⟦2-char-id⟧) throw new Error(`Number not found for x=${BB}, z=${TB}, thirdIndex=${dB}, fourthIndex=${VB}`);
             return ⟦2-char-id⟧
           }
         }
```

</details>

<details>
<summary>Hunk 317 · Change · +4 / -4</summary>

```diff
@@ -11360,14 +11360,14 @@
           }
         }
       },
-      59543: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59857: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
+          b: () => ⟦2-char-id⟧,
           c: () => ⟦2-char-id⟧,
           g: () => ⟦2-char-id⟧,
-          j: () => ⟦2-char-id⟧,
+          h: () => ⟦2-char-id⟧,
           l: () => ⟦2-char-id⟧,
-          n: () => ⟦2-char-id⟧,
-          p: () => ⟦2-char-id⟧,
+          o: () => ⟦2-char-id⟧,
           r: () => ⟦2-char-id⟧
         });
         const ⟦2-char-id⟧ = {
```

</details>

<details>
<summary>Hunk 318 · Change · +7 / -7</summary>

```diff
@@ -11381,14 +11381,14 @@
           ⟦2-char-id⟧ = -1⟦2-char-id⟧,
           ⟦2-char-id⟧ = 2
       },
-      59549: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      59859: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          c: () => ⟦2-char-id⟧,
-          f: () => ⟦2-char-id⟧,
-          i: () => ⟦2-char-id⟧,
-          m: () => ⟦2-char-id⟧,
-          q: () => ⟦2-char-id⟧,
-          r: () => ⟦2-char-id⟧
+          d: () => ⟦2-char-id⟧,
+          h: () => ⟦2-char-id⟧,
+          l: () => ⟦2-char-id⟧,
+          n: () => ⟦2-char-id⟧,
+          r: () => ⟦2-char-id⟧,
+          t: () => ⟦2-char-id⟧
         });
         let ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
             return ⟦2-char-id⟧[⟦2-char-id⟧.GroundHeight = 0] = "GroundHeight", ⟦2-char-id⟧[⟦2-char-id⟧.WaterHeight = 1] = "WaterHeight", ⟦2-char-id⟧[⟦2-char-id⟧.CavesAllowedBelowY = 2] = "CavesAllowedBelowY", ⟦2-char-id⟧[⟦2-char-id⟧.IsLake = 3] = "IsLake", ⟦2-char-id⟧[⟦2-char-id⟧.NumFields = 4] = "NumFields", ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 319 · Change · +4 / -4</summary>

```diff
@@ -11407,14 +11407,14 @@
             return ⟦2-char-id⟧[⟦2-char-id⟧.DistanceToNearestFixedPrefab = 0] = "DistanceToNearestFixedPrefab", ⟦2-char-id⟧[⟦2-char-id⟧.HeightOfNearestFixedPrefab = 1] = "HeightOfNearestFixedPrefab", ⟦2-char-id⟧[⟦2-char-id⟧.NumFields = 2] = "NumFields", ⟦2-char-id⟧
           }({})
       },
-      3735: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      3734: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          c: () => ⟦2-char-id⟧,
-          f: () => ⟦2-char-id⟧,
+          b: () => ⟦2-char-id⟧,
+          d: () => ⟦2-char-id⟧,
           g: () => ⟦2-char-id⟧,
           h: () => ⟦2-char-id⟧,
           l: () => ⟦2-char-id⟧,
-          p: () => ⟦2-char-id⟧
+          m: () => ⟦2-char-id⟧
         });
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 320 · Change · +3 / -3</summary>

```diff
@@ -11440,15 +11440,15 @@
         }
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧) {
-            if (this.distribution = void 0, ⟦2-char-id⟧.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(JJ)}`);
+            if (this.distribution = void 0, ⟦2-char-id⟧.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(BB)}`);
             const ⟦2-char-id⟧ = new Set;
             let ⟦2-char-id⟧ = 0;
             for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) {
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.value;
-              if (⟦2-char-id⟧.has(⟦2-char-id⟧)) throw new Error(`Values must be unique: ${JSON.stringify(JJ)}`);
+              if (⟦2-char-id⟧.has(⟦2-char-id⟧)) throw new Error(`Values must be unique: ${JSON.stringify(BB)}`);
               ⟦2-char-id⟧.add(⟦2-char-id⟧);
               const ⟦2-char-id⟧ = ⟦2-char-id⟧.weight;
-              if (⟦2-char-id⟧ <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(JJ)}`);
+              if (⟦2-char-id⟧ <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(BB)}`);
               ⟦2-char-id⟧ += ⟦2-char-id⟧
             }
             let ⟦2-char-id⟧ = 0;
```

</details>

<details>
<summary>Hunk 321 · Change · +1 / -1</summary>

```diff
@@ -11473,7 +11473,7 @@
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-            if (this.offset = void 0, this.multiplier = void 0, ⟦2-char-id⟧ > ⟦2-char-id⟧) throw new Error(`Min must be less than or equal to Max, but Min=${JJ} and Max=${cJ}`);
+            if (this.offset = void 0, this.multiplier = void 0, ⟦2-char-id⟧ > ⟦2-char-id⟧) throw new Error(`Min must be less than or equal to Max, but Min=${BB} and Max=${TB}`);
             ⟦2-char-id⟧ ? (this.multiplier = ⟦2-char-id⟧ - ⟦2-char-id⟧, this.offset = ⟦2-char-id⟧) : (this.multiplier = ⟦2-char-id⟧ - ⟦2-char-id⟧, this.offset = ⟦2-char-id⟧)
           }
           sample(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 322 · Change · +1 / -1</summary>

```diff
@@ -11483,7 +11483,7 @@
         class ⟦2-char-id⟧ {
           constructor(⟦2-char-id⟧, ⟦2-char-id⟧) {
             let ⟦2-char-id⟧ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-            if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), !Number.isInteger(⟦2-char-id⟧) || !Number.isInteger(⟦2-char-id⟧)) throw new Error(`Min and Max must be integers, but Min=${JJ} and Max=${cJ}`)
+            if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧), !Number.isInteger(⟦2-char-id⟧) || !Number.isInteger(⟦2-char-id⟧)) throw new Error(`Min and Max must be integers, but Min=${BB} and Max=${TB}`)
           }
           sample(⟦2-char-id⟧) {
             const ⟦2-char-id⟧ = this.uniformRealDistribution.sample(⟦2-char-id⟧);
```

</details>

<details>
<summary>Hunk 323 · Change · +10 / -10</summary>

```diff
@@ -11499,20 +11499,20 @@
           }
         }
       },
-      535: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      572: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-          B: () => ⟦2-char-id⟧,
-          E: () => ⟦2-char-id⟧,
-          I: () => ⟦2-char-id⟧,
-          L: () => ⟦2-char-id⟧,
-          P: () => ⟦2-char-id⟧,
-          Y: () => ⟦2-char-id⟧,
+          D: () => ⟦2-char-id⟧,
+          F: () => ⟦2-char-id⟧,
+          M: () => ⟦2-char-id⟧,
+          W: () => ⟦2-char-id⟧,
           d: () => ⟦2-char-id⟧,
-          i: () => ⟦2-char-id⟧,
+          j: () => ⟦2-char-id⟧,
           m: () => ⟦2-char-id⟧,
-          x: () => ⟦2-char-id⟧
+          u: () => ⟦2-char-id⟧,
+          v: () => ⟦2-char-id⟧,
+          z: () => ⟦2-char-id⟧
         });
-        var ⟦2-char-id⟧ = ⟦2-char-id⟧(538);
+        var ⟦2-char-id⟧ = ⟦2-char-id⟧(581);
         const ⟦2-char-id⟧ = 36;
         let ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
             return ⟦2-char-id⟧[⟦2-char-id⟧.Maple = 0] = "Maple", ⟦2-char-id⟧[⟦2-char-id⟧.Pine = 1] = "Pine", ⟦2-char-id⟧[⟦2-char-id⟧.Plum = 2] = "Plum", ⟦2-char-id⟧[⟦2-char-id⟧.Cedar = 4] = "Cedar", ⟦2-char-id⟧[⟦2-char-id⟧.Aspen = 5] = "Aspen", ⟦2-char-id⟧[⟦2-char-id⟧.Jungle = 6] = "Jungle", ⟦2-char-id⟧[⟦2-char-id⟧.Palm = 7] = "Palm", ⟦2-char-id⟧[⟦2-char-id⟧.AutumnMaple = 8] = "AutumnMaple", ⟦2-char-id⟧[⟦2-char-id⟧.Pear = 9] = "Pear", ⟦2-char-id⟧[⟦2-char-id⟧.Cherry = 10] = "Cherry", ⟦2-char-id⟧[⟦2-char-id⟧.Spectral = 11] = "Spectral", ⟦2-char-id⟧[⟦2-char-id⟧.Mango = 12] = "Mango", ⟦2-char-id⟧[⟦2-char-id⟧.AutumnAspen = 13] = "AutumnAspen", ⟦2-char-id⟧[⟦2-char-id⟧.Dead = 14] = "Dead", ⟦2-char-id⟧[⟦2-char-id⟧.FallenLog = 15] = "FallenLog", ⟦2-char-id⟧
```

</details>

<details>
<summary>Hunk 324 · Change · +2 / -2</summary>

```diff
@@ -11550,11 +11550,11 @@
           return null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.id
         }
       },
-      538: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+      581: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
         ⟦2-char-id⟧.d(⟦2-char-id⟧, {
           b: () => ⟦2-char-id⟧
         });
-        const ⟦2-char-id⟧ = 864
+        const ⟦2-char-id⟧ = 865
       }
     },
     ⟦2-char-id⟧ = {};
```

</details>

<details>
<summary>Hunk 325 · Change · +6 / -6</summary>

```diff
@@ -11577,12 +11577,12 @@
       enumerable: !0,
       get: ⟦2-char-id⟧[⟦2-char-id⟧]
     })
-  }, ⟦2-char-id⟧.f = {}, ⟦2-char-id⟧.e = ⟦2-char-id⟧ => Promise.all(Object.keys(⟦2-char-id⟧.f).reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => (⟦2-char-id⟧.f[⟦2-char-id⟧](⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧)), [])), ⟦2-char-id⟧.u = ⟦2-char-id⟧ => "static/js/symm5." + (61 === ⟦2-char-id⟧ ? "worldgenTables" : ⟦2-char-id⟧) + "." + {
-    61: "7efed3f9",
-    64: "7c5afc2a",
-    65: "daa304d7",
-    66: "b2357459",
-    67: "e0d94906"
+  }, ⟦2-char-id⟧.f = {}, ⟦2-char-id⟧.e = ⟦2-char-id⟧ => Promise.all(Object.keys(⟦2-char-id⟧.f).reduce(((⟦2-char-id⟧, ⟦2-char-id⟧) => (⟦2-char-id⟧.f[⟦2-char-id⟧](⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧)), [])), ⟦2-char-id⟧.u = ⟦2-char-id⟧ => "static/js/l9xvfg." + (61 === ⟦2-char-id⟧ ? "worldgenTables" : ⟦2-char-id⟧) + "." + {
+    61: "8f58d56a",
+    64: "4f24f57a",
+    65: "3f251c7f",
+    66: "e4b1a601",
+    67: "8e7d0c2e"
   } [⟦2-char-id⟧] + ".chunk.js", ⟦2-char-id⟧.miniCssF = ⟦2-char-id⟧ => {}, ⟦2-char-id⟧.o = (⟦2-char-id⟧, ⟦2-char-id⟧) => Object.prototype.hasOwnProperty.call(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧.r = ⟦2-char-id⟧ => {
     "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(⟦2-char-id⟧, Symbol.toStringTag, {
       value: "Module"
```

</details>

<details>
<summary>Hunk 326 · Change · +1 / -1</summary>

```diff
@@ -11653,7 +11653,7 @@
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
     const ⟦2-char-id⟧ = Math.trunc(⟦2-char-id⟧) || 0,
-      ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? this.length + cJ : ⟦2-char-id⟧;
+      ⟦2-char-id⟧ = ⟦2-char-id⟧ < 0 ? this.length + TB : ⟦2-char-id⟧;
     return ⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ >= this.length ? void 0 : this[⟦2-char-id⟧]
   }
 
```

</details>

<details>
<summary>Hunk 327 · Change · +15 / -15</summary>

```diff
@@ -11668,27 +11668,27 @@
     return -1 === ⟦2-char-id⟧ ? void 0 : this[⟦2-char-id⟧]
   }
   ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-    xf: () => ⟦2-char-id⟧,
-    rf: () => ⟦2-char-id⟧,
-    CY: () => ⟦2-char-id⟧,
+    DH: () => ⟦2-char-id⟧,
+    uH: () => ⟦2-char-id⟧,
+    Ok: () => ⟦2-char-id⟧,
     default: () => ⟦2-char-id⟧,
     initSync: () => ⟦2-char-id⟧,
-    uY: () => ⟦2-char-id⟧,
-    iY: () => ⟦2-char-id⟧,
-    RY: () => ⟦2-char-id⟧,
-    LY: () => ⟦2-char-id⟧,
-    aY: () => ⟦2-char-id⟧,
-    BY: () => ⟦2-char-id⟧,
-    tY: () => ⟦2-char-id⟧,
-    oY: () => ⟦2-char-id⟧,
-    Fh: () => ⟦2-char-id⟧,
-    eh: () => ⟦2-char-id⟧,
-    Xh: () => ⟦2-char-id⟧
+    Dk: () => ⟦2-char-id⟧,
+    uk: () => ⟦2-char-id⟧,
+    Hk: () => ⟦2-char-id⟧,
+    Ek: () => ⟦2-char-id⟧,
+    vk: () => ⟦2-char-id⟧,
+    mk: () => ⟦2-char-id⟧,
+    ik: () => ⟦2-char-id⟧,
+    Nk: () => ⟦2-char-id⟧,
+    Mk: () => ⟦2-char-id⟧,
+    wk: () => ⟦2-char-id⟧,
+    Uk: () => ⟦2-char-id⟧
   }), ⟦2-char-id⟧(Object, "hasOwn", ((⟦2-char-id⟧, ⟦2-char-id⟧) => Object.prototype.hasOwnProperty.call(⟦2-char-id⟧, ⟦2-char-id⟧)));
   const ⟦2-char-id⟧ = Object.getPrototypeOf(Uint8Array.prototype);
   for (const ⟦2-char-id⟧ of [Array.prototype, ⟦2-char-id⟧]) ⟦2-char-id⟧(⟦2-char-id⟧, "at", ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧, "findLast", ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧, "findLastIndex", ⟦2-char-id⟧);
   ⟦2-char-id⟧(String.prototype, "at", ⟦2-char-id⟧);
-  var ⟦2-char-id⟧ = ⟦2-char-id⟧(36692),
+  var ⟦2-char-id⟧ = ⟦2-char-id⟧(36627),
     ⟦2-char-id⟧ = ⟦2-char-id⟧.n(⟦2-char-id⟧);
   class ⟦2-char-id⟧ extends Error {
     retryable;
```

</details>

<details>
<summary>Hunk 328 · Change · +2 / -2</summary>

```diff
@@ -11723,12 +11723,12 @@
   }
 
   function ⟦2-char-id⟧() {
-    return null === ⟦2-char-id⟧ ? "not failed" : `${GJ}: ${(JJ=fJ)instanceof Error?`${⟦2-char-id⟧.name}: ${⟦2-char-id⟧.message}`:String(JJ)}`;
+    return null === ⟦2-char-id⟧ ? "not failed" : `${uB}: ${(BB=HB)instanceof Error?`${⟦2-char-id⟧.name}: ${⟦2-char-id⟧.message}`:String(BB)}`;
     var ⟦2-char-id⟧
   }
 
   function ⟦2-char-id⟧() {
-    if (!⟦2-char-id⟧()) throw new Error(`Bloxd wasm is not ready (${SJ()}): check isBloxdWasmReady() first`);
+    if (!⟦2-char-id⟧()) throw new Error(`Bloxd wasm is not ready (${zB()}): check isBloxdWasmReady() first`);
     return ⟦2-char-id⟧
   }
 
```

</details>

<details>
<summary>Hunk 329 · Change · +1 / -1</summary>

```diff
@@ -11766,7 +11766,7 @@
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
     ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.memory;
     const {
-      Fh: ⟦2-char-id⟧
+      Mk: ⟦2-char-id⟧
     } = ⟦2-char-id⟧;
     ⟦2-char-id⟧ = "function" === typeof ⟦2-char-id⟧ ? ⟦2-char-id⟧() : 0, ⟦2-char-id⟧ = "ready",
       function() {
```

</details>

<details>
<summary>Hunk 330 · Change · +1 / -1</summary>

```diff
@@ -11787,7 +11787,7 @@
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-    ⟦2-char-id⟧ = "failed", ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, console.error(`Bloxd wasm failed (${cJ}):`, ⟦2-char-id⟧);
+    ⟦2-char-id⟧ = "failed", ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧, console.error(`Bloxd wasm failed (${TB}):`, ⟦2-char-id⟧);
     const ⟦2-char-id⟧ = [...⟦2-char-id⟧];
     ⟦2-char-id⟧.clear();
     for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 331 · Change · +4 / -4</summary>

```diff
@@ -11806,12 +11806,12 @@
     const ⟦2-char-id⟧ = () => ⟦2-char-id⟧();
     return {
       memoryBytes: () => ⟦2-char-id⟧().buffer.byteLength,
-      reserveUpFront: ⟦2-char-id⟧ => ⟦2-char-id⟧().LY(⟦2-char-id⟧),
-      reserveAhead: ⟦2-char-id⟧ => ⟦2-char-id⟧().RY(⟦2-char-id⟧),
+      reserveUpFront: ⟦2-char-id⟧ => ⟦2-char-id⟧().Ek(⟦2-char-id⟧),
+      reserveAhead: ⟦2-char-id⟧ => ⟦2-char-id⟧().Hk(⟦2-char-id⟧),
       setCeiling: ⟦2-char-id⟧ => {
-        ⟦2-char-id⟧().aY(⟦2-char-id⟧)
+        ⟦2-char-id⟧().vk(⟦2-char-id⟧)
       },
-      lowWater: () => ⟦2-char-id⟧[⟦2-char-id⟧().iY()] ?? "none",
+      lowWater: () => ⟦2-char-id⟧[⟦2-char-id⟧().uk()] ?? "none",
       stats: () => function(⟦2-char-id⟧) {
         const ⟦2-char-id⟧ = new Uint32Array(⟦2-char-id⟧().buffer, ⟦2-char-id⟧, 17),
           ⟦2-char-id⟧ = ⟦2-char-id⟧ => ⟦2-char-id⟧[⟦2-char-id⟧] ?? 0,
```

</details>

<details>
<summary>Hunk 332 · Change · +3 / -3</summary>

```diff
@@ -11834,9 +11834,9 @@
           grownBytes: ⟦2-char-id⟧(12),
           allocationsRefused: ⟦2-char-id⟧(16)
         }
-      }(⟦2-char-id⟧().BY()),
-      takeBallast: () => ⟦2-char-id⟧().tY(),
-      takePressure: () => ⟦2-char-id⟧().oY()
+      }(⟦2-char-id⟧().mk()),
+      takeBallast: () => ⟦2-char-id⟧().ik(),
+      takePressure: () => ⟦2-char-id⟧().Nk()
     }
   }
   class ⟦2-char-id⟧ {
```

</details>

<details>
<summary>Hunk 333 · Change · +8 / -8</summary>

```diff
@@ -11846,28 +11846,28 @@
     }
     free() {
       const ⟦2-char-id⟧ = this.__destroy_into_raw();
-      ⟦2-char-id⟧.aYUy(⟦2-char-id⟧, 0)
+      ⟦2-char-id⟧.LojT(⟦2-char-id⟧, 0)
     }
     encode(⟦2-char-id⟧) {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.ovx9, ⟦2-char-id⟧.O494),
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.Y7k4, ⟦2-char-id⟧.zwXj),
         ⟦2-char-id⟧ = ⟦2-char-id⟧;
-      ⟦2-char-id⟧.lE1v(this.__wbg_ptr, ⟦2-char-id⟧, ⟦2-char-id⟧)
+      ⟦2-char-id⟧.bS1e(this.__wbg_ptr, ⟦2-char-id⟧, ⟦2-char-id⟧)
     }
     ⟦2-char-id⟧() {
-      return ⟦2-char-id⟧.YDyj(this.__wbg_ptr) >>> 0
+      return ⟦2-char-id⟧.Wprr(this.__wbg_ptr) >>> 0
     }
     constructor() {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.h24G();
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.vF5o();
       return this.__wbg_ptr = ⟦2-char-id⟧, ⟦2-char-id⟧.register(this, this.__wbg_ptr, this), this
     }
     ⟦2-char-id⟧() {
-      return ⟦2-char-id⟧.Y9O1(this.__wbg_ptr) >>> 0
+      return ⟦2-char-id⟧.Xne7(this.__wbg_ptr) >>> 0
     }
     ⟦2-char-id⟧() {
-      return ⟦2-char-id⟧.OuEt(this.__wbg_ptr) >>> 0
+      return ⟦2-char-id⟧.WxcX(this.__wbg_ptr) >>> 0
     }
     ⟦2-char-id⟧() {
-      return ⟦2-char-id⟧.NJhr(this.__wbg_ptr) >>> 0
+      return ⟦2-char-id⟧.K6RZ(this.__wbg_ptr) >>> 0
     }
   }
   Symbol.dispose && (⟦2-char-id⟧.prototype[Symbol.dispose] = ⟦2-char-id⟧.prototype.free);
```

</details>

<details>
<summary>Hunk 334 · Change · +27 / -27</summary>

```diff
@@ -11878,104 +11878,104 @@
     }
     free() {
       const ⟦2-char-id⟧ = this.__destroy_into_raw();
-      ⟦2-char-id⟧.KGJr(⟦2-char-id⟧, 0)
+      ⟦2-char-id⟧.q9rw(⟦2-char-id⟧, 0)
     }
     init(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.lyfZ(this.__wbg_ptr, ⟦2-char-id⟧) >>> 0
+      return ⟦2-char-id⟧.EMTl(this.__wbg_ptr, ⟦2-char-id⟧) >>> 0
     }
     ⟦2-char-id⟧(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.iMNZ(this.__wbg_ptr, ⟦2-char-id⟧) >>> 0
+      return ⟦2-char-id⟧.boEO(this.__wbg_ptr, ⟦2-char-id⟧) >>> 0
     }
     constructor() {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.VvSg();
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.d2i3();
       return this.__wbg_ptr = ⟦2-char-id⟧, ⟦2-char-id⟧.register(this, this.__wbg_ptr, this), this
     }
     ⟦2-char-id⟧() {
-      return ⟦2-char-id⟧.lmph(this.__wbg_ptr) >>> 0
+      return ⟦2-char-id⟧.Fv8h(this.__wbg_ptr) >>> 0
     }
     ⟦2-char-id⟧() {
-      return ⟦2-char-id⟧.QiBs(this.__wbg_ptr) >>> 0
+      return ⟦2-char-id⟧.Wx5g(this.__wbg_ptr) >>> 0
     }
     run(⟦2-char-id⟧) {
-      return ⟦2-char-id⟧.zBRH(this.__wbg_ptr, ⟦2-char-id⟧) >>> 0
+      return ⟦2-char-id⟧.IpRP(this.__wbg_ptr, ⟦2-char-id⟧) >>> 0
     }
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-    const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.ovx9, ⟦2-char-id⟧.O494),
+    const ⟦2-char-id⟧ = ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.Y7k4, ⟦2-char-id⟧.zwXj),
       ⟦2-char-id⟧ = ⟦2-char-id⟧,
-      ⟦2-char-id⟧ = ⟦2-char-id⟧.fCUR(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
+      ⟦2-char-id⟧ = ⟦2-char-id⟧.zPm9(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
     if (⟦2-char-id⟧[1]) throw ⟦2-char-id⟧(⟦2-char-id⟧[0])
   }
 
   function ⟦2-char-id⟧() {
-    ⟦2-char-id⟧.EKff()
+    ⟦2-char-id⟧.ROPr()
   }
 
   function ⟦2-char-id⟧() {
-    return ⟦2-char-id⟧.nfKb() >>> 0
+    return ⟦2-char-id⟧.Bsyr() >>> 0
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
-    return 0 !== ⟦2-char-id⟧.T5aK(⟦2-char-id⟧)
+    return 0 !== ⟦2-char-id⟧.l6Mj(⟦2-char-id⟧)
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
-    return 0 !== ⟦2-char-id⟧.Uxfm(⟦2-char-id⟧)
+    return 0 !== ⟦2-char-id⟧.KZuC(⟦2-char-id⟧)
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
-    ⟦2-char-id⟧.Ijnj(⟦2-char-id⟧)
+    ⟦2-char-id⟧.Bnrl(⟦2-char-id⟧)
   }
 
   function ⟦2-char-id⟧() {
-    return ⟦2-char-id⟧.Ovh2() >>> 0
+    return ⟦2-char-id⟧.g6ds() >>> 0
   }
 
   function ⟦2-char-id⟧() {
-    return ⟦2-char-id⟧.eK0Z() >>> 0
+    return ⟦2-char-id⟧.lvzK() >>> 0
   }
 
   function ⟦2-char-id⟧() {
-    return 0 !== ⟦2-char-id⟧.fiQd()
+    return 0 !== ⟦2-char-id⟧.KEUs()
   }
 
   function ⟦2-char-id⟧() {
-    return ⟦2-char-id⟧.yWdi() >>> 0
+    return ⟦2-char-id⟧.zOp6() >>> 0
   }
 
   function ⟦2-char-id⟧() {
     let ⟦2-char-id⟧, ⟦2-char-id⟧;
     try {
-      const ⟦2-char-id⟧ = ⟦2-char-id⟧.C6IM();
+      const ⟦2-char-id⟧ = ⟦2-char-id⟧.KG4I();
       return ⟦2-char-id⟧ = ⟦2-char-id⟧[0], ⟦2-char-id⟧ = ⟦2-char-id⟧[1], ⟦2-char-id⟧(⟦2-char-id⟧[0], ⟦2-char-id⟧[1])
     } finally {
-      ⟦2-char-id⟧.WhZy(⟦2-char-id⟧, ⟦2-char-id⟧, 1)
+      ⟦2-char-id⟧.EALn(⟦2-char-id⟧, ⟦2-char-id⟧, 1)
     }
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
-    ⟦2-char-id⟧.DMUm(⟦2-char-id⟧(⟦2-char-id⟧))
+    ⟦2-char-id⟧.i25b(⟦2-char-id⟧(⟦2-char-id⟧))
   }
 
   function ⟦2-char-id⟧() {
     return {
       __proto__: null,
-      ciJI: {
+      Tl1B: {
         __proto__: null,
-        k5cX: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+        W7nZ: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           return ⟦2-char-id⟧(Error(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)))
         },
-        d2nM: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+        PIhi: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           throw new Error(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))
         },
-        zrtr: function(⟦2-char-id⟧) {
+        Dggo: function(⟦2-char-id⟧) {
           ⟦2-char-id⟧(⟦2-char-id⟧).call()
         },
-        eav1: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+        eqTe: function(⟦2-char-id⟧, ⟦2-char-id⟧) {
           console.error(⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧))
         },
-        eZrm: function(⟦2-char-id⟧) {
+        NtSf: function(⟦2-char-id⟧) {
           ⟦2-char-id⟧(⟦2-char-id⟧)
         }
       }
```

</details>

<details>
<summary>Hunk 335 · Change · +2 / -2</summary>

```diff
@@ -11985,11 +11985,11 @@
   const ⟦2-char-id⟧ = "undefined" === typeof FinalizationRegistry ? {
       register: () => {},
       unregister: () => {}
-    } : new FinalizationRegistry((⟦2-char-id⟧ => ⟦2-char-id⟧.aYUy(⟦2-char-id⟧, 1))),
+    } : new FinalizationRegistry((⟦2-char-id⟧ => ⟦2-char-id⟧.LojT(⟦2-char-id⟧, 1))),
     ⟦2-char-id⟧ = "undefined" === typeof FinalizationRegistry ? {
       register: () => {},
       unregister: () => {}
-    } : new FinalizationRegistry((⟦2-char-id⟧ => ⟦2-char-id⟧.KGJr(⟦2-char-id⟧, 1)));
+    } : new FinalizationRegistry((⟦2-char-id⟧ => ⟦2-char-id⟧.q9rw(⟦2-char-id⟧, 1)));
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
     ⟦2-char-id⟧ === ⟦2-char-id⟧.length && ⟦2-char-id⟧.push(⟦2-char-id⟧.length + 1);
```

</details>

<details>
<summary>Hunk 336 · Change · +1 / -1</summary>

```diff
@@ -12066,7 +12066,7 @@
   let ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ = 0;
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-    return ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.exports, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = null, ⟦2-char-id⟧.r089(), ⟦2-char-id⟧
+    return ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧.exports, ⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = null, ⟦2-char-id⟧.FYeR(), ⟦2-char-id⟧
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 337 · Change · +1 / -1</summary>

```diff
@@ -12090,7 +12090,7 @@
       module: ⟦2-char-id⟧
     } = await async function(⟦2-char-id⟧, ⟦2-char-id⟧) {
       if ("function" === typeof Response && ⟦2-char-id⟧ instanceof Response) {
-        if (!⟦2-char-id⟧.ok) throw new Error(`failed to fetch Wasm: ${JJ.status} ${JJ.statusText} fetching '${JJ.url}'`);
+        if (!⟦2-char-id⟧.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
         if ("function" === typeof WebAssembly.instantiateStreaming) try {
           return await WebAssembly.instantiateStreaming(⟦2-char-id⟧, ⟦2-char-id⟧)
         } catch (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 338 · Change · +16 / -16</summary>

```diff
@@ -12120,58 +12120,58 @@
 
   function ⟦2-char-id⟧() {
     return function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-      if (!⟦2-char-id⟧()) throw new Error(`Bloxd wasm is not ready (${SJ()}): check isBloxdWasmReady() first`);
-      if (⟦2-char-id⟧ !== ⟦2-char-id⟧) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${cJ}`)
+      if (!⟦2-char-id⟧()) throw new Error(`Bloxd wasm is not ready (${zB()}): check isBloxdWasmReady() first`);
+      if (⟦2-char-id⟧ !== ⟦2-char-id⟧) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${TB}`)
     }(⟦2-char-id⟧, "the wasm client's workers' exports"), ⟦2-char-id⟧
   }
-  var ⟦2-char-id⟧ = ⟦2-char-id⟧(535);
+  var ⟦2-char-id⟧ = ⟦2-char-id⟧(572);
   class ⟦2-char-id⟧ {
     constructor(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
       var ⟦2-char-id⟧, ⟦2-char-id⟧;
       this.defaultGenerator = void 0, this.layerEntries = void 0;
       const {
         WorldGenerator: ⟦2-char-id⟧
-      } = ⟦2-char-id⟧(59630), ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
+      } = ⟦2-char-id⟧(59932), ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
         if (null === ⟦2-char-id⟧) return null;
-        for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.Ce) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
+        for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.kT) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
         const ⟦2-char-id⟧ = ⟦2-char-id⟧.terrain;
         if (null === ⟦2-char-id⟧) return {
-          Ce: ⟦2-char-id⟧.Ce,
+          kT: ⟦2-char-id⟧.kT,
           buildBiomes: null
         };
         const ⟦2-char-id⟧ = Object.hasOwn(⟦2-char-id⟧, ⟦2-char-id⟧.name) ? ⟦2-char-id⟧[⟦2-char-id⟧.name] : void 0;
         if (void 0 === ⟦2-char-id⟧) {
           const ⟦2-char-id⟧ = Object.keys(⟦2-char-id⟧);
-          throw new Error(`Custom world-gen terrain "${FJ.name}" is not in this generator's catalogue (${JJ.length>0?JJ.join(", "):"empty"})`)
+          throw new Error(`Custom world-gen terrain "${VB.name}" is not in this generator's catalogue (${BB.length>0?BB.join(", "):"empty"})`)
         }
         const ⟦2-char-id⟧ = ⟦2-char-id⟧(),
           ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
             if (!⟦2-char-id⟧.parseOptions) {
-              if (null !== ⟦2-char-id⟧.Te) throw new Error(`Custom world-gen terrain "${JJ.name}" takes no options`);
+              if (null !== ⟦2-char-id⟧.oT) throw new Error(`Custom world-gen terrain "${BB.name}" takes no options`);
               return null
             }
             let ⟦2-char-id⟧ = null;
-            if (null !== ⟦2-char-id⟧.Te) try {
-              ⟦2-char-id⟧ = JSON.parse(⟦2-char-id⟧.Te)
+            if (null !== ⟦2-char-id⟧.oT) try {
+              ⟦2-char-id⟧ = JSON.parse(⟦2-char-id⟧.oT)
             } catch (⟦2-char-id⟧) {
-              throw new Error(`Custom world-gen terrain "${JJ.name}" has invalid optionsJson: ${String(FJ)}`, {
+              throw new Error(`Custom world-gen terrain "${BB.name}" has invalid optionsJson: ${String(VB)}`, {
                 cause: ⟦2-char-id⟧
               })
             }
             return ⟦2-char-id⟧.parseOptions(⟦2-char-id⟧)
           }(⟦2-char-id⟧, ⟦2-char-id⟧);
         return {
-          Ce: ⟦2-char-id⟧.Ce,
+          kT: ⟦2-char-id⟧.kT,
           buildBiomes: ⟦2-char-id⟧ => ⟦2-char-id⟧.buildBiomes(⟦2-char-id⟧, ⟦2-char-id⟧)
         }
-      }(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.ze) && void 0 !== ⟦2-char-id⟧ ? YJ : null, ⟦2-char-id⟧, ⟦2-char-id⟧);
+      }(null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.JT) && void 0 !== ⟦2-char-id⟧ ? oB : null, ⟦2-char-id⟧, ⟦2-char-id⟧);
       this.defaultGenerator = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null, ⟦2-char-id⟧, ⟦2-char-id⟧);
-      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.layers) && void 0 !== ⟦2-char-id⟧ ? hJ : [];
+      const ⟦2-char-id⟧ = null !== (⟦2-char-id⟧ = null === ⟦2-char-id⟧ || void 0 === ⟦2-char-id⟧ ? void 0 : ⟦2-char-id⟧.layers) && void 0 !== ⟦2-char-id⟧ ? kB : [];
       ! function(⟦2-char-id⟧, ⟦2-char-id⟧) {
         for (const ⟦2-char-id⟧ of ⟦2-char-id⟧) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧);
-        const ⟦2-char-id⟧ = [...⟦2-char-id⟧].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.Ze - ⟦2-char-id⟧.Ze));
+        const ⟦2-char-id⟧ = [...⟦2-char-id⟧].sort(((⟦2-char-id⟧, ⟦2-char-id⟧) => ⟦2-char-id⟧.UB - ⟦2-char-id⟧.UB));
         for (let ⟦2-char-id⟧ = 1; ⟦2-char-id⟧ < ⟦2-char-id⟧.length; ⟦2-char-id⟧++)
-          if (⟦2-char-id⟧[⟦2-char-id⟧].Ze < ⟦2-char-id⟧[⟦2-char-id⟧ - 1].Fe) throw new Error(`Custom world-gen layers overlap: [${ZJ[FJ-1].Ze}, ${ZJ[FJ-1].Fe}) and [${ZJ[FJ].Ze}, ${ZJ[FJ].Fe})`)
+          if (⟦2-char-id⟧[⟦2-char-id⟧].UB < ⟦2-char-id⟧[⟦2-char-id⟧ - 1].FB) throw new Error(`Custom world-gen layers overlap: [${dB[VB-1].UB}, ${dB[VB-1].FB}) and [${dB[VB].UB}, ${dB[VB].FB})`)
       }(⟦2-char-id⟧, ⟦2-char-id⟧), this.layerEntries = ⟦2-char-id⟧.map((⟦2-char-id⟧ => ({
         layer: ⟦2-char-id⟧,
         generator: new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, null, ⟦2-char-id⟧)
```

</details>

<details>
<summary>Hunk 339 · Change · +1 / -1</summary>

```diff
@@ -12183,7 +12183,7 @@
           generator: ⟦2-char-id⟧
         }
         of this.layerEntries)
-        if (⟦2-char-id⟧ >= ⟦2-char-id⟧.Ze && ⟦2-char-id⟧ < ⟦2-char-id⟧.Fe) return ⟦2-char-id⟧.getChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧.Ue, ⟦2-char-id⟧);
+        if (⟦2-char-id⟧ >= ⟦2-char-id⟧.UB && ⟦2-char-id⟧ < ⟦2-char-id⟧.FB) return ⟦2-char-id⟧.getChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧ - ⟦2-char-id⟧.rB, ⟦2-char-id⟧);
       return this.defaultGenerator.getChunk(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
     }
     getBiomeSelector() {
```

</details>

<details>
<summary>Hunk 340 · Change · +46 / -45</summary>

```diff
@@ -12201,96 +12201,97 @@
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-    if (⟦2-char-id⟧.Ze >= ⟦2-char-id⟧.Fe) throw new Error(`Custom world-gen layer has minY (${JJ.Ze}) >= maxY (${JJ.Fe})`);
-    if (⟦2-char-id⟧.Ze % ⟦2-char-id⟧.E !== 0 || ⟦2-char-id⟧.Fe % ⟦2-char-id⟧.E !== 0 || ⟦2-char-id⟧.Ue % ⟦2-char-id⟧.E !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${Vc.E}); got minY=${JJ.Ze}, maxY=${JJ.Fe}, groundY=${JJ.Ue}`);
+    if (⟦2-char-id⟧.UB >= ⟦2-char-id⟧.FB) throw new Error(`Custom world-gen layer has minY (${BB.UB}) >= maxY (${BB.FB})`);
+    if (⟦2-char-id⟧.UB % ⟦2-char-id⟧.z !== 0 || ⟦2-char-id⟧.FB % ⟦2-char-id⟧.z !== 0 || ⟦2-char-id⟧.rB % ⟦2-char-id⟧.z !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${fT.z}); got minY=${BB.UB}, maxY=${BB.FB}, groundY=${BB.rB}`);
     if (function(⟦2-char-id⟧, ⟦2-char-id⟧) {
-        if (void 0 === (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.qe, ⟦2-char-id⟧)) throw new Error(`Custom world-gen caves lavaPitBlock "${JJ.qe}" not found in blockMetadata`);
-        if (⟦2-char-id⟧.je)
-          for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.je) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
-      }(⟦2-char-id⟧.Xe, ⟦2-char-id⟧), 0 === ⟦2-char-id⟧.Ke.length) throw new Error("Custom world-gen layer must have at least one biome");
+        if (void 0 === (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.PB, ⟦2-char-id⟧)) throw new Error(`Custom world-gen caves lavaPitBlock "${BB.PB}" not found in blockMetadata`);
+        if (⟦2-char-id⟧.QB)
+          for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.QB) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
+      }(⟦2-char-id⟧.cB, ⟦2-char-id⟧), 0 === ⟦2-char-id⟧.bB.length) throw new Error("Custom world-gen layer must have at least one biome");
     let ⟦2-char-id⟧ = 0;
-    for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.Ke) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧.frequency;
+    for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.bB) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧), ⟦2-char-id⟧ += ⟦2-char-id⟧.frequency;
     if (⟦2-char-id⟧ <= 0) throw new Error("Custom world-gen layer biome frequencies must sum to > 0");
-    for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.Pe) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
+    for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.VT) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧)
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
     const {
       blockName: ⟦2-char-id⟧,
-      he: ⟦2-char-id⟧,
-      De: ⟦2-char-id⟧,
-      se: ⟦2-char-id⟧
+      aB: ⟦2-char-id⟧,
+      ZB: ⟦2-char-id⟧,
+      XB: ⟦2-char-id⟧
     } = ⟦2-char-id⟧;
-    if (void 0 === (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧)) throw new Error(`Custom world-gen cave decoration blockName "${ZJ}" not found in blockMetadata`);
-    if (!⟦2-char-id⟧ && !⟦2-char-id⟧ && !⟦2-char-id⟧) throw new Error(`Custom world-gen cave decoration "${ZJ}" must allow at least one of floor/walls/ceiling anchoring`);
+    if (void 0 === (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧, ⟦2-char-id⟧)) throw new Error(`Custom world-gen cave decoration blockName "${dB}" not found in blockMetadata`);
+    if (!⟦2-char-id⟧ && !⟦2-char-id⟧ && !⟦2-char-id⟧) throw new Error(`Custom world-gen cave decoration "${dB}" must allow at least one of floor/walls/ceiling anchoring`);
     if (⟦2-char-id⟧)
       for (const ⟦2-char-id⟧ of ["meta|rot1|side", "meta|rot2|side", "meta|rot3|side", "meta|rot4|side"]) ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧);
-    if (⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, "meta|rot1|top", ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧.ne, ⟦2-char-id⟧, "ne"), ⟦2-char-id⟧(⟦2-char-id⟧.Ge, ⟦2-char-id⟧, "Ge"), !Number.isInteger(⟦2-char-id⟧.fe) || ⟦2-char-id⟧.fe < 0) throw new Error(`Custom world-gen cave decoration "${ZJ}" minPlacements must be a non-negative integer, got ${JJ.fe}`);
-    if (!(0, ⟦2-char-id⟧.P)(⟦2-char-id⟧.xe) && (⟦2-char-id⟧(⟦2-char-id⟧.xe.Qe, ⟦2-char-id⟧, "depthRamp.deepClusterChance"), ⟦2-char-id⟧.xe.Ee <= ⟦2-char-id⟧.xe.Ve)) throw new Error(`Custom world-gen cave decoration "${ZJ}" deepY must be strictly smaller than shallowY, but ${JJ.xe.Ee} <= ${JJ.xe.Ve} `)
+    if (⟦2-char-id⟧ && ⟦2-char-id⟧(⟦2-char-id⟧, "meta|rot1|top", ⟦2-char-id⟧), ⟦2-char-id⟧(⟦2-char-id⟧.WB, ⟦2-char-id⟧, "WB"), ⟦2-char-id⟧(⟦2-char-id⟧.hB, ⟦2-char-id⟧, "hB"), !Number.isInteger(⟦2-char-id⟧.CB) || ⟦2-char-id⟧.CB < 0) throw new Error(`Custom world-gen cave decoration "${dB}" minPlacements must be a non-negative integer, got ${BB.CB}`);
+    if (!(0, ⟦2-char-id⟧.M)(⟦2-char-id⟧.GB) && (⟦2-char-id⟧(⟦2-char-id⟧.GB.xB, ⟦2-char-id⟧, "depthRamp.deepClusterChance"), ⟦2-char-id⟧.GB.jB <= ⟦2-char-id⟧.GB.AB)) throw new Error(`Custom world-gen cave decoration "${dB}" deepY must be strictly smaller than shallowY, but ${BB.GB.jB} <= ${BB.GB.AB} `)
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-    const ⟦2-char-id⟧ = `${JJ}|${cJ}`;
-    if (void 0 === (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧, ⟦2-char-id⟧)) throw new Error(`Custom world-gen cave decoration "${JJ}" is missing directional variant "${FJ}" required for wall/ceiling anchoring`)
+    const ⟦2-char-id⟧ = `${BB}|${TB}`;
+    if (void 0 === (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧, ⟦2-char-id⟧)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${VB}" required for wall/ceiling anchoring`)
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-    if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > 1) throw new Error(`Custom world-gen cave decoration "${cJ}" ${ZJ} must be in [0, 1], got ${JJ}`)
+    if (⟦2-char-id⟧ < 0 || ⟦2-char-id⟧ > 1) throw new Error(`Custom world-gen cave decoration "${TB}" ${dB} must be in [0, 1], got ${BB}`)
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-    if (⟦2-char-id⟧.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${JJ.frequency}`);
-    if (void 0 === (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.Se, ⟦2-char-id⟧)) throw new Error(`Custom world-gen biome topsoilBlock "${JJ.Se}" not found in blockMetadata`);
-    if (void 0 === (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.Ie, ⟦2-char-id⟧)) throw new Error(`Custom world-gen biome lowsoilBlock "${JJ.Ie}" not found in blockMetadata`);
-    if (0 === ⟦2-char-id⟧.Me.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-    for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.Me) {
-      if (⟦2-char-id⟧.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${ZJ.frequency}`);
-      if (void 0 === (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.blockName, ⟦2-char-id⟧)) throw new Error(`Custom world-gen biome stoneType blockName "${ZJ.blockName}" not found in blockMetadata`)
+    if (⟦2-char-id⟧.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${BB.frequency}`);
+    if (void 0 === (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.eB, ⟦2-char-id⟧)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.eB}" not found in blockMetadata`);
+    if (void 0 === (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.BT, ⟦2-char-id⟧)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.BT}" not found in blockMetadata`);
+    if (0 === ⟦2-char-id⟧.TT.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+    for (const ⟦2-char-id⟧ of ⟦2-char-id⟧.TT) {
+      if (⟦2-char-id⟧.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${dB.frequency}`);
+      if (void 0 === (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.blockName, ⟦2-char-id⟧)) throw new Error(`Custom world-gen biome stoneType blockName "${dB.blockName}" not found in blockMetadata`)
     }
   }
 
   function ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧) {
-    if (void 0 === (0, ⟦2-char-id⟧.L)(⟦2-char-id⟧.blockName, ⟦2-char-id⟧)) throw new Error(`Custom world-gen ore blockName "${JJ.blockName}" not found in blockMetadata`);
-    if (⟦2-char-id⟧.radius < 0) throw new Error(`Custom world-gen ore "${JJ.blockName}" radius must be >= 0, got ${JJ.radius}`);
-    if (⟦2-char-id⟧.pe <= 0) throw new Error(`Custom world-gen ore "${JJ.blockName}" minDistBetweenDeposits must be > 0, got ${JJ.pe}`);
-    if (⟦2-char-id⟧.Ze > ⟦2-char-id⟧.Fe) throw new Error(`Custom world-gen ore "${JJ.blockName}" minY (${JJ.Ze}) must be <= maxY (${JJ.Fe})`);
-    if (⟦2-char-id⟧.de < 0 || ⟦2-char-id⟧.de > 1) throw new Error(`Custom world-gen ore "${JJ.blockName}" spawnChance must be in [0, 1], got ${JJ.de}`)
+    if (void 0 === (0, ⟦2-char-id⟧.F)(⟦2-char-id⟧.blockName, ⟦2-char-id⟧)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
+    if (⟦2-char-id⟧.radius < 0) throw new Error(`Custom world-gen ore "${BB.blockName}" radius must be >= 0, got ${BB.radius}`);
+    if (⟦2-char-id⟧.pT <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.pT}`);
+    if (⟦2-char-id⟧.UB > ⟦2-char-id⟧.FB) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.UB}) must be <= maxY (${BB.FB})`);
+    if (⟦2-char-id⟧.lT < 0 || ⟦2-char-id⟧.lT > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.lT}`)
   }
   const ⟦2-char-id⟧ = "buildAFactory2/wasteland",
     ⟦2-char-id⟧ = {
       blockName: "Uranium Ore",
       radius: 2,
-      pe: 10,
-      Ze: -98,
-      Fe: -78,
-      de: .4
+      pT: 10,
+      UB: -98,
+      FB: -78,
+      lT: .4
     },
     ⟦2-char-id⟧ = [{
       blockName: "Copper Ore",
       radius: 2,
-      pe: 6,
-      Ze: -40,
-      Fe: 20,
-      de: .6
+      pT: 6,
+      UB: -40,
+      FB: 20,
+      lT: .6
     }, {
       blockName: "Voltite Ore",
       radius: 2,
-      pe: 10,
-      Ze: -75,
-      Fe: -55,
-      de: .4
+      pT: 10,
+      UB: -75,
+      FB: -55,
+      lT: .4
     }],
     ⟦2-char-id⟧ = {
       name: ⟦2-char-id⟧,
-      Te: null
+      oT: null
     };
   const ⟦2-char-id⟧ = {
-    [⟦2-char-id⟧]: () => ⟦2-char-id⟧(59523).e
+    [⟦2-char-id⟧]: () => ⟦2-char-id⟧(59835).d
   };
   Math.round(29.999999999999996);
   const ⟦2-char-id⟧ = 0,
     ⟦2-char-id⟧ = 1,
-    ⟦2-char-id⟧ = 2;
+    ⟦2-char-id⟧ = 2,
+    ⟦2-char-id⟧ = 32;
   const ⟦2-char-id⟧ = 1048576;
   const ⟦2-char-id⟧ = 65536;
   ! function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 341 · Change · +1 / -1</summary>

```diff
@@ -12307,7 +12308,7 @@
   }
   const ⟦2-char-id⟧ = globalThis.WorkerGlobalScope;
   if (void 0 !== ⟦2-char-id⟧ && globalThis instanceof ⟦2-char-id⟧) {
-    const ⟦2-char-id⟧ = Promise.all([⟦2-char-id⟧.e(64), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(61)]).then((() => ⟦2-char-id⟧(60159))).then((⟦2-char-id⟧ => {
+    const ⟦2-char-id⟧ = Promise.all([⟦2-char-id⟧.e(64), ⟦2-char-id⟧.e(67), ⟦2-char-id⟧.e(66), ⟦2-char-id⟧.e(65), ⟦2-char-id⟧.e(61)]).then((() => ⟦2-char-id⟧(60447))).then((⟦2-char-id⟧ => {
       let {
         worldGenMetadata: ⟦2-char-id⟧
       } = ⟦2-char-id⟧;
```

</details>

<details>
<summary>Hunk 342 · Change · +3 / -3</summary>

```diff
@@ -12350,16 +12351,16 @@
           }), (⟦2-char-id⟧ => {
             ⟦2-char-id⟧ = !0, ⟦2-char-id⟧ = null, ⟦2-char-id⟧.postMessage({
               type: "lost",
-              reason: `its memory stats trapped (${String(cJ)})`
+              reason: `its memory stats trapped (${String(TB)})`
             })
           })),
           ⟦2-char-id⟧ = (⟦2-char-id⟧, ⟦2-char-id⟧) => {
             if (!⟦2-char-id⟧) throw new Error("no encoder");
             try {
-              const ⟦2-char-id⟧ = ⟦2-char-id⟧.vf();
+              const ⟦2-char-id⟧ = ⟦2-char-id⟧.HH();
               new Uint16Array(⟦2-char-id⟧().buffer, ⟦2-char-id⟧, ⟦2-char-id⟧.length).set(⟦2-char-id⟧), ⟦2-char-id⟧.encode(⟦2-char-id⟧);
               const ⟦2-char-id⟧ = function(⟦2-char-id⟧) {
-                return String.fromCharCode(...new Uint8Array(⟦2-char-id⟧().buffer, ⟦2-char-id⟧.mf(), 32))
+                return String.fromCharCode(...new Uint8Array(⟦2-char-id⟧().buffer, ⟦2-char-id⟧.EH(), 32))
               }(⟦2-char-id⟧);
               return ⟦2-char-id⟧ = !0, ⟦2-char-id⟧
             } catch (⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 343 · Change · +1 / -1</summary>

```diff
@@ -12372,7 +12373,7 @@
           } = ⟦2-char-id⟧;
           switch (⟦2-char-id⟧.type) {
             case "start":
-              ⟦2-char-id⟧ = ⟦2-char-id⟧.Kn, ⟦2-char-id⟧ = new Uint16Array(⟦2-char-id⟧ * ⟦2-char-id⟧ * ⟦2-char-id⟧),
+              ⟦2-char-id⟧ = ⟦2-char-id⟧.UD, ⟦2-char-id⟧ = new Uint16Array(⟦2-char-id⟧ * ⟦2-char-id⟧ * ⟦2-char-id⟧),
                 function(⟦2-char-id⟧) {
                   if (32 === ⟦2-char-id⟧)
                     if (⟦2-char-id⟧(⟦2-char-id⟧)) {
```

</details>

<details>
<summary>Hunk 344 · Change · +3 / -3</summary>

```diff
@@ -12381,15 +12382,15 @@
                       } catch (⟦2-char-id⟧) {
                         return void ⟦2-char-id⟧.postMessage({
                           type: "lost",
-                          reason: `the memory ceiling was not set (${String(FJ)})`
+                          reason: `the memory ceiling was not set (${String(VB)})`
                         })
                       }
                       try {
-                        ⟦2-char-id⟧ = new(⟦2-char-id⟧().xf)
+                        ⟦2-char-id⟧ = new(⟦2-char-id⟧().DH)
                       } catch (⟦2-char-id⟧) {
                         return void ⟦2-char-id⟧.postMessage({
                           type: "lost",
-                          reason: `GeneratedChunkEncoder did not start (${String(FJ)})`
+                          reason: `GeneratedChunkEncoder did not start (${String(VB)})`
                         })
                       }
                       ⟦2-char-id⟧().then((⟦2-char-id⟧ => {
```

</details>

<details>
<summary>Hunk 345 · Change · +3 / -3</summary>

```diff
@@ -12399,16 +12400,16 @@
                       }), (⟦2-char-id⟧ => {
                         ⟦2-char-id⟧.postMessage({
                           type: "lost",
-                          reason: `the block and item tables did not load (${String(cJ)})`
+                          reason: `the block and item tables did not load (${String(TB)})`
                         })
                       }))
                     } else ⟦2-char-id⟧.postMessage({
                       type: "lost",
-                      reason: `wasm did not start (${IJ()})`
+                      reason: `wasm did not start (${wB()})`
                     });
                   else ⟦2-char-id⟧.postMessage({
                     type: "lost",
-                    reason: `chunk size ${XJ} is not the encoder's 32`
+                    reason: `chunk size ${lB} is not the encoder's 32`
                   })
                 }(⟦2-char-id⟧.module);
               break;
```

</details>

<details>
<summary>Hunk 346 · Change · +1 / -1</summary>

```diff
@@ -12419,7 +12420,7 @@
               if (⟦2-char-id⟧ = null, null === ⟦2-char-id⟧) break;
               if (null === ⟦2-char-id⟧) throw new Error("a map's seed before the block and item tables loaded");
               try {
-                ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.blockMetadata, ⟦2-char-id⟧.itemMetadata, ⟦2-char-id⟧.BU, !1, ⟦2-char-id⟧.tU, ⟦2-char-id⟧.lU, ⟦2-char-id⟧, ⟦2-char-id⟧)
+                ⟦2-char-id⟧ = new ⟦2-char-id⟧(⟦2-char-id⟧, ⟦2-char-id⟧.blockMetadata, ⟦2-char-id⟧.itemMetadata, ⟦2-char-id⟧.NB, !1, ⟦2-char-id⟧.tB, ⟦2-char-id⟧.sB, ⟦2-char-id⟧, ⟦2-char-id⟧)
               } catch (⟦2-char-id⟧) {
                 console.error("[bloxd-wasm-client] the map's world generator did not start", ⟦2-char-id⟧)
               }
```

</details>

<details>
<summary>Hunk 347 · Change · +1 / -0</summary>

```diff
@@ -12431,6 +12432,7 @@
                   type: "result",
                   ticket: ⟦2-char-id⟧,
                   status: ⟦2-char-id⟧,
+                  workerUs: 0,
                   bytes: ⟦2-char-id⟧,
                   len: 0
                 }, [⟦2-char-id⟧]);
```

</details>

<details>
<summary>Hunk 348 · Change · +9 / -9</summary>

```diff
@@ -12438,21 +12440,21 @@
                 const ⟦2-char-id⟧ = ⟦2-char-id⟧();
                 let ⟦2-char-id⟧ = !1;
                 ⟦2-char-id⟧ && (⟦2-char-id⟧.fill(0), ⟦2-char-id⟧ = void 0 !== ⟦2-char-id⟧.getChunk(⟦2-char-id⟧()(⟦2-char-id⟧, [⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧]), ⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧));
-                const ⟦2-char-id⟧ = Math.min(4294967295, Math.max(0, Math.round(1⟦2-char-id⟧ * (⟦2-char-id⟧() - ⟦2-char-id⟧))));
+                const ⟦2-char-id⟧ = (⟦2-char-id⟧ = ⟦2-char-id⟧, ⟦2-char-id⟧ = ⟦2-char-id⟧(), Math.min(4294967295, Math.max(0, Math.round(1⟦2-char-id⟧ * (⟦2-char-id⟧ - ⟦2-char-id⟧)))));
+                var ⟦2-char-id⟧, ⟦2-char-id⟧;
                 let ⟦2-char-id⟧ = null;
                 if (!⟦2-char-id⟧ && ⟦2-char-id⟧ && ⟦2-char-id⟧) try {
-                  ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) {
-                    const ⟦2-char-id⟧ = ⟦2-char-id⟧.Qf(),
-                      ⟦2-char-id⟧ = 36 + ⟦2-char-id⟧,
-                      ⟦2-char-id⟧ = ⟦2-char-id⟧.byteLength >= ⟦2-char-id⟧ ? ZJ : new ArrayBuffer(⟦2-char-id⟧);
-                    new DataView(⟦2-char-id⟧).setUint32(0, ⟦2-char-id⟧, !0);
-                    const ⟦2-char-id⟧ = ⟦2-char-id⟧().buffer,
+                  ⟦2-char-id⟧ = function(⟦2-char-id⟧, ⟦2-char-id⟧) {
+                    const ⟦2-char-id⟧ = ⟦2-char-id⟧.vH(),
+                      ⟦2-char-id⟧ = ⟦2-char-id⟧ + ⟦2-char-id⟧,
+                      ⟦2-char-id⟧ = ⟦2-char-id⟧.byteLength >= ⟦2-char-id⟧ ? TB : new ArrayBuffer(⟦2-char-id⟧),
+                      ⟦2-char-id⟧ = ⟦2-char-id⟧().buffer,
                       ⟦2-char-id⟧ = new Uint8Array(⟦2-char-id⟧, 0, ⟦2-char-id⟧);
-                    return ⟦2-char-id⟧.set(new Uint8Array(⟦2-char-id⟧, ⟦2-char-id⟧.mf(), 32), 4), ⟦2-char-id⟧.set(new Uint8Array(⟦2-char-id⟧, ⟦2-char-id⟧.Ef(), ⟦2-char-id⟧), 36), {
+                    return ⟦2-char-id⟧.set(new Uint8Array(⟦2-char-id⟧, ⟦2-char-id⟧.EH(), ⟦2-char-id⟧)), ⟦2-char-id⟧.set(new Uint8Array(⟦2-char-id⟧, ⟦2-char-id⟧.mH(), ⟦2-char-id⟧), ⟦2-char-id⟧), {
                       bytes: ⟦2-char-id⟧,
                       len: ⟦2-char-id⟧
                     }
-                  }(⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧)
+                  }(⟦2-char-id⟧, ⟦2-char-id⟧)
                 } catch {
                   ⟦2-char-id⟧ = !0
                 }
```

</details>

<details>
<summary>Hunk 349 · Change · +4 / -0</summary>

```diff
@@ -12460,24 +12462,28 @@
                   type: "result",
                   ticket: ⟦2-char-id⟧,
                   status: ⟦2-char-id⟧,
+                  workerUs: ⟦2-char-id⟧,
                   bytes: ⟦2-char-id⟧,
                   len: 0
                 }, [⟦2-char-id⟧])) : null === ⟦2-char-id⟧ ? ⟦2-char-id⟧.postMessage({
                   type: "result",
                   ticket: ⟦2-char-id⟧,
                   status: ⟦2-char-id⟧,
+                  workerUs: ⟦2-char-id⟧,
                   bytes: ⟦2-char-id⟧,
                   len: 0
                 }, [⟦2-char-id⟧]) : ⟦2-char-id⟧.bytes === ⟦2-char-id⟧ ? ⟦2-char-id⟧.postMessage({
                   type: "result",
                   ticket: ⟦2-char-id⟧,
                   status: ⟦2-char-id⟧,
+                  workerUs: ⟦2-char-id⟧,
                   bytes: ⟦2-char-id⟧,
                   len: ⟦2-char-id⟧.len
                 }, [⟦2-char-id⟧]) : ⟦2-char-id⟧.postMessage({
                   type: "result",
                   ticket: ⟦2-char-id⟧,
                   status: ⟦2-char-id⟧,
+                  workerUs: ⟦2-char-id⟧,
                   bytes: ⟦2-char-id⟧.bytes,
                   len: ⟦2-char-id⟧.len,
                   spare: ⟦2-char-id⟧
```

</details>

</details>

<details>
<summary><code>bundles/staging.bloxd.io/chunks/js/worldgenWorkerLoader.js</code> · modified · +5 / -5</summary>

JavaScript comparison masks only two-character identifiers. Strings, comments, member properties, object keys, and all other source changes remain visible.

<details>
<summary>Hunk 1 · Change · +2 / -2</summary>

```diff
@@ -1,9 +1,9 @@
 export const ⟦2-char-id⟧ = 63;
 export const ids = [63];
 export const modules = {
-  35511: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  35430: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.d(⟦2-char-id⟧, {
-      b: () => ⟦2-char-id⟧
+      c: () => ⟦2-char-id⟧
     });
     const ⟦2-char-id⟧ = {
       wait: function(⟦2-char-id⟧) {
```

</details>

<details>
<summary>Hunk 2 · Change · +1 / -1</summary>

```diff
@@ -37,7 +37,7 @@
       async fetchWithRetries(⟦2-char-id⟧) {
         for (let ⟦2-char-id⟧ = 0;; ⟦2-char-id⟧++) {
           const ⟦2-char-id⟧ = new URL(this.url);
-          if (⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.searchParams.set("cache-bust", `${Date.now()}-${cJ}`), await this.fetchWhole(⟦2-char-id⟧, ⟦2-char-id⟧)) return void(this.scriptUrl = ⟦2-char-id⟧);
+          if (⟦2-char-id⟧ > 0 && ⟦2-char-id⟧.searchParams.set("cache-bust", `${Date.now()}-${TB}`), await this.fetchWhole(⟦2-char-id⟧, ⟦2-char-id⟧)) return void(this.scriptUrl = ⟦2-char-id⟧);
           if (⟦2-char-id⟧ >= 3 || ⟦2-char-id⟧.aborted) return;
           if (await this.timing.wait(500 * 2 ** ⟦2-char-id⟧), ⟦2-char-id⟧.aborted) return
         }
```

</details>

<details>
<summary>Hunk 3 · Change · +2 / -2</summary>

```diff
@@ -79,14 +79,14 @@
       }
     }
   },
-  42011: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
+  42059: (⟦2-char-id⟧, ⟦2-char-id⟧, ⟦2-char-id⟧) => {
     ⟦2-char-id⟧.r(⟦2-char-id⟧), ⟦2-char-id⟧.d(⟦2-char-id⟧, {
       createWorldgenWorker: () => ⟦2-char-id⟧,
       prefetchWorldgenWorker: () => ⟦2-char-id⟧,
       stopWorldgenWorkerPrefetch: () => ⟦2-char-id⟧,
       worldgenWorkerReady: () => ⟦2-char-id⟧
     });
-    const ⟦2-char-id⟧ = new(⟦2-char-id⟧(35511).b)(new URL(⟦2-char-id⟧.p + ⟦2-char-id⟧.u(62), ⟦2-char-id⟧.b), {
+    const ⟦2-char-id⟧ = new(⟦2-char-id⟧(35430).c)(new URL(⟦2-char-id⟧.p + ⟦2-char-id⟧.u(62), ⟦2-char-id⟧.b), {
       name: "worldgenWorker",
       type: "module"
     });
```

</details>

</details>
