# Changed — Bundle Modifications Report (Part 011 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `11 / 56` (**281** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 010](part-010.md) · [Part 012 →](part-012.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/255.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/255.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d)

#### 8. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L191-L212` → after: `L329-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L329-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L329-L560) · [Before (L191-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L191-L212)

```diff
-       constructor(QQ) {
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new LQ(QQ, (() => () => {}))
-       }
-       show(QQ) {
-         QQ.figures !== this.view.figures && this.preload(QQ.figures), this.view = QQ, this.place()
-       }
-       resize(QQ, WQ) {
-         this.preview.resize(QQ, WQ), this.aspect = QQ / WQ, this.place()
-       }
-       close() {
-         this.preview.close();
-         for (const QQ of this.placed) null === QQ || void 0 === QQ || QQ.remove();
-         this.placed = []
- ... (6 more removed lines; see GitHub link above)
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         this.r = MM, this.g = rM, this.b = iM, this.a = OM
+       }
+       HOM() {
+         return [this.r, this.g, this.b, this.a]
+       }
+       toArray(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return MM[rM] = this.r, MM[rM + 1] = this.g, MM[rM + 2] = this.b, MM[rM + 3] = this.a, this
+       }
+       cz(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+ ... (216 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L214-L233` → after: `L562-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L562-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L562-L564) · [Before (L214-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L214-L233)

```diff
-           of QQ) null !== XQ && RQ(XQ).catch(WQ)
-       }
-       place() {
-         const {
-           figures: QQ,
-           shown: WQ
-         } = this.view, XQ = QQ.map(((XQ, wQ) => {
-           var qQ;
-           const TQ = null !== (qQ = this.placed[wQ]) && void 0 !== qQ ? qQ : null;
-           if (!WQ[wQ]) return null === TQ || void 0 === TQ || TQ.remove(), null;
-           const zQ = (sQ = (wQ + .5) / QQ.length, FQ = this.aspect, (.5 - sQ) * (2 * bQ * Math.tan(cQ().camera.fov / 2)) * FQ);
-           var sQ, FQ;
-           return null !== TQ && TQ.figure === XQ && TQ.x === zQ ? TQ : (null === TQ || void 0 === TQ || TQ.remove(), {
-             figure: XQ,
-             x: zQ,
-             remove: CQ(XQ, zQ)
- ... (4 more removed lines; see GitHub link above)
+           return rM
+         }
+         return MM
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L238` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L603) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L238)

```diff
-       return new LQ(QQ, EQ)
+       return parseInt(MM.toString().replace(/\W/g, ""))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L241-L242` → after: `L606-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L606-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L606-L642) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L241-L242)

```diff
-     function SQ(QQ) {
-       return new kQ(QQ)
+     function SM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(MM - rM) <= iM
+     }
+ 
+     function jM(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return MM < rM - OM || MM > iM + OM
+     }
+ 
+     function aM(MM, rM) {
+       return MM === rM ? MM : Math.random() * (rM - MM) + MM
+     }
+ 
+     function PM(MM, rM, iM) {
+       return MM + (rM - MM) * iM
+ ... (21 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L246` → after: `L646-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L646-L648) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L246)

```diff
-       return new LQ(QQ, uQ)
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(iM, Math.max(rM, MM))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L260-L270` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L652) · [Before (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L260-L270)

```diff
-       return `\n\t\t\t\t${(0,sQ.v)(QQ,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, sQ.A)(QQ, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, sQ.A)(QQ, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, sQ.l)(QQ, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
+       return MM -= 2 * Math.PI * Math.floor((MM + Math.PI) / (2 * Math.PI))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L273-L277` → after: `L655-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L655-L657) · [Before (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L273-L277)

```diff
-     function PQ(QQ, WQ) {
-       let XQ = (0, sQ.Jb)(QQ, "skele" + (WQ - 1));
-       for (let qQ = WQ - 2; qQ >= 0; qQ--) XQ = (0, sQ.wb)(QQ, `boneIdx == ${qQ}`, (0, sQ.Jb)(QQ, `skele${qQ}`), XQ);
-       const wQ = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,sQ.A)(QQ,"int","boneIdx",(0,sQ.Eb)(QQ,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,sQ.A)(QQ,"vec3","bone",XQ)}\n\t\t\t\t${(0,sQ.A)(QQ,"vec2","pivot",(0,sQ.l)(QQ,"vec2","0.0",`${(0,sQ.Sb)(QQ,"position")}.z`))}\n\t\t\t\t${(0,sQ.$)(QQ)?`positi … [truncated]
+     function hM(MM) {
+       const rM = MM.toString(16);
+       return MM <= 15 ? ("0" + rM).toUpperCase() : rM.toUpperCase()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L281-L427` → after: `L661-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L661-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L661-L671) · [Before (L281-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L281-L427)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,sQ.l)(QQ,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
-     }
-     const JQ = {
-         x: 0,
-         y: 0,
-         z: 0,
-         gXQ(QQ, WQ) {
-           return this.x = QQ[WQ], this.y = QQ[WQ + 1], this.z = QQ[WQ + 2], this
-         }
-       },
-       rQ = {
-         name: "Cape",
-         className: "CapeMaterialPlugin",
-         priority: 200,
-         defines: (QQ, WQ) => ({
-           ...(0, wQ.b)("CAPE"),
- ... (131 more removed lines; see GitHub link above)
+       if (Math.log2) return Math.floor(Math.log2(MM));
+       if (MM < 0) return NaN;
+       if (0 === MM) return -1 / 0;
+       let rM = 0;
+       if (MM < 1) {
+         for (; MM < 1;) rM++, MM *= 2;
+         rM = -rM
+       } else if (MM > 1)
+         for (; MM > 1;) rM++, MM = Math.floor(MM / 2);
+       return rM
+     }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L430-L434` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L674) · [Before (L430-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L430-L434)

```diff
-       return Object.assign((function(QQ, XQ, wQ, qQ) {
-         return WQ(this.featureState, QQ, XQ, wQ, qQ)
-       }), {
-         NI: QQ
-       })
+       return MM - Math.floor(MM / rM) * rM
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L437-L464` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L677-L678) · [Before (L437-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L437-L464)

```diff
-     function DQ(QQ) {
-       const WQ = class extends IQ.b {
-           constructor(WQ, XQ) {
-             const wQ = (0, BQ._)(WQ),
-               qQ = wQ && (0, BQ.u)(wQ, QQ.name);
-             for (var TQ = arguments.length, zQ = new Array(TQ > 2 ? TQ - 2 : 0), sQ = 2; sQ < TQ; sQ++) zQ[sQ - 2] = arguments[sQ];
-             super(WQ, QQ.name, QQ.priority, qQ ? qQ.defines : QQ.defines(...zQ), !1), this.featureState = void 0, this.featureState = XQ, this._pluginManager._addPlugin(this), this._enable(!0), (0, BQ.y)(this._material, QQ, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return QQ.className
-           }
-           isCompatible(QQ) {
-             return QQ === yQ.b.GLSL || QQ === yQ.b.WGSL
-           }
-         },
-         XQ = (0, jQ.g)(QQ);
- ... (12 more removed lines; see GitHub link above)
+     function yM(MM, rM, iM) {
+       return (MM - rM) / (iM - rM)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L472-L573` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L682) · [Before (L472-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L472-L573)

```diff
-       return (0, bQ.f)(XQ, WQ.urls, (() => async function(QQ, WQ, XQ) {
-         const {
-           width: wQ
-         } = QQ[0].getSize(), qQ = QQ.map(((QQ, XQ) => {
-           var qQ;
-           const TQ = Math.round(QQ.getSize().height / wQ),
-             zQ = null === WQ || void 0 === WQ ? void 0 : WQ[XQ];
-           return {
-             pixels: zQ && zQ.byteLength === wQ * wQ * TQ * 4 ? zQ : null !== (qQ = dQ.get(QQ.getInternalTexture())) && void 0 !== qQ ? qQ : QQ._readPixelsSync(),
-             layers: TQ
-           }
-         })), TQ = XQ.Uj().getCaps().texture2DArrayMaxLayerCount, sQ = (0, bQ.b)(qQ, wQ, TQ).map((QQ => {
-           let {
-             pixels: WQ,
-             layers: qQ
-           } = QQ;
- ... (86 more removed lines; see GitHub link above)
+       return MM * (iM - rM) + rM
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L577-L622` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L686-L687) · [Before (L577-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L577-L622)

```diff
-       if (!(WQ instanceof wQ.StandardMaterial) || WQ.specularTexture) return;
-       const {
-         r: XQ,
-         g: qQ,
-         b: TQ
-       } = WQ.specularColor;
-       0 === XQ && 0 === qQ && 0 === TQ && (QQ.SPECULARTERM = !1)
-     }(0, gQ.i)({
-       disableUnusedSpecularTerm: tQ
-     });
-     var oQ = XQ(37582),
-       eQ = XQ(37866);
-     const nQ = new RegExp(`^#define ${PQ.d}\\s*$`, "m");
-     class xQ extends(DQ(PQ.i)) {
-       constructor(QQ, WQ) {
-         super(QQ, WQ), this.zj = !1, WQ.ditherOnlyWhileFading && (eQ.e.add(QQ), this.prewarmDitherTwins(QQ))
- ... (30 more removed lines; see GitHub link above)
+       let iM = dM(rM - MM, 360);
+       return iM > 180 && (iM -= 360), iM
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L627-L818` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L691-L692) · [Before (L627-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L627-L818)

```diff
-       YQ.set(QQ, WQ)
-     }
-     NQ(sQ.d, pQ), NQ(FQ.h, aQ), NQ(PQ.i, xQ), NQ(gQ.k, SQ), (0, JQ.e)({
-       create: (QQ, WQ) => {
-         const XQ = new wQ.StandardMaterial(QQ.name, WQ);
-         return (0, oQ.r)(QQ, XQ), XQ.detailMap._pluginDefineNames
-       },
-       write: (QQ, WQ, XQ) => {
-         (0, oQ._)(QQ.mirror, WQ, XQ)
-       },
-       addFeature: (QQ, WQ, XQ) => {
-         const wQ = YQ.get(WQ.feature);
-         if (!wQ) throw new Error(`${WQ.feature.name} has no plugin class (registerPluginClass)`);
-         new wQ(QQ.mirror, WQ.state, ...XQ)
-       },
-       texture: (QQ, WQ, XQ) => {
- ... (176 more removed lines; see GitHub link above)
+       const iM = dM(MM, 2 * rM);
+       return rM - Math.abs(iM - rM)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L822-L839` → after: `L696-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L696-L697) · [Before (L822-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L822-L839)

```diff
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new sQ.b(QQ, XQ);
-       const qQ = (0, PQ.m)(WQ),
-         {
-           positions: TQ,
-           normals: JQ,
-           uvs: rQ,
-           indices: IQ,
-           named: jQ = {}
-         } = WQ,
-         BQ = new FQ.e;
-       BQ.positions = TQ, BQ.normals = null !== JQ && void 0 !== JQ ? JQ : null, BQ.uvs = null !== rQ && void 0 !== rQ ? rQ : null, BQ.indices = IQ;
-       const yQ = new gQ(zQ.d.RandomId(), XQ, BQ, !1, wQ);
-       for (const {
-           kind: zQ,
-           components: sQ
-         }
- ... (2 more removed lines; see GitHub link above)
+       let OM = mM(iM);
+       return OM = -2 * OM * OM * OM + 3 * OM * OM, rM * OM + MM * (1 - OM)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L843-L856` → after: `L701-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L701-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L701-L702) · [Before (L843-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L843-L856)

```diff
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const qQ = new sQ.b(QQ, XQ),
-         {
-           positions: TQ,
-           normals: zQ,
-           uvs: PQ,
-           indices: gQ
-         } = WQ;
-       return Object.assign(new FQ.e, {
-         positions: TQ,
-         normals: zQ,
-         uvs: PQ,
-         indices: gQ
-       }).applyToMesh(qQ, wQ), qQ
+       let OM;
+       return OM = Math.abs(rM - MM) <= iM ? rM : MM + Math.sign(rM - MM) * iM, OM
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L858-L859` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L704) · [Before (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L858-L859)

```diff
-   },
-   41366: (QQ, WQ, XQ) => {
+ 
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L861-L873` → after: `L706-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L706-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L706-L751) · [Before (L861-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L861-L873)

```diff
-       const wQ = WQ * WQ * 4,
-         qQ = QQ[0].layers,
-         TQ = qQ * (QQ.length - 1) + QQ[QQ.length - 1].layers,
-         zQ = new Uint8Array(TQ * wQ);
-       QQ.forEach(((WQ, XQ) => {
-         const TQ = XQ + 1 < QQ.length ? Math.min(WQ.layers, qQ) : WQ.layers;
-         zQ.set(new Uint8Array(WQ.pixels.buffer, WQ.pixels.byteOffset, TQ * wQ), XQ * qQ * wQ)
-       }));
-       const sQ = Math.max(1, Math.min(TQ, XQ || TQ));
-       if (sQ === TQ) return [{
-         pixels: zQ,
-         layers: TQ
-       }];
+       const OM = EM(MM, rM);
+       let SM;
+       return SM = -iM < OM && OM < iM ? rM : CM(MM, rM = MM + OM, iM), SM
+     }
+ 
+     function bM(MM, rM, iM) {
+       return (MM - rM) / (iM - rM)
+     }
+ 
+     function wM(MM, rM, iM) {
+       return (iM - rM) * MM + rM
+     }
+ 
+     function tM(MM, rM) {
+       const iM = MM % rM;
+       return 0 === iM ? rM : tM(rM, iM)
+ ... (30 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L875-L881` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L753) · [Before (L875-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L875-L881)

```diff
-       for (let PQ = 0; PQ < TQ; PQ += sQ) {
-         const QQ = Math.min(TQ, PQ + sQ);
-         FQ.push({
-           pixels: zQ.slice(PQ * wQ, QQ * wQ),
-           layers: QQ - PQ
-         })
-       }
+       for (let OM = 0; OM < MM; ++OM) iM.push(rM());
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L886` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L791) · [Before (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L886)

```diff
-       f: () => TQ
+       e: () => SM
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L888` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L793) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L888)

```diff
-     const qQ = new WeakMap;
+     const OM = {};
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L890-L904` → after: `L795-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L795-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/255.js#L795-L800) · [Before (L890-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/255.js#L890-L904)

```diff
-     function TQ(QQ, WQ, XQ) {
-       var wQ, TQ;
-       const zQ = null !== (wQ = qQ.get(QQ)) && void 0 !== wQ ? wQ : new Map;
-       qQ.set(QQ, zQ);
-       const sQ = null !== (TQ = zQ.get(WQ[0])) && void 0 !== TQ ? TQ : [];
-       zQ.set(WQ[0], sQ);
-       const FQ = sQ.find((QQ => QQ.urls.length === WQ.length && QQ.urls.every(((QQ, XQ) => QQ === WQ[XQ]))));
-       if (FQ) return FQ.built;
-       const PQ = {
-         urls: [...WQ],
-         built: XQ()
-       };
-       return sQ.push(PQ), PQ.built.catch((() => {
-         sQ.splice(sQ.indexOf(PQ), 1)
-       })), PQ.built
+     function SM(MM, rM) {
+       OM[MM] = rM
+     }
+ 
+     function jM(MM) {
+       return OM[MM]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/256.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/256.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L4-L6` → after: `L4-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L4-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/256.js#L4-L74) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/256.js#L4-L6)

```diff
-   41245: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => TQ,
+   38064: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => SM
+     });
+     var OM = iM(38068);
+     class SM {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     SM.Instances = [], SM.OnEnginesDisposedObservable = new OM.d, SM._LastCreatedScene = null, SM.UseFallbackTexture = !0, SM.FallbackTexture = ""
+   },
+   39705: (MM, rM, iM) => {
+ ... (55 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L9-L20` → after: `L77-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L77-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/256.js#L77-L290) · [Before (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/256.js#L9-L20)

```diff
-     var wQ = XQ(2015);
-     let qQ = !1;
- 
-     function TQ() {
-       qQ = !0
-     }
- 
-     function zQ() {
-       qQ && (qQ = !1, (0, wQ.c)())
-     }
-   },
-   41238: (QQ, WQ, XQ) => {
+     class OM {
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
+       }
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
+       }
+       static _AddLogEntry(MM) {
+ ... (198 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L23-L141` → after: `L293-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L293-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/256.js#L293-L295) · [Before (L23-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/256.js#L23-L141)

```diff
-       c: () => TQ,
-       g: () => sQ
-     });
-     var wQ = XQ(40813),
-       qQ = XQ(40829);
- 
-     function TQ(QQ) {
-       if (QQ.queries.drawCensus() < wQ.Ob.BYTES) return null;
-       const WQ = QQ.memoryData(QQ.scratch(), wQ.Ob.BYTES, 4, "the draw census");
-       return null === WQ ? null : {
-         terrainOpaque: wQ.Ob.terrainOpaque(WQ, 0),
-         terrainTransparent: wQ.Ob.terrainTransparent(WQ, 0),
-         terrainPack: wQ.Ob.terrainPack(WQ, 0),
-         earthSky: wQ.Ob.earthSky(WQ, 0),
-         skyMeshes: wQ.Ob.skyMeshes(WQ, 0),
-         regular: wQ.Ob.regular(WQ, 0),
- ... (103 more removed lines; see GitHub link above)
+       e: () => SM
+     });
+     const OM = {};
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L144-L207` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/256.js#L298-L299) · [Before (L144-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/256.js#L144-L207)

```diff
-       wQ.b.update(QQ, WQ), PQ.forEach((WQ => {
-         WQ(QQ)
-       }))
-     }
-     const jQ = {
-       localEffectUpdated: {
-         watch: QQ => PQ.add(QQ)
-       }
-     }
-   },
-   41224: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => gQ
-     });
-     var wQ = XQ(5140),
-       qQ = XQ(5134),
- ... (48 more removed lines; see GitHub link above)
+       OM[MM] = rM
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/257.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/257.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775)

#### 1. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/257.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/257.js#L4-L6)

```diff
-   40071: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       playDocsSound: () => sQ
+   38116: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => PM,
+       g: () => aM,
+       i: () => SM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L8-L22` → after: `L10-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L10-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/257.js#L10-L159) · [Before (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/257.js#L8-L22)

```diff
-     var wQ = XQ(5212),
-       qQ = XQ(37049),
-       TQ = XQ(1238);
-     const zQ = new Map;
- 
-     function sQ(QQ, WQ, XQ, sQ, FQ) {
-       let PQ, gQ = null,
-         JQ = 0,
-         rQ = 0;
-       if (WQ) PQ = new wQ.Howl({
-         src: [`${TQ.clientSideServerUrls.staticUrl}/sounds/music/${QQ}.mp3`],
-         html5: !0,
-         volume: XQ
-       });
-       else {
+     const OM = 1024,
+       SM = 16,
+       jM = 36e4;
+     class aM {
+       constructor(MM) {
+         this.boneCount = MM, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * MM), this.position = new Float64Array(3 * MM), this.scale = new Float64Array(3 * MM).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let MM = 0; MM < this.boneCount; MM++)
+           if (0 !== this.touched[MM])
+             for (let rM = 3 * MM; rM < 3 * MM + 3; rM++) {
+               const MM = this.rotation[rM],
+                 iM = this.position[rM],
+                 aM = this.scale[rM];
+               MM >= -36e4 && MM <= jM || (this.rotation[rM] = nM(MM, jM)), iM >= -1024 && iM <= OM || (this.position[rM] = nM(iM, OM)), aM >= -SM && aM <= SM || (this.scale[rM] = nM(aM, SM, 1))
+             }
+ ... (134 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L24-L76` → after: `L161-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L161-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/257.js#L161-L390) · [Before (L24-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/257.js#L24-L76)

```diff
-         gQ = (0, qQ.l)(QQ);
-         const WQ = (0, qQ.h)(gQ),
-           XQ = null !== (IQ = WQ.sprite[QQ]) && void 0 !== IQ ? IQ : null;
-         if (!XQ) throw new Error(`Docs sound ${QQ} is not in sprite sheet ${gQ}`);
-         JQ = XQ[0] / 1e3, rQ = XQ[1] / 1e3, PQ = zQ.get(gQ), PQ || (PQ = new wQ.Howl({
-           ...WQ,
-           volume: 1
-         }), zQ.set(gQ, PQ))
-       }
-       const jQ = WQ ? PQ.play() : PQ.play(QQ);
-       PQ.volume(XQ, jQ), sQ > 0 && PQ.seek(JQ + sQ, jQ);
-       const BQ = () => WQ ? PQ.duration() : rQ;
-       let yQ = !1;
-       const VQ = QQ => {
-           yQ || (yQ = !0, PQ.off("play", DQ, jQ), PQ.off("end", pQ, jQ), PQ.off("loaderror", UQ), PQ.off("playerror", GQ, jQ), WQ && PQ.unload(), FQ.onEnd(QQ))
-         },
- ... (37 more removed lines; see GitHub link above)
+         if ("object" === typeof rM && "point" in rM) jM = null !== (aM = rM.bS) && void 0 !== aM ? aM : null, OM = rM.point, SM = rM.point;
+         else if ("object" === typeof rM && "pre" in rM) {
+           var PM;
+           jM = null !== (PM = rM.bS) && void 0 !== PM ? PM : null, OM = rM.pre, SM = rM.post
+         } else OM = rM, SM = rM;
+         return {
+           timeFraction: MM,
+           bS: this.createLerpMode(jM),
+           pre: iM(OM),
+           post: iM(SM)
+         }
+       }
+       createLerpMode(MM) {
+         return null === MM ? OM.f.Linear : QM.LERP_MODE_SCHEMA_MAPPING[MM]
+       }
+     }
+ ... (214 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/258.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/258.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44)

#### 1. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/258.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/258.js#L4-L6)

```diff
-   40083: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       default: () => NQ
+   38167: (MM, rM, iM) => {
+     iM.d(rM, {
+       Color3: () => OM.d,
+       d: () => OM.h
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L8-L697` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/258.js#L9-L10) · [Before (L8-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/258.js#L8-L697)

```diff
-     XQ(6858);
-     var wQ = XQ(61),
-       qQ = XQ(40089),
-       TQ = XQ(40349),
-       zQ = XQ(40479),
-       sQ = XQ(40517),
-       FQ = XQ(40530),
-       PQ = XQ(37539),
-       gQ = XQ(37367),
-       JQ = XQ(40643),
-       rQ = XQ(40699),
-       IQ = (XQ(40732), XQ(1257)),
-       jQ = XQ(231),
-       BQ = XQ(1226),
-       yQ = XQ(26),
-       VQ = XQ(2978),
- ... (674 more removed lines; see GitHub link above)
+     var OM = iM(38173);
+     (0, OM.i)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/259.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/259.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L4-L6302` → after: `L4-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L4-L28) · [Before (L4-L6302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L4-L6302)

```diff
-   40487: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => yQ,
-       h: () => pQ
-     });
-     var wQ = XQ(40260),
-       qQ = XQ(40268),
-       TQ = XQ(40371),
-       zQ = XQ(37399),
-       sQ = XQ(37370),
-       FQ = XQ(40491),
-       PQ = XQ(38956),
-       gQ = XQ(37418),
-       JQ = XQ(40153),
-       rQ = XQ(38377),
-       IQ = XQ(38041),
- ... (6283 more removed lines; see GitHub link above)
+   63918: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       DEVTOOLS_SHADERS: () => jM,
+       registerDevtoolsShader: () => aM
+     });
+     var OM = iM(40964),
+       SM = iM(38188);
+     const jM = {
+       devtoolsNormal: function(MM) {
+         return {
+           vertex: `\n\t\t\t${(0,SM.e)(MM,"position","vec3")}\n\t\t\t${(0,SM.e)(MM,"normal","vec3")}\n\t\t\t${(0,SM.zb)(MM,"worldViewProjection","mat4")}\n\t\t\t${(0,SM.zb)(MM,"world","mat4")}\n\t\t\t${(0,SM.Fb)(MM,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SM.Gb)(MM,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,SM.Fb)(MM,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SM.R)(MM,`\n\t\t\t\t\n\t\t\t\t${(0,SM.B)(MM,"vec3","normalColor",`abs(${(0,SM.U)(MM,"vNormal")})`)}\n\t\t\t\t${(0,SM.M)(MM)} = ${(0,SM.n)(MM,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(MM) {
+         return {
+ ... (9 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6326-L6328` → after: `L32-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L32-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L32-L38) · [Before (L6326-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L6326-L6328)

```diff
-     function MQ() {
-       mQ || (mQ = !0, (0, fQ.d)("BABYLON.Mesh", KQ))
-     }(wQ = KQ.prototype).pC ?? (wQ.pC = (0, SQ.h)("Mesh", "pC")), (qQ = KQ.prototype).simplify ?? (qQ.simplify = (0, SQ.h)("Mesh", "simplify")), (TQ = KQ.prototype).thinInstanceAdd ?? (TQ.thinInstanceAdd = (0, SQ.h)("Mesh", "thinInstanceAdd")), (zQ = KQ.prototype).thinInstanceAdd … [truncated]
+     function aM(MM, rM) {
+       const {
+         vertex: iM,
+         fragment: SM
+       } = jM[MM](rM), aM = OM.e.GetShadersStore(rM);
+       aM[`${MM}VertexShader`] = iM, aM[`${MM}FragmentShader`] = SM
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6330` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L40) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L6330)

```diff
-   40661: (QQ, WQ, XQ) => {
+   38188: (MM, rM, iM) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6332` → after: `L42-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L42-L78) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L6332)

```diff
-       e: () => jQ
+       A: () => LM,
+       B: () => zM,
+       Db: () => RM,
+       E: () => bM,
+       Fb: () => dM,
+       G: () => WM,
+       Gb: () => EM,
+       Hb: () => tM,
+       K: () => jM,
+       Kb: () => gM,
+       M: () => kM,
+       Q: () => DM,
+       R: () => UM,
+       U: () => uM,
+       V: () => pM,
+       X: () => fM,
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6334-L6874` → after: `L80-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L80-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L80-L83) · [Before (L6334-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L6334-L6874)

```diff
-     var wQ = XQ(40260),
-       qQ = XQ(37370),
-       TQ = XQ(40404),
-       zQ = XQ(40153),
-       sQ = XQ(37546),
-       FQ = XQ(38956),
-       PQ = XQ(40268),
-       gQ = XQ(40656),
-       JQ = XQ(40320),
-       rQ = XQ(40555);
-     class IQ {}
-     let jQ = (() => {
-       var QQ;
-       let WQ, XQ, jQ, BQ, yQ = [];
-       return QQ = class {
-         constructor() {
- ... (525 more removed lines; see GitHub link above)
+     const OM = {
+       GLSL: 0,
+       WGSL: 1
+     };
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6877-L6878` → after: `L86-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L86-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L86-L124) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L6877-L6878)

```diff
-       const WQ = QQ.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return WQ instanceof Float32Array || WQ instanceof Uint16Array
+       return MM === OM.WGSL
+     }
+ 
+     function jM(MM, rM, iM) {
+       return SM(MM) ? iM : rM
+     }
+     const aM = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+       ["vec3", "vec3f"],
+       ["vec4", "vec4f"],
+       ["mat2", "mat2x2f"],
+       ["mat3", "mat3x3f"],
+       ["mat4", "mat4x4f"]
+     ]);
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6882-L6887` → after: `L128-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L128-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L128-L133) · [Before (L6882-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L6882-L6887)

```diff
-       XQ.h_(Number.POSITIVE_INFINITY), wQ.h_(Number.NEGATIVE_INFINITY);
-       for (let qQ = 0; qQ < 3 * WQ; qQ += 3) {
-         const WQ = QQ[qQ],
-           TQ = QQ[qQ + 1],
-           zQ = QQ[qQ + 2];
-         WQ < XQ.x && (XQ.x = WQ), TQ < XQ.y && (XQ.y = TQ), zQ < XQ.z && (XQ.z = zQ), WQ > wQ.x && (wQ.x = WQ), TQ > wQ.y && (wQ.y = TQ), zQ > wQ.z && (wQ.z = zQ)
+       return SM(MM) ? `const ${iM}: ${PM(MM,rM)} = ${OM};` : `const ${rM} ${iM} = ${OM};`
+     }
+ 
+     function HM(MM, rM, iM, OM, jM) {
+       if (SM(MM)) {
+         return `fn ${iM}(${OM.map((rM=>`${rM.name}: ${PM(MM,rM.type)}`)).join(", ")}) -> ${PM(MM,rM)} {${jM}}`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6892` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L151) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L6892)

```diff
-       XQ && (QQ.x -= QQ.x * XQ.x + XQ.y, QQ.y -= QQ.y * XQ.x + XQ.y, QQ.z -= QQ.z * XQ.x + XQ.y, WQ.x += WQ.x * XQ.x + XQ.y, WQ.y += WQ.y * XQ.x + XQ.y, WQ.z += WQ.z * XQ.x + XQ.y)
+       return SM(MM) ? `uniform ${rM}: ${PM(MM,iM)};` : `uniform ${iM} ${rM};`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6895-L6900` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L154-L155) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L6895-L6900)

```diff
-     function rQ(QQ, WQ, XQ, qQ, TQ) {
-       const zQ = wQ.m.vj[7],
-         sQ = wQ.m.vj[8];
-       for (let FQ = 0; FQ < 2; ++FQ)
-         for (let PQ = 0; PQ < 2; ++PQ)
-           for (let gQ = 0; gQ < 2; ++gQ) zQ.set(FQ ? WQ.x : QQ.x, PQ ? WQ.y : QQ.y, gQ ? WQ.z : QQ.z), wQ.s.TransformCoordinatesToRef(zQ, XQ, sQ), qQ.minimizeInPlace(sQ), TQ.maximizeInPlace(sQ)
+     function lM(MM) {
+       return SM(MM) ? "vertexOutputs.position" : "gl_Position"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6903-L6905` → after: `L158-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L158-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L158-L163) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L6903-L6905)

```diff
-     function IQ(QQ, WQ, XQ, qQ, TQ) {
-       const zQ = wQ.m.vj[7];
-       for (let sQ = 0; sQ < 3 * WQ; sQ += 3) wQ.s.TransformCoordinatesFromFloatsToRef(QQ[sQ], QQ[sQ + 1], QQ[sQ + 2], XQ, zQ), qQ.minimizeInPlace(zQ), TQ.maximizeInPlace(zQ)
+     function EM(MM, rM) {
+       return SM(MM) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${rM}}` : `void main() {${rM}}`
+     }
+ 
+     function UM(MM, rM) {
+       return SM(MM) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${rM}}` : `void main() {${rM}}`
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L7675-L7682` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L167-L168) · [Before (L7675-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L7675-L7682)

```diff
-       const wQ = PQ.b.Parse((() => new BQ(QQ.name, WQ)), QQ, WQ, XQ);
-       if (QQ.localMatrix ? wQ.setPreTransformMatrix(JQ.e.FromArray(QQ.localMatrix)) : QQ.pivotMatrix && wQ.setPivotMatrix(JQ.e.FromArray(QQ.pivotMatrix)), wQ.UH(QQ.isEnabled), wQ._waitingParsedUniqueId = QQ.uniqueId, void 0 !== QQ.parentId && (wQ._waitingParentId = QQ.parentId),  … [truncated]
-         for (let WQ = 0; WQ < QQ.animations.length; WQ++) {
-           const XQ = QQ.animations[WQ],
-             qQ = (0, IQ.b)("BABYLON.Animation");
-           qQ && wQ.animations.push(qQ.Parse(XQ))
-         }
-         rQ.e.ParseAnimationRanges(wQ, QQ, WQ)
+       if (SM(MM)) {
+         return [`var ${rM}Sampler: sampler;`, `var ${rM}: ${"2dArray"===iM?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L7684` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L170) · [Before (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L7684)

```diff
-       return QQ.autoAnimate && WQ.beginAnimation(wQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), wQ
+       return `uniform highp ${"2dArray"===iM?"sampler2DArray":"sampler2D"} ${rM};`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L7694-L7700` → after: `L174-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L174-L179) · [Before (L7694-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L7694-L7700)

```diff
-       try {
-         const wQ = QQ.next();
-         wQ.done ? WQ(wQ) : wQ.value ? wQ.value.then((() => {
-           wQ.value = void 0, WQ(wQ)
-         }), XQ) : WQ(wQ)
-       } catch (wQ) {
-         XQ(wQ)
+       return SM(MM) ? `textureSample(${rM}, ${rM}Sampler, ${iM})` : `texture2D(${rM}, ${iM})`
+     }
+ 
+     function eM(MM, rM, iM, OM, jM) {
+       if (SM(MM)) {
+         return `${jM?"textureSampleLevel":"textureSample"}(${rM}, ${rM}Sampler, ${iM}, ${QM(MM,`round(${OM})`)}${jM?`, ${jM}`:""})`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L7704-L7710` → after: `L189-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L189-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L189-L193) · [Before (L7704-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L7704-L7710)

```diff
-     function qQ() {
-       let QQ, WQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (XQ, qQ, TQ) => {
-         const zQ = performance.now();
-         void 0 === QQ || zQ - QQ > WQ ? (QQ = zQ, setTimeout((() => {
-           wQ(XQ, qQ, TQ)
-         }), 0)) : wQ(XQ, qQ, TQ)
+     function wM(MM) {
+       return SM(MM) ? {
+         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
+       } : {
+         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L7714-L7724` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L197-L198) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L7714-L7724)

```diff
-     function TQ(QQ, WQ, XQ, wQ, qQ) {
-       const TQ = () => {
-         let zQ;
-         const sQ = QQ => {
-           QQ.done ? XQ(QQ.value) : void 0 === zQ ? zQ = !0 : TQ()
-         };
-         do {
-           zQ = void 0, qQ && qQ.aborted ? wQ(new Error("Aborted")) : WQ(QQ, sQ, wQ), void 0 === zQ && (zQ = !1)
-         } while (zQ)
-       };
-       TQ()
+     function tM(MM, rM) {
+       return SM(MM) ? `vertexInputs.${rM}` : rM
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L7728-L7731` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L202) · [Before (L7728-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L7728-L7731)

```diff
-       let XQ;
-       return TQ(QQ, wQ, (QQ => XQ = QQ), (QQ => {
-         throw QQ
-       }), WQ), XQ
+       return SM(MM) ? `vertexOutputs.${rM}` : rM
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L7733-L7736` → after: `L204-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L204-L206) · [Before (L7733-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L7733-L7736)

```diff
-     async function sQ(QQ, WQ, XQ) {
-       return await new Promise(((wQ, qQ) => {
-         TQ(QQ, WQ, wQ, qQ, XQ)
-       }))
+ 
+     function uM(MM, rM) {
+       return SM(MM) ? `fragmentInputs.${rM}` : rM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L7740-L7742` → after: `L210-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L210-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L210-L254) · [Before (L7740-L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L7740-L7742)

```diff
-       return function() {
-         return zQ(QQ(...arguments), WQ)
-       }
+       return SM(MM) ? `uniforms.${rM}` : rM
+     }
+ 
+     function pM(MM, rM, iM) {
+       return SM(MM) ? `frame.${rM}` : iM
+     }
+ 
+     function WM(MM) {
+       return SM(MM) ? "scene.vEyePosition" : "vEyePosition"
+     }
+ 
+     function sM(MM) {
+       return SM(MM) ? "mesh.visibility" : "visibility"
+     }
+ 
+     function DM(MM) {
+ ... (29 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L7745-L7749` → after: `L267-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L267-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/259.js#L267-L280) · [Before (L7745-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/259.js#L7745-L7749)

```diff
-       e: () => qQ,
-       f: () => FQ,
-       h: () => sQ,
-       i: () => zQ
-     })
+       e: () => OM
+     });
+     class OM {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersRepository : OM.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersStore : OM.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.IncludesShadersStore : OM.IncludesShadersStoreWGSL
+       }
+     }
+     OM.ShadersRepository = "src/Shaders/", OM.ShadersStore = {}, OM.IncludesShadersStore = {}, OM.ShadersRepositoryWGSL = "src/ShadersWGSL/", OM.ShadersStoreWGSL = {}, OM.IncludesShadersStoreWGSL = {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L4)

```diff
-   40404: (QQ, WQ, XQ) => {
+   42174: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L6-L9064` → after: `L6-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L6-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L6-L36) · [Before (L6-L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L6-L9064)

```diff
-       d: () => sQ,
-       e: () => BQ,
-       h: () => PQ,
-       l: () => FQ
-     });
-     var wQ = XQ(40199),
-       qQ = XQ(38956),
-       TQ = XQ(40331),
-       zQ = XQ(40240);
-     class sQ {
-       get rG() {
-         return this._isDisposed
-       }
-       constructor(QQ, WQ, XQ) {
-         let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
- ... (9043 more removed lines; see GitHub link above)
+       noaDevTools: () => LM
+     });
+     var OM = iM(38423),
+       SM = iM(38404),
+       jM = iM(3063),
+       aM = iM(1830),
+       PM = iM(42067);
+ 
+     function nM(MM) {
+       const {
+         CL: rM
+       } = MM, iM = rM.engine, OM = {
+         width: iM.getRenderWidth(),
+         height: iM.getRenderHeight()
+       };
+       return {
+ ... (15 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9087-L9093` → after: `L40-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L40-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L40-L227) · [Before (L9087-L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9087-L9093)

```diff
-       _processSubCameras(QQ) {
-         let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (0 === QQ.cameraRigMode || QQ._renderingMultiview) return QQ._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(QQ, void 0, WQ), void this.onAfterRenderCameraObservable.notifyObservers(QQ);
-         if (QQ._useMultiviewToSingleView) this._renderMultiviewToSingleView(QQ);
-         else {
-           this.onBeforeCameraRenderObservable.notifyObservers(QQ);
-           for (let WQ = 0; WQ < QQ._rigCameras.length; WQ++) this._renderForCamera(QQ._rigCameras[WQ], QQ)
+     }
+     var QM = iM(34920);
+ 
+     function zM(MM, rM) {
+       let {
+         width: QM,
+         height: zM,
+         colouring: LM
+       } = rM;
+       const mM = "normals" === LM,
+         HM = "depth" === LM;
+       return new Promise((rM => {
+         try {
+           const hM = (0, jM.f)();
+           if (hM.CL.MJ) return "screenshot" !== MM || null !== LM ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void rM()) : void(0, PM.h)(nM(hM), QM, zM).finally(rM);
+           const JM = hM.CL.engine,
+ ... (172 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9095` → after: `L229-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L229-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L229-L233) · [Before (L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9095)

```diff
-         this._activeCamera = QQ, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(QQ)
+       }))
+     }
+     const LM = new class {
+       constructor() {
+         this.tools = QM.ALL_DEV_TOOLS
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9097-L9114` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L235-L236) · [Before (L9097-L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9097-L9114)

```diff
-       _checkIntersections() {
-         for (let QQ = 0; QQ < this._meshesForIntersections.length; QQ++) {
-           const WQ = this._meshesForIntersections.data[QQ];
-           if (WQ.actionManager)
-             for (let QQ = 0; WQ.actionManager && QQ < WQ.actionManager.actions.length; QQ++) {
-               const XQ = WQ.actionManager.actions[QQ];
-               if (12 === XQ.trigger || 13 === XQ.trigger) {
-                 const QQ = XQ.getTriggerParameter(),
-                   wQ = QQ.mesh ? QQ.mesh : QQ,
-                   qQ = wQ.BqQ(WQ, QQ.usePreciseIntersection),
-                   TQ = WQ._intersectionsInProgress.indexOf(wQ);
-                 qQ && -1 === TQ ? 12 === XQ.trigger ? (XQ._executeCurrent(jQ.CreateNew(WQ, void 0, wQ)), WQ._intersectionsInProgress.push(wQ)) : 13 === XQ.trigger && WQ._intersectionsInProgress.push(wQ) : !qQ && TQ > -1 && (13 === XQ.trigger && XQ._executeCurrent(jQ.CreateNew(WQ, … [truncated]
-                   const WQ = QQ.mesh ? QQ.mesh : QQ;
-                   return wQ === WQ
-                 })) && 13 !== XQ.trigger || WQ._intersectionsInProgress.splice(TQ, 1))
-               }
- ... (2 more removed lines; see GitHub link above)
+       downloadScene(MM, rM) {
+         return zM(MM, rM)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9116-L9131` → after: `L238-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L238-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L238-L242) · [Before (L9116-L9131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9116-L9131)

```diff
-       _advancePhysicsEngineStep(QQ) {}
-       _animate(QQ) {}
-       animate() {
-         if (this._engine.isDeterministicLockStep()) {
-           let QQ = Math.max(TX.MinDeltaTime, Math.min(this._engine.getDeltaTime(), TX.MaxDeltaTime)) + this._timeAccumulator;
-           const WQ = this._engine.getTimeStep(),
-             XQ = 1e3 / WQ / 1e3;
-           let wQ = 0;
-           const qQ = this._engine.getLockstepMaxSteps();
-           let TQ = Math.floor(QQ / WQ);
-           for (TQ = Math.min(TQ, qQ); QQ > 0 && wQ < TQ;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = WQ * XQ, this._animate(WQ), this.onAfterAnimationsObservable.notifyObservers(this), this.Dk && this._advancePhysicsEngineStep(WQ), this.onAfterStepO … [truncated]
-           this._timeAccumulator = QQ < 0 ? 0 : QQ
-         } else {
-           const QQ = this.useConstantAnimationDeltaTime ? 16 : Math.max(TX.MinDeltaTime, Math.min(this._engine.getDeltaTime(), TX.MaxDeltaTime));
-           this._animationRatio = .06 * QQ, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.Dk && this._advancePhysicsEngineStep(QQ)
-         }
+       async setAmbientLightIntensity(MM) {
+         const {
+           Color3: rM
+         } = await Promise.all([iM.e(255), iM.e(258)]).then((() => iM(38167)));
+         (0, jM.f)().CL.Hk().ambientColor = rM.FromArray([MM, MM, MM])
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9133-L9134` → after: `L244-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L244-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L244-L247) · [Before (L9133-L9134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9133-L9134)

```diff
-       _clear() {
-         (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
+       capturePhoto(MM, rM, iM) {
+         return function(MM, rM, iM, OM) {
+           return (0, PM.d)(nM(MM), rM, iM, OM)
+         }((0, jM.f)(), MM, rM, iM)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9136-L9140` → after: `L249-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L249-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L249-L277) · [Before (L9136-L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9136-L9140)

```diff
-       _checkCameraRenderTarget(QQ) {
-         if (QQ?.outputRenderTarget && !QQ?.isRigCamera && (QQ.outputRenderTarget._cleared = !1), QQ?.rigCameras?.length)
-           for (let WQ = 0; WQ < QQ.rigCameras.length; ++WQ) {
-             const XQ = QQ.rigCameras[WQ].outputRenderTarget;
-             XQ && (XQ._cleared = !1)
+     }
+   },
+   42067: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => PM,
+       h: () => nM
+     });
+     var OM = iM(1845);
+     const SM = 33177600,
+       jM = 3e4;
+     let aM = !1;
+ 
+     function PM(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: PM = 1,
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9142-L9154` → after: `L279-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L279-L282) · [Before (L9142-L9154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9142-L9154)

```diff
-       }
-       resetDrawCache(QQ) {
-         if (this.meshes)
-           for (const WQ of this.meshes) WQ.resetDrawCache(QQ)
-       }
-       _renderWithFrameGraph() {
-         let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this.activeCamera = null, this.activeCameras = null, QQ)
-           for (const XQ of this.cameras)
-             if (XQ.update(), 0 !== XQ.cameraRigMode)
-               for (let QQ = 0; QQ < XQ._rigCameras.length; QQ++) XQ._rigCameras[QQ].update();
-         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
+         };
+         LM = setTimeout((() => {
+           hM(), zM(new Error("No frame was drawn to capture"))
+         }), jM);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9156-L9203` → after: `L284-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L284-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L284-L315) · [Before (L9156-L9203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9156-L9203)

```diff
-           this._renderWithFrameGraphAfterBeforeRender(WQ)
-         } finally {
-           this._renderingMeshEvaluationDepth--
-         }
-       }
-       _renderWithFrameGraphAfterBeforeRender(QQ) {
-         this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
-         const WQ = this._frameGraph?.findMainCamera() ?? null;
-         if (this.renderTargetsEnabled) {
-           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), wQ.g.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
-           for (let QQ = 0; QQ < this._renderTargets.length; QQ++) {
-             const XQ = this._renderTargets.data[QQ],
-               wQ = XQ.activeCamera || WQ;
-             this._renderRenderTarget(XQ, wQ, !0, this.dumpNextRenderTargets)
-           }
-           wQ.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
- ... (32 more removed lines; see GitHub link above)
+           const OM = function(MM, rM, iM) {
+             const OM = Math.max(1, MM),
+               jM = Math.max(1, rM),
+               aM = Math.min(1, iM / Math.max(OM, jM), Math.sqrt(SM / (OM * jM)));
+             return {
+               width: Math.max(1, Math.floor(OM * aM)),
+               height: Math.max(1, Math.floor(jM * aM))
+             }
+           }(rM, iM, MM.maxTextureSize);
+           MM.resize(OM.width, OM.height, PM * OM.width / Math.max(1, rM))
+         } catch (JM) {
+           return hM(), void zM(JM)
+         }
+         HM = MM.onFrameDrawn((() => {
+           if (mM--, mM > 0) return;
+           const {
+ ... (16 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9205-L9206` → after: `L317-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L317-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L317-L325) · [Before (L9205-L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9205-L9206)

```diff
-         }
-         this.frameGraph?.execute()
+         }))
+       }))) : Promise.reject(new Error("Screenshots need a game to be running"))
+     }
+     async function nM(MM, rM, iM) {
+       try {
+         const SM = await PM(MM, rM, iM);
+         (0, OM.c)(SM.blob, `bloxd-screenshot-${SM.width}x${SM.height}-${Date.now()}.png`)
+       } catch (SM) {
+         console.error("Error taking screenshot:", SM)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9208-L9213` → after: `L327-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L327-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L327-L351) · [Before (L9208-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9208-L9213)

```diff
-       _renderRenderTarget(QQ, WQ) {
-         let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         if (this._intermediateRendering = !0, QQ._shouldRender()) {
-           if (this._renderId++, this.activeCamera = WQ, !this.activeCamera) throw new Error("Active camera not set");
-           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), QQ.render(XQ, wQ)
+     }
+   },
+   38423: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => QM,
+       f: () => PM,
+       j: () => aM
+     });
+     var OM = iM(38418),
+       SM = iM(38426);
+     let jM = 0;
+ 
+     function aM(MM, rM) {
+       const iM = MM;
+       iM._noaFaceGroups = null !== rM && void 0 !== rM ? rM : null, iM._noaFaceEpoch = -1, iM._noaFaceMask = -1, iM._noaFaceCount = -1, iM._noaFaceMaterial = null;
+       const OM = MM.iG;
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9215` → after: `L353-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L353-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L353-L362) · [Before (L9215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9215)

```diff
-         this._intermediateRendering = !1
+       } else jM = Math.max(0, jM - 1)
+     }
+ 
+     function nM(MM, rM, iM) {
+       let SM = -1,
+         jM = 0;
+       for (let aM = 0; aM < OM.g; aM++) {
+         const iM = MM[aM],
+           PM = MM[aM + 1];
+         PM > iM && rM & 1 << OM.c[aM] && (SM < 0 && (SM = iM), jM = PM)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9217-L9226` → after: `L364-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L364-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L364-L368) · [Before (L9217-L9226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9217-L9226)

```diff
-       render() {
-         let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.rG) return;
-         const XQ = this._renderingMeshEvaluationDepth;
-         try {
-           this._renderFrame(QQ, WQ)
-         } finally {
-           this._renderingMeshEvaluationDepth = XQ
-         }
+       return SM < 0 ? (iM[0] = 0, iM[1] = 0, 0) : (iM[0] = SM, iM[1] = jM - SM, jM - SM)
+     }
+     class QM {
+       constructor(MM, rM) {
+         this.HL = MM, this.engine = rM, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9228-L9252` → after: `L370-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L370-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L370-L407) · [Before (L9228-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9228-L9252)

```diff
-       _renderFrame(QQ, WQ) {
-         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), yQ.e.sE = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
-           for (const XQ of this.activeCameras) this._checkCameraRenderTarget(XQ);
-         this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimatio … [truncated]
-         for (let XQ = 0, wQ = this._beforeCameraUpdateStage; XQ < wQ.length; XQ++) {
-           wQ[XQ].action()
-         }
-         if (QQ)
-           if (this.activeCameras && this.activeCameras.length > 0)
-             for (let XQ = 0; XQ < this.activeCameras.length; XQ++) {
-               const QQ = this.activeCameras[XQ];
-               if (QQ.update(), 0 !== QQ.cameraRigMode)
-                 for (let WQ = 0; WQ < QQ._rigCameras.length; WQ++) QQ._rigCameras[WQ].update()
-             } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
-               for (let XQ = 0; XQ < this.activeCamera._rigCameras.length; XQ++) this.activeCamera._rigCameras[XQ].update();
-         if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(QQ, WQ);
- ... (9 more removed lines; see GitHub link above)
+       apply(MM, rM) {
+         if (!rM) return;
+         const iM = rM.getProjectionMatrix().m,
+           aM = 0 === jM && 0 === iM[15],
+           PM = rM.globalPosition,
+           {
+             engine: QM
+           } = this,
+           zM = aM ? (0, SM.c)(iM, QM.getRenderWidth(), QM.getRenderHeight()) : 0;
+         PM.x === this.eyeX && PM.y === this.eyeY && PM.z === this.eyeZ && zM === this.focalPx && aM === this.culling || (this.epoch++, this.eyeX = PM.x, this.eyeY = PM.y, this.eyeZ = PM.z, this.focalPx = zM, this.culling = aM);
+         const {
+           epoch: LM,
+           range: mM
+         } = this, HM = this.HL / 2, hM = HM * Math.sqrt(3), JM = MM.data, dM = MM.length;
+         let yM = 0;
+         for (let jM = 0; jM < dM; jM++) {
+ ... (22 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9280` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L410) · [Before (L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9280)

```diff
-           this._toBeDisposed.length = 0
+           rM && 0 === MM._noaFaceCount || (JM[yM++] = MM)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9282` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L412) · [Before (L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9282)

```diff
-         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
+         MM.length = yM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9284-L9320` → after: `L414-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L414-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L414-L443) · [Before (L9284-L9320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9284-L9320)

```diff
-       freezeMaterials() {
-         for (let QQ = 0; QQ < this.materials.length; QQ++) this.materials[QQ].freeze()
-       }
-       unfreezeMaterials() {
-         for (let QQ = 0; QQ < this.materials.length; QQ++) this.materials[QQ].unfreeze()
-       }
-       dispose() {
-         if (this.rG) return;
-         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
-           for (const QQ of this._activeAnimatables) QQ.onAnimationEndObservable.clear(), QQ.onAnimationEnd = null;
-           this.stopAllAnimations()
-         }
-         this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSyste … [truncated]
-         const QQ = this._activeRequests.slice();
-         for (const TQ of QQ) TQ.abort();
-         this._activeRequests.length = 0;
- ... (21 more removed lines; see GitHub link above)
+     }
+   },
+   38404: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => nM,
+       e: () => PM
+     });
+     const OM = new WeakSet;
+     let SM = 0;
+     const jM = new Set;
+ 
+     function aM(MM, rM) {
+       MM._data = rM
+     }
+ 
+     function PM(MM) {
+ ... (14 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9597-L9599` → after: `L457-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L457-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L457-L463) · [Before (L9597-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9597-L9599)

```diff
-     function sX() {
-       zX || (zX = !0, (0, WX.d)("BABYLON.Scene", TX))
-     }(MQ = TX.prototype).sortActiveAnimatables ?? (MQ.sortActiveAnimatables = (0, UQ.h)("Scene", "sortActiveAnimatables")), (QW = TX.prototype).beginWeightedAnimation ?? (QW.beginWeightedAnimation = (0, UQ.h)("Scene", "beginWeightedAnimation")), (WW = TX.prototype).beginAnimation … [truncated]
+     function QM(MM) {
+       const rM = MM.getBuffer();
+       if (!rM || !(rM.vL > 0)) return;
+       const iM = MM._engine,
+         OM = new Uint8Array(rM.vL);
+       iM.bindArrayBuffer(rM), iM._gl.getBufferSubData(iM._gl.ARRAY_BUFFER, 0, OM), iM._resetVertexBufferBinding(), aM(MM, OM)
+     }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9601` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L465) · [Before (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9601)

```diff
-   40432: (QQ, WQ, XQ) => {
+   38418: (MM, rM, iM) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9604-L9628` → after: `L468-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L468-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L468-L489) · [Before (L9604-L9628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9604-L9628)

```diff
-       e: () => qQ
-     });
-     class wQ {}
-     wQ.NAME_EFFECTLAYER = "EffectLayer", wQ.NAME_LAYER = "Layer", wQ.NAME_LENSFLARESYSTEM = "LensFlareSystem", wQ.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", wQ.NAME_PARTICLESYSTEM = "ParticleSystem", wQ.NAME_GAMEPAD = "Gamepad", wQ.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
-     class qQ extends Array {
-       constructor(QQ) {
-         super(...QQ)
-       }
-       static Create() {
-         return Object.create(qQ.prototype)
-       }
-       registerStep(QQ, WQ, XQ) {
-         let wQ, qQ = 0;
-         for (; qQ < this.length; qQ++) {
-           if (wQ = this[qQ].index, QQ < wQ) break
-         }
- ... (9 more removed lines; see GitHub link above)
+       g: () => jM,
+       k: () => nM,
+       l: () => OM,
+       n: () => PM,
+       r: () => SM,
+       t: () => QM
+     });
+     const OM = 6,
+       SM = [0, 2, 4, 1, 3, 5, 0, 2],
+       jM = 6,
+       aM = [1, 0, 3, 2, 5, 4];
+     for (let zM = jM; zM < SM.length; zM++)
+       if (SM[zM] !== SM[zM - jM]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
+     const PM = SM.length + 1,
+       nM = (() => {
+         const MM = [];
+ ... (6 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9631` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L492) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9631)

```diff
-   40260: (QQ, WQ, XQ) => {
+   38426: (MM, rM, iM) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9633` → after: `L494-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L494-L495) · [Before (L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9633)

```diff
-       d: () => zQ,
+       c: () => PM,
+       e: () => nM,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9636-L9637` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L498) · [Before (L9636-L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9636-L9637)

```diff
-       n: () => qQ,
-       p: () => TQ
+       l: () => hM
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9640-L9663` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L506-L507) · [Before (L9640-L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9640-L9663)

```diff
-     function wQ(QQ, WQ, XQ, wQ, qQ, TQ) {
-       function zQ(QQ) {
-         if (void 0 !== QQ && "function" !== typeof QQ) throw new TypeError("Function expected");
-         return QQ
-       }
-       for (var sQ, FQ = wQ.kind, PQ = "getter" === FQ ? "get" : "setter" === FQ ? "set" : "value", gQ = !WQ && QQ ? wQ.static ? QQ : QQ.prototype : null, JQ = WQ || (gQ ? Object.getOwnPropertyDescriptor(gQ, wQ.name) : {}), rQ = !1, IQ = XQ.length - 1; IQ >= 0; IQ--) {
-         var jQ = {};
-         for (var BQ in wQ) jQ[BQ] = "access" === BQ ? {} : wQ[BQ];
-         for (var BQ in wQ.access) jQ.access[BQ] = wQ.access[BQ];
-         jQ.addInitializer = function(QQ) {
-           if (rQ) throw new TypeError("Cannot add initializers after decoration has completed");
-           TQ.push(zQ(QQ || null))
-         };
-         var yQ = (0, XQ[IQ])("accessor" === FQ ? {
-           get: JQ.get,
-           set: JQ.set
- ... (8 more removed lines; see GitHub link above)
+     function PM(MM, rM, iM) {
+       return Math.min(Math.abs(MM[0] * rM), Math.abs(MM[5] * iM)) / 2
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9666-L9668` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L510-L511) · [Before (L9666-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9666-L9668)

```diff
-     function qQ(QQ, WQ, XQ) {
-       for (var wQ = arguments.length > 2, qQ = 0; qQ < WQ.length; qQ++) XQ = wQ ? WQ[qQ].call(QQ, XQ) : WQ[qQ].call(QQ);
-       return wQ ? XQ : void 0
+     function nM(MM, rM) {
+       return SM + jM * MM * MM / rM
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9671-L9675` → after: `L514-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L514-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L514-L520) · [Before (L9671-L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9671-L9675)

```diff
-     function TQ(QQ, WQ, XQ) {
-       return "symbol" === typeof WQ && (WQ = WQ.description ? "[".concat(WQ.description, "]") : ""), Object.defineProperty(QQ, "name", {
-         configurable: !0,
-         value: XQ ? "".concat(XQ, " ", WQ) : WQ
-       })
+     function QM(MM, rM, iM, SM, jM) {
+       const aM = OM.n;
+       return zM(MM[aM], MM[aM + 1], MM[aM + 2], MM[aM + 3], MM[aM + 4], MM[aM + 5], rM, iM, SM, jM)
+     }
+ 
+     function zM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
+       return (aM <= MM - QM ? 0 : 1) | (aM >= rM + QM ? 0 : 2) | (PM <= iM - QM ? 0 : 4) | (PM >= OM + QM ? 0 : 8) | (nM <= SM - QM ? 0 : 16) | (nM >= jM + QM ? 0 : 32)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9677-L9678` → after: `L522-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L522-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L522-L538) · [Before (L9677-L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9677-L9678)

```diff
-     Object.create;
-     Object.create;
+     const LM = (() => {
+         const MM = [];
+         for (let rM = 0; rM < OM.r.length; rM++) {
+           let iM = 0;
+           for (let SM = rM + 1; SM <= OM.r.length; SM++) {
+             const jM = 1 << OM.r[SM - 1];
+             if (iM & jM) break;
+             iM |= jM, MM.push({
+               start: rM,
+               end: SM,
+               Nj: iM
+             })
+           }
+         }
+         return MM
+       })(),
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9680-L9683` → after: `L540-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L540-L542) · [Before (L9680-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9680-L9683)

```diff
-     function zQ(QQ, WQ, XQ, wQ) {
-       if ("a" === XQ && !wQ) throw new TypeError("Private accessor was defined without a getter");
-       if ("function" === typeof WQ ? QQ !== WQ || !wQ : !WQ.has(QQ)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
-       return "m" === XQ ? wQ : "a" === XQ ? wQ.call(QQ) : wQ ? wQ.value : WQ.get(QQ)
+     function HM(MM, rM) {
+       const iM = OM.k[rM];
+       return MM[iM + 1] - MM[iM]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9686-L9690` → after: `L545-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L545-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/260.js#L545-L579) · [Before (L9686-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/260.js#L9686-L9690)

```diff
-     function sQ(QQ, WQ, XQ, wQ, qQ) {
-       if ("m" === wQ) throw new TypeError("Private method is not writable");
-       if ("a" === wQ && !qQ) throw new TypeError("Private accessor was defined without a setter");
-       if ("function" === typeof WQ ? QQ !== WQ || !qQ : !WQ.has(QQ)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
-       return "a" === wQ ? qQ.call(QQ, XQ) : qQ ? qQ.value = XQ : WQ.set(QQ, XQ), XQ
+     function hM(MM, rM, iM) {
+       let SM = 0;
+       for (let aM = 0; aM < OM.l; aM++) HM(MM, aM) > 0 && (SM |= 1 << aM);
+       if (0 === (rM &= SM)) return 0;
+       if (rM === SM) return iM[0] = 0, iM[1] = MM[OM.g], 1;
+       let jM = null,
+         PM = 1 / 0;
+       for (const QM of function(MM) {
+           let rM = mM[MM];
+           if (rM) return rM;
+           const iM = new Map,
+             OM = (MM, rM) => {
+               const OM = 4 * MM + rM.length / 2;
+               iM.has(OM) || iM.set(OM, {
+                 Nj: MM,
+                 windows: rM
+ ... (19 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/261.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/261.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L2)

```diff
- export const ids = [261, 362];
+ export const ids = [261, 262];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L4-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L4-L247) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L4)

```diff
-   40126: (QQ, WQ, XQ) => {
+   41362: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => zM,
+       e: () => mM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(38173),
+       PM = iM(41366),
+       nM = iM(41328),
+       QM = iM(38085);
+     let zM = (() => {
+         var MM;
+         let rM, iM, nM = PM.d,
+           QM = [],
+ ... (228 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L9-L10` → after: `L306-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L306-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L306-L340) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L9-L10)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersRepository : wQ.ShadersRepositoryWGSL
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
+       }
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
+       }
+       static _AddLogEntry(MM) {
+         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
+ ... (19 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L12-L13` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L342-L343) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L12-L13)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersStore : wQ.ShadersStoreWGSL
+       static get LogCache() {
+         return OM._LogCache
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L15-L16` → after: `L345-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L345-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L345-L355) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L15-L16)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.IncludesShadersStore : wQ.IncludesShadersStoreWGSL
+       static ClearLogCache() {
+         OM._LogCache = "", OM._LogLimitOutputs = {}, OM.errorsCount = 0
+       }
+       static set LogLevels(MM) {
+         OM.Log = OM._LogDisabled, OM.Warn = OM._LogDisabled, OM.Error = OM._LogDisabled;
+         const rM = [OM.MessageLogLevel, OM.WarningLogLevel, OM.ErrorLogLevel];
+         for (const iM of rM)
+           if ((MM & iM) === iM) {
+             const MM = this._Levels[iM];
+             OM[MM.name] = OM._LogEnabled.bind(OM, iM)
+           }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L19` → after: `L358-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L358-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L358-L370) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L19)

```diff
-     wQ.ShadersRepository = "src/Shaders/", wQ.ShadersStore = {}, wQ.IncludesShadersStore = {}, wQ.ShadersRepositoryWGSL = "src/ShadersWGSL/", wQ.ShadersStoreWGSL = {}, wQ.IncludesShadersStoreWGSL = {}
+     OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L21` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L372) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L21)

```diff
-   61542: (QQ, WQ, XQ) => {
+   63893: (MM, rM, iM) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L23` → after: `L374-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L374-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L374-L381) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L23)

```diff
-       postprocessVertexShader: () => zQ
+       CreateScreenshot: () => ZM,
+       CreateScreenshotAsync: () => oM,
+       CreateScreenshotForFrameGraphAsync: () => AM,
+       CreateScreenshotUsingRenderTarget: () => YM,
+       CreateScreenshotUsingRenderTargetAsync: () => NM,
+       CreateScreenshotWithResizeAsync: () => fM,
+       RegisterScreenshotTools: () => BM,
+       ScreenshotTools: () => vM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L25-L28` → after: `L383-L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L383-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L383-L1110) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L25-L28)

```diff
-     var wQ = XQ(40126);
-     const qQ = "postprocessVertexShader",
-       TQ = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     wQ.b.ShadersStore[qQ] || (wQ.b.ShadersStore[qQ] = TQ);
+     var OM = iM(41560),
+       SM = iM(44465),
+       jM = iM(44439),
+       aM = iM(41121),
+       PM = iM(44445),
+       nM = iM(38064),
+       QM = iM(38040);
+     class zM extends PM.c {
+       static _GetDefines(MM) {
+         if (!MM) return null;
+         return MM.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
+       }
+       _gatherImports(MM, rM) {
+         MM ? (this._webGPUReady = !0, rM.push(Promise.all([iM.e(683).then((() => iM(64144))), iM.e(684).then((() => iM(64151)))]))) : rM.push(Promise.all([iM.e(685).then((() => iM(64153))), iM.e(686).then((() => iM(64161)))]))
+       }
+       constructor(MM) {
+ ... (712 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L30-L31` → after: `L1112-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1112-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/261.js#L1112-L1124) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/261.js#L30-L31)

```diff
-       name: qQ,
-       shader: TQ
+       CreateScreenshot: ZM,
+       CreateScreenshotAsync: oM,
+       CreateScreenshotWithResizeAsync: fM,
+       CreateScreenshotUsingRenderTarget: YM,
+       CreateScreenshotUsingRenderTargetAsync: NM,
+       CreateScreenshotForFrameGraphAsync: AM
+     };
+     let FM = !1;
+ 
+     function BM() {
+       if (FM) return;
+       FM = !0;
+       HM.e.CreateScreenshot = ZM, HM.e.CreateScreenshotAsync = oM, HM.e.CreateScreenshotUsingRenderTarget = YM, HM.e.CreateScreenshotUsingRenderTargetAsync = NM
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L4)

```diff
-   40331: (QQ, WQ, XQ) => {
+   38740: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6-L243` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L6) · [Before (L6-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L6-L243)

```diff
-       e: () => rQ,
-       h: () => JQ,
-       j: () => FQ,
-       l: () => IQ,
-       p: () => PQ,
-       t: () => sQ,
-       w: () => gQ
-     });
-     var wQ = XQ(38956),
-       qQ = XQ(40337);
- 
-     function TQ(QQ, WQ, XQ, wQ) {
-       switch (WQ) {
-         case 5120: {
-           let WQ = QQ.getInt8(XQ);
-           return wQ && (WQ = Math.max(WQ / 127, -1)), WQ
- ... (222 more removed lines; see GitHub link above)
+       d: () => SM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L246-L332` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L10) · [Before (L246-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L246-L332)

```diff
-       constructor() {
-         this.children = []
-       }
-       isValid(QQ) {
-         return !0
-       }
-       process(QQ, WQ, XQ) {
-         let wQ = "";
-         if (this.line) {
-           let XQ = this.line;
-           const qQ = WQ.processor;
-           if (qQ) {
-             qQ.lineProcessor && (XQ = qQ.lineProcessor(XQ, WQ.isFragment, WQ.processingContext));
-             const wQ = WQ.processor?.attributeKeywordName ?? "attribute",
-               TQ = WQ.isFragment && WQ.processor?.varyingFragmentKeywordName ? WQ.processor?.varyingFragmentKeywordName : !WQ.isFragment && WQ.processor?.varyingVertexKeywordName ? WQ.processor?.varyingVertexKeywordName : "varying";
-             if (!WQ.isFragment && qQ.attributeProcessor && this.line.startsWith(wQ)) XQ = qQ.attributeProcessor(this.line, QQ, WQ.processingContext);
- ... (71 more removed lines; see GitHub link above)
+       static GetPlanes(MM) {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L334-L375` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L12-L13) · [Before (L334-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L334-L375)

```diff
-         for (const XQ of QQ)
-           if (void 0 === sQ._OperatorPriority[XQ]) WQ.push(XQ);
-           else {
-             const QQ = WQ[WQ.length - 1],
-               wQ = WQ[WQ.length - 2];
-             WQ.length -= 2, WQ.push(`(${wQ}${XQ}${QQ})`)
-           } return WQ[WQ.length - 1]
-       }
-       static infixToPostfix(QQ) {
-         const WQ = sQ._InfixToPostfixCache.get(QQ);
-         if (WQ) return WQ.accessTime = Date.now(), WQ.result;
-         if (!QQ.includes("&&") && !QQ.includes("||") && !QQ.includes(")") && !QQ.includes("(")) return [QQ];
-         const XQ = [];
-         let wQ = -1;
-         const qQ = () => {
-             gQ = gQ.trim(), "" !== gQ && (XQ.push(gQ), gQ = "")
- ... (26 more removed lines; see GitHub link above)
+         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
+         return SM.GetPlanesToRef(MM, rM), rM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L377-L405` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L15-L17) · [Before (L377-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L377-L405)

```diff
-       static ClearCache() {
-         const QQ = Array.from(sQ._InfixToPostfixCache.entries()).sort(((QQ, WQ) => QQ[1].accessTime - WQ[1].accessTime));
-         for (let WQ = 0; WQ < sQ.InfixToPostfixCacheCleanupSize; WQ++) sQ._InfixToPostfixCache.delete(QQ[WQ][0])
-       }
-     }
-     sQ.InfixToPostfixCacheLimitSize = 5e4, sQ.InfixToPostfixCacheCleanupSize = 25e3, sQ._InfixToPostfixCache = new Map, sQ._OperatorPriority = {
-       ")": 0,
-       "(": 1,
-       "||": 2,
-       "&&": 3
-     }, sQ._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
-     class FQ extends sQ {
-       constructor(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         super(), this.define = QQ, this.not = WQ
-       }
- ... (13 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L407-L410` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L19-L21) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L407-L410)

```diff
-     }
-     class JQ extends sQ {
-       constructor(QQ, WQ, XQ) {
-         super(), this.define = QQ, this.operand = WQ, this.testValue = XQ
+       static GetFarPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L412-L413` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L23-L25) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L412-L413)

```diff
-       toString() {
-         return `${this.define} ${this.operand} ${this.testValue}`
+       static GetLeftPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[0], rM.normal.y = iM[7] + iM[4], rM.normal.z = iM[11] + iM[8], rM.d = iM[15] + iM[12], rM.normalize()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L415-L439` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L27-L29) · [Before (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L415-L439)

```diff
-       isTrue(QQ) {
-         let WQ = !1;
-         const XQ = parseInt(void 0 != QQ[this.define] ? QQ[this.define] : this.define),
-           wQ = parseInt(void 0 != QQ[this.testValue] ? QQ[this.testValue] : this.testValue);
-         if (isNaN(XQ) || isNaN(wQ)) return !1;
-         switch (this.operand) {
-           case ">":
-             WQ = XQ > wQ;
-             break;
-           case "<":
-             WQ = XQ < wQ;
-             break;
-           case "<=":
-             WQ = XQ <= wQ;
-             break;
-           case ">=":
- ... (9 more removed lines; see GitHub link above)
+       static GetRightPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] - iM[0], rM.normal.y = iM[7] - iM[4], rM.normal.z = iM[11] - iM[8], rM.d = iM[15] - iM[12], rM.normalize()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L441-L485` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L31-L33) · [Before (L441-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L441-L485)

```diff
-     }
-     var rQ = XQ(40153),
-       IQ = XQ(40150);
-     const jQ = /defined\s*?\((.+?)\)/g,
-       BQ = /defined\s*?\[(.+?)\]/g,
-       yQ = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
-       VQ = /__decl__/,
-       DQ = /light\{X\}.(\w*)/g,
-       pQ = /\{X\}/g,
-       GQ = [],
-       UQ = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
- 
-     function bQ(QQ) {
-       QQ.processor && QQ.processor.initializeShaders && QQ.processor.initializeShaders(QQ.processingContext)
-     }
- 
- ... (29 more removed lines; see GitHub link above)
+       static GetTopPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] - iM[1], rM.normal.y = iM[7] - iM[5], rM.normal.z = iM[11] - iM[9], rM.d = iM[15] - iM[13], rM.normalize()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L487-L537` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L35-L37) · [Before (L487-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L487-L537)

```diff
-     }
- 
-     function HQ(QQ) {
-       const WQ = /defined\((.+)\)/.exec(QQ);
-       if (WQ && WQ.length) return new FQ(WQ[1].trim(), "!" === QQ[0]);
-       const XQ = ["==", "!=", ">=", "<=", "<", ">"];
-       let wQ = "",
-         qQ = 0;
-       for (wQ of XQ)
-         if (qQ = QQ.indexOf(wQ), qQ > -1) break;
-       if (-1 === qQ) return new FQ(QQ);
-       const TQ = QQ.substring(0, qQ).trim(),
-         zQ = QQ.substring(qQ + wQ.length).trim();
-       return new JQ(TQ, wQ, zQ)
-     }
- 
- ... (35 more removed lines; see GitHub link above)
+       static GetBottomPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[1], rM.normal.y = iM[7] + iM[5], rM.normal.z = iM[11] + iM[9], rM.d = iM[15] + iM[13], rM.normalize()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L539-L724` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L39-L40) · [Before (L539-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L539-L724)

```diff
-     }
- 
-     function hQ(QQ, WQ, XQ) {
-       for (; QQ.canRead;) {
-         QQ.lineIndex++;
-         const qQ = QQ.currentLine;
-         if (qQ.indexOf("#") >= 0) {
-           const wQ = UQ.exec(qQ);
-           if (wQ && wQ.length) {
-             switch (wQ[0]) {
-               case "#ifdef": {
-                 const wQ = new TQ;
-                 WQ.children.push(wQ);
-                 const zQ = aQ(qQ, 6);
-                 wQ.children.push(zQ), lQ(QQ, wQ, zQ, XQ);
-                 break
- ... (170 more removed lines; see GitHub link above)
+       static GetPlanesToRef(MM, rM) {
+         SM.GetNearPlaneToRef(MM, rM[0]), SM.GetFarPlaneToRef(MM, rM[1]), SM.GetLeftPlaneToRef(MM, rM[2]), SM.GetRightPlaneToRef(MM, rM[3]), SM.GetTopPlaneToRef(MM, rM[4]), SM.GetBottomPlaneToRef(MM, rM[5])
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L726-L773` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L42-L45) · [Before (L726-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L726-L773)

```diff
-       const qQ = new Uint8Array(WQ);
-       return wQ && qQ.set(new Uint8Array(wQ)), qQ
-     }
-   },
-   40153: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => PQ,
-       g: () => gQ,
-       h: () => FQ,
-       i: () => qQ
-     });
-     const wQ = {};
- 
-     function qQ(QQ) {
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !wQ[QQ]) return wQ[QQ] = !0, `${QQ} needs to be imported before as it contains a side-effect required by your code.`
-     }
- ... (32 more removed lines; see GitHub link above)
+       static IsPointInFrustum(MM, rM) {
+         for (let iM = 0; iM < 6; iM++)
+           if (rM[iM].dotCoordinate(MM) < 0) return !1;
+         return !0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L777-L795` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L49) · [Before (L777-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L777-L795)

```diff
-   40142: (QQ, WQ, XQ) => {
-     function wQ() {
-       return "undefined" !== typeof window
-     }
- 
-     function qQ() {
-       return "undefined" !== typeof navigator
-     }
- 
-     function TQ() {
-       return "undefined" !== typeof document
-     }
- 
-     function zQ(QQ) {
-       let WQ = "",
-         XQ = QQ.firstChild;
- ... (3 more removed lines; see GitHub link above)
+   38744: (MM, rM, iM) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L797-L807` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L51) · [Before (L797-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L797-L807)

```diff
-       e: () => zQ,
-       f: () => TQ,
-       h: () => qQ,
-       l: () => wQ
-     })
-   },
-   40320: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => wQ,
-       f: () => qQ,
-       g: () => TQ
+       d: () => SM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L809-L824` → after: `L53-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L53-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L53-L132) · [Before (L809-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L809-L824)

```diff
-     class wQ extends Error {}
-     wQ._setPrototypeOf = Object.setPrototypeOf || ((QQ, WQ) => (QQ.__proto__ = WQ, QQ));
-     const qQ = {
-       MeshInvalidPositionsError: 0,
-       UnsupportedTextureError: 1e3,
-       GLTFLoaderUnexpectedMagicError: 2e3,
-       SceneLoaderError: 3e3,
-       LoadFileError: 4e3,
-       RequestFileError: 4001,
-       ReadFileError: 4002
-     };
-     class TQ extends wQ {
-       constructor(QQ, WQ, XQ) {
-         super(QQ), this.errorCode = WQ, this.innerError = XQ, this.name = "RuntimeError", wQ._setPrototypeOf(this, TQ.prototype)
-       }
-     }
+     var OM = iM(38040);
+     class SM {
+       constructor(MM, rM, iM, SM) {
+         this.normal = new OM.q(MM, rM, iM), this.d = SM
+       }
+       HOM() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let MM = this.normal.getHashCode();
+ ... (64 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L826` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L134) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L826)

```diff
-   40307: (QQ, WQ, XQ) => {
+   39705: (MM, rM, iM) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L828-L837` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L136) · [Before (L828-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L828-L837)

```diff
-       c: () => cQ,
-       e: () => pQ,
-       i: () => aQ,
-       j: () => hQ,
-       n: () => dQ,
-       r: () => bQ,
-       u: () => vQ,
-       w: () => uQ,
-       A: () => HQ,
-       D: () => GQ
+       b: () => jM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L839-L1054` → after: `L138-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L138-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L138-L169) · [Before (L839-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L839-L1054)

```diff
-     var wQ = XQ(40314),
-       qQ = XQ(40142),
-       TQ = XQ(37399);
-     class zQ {}
-     zQ.FilesToLoad = {};
-     var sQ = XQ(40320),
-       FQ = XQ(40327),
-       PQ = XQ(37392),
-       gQ = XQ(40150),
-       JQ = XQ(40158),
-       rQ = XQ(38956),
-       IQ = XQ(40164),
-       jQ = XQ(40331);
-     const BQ = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
-     class yQ extends sQ.g {
-       constructor(QQ, WQ) {
- ... (200 more removed lines; see GitHub link above)
+     var OM = iM(39711);
+     const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
+       ...MM
+     } : null : MM.clone(rM) : null;
+     class jM {
+       static DeepCopy(MM, rM, iM, jM) {
+         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const PM = function(MM) {
+           const rM = [];
+           do {
+             const iM = Object.getOwnPropertyNames(MM);
+             for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
+           } while (MM = Object.getPrototypeOf(MM));
+           return rM
+         }(MM);
+         for (const QM of PM) {
+ ... (16 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1056` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L171) · [Before (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L1056)

```diff
-             FQ ? FQ(void 0, sQ) : rQ.b.Error(sQ.message || "Failed to parse the Data URL")
+             OM.e.Warn(nM.message)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1219-L1238` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L174) · [Before (L1219-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L1219-L1238)

```diff
-       }), Object.defineProperty(RQ, "PreprocessUrl", {
-         get: function() {
-           return XQ.PreprocessUrl
-         },
-         set: function(QQ) {
-           XQ.PreprocessUrl = QQ
-         }
-       }), Object.defineProperty(RQ, "CorsBehavior", {
-         get: function() {
-           return XQ.CorsBehavior
-         },
-         set: function(QQ) {
-           XQ.CorsBehavior = QQ
-         }
-       })
-     };
- ... (4 more removed lines; see GitHub link above)
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1241-L1248` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L177) · [Before (L1241-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L1241-L1248)

```diff
-   40337: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => sQ,
-       f: () => TQ,
-       i: () => zQ
-     });
-     let wQ = null;
- 
+   38885: (MM, rM, iM) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1250-L1297` → after: `L179-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L179-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L179-L182) · [Before (L1250-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L1250-L1297)

```diff
-       if (wQ) return wQ;
-       const QQ = new ArrayBuffer(4),
-         WQ = new Float32Array(QQ),
-         XQ = new Uint32Array(QQ),
-         qQ = new Uint32Array(512),
-         TQ = new Uint32Array(512);
-       for (let wQ = 0; wQ < 256; ++wQ) {
-         const QQ = wQ - 127;
-         QQ < -24 ? (qQ[wQ] = 0, qQ[256 | wQ] = 32768, TQ[wQ] = 24, TQ[256 | wQ] = 24) : QQ < -14 ? (qQ[wQ] = 1024 >> -QQ - 14, qQ[256 | wQ] = 1024 >> -QQ - 14 | 32768, TQ[wQ] = -QQ - 1, TQ[256 | wQ] = -QQ - 1) : QQ <= 15 ? (qQ[wQ] = QQ + 15 << 10, qQ[256 | wQ] = QQ + 15 << 10 | 3 … [truncated]
-       }
-       const zQ = new Uint32Array(2048),
-         sQ = new Uint32Array(64),
-         FQ = new Uint32Array(64);
-       for (let wQ = 1; wQ < 1024; ++wQ) {
-         let QQ = wQ << 13,
-           WQ = 0;
- ... (32 more removed lines; see GitHub link above)
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
+         const rM = 16 * Math.random() | 0;
+         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
+       }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1305-L1323` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L186) · [Before (L1305-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L1305-L1323)

```diff
-     });
-     const wQ = QQ => {
-         const WQ = ArrayBuffer.isView(QQ) ? new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength) : new Uint8Array(QQ);
-         return "function" === typeof WQ.toBase64 ? WQ.toBase64() : function(QQ) {
-           const WQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ = "",
-             gQ = 0;
-           for (; gQ < QQ.length;) XQ = QQ[gQ++], wQ = gQ < QQ.length ? QQ[gQ++] : Number.NaN, qQ = gQ < QQ.length ? QQ[gQ++] : Number.NaN, TQ = XQ >> 2, zQ = (3 & XQ) << 4 | wQ >> 4, sQ = (15 & wQ) << 2 | qQ >> 6, FQ = 63 & qQ, isNaN(wQ) ? sQ = FQ = 64 : isNaN(qQ) && (FQ = 64), P … [truncated]
-           return PQ
-         }(WQ)
-       },
-       qQ = QQ => atob(QQ),
-       TQ = QQ => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(QQ).buffer : function(QQ) {
-         const WQ = qQ(QQ),
-           XQ = WQ.length,
-           wQ = new Uint8Array(new ArrayBuffer(XQ));
- ... (3 more removed lines; see GitHub link above)
+     })
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1325` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L188) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L1325)

```diff
-   40164: (QQ, WQ, XQ) => {
+   39711: (MM, rM, iM) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1365-L1391` → after: `L193-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L193-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L193-L241) · [Before (L1365-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L1365-L1391)

```diff
-       constructor() {
-         this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
-       }
-       static get IsCustomRequestAvailable() {
-         return Object.keys(wQ.CustomRequestHeaders).length > 0 || wQ.CustomRequestModifiers.length > 0
-       }
-       static _CleanUrl(QQ) {
-         return QQ = (QQ = QQ.replace("file:http:", "http:")).replace("file:https:", "https:")
-       }
-       static _ShouldSkipRequestModifications(QQ) {
-         return wQ.SkipRequestModificationForBabylonCDN && (QQ.includes("preview.babylonjs.com") || QQ.includes("cdn.babylonjs.com"))
-       }
-       static _CollectCustomizations(QQ) {
-         const WQ = {
-           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
-         };
- ... (11 more removed lines; see GitHub link above)
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
+       }
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
+       }
+       static _AddLogEntry(MM) {
+         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
+ ... (33 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1508` → after: `L245-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L245-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/262.js#L245-L257) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/262.js#L1508)

```diff
-     wQ.CustomRequestHeaders = {}, wQ.CustomRequestModifiers = new Array, wQ.SkipRequestModificationForBabylonCDN = !0
+     OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/263.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/263.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696)

#### 1. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/263.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/263.js#L2)

```diff
- export const ids = [263];
+ export const ids = [262, 263];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/263.js#L4-L16) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/263.js#L4)

```diff
-   40363: (QQ, WQ, XQ) => {
+   63896: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       RegisterShaderMaterial: () => OM.d,
+       ShaderMaterial: () => OM.n,
+       ShaderMaterialCreateFromSnippetAsync: () => OM.f,
+       ShaderMaterialParse: () => OM.m,
+       ShaderMaterialParseFromFileAsync: () => OM.g,
+       ShaderMaterialParseFromSnippetAsync: () => OM.j
+     });
+     var OM = iM(41556);
+     (0, OM.d)()
+   },
+   38740: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L24` → after: `L20-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L20-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/263.js#L20-L200) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/263.js#L8-L24)

```diff
-     var wQ = XQ(38956),
-       qQ = XQ(37418);
-     class TQ {
-       static Instantiate(QQ) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[QQ]) return this.RegisteredExternalClasses[QQ];
-         const WQ = (0, qQ.b)(QQ);
-         if (WQ) return WQ;
-         wQ.b.Warn(QQ + " not found, you may have missed an import.");
-         const XQ = QQ.split(".");
-         let TQ = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let wQ = 0, qQ = XQ.length; wQ < qQ; wQ++) TQ = TQ[XQ[wQ]];
-         return "function" !== typeof TQ ? null : TQ
-       }
-     }
-     TQ.RegisteredExternalClasses = {}
-   },
- ... (1 more removed lines; see GitHub link above)
+     var OM = iM(38744);
+     class SM {
+       static GetPlanes(MM) {
+         const rM = [];
+         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
+         return SM.GetPlanesToRef(MM, rM), rM
+       }
+       static GetNearPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
+       }
+       static GetFarPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
+       }
+       static GetLeftPlaneToRef(MM, rM) {
+ ... (165 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L28-L269` → after: `L204-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L204-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/263.js#L204-L253) · [Before (L28-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/263.js#L28-L269)

```diff
-     var wQ = XQ(40142);
-     class qQ {
-       static get Now() {
-         return (0, wQ.l)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
-       }
-     }
-   },
-   40206: (QQ, WQ, XQ) => {
-     function wQ(QQ) {
-       let WQ = 1;
-       do {
-         WQ *= 2
-       } while (WQ < QQ);
-       return WQ === QQ
-     }
- 
- ... (226 more removed lines; see GitHub link above)
+     class OM {
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
+       }
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
+       }
+       static _AddLogEntry(MM) {
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L271-L613` → after: `L255-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L255-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/263.js#L255-L269) · [Before (L271-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/263.js#L271-L613)

```diff
-           wQ.LoadFile(QQ, (QQ => {
-             try {
-               Function(QQ).apply(null), WQ && WQ()
-             } catch (wQ) {
-               XQ && XQ("LoadScript Error", wQ)
-             }
-           }), void 0, void 0, !1, ((QQ, WQ) => {
-             XQ && XQ("LoadScript Error", WQ)
-           }))
-         }
-       }
-       static _LoadScriptWeb(QQ, WQ, XQ, wQ) {
-         let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if ("function" === typeof importScripts) {
-           try {
-             importScripts(QQ), WQ && WQ()
- ... (327 more removed lines; see GitHub link above)
+       }
+     }
+     OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/264.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/264.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42)

#### 1. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L4)

```diff
-   40679: (QQ, WQ, XQ) => {
+   38784: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L6-L12` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L6-L7) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L6-L12)

```diff
-       e: () => wQ
-     });
-     let wQ = !1
-   },
-   40253: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => jQ
+       e: () => LM,
+       g: () => aM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L14-L59` → after: `L9-L3404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L9-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L9-L3404) · [Before (L14-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L14-L59)

```diff
-     var wQ = XQ(40260),
-       qQ = XQ(40268),
-       TQ = XQ(37399),
-       zQ = XQ(37370),
-       sQ = XQ(37392),
-       FQ = XQ(38191),
-       PQ = XQ(40277);
-     class gQ {
-       get wrapU() {
-         return this._wrapU
-       }
-       set wrapU(QQ) {
-         this._wrapU = QQ
-       }
-       get wrapV() {
-         return this._wrapV
- ... (30 more removed lines; see GitHub link above)
+     var OM = iM(9839),
+       SM = iM(9816),
+       jM = iM(332);
+     const aM = {
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
+ ... (3380 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L61-L62` → after: `L3406-L3565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3406-L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3406-L3565) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L61-L62)

```diff
-       constructor(QQ) {
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = PQ.e.Zero(), this._cachedBaseSize = PQ.e.Zero(), this._initialSamplingMode = 2, this._texture = gQ. … [truncated]
+     };
+ 
+     function PM(MM) {
+       return {
+         [`${MM} Banner`]: {
+           positions: [{
+             block: `${MM} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${MM} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+ ... (144 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L64-L65` → after: `L3567-L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3567-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3567-L3663) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L64-L65)

```diff
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+     }
+ 
+     function nM(MM) {
+       const rM = (0, jM.Sb)(MM);
+       return {
+         [rM]: {
+           positions: [{
+             block: rM,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${rM} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+ ... (81 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L67-L69` → after: `L3665-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3665-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3665-L3742) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+     }
+ 
+     function QM(MM) {
+       const rM = `_${MM} Back`,
+         iM = `_${MM} Dish`;
+       return {
+         [MM]: {
+           positions: [{
+             block: MM,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: rM,
+             x: 0,
+             y: 0,
+ ... (62 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L71-L74` → after: `L3744-L3765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3744-L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3744-L3765) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L71-L74)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
+     }
+ 
+     function zM(MM) {
+       const rM = `Small ${MM} Pod`;
+       return {
+         [rM]: {
+           positions: [{
+             block: rM,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${MM} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L78-L79` → after: `L3768-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3768-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3768-L3789) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L78-L79)

```diff
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+     }
+     for (const mM in aM) {
+       for (const MM of aM[mM].positions)
+         if (MM.id = SM.k[MM.block].id, mM === MM.block && (0 !== MM.x || 0 !== MM.y || 0 !== MM.z)) throw new Error(`Multiblock "${mM}" has main block "${MM.block}" at non-origin position (${MM.x}, ${MM.y}, ${MM.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       aM[SM.k[mM].id] = aM[mM]
+     }
+     const LM = {};
+     for (const mM in aM)
+       for (const {
+           block: MM,
+           x: rM,
+           y: iM,
+           z: OM
+         }
+         of aM[mM].positions) {
+         const jM = {
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L81-L82` → after: `L3791-L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3791-L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3791-L3814) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+   },
+   39224: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => nM,
+       h: () => PM
+     });
+     var OM = iM(9816),
+       SM = iM(9866),
+       jM = iM(9868);
+     const aM = SM.q.map((MM => {
+       let {
+         dx: rM,
+         dz: iM
+       } = MM;
+       return [rM, 0, iM]
+     }));
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L84-L86` → after: `L3816-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3816-L3818) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L84-L86)

```diff
-       updateSamplingMode(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(QQ, this._texture, this._texture.generateMipMaps && WQ)
+       handles(MM) {
+         const rM = OM.k[MM];
+         return (null === rM || void 0 === rM ? void 0 : rM.model) === this.model && void 0 !== rM.attachedTop
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L88-L89` → after: `L3820-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3820-L3821) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       affects(MM) {
+         return this.handles(MM) || PM(MM) || (0, jM.z)(OM.k[MM])
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L91-L92` → after: `L3823-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3823-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3823-L3835) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L91-L92)

```diff
-       dispose() {
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+       shape(MM, rM, iM, aM, nM) {
+         let QM = this.handles(MM(rM, iM + 1, aM)) ? SM.g : 0;
+         return SM.q.forEach(((nM, zM) => {
+           let {
+             dx: LM,
+             dz: mM
+           } = nM;
+           const HM = MM(rM + LM, iM, aM + mM);
+           (this.handles(HM) || PM(HM) || function(MM, rM) {
+             const iM = OM.k[MM];
+             return (0, jM.z)(iM) && (0, jM.t)(iM.meta.rot) === (0 !== SM.q[rM].dx)
+           }(HM, zM)) && (QM |= 1 << zM)
+         })), (0, OM.l)((0, SM.j)(OM.k[nM].meta.rootName, QM))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L95-L97` → after: `L3838-L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3838-L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3838-L3840) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L95-L97)

```diff
-     var JQ, rQ = XQ(40286),
-       IQ = XQ(40153);
-     let jQ = (() => {
+   },
+   38973: (MM, rM, iM) => {
+     function OM(MM, rM) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L99-L195` → after: `L3842-L3851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3842-L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3842-L3851) · [Before (L99-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L99-L195)

```diff
-       let WQ, XQ, PQ, JQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ = gQ,
-         uQ = [],
-         LQ = [],
-         kQ = [],
-         fQ = [],
-         SQ = [],
-         tQ = [],
-         oQ = [],
-         eQ = [],
-         nQ = [],
-         xQ = [],
-         YQ = [],
-         NQ = [],
-         ZQ = [],
-         OQ = [],
-         KQ = [],
- ... (81 more removed lines; see GitHub link above)
+       rM || (rM = {});
+       const OM = null !== (iM = rM.customAttributes) && void 0 !== iM ? iM : {};
+       var SM, jM, aM;
+       "Gun" === (null === MM || void 0 === MM ? void 0 : MM.type) && (OM.shotsLeft = null !== (SM = null !== (jM = OM.shotsLeft) && void 0 !== jM ? jM : null === (aM = OM.gunStats) || void 0 === aM ? void 0 : aM.clipSize) && void 0 !== SM ? SM : MM.clipSize);
+       if (OM.enchantmentTier && (OM.enchantmentTier = OM.enchantmentTier.toString()), OM.enchantments)
+         for (const LM in OM.enchantments) {
+           const MM = OM.enchantments[LM];
+           if ("number" !== typeof MM) {
+             const rM = parseInt(MM);
+             isNaN(rM) || rM < 0 ? OM.enchantments[LM] = void 0 : OM.enchantments[LM] = rM > 1e9 ? 1e9 : rM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L275-L343` → after: `L3854-L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3854-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3854-L3860) · [Before (L275-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L275-L343)

```diff
-         scale(QQ) {}
-         get canRescale() {
-           return !1
-         }
-         _getFromCache(QQ, WQ, XQ, wQ, qQ, TQ) {
-           const zQ = this._getEngine();
-           if (!zQ) return null;
-           const sQ = zQ._getUseSRGBBuffer(!!qQ, WQ),
-             FQ = zQ.getLoadedTexturesCache();
-           for (let PQ = 0; PQ < FQ.length; PQ++) {
-             const zQ = FQ[PQ];
-             if ((void 0 === qQ || sQ === zQ._useSRGBBuffer) && (void 0 === wQ || wQ === zQ.invertY) && zQ.url === QQ && zQ.generateMipMaps === !WQ && (!XQ || XQ === zQ.samplingMode) && (void 0 === TQ || TQ === zQ.isCube)) return zQ.incrementReferences(), zQ
-           }
-           return null
-         }
-         _rebuild() {}
- ... (53 more removed lines; see GitHub link above)
+       if (OM.enchantmentData)
+         for (const LM in OM.enchantmentData) {
+           const MM = OM.enchantmentData[LM];
+           if (!MM) continue;
+           if ("object" !== typeof MM) {
+             OM.enchantmentData[LM] = void 0;
+             continue
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L346-L364` → after: `L3868-L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3868-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3868-L3936) · [Before (L346-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L346-L364)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
-         }
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
-         }
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
-         }
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const QQ = this._scene.textures.indexOf(this);
-             if (QQ >= 0 && this._scene.textures.splice(QQ, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const QQ = this._parentContainer.textures.indexOf(this);
-               QQ > -1 && this._parentContainer.textures.splice(QQ, 1), this._parentContainer = null
- ... (3 more removed lines; see GitHub link above)
+       return rM.customAttributes = OM, rM
+     }
+     iM.d(rM, {
+       b: () => OM
+     })
+   },
+   39218: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => eM,
+       f: () => yM,
+       i: () => nM,
+       l: () => LM,
+       o: () => bM
+     });
+     var OM = iM(9816),
+       SM = iM(9852),
+ ... (53 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L366-L370` → after: `L3938-L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3938-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3938-L3984) · [Before (L366-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L366-L370)

```diff
-         serialize() {
-           let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !QQ) return null;
-           const WQ = rQ.b.Serialize(this);
-           return rQ.b.AppendSerializedAnimations(this, WQ), WQ
+       }, dM = LM(LM([rM, iM, jM], mM).end, hM).end, yM = LM(dM, HM).cells, [lM, , EM] = SM.C[QM][HM];
+       let GM = 1;
+       MM: for (; GM < zM; GM++)
+         for (let rM = 0; rM < yM; rM++)
+           if (!UM(MM, [dM[0] + lM * rM, dM[1] - GM + 1, dM[2] + EM * rM], JM, PM, QM)) break MM;
+       return {
+         anchor: dM,
+         rootId: PM,
+         rot: QM,
+         width: yM,
+         height: GM
+       }
+     }
+ 
+     function CM(MM, rM) {
+       for (const iM of function(MM) {
+ ... (31 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L372-L384` → after: `L3986-L3988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3986-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3986-L3988) · [Before (L372-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L372-L384)

```diff
-         static WhenAllReady(QQ, WQ) {
-           let XQ = QQ.length;
-           if (0 !== XQ)
-             for (let wQ = 0; wQ < QQ.length; wQ++) {
-               const qQ = QQ[wQ];
-               if (qQ.isReady()) 0 === --XQ && WQ();
-               else {
-                 const QQ = qQ.onLoadObservable;
-                 QQ ? QQ.addOnce((() => {
-                   0 === --XQ && WQ()
-                 })) : 0 === --XQ && WQ()
-               }
-             } else WQ()
+         for (let rM = 0; rM < 4 && zM.length < LM; rM++) {
+           const OM = UM(MM, iM, rM, PM, QM);
+           OM && !mM.has(OM.join()) && (mM.add(OM.join()), zM.push(OM))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L386-L387` → after: `L3990-L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3990-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L3990-L4010) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L386-L387)

```diff
-         static _IsScene(QQ) {
-           return "Scene" === QQ.getClassName()
+       }
+       return hM ??= GM(MM, HM[0], HM[1], HM[2]), {
+         cells: zM,
+         topLeft: HM,
+         rect: hM,
+         textCell: CM(hM, rM)
+       }
+     }
+ 
+     function bM(MM, rM, iM, aM, PM) {
+       if (null !== iM && nM(iM)) {
+         const {
+           rootName: MM,
+           rot: rM
+         } = OM.k[iM].meta;
+         if (SM.C[rM].some((MM => {
+ ... (5 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L389-L592` → after: `L4012-L4062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4012-L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4012-L4062) · [Before (L389-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L389-L592)

```diff
-       }, (() => {
-         const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(CQ[Symbol.metadata] ?? null) : void 0;
-         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], IQ = [(0, qQ.I)("hasAlpha")], jQ = [(0, qQ.I)("getAlphaFromRGB")], BQ = [(0, qQ.I)()], yQ = [(0, qQ.I)("coordinatesIndex")], VQ = [(0, qQ.I)()], DQ = [(0, qQ.I)("coordinatesMode")], pQ = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "wrapU" in QQ,
-             get: QQ => QQ.wrapU
-           },
-           metadata: TQ
-         }, null, uQ), (0, wQ.k)(QQ, null, GQ, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (188 more removed lines; see GitHub link above)
+       }
+       const [QM, zM] = SM.p[PM], LM = MM(rM[0] - QM, rM[1], rM[2] - zM);
+       return {
+         root: (0, jM.h)(LM) ? SM.I : SM.G,
+         rot: PM
+       }
+     }
+   },
+   39210: (MM, rM, iM) => {
+     iM.d(rM, {
+       B: () => tM,
+       C: () => mM,
+       e: () => yM,
+       f: () => UM,
+       i: () => eM,
+       m: () => bM,
+ ... (35 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L594-L605` → after: `L4064-L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4064-L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4064-L4072) · [Before (L594-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L594-L605)

```diff
-           metadata: TQ
-         }, mQ, MQ), (0, wQ.k)(null, null, VQ, {
-           kind: "field",
-           name: "optimizeUVAllocation",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "optimizeUVAllocation" in QQ,
-             get: QQ => QQ.optimizeUVAllocation,
-             set: (QQ, WQ) => {
-               QQ.optimizeUVAllocation = WQ
-             }
+           validBlockIds: [aM, PM],
+           meshSize: 1.2,
+           placeSound: "splash1"
+         },
+         "Obsidian Boat": {
+           meshItemName: "INTERNAL_MESH_Obsidian Boat",
+           physicsState: {
+             type: OM.n.BOAT,
+             tier: OM.d.OBSIDIAN
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L607-L618` → after: `L4074-L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4074-L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4074-L4082) · [Before (L607-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L607-L618)

```diff
-           metadata: TQ
-         }, QW, WW), (0, wQ.k)(null, null, DQ, {
-           kind: "field",
-           name: "_coordinatesMode",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "_coordinatesMode" in QQ,
-             get: QQ => QQ._coordinatesMode,
-             set: (QQ, WQ) => {
-               QQ._coordinatesMode = WQ
-             }
+           validBlockIds: [aM, PM],
+           meshSize: 1.2,
+           placeSound: "splash1"
+         },
+         Speedboat: {
+           meshItemName: "INTERNAL_MESH_Speedboat",
+           physicsState: {
+             type: OM.n.BOAT,
+             tier: OM.d.SPEED
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L620-L631` → after: `L4084-L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4084-L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4084-L4092) · [Before (L620-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L620-L631)

```diff
-           metadata: TQ
-         }, XW, wW), (0, wQ.k)(null, null, UQ, {
-           kind: "field",
-           name: "wrapR",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "wrapR" in QQ,
-             get: QQ => QQ.wrapR,
-             set: (QQ, WQ) => {
-               QQ.wrapR = WQ
-             }
+           validBlockIds: [aM],
+           meshSize: 1.2,
+           placeSound: "splash1"
+         },
+         Hovercraft: {
+           meshItemName: "INTERNAL_MESH_Hovercraft",
+           physicsState: {
+             type: OM.n.HOVERCRAFT,
+             tier: null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L633-L644` → after: `L4094-L4166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4094-L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4094-L4166) · [Before (L633-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L633-L644)

```diff
-           metadata: TQ
-         }, qW, TW), (0, wQ.k)(null, null, bQ, {
-           kind: "field",
-           name: "anisotropicFilteringLevel",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "anisotropicFilteringLevel" in QQ,
-             get: QQ => QQ.anisotropicFilteringLevel,
-             set: (QQ, WQ) => {
-               QQ.anisotropicFilteringLevel = WQ
-             }
+           validBlockIds: "solidBlocksOrFluid",
+           meshSize: 4,
+           placeSound: null
+         },
+         "Yellow Kart": {
+           ...QM,
+           meshItemName: "INTERNAL_MESH_Yellow Kart"
+         },
+         "White Kart": {
+           ...QM,
+           meshItemName: "INTERNAL_MESH_White Kart"
+         },
+         "Red Kart": {
+           ...QM,
+           meshItemName: "INTERNAL_MESH_Red Kart"
+         },
+ ... (57 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L646-L670` → after: `L4168-L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4168-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4168-L4215) · [Before (L646-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L646-L670)

```diff
-           metadata: TQ
-         }, zW, sW), (0, wQ.k)(null, null, lQ, {
-           kind: "field",
-           name: "invertZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "invertZ" in QQ,
-             get: QQ => QQ.invertZ,
-             set: (QQ, WQ) => {
-               QQ.invertZ = WQ
-             }
-           },
-           metadata: TQ
-         }, FW, PW), (0, wQ.k)(null, null, hQ, {
-           kind: "field",
- ... (9 more removed lines; see GitHub link above)
+           validBlockIds: "solidBlocks",
+           meshSize: 4,
+           placeSound: null,
+           seats: [{
+             role: "driver",
+             localOffset: [0, .25, -.2]
+           }, {
+             role: "passenger",
+             localOffset: [0, .25, -1.2]
+           }]
+         },
+         "Gold Mining Drill": {
+           ...zM,
+           meshItemName: "INTERNAL_MESH_Gold Mining Drill",
+           physicsState: {
+             type: OM.n.CAR,
+ ... (32 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L672-L683` → after: `L4217-L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4217-L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4217-L4232) · [Before (L672-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L672-L683)

```diff
-           metadata: TQ
-         }, gW, JW), (0, wQ.k)(null, null, EQ, {
-           kind: "field",
-           name: "isRenderTarget",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "isRenderTarget" in QQ,
-             get: QQ => QQ.isRenderTarget,
-             set: (QQ, WQ) => {
-               QQ.isRenderTarget = WQ
-             }
+           validBlockIds: "solidBlocks",
+           meshSize: 4,
+           placeSound: null,
+           seats: [{
+             role: "driver",
+             localOffset: [0, .25, -.2]
+           }, {
+             role: "passenger",
+             localOffset: [0, .25, -1.2]
+           }]
+         },
+         "Light Blue Car": {
+           meshItemName: "INTERNAL_MESH_Car",
+           physicsState: {
+             type: OM.n.CAR,
+             tier: OM.e.CAR
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L685-L722` → after: `L4234-L4236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4234-L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4234-L4236) · [Before (L685-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L685-L722)

```diff
-           metadata: TQ
-         }, rW, IW), TQ && Object.defineProperty(QQ, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: TQ
-         })
-       })(), QQ.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, QQ
-     })();
-     (JQ = jQ.prototype).forceSphericalPolynomialsRecompute ?? (JQ.forceSphericalPolynomialsRecompute = (0, IQ.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(jQ.prototype, "sphericalPolynomial") || Object.defineProperty(jQ.prototype, "sph … [truncated]
-   },
-   40724: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => UQ,
-       g: () => pQ
-     });
- ... (22 more removed lines; see GitHub link above)
+           validBlockIds: "solidBlocks",
+           meshSize: 4,
+           placeSound: null
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L724-L738` → after: `L4238-L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4238-L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4238-L4239) · [Before (L724-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L724-L738)

```diff
-         QQ = XQ
-       }
-       const TQ = document.createElement("canvas");
-       TQ.width = wQ, TQ.height = qQ;
-       const zQ = TQ.getContext("2d");
-       if (!zQ) return null;
-       const sQ = zQ.createImageData(wQ, qQ);
-       if (sQ.data.set(QQ), zQ.putImageData(sQ, 0, 0), XQ) {
-         const QQ = document.createElement("canvas");
-         QQ.width = wQ, QQ.height = qQ;
-         const WQ = QQ.getContext("2d");
-         return WQ ? (WQ.translate(0, qQ), WQ.scale(1, -1), WQ.drawImage(TQ, 0, 0), QQ.toDataURL("image/png")) : null
-       }
-       return TQ.toDataURL("image/png")
-     }
+       },
+       mM = Object.values(LM).map((MM => MM.meshItemName));
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L741-L746` → after: `L4242-L4244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4242-L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4242-L4244) · [Before (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L741-L746)

```diff
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const wQ = QQ.getInternalTexture();
-       if (!wQ) return null;
-       const qQ = QQ._readPixelsSync(WQ, XQ);
-       return qQ ? jQ(qQ, QQ.getSize(), wQ.invertY) : null
+       for (const rM of SM.e)
+         if (LM[rM].meshItemName === MM) return rM;
+       return null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L748-L754` → after: `L4246-L4253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4246-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4246-L4253) · [Before (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L748-L754)

```diff
-     async function yQ(QQ) {
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const wQ = QQ.getInternalTexture();
-       if (!wQ) return null;
-       const qQ = await QQ.readPixels(WQ, XQ);
-       return qQ ? jQ(qQ, QQ.getSize(), wQ.invertY) : null
+ 
+     function hM(MM, rM) {
+       const iM = MM.validBlockIds;
+       if (Array.isArray(iM)) return iM.includes(rM);
+       if (rM === nM) return !1;
+       if ("solidBlocks" === iM) return !0 !== jM.k[rM].CH;
+       if ("solidBlocksOrFluid" === iM) return !0;
+       throw new Error(`Unsupported validBlockIds for ${rM}: ${JSON.stringify(iM)}`)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L756-L789` → after: `L4255-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4255-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4255-L4267) · [Before (L756-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L756-L789)

```diff
-     var VQ = XQ(40679),
-       DQ = XQ(40286);
-     let pQ = (() => {
-         var QQ;
-         let WQ, XQ, jQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ = sQ.c,
-           cQ = [],
-           AQ = [],
-           RQ = [],
-           EQ = [],
-           CQ = [],
-           uQ = [],
-           LQ = [],
-           kQ = [],
-           fQ = [],
-           SQ = [],
-           tQ = [],
- ... (18 more removed lines; see GitHub link above)
+     const JM = {
+         meshAttachment: {
+           size: .12,
+           offset: [0, 1.8, -.24],
+           rotation: [0, 0, 0]
+         }
+       },
+       dM = {
+         "Yellow Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.YELLOW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L791-L792` → after: `L4269-L4274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4269-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4269-L4274) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L791-L792)

```diff
-           get noMipmap() {
-             return this._noMipmap
+         },
+         "White Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.WHITE
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L794-L795` → after: `L4276-L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4276-L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4276-L4281) · [Before (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L794-L795)

```diff
-           get mimeType() {
-             return this._mimeType
+         },
+         "Red Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.RED
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L797-L798` → after: `L4283-L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4283-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4283-L4288) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L797-L798)

```diff
-           set isBlocking(QQ) {
-             this._isBlocking = QQ
+         },
+         "Purple Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.PURPLE
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L800-L801` → after: `L4290-L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4290-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4290-L4295) · [Before (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L800-L801)

```diff
-           get isBlocking() {
-             return this._isBlocking
+         },
+         "Pink Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.PINK
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L803-L804` → after: `L4297-L4302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4297-L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4297-L4302) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L803-L804)

```diff
-           get invertY() {
-             return this._invertY
+         },
+         "Orange Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.ORANGE
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L806-L852` → after: `L4304-L4309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4304-L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4304-L4309) · [Before (L806-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L806-L852)

```diff
-           constructor(WQ, XQ, qQ, zQ) {
-             let sQ, FQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.TRILINEAR_SAMPLINGMODE,
-               PQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               JQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
-               rQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               IQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-               jQ = arguments.length > 9 ? arguments[9] : void 0,
-               BQ = arguments.length > 10 ? arguments[10] : void 0,
-               yQ = arguments.length > 11 ? arguments[11] : void 0,
-               DQ = arguments.length > 12 ? arguments[12] : void 0,
-               pQ = arguments.length > 13 ? arguments[13] : void 0;
-             super(XQ), this.url = ((0, wQ.n)(this, cQ), (0, wQ.n)(this, AQ, null)), this.uOffset = ((0, wQ.n)(this, RQ), (0, wQ.n)(this, EQ, 0)), this.vOffset = ((0, wQ.n)(this, CQ), (0, wQ.n)(this, uQ, 0)), this.uScale = ((0, wQ.n)(this, LQ), (0, wQ.n)(this, kQ, 1)), this.vScale … [truncated]
-             let GQ = !1,
-               UQ = null,
-               bQ = !0;
-             "object" === typeof qQ && null !== qQ ? (sQ = qQ.noMipmap ?? !1, zQ = qQ.invertY ?? !VQ.e, FQ = qQ.samplingMode ?? QQ.TRILINEAR_SAMPLINGMODE, PQ = qQ.onLoad ?? null, JQ = qQ.onError ?? null, rQ = qQ.buffer ?? null, IQ = qQ.deleteBuffer ?? !1, jQ = qQ.format, BQ = qQ.m … [truncated]
- ... (31 more removed lines; see GitHub link above)
+         },
+         "Magenta Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.MAGENTA
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L854-L862` → after: `L4311-L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4311-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4311-L4316) · [Before (L854-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L854-L862)

```diff
-           updateURL(QQ) {
-             let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               XQ = arguments.length > 2 ? arguments[2] : void 0,
-               wQ = arguments.length > 3 ? arguments[3] : void 0;
-             this.url && (this.releaseInternalTexture(), this.sE().markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = QQ), this.url = QQ, this._buffer = WQ, this._forcedExtension = wQ, this.delayLoadState = 4;
-             const qQ = this._delayedOnLoad;
-             this._delayedOnLoad = () => {
-               qQ ? qQ() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), XQ && XQ()
-             }, this.delayLoad()
+         },
+         "Lime Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.LIME
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L864-L869` → after: `L4318-L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4318-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4318-L4323) · [Before (L864-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L864-L869)

```diff
-           delayLoad() {
-             if (4 !== this.delayLoadState) return;
-             const QQ = this.sE();
-             if (!QQ) return;
-             let WQ = this.url;
-             !WQ && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (WQ = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(WQ, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+         },
+         "Light Gray Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.LIGHT_GRAY
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L871-L872` → after: `L4325-L4330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4325-L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4325-L4330) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L871-L872)

```diff
-           _prepareRowForTextureGeneration(QQ, WQ, XQ, wQ) {
-             QQ *= this._cachedUScale, WQ *= this._cachedVScale, QQ -= this.uRotationCenter * this._cachedUScale, WQ -= this.vRotationCenter * this._cachedVScale, XQ -= this.wRotationCenter, zQ.s.TransformCoordinatesFromFloatsToRef(QQ, WQ, XQ, this._rowGenerationMatrix, wQ), wQ.x  … [truncated]
+         },
+         "Light Blue Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.LIGHT_BLUE
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L874-L881` → after: `L4332-L4337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4332-L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4332-L4337) · [Before (L874-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L874-L881)

```diff
-           getTextureMatrix() {
-             let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-             if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * QQ === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && t … [truncated]
-             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * QQ, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
-             const WQ = this.sE();
-             if (!WQ) return this._cachedTextureMatrix;
-             const XQ = this._cachedIdentity3x2;
-             return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && XQ !== this._cachedIdentity3x2 && WQ.markAllMaterialsAsDirty(1, (QQ => QQ.hasTexture(this))), this._cachedTextureMatrix
+         },
+         "Green Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.GREEN
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L883-L905` → after: `L4339-L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4339-L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4339-L4344) · [Before (L883-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L883-L905)

```diff
-           getReflectionTextureMatrix() {
-             const WQ = this.sE();
-             if (!WQ) return this._cachedReflectionTextureMatrix;
-             if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
-               if (this.coordinatesMode !== QQ.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
-               if (this._cachedReflectionProjectionMatrixId === WQ.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
-             }
-             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = zQ.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = zQ.e.Zero());
-             const XQ = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
-             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
-               case QQ.PLANAR_MODE:
-                 zQ.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
-                 break;
-               case QQ.PROJECTION_MODE: {
-                 zQ.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
-                 const QQ = WQ.getProjectionMatrix();
- ... (7 more removed lines; see GitHub link above)
+         },
+         "Gray Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.GRAY
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L907-L922` → after: `L4346-L4351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4346-L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4346-L4351) · [Before (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L907-L922)

```diff
-           clone() {
-             const WQ = {
-               noMipmap: this._noMipmap,
-               invertY: this._invertY,
-               samplingMode: this.samplingMode,
-               onLoad: void 0,
-               onError: void 0,
-               buffer: this._texture ? this._texture._buffer : void 0,
-               deleteBuffer: this._deleteBuffer,
-               format: this.textureFormat,
-               mimeType: this.mimeType,
-               loaderOptions: this._loaderOptions,
-               creationFlags: this._creationFlags,
-               useSRGBBuffer: this._useSRGBBuffer
-             };
-             return DQ.b.Clone((() => new QQ(this._texture ? this._texture.url : null, this.sE(), WQ)), this)
+         },
+         "Cyan Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.CYAN
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L924-L935` → after: `L4353-L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4353-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4353-L4358) · [Before (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L924-L935)

```diff
-           serialize() {
-             const WQ = this.name;
-             QQ.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
-             const XQ = super.serialize(QQ._SerializeInternalTextureUniqueId);
-             if (!XQ) return null;
-             if (QQ.SerializeBuffers || QQ.ForceSerializeBuffers)
-               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) XQ.base64String = this._buffer, XQ.name = XQ.name.replace("data:", "");
-               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
-               const QQ = this.mimeType || "image/png";
-               XQ.base64String = `data:${QQ};base64,${(0,IQ.d)(this._buffer)}`
-             } else(QQ.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (XQ.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? BQ(this) : yQ(this));
-             return XQ.invertY = this._invertY, XQ.samplingMode = this.samplingMode, XQ._creationFlags = this._creationFlags, XQ._useSRGBBuffer = this._useSRGBBuffer, QQ._SerializeInternalTextureUniqueId && (XQ.internalTextureUniqueId = this._texture?.uniqueId), XQ.internalTexture … [truncated]
+         },
+         "Brown Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.BROWN
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L937-L938` → after: `L4360-L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4360-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4360-L4365) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L937-L938)

```diff
-           getClassName() {
-             return "Texture"
+         },
+         "Blue Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.BLUE
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L940-L941` → after: `L4367-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4367-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4367-L4372) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L940-L941)

```diff
-           dispose() {
-             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+         },
+         "Black Balloon": {
+           ...JM,
+           physicsState: {
+             type: OM.n.BALLOON,
+             tier: OM.b.BLACK
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L943-L1028` → after: `L4374-L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4374-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4374-L4393) · [Before (L943-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L943-L1028)

```diff
-           static Parse(WQ, XQ, wQ) {
-             if (WQ.customType) {
-               const QQ = JQ.d.Instantiate(WQ.customType).Parse(WQ, XQ, wQ);
-               return WQ.samplingMode && QQ.updateSamplingMode && QQ._samplingMode && QQ._samplingMode !== WQ.samplingMode && QQ.updateSamplingMode(WQ.samplingMode), QQ
-             }
-             if (WQ.isCube && !WQ.isRenderTarget) return QQ._CubeTextureParser(WQ, XQ, wQ);
-             const qQ = void 0 !== WQ.internalTextureUniqueId;
-             if (!WQ.name && !WQ.isRenderTarget && !qQ) return null;
-             let TQ;
-             if (qQ) {
-               const QQ = XQ.Uj().getLoadedTexturesCache();
-               for (const XQ of QQ)
-                 if (XQ.uniqueId === WQ.internalTextureUniqueId) {
-                   TQ = XQ;
-                   break
-                 }
- ... (70 more removed lines; see GitHub link above)
+         }
+       };
+ 
+     function yM(MM) {
+       var rM;
+       return null === MM || void 0 === MM ? null : null !== (rM = dM[MM]) && void 0 !== rM ? rM : null
+     }
+     const lM = {
+         meshAttachment: {
+           size: 3,
+           offset: [0, .72, .3],
+           rotation: [-Math.PI / 2, Math.PI, Math.PI]
+         }
+       },
+       EM = {
+         "Wood Hang Glider": {
+ ... (4 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1030-L1032` → after: `L4395-L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4395-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4395-L4400) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L1030-L1032)

```diff
-           static CreateFromBase64String(WQ, XQ, wQ, qQ, TQ) {
-             let zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ.TRILINEAR_SAMPLINGMODE;
-             return new QQ("data:" + XQ, wQ, qQ, TQ, zQ, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, WQ, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0 … [truncated]
+         },
+         "Iron Hang Glider": {
+           ...lM,
+           physicsState: {
+             type: OM.n.GLIDER,
+             tier: OM.h.IRON
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1034-L1044` → after: `L4402-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4402-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4402-L4407) · [Before (L1034-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L1034-L1044)

```diff
-           static LoadFromDataString(WQ, XQ, wQ) {
-             let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               TQ = arguments.length > 4 ? arguments[4] : void 0,
-               zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-               sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QQ.TRILINEAR_SAMPLINGMODE,
-               FQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               PQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-               gQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
-               JQ = arguments.length > 10 ? arguments[10] : void 0,
-               rQ = arguments.length > 11 ? arguments[11] : void 0;
-             return "data:" !== WQ.substring(0, 5) && (WQ = "data:" + WQ), new QQ(WQ, wQ, TQ, zQ, sQ, FQ, PQ, XQ, qQ, gQ, void 0, void 0, JQ, rQ)
+         },
+         "Gold Hang Glider": {
+           ...lM,
+           physicsState: {
+             type: OM.n.GLIDER,
+             tier: OM.h.GOLD
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1046-L1228` → after: `L4409-L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4409-L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4409-L4424) · [Before (L1046-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L1046-L1228)

```diff
-         }, (() => {
-           const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(iQ[Symbol.metadata] ?? null) : void 0;
-           WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], dQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], aQ = [(0, qQ.I)()], lQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], (0, wQ.k)( … [truncated]
-             kind: "getter",
-             name: "isBlocking",
-             static: !1,
-             private: !1,
-             access: {
-               has: QQ => "isBlocking" in QQ,
-               get: QQ => QQ.isBlocking
-             },
-             metadata: TQ
-           }, null, cQ), (0, wQ.k)(null, null, WQ, {
-             kind: "field",
-             name: "url",
-             static: !1,
- ... (167 more removed lines; see GitHub link above)
+         },
+         "Diamond Hang Glider": {
+           ...lM,
+           physicsState: {
+             type: OM.n.GLIDER,
+             tier: OM.h.DIAMOND
+           }
+         }
+       };
+ 
+     function UM(MM) {
+       var rM;
+       return null === MM || void 0 === MM ? null : null !== (rM = EM[MM]) && void 0 !== rM ? rM : null
+     }
+     const GM = new Set(Object.values(dM).map((MM => MM.physicsState.type))),
+       CM = new Set(Object.values(EM).map((MM => MM.physicsState.type)));
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1230-L1231` → after: `L4426-L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4426-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4426-L4441) · [Before (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L1230-L1231)

```diff
-     function UQ() {
-       GQ || (GQ = !0, (0, FQ.d)("BABYLON.Texture", pQ), DQ.b._TextureParser = pQ.Parse)
+     function eM(MM) {
+       return GM.has(MM)
+     }
+ 
+     function bM(MM) {
+       return CM.has(MM)
+     }
+ 
+     function wM(MM) {
+       return MM === OM.n.DEFAULT || function(MM) {
+         return GM.has(MM) || CM.has(MM)
+       }(MM)
+     }
+ 
+     function tM(MM) {
+       return !wM(MM) && MM !== OM.n.SLEEPING
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1234` → after: `L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4444) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L1234)

```diff
-   40277: (QQ, WQ, XQ) => {
+   39230: (MM, rM, iM) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1236` → after: `L4446-L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4446-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4446-L4449) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L1236)

```diff
-       e: () => wQ
+       d: () => jM,
+       e: () => aM,
+       g: () => SM,
+       j: () => PM
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L1238-L1288` → after: `L4451-L4462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4451-L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/264.js#L4451-L4462) · [Before (L1238-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/264.js#L1238-L1288)

```diff
-     class wQ {
-       constructor(QQ, WQ) {
-         this.width = QQ, this.height = WQ
-       }
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
-       }
-       getClassName() {
-         return "Size"
-       }
-       getHashCode() {
-         let QQ = 0 | this.width;
-         return QQ = 397 * QQ ^ this.height, QQ
-       }
-       WH(QQ) {
-         this.width = QQ.width, this.height = QQ.height
- ... (35 more removed lines; see GitHub link above)
+     var OM = iM(340);
+     const SM = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...iM(620).w.map((MM => `${MM} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
+       jM = ["Obby RPG"];
+ 
+     function aM(MM) {
+       const rM = MM.indexOf("|");
+       return -1 === rM ? {
+         item: MM,
+         clientPredictedThrower: null
+       } : {
+         item: MM.slice(0, rM),
+         clientPredictedThrower: MM.slice(rM + 1)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/265.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/265.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250)

#### 1. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L4)

```diff
-   40515: (QQ, WQ, XQ) => {
+   39040: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L7` → after: `L7-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L7-L11) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L7)

```diff
-       g: () => sQ
+       g: () => OM,
+       i: () => PM,
+       k: () => SM,
+       l: () => aM,
+       m: () => jM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L9-L91` → after: `L13-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L13-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L13-L30) · [Before (L9-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L9-L91)

```diff
-     var wQ = XQ(38956),
-       qQ = XQ(40286),
-       TQ = XQ(40487),
-       zQ = {};
-     class sQ {
-       constructor(QQ) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = QQ, this.checkInputs = () => {}
-       }
-       add(QQ) {
-         const WQ = QQ.getSimpleName();
-         this.attached[WQ] ? wQ.b.Warn("camera input of type " + WQ + " already exists on camera") : (this.attached[WQ] = QQ, QQ.camera = this.camera, QQ.checkInputs && (this.checkInputs = this._addCheckInputs(QQ.checkInputs.bind(QQ))), this.attachedToElement && QQ.attachControl(t … [truncated]
-       }
-       remove(QQ) {
-         for (const WQ in this.attached) {
-           const XQ = this.attached[WQ];
-           if (XQ === QQ) return XQ.detachControl(), XQ.camera = null, delete this.attached[WQ], void this.rebuildInputCheck()
- ... (67 more removed lines; see GitHub link above)
+     const OM = 1.001,
+       SM = .501,
+       jM = .025,
+       aM = .75,
+       PM = .08,
+       nM = 4;
+ 
+     function QM() {
+       const MM = SM,
+         rM = jM,
+         iM = MM - rM / 2,
+         OM = (2 * MM - 2 * rM) / (2 * nM - 1),
+         aM = [];
+       for (const SM of [-iM, iM])
+         for (const jM of [-iM, iM])
+           for (let iM = 0; iM < nM; iM++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L93` → after: `L32-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L32-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L32-L35) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L93)

```diff
-       }
+       for (const SM of [-iM, iM])
+         for (const MM of [-iM, iM])
+           for (const OM of [-iM, iM]) aM.push([rM, rM, rM, SM, MM, OM]);
+       return aM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L96` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L38) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L96)

```diff
-   41348: (QQ, WQ, XQ) => {
+   39426: (MM, rM, iM) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L98` → after: `L40-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L40-L56) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L98)

```diff
-       b: () => pQ
+       C: () => eM,
+       D: () => HM,
+       F: () => CM,
+       J: () => bM,
+       L: () => GM,
+       P: () => UM,
+       Q: () => mM,
+       S: () => JM,
+       V: () => yM,
+       X: () => SM,
+       d: () => zM,
+       h: () => nM,
+       k: () => EM,
+       o: () => QM,
+       s: () => PM,
+       u: () => aM,
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L100-L436` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L58) · [Before (L100-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L100-L436)

```diff
-     var wQ = XQ(40260),
-       qQ = XQ(40268),
-       TQ = XQ(40164),
-       zQ = XQ(37370),
-       sQ = XQ(40253),
-       FQ = XQ(40724),
-       PQ = XQ(37418),
-       gQ = XQ(37399),
-       JQ = XQ(40286),
-       rQ = XQ(40103),
-       IQ = XQ(38956),
-       jQ = XQ(40307),
-       BQ = XQ(38191),
-       yQ = XQ(40344);
-     var VQ = XQ(40170);
-     let DQ = !1;
- ... (321 more removed lines; see GitHub link above)
+     var OM = iM(9904);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L438-L441` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L60-L61) · [Before (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L438-L441)

```diff
-     function UQ(QQ, WQ, XQ) {
-       let wQ = "";
-       for (const qQ of QQ) wQ += qQ;
-       return new pQ(wQ, WQ, null, XQ, QQ)
+     function SM(MM) {
+       return Math.floor(MM).toLocaleString("en-US")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L444-L450` → after: `L71-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L71-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L71-L107) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L444-L450)

```diff
-     function bQ(QQ, WQ) {
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-         wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const qQ = WQ.useDelayedTextureLoading;
-       WQ.useDelayedTextureLoading = !1;
-       const TQ = new pQ(QQ, WQ, null, !1, null, null, null, void 0, !0, XQ, wQ);
-       return WQ.useDelayedTextureLoading = qQ, TQ
+     function mM(MM) {
+       const rM = MM.split("|")[0];
+       return (0, OM.p)(rM) ? rM === OM.e ? "cryo" : "water" : null
+     }
+     const HM = [
+         [1, 0, 0],
+         [-1, 0, 0],
+         [0, 1, 0],
+         [0, -1, 0],
+         [0, 0, 1],
+         [0, 0, -1]
+       ],
+       hM = 63;
+ 
+     function JM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ ... (21 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L454-L462` → after: `L111-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L111-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L111-L164) · [Before (L454-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L454-L462)

```diff
-       const wQ = JQ.b.Parse((() => {
-         let wQ = !1;
-         return QQ.prefiltered && (wQ = QQ.prefiltered), new pQ(XQ + (QQ.url ?? QQ.name), WQ, QQ.extensions, !1, QQ.files || null, null, null, void 0, wQ, QQ.forcedExtension)
-       }), QQ, WQ);
-       if (QQ.boundingBoxPosition && (wQ.boundingBoxPosition = zQ.s.FromArray(QQ.boundingBoxPosition)), QQ.boundingBoxSize && (wQ.boundingBoxSize = zQ.s.FromArray(QQ.boundingBoxSize)), QQ.animations)
-         for (let qQ = 0; qQ < QQ.animations.length; qQ++) {
-           const WQ = QQ.animations[qQ],
-             XQ = (0, PQ.b)("BABYLON.Animation");
-           XQ && wQ.animations.push(XQ.Parse(WQ))
+       return 0 !== (MM.faces & 1 << iM) && 0 !== (rM.faces & 1 << (1 ^ iM)) && (dM(MM.kind) || dM(rM.kind))
+     }
+     const lM = (MM, rM, iM, OM) => ({
+         input: MM,
+         inputAmount: OM,
+         output: rM,
+         outputAmount: iM
+       }),
+       EM = {
+         Condenser: {
+           kind: "Condenser",
+           opMs: 2e3,
+           inputSlot: null,
+           fuelSlot: null,
+           outputSlots: [],
+           recipes: [],
+ ... (38 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L464` → after: `L166-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L166-L169) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L464)

```diff
-       return wQ
+       };
+ 
+     function UM(MM, rM) {
+       return 1e3 * (null !== rM && void 0 !== rM ? rM : 0) / MM.opMs
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L466` → after: `L171-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L171-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L171-L179) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L466)

```diff
-     GQ || (GQ = !0, pQ.CreateFromImages = UQ, pQ.CreateFromPrefilteredData = bQ, pQ.Parse = vQ, FQ.g._CubeTextureParser = vQ, (0, PQ.d)("BABYLON.CubeTexture", pQ))
+ 
+     function GM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       const iM = UM(EM["Coolant Mixer"], LM) * rM;
+       return MM <= 0 ? 0 : Math.ceil(MM / iM - 1e-9)
+     }
+     const CM = "baf2Water",
+       eM = "baf2waterclose",
+       bM = "baf2wateropen"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L468` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L181) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L468)

```diff
-   41394: (QQ, WQ, XQ) => {
+   39414: (MM, rM, iM) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L470` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L183-L184) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L470)

```diff
-       b: () => PQ
+       d: () => sM,
+       h: () => DM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L472-L531` → after: `L186-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L186-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L186-L265) · [Before (L472-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L472-L531)

```diff
-     var wQ = XQ(38956),
-       qQ = XQ(40724),
-       TQ = XQ(40206),
-       zQ = XQ(40117),
-       sQ = XQ(40103);
-     let FQ = !1;
-     class PQ extends qQ.g {
-       constructor(QQ, WQ, XQ) {
-         let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           PQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
-           gQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
-           JQ = arguments.length > 6 ? arguments[6] : void 0;
-         const rQ = !XQ || XQ._isScene;
-         super(null, rQ ? XQ : XQ?.cB, rQ ? !wQ : XQ, JQ, PQ, void 0, void 0, void 0, void 0, gQ), FQ || (FQ = !0, zQ.ThinEngine.prototype.createDynamicTexture = function(QQ, WQ, XQ, wQ) {
-           const qQ = new sQ.e(this, 4);
-           return qQ.baseWidth = QQ, qQ.baseHeight = WQ, XQ && (QQ = this.needPOTTextures ? (0, TQ.h)(QQ, this._caps.maxTextureSize) : QQ, WQ = this.needPOTTextures ? (0, TQ.h)(WQ, this._caps.maxTextureSize) : WQ), qQ.width = QQ, qQ.height = WQ, qQ.isReady = !1, qQ.generateMipMaps … [truncated]
- ... (44 more removed lines; see GitHub link above)
+     var OM = iM(9816),
+       SM = iM(9852);
+     const jM = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0],
+       [0, -1, 0]
+     ];
+     var aM = iM(9866),
+       PM = iM(39224),
+       nM = iM(9863);
+     const QM = {
+       1: [0, -1],
+       2: [-1, 0],
+ ... (64 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L533-L535` → after: `L267-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L267-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L267-L284) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L533-L535)

```diff
-       clear(QQ) {
-         const WQ = this.getSize();
-         QQ && (this._context.fillStyle = QQ), this._context.clearRect(0, 0, WQ.width, WQ.height)
+     }
+ 
+     function uM(MM, rM, iM, OM) {
+       return gM(MM(rM, iM, OM))
+     }
+ 
+     function RM(MM, rM, iM, OM, SM) {
+       let {
+         rot: jM,
+         half: aM
+       } = SM;
+       const [PM, nM] = (0, wM.e)(jM, aM), QM = uM(MM, rM + PM, iM, OM + nM);
+       return null !== QM && QM.rot === jM && QM.half === wM.i[aM]
+     }
+     var pM = iM(39420);
+     const WM = [new class {
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L537-L540` → after: `L286-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L286-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L286-L307) · [Before (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L537-L540)

```diff
-       update(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === QQ || QQ, WQ, this._format || void 0, void 0, XQ)
+       handles(MM) {
+         var rM;
+         return "Stairs" === (null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.model)
+       }
+       affects(MM) {
+         return this.handles(MM)
+       }
+       shape(MM, rM, iM, SM, jM) {
+         const aM = this.stairsOf(jM),
+           PM = this.cornerAt(MM, rM, iM, SM, aM),
+           QM = aM.half === nM.b.top ? "top" : "bot";
+         return (0, OM.l)(`${OM.k[jM].meta.rootName}|meta|rot${aM.rot}|${QM}${null===PM?"":`|${PM}`}`)
+       }
+       stairsOf(MM) {
+         const {
+           rot: rM,
+ ... (6 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L542-L547` → after: `L309-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L309-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L309-L327) · [Before (L542-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L542-L547)

```diff
-       drawText(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
-         let sQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
-         const FQ = this.getSize();
-         if (TQ && (this._context.fillStyle = TQ, this._context.fillRect(0, 0, FQ.width, FQ.height)), this._context.font = wQ, null === WQ || void 0 === WQ) {
-           const XQ = this._context.measureText(QQ);
-           WQ = (FQ.width - XQ.width) / 2
+       stairsAt(MM, rM, iM, OM) {
+         const SM = MM(rM, iM, OM);
+         return this.handles(SM) ? this.stairsOf(SM) : null
+       }
+       cornerAt(MM, rM, iM, OM, SM) {
+         let {
+           rot: jM,
+           half: aM
+         } = SM;
+         const PM = QM[jM],
+           nM = SM => {
+             let [PM, nM] = SM;
+             const QM = this.stairsAt(MM, rM + PM, iM, OM + nM);
+             return null !== QM && QM.rot === jM && QM.half === aM
+           },
+           HM = this.stairsAt(MM, rM + PM[0], iM, OM + PM[1]);
+ ... (3 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L549-L551` → after: `L329-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L329-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L329-L332) · [Before (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L549-L551)

```diff
-         if (null === XQ || void 0 === XQ) {
-           const QQ = parseInt(wQ.replace(/\D/g, ""));
-           XQ = FQ.height / 2 + QQ / 3.65
+         const hM = this.stairsAt(MM, rM - PM[0], iM, OM - PM[1]);
+         if (null !== hM && hM.half === aM) {
+           const MM = QM[hM.rot];
+           if (mM(PM, MM) && !nM(MM)) return LM(MM, zM(PM)) ? "innerLeft" : "innerRight"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L553` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L334) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L553)

```diff
-         this._context.fillStyle = qQ || "", this._context.fillText(QQ, WQ, XQ), sQ && this.update(zQ)
+         return null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L555-L556` → after: `L336-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L336-L338) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L555-L556)

```diff
-       dispose() {
-         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
+     }, new class {
+       constructor() {
+         this.reshapeOffsets = jM, this.rootIds = new Set(SM.h.map((MM => (0, OM.l)(MM))))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L558-L569` → after: `L340-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L340-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L340-L440) · [Before (L558-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L558-L569)

```diff
-       clone() {
-         const QQ = this.sE();
-         if (!QQ) return this;
-         const WQ = this.getSize(),
-           XQ = new PQ(this.name, WQ, QQ, this._generateMipMaps);
-         return XQ.hasAlpha = this.hasAlpha, XQ.level = this.level, XQ.wrapU = this.wrapU, XQ.wrapV = this.wrapV, XQ
-       }
-       serialize() {
-         const QQ = this.sE();
-         QQ && !QQ.isReady() && wQ.b.Warn("The scene must be ready before serializing the dynamic texture");
-         const WQ = super.serialize();
-         return PQ._IsCanvasElement(this._canvas) && (WQ.base64String = this._canvas.toDataURL()), WQ.invertY = this._invertY, WQ.samplingMode = this.samplingMode, WQ
+       handles(MM) {
+         var rM;
+         const iM = null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta;
+         return void 0 !== iM && this.rootIds.has(iM.rootId)
+       }
+       affects(MM) {
+         return this.handles(MM)
+       }
+       placedBy(MM) {
+         return OM.k[MM].meta.rootName === SM.t ? null : SM.t
+       }
+       shape(MM, rM, iM, jM, aM) {
+         const {
+           rootId: PM,
+           rootName: nM,
+           rot: QM
+ ... (85 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L571-L572` → after: `L442-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L442-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L442-L448) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L571-L572)

```diff
-       static _IsCanvasElement(QQ) {
-         return void 0 !== QQ.toDataURL
+       reshapedHalf(MM, rM, iM, OM, SM) {
+         if (null !== SM.half && RM(MM, rM, iM, OM, SM)) return SM.half;
+         for (const jM of ["right", "left"]) {
+           const [aM, PM] = (0, wM.e)(SM.rot, jM), nM = uM(MM, rM + aM, iM, OM + PM);
+           if (null !== nM && nM.rot === SM.rot && nM.half === wM.i[jM]) return jM
+         }
+         return null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L574-L575` → after: `L450-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L450-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L450-L462) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L574-L575)

```diff
-       _rebuild() {
-         this.update()
+     }, new pM.e];
+ 
+     function sM(MM, rM, iM, OM, SM) {
+       let jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       for (const aM of WM)
+         if (aM.handles(SM)) return aM.shape(MM, rM, iM, OM, SM, jM);
+       return SM
+     }
+ 
+     function DM(MM) {
+       for (const OM of WM) {
+         var rM, iM;
+         if (OM.handles(MM)) return null !== (rM = null === (iM = OM.placedBy) || void 0 === iM ? void 0 : iM.call(OM, MM)) && void 0 !== rM ? rM : null
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L579` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L467) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L579)

```diff
-   41364: (QQ, WQ, XQ) => {
+   39420: (MM, rM, iM) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L581` → after: `L469-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L469-L471) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L581)

```diff
-       d: () => qQ
+       e: () => wM,
+       i: () => UM,
+       m: () => EM
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L583-L586` → after: `L473-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L473-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L473-L487) · [Before (L583-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L583-L586)

```diff
-     var wQ = XQ(40724);
-     class qQ extends wQ.g {
-       get depth() {
-         return this._depth
+     var OM = iM(9816),
+       SM = iM(9839),
+       jM = iM(9904),
+       aM = iM(39426),
+       PM = iM(9895);
+     const nM = (0, aM.S)("pipe"),
+       QM = (0, aM.S)("tank"),
+       zM = (0, aM.S)("port"),
+       LM = "Reactor Port";
+ 
+     function mM(MM, rM, iM) {
+       const OM = new Set([jM.h, jM.e, LM, ...rM, ...iM, ...MM ? [aM.o] : []]);
+       return {
+         makers: new Set(rM),
+         roots: OM
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L588-L595` → after: `L489-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L489-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L489-L577) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L588-L595)

```diff
-       constructor(QQ, WQ, XQ, qQ, TQ, zQ) {
-         let sQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           FQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           PQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : wQ.g.TRILINEAR_SAMPLINGMODE,
-           gQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           JQ = arguments.length > 10 ? arguments[10] : void 0,
-           rQ = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, zQ, !sQ, FQ), this.format = TQ, this._texture = zQ.Uj().createRawTexture2DArray(QQ, WQ, XQ, qQ, TQ, sQ, FQ, PQ, null, gQ, JQ ?? 0, rQ), this._depth = qQ, this.is2DArray = !0
+     }
+     const HM = {
+         water: mM(!0, ["Condenser"], ["Centrifuge", "Synthesizer", aM.d]),
+         cryo: mM(!1, [aM.d], [])
+       },
+       hM = new Set([...HM.water.roots, ...HM.cryo.roots]),
+       JM = {
+         nx: [-1, 0, 0],
+         ny: [0, -1, 0],
+         nz: [0, 0, -1],
+         px: [1, 0, 0],
+         py: [0, 1, 0],
+         pz: [0, 0, 1]
+       },
+       dM = SM.h.map((MM => JM[MM])),
+       yM = dM.map((MM => {
+ ... (73 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L597-L598` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L579-L580) · [Before (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L597-L598)

```diff
-       update(QQ) {
-         this.updateMipLevel(QQ, 0)
+       handles(MM) {
+         return null !== UM(MM)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L600-L601` → after: `L582-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L582-L584) · [Before (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L600-L601)

```diff
-       updateMipLevel(QQ, WQ) {
-         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, QQ, this._texture.format, this._texture.invertY, null, this._texture.type, WQ)
+       affects(MM) {
+         var rM, iM;
+         return hM.has(null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.meta.rootName) && void 0 !== rM ? rM : "")
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L603-L604` → after: `L586-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L586-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L586-L613) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L603-L604)

```diff
-       static CreateRGBATexture(QQ, WQ, XQ, wQ, TQ) {
-         return new qQ(QQ, WQ, XQ, wQ, 5, TQ, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
+       placedBy(MM) {
+         var rM;
+         return (null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta.rootName) === jM.e ? jM.h : null
+       }
+       shape(MM, rM, iM, SM, PM, QM) {
+         var zM, LM, mM;
+         const HM = null !== (zM = null === (LM = OM.k[PM]) || void 0 === LM ? void 0 : LM.name) && void 0 !== zM ? zM : "",
+           hM = QM || HM !== jM.h ? null !== (mM = (0, aM.Q)(HM)) && void 0 !== mM ? mM : "water" : function(MM, rM, iM, OM) {
+             return dM.some(((SM, jM) => {
+               let [PM, QM, zM] = SM;
+               const LM = lM(MM(rM + PM, iM + QM, OM + zM), "cryo");
+               return null !== LM && "port" !== LM.kind && (0, aM.V)(nM, LM, yM[jM])
+             })) ? "cryo" : "water"
+           }(MM, rM, iM, SM),
+           JM = function(MM, rM, iM, OM) {
+             let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
+ ... (12 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L608-L615` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L617) · [Before (L608-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L608-L615)

```diff
-   41357: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => wQ.b
-     });
-     var wQ = XQ(40612);
-     (0, wQ.d)()
-   },
-   40349: (QQ, WQ, XQ) => {
+   39168: (MM, rM, iM) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L617` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L619-L620) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L617)

```diff
-       c: () => wQ.h
+       c: () => OM,
+       f: () => jM
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L619-L620` → after: `L622-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L622-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/265.js#L622-L645) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/265.js#L619-L620)

```diff
-     var wQ = XQ(40355);
-     (0, wQ.e)()
+     const OM = ["Chest", "Loot Chest", "Moonstone Chest"],
+       SM = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+       }, {
+         name: "Potion Table",
+         exactMatch: !0
+       }, {
+         name: "Salvaging Table",
+         exactMatch: !0
+ ... (8 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/266.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/266.js` (80 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927)

#### 1. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4` → after: `L4-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L4-L12) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L4)

```diff
-   40479: (QQ, WQ, XQ) => {
+   40140: (MM, rM, iM) => {
+     function OM(MM) {
+       return !(!MM.lobbyLeaderboardInfo && !MM.lobbyManage)
+     }
+     iM.d(rM, {
+       d: () => OM
+     })
+   },
+   40059: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L8-L57` → after: `L16-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L16-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L16-L31) · [Before (L8-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L8-L57)

```diff
-     var wQ = XQ(40260),
-       qQ = XQ(40268),
-       TQ = XQ(37370),
-       zQ = XQ(40484),
-       sQ = XQ(40515),
-       FQ = XQ(40445),
-       PQ = XQ(40357);
-     let gQ = (() => {
-       var QQ;
-       let WQ, XQ, zQ, sQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ = [],
-         DQ = [],
-         pQ = [],
-         GQ = [],
-         UQ = [],
-         bQ = [],
-         vQ = [],
- ... (34 more removed lines; see GitHub link above)
+     var OM = iM(22),
+       SM = iM(2067);
+ 
+     function jM(MM) {
+       let {
+         taskId: rM,
+         progress: iM
+       } = MM;
+       const OM = SM.d.get("_tasks");
+       null !== OM && void 0 !== OM && OM[rM] && SM.d.apply({
+         _tasks: {
+           ...OM,
+           [rM]: {
+             ...OM[rM],
+             progress: iM
+           }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L59-L76` → after: `L33-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L33-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L33-L87) · [Before (L59-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L59-L76)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
-         }
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const QQ = this.camera,
-               WQ = QQ.movement.input,
-               XQ = WQ.getEntry("keyboard", "translate"),
-               wQ = WQ.getEntry("keyboard", "rotate"),
-               qQ = wQ?.sensitivity ?? 1,
-               zQ = QQ._localDirection.XQQ(0, 0, 0);
-             for (let TQ = 0; TQ < this._keys.length; TQ++) {
-               const WQ = this._keys[TQ]; - 1 !== this.keysLeft.indexOf(WQ) ? zQ.x -= 1 : -1 !== this.keysUp.indexOf(WQ) ? zQ.z += 1 : -1 !== this.keysRight.indexOf(WQ) ? zQ.x += 1 : -1 !== this.keysDown.indexOf(WQ) ? zQ.z -= 1 : -1 !== this.keysUpward.indexOf(WQ) ? zQ.y += 1 : -1 … [truncated]
-             }
-             if (XQ && (0 !== zQ.x || 0 !== zQ.y || 0 !== zQ.z)) {
-               const WQ = QQ._computeLocalCameraSpeed() * (XQ.sensitivity ?? 1);
- ... (2 more removed lines; see GitHub link above)
+       })
+     }
+     OM.i.subscribe("clientTaskProgress", (MM => {
+       jM(MM)
+     }))
+   },
+   40004: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => Mi,
+       i: () => Vr,
+       k: () => cr
+     });
+     var OM = iM(4069),
+       SM = iM(143),
+       jM = iM(181),
+       aM = iM(632),
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L79-L143` → after: `L95-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L95-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L95-L115) · [Before (L79-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L79-L143)

```diff
-         getClassName() {
-           return "FreeCameraKeyboardMoveInput"
-         }
-         _onLostFocus() {
-           this._keys.length = 0
-         }
-         getSimpleName() {
-           return "keyboard"
-         }
-         _getLocalRotation() {
-           const QQ = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * QQ
-         }
-       }, (() => {
-         const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], zQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], BQ = [(0, qQ.I)()], yQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
- ... (49 more removed lines; see GitHub link above)
+       }
+       vQM() {
+         for (const {
+             id: MM,
+             payload: rM
+           }
+           of this.fR) {
+           if (this.dh) break;
+           this.oQM(MM, rM)
+         }
+         this.fR.length = 0
+       }
+       xG() {
+         return this.dh
+       }
+       FQM() {
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L145-L156` → after: `L117-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L117-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L117-L150) · [Before (L145-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L145-L156)

```diff
-           metadata: TQ
-         }, vQ, dQ), (0, wQ.k)(null, null, gQ, {
-           kind: "field",
-           name: "keysLeft",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "keysLeft" in QQ,
-             get: QQ => QQ.keysLeft,
-             set: (QQ, WQ) => {
-               QQ.keysLeft = WQ
-             }
+           finishRegistration: () => {
+             if (this.dh) throw new Error("Cannot finish message registration after disposal");
+             this.DQM = !0, this.vQM()
+           }
+         }
+       }
+       TE(MM, rM) {
+         var iM, OM;
+         null === (iM = (OM = this.callbacks).BQM) || void 0 === iM || iM.call(OM);
+         const SM = mM.get(this);
+         for (; MM > SM.length;) SM[SM.length] = null;
+         SM[MM] = rM
+       }
+       send(MM, rM) {
+         this.XQM(), (0, LM.G)(rM) ? this.RiM.Xp(MM, rM) : this.RiM.send(MM, rM)
+       }
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L158-L168` → after: `L152-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L152-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L152-L193) · [Before (L158-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L158-L168)

```diff
-           metadata: TQ
-         }, HQ, aQ), (0, wQ.k)(null, null, JQ, {
-           kind: "field",
-           name: "keysRight",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "keysRight" in QQ,
-             get: QQ => QQ.keysRight,
-             set: (QQ, WQ) => {
-               QQ.keysRight = WQ
+           AQM: (MM, rM) => {
+             var iM;
+             null === (iM = (0, nM.f)()) || void 0 === iM || iM.GJ(MM, rM)
+           }
+         }, {
+           sQM: !1
+         }), (0, JM.d)(MM)
+       }
+       xR(MM, rM) {
+         return !!(0, JM.l)((0, JM.c)(), this.RiM, MM, rM) && (this.XQM(), !0)
+       }
+       YQM(MM) {
+         this.IQM(), super.YQM(MM), (0, JM.d)(MM)
+       }
+       aE() {
+         super.aE(), this.IQM()
+ ... (26 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L170-L181` → after: `L195-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L195-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L195-L575) · [Before (L170-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L170-L181)

```diff
-           },
-           metadata: TQ
-         }, lQ, hQ), (0, wQ.k)(null, null, rQ, {
-           kind: "field",
-           name: "rotationSpeed",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "rotationSpeed" in QQ,
-             get: QQ => QQ.rotationSpeed,
-             set: (QQ, WQ) => {
-               QQ.rotationSpeed = WQ
+           })), rM
+         }(iM),
+         SM = (rM, iM, OM, SM) => {
+           MM.setBlockNoMulti(rM, iM, OM, SM, !0)
+         };
+       MM.client.gameRecorder.isCapturing() ? (0, wM.vb)(OM, (0, wM.ub)(OM), SM) : MM.Cm.uL.eC(OM, {
+         lF: SM,
+         isHookId: rM => MM.blockChangeHasHooks(rM),
+         watched: () => function(MM, rM, iM) {
+           const OM = [],
+             SM = (MM, rM, iM) => {
+               OM.push(MM, rM, iM)
+             },
+             jM = new Set;
+           for (let aM = 0; aM < iM.length; aM += wM.e)
+             for (let rM = (0, bM.R)(iM[aM]); rM <= (0, bM.R)(iM[aM + 3]); rM++)
+ ... (365 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L183-L194` → after: `L577-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L577-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L577-L822) · [Before (L183-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L183-L194)

```diff
-           },
-           metadata: TQ
-         }, iQ, cQ), (0, wQ.k)(null, null, IQ, {
-           kind: "field",
-           name: "keysRotateLeft",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "keysRotateLeft" in QQ,
-             get: QQ => QQ.keysRotateLeft,
-             set: (QQ, WQ) => {
-               QQ.keysRotateLeft = WQ
+             of rM) OM().pickUpItem({
+             name: SM,
+             amount: jM,
+             typeObj: IM.A[SM],
+             attributes: aM
+           });
+           (0, nM.b)().client.inventoryPrediction.serverChangeApplied(iM)
+         })), MM.TE(QM.Ge, (MM => {
+           let {
+             index: iM,
+             name: OM,
+             amount: SM,
+             attributes: jM,
+             setSlotAckSeq: aM
+           } = MM;
+           const PM = rM.hU.prM(rM.eD);
+ ... (230 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L196-L207` → after: `L824-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L824-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L824-L874) · [Before (L196-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L196-L207)

```diff
-           },
-           metadata: TQ
-         }, AQ, RQ), (0, wQ.k)(null, null, jQ, {
-           kind: "field",
-           name: "keysRotateRight",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "keysRotateRight" in QQ,
-             get: QQ => QQ.keysRotateRight,
-             set: (QQ, WQ) => {
-               QQ.keysRotateRight = WQ
+             iM = null === (SM = MM.hU.ziM(iM)) || void 0 === SM ? void 0 : SM.zh
+           }
+           return !1
+         }(MM) && function(MM, rM, iM, OM) {
+           const SM = jM.f.HL;
+           for (let jM = 0; jM < MM.length; jM++) {
+             const aM = MM[jM];
+             if (!(0, zr.j)(rM, iM, OM, aM[0] * SM, aM[1] * SM, aM[2] * SM)) return !1
+           }
+           return !0
+         }(rM.qJ.OL, LM, mM, HM), JM = null === PM || Math.abs(LM - PM[0]) > 8 || Math.abs(mM - PM[1]) > 8 || Math.abs(HM - PM[2]) > 8, dM = !nM || JM || performance.now() - aM >= 1e4;
+         nM = hM, hM && dM && (SM = zM, aM = performance.now(), PM = [LM, mM, HM], (0, OM.sendColyMessage)(QM.xg, {
+           ya: zM
+         }))
+       };
+       return MM.on("bL", zM), () => {
+ ... (35 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L209-L220` → after: `L876-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L876-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L876-L923) · [Before (L209-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L209-L220)

```diff
-           },
-           metadata: TQ
-         }, EQ, CQ), (0, wQ.k)(null, null, BQ, {
-           kind: "field",
-           name: "keysRotateUp",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "keysRotateUp" in QQ,
-             get: QQ => QQ.keysRotateUp,
-             set: (QQ, WQ) => {
-               QQ.keysRotateUp = WQ
+           }(this.Cm.uL),
+           rM = Lr(this.Cm);
+         this.stopChunkReports = () => {
+           MM(), rM()
+         }
+       }
+       restartChunkStreaming() {
+         (0, ir.o)(this.Cm, (0, nM.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - mr.e)), this.startChunkReports()
+       }
+       register(MM) {
+         const rM = this.Cm,
+           iM = (0, nM.b)();
+         MM.TE(QM.Pc, (MM => {
+           lM.d.applyNewClientOptions(MM)
+         })), MM.TE(QM.hd, (MM => {
+           hr.b.onReceiveColyseusPing(MM)
+ ... (32 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L223-L234` → after: `L1219-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1219-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1219-L1220) · [Before (L223-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L223-L234)

```diff
-           metadata: TQ
-         }, uQ, LQ), (0, wQ.k)(null, null, yQ, {
-           kind: "field",
-           name: "keysRotateDown",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "keysRotateDown" in QQ,
-             get: QQ => QQ.keysRotateDown,
-             set: (QQ, WQ) => {
-               QQ.keysRotateDown = WQ
-             }
+           onGaveUp: (MM, rM) => {
+             OM.onGaveUp(MM, rM)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L236-L241` → after: `L1222-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1222-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1222-L1229) · [Before (L236-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L236-L241)

```diff
-           metadata: TQ
-         }, kQ, fQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: TQ
+           freeze: rM,
+           releaseSeat: rM => {
+             MM(rM).then((MM => {
+               MM.leave(!0)
+             }), (MM => {
+               console.warn("Couldn't release the held seat of a game left while reconnecting", MM)
+             }))
+           }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L243-L261` → after: `L1231-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1231-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1231-L1258) · [Before (L243-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L243-L261)

```diff
-       })(), QQ
-     })();
-     sQ.d.FreeCameraKeyboardMoveInput = gQ;
-     var JQ = XQ(37399),
-       rQ = XQ(40436);
-     let IQ = (() => {
-       var QQ;
-       let WQ, XQ, TQ = [],
-         zQ = [],
-         sQ = [],
-         FQ = [];
-       return QQ = class {
-         _applyPointerRotation(QQ, WQ) {
-           this._pointerConditions.button = this._currentActiveButton;
-           const XQ = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
-           if (!XQ || "rotate" !== XQ.interaction) return;
- ... (3 more removed lines; see GitHub link above)
+       }
+       onInitialInfo(MM, rM) {
+         this.session.onInitialInfo(MM, rM)
+       }
+       isResuming() {
+         return this.session.isResuming()
+       }
+       getDroppedAt() {
+         return this.droppedAt
+       }
+       onResumeInitialInfo(MM, rM) {
+         if (this.session.onResuming(), null === MM) {
+           try {
+             (0, nM.b)().client.itemDropPrediction.reset()
+           } catch (iM) {
+             console.error("Error dropping the item drop predictions on resuming", iM)
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L263-L319` → after: `L1260-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1260-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1260-L1386) · [Before (L263-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L263-L319)

```diff
-         constructor() {
-           let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-           this.touchEnabled = QQ, this.buttons = (0, wQ.n)(this, TQ, [0, 1, 2]), this.angularSensibility = ((0, wQ.n)(this, zQ), (0, wQ.n)(this, sQ, 2e3)), this._pointerInput = (0, wQ.n)(this, FQ), this._previousPosition = null, this.onPointerMovedObservable = new JQ.b, this._all … [truncated]
-         }
-         attachControl(QQ) {
-           QQ = PQ.g.BackCompatCameraNoPreventDefault(arguments);
-           const WQ = this.camera.Uj(),
-             XQ = WQ.getInputElement();
-           this._pointerInput || (this._pointerInput = wQ => {
-             const qQ = wQ.event,
-               TQ = "touch" === qQ.pointerType;
-             if (!this.touchEnabled && TQ) return;
-             if (wQ.type !== rQ.d.POINTERMOVE && -1 === this.buttons.indexOf(qQ.button)) return;
-             const zQ = qQ.target;
-             if (wQ.type === rQ.d.POINTERDOWN) {
-               if (TQ && -1 !== this._activePointerId || !TQ && -1 !== this._currentActiveButton) return;
- ... (41 more removed lines; see GitHub link above)
+       }
+       attachRoom(MM) {
+         const rM = (0, Rr.h)((() => MM.connection.isOpen));
+         MM.rU(rM);
+         const iM = new ur.b((() => {
+           this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(MM, "silent"), MM.leave(!1))
+         }));
+         MM.onStateChange((() => {
+           iM.heard()
+         }));
+         const OM = rM => {
+           rM.persisted || MM.leave(!0)
+         };
+         window.addEventListener("pagehide", OM), MM.rU(((rM, iM) => {
+           if (MM === this.attachedRoom && this.listener.isLive()) return (0, jM.g)(rM) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${rM}, reconnecting`), this.listener.onDropped(rM, iM), void this.onConnectionDropped(MM, String(r … [truncated]
+         })), this.attachedRoom = MM, this.detachRoomListeners = () => {
+ ... (111 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L321` → after: `L1388-L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1388-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1388-L1404) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L321)

```diff
-             this.onPointerMovedObservable && this.onPointerMovedObservable.clear(), this._observer = null, this._onMouseMove = null, this._previousPosition = null
+           }), this.connectionResume.attachRoom(rM), (0, OM.onGameResetOnce)((() => {
+             this.connectionResume.dispose()
+           }));
+           const jM = iM.send,
+             aM = iM.TE,
+             PM = iM.RiM.send,
+             QM = iM.RiM.TE,
+             zM = iM.oQM;
+           this.checkSendPath = (0, Nr.f)(iM, rM, JM.s);
+           const LM = setInterval((() => {
+             jM === iM.send && aM === iM.TE && PM === iM.RiM.send && QM === iM.RiM.TE && zM === iM.oQM || cr(), this.checkSendPath()
+           }), 1e4);
+           return (0, OM.onGameResetOnce)((() => {
+             clearInterval(LM)
+           })), {
+             success: !0,
+ ... (1 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L323-L342` → after: `L1406-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1406-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1406-L1412) · [Before (L323-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L323-L342)

```diff
-           this._activePointerId = -1, this._currentActiveButton = -1
-         }
-         getClassName() {
-           return "FreeCameraMouseInput"
-         }
-         getSimpleName() {
-           return "mouse"
-         }
-       }, (() => {
-         const PQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
-           kind: "field",
-           name: "buttons",
-           static: !1,
-           private: !1,
-           access: {
- ... (4 more removed lines; see GitHub link above)
+         })).catch((rM => {
+           if (iM.aborted && rM === (0, Fr.f)(iM)) return {
+             success: !1,
+             failDetails: {
+               reason: "Left the game while it loaded",
+               requiresRefresh: !1,
+               canReconnect: !1
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L344-L355` → after: `L1414-L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1414-L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1414-L1422) · [Before (L344-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L344-L355)

```diff
-           },
-           metadata: PQ
-         }, TQ, zQ), (0, wQ.k)(null, null, XQ, {
-           kind: "field",
-           name: "angularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "angularSensibility" in QQ,
-             get: QQ => QQ.angularSensibility,
-             set: (QQ, WQ) => {
-               QQ.angularSensibility = WQ
+           };
+           if (rM instanceof Br.i) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
+             success: !1,
+             failDetails: {
+               reason: rM.message,
+               requiresRefresh: !1,
+               canReconnect: !1,
+               gameServerUnreachable: "timedOut",
+               joinFailure: (0, Xr.e)(rM, rM.leg)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L357-L416` → after: `L1424-L1433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1424-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1424-L1433) · [Before (L357-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L357-L416)

```diff
-           },
-           metadata: PQ
-         }, sQ, FQ), PQ && Object.defineProperty(QQ, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: PQ
-         })
-       })(), QQ
-     })();
-     sQ.d.FreeCameraMouseInput = IQ;
-     var jQ = XQ(40453);
-     let BQ = (() => {
-       var QQ;
-       let WQ, XQ, TQ, zQ = [],
-         sQ = [],
- ... (44 more removed lines; see GitHub link above)
+           };
+           MM.GJ(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${rM.code}\n`, rM);
+           const OM = rM.code;
+           return OM === jM.d.serverUpdating.code ? (this.goToUpdateWaiting(), {
+             success: !1,
+             failDetails: {
+               reason: jM.d.serverUpdating.text,
+               requiresRefresh: !1,
+               canReconnect: !0,
+               goesToUpdateWaiting: !0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L418-L429` → after: `L1435-L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1435-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1435-L1445) · [Before (L418-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L418-L429)

```diff
-           },
-           metadata: PQ
-         }, zQ, sQ), (0, wQ.k)(null, null, XQ, {
-           kind: "field",
-           name: "wheelPrecisionY",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "wheelPrecisionY" in QQ,
-             get: QQ => QQ.wheelPrecisionY,
-             set: (QQ, WQ) => {
-               QQ.wheelPrecisionY = WQ
+           }) : {
+             success: !1,
+             failDetails: {
+               ...this.onConnectionToServerLost(OM, rM.message, {
+                 site: "join",
+                 sinceJoinStart: (0, Dr.c)(performance.now() - aM),
+                 ...qr(rM)
+               }, Tr(rM)),
+               rematch: (0, Ar.e)(rM),
+               gameRefused: (0, xr.e)(rM),
+               joinFailure: (0, Xr.e)(rM, this.colyClient.legReached())
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L432-L442` → after: `L1466-L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1466-L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1466-L1525) · [Before (L432-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L432-L442)

```diff
-           metadata: PQ
-         }, FQ, gQ), (0, wQ.k)(null, null, TQ, {
-           kind: "field",
-           name: "wheelPrecisionZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "wheelPrecisionZ" in QQ,
-             get: QQ => QQ.wheelPrecisionZ,
-             set: (QQ, WQ) => {
-               QQ.wheelPrecisionZ = WQ
+           canReconnect: !MM,
+           canPlayAgain: MM,
+           requiresRefresh: !1,
+           automaticallyReconnect: !1
+         }), (0, Hr.navigatePreserveSearch)("/")
+       }
+       sinceJoined() {
+         return null === this.joinedAt ? "" : (0, Dr.c)(performance.now() - this.joinedAt)
+       }
+       onRoomLeft(MM, rM) {
+         var iM;
+         if (MM === jM.d.gameOrPluginKick.code) return;
+         if (console.log(`Left room with code ${MM}`), MM === jM.d.serverUpdating.code) return (0, pr.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, nM.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
+         this.Cm.GJ(`Kicked from server with code ${MM}`, new Error);
+         const OM = Object.keys(jM.d).find((rM => jM.d[rM].code === MM));
+         (0, pr.reportClientError)("disconnect", "Left room", null !== OM && void 0 !== OM ? OM : String(MM));
+ ... (44 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L444-L450` → after: `L1527-L1542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1527-L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1527-L1542) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L444-L450)

```diff
-           },
-           metadata: PQ
-         }, IQ, BQ), PQ && Object.defineProperty(QQ, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: PQ
+           }
+         }
+         return console.log("Didn't match known error, leaving game"), (0, Dr.d)(MM) || SM ? console.warn("Connection lost", MM, rM) : this.logUnrecognisedConnectionLoss(MM, rM, iM), {
+           reason: `Either your internet isn't working or this is a bug.\nCode: ${MM}`,
+           requiresRefresh: !1,
+           canReconnect: !1,
+           gameServerUnreachable: SM ? "failed" : void 0
+         }
+       }
+       logUnrecognisedConnectionLoss(MM, rM, iM) {
+         (0, Yr.CJ)(new Error("Unrecognised connection loss"), {
+           code: String(MM),
+           cause: null !== rM && void 0 !== rM ? rM : "",
+           ...iM,
+           game: this.gameNameWithVariation,
+           ...(0, Dr.h)()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L452-L462` → after: `L1544-L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1544-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1544-L1560) · [Before (L452-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L452-L462)

```diff
-       })(), QQ
-     })();
-     var yQ;
-     ! function(QQ) {
-       QQ[QQ.MoveRelative = 0] = "MoveRelative", QQ[QQ.RotateRelative = 1] = "RotateRelative", QQ[QQ.MoveScene = 2] = "MoveScene"
-     }(yQ || (yQ = {}));
-     let VQ = (() => {
-       var QQ;
-       let WQ, XQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ = BQ,
-         jQ = [];
-       return QQ = class extends IQ {
+       }
+     }
+   },
+   40007: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => Ki,
+       f: () => rO
+     });
+     var OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM, fM, YM, NM, AM, xM, vM, FM, BM, XM, IM, KM, qM, TM, VM, cM, Mr, rr, ir, Or, Sr, jr, ar, Pr, nr, Qr, zr, Lr, mr, Hr, hr, Jr, dr, yr, lr,  … [truncated]
+       cr = iM(38104),
+       Mi = iM(40016),
+       ri = iM(40024),
+       ii = iM(9726),
+       Oi = iM(620),
+       Si = iM(613),
+       ji = iM(37758);
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L464` → after: `L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1562) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L464)

```diff
-           super(...arguments), this.camera = (0, wQ.n)(this, jQ), this._moveRelative = TQ.s.Zero(), this._rotateRelative = TQ.s.Zero(), this._moveScene = TQ.s.Zero(), this._wheelXAction = yQ.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = yQ.MoveRelative, thi … [truncated]
+           super(...arguments), (0, Mi.d)(this, "id", LM, this), (0, Mi.d)(this, "amount", mM, this), (0, Mi.d)(this, "x", HM, this), (0, Mi.d)(this, "y", hM, this), (0, Mi.d)(this, "z", JM, this), (0, Mi.d)(this, "size", dM, this), (0, Mi.d)(this, "attributes", yM, this)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L466-L467` → after: `L1564-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1564-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1564-L1569) · [Before (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L466-L467)

```diff
-         getClassName() {
-           return "FreeCameraMouseWheelInput"
+       }, LM = (0, ri.e)(zM.prototype, "id", [OM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L469-L470` → after: `L1571-L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1571-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1571-L1576) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L469-L470)

```diff
-         set wheelXMoveRelative(QQ) {
-           null === QQ && this._wheelXAction !== yQ.MoveRelative || (this._wheelXAction = yQ.MoveRelative, this._wheelXActionCoordinate = QQ)
+       }), mM = (0, ri.e)(zM.prototype, "amount", [SM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L472-L473` → after: `L1578-L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1578-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1578-L1583) · [Before (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L472-L473)

```diff
-         get wheelXMoveRelative() {
-           return this._wheelXAction !== yQ.MoveRelative ? null : this._wheelXActionCoordinate
+       }), HM = (0, ri.e)(zM.prototype, "x", [jM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L475-L476` → after: `L1585-L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1585-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1585-L1590) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L475-L476)

```diff
-         set wheelYMoveRelative(QQ) {
-           null === QQ && this._wheelYAction !== yQ.MoveRelative || (this._wheelYAction = yQ.MoveRelative, this._wheelYActionCoordinate = QQ)
+       }), hM = (0, ri.e)(zM.prototype, "y", [aM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L478-L479` → after: `L1592-L1597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1592-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1592-L1597) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L478-L479)

```diff
-         get wheelYMoveRelative() {
-           return this._wheelYAction !== yQ.MoveRelative ? null : this._wheelYActionCoordinate
+       }), JM = (0, ri.e)(zM.prototype, "z", [PM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L481-L482` → after: `L1599-L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1599-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1599-L1604) · [Before (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L481-L482)

```diff
-         set wheelZMoveRelative(QQ) {
-           null === QQ && this._wheelZAction !== yQ.MoveRelative || (this._wheelZAction = yQ.MoveRelative, this._wheelZActionCoordinate = QQ)
+       }), dM = (0, ri.e)(zM.prototype, "size", [nM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 1
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L484-L485` → after: `L1606-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1606-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1606-L1611) · [Before (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L484-L485)

```diff
-         get wheelZMoveRelative() {
-           return this._wheelZAction !== yQ.MoveRelative ? null : this._wheelZActionCoordinate
+       }), yM = (0, ri.e)(zM.prototype, "attributes", [QM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return "{}"
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L487-L488` → after: `L1613-L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1613-L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1613-L1616) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L487-L488)

```diff
-         set wheelXRotateRelative(QQ) {
-           null === QQ && this._wheelXAction !== yQ.RotateRelative || (this._wheelXAction = yQ.RotateRelative, this._wheelXActionCoordinate = QQ)
+       }), zM),
+       Pi = (lM = (0, ii.type)("string"), EM = (0, ii.type)("string"), UM = class extends ii.Schema {
+         constructor() {
+           super(...arguments), (0, Mi.d)(this, "itemName", GM, this), (0, Mi.d)(this, "enchantmentTier", CM, this)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L490-L491` → after: `L1618-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1618-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1618-L1631) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L490-L491)

```diff
-         get wheelXRotateRelative() {
-           return this._wheelXAction !== yQ.RotateRelative ? null : this._wheelXActionCoordinate
+       }, GM = (0, ri.e)(UM.prototype, "itemName", [lM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: null
+       }), CM = (0, ri.e)(UM.prototype, "enchantmentTier", [EM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: null
+       }), UM),
+       ni = (eM = (0, ii.type)("string"), bM = (0, ii.type)("string"), wM = (0, ii.type)("number"), tM = (0, ii.type)("number"), gM = (0, ii.type)("number"), uM = (0, ii.type)("float32"), RM = (0, ii.type)("float32"), pM = (0, ii.type)("float32"), WM = (0, ii.type)("string"), sM = … [truncated]
+         constructor() {
+           super(...arguments), (0, Mi.d)(this, "type", ZM, this), (0, Mi.d)(this, "name", oM, this), (0, Mi.d)(this, "x", fM, this), (0, Mi.d)(this, "y", YM, this), (0, Mi.d)(this, "z", NM, this), (0, Mi.d)(this, "xRotation", AM, this), (0, Mi.d)(this, "yRotation", xM, this), (0, … [truncated]
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L493-L494` → after: `L1633-L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1633-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1633-L1643) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L493-L494)

```diff
-         set wheelYRotateRelative(QQ) {
-           null === QQ && this._wheelYAction !== yQ.RotateRelative || (this._wheelYAction = yQ.RotateRelative, this._wheelYActionCoordinate = QQ)
+       }, ZM = (0, ri.e)(kM.prototype, "type", [eM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: null
+       }), oM = (0, ri.e)(kM.prototype, "name", [bM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return ""
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L496-L497` → after: `L1645-L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1645-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1645-L1650) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L496-L497)

```diff
-         get wheelYRotateRelative() {
-           return this._wheelYAction !== yQ.RotateRelative ? null : this._wheelYActionCoordinate
+       }), fM = (0, ri.e)(kM.prototype, "x", [wM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L499-L500` → after: `L1652-L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1652-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1652-L1657) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L499-L500)

```diff
-         set wheelZRotateRelative(QQ) {
-           null === QQ && this._wheelZAction !== yQ.RotateRelative || (this._wheelZAction = yQ.RotateRelative, this._wheelZActionCoordinate = QQ)
+       }), YM = (0, ri.e)(kM.prototype, "y", [tM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L502-L503` → after: `L1659-L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1659-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1659-L1664) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L502-L503)

```diff
-         get wheelZRotateRelative() {
-           return this._wheelZAction !== yQ.RotateRelative ? null : this._wheelZActionCoordinate
+       }), NM = (0, ri.e)(kM.prototype, "z", [gM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L505-L506` → after: `L1666-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1666-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1666-L1671) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L505-L506)

```diff
-         set wheelXMoveScene(QQ) {
-           null === QQ && this._wheelXAction !== yQ.MoveScene || (this._wheelXAction = yQ.MoveScene, this._wheelXActionCoordinate = QQ)
+       }), AM = (0, ri.e)(kM.prototype, "xRotation", [uM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L508-L509` → after: `L1673-L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1673-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1673-L1678) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L508-L509)

```diff
-         get wheelXMoveScene() {
-           return this._wheelXAction !== yQ.MoveScene ? null : this._wheelXActionCoordinate
+       }), xM = (0, ri.e)(kM.prototype, "yRotation", [RM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L511-L512` → after: `L1680-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1680-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1680-L1685) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L511-L512)

```diff
-         set wheelYMoveScene(QQ) {
-           null === QQ && this._wheelYAction !== yQ.MoveScene || (this._wheelYAction = yQ.MoveScene, this._wheelYActionCoordinate = QQ)
+       }), vM = (0, ri.e)(kM.prototype, "zRotation", [pM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L514-L515` → after: `L1687-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1687-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1687-L1697) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L514-L515)

```diff
-         get wheelYMoveScene() {
-           return this._wheelYAction !== yQ.MoveScene ? null : this._wheelYActionCoordinate
+       }), FM = (0, ri.e)(kM.prototype, "followingEId", [WM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: null
+       }), BM = (0, ri.e)(kM.prototype, "followingOffset", [sM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return new ii.ArraySchema(0, 0, 0)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L517-L518` → after: `L1699-L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1699-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1699-L1704) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L517-L518)

```diff
-         set wheelZMoveScene(QQ) {
-           null === QQ && this._wheelZAction !== yQ.MoveScene || (this._wheelZAction = yQ.MoveScene, this._wheelZActionCoordinate = QQ)
+       }), XM = (0, ri.e)(kM.prototype, "shouldMatchFollowingEntityRotation", [DM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return !0
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L520-L521` → after: `L1706-L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1706-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1706-L1711) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L520-L521)

```diff
-         get wheelZMoveScene() {
-           return this._wheelZAction !== yQ.MoveScene ? null : this._wheelZActionCoordinate
+       }), kM),
+       Qi = (IM = (0, ii.type)("float32"), KM = (0, ii.type)("float32"), qM = (0, ii.type)("boolean"), TM = (0, ii.type)("boolean"), VM = (0, ii.type)("float32"), cM = (0, ii.type)("boolean"), Mr = (0, ii.type)("string"), rr = (0, ii.type)("string"), ir = (0, ii.type)("string"), O … [truncated]
+         map: Pi
+       }), Pr = class extends ni {
+         constructor() {
+           super(...arguments), (0, Mi.d)(this, "scale", nr, this), (0, Mi.d)(this, "speed", Qr, this), (0, Mi.d)(this, "jumping", zr, this), (0, Mi.d)(this, "crouching", Lr, this), (0, Mi.d)(this, "cameraPitch", mr, this), (0, Mi.d)(this, "armSwinging", Hr, this), (0, Mi.d)(this, … [truncated]
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L523-L529` → after: `L1713-L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1713-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1713-L1718) · [Before (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L523-L529)

```diff
-         checkInputs() {
-           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
-           this._moveRelative.h_(0), this._rotateRelative.h_(0), this._moveScene.h_(0), this._updateCamera(), this.camera.sE().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const QQ = TQ.e.Zero();
-           this.camera.getViewMatrix().invertToRef(QQ);
-           const WQ = TQ.s.Zero();
-           TQ.s.TransformNormalToRef(this._moveRelative, QQ, WQ), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(WQ), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+       }, nr = (0, ri.e)(Pr.prototype, "scale", [IM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 1
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L531-L532` → after: `L1720-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1720-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1720-L1725) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L531-L532)

```diff
-         _updateCamera() {
-           this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._whee … [truncated]
+       }), Qr = (0, ri.e)(Pr.prototype, "speed", [KM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L534-L557` → after: `L1727-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1727-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1727-L1732) · [Before (L534-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L534-L557)

```diff
-         _updateCameraProperty(QQ, WQ, XQ) {
-           if (0 === QQ) return;
-           if (null === WQ || null === XQ) return;
-           let wQ = null;
-           switch (WQ) {
-             case yQ.MoveRelative:
-               wQ = this._moveRelative;
-               break;
-             case yQ.RotateRelative:
-               wQ = this._rotateRelative;
-               break;
-             case yQ.MoveScene:
-               wQ = this._moveScene
-           }
-           switch (XQ) {
-             case 0:
- ... (8 more removed lines; see GitHub link above)
+       }), zr = (0, ri.e)(Pr.prototype, "jumping", [qM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return !1
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L559-L684` → after: `L1734-L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1734-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1734-L1801) · [Before (L559-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L559-L684)

```diff
-       }, (() => {
-         const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(IQ[Symbol.metadata] ?? null) : void 0;
-         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], zQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, WQ, {
-           kind: "setter",
-           name: "wheelXMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "wheelXMoveRelative" in QQ,
-             set: (QQ, WQ) => {
-               QQ.wheelXMoveRelative = WQ
-             }
-           },
-           metadata: TQ
-         }, null, jQ), (0, wQ.k)(QQ, null, XQ, {
-           kind: "setter",
- ... (110 more removed lines; see GitHub link above)
+       }), Lr = (0, ri.e)(Pr.prototype, "crouching", [TM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return !1
+         }
+       }), mr = (0, ri.e)(Pr.prototype, "cameraPitch", [VM], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return 0
+         }
+       }), Hr = (0, ri.e)(Pr.prototype, "armSwinging", [cM], {
+         configurable: !0,
+ ... (52 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L686-L718` → after: `L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1803) · [Before (L686-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L686-L718)

```diff
-           let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           this.allowMouse = QQ, this.touchAngularSensibility = (0, wQ.n)(this, zQ, 2e5), this.touchMoveSensibility = ((0, wQ.n)(this, sQ), (0, wQ.n)(this, FQ, 250)), this.singleFingerRotate = ((0, wQ.n)(this, gQ), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
-         }
-         attachControl(QQ) {
-           QQ = PQ.g.BackCompatCameraNoPreventDefault(arguments);
-           let WQ = null;
-           if (void 0 === this._pointerInput && (this._onLostFocus = () => {
-               this._offsetX = null, this._offsetY = null
-             }, this._pointerInput = XQ => {
-               const wQ = XQ.event,
-                 qQ = "mouse" === wQ.pointerType || this._isSafari && "undefined" === typeof wQ.pointerType;
-               if (this.allowMouse || !qQ)
-                 if (XQ.type === rQ.d.POINTERDOWN) {
-                   if (QQ || wQ.preventDefault(), this._pointerPressed.push(wQ.pointerId), 1 !== this._pointerPressed.length) return;
-                   WQ = {
-                     x: wQ.clientX,
- ... (17 more removed lines; see GitHub link above)
+           super(...arguments), (0, Mi.d)(this, "variation", tr, this), (0, Mi.d)(this, "ownerDbId", gr, this), (0, Mi.d)(this, "metaInfo", ur, this), (0, Mi.d)(this, "aiState", Rr, this)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L720-L727` → after: `L1805-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1805-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1805-L1810) · [Before (L720-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L720-L727)

```diff
-         detachControl() {
-           if (this._pointerInput) {
-             if (this._observer && (this.camera.sE()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const QQ = this.camera.Uj().getInputElement();
-               QQ && QQ.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
-             }
-             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
-           }
+       }, tr = (0, ri.e)(wr.prototype, "variation", [Gr], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return "default"
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L729-L746` → after: `L1812-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1812-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1812-L1954) · [Before (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L729-L746)

```diff
-         checkInputs() {
-           if (null === this._offsetX || null === this._offsetY) return;
-           if (0 === this._offsetX && 0 === this._offsetY) return;
-           const QQ = this.camera,
-             WQ = QQ.movement.input,
-             XQ = WQ.getEntry("touch", "rotate"),
-             wQ = WQ.getEntry("touch", "translate"),
-             qQ = QQ._calculateHandednessMultiplier(),
-             zQ = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
-           if (XQ) {
-             const WQ = XQ.sensitivity ?? 1 / this.touchAngularSensibility;
-             QQ.cameraRotation.y = this._offsetX * qQ * WQ, zQ && (QQ.cameraRotation.x = -this._offsetY * qQ * WQ)
-           }
-           if (!zQ && wQ) {
-             const WQ = QQ._computeLocalCameraSpeed(),
-               XQ = wQ.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
- ... (2 more removed lines; see GitHub link above)
+       }), gr = (0, ri.e)(wr.prototype, "ownerDbId", [Cr], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return null
+         }
+       }), ur = (0, ri.e)(wr.prototype, "metaInfo", [er], {
+         configurable: !0,
+         enumerable: !0,
+         writable: !0,
+         initializer: function() {
+           return ""
+         }
+       }), Rr = (0, ri.e)(wr.prototype, "aiState", [br], {
+         configurable: !0,
+ ... (127 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L749-L766` → after: `L1988-L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1988-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L1988-L2093) · [Before (L749-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L749-L766)

```diff
-         getClassName() {
-           return "FreeCameraTouchInput"
-         }
-         getSimpleName() {
-           return "touch"
-         }
-       }, (() => {
-         const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
-           kind: "field",
-           name: "touchAngularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "touchAngularSensibility" in QQ,
-             get: QQ => QQ.touchAngularSensibility,
- ... (2 more removed lines; see GitHub link above)
+       }
+       updateHidingMeshMgr() {
+         var MM, rM, iM;
+         const {
+           Cm: OM
+         } = this, {
+           hU: SM
+         } = OM, jM = this.getCurrentHidingMeshMgrState();
+         if ((0, Ui.Td)(this.previousHidingMeshManagerState, jM)) return;
+         if (this.previousHidingMeshManagerState = jM, SM.bZ(this.eId, "hidingMeshManager"), null === (MM = OM.rY[OM.eD][this.eId]) || void 0 === MM || !MM.canSee) return;
+         const aM = this.getSpec();
+         if (!aM) return;
+         const {
+           type: PM,
+           opts: nM
+         } = aM;
+ ... (90 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L769-L780` → after: `L2108-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2108-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2108-L2109) · [Before (L769-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L769-L780)

```diff
-           metadata: TQ
-         }, zQ, sQ), (0, wQ.k)(null, null, XQ, {
-           kind: "field",
-           name: "touchMoveSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "touchMoveSensibility" in QQ,
-             get: QQ => QQ.touchMoveSensibility,
-             set: (QQ, WQ) => {
-               QQ.touchMoveSensibility = WQ
-             }
+           removeMeshComponent: () => {
+             "Person" !== PM && "BloxdBlock" !== PM || SM.bZ(this.eId, "rigAnimation"), SM.bZ(this.eId, SM.names.mesh), SM.BMM(this.eId, SM.names.meshAttachments) && SM.bZ(this.eId, SM.names.meshAttachments), SM.bZ(this.eId, "entityName"), SM.bZ(this.eId, "autoRotate"), SM.bZ(this … [truncated]
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L782-L787` → after: `L2111-L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2111-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2111-L2115) · [Before (L782-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L782-L787)

```diff
-           metadata: TQ
-         }, FQ, gQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: TQ
+           hideDist: null !== (rM = nM.hideDist) && void 0 !== rM ? rM : 80,
+           movingHideDist: null !== (iM = nM.hideDist) && void 0 !== iM ? iM : 120,
+           displayOutsideLoadedChunk: nM.hideDist > 100,
+           immediatelyUpdate: !0,
+           az: "BloxdBlock" === PM ? nM.blockName : PM
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L797-L798` → after: `L2118-L2121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2118-L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2118-L2121) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L797-L798)

```diff
-       addKeyboard() {
-         return this.add(new gQ), this
+       queueMeshRebuild() {
+         this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
+           this.meshRebuildQueued = !1, this.dh || this.updateHidingMeshMgr()
+         })))
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L800-L802` → after: `L2123-L2127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2123-L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2123-L2127) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L800-L802)

```diff
-       addMouse() {
-         let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         return this._mouseInput || (this._mouseInput = new IQ(QQ), this.add(this._mouseInput)), this
+       getSpec() {
+         return (0, Ei.g)({
+           meshKind: this.meshKind,
+           meshOpts: this.meshOpts
+         })
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L804-L805` → after: `L2129-L2138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2129-L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2129-L2138) · [Before (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L804-L805)

```diff
-       removeMouse() {
-         return this._mouseInput && this.remove(this._mouseInput), this
+       updateOverlayColour(MM) {
+         var rM, iM;
+         if ("Person" !== this.meshKind) return;
+         let OM = new Gi.d(0, 0, 0, 0);
+         if (null !== MM) {
+           const rM = (0, Ui.X)(MM);
+           OM = new Gi.d(rM[0] / 255, rM[1] / 255, rM[2] / 255, .5)
+         }
+         const SM = null !== (rM = null === (iM = this.Cm.hU.GrM(this.eId)) || void 0 === iM ? void 0 : iM.Zk) && void 0 !== rM ? rM : null;
+         null !== SM && Ci.b.Player.meshApi.updateMeshOverlayColour(SM, OM)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L807-L808` → after: `L2140-L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2140-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2140-L2144) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L807-L808)

```diff
-       addMouseWheel() {
-         return this._mouseWheelInput || (this._mouseWheelInput = new VQ, this.add(this._mouseWheelInput)), this
+       updateZIndex(MM) {
+         var rM;
+         if ("Person" !== this.meshKind) return;
+         const iM = null === (rM = this.Cm.hU.GrM(this.eId)) || void 0 === rM ? void 0 : rM.Zk;
+         "number" === typeof iM && this.Cm.CL.Dk.setRenderingGroupId(iM, MM)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L810-L811` → after: `L2146-L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2146-L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2146-L2148) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L810-L811)

```diff
-       removeMouseWheel() {
-         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
+       updateOpacity(MM) {
+         const rM = this.Cm.hU.GrM(this.eId);
+         rM && ("number" !== typeof rM.Zk ? rM.mesh && "ParticleEmitter" !== this.meshKind && (0, Ri.f)(rM.mesh, MM) : Ci.b.Player.meshApi.updateMeshOpacity(rM.Zk, MM))
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L813-L814` → after: `L2150-L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2150-L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2150-L2154) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L813-L814)

```diff
-       addTouch() {
-         return this.add(new DQ), this
+     }
+     var Zi = iM(40014);
+     class oi {
+       constructor(MM, rM) {
+         this.eId = rM, this.Cm = void 0, this.schema = void 0, this.Cm = MM.Cm
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L816-L817` → after: `L2156-L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2156-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2156-L2157) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L816-L817)

```diff
-       clear() {
-         super.clear(), this._mouseInput = null
+       initClient(MM) {
+         this.schema = MM, this.Cm.hU.add([MM.x, MM.y, MM.z], .1, .1, null, null, !1, !1, this.eId), this.Cm.hU.eZ(this.eId, "smoothToServerPos"), Zi.e.add(this.eId, this.copyOpts())
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L819-L900` → after: `L2159-L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2159-L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2159-L2204) · [Before (L819-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L819-L900)

```diff
-     }(pQ = vQ.prototype).addDeviceOrientation ?? (pQ.addDeviceOrientation = (0, bQ.h)("FreeCameraInputsManager", "addDeviceOrientation")), (GQ = vQ.prototype).addVirtualJoystick ?? (GQ.addVirtualJoystick = (0, bQ.h)("FreeCameraInputsManager", "addVirtualJoystick")), (UQ = vQ.prot … [truncated]
-     var dQ = XQ(40170),
-       HQ = XQ(37418);
-     let aQ = (() => {
-         var QQ;
-         let WQ, XQ, sQ, FQ, gQ = zQ.c,
-           JQ = [],
-           rQ = [],
-           IQ = [],
-           jQ = [],
-           BQ = [],
-           yQ = [],
-           VQ = [],
-           DQ = [];
-         return QQ = class extends gQ {
-           get angularSensibility() {
- ... (66 more removed lines; see GitHub link above)
+       onChangeClient(MM) {
+         Si.g.includes(MM) && Zi.e.update(this.eId, this.copyOpts())
+       }
+       disposeClient() {
+         Zi.e.remove(this.eId), this.Cm.hU.deleteEntity(this.eId)
+       }
+       copyOpts() {
+         const {
+           soundName: MM,
+           volume: rM,
+           refDistance: iM,
+           maxHearDist: OM,
+           rate: SM
+         } = this.schema;
+         return {
+           soundName: MM,
+ ... (30 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L902-L904` → after: `L2206-L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2206-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2206-L2218) · [Before (L902-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L902-L904)

```diff
-           set keysRotateRight(QQ) {
-             const WQ = this.inputs.attached.keyboard;
-             WQ && (WQ.keysRotateRight = QQ)
+         }, this.createStateCallbacks = (0, Fi.getStateCallbacks)(MM), this.roomStateCallbacks = this.createStateCallbacks(MM.state), this.roomState = MM.state, this.setupBudgetLeftMs = iM, this.lastRefillMs = OM()
+       }
+       setup() {
+         this.setupEntityHandlers(), this.setupItemHandlers(), this.RiM.onStateChange(this.setUpPromoted), this.Cm.on("beforeInputs", this.onFrame), this.Cm.on("bL", this.kE)
+       }
+       setUpQueuedEntities(MM) {
+         var rM;
+         if ((null === (rM = (0, xi.b)().client.getMsgHandler()) || void 0 === rM ? void 0 : rM.RiM) !== this.RiM) return this.Cm.off("beforeInputs", this.onFrame), this.Cm.off("bL", this.kE), this.queuedSetups.clear(), void this.promotedSetups.clear();
+         if (MM && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
+           for (ui().copy(qi, this.Cm.hU.XE(this.Cm.eD)); this.setupBudgetLeftMs > 0;) {
+             const MM = this.nearestQueued(qi);
+             if (null === MM) return;
+             this.setUpIfQueued(MM), this.setUpPromoted()
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L906-L908` → after: `L2220-L2351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2220-L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2220-L2351) · [Before (L906-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L906-L908)

```diff
-           get keysRotateUp() {
-             const QQ = this.inputs.attached.keyboard;
-             return QQ ? QQ.keysRotateUp : []
+       }
+       nearestQueued(MM) {
+         let rM = null,
+           iM = 1 / 0;
+         return this.queuedSetups.forEach(((OM, SM) => {
+           const jM = function(MM, rM) {
+             return (rM.x - MM[0]) ** 2 + (rM.y - MM[1]) ** 2 + (rM.z - MM[2]) ** 2
+           }(MM, OM);
+           (null === rM || jM < iM) && (rM = SM, iM = jM)
+         })), rM
+       }
+       setUpOrQueue(MM, rM) {
+         0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(MM, rM) ? this.timedSetup(MM, rM) : this.queuedSetups.set(rM, MM)
+       }
+       mustSetUpNow(MM, rM) {
+         const iM = this.Cm.IMM;
+ ... (116 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L910-L912` → after: `L2353-L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2353-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2353-L2403) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L910-L912)

```diff
-           set keysRotateUp(QQ) {
-             const WQ = this.inputs.attached.keyboard;
-             WQ && (WQ.keysRotateUp = QQ)
+           case "armour":
+             this.handleArmourChange(MM, OM);
+             break;
+           case "followingEId":
+             this.promoteIfQueued(OM), this.handleFollowingEIdChange(MM, rM, OM);
+             break;
+           case "xRotation":
+           case "yRotation":
+           case "zRotation":
+             this.handleRotationChange(MM, iM, OM);
+             break;
+           case "scale":
+             this.handleScaleChange(MM, OM);
+             break;
+           case "baseRenderHeading":
+             this.handleBaseRenderHeadingChange(MM, OM);
+ ... (35 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L914-L916` → after: `L2405-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2405-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2405-L2488) · [Before (L914-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L914-L916)

```diff
-           get keysRotateDown() {
-             const QQ = this.inputs.attached.keyboard;
-             return QQ ? QQ.keysRotateDown : []
+         });
+         else if (!SM) {
+           this.Cm.hU.BMM(OM, "smoothToServerPos") || this.Cm.hU.eZ(OM, "smoothToServerPos");
+           const MM = this.Cm.hU.getState(OM, "smoothToServerPos"),
+             rM = this.Cm.hU.jK(OM).position;
+           (0, Xi.setServerPosition)(MM, rM[0], rM[1], rM[2])
+         }
+       }
+       handleRotationChange(MM, rM, iM) {
+         const OM = "xRotation" === rM ? 0 : "yRotation" === rM ? 1 : 2;
+         for (const SM of (0, xi.b)().getFollowingEntities(MM)) {
+           const MM = this.Cm.hU.getState(SM, "meshRotation"),
+             rM = this.Cm.hU.ziM(SM);
+           MM && rM.LiM && (MM.serverSetRotation[OM] = iM)
+         }
+       }
+ ... (68 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L918-L920` → after: `L2490-L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2490-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2490-L2724) · [Before (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L918-L920)

```diff
-           set keysRotateDown(QQ) {
-             const WQ = this.inputs.attached.keyboard;
-             WQ && (WQ.keysRotateDown = QQ)
+           return
+         }
+         if (!this.Cm.hU.BMM(MM, "itemState")) return;
+         const OM = this.Cm.hU.getState(MM, "itemState");
+         "amount" === rM && iM !== OM.amount && (OM.creationTime = Date.now()), OM[rM] = "attributes" === rM ? JSON.parse(iM) : iM
+       }
+       dispose() {
+         if (!this.dh) {
+           this.dh = !0, this.Cm.off("beforeInputs", this.onFrame), this.Cm.off("bL", this.kE), this.queuedSetups.clear(), this.promotedSetups.clear();
+           for (const MM of this.deferredSetups.values()) Vr.i.unsubscribe(MM);
+           this.deferredSetups.clear(), this.Cm.hU.bZ(this.Cm.eD, this.Cm.hU.names.mG);
+           for (const MM in this.allItems) this.Cm.hU.deleteEntity(MM), delete this.allItems[MM];
+           for (const MM of [...this.detachers.keys()]) this.detach(MM);
+           (0, cr.b)(this.Cm).clear();
+           for (const MM of (0, xi.b)().client.iterateEntityIds())(0, xi.b)().client.disposeEntity(MM)
+         }
+ ... (219 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L922` → after: `L2726-L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2726-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2726-L2921) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L922)

```diff
-           constructor(QQ, WQ, XQ) {
+         } else this.editedAt.set(this.lastChunkId, nM)
+       }
+       chunksEditedSince(MM) {
+         const rM = [];
+         for (const [iM, OM] of this.editedAt) OM >= MM && rM.push(iM);
+         return rM
+       }
+     }
+   },
+   40103: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => Hr,
+       h: () => xr,
+       i: () => sr,
+       l: () => vr
+     });
+ ... (180 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L924-L930` → after: `L2923-L2926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2923-L2926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2923-L2926) · [Before (L924-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L924-L930)

```diff
-             super(QQ, WQ, XQ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), qQ = this, this.ellipsoid = (0, wQ.n)(this, JQ, new TQ.s(.5, 1, .5)), this.ellipsoidOffset = ((0, wQ.n)(this, rQ), (0, wQ.n)(this, IQ, new TQ.s(0, 0, 0))), this.checkCollisions = (( … [truncated]
-               let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-               qQ._newPosition.WH(WQ), qQ._newPosition.subtractToRef(qQ._oldPosition, qQ._diffPosition), qQ._diffPosition.length() > dQ.d.CollisionsEpsilon && (qQ.position.addToRef(qQ._diffPosition, qQ._deferredPositionUpdate), qQ._deferOnly ? qQ._deferredUpdated = !0 : qQ.positio … [truncated]
-             }, this.inputs = new vQ(this), this.inputs.addKeyboard().addMouse()
-           }
-           attachControl(QQ, WQ) {
-             WQ = PQ.g.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(WQ)
+             const SM = ir[OM];
+             var PM, nM;
+             if (SM) null === (PM = (0, gM.b)().client) || void 0 === PM || null === (nM = PM.freeCameraController) || void 0 === nM || nM.handlefreeCamKeyPress(SM, rM, iM);
+             return void(iM || null !== (aM = (0, gM.b)().client) && void 0 !== aM && aM.isReplayMode() || (MM.hU.iiM()[OM] = !1))
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L932-L933` → after: `L2928-L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2928-L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2928-L2977) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L932-L933)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this.cameraDirection = new TQ.s(0, 0, 0), this.cameraRotation = new TQ.q(0, 0)
+           if (null !== (SM = (0, gM.b)().client) && void 0 !== SM && null !== (jM = SM.freeCameraController) && void 0 !== jM && jM.isKeyPressOverriden(rM)) return;
+           MM.hU.iiM()[OM] = iM
+         };
+         MM.inputs.down.on(OM, (MM => rM(MM, !0))), MM.inputs.up.on(OM, (MM => rM(MM, !1)))
+       }
+       MM.inputs.down.on("crouch", (() => {
+         if (Or()) return;
+         if (!MM.aU.canCrouch) return;
+         const rM = MM.hU.iiM();
+         tM.d.get("clientEscMenuOptions").crouchIsToggle && (rM.crouchToggled = !rM.crouchToggled && !rM.padSneakToggled), rM.padSneakToggled = !1
+       }));
+       const iM = () => {
+         const MM = rM();
+         MM.isGun() && MM.inaccuracyCalculator.jump()
+       };
+       MM.inputs.down.on("jump", (MM => {
+ ... (34 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L935-L936` → after: `L2979-L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2979-L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2979-L2992) · [Before (L935-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L935-L936)

```diff
-           get collisionMask() {
-             return this._collisionMask
+         },
+         GM = (MM, iM) => {
+           iM && vr(HM.c.TouchDownFirePrimary), MM ? fM() : ((0, DM.g)(), rM().BiM()), iM || vr(HM.c.DownFirePrimary), xr(!0), aM.click();
+           const SM = aM.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
+             jM = aM.getMaxClickSeparationInMs(1e4) < 20,
+             PM = aM.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
+           if (SM || jM || PM) {
+             let MM;
+             if (SM) MM = 30;
+             else if (jM) MM = 50;
+             else {
+               if (!PM) throw new Error("???");
+               MM = 70
+             }(0, OM.sendColyMessage)(zM.ak, MM)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L938-L939` → after: `L2994-L3327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2994-L3327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L2994-L3327) · [Before (L938-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L938-L939)

```diff
-           set collisionMask(QQ) {
-             this._collisionMask = isNaN(QQ) ? -1 : QQ
+         },
+         pM = new xM.c,
+         WM = lM((() => {
+           xM.c.stopRunning();
+           const MM = Date.now() - mM;
+           LM.registerClickDownDuration(MM), rM().xiM(), vr(HM.c.UpFirePrimary), xr(!1);
+           const iM = LM.clickDownDurationsCheck(4e4);
+           (0, OM.sendColyMessage)(zM.Bg, iM)
+         }));
+       let sM = 0;
+       MM.inputs.down.on("primary-fire", (function(MM) {
+         sM = WM.press(), WM.owns(sM) && (mM = Date.now(), Math.abs(performance.now() - MM.timeStamp) > 5e3 || (GM(MM.altKey, "changedTouches" in MM), hr(MM)))
+       })), MM.inputs.up.on("primary-fire", (function(MM) {
+         WM.release(sM) && hr(MM, !0)
+       }));
+       const kM = () => {
+ ... (318 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L941-L947` → after: `L3329-L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L3329-L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L3329-L3340) · [Before (L941-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L941-L947)

```diff
-           _collideWithWorld(QQ) {
-             let WQ;
-             WQ = this.parent ? TQ.s.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, WQ.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
-             const XQ = this.sE().collisionCoordinator;
-             this._collider || (this._collider = XQ.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
-             let wQ = QQ;
-             this.applyGravity && (wQ = QQ.add(this.sE().gravity)), XQ.getNewPosition(this._oldPosition, wQ, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
+ 
+           function iM(...MM) {
+             switch (MM[tr[4]] = tr[1], ((MM[tr[0]] & tr[38]) !== tr[0]) * tr[1] + (MM[tr[0]] < tr[0]) * tr[6]) {
+               case tr[0]:
+                 return [MM[tr[0]] % tr[38], Math.trunc(MM[tr[0]] / tr[39])];
+               case tr[1]:
+                 return [MM[tr[0]] % tr[38] - tr[38], Math.trunc(MM[tr[0]] / tr[39]) + tr[1]];
+               case tr[6]:
+                 return [((MM[tr[0]] + tr[38]) % tr[38] + tr[38]) % tr[38], Math.round(MM[tr[0]] / tr[39])];
+               case tr[24]:
+                 return [MM[tr[0]] % tr[38], Math.trunc(MM[tr[0]] / tr[39])]
+             }
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L949-L950` → after: `L3342-L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R3342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L3342-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L3342-L3418) · [Before (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L949-L950)

```diff
-           _checkInputs() {
-             this._localDirection || (this._localDirection = TQ.s.Zero(), this._transformedDirection = TQ.s.Zero()), this.inputs.checkInputs(), super._checkInputs()
+           MM[tr[4]] = tr[0], Wr(MM[-tr[40]] = rM([tr[6], tr[26]]), MM[tr[23]] = rM([tr[1], tr[6]]), MM[tr[41]] = MM[-tr[40]] + MM[tr[23]], MM[tr[24]] = MM[tr[41]] - MM[tr[23]], MM[tr[42]] = MM[tr[24]] * tr[6], MM[tr[25]] = MM[tr[42]] / tr[6], console.log(iM(MM[tr[41]])), console. … [truncated]
+         }(), MM[tr[11]] = tr[0];
+       for (const rM in MM[tr[0]]) MM[tr[11]]++;
+       return MM[tr[11]]
+     }, Jr = (...MM) => {
+       if (MM[tr[4]] = tr[0], function(...MM) {
+           return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(...MM) {
+             for (Wr(MM[tr[4]] = tr[1], MM[tr[45]] = 'E0*W+PwHo(>%=aSNkq9,TO"vDr]RMX}5mdyn.)j#CBb&hU@gzpQA!VK$2_8islY/uc7F:J?fe3[I`6G|1x~<4tZ{^;L', MM[-tr[43]] = "" + (MM[tr[0]] || ""), MM[tr[41]] = MM[-tr[43]].length, MM[tr[44]] = [], MM[tr[25]] = tr[0], MM[tr[18]] = tr[0], MM[tr … [truncated]
+               if (MM[tr[46]] = MM[tr[45]].indexOf(MM[-tr[43]][MM[tr[2]]]), MM[tr[46]] !== -tr[1])
+                 if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[tr[46]];
+                 else {
+                   Wr(MM[tr[31]] += MM[tr[46]] * tr[32], MM[tr[25]] |= MM[tr[31]] << MM[tr[18]], MM[tr[18]] += (MM[tr[31]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
+                   do {
+                     Wr(MM[tr[44]].push(MM[tr[25]] & tr[3]), MM[tr[25]] >>= tr[2], MM[tr[18]] -= tr[2])
+                   } while (MM[tr[18]] > tr[20]);
+                   MM[tr[31]] = -tr[1]
+ ... (61 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L952-L953` → after: `L3420-L3688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L3420-L3688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/266.js#L3420-L3688) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/266.js#L952-L953)

```diff
-           set needMoveForGravity(QQ) {
-             this._needMoveForGravity = QQ
+           iM(tr[87]) + "7" in pr && SM(), (0, LM[tr[14]])("4 ")
+         }
+         Qr = tr[0]
+       }
+     }), hr = function(MM) {
+       if (gr(98) in pr && function(...MM) {
+           Wr(MM[tr[4]] = tr[0], MM[tr[59]] = function(...rM) {
+             return Wr(rM[tr[4]] = tr[24], rM[tr[24]] = {}), rM[tr[6]].length !== rM[tr[0]].length + rM[tr[1]].length ? tr[57] : MM[tr[1]](rM[tr[0]], rM[tr[1]], rM[tr[6]], tr[0], tr[0], tr[0], rM[tr[24]])
+           }, MM[tr[1]] = function(...rM) {
+             return Wr(rM[tr[4]] = tr[20], rM[tr[58]] = tr[57]), rM[tr[25]] >= rM[tr[6]].length ? tr[101] : rM[tr[18]]["" + rM[tr[24]] + rM[tr[26]] + rM[tr[25]]] !== tr[12] ? rM[tr[18]]["" + rM[tr[24]] + rM[tr[26]] + rM[tr[25]]] : (rM[tr[6]][rM[tr[25]]] === rM[tr[0]][rM[tr[24]]] & … [truncated]
+           }, console.log(MM[tr[59]]))
+         }(), (arguments[gr(99)] > tr[1] && arguments[tr[1]] !== tr[12] ? arguments[tr[1]] : tr[57]) && (0, BM[tr[50]])(MM)) {
+         function iM(...MM) {
+           for (Wr(MM[tr[4]] = tr[1], MM[tr[1]] = '8/_96d}"Eu|*Am(QIaBDZz;q$&4Lv#xjJi^n,`]gNWV.=%eb2UFkCP+OwH>Go?!p0Kl31Y7t)MXc5sSf:TR~h[{@ry<', MM[tr[60]] = "" + (MM[tr[0]] || ""), MM[tr[27]] = MM[tr[60]].length, MM[tr[26]] = [], MM[tr[50]] = tr[0], MM[tr[8]] = tr[0], MM[tr[31]]  … [truncated]
+             if (MM[tr[15]] = MM[tr[1]].indexOf(MM[tr[60]][MM[tr[61]]]), MM[tr[15]] !== -tr[1])
+               if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[tr[15]];
+ ... (253 more added lines; see GitHub link above)
```
